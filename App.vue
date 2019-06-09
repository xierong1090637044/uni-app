<script>
	import config from 'utils/config.js'	export default {		onLaunch: function() {
			uni.setStorageSync('uid', '2103246ee0');//缓存测试			console.log('App Launch')		},		onShow: function() {			console.log('App Show')		},		onHide: function() {			console.log('App Hide')		}	}</script><style>	/*每个页面公共css */</style>