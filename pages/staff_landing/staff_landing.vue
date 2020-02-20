<template>
	<view>
		<view>
			<!--第一部分-->
			<view style='display:flex;justify-content: space-between;padding:30rpx;'>
				<view style='font-size:18px;'></view>
				<view style='font-size:12px;'></view>
			</view>

			<view class='header_text'>
				<view>登陆库存表</view>
				<view class='iconImage'>
					<image src='/static/chuan.png' style='width:100%;height:100%'></image>
				</view>
			</view>

			<view style='padding:30rpx 60rpx;margin:5% 0'>
				<form bindsubmit="formSubmit">
					<view class='input_view'><input placeholder='请输入账号' class='input_element' maxlength='11' v-model="phone" type="text"></input></view>
					<view class='input_view_flex'>
						<view style='width:100%'><input placeholder='请输入密码' class='input_element' name="password" v-model="password" type="text"></input></view>
					</view>

					<view><button class='login_button' plain="true" hover-class="bg_button" @click="staff_login">登陆</button></view>
				</form>
			</view>


		</view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	let that;

	export default {
		data() {
			return {
				phone: "",
				password: ""
			}
		},
		onLoad() {
			that = this;
		},
		methods: {
			staff_login() {
				console.log(that.phone)
				console.log(that.password)

				if (that.phone.length < 1 || that.password.length < 1) {
					uni.showToast({
						title: '请填写完整',
						icon: "none"
					})
				} else {
					uni.showLoading({
						title: "登录中..."
					})

					Bmob.User.login(that.phone, that.password).then(res => {
						console.log(res)
						if ((res.masterId && res.masterId.objectId) || res.identity == 2) {
							let now_staff = res
							let master = res.masterId
							uni.hideLoading();
							if (master.is_vip) {
								now_staff.is_vip = true
								now_staff.vip_time = master.vip_time
							} else {
								now_staff.is_vip = false
								now_staff.vip_time = 0
							}

							uni.setStorageSync("user", now_staff)
							uni.setStorageSync("identity", 2) //1是老板，2是员工
							uni.setStorageSync("masterId", res.objectId)
							uni.setStorageSync("uid", master.objectId)
						} else {
							uni.setStorageSync("user", res)
							uni.setStorageSync("masterId", res.objectId)
							uni.setStorageSync("identity", 1); //1是老板，2是员工
							uni.setStorageSync("uid", res.objectId)
						}
						uni.switchTab({
							url: "/pages/tarBar/index"
						});

					}).catch(err => {
						console.log(err)
						if (err.code == 101) {
							uni.showToast({
								title: "账号密码不正确",
								icon: 'none'
							})
						}
					});
				}
			}
		},
	}
</script>

<style>
	page {
		background: #fff;
		text-align: center;
	}

	input:focus {
		border-bottom: 1px solid#426ab3 !important;
	}

	.header_text {
		color: #4d4d4d;
		font-weight: bold;
		font-size: 20px;
		margin-top: 5%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.iconImage {
		width: 40rpx;
		height: 40rpx;
		margin-left: 10rpx;
		margin-top: 10rpx;
	}

	.input_view {
		padding: 40rpx 0 0;
	}

	.input_view_flex {
		padding: 40rpx 0 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.input_element {
		text-align: left;
		border-bottom: 1px solid#ddd;
		padding: 0 10rpx;
		height: 80rpx;
		line-height: 80rpx;
	}

	.login_button {
		width: 90%;
		margin: 0 auto;
		border-radius: 40rpx;
		background: #f1f1f1 !important;
		border: unset !important;
		color: #999;
		font-weight: bold;
		margin-top: 15%;
		box-shadow: 0 20rpx 20rpx rgba(0, 0, 0, .1)
	}

	.staff_login_button {
		width: 90%;
		margin: 0 auto;
		border-radius: 40rpx;
		background: #b34257 !important;
		border: unset !important;
		color: #fff !important;
		font-weight: bold;
		margin-top: 10%;
		box-shadow: 0 20rpx 20rpx rgba(0, 0, 0, .1)
	}

	.confirm_btton {
		width: 90%;
		margin: 0 auto;
		border-radius: 40rpx;
		background: #42b35f !important;
		border: unset !important;
		color: #fff;
		font-weight: bold;
		margin-top: 10%;
		box-shadow: 0 20rpx 20rpx rgba(0, 0, 0, .1)
	}

	.bg_button {
		background: #426ab3 !important;
		color: #fff !important;
	}

	.avatar {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		border: 1px solid#fff;
	}

	.display_flex {
		display: flex;
		align-items: center;
	}

	.get_smscode {
		font-size: 12px;
		border-radius: 40rpx;
		color: #999;
		font-weight: bold;
		background: #f1f1f1 !important;
		border: unset !important;
	}
</style>
