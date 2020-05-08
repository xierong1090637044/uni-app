<template>
	<view>
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" :shadow="false" rightText="新增更进" @click-right="addCustomFollow">
			<view class="input-view display_flex">
				<fa-icon type="search" size="16" color="#999"></fa-icon>
				<input confirm-type="search" class="input" type="text" placeholder="请输入客户名字" @confirm="input_confirm" :value="params.custom_name"/>
			</view>
		</uni-nav-bar>
		
		<scroll-view style="height: calc(100vh - 80rpx);" scroll-y="true">
			<view v-for="(item,index) in CustomFollowList" :key="index" class="content" @click="gotoDet(item)">
				<view style="border-bottom: 1rpx solid#ddd;padding-bottom: 10rpx;">
					<view style="font-weight: bold;font-size: 32rpx;">{{item.custom_name}}</view>
					<view>跟进时间：{{item.nowTime.iso}}</view>
					<view>跟进人员：{{item.opreater.nickName}}</view>
					<view>跟进内容：{{item.content}}</view>
				</view>
				<view v-if="item.isStop" style="padding-top: 10rpx;color: #f30;text-align: right;font-weight: bold;font-size: 26rpx;">已停止跟进</view>
				<view v-else style="padding-top: 10rpx;color: #2CA879;text-align: right;font-weight: bold;font-size: 26rpx;">{{item.nextTime.iso}}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				CustomFollowList:[],
				params:{
					type:"get",
					custom_name:'',
					pageSize:500,
					pageNum:1,
				}
			}
		},
		
		onLoad(options) {
			uni.setNavigationBarTitle({
				title: "客户跟进"
			})
			
			if(options.custom_name){
				this.params.custom_name = options.custom_name
			}
		},
		
		onShow() {
			this.getCustomFollowList()
		},
		
		methods: {
			//去到跟进详情
			gotoDet(item){
				uni.navigateTo({
					url:"/pages/manage/customFollow/customFollow?type=edit"
				})
				uni.setStorageSync("customFollowDet",item)
				uni.setStorageSync("custom",item.custom)
			},
			
			addCustomFollow(){
				uni.navigateTo({
					url:"/pages/manage/customFollow/customFollow"
				})
			},
			
			input_confirm(e){
				this.params.custom_name = e.detail.value 
				this.getCustomFollowList()
			},
			
			getCustomFollowList(){
				this.$http.Post("stock_customFollow", this.params).then(res => {
					this.CustomFollowList = res.data
				})
			},
		}
	}
</script>

<style>
	view{
		line-height: 1.4;
	}
.content{
	background: #fff;
	margin-top: 20rpx;
	padding: 20rpx 30rpx;
}
</style>
