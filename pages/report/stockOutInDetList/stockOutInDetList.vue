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

		<scroll-view style="padding: 0 30rpx;background: #fff;height: calc(100vh - 150rpx);width: calc(100% - 60rpx);"
		 scroll-y="true" v-if="params.type == 1">

			<view v-for="(item,index) in sellPurchaseDetList" :key="index" v-if="item.goodsId && item.goodsId.goodsName" @click="gotoDet(item.objectId)">
				<view class="display_flex_bet" style="padding-top: 10rpx;">
					<view style="color: #333;font-weight: bold;">{{item.goodsId.goodsName}}</view>
					<view style="background: #2CA879;color: #fff;padding: 0 10rpx;border-radius: 8rpx;">+{{item.num}}<text v-if="item.goodsId.packingUnit">{{item.goodsId.packingUnit}}</text></view>
				</view>
				<view class="display_flex_bet listItem">
					<image class="goodImage" v-if="item.goodsId.goodsIcon" :src="item.goodsId.goodsIcon"></image>
					<image class="goodImage" v-else src="/static/goods-default.png"></image>

					<view style="width: calc(100% - 140rpx);">

						<view style="color: #999;">
							<text style="color: #999;">仓库：</text>
							<text style="color: #333;font-weight: bold;">{{item.stock.stock_name}}</text>
						</view>
						<view style="color: #999;">
							<text style="color: #999;">入库类型：</text>
							<text style="color: #333;font-weight: bold;" v-if="item.extra_type == 2 || item.extra_type == 1">采购入库</text>
							<text style="color: #333;font-weight: bold;" v-if="item.extra_type == 4">销售退货</text>
						</view>
						<view style="color: #999;">
							<text style="color: #999;">操作者：</text>
							<text style="color: #333;font-weight: bold;">{{item.opreater.nickName}}</text>
						</view>
						<view style="color: #999;">
							<text style="color: #999;">操作时间：</text>
							<text style="color: #333;font-weight: bold;">{{item.createdAt}}</text>
						</view>
					</view>
				</view>

			</view>
		</scroll-view>

		<scroll-view style="padding: 0 30rpx;background: #fff;height: calc(100vh - 150rpx);width: calc(100% - 60rpx);"
		 scroll-y="true" v-if="params.type == -1">

			<view v-for="(item,index) in sellPurchaseDetList" :key="index" v-if="item.goodsId && item.goodsId.goodsName" @click="gotoDet(item.objectId)">
				<view class="display_flex_bet" style="padding-top: 10rpx;">
					<view style="color: #333;font-weight: bold;max-width: 80%;">{{item.goodsId.goodsName}}</view>
					<view style="background: #f30;color: #fff;padding: 0 10rpx;border-radius: 8rpx;">-{{item.num}}<text v-if="item.goodsId.packingUnit">{{item.goodsId.packingUnit}}</text></view>
				</view>
				<view class="display_flex_bet listItem">
					<image class="goodImage" v-if="item.goodsId.goodsIcon" :src="item.goodsId.goodsIcon"></image>
					<image class="goodImage" v-else src="/static/goods-default.png"></image>
			
					<view style="width: calc(100% - 140rpx);">
			
						<view style="color: #999;">
							<text style="color: #999;">仓库：</text>
							<text style="color: #333;font-weight: bold;">{{item.stock.stock_name}}</text>
						</view>
						<view style="color: #999;">
							<text style="color: #999;">出库类型：</text>
							<text style="color: #333;font-weight: bold;" v-if="item.extra_type == 2">销售出库</text>
							<text style="color: #333;font-weight: bold;" v-if="item.extra_type == 4">采购退货</text>
						</view>
						<view style="color: #999;">
							<text style="color: #999;">操作者：</text>
							<text style="color: #333;font-weight: bold;">{{item.opreater.nickName}}</text>
						</view>
						<view style="color: #999;">
							<text style="color: #999;">操作时间：</text>
							<text style="color: #333;font-weight: bold;">{{item.createdAt}}</text>
						</view>
					</view>
				</view>
			
			</view>
		</scroll-view>
		
		<!--筛选弹窗-->
		<uniPopupNew ref="popup" type="top">
			<view style="background: #fff;">
				<view style="padding: 10rpx 30rpx;">		
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
				items: ["出库", "入库"],
				current: 0,
				today: this.common.getDay(1),

				params: {
					goodsName: '',
					type: -1,
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
			uni.setNavigationBarTitle({
				title: "出入库明细"
			})

			that.resetOptions()
		},
		
		onShow() {		
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
				uni.removeStorageSync("warehouse")
				that.params.goodsName = ''
				that.params.startTime = this.common.getDay(-1, false)
				that.params.endTime = this.common.getDay(0, false)
				that.params.stock = {
					stock_name: '',
					objectId: ''
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
					that.params.type = 1
				} else {
					that.params.type = -1
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

					if (res[0].extra_type == 4) {
						uni.navigateTo({
							url: "/pages/report/EnteringHistory/returnDetail/returnDetail?id=" + res[0].objectId
						})
					} else if (res[0].extra_type == 1) {
						uni.navigateTo({
							url: "/pages/report/EnteringHistory/SellDetail/SellDetail?id=" + res[0].objectId
						})
					}else if (res[0].extra_type == 2) {
						uni.navigateTo({
							url: "/pages/report/EnteringHistory/detail/detail?id=" + res[0].objectId
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
