<template>
	<view class="page">
		<loading v-if="loading"></loading>

		<view v-else>
			<view class="frist">
				<image v-if="product.goodsIcon" :src="product.goodsIcon" style="width: 100%;height: 100%;" mode="aspectFit"></image>
				<image v-else src="/static/goods-default.png" style="height: 100%;" mode="aspectFit"></image>
			</view>

			<view class="second">
				<view class="second_one">
					<view style="color: #3d3d3d;font-weight: bold;font-size: 34rpx;">{{product.goodsName}}</view>
					<view v-if="user.rights&&user.rights.othercurrent[0] != '0'"></view>
					<view v-else>成本价: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.costPrice}}</text></view>
					<view>零售价: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.retailPrice}}</text></view>
				</view>

				<view class="second_one">
					<view>品牌: <text class="second_right_text">{{product.producer?product.producer:"未填写"}}</text></view>
					<view>型号: <text class="second_right_text">{{product.packageContent?product.packageContent:"未填写"}}*{{product.packingUnit?product.packingUnit:"未填写"}}</text></view>
					<view>简介: <text class="second_right_text">{{product.product_info?product.product_info:"未填写"}}</text></view>
					<view>存放位置: <text style="margin-left: 20rpx;color: #3D3D3D;">{{product.position?product.position:"未填写"}}</text></view>

					<view v-if="product.goodsClass && product.goodsClass.class_text">
						所属分类
						<text style="margin-left: 20rpx;color: #3D3D3D;">{{product.goodsClass.class_text}}</text>
						<text style="color: #3D3D3D;" v-if="product.second_class && product.second_class.class_text">
							<text style="color: #2ca879;">-></text>{{product.second_class.class_text}}
						</text>
					</view>

					<view class="display_flex_bet">
						<view>预警库存: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.warning_num ?product.warning_num:0}}</text></view>
						<view style="margin-left: 40rpx;">最大库存: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.max_num ?product.max_num:0}}</text></view>
					</view>

					<navigator class="display_flex_bet" hover-class="none" :url="'/pages/manage/good_det/bad_history/bad_history?id='+product.objectId">
						<view>货损数量: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.bad_num ?product.bad_num:0}}</text></view>
						<fa-icon type="angle-right" size="20" color="#999" />
					</navigator>

					<view v-if="product.nousetime">过期时间: <text style="margin-left: 20rpx;color: #3D3D3D;">{{product.nousetime}}</text></view>
					<view>创建时间: <text style="margin-left: 20rpx;color: #3D3D3D;">{{product.createdAt}}</text></view>

					<view v-if="product.productCode">条码: <text class="second_right_text">{{product.productCode}}</text></view>

					<view class="display_flex">
						<navigator hover-class="none" :url="'custom_detail/custom_detail?id='+product.objectId" class="opion_item">客户统计</navigator>
						<navigator hover-class="none" :url="'../operations/operations?objectId='+product.objectId+'&goodsName='+product.goodsName"
						 class="opion_item">此产品的操作记录</navigator>
					</view>
					<view class="display_flex">
						<view class="opion_item" @click='print_info(product)'>打印</view>
						<view class="opion_item" @click='modify(product)'>编辑</view>
						<view class="opion_item" @click='add_badnum(product)'>记录货损</view>
						<view class="opion_item" @click='delete_good(product.objectId)'>全部删除</view>
						<navigator class="opion_item" url="/pages/manage/warehouse/warehouse?type=choose" hover-class="none">关联新的仓库</navigator>
					</view>

				</view>

				<view class="second_one display_flex_bet">
					<view>总库存: <text class="second_right_text">{{product.all_reserve}}</text></view>
					<view class="display_flex">
						<text style="margin-right: 10rpx;">分库存</text>
						<switch @change="change_state" :checked="get_reserve_checked" />
					</view>
				</view>

				<view v-if="get_reserve_checked" class="second_one" v-for="(item,index) in product.stocks" :key="index">
					<view class="display_flex_bet">
						<view>存放仓库: <text style="margin-left: 20rpx;color: #3D3D3D;">{{item.stock_name?item.stock_name:"未填写"}}</text></view>
						<view class="opion_item" @click='delete_singlegood(item.good_id)'>删除</view>
					</view>

					<view>当前库存: <text style="color: #FD2E32;margin-left: 20rpx;">{{item.reserve}}</text></view>
					<view v-if="item.now_model" style="color: #3D3D3D;">
						<view v-for="(model,index) in item.now_model" :key="index" class="display_flex_bet">
							<view style="font-size: 24rpx;">{{model.custom1.value}}{{model.custom2.value}}{{model.custom3.value}}{{model.custom4.value}}</view>
							<view style="color: #FD2E32;font-size: 24rpx;">库存:{{model.reserve}}</view>
						</view>
					</view>
					
				</view>
				
				<view class="second_one">
					<view style="margin: 0 0 20rpx;">产品二维码</view>
					<view style="padding: 20rpx;background: #fff;text-align: center;">
						<tki-qrcode cid="qrcode" ref="qrcode" :val="select_qrcode" :size="100" :loadMake="true" :usingComponents="true"
						 unit="rpx" @result="qrR" />
					</view>
				</view>
			</view>

			<uni-popup :show="bad_numshow" type="top" mode="fixed" @hidePopup="bad_numshow = false" class="popup">
				<view class="popup_content">
					<view class="popup_title" style="text-align: center;margin-bottom: 20rpx;">记录货损</view>
					<view style="margin-bottom: 20rpx;"><input placeholder="请输入该产品的货损数量" class="popup_input" v-model="badnum.num" /></view>
					<view style="margin-bottom: 20rpx;"><input placeholder="请输入备注" class="popup_input" v-model="badnum.desc" /></view>
					<view><button class="popup_button" @click="confrim_badnum">确认</button></view>
				</view>
			</uni-popup>

		</view>
	</view>

</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import print from "@/utils/print.js"
	import common from "@/utils/common.js"
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue'
	import uniPopup from "@/components/uni-popup/uni-popup.vue"

	let that;
	let uid;
	export default {
		components: {
			uniPopup,
			faIcon,
			tkiQrcode
		},
		data() {
			return {
				user: uni.getStorageSync("user"),
				badnum: {
					num: '',
					desc: '',
				},
				bad_numshow: false,
				loading: true,
				select_qrcode: '',
				get_reserve_checked: true, //分库存显示控制
				product: {},
				is_show: false, //二维码显示
				bar_code_show: false, //条形码显示
				selected_item: '', //选择的产品
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync("uid");
			uni.removeStorageSync("now_model")
			uni.removeStorageSync("warehouse")
			
			console.log(options)
			// #ifdef H5
			this.$wechat.share_pyq();
			// #endif

			if (options.id) {
				that.getDetail_byId(options.id, options.type)
			} else {
				that.getDetail_noId()
			}
		},

		onShow() {
			if (uni.getStorageSync("warehouse")) {
				let thisStock = uni.getStorageSync("warehouse")
				uni.showModal({
					title: '提示',
					content: '是否将该产品添加到' + thisStock[0].stock.stock_name + "这个仓库",
					success: function(res) {
						if (res.confirm) {
							const query = Bmob.Query("NGoods");
							query.equalTo("userId", "==", uid);
							query.equalTo("header", "==", that.product.objectId);
							query.equalTo("stocks", "==", thisStock[0].stock.objectId);
							query.find().then(res => {
								console.log(res)
								if (res.length == 0) {
									that.upload_good_withNoCan(that.product,thisStock[0].stock).then(res=>{
										if(res[0]){
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
				path: '/pages/manage/good_det/good_det?id=' + that.product.objectId + '&type="false"'
			}
		},

		methods: {

			upload_good_withNoCan(good, stock) {
				return new Promise((resolve, reject) => {
					let uid = uni.getStorageSync("uid");
					const pointer = Bmob.Pointer('_User')
					const userid = pointer.set(uid)
					const pointer1 = Bmob.Pointer('stocks')
					const p_stock_id = pointer1.set(stock.objectId) //仓库的id关联

					const pointer2 = Bmob.Pointer('NGoods')
					const p_good_id = pointer2.set(good.objectId) //仓库的id关联

					const query = Bmob.Query('NGoods');
					query.set("goodsName", good.goodsName)
					query.set("costPrice", good.costPrice)
					query.set("retailPrice", good.retailPrice)
					if (good.models) query.set("models", good.models)
					query.set("reserve", 0)
					query.set("stocks", p_stock_id)
					query.set("header", p_good_id)
					query.set("order", 1)
					query.set("userId", userid)
					query.save().then(res => {
						console.log(res)
						resolve([true, res])
					}).catch(err => {
						console.log(err)
					})

				})
			},

			//删除商品
			delete_singlegood(objectId) {
				uni.showModal({
					title: '提示',
					content: '是否删除该商品',
					success: function(res) {
						if (res.confirm) {
							const query = Bmob.Query('NGoods');
							query.destroy(objectId).then(res => {
								console.log(res)
								const query1 = Bmob.Query("NGoods");
								query1.equalTo("header", "==", that.product.objectId);
								query1.equalTo("order", "==", 1);
								query1.statTo("sum", "reserve");
								query1.find().then(res => {
									console.log("dasds", res)
									let now_reserve = res[0]._sumReserve
									const query = Bmob.Query('NGoods');
									query.set('reserve', now_reserve)
									query.set('stocktype', (now_reserve > that.product.warning_num) ? 1 : 0)
									query.set('id', that.product.objectId)
									query.save().then(res => {
										that.getDetail_noId()
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
				const query = Bmob.Query('NGoods');
				if (type == "false") {
					query.equalTo("objectId", "==", id);
				} else {
					query.equalTo("productCode", "==", id)
				}
				query.equalTo("userId", "==", uid);
				///query.equalTo("order", "!=", 1);
				query.find().then(res => {
					console.log(res)
					this.product = res[0];
					let product = res[0];
					let all_reserve = 0;

					uni.setStorageSync("now_product", product)
					query.equalTo("userId", "==", uid);
					query.equalTo("status", "!=", -1);
					query.include("stocks", "goodsClass", "second_class");
					query.equalTo("goodsName", "==", product.goodsName);
					query.find().then(res => {
						for (let item of res) {
							if (item.order != 0) {
								let stocks_o = {}
								stocks_o.stock_name = item.stocks.stock_name
								stocks_o.objectId = item.stocks.objectId
								stocks_o.reserve = item.reserve.toFixed(uni.getStorageSync("setting").show_float)
								stocks_o.good_id = item.objectId
								stocks_o.now_model = item.models
								stocks_o.qrcode = (product.productCode) ? product.productCode : item.objectId + "-" + false
								item.stocks = stocks_o
								all_reserve += item.reserve
								stocks.push(item.stocks)
							}
						}

						this.product = product;
						if (this.product.nousetime) this.product.nousetime = common.js_date_time(this.product.nousetime)
						this.product.all_reserve = all_reserve.toFixed(uni.getStorageSync("setting").show_float);
						this.product.reserve = all_reserve.toFixed(uni.getStorageSync("setting").show_float);
						this.product.stocks = stocks
						that.select_qrcode = (product.productCode) ? product.productCode : product.objectId + "-" + false
						that.loading = false
						uni.hideLoading()
						console.log(this.product)
					})
				})
			},

			//得到产品详情没有id
			getDetail_noId() {
				let stocks = [];
				let product = uni.getStorageSync("now_product");
				let all_reserve = 0;

				uni.showLoading({
					title: "加载中..."
				})
				const query = Bmob.Query('NGoods');
				query.equalTo("userId", "==", uid);
				query.equalTo("status", "!=", -1);
				query.include("stocks", "goodsClass", "second_class");
				query.equalTo("goodsName", "==", product.goodsName);
				query.find().then(res => {
					for (let item of res) {
						if (item.order != 0) {
							let stocks_o = {}
							stocks_o.stock_name = item.stocks.stock_name
							stocks_o.objectId = item.stocks.objectId
							stocks_o.reserve = item.reserve.toFixed(uni.getStorageSync("setting").show_float)
							stocks_o.good_id = item.objectId
							stocks_o.now_model = item.models
							stocks_o.qrcode = (product.productCode) ? product.productCode : item.objectId + "-" + false
							item.stocks = stocks_o
							all_reserve += item.reserve
							stocks.push(item.stocks)
						}
					}

					this.product = product;
					if (this.product.nousetime) this.product.nousetime = common.js_date_time(this.product.nousetime)
					this.product.all_reserve = all_reserve.toFixed(uni.getStorageSync("setting").show_float);
					this.product.reserve = all_reserve.toFixed(uni.getStorageSync("setting").show_float);
					this.product.stocks = stocks
					that.select_qrcode = (product.productCode) ? product.productCode : product.objectId + "-" + false
					that.loading = false
					uni.hideLoading()
					uni.setStorageSync("now_product", this.product)
					console.log(this.product)
				})
			},

			//确认货损
			confrim_badnum() {
				console.log(that.selected_item)
				if (that.badnum.num) {
					const pointer = Bmob.Pointer('_User');
					const poiID = pointer.set(uni.getStorageSync("masterId"));

					const pointer1 = Bmob.Pointer('NGoods');
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

						const query = Bmob.Query('NGoods');
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

			//生成二维码
			show_qrcode(item) {
				that.is_show = true,
					that.select_qrcode = (item.productCode) ? item.productCode : item.objectId + "-" + false
			},

			//分库存的switch点击
			change_state(e) {
				that.get_reserve_checked = e.detail.value
			},

			//商品信息点击
			print_info(item) {
				print.print_goodDet(item)
			},

			//产品信息修改点击
			modify() {
				uni.navigateTo({
					url: '../good_add/good_add?type=more'
				});
			},

			//二维码路径
			qrR(res) {
				this.src = res
			},

			bcR(res) {
				this.src = res
			},

			saveBccode() {
				this.$refs.barcode._saveCode()
			},

			//点击条形码保存
			saveQrcode() {
				this.$refs.qrcode._saveCode()
			},

			//删除商品
			delete_good(objectId) {
				let uid = uni.getStorageSync("uid")
				uni.showModal({
					title: '提示',
					content: '是否删除该商品',
					success: function(res) {
						if (res.confirm) {

							uni.setStorageSync("is_add", true)

							const query = Bmob.Query('NGoods');

							query.destroy(objectId).then(res => {
								const query = Bmob.Query('NGoods');
								// 单词最多删除50条
								query.equalTo("header", "==", objectId);
								query.equalTo("userId", "==", uid);
								query.find().then(todos => {
									todos.destroyAll().then(res => {
										// 成功批量修改
										console.log(res, 'ok')
										uni.navigateBack({
											delta: 1
										})

										setTimeout(function() {
											uni.showToast({
												title: "删除成功"
											})
										}, 1000)

									}).catch(err => {
										console.log(err)
									});
								})

							}).catch(err => {
								console.log(err)
							})
						}
					}
				});

			},

		},
	}
</script>

<style>
	.opion_item {
		color: #118FFF;
		font-weight: bold;
		padding: 0 20rpx 0 0;
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

	.frist {
		text-align: center;
		width: 100%;
		height: 300rpx;
		padding: 30rpx 0;
		background: #fff;
	}

	.second {
		padding: 0 30rpx;
		border-top: 1rpx solid#DDDDDD;
		background: #fff;
	}

	.second_one {
		padding: 20rpx 0;
		border-bottom: 1rpx solid#DDDDDD;
		line-height: 60rpx;
		font-size: 26rpx;
		color: #999999;
	}

	.second_right_text {
		color: #3d3d3d;
		margin-left: 20rpx;
	}

	.thrid {
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 30rpx;
		font-size: 28rpx;
		border-bottom: 1rpx solid#DDDDDD;
		background: #fff;
		border-bottom: 1px solid#DDDDDD;
	}

	.four {
		display: flex;
		justify-content: space-around;
		margin: 30rpx 0 60rpx;
	}

	.qrimg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #426ab3;
		text-align: center;
	}
</style>
