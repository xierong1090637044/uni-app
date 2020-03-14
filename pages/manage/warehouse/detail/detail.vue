<template>
	<view>
		<!--<uni-nav-bar :fixed="true" color="#333333" background-color="#FFFFFF" right-text="操作" @click-right="show_options"></uni-nav-bar>-->

		<view style="padding: 20rpx 0;">
			<uni-segmented-control :current="current" :values="items" style-type="button" active-color="#426ab3" @clickItem="onClickItem" />
		</view>

		<view v-if="current == 0">
			<view style="padding: 0 30rpx;background: #fff;">
				<view class="display_flex_bet frist border_bottom" hover-class="none">
					<view class="display_flex">
						<view>店仓名称</view>
						<view style="margin-left: 30rpx;">{{stock.stock_name}}</view>
					</view>
				</view>

				<view class="display_flex_bet frist border_bottom">
					<view class="display_flex_bet" style="width: 100%;">
						<view>库存数量</view>
						<view>{{reserve_num}}</view>
					</view>
				</view>

				<view class="display_flex_bet frist border_bottom">
					<view class="display_flex_bet" style="width: 100%;">
						<view>库存金额</view>
						<view>{{reserve_money}}</view>
					</view>
				</view>
			</view>
			
			<view class="Item" style="padding: 10rpx 30rpx;overflow: hidden;margin-top: 30rpx;">
				<view style="font-size: 32rpx;color: #3D3D3D;font-weight: bold;margin-bottom: 20rpx;">当月该仓库出入库统计</view>
				<achart :now_day="now_day" :type="2" :show="true" :thisStock="stock"></achart>
			</view>
			
			<stockDetBottom :thisStock="stock"></stockDetBottom>
		</view>

		<view v-if="current == 1">
			<stockGoods :thisStock="stock" :thisClass="thisClass"></stockGoods>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';
	import stockGoods from '@/components/stockGoods.vue';
	import stockDetBottom from '@/components/stockDetBottom.vue';
	import achart from '@/components/charts/AChart.vue'
	
	import common from '@/utils/common.js';
	import Bmob from "hydrogen-js-sdk"

	let that;
	let uid;
	export default {
		components: {
			achart,
			stockDetBottom,
			uniSegmentedControl,
			stockGoods,
		},
		data() {
			return {
				items: ['店仓详情', '产品存货'],
				current: 0,
				
				now_day: common.getDay(0),
				loading: true,
				stock: "",
				Goods: null,
				reserve_num: 0,
				reserve_money: 0,
				thisClass: {}
			}
		},

		onLoad() {
			that = this;
			uid = uni.getStorageSync("uid");
			that.stock = uni.getStorageSync("stock")
			that.get_detail()
		},

		onShow() {
			if (uni.getStorageSync("isClickShaiXuan")) { //判断是否下级页面进行了操作
				that.thisClass = uni.getStorageSync("category") || ''
			}
		},

		onUnload() {
			common.handleData();
			uni.removeStorageSync("is_add");
			uni.removeStorageSync("category");
			uni.removeStorageSync("isClickShaiXuan");
			uni.removeStorageSync("stock");
		},

		//分享
		/*onShareAppMessage: function(res) {
			if (res.from === 'button') {
				// 来自页面内转发按钮
				console.log(res.target)
			}
			return {
				title: '库存表-' + that.stock.stock_name + '的详情',
				path: '/pages/manage/good_det/good_det?id=' + that.product.objectId + '&type="false"'
			}
		},*/

		methods: {
			onClickItem(value) {
				that.current = value
			},

			show_options() {
				uni.showActionSheet({
					itemList: ["编辑", "删除"],
					success: function(res) {
						if (res.tapIndex == 0) {
							that.edit(that.stock)
						} else if (res.tapIndex == 1) {
							

						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},

			goto_detail(good) {
				if (good.order == 1) {
					uni.navigateTo({
						url: "/pages/manage/good_det/Ngood_det?id=" + good.header.objectId + "&type=false"
					})
				} else {
					uni.navigateTo({
						url: "/pages/manage/good_det/good_det"
					})
				}
			},

			get_detail() {
				let countKey = 0; //计数器
				const query = Bmob.Query("Goods");
				query.equalTo("userId", "==", uid);
				query.equalTo("stocks", "==", uni.getStorageSync("stock").objectId);
				query.count().then(res => {
					let shouldKey =  Math.ceil(res / 500)
					for (let i = 0; i < shouldKey; i++) {
						query.equalTo("userId", "==", uid);
						query.equalTo("order", "==", 1);
						query.equalTo("stocks", "==", uni.getStorageSync("stock").objectId);
						query.order("-reserve");
						query.include("header");
						query.limit(500);
						query.skip(500 * i);
						query.find().then(res => {
							countKey += 1

							if (countKey == shouldKey) {
								console.log(res)
								let reserve_num = 0;
								let reserve_money = 0;
								for (let item of res) {
									reserve_money += Number(item.costPrice) * Number(item.reserve)
									reserve_num += Number(item.reserve)
								}

								that.reserve_money = reserve_money
								that.reserve_num = reserve_num
								that.loading = false
							}

						})
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	.frist {
		padding: 20rpx 0;
	}

	.border_bottom {
		border-bottom: 1rpx solid#f6f5ec;
	}

	.list_item {
		padding: 20rpx 30rpx;
		background: #FFFFFF;
		border-bottom: 1rpx solid#F7F7F7;
		margin: 0 0 20rpx;
	}

	.second {
		line-height: 44rpx;
	}
</style>
