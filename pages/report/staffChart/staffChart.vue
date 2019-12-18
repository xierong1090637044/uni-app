<template>
	<view style="height: 100vh;background: #FFFFFF;">

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

		<view class="display_flex_bet frist">
			<view class="item" style="border-right: 1rpx solid#F7F7F7;">
				<view>销售额</view>
				<view style="color: #333;">￥{{headerData.data1}}</view>
			</view>
			<view class="item" style="border-right: 1rpx solid#F7F7F7;">
				<view>销售毛利</view>
				<view style="color: #333;">￥{{headerData.data2}}</view>
			</view>
			<view class="item">
				<view>销售笔数</view>
				<view style="color: #333;">{{headerData.data3}}</view>
			</view>
		</view>

		<view>
			<view style="padding: 20rpx;border-bottom: 1rpx solid#F7F7F7;">销售排行</view>
			
			<navigator v-for="(staff,index) in opreaterList" :key="index" hover-class="none" :url="'/pages/manage/staff/detail/detail?start_date='+start_date+'&end_date='+end_date" @click="StorageSync(staff.opreater)">
				<view class='content'>
					<!--<image v-if="staff.avatarUrl" :src="staff.avatarUrl" class="staff_avatar"></image>-->
					<view class="display_flex_bet">
						<view class="display_flex">
							<fa-icon type="user-circle" size="30" color="#426ab3" style="margin-right: 20rpx;"></fa-icon>
							<view>
								<view class='staff_name'>{{staff.opreater.nickName}}</view>
								<view class='staff_mobile display_flex'>
									<view>销售笔数 {{staff.sellNum}}</view>
									<view style="margin-left: 10rpx;">销售额 {{staff.sellPrice}}</view>
								</view>
							</view>
			
						</view>
						<fa-icon type="angle-right" size="20" color="#999" />
					</view>
				</view>
			
			</navigator>
		</view>

	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from '@/utils/common.js';

	let uid;
	let that;
	export default {
		data() {
			return {
				start_date: common.getDay(0, true),
				end_date: common.getDay(1, true),
				start_date_desc: '',
				end_date_desc: '',
				
				headerData:{
					data1:0,
					data2:0,
					data3:0,
				},
				opreaterList:[],
			}
		},

		onLoad() {
			that = this;
			uid = uni.getStorageSync("uid");

			that.start_date_desc = that.start_date.split(" ")[0];
			that.end_date_desc = that.end_date.split(" ")[0];
			that.getdetail()
		},

		methods: {
			
			StorageSync(item){
				uni.setStorageSync('staff',item)
			},
			
			bindDate_startChange(e){
				console.log(e)
				that.start_date = e.detail.value+' 00:00:00';
				that.getdetail()
			},
			
			bindDate_endChange(e){
				console.log(e)
				that.end_date = e.detail.value+' 00:00:00';
				that.getdetail()
			},
			
			getdetail(){
				const query = Bmob.Query("order_opreations");
				query.equalTo("master", "==", uid);
				query.include("opreater");
				//query.statTo("sum", "num");
				query.equalTo("type", "==", -1);
				query.equalTo("status", "==", true);
				query.equalTo("extra_type", "==", 1);
				query.statTo("groupby", "opreater");
				query.equalTo("createdAt", ">=", that.start_date);
				query.equalTo("createdAt", "<=", that.end_date);
				query.find().then(res => {
					console.log(res)
					for(let item of res){
						query.equalTo("master", "==", uid);
						query.equalTo("opreater", "==", item.opreater.objectId);
						query.equalTo("type", "==", -1);
						query.equalTo("status", "==", true);
						query.equalTo("extra_type", "==", 1);
						query.equalTo("createdAt", ">=", that.start_date);
						query.equalTo("createdAt", "<=", that.end_date);
						query.find().then(res => {
							item.sellNum = res.length
							item.sellPrice = 0
							for(let record of res){
								item.sellPrice += record.all_money
							}
							
							console.log(res)
						})
					}
					that.opreaterList = res
					that.getheaderData()
				});
			},
			
			//得到首页的总数
			getheaderData() {
				that.headerData = {data1:0,data2:0,data3:0};
				const query = Bmob.Query("order_opreations");
				query.equalTo("master", "==", uid);
				query.equalTo("type", "==", -1);
				query.equalTo("status", "==", true);
				query.equalTo("extra_type", "==", 1);
				query.equalTo("createdAt", ">=", that.start_date);
				query.equalTo("createdAt", "<=", that.end_date);
				query.find().then(res => {
					console.log(res)
					for(let item of res){
						that.headerData.data1 += item.all_money?item.all_money:0
						that.headerData.data2 += item.profit?item.profit:0
					}
					that.headerData.data3 += res.length
				});
			}
		}
	}
</script>

<style lang="scss">
	.frist {
		border-bottom: 1rpx solid#F7F7F7;
		padding: 10rpx 0;

		.item {
			text-align: center;
			width: 100%;
			color: #999;
		}
	}

	.select {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 30rpx;
		margin-bottom: 20rpx;
		border-bottom: 1rpx solid#F7F7F7;

		.section {
			width: 50%;
			text-align: center;
		}
	}
	
	.staff_name {
		font-weight: bold;
		font-size: 30rpx;
		color: #3D3D3D;
		margin-bottom: 4rpx;
	}
	
	.staff_mobile {
		color: #999;
	}
	
	.right_item {
		width: 100%;
		border-bottom: 1rpx solid#ccc;
	}
	
	.staff_avatar {
		width: 100rpx;
		height: 70rpx;
		margin-right: 20rpx;
	}
	
	.content {
		padding: 10rpx 30rpx;
		border-bottom: 1rpx solid#F7F7F7;
	}
</style>
