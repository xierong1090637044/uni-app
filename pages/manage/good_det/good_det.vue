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
					<view v-else>成本价: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.costPrice?product.costPrice:"未填写"}}</text></view>
					<view>零售价: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.retailPrice ?product.retailPrice:"未填写"}}</text></view>
				</view>

				<view class="second_one">
					<view>品牌: <text class="second_right_text">{{product.producer?product.producer:"未填写"}}</text></view>
					<view>型号: <text class="second_right_text">{{product.packageContent?product.packageContent:"未填写"}}*{{product.packingUnit?product.packingUnit:"未填写"}}</text></view>
					<view>简介: <text class="second_right_text">{{product.product_info?product.product_info:"未填写"}}</text></view>
					<view>存放位置: <text style="margin-left: 20rpx;color: #3D3D3D;">{{product.position?product.position:"未填写"}}</text></view>
					<view v-if="product.nousetime">过期时间: <text style="margin-left: 20rpx;color: #3D3D3D;">{{product.nousetime}}</text></view>
					<view v-if="product.goodsClass && product.goodsClass.class_text">所属一级分类 <text style="margin-left: 20rpx;color: #3D3D3D;">{{product.goodsClass.class_text}}</text></view>
					<view v-if="product.second_class && product.second_class.class_text">所属二级分类 <text style="margin-left: 20rpx;color: #3D3D3D;">{{product.second_class.class_text}}</text></view>
				</view>

				<view class="second_one display_flex_bet">
					<view>总库存: <text class="second_right_text">{{product.all_reserve}}</text></view>
					<view class="display_flex">
						<text style="margin-right: 10rpx;">分库存</text>
						<switch @change="change_state" :checked="get_reserve_checked" />
					</view>
				</view>

				<view v-if="get_reserve_checked" class="second_one" v-for="(item,index) in product.stocks" :key="index">
					<view>存放仓库: <text style="margin-left: 20rpx;color: #3D3D3D;">{{item.stock_name?item.stock_name:"未填写"}}</text></view>

					<view>当前库存: <text style="color: #FD2E32;margin-left: 20rpx;">{{item.reserve}}</text></view>
					<view v-if="item.models" style="color: #3D3D3D;">
						<view v-for="(model,index) in item.models" :key="index" class="display_flex_bet">
							<view style="font-size: 24rpx;">{{model.custom1.value}}{{model.custom2.value}}{{model.custom3.value}}{{model.custom4.value}}</view>
							<view style="color: #FD2E32;font-size: 24rpx;">库存:{{model.reserve}}</view>
						</view>
					</view>
					<view>预警数量: <text style="color: #FD2E32;margin-left: 20rpx;">{{item.warning_num ?item.warning_num:0}}</text></view>
					<navigator class="display_flex_bet" hover-class="none" :url="'/pages/manage/good_det/bad_history/bad_history?id='+item.good_id">
						<view>货损数量: <text style="color: #FD2E32;margin-left: 20rpx;">{{item.bad_num ?item.bad_num:0}}</text></view>
						<fa-icon type="angle-right" size="20" color="#999" />
					</navigator>
					<view>条码: <text class="second_right_text">{{item.productCode}}</text></view>

					<view class="display_flex">
						<view class="opion_item" @click="show_qrcode(item)">生成二维码</view>
						<navigator hover-class="none" :url="'custom_detail/custom_detail?id='+item.good_id" class="opion_item">客户统计</navigator>
						<navigator hover-class="none" :url="'../operations/operations?objectId='+item.good_id+'&goodsName='+product.goodsName"
						 class="opion_item">此产品的操作记录</navigator>
					</view>
					<view class="display_flex">
						<view class="opion_item" @click='print_info(item)'>打印</view>
						<view class="opion_item" @click='modify(item)'>编辑</view>
						<view class="opion_item" @click='add_badnum(item)'>记录货损</view>
						<view class="opion_item" @click='delete_good(item.good_id,item.accessory,index)'>删除</view>
					</view>
				</view>

			</view>

			<view class="qrimg" v-if="is_show">
				<view style="text-align: right;margin-right: 20rpx;" @click="is_show = false">
					<fa-icon type="times-circle" size="20" color="#fff"></fa-icon>
				</view>
				<view style="margin-top: 20%;" @tap="saveQrcode">
					<view style="padding: 20rpx;background: #fff;">
						<tki-qrcode cid="qrcode" ref="qrcode" :val="select_qrcode" :size="200" :loadMake="true" :usingComponents="true"
						 unit="rpx" @result="qrR" />
					</view>

					<view style="color: #fff;margin-top: 30rpx;font-size: 32rpx;">产品:{{product.goodsName}}</view>
					<view style="color: #fff;margin-top: 20rpx;font-size: 24rpx;">(点击二维码可下载)</view>
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
	import tkiBarcode from "@/components/tki-barcode/tki-barcode.vue"
	import uniFab from '@/components/uni-fab/uni-fab.vue'
	import uniPopup from "@/components/uni-popup/uni-popup.vue"

	let that;
	let uid;
	export default {
		components: {
			uniPopup,
			faIcon,
			tkiQrcode,
			tkiBarcode,
			uniFab
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

		//分享
		onShareAppMessage: function(res) {
			if (res.from === 'button') {
				// 来自页面内转发按钮
				console.log(res.target)
			}
			return {
				title: '库存表-' + product.goodsName + '的详情',
				path: '/pages/manage/good_det/good_det?id=' + product.objectId + '&type="false"'
			}
		},

		methods: {

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
				query.find().then(res => {
					console.log(res)
					let product = res[0];
					let all_reserve = 0;

					uni.setStorageSync("now_product", product)
					query.equalTo("userId", "==", uid);
					query.equalTo("status", "!=", -1);
					query.include("stocks", "goodsClass", "second_class");
					query.equalTo("goodsName", "==", product.goodsName);
					query.find().then(res => {

						for (let item of res) {
							let stocks_o = {}
							if (item.stocks) {
								stocks_o.stock_name = item.stocks.stock_name
								stocks_o.stock_objectid = item.stocks.objectId
							} else {
								stocks_o.stock_name = ''
								stocks_o.stock_objectid = ''
							}
							stocks_o.reserve = item.reserve.toFixed(uni.getStorageSync("setting").show_float)
							stocks_o.models = item.models
							stocks_o.warning_num = item.warning_num
							stocks_o.bad_num = (item.bad_num) ? item.bad_num : 0
							stocks_o.good_id = item.objectId
							stocks_o.accessory = (item.accessory) ? item.accessory : ''
							stocks_o.productCode = (item.productCode) ? item.productCode : item.objectId + "-" + false
							item.stocks = stocks_o
							all_reserve += item.reserve
							stocks.push(item.stocks)
						}

						this.product = product;
						if (this.product.nousetime) this.product.nousetime = common.js_date_time(this.product.nousetime)
						this.product.all_reserve = all_reserve.toFixed(uni.getStorageSync("setting").show_float);
						this.product.stocks = stocks
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
				const query = Bmob.Query('Goods');
				query.equalTo("userId", "==", uid);
				query.equalTo("status", "!=", -1);
				query.include("stocks", "goodsClass", "second_class");
				query.equalTo("goodsName", "==", product.goodsName);
				query.find().then(res => {

					for (let item of res) {
						let stocks_o = {}
						if (item.stocks) {
							stocks_o.stock_name = item.stocks.stock_name
							stocks_o.stock_objectid = item.stocks.objectId
						} else {
							stocks_o.stock_name = ''
							stocks_o.stock_objectid = ''
						}

						stocks_o.reserve = item.reserve.toFixed(uni.getStorageSync("setting").show_float)
						stocks_o.models = item.models
						stocks_o.warning_num = item.warning_num
						stocks_o.bad_num = (item.bad_num) ? item.bad_num : 0
						stocks_o.good_id = item.objectId
						stocks_o.accessory = (item.accessory) ? item.accessory : ''
						stocks_o.productCode = (item.productCode) ? item.productCode+ "-" + true+"-old" : item.objectId + "-" + false+"-old"
						item.stocks = stocks_o
						all_reserve += item.reserve
						stocks.push(item.stocks)
					}

					this.product = uni.getStorageSync("now_product");
					if (this.product.nousetime) this.product.nousetime = common.js_date_time(this.product.nousetime)
					this.product.all_reserve = all_reserve.toFixed(uni.getStorageSync("setting").show_float);
					this.product.stocks = stocks
					that.loading = false
					uni.hideLoading()
				})
			},

			//确认货损
			confrim_badnum() {
				console.log(that.selected_item)
				if (that.badnum.num) {
					const pointer = Bmob.Pointer('_User');
					const poiID = pointer.set(uni.getStorageSync("masterId"));

					const pointer1 = Bmob.Pointer('Goods');
					const poiID1 = pointer1.set(that.selected_item.good_id);

					const product_id = that.selected_item.good_id;
					const last_bad_num = Number(that.selected_item.bad_num);

					const now_bad_num = last_bad_num + Number(that.badnum.num);

					const query = Bmob.Query('bad_goods');
					query.set("bad_num", that.badnum.num);
					query.set("beizhu_text", that.badnum.desc);
					query.set("operater", poiID);
					query.set("goods", poiID1);
					query.save().then(res => {

						const query = Bmob.Query('Goods');
						query.set('id', product_id) //需要修改的objectId
						query.set('bad_num', now_bad_num)
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
					that.select_qrcode = item.productCode
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
			modify(item) {
				console.log(item)
				let now_product = uni.getStorageSync("now_product")
				now_product.objectId = item.good_id
				now_product.reserve = item.reserve
				now_product.warning_num = (item.warning_num) ? item.warning_num : 0
				now_product.bad_num = (item.bad_num) ? item.bad_num : 0

				uni.showActionSheet({
					itemList: ['编辑产品信息', '编辑产品的库存信息'],
					success: function(res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						if (res.tapIndex == 0) {
							uni.navigateTo({
								url: 'edit_info/edit_info'
							});
							now_product.ids = that.product.stocks
							console.log(that.product.stocks)
							uni.setStorageSync("now_product", now_product)
						} else {
							if (item.stock_name) {
								let warehouse = []
								let stock = {}
								let _stock = {}
								_stock.stock_name = item.stock_name
								_stock.objectId = item.stock_objectid
								stock.stock = _stock
								warehouse.push(stock)
								uni.setStorageSync("warehouse", warehouse)
							}
							uni.navigateTo({
								url: 'edit_stock/edit_stock'
							});

							uni.setStorageSync("now_product", now_product)
						}
					},
				});

			},

			//fab列目点击
			trigger(e) {
				this.content[e.index].active = !e.item.active;
				if (e.index == 0) {
					uni.setStorageSync("now_product", this.product)
					uni.navigateTo({
						url: '../good_add/good_add'
					});
				} else {
					that.delete()
				}
			},

			//点击显示二维码的操作
			showcode_option() {
				uni.showActionSheet({
					itemList: ['二维码', '条形码'],
					success: function(res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						if (res.tapIndex == 0) {
							that.is_show = true
						} else {
							that.bar_code_show = true
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
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
			delete_good(objectId, accessory, index) {
				uni.showModal({
					title: '提示',
					content: '是否删除该商品',
					success: function(res) {
						if (res.confirm) {

							uni.setStorageSync("is_add", true)

							const query = Bmob.Query('Goods');
							query.set('id', objectId) //需要修改的objectId
							query.set('status', -1)
							query.save().then(res => {

								if (accessory) {
									uni.navigateBack({
										delta: 1
									})

									setTimeout(function() {
										uni.showToast({
											title: "删除成功"
										})
									}, 1000)
								} else {
									if (that.product.stocks.length > 1) {
										let next_good = that.product.stocks[index + 1].good_id
										const query = Bmob.Query('Goods');
										query.get(next_good).then(res => {
											console.log(res)
											res.set('accessory', false)
											res.save()
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
										})
									} else {
										uni.navigateBack({
											delta: 1
										})

										setTimeout(function() {
											uni.showToast({
												title: "删除成功"
											})
										}, 1000)
									}

								}


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
