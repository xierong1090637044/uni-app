<template>
	<view>
		<view class='frist'>
			<view class='display_flex_bet item' @click="setheaderimg()">
				<view>头像</view>
				<view class='display_flex'>
					<image :src='userInfo.avatarUrl' class='avatar'></image>
					<fa-icon type="angle-right" size="18" color="#999" style="margin-left: 10rpx;"></fa-icon>
				</view>
			</view>

			<view class='display_flex_bet item1'>
				<view>昵称</view>
				<view class='display_flex right_item'>
					<text>{{userInfo.nickName}}</text>
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
	import Bmob from "hydrogen-js-sdk";
	import mine from "@/utils/mine.js";
	
	let that;
	export default {
		components: {
			faIcon
		},
		data() {
			return {
				userInfo:uni.getStorageSync("user")
			}
		},
		onLoad() {
			that = this
		},
		
		methods: {
			setheaderimg(){
				console.log("sss")
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						console.log(res);
						let file;
						file = Bmob.File(that.userInfo.nickName + ".png", res.tempFilePaths[0]);
						file.save().then(res => {
							console.log("图片地址", res)
							that.userInfo.avatarUrl = res[0].url;
							mine.update_user(that.userInfo).then(res=>{
								if(res){
									uni.setStorageSync("user",that.userInfo)
								}
							})
						})
						
					},
				});
			},
			
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
