<template>
	<view>
		<view class="display_flex_bet frist">
			<view>
				<view style="font-size: 30rpx;color: #3d3d3d;font-weight: bold;" v-if="custom.custom_name">{{custom.custom_name}}</view>
				<view>
					<text>联系电话：</text>
					<text v-if="custom.custom_phone" style="font-size: 30rpx;color: #3d3d3d;font-weight: bold;">{{custom.custom_phone}}</text>
					<text v-else style="font-size: 30rpx;color: #3d3d3d;font-weight: bold;">未填写</text>
				</view>
			</view>
			<view class="display_flex">
				<view class="moneyIcon">待收：￥{{custom.allDebt}}</view>
				<fa-icon type="angle-right" size="20" color="#ddd"></fa-icon>
			</view>
		</view>
		
		<view></view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	let that;
	let uid = uni.getStorageSync("uid")
	export default {
		data() {
			return {
				customId: '',
				custom: '',
				shouldGetMoneyList: []
			}
		},

		onLoad(options) {
			that = this;
			uni.setNavigationBarTitle({
				title: "应收账款明细"
			})
			that.customId = options.customId
			that.loadData()
		},

		methods: {
			//加载数据
			loadData(type) {
				let custom
				uni.showLoading({
					title: "加载中..."
				})
				const query1 = Bmob.Query('customs');
				query1.get(that.customId).then(res => {
					console.log(res)
					custom = res
					const query = Bmob.Query("order_opreations");
					query.equalTo("type", "==", -1);
					query.equalTo("extra_type", "==", 1);
					query.equalTo("master", "==", uid);
					query.equalTo("custom", "==", that.customId);
					query.equalTo("debt", ">", 0);
					query.include("account", "custom");
					query.limit(500);
					query.find().then(res => {
						that.shouldGetMoneyList = res;
						query.equalTo("type", "==", -1);
						query.equalTo("extra_type", "==", 1);
						query.equalTo("master", "==", uid);
						query.equalTo("custom", "==", that.customId);
						query.equalTo("debt", ">", 0);
						query.limit(500);
						query.include("account", "custom");
						query.statTo("sum", "debt");
						query.find().then(res => {
							
							custom.allDebt = res[0]._sumDebt
							that.custom = custom
							console.log(that.custom.allDebt)
							uni.hideLoading()
						})
						console.log(res)
					})
				})


			},
		}
	}
</script>

<style>
	.frist{
		background: #fff;
		padding: 20rpx 30rpx;
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
</style>
