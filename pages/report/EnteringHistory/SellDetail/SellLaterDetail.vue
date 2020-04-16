<template>
	<view>
		<loading v-if="loading"></loading>

		<view class='page' v-else>
			<uni-nav-bar :fixed="true" color="#333333" background-color="#FFFFFF" right-text="操作" @click-right="show_options"></uni-nav-bar>
			<scroll-view scroll-y="true" style="height: calc(100vh - 80rpx);">
				<view style='line-height:70rpx;padding: 0 20rpx;'>操作产品</view>

				<view>
					<view>
						<view v-for="(item,index) in products" :key="index" class='pro_listitem'>
							<view class='pro_list' style='color:#000'>
								<view>产品：{{item.goodsName}}
									<text v-if="(user.rights&&user.rights.othercurrent[0] != '0') || detail.type == -1"></text>
									<text v-else>（成本价：￥{{item.costPrice}}）</text>
								</view>
								<view>数量：X{{item.num}}{{item.packingUnit ||''}}</view>
							</view>
							<view v-if="item.selected_model">
								<view v-for="(model,index) in item.selected_model" :key="index" class="display_flex" v-if="model.num > 0" style="justify-content: space-between;">
									<view style="font-size: 24rpx;color: #999;">{{model.custom1.value + model.custom2.value + model.custom3.value + model.custom4.value}}</view>
									<view style="font-size: 24rpx;color: #f30;">{{model.num}}</view>
								</view>
							</view>

							<view class='pro_list'>
								<view>建议零售价：￥{{item.retailPrice}}</view>
								<view v-if="detail.type == -3">实际卖出价：￥{{item.modify_retailPrice}}</view>
								<view v-else>
									<text v-if="user.rights&&user.rights.othercurrent[0] != '0'">实际进货价：￥0</text>
									<text v-else>实际进货价：￥{{item.modify_retailPrice}}</text>
								</view>
							</view>

						</view>
					</view>
					<view class='pro_allmoney'>总计：￥{{detail.all_money }}</view>
				</view>

				<view v-if="detail.type == -3">
					<view class="kaidanmx">
						<view style="padding: 10rpx 30rpx;">销售订单明细</view>
						<view v-if="detail.custom" class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">客户姓名</view>
							<view>{{detail.custom.custom_name}}</view>
						</view>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">预收款</view>
							<view class="display_flex">
								<view class="real_color">{{detail.haveGetMoney || 0 }}</view>
								<text style="color: #333;font-weight: bold;margin-left: 6rpx;">元</text>
							</view>
						</view>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">其他费用</view>
							<view class="display_flex">
								<view class="real_color">{{detail.otherMoney || 0 }}</view>
								<text style="color: #333;font-weight: bold;margin-left: 6rpx;">元</text>
							</view>
						</view>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">合计应收</view>
							<view class="display_flex">
								<view class="real_color">{{detail.real_money || 0 }}</view>
								<text style="color: #333;font-weight: bold;margin-left: 6rpx;">元</text>
							</view>
						</view>
						<view class="display_flex_bet borderBot" v-if="detail.setDay">
							<view class="left_content">订货时间</view>
							<view>{{detail.setDay.iso.split(" ")[0]}}</view>
						</view>
						<view class="display_flex_bet borderBot" v-if="detail.giveDay">
							<view class="left_content">交货时间</view>
							<view>{{detail.giveDay.iso.split(" ")[0]}}</view>
						</view>
						<view class="display_flex_bet" style="justify-content: space-between;">
							<view>是否已生成销售单<text style="font-size: 20rpx;color: #999;">点击右上角操作可生成</text></view>
							<view v-if="detail.status" class="display_flex">
								<navigator style="color: #2ca879;margin-right: 10rpx;" hover-class="none" :url="'/pages/report/EnteringHistory/SellDetail/SellDetail?id='+detail.orderSellId">已生成</navigator>
								<fa-icon type="angle-right" size="20" color="#2ca879"></fa-icon>
							</view>
							<view v-else style="color: #f30;">未生成</view>
						</view>
					</view>
				</view>

				<view v-if="detail.type == -4">
					<view class="kaidanmx">
						<view style="padding: 10rpx 30rpx;">采购订单明细</view>
						<view v-if="detail.producer" class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">供应商姓名</view>
							<view>{{detail.producer.producer_name}}</view>
						</view>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">预付款</view>
							<view class="display_flex">
								<view class="real_color">{{detail.haveGetMoney || 0 }}</view>
								<text style="color: #333;font-weight: bold;margin-left: 6rpx;">元</text>
							</view>
						</view>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">其他费用</view>
							<view class="display_flex">
								<view class="real_color">{{detail.otherMoney || 0 }}</view>
								<text style="color: #333;font-weight: bold;margin-left: 6rpx;">元</text>
							</view>
						</view>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">合计应付</view>
							<view class="display_flex">
								<view class="real_color">{{detail.real_money || 0 }}</view>
								<text style="color: #333;font-weight: bold;margin-left: 6rpx;">元</text>
							</view>
						</view>
						<view class="display_flex_bet borderBot" v-if="detail.setDay">
							<view class="left_content">订货时间</view>
							<view>{{detail.setDay.iso.split(" ")[0]}}</view>
						</view>
						<view class="display_flex_bet borderBot" v-if="detail.giveDay">
							<view class="left_content">收货时间</view>
							<view>{{detail.giveDay.iso.split(" ")[0]}}</view>
						</view>
						<view class="display_flex_bet" style="justify-content: space-between;">
							<view>是否已生成采购单<text style="font-size: 20rpx;color: #999;">点击右上角操作可生成</text></view>
							<view v-if="detail.status" class="display_flex">
								<navigator style="color: #2ca879;margin-right: 10rpx;" hover-class="none" :url="'/pages/report/EnteringHistory/SellDetail/SellDetail?id='+detail.orderSellId">已生成</navigator>
								<fa-icon type="angle-right" size="20" color="#2ca879"></fa-icon>
							</view>
							<view v-else style="color: #f30;">未生成</view>
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
						<view v-if="detail.beizhu">备注：{{detail.beizhu}}</view>
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
	let uid;
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
				products: [],
				detail: '',
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
			uid = uni.getStorageSync("uid");
			if (that.user.rights && that.user.rights.othercurrent) {
				that.othercurrent = that.user.rights.othercurrent
			}

		},

		onShow() {
			that.stock = uni.getStorageSync("warehouse") ? uni.getStorageSync("warehouse")[0].stock : ''
			that.getdetail(id);
		},

		//分享
		onShareAppMessage: function(res) {
			if (res.from === 'button') {
				// 来自页面内转发按钮
				console.log(res.target)
			}
			return {
				title: '库存表-操作单详情',
				path: '/pages/report/EnteringHistory/SellDetail/SellLaterDetail?id=' + id
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
				let options = ['打印'];
				if (that.detail.type == -3 || that.detail.type == -4) {
					if (that.othercurrent.indexOf("1") != -1 || that.identity == 1) {

						options = (that.detail.type == -3) ? ['生成销售单', '删除'] : ['生成采购单', '删除']

						uni.showActionSheet({
							itemList: options,
							success: function(res) {
								if (res.tapIndex == 0) {
									if (that.detail.type == -4) {
										if (that.detail.status) {
											uni.showToast({
												title: "该笔订单已生成采购单",
												icon: "none"
											})
										} else {
											that.confrimOrder()
										}
									} else if (that.detail.type == -3) {
										if (that.detail.status) {
											uni.showToast({
												title: "该笔订单已生成销售单",
												icon: "none"
											})
										} else {
											that.confrimOrder()
										}
									}
									uni.setStorageSync("is_option", true)
								} else if (res.tapIndex == 1) {
									if (that.detail.status) {
										uni.showToast({
											title: that.detail.type == -4?"该笔订单已生成采购单":"该笔订单已生成销售单",
											icon: "none"
										})
									} else {
										that.revoke()
									}
									uni.setStorageSync("is_option", true)
								} else if (res.tapIndex == 2) {
									print.print_operations(that.detail, that.products)
								}
							},
							fail: function(res) {
								console.log(res.errMsg);
							}
						});
					} else {
						uni.showToast({
							title: "暂无操作权限",
							icon: "none",
						})
					}
				}
			},

			getdetail: function(id) {
				const query = Bmob.Query('order_opreations');
				query.include("opreater", "custom", "producer", "stock", "account");
				query.get(id).then(res => {
					console.log(res);
					that.detail = res;
					that.products = res.opreatGood;
					that.bills = res.bills;
					that.loading = false;
				}).catch(err => {
					console.log(err)
				})
			},

			//数据撤销点击
			revoke: function() {
				wx.showModal({
					title: '提示',
					content: '数据撤销后不可恢复，请谨慎撤销！',
					success(res) {
						if (res.confirm) {
							uni.showLoading({
								title: '撤销中...'
							})
							const query = Bmob.Query('order_opreations');
							query.destroy(that.detail.objectId).then(res => {
								uni.hideLoading();
								uni.navigateBack({
									delta: 1
								})
								setTimeout(function() {
									uni.showToast({
										title: '删除成功'
									})
								}, 1000);
							}).catch(err => {
								console.log(err)
							})
						}
					}
				})
			},

			//审核订单
			confrimOrder() {
				if (that.detail.type == -3) {
					wx.showModal({
						title: '提示',
						content: '是否生成销售单！',
						success(res) {
							if (res.confirm) {
								uni.setStorageSync("custom", that.detail.custom)
								uni.setStorageSync("products", that.detail.opreatGood)
								uni.setStorageSync("otherMoney", that.detail.otherMoney)
								uni.setStorageSync("haveGetMoney", that.detail.haveGetMoney)
								uni.navigateTo({
									url: "/pages/commonNew/goods_out/gooSellNew/gooSellNew?id=" + that.detail.objectId
								})
							}
						}
					})
				} else if (that.detail.type == -4) {
					wx.showModal({
						title: '提示',
						content: '是否生成采购单！',
						success(res) {
							if (res.confirm) {
								uni.setStorageSync("producer", that.detail.producer)
								uni.setStorageSync("products", that.detail.opreatGood)
								uni.setStorageSync("otherMoney", that.detail.otherMoney)
								uni.setStorageSync("haveGetMoney", that.detail.haveGetMoney)
								uni.navigateTo({
									url: "/pages/commonNew/good_confrim/goodPurchaseNew/goodPurchaseNew?id=" + that.detail.objectId
								})
							}
						}
					})
				}

			},
		}
	}
</script>

<style>
	.page {
		color: #4d4d4d;
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

	.display_flex_bet {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		padding: 15rpx 30rpx;
	}

	.left_content {
		width: 150rpx;
	}
</style>
