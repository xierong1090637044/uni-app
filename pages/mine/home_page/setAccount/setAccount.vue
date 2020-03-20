<template>
	<view class="register">

		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				<image src='/static/chuan.png'></image>
			</view>
			<!-- 主体 -->
			<view class="main">
				<wInput v-model="phoneData" type="text" maxlength="11" placeholder="设置登陆账号"></wInput>
				<wInput v-model="passData" type="password" maxlength="11" placeholder="设置登录密码" isShowPass></wInput>
			</view>

			<wButton text="确认" :rotate="isRotate" @click.native="startReg()"></wButton>

		</view>
	</view>
</template>

<script>
	let that;
	import Bmob from "hydrogen-js-sdk";
	import wInput from '../../../../components/watch-login/watch-input.vue' //input
	import wButton from '../../../../components/watch-login/watch-button.vue' //button

	export default {
		data() {
			return {
				//logo图片 base64
				phoneData: '', // 用户/电话
				passData: '', //密码
				isRotate: false, //是否加载旋转
				user: uni.getStorageSync("user")
			}
		},
		components: {
			wInput,
			wButton,
		},
		mounted() {
			that = this;
			
			that.phoneData = that.user.username
			that.passData = that.user.pwd?that.user.pwd:''
		},
		methods: {
			startReg() {
				//注册
				if (that.isRotate) {
					//判断是否加载中，避免重复点击请求
					return false;
				}
				if (that.phoneData.length < 8) {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '账号不能少于8位'
					});
					return false;
				}
				
				if (that.passData.length < 6) {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '密码不能少于6位'
					});
					return false;
				}
				
				if(that.user.objectId == "aXcyRBaf"){
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '体验账号不能修改'
					});
					return false;
				}
				that.isRotate = true

				const query = Bmob.Query('_User');
				query.set('username', that.phoneData)
				query.set('password', that.passData)
				query.set('pwd', that.passData)
				query.set('id', that.user.objectId) //需要修改的objectId
				query.save().then(res => {
					that.user.pwd = that.passData
					uni.showToast({
						title:"设置成功",
						icon:'none'
					})
					that.isRotate = false
				}).catch(err => {
					uni.showToast({
						title:"该账号已存在",
						icon:'none'
					})
					that.isRotate = false
					console.log(err)
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* margin-top: 128upx; */
	}

	uni-view {
		line-height: 100% !important;
	}

	/* 头部 logo */
	.header {
		width: 161upx;
		height: 161upx;
		box-shadow: 0upx 0upx 60upx 0upx rgba(0, 0, 0, 0.1);
		border-radius: 50%;
		margin-top: 128upx;
		margin-bottom: 72upx;
		margin-left: auto;
		margin-right: auto;
	}

	.header image {
		width: 161upx;
		height: 161upx;
		border-radius: 50%;
	}

	/* 主体 */
	.main {
		display: flex;
		flex-direction: column;
		padding-left: 70upx;
		padding-right: 70upx;
	}

	.tips {
		color: #999999;
		font-size: 28upx;
		margin-top: 64upx;
		margin-left: 48upx;
	}

	/* 其他登录方式 */
	.other_login {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-top: 256upx;
		text-align: center;
	}

	.login_icon {
		border: none;
		font-size: 64upx;
		margin: 0 64upx 0 64upx;
		color: rgba(0, 0, 0, 0.7)
	}

	.wechat_color {
		color: #83DC42;
	}

	.weibo_color {
		color: #F9221D;
	}

	.github_color {
		color: #24292E;
	}

	/* 底部 */
	.footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 28upx;
		margin-top: 64upx;
		color: rgba(0, 0, 0, 0.7);
		text-align: center;
		height: 40upx;
		line-height: 40upx;
	}

	.footer text {
		font-size: 24upx;
		margin-left: 15upx;
		margin-right: 15upx;
	}
</style>
