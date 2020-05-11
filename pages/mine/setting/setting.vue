<template>
	<view>

		<form @submit="modify_setting">
			<view style="background: #fff;padding: 0 20rpx;">
				<view class="listTitle">销售参数</view>
				<view>
					<view class="display_flex_bet listItem">
						<view>负库存销售</view>
						<view>
							<switch style="transform:scale(0.8);" name="negativeOut" :checked="params.negativeOut"/>
						</view>
					</view>
					<view class="display_flex_bet listItem">
						<view>自动同步上次销售价</view>
						<view>
							<switch style="transform:scale(0.8);" name="autoRetailPrice" :checked="params.autoRetailPrice"/>
						</view>
					</view>
				</view>
			</view>

			<view style="background: #fff;padding: 0 20rpx;margin-top: 10rpx;">
				<view class="listTitle">进货参数</view>
				<view>
					<view class="display_flex_bet listItem">
						<view>自动同步上次采购价</view>
						<view>
							<switch style="transform:scale(0.8);"  name="autoCostPrice" :checked="params.autoCostPrice"/>
						</view>
					</view>
				</view>
			</view>

			<view style="background: #fff;padding: 0 20rpx;margin-top: 10rpx;">
				<view class="listTitle">库存参数</view>
				<view>
					<view class="display_flex_bet listItem">
						<view>库存显示精度</view>
						<view>
							<picker :range="[0,1,2]" name="show_float" @change="changeShowFolat" :value="params.show_float">
								<text>{{params.show_float}}</text>
							</picker>
						</view>
					</view>
				</view>
			</view>

			<view style="background: #fff;padding: 0 20rpx;margin-top: 10rpx;">
				<view class="listTitle">其他设置</view>
				<view>
					<view class="display_flex_bet listItem">
						<view>关联微信通知</view>
						<view>
							<switch @change="link_wechatinfo" :checked="params.wechat_info" name="wechat_info"/>
						</view>
					</view>
				</view>
			</view>

			<view class="bottomButton">
				<button form-type="submit" plain="true" style="padding: unset;margin: unset;border: unset;color: #fff;">保存</button>
			</view>
		</form>

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
				params: getApp().globalData.setting,
			}
		},
		onLoad() {
			that = this;
			uid = wx.getStorageSync("uid")

			that.identity = uni.getStorageSync("identity");
			uni.setNavigationBarTitle({
				title: "系统设置"
			})
			
			that.$http.Post("stock_systemSetting", {type:"query"}).then(res => {
				if(res.data){
					for(let item in that.params){
						if(res.data[item]!=undefined && res.data[item]!=null){
							that.params[item] = res.data[item]
						}
					}
				}
				
				uni.setStorageSync("setting", res.data)
			})
		},
		methods: {
			changeShowFolat(e){
				that.params.show_float = e.detail.value
			},
			
			getSetting(){
				that.$http.Post("stock_systemSetting", {type:"query"}).then(res => {
					for(let item in that.params){
						if(res.data[item]!=undefined){
							that.params[item] = res.data[item]
						}
					}
					uni.setStorageSync("setting", res.data)
				})
			},

			modify_setting(e) {
				console.log(e)
				let params = e.detail.value
				that.$http.Post("stock_systemSetting",params ).then(res => {
					if(res.code == 1){
						uni.showToast({
							icon:"none",
							title:"保存成功"
						})
						
						that.getSetting()
					}
				})
			},

			//订阅微信通知
			orderThisInfo() {
				wx.requestSubscribeMessage({
					tmplIds: ['G2UJEDEyAtGuBdO-Yv96yBi-UnTLhaInr-KzEXqZ-48', 'BKT2_0OuWF3mLZGvFmpRzWFa_Dyr4EIppl_LFF1uRLE'],
					success(res) {
						console.log(res)
						uni.showToast({
							title: "订阅成功",
						})
					}
				})
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

<style lang="scss">
	.listItem {
		padding: 10rpx 30rpx;
		border-bottom: 1rpx solid#ddd;
	}

	.listTitle {
		padding: 8rpx 0;
		border-bottom: 1rpx solid#ddd;
		font-weight: bold;
	}

	.bottomButton {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 0rpx 0;
		background: $main-color;
		color: #fff;
		text-align: center;
	}
</style>
