<template>
	<view>
		<loading v-if="loading"></loading>
		<view v-else>
			<!--<view class="frist">供货商名字： <text>{{name}}</text></view>-->
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

			<scroll-view style="height: calc(100vh - 182rpx);padding: 0 30rpx;background: #FFFFFF;width: calc(100% - 60rpx);"
			 scroll-y>
				<navigator v-for="(item,index) in debt_list" :key="index" class="list_item" hover-class="none" :url="'/pages/finance/recordDetail/recordDetail?id='+item.objectId">
					<view class="display_flex_bet">
						<view>还款账户：<text>{{item.account.name}}</text></view>
						<view><text style="color: #f30;">-{{item.real_money}}</text></view>
					</view>
					<view v-if="item.opreater.nickName"> 操作人：{{item.opreater.nickName}}</view>
					<view style="color: #999999;">{{item.createdAt}}</view>
				</navigator>
			</scroll-view>
			
			<view style="position: fixed;bottom: 0;width: 100%;background: #fff;padding:20rpx 30rpx;border-top: 1rpx solid#F4F4F4;" class="display_flex">
				<view style="margin-right: 60rpx;">支出：<text style="color: #f30;font-weight: bold;">￥{{outMoney}}</text></view>
			</view>
			
		</view>

	</view>
</template>

<script>
	import common from '@/utils/common.js';
	import Bmob from "hydrogen-js-sdk";
	import producers from '@/utils/producers.js';
	import loading from "@/components/Loading/index.vue"

	let that;
	let producerId;
	export default {
		components: {
			loading
		},
		data() {
			return {
				start_date: common.getDay(0, true),
				end_date: common.getDay(1, true),
				start_date_desc: '',
				end_date_desc: '',
				inMoney: 0,
				outMoney: 0,

				debt_list: [],
				name: '',
				loading: true,
			}
		},
		methods: {
			bindDate_startChange(e) {
				console.log(e)
				that.start_date = e.detail.value + ' 00:00:00';
				that.getList()
			},

			bindDate_endChange(e) {
				console.log(e)
				that.end_date = e.detail.value + ' 00:00:00';
				that.getList()
			},

			getList() {
				const query = Bmob.Query("order_opreations");
				query.equalTo("producer", "==", producerId);
				query.equalTo("type","==", 1);
				query.equalTo("extra_type","==", 5);
				query.equalTo("account","!=", null);
				query.include("opreater", "account");
				query.find().then(res => {
					that.loading = false
					that.debt_list = res

					for (let item of res) {
						if (item.type == -1) {
							that.inMoney += item.real_money
						} else if (item.type == 1) {
							that.outMoney += item.real_money
						}
					}
				});
			}
		},
		onLoad(options) {
			//console.log(options)
			that = this;
			that.name = options.name
			that.start_date_desc = that.start_date.split(" ")[0];
			that.end_date_desc = that.end_date.split(" ")[0];
			producerId = options.id;
			
			that.getList()
		},
	}
</script>

<style lang="scss">
	.frist {
		background: #FFFFFF;
		padding: 20rpx 30rpx;
		border-bottom: 1rpx solid#DDDDDD;
	}

	.list_item {
		padding: 16rpx 0;
		border-bottom: 1rpx solid#DDDDDD;
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
</style>
