<template>
	<!--当月详情-->
	<view>
		<view class="fristSearchView display_flex_bet">
			<view class="display_flex" style="color: #fff;font-weight: bold;" @click="changeVision">
				<text v-if="thisVision == 'New'">回到旧版</text>
				<text v-if="thisVision == 'Old'">回到新版</text>
				<i class="iconfont icon-down-trangle" style="font-size: 24rpx;margin-left: 10rpx;"></i>
			</view>
			<uni-search-bar :radius="100" @confirm="search" color="#fff" style="width:65%;" v-if="canScanCode" />
			<i class="iconfont icon-saoma" style="color: #fff;font-size: 36rpx;margin-left: 30rpx;" @click='scan_code(0)' v-if="canScanCode"></i>
		</view>

		<!-- #ifdef H5 -->
		<scroll-view scroll-y="true" style="height:85vh;" v-if="thisVision == 'New'">
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<scroll-view scroll-y="true" style="height:91vh;" v-if="thisVision == 'New'">
				<!-- #endif -->

				<view style="background: #FFFFFF;padding: 10rpx 20rpx 0;">
					<view class="display_flex_bet" style="padding-bottom: 10rpx;">
						<view style="font-size: 30rpx;color: #333;font-weight: bold;">库存</view>
						<i class="iconfont icon-saoma" style="color: #426ab3;font-size: 36rpx;font-weight: bold;" @click='scan_code(1)'
						 v-if="stockListsNew.length > 0"></i>
					</view>

					<view class='o_list' v-if="stockListsNew.length > 0">
						<navigator v-for='(value,index) in stockListsNew' :key="index" class='o_item' :url="(value.url)" hover-class="none">
							<view class="o_headerItem">
								<i :class="'iconfont '+value.icon" style="font-size: 36rpx;color: #fff;line-height: 80rpx;"></i>
							</view>
							<view class='o_text'>{{value.name}}</view>
						</navigator>
					</view>
					<view v-else style="text-align: center;color: #333;font-weight: bold;padding: 20rpx 0;">暂无操作权限</view>
				</view>

				<!--销售模块-->
				<view style="background: #FFFFFF;padding: 10rpx 20rpx 0;margin-top: 20rpx;">
					<view class="display_flex_bet" style="padding-bottom: 10rpx;">
						<view class="display_flex">
							<view style="font-size: 30rpx;color: #333;font-weight: bold;margin-right: 20rpx;">销售</view>
							
						</view>
						<i class="iconfont icon-saoma" style="color: #426ab3;font-size: 36rpx;font-weight: bold" @click='scan_code(2)'
						 v-if="sellLists.length > 0"></i>
					</view>

					<view class='o_list' v-if="sellLists.length > 0">
						<navigator v-for='(value,index) in sellLists' :key="index" class='o_item' :url="(value.url)" hover-class="none"
						 v-if="value.type=='New'">
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
				<view style="background: #FFFFFF;padding: 10rpx 20rpx 0;margin-top: 20rpx;">
					<view class="display_flex_bet" style="padding-bottom: 10rpx;">
						<view class="display_flex">
							<view style="font-size: 30rpx;color: #333;font-weight: bold;margin-right: 20rpx;">采购</view>
						</view>

						<i class="iconfont icon-saoma" style="color: #426ab3;font-size: 36rpx;font-weight: bold" @click='scan_code(3)'
						 v-if="purchaseLists.length > 0"></i>
					</view>

					<view class='o_list' v-if="purchaseLists.length > 0">
						<navigator v-for='(value,index) in purchaseLists' :key="index" class='o_item' :url="(value.url)" hover-class="none"
						 v-if="value.type=='New'">
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
				<view style="background: #FFFFFF;padding: 10rpx 20rpx 0;margin-top: 20rpx;" v-if="user.identity !=2">
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


			<!-- #ifdef H5 -->
			<scroll-view scroll-y="true" style="height:85vh;" v-if="thisVision == 'Old'">
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<scroll-view scroll-y="true" style="height:91vh;" v-if="thisVision == 'Old'">
					<!-- #endif -->

					<view style="background: #FFFFFF;padding: 10rpx 20rpx 0;">
						<view class="display_flex_bet" style="padding-bottom: 10rpx;">
							<view style="font-size: 30rpx;color: #333;font-weight: bold;">库存<text style="font-size: 24rpx;">（旧）</text></view>
							<i class="iconfont icon-saoma" style="color: #426ab3;font-size: 36rpx;font-weight: bold;" @click='scan_code(1)'
							 v-if="stockLists.length > 0"></i>
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
					<view style="background: #FFFFFF;padding: 10rpx 20rpx 0;margin-top: 20rpx;">
						<view class="display_flex_bet" style="padding-bottom: 10rpx;">
							<view class="display_flex">
								<view style="font-size: 30rpx;color: #333;font-weight: bold;margin-right: 20rpx;">销售</view>
								<fa-icon type="question-circle" size="20" color="#426ab3" @click="gotoNotice()"></fa-icon>
							</view>
							<i class="iconfont icon-saoma" style="color: #426ab3;font-size: 36rpx;font-weight: bold" @click='scan_code(2)'
							 v-if="sellLists.length > 0"></i>
						</view>

						<view class='o_list' v-if="sellLists.length > 0">
							<navigator v-for='(value,index) in sellLists' :key="index" class='o_item' :url="(value.url)" hover-class="none"
							 v-if="value.type=='Old'">
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
					<view style="background: #FFFFFF;padding: 10rpx 20rpx 0;margin-top: 20rpx;">
						<view class="display_flex_bet" style="padding-bottom: 10rpx;">
							<view class="display_flex">
								<view style="font-size: 30rpx;color: #333;font-weight: bold;margin-right: 20rpx;">采购</view>
								<fa-icon type="question-circle" size="20" color="#426ab3" @click="gotoNotice()"></fa-icon>
							</view>

							<i class="iconfont icon-saoma" style="color: #426ab3;font-size: 36rpx;font-weight: bold" @click='scan_code(3)'
							 v-if="purchaseLists.length > 0"></i>
						</view>

						<view class='o_list' v-if="purchaseLists.length > 0">
							<navigator v-for='(value,index) in purchaseLists' :key="index" class='o_item' :url="(value.url)" hover-class="none"
							 v-if="value.type=='Old'">
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
					<view style="background: #FFFFFF;padding: 10rpx 20rpx 0;margin-top: 20rpx;" v-if="canScanCode">
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
						<view style="text-align: center;">
							<image src="http://www.shoujixungeng.com/2020/02/20/f7bd059c400e250780a9a54710537f16.jpg" style="width: 90rpx;height: 90rpx;border-radius: 50%;"></image>
						</view>
						<view style="color: #333;font-weight: bold;">*本次更新内容</view>
						<view style="margin-left: 20rpx;font-size: 24rpx;color: #333;">
							<view>1、产品编辑可以取消预警设置</view>
							<view>2、盘点、调拨优化</view>
							<view>3、增加商品品牌属性</view>
							<view>4、图片显示优化</view>
							<view>5、添加员工优化</view>
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
				stockListsNew: [{
						name: '入库',
						icon: 'icon-ruku',
						url: '/pages/commonNew/goods-select/goods-select?type=entering&value=2'
					},
					{
						name: '出库',
						icon: 'icon-chuku',
						url: '/pages/commonNew/goods-select/goods-select?type=delivery&value=2'
					},
					{
						name: '产品调拨',
						icon: 'icon-icon-transfer',
						url: '/pages/commonNew/goods-select/goods-select?type=allocation'
					},
					{
						name: '库存盘点',
						icon: 'icon-pandian',
						url: '/pages/commonNew/goods-select/goods-select?type=counting'
					}
				],
				sellLists: [{
						name: '销售(旧)',
						notice: '支持所有产品',
						type: 'Old',
						icon: 'icon-navicon-xsckd',
						url: '/pages/common/goods-select/goods-select?type=delivery&value=1'
					}, {
						name: '销售退货(旧)',
						notice: '支持所有产品',
						type: 'Old',
						icon: 'icon-tuihuodan',
						url: '/pages/common/goods-select/goods-select?type=returing&value=1'
					}, {
						name: '销售订单(新)',
						notice: '适用新版产品',
						type: 'New',
						icon: 'icon-xiaoshoudingdan',
						url: '/pages/commonNew/goods-select/goods-select?type=delivery&value=5'
					}, {
						name: '销售(新)',
						notice: '适用新版产品',
						type: 'New',
						icon: 'icon-navicon-xsckd',
						url: '/pages/commonNew/goods-select/goods-select?type=delivery&value=3'
					},
					{
						name: '销售退货(新)',
						notice: '适用新版产品',
						type: 'New',
						icon: 'icon-tuihuodan',
						url: '/pages/commonNew/goods-select/goods-select?type=entering&value=4'
					},

					/*{
						name: '连续扫码',
						notice: '适用新版产品',
						type: 'New',
						icon: 'icon-tuihuodan',
						url: '/pages/commonNew/keepScan/keepScan?type=entering&value=4'
					},*/
				],
				purchaseLists: [{
						name: '采购(旧)',
						type: 'Old',
						notice: '支持所有产品',
						icon: 'icon-office-supplies-shopping-list',
						url: '/pages/common/goods-select/goods-select?type=entering&value=1'
					}, {
						name: '采购订单(新)',
						notice: '适用新版产品',
						type: 'New',
						icon: 'icon-navicon-cgdd',
						url: '/pages/commonNew/goods-select/goods-select?type=entering&value=5'
					}, {
						name: '采购(新)',
						notice: '适用新版产品',
						type: 'New',
						icon: 'icon-office-supplies-shopping-list',
						url: '/pages/commonNew/goods-select/goods-select?type=entering&value=3'
					},
					{
						name: '采购退货',
						notice: '适用新版产品',
						type: 'New',
						icon: 'icon-tuihuo1',
						url: '/pages/commonNew/goods-select/goods-select?type=delivery&value=4'
					}
				],
				optionsLists: [{
						name: '产品添加',
						icon: 'icon-wodechanpin',
						url: '/pages/manage/good_add/good_add?type=single'
					}, {
						name: '扫码添加产品',
						icon: 'icon-saoma',
						url: ''
					}, {
						name: '货损',
						icon: 'icon-chanpin',
						url: '/pages/common/goods-select/goods-select?type=bad'
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
				isUpdate: false,
				canScanCode: true, //根据权限判断是否可以扫码操作
				thisVision: "New",
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');
			getApp().globalData.uid = uni.getStorageSync('uid');

			// #ifdef H5
			this.$wechat.share_pyq();
			if (options.openid) {
				uni.setStorageSync("openid", options.openid)
			}
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
				that.thisVision = uni.getStorageSync("thisVision") || "New"
				that.user = uni.getStorageSync("user")
				
				that.$http.Post("stock_systemSetting", {type:"query"}).then(res => {
					if(res.data){
						getApp().globalData.setting = res.data
					}
					uni.setStorageSync("setting", res.data)
				})
				
				if (that.user.identity == 2 && that.user.rights) {
					that.othercurrent = that.user.rights.othercurrent || []

					if (that.user.rights.current.indexOf("6") == -1) {
						that.stockLists = []
						that.stockListsNew = []
					}

					if (that.user.rights.current.indexOf("0") == -1) {
						that.canScanCode = false
					}

					if (that.user.rights.current.indexOf("7") == -1) {
						that.purchaseLists = []
					}

					if (that.user.rights.current.indexOf("8") == -1) {
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

				that.isUpdate = uni.getStorageSync("isUpdate") || false; //检测是否有更新
			} else { //未登录情况下
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

			that.common.clearOrderDetStorage()//清除一些订单的缓存
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

			changeVision() {
				if (that.thisVision == 'New') {
					uni.setStorageSync("thisVision", 'Old')
					that.thisVision = 'Old'
					uni.setNavigationBarTitle({
						title: "首页（旧版）"
					})
				} else {
					uni.setStorageSync("thisVision", 'New')
					that.thisVision = 'New'
					uni.setNavigationBarTitle({
						title: "首页（新版）"
					})
				}
			},

			//关闭更新Modal
			hideModal() {
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
					if (index == 1) {
						uni.scanCode({
							success(res) {
								let result = res.result;
								if (user.is_vip) {
									uni.navigateTo({
										url: '/pages/manage/good_add/good_add?id=' + result + '&type=single',
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
					opLists = ['产品详情']
				} else if (type == 1) {
					opLists = ['入库', '出库', '调拨', '盘点']
				} else if (type == 2) {
					opLists = ['销售', '销售退货']
				} else if (type == 3) {
					opLists = ['采购', '采购退货']
				}
				uni.showActionSheet({
					itemList: opLists,
					success(res) {
						that.scan(res.tapIndex, opLists, type);
					},
					fail(res) {
						console.log(res.errMsg)
					}
				})
			},

			//扫码操作
			scan: function(type, opLists, scanType) {
				// #ifdef H5
				this.$wechat.scanQRCode().then(res => {
					let result = res.result;
					let array = result.split("-");
					let productType = array[2]

					if (that.thisVision == "New") {
						that.returnUrlNew(opLists, type, array, productType)
					} else {
						that.returnUrl(opLists, type, array, productType)
					}
				})
				// #endif

				// #ifdef MP-WEIXIN
				uni.scanCode({
					success(res) {
						console.log(res)
						let result = res.result;
						let array = result.split("-");
						let productType = array[2]

						if (that.thisVision == "New") {
							that.returnUrlNew(opLists, type, array, productType)
						} else {
							that.returnUrl(opLists, type, array, productType)
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

			//去到之指定的链接
			returnUrlNew(opLists, type, array, productType) {
				if (opLists[type] == '出库') {
					uni.navigateTo({
						url: '/pages/commonNew/goods_out/goods_out?id=' + array[0] + "&type=" + array[1] + "&value=2",
					})
				} else if (opLists[type] == '销售') {
					uni.navigateTo({
						url: '/pages/commonNew/goods_out/goods_out?id=' + array[0] + "&type=" + array[1] + "&value=3",
					})
				} else if (opLists[type] == '销售退货') {
					uni.navigateTo({
						url: '/pages/commonNew/good_confrim/good_confrim?id=' + array[0] + "&type=" + array[1] + "&value=4",
					})
				} else if (opLists[type] == '采购退货') {
					uni.navigateTo({
						url: '/pages/commonNew/goods_out/goods_out?id=' + array[0] + "&type=" + array[1] + "&value=4",
					})
				} else if (opLists[type] == '入库') {
					uni.navigateTo({
						url: '/pages/commonNew/good_confrim/good_confrim?id=' + array[0] + "&type=" + array[1] + "&value=2",
					})
				} else if (opLists[type] == '采购') {
					uni.navigateTo({
						url: '/pages/commonNew/good_confrim/good_confrim?id=' + array[0] + "&type=" + array[1] + "&value=3",
					})
				} else if (opLists[type] == '调拨') {
					uni.navigateTo({
						url: '/pages/commonNew/good_allocation/good_allocation?id=' + array[0] + "&type=" + array[1],
					})
				} else if (opLists[type] == '盘点') {
					uni.navigateTo({
						url: '/pages/commonNew/good_count/good_count?id=' + array[0] + "&type=" + array[1] + "&value=2",
					})
				} else if (opLists[type] == '产品详情') {
					uni.navigateTo({
						url: '/pages/manage/good_det/Ngood_det?id=' + array[0] + "&type=" + array[1],
					})
				}
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
						url: '/pages/common/good_return/good_return?id=' + array[0] + "&isCode=" + array[1] + "&type=returing&value=1",
					})
				} else if (opLists[type] == '采购退货') {
					uni.showToast({
						icon:"none",
						title:"旧版暂不支持"
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
					if (productType == "old") {
						uni.navigateTo({
							url: '/pages/manage/good_det/good_det?id=' + array[0] + "&type=" + array[1],
						})
					} else {
						uni.navigateTo({
							url: '/pages/manage/good_det/Ngood_det?id=' + array[0] + "&type=" + array[1],
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
