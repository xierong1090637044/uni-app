<template>
	<view>
		<view class="modelItem">
			<view class="title">采购</view>
			<view class='o_list'>
				<navigator v-for='(value,index) in fristEle' :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem">
						<!--<fa-icon :type="value.icon" size="20" color="#426ab3" style="line-height: 80rpx;"></fa-icon>-->
						<i :class="'iconfont '+value.icon" style="font-size: 46rpx;color: #426ab3;line-height: 80rpx;"></i>
					</view>
					<view class='o_text'>{{value.name}}</view>
				</navigator>
			</view>
		</view>

		<view class="modelItem">
			<view class="title">资金</view>
			<view class='o_list'>
				<navigator v-for='(value,index) in secondEle' :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem">
						<!--<fa-icon :type="value.icon" size="20" color="#426ab3" style="line-height: 80rpx;"></fa-icon>-->
						<i :class="'iconfont '+value.icon" style="font-size: 46rpx;color: #426ab3;line-height: 80rpx;"></i>
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
					name: '收款单',
					icon: 'icon-fq_kucunfeiyong',
					url: '/pages/finance/history/history?type=-1',
					//url: '/pages/manage/custom/custom',
				}, {
					name: '应收账款',
					icon: 'icon-fq_yingshoukuan ',
					url: '/pages/finance/customIn/customIn',
				}, {
					name: '付款单',
					icon: 'icon-yingshoukuan ',
					//url: '/pages/finance/InRecord/InRecord?type=record',
				}, {
					name: '应付账款',
					icon: 'icon-fq_yingfukuan ',
					//url: '/pages/finance/outRecord/outRecord?type=record',
				}],

				secondEle: [{
					name: '我的账户',
					icon: 'icon-zijinzhanghu',
					url: '/pages/finance/account/account',
				}, {
					name: '收入类别',
					icon: 'icon-sh_quanbu',
					url: '/pages/finance/inClass/inClass',
				}, {
					name: '支出类别',
					icon: 'icon-sh_quanbu',
					url: '/pages/finance/outClass/outClass',
				}, {
					name: '流水记录',
					icon: 'icon-dingdandengdai',
					url: '/pages/finance/history/history',
				}, ],
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

	.modelItem {
		padding: 20rpx 30rpx;
		width: calc(100% - 60rpx);
		margin-bottom: 30rpx;
		border-radius: 40rpx;
		background: #F7F7F7;
	}

	.o_list {
		background: #F7F7F7;
	}

	.o_headerItem {
		background: #F7F7F7;
	}

	.o_item {
		width: 33.33%;
		font-weight: bold;
		margin-bottom: unset;
	}

	.o_text {
		margin-top: unset;
	}
</style>
