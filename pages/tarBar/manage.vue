<template>
	<!--操作列表-->

	<view class="display_flex">
		<scroll-view scroll-y="true" style="height:100vh;width: 20%;">
			<view v-for="(item,index) in leftOptionList" :key="index" :class="[leftSelectedIndex==index?'itemSelected':'']"
			 class="leftItem" @click="changeView(index)">{{item}}</view>
		</scroll-view>
		<scroll-view scroll-y="true" style="height:100vh;width: 80%;padding-left: 20rpx;background: #FFFFFF;">
			<view style="padding:20rpx 20rpx 20rpx 0;" v-if="leftSelectedIndex == 0">
				<sStockModule></sStockModule>
			</view>

			<view style="padding:20rpx 20rpx 20rpx 0;" v-if="leftSelectedIndex == 1">
				<sFinanceModule></sFinanceModule>
			</view>

			<view style="padding:20rpx 20rpx 20rpx 0;" v-if="leftSelectedIndex == 2">
				<sOrderListsModule></sOrderListsModule>
			</view>
			
			<!--报表-->
			<view style="padding:20rpx 20rpx 20rpx 0;" v-if="leftSelectedIndex == 3">
				<sReportModule></sReportModule>
			</view>
			
			<!--分析-->
			<view style="padding:20rpx 20rpx 20rpx 0;" v-if="leftSelectedIndex == 4">
				<sAnalyseModule></sAnalyseModule>
			</view>
			
			<view style="padding:20rpx 20rpx 20rpx 0;" v-if="leftSelectedIndex == 5">
				<sSystemModule></sSystemModule>
			</view>
			
			<view style="padding:20rpx 20rpx 20rpx 0;" v-if="leftSelectedIndex == 6">
				<sCourseModule></sCourseModule>
			</view>


		</scroll-view>
	</view>


</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import staffs from '@/utils/staffs.js';
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import sFinanceModule from "@/components/sFinanceModule/sFinanceModule.vue"
	import sStockModule from "@/components/sStockModule/sStockModule.vue"
	import sOrderListsModule from "@/components/sOrderListsModule/sOrderListsModule.vue"
	import sAnalyseModule from "@/components/sAnalyseModule/sAnalyseModule.vue"
	import sSystemModule from "@/components/sSystemModule/sSystemModule.vue"
	import sCourseModule from "@/components/sCourseModule/sCourseModule.vue"
	import sReportModule from "@/components/sReportModule/sReportModule.vue"

	let that;

	export default {
		components: {
			sFinanceModule,
			sStockModule,
			sOrderListsModule,
			sAnalyseModule,
			sSystemModule,
			sCourseModule,
			sReportModule,
			faIcon
		},
		data() {
			return {
				leftOptionList: ['库存', '财务', '记录', '报表','分析','系统'],
				leftSelectedIndex: 0,
				identity: uni.getStorageSync("identity"),
				setting: uni.getStorageSync("setting"),
				now_optionsLists: [],
				second_optionsLists: [],
				analysisModule: [],
				//financeModule: []
			}
		},
		onLoad() {
			that = this;
		},
		onShow() {
			that.setting = uni.getStorageSync("setting")
			uni.getStorage({
				key: 'identity',
				success: function(res) {
					if (res.data == "2") {
						staffs.get_satffAuth().then(res => {
							console.log(res)
							let now_staff = uni.getStorageSync("user")
							if (res.masterId.is_vip) {
								now_staff.is_vip = true
								now_staff.vip_time = now_staff.masterId.vip_time
							} else {
								now_staff.is_vip = false
								now_staff.vip_time = 0
							}
							uni.setStorageSync("user", now_staff)
						});
					}
				},
			})
		},
		methods: {
			changeView(index){
				that.leftSelectedIndex = index
			}
		}
	}
</script>

<style>
	/* pages/home/index/index.wxss */
	.manage_icon {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
	}

	.leftItem {
		text-align: center;
		line-height: 100rpx;
		color: #333;
		font-weight: bold;
	}

	.itemSelected {
		background: #fff;
		color: #426ab3 !important;
		border-left: 4rpx solid #426ab3;
	}

	.leftSe .item {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.every_item {
		width: 50%;
		text-align: center;
		line-height: 30rpx;
		font-size: 14rpx;
	}

	.s_num {
		font-size: 16rpx;
		font-weight: bold;
	}

	.o_list {
		background: #fff;
		display: flex;
		flex-wrap: wrap;
	}

	.o_item {
		width: 33.33%;
		text-align: center;
		padding: 30rpx 0 0;
	}

	.o_left_item {
		display: flex;
		align-items: center;
	}

	.o_text {
		color: #000;
		font-weight: bold;
		font-size: 24rpx;
	}

	.fa-icon {
		line-height: 80rpx !important;
	}
</style>
