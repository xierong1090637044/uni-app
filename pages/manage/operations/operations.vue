<template>
	<view class="uni-tab-bar">
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x>
			<view v-for="(tab,index) in tabBars" :key="index" class="swiper-tab-list" :class="seleted_tab==tab.type ? 'active' : ''"
			 @click="tapTab(tab.type)">{{tab.name}}</view>
		</scroll-view>
		<scroll-view  class="content" scroll-y>
			<view v-for="(detail,index) in details" :key="index" class="detail_item">
				<view class="detail_name">产品:{{detail.goodsName}}</view>
				<view v-if="seleted_tab === 1" class="display_flex_bet">
					<view>
						<text>入库数量：</text>
						<text style="margin-left: 10rpx;color: #f30;font-weight: bold;">{{detail.num}}</text>
					</view>
					<view>
						<text>入库单价：</text>
						<text style="margin-left: 10rpx;color: #f30;font-weight: bold;">{{detail.retailPrice}}</text>
					</view>
				</view>
				
				<view v-if="seleted_tab === -1" class="display_flex_bet">
					<view>
						<text>出库数量：</text>
						<text style="margin-left: 10rpx;color: #f30;font-weight: bold;">{{detail.num}}</text>
					</view>
					<view>
						<text>出库单价：</text>
						<text style="margin-left: 10rpx;color: #f30;font-weight: bold;">{{detail.retailPrice}}</text>
					</view>
				</view>
				
				<view v-if="seleted_tab === 2" class="display_flex_bet">
					<view>
						<text>退货数量：</text>
						<text style="margin-left: 10rpx;color: #f30;font-weight: bold;">{{detail.num}}</text>
					</view>
					<view>
						<text>退货单价：</text>
						<text style="margin-left: 10rpx;color: #f30;font-weight: bold;">{{detail.retailPrice}}</text>
					</view>
				</view>
				
				<view v-if="seleted_tab === 3" class="display_flex_bet">
					<view>
						<text>盘点前库存：</text>
						<text style="margin-left: 10rpx;color: #f30;font-weight: bold;">{{detail.reserve}}</text>
					</view>
					<view>
						<text>盘点后库存：</text>
						<text style="margin-left: 10rpx;color: #f30;font-weight: bold;">{{detail.now_reserve}}</text>
					</view>
				</view>
				
				<view class="content_time">{{detail.createdAt}}</view>
			</view>
		</scroll-view >
	</view>
</template>
<script>
	import Bmob from "hydrogen-js-sdk";
	
	let that;
	let uid;
	let goodsId;

	export default {
		components: {

		},
		data() {
			return {
				seleted_tab: 1,
				details: null,
				tabBars: [{
					name: '入库',
					type: 1
				}, {
					name: '出库',
					type: -1
				}, {
					name: '盘点',
					type: 3
				}, {
					name: '退货',
					type: 2
				}, ]
			}
		},
		onLoad(options) {
			that = this;
			uid = wx.getStorageSync("uid");
			goodsId = options.objectId;
			that.getdetail();
		},
		methods: {
			tapTab: function(type) {
				that.seleted_tab = type
				that.getdetail()
			},

			getdetail() {
				uni.showLoading({
					title: "加载中..."
				})
				const query = Bmob.Query("Bills");
				query.equalTo("userId", "==", uid);
				query.equalTo("type", "==", that.seleted_tab);
				query.equalTo("goodsId", "==", goodsId);
				query.order("-createdAt")
				query.find().then(res => {
					console.log(res)
					that.details = res;
					uni.hideLoading();
				});
			}
		}
	}
</script>

<style>
	page {
		font-size: 28rpx;
		color: #3D3D3D;
		background: #FFFFFF;
	}
	.swiper-tab-list{
		height: 100%;
		line-height: 100rpx !important;
	}
	.content {
		width: 100%;
		padding: 10rpx 30rpx;
		width: calc(100% - 60rpx);
		height: calc(100vh - 122rpx);
	}
	.content_time{
		text-align: right;
		color: #999;;
	}
	.detail_item{
		border-bottom: 1rpx solid#ccc;
		margin-bottom: 10rpx;
		padding-bottom: 10rpx;
	}
	.detail_name{
		font-size: 32rpx;
		margin-bottom: 6rpx;
		font-weight: bold;
	}
</style>
