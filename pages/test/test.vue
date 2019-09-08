<template>
	<view>
		
	</view>
</template>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
	import wx from 'weixin-jsapi';
	
	export default {
		data() {
			return {
				
			}
		},
		
		onLoad() {
			let headers = {};
			headers['content-type'] = 'application/json; charset=UTF-8';
			uni.request({
				url: 'http://www.jimuzhou.com/api/sample.php',//此处使用了全局变量拼接url（main.js文件中），关于全局变量官方问答里有
				method: 'POST',//get或post
				header: headers,
				data: {},
				success: res => {
					console.log(wx);
					let wx_config = res.data;
					
					wx.$once({
					    debug: true,
					    appId: wx_config.appId,
					    timestamp:wx_config.timestamp,
					    nonceStr:wx_config.nonceStr,
					    signature:wx_config.signature,
					    jsApiList: [
					      // 所有要调用的 API 都要加到这个列表中
					    ]
					  });
					  wx.ready(function () {
					    // 在这里调用 API
					  });
				},
				fail: () => {
				},
				complete: () => {}
			});
		},
		
		methods: {
			
		}
	}
</script>

<style>

</style>
