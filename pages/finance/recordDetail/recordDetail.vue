<template>
	<view>
		<view class="display_flex listItem" style="border-bottom: 1rpx solid#F7F7F7;" v-if="detail.custom">
			<view class="left_content">客户姓名</view>
			<view>{{detail.custom.custom_name}}</view>
		</view>
		<view class="display_flex listItem" style="border-bottom: 1rpx solid#F7F7F7;" v-else-if="detail.producer">
			<view class="left_content">供货商姓名</view>
			<view>{{detail.producer.producer_name}}</view>
		</view>
		
		<view class="display_flex listItem" style="border-bottom: 1rpx solid#F7F7F7;" v-else-if="detail.producer">
			<view class="left_content">供货商姓名</view>
			<view>{{detail.producer.producer_name}}</view>
		</view>
		
		<view class="display_flex listItem" style="border-bottom: 1rpx solid#F7F7F7;">
			<view class="left_content">发生金额</view>
			<view style="color: #2ca879;">{{detail.real_money}}</view>
		</view>
		
		<view class="display_flex listItem" style="border-bottom: 1rpx solid#F7F7F7;">
			<view class="left_content" v-if="detail.custom">收款时间</view>
			<view class="left_content" v-else-if="detail.producer">付款时间</view>
			<view v-if="detail.createdTime">{{detail.createdTime.iso.split(" ")[0]}}</view>
		</view>
		<view class="display_flex listItem" style="border-bottom: 1rpx solid#F7F7F7;">
			<view class="left_content">创建时间</view>
			<view>{{detail.createdAt}}</view>
		</view>
		
		<view class="display_flex listItem" style="border-bottom: 1rpx solid#F7F7F7;margin-top: 60rpx;">
			<view class="left_content">经办人</view>
			<view>{{detail.operater.nickName}}</view>
		</view>
		<view class="display_flex listItem" style="border-bottom: 1rpx solid#F7F7F7;">
			<view class="left_content">相关单号</view>
			<view>{{detail.objectId}}</view>
		</view>
		<view class="display_flex listItem" style="border-bottom: 1rpx solid#F7F7F7;">
			<view class="left_content">备注说明</view>
			<view>{{detail.beizhu || "未填写"}}</view>
		</view>
		<view v-if="detail.Images && detail.Images.length > 0">
			<view class="left_content">凭证图</view>
		
			<view style="width: 100%;padding: 20rpx 0;">
				<view class="upload_image display_flex">
					<view style="position: relative;" v-for="(url,index) in detail.Images" :key="index" @click="priview(url)">
						<image :src="url" style="width: 180rpx;height: 180rpx;margin-right: 10rpx;"></image>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	
	let that;
	export default {
		data() {
			return {
				detail:{}
			}
		},
		
		onLoad(options) {
			that = this;
			const query = Bmob.Query('financeRecord');
			query.include("operater","account","custom","producer");
			query.get(options.id).then(res => {
			  console.log(res)
				that.detail = res;
			}).catch(err => {
			  console.log(err)
			})
		},
		
		methods: {
			//预览图片
			priview(url) {
				uni.previewImage({
					current: url,
					urls: that.detail.Images,
				});
			},
		}
	}
</script>

<style>
.listItem{
	background: #fff;
	padding:10rpx 30rpx;
}

.left_content{
	width: 160rpx;
}
</style>
