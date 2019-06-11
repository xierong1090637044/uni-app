<template>
	<view class="page">
		
		<loading v-if="loading"></loading>
		
		<view v-else class="content">
			<!--<uni-nav-bar left-icon="back" right-text="菜单" left-text="返回" title="标题" @click-left="back" />-->
			<scroll-view class="uni-product-list">
				<view class="uni-product" v-for="(product,index) in productList" :key="index">
					<view>
						<image v-if="product.goodsIcon" class="product_image" :src="product.goodsIcon" mode="widthFix" lazy-load="true"></image>
						<image src="../../../static/goods-default.png" class="product_image" v-else mode="widthFix" lazy-load="true"></image>
					</view>
					
					<view style="margin-left: 20rpx;width: 100%;line-height: 40rpx;" @click="goDetail(product.id)">
						<view style="font-size: 30rpx;" class="product_name">{{product.goodsName}}</view>
						<view class="product_reserve">库存数量:<text class="text_notice">{{product.reserve}}</text></view>
						<view class="product_reserve">创建时间:<text class="text_notice">{{product.createdAt}}</text></view>
					</view>
					
					<fa-icon type="arrow-circle-right " size="20" color="#426ab3"></fa-icon>
				</view>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	import config from '../../../utils/config.js';
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import loading from "@/components/Loading/index.vue"
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	import Bmob from '@/utils/bmob.js'
	
	let uid;
	
	export default {
		components: {
			loading,
			uniNavBar,
			faIcon,
			uniIcon
		},
		data(){
			return {
				loading:true,
				productList:null,
			}
		},
		// #ifdef APP-PLUS
		//监听原生标题栏按钮点击事件
		onNavigationBarButtonTap(Object) {  
        console.log(Object);
				if(Object.text == "添加"){
					this.goAdd();
				}
				
    },
		// #endif
		
		onLoad() {
			uid = uni.getStorageSync('uid');
		},
		onShow() {
			const query = Bmob.Query("Goods");
			query.equalTo("userId","==", uid);
			query.limit(500);
			query.order("-createdAt"); //按照时间降序
			query.include("userId");
			query.include("goodsClass");
			query.find().then(res => {
				//console.log(res)
				this.productList = res;
				this.loading = false;
			});
		},
		
		methods: {
			//点击去到详情
			goDetail(value){
				uni.navigateTo({url:"../good_det/good_det?id="+value})
			},
			
			//点击去到添加产品
			goAdd(){
				uni.navigateTo({url:"../good_add/good_add"})
			}
			
		}
	}
</script>

<style>
.text_notice
{
	margin-left: 6rpx;
}
.content
{
	height: 100%;
	overflow: hidden;
}
.uni-product-list
{
	padding: 0 10rpx;
	width: calc(100% - 20rpx);
}
.uni-product
{
	display: flex;
	padding: 10rpx 0;
	border-bottom: 1px solid#ddd;
	justify-content: space-between;
	align-items: center;
}
.product_image
{
	width: 80rpx;
	height: 80rpx;
}
.product_name
{
	font-weight: bold;
	color: #333;
}
.product_reserve
{
	color: #6C757D;
	font-size: 24rpx;
	font-weight: bold;
}
</style>
