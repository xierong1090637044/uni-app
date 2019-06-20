<template>
	<view>
		<view class="uni-form-item uni-column">
			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 160rpx;">显示精度</view>
				<input class="uni-input" type="number" placeholder="有效值0,1,2" @input="set_show_float" />
			</view>

			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 160rpx;">USER账号</view>
				<input class="uni-input"  placeholder="请输入USER账号" />
			</view>
			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 160rpx;">UKEY账号</view>
				<input class="uni-input" placeholder="请输入UKEY账号" />
			</view>
			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 160rpx;">打印机编号</view>
				<input class="uni-input" placeholder="请输入打印机编号" />
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			set_show_float(e)
			{
				console.log(e)
			}
		}
	}
</script>

<style>
	.item {
		background: #fff;
		padding: 4rpx 8rpx;
	}

	.uni-input {
		border-bottom: 1rpx solid#ccc;
	}
</style>
