<template>
	<view class="no_content">
		<view v-if="type == 1">
			<image src="/static/no_content/one.png"></image>
			<view>{{text}}</view>
		</view>
		<view v-if="type == 2">
			<image src="/static/no_content/two.png"></image>
			<view>{{text}}</view>
		</view>
		<view v-if="type == 3">
			<image src="/static/no_content/three.png"></image>
			<view>{{text}}</view>
		</view>
		<view v-if="type == 4">
			<image src="/static/no_content/four.png"></image>
			<view>{{text}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'no_content',
		props: ['type','text']
	}
</script>

<style>
	.no_content{
		height: 100vh;
		text-align: center;
	}
</style>
