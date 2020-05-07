<template>
	<view>
		<view style="background: #fff;padding: 10rpx 0;border-bottom: 1rpx solid#ddd;">
			<uni-segmented-control :current="current" :values="items" style-type="text" active-color="#426ab3" @clickItem="onClickItem" />
		</view>
		<!--<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" :shadow="false">
			<view class="input-view display_flex">
				<fa-icon type="search" size="16" color="#999"></fa-icon>
				<input confirm-type="search" class="input" type="text" placeholder="请输入供应商名字" @confirm="input_confirm" />
			</view>
		</uni-nav-bar>-->
		<view class='select'>
			<view class="section" style="border-right: 1rpx solid#DDDDDD;">
				<picker @change="bindDate_startChange" mode="date" :end="today">
					<view class="picker">
						<text style="margin-right: 6rpx;">{{params.startTime}}</text>
						<fa-icon type="angle-down" size="20" color="#999" />
					</view>
				</picker>
			</view>

			<view class="section">
				<picker @change="bindDate_endChange" mode="date" :end="today">
					<view class="picker">
						<text style="margin-right: 6rpx;">{{params.endTime}}</text>
						<fa-icon type="angle-down" size="20" color="#999" />
					</view>
				</picker>
			</view>
		</view>
		
		<view>

			<view v-for="(item,index) in PurchaseGoodList" :key="index" class="listItem" v-if="item.custom && item.custom.custom_name">
				<view style="border-bottom: 1rpx solid#ddd;padding-bottom: 20rpx;">{{item.custom.custom_name}}</view>
				<view v-if="current == 0" style="padding-top: 20rpx;" class="display_flex_bet">
					<view>销售数量：{{item._sumNum}}</view>
					<view>销售金额：{{item._sumTotal_money}}</view>
				</view>
				<view v-if="current == 1" style="padding-top: 20rpx;" class="display_flex_bet">
					<view>退货数量：{{item._sumNum}}</view>
					<view>退货金额：{{item._sumTotal_money}}</view>
				</view>
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
				items: ['销售', '销售退货'],
				current: 0,
				params: {
					customName: '',
					startTime: common.getDay(0),
					endTime: common.getDay(1),
					type: -1,
					extra_type: 1,
					isHaveReturn:true
				},

				PurchaseGoodList: [],
			}
		},

		onLoad() {
			that = this
			uni.setNavigationBarTitle({
				title: "客户销售统计"
			})

			that.getPurchaseGoodList()
		},
		methods: {
			
			bindDate_startChange(e){
				that.params.startTime = e.detail.value
				that.getPurchaseGoodList()
			},
			
			onClickItem(value){
				that.current = value
				if(value == 0){
					that.params.type =-1
					that.params.extra_type =1
				}else if(value == 1){
					that.params.type =1
					that.params.extra_type =4
				}
				that.getPurchaseGoodList()
			},
			
			bindDate_endChange(e){
				that.params.endTime = e.detail.value
				that.getPurchaseGoodList()
			},

			input_confirm(e) {
				that.params.customName = e.detail.value
				that.getPurchaseGoodList()
			},

			getPurchaseGoodList() {
				that.$http.Post("reportAnalys_sellCustom", that.params).then(res => {
					let thisResults = res.data.flat()
					that.PurchaseGoodList = res.data.flat()
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
		background: #fff;
		padding: 20rpx 30rpx;
		margin-top: 20rpx;
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
