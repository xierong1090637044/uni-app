<template>
	<view>
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" :shadow="false">
			<view class="input-view display_flex">
				<fa-icon type="search" size="16" color="#999"></fa-icon>
				<input confirm-type="search" class="input" type="text" placeholder="请输入品牌名字" @confirm="input_confirm" />
			</view>
		</uni-nav-bar>
		<view class='select'>
			<view class="section" style="border-right: 1rpx solid#DDDDDD;">
				<picker @change="bindDate_startChange" mode="date" :end="today">
					<view class="picker">
						<text style="margin-right: 6rpx;">{{params.startTime}}</text>
						<fa-icon type="angle-down" size="20" color="#999" />
					</view>
				</picker>
			</view>
		
			<view class="section">
				<picker @change="bindDate_endChange" mode="date" :end="today">
					<view class="picker">
						<text style="margin-right: 6rpx;">{{params.endTime}}</text>
						<fa-icon type="angle-down" size="20" color="#999" />
					</view>
				</picker>
			</view>
		</view>

		<view style="padding: 0 30rpx;background: #fff;" v-if="params.type == -1">

			<view v-for="(item,index) in PurchaseGoodList" :key="index" class="display_flex_bet listItem">

				<view style="width: calc(100% - 140rpx);">
					<view>{{item.brand}}</view>
					<view class="display_flex_bet">
						<view style="color: #999;">销售笔数：{{item._count}}</view>
						<view style="color: #999;">销售数量：{{item._sumNum}}</view>
					</view>
					<view style="color: #999;">销售金额：{{item._sumTotal_money}}</view>
				</view>
			</view>
		</view>
		
		<view style="padding: 0 30rpx;background: #fff;" v-if="params.type == 1">
		
			<view v-for="(item,index) in PurchaseGoodList" :key="index" class="display_flex_bet listItem">
		
				<view style="width: calc(100% - 140rpx);">
					<view>{{item.brand}}</view>
					<view class="display_flex_bet">
						<view style="color: #999;">采购笔数：{{item._count}}</view>
						<view style="color: #999;">采购数量：{{item._sumNum}}</view>
					</view>
					<view style="color: #999;">采购金额：{{item._sumTotal_money}}</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import common from '@/utils/common.js';
	let that;
	export default {
		data() {
			return {
				today: common.getDay(1),
				params: {
					brand: '',
					startTime: common.getDay(0),
					endTime: common.getDay(1),
					type: -1,
					extra_type: 1
				},

				PurchaseGoodList: [],
			}
		},

		onLoad(options) {
			that = this
			if (options.type == -1) {
				uni.setNavigationBarTitle({
					title: "品牌销售统计"
				})
			} else if (options.type == 1) {
				uni.setNavigationBarTitle({
					title: "品牌采购统计"
				})
			}
			
			that.params.type = options.type

			that.getBrandSellPurchaseList()
		},
		methods: {

			bindDate_startChange(e) {
				that.params.startTime = e.detail.value
				that.getBrandSellPurchaseList()
			},

			bindDate_endChange(e) {
				that.params.endTime = e.detail.value
				that.getBrandSellPurchaseList()
			},

			input_confirm(e) {
				that.params.brand = e.detail.value
				that.getBrandSellPurchaseList()
			},

			getBrandSellPurchaseList() {
				that.$http.Post("reportAnalys_brandSellPurchase", that.params).then(res => {
					let thisResults = res.data.flat()
					that.PurchaseGoodList = res.data.flat()
				})
			}
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
