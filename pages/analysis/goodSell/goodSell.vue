<template>
	<view>
		<!--*筛选器*-->
		<view class='select'>
			<view class="section" style="border-right: 1rpx solid#DDDDDD;">
				<picker @change="bindDate_startChange" mode="date" :end="start_date_desc">
					<view class="picker">
						<text style="margin-right: 6rpx;">{{start_date.split(" ")[0]}}</text>
						<fa-icon type="angle-down" size="20" color="#999" />
					</view>
				</picker>
			</view>
		
			<view class="section">
				<picker @change="bindDate_endChange" mode="date" :end="end_date_desc">
					<view class="picker">
						<text style="margin-right: 6rpx;">{{end_date.split(" ")[0]}}</text>
						<fa-icon type="angle-down" size="20" color="#999" />
					</view>
				</picker>
			</view>
		</view>
		
		<scroll-view class="uni-product-list" scroll-y>
			<view v-if="goodSellList.length > 0">
				<view class="uni-product" v-for="(product,index) in goodSellList" :key="index">
					<view>
						<image v-if="product.goodsId.goodsIcon" class="product_image" :src="product.goodsId.goodsIcon" mode="widthFix" @click="priviewImg(product.goodsId.goodsIcon)"></image>
						<image src="/static/goods-default.png" class="product_image" v-else mode="widthFix"></image>
					</view>
		
					<view style="margin-left: 20rpx;width: 100%;line-height: 40rpx;" @click="goDetail(product.goodsId)">
						<view :style="{ 'color': product.goodsId.stocktype==0 ? '#f30' : ''} " class="product_name">{{product.goodsId.goodsName}}</view>
						<view class="product_reserve display_flex_bet" style="width: 90%;">
							<view style="font-size: 24rpx;">销售数量:<text class="text_notice">{{product._sumNum}}</text></view>
							<view style="font-size: 24rpx;">销售笔数:<text class="text_notice">{{product._count}}</text></view>
							<view style="font-size: 24rpx;">销售额:<text class="text_notice">{{product._sumTotal_money}}</text></view>
						</view>
						<!--<view class="product_reserve">创建时间:<text class="text_notice">{{product.goodsId.createdAt}}</text></view>-->
					</view>
		
					<fa-icon type="angle-right" size="20" color="#426ab3"></fa-icon>
				</view>
			</view>
			<view v-else>
				<view style="margin-top: 100rpx;color:#333;font-weight: bold;text-align: center;font-size: 36rpx;">没有查询到操作记录!</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from '@/utils/common.js';
	
	let that;
	let uid;
	export default {
		data() {
			return {
				goodSellList:[],
				
				start_date: common.getDay(0, true),
				end_date: common.getDay(1, true),
				start_date_desc: '',
				end_date_desc: '',
			}
		},
		
		onLoad() {
			that = this;
			uid = uni.getStorageSync("uid");
			that.start_date_desc = that.start_date.split(" ")[0];
			that.end_date_desc = that.end_date.split(" ")[0];
			
			that.getdetail()
		},
		
		methods: {
			bindDate_startChange(e){
				that.start_date = e.detail.value+' 00:00:00';
				that.getdetail()
			},
			
			bindDate_endChange(e){
				that.end_date = e.detail.value+' 00:00:00';
				that.getdetail()
			},
			
			getdetail(){
				const query = Bmob.Query("Bills");
				query.equalTo("userId", "==", uid);
				query.equalTo("type", "==", -1);
				query.equalTo("extra_type", "==", 1);
				query.equalTo("createdAt", ">=", that.start_date);
				query.equalTo("createdAt", "<=", that.end_date);
				query.order("-num");
				query.include("goodsId");
				query.statTo("sum", "num,total_money");
				query.statTo("groupby", "goodsId,goodsName");
				query.statTo("order", "-_sumNum");
				query.statTo("groupcount", "true");
				query.limit(500);
				query.count().then(res => {
					let opreaterCount = res
					let newArrar = [];
					
					if(opreaterCount == 0){return}
					
					for (let i = 0; i < Math.ceil(opreaterCount / 500); i++) {
						query.limit(500);
						query.skip(500 * i);
						query.find().then(res => {
							
							for(let item of res){
								 if(item.goodsId && item.goodsId.objectId){
									 newArrar.push(item)
								 }
							}
							
							if (i == Math.ceil(opreaterCount / 500) - 1) {
								that.goodSellList = newArrar.sort(function(a, b) {
									return b._sumNum - a._sumNum
								})
							}
							
						});
					}
				})
				
			},
			
			//支持预览图片
			priviewImg(imgurl) {
				uni.previewImage({
					current: imgurl,
					urls: [imgurl],
				});
			},
			
			//点击去到详情
			goDetail(value) {
				uni.setStorageSync("now_product", value);
				if (value.order == 0) {
					uni.navigateTo({
						url: "/pages/manage/good_det/Ngood_det"
					})
				} else {
					uni.navigateTo({
						url: "/pages/manage/good_det/good_det"
					})
				}
			},
			
		}
	}
</script>
<style lang="scss">
	page {
		background: #fff;
	}
	
	.select {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx 30rpx;
		border-bottom: 1rpx solid#F7F7F7;
	
		.section {
			width: 50%;
			text-align: center;
		}
	}

	.text_notice {
		margin-left: 6rpx;
	}

	.content {
		height: 100%;
		overflow: hidden;
	}

	.uni-product-list {
		padding: 0 10rpx;
		width: calc(100% - 20rpx);
		height: calc(100vh - 92rpx);
	}

	.uni-product {
		display: flex;
		padding: 10rpx 0;
		border-bottom: 1px solid#ddd;
		justify-content: space-between;
		align-items: center;
	}

	.product_image {
		width: 80rpx;
		height: 80rpx;
	}

	.product_name {
		font-weight: bold;
		color: #333;
	}

	.product_reserve {
		color: #6C757D;
		font-size: 24rpx;
		font-weight: bold;
	}

	.title {
		font-size: 15px;
		line-height: 20px;
		color: #333333;
		padding: 15px;
	}

	.city {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-left: 8px;
		white-space: nowrap;
	}

	.input-view {
		width: 92%;
		display: flex;
		background-color: #e7e7e7;
		height: 30px;
		border-radius: 15px;
		padding: 0 4%;
		flex-wrap: nowrap;
		margin: 8rpx 0;
		line-height: 30px;
	}

	.input-view .uni-icon {
		line-height: 30px !important;
	}

	.input-view .input {
		height: 30px;
		line-height: 30px;
		width: 94%;
		padding: 0 3%;
	}
</style>
