<template>
	<view>
		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				
			}
		},
		
		onLoad() {
			let headers = {};
			let url = location.href.split('#')[0] //获取锚点之前的链接
			headers['content-type'] = 'application/json';
			uni.request({
				url: 'https://www.jimuzhou.com/api/getUser.php', //此处使用了全局变量拼接url（main.js文件中），关于全局变量官方问答里有
				method: 'POST', //get或post
				header: headers,
				success: res => {
					console.log(res);
				},
			});
		},
		
		methods: {
		}
	}
</script>

<style>

</style>
