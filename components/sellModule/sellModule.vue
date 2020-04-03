<template>
	<view>
		<view class="modelItem">
			<view class="title">销售</view>
			<view class='o_list'>
				<navigator v-for='(value,index) in fristEle' :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem">
						<i :class="'iconfont '+value.icon" style="font-size: 46rpx;color: #fff;line-height: 80rpx;color:#426ab3;"></i>
					</view>
					<view class='o_text'>{{value.name}}</view>
				</navigator>
			</view>
		</view>
		
		<view class="modelItem">
			<view class="title">零售</view>
			<view class='o_list'>
				<navigator v-for='(value,index) in secondEle' :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem">
						<i :class="'iconfont '+value.icon" style="font-size: 46rpx;color: #fff;line-height: 80rpx;color:#426ab3;"></i>
					</view>
					<view class='o_text'>{{value.name}}</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fristEle: [{
						name: '销售订单',
						type: 'New',
						icon: 'icon-xiaoshoudingdan',
						url: '/pages/commonNew/goods-select/goods-select?type=delivery&value=5'
					}, {
						name: '销售单',
						icon: 'icon-navicon-xsckd',
						url: '/pages/commonNew/goods-select/goods-select?type=delivery&value=3'
					},
					{
						name: '销售退货单',
						icon: 'icon-tuihuodan',
						url: '/pages/commonNew/goods-select/goods-select?type=entering&value=4'
					}, {
						name: '报价单',
						icon: 'icon-tuihuodan',
						url: '/pages/commonNew/goods-select/goods-select?type=entering&value=4'
					}
				],
				
				secondEle: [{
						name: '零售收银',
						type: 'New',
						icon: 'icon-xiaoshoudingdan',
						url: '/pages/commonNew/goods-select/goods-select?type=delivery&value=5'
					}, {
						name: '收银历史',
						icon: 'icon-navicon-xsckd',
						url: '/pages/commonNew/goods-select/goods-select?type=delivery&value=3'
					}
				],
			};
		}
	}
</script>

<style>
	.title {
		color: #333;
		font-weight: bold;
		font-size: 32rpx;
	}
	
	.modelItem{
		padding:20rpx 30rpx;
		width: calc(100% - 60rpx);
		margin-bottom: 30rpx;
		border-radius: 40rpx;
		background: #F7F7F7;
	}
	
	.o_list{
		background: #F7F7F7;
	}
	
	.o_headerItem{
		background: #F7F7F7;
	}

	.o_item {
		width: 33.33%;
		font-weight: bold;
	}

	.o_text {
		margin-top: unset;
	}
</style>
