<template>
	<view v-if="canUse">
		<view class="modelItem">
			<view class="title">往来账目</view>
			<view class='o_list'>
				<navigator v-for='(value,index) in fristEle' :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem">
						<!--<fa-icon :type="value.icon" size="20" color="#426ab3" style="line-height: 80rpx;"></fa-icon>-->
						<i :class="'iconfont '+value.icon" style="font-size: 56rpx;color: #426ab3;line-height: 80rpx;"></i>
					</view>
					<view class='o_text'>{{value.name}}</view>
				</navigator>
			</view>
		</view>
		
		<view class="modelItem">
			<view class="title">其他账目</view>
			<view class='o_list'>
				<navigator v-for='(value,index) in secondEle' :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem">
						<!--<fa-icon :type="value.icon" size="20" color="#426ab3" style="line-height: 80rpx;"></fa-icon>-->
						<i :class="'iconfont '+value.icon" style="font-size: 56rpx;color: #426ab3;line-height: 80rpx;"></i>
					</view>
					<view class='o_text'>{{value.name}}</view>
				</navigator>
			</view>
		</view>

		<view class="modelItem">
			<view class="title">资料</view>
			<view class='o_list'>
				<navigator v-for='(value,index) in thridEle' :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem">
						<!--<fa-icon :type="value.icon" size="20" color="#426ab3" style="line-height: 80rpx;"></fa-icon>-->
						<i :class="'iconfont '+value.icon" style="font-size: 56rpx;color: #426ab3;line-height: 80rpx;"></i>
					</view>
					<view class='o_text'>{{value.name}}</view>
				</navigator>
			</view>
		</view>
	</view>
	<view v-else style="font-size: 32rpx;color: #333;font-weight: bold;">请联系管理员开通使用</view>
</template>

<script>
	export default {
		data() {
			return {
				fristEle: [{
					name: '收款单',
					icon: 'icon-fq_kucunfeiyong',
					url: '/pages/finance/CPHistory/customInHistory/customInHistory',
				}, {
					name: '应收账款',
					icon: 'icon-fq_yingshoukuan ',
					url: '/pages/finance/CPHistory/customIn/customIn',
				}, {
					name: '付款单',
					icon: 'icon-yingshoukuan ',
					url: '/pages/finance/CPHistory/producerOutHistory/producerOutHistory',
				}, {
					name: '应付账款',
					icon: 'icon-fq_yingfukuan ',
					url: '/pages/finance/CPHistory/producerOut/producerOut',
				}],

				secondEle: [{
					name: '其他支出',
					icon: 'icon-income',
					url: '/pages/finance/otherHistory/outRecordHistory/outRecordHistory',
				}, {
					name: '其他收入',
					icon: 'icon-zhichu',
					url: '/pages/finance/otherHistory/InRecordHistory/InRecordHistory',
				}],
				
				thridEle: [{
					name: '我的账户',
					icon: 'icon-zijinzhanghu',
					url: '/pages/finance/myData/account/account',
				}, {
					name: '收入类别',
					icon: 'icon-sh_quanbu',
					url: '/pages/finance/myData/inClass/inClass',
				}, {
					name: '支出类别',
					icon: 'icon-sh_quanbu',
					url: '/pages/finance/myData/outClass/outClass',
				}],
				
				user: uni.getStorageSync("user"),
				identity:uni.getStorageSync("identity"),
				canUse:true
			};
		},
		
		mounted() {
			if (this.identity == 2) {
				if(this.user.rights.moneyCurrent.indexOf("0") == -1){
					this.canUse = false
				}
			}
		}
	}
</script>

<style>
	.title {
		color: #333;
		font-weight: bold;
		font-size: 28rpx;
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
		margin-top: -10rpx;
	}
</style>
