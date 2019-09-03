<script>
	export default {
		onLaunch: function() {

			//console.log('App Launch')
			uni.getStorage({
				key: 'user',
				success: function(res) {
					//console.log(res.data);
					/*uni.setStorageSync('uid', res.data.objectId); //缓存测试
					const query = Bmob.Query("setting");
					query.equalTo("parent", "==", res.data.objectId);
					query.find().then(res => {
						//console.log(res)
						uni.setStorageSync("setting", res[0])
					});
					/*uni.switchTab({
						url:'/pages/index/index'
					})*/
				},
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
	@import "colorui/main.css";
	@import "colorui/icon.css";

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
		padding: 10rpx;
	}

	.kaidan_rightinput {
		margin-left: 10rpx;
	}

	.good_option_view {
		padding: 16rpx 10rpx;
		border-bottom: 1rpx solid#CCCCCC;
	}

	.good_option {
		width: 25%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-right: 1rpx solid#ccc;
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
		background: rgba(0, 0, 0, 0.2);
	}

	.showOptions {
		position: fixed;
		top: 0;
		left: 0;
		background: #fff;
		width: 100%;
		padding: 20rpx 0rpx;
		background: #fffef9;
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
			border-bottom: 1rpx solid#ccc;
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
