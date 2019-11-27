<template>
	<view>
		<!--第一部分-->
		<view style='display:flex;justify-content: space-between;padding:15px;'>
			<view style='font-size:18px;'></view>
			<view style='font-size:12px;'></view>
		</view>

		<view class='header_text'>
			<view>登陆</view>
			<view class='iconImage'>
				<image src='/static/chuan.png' style='width:100%;height:100%'></image>
			</view>
		</view>

		<view style='padding:15px 30px;margin:5% 0'>
			<form @submit="formSubmit">
				<view class='input_view'><input placeholder='请输入账号' class='input_element' name="nickname"></input></view>
				<view class='input_view'>
					<view class='input_view'><input placeholder='请输入密码' class='input_element' name="password"></input></view>
				</view>

				<view><button class='login_button' plain="true" form-type="submit" hover-class="bg_button">登陆</button></view>
			</form>
		</view>

		<view style="color: #0081FF;font-size: 20rpx;padding: 0 40rpx;position: fixed;bottom: 20rpx;">
			<fa-icon type="info-circle" size="10" color="#0081FF" style="margin-right: 10rpx;"></fa-icon>
			登陆说明：登陆之后，您可以使用关于一些进销存的功能（包含进库、出库、入库...）
		</view>

	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";

	let that;
	let phone_number = "";
	export default {
		data() {
			return {
				code_text: "验证码",
				code_button_state: false
			}
		},
		onLoad() {
			that = this;
		},
		methods: {

			//登陆提交
			formSubmit(e) {
				console.log(e)
				let nickname = e.detail.value.nickname;
				let password = e.detail.value.password;

				if (nickname == "") {
					uni.showToast({
						title: '请填写账号',
						icon: "none"
					})
				} else if (password  == "") {
					uni.showToast({
						title: '请填写密码',
						icon: "none"
					})
				} else {
					Bmob.User.login(nickname, password).then(res => {
						console.log(res.identity)
						if(res.identity == 1){
							uni.setStorageSync("user", res)
							uni.setStorageSync("masterId", res.objectId)
							uni.setStorageSync("identity", 1); //1是老板，2是员工
							uni.setStorageSync("uid", res.objectId)
						}else if(res.identity == 2){
							uni.setStorageSync("user", res)
							uni.setStorageSync("identity", 2) //1是老板，2是员工
							uni.setStorageSync("masterId", res.objectId)
							uni.setStorageSync("uid", res.masterId.objectId)
						}
						
						uni.switchTab({
							url: "/pages/tarBar/index"
						});
					}).catch(err => {
						uni.showToast({
							title: '验证码或手机号错误',
							icon: "none"
						})
					});
				}

			},

		}
	}
</script>

<style>
	.footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 28upx;
		margin-top: 180upx;
		color: rgba(0, 0, 0, 0.7);
		text-align: center;
		height: 40upx;
		line-height: 40upx;
	}

	page {
		background: #fff;
		text-align: center;
		font-size: 28rpx;
		color: #3D3D3D;
	}

	input:focus {
		border-bottom: 1px solid#426ab3 !important;
	}

	.header_text {
		color: #4d4d4d;
		font-weight: bold;
		font-size: 40rpx;
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
		border-bottom: .5rpx solid#ddd;
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

	.display_flex {
		display: flex;
		align-items: center;
	}

	.get_smscode {
		font-size: 24rpx;
		border-radius: 40rpx;
		color: #999;
		font-weight: bold;
		background: #f1f1f1 !important;
		border: unset !important;
	}
</style>
