<template>
	<view class="uni-tab-bar">
		<view class="display_flex_bet" style="padding: 30rpx 0;border-bottom: 6rpx solid#DDDDDD;">
			<picker class="frist_item display_flex" mode="date" @change="selected_startday" fields="day" :start="starttime">
				<text style="margin-right: 10rpx;">{{starttime}}</text>
				<fa-icon type="angle-down" size="20" color="#999" />
			</picker>
			<picker class="frist_item display_flex" mode="date" @change="selected_endday" fields="day" :start="endtime">
				<text style="margin-right: 10rpx;">{{endtime}}</text>
				<fa-icon type="angle-down" size="20" color="#999" />
			</picker>
		</view>
		<view class="display_flex_bet" style="padding: 20rpx 30rpx;">
			<view class="input_goodname"><input placeholder="请输入产品名字" @confirm="seachGoodName" @blur="seachGoodName" style="height: 60rpx;"/></view>

			<navigator class="display_flex" hover-class="none" url="/pages/manage/category/category?type=choose">
				<view><input placeholder="产品类别" :value="category.class_text" disabled="true" style="width: 140rpx;"></input></view>
				<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
			</navigator>
		</view>
		<view style="padding: 4rpx 30rpx;">
			<view style="background: #90d7ec;padding: 10rpx 0;" class="display_flex_bet">
				<view class="Listitem" style="padding: 0 10rpx;">产品名称</view>
				<view class="Listitem" style="padding: 0 10rpx;">当前库存</view>
				<view class="Listitem">进</view>
				<view class="Listitem">出</view>
				<view class="Listitem">总成本</view>
				<view class="Listitem">销售额</view>
			</view>
		</view>
		<scroll-view class="content" scroll-y>
			<view v-for="(item,index) in dataList" :key="index" class="display_flex_bet" :style="{padding: '10rpx 0;',background:((index%2==0)?'#f2eada':'')}">
				<view class="text_overflow_2  Listitem" style="padding: 0 10rpx;">{{item.goodsId.goodsName}}</view>
				<view class="Listitem" style="padding: 0 10rpx;">{{item.goodsId.reserve}}</view>
				<view class="Listitem">{{item._sumNum1}}</view>
				<view class="Listitem">{{item._sumNum2}}</view>
				<view class="Listitem">{{item._sumTotal_money1}}</view>
				<view class="Listitem">{{item._sumTotal_money2}}</view>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	import Bmob from "hydrogen-js-sdk";
	import common from "@/utils/common.js";

	let that;
	let uid;
	let startTime;
	let endTime;
	export default {
		components: {

		},
		data() {
			return {
				starttime: "起始时间",
				endtime: "截止时间",
				dataList: [], //数据列表
				pageSize: 30,
				pageNum: 1,
				is_selected: false,
				searchGoodName:'',//搜索的产品名字
				category:'',//搜索的类别
			}
		},
		onLoad(options) {
			that = this;
			uid = wx.getStorageSync("uid");
			uni.removeStorageSync("category")

			let data = new Date()
			let year = data.getFullYear();
			let month = data.getMonth() + 1;
			let day1 = '01'
			that.starttime = year + "-" + month + "-01"
			that.endtime = common.getDay(0)
			startTime = year + "-" + month + "-01";
			endTime = common.getDay(0);
			that.getdetail();
		},
		
		onShow() {
			if (uni.getStorageSync("category")) {
				that.category = uni.getStorageSync("category")
				that.is_selected = false
				that.getdetail()
			}
		},
		
		methods: {
			
			//输入产品的名字触发
			seachGoodName(e){
				that.is_selected = true
				that.searchGoodName = e.detail.value
				that.getdetail()
			},

			//选择开始日期
			selected_startday(e) {
				that.starttime = e.detail.value
				if (that.starttime == startTime && that.endtime == endTime) {
					that.is_selected = false
				} else {
					that.is_selected = true
				}
				that.getdetail()
			},

			//选择结束日期
			selected_endday(e) {
				that.endtime = e.detail.value
				if (that.starttime == startTime && that.endtime == endTime) {
					that.is_selected = false
				} else {
					that.is_selected = true
				}
				that.getdetail()
			},

			getdetail() {
				uni.showLoading({
					title: "加载中..."
				})
				const query = Bmob.Query("Bills");
				query.equalTo("userId", "==", uid);
				query.equalTo("createdAt", ">=", that.starttime + " 00:00:00");
				query.equalTo("createdAt", "<=", that.endtime + " 23:59:59");
				query.equalTo("goodsName", "==", {
					"$regex": "" + that.searchGoodName + ".*"
				});
				const query1 = query.equalTo("type", '==', 1);
				const query2 = query.equalTo("type", '==', -1);
				query.or(query1, query2);
				query.include("goodsId");
				query.statTo("sum", "num,total_money");
				query.statTo("groupby", "goodsId,type");
				query.statTo("order", "-_sumnum");
				query.find().then(res => {
					uni.hideLoading()
					//console.log(res)
					let bills = []
					for (let item of res) {
						let bill = {}
						if (item.type == 1) {
							bill.type = 1
							bill.goodsId = item.goodsId
							bill._sumNum1 = item._sumNum
							bill._sumTotal_money1 = item._sumTotal_money
							bill._sumNum2 = 0
							bill._sumTotal_money2 = 0
						} else if (item.type == -1) {
							bill.type = -1
							bill.goodsId = item.goodsId
							bill._sumNum1 = 0
							bill._sumTotal_money1 = 0
							bill._sumNum2 = item._sumNum
							bill._sumTotal_money2 = item._sumTotal_money
						}
						bills.push(bill)
					}
					that.filterRoomNames(bills)
				});
			},

			//筛选数组
			filterRoomNames: function(arr) {
				let map = {};
				let dest = [];
				for (var i = 0; i < arr.length; i++) {
					var ai = arr[i];
					if (!map[ai.goodsId.objectId]) {
						dest.push(ai);
						map[ai.goodsId.objectId] = ai;
					} else {
						for (var j = 0; j < dest.length; j++) {
							var dj = dest[j];
							if (dj.goodsId.objectId == ai.goodsId.objectId) {
								if (dj.type == 1) {
									dj._sumNum2 = ai._sumNum2
									dj._sumTotal_money2 = ai._sumTotal_money2
								} else if (dj.type == -1) {
									dj._sumNum1 = ai._sumNum1
									dj._sumTotal_money1 = ai._sumTotal_money1
								}

							}
						}
					}
				};

				if (that.is_selected) {
					that.dataList = dest
				} else {
					let goodIs = []
					let compareGoods = []
					const query = Bmob.Query("Goods");
					query.equalTo("userId", "==", uid);
					query.equalTo("status", "!=", -1);
					if(that.category.type == 1){
						query.equalTo("goodsClass", "==", that.category.objectId);
					}else{
						query.equalTo("second_class", "==", that.category.objectId);
					}
					query.select("goodsName,reserve");
					query.limit(500)
					query.find().then(res => {
						//console.log(res)
						for (let product of res) {
							let good = {}
							good.goodsId = product
							good._sumNum2 = 0
							good._sumTotal_money2 = 0
							good._sumNum1 = 0
							good._sumTotal_money1 = 0
							compareGoods.push(good)
							goodIs.push(product.objectId)
						}
						for (let item of dest) {
							//console.log(goodIs.indexOf(item.goodsId.objectId))
							if (goodIs.indexOf(item.goodsId.objectId) > -1) {
								compareGoods.splice(goodIs.indexOf(item.goodsId.objectId), 1)
								compareGoods.unshift(item)
							}
						}
					})

					console.log(compareGoods)
					that.dataList = compareGoods
				}

				wx.hideLoading()
			},

		}
	}
</script>

<style>
	page {
		font-size: 28rpx;
		color: #3D3D3D;
		background: #FFFFFF;
	}
	.input_goodname{
		background: #E5E5E5;
		border-radius: 40rpx;
		padding: 0 20rpx;
		font-size: 24rpx;
	}
	.Listitem {
		width: 16.66%;
		text-align: center;
		font-size: 24rpx;
	}

	.bottomEle {
		position: fixed;
		bottom: 0rpx;
		box-shadow: 0 0rpx 10rpx rgba(0, 0, 0, 0.5);
		width: calc(100% - 60rpx);
		padding: 20rpx 30rpx;
		font-weight: bold;
		background: #fff;
	}

	.text_overflow_2 {
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
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
		height: calc(100vh - 182rpx);
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
