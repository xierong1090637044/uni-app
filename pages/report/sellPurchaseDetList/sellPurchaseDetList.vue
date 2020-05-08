<template>
	<view>
		<view style="background: #fff;border-bottom: 1rpx solid#ddd;">
			<uni-segmented-control :current="current" :values="items" style-type="text" active-color="#426ab3" @clickItem="onClickItem" />
		</view>

		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" :shadow="false" rightText="筛选" @click-right="shaixuanShow">
			<view class="input-view display_flex">
				<fa-icon type="search" size="16" color="#999"></fa-icon>
				<input confirm-type="search" class="input" type="text" placeholder="请输入产品名字" @confirm="input_confirm" />
			</view>
		</uni-nav-bar>

		<view v-if="params.extra_type == 1">
			<scroll-view style="padding: 0 30rpx;background: #fff;height: calc(100vh - 150rpx);width: calc(100% - 60rpx);"
			 scroll-y="true" v-if="params.type == 1">

				<view v-for="(item,index) in sellPurchaseDetList" :key="index" v-if="item.goodsId && item.goodsId.goodsName" @click="gotoDet(item.objectId)">
					<view style="font-size: 28rpx;font-weight: bold;padding-top: 10rpx;">供应商：{{item.producer.producer_name}}</view>
					<view class="display_flex_bet listItem">
						<image class="goodImage" v-if="item.goodsId.goodsIcon" :src="item.goodsId.goodsIcon"></image>
						<image class="goodImage" v-else src="/static/goods-default.png"></image>

						<view style="width: calc(100% - 140rpx);">
							<view>
								<text style="color: #999;">商品名称：</text>
								<text style="color: #333;font-weight: bold;">{{item.goodsId.goodsName}}</text>
							</view>
							<view style="color: #999;">
								<text style="color: #999;">采购数量：</text>
								<text style="color: #333;font-weight: bold;">{{item.num}}</text>
							</view>
							<view style="color: #999;">
								<text style="color: #999;">采购金额：</text>
								<text style="color: #333;font-weight: bold;">{{item.total_money}}</text>
							</view>
						</view>
					</view>

				</view>
			</scroll-view>

			<scroll-view style="padding: 0 30rpx;background: #fff;height: calc(100vh - 150rpx);width: calc(100% - 60rpx);"
			 scroll-y="true" v-if="params.type == -1">

				<view v-for="(item,index) in sellPurchaseDetList" :key="index" v-if="item.goodsId && item.goodsId.goodsName" @click="gotoDet(item.objectId)">
					<view style="font-size: 28rpx;font-weight: bold;padding-top: 10rpx;">客户：{{item.custom.custom_name}}</view>
					<view class="display_flex_bet listItem">
						<image class="goodImage" v-if="item.goodsId.goodsIcon" :src="item.goodsId.goodsIcon"></image>
						<image class="goodImage" v-else src="/static/goods-default.png"></image>

						<view style="width: calc(100% - 140rpx);">
							<view>
								<text style="color: #999;">商品名称：</text>
								<text style="color: #333;font-weight: bold;">{{item.goodsId.goodsName}}</text>
							</view>
							<view style="color: #999;">
								<text style="color: #999;">销售数量：</text>
								<text style="color: #333;font-weight: bold;">{{item.num}}</text>
							</view>
							<view style="color: #999;">
								<text style="color: #999;">销售金额：</text>
								<text style="color: #333;font-weight: bold;">{{item.total_money}}</text>
							</view>
						</view>
					</view>

				</view>
			</scroll-view>
		</view>

		<view v-if="params.extra_type == 4">
			<scroll-view style="padding: 0 30rpx;background: #fff;height: calc(100vh - 150rpx);width: calc(100% - 60rpx);"
			 scroll-y="true" v-if="params.type == 1">

				<view v-for="(item,index) in sellPurchaseDetList" :key="index" v-if="item.goodsId && item.goodsId.goodsName" @click="gotoDet(item.objectId)">
					<view style="font-size: 28rpx;font-weight: bold;padding-top: 10rpx;">客户：{{item.custom.custom_name}}</view>
					<view class="display_flex_bet listItem">
						<image class="goodImage" v-if="item.goodsId.goodsIcon" :src="item.goodsId.goodsIcon"></image>
						<image class="goodImage" v-else src="/static/goods-default.png"></image>

						<view style="width: calc(100% - 140rpx);">
							<view>
								<text style="color: #999;">商品名称：</text>
								<text style="color: #333;font-weight: bold;">{{item.goodsId.goodsName}}</text>
							</view>
							<view style="color: #999;">
								<text style="color: #999;">销售退货数量：</text>
								<text style="color: #333;font-weight: bold;">{{item.num}}</text>
							</view>
							<view style="color: #999;">
								<text style="color: #999;">销售退货金额：</text>
								<text style="color: #333;font-weight: bold;">{{item.total_money}}</text>
							</view>
						</view>
					</view>

				</view>
			</scroll-view>

			<scroll-view style="padding: 0 30rpx;background: #fff;height: calc(100vh - 150rpx);width: calc(100% - 60rpx);"
			 scroll-y="true" v-if="params.type == -1">

				<view v-for="(item,index) in sellPurchaseDetList" :key="index" v-if="item.goodsId && item.goodsId.goodsName" @click="gotoDet(item.objectId)">
					<view style="font-size: 28rpx;font-weight: bold;padding-top: 10rpx;">供应商：{{item.producer.producer_name}}</view>
					<view class="display_flex_bet listItem">
						<image class="goodImage" v-if="item.goodsId.goodsIcon" :src="item.goodsId.goodsIcon"></image>
						<image class="goodImage" v-else src="/static/goods-default.png"></image>

						<view style="width: calc(100% - 140rpx);">
							<view>
								<text style="color: #999;">商品名称：</text>
								<text style="color: #333;font-weight: bold;">{{item.goodsId.goodsName}}</text>
							</view>
							<view style="color: #999;">
								<text style="color: #999;">采购退货数量：</text>
								<text style="color: #333;font-weight: bold;">{{item.num}}</text>
							</view>
							<view style="color: #999;">
								<text style="color: #999;">采购退货金额：</text>
								<text style="color: #333;font-weight: bold;">{{item.total_money}}</text>
							</view>
						</view>
					</view>

				</view>
			</scroll-view>
		</view>

		<!--筛选弹窗-->
		<uniPopupNew ref="popup" type="top">
			<view style="background: #fff;">
				<view style="padding: 10rpx 30rpx;">
					<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#ddd;margin-bottom: 10rpx;" v-if="sellOrPurchase == 'purchase'">
						<view>供应商</view>
						<view class="section">
							<navigator hover-class="none" url="/pages/manage/producer/producer?type=producer">
								<view class="picker">
									<text style="margin-right: 6rpx;">{{params.producer.producer_name}}</text>
									<fa-icon type="angle-down" size="20" color="#999" />
								</view>
							</navigator>
						</view>
					</view>

					<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#ddd;margin-bottom: 10rpx;" v-if="sellOrPurchase == 'sell'">
						<view>客户</view>
						<view class="section">
							<navigator hover-class="none" url="/pages/manage/custom/custom?type=custom">
								<view class="picker">
									<text style="margin-right: 6rpx;">{{params.custom.custom_name}}</text>
									<fa-icon type="angle-down" size="20" color="#999" />
								</view>
							</navigator>
						</view>
					</view>

					<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#ddd;margin-bottom: 10rpx;">
						<view>店仓</view>
						<view class="section">
							<navigator hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose">
								<view class="picker">
									<text style="margin-right: 6rpx;">{{params.stock.stock_name}}</text>
									<fa-icon type="angle-down" size="20" color="#999" />
								</view>
							</navigator>
						</view>
					</view>

					<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#ddd;margin-bottom: 10rpx;">
						<view>开始时间</view>
						<view class="section">
							<picker @change="bindDate_startChange" mode="date" :end="today">
								<view class="picker">
									<text style="margin-right: 6rpx;">{{params.startTime}}</text>
									<fa-icon type="angle-down" size="20" color="#999" />
								</view>
							</picker>
						</view>
					</view>

					<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#ddd;margin-bottom: 10rpx;">
						<view>结束时间</view>
						<view class="section">
							<picker @change="bindDate_endChange" mode="date" :end="today">
								<view class="picker">
									<text style="margin-right: 6rpx;">{{params.endTime}}</text>
									<fa-icon type="angle-down" size="20" color="#999" />
								</view>
							</picker>
						</view>
					</view>
				</view>
				<view class="display_flex_bet">
					<view style="color: #426ab3;line-height: 80rpx;width: 50%;text-align: center;" @click="resetOptions">重置</view>
					<view style="background: #426ab3;color: #fff;line-height: 80rpx;width: 50%;text-align: center;" @click="confrimOption">确定</view>
				</view>
			</view>

		</uniPopupNew>


	</view>
</template>

<script>
	let that;
	import uniPopupNew from "@/components/uni-popup-new/uni-popup-new.vue"
	export default {
		components: {
			uniPopupNew
		},
		data() {
			return {
				items: [],
				current: 0,
				today: this.common.getDay(1),
				sellOrPurchase: "sell",
				params: {
					goodsName: '',
					type: 1,
					extra_type: 1,
					startTime: this.common.getDay(-1, false),
					endTime: this.common.getDay(0, false),
					stock: {
						stock_name: '',
						objectId: ''
					}
				},
				sellPurchaseDetList: []
			}
		},

		onLoad(options) {
			that = this;
			that.params.type = Number(options.type)
			that.params.extra_type = Number(options.extra_type)
			uni.setNavigationBarTitle({
				title: options.title
			})

			if (options.type == 1) {
				that.sellOrPurchase = "purchase"
				that.items = ['采购单', '采购退货']
			} else if (options.type == -1) {
				that.sellOrPurchase = "sell"
				that.items = ['销售单', '销售退货']
			}
			that.resetOptions()
		},

		onShow() {
			if (uni.getStorageSync("producer") && that.sellOrPurchase == "purchase") {
				let producer = uni.getStorageSync("producer")
				that.params.producer.producer_name = producer.producer_name
				that.params.producer.objectId = producer.objectId
			}

			if (uni.getStorageSync("custom") && that.sellOrPurchase == "sell") {
				let custom = uni.getStorageSync("custom")
				that.params.custom.custom_name = custom.custom_name
				that.params.custom.objectId = custom.objectId
			}

			if (uni.getStorageSync("warehouse")) {
				let stock = uni.getStorageSync("warehouse")[0].stock
				that.params.stock.stock_name = stock.stock_name
				that.params.stock.objectId = stock.objectId
			}
		},

		methods: {

			confrimOption() {
				this.$refs.popup.close()
				that.getSellPurchaseDetList()
			},

			resetOptions() {
				uni.removeStorageSync("custom")
				uni.removeStorageSync("warehouse")
				uni.removeStorageSync("producer")
				that.params.goodsName = ''
				that.params.startTime = this.common.getDay(-1, false)
				that.params.endTime = this.common.getDay(0, false)
				that.params.stock = {
					stock_name: '',
					objectId: ''
				}

				if (that.sellOrPurchase == "sell") {
					that.params.custom = {
						custom_name: '',
						objectId: ''
					}
				}

				if (that.sellOrPurchase == "purchase") {
					that.params.producer = {
						producer_name: '',
						objectId: ''
					}
				}
				that.getSellPurchaseDetList()
			},

			shaixuanShow() {
				this.$refs.popup.open()
			},

			input_confirm(e) {
				that.params.goodsName = e.detail.value
				that.getSellPurchaseDetList()
			},

			bindDate_startChange(e) {
				that.params.startTime = e.detail.value
			},

			bindDate_endChange(e) {
				that.params.endTime = e.detail.value
			},

			onClickItem(value) {
				if (value == 1) {
					that.params.extra_type = 4
				} else {
					that.params.extra_type = 1
				}

				if (that.params.type == 1) {
					that.params.type = -1
				} else if (that.params.type == -1) {
					that.params.type = 1
				}

				that.getSellPurchaseDetList()
			},

			//点击去到详情
			gotoDet(id) {
				uni.showLoading({
					title: "跳转中..."
				})
				const query = that.Bmob.Query("order_opreations");
				query.containedIn("bills", [id]);
				query.find().then(res => {
					uni.hideLoading()

					if (that.params.extra_type == 4) {
						uni.navigateTo({
							url: "/pages/report/EnteringHistory/returnDetail/returnDetail?id=" + res[0].objectId
						})
					} else if (that.params.extra_type == 1) {
						uni.navigateTo({
							url: "/pages/report/EnteringHistory/SellDetail/SellDetail?id=" + res[0].objectId
						})
					}
				});
			},

			getSellPurchaseDetList() {
				that.$http.Post("stock_sellPurchaseDetList", this.params).then(res => {
					that.sellPurchaseDetList = res.data.flat()
				})
			},
		}
	}
</script>

<style lang="scss">
	view {
		line-height: 1.4;
	}

	.listItem {
		padding: 20rpx 0;
		border-bottom: 1rpx solid#ddd;
	}

	.goodImage {
		width: 120rpx;
		height: 120rpx;
		border-radius: 16rpx;
	}

	.select {
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 30rpx;
		border-bottom: 1rpx solid#F7F7F7;

		.section {
			width: 50%;
			text-align: center;
		}
	}
</style>
