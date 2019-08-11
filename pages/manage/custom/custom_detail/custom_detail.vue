<template>
	<view>
		<view class="display_flex_bet list_item border_bottom">
			<view class="left_desc">客户昵称</view>
			<view>{{custom.custom_name}}</view>
		</view>
		
		<view class="display_flex_bet list_item border_bottom">
			<view class="left_desc">联系电话</view>
			<view v-if="custom.custom_phone">{{custom.custom_phone}}</view>
			<view v-else>未填写</view>
		</view>
		
		<view class="display_flex_bet list_item border_bottom">
			<view class="left_desc">客户欠款</view>
			<view class="display_flex">
			  <text style="margin-right: 20rpx;">￥{{custom.debt}}</text> 
				<fa-icon type="angle-right" size="20" color="#999" />
			</view>
		</view>
		
		<view class="display_flex_bet list_item border_bottom">
			<view class="left_desc">建立时间</view>
			<view>{{custom.createdAt}}</view>
		</view>
		
		
		<navigator class="list_item display_flex_bet" style="margin: 20rpx 0;" hover-class="none" :url="'history/history?id='+custom.objectId">
			<text class="left_desc">交易历史</text>
			<fa-icon type="angle-right" size="20" color="#999" />
		</navigator>
		
		<view class="getmoney_button">收款</view>
		
	</view>
</template>

<script>
	import customs from '@/utils/customs.js';
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	
	let that;
	export default {
		components: {
			faIcon
		},
		
		data() {
			return {
				custom: {}
			}
		},

		onLoad(options) {
			that = this;
			console.log(options.id)
			customs.custom_detail("0adcad2160").then(res => {
				console.log(res)
				that.custom = res
			})
		},
		methods: {

		},
	}
</script>

<style>
	page {
		color: #3D3D3D;
	}

	.list_item {
		padding: 20rpx 30rpx;
		background: #FFFFFF;
	}
	
	.left_desc
	{
		color: #999;
	}
	
	.border_bottom {
		border-bottom: 1rpx solid#DDDDDD;
	}
	
	.getmoney_button{
		width: 100%;
		background: #426AB3;
		color: #FFFFFF;
		padding: 20rpx 0;
		text-align: center;
		position: fixed;
		bottom: 0;
		left: 0;
	}
</style>
