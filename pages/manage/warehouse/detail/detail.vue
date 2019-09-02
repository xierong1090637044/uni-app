<template>
	<view>
		<loading v-if="loading"></loading>
		
		<view style="padding: 0 30rpx;background: #fff;">
			<view class="display_flex_bet frist border_bottom" @click="edit(stock)">
				<view class="display_flex">
					<view>仓库名称</view>
					<view style="margin-left: 30rpx;">{{stock.stock_name}}</view>
				</view>
				<fa-icon type="angle-right" size="20" color="#999" />
			</view>
			
			<view class="display_flex_bet frist border_bottom">
				<view class="display_flex_bet" style="width: 100%;">
					<view>库存数量</view>
					<view>{{reserve_num}}</view>
				</view>
			</view>
			
			<view class="display_flex_bet frist border_bottom">
				<view class="display_flex_bet" style="width: 100%;">
					<view>库存金额（按照售价来算）</view>
					<view>{{retail_money}}</view>
				</view>
			</view>
			
			<view class="display_flex_bet frist border_bottom">
				<view class="display_flex_bet" style="width: 100%;">
					<view>库存金额（按照成本来算）</view>
					<view>{{reserve_money}}</view>
				</view>
			</view>
			
			<navigator class="display_flex_bet frist" hover-class="none" :url="'../record/record?stockId='+stock.objectId">
				<view class="display_flex">
					<view>操作统计</view>
				</view>
				<fa-icon type="angle-right" size="20" color="#999" />
			</navigator>
		</view>
		
		<!---存货统计-->
		<view style="margin: 40rpx 0 20rpx;">
			<view style="padding: 0 30rpx 20rpx;">存货统计</view>
			<view style="background: #FFFFFF;padding: 0 30rpx;">
				<view v-if="Goods.length == 0" style="font-weight: bold;padding: 20rpx 0;" class="second">未有存货</view>
				<view v-for="(good,index) in Goods" :key="index" class="display_flex_bet second border_bottom" @click="goto_detail(good)" v-else>
					<view>
						<view>{{good.goodsName}}</view>
						<view>{{(good.reserve/reserve_num)*100}}%</view>
					</view>
					<view class="display_flex">
						<view style="margin-right: 20rpx;">{{good.reserve}}</view>
						<fa-icon type="angle-right" size="20" color="#999" />
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import loading from "@/components/Loading/index.vue"
	import Bmob from '@/utils/bmob.js';
	
	let that;
	let uid;
	export default {
		components: {
			faIcon,
			loading
		},
		data() {
			return {
				loading:true,
				stock:"",
				Goods:null,
				reserve_num:0,
				reserve_money:0,
				retail_money:0,
			}
		},
		
		onLoad() {
			that = this;
			uid = uni.getStorageSync("uid");
			that.stock = uni.getStorageSync("stock")
			that.get_detail()
		},
		methods: {
			
			//点击去到商品详情
			goto_detail(good){
				uni.setStorageSync("now_product",good);
				uni.navigateTo({
					url:"/pages/manage/good_det/good_det"
				})
			},
			
			//编辑操作
			edit(item) {
				uni.setStorageSync("warehouse", item);
				uni.setStorageSync("charge", item.charge);
				uni.setStorageSync("shop", item.shop);
				uni.navigateTo({
					url: "../add/add"
				})
			},
			
			get_detail() {
				const query = Bmob.Query("Goods");
				query.equalTo("userId", "==", uid);
				query.equalTo("stocks", "==", uni.getStorageSync("stock").objectId);
				query.order("-reserve");
				query.find().then(res => {
					console.log(res)
					that.Goods = res;
					let reserve_num = 0;
					let reserve_money = 0;
					let retail_money = 0;
					for (let item of res) {
						reserve_money += Number(item.costPrice) * item.reserve
						retail_money += Number(item.retailPrice) * item.reserve
						reserve_num += item.reserve
					}
			
					that.reserve_money = reserve_money
					that.retail_money = retail_money
					that.reserve_num = reserve_num
					that.loading = false
				});
			},
			
			
		}
	}
</script>

<style lang="scss">
.frist{
	padding: 20rpx 0;
}
.border_bottom{
	border-bottom: 1rpx solid#f6f5ec;
}

.second{
	line-height: 44rpx;
}
</style>
