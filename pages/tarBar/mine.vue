<template>
	<view>
		<view class="header">
			<view class="bg">
				<view class="box">
					<view class="box-hd" style="position: relative;">
						<view class="avator">
							<img :src="user.avatarUrl">
						</view>
						<fa-icon type="vimeo" size="18" color="#ffcd00" v-if="user.is_vip" class="vip_logo"></fa-icon>
						<view class="phone-number">
							<fa-icon type="mobile" size="18" color="#130c0e"></fa-icon>
							<text style="margin-left: 10rpx;">{{user.mobilePhoneNumber}}</text>
						</view>
					</view>
					<view class="box-bd">
						<navigator class="item" hover-class="none" url="/pages/mine/logs/logs">
							<view class="icon">
								<image src="/static/logs.png"></image>
							</view>
							<view class="text">操作记录</view>
						</navigator>
						<navigator class="item" hover-class="none" url="/pages/mine/warning_log/warning_log">
							<view class="icon">
								<image src="/static/warning.png"></image>
							</view>
							<view class="text">预警记录</view>
						</navigator>
						<navigator class="item" hover-class="none" url="/pages/mine/home_page/home_page">
							<view class="icon">
								<image src="/static/account.png"></image>
							</view>
							<view class="text">账号信息</view>
						</navigator>
					</view>
				</view>
			</view>
		</view>
		<view class="list-content">
			<view class="list">
				<!--<navigator class="li " hover-class="none" url="/pages/mine/vip/vip">
					<fa-icon type="vimeo" size="18" color="#3d3d3d3"></fa-icon>
					<view class="text">会员中心</view>
					<fa-icon type="angle-right" size="18" color="#999"></fa-icon>
				</navigator>-->
				<navigator class="li " hover-class="none" url="/pages/mine/uploadFile/uploadFile">
					<fa-icon type="cloud-upload" size="18" color="#3d3d3d3"></fa-icon>
					<view class="text">批量上传导出</view>
					<fa-icon type="angle-right" size="18" color="#999"></fa-icon>
				</navigator>
				<navigator class="li noborder" hover-class="none" url="/pages/mine/setting/setting">
					<fa-icon type="cog" size="18" color="#3d3d3d3"></fa-icon>
					<view class="text">我的设置</view>
					<view class="display_flex" style="font-size: 24rpx;color: #999;width: 300rpx;justify-content: flex-end">
						<text style="margin-right: 10rpx;">(电脑版网址)</text>
						<fa-icon type="angle-right" size="18" color="#999"></fa-icon>
					</view>
					
				</navigator>
			</view>
			<view class="list">

				<navigator class="li " hover-class="none" url="/pages/mine/update_history/update_history">
					<fa-icon type="yelp" size="18" color="#3d3d3d3"></fa-icon>
					<view class="text">历史更新</view>
					<fa-icon type="angle-right" size="18" color="#999"></fa-icon>
				</navigator>
				<navigator class="li " hover-class="none" url="/pages/mine/about_us/about_us">
					<fa-icon type="gg-circle" size="18" color="#3d3d3d3"></fa-icon>
					<view class="text">关于我们</view>
					<fa-icon type="angle-right" size="18" color="#999"></fa-icon>
				</navigator>
				<view class="li ">
					<fa-icon type="envira" size="18" color="#3d3d3d3"></fa-icon>
					<button class="text" plain="true" open-type="feedback">意见反馈</button>
					<fa-icon type="angle-right" size="18" color="#999"></fa-icon>
				</view>
			</view>
			<view class="list">
				<navigator class="li noborder" hover-class="none" url="/pages/landing/landing">
					<fa-icon type="sign-out" size="18" color="#3d3d3d3"></fa-icon>
					<view class="text">退出登录</view>
					<fa-icon type="angle-right" size="18" color="#999"></fa-icon>
				</navigator>
			</view>
		</view>
	</view>
</template>
<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	let that;
	export default {
		components: {
			faIcon
		},
		data() {
			return {
				user: null,
			};
		},
		onLoad() {
			that = this;
		},
		onShow() {
			that.user = uni.getStorageSync("user");
		},
		methods: {
			willCome(){
				uni.showToast({
					title:"敬请期待",
					icon:"none"
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f1f1f1;
		font-size: 30rpx;
	}
	
	.vip_logo{
		position: absolute;
		bottom: 66%;
		right: 40%;
	}
	.header {
		background: #fff;
		height: 290rpx;
		padding-bottom: 110rpx;

		.bg {
			width: 100%;
			height: 200rpx;
			padding-top: 100rpx;
			background-color: #426ab3;
		}
	}

	.box {
		width: 650rpx;
		height: 280rpx;
		border-radius: 20rpx;
		margin: 0 auto;
		background: #fff;
		box-shadow: 0 5rpx 20rpx 0rpx rgba(0, 0, 150, .2);

		.box-hd {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: center;

			.avator {
				width: 120rpx;
				height: 120rpx;
				background: #fff;
				border: 5rpx solid #fff;
				border-radius: 50%;
				margin-top: -80rpx;
				overflow: hidden;
				position: relative;
				img {
					width: 100%;
					height: 100%;
				}
			}

			.phone-number {
				width: 100%;
				text-align: center;
				margin: 30rpx 0;
			}
		}

		.box-bd {
			display: flex;
			flex-wrap: nowrap;
			flex-direction: row;
			justify-content: center;

			.item {
				flex: 1 1 auto;
				display: flex;
				flex-wrap: wrap;
				flex-direction: row;
				justify-content: center;
				border-right: 1px solid #f1f1f1;
				margin: 15rpx 0;

				&:last-child {
					border: none;
				}

				.icon {
					width: 50rpx;
					height: 50rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.text {
					width: 100%;
					text-align: center;
					margin-top: 10rpx;
					color: #426ab3;
					font-weight: bold;
					font-size: 24rpx;
				}
			}
		}
	}

	.list-content {
		background: #fff;
	}

	.list {
		width: 100%;
		border-bottom: 15rpx solid #f1f1f1;
		background: #fff;

		&:last-child {
			border: none;
		}

		.li {
			width: 92%;
			height: 80rpx;
			padding: 0 4%;
			border-bottom: 1px solid rgb(243, 243, 243);
			display: flex;
			align-items: center;

			&.noborder {
				border-bottom: 0
			}

			.icon {
				flex-shrink: 0;
				width: 50rpx;
				height: 50rpx;

				image {
					width: 50rpx;
					height: 50rpx;
				}
			}

			.text {
				padding-left: 20rpx;
				width: 100%;
				color: #3d3d3d;
				font-weight: bold;
				font-size: 26rpx;
				border: unset;
				text-align: left;
			}

			.to {
				flex-shrink: 0;
				width: 40rpx;
				height: 40rpx;
			}
		}
	}
</style>
