<script>
	import Bmob from '@/utils/bmob.js';
	
	export default {
		onLaunch: function() {

			//console.log('App Launch')
			uni.getStorage({
				key: 'user',
				success: function(res) {
					//console.log(res.data);
					uni.setStorageSync('uid', res.data.objectId); //缓存测试
					const query = Bmob.Query("setting");
					query.equalTo("parent", "==", res.data.objectId);
					query.find().then(res => {
						//console.log(res)
						uni.setStorageSync("setting",res[0])
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

<style>
	/*每个页面公共css */
	@import 'uni.css';
	
	.kaidan_detail{
		background: #fff;
		padding:10rpx;
	}
	.kaidan_rightinput{
		margin-left: 10rpx;
	}
	
	.good_option_view{
		padding:16rpx 10rpx;
		border-bottom: 1rpx solid#CCCCCC;
	}
	.good_option{
		width: 25%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-right: 1rpx solid#ccc;
	}
	.option_selected{
		color: #1d953f;
		font-weight: bold;
	}
</style>
