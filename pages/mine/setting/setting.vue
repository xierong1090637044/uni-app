<template>
	<view>
		<view class="uni-form-item uni-column">
			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 170rpx;">登陆网址</view>
				<input class="uni-input" value="http://www.jimuzhou.com/stock/test/" disabled="true" />
			</view>
			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 170rpx;">显示精度</view>
				<input class="uni-input" type="number" placeholder="有效值0,1,2" v-model="params.show_float" @blur="modify_setting" />
			</view>

			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 170rpx;">USER账号</view>
				<input class="uni-input" placeholder="请输入USER账号" v-model="params.USER" @blur="modify_setting" />
			</view>
			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 170rpx;">UKEY账号</view>
				<input class="uni-input" placeholder="请输入UKEY账号" v-model="params.UKEY" @blur="modify_setting" />
			</view>
			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 170rpx;">打印机编号</view>
				<input class="uni-input" placeholder="请输入打印机编号" v-model="params.number" @blur="modify_setting" />
			</view>

		</view>

		<view style="margin-top: 30rpx;" v-if="identity == 1">
			<view class="display_flex_bet item">
				<view>关联微信通知</view>
				<switch @change="link_wechatinfo" :checked="params.wechat_info" />
			</view>

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

				params: {
					show_float: '',
					USER: '',
					UKEY: '',
					number: '',
					wechat_info: '',
				},
			}
		},
		onLoad() {
			that = this;
			uid = wx.getStorageSync("uid")

			that.identity = uni.getStorageSync("identity");
			mine.query_setting().then(res => {
				that.params = res[0]
				if (res[0].wx_openid) {
					that.params.wechat_info = true
				} else {
					that.params.wechat_info = false
				}
			})
		},
		methods: {
			modify_setting() {
				mine.modify_setting(that.params)
			},

			link_wechatinfo(e) {
				let value = e.detail.value

				if (value) {
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
