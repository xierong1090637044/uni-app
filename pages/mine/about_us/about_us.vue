<template>
	<view>
		<!--pages/mine/about-us/about-us.wxml-->
		<text class="desc">
			「库存表」是一款免费的库存管理小程序，旨在“化繁为简，让库存管理更加便捷，使其成为您的库存小助手”
		</text>
		<image :src="imgurl[0]" @tap='handlePreviewImage' mode="widthFix" />
		<view class="copyright">
			<view><text>Copyright © 谢荣 All Rights Reserved</text></view>
			<text>联系方式:微信&QQ➭1090637044</text>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgurl:["https://bmob-cdn-23134.bmobcloud.com/2019/07/01/af3304954070ba2c80972f3366498366.jpg"]
			}
		},
		methods: {
			handlePreviewImage(){
				uni.previewImage({
            urls: this.imgurl
        });
			},
		}
	}
</script>

<style lang="scss">
/* pages/mine/about-us/about-us.wxss */
page {
  display: flex;
  flex-direction: column;
	text-align: center
}

.desc {
  line-height: 30px;
  color: #333;
  text-align: center;
  display: block;
  padding: 0 20px;
  margin-bottom: 50px;
	margin-top: 20rpx;
}

image {
  width: 70%;
  border-radius: 2px;
  margin: 0 auto;
  -moz-box-shadow: 0px 3px 20px #333;
  -webkit-box-shadow: 0px 3px 20px #333;
  box-shadow: 0px 3px 20px #333;
}

.copyright {
  font-size: 28rpx;
  color: #999;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30rpx;
  text-align: center;
}

</style>
