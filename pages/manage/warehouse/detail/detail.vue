<template>
	<view>
		<loading v-if="loading"></loading>
		
		<view style="padding: 0 30rpx;background: #fff;">
			<view class="display_flex_bet frist border_bottom">
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
			
			<view class="display_flex_bet frist">
				<view class="display_flex_bet" style="width: 100%;">
					<view>库存金额</view>
					<view>{{reserve_money}}</view>
				</view>
			</view>
		</view>
		
		<!---存货统计-->
		<view style="margin: 40rpx 0 20rpx;">
			<view style="padding: 0 30rpx 20rpx;">存货统计</view>
			<view style="background: #FFFFFF;padding: 0 30rpx;">
				<view v-if="Goods && Goods.length == 0" style="font-weight: bold;padding: 20rpx 0;" class="second">未有存货</view>
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
	import Bmob from "hydrogen-js-sdk";
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import loading from "@/components/Loading/index.vue"
	
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
			}
		},
		
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync("uid");
			that.stock = uni.getStorageSync("stock")
			that.get_detail()
		},
		methods: {
			goto_detail(good){
				uni.setStorageSync("now_product",good);
				uni.navigateTo({
					url:"/pages/manage/good_det/good_det"
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
					for (let item of res) {
						reserve_money += Number(item.costPrice) * item.reserve
						reserve_num += item.reserve
					}
			
					that.reserve_money = reserve_money
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
