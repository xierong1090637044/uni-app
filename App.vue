<script>
	import config from 'utils/config.js'
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
</style>
