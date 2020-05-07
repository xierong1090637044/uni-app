<template>
	<view>
		<view class='select'>
			<view class="section" style="border-right: 1rpx solid#DDDDDD;">
				<picker @change="bindDateChange" mode="date" fields="month">
					<view class="picker">
						<text style="margin-right: 6rpx;">{{params.year}}-{{params.month}}</text>
						<fa-icon type="angle-down" size="20" color="#999" />
					</view>
				</picker>
			</view>

			<view class="section">
				<navigator hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose">
					<view class="picker">
						<text style="margin-right: 6rpx;">{{params.stock.stock_name}}</text>
						<fa-icon type="angle-down" size="20" color="#999" />
					</view>
				</navigator>
			</view>
		</view>
		<view style="padding: 0 30rpx;background: #fff;">
			<view class="display_flex_bet" style="background: #999;padding: 6rpx 0;">
				<view style="flex: 1;text-align: center;">期间</view>
				<view style="flex: 1;text-align: center;">入库数</view>
				<view style="flex: 1;text-align: center;">出库数</view>
			</view>
			<view v-for="(item,index) in stockOutInList" :key="index" class="display_flex_bet listItem">
				<view style="flex: 1;text-align: center;">{{item.name}}</view>
				<view v-if="item.in" style="flex: 1;text-align: center;">{{item.in._sumNum}}</view>
				<view v-else style="flex: 1;text-align: center;">0</view>
				
				<view v-if="item.out" style="flex: 1;text-align: center;">{{item.out._sumNum}}</view>
				<view v-else style="flex: 1;text-align: center;">0</view>
			</view>
		</view>
	</view>

</template>

<script>
	import common from '@/utils/common.js';
	let that;
	export default {
		data() {
			return {
				today: common.getDay(1),
				params: {
					year:common.getDay(1).split("-")[0],
					month:common.getDay(1).split("-")[1],
					stock:{
						stock_name:"全部仓库",
						objectId:''
					}
				},

				stockOutInList: [],
			}
		},

		onLoad() {
			that = this
			uni.setNavigationBarTitle({
				title: "出入库统计"
			})
			uni.removeStorageSync("warehouse")
		},
		
		onShow() {
			if(uni.getStorageSync("warehouse")){
				that.params.stock.objectId = uni.getStorageSync("warehouse")[0].stock.objectId
				that.params.stock.stock_name = uni.getStorageSync("warehouse")[0].stock.stock_name
			}
			
			that.getstockOutInList()
		},
		
		methods: {
			
			bindDateChange(e){
				let selectDate = e.detail.value
				that.params.year = selectDate.split("-")[0]
				that.params.month = selectDate.split("-")[1]
				that.getstockOutInList()
			},

			getstockOutInList() {
				that.$http.Post("reportAnalys_stockOutIn", that.params).then(res => {
					let thisResults = res.data.flat()
					that.stockOutInList = res.data.flat()
				})
			}
		}
	}
</script>

<style lang="scss">
	view {
		line-height: 1.4;
	}

	.listItem {
		padding: 20rpx 0;
		border-bottom: 1rpx solid#ddd;
	}

	.goodImage {
		width: 120rpx;
		height: 120rpx;
		border-radius: 16rpx;
	}

	.select {
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 30rpx;
		border-bottom: 1rpx solid#F7F7F7;

		.section {
			width: 50%;
			text-align: center;
		}
	}
</style>
