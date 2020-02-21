<template>
	<!--当月详情-->
	<view>
		<view class="fristSearchView display_flex_bet">
			<uni-search-bar :radius="100" @confirm="search" color="#fff" style="width:100%;" />
			<i class="iconfont icon-saoma" style="color: #fff;font-size: 36rpx;margin-left: 30rpx;" @click='scan_code(0)'></i>
		</view>

		<scroll-view scroll-y="true" style="max-height:100vh;">

			<view style="background: #FFFFFF;padding: 20rpx 20rpx 0;">
				<view class="display_flex_bet" style="padding-bottom: 10rpx;">
					<view style="font-size: 30rpx;color: #333;font-weight: bold;">库存</view>
					<i class="iconfont icon-saoma" style="color: #426ab3;font-size: 36rpx;font-weight: bold;" @click='scan_code(1)' v-if="stockLists.length > 0"></i>
				</view>

				<view class='o_list' v-if="stockLists.length > 0">
					<navigator v-for='(value,index) in stockLists' :key="index" class='o_item' :url="(value.url)" hover-class="none">
						<view class="o_headerItem">
							<i :class="'iconfont '+value.icon" style="font-size: 36rpx;color: #fff;line-height: 80rpx;"></i>
						</view>
						<view class='o_text'>{{value.name}}</view>
					</navigator>
				</view>
				<view v-else style="text-align: center;color: #333;font-weight: bold;padding: 20rpx 0;">暂无操作权限</view>
			</view>
			
			<!--销售模块-->
			<view style="background: #FFFFFF;padding: 20rpx 20rpx 0;margin-top: 20rpx;">
				<view class="display_flex_bet" style="padding-bottom: 10rpx;">
					<view class="display_flex">
						<view style="font-size: 30rpx;color: #333;font-weight: bold;margin-right: 20rpx;">销售</view>
						<fa-icon type="question-circle" size="20" color="#426ab3" @click="gotoNotice()"></fa-icon>
					</view>
					<i class="iconfont icon-saoma" style="color: #426ab3;font-size: 36rpx;font-weight: bold" @click='scan_code(2)' v-if="sellLists.length > 0"></i>
				</view>

				<view class='o_list' v-if="sellLists.length > 0">
					<navigator v-for='(value,index) in sellLists' :key="index" class='o_item' :url="(value.url)" hover-class="none">
						<view class="o_headerItem" style="background: #afbb4f;">
							<i :class="'iconfont '+value.icon" style="font-size: 36rpx;color: #fff;line-height: 80rpx;"></i>
						</view>
						<view class='o_text'>{{value.name}}</view>
						<view style="font-size: 20rpx;color: #999;margin-top: -4rpx;">{{value.notice}}</view>
					</navigator>
				</view>
				<view v-else style="text-align: center;color: #333;font-weight: bold;padding: 20rpx 0;">暂无操作权限</view>
			</view>
			
			<!--采购模块-->
			<view style="background: #FFFFFF;padding: 20rpx 20rpx 0;margin-top: 20rpx;">
				<view class="display_flex_bet" style="padding-bottom: 10rpx;">
					<view class="display_flex">
						<view style="font-size: 30rpx;color: #333;font-weight: bold;margin-right: 20rpx;">采购</view>
						<fa-icon type="question-circle" size="20" color="#426ab3" @click="gotoNotice()"></fa-icon>
					</view>

					<i class="iconfont icon-saoma" style="color: #426ab3;font-size: 36rpx;font-weight: bold" @click='scan_code(3)' v-if="purchaseLists.length > 0"></i>
				</view>

				<view class='o_list' v-if="purchaseLists.length > 0">
					<navigator v-for='(value,index) in purchaseLists' :key="index" class='o_item' :url="(value.url)" hover-class="none">
						<view class="o_headerItem" style="background: #ad4fbb;">
							<i :class="'iconfont '+value.icon" style="font-size: 40rpx;color: #fff;line-height: 80rpx;"></i>
						</view>
						<view class='o_text'>{{value.name}}</view>
						<view style="font-size: 20rpx;color: #999;margin-top: -4rpx;">{{value.notice}}</view>
					</navigator>
				</view>
				<view v-else style="text-align: center;color: #333;font-weight: bold;padding: 20rpx 0;">暂无操作权限</view>
			</view>
			
			<!--其他模块-->
			<view style="background: #FFFFFF;padding: 20rpx 20rpx 0;margin-top: 20rpx;">
				<view style="font-size: 30rpx;color: #333;font-weight: bold;padding-bottom: 10rpx;">其他</view>
				<view class='o_list'>
					<view v-for='(value,index) in optionsLists' :key="index" class='o_item' @click="otherFunctions(value.url,index)">
						<view class="o_headerItem" style="background: #bb4f77;">
							<i :class="'iconfont '+value.icon" style="font-size: 36rpx;color: #fff;line-height: 80rpx;"></i>
						</view>
						<view class='o_text'>{{value.name}}</view>
					</view>
				</view>
			</view>
		</scroll-view>
		
		<!--更新弹窗-->
		<modal :is_transparent="false" v-if="isUpdate" @hideModal="hideModal">
			<view class="updateContent">
				<view style="text-align: center;"><image src="http://www.shoujixungeng.com/2020/02/20/f7bd059c400e250780a9a54710537f16.jpg" style="width: 90rpx;height: 90rpx;border-radius: 50%;"></image></view>
				<view style="color: #333;font-weight: bold;">*本次更新内容</view>
				<view style="margin-left: 20rpx;font-size: 24rpx;color: #333;">
					<view>1、新增出入库服务通知，可在"我的设置"里面订阅</view>
					<view>2、产品删除不生效bug修改</view>
					<view>3、多规格产品规格修改不生效bug修复</view>
				</view>
				<view style="font-size: 20rpx;color: #999;text-align: center;margin-top: 10rpx;">感谢大家一如既往的支持！</view>
			</view>
		</modal>


	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import modal from '@/components/modal.vue'

	import common from '@/utils/common.js';
	import mine from '@/utils/mine.js';
	import Bmob from "hydrogen-js-sdk";
	let that;
	let uid;

	export default {
		components: {
			modal,
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
						notice: '支持所有产品',
						icon: 'icon-navicon-xsckd',
						url: '/pages/common/goods-select/goods-select?type=delivery&value=1'
					}, {
						name: '销售退货(旧)',
						notice: '支持所有产品',
						icon: 'icon-tuihuodan',
						url: '/pages/common/goods-select/goods-select?type=returing&value=1'
					}, {
						name: '销售(新)',
						notice: '适用新版产品',
						icon: 'icon-navicon-xsckd',
						url: '/pages/common/goods-select/goods-select?type=delivery&value=3'
					},
					{
						name: '销售退货(新)',
						notice: '适用新版产品',
						icon: 'icon-tuihuodan',
						url: '/pages/common/goods-select/goods-select?type=entering&value=4'
					},
				],
				purchaseLists: [{
						name: '采购(旧)',
						notice: '支持所有产品',
						icon: 'icon-office-supplies-shopping-list',
						url: '/pages/common/goods-select/goods-select?type=entering&value=1'
					}, {
						name: '采购(新)',
						notice: '适用新版产品',
						icon: 'icon-office-supplies-shopping-list',
						url: '/pages/common/goods-select/goods-select?type=entering&value=3'
					},
					{
						name: '采购退货',
						notice: '适用新版产品',
						icon: 'icon-tuihuo1',
						url: '/pages/common/goods-select/goods-select?type=delivery&value=4'
					}
				],
				optionsLists: [{
						name: '产品添加',
						icon: 'icon-wodechanpin',
						url: '/pages/manage/good_add/good_add?type=more'
					}, {
						name: '扫码添加产品',
						icon: 'icon-saoma',
						url: ''
					},
					{
						name: '使用手册',
						icon: 'icon-tishishuoming',
						url: '/pages/mine/manual/manual'
					}
				],
				get_reserve: 0,
				out_reserve: 0,
				sellNum: 0,
				purchaseNum: 0,
				total_reserve: 0,
				total_money: 0,
				total_products: 0,
				openid: '',
				isUpdate:false,
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
			
			//  #ifdef MP-WEIXIN
			wx.requestSubscribeMessage({
			  tmplIds: ['G2UJEDEyAtGuBdO-Yv96yBi-UnTLhaInr-KzEXqZ-48'],
			  success: function(res) { 
					console.log(res)
				}
			})
			// #endif

			if (that.user) { //会员vip 校验
				let user = that.user
				const query = Bmob.Query('_User');
				query.get(uid).then(res => {
					let nowUser = res
					let identity = uni.getStorageSync("identity")
					Bmob.timestamp().then(res => {
						console.log(res, res.datetime)
						let now_time = res.timestamp * 1000
						if (nowUser.vip_time <= now_time) {
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
						} else {
							if (identity == 1) {
								uni.setStorageSync("user", nowUser)
							}
						}
					})

				}).catch(err => {
					console.log(err)
				})
			}

		},

		onShow() {
			if (uni.getStorageSync("user")) { //登陆情况下进行的操作
			  that.user = uni.getStorageSync("user")
				mine.query_setting();
				if (that.user.identity ==2 && that.user.rights) {
					that.othercurrent = that.user.rights.othercurrent || []
					
					if(that.user.rights.current.indexOf("6") == -1){
						that.stockLists = []
					}
					
					if(that.user.rights.current.indexOf("7") == -1){
						that.purchaseLists = []
					}
					
					if(that.user.rights.current.indexOf("8") == -1){
						that.sellLists = []
					}
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
				
				that.isUpdate = uni.getStorageSync("isUpdate") || false;//检测是否有更新
			} else {//未登录情况下
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

			uni.removeStorageSync("now_product")
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
			
			//关闭更新Modal
			hideModal(){
				that.isUpdate = false;
				uni.removeStorageSync("isUpdate")
			},

			//其他功能的点击事件
			otherFunctions(url, index) {
				let user = uni.getStorageSync("user")

				if (url) {
					if (index == 0) { //添加产品
					const query = Bmob.Query("Goods");
					query.equalTo("userId", "==", uid);
					query.find().then(res => {
						let productList = res
						if (user.is_vip || productList.length < 30) {
							uni.navigateTo({
								url: url
							})
						} else {
							uni.showToast({
								title: "该功能只限会员使用",
								icon: "none"
							})
						}
					})
						
					} else {
						uni.navigateTo({
							url: url
						})
					}
				} else {
					if(index == 1){
						uni.scanCode({
							success(res) {
								let result = res.result;
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
					}
				}
			},

			//去到新版旧版的简介
			gotoNotice() {
				const query = Bmob.Query('_Article');
				query.get('P2MN0002').then(res => {
					console.log(res)
					uni.setStorageSync("webviewUrl", res.url)
					uni.navigateTo({
						url: "/pages/webview/webview"
					})
				}).catch(err => {
					console.log(err)
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
			scan_code: function(type) {
				let opLists = [];

				if (type == 0) {
					opLists = ['出库', '销售', '入库', '采购', '盘点', '产品详情']
				} else if (type == 1) {
					opLists = ['入库', '出库', '调拨', '盘点']
				} else if (type == 2) {
					opLists = ['销售', '销售退货']
				} else if (type == 3) {
					opLists = ['采购']
				}
				uni.showActionSheet({
					itemList: opLists,
					success(res) {
						that.scan(res.tapIndex, opLists);
					},
					fail(res) {
						console.log(res.errMsg)
					}
				})
			},

			//扫码操作
			scan: function(type, opLists) {
				// #ifdef H5
				this.$wechat.scanQRCode().then(res => {
					let result = res.result;
					let array = result.split("-");
					let productType = array[2]

					that.returnUrl(opLists, type, array, productType)
				})
				// #endif

				// #ifdef MP-WEIXIN
				uni.scanCode({
					success(res) {
						console.log(res)
						let result = res.result;
						let array = result.split("-");
						let productType = array[2]

						that.returnUrl(opLists, type, array, productType)
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

			//去到之指定的链接
			returnUrl(opLists, type, array, productType) {
				if (opLists[type] == '出库') {
					uni.navigateTo({
						url: '/pages/common/goods_out/goods_out?id=' + array[0] + "&type=" + array[1] + "&value=2",
					})
				} else if (opLists[type] == '销售') {
					uni.navigateTo({
						url: '/pages/common/goods_out/goods_out?id=' + array[0] + "&type=" + array[1] + "&value=1",
					})
				} else if (opLists[type] == '销售退货') {
					uni.navigateTo({
						url: '/pages/common/good_return/good_return?id=' + array[0] + "&type=returing&value=1",
					})
				} else if (opLists[type] == '入库') {
					uni.navigateTo({
						url: '/pages/common/good_confrim/good_confrim?id=' + array[0] + "&type=" + array[1] + "&value=2",
					})
				} else if (opLists[type] == '采购') {
					uni.navigateTo({
						url: '/pages/common/good_confrim/good_confrim?id=' + array[0] + "&type=" + array[1] + "&value=1",
					})
				} else if (opLists[type] == '盘点') {
					uni.navigateTo({
						url: '/pages/common/good_count/good_count?id=' + array[0] + "&type=" + array[1] + "&value=2",
					})
				} else if (opLists[type] == '产品详情') {
					if (productType == "new") {
						uni.navigateTo({
							url: '/pages/manage/good_det/Ngood_det?id=' + array[0] + "&type=" + array[1],
						})
					} else if (productType == "old") {
						uni.navigateTo({
							url: '/pages/manage/good_det/good_det?id=' + array[0] + "&type=" + array[1],
						})
					} else {
						uni.navigateTo({
							url: '/pages/manage/good_det/Ngood_det?id=' + array[0] + "&type=true",
						})
					}
				}
			}

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

	.o_headerItem {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
		background: #2ca879;
		line-height: 80rpx;
		margin: 0 auto;
		text-align: center;
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
