<template>
	<view class="uni-tab-bar">
		<!--<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x>
			<view v-for="(tab,index) in tabBars" :key="index" class="swiper-tab-list" :class="seleted_tab==tab.type ? 'active' : ''"
			 @click="tapTab(tab.type)">{{tab.name}}</view>
		</scroll-view>-->
		<view class="display_flex_bet" style="padding: 30rpx 0;border-bottom: 6rpx solid#DDDDDD;">
			<picker class="frist_item display_flex" :range="tabBars" range-key="name" @change="tapTab">
				<text style="margin-right: 10rpx;">{{type_dec}}</text>
				<fa-icon type="angle-down" size="20" color="#999" />
			</picker>
			<picker class="frist_item display_flex" mode="date" @change="selected_day" fields="month">
				<text style="margin-right: 10rpx;">{{time_desc}}</text>
				<fa-icon type="angle-down" size="20" color="#999" />
			</picker>
		</view>
		<scroll-view class="content" scroll-y>
			<view v-for="(detail,index) in details" :key="index" class="detail_item">
				<view v-if="detail.type === 1">
					<view class="display_flex_bet">
						<view>
							<text v-if="detail.extra_type ==2">入库数量：</text>
							<text v-else-if="detail.extra_type ==1">采购数量：</text>
							<text style="margin-left: 10rpx;color: #FC0F4A;">{{detail.num}}</text>
						</view>
						<view>
							<text v-if="detail.extra_type ==2">入库单价：</text>
							<text v-else-if="detail.extra_type ==1">采购单价：</text>
							<text style="margin-left: 10rpx;color: #FC0F4A;">{{detail.retailPrice}}</text>
						</view>
					</view>
				</view>

				<view v-if="detail.type === -1">
					<view class="display_flex_bet">
						<view>
							<text v-if="detail.extra_type ==2">出库数量：</text>
							<text v-else-if="detail.extra_type ==1">销售数量：</text>
							<text style="margin-left: 10rpx;color: #f30;font-weight: bold;">{{detail.num}}</text>
						</view>
						<view>
							<text v-if="detail.extra_type ==2">出库单价：</text>
							<text v-else-if="detail.extra_type ==1">销售单价：</text>
							<text style="margin-left: 10rpx;color: #f30;font-weight: bold;">{{detail.retailPrice}}</text>
						</view>
					</view>
				</view>

				<view v-if="detail.type === 2">
					<view class="display_flex_bet">
						<view>
							<text>退货数量：</text>
							<text style="margin-left: 10rpx;color: #f30;font-weight: bold;">{{detail.num}}</text>
						</view>
						<view>
							<text>退货单价：</text>
							<text style="margin-left: 10rpx;color: #f30;font-weight: bold;">{{detail.retailPrice}}</text>
						</view>
					</view>
				</view>

				<view v-if="detail.type === 3" class="display_flex_bet">
					<view>
						<text>盘点前库存：</text>
						<text style="margin-left: 10rpx;color: #f30;font-weight: bold;">{{detail.reserve}}</text>
					</view>
					<view>
						<text>盘点后库存：</text>
						<text style="margin-left: 10rpx;color: #f30;font-weight: bold;">{{detail.now_reserve}}</text>
					</view>
				</view>

				<view class="content_time">{{detail.createdAt}}</view>
			</view>
		</scroll-view>

		<view class="display_flex_bet bottomEle" v-if="seleted_tab && seleted_tab !=3">
			<view>{{goodsName}}</view>
			<view>
				<view>总数:<text style="color: #f30;">{{total_num}}</text></view>
				<view>总金额:<text style="color: #f30;">{{total_money}}</text></view>
			</view>
		</view>
	</view>
</template>
<script>
	import Bmob from "hydrogen-js-sdk";
	import common from "@/utils/common.js";

	let that;
	let uid;
	let goodsId;

	export default {
		components: {

		},
		data() {
			return {
				type_dec: "操作类型",
				time_desc: "操作时间",
				goodsName: "",
				total_num: 0, //所有操作的总数量
				total_money: 0, //所有操作的总金额
				year: '',
				month: '',
				seleted_tab: '',
				details: null,
				extra_type:'',
				tabBars: [{
					name: '入库',
					type: 1,
					extra_type:2,
				}, {
					name: '采购',
					type: 1,
					extra_type:1,
				}, {
					name: '出库',
					type: -1,
					extra_type:2,
				}, {
					name: '销售',
					type: -1,
					extra_type:1,
				},{
					name: '盘点',
					type: 3,
					extra_type:'',
				}, {
					name: '退货',
					type: 2,
					extra_type:'',
				}, ]
			}
		},
		onLoad(options) {
			that = this;
			uid = wx.getStorageSync("uid");
			goodsId = options.objectId;
			that.goodsName = options.goodsName;
			//goodsId = "c3eca721ee"

			let Day = new Date()
			that.year = Day.getFullYear();
			that.month = Day.getMonth() + 1;
			that.getdetail();
			console.log(that.year, that.month)
		},
		methods: {
			tapTab: function(e) {
				console.log(e)
				let index = e.detail.value
				that.type_dec = that.tabBars[index].name
				that.seleted_tab = that.tabBars[index].type
				that.extra_type = that.tabBars[index].extra_type
				that.getdetail()
			},

			//选择日期
			selected_day(e) {
				console.log(e)
				let day = e.detail.value
				that.time_desc = day
				that.year = day.split("-")[0]
				that.month = day.split("-")[1]
				that.getdetail()
			},

			getdetail() {
				uni.showLoading({
					title: "加载中..."
				})
				const query = Bmob.Query("Bills");
				query.equalTo("userId", "==", uid);
				if(that.seleted_tab){
					if(that.seleted_tab == 1 || that.seleted_tab == -1){
						query.equalTo("extra_type", "==", that.extra_type);
					}
					query.equalTo("type", "==", that.seleted_tab);
				}
				query.equalTo("status", "!=", false);
				query.equalTo("goodsId", "==", goodsId);
				query.equalTo("createdAt", ">=", that.year + "-" + that.month + "-01 00:00:00");
				query.equalTo("createdAt", "<=", that.year + "-" + that.month + "-" + new Date(that.year, that.month, 0).getDate() +" 23:59:59");
				query.order("-createdAt")
				query.find().then(res => {
					console.log(res)
					that.details = res;
					uni.hideLoading();

					if (that.seleted_tab != 3) {
						const query = Bmob.Query("Bills");
						query.equalTo("userId", "==", uid);
						query.equalTo("status", "!=", false);
						query.equalTo("type", "==", that.seleted_tab);
						if(that.extra_type){
							query.equalTo("extra_type", "==", that.extra_type);
						}
						query.equalTo("goodsId", "==", goodsId);
						query.equalTo("createdAt", ">=", that.year + "-" + that.month + "-01 00:00:00");
						query.equalTo("createdAt", "<=", that.year + "-" + that.month + "-" + new Date(that.year, that.month, 0).getDate() +
							" 23:59:59");
						query.statTo("sum", "num,total_money");
						query.find().then(res => {
							if (res[0]) {
								that.total_num = res[0]._sumNum
								that.total_money = res[0]._sumTotal_money
							}else{
								that.total_num = 0
								that.total_money = 0
							}

						})
					}


				});
			}
		}
	}
</script>

<style>
	page {
		font-size: 28rpx;
		color: #3D3D3D;
		background: #FFFFFF;
	}

	.bottomEle {
		background: #fff;
		position: fixed;
		bottom: 0rpx;
		box-shadow: 0 0rpx 10rpx rgba(0, 0, 0, 0.5);
		width: calc(100% - 60rpx);
		padding: 20rpx 30rpx;
		font-weight: bold;
	}

	.swiper-tab-list {
		height: 100%;
		line-height: 100rpx !important;
	}

	.frist_item {
		justify-content: center;
		width: 50%;
	}

	.content {
		width: 100%;
		padding: 10rpx 30rpx;
		width: calc(100% - 60rpx);
		height: calc(100vh - 132rpx);
	}

	.content_time {
		text-align: right;
		color: #999;
		;
	}

	.detail_item {
		border-bottom: 1rpx solid#ccc;
		margin-bottom: 10rpx;
		padding-bottom: 10rpx;
	}

	.detail_name {
		font-size: 32rpx;
		margin-bottom: 6rpx;
		font-weight: bold;
	}
</style>
