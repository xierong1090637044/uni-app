<template>
	<view>
		<view class="uni-form-item uni-column">
			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 170rpx;">登陆网址</view>
				<input class="uni-input" value="https://www.shoujixungeng.com" disabled="true" />
			</view>
			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 170rpx;">显示精度</view>
				<input class="uni-input" type="number" placeholder="有效值0,1,2" v-model="params.show_float" @blur="modify_setting"
				 :disabled="inputCan" />
			</view>

			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 170rpx;">打印功能</view>
				<input class="uni-input" placeholder="需购买飞鹅云打印机,然后联系客服开通" :disabled="true" style="border-bottom: unset;" />
			</view>
			<!--<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 170rpx;">UKEY账号</view>
				<input class="uni-input" placeholder="请输入UKEY账号" v-model="params.UKEY" @blur="modify_setting" :disabled="inputCan" />
			</view>
			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 170rpx;">打印机编号</view>
				<input class="uni-input" placeholder="请输入打印机编号" v-model="params.number" @blur="modify_setting" :disabled="inputCan" />
			</view>-->
		</view>

		<view style="margin-top: 30rpx;">
			<view>
				<view class="display_flex_bet item normalBorder" style="padding: 20rpx;">
					<view>自动打印</view>
					<switch @change="auto_print" :checked="params.auto_print" :disabled="inputCan" />
				</view>
			</view>
			<view>
				<view class="display_flex_bet item normalBorder" style="padding: 20rpx;">
					<view>负出库</view>
					<switch @change="negativeOut" :checked="params.negativeOut" :disabled="inputCan" />
				</view>
			</view>
			<view>
				<view class="display_flex_bet item" style="padding: 20rpx;">
					<view>物料管理</view>
					<switch @change="showProduction" :checked="params.production" />
				</view>
			</view>
		</view>


		<view style="margin-top: 30rpx;" v-if="identity == 1">
			<view class="display_flex_bet item normalBorder" style="padding: 20rpx;">
				<view>关联微信通知</view>
				<switch @change="link_wechatinfo" :checked="params.wechat_info" />
			</view>

			<!-- #ifdef MP-WEIXIN -->
			<view class="display_flex_bet item" style="padding: 20rpx;">
				<view>订阅小程序通知</view>
				<button style="margin: unset;font-size: 28rpx;line-height: unset;" plain="true" @click="orderThisInfo">订阅</button>
			</view>
			<!-- #endif -->

		</view>

	</view>
</template>

<script>
	let uid;
	let that;
	import mine from '@/utils/mine.js';

	export default {
		data() {
			return {
				identity: "", //身份码，
				user: "",
				inputCan: (uni.getStorageSync("identity") == 1) ? false : true,
				params: {
					show_float: '',
					USER: '',
					UKEY: '',
					number: 0,
					wx_openid: '',
					wechat_info: false,
					auto_print: false, //自动打印
					negativeOut: false, //负出库
					production: true
				},
			}
		},
		onLoad() {
			that = this;
			uid = wx.getStorageSync("uid")

			that.identity = uni.getStorageSync("identity");
			mine.query_setting().then(res => {

				if (res[0]) {
					that.params.show_float = res[0].show_float ? res[0].show_float : ''
					that.params.USER = res[0].USER ? res[0].USER : ''
					that.params.UKEY = res[0].UKEY ? res[0].UKEY : ''
					that.params.number = res[0].show_float ? res[0].number : 0
					if (res[0].wx_openid) {
						that.params.wechat_info = true
					} else {
						that.params.wechat_info = false
					}

					if (res[0].auto_print) {
						that.params.auto_print = true
					} else {
						that.params.auto_print = false
					}

					if (res[0].negativeOut) {
						that.params.negativeOut = true
					} else {
						that.params.negativeOut = false
					}

					if (res[0].production == true) {
						that.params.production = true
					} else if (res[0].production == false) {
						that.params.production = false
					} else {
						that.params.production = true
					}
				}
			})
		},
		methods: {

			//订阅微信通知
			orderThisInfo() {
				wx.requestSubscribeMessage({
					tmplIds: ['G2UJEDEyAtGuBdO-Yv96yBi-UnTLhaInr-KzEXqZ-48','BKT2_0OuWF3mLZGvFmpRzWFa_Dyr4EIppl_LFF1uRLE'],
					success(res) {
						console.log(res)
						uni.showToast({
							title:"订阅成功",
						})
					}
				})
			},

			modify_setting() {
				mine.modify_setting(that.params)
			},

			//修改是否显示物料管理
			showProduction(e) {
				that.params.production = e.detail.value
				mine.modify_setting(that.params)
			},

			//修改是否自动打印
			auto_print(e) {
				that.params.auto_print = e.detail.value
				mine.modify_setting(that.params)
			},

			negativeOut(e) {
				that.params.negativeOut = e.detail.value
				mine.modify_setting(that.params)
			},

			link_wechatinfo(e) {
				let value = e.detail.value

				if (value) {
					// #ifdef MP-WEIXIN
					if (uni.getStorageSync("openid")) {
						uni.showModal({
							title: '提示',
							content: '请关注服务号"库存表"进行关联',
							confirmText: "关闭",
							success: function(res) {
								if (res.confirm) {} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					} else {
						uni.showModal({
							title: '提示',
							content: '请关注服务号"库存表"进行关联',
							confirmText: "关闭",
							success: function(res) {
								if (res.confirm) {} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					}
					// #endif

					// #ifdef H5
					if (uni.getStorageSync("openid")) {
						uni.showModal({
							title: '提示',
							content: '是否确定关联微信通知',
							confirmText: "关联",
							success: function(res) {
								if (res.confirm) {
									that.params.wx_openid = uni.getStorageSync("openid")
									mine.modify_setting(that.params)
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					} else {
						uni.showModal({
							title: '提示',
							content: '请关闭当前窗口，重新进入后关联',
							confirmText: "关闭",
							success: function(res) {
								if (res.confirm) {
									this.$wechat.close()
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						});
					}
					// #endif
				} else {
					that.params.wx_openid = ''
					mine.modify_setting(that.params)
				}
			}
		}
	}
</script>

<style>
	.item {
		background: #fff;
		padding: 4rpx 30rpx;
		font-size: 24rpx;
	}

	.uni-input {
		border-bottom: 1rpx solid#ccc;
		padding: 10rpx 0;
	}
</style>
