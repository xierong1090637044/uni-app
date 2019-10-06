<template>
	<view>
		<loading v-if="loading"></loading>
		<view v-else>
			<view class="frist">供货商名字： <text>{{name}}</text></view>
			<scroll-view style="height: calc(100vh - 80rpx);padding: 0 30rpx;background: #FFFFFF;width: calc(100% - 60rpx);" scroll-y>
				<view v-for="(item,index) in debt_list" :key="index" class="list_item">
					<view v-if="item.operater.nickName"> 操作人：{{item.operater.nickName}}</view>
					<view class="display_flex_bet">
						 <view>还款金额：<text style="color: #f30;">￥{{item.debt_number}}</text></view>
						 <view style="color: #999999;">{{item.createdAt}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import producers from '@/utils/producers.js';
	import loading from "@/components/Loading/index.vue"
	
	let that;
	export default {
		components: {
			loading
		},
		data() {
			return {
				debt_list:[],
				name:'',
				loading: true,
			}
		},
		methods: {
			
		},
		onLoad(options) {
			//console.log(options)
			that = this;
			that.name = options.name
			producers.get_moneyList(options.id).then(res=>{
				that.loading = false
				that.debt_list = res
			});
		},
	}
</script>

<style>
.frist{
	background:#FFFFFF ;
	padding: 20rpx 30rpx;
	border-bottom: 1rpx solid#DDDDDD;
}
.list_item{
	padding: 16rpx 0;
	border-bottom: 1rpx solid#DDDDDD;
}
</style>
