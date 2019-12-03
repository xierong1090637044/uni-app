<template>
	<view>
		<loading v-if="loading"></loading>

		<view v-else>
			<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" @click-right="showOptions = true" right-text="筛选"></uni-nav-bar>

			<view>
				<view class="uni-common-mt" style="background: #FFFFFF;">
					<uni-segmented-control :current="current" :values="items" style-type="text" active-color="#426ab3" @clickItem="onClickItem" />
					<view class="display_flex_bet" style="padding: 20rpx 30rpx;border-bottom: 10rpx solid#ddd;text-align:center">
						<view>
							<view>{{header.total}}</view>
							<view style="color:#999;font-size: 24rpx;">单品数</view>
						</view>
						<view>
							<view>¥{{header.total_money}}</view>
							<view style="color:#999;font-size: 24rpx;">销售额</view>
						</view>
						<view>
							<view>¥{{header.get_money}}</view>
							<view style="color:#999;font-size: 24rpx;">毛利润</view>
						</view>
					</view>
				</view>
			</view>

			<scroll-view class='page' scroll-y="true">
				<view class='list-item'>
					<view v-for="(item,index) in list" :key="index">
						<view class='item' @click='get_detail(item.objectId)'>
							<view style='display:flex;width:calc(100% - 120rpx);'>
								<view style='line-height:80rpx'>
									<fa-icon type="sign-out" size="20" color="#f30" />
								</view>
								<view style='margin-left:20rpx'>
									<view><text style='color:#999'>操作者：</text>{{item.opreater.nickName}}</view>
									<view v-if='item.goodsName'><text style='color:#999'>操作商品：</text>{{item.goodsName}} 等...</view>
									<view v-if="item.beizhu" class='item_beizhu'><text style='color:#999'>备注：</text>{{item.beizhu}}</view>
									<view><text style='color:#999'>操作时间：</text>{{item.createdAt}}</view>
								</view>
							</view>
							<view class='order_out'>销售</view>
						</view>
						<uni-collapse :accordion="true">
							<uni-collapse-item title="明细">
								<view v-for="(item,index) in item.relations" :key="index" class='pro_listitem'>
									<view class='pro_list' style='color:#3D3D3D'>
										<view style="font-size: 20rpx !important;">产品：{{item.goodsName}}（成本价：￥{{item.goodsId.costPrice}}）</view>
										<view style="font-size: 20rpx !important;">建议零售价：￥{{item.goodsId.retailPrice}}</view>
									</view>
									<view class='pro_list'>
										<view style="font-size: 20rpx !important;">实际卖出价：￥{{item.retailPrice}}（X{{item.num}}）</view>
										<view style="font-size: 20rpx !important;">总价：￥{{item.total_money }}</view>
									</view>
								</view>
							</uni-collapse-item>
						</uni-collapse>
					</view>
				</view>

			</scroll-view>
		</view>

		<!--筛选模板-->
		<view v-if="showOptions" class="modal_background" @click.stop="showOptions = false">
			<view class="showOptions">
				<view class="input_item1">
					<view>
						<picker mode="date" :value="now_day" @change.stop="bindDateChange1" :end="max_day" @click.stop>
							<view style="display: flex;align-items: center;">
								<view style="margin-right: 20rpx;">{{now_day}}</view>
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</picker>
					</view>

					<view>至</view>

					<view>
						<picker mode="date" :value="end_day" :end="max_day" @change.stop="bindDateChange2" @click.stop>
							<view style="display: flex;align-items: center;">
								<view style="margin-right: 20rpx;">{{end_day}}</view>

								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</picker>
					</view>
				</view>

				<view class="option_bottom">
					<view class="selection" @click.stop="option_reset">重置</view>
					<view class="selection1" @click.stop="option_confrim">确定</view>
				</view>

			</view>
		</view>

	</view>

</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from '@/utils/common.js';

	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import loading from "@/components/Loading/index.vue"
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'

	let that;
	let uid;
	let custom_id;
	export default {
		components: {
			faIcon,
			uniCollapse,
			loading,
			uniCollapseItem,
			uniNavBar,
			uniSegmentedControl
		},
		data() {
			return {
				showOptions: false,
				header: {
					total: 0,
					total_money: 0,
					get_money: 0,
				}, //头部的统计数据
				loading: true,
				items: ['今天', '昨天', '近七天', '近一个月'],
				list: [],
				current: 0,

				now_day: common.getDay(0, false),
				end_day: common.getDay(1, false),
				max_day: common.getDay(0, false),
			}
		},

		onLoad(options) {
			console.log(options)
			that = this;
			custom_id = options.id
			uid = uni.getStorageSync("uid");
			//custom_id = "0adcad2160"
			//that.get_list(options.id)
			that.get_list(custom_id)
			that.get_header_data(custom_id, 0)

		},
		methods: {
			option_confrim(){
				that.header = {
					total: 0,
					total_money: 0,
					get_money: 0,
				}
				that.showOptions = false;
				that.get_header_data(custom_id)
				that.get_list(custom_id)
			},

			//modal重置的确认点击
			option_reset() {
				that.header = {
					total: 0,
					total_money: 0,
					get_money: 0,
				}
				
				that.now_day = common.getDay(0, false),
				that.end_day = common.getDay(1, false),
				that.max_day = common.getDay(0, false),
				that.showOptions = false;
				that.get_header_data(custom_id)
				that.get_list(custom_id)
			},

			bindDateChange1(e) {
				that.now_day = e.detail.value;
			},

			bindDateChange2(e) {
				that.end_day = e.detail.value;
			},

			//日期筛选
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index
					that.header = {
						total: 0,
						total_money: 0,
						get_money: 0,
					}
					if (index == 0) {
						that.now_day = common.getDay(0, false)
						that.end_day = common.getDay(1, false)
					} else if (index == 1) {
						that.now_day = common.getDay(-1, false)
						that.end_day = common.getDay(0, false)
					} else if (index == 2) {
						that.now_day = common.getDay(-7, false)
						that.end_day = common.getDay(1, false)
					} else if (index == 3) {
						that.now_day = common.getDay(-30, false)
						that.end_day = common.getDay(1, false)
					}
					
					that.get_header_data(custom_id)
					that.get_list(custom_id)
				}
			},

			//得到该客户的统计数据
			get_header_data(id) {
				const query = Bmob.Query("Bills");
				query.equalTo("userId", "==", uid);
				query.equalTo("type", "==", -1);
				query.equalTo("custom", '==', id);
				query.include("goodsId");
				query.equalTo("createdAt", ">=", that.now_day + ' 00:00:00');
				query.equalTo("createdAt", "<=", that.end_day + ' 00:00:00');
				query.find().then(res => {
					//console.log(res)

					for (let item of res) {
						console.log(item)
						that.header.total += item.num
						that.header.total_money += item.total_money
						that.header.get_money += item.total_money - item.really_total_money
					}

				});
			},

			//得到该客户的销售列表
			get_list(id) {
				const query = Bmob.Query("order_opreations");
				query.equalTo("master", "==", uid);
				query.equalTo("type", '==', -1);
				query.equalTo("custom", '==', id);
				query.include("opreater");
				query.equalTo("createdAt", ">=", that.now_day + ' 00:00:00');
				query.equalTo("createdAt", "<=", that.end_day + ' 00:00:00');
				query.order("-createdAt");
				query.find().then(res => {
					console.log(res)
					let details = res
					for (let item of details) {
						item.relations = item.detail;	
					}
					that.list = details
					that.loading = false
					//console.log(details)
				});
			},
		}
	}
</script>

<style>
	.page {
		overflow: hidden;
		height: calc(100vh - 256rpx);
		font-size: 28rpx;
		color: #3D3D3D;
		background: #fafafa;
	}

	.pro_list {
		font-size: 20rpx !important;
		display: flex;
		justify-content: space-between;
	}

	.pro_listitem {
		background-color: #fff;
		padding: 10rpx 20rpx;
		border-bottom: 1rpx solid#ddd;
	}

	.item {
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		padding: 20rpx;
	}

	.icon-order {
		font-size: 44rpx;
		color: #426ab3;
	}

	.list-item {
		height: 100%;
		overflow: scroll;
	}

	.select_time {
		display: flex;
		justify-content: space-between;
		line-height: 80rpx;
		color: #999;
		padding: 0 30rpx;
	}

	.item_beizhu {
		max-width: calc(100% - 120rpx);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.order_get {
		padding: 0rpx 30rpx;
		color: #2ca879;
		border: .5rpx solid#2ca879;
		height: 52rpx;
		line-height: 52rpx;
		border-radius: 8rpx;
	}

	.order_out {
		padding: 0px 15px;
		color: #f30;
		border: 1px solid#f30;
		height: 26px;
		line-height: 26px;
		margin-top: 7px;
		border-radius: 4px;
	}

	.order_counting {
		padding: 0px 15px;
		color: #000;
		border: 1px solid#000;
		height: 26px;
		line-height: 26px;
		margin-top: 7px;
		border-radius: 4px;
	}

	.order_returning {
		padding: 0px 15px;
		color: #b3b242;
		border: 1px solid#b3b242;
		height: 26px;
		line-height: 26px;
		margin-top: 7px;
		border-radius: 4px;
	}
</style>
