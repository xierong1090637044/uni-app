<template>
	<view>
		<loading v-if="loading"></loading>

		<view v-else>
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
			
			<view class="list">
				<view class="display_flex list_frst">
					<image src="/static/chengben.png" class="icon_img"></image>
					<text class="text_notice">{{ i18n.a }} {{reserve_money}}</text>
				</view>
				<view class="display_flex_bet list_second">
					<view class="item" style="border-right: 1rpx solid#ddd;">
						<view>库存总数</view>
						<view class="show_num">{{all_reserve}}</view>
					</view>
					<view class="item">
						<view>预警产品数</view>
						<view class="show_num">{{warn_num}}</view>
					</view>
				</view>
				
				<!--<view class="display_flex_bet list_second">
					<view class="item" style="border-right: 1rpx solid#CCCCCC;">
						<view>当日应收</view>
						<view class="show_num">{{should_get_money}}</view>
					</view>
					<view class="item">
						<view>当日实收</view>
						<view class="show_num">{{real_get_money}}</view>
					</view>
				</view>-->
				
			</view>

			<view class="second_list">
				<view class="display_flex_bet list_item">
					<view class="display_flex second_item">
						<image src="/static/reserve_in.png" class="icon_img"></image>
						<view>
							<view class="text_notice">此时间段入库数</view>
							<view class="reserve_text">{{get_reserve}}</view>
						</view>
					</view>
					<view class="display_flex second_item">
						<image src="/static/reserve_out.png" class="icon_img"></image>
						<view>
							<view class="text_notice">此时间段出库数</view>
							<view class="reserve_text">{{out_reserve}}</view>
						</view>
					</view>
				</view>
				
				<view class="display_flex_bet list_item">
					<view class="display_flex second_item">
						<view>
							<view class="text_notice">入库实际总额</view>
							<view class="reserve_text">{{get_reserve_num}}</view>
						</view>
					</view>
					<view class="display_flex second_item">
						<view>
							<view class="text_notice">出库实际总额</view>
							<view class="reserve_text">{{out_reserve_num}}</view>
						</view>
					</view>
				</view>
				
				
				<view class="display_flex_bet list_item">
					<view class="display_flex second_item">
						<view>
							<view class="text_notice">入库的卖出总额</view>
							<view class="reserve_text">{{get_reserve_real_money}}</view>
						</view>
					</view>
					<view class="display_flex second_item">
						<view>
							<view class="text_notice">出库的成本总额</view>
							<view class="reserve_text">{{out_reserve_real_money}}</view>
						</view>
					</view>
				</view>
				
				<view class="display_flex_bet list_item">
					<view class="display_flex second_item">
						<view>
							<view class="text_notice">预计可获利润</view>
							<view class="reserve_text">{{get_reserve_get_num}}</view>
						</view>
					</view>
					<view class="display_flex second_item">
						<view>
							<view class="text_notice">毛利润</view>
							<view class="reserve_text">{{out_reserve_get_num}}</view>
						</view>
					</view>
				</view>

			</view>


		</view>

	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from '@/utils/common.js';
	import record from '@/utils/record.js';
	import loading from "@/components/Loading/index.vue"

	let that = this;
	let uid;
	
	export default {
		components: {
			loading
		},
		data() {
			return {
				loading: true,
				start_date:common.getDay(0, true),
				end_date:common.getDay(1, true),
				start_date_desc:common.getDay(0, true).split(" ")[0],
				end_date_desc:common.getDay(1, true).split(" ")[0],
				reserve_money: 0, //库存成本
				all_reserve: 0, //总库存
				warn_num: 0, //预警产品数量
				today_in: 0,
				today_out: 0,

				get_reserve: 0,
				out_reserve: 0,
				get_reserve_real_money: 0,
				out_reserve_real_money: 0,
				get_reserve_num: 0,
				out_reserve_num: 0,
				get_reserve_get_num: 0,
				out_reserve_get_num: 0,
				should_get_money:0,
				real_get_money:0,
			}
		},
		onLoad() {
			that = this;
			uid = uni.getStorageSync("uid")

			that.get_allCost();
			that.gettoday_detail()
			console.log(common.getDay(1, true))
		},
		methods: {
			//起始时间改变
			bindDate_startChange(e){
				that.start_date = e.detail.value+" 00:00:00"
				that.gettoday_detail()
			},
			
			//截止时间改变
			bindDate_endChange(e){
				that.end_date = e.detail.value+" 00:00:00"
				that.gettoday_detail()
			},
			
			//获得库存成本和总库存
			get_allCost() {
				record.loadallGoods().then(res=>{
					console.log(res)
					that.reserve_money = res.total_money
					that.all_reserve = res.total_reserve
					that.warn_num = res.warn_num
					that.loading = false
				});
			},

			//得到今日概况
			gettoday_detail: function() {
				record.gettoday_detail(that.start_date,that.end_date).then(res=>{
					console.log("今日概况",res)
					that.get_reserve = res.get_reserve
					that.out_reserve = res.out_reserve
					that.get_reserve_real_money = res.get_reserve_real_money
					that.out_reserve_real_money = res.out_reserve_real_money
					that.get_reserve_num = res.get_reserve_num
					that.out_reserve_num = res.out_reserve_num
					that.get_reserve_get_num = res.get_reserve_get_num
					that.out_reserve_get_num = res.out_reserve_get_num
					that.should_get_money = res.should_get_money
					that.real_get_money = res.real_get_money
				});
			},

		},
		computed: {
			i18n() {
				return this.$t('operational_status')
			}
		}
	}
</script>

<style lang="scss">
	.select{
		display:flex;
		align-items: center;
		justify-content: space-between;
		background: #fff;
		padding: 20rpx 30rpx;
		margin-bottom: 20rpx;
		.section{
			width: 50%;
			text-align:center;
		}
	}
	.list {
		background: #FFFFFF;

		.list_frst {
			padding: 10rpx 20rpx;
			border-bottom: 1rpx solid#ccc;

			.icon_img {
				width: 60rpx;
				height: 60rpx;
			}

			.text_notice {
				margin-left: 10rpx;
			}
		}

		.list_second {
			padding: 10rpx;
			font-size: 24rpx;
			line-height: 40rpx;

			.item {
				width: 50%;
				padding-left: 20rpx;
			}

			.show_num {
				color: #3d3d3d;
				font-weight: bold;
			}
		}
	}

	.second_list {
		padding: 20rpx;
		background: #fff;
		margin-top: 30rpx;
		.second_item{
			width: 50%;
		}

		.icon_img {
			width: 60rpx;
			height: 60rpx;
			margin-right: 10rpx;
		}
		.text_notice{
			font-weight: 24rpx;
		}
		
		.list_item{
			padding: 10rpx 0;
			border-bottom:1rpx solid#ccc
		}
		
		.reserve_text{
			color: #3d3d3d;
			font-weight: bold
		}
		.text_notice{
			font-size: 20rpx;
			margin-bottom: 8rpx
		}
	}
</style>
