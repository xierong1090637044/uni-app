<template>
	<!--当月详情-->
	<scroll-view style="padding: 0 10rpx;height: 100vh;width: calc(100% - 20rpx);" scroll-y="true">
		<view class="Item">
			<view style="color: #3D3D3D;margin-bottom: 10rpx;font-size: 32rpx;font-weight: bold;">商品分析</view>
			<view class="display_flex_bet">
				<view class="itemB">
					<view>全部商品</view>
					<view style="font-size: 30rpx;font-weight: bold;">{{goodsAnalysis.total_products}}种</view>
					<navigator hover-class="none" url="/pages/manage/good_add/good_add?type=more" class="addButton">新增</navigator>
				</view>
				<view style="width: 30%;">
					<view class="itemC" style="margin:0 10rpx 10rpx 0;">
						<view>总数</view>
						<view style="font-size: 30rpx;font-weight: bold;">{{goodsAnalysis.total_reserve}}</view>
					</view>
					<view class="itemC">
						<view>总成本</view>
						<view style="font-size: 30rpx;font-weight: bold;">{{goodsAnalysis.total_money}}</view>
					</view>
				</view>
				<view style="width: 30%;">
					<view class="itemC" style="margin:0 10rpx 10rpx 0;background: #ff8282;color: #fff;">
						<view>预警产品</view>
						<view style="font-size: 30rpx;font-weight: bold;">{{goodsAnalysis.warn_num}}</view>
					</view>
					<view class="itemC" style="background: #ff8282;color: #fff;">
						<view>高储产品</view>
						<view style="font-size: 30rpx;font-weight: bold;">{{goodsAnalysis.over_num}}</view>
					</view>
				</view>
			</view>
		</view>
		
		<!--通知列表-->
		<view class="display_flex" style="border-bottom: 1rpx solid#ddd;margin-bottom: 20rpx;">
			<fa-icon type="lightbulb-o" size="18" color="#426ab3"></fa-icon>
			<swiper vertical="true" style="color: #333 !important;height: 6vh;width: 100%;margin-left: 20rpx;" autoplay="true" v-if="noticeText.length > 0">
				<block>
					<swiper-item class="item" v-for="(item,index) in noticeText" :key="index">
						<navigator class="display_flex_bet" style="width: 100%;height: 100%;" hover-class="none" :url="item.link">
							<view style="font-weight: bold;width: 90%;" class="text_overflow">{{item.content}}</view>
							<fa-icon type="angle-right" size="18" color="#999"></fa-icon>
						</navigator>
					</swiper-item>
				</block>
			</swiper>
		</view>
		
		<view class="Item" style="overflow: hidden;">
			<view style="font-size: 32rpx;color: #3D3D3D;font-weight: bold;margin-bottom: 20rpx;">当月出入库统计</view>
			<achart :now_day="now_day" :type="2" :show="achartShow"></achart>
		</view>
		
		<view class="Item" style="margin-top: 20rpx;">
			<view style="color: #3D3D3D;margin-bottom: 10rpx;font-size: 32rpx;font-weight: bold;">客户分析</view>
			<view class="display_flex_bet">
				<view class="itemB">
					<view>全部客户</view>
					<view style="font-size: 30rpx;font-weight: bold;">{{customsAnalysis.number}}位</view>
					<navigator hover-class="none" url="/pages/manage/custom/add/add?type=customs" class="addButton">新增</navigator>
				</view>
				<view style="width: 30%;">
					<view class="itemC" style="margin:0 10rpx 10rpx 0;">
						<view>应收款</view>
						<view style="font-size: 30rpx;font-weight: bold;">{{customsAnalysis.debt}}</view>
					</view>
					<view class="itemC">
						<view>总记录</view>
						<view style="font-size: 30rpx;font-weight: bold;">{{customsAnalysis.historyNum}}</view>
					</view>
				</view>
				<view style="width: 30%;">
					<view class="itemC" style="margin:0 10rpx 10rpx 0;background: #ff8282;color: #fff;">
						<view>已发掘</view>
						<view style="font-size: 30rpx;font-weight: bold;">{{customsAnalysis.usedNum}}</view>
					</view>
					<view class="itemC" style="background: #ff8282;color: #fff;">
						<view>待发掘</view>
						<view style="font-size: 30rpx;font-weight: bold;">{{customsAnalysis.noUsedNum}}</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="Item" style="margin-top: 20rpx;">
			<view style="color: #3D3D3D;margin-bottom: 10rpx;font-size: 32rpx;font-weight: bold;">供货商分析</view>
			<view class="display_flex_bet">
				<view class="itemB">
					<view>全部供货商</view>
					<view style="font-size: 30rpx;font-weight: bold;">{{producersAnalysis.number}}位</view>
					<navigator hover-class="none" url="/pages/manage/custom/add/add?type=producers" class="addButton">新增</navigator>
				</view>
				<view style="width: 30%;">
					<view class="itemC" style="margin:0 10rpx 10rpx 0;">
						<view>应还款</view>
						<view style="font-size: 30rpx;font-weight: bold;">{{producersAnalysis.debt}}</view>
					</view>
					<view class="itemC">
						<view>总记录</view>
						<view style="font-size: 30rpx;font-weight: bold;">{{producersAnalysis.historyNum}}</view>
					</view>
				</view>
				<view style="width: 30%;">
					<view class="itemC" style="margin:0 10rpx 10rpx 0;background: #ff8282;color: #fff;">
						<view>已发掘</view>
						<view style="font-size: 30rpx;font-weight: bold;">{{producersAnalysis.usedNum}}</view>
					</view>
					<view class="itemC" style="background: #ff8282;color: #fff;">
						<view>待发掘</view>
						<view style="font-size: 30rpx;font-weight: bold;">{{producersAnalysis.noUsedNum}}</view>
					</view>
				</view>
			</view>
		</view>
		
	</scroll-view>
</template>

<script>
	import achart from '@/components/charts/AChart.vue'
	
	import common from '@/utils/common.js';
	import mine from '@/utils/mine.js';
	import record from '@/utils/record.js';
	import notice from '@/utils/notice.js';
	import Bmob from "hydrogen-js-sdk";
	let that;
	let uid;

	export default {
		components: {
			achart
		},
		data() {
			return {
				achartShow:true,
				now_day: common.getDay(0),
				user: uni.getStorageSync("user"),
				othercurrent: '',
				noticeText: '', //首页消息提示内容
				logsList: [],

				goodsAnalysis: {},//产品分析的数据
				customsAnalysis:{},//客户分析的数据
				producersAnalysis:{},//客户分析的数据
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');
		},

		onShow() {
			if (uni.getStorageSync("user")) {
				that.loadallGoods();
				
				that.achartShow = true,
				notice.getNoticeList().then(res => {
					that.noticeText = res
				})

				mine.getMineInfo().then(res => {
					console.log(res)
					if (res.disabled) {
						setTimeout(function() {
							uni.showToast({
								title: "该账户已禁用",
								icon: "none"
							})
						}, 1000)

						uni.reLaunch({
							url: "/pages/landing/landing"
						})
					}
				})
			}
		},
		
		onHide() {
			that.achartShow = false
		},

		methods: {

			//得到总库存数和总金额
			loadallGoods: function() {
				record.loadallGoods().then(res => {
					that.goodsAnalysis = res
					record.getAllCustom().then(res=>{
						that.customsAnalysis = res
						record.getAllProducer().then(res=>{
							that.producersAnalysis = res
							record.getAllAccounts().then(res=>{
								console.log(res)
							})
						})
					})
				})
			},

			//得到日志列表
			get_logsList() {
				const query = Bmob.Query("logs");
				query.equalTo("parent", "==", uid);
				query.equalTo("type", "!=", -2);
				query.order("-createdAt")
				query.limit(20);
				query.find().then(res => {
					//console.log(res)
					for (let item of res) {
						if (item.type == 5) {
							item.link = '/pages/manage/good_det/good_det?id=' + item.detail_id + '&type=false'
						} else if (item.type == -1 || item.type == 1 || item.type == 2 || item.type == 3) {
							item.link = '/pages/report/EnteringHistory/detail/detail?id=' + item.detail_id
						}
					}
					that.logsList = res
				});
			},

		}
	}
</script>

<style lang="scss">
	.Item {
		background: #FFFFFF;
		padding: 30rpx;
		border-radius: 16rpx;

		.itemB {
			background: #f2f2f2;
			text-align: center;
			padding: 42rpx 0;
			width: 30%;
			border-radius: 8rpx;
		}

		.itemC {
			background: #f2f2f2;
			text-align: left;
			padding: 10rpx 20rpx;
			border-radius: 16rpx;
		}

		.addButton {
			color: #118FFF;
			border: 1rpx solid#118FFF;
			border-radius: 40rpx;
			width: 60%;
			margin: 0 auto;
			margin-top: 20rpx;
		}
	}
</style>
