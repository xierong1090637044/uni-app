<template>
	<view>
		<view class="modelItem">
			<view class="title">采购</view>
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
			<view class="title">仓管</view>
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
						name: '采购订单',
						icon: 'icon-navicon-cgdd',
						url: '/pages/commonNew/goods-select/goods-select?type=entering&value=5'
					}, {
						name: '采购单',
						icon: 'icon-office-supplies-shopping-list',
						url: '/pages/commonNew/goods-select/goods-select?type=entering&value=3'
					},
					{
						name: '采购退货单',
						icon: 'icon-tuihuo1',
						url: '/pages/commonNew/goods-select/goods-select?type=delivery&value=4'
					}
				],
				
				secondEle: [{
						name: '入库',
						icon: 'icon-ruku',
						url: '/pages/commonNew/goods-select/goods-select?type=entering&value=2'
					},
					{
						name: '出库',
						icon: 'icon-chuku',
						url: '/pages/commonNew/goods-select/goods-select?type=delivery&value=2'
					},
					{
						name: '产品调拨',
						icon: 'icon-icon-transfer',
						url: '/pages/commonNew/goods-select/goods-select?type=allocation'
					},
					{
						name: '库存盘点',
						icon: 'icon-pandian',
						url: '/pages/commonNew/goods-select/goods-select?type=counting'
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
