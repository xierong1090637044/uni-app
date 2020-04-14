<template>
	<view>
		<scroll-view style="height: calc(100vh - 90rpx);" scroll-y="true">
			<view class="display_flex_bet frist">
				<view>
					<view style="font-size: 30rpx;color: #3d3d3d;font-weight: bold;" v-if="producer.producer_name">{{producer.producer_name}}</view>
					<view>
						<text>联系电话：</text>
						<text v-if="producer.producer_phone" style="font-size: 30rpx;color: #3d3d3d;font-weight: bold;">{{producer.producer_phone}}</text>
						<text v-else style="font-size: 30rpx;color: #3d3d3d;font-weight: bold;">未填写</text>
					</view>
				</view>
				<view class="display_flex">
					<view class="moneyIcon">待付：￥{{producer.allDebt}}元</view>
					<fa-icon type="angle-right" size="20" color="#ddd"></fa-icon>
				</view>
			</view>

			<view class="uni-list">
				<checkbox-group @change="checkboxChange">
					<label class="display_flex uni-label-pointer" v-for="(item,index) in shouldGetMoneyList" :key="index">
						<view style="margin-right: 10rpx;">
							<checkbox :value="''+index" style="transform:scale(0.7)" :checked="item.checked"/>
						</view>
						<view class="borderBot" style="padding: 20rpx 0;width: calc(100% - 60rpx);">
							<view class="color333">单据编号：{{item.objectId}}</view>
							<view class="color333">单据日期：{{item.createdAt}}</view>
							<view class="display_flex_bet">
								<view class="color333">应付金额：{{item.real_money}}元</view>
								<view class="moneyIcon">待付：￥{{item.debt}}元</view>
							</view>

							<view class="color333">已付：{{item.haveGetMoney}}元</view>
						</view>
					</label>
				</checkbox-group>
			</view>
		</scroll-view>

		<view class="display_flex_bet bottomEle">
			<view style="margin-left: 20rpx;" class="display_flex">
				<radio :checked="isAllSelected" @click="selectAll" style="transform:scale(0.7)"/>全选
			</view>
			<view style="height: 90rpx;line-height: 90rpx;background: #426ab3;color: #fff;padding: 0 30rpx;" @click="getOrderDet">生成付款单</view>
		</view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	let that;
	let uid = uni.getStorageSync("uid")
	export default {
		data() {
			return {
				producerId: '',
				producer: '',
				shouldGetMoneyList: [],
				isAllSelected:false
			}
		},

		onLoad(options) {
			that = this;
			uni.setNavigationBarTitle({
				title: "应付账款明细"
			})
			that.producerId = options.producerId
		},
		
		onShow() {
			that.loadData()
		},

		methods: {
			
			//生成付款单
			getOrderDet(){
				let orderList = []
				for(let item of that.shouldGetMoneyList){
					if(item.checked == true){
						item.shouldGetMoney = item.debt
						orderList.push(item)
					}
				}
				
				if(orderList.length == 0){
					uni.showToast({
						icon:"none",
						title:"请选择要收款的单据"
					})
					return
				}
				
				uni.setStorageSync("producerOutOrders",orderList)
				uni.navigateTo({
					url:"/pages/finance/CPHistory/producerOutOrder/producerOutOrder"
				})
			},
			
			
			//选择数据
			checkboxChange(e) {
				let value = e.detail.value
				
				for(let item of value){
					that.shouldGetMoneyList[item].checked = true
				}
			},
			
			//全选点击
			selectAll(){
				that.isAllSelected = !that.isAllSelected
				for(let item of that.shouldGetMoneyList){
					item.checked = that.isAllSelected
				}
			},

			//加载数据
			loadData() {
				let producer
				uni.showLoading({
					title: "加载中..."
				})
				const query1 = Bmob.Query('producers');
				query1.get(that.producerId).then(res => {
					console.log(res)
					producer = res
					const query = Bmob.Query("order_opreations");
					query.equalTo("type", "==", 1);
					query.equalTo("extra_type", "==", 1);
					query.equalTo("master", "==", uid);
					query.equalTo("producer", "==", that.producerId);
					query.equalTo("debt", ">", 0);
					query.include("account", "producer");
					query.limit(500);
					query.find().then(res => {
						for(let item of res){
							if(item.haveGetMoney){}else{
								item.haveGetMoney = item.real_money - item.debt
							}
						}
						that.shouldGetMoneyList = res;
						that.getDebtCount(producer)
					})
				})
			},

			getDebtCount(producer) {
				const query = Bmob.Query("order_opreations");
				query.equalTo("type", "==", 1);
				query.equalTo("extra_type", "==", 1);
				query.equalTo("master", "==", uid);
				query.equalTo("producer", "==", that.producerId);
				query.equalTo("debt", ">", 0);
				query.limit(500);
				query.include("account", "producer");
				query.statTo("sum", "debt");
				query.find().then(res => {

					producer.allDebt = res[0]._sumDebt
					that.producer = producer
					console.log(that.shouldGetMoneyList)
					uni.hideLoading()
				})
			},
		}
	}
</script>

<style>
	.frist {
		background: #fff;
		padding: 20rpx 30rpx;
	}
	
	.bottomEle{
		position: fixed;
		bottom: 0;
		left: 0;
		background: #fff;
		width: 100%;
	}

	.moneyIcon {
		color: #f30;
		border: 1rpx solid#f30;
		padding: 0rpx 12rpx;
		font-weight: bold;
		text-align: center;
		font-size: 24rpx;
		margin-right: 20rpx;
		border-radius: 4rpx;
	}

	.uni-common-mt {
		padding: 30rpx;
	}

	.content {
		height: calc(100vh - 80rpx);
		background: #fff;
	}

	.info_item {
		padding: 20rpx 30rpx;
		background: #fff;
	}

	.item {
		border-bottom: 1rpx solid#ccc;
		padding-bottom: 10rpx;
		margin-bottom: 10rpx;
	}

	.uni-label-pointer {
		padding: 0 20rpx;
	}
</style>
