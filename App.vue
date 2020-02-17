<script>
	import Bmob from "hydrogen-js-sdk";
	import mine from '@/utils/mine.js';

	export default {
		onLaunch: function() {

			// #ifdef MP-WEIXIN
			Bmob.User.auth().then(res => {}).catch(err => {
				console.log(err)
			});

			//检测线上小程序更新
			const updateManager = wx.getUpdateManager()
			updateManager.onCheckForUpdate(function(res) {
				// 请求完新版本信息的回调
				console.log(res.hasUpdate)
			})
			updateManager.onUpdateReady(function() {
				wx.showModal({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					confirmColor: "#FE104C",
					success: function(res) {
						if (res.confirm) {
							// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate()
						}
					}
				})
			})
			// #endif

			//console.log('App Launch')
			uni.getStorage({
				key: 'user',
				success: function(res) {},
				fail: function() {
					uni.reLaunch({
						url: '/pages/landing/landing'
					})
				},
			});
		},
		onShow: function() {
			//console.log('App Show')
		},
		onHide: function() {
			//console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import 'uni.css';
	@import "iconfont.css";
	/* #ifdef MP-WEIXIN */
	@import "colorui/main.css";
	@import "colorui/icon.css";
	/* #endif */
	
	.confrim_button{
		height: 100rpx;
		line-height: 100rpx;
		padding: 0 80rpx !important;
	}
	
	.pro_list{
		color: #333 !important;
	}
	.kaidan_detail{
		color: #333 !important;
	}
	
	.o_headerItem {
		width: 80rpx;
		height: 80rpx;
		line-height: 80rpx;
		border-radius: 50%;
		background: #2ca879;
		line-height: 80rpx;
		margin: 0 auto;
		text-align: center;
	}

	.text_overflow {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.text_overflow_2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.user_avatar {
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		margin-right: 20rpx;
	}

	.kaidan_detail {
		background: #fff;
		padding: 0 20rpx;
	}

	.kaidan_rightinput {
		margin-left: 10rpx;
	}

	.good_option_view {
		padding: 10rpx 10rpx;
		border-bottom: 1rpx solid#CCCCCC;
		font-size: 24rpx;
	}

	.good_option {
		width: 25%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #333;
	}
	.good_optionText{
		margin-right: 10rpx;
		max-width: 80%;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}

	.option_selected {
		color: #1d953f;
		font-weight: bold;
	}


	.modal_background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 100;
		background: transparent;
	}

	.showOptions {
		position: fixed;
		top: 140rpx;
		left: 0;
		background: #fff;
		width: 100%;
		padding: 0rpx 0rpx 20rpx;
		box-shadow: 0 10rpx 10rpx rgba(0, 122, 255, 0.2);
		z-index: 100000;

		.input_item1 {
			display: flex;
			align-items: center;
			justify-content: space-between;
			line-height: 80rpx;
			padding: 0 30rpx;
		}

		.left_item {
			width: 150rpx;
		}

		.right_input {
			margin-left: 20rpx;
			width: 100%;
		}

		.option_bottom {
			width: 100%;
			display: flex;
			padding: 20rpx 0 0;
			margin-top: 30rpx;
			border-top: 1rpx solid#ccc;

			.selection {
				width: 50%;
				text-align: center
			}

			.selection1 {
				width: 50%;
				text-align: center;
				border-left: 1rpx solid#ccc;
				color: #426ab3;
			}
		}
	}
</style>
