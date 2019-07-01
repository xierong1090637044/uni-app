<template>
	<view>
		<view class='frist'>
			<view class='display_flex_bet item' bindtap='setheaderimg'>
				<view>头像</view>
				<view class='display_flex'>
					<image :src='userInfo.avatarUrl' class='avatar'></image>
					<fa-icon type="angle-right" size="18" color="#999" style="margin-left: 10rpx;"></fa-icon>
				</view>
			</view>

			<view class='display_flex_bet item1'>
				<view>昵称</view>
				<view class='display_flex right_item'>
					<text>{{userInfo.nickname}}</text>
					<fa-icon type="angle-right" size="18" color="#999" style="margin-left: 10rpx;"></fa-icon>
				</view>
			</view>

			<view class='display_flex_bet item1' bindtap='change_sex'>
				<view>性别</view>
				<view class='display_flex right_item'>
					<text v-if="userInfo.sex ==1">男</text>
					<text v-else>女</text>
					<fa-icon type="angle-right" size="18" color="#999" style="margin-left: 10rpx;"></fa-icon>
				</view>
			</view>
		</view>

		<view style='margin-top:20rpx' class='frist'>
			<view class='display_flex_bet item1'>
				<view>手机号</view>
				<view class='display_flex right_item'>
					<text>{{userInfo.mobilePhoneNumber}}</text>
					<fa-icon type="angle-right" size="18" color="#999" style="margin-left: 10rpx;"></fa-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	export default {
		components: {
			faIcon
		},
		data() {
			return {
				userInfo:uni.getStorageSync("user")
			}
		},
		methods: {

		}
	}
</script>

<style>
.avatar
{
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
}
.thumb_background
{
  width: 100rpx;
  height: 100rpx;
}
.frist
{
  padding: 0 20rpx;
  background: #fff;
}
.item
{
  padding: 8rpx 0;
  border-bottom: 1rpx solid#ddd;
}
.item1
{
  padding: 20rpx 0;
  border-bottom: 1rpx solid#ddd;
}
.icon_enter
{
  margin-left: 20rpx;
}

.right_item
{
  color: #999;
}

.grjj
{
  padding: 20rpx 0rpx;
  border-bottom: 1rpx solid#ccc;
}
</style>
