<template>
	<view>
		<view>
			<!--*筛选器*-->
			<view class='select'>
				<view class="section" style="border-right: 1rpx solid#DDDDDD;">
					<picker @change="bindDate_startChange" mode="date" :end="start_date_desc">
						<view class="picker">
							<text style="margin-right: 6rpx;">{{start_date.split(" ")[0]}}</text>
							<fa-icon type="angle-down" size="20" color="#999" />
						</view>
					</picker>
				</view>

				<view class="section">
					<picker @change="bindDate_endChange" mode="date" :end="end_date_desc">
						<view class="picker">
							<text style="margin-right: 6rpx;">{{end_date.split(" ")[0]}}</text>
							<fa-icon type="angle-down" size="20" color="#999" />
						</view>
					</picker>
				</view>
			</view>

			<scroll-view style="height: calc(100vh - 182rpx);" scroll-y>
				<navigator v-for="(item,index) in debt_list" :key="index" class="list_item" hover-class="none" :url="'/pages/finance/CPHistory/customInHistoryDet/customInHistoryDet?id='+item.objectId">
					<block>
						<view v-if="item.custom&&item.custom.custom_name" class="cpName">{{item.custom.custom_name}}</view>
					</block>
					
					<block>
						<view style="padding: 0 0 10rpx;border-bottom: 1rpx solid#ddd;margin-bottom: 10rpx;">
							<view class="display_flex">
								<text class="leftText">收款账户：</text>
								<text class="rightText">{{item.account.name}}</text>
							</view>
							<view class="display_flex" v-if="item.fristClass">
								<text class="leftText">交易类别：</text>
								<text>{{item.fristClass.class_text}}</text>
								<text v-if="item.secondClass">{{item.secondClass.class_text}}</text>
							</view>
							<view class="display_flex">
								<text class="leftText">收款金额：</text>
								<text class="rightText">{{item.real_money}}</text>
							</view>
							<view class="display_flex">
								<text class="leftText">收款日期：</text>
								<text class="rightText">{{item.createdAt}}</text>
							</view>
						</view>
						<view class="display_flex_bet">
							<view>[{{item.opreater.nickName}}]</view>
							<view class="iconClass">已收款</view>
						</view>
					</block>
				</navigator>
			</scroll-view>

			<view style="position: fixed;bottom: 0;width: 100%;background: #fff;padding:20rpx 30rpx;border-top: 1rpx solid#F4F4F4;"
			 class="display_flex">
				<view style="margin-right: 60rpx;">收入：<text style="color: #2ca879;font-weight: bold;">￥{{inMoney}}</text></view>
			</view>
		</view>

	</view>
</template>

<script>
	import common from '@/utils/common.js';
	import Bmob from "hydrogen-js-sdk";
	import customs from '@/utils/customs.js';
	import loading from "@/components/Loading/index.vue"

	let that;
	let uid;
	export default {
		components: {
			loading
		},
		data() {
			return {
				start_date: common.getDay(0, true,true),
				end_date: common.getDay(1, true),
				start_date_desc: '',
				end_date_desc: '',

				inMoney: 0,
				outMoney: 0,
				debt_list: [],
				type:'',
				accountId:''
			}
		},
		
		onLoad(options) {
			//console.log(options)
			that = this;
			uid = uni.getStorageSync("uid");
			that.start_date_desc = that.start_date.split(" ")[0];
			that.end_date_desc = that.end_date.split(" ")[0];
			that.accountId = options.id;
			that.type = options.type;
		
			that.getList()
			
			uni.setNavigationBarTitle({
				title:"收款单管理"
			})
		},
		
		
		methods: {
			bindDate_startChange(e) {
				that.inMoney = 0;
				that.outMoney = 0;
				that.start_date = e.detail.value + ' 00:00:00';
				that.getList()
			},

			bindDate_endChange(e) {
				that.inMoney = 0;
				that.outMoney = 0;
				that.end_date = e.detail.value + ' 00:00:00';
				that.getList()
			},

			getList() {
				let opreationList = []
				uni.showLoading({title:"加载中..."})
				const query = Bmob.Query("order_opreations");
				if (that.accountId) {
					query.equalTo("account", "==", that.accountId);
				}else{
					query.equalTo("account", "!=", null);
				}
				query.equalTo("type", "==", -1);
				query.equalTo("master", "==", uid);
				query.equalTo("createdAt", ">=", that.start_date);
				query.equalTo("createdAt", "<=", that.end_date);
				query.equalTo("real_money", ">", 0);
				query.include("opreater", "account", "custom", "producer", "secondClass", "fristClass");
				query.order("-createdAt");
				query.limit(500);
				query.count().then(res => {
					let opreaterCount = res
					if(opreaterCount == 0){
						uni.hideLoading()
						return
					}else{
						for (var i = 0; i < Math.ceil(opreaterCount / 500); i++) {
							query.limit(500);
							query.skip(500 * i);
							query.find().then(res => {
								for (let item of res) {
									if (item.type == -1) {
										that.inMoney += item.real_money
									}
									opreationList.push(item)
								}
								
								if(i == Math.ceil(opreaterCount / 500)){
									that.debt_list = opreationList
									uni.hideLoading()
								}
								
							})
						}
					}
					
				})
			}
		},
	}
</script>

<style lang="scss">
	page{
		background: #F1F1F1;
	}
	.frist {
		background: #FFFFFF;
		padding: 20rpx 30rpx;
		border-bottom: 1rpx solid#DDDDDD;
	}

	.list_item {
		padding: 16rpx 30rpx;
		margin-top: 30rpx;
		background: #fff;
	}

	.select {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 30rpx;
		border-bottom: 1rpx solid#F7F7F7;
		background: #fff;

		.section {
			width: 50%;
			text-align: center;
		}
	}
	
	.cpName{
		font-size: 30rpx;
		font-weight: bold;
		color: #000;
	}
	
	.rightText{
		color: #000;
		font-weight: bold;
	}
	
	.leftText{
		color: #333;
	}
	
	.iconClass{
		background: #2CA879;
		color: #fff;
		font-size: 20rpx;
		padding: 2rpx 6rpx;
		border-radius: 8rpx;
	}
</style>
