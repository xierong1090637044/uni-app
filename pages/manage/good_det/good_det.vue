<template>
	<view class="page">

		<view class="frist">
			<image v-if="product.goodsIcon" :src="product.goodsIcon" style="width: 100%;height: 100%;" mode="aspectFill"></image>
			<image v-else src="/static/goods-default.png" style="height: 100%;"></image>
		</view>

		<view class="second">
			<view class="second_one">
				<view style="color: #3d3d3d;font-weight: bold;font-size: 34rpx;">{{product.goodsName}}</view>
				<view>成本价: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.costPrice?product.costPrice:"未填写"}}</text></view>
				<view>零售价: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.retailPrice ?product.retailPrice:"未填写"}}</text></view>
			</view>

			<view class="second_one">
				<view>品牌: <text class="second_right_text">{{product.producer?product.producer:"未填写"}}</text></view>
				<view>条码: <text class="second_right_text">{{product.productCode?product.productCode:product.objectId}}</text></view>
				<view>型号: <text class="second_right_text">{{product.packageContent?product.packageContent:"未填写"}}*{{product.packingUnit?product.packingUnit:"未填写"}}</text></view>
				<view>简介: <text class="second_right_text">{{product.product_info?product.product_info:"未填写"}}</text></view>
			</view>

			<view class="second_one">
				<view>当前库存: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.reserve}}</text></view>
				<view>预警数量: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.warning_num ?product.warning_num:0}}</text></view>
				<view>货损数量: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.bad_num ?product.bad_num:0}}</text></view>
			</view>

		</view>

		<view class="thrid">
			<view>此产品的操作记录</view>
			<fa-icon type="arrow-circle-right " size="20" color="#426ab3"></fa-icon>
		</view>

		<!--<view class="four">
				<fa-icon type="edit" size="30" color="#e0861a"></fa-icon>
				<fa-icon type="trash-o" size="30" color="#fff"></fa-icon>
				<fa-icon type="share-alt-square" size="30" color="#1d953f"></fa-icon>
			</view>-->

	</view>
</template>

<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	export default {
		components: {
			faIcon,
		},
		data() {
			return {
				product_id: "",
				product: "",
			}
		},
		onLoad() {
			this.product = uni.getStorageSync("now_product");
		},
		methods: {

		},

		// #ifdef APP-PLUS
		//监听原生标题栏按钮点击事件
		onNavigationBarButtonTap(Object) {
			uni.showActionSheet({
				itemList: ['编辑', '删除', '分享'],
				success: function(res) {
					console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					if (res.tapIndex == 0) {
						console.log("编辑")
					} else if (res.tapIndex == 1) {
						console.log("删除")
					} else {
						console.log("分享")
					}
				},
				fail: function(res) {
					console.log(res.errMsg);
				}
			});
		},
		// #endif
	}
</script>

<style>
	.page {
		height: 100vh;
		overflow: scroll;
		background: #426ab3;
		font-size: 28rpx;
	}

	.frist {
		text-align: center;
		width: 100%;
		height: 300rpx;
		padding: 30rpx 0;
		background: #fff;
	}

	.second {
		padding: 0 30rpx;
		border-top: 1rpx solid#DDDDDD;
		background: #fff;
	}

	.second_one {
		padding: 20rpx 0;
		border-bottom: 1rpx solid#DDDDDD;
		line-height: 60rpx;
		font-size: 26rpx;
		color: #999999;
	}

	.second_right_text {
		color: #3d3d3d;
		margin-left: 20rpx;
	}

	.thrid {
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 30rpx;
		font-size: 28rpx;
		border-bottom: 1rpx solid#DDDDDD;
		background: #fff;
		border-bottom: 1px solid#DDDDDD;
	}

	.four {
		display: flex;
		justify-content: space-around;
		margin: 30rpx 0 60rpx;
	}
</style>
