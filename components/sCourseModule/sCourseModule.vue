<template>
	<view>
		<view class="modelItem">
			<view class="title">操作教程</view>
			<view class='o_list'>
				<view v-for='(value,index) in fristEle' :key="index" class='o_item display_flex' @click="gotoDet(value)">
					<fa-icon :type="value.icon" size="20" color="#426ab3" style="margin-right: 10rpx;"></fa-icon>
					<view class='o_text'>{{value.desc}}</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	let that;
	import Bmob from "hydrogen-js-sdk";
	export default {
		data() {
			return {
				fristEle: [],

				nowFristEle: [],
				nowSecondEle: [],
				nowThridEle: [],
				user: uni.getStorageSync("user"),
				identity: uni.getStorageSync("identity"),
			};
		},

		mounted() {
			that = this;
			const query = Bmob.Query("_Article");
			query.equalTo("type", "==", "new");
			query.order("order")
			query.find().then(res => {
				that.fristEle = res
			});
		},

		methods: {
			gotoDet(item){
				uni.setStorageSync("webviewUrl",item.url)
				uni.navigateTo({
					url:"/pages/webview/webview"
				})
			}
		}
	}
</script>

<style>
	.title {
		color: #333;
		font-weight: bold;
		font-size: 28rpx;
	}

	.modelItem {
		padding: 20rpx 30rpx;
		width: calc(100% - 60rpx);
		margin-bottom: 30rpx;
		border-radius: 40rpx;
		background: #F7F7F7;
	}

	.o_list {
		background: #F7F7F7;
	}

	.o_headerItem {
		background: #F7F7F7;
	}

	.o_item {
		width: 100%;
		font-weight: bold;
		padding: 20rpx 0;
		border-bottom: 1rpx solid#ddd;
		margin-bottom: unset;
	}

	.o_text {
		margin-top: unset;
	}
</style>
