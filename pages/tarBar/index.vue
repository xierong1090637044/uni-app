<template>
	<!--当月详情-->
	<view>
		<view class="fristSearchView display_flex_bet">
			<view></view>
			<view class="display_flex">
				<i class="iconfont icon-chazhao" style="color: #fff;font-size: 36rpx;"></i>
				<i class="iconfont icon-saoma" style="color: #fff;font-size: 36rpx;margin-left: 30rpx;" @click='scan_code'></i>
			</view>
			<!--<uni-search-bar :radius="100" @confirm="search" color="#fff" />-->
		</view>

		<scroll-view scroll-y="true" style="max-height:100vh;">

			<view style="background: #FFFFFF;padding: 20rpx 20rpx 0;">
				<view style="font-size: 30rpx;color: #333;font-weight: bold;">库存</view>
				<view class='o_list'>
					<navigator v-for='(value,index) in stockLists' :key="index" class='o_item' :url="(value.url)" hover-class="none">
						<view class="o_headerItem">
							<i :class="'iconfont '+value.icon" style="font-size: 36rpx;color: #fff;"></i>
						</view>
						<view class='o_text'>{{value.name}}</view>
					</navigator>
				</view>
			</view>

			<view style="background: #FFFFFF;padding: 20rpx 20rpx 0;margin-top: 20rpx;">
				<view style="font-size: 30rpx;color: #333;font-weight: bold;">销售</view>
				<view class='o_list'>
					<navigator v-for='(value,index) in sellLists' :key="index" class='o_item' :url="(value.url)" hover-class="none">
						<view class="o_headerItem" style="background: #afbb4f;">
							<i :class="'iconfont '+value.icon" style="font-size: 36rpx;color: #fff;"></i>
						</view>
						<view class='o_text'>{{value.name}}</view>
						<view style="font-size: 20rpx;color: #999;margin-top: -4rpx;">{{value.notice}}</view>
					</navigator>
				</view>
			</view>
			
			<view style="background: #FFFFFF;padding: 20rpx 20rpx 0;margin-top: 20rpx;">
				<view style="font-size: 30rpx;color: #333;font-weight: bold;">采购</view>
				<view class='o_list'>
					<navigator v-for='(value,index) in purchaseLists' :key="index" class='o_item' :url="(value.url)" hover-class="none">
						<view class="o_headerItem" style="background: #ad4fbb;">
							<i :class="'iconfont '+value.icon" style="font-size: 36rpx;color: #fff;"></i>
						</view>
						<view class='o_text'>{{value.name}}</view>
						<view style="font-size: 20rpx;color: #999;margin-top: -4rpx;">{{value.notice}}</view>
					</navigator>
				</view>
			</view>
			
			<view style="background: #FFFFFF;padding: 20rpx 20rpx 0;margin-top: 20rpx;">
				<view style="font-size: 30rpx;color: #333;font-weight: bold;">其他</view>
				<view class='o_list'>
					<navigator v-for='(value,index) in optionsLists' :key="index" class='o_item' :url="(value.url)" hover-class="none">
						<view class="o_headerItem" style="background: #bb4f77;">
							<i :class="'iconfont '+value.icon" style="font-size: 36rpx;color: #fff;"></i>
						</view>
						<view class='o_text'>{{value.name}}</view>
					</navigator>
				</view>
			</view>
			
			<!--<view class='o_item' @click="navigateToKCB">
				<view style='width:100%'>
					<image src="/static/newVer.png" class='o_image' />
				</view>
				<view class='o_text'>库存表KCB版</view>
			</view>-->
			<!--<view class='scan_code display_flex' @click='scan_code'>
			<fa-icon type="qrcode" size="20" color="#fff" class="icon-scan" />
			<text>扫描产品条形码</text>
		</view>-->
		</scroll-view>


	</view>
</template>

<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'

	import common from '@/utils/common.js';
	import mine from '@/utils/mine.js';
	import record from '@/utils/record.js';
	import notice from '@/utils/notice.js';
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
				user: uni.getStorageSync("user"),
				othercurrent: '',
				noticeText: '', //首页消息提示内容
				logsList: [],
				stockLists: [{
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
					}
				],
				sellLists: [{
						name: '销售(旧)',
						notice: '即将移除',
						icon: 'icon-navicon-xsckd',
						url: '/pages/common/goods-select/goods-select?type=delivery&value=1'
					}, {
						name: '销售(新)',
						notice: '无需审核',
						icon: 'icon-navicon-xsckd',
						url: '/pages/common/goods-select/goods-select?type=delivery&value=3'
					},/*{
						name: '销售订单',
						notice: '审核后出库',
						icon: 'icon-xiaoshoudingdan',
						url: '/pages/common/goods-select/goods-select?type=delivery&value=3'
					},*/
					{
						name: '销售退货',
						notice: '审核后入库',
						icon: 'icon-tuihuodan',
						url: '/pages/common/goods-select/goods-select?type=returing'
					},
				],
				purchaseLists: [{
					name: '采购(旧)',
					notice: '无需审核',
					icon: 'icon-caigoushenqing',
					url: '/pages/common/goods-select/goods-select?type=entering&value=1'
				}, {
					name: '采购(新)',
					notice: '无需审核',
					icon: 'icon-caigoushenqing',
					url: '/pages/common/goods-select/goods-select?type=entering&value=3'
				},/*{
					name: '采购订单',
					notice: '审核后入库',
					icon: 'icon-navicon-cgdd',
					url: '/pages/common/goods-select/goods-select?type=entering&value=3'
				},*/{
					name: '采购退货',
					notice: '审核后出库',
					icon: 'icon-icon5',
					url: '/pages/common/goods-select/goods-select?type=entering&value=1'
				}],
				optionsLists: [{
						name: '产品添加',
						icon: 'icon-wodechanpin',
						url: '/pages/manage/good_add/good_add?type=single'
					},
					{
						name: '使用手册',
						icon: 'icon-tishishuoming',
						url: '/pages/mine/manual/manual'
					},
				],
				get_reserve: 0,
				out_reserve: 0,
				sellNum: 0,
				purchaseNum: 0,
				total_reserve: 0,
				total_money: 0,
				total_products: 0,
				openid: '',
				user: uni.getStorageSync("user"),
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');
			// #ifdef H5
			this.$wechat.share_pyq();
			if (options.openid) {
				uni.setStorageSync("openid", options.openid)
			}
			// #endif

			if (that.user) {
				let user = that.user
				let identity = uni.getStorageSync("identity")
				let now_time = new Date().getTime()
				if (user.vip_time <= now_time) {
					if (identity == 1) {
						const query = Bmob.Query('_User');
						query.get(user.objectId).then(res => {
							res.set('is_vip', false)
							res.set('vip_time', 0)
							res.save()

							user.is_vip = false
							user.vip_time = 0
							uni.setStorageSync("user", user)
						}).catch(err => {})
					} else {
						user.is_vip = false
						user.vip_time = 0
						uni.setStorageSync("user", user)
					}
				}
			}

		},

		onShow() {
			if (uni.getStorageSync("user")) {
				mine.query_setting();
				if (that.user.rights && that.user.rights.othercurrent) {
					that.othercurrent = that.user.rights.othercurrent
				}
				
				mine.getMineInfo().then(res => {
					console.log(res)
					if (res.disabled) {
						setTimeout(function() {
							uni.showToast({
								title: "该账户已禁用",
								icon: "none"
							})
						}, 1000)

						uni.reLaunch({
							url: "/pages/landing/landing"
						})
					}
				})
			} else {
				setTimeout(function() {
					uni.showToast({
						title: "请先登录",
						icon: "none"
					})
				}, 1000)

				uni.reLaunch({
					url: "/pages/landing/landing"
				})
			}

			//that.get_logsList();
		},

		//分享
		onShareAppMessage: function(res) {
			if (res.from === 'button') {
				// 来自页面内转发按钮
				console.log(res.target)
			}
			return {
				title: '库存表，欢迎您的加入',
				path: '/pages/tarBar/index'
			}
		},

		methods: {

			//去到KCB
			navigateToKCB() {
				uni.navigateToMiniProgram({
					appId: 'wx6783307185c8385e',
					path: 'pages/tarBar/index?phone=' + that.user.mobilePhoneNumber,
					success(res) {
						// 打开成功
					}
				})
			},

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
					itemList: ['扫码出库', '扫码销售', '扫码入库', '扫码采购', '扫码盘点', '查看详情'],
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
					let result = res.result;
					let array = result.split("-");
					let productType = array[2]

					if (type == 0) {
						uni.navigateTo({
							url: '/pages/common/goods_out/goods_out?id=' + array[0] + "&type=" + array[1] + "&value=2",
						})
					} else if (type == 1) {
						uni.navigateTo({
							url: '/pages/common/goods_out/goods_out?id=' + array[0] + "&type=" + array[1] + "&value=1",
						})
					} else if (type == 2) {
						uni.navigateTo({
							url: '/pages/common/good_confrim/good_confrim?id=' + array[0] + "&type=" + array[1] + "&value=2",
						})
					} else if (type == 3) {
						uni.navigateTo({
							url: '/pages/common/good_confrim/good_confrim?id=' + array[0] + "&type=" + array[1] + "&value=1",
						})
					} else if (type == 4) {
						uni.navigateTo({
							url: '/pages/common/good_count/good_count?id=' + array[0] + "&type=" + array[1] + "&value=2",
						})
					} else if (type == 5) {
						if (productType == "new") {
							uni.navigateTo({
								url: '/pages/manage/good_det/Ngood_det?id=' + array[0] + "&type=" + array[1],
							})
						} else if (productType == "old") {
							uni.navigateTo({
								url: '/pages/manage/good_det/good_det?id=' + array[0] + "&type=" + array[1],
							})
						}
					} else if (type == 6) {
						let user = uni.getStorageSync("user")
						if (user.is_vip) {
							uni.navigateTo({
								url: '/pages/manage/good_add/good_add?id=' + result + '&type=more',
							})
						} else {
							uni.showToast({
								title: "该功能只限会员使用",
								icon: "none"
							})
						}
					}
				})
				// #endif

				// #ifdef MP-WEIXIN
				uni.scanCode({
					success(res) {
						let result = res.result;
						let array = result.split("-");
						let productType = array[2]

						if (type == 0) {
							uni.navigateTo({
								url: '/pages/common/goods_out/goods_out?id=' + array[0] + "&type=" + array[1] + "&value=2",
							})
						} else if (type == 1) {
							uni.navigateTo({
								url: '/pages/common/goods_out/goods_out?id=' + array[0] + "&type=" + array[1] + "&value=1",
							})
						} else if (type == 2) {
							uni.navigateTo({
								url: '/pages/common/good_confrim/good_confrim?id=' + array[0] + "&type=" + array[1] + "&value=2",
							})
						} else if (type == 3) {
							uni.navigateTo({
								url: '/pages/common/good_confrim/good_confrim?id=' + array[0] + "&type=" + array[1] + "&value=1",
							})
						} else if (type == 4) {
							uni.navigateTo({
								url: '/pages/common/good_count/good_count?id=' + array[0] + "&type=" + array[1] + "&value=2",
							})
						} else if (type == 5) {
							if (productType == "new") {
								uni.navigateTo({
									url: '/pages/manage/good_det/Ngood_det?id=' + array[0] + "&type=" + array[1],
								})
							} else if (productType == "old") {
								uni.navigateTo({
									url: '/pages/manage/good_det/good_det?id=' + array[0] + "&type=" + array[1],
								})
							}
						} else if (type == 6) {
							let user = uni.getStorageSync("user")
							if (user.is_vip) {
								uni.navigateTo({
									url: '/pages/manage/good_add/good_add?id=' + result + '&type=more',
								})
							} else {
								uni.showToast({
									title: "该功能只限会员使用",
									icon: "none"
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

		}
	}
</script>

<style>
	.fristSearchView {
		padding: 10rpx 30rpx;
		background: #426ab3;
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

	.o_list {
		background: #fff;
	}
	.o_headerItem{
		width:80rpx;height: 80rpx;border-radius: 50%;background: #2ca879;line-height: 80rpx;margin: 0 auto;text-align: center;
	}

	.o_image {
		width: 60rpx;
		height: 60rpx;
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
		margin-top: 6rpx;
	}

	.scan_code {
		margin: 60rpx 30rpx 0;
		width: calc(100% - 60rpx);
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
</style>
