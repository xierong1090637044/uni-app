<template>
	<!--<view style="padding:0 30rpx;background: #FFFFFF;">
		<view v-for="(item,index) in custom_list" :key="index" class="display_flex_bet frist">
			<view>{{item.custom_name}}</view>
			<fa-icon type="angle-right" size="20" color="#999" />
		</view>
	</view>-->
	
	<view class="container">
		<view class="page-body">
			<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'">
				<view class="nav-left-item" @click="categoryClickMain(item.objectId,index)" :key="index" :class="index==categoryActive?'active':''"
				    v-for="(item,index) in custom_list">
					{{item.custom_name}}
				</view>
			</scroll-view>
			<scroll-view class="nav-right" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'" scroll-with-animation>
				<view :id="index===0?'first':''" class="nav-right-item" v-for="(c,index) in subCategoryList" :key="index">
					<view style="text-align: left;border-bottom: solid 1rpx #E0E0E0;padding: 20rpx 0;">
						  <view>销售商品：{{c.goodsName}}</view>
							<view class="display_flex_bet">
								<view>实际单价：{{c.goodsId.retailPrice}}</view>
								<view>卖出单价：{{c.retailPrice}}</view>
							</view>
							<view class="display_flex_bet">
								<view>数量：{{c.num}}</view>
							</view>
							<view>操作者：{{c.operater.nickName}}</view>
							<view>{{c.createdAt}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import customs from '@/utils/customs.js'
	import Bmob from "hydrogen-js-sdk"
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import loading from "@/components/Loading/index.vue"
	
	let that;
	let goodsId;
	let uid = uni.getStorageSync("uid");
	export default {
		components: {
			faIcon,
			loading
		},
		data() {
			return {
				custom_list:[],
				
				categoryList: [],
				subCategoryList: [],
				height: 0,
				categoryActive: 0,
				scrollTop: 0,
				scrollHeight: 0,
			}
		},
		methods: {
			
			scroll(e) {
				this.scrollHeight = e.detail.scrollHeight;
			},
			categoryClickMain(id,index) {
				this.categoryActive = index;
				this.scrollTop = -this.scrollHeight * index;
				
				this.get_detail(id)
			},
			
			get_detail(custom_id){
				const query = Bmob.Query("Bills");
				query.equalTo("type", '==', -1);
				query.equalTo("goodsId", '==',goodsId);
				
				query.equalTo("custom", '==', custom_id);
				query.include("operater","goodsId");
				query.find().then(res => {
					console.log(res)
					this.subCategoryList = res
				});
			},
			
		},
		onLoad(options) {
			goodsId = options.id
			
			that = this;
			customs.get_customList().then(res=>{
				that.custom_list = res
				
				that.get_detail(res[0].objectId)
			})
			
			this.height = uni.getSystemInfoSync().windowHeight;
		},
	
	}
</script>

<style>
.page-body {
		display: flex;
	}

	.nav {
		display: flex;
		width: 100%;
	}

	.nav-left {
		width: 30%;
		background: #FFFFFF;
		border-right: solid 1rpx #E0E0E0;
	}

	.nav-left-item {
		height: 100rpx;
		border-bottom: solid 1rpx #E0E0E0;
		font-size: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #3D3D3D;
		font-weight: bold;
	}

	.nav-right {
		width: 70%;
		background: #FFFFFF;
	}

	.nav-right-item {
		width: calc(100% - 44rpx);
		float: left;
		text-align: center;
		padding:0 20rpx;
		font-size: 24rpx;
	}

	.active {
		color: #007AFF;
	}
</style>
