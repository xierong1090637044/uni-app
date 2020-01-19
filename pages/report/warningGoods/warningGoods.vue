<template>
	<view>
		<view class="uni-common-mt">
			<uni-segmented-control :current="current" :values="items" style-type="button" active-color="#426ab3" @clickItem="onClickItem" />
		</view>
		<scroll-view class="uni-product-list" scroll-y>
			<view v-if="productList.length > 0">
				<view class="uni-product" v-for="(product,index) in productList" :key="index">
					<view>
						<image v-if="product.goodsIcon" class="product_image" :src="product.goodsIcon" mode="widthFix" @click="priviewImg(product.goodsIcon)"></image>
						<image src="/static/goods-default.png" class="product_image" v-else mode="widthFix"></image>
					</view>
		
					<view style="margin-left: 20rpx;width: 100%;line-height: 40rpx;" @click="goDetail(product)">
						<view style="color:#f30" class="product_name">{{product.goodsName}}</view>
						<view class="product_reserve display_flex_bet" style="width: 90%;">
							<view style="font-size: 24rpx;">库存数量:<text class="text_notice">{{product.reserve}}</text></view>
							<view v-if="product.warning_num" style="font-size: 24rpx;">预警数量:<text class="text_notice">{{product.warning_num}}</text></view>
						</view>
						<view class="product_reserve" v-if="product.packageContent && product.packingUnit">规格:<text class="text_notice">{{product.packageContent}}*{{product.packingUnit}}</text></view>
						<!--<view class="product_reserve">创建时间:<text class="text_notice">{{product.createdAt}}</text></view>-->
					</view>
		
					<fa-icon type="angle-right" size="20" color="#426ab3"></fa-icon>
				</view>
			</view>
			<view v-else>
				<view style="margin-top: 100rpx;color:#333;font-weight: bold;text-align: center;font-size: 36rpx;">没有商品啦!</view>
			</view>
		
		</scroll-view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from '@/utils/common.js';
	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';
	
	let that;
	let uid;
	export default {
		components: {
			uniSegmentedControl
		},
		data() {
			return {
				productList:[],
				items: ['低库存预警', '高库存预警'],
				current: 0,
				search_text:'',
			}
		},
		
		onLoad() {
			that = this;
			uid = uni.getStorageSync("uid");
			that.get_productList(0);
		},
		methods: {
			onClickItem(e){
				that.productList = []
				if(e == 1){
					that.get_productList(2)
				}else if(e == 0){
					that.get_productList(0)
				}
			},
			
			//点击去到详情
			goDetail(value) {
				console.log(value)
				uni.setStorageSync("now_product", value);
				if (value.order == 0 || value.order == 1) {
					uni.navigateTo({
						url: "/pages/manage/good_det/Ngood_det"
					})
				} else {
					uni.navigateTo({
						url: "/pages/manage/good_det/good_det"
					})
				}
			},
			
			//查询产品列表
			get_productList(stocktype) {
				const query = Bmob.Query("Goods");
				query.equalTo("userId", "==", uid);
				
				query.equalTo("status", "!=", -1);
				const query1 = query.equalTo("goodsName", "==", {
					"$regex": "" + that.search_text + ".*"
				});
				const query2 = query.equalTo("packageContent", "==", {
					"$regex": "" + that.search_text + ".*"
				});
				query.or(query1, query2);
				query.equalTo("stocktype", "==", stocktype);
				query.limit(500);
				//query.skip(that.page_size * (that.page_num - 1));
				query.order("-createdAt"); //按照条件降序
				query.include("goodsClass", "stocks", "second_class");
				query.find().then(res => {
					//console.log(res)
					for (let item of res) {
						item.reserve = item.reserve.toFixed(uni.getStorageSync("setting") ? uni.getStorageSync("setting").show_float :
							0)
					}
					that.productList = res;
				});
			},
			
		}
	}
</script>

<style>
.uni-common-mt{
	padding: 20rpx 0;
}

.uni-product-list {
		padding: 0 10rpx;
		width: calc(100% - 20rpx);
		height: calc(100vh - 104rpx);
		background: #fff;
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
