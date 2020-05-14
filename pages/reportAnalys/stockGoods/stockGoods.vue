<template>
	<view>
		<view style="padding: 0 30rpx;background: #fff;">
			<view class="display_flex_bet" style="background: #999;padding: 6rpx 0;">
				<view style="flex: 1;text-align: center;">仓库</view>
				<view style="flex: 1;text-align: center;">库存数量</view>
				<view style="flex: 1;text-align: center;color: #f30;">库存金额</view>
			</view>
			<view v-for="(item,index) in stockGoods" :key="index" class="display_flex_bet listItem">
				<view style="flex: 1;text-align: center;">{{item.name}}</view>
				<view  style="flex: 1;text-align: center;">{{item.allReserve}}</view>
				<view style="flex: 1;text-align: center;color: #f30;">{{item.allReserveMoney}}</view>
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
				params: {
					
				},

				stockGoods: [],
			}
		},

		onLoad() {
			that = this
			uni.setNavigationBarTitle({
				title: "仓库统计"
			})
			uni.removeStorageSync("warehouse")
		},
		
		onShow() {
			that.getstockGoods()
		},
		
		methods: {

			getstockGoods() {
				that.$http.Post("record_stockPieChart", that.params).then(res => {
					that.stockGoods = res.data
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
