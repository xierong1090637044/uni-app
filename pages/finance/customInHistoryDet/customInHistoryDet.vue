<template>
	<view>
		<view class='page'>

			<view class="backgroundfff" style="padding: 0 20rpx;margin-top: 20rpx;">
				<view class="newOrderTitle borderBot">基础信息</view>
				<view>
					<view class="display_flex" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;" v-if="orderDet.custom&&orderDet.custom.custom_name">
						<view style="width: 140rpx;">客户<text style="color: #f30;">*</text></view>
						<view class="kaidan_rightinput display_flex" style="width: 100%;justify-content: flex-end;">
							<input placeholder="选择客户" disabled="true" :value="orderDet.custom.custom_name" style="text-align: right;margin-right: 20rpx;" />
						</view>
					</view>

					<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
						<view style="width: 140rpx;">收款日期</view>
						<view style="display: flex;align-items: center;">
							<view style="margin-right: 20rpx;">{{orderDet.createdTime}}</view>
						</view>
					</view>
				</view>
			</view>

			<view class="backgroundfff" style="padding: 0 20rpx;margin-top: 20rpx;">
				<view class="newOrderTitle borderBot">已收款的单据</view>
				<view v-if="orderDet.customInOrders&&orderDet.customInOrders.length > 0">
					<view class="borderBot" style="padding: 20rpx 0;width: 100%;" v-for="(item,index) in orderDet.customInOrders" :key="index">
						<view class="font10 color333">单据编号：{{item.objectId}}</view>
						<view class="font10 color333">单据日期：{{item.createdAt}}</view>
						<view class="display_flex_bet">
							<view class="font10 color333">应收金额：{{item.real_money}}元</view>
							<view class="moneyIcon">待收：￥{{item.debt}}元</view>
						</view>

						<view class="font10 color333">已收：{{item.haveGetMoney}}元</view>

						<view class="display_flex_bet">
							<view class="font10 color333 display_flex">本次收款<text style="color: #f30;font-size: 20rpx;">*</text></view>
							<view class="display_flex">
								<input v-model="item.shouldGetMoney" placeholder="请输入本次收款" style="text-align: right;color: #f30;font-weight: bold;"
								 @input="inputShouldGetMoney($event,index)" type="digit" @blur="inputShouldGetMoney($event,index)" />
								<text style="margin-left: 10rpx;">元</text>
							</view>
						</view>
					</view>
				</view>
				<view v-else style="padding: 10rpx 0;">未关联单据</view>
			</view>

			<view class="backgroundfff" style="padding: 0 20rpx;margin-top: 20rpx;">
				<view class="newOrderTitle borderBot">收款信息</view>
				<view>
					<view class="display_flex_bet"  style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
						<view style="width: 140rpx;">收款账户<text style="color: #f30;">*</text></view>
						<view class="kaidan_rightinput display_flex" style="justify-content: flex-end;">
							<view style="text-align: right;margin-right: 20rpx;">{{orderDet.account?orderDet.account.name:''}}</view>
						</view>
					</view>

					<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;" v-if="orderDet.opreater&&orderDet.opreater.nickName">
						<view>收款人<text style="font-size: 20rpx;color: #f30;">*</text></view>
						<view class="kaidan_rightinput" style="text-align: right;">{{orderDet.opreater.nickName}}</view>
					</view>
				</view>
			</view>

			<view class="backgroundfff" style="padding: 0 20rpx;margin-top: 20rpx;">
				<view class="newOrderTitle borderBot">备注</view>
				<view>
					<view class='beizhu_style'>{{orderDet.beizhu ||'未备注'}}</view>
				</view>
			</view>

			<view class="backgroundfff" style="padding: 0 20rpx;margin-top: 20rpx;">
				<view class="newOrderTitle borderBot">上传凭证图(会员可用)</view>
				<view>
					<view style="width: 100%;padding: 20rpx 0;">
						<view class="upload_image display_flex">
							<view v-if="orderDet.Images && orderDet.Images.length > 0" style="position: relative;" v-for="(url,index) in orderDet.Images" :key="index">
								<image :src="url" style="width: 180rpx;height: 180rpx;margin-right: 10rpx;"></image>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view style="padding: 0 30rpx;margin-top: 60rpx;height: 90rpx;line-height: 90rpx;" class="bottomEle display_flex_bet">
				<view>
					<text>总计收款：￥{{orderDet.real_money || 0}}</text>
				</view>
				<view class="display_flex">
					<!--<button class='confrim_button' :disabled='button_disabled' style="background:#426ab3;" @click="formSubmit">完成</button>-->
				</view>

			</view>

		</view>

	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from '@/utils/common.js';
	import customs from '@/utils/customs.js';

	let uid;
	let that;
	let fristClassId
	let secondClassId
	export default {
		data() {
			return {
				orderDet: {}
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync("uid");
			uni.setNavigationBarTitle({
				title: "付款单详情"
			})

			const query = Bmob.Query('order_opreations');
			query.include("opreater", "account", "custom", "producer", "secondClass", "fristClass");
			query.get(options.id).then(res => {
				res.createdTime = res.createdTime.iso.split(" ")[0]
				that.orderDet = res;
			}).catch(err => {
				console.log(err)
			})
		},

		onShow() {

		},
		methods: {


		}
	}
</script>

<style>
	.page {
		color: #4d4d4d;
		font-size: 28rpx;
		height: calc(100vh - 110rpx);
		overflow: scroll;
	}

	.bottomEle {
		position: fixed;
		bottom: 0;
		left: 0;
		width: calc(100% - 30rpx);
		background: #FAFAFA;
		padding: 20rpx 0rpx 20rpx 30rpx;
		font-weight: bold;
	}

	.pro_list {
		display: flex;
		justify-content: space-between;
	}

	.pro_listitem {
		background-color: #fff;
		padding: 10rpx 20rpx;
		border-bottom: 1rpx solid#ddd;
	}

	.pro_allmoney {
		background-color: #fff;
		padding: 10rpx 20rpx;
		text-align: right;
		font-size: 32rpx;
		color: #f30
	}

	.beizhu_style {
		text-align: left;
		background-color: #fff;
		max-height: 100rpx;
		padding: 20rpx 0;
	}

	.confrim_button {
		background: #1651aa;
		color: #fff;
		font-weight: bold;
		font-size: 32rpx;
		border-radius: unset;
		padding: 0 50rpx;
	}
</style>
