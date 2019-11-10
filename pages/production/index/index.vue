<template>
	<!--当月详情-->
	<view>
		<uni-notice-bar :show-icon="true" :single="true" color="#426ab3" text="物料管理模块正式上线了!" />
		<swiper indicator-dots="true" indicator-active-color="#fff" class='swiper' autoplay='true'>
			<block>
				<swiper-item class="item">
					<view class='every_item'>
						<view class='s_num'>0</view>
						<view>今日入库</view>
					</view>
					<view class='every_item'>
						<view class='s_num'>0</view>
						<view>今日出库</view>
					</view>
				</swiper-item>

				<swiper-item class="item">
					<view class='every_item'>
						<view class='s_num'>0</view>
						<view>库存总量</view>
					</view>
					<view class='every_item'>
						<view class='s_num'>0</view>
						<view>库存成本</view>
					</view>
				</swiper-item>

				<swiper-item class="item">
					<view class='every_item'>
						<view class='s_num'>0</view>
						<view>库存种类</view>
					</view>
				</swiper-item>
			</block>
		</swiper>

		<!--操作列表-->
		<view class='o_list' style="margin-top: 20rpx;">

			<navigator v-for='(value,index) in optionsLists' :key="index" class='o_item' :url="(value.url)" hover-class="none">
				<view style='width:100%'>
					<image :src="(value.icon)" class='o_image' />
				</view>
				<view class='o_text'>{{value.name}}</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'

	import common from '@/utils/common.js';
	import mine from '@/utils/mine.js';
	import record from '@/utils/record.js';
	import Bmob from "hydrogen-js-sdk";
	let that;
	let uid;

	export default {
		components: {
			faIcon,
			uniNoticeBar,
			uniSearchBar
		},
		data() {
			return {
				optionsLists: [{
						name: '物料管理',
						icon: '/static/matter.png',
						url: '../matterList/matterList'
					},
					
				],
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');
		},

		onShow() {
		},

		methods: {

			},
			
	}
</script>

<style>
	.fristSearchView {
		padding: 10rpx 30rpx;
		background: #426ab3;
	}

	.scan_code {
		position: fixed;
		width: calc(100% - 60rpx);
		left: 30rpx;
		right: 30rpx;
		bottom: 10%;
		background: linear-gradient(to right, #426ab3, #118fff);
		line-height: 80rpx;
		text-align: center;
		border-radius: 4px;
		color: #fff;
		box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2)
	}

	.icon-scan {
		margin-right: 20rpx;
	}

	/* pages/home/index/index.wxss */
	.swiper {
		background: #426ab3;
		color: #fff;
		height: 14vh;
	}

	.item {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.every_item {
		width: 50%;
		text-align: center;
		line-height: 30px;
		font-size: 14px;
	}

	.s_num {
		font-size: 16px;
		font-weight: bold;
	}

	.o_list {
		background: #fff;
		padding: 15px 15px 0;
	}

	.o_image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		border: 3px solid#e2e2e2;
		padding: 6rpx 6rpx 0;
	}

	.o_item {
		width: 25%;
		text-align: center;
		display: inline-block;
		margin-bottom: 20rpx;
	}

	.o_text {
		color: #000;
		font-weight: bold;
		font-size: 23rpx;
	}

	.scan_code {
		position: fixed;
		width: calc(100% - 60rpx);
		left: 30rpx;
		right: 30rpx;
		bottom: 10%;
		background: linear-gradient(to right, #426ab3, #118fff);
		line-height: 80rpx;
		text-align: center;
		border-radius: 8rpx;
		color: #fff;
		box-shadow: 0 10rpx 10rpx rgba(0, 0, 0, 0.2);
		justify-content: center;
	}

	.icon-scan {
		margin-right: 20rpx;
	}
</style>
