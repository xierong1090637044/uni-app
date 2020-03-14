<template>
	<view>
		<view class="list-content">
			<view class="list">
				<view class="li " @click="copyAllFile">
					<fa-icon type="cloud-upload" size="18" color="#3d3d3d3"></fa-icon>
					<view class="text">产品数据备份</view>
					<fa-icon type="angle-right" size="18" color="#999"></fa-icon>
				</view>
				<view class="li " @click="accountDelete">
					<fa-icon type="telegram" size="18" color="#3d3d3d3"></fa-icon>
					<view class="text">账号注销</view>
					<fa-icon type="angle-right" size="18" color="#999"></fa-icon>
				</view>
				<view class="li ">
					<fa-icon type="info-circle" size="18" color="#3d3d3d3"></fa-icon>
					<view class="text">更多功能正在开发中....</view>
					<fa-icon type="angle-right" size="18" color="#999"></fa-icon>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import Bmob from "hydrogen-js-sdk";
	let that;
	export default {
		components: {},
		data() {
			return {
				user: null,
			};
		},
		onLoad() {
			uni.setNavigationBarTitle({"title":"系统设置"})
			that = this;
		},
		onShow() {
			that.user = uni.getStorageSync("user");
		},
		methods: {
			accountDelete() {
				uni.showModal({
					title: '提示',
					content: '是否确认注销当前账户',
					success: function(res) {
						if (res.confirm) {
							let params = {
								funcName: 'accountDelete',
								data: {
									uid: that.user.objectId,
								}
							}
							Bmob.functions(params.funcName, params.data).then(function(res) {
								uni.showToast({
									icon: "none",
									title: res.msg
								})
							})
						}
					}
				});
			},
			
			copyAllFile(){
				uni.showModal({
					title: '提示',
					content: '是否备份当前账户的产品数据',
					success: function(res) {
						if (res.confirm) {
							let params = {
								funcName: 'copayAllFile',
								data: {
									uid: that.user.objectId,
								}
							}
							Bmob.functions(params.funcName, params.data).then(function(res) {
								uni.showToast({
									icon: "none",
									title: res.msg
								})
							})
						}
					}
				});
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f1f1f1;
		font-size: 30rpx;
	}

	.vip_logo {
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
