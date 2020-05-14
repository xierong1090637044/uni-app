<template>
	<view style="width: 100%;display: flex;justify-content: space-between;position: fixed;bottom: 0;background: #fff;z-index: 100;padding: 12rpx 0;border-top: 1rpx solid#DDDDDD;">
		<view class="Listitem" @click="edit">
			<view class="Icon">
				<fa-icon type="pencil-square-o" size="18" color="#426ab3" />
			</view>
			<view class="Notice">编辑</view>
		</view>
		
		<view class="Listitem" @click="gotopay">
			<view class="Icon">
				<fa-icon type="money" size="18" color="#426ab3" />
			</view>
			<view class="Notice">还款</view>
		</view>
		<navigator class="Listitem" hover-class="none"  :url="'debt_history/debt_history?id='+producer.objectId">
			<view class="Icon">
				<fa-icon type="fax" size="18" color="#426ab3" />
			</view>
			<view class="Notice">还款记录</view>
		</navigator>
		<navigator class="Listitem" :url="'history/history?id='+producer.objectId">
			<view class="Icon">
				<fa-icon type="calendar-check-o" size="18" color="#426ab3" />
			</view>
			<view class="Notice">交易记录</view>
		</navigator>
		<view class="Listitem" @click="sellRecord">
			<view class="Icon">
				<fa-icon type="sign-in" size="18" color="#426ab3" />
			</view>
			<view class="Notice">采购单</view>
		</view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from "@/utils/common.js";
	
	let that;
	export default {
		props: {
			producer: {
				type: Object,
				default: {}
			} // 标题
		},
		data() {
			return {

			};
		},
		mounted() {
			that = this
		},
		methods: {
			gotopay() {
				uni.navigateTo({
					url: '/pages/finance/CPHistory/producerOutDet/producerOutDet?producerId='+that.producer.objectId
				});
			},
			
			edit() {
				uni.setStorageSync("producers", that.producer);
				uni.navigateTo({
					url: "../add/add"
				})
			},
			
			//采购单点击
			sellRecord(){
				uni.setStorageSync("producer",that.producer)
				uni.navigateTo({
					url: '/pages/commonNew/goods-select/goods-select?type=entering&value=3'
				});
			},
		}
	}
</script>

<style>
	.Listitem {
		width: 25%;
		text-align: center;
	}

	.Icon {
		line-height: 40rpx;
	}

	.Notice {
		line-height: 32rpx;
		font-size: 24rpx;
		color: #333;
	}
</style>
