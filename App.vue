<script>
	import config from 'utils/config.js'	export default {		onLaunch: function() {
						//console.log('App Launch')
			uni.getStorage({
			  key: 'user',
				 success: function (res) {
				  console.log(res.data);
				  uni.setStorageSync('uid', res.data.objectId);//缓存测试
				  uni.switchTab({
				  	url:'/pages/index/index'
				  })
				},
				fail:function(){
					uni.reLaunch({
						url:'/pages/landing/landing'
					})
				},
			});		},		onShow: function() {			//console.log('App Show')		},		onHide: function() {			//console.log('App Hide')		}	}</script><style>	/*每个页面公共css */</style>