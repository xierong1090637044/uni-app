<template>
	<view>
		<loading v-if="loading"></loading>

		<view v-else>
			<view class="list">
				<view class="display_flex list_frst">
					<image src="/static/chengben.png" class="icon_img"></image>
					<text class="text_notice">{{ i18n.a }} {{reserve_money}}</text>
				</view>
				<view class="display_flex_bet list_second">
					<view class="item" style="border-right: 1rpx solid#CCCCCC;">
						<view>库存总数</view>
						<view class="show_num">{{all_reserve}}</view>
					</view>
					<view class="item">
						<view>预警产品数</view>
						<view class="show_num">{{warn_num}}</view>
					</view>
				</view>
			</view>

			<view class="second_list">
				<view class="display_flex_bet list_item">
					<view class="display_flex second_item">
						<image src="/static/reserve_in.png" class="icon_img"></image>
						<view>
							<view class="text_notice">今日入库</view>
							<view class="reserve_text">{{get_reserve}}</view>
						</view>
					</view>
					<view class="display_flex second_item">
						<image src="/static/reserve_out.png" class="icon_img"></image>
						<view>
							<view class="text_notice">今日出库</view>
							<view class="reserve_text">{{out_reserve}}</view>
						</view>
					</view>
				</view>
				
				<view class="display_flex_bet list_item">
					<view class="display_flex second_item">
						<view>
							<view class="text_notice">入库成本总额</view>
							<view class="reserve_text">{{get_reserve_real_money}}</view>
						</view>
					</view>
					<view class="display_flex second_item">
						<view>
							<view class="text_notice">出库成本总额</view>
							<view class="reserve_text">{{out_reserve_real_money}}</view>
						</view>
					</view>
				</view>
				
				
				<view class="display_flex_bet list_item">
					<view class="display_flex second_item">
						<view>
							<view class="text_notice">预计卖出总额</view>
							<view class="reserve_text">{{get_reserve_num}}</view>
						</view>
					</view>
					<view class="display_flex second_item">
						<view>
							<view class="text_notice">预计买进总额</view>
							<view class="reserve_text">{{out_reserve_num}}</view>
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
	import common from '@/utils/common.js';
	import Bmob from '@/utils/bmob.js';
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

			console.log(common.getDay(0, true))

		},
		methods: {
			//获得库存成本和总库存
			get_allCost() {
				let reserve_money = 0;
				let all_reserve = 0;
				let warn_num = 0;
				const query = Bmob.Query("Goods");
				query.equalTo("userId", "==", uid);
				query.limit(500);
				query.find().then(res => {
					//console.log(res)
					
					for (let item of res) {
						reserve_money += Number(item.costPrice) * item.reserve
						all_reserve =all_reserve+ item.reserve

						if (item.stocktype = 0) {
							warn_num += 1;
						}
					}

					that.reserve_money = reserve_money
					that.all_reserve = all_reserve
					that.warn_num = warn_num
					that.loading = false
				});
			},

			//得到今日概况
			gettoday_detail: function() {
				let get_reserve = 0;
				let out_reserve = 0;
				let get_reserve_real_money = 0;
				let out_reserve_real_money = 0;
				let get_reserve_num = 0;
				let out_reserve_num = 0;

				const query = Bmob.Query("Bills");
				query.equalTo("userId", "==", uid);
				query.equalTo("createdAt", ">=", common.getDay(0, true));

				query.include("goodsId");
				query.find().then(res => {
					for (var i = 0; i < res.length; i++) {
						if (res[i].type == 1) {
							get_reserve = get_reserve + res[i].num;
							get_reserve_real_money = get_reserve_real_money + res[i].num * res[i].goodsId.retailPrice;
							get_reserve_num = get_reserve_num + res[i].total_money;
						} else if (res[i].type == -1) {
							out_reserve = out_reserve + res[i].num;
							out_reserve_real_money = out_reserve_real_money + res[i].num * res[i].goodsId.costPrice;
							out_reserve_num = out_reserve_num + res[i].total_money;
						}
					}


					that.get_reserve = get_reserve.toFixed(uni.getStorageSync("setting").show_float)
					that.out_reserve = out_reserve.toFixed(uni.getStorageSync("setting").show_float)
					that.get_reserve_real_money = get_reserve_real_money.toFixed(uni.getStorageSync("setting").show_float)
					that.out_reserve_real_money = out_reserve_real_money.toFixed(uni.getStorageSync("setting").show_float)
					that.get_reserve_num = get_reserve_num.toFixed(uni.getStorageSync("setting").show_float)
					that.out_reserve_num = out_reserve_num.toFixed(uni.getStorageSync("setting").show_float)
					that.get_reserve_get_num = (get_reserve_real_money - get_reserve_num).toFixed(uni.getStorageSync("setting").show_float)
					that.out_reserve_get_num = (out_reserve_num - out_reserve_real_money).toFixed(uni.getStorageSync("setting").show_float)


					console.log(get_reserve)


					//查询当日应收和实际收款
					let should_get_money = 0;
					let real_get_money = 0;
					const query = Bmob.Query("order_opreations");
					query.equalTo("master", "==", uid);
					query.equalTo("createdAt", ">=", common.getDay(0, true));
					query.equalTo("type", "==", -1);
					query.find().then(res => {
						//console.log(res);
						for (var i = 0; i < res.length; i++) {
							should_get_money = should_get_money + res[i].all_money;
							real_get_money = real_get_money + res[i].real_money;
						}

						that.should_get_money = should_get_money
						that.real_get_money = real_get_money
					});
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
