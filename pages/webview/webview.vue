<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:''
			}
		},
		
		onLoad() {
			this.url = uni.getStorageSync("webviewUrl")
		},
		
		methods: {
			
		}
	}
</script>

<style>

</style>
