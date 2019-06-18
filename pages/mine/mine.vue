<template>
	<view>
		<view class="header">
			<view class="bg">
				<view class="box">
					<view class="box-hd">
						<view class="avator">
							<img :src="user.avatarUrl">
						</view>
						<view class="phone-number">
							<fa-icon type="mobile" size="18" color="#130c0e"></fa-icon>
							<text style="margin-left: 10rpx;">{{user.mobilePhoneNumber}}</text>
						</view>
					</view>
					<view class="box-bd">
						<view class="item">

							<view class="text">我的通知</view>
						</view>
						<view class="item">

							<view class="text">我的收藏</view>
						</view>
						<view class="item">

							<view class="text">我的客服</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="list-content">
			<view class="list">
				<view class="li noborder">
					<fa-icon type="cog" size="18" color="#3d3d3d3"></fa-icon>
					<view class="text">我的设置</view>
					<fa-icon type="angle-right" size="18" color="#999"></fa-icon>
				</view>
			</view>
			<view class="list">
				<view class="li ">
					<fa-icon type="cog" size="18" color="#3d3d3d3"></fa-icon>
					<view class="text">主题切换</view>
					<fa-icon type="angle-right" size="18" color="#999"></fa-icon>
				</view>
				<view class="li ">
					<fa-icon type="cog" size="18" color="#3d3d3d3"></fa-icon>
					<view class="text">帮助中心</view>
					<fa-icon type="angle-right" size="18" color="#999"></fa-icon>
				</view>
				<view class="li ">
					<fa-icon type="cog" size="18" color="#3d3d3d3"></fa-icon>
					<view class="text">关于我们</view>
					<fa-icon type="angle-right" size="18" color="#999"></fa-icon>
				</view>
				<view class="li ">
					<fa-icon type="cog" size="18" color="#3d3d3d3"></fa-icon>
					<view class="text">意见反馈</view>
					<fa-icon type="angle-right" size="18" color="#999"></fa-icon>
				</view>
			</view>
			<view class="list">
				<view class="li noborder">
					<fa-icon type="sign-out" size="18" color="#3d3d3d3"></fa-icon>
					<view class="text">退出登录</view>
					<fa-icon type="angle-right" size="18" color="#999"></fa-icon>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	export default {
		components: {
			faIcon
		},
		data() {
			return {
				user: uni.getStorageSync("user")
			};
		},
		onLoad() {
			console.log(this.user)
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f1f1f1;
		font-size: 30rpx;
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
					width: 60rpx;
					height: 60rpx;

					img {
						width: 100%;
						height: 100%;
					}
				}

				.text {
					width: 100%;
					text-align: center;
					margin-top: 10rpx;
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
			}

			.to {
				flex-shrink: 0;
				width: 40rpx;
				height: 40rpx;
			}
		}
	}
</style>
