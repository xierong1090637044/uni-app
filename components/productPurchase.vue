<template>
	<view>
		<view class="frist">
			<view class="display_flex_bet header">
				<view class="listItem">实际进货<fa-icon type="angle-down" size="18" color="#999" style="margin-left: 6rpx;"></fa-icon>
				</view>
				<view class="display_flex listItem" @click="open">
					<view>
						<view style="font-size: 24rpx;line-height: 28rpx;">{{start_date}}</view>
						<view style="font-size: 24rpx;line-height: 28rpx;">{{end_date}}</view>
					</view>
					<fa-icon type="angle-down" size="18" color="#999" style="margin-left: 6rpx;"></fa-icon>
				</view>
				<navigator class="listItem" url="/pages/manage/warehouse/warehouse?type=choose">
					<text>{{stock.stock_name || "所有仓库"}}</text>
					<fa-icon type="angle-down" size="18" color="#999" style="margin-left: 6rpx;"></fa-icon>
				</navigator>
			</view>
		</view>

		<view class="display_flex_bet second">
			<view class="secondItem">
				<view style="line-height: 40rpx;color: #333;font-weight: bold;">{{purcharseNotice.num}}</view>
				<view style="line-height: 40rpx;color: #999;font-size: 24rpx;">实际进货数</view>
			</view>
			<view class="secondItem">
				<view style="line-height: 40rpx;color: #333;font-weight: bold;">￥{{purcharseNotice.money}}</view>
				<view style="line-height: 40rpx;color: #999;font-size: 24rpx;">实际进货金额</view>
			</view>
		</view>

		<view style="margin-top: 60rpx;">
			<view style="padding: 0 20rpx;margin-bottom: 10rpx;" class="display_flex">
				<view style="background: #426ab3;width: 16rpx;height: 40rpx;"></view>
				<view style="color: #999;margin-left: 20rpx;font-weight: bold;">供应商维度</view>
			</view>
			<z-table :tableData='purcharseList' :columns='alignColumns'></z-table>
		</view>

		<view style="margin-top: 60rpx;">
			<view style="padding: 0 20rpx;margin-bottom: 10rpx;" class="display_flex">
				<view style="background: #426ab3;width: 16rpx;height: 40rpx;"></view>
				<view style="color: #999;margin-left: 20rpx;font-weight: bold;">操作人维度</view>
			</view>
			<z-table :tableData='purcharseList1' :columns='alignColumns1'></z-table>
		</view>

		<uni-calendar ref="calendar" :date="info.date" :insert="info.insert" :lunar="info.lunar" :range="info.range" @confirm="confirm"
		 :endDate="start_date" />
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from '@/utils/common.js';
	import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	import zTable from "@/components/z-table/z-table.vue";

	let that;
	export default {
		components: {
			zTable,
			uniCalendar,
		},
		props: {
			productId: {
				type: String,
				default: {}
			},
			stock: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				start_date: common.getDay(0, false),
				end_date: common.getDay(1, false),
				info: {
					date: common.getDay(0, true).split(" ")[0],
					lunar: true,
					range: true,
					insert: false,
					selected: []
				},

				purcharseList: [],
				purcharseList1: [],
				purcharseNotice: {
					num: 0,
					money: 0
				},
				alignColumns: [{
						title: "供应商",
						key: 'name',
						width: '300'
					},
					{
						title: '实际进货数',
						key: "num",
						width: '200'
					},
					{
						title: "实际进货金额",
						key: "really_total_money",
						width: '200'
					}
				],
				alignColumns1: [{
						title: "操作人",
						key: 'nickName',
						width: '300'
					},
					{
						title: '实际进货数',
						key: "num",
						width: '200'
					},
					{
						title: "实际进货金额",
						key: "really_total_money",
						width: '200'
					}
				],
			};
		},

		watch: {
			stock(val, oldVal) { //普通的watch监听
				if (val.objectId != oldVal.objectId) {
					this.getdetail()
				}
			},
		},

		mounted() {
			that = this;
			that.getdetail();
		},

		methods: {
			open() {
				that.$refs.calendar.open();
			},
			confirm(e) {
				console.log(e)
				if (e.range.data.length == 0) {
					that.start_date = e.fulldate
				} else {
					that.start_date = e.range.data[0];
					that.end_date = e.range.data[e.range.data.length - 1];
				}

				that.getdetail()
			},

			getdetail() {
				uni.removeStorageSync("productPurchase");
				that.purcharseNotice.num = 0;
				that.purcharseNotice.money = 0;
				that.purcharseList1 = [];
				that.purcharseList = [];

				const query = Bmob.Query("Bills");
				query.equalTo("userId", "==", uni.getStorageSync("uid"));
				query.equalTo("type", "==", 1);
				query.equalTo("extra_type", "==", 1);
				query.equalTo("createdAt", ">=", that.start_date + ' 00:00:00');
				query.equalTo("createdAt", "<=", that.end_date + ' 23:59:59');
				query.equalTo("goodsId", "==", that.productId);
				if(that.stock && that.stock.objectId) query.equalTo("stock", "==", that.stock.objectId);
				query.count().then(res => {
					let count = res;
					let newArrar = [];
					if (count == 0) return;

					for (let i = 0; i < Math.ceil(count / 500); i++) {
						if(that.stock && that.stock.objectId) query.equalTo("stock", "==", that.stock.objectId);
						query.include("producer", "opreater");
						query.limit(500);
						query.skip(500 * i);
						query.find().then(res => {
							for (let item of res) {
								if (item.producer && item.producer.objectId) {
									that.purcharseNotice.num += item.num
									that.purcharseNotice.money += item.really_total_money
									item.name = item.producer.producer_name
									item.nickName = item.opreater.nickName
									newArrar.push(item)
								}
							}

							uni.setStorageSync("productPurchase", newArrar);
							that.purcharseList = uni.getStorageSync("productPurchase").reduce((resp, obj) => {
								let originObj = resp.find(item => item.producer.objectId === obj.producer.objectId);
								if (originObj) {
									originObj.num += obj.num;
									originObj.really_total_money += obj.really_total_money;
								} else {
									resp.push(obj)
								}
								return resp;
							}, [])

							that.purcharseList1 = uni.getStorageSync("productPurchase").reduce((resp1, obj1) => {
								let originObj1 = resp1.find(item1 => item1.opreater.objectId === obj1.opreater.objectId);
								if (originObj1) {
									originObj1.num += obj1.num;
									originObj1.really_total_money += obj1.really_total_money;
								} else {
									resp1.push(obj1)
								}
								return resp1;
							}, [])
						});
					}

				})
			},
		}
	}
</script>

<style lang="scss">
	.frist {
		background: #fff;

		.header {
			padding: 10rpx 0;
		}

		.listItem {
			text-align: center;
			width: 33.33%;
			justify-content: center;
		}
	}

	.second {
		background: #fff;
		border-top: 1rpx solid#ddd;
		padding: 20rpx 0;

		.secondItem {
			width: 50%;
			text-align: center;
		}
	}
</style>
