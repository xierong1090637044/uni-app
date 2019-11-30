<template>
	<view>
		<!--pages/mine/about_notice/about_notice.wxml-->
		<scroll-view style='height:100vh;' scroll-y bindscrolltolower="loadMore">
			<view class="news" v-for="(item,index) in detail" :key="index"  @click="gotodetail(item)">
				<view>
					<view class="tit display_flex_bet">
						<view class="title display_flex">
							<image src="/static/InfoCenter.png"></image>
							<view>{{item.title}}</view>
							<view class="weidu" v-if="item.status==false"></view>
						</view>
						<view class="time">{{item.createdAt}}</view>
					</view>

					<view class="value">
						<view style="padding:10rpx 0">{{item.content}}</view>
					</view>

					<view class="details display_flex_bet" hover-class="none">
						<view style="font-size:30rpx;color:#666666;">
							查看详情
						</view>
						<fa-icon type="angle-right" size="20" color="#ccc"></fa-icon>
					</view>
				</view>

			</view>

		</scroll-view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	let that;
	let uid;
	export default {
		data() {
			return {
				detail:[]
			}
		},
		
		onLoad() {
			that = this;
			uni.removeStorageSync("operationDet")
			uid = uni.getStorageSync("uid")
		},
		
		onShow() {
			that.getNoticeList()
		},
		
		methods: {
			gotodetail(item){
				that.readNotice(item)
				uni.setStorageSync("operationDet",item.detail)
				uni.navigateTo({
					url:"../manual/detail/detail"
				})
			},
			
			//点击改变消息状态
			readNotice(item){
				const query = Bmob.Query('InfoCenter');
				query.get(item.objectId).then(res => {
				  console.log(res)
				  res.set('status',true)
				  res.save()
					that.getNoticeList()
				}).catch(err => {
				  console.log(err)
				})
			},
			
			//得到消息列表
			getNoticeList(){
				const query = Bmob.Query("InfoCenter");
				query.order("-createdAt");
				const query1 = query.equalTo("toUser", '==',uid);
				const query2 = query.equalTo("fromUser", '==',"I75puc2O");//这是系统消息
				
				query.or(query1, query2);
				query.find().then(res => {
					that.detail = res
				   console.log(res)
				});
			},
			
		}
	}
</script>

<style>
/* pages/mine/about_notice/about_notice.wxss */

.news {
  margin: 30rpx;
  background: #fff;
  border-radius: 30rpx;
  padding: 20rpx 20rpx 10rpx;
}

.tit {
  padding: 10rpx;
}

.title {
  float: left;
  font-size: 35rpx;
  line-height: 40rpx;
}

.weidu {
  background: red;
  border-radius: 50%;
  width: 16rpx;
  height: 16rpx;
  float: left;
  margin-top: 10rpx;
}

.time {
  color: #999;
  margin-top: 6rpx;
  font-size: 28rpx;
}

.value {
  padding: 10rpx 10rpx 20rpx;
  font-size: 30rpx;
  color: #999;
  border-bottom: 4rpx #f7f7f7 solid;
}

.details {
  padding: 10rpx;
}

.very>image {
  width: 20rpx;
  height: 20rpx;
}

.about_value {
  padding: 20rpx;
  background: #f7f7f7;
  border-radius: 10rpx;
  font-size: 30rpx;
}

.about_value>text {
  display: inline-block;
  margin-left: 20rpx;
}

.about_value>image {
  width: 50rpx;
  height: 70rpx;
  /* margin-left: 20rpx; */
  border-radius: 10rpx;
}

.title>image {
  width: 60rpx;
  height: 60rpx;
}

.title>view {
  margin-top: 4rpx;
  margin-left: 10rpx;
  font-size: 30rpx;
  color: #333;
  font-weight: 500;
}

</style>
