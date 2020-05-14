<template>
	<view style="width: 100%;display: flex;justify-content: space-between;position: fixed;bottom: 0;background: #fff;z-index: 100;padding: 12rpx 0;border-top: 1rpx solid#DDDDDD;">
		<view class="Listitem" @click="addCustomFollow">
			<view class="Icon">
				<fa-icon type="pencil-square-o" size="18" color="#426ab3" />
			</view>
			<view class="Notice">跟进</view>
		</view>
		
		<view class="Listitem" @click="gotopay">
			<view class="Icon">
				<fa-icon type="money" size="18" color="#426ab3" />
			</view>
			<view class="Notice">收款</view>
		</view>
		<navigator class="Listitem" hover-class="none"  :url="'debt_history/debt_history?id='+custom.objectId">
			<view class="Icon">
				<fa-icon type="fax" size="18" color="#426ab3" />
			</view>
			<view class="Notice">收款记录</view>
		</navigator>
		<navigator class="Listitem" :url="'history/history?id='+custom.objectId">
			<view class="Icon">
				<fa-icon type="calendar-check-o" size="18" color="#426ab3" />
			</view>
			<view class="Notice">交易记录</view>
		</navigator>
		<view class="Listitem" @click="sellRecord">
			<view class="Icon">
				<fa-icon type="sign-out" size="18" color="#426ab3" />
			</view>
			<view class="Notice">销售单</view>
		</view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from "@/utils/common.js";
	
	let that;
	export default {
		props: {
			custom: {
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
					url: '/pages/finance/CPHistory/costomInDet/costomInDet?customId='+that.custom.objectId
				});
			},
			
			addCustomFollow(){
				uni.setStorageSync("custom",that.custom)
				uni.navigateTo({
					url:"/pages/manage/customFollow/customFollow"
				})
			},
			
			edit() {
				if(that.custom.customSecondClass){
					uni.setStorageSync("customCategory", that.custom.customSecondClass);
				}else if(that.custom.customFristClass){
					uni.setStorageSync("customCategory", that.custom.customFristClass);
				}
				uni.setStorageSync("customs", that.custom);
				uni.navigateTo({
					url: "../add/add"
				})
			},
			
			//销售单点击
			sellRecord(){
				uni.setStorageSync("custom",that.custom)
				uni.navigateTo({
					url: '/pages/commonNew/goods-select/goods-select?type=delivery&value=3'
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
