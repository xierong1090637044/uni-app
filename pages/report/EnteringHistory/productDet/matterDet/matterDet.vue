<template>
	<view class="content">
		<view class="headerTitle">物料信息</view>
		<view v-if="detail && detail.length > 0">
			<view v-for="(item,index) in detail" :key="index" class='pro_listitem'>
				<view class='pro_list' style='color:#3D3D3D'>
					<view style="width: calc(100% - 260rpx);">物料：{{item.goodsName}}</view>
					<view>x{{item.num}}</view>
				</view>
				<view class='pro_list'>
					<view style="font-size: 20rpx;">￥{{item.retailPrice}}</view>
					<view style="font-size: 20rpx;">合计：￥{{item.total_money}}</view>
				</view>
			</view>
		</view>
		<view v-else style="font-size: 36rpx;color: #333;font-weight: bold;text-align: center;margin-top: 40rpx;">未领料</view>

		<navigator hover-class="none" :url="'/pages/production/matterSelect/matterSelect?type=production&id='+operationId"
		 class="addButton">添加物料</navigator>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	let that;
	export default {
		data() {
			return {
				operationId: '',
				detail: []
			}
		},
		onLoad(options) {
			that = this;
			that.operationId = options.id
		},
		onShow() {
			that.getDetail(that.operationId)
		},

		methods: {
			getDetail(id) {
				const query = Bmob.Query('order_opreations');
				query.select("mattersId");
				query.get(id).then(res => {
					console.log('物料单详情', res)

					that.detail = res.mattersId
				}).catch(err => {
					console.log(err)
				})
			},

		}
	}
</script>

<style>
	.content {
		background: #FFF;
		padding: 30rpx 0;
	}

	.headerTitle {
		text-align: center;
		width: 100%;
		color: #0A98D5;
		font-size: 32rpx;
	}

	.pro_list {
		display: flex;
		justify-content: space-between;
	}

	.pro_listitem {
		background-color: #fff;
		padding: 10rpx 20rpx;
		border-bottom: 1rpx solid#ddd;
	}

	.addButton {
		border: 1rpx solid#0A98D5;
		color: #0A98D5;
		padding: 10rpx 60rpx;
		text-align: center;
		margin: 80rpx 100rpx 0;
		border-radius: 8rpx;
	}
</style>
