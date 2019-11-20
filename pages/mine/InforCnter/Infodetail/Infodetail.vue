<template>
	<view class="uni-padding-wrap">
		<uParse :content="article" @preview="preview" @navigate="navigate" />
	</view>
</template>

<script>
//本示例引用组件uParse forked from ：mpvue-wxparse

	import uParse from '../../../../components/uParse/src/wxParse.vue'

	export default {
		components: {
			uParse
		},
		data() {
			return {
				article: uni.getStorageSync("operationDet")
			}
		},
		methods: {
			preview(src, e) {
				// do something
				console.log("src: " + src);
			},
			navigate(href, e) {
				// 如允许点击超链接跳转，则应该打开一个新页面，并传入href，由新页面内嵌webview组件负责显示该链接内容
				console.log("href: " + href);
				uni.showModal({
					content : "点击链接为：" + href,
					showCancel:false
				})
			}
		}

	}
</script>

<style>
	@import url("../../../../components/uParse/src/wxParse.css");
	
	page{
		background: #fff;
	}
</style>
