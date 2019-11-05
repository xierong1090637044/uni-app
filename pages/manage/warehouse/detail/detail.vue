<template>
	<view>
		<loading v-if="loading"></loading>
		
		<uni-nav-bar :fixed="true" color="#333333" background-color="#FFFFFF" right-text="操作" @click-right="show_options"></uni-nav-bar>
		<view style="padding: 0 30rpx;background: #fff;">
			<view class="display_flex_bet frist border_bottom" hover-class="none" @click="edit(stock)">
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
					<view>库存金额</view>
					<view>{{reserve_money}}</view>
				</view>
			</view>
		</view>
		<navigator class="list_item display_flex_bet" hover-class="none" :url="'../record/record?stockId='+stock.objectId">
			<text class="left_desc">相关的操作记录</text>
			<fa-icon type="angle-right" size="20" color="#999" />
		</navigator>
		
		<!---存货统计-->
		<view style="margin: 40rpx 0 20rpx;">
			<view style="padding: 0 30rpx 20rpx;">存货统计</view>
			<view style="background: #FFFFFF;padding: 0 30rpx;">
				<view v-if="Goods && Goods.length == 0" style="font-weight: bold;padding: 20rpx 0;" class="second">未有存货</view>
				<view v-for="(good,index) in Goods" :key="index" class="display_flex_bet second border_bottom" @click="goto_detail(good)" v-else>
					<view>
						<view>{{good.goodsName}}</view>
						<view v-if="good.reserve == 0">0%</view>
						<view v-else>{{(good.reserve/reserve_num)*100}}%</view>
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
		
		onLoad() {
			that = this;
			uid = uni.getStorageSync("uid");
			that.stock = uni.getStorageSync("stock")
			that.get_detail()
		},
		methods: {
			show_options(){
				uni.showActionSheet({
					itemList: ["编辑","删除"],
					success: function(res) {
						if (res.tapIndex == 0) {
							that.edit(that.stock)
						} else if (res.tapIndex == 1) {
							that.delete_this(that.stock.objectId)
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
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
			
			//删除操作
			delete_this(id) {
				uni.showModal({
					title: '提示',
					content: '请谨慎删除，一旦删除，数据不能恢复，是否删除此仓库',
					success: function(res) {
						if (res.confirm) {
							console.log(id);
							that.delete_data(id)
						}
					}
				});
			},
			
			//删除数据
			delete_data(id) {
				console.log(id)
				const query = Bmob.Query("stocks");
				query.destroy(id).then(res => {
					console.log(res)
					uni.showToast({
						title: "删除成功",
						icon: "none"
					})
					uni.navigateBack({
						delta:1
					})
				}).catch(err => {
					console.log(err)
				})
			},
			
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
						reserve_money += Number(item.costPrice) * Number(item.reserve)
						reserve_num += Number(item.reserve)
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

.list_item {
		padding: 20rpx 30rpx;
		background: #FFFFFF;
		border-bottom: 1rpx solid#F7F7F7;
		margin: 0 0 20rpx;
	}

.second{
	line-height: 44rpx;
}
</style>
