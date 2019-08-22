<template>
	<view>
		<view style="text-align:center" v-if="type == 1">
			<image :src="imgurl_1" style="width:400rpx;height:400rpx;margin-top:15%"></image>

			<view style="font-size:24rpx;color:#ddd;margin-top:1%">暂无信息</view>
		</view>

		<view style="text-align:center" v-if="type == 2">
			<image :src="imgurl_1" style="width:400rpx;height:400rpx;margin-top:15%"></image>

			<view style="font-size:24rpx;color:#ddd;margin-top:1%">暂无信息</view>
		</view>

		<view style="text-align:center" v-if="type == 3">
			<image :src="imgurl_3" style="width:400rpx;height:300rpx;margin-top:15%"></image>

			<view style="font-size:24rpx;color:#ddd;margin-top:1%">暂无卡券</view>
		</view>

		<view style="text-align:center" v-if="type == 4">
			<image :src="imgurl_4" style="width:400rpx;height:300rpx;margin-top:15%"></image>

			<view style="font-size:24rpx;color:#ddd;margin-top:1%">暂无搜索结果，换个词试试？</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'NoContent',
		props: {
			type: {
				type: Number,
				default: 1
			} // 标题
		},
		data: {
			return {
				imgurl_1: "https://bmob-cdn-23134.bmobcloud.com/2019/07/31/9700d09c4059d2a0804641a914dde991.png",
				imgurl_3: "https://bmob-cdn-23134.bmobcloud.com/2019/08/07/f7be03304055d15f80e8c7bc82291965.png",
				imgurl_4: "https://bmob-cdn-23134.bmobcloud.com/2019/08/14/41623f7540876398802fee7e2de4f286.png"
			};
		},
	}
</script>

<style>

</style>
