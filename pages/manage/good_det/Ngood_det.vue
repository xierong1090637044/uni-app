<template>
	<view class="page">
		<scroll-view scroll-y="true" style="height: calc(100vh - 103rpx);">
			<view class="display_flex_bet frist" style="background: #fff;padding: 20rpx 30rpx;">
				<view >
					<image v-if="product.goodsIcon" :src="product.goodsIcon" style="width: 100rpx;height: 100rpx;" mode="aspectFit"></image>
					<image v-else src="/static/goods-default.png" style="height: 100rpx;width: 100rpx;" mode="aspectFit"></image>
				</view>
				
				<view style="width: calc(100% - 120rpx);">
					<view style="color: #3d3d3d;font-weight: bold;">{{product.goodsName}}</view>
					<view class="display_flex_bet">
						<view class="noticeText">成本价: {{product.costPrice}}</text></view>
						<view class="noticeText">零售价: {{product.retailPrice}}</text></view>
					</view>
					<view class="display_flex_bet">
						<view class="noticeText" v-if="product.all_reserve">库存:{{product.all_reserve}}</text></view>
					</view>
					
				</view>
			</view>
			
			<view style="margin: 30rpx 0;">
				<uni-segmented-control :current="current" :values="items" style-type="button" active-color="#426ab3" @clickItem="onClickItem" />
			</view>
			
			<GoodDet :product="product" v-if="current == 0"></GoodDet>
			<!--采购情况-->
			<productPurchase v-else-if="current == 1 && product" :productId="productId"></productPurchase>
		</scroll-view>
		
		<goodDetBottom :product="product" @isChooseStock = "isRealationNew = true"></goodDetBottom>
	</view>

</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from "@/utils/common.js"
	
	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';
	import GoodDet from '@/components/GoodDet.vue';//产品详情
	import productPurchase from '@/components/productPurchase.vue';//采购详情
	import goodDetBottom from '@/components/goodDetBottom.vue';//底部操作栏

	let that;
	let uid;
	export default {
		components: {
			uniSegmentedControl,
			GoodDet,
			goodDetBottom,
			productPurchase
		},
		data() {
			return {
				items: ['产品详情', '进货情况','销售情况'],
				current: 1,
				
				user: uni.getStorageSync("user"),
				badnum: {
					num: '',
					desc: '',
				},
				bad_numshow: false,
				
				product: {},
				selected_item: '', //选择的产品
				isRealationNew:false,
				productId:'',
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync("uid");
			uni.removeStorageSync("now_model")
			
			// #ifdef H5
			this.$wechat.share_pyq();
			// #endif
			that.productId = options.id
			that.getDetail_byId(options.id, options.type)
		},

		onShow() {
			if (uni.getStorageSync("warehouse") && that.isRealationNew) {
				let thisStock = uni.getStorageSync("warehouse")
				uni.showModal({
					title: '提示',
					content: '是否将该产品添加到' + thisStock[0].stock.stock_name + "这个仓库",
					success: function(res) {
						if (res.confirm) {
							const query = Bmob.Query("Goods");
							query.equalTo("userId", "==", uid);
							query.equalTo("header", "==", that.product.objectId);
							query.equalTo("stocks", "==", thisStock[0].stock.objectId);
							query.find().then(res => {
								console.log(res)
								if (res.length == 0) {
									common.upload_good_withNoCan(that.product, thisStock[0].stock,0).then(res => {
										if (res[0]) {
											uni.removeStorageSync("warehouse")
											uni.showToast({
												title: "关联成功",
												icon: 'none'
											})
											that.getDetail_noId()
										}
									})
								} else {
									uni.showToast({
										title: "该仓库已有此产品",
										icon: 'none'
									})
								}
							});

						} else if (res.cancel) {
							uni.removeStorageSync("warehouse")
						}
					},
				})
			}
		},

		//分享
		onShareAppMessage: function(res) {
			if (res.from === 'button') {
				// 来自页面内转发按钮
				console.log(res.target)
			}
			return {
				title: '库存表-' + that.product.goodsName + '的详情',
				path: '/pages/manage/good_det/Ngood_det?id=' + that.product.objectId + '&type="false"'
			}
		},

		methods: {
			
			onClickItem(value){
				that.current = value
			},

			//删除商品
			delete_singlegood(objectId) {
				uni.showModal({
					title: '提示',
					content: '是否删除该商品',
					success: function(res) {
						if (res.confirm) {
							const query = Bmob.Query('Goods');
							query.destroy(objectId).then(res => {
								console.log(res)
								const query1 = Bmob.Query("Goods");
								query1.equalTo("header", "==", that.product.objectId);
								query1.equalTo("order", "==", 1);
								query1.statTo("sum", "reserve");
								query1.find().then(res => {
									//console.log("dasds", res)
									let now_reserve = res[0]._sumReserve
									const query = Bmob.Query('Goods');
									query.set('reserve', now_reserve)
									query.set('id', that.product.objectId)
									query.save().then(res => {
										common.modifyStockType(that.product.objectId)
									})
								})
							}).catch(err => {
								console.log(err)
							})
						}
					}
				});
			},

			//得到产品详情 有id
			getDetail_byId(id, type) {
				let stocks = [];
				uni.showLoading({
					title: "加载中..."
				})
				const query = Bmob.Query('Goods');
				if (type == "false") {
					query.equalTo("objectId", "==", id);
				} else {
					query.equalTo("productCode", "==", id)
				}
				query.equalTo("userId", "==", uid);
				query.include("stocks", "goodsClass", "second_class");
				query.equalTo("order", "==", 0);
				query.find().then(res => {
					//console.log(res)
					let product = res[0];
					let all_reserve = 0;

					uni.setStorageSync("now_product", product);
					
					query.equalTo("userId", "==", uid);
					query.equalTo("status", "!=", -1);
					query.include("stocks", "goodsClass", "second_class");
					query.equalTo("header", "==", product.objectId);
					query.find().then(res => {
						for (let item of res) {
							if (item.order != 0) {
								let stocks_o = {}
								stocks_o.stock_name = item.stocks.stock_name
								stocks_o.objectId = item.stocks.objectId
								stocks_o.reserve = item.reserve.toFixed(uni.getStorageSync("setting").show_float)
								stocks_o.good_id = item.objectId
								stocks_o.now_model = item.models
								item.stocks = stocks_o
								all_reserve += item.reserve
								stocks.push(item.stocks)
							}
						}
						
						//当员工没有查看进价的权限时
						if(that.user.identity == 2&&that.user.rights &&that.user.rights.othercurrent.indexOf("0") !=-1){
							product.costPrice  = 0
						}

						if (product.nousetime) product.nousetime = common.js_date_time(product.nousetime)
						product.all_reserve = all_reserve.toFixed(uni.getStorageSync("setting").show_float);
						product.reserve = all_reserve.toFixed(uni.getStorageSync("setting").show_float);
						product.stocks = stocks
						product.productCode =  (product.productCode) ? product.productCode + "-" + true + "-new" : product.objectId +"-" + false + "-new",
						that.product = product
						uni.hideLoading()
						//console.log(this.product)
					})
				})
			},

			//确认货损
			confrim_badnum() {
				console.log(that.selected_item)
				if (that.badnum.num) {
					const pointer = Bmob.Pointer('_User');
					const poiID = pointer.set(uni.getStorageSync("masterId"));

					const pointer1 = Bmob.Pointer('Goods');
					const poiID1 = pointer1.set(that.selected_item.objectId);

					const product_id = that.selected_item.objectId;
					const last_bad_num = Number(that.selected_item.bad_num ? that.selected_item.bad_num : 0);

					const now_bad_num = last_bad_num + Number(that.badnum.num);

					const query = Bmob.Query('bad_goods');
					query.set("bad_num", that.badnum.num);
					query.set("beizhu_text", that.badnum.desc);
					query.set("operater", poiID);
					query.set("goods", poiID1);
					query.equalTo("order", "!=", 0);
					query.save().then(res => {

						const query = Bmob.Query('Goods');
						query.set('id', product_id) //需要修改的objectId
						query.set('bad_num', Number(now_bad_num))
						query.save().then(res => {
							that.bad_numshow = false
							uni.showToast({
								title: '记录成功',
							});
						})
						that.getDetail_noId()
					})
				} else {
					uni.showToast({
						title: "请输入货损数量",
						icon: "none"
					})
				}
			},

			//记录货损点击
			add_badnum(item) {
				that.bad_numshow = true
				that.selected_item = item
			},
			
		},
	}
</script>

<style lang="scss">
	.opion_item {
		color: #118FFF;
		font-weight: bold;
		padding: 0 20rpx 0 0;
	}
	
	.frist{
		.noticeText{
			color: #5d5d5d;
			font-size: 24rpx;
			font-weight: bold;
		}
	}

	.page {
		height: 100vh;
		overflow: scroll;
		font-size: 28rpx;
	}

	.popup_content {
		width: 500rpx;
	}

	.popup_button {
		background: #426ab3;
		color: #fff;
	}
</style>
