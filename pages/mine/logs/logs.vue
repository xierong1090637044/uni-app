<template>
	<view>
		<loading v-if="loading"></loading>

		<view v-else>
			<view class="uni-common-mt">
				<uni-segmented-control :current="current" :values="items" style-type="button" active-color="#426ab3" @clickItem="onClickItem" />
			</view>

			<scroll-view class="content" scroll-y="true" @scrolltolower="load_more">
				<view v-for="(item,index) in logsList" :key="index" class="list_item">
					<view class="display_flex">
						<fa-icon type="info-circle" size="20" color="#426ab3"></fa-icon>
						<view class="information">{{item.log}}</view>
					</view>
					
					<view class="option_time">记录于{{item.createdAt}}</view>
				</view>
				
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import loading from "@/components/Loading/index.vue"
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import Bmob from '@/utils/bmob.js';
	import common from '@/utils/common.js';
	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';

	let that;
	let day;
	let uid;
	let page_size = 50;
	export default {
		components: {
			loading,
			faIcon,
			uniSegmentedControl
		},
		data() {
			return {
				logsList: "",
				loading: true,
				items: ['今天', '最近七天', '最近一个月'],
				current: 0
			}
		},
		onLoad() {
			day = 1;
			that = this;
			uid = uni.getStorageSync("uid");
			that.get_logsList(0);
		},
		methods: {
			//滚动到底部加载更多
			load_more() {
				page_size += 50;
				that.get_logsList(day,true);
			},
			//tab点击
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index

					if (index == 0) {
						day = 0;
						that.get_logsList(0)
						console.log(common.getDay(1, true))
					} else if (index == 1) {
						day = -7;
						that.get_logsList(-7)
						console.log(common.getDay(-7, true))
					} else {
						day = -30;
						that.get_logsList(-30)
						
						console.log(common.getDay(-30, true))
					}
				}
			},

			//得到日志列表
			get_logsList(day) {
				const query = Bmob.Query("logs");
				query.equalTo("parent", "==", uid);
				query.equalTo("type", "!=", -2);
				query.equalTo("createdAt", ">=", common.getDay(day, true));
				query.order("-createdAt")
				query.limit(page_size);
				query.find().then(res => {
					//console.log(res)
					that.logsList = res
					that.loading = false;
				});
			},

		}
	}
</script>

<style lang="scss">
	.uni-common-mt {
		padding: 20rpx 0;
	}

	.content {
		height: calc(100vh - 124rpx);
		background: #fff;
		padding: 0 30rpx;
		width: calc(100% - 60rpx);

		.list_item {
			padding: 20rpx;
			border-bottom: 1rpx solid#ccc;
		}

		.information {
			margin-left: 20rpx;
			color: #3d3d3d;
		}
		.option_time{
			font-size: 24rpx;
			color: #999;
			text-align: right;
			margin-top: 10rpx;
		}
	}
</style>
