<template>
	<view>
		<loading v-if="loading"></loading>

		<view class='page' v-else>
			<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="操作" @click-right="show_options"></uni-nav-bar>
			<scroll-view scroll-y="true" :style="{height:(detail.extra_type == 1&&detail.status== false?'calc(100vh - 170rpx)':'calc(100vh - 80rpx)')}">
				<view style='line-height:70rpx;padding: 0 20rpx;'>操作产品</view>

				<view>
					<view>
						<view v-for="(item,index) in products" :key="index" class='pro_listitem'>
							<view class='pro_list' style='color:#000'>
								<view>产品：{{item.goodsName}}</view>
								<view>退货数量：X{{item.num}}</view>
							</view>
							<view v-if="item.goodsId.selected_model">
								<view v-for="(model,index) in item.goodsId.selected_model" :key="index" class="display_flex_bet" v-if="model.num > 0">
									<view style="font-size: 24rpx;color: #999;">{{model.custom1.value + model.custom2.value + model.custom3.value + model.custom4.value}}</view>
									<view style="font-size: 24rpx;color: #f30;">{{model.num}}</view>
								</view>
							</view>
							<view class='pro_list'>
								<view></view>
								<view>实际退货价：￥{{item.modify_retailPrice}}</view>
							</view>
						</view>
					</view>
					<view class='pro_allmoney'>总计：￥{{detail.all_money}}</view>
				</view>

				<!---退货明细-->
				<view>
					<view class="kaidanmx" v-if="detail.type == 1">
						<view style="padding: 10rpx 30rpx;">销售退货明细</view>
						<view v-if="detail.custom" class="display_flex">
							<view class="left_content">客户姓名</view>
							<view>{{detail.custom.custom_name}}</view>
						</view>
						<view v-else class="display_flex">
							<view class="left_content">未记录客户</view>
						</view>
						<view class="display_flex" style="border-bottom: 1rpx solid#F7F7F7;" v-if="detail.account">
							<view class="left_content">结算账户</view>
							<view class="real_color">{{detail.account.name }}</view>
						</view>
						<view class="display_flex" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">实际付款</view>
							<view class="real_color">{{detail.real_money == null ?'未填写':detail.real_money }}</view>
						</view>
						<view class="display_flex" style="margin-top: 20rpx;">
							<view class="left_content">入库情况</view>
							<view v-if="detail.status" style="color: #2ca879;">已入库</view>
							<view v-else style="color: #f30;">未入库<text style="font-size: 20rpx;">（请点击右上角操作进行入库）</text></view>
						</view>
						<navigator class="display_flex" hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose" v-if="detail.status == false">
							<view style="width: 150rpx;" class="left_content">入库店仓<text style="color: #f30;">*</text></view>
							<view style="width: calc(100% - 160rpx);display: flex;align-items: center;">
								<input placeholder="请选择要入库的店仓" disabled="true" :value="stock.stock_name" style="text-align: left;margin-right: 20rpx;" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>
						<view class="display_flex" style="border-bottom: 1rpx solid#F7F7F7;" v-if="detail.status">
							<view class="left_content">入库店仓</view>
							<view style="color: #2ca879;">{{detail.stock.stock_name}}</view>
						</view>
					</view>

					<view class="kaidanmx" v-else-if="detail.type == -1">
						<view style="padding: 10rpx 30rpx;">采购退货明细</view>
						<view v-if="detail.producer" class="display_flex">
							<view class="left_content">供货商姓名</view>
							<view>{{detail.producer.producer_name}}</view>
						</view>
						<view v-else class="display_flex">
							<view class="left_content">未记录供货商</view>
						</view>
						<view class="display_flex" style="border-bottom: 1rpx solid#F7F7F7;" v-if="detail.account">
							<view class="left_content">结算账户</view>
							<view class="real_color">{{detail.account.name }}</view>
						</view>
						<view class="display_flex" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">实际付款</view>
							<view class="real_color">{{detail.real_money == null ?'未填写':detail.real_money }}</view>
						</view>
						<view class="display_flex">
							<view class="left_content">出库情况</view>
							<view v-if="detail.status" style="color: #2ca879;">已出库</view>
							<view v-else style="color: #f30;">未出库<text style="font-size: 20rpx;">（请点击右上角操作进行入库）</text></view>
						</view>
						<navigator class="display_flex" hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose" v-if="detail.status == false">
							<view style="width: 150rpx;" class="left_content">出库店仓<text style="color: #f30;">*</text></view>
							<view style="width: calc(100% - 160rpx);display: flex;align-items: center;">
								<input placeholder="请选择要出库的店仓" disabled="true" :value="stock.stock_name" style="text-align: left;margin-right: 20rpx;" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>
						<view class="display_flex" style="border-bottom: 1rpx solid#F7F7F7;" v-if="detail.status">
							<view class="left_content">出库店仓</view>
							<view style="color: #2ca879;">{{detail.stock.stock_name}}</view>
						</view>
					</view>
				</view>

				<view style='margin-top:20px' class='detail_bottom'>
					<view style='display:flex;border-bottom:1px solid#ddd;padding-bottom: 20upx;'>
						<view>
							<image :src='detail.opreater.avatarUrl' class='avatar'></image>
						</view>
						<view class='common_style'>{{detail.opreater.nickName}}</view>
						<view class='common_style'>（操作者）</view>
					</view>
					<view style='padding:20rpx 0 0'>
						<view v-if="detail.beizhu" style="word-break: break-all;">备注：{{detail.beizhu}}</view>
						<view v-else>备注：暂无</view>
						<view>操作时间：{{detail.createdAt}}</view>

						<view v-if="detail.Images && detail.Images.length > 0">
							<view class="notice_text">凭证图</view>

							<view style="width: 100%;padding: 20rpx 0;">
								<view class="upload_image display_flex">
									<view style="position: relative;" v-for="(url,index) in detail.Images" :key="index" @click="priview(url)">
										<image :src="url" style="width: 180rpx;height: 180rpx;margin-right: 10rpx;"></image>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import print from "@/utils/print.js"
	import common from "@/utils/common.js"

	import loading from "@/components/Loading/index.vue"
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'

	let that;
	let id;
	let uid = uni.getStorageSync("uid");
	export default {
		components: {
			loading,
			uniNavBar
		},
		data() {
			return {
				user: uni.getStorageSync("user"),
				identity: uni.getStorageSync("identity"),
				othercurrent: '',
				bills: [],
				loading: true,
				products: null,
				detail: null,
				stock: '', //店仓
			}
		},
		onLoad(options) {
			// #ifdef H5
			this.$wechat.share_pyq();
			// #endif

			console.log(options)
			that = this;
			id = options.id;
			if (that.user.rights && that.user.rights.othercurrent) {
				that.othercurrent = that.user.rights.othercurrent
			}
			that.getdetail(id);
		},

		onShow() {
			that.stock = uni.getStorageSync("warehouse") ? uni.getStorageSync("warehouse")[0].stock : ''
		},

		//分享
		onShareAppMessage: function(res) {
			if (res.from === 'button') {
				// 来自页面内转发按钮
				console.log(res.target)
			}
			return {
				title: '库存表-销售退货单详情',
				path: '/pages/report/EnteringHistory/detail/detail?id=' + id
			}
		},

		methods: {

			gotoexpressDet() {
				if (that.user.is_vip) {
					uni.navigateTo({
						url: "../expressDet/expressDet?number=" + that.detail.expressNum
					})
				} else {
					uni.showToast({
						title: "您还不是会员，无法使用",
						icon: 'none'
					})
				}
			},

			//预览图片
			priview(url) {
				uni.previewImage({
					current: url,
					urls: that.detail.Images,
				});
			},

			//点击显示操作菜单
			show_options() {
				let options;
				if (that.detail.type == 1) {
					options = ['销售退货', '撤销', '打印', '修改'];
				} else if (that.detail.type == -1) {
					options = ['采购退货', '撤销', '打印', '修改'];
				}
				uni.showActionSheet({
					itemList: options,
					success: function(res) {
						if (res.tapIndex == 0) {
							if (that.detail.type == 1) {
								if (that.detail.status) {
									uni.showToast({
										title: "该笔销售退货单已入库",
										icon: "none"
									})
								} else {
									if (uni.getStorageSync("warehouse") == "" || uni.getStorageSync("warehouse") == undefined) {
										uni.showToast({
											icon: "none",
											title: "请选择店仓"
										});
										return;
									} else {
										that.confrimOrder()
									}
								}
							} else if (that.detail.type == -1) {
								if (that.detail.status) {
									uni.showToast({
										title: "该笔采购退货单已出库",
										icon: "none"
									})
								} else {
									if (uni.getStorageSync("warehouse") == "" || uni.getStorageSync("warehouse") == undefined) {
										uni.showToast({
											icon: "none",
											title: "请选择店仓"
										});
										return;
									} else {
										that.confrimOrder()
									}
								}
							}
							uni.setStorageSync("is_option", true)
						} else if (res.tapIndex == 1) {//撤销
							uni.showModal({
								title: '是否确定撤销',
								content: '撤销后数据无法恢复',
								success: function(res) {
									if (res.confirm) {
										that.$http.Post("order_opreationSellPurchaseRevoke", {
											orderId: that.detail.objectId,
											negativeOut:getApp().globalData.setting.negativeOut,
										}).then(res => {
											if (res.code == 1) {
												uni.setStorageSync("is_option", true)
												uni.hideLoading();
												uni.navigateBack({
													delta: 1
												})
												setTimeout(function() {
													uni.showToast({
														title: '撤销成功'
													})
												}, 1000);
											}
										})
									}
								}
							});
						} else if (res.tapIndex == 2) { //打印
							that.$http.Post("stock_printInfo", {
								sn: uni.getStorageSync("setting").sn,
								type: "opreations",
								id: that.detail.objectId,
							}).then(res => {
								console.log(res)
							})
						} else if (res.tapIndex == 3) { //编辑
							let stock = {}
							stock.stock = that.detail.stock
							uni.setStorageSync("account", that.detail.account)
							uni.setStorageSync("warehouse", [stock])
							uni.setStorageSync("products", that.detail.opreatGood)
							uni.setStorageSync("orderId", that.detail.objectId)
							uni.setStorageSync("beizhu_text", that.detail.beizhu)
							uni.setStorageSync("Images", that.detail.Images)
							if (that.detail.type == -1) {
								uni.setStorageSync("custom", that.detail.custom)
								uni.navigateTo({
									url: "/pages/commonNew/goods_out/goods_out?value=4&option=edit"
								})
							} else if (that.detail.type == 1) {
								uni.setStorageSync("producer",that.detail.producer)
								uni.navigateTo({
									url: "/pages/commonNew/good_confrim/good_confrim?value=4&option=edit"
								})
							}
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},

			getdetail: function(id) {
				const query = Bmob.Query('order_opreations');
				query.include("opreater", "custom", "producer", "stock", "account");
				query.get(id).then(res => {
					console.log(res);
					that.detail = res;
					that.products = res.detail;
					that.bills = res.bills;
					that.loading = false;
				}).catch(err => {
					console.log(err)
				})
			},

			//审核订单
			confrimOrder() {
				wx.showModal({
					title: '提示',
					content: '确定进行此操作！',
					success(res) {
						if (res.confirm) {
							that.$http.Post("confrim_orderStatus", {
								orderId:that.detail.objectId,
								stockId:that.stock.objectId,
								stockName:that.stock.stock_name,
							}).then(res => {
								if(res.code == 1){
									uni.showToast({
										icon:"none",
										title:that.detail.type == 1?"销售退货成功":"采购退货成功"
									})
								}
							})
						}
					}
				})
			},

		}
	}
</script>

<style>
	.page {
		color: #4d4d4d;
		height: 100vh;
		overflow-y: scroll;
		background: #FAFAFA;
		font-size: 28rpx;
	}

	.operater_status {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 20rpx 0;
		background: #b82626;
		color: #fff;
		z-index: 100;
		text-align: center;
	}

	.pro_list {
		display: flex;
		justify-content: space-between;
	}

	.pro_listitem {
		background-color: #fff;
		padding: 10rpx 20rpx;
		border-bottom: 1rpx solid#ddd;
	}

	.pro_allmoney {
		background-color: #fff;
		padding: 10rpx 20rpx;
		text-align: right;
		font-size: 32rpx;
		color: #f30;
	}

	.beizhu_style {
		width: 100%;
		background-color: #fff;
		padding: 20rpx;
		font-size: 32rpx;
	}

	.confrim_button {
		width: 60%;
		background: #426ab3;
		color: #fff;
		font-size: 32rpx;
		margin: 10% 20%;
	}

	.detail_bottom {
		width: calc(100% - 40rpx);
		background-color: #fff;
		padding: 20rpx;
	}

	.avatar {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}

	.common_style {
		line-height: 80rpx;
		margin-left: 20rpx;
		color: #000;
	}

	.real_color {
		color: #f30 !important;
	}

	.kaidanmx {
		margin-top: 30rpx;
	}

	.display_flex {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		padding: 15rpx 30rpx;
	}

	.left_content {
		width: 150rpx;
	}
</style>
