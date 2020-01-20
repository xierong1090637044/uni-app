<template>
	<!--当月详情-->
	<view>
		<view class="fristSearchView">
			<uni-search-bar :radius="100" @confirm="search" color="#fff" />
		</view>
		<view class="Item">
			<view style="color: #3D3D3D;margin-bottom: 10rpx;font-size: 32rpx;font-weight: bold;">商品分析</view>
			<view class="display_flex_bet">
				<view class="itemB">
					<view>全部商品</view>
					<view style="font-size: 30rpx;font-weight: bold;">{{goodsAnalysis.total_products}}种</view>
					<navigator hover-class="none" url="/pages/manage/good_add/good_add?type=more" class="addButton" @click="showNotice">新增</navigator>
				</view>
				<view style="width: 30%;">
					<view class="itemC" style="margin:0 10rpx 10rpx 0;">
						<view>总数</view>
						<view style="font-size: 30rpx;font-weight: bold;">{{goodsAnalysis.total_reserve}}</view>
					</view>
					<view class="itemC">
						<view>总成本</view>
						<view style="font-size: 30rpx;font-weight: bold;">{{goodsAnalysis.total_money}}</view>
					</view>
				</view>
				<view style="width: 30%;">
					<navigator class="itemC" style="margin:0 10rpx 10rpx 0;background: #ff8282;color: #fff;" hover-class="none" url="/pages/report/warningGoods/warningGoods">
						<view>预警产品</view>
						<view style="font-size: 30rpx;font-weight: bold;">{{goodsAnalysis.warn_num}}</view>
					</navigator>
					<navigator class="itemC" style="background: #ff8282;color: #fff;" hover-class="none" url="/pages/report/warningGoods/warningGoods">
						<view>高储产品</view>
						<view style="font-size: 30rpx;font-weight: bold;">{{goodsAnalysis.over_num}}</view>
					</navigator>
				</view>
			</view>
		</view>

		<!--操作列表-->
		<view style="background: #FFFFFF;padding: 20rpx 20rpx 0;margin-top: 30rpx;">
			<view class="display_flex_bet" style="padding-bottom: 10rpx;">
				<view style="font-size: 30rpx;color: #333;font-weight: bold;">库存</view>
				<i class="iconfont icon-saoma" style="color: #426ab3;font-size: 36rpx;font-weight: bold;" @click='scan_code()'></i>
			</view>
		
			<view>
				<navigator v-for='(value,index) in optionsLists' :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem">
						<i :class="'iconfont '+value.icon" style="font-size: 36rpx;color: #fff;line-height: 80rpx;"></i>
					</view>
					<view class='o_text'>{{value.name}}</view>
				</navigator>
			</view>
		</view>


	</view>
</template>

<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'

	import common from '@/utils/common.js';
	import mine from '@/utils/mine.js';
	import record from '@/utils/record.js';
	import Bmob from "hydrogen-js-sdk";
	let that;
	let uid;

	export default {
		components: {
			faIcon,
			uniNoticeBar,
			uniSearchBar
		},
		data() {
			return {
				logsList: [],
				optionsLists: [{
						name: '入库',
						icon: 'icon-ruku',
						url: '/pages/common/goods-select/goods-select?type=entering&value=2'
					},
					{
						name: '出库',
						icon: 'icon-chuku',
						url: '/pages/common/goods-select/goods-select?type=delivery&value=2'
					},
					{
						name: '产品调拨',
						icon: 'icon-icon-transfer',
						url: '/pages/common/goods-select/goods-select?type=allocation'
					},
					{
						name: '库存盘点',
						icon: 'icon-pandian',
						url: '/pages/common/goods-select/goods-select?type=counting'
					},
					{
						name: '采购',
						icon: 'icon-office-supplies-shopping-list',
						url: '/pages/common/goods-select/goods-select?type=entering&value=1'
					},
				],
				goodsAnalysis: {
					total_products: 0,
					total_reserve: 0,
					total_money: 0,
					warn_num: 0,
					over_num: 0,
				}, //产品分析的数据
				openid: '',
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');
			// #ifdef H5
			this.$wechat.share_pyq();
			// #endif

			mine.query_setting()

			if (options.openid) {
				uni.setStorageSync("openid", options.openid)
			}
		},

		onShow() {
			that.loadallGoods();
			//that.get_logsList();
		},

		//分享
		onShareAppMessage: function(res) {
			if (res.from === 'button') {
				// 来自页面内转发按钮
				console.log(res.target)
			}
			return {
				title: '高明燃气库存管理，欢迎您的加入',
				path: '/pages/tarBar/index'
			}
		},

		methods: {

			//首页搜索
			search(e) {
				console.log(e)
				let search_text = e.value
				uni.navigateTo({
					url: "/pages/manage/goods/goods?search_text=" + search_text
				})
			},

			//点击扫描产品条形码
			scan_code: function() {
				uni.showActionSheet({
					itemList: ['扫码出库', '扫码入库', '扫码盘点', '查看详情'],
					success(res) {
						that.scan(res.tapIndex);
					},
					fail(res) {
						console.log(res.errMsg)
					}
				})
			},

			//扫码操作
			scan: function(type) {
				// #ifdef H5
				this.$wechat.scanQRCode().then(res => {
					let array = res.split("-");

					if (type == 0) {
						uni.navigateTo({
							url: '/pages/common/goods_out/goods_out?id=' + array[0] + "&type=" + array[1],
						})
					} else if (type == 1) {
						uni.navigateTo({
							url: '/pages/common/good_confrim/good_confrim?id=' + array[0] + "&type=" + array[1],
						})
					} else if (type == 2) {
						uni.navigateTo({
							url: '/pages/common/good_count/good_count?id=' + array[0] + "&type=" + array[1],
						})
					} else if (type == 3) {
						uni.navigateTo({
							url: '/pages/manage/good_det/good_det?id=' + array[0] + "&type=" + array[1],
						})
					}
				})
				// #endif

				// #ifdef MP-WEIXIN
				uni.scanCode({
					success(res) {
						var result = res.result;
						var array = result.split("-");

						if (type == 0) {
							uni.navigateTo({
								url: '/pages/common/goods_out/goods_out?id=' + array[0] + "&type=" + array[1],
							})
						} else if (type == 1) {
							uni.navigateTo({
								url: '/pages/common/good_confrim/good_confrim?id=' + array[0] + "&type=" + array[1],
							})
						} else if (type == 2) {
							uni.navigateTo({
								url: '/pages/common/good_count/good_count?id=' + array[0] + "&type=" + array[1],
							})
						} else if (type == 3) {
							uni.showLoading({
								title:"跳转中..."
							})
							if (array[1] == 'stock') {
								const query = Bmob.Query('stocks');
								query.get(array[0]).then(res => {
									let warehouse = []
									let warehouseItem = {}
									warehouseItem.stock = res
									warehouse.push(warehouseItem)
									uni.setStorageSync("warehouse",warehouse)
									uni.hideLoading()
									uni.navigateTo({
										url: '/pages/manage/stockGoods/stockGoods?stockId=' + array[0] + "&type=" + array[1],
									})
								}).catch(err => {
									console.log(err)
								})
							} else {
								uni.navigateTo({
									url: '/pages/manage/good_det/good_det?id=' + array[0] + "&type=" + array[1],
								})
							}

						}
					},
					fail(res) {
						uni.showToast({
							title: '未识别到条形码',
							icon: "none"
						})
					}
				})
				// #endif
			},
			
			//得到总库存数和总金额
			loadallGoods: function() {
				record.loadallGoods().then(res => {
						that.goodsAnalysis = res
				})
			},
			
		}
	}
</script>

<style lang="scss">
	.fristSearchView {
		padding: 10rpx 30rpx;
		background: #426ab3;
	}

	.scan_code {
		position: fixed;
		width: calc(100% - 60rpx);
		left: 30rpx;
		right: 30rpx;
		bottom: 10%;
		background: linear-gradient(to right, #426ab3, #118fff);
		line-height: 80rpx;
		text-align: center;
		border-radius: 4px;
		color: #fff;
		box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2)
	}

	.icon-scan {
		margin-right: 20rpx;
	}

	/* pages/home/index/index.wxss */
	.swiper {
		background: #426ab3;
		color: #fff;
		height: 14vh;
	}

	.item {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.o_headerItem {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		background: #2ca879;
		line-height: 80rpx;
		margin: 0 auto;
		text-align: center;
	}

	.every_item {
		width: 50%;
		text-align: center;
		line-height: 30px;
		font-size: 14px;
	}

	.s_num {
		font-size: 16px;
		font-weight: bold;
	}
	
	.o_image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		border: 3px solid#e2e2e2;
		padding: 6rpx 6rpx 0;
	}

	.o_item {
		width: 25%;
		text-align: center;
		display: inline-block;
		margin-bottom: 20rpx;
	}

	.o_text {
		color: #000;
		font-weight: bold;
		font-size: 23rpx;
	}

	.scan_code {
		position: fixed;
		width: calc(100% - 60rpx);
		left: 30rpx;
		right: 30rpx;
		bottom: 10%;
		background: linear-gradient(to right, #426ab3, #118fff);
		line-height: 80rpx;
		text-align: center;
		border-radius: 8rpx;
		color: #fff;
		box-shadow: 0 10rpx 10rpx rgba(0, 0, 0, 0.2);
		justify-content: center;
	}

	.icon-scan {
		margin-right: 20rpx;
	}
	
	.Item {
		background: #FFFFFF;
		padding: 30rpx;
		border-radius: 16rpx;
	
		.itemB {
			background: #f2f2f2;
			text-align: center;
			padding: 42rpx 0;
			width: 30%;
			border-radius: 8rpx;
		}
	
		.itemC {
			background: #f2f2f2;
			text-align: left;
			padding: 10rpx 20rpx;
			border-radius: 16rpx;
		}
	
		.addButton {
			color: #118FFF;
			border: 1rpx solid#118FFF;
			border-radius: 40rpx;
			width: 60%;
			margin: 0 auto;
			margin-top: 20rpx;
		}
	}
</style>
