<template>
	<view>
		<view class='frist'>
			<view class='display_flex_bet item' @click="setheaderimg()">
				<view>头像</view>
				<view class='display_flex'>
					<image :src='userInfo.avatarUrl' class='avatar'></image>
					<fa-icon type="angle-right" size="18" color="#999" style="margin-left: 10rpx;"></fa-icon>
				</view>
			</view>

			<view class='display_flex_bet item1' @click="modal_show = true">
				<view>昵称</view>
				<view class='display_flex right_item'>
					<text>{{userInfo.nickName}}</text>
					<fa-icon type="angle-right" size="18" color="#999" style="margin-left: 10rpx;"></fa-icon>
				</view>
			</view>

			<picker :range="sexs" @change="chooseSex">
				<view class='display_flex_bet item1'>
					<view>性别</view>
					<view class='display_flex right_item'>
						<text v-if="userInfo.sex ==1">男</text>
						<text v-else>女</text>
						<fa-icon type="angle-right" size="18" color="#999" style="margin-left: 10rpx;"></fa-icon>
					</view>

				</view>
			</picker>
		</view>

		<view style='margin-top:20rpx' class='frist'>
			<view class='display_flex_bet item1'>
				<view>账号密码登录</view>
				<navigator class='display_flex right_item' hover-class="none" url="setAccount/setAccount">
					<text v-if="userInfo.pwd">已设置</text>
					<text v-else>未设置</text>
					<fa-icon type="angle-right" size="18" color="#999" style="margin-left: 10rpx;"></fa-icon>
				</navigator>
			</view>
			<view class='display_flex_bet item1'>
				<view>手机号</view>
				<view class='display_flex right_item'>
					<text>{{userInfo.mobilePhoneNumber}}</text>
					<fa-icon type="angle-right" size="18" color="#999" style="margin-left: 10rpx;"></fa-icon>
				</view>
			</view>
			<navigator class='display_flex_bet item1' hover-class="none" url="/pages/mine/vip/vip" v-if="vipShow">
				<view>是否已是会员</view>
				<view class='display_flex right_item' v-if="userInfo.is_vip">
					<text>是</text>
					<fa-icon type="angle-right" size="18" color="#999" style="margin-left: 10rpx;"></fa-icon>
				</view>
				<view class='display_flex right_item' v-else>
					<text style="color: #426ab3;">成为会员</text>
					<fa-icon type="angle-right" size="18" color="#999" style="margin-left: 10rpx;"></fa-icon>
				</view>
			</navigator>
			<view class='display_flex_bet item1' v-if="userInfo.is_vip">
				<view>会员截止日期</view>
				<view class='display_flex right_item'>
					<text>{{userInfo.vip_time}}</text>
				</view>
			</view>
		</view>

		<uni-popup :show="modal_show" position="middle" mode="fixed" @hidePopup="modal_show = false" :h5Top="true">
			<view style="width: 500rpx;">
				<view class="display_flex" style="border-bottom: 1rpx solid#ccc;">
					<input class="uni-input" :placeholder="userInfo.nickName" v-model="userInfo.nickName" />
				</view>
				<view class="modal_confrimbutton" @click="confrim_username">确定</view>
			</view>
		</uni-popup>

	</view>
</template>

<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import Bmob from "hydrogen-js-sdk";
	import mine from "@/utils/mine.js";
	import common from "@/utils/common.js";

	import uniPopup from '@/components/uni-popup/uni-popup.vue'

	let that;
	export default {
		components: {
			faIcon,
			uniPopup
		},
		data() {
			return {
				userInfo: '',
				modal_show: false,
				identity: uni.getStorageSync("identity"),
				sexs: ["男", "女"],
				vipShow:false,
			}
		},
		onLoad() {
			that = this
			const query = Bmob.Query('wc_setting');
			query.get('FtIO888D').then(res => {
			  //console.log(res)
				that.vipShow = res.isShow
			}).catch(err => {
			  console.log(err)
			})
		},

		onShow() {
			that.userInfo = uni.getStorageSync("user")
			that.userInfo.vip_time = common.js_date_time(that.userInfo.vip_time)
		},

		methods: {
			setheaderimg() {
				//console.log("sss")
				if (that.identity == 1) {
					uni.chooseImage({
						count: 1, //默认9
						sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album', 'camera'], //从相册选择
						success: function(res) {
							console.log(res);
							let file;
							file = Bmob.File(that.userInfo.nickName + ".png", res.tempFilePaths[0]);
							file.save().then(res => {
								console.log("图片地址", res)
								that.userInfo.avatarUrl = res[0].url;
								mine.update_user(that.userInfo).then(res => {
									if (res) {
										uni.setStorageSync("user", that.userInfo)
									}
								})
							})

						},
					});

				} else {
					uni.showToast({
						title: "员工暂不支持修改",
						icon: "none"
					})
				}

			},

			//确定用户的姓名
			confrim_username() {
				if (that.identity == 1) {
					mine.update_user(that.userInfo).then(res => {
						if (res) {
							uni.showToast({
								title: "修改成功",
								icon: 'none'
							})
							that.modal_show = false
							uni.setStorageSync("user", that.userInfo)
							that.userInfo = uni.getStorageSync("user")
						}
					})
				} else {
					uni.showToast({
						title: "员工暂不支持修改",
						icon: "none"
					})
				}
			},

			//选择性别
			chooseSex(e) {
				let sex = Number(e.detail.value) + 1
				that.userInfo.sex = sex
				if (that.identity == 1) {
					mine.update_user(that.userInfo).then(res => {
						if (res) {
							uni.showToast({
								title: "修改成功",
								icon: 'none'
							})
							uni.setStorageSync("user", that.userInfo)
							that.userInfo = uni.getStorageSync("user")
						}
					})
				} else {
					uni.showToast({
						title: "员工暂不支持修改",
						icon: "none"
					})
				}
			},

		}
	}
</script>

<style>
	.modal_confrimbutton {
		background: #426AB3;
		color: #fff;
		width: 60%;
		padding: 10rpx 0;
		text-align: center;
		margin-left: 20%;
		border-radius: 8rpx;
		margin-top: 30rpx;
	}

	.avatar {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}

	.thumb_background {
		width: 100rpx;
		height: 100rpx;
	}

	.frist {
		padding: 0 20rpx;
		background: #fff;
	}

	.item {
		padding: 8rpx 0;
		border-bottom: 1rpx solid#ddd;
	}

	.item1 {
		padding: 20rpx 0;
		border-bottom: 1rpx solid#ddd;
	}

	.icon_enter {
		margin-left: 20rpx;
	}

	.right_item {
		color: #999;
	}

	.grjj {
		padding: 20rpx 0rpx;
		border-bottom: 1rpx solid#ccc;
	}
</style>
