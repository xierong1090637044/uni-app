<template>
	<view>
		<view class='page'>
			<view style='line-height:70rpx;padding: 20rpx 20rpx 0;color: #3D3D3D;font-weight: bold;'>已选产品</view>
			<view>
				<view v-for="(item,index) in products" :key="index" class='pro_listitem'>
					<view class='pro_list'>产品：{{item.goodsName}}</view>
					<view class='pro_list'>
						<view>库存：{{item.reserve}}</view>
						<view>调出库存：{{item.num}}</view>
					</view>
					<view v-if="item.selected_model">
						<view v-for="(model,index) in item.selected_model" :key="index" class="display_flex_bet" v-if="model.num > 0">
							<view style="font-size: 24rpx;color: #999;" v-if="model">{{model.custom1.value + model.custom2.value + model.custom3.value + model.custom4.value}}</view>
							<view style="font-size: 24rpx;color: #f30;" v-if="model">{{model.num}}</view>
						</view>
					</view>
				</view>
			</view>

			<form @submit="formSubmit">

				<view style="margin: 30rpx 0;">
					<view style="margin:0 0 10rpx 20rpx;color: #3D3D3D;font-weight: bold;">调拨明细</view>
					<view class="kaidan_detail" style="line-height: 70rpx;">
						<navigator class="display_flex_bet" hover-class="none" url="/pages/manage/warehouse/warehouse?type=in_choose"
						 style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
							<view>调入仓库</text></view>
							<view class="kaidan_rightinput display_flex">
								<input placeholder="选择调入仓库" disabled="true" :value="in_stock.stock_name" style="margin-right: 20rpx;text-align: right;" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>
						<navigator class="display_flex_bet" hover-class="none" url="/pages/manage/warehouse/warehouse?type=out_choose"
						 style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
							<view>调出仓库</text></view>
							<view class="kaidan_rightinput display_flex">
								<input placeholder="选择调出仓库" disabled="true" :value="out_stock.stock_name" style="margin-right: 20rpx;text-align: right;" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>
						<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
							<view style="width: 140rpx;">调拨时间</view>
							<picker mode="date" :value="nowDay" :end="nowDay" @change.stop="bindDateChange" @click.stop>
								<view style="display: flex;align-items: center;">
									<view style="margin-right: 20rpx;">{{nowDay.split(" ")[0]}}</view>
									<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
								</view>
							</picker>
						</view>

						<view class="display_flex_bet" style="padding: 10rpx 0;">
							<view style="width: 140rpx;">备注</view>
							<input placeholder='请输入备注' class='beizhu_style' name="input_beizhu"></input>
						</view>

					</view>
					<view style='background: #fff;padding: 10rpx 20rpx;'>
						<view class="notice_text">上传凭证图(会员可用)</view>
					
						<view style="width: 100%;padding: 20rpx 0;">
							<view class="upload_image display_flex">
								<view v-if="Images && Images.length > 0" style="position: relative;" v-for="(url,index) in Images" :key="index">
									<image :src="url" style="width: 180rpx;height: 180rpx;margin-right: 10rpx;"></image>
									<fa-icon type="times-circle-o" size="20" color="#426ab3" style="position: absolute;top: -10rpx;right: -10rpx;"
									 @click="removeImg(index)"></fa-icon>
								</view>
								<view style="width: 180rpx;height: 180rpx;line-height:220rpx;text-align:center;border:1rpx solid#ccc;border-radius:16rpx"
								 @click="upload_image" v-if="Images.length < 3">
									<fa-icon type="plus-square-o" size="40" color="#426ab3"></fa-icon>
								</view>
							</view>
						</view>
					</view>
				</view>

				<view style="padding: 0 30rpx;margin-top: 60rpx;" class="bottomEle display_flex_bet">
					<view>总数：{{total_num}}</view>
					<view class="display_flex">
						<button class='confrim_button' :disabled='button_disabled' form-type="submit">调拨</button>
					</view>

				</view>

			</form>

		</view>

	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from '@/utils/common.js';

	let uid;
	let that;
	export default {
		data() {
			return {
				products: [],
				in_stock: '', //调出仓库
				out_stock: '', //调入仓库
				button_disabled: false,
				beizhu_text: "",
				out_products: [], //调入的商品
				all_money: 0,
				real_money: 0,
				total_num: 0, //实际的总数量
				Images: [], //上传凭证图
				user: uni.getStorageSync("user"),
				nowDay: common.getDay(0, true), //入库时间
			}
		},
		onLoad() {
			that = this;
			uid = uni.getStorageSync("uid");

			this.products = uni.getStorageSync("products");
			for (let i = 0; i < this.products.length; i++) {
				this.all_money = Number((this.products[i].total_money + this.all_money).toFixed(2))
				this.total_num += Number(this.products[i].num)
			}
			this.real_money = Number(this.all_money.toFixed(2))
		},
		onShow() {
			//that.stock = uni.getStorageSync("warehouse")[0].stock
			that.in_stock = uni.getStorageSync("in_warehouse") ? uni.getStorageSync("in_warehouse")[0].stock : ''
			that.out_stock = uni.getStorageSync("out_warehouse") ? uni.getStorageSync("out_warehouse")[0].stock : ''
		},
		methods: {
			
			//选择时间
			bindDateChange(e) {
				that.nowDay = e.detail.value + " 00:00:00"
			},
			
			//移除此张照片
			removeImg(index) {
				that.Images.splice(index, 1)
				that.Images = that.Images
			},
			
			//上传凭证图
			upload_image() {
				if (that.user.is_vip) {
					uni.chooseImage({
						count: 3, //默认9
						sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album', 'camera'], //从相册选择
						success: function(res) {
							//console.log(res);
							let timestamp = Date.parse(new Date());
							let tempFilePaths = res.tempFilePaths
							let file;
							for (let item of tempFilePaths) {
								file = Bmob.File(timestamp + '.jpg', item);
							}
							file.save().then(res => {
								for (let item of res) {
									that.Images.push(item.url);
								}
							})
						},
					});
				} else {
					uni.showToast({
						title: "您还不是会员，无法使用",
						icon: 'none'
					})
				}
			},

			formSubmit: function(e) {
				//console.log(e)
				this.button_disabled = true;
				if (that.out_stock == '' || that.out_stock == null) {
					uni.showToast({
						title: "请选择调出仓库",
						icon: 'none'
					})

					this.button_disabled = false;
					return
				}
				
				that.$http.Post("stock_goodAllocation", {
					"goods": that.products,
					"beizhu": e.detail.value.input_beizhu,
					"stockId": that.in_stock.objectId,
					"stockName": that.in_stock.stock_name,
					"out_stockId": that.out_stock.objectId,
					"out_stockName": that.out_stock.stock_name,
					"Images": that.Images,
					"opreater":uni.getStorageSync("masterId") ,
					"nowDay": that.nowDay,
					"autoCostPrice":getApp().globalData.setting.autoCostPrice,
				}).then(res => {
					if (res.code == 1) {
						that.button_disabled = false;
						uni.setStorageSync("is_option", true);
						uni.removeStorageSync("warehouse");
						uni.removeStorageSync("out_warehouse")
						
						uni.showToast({
							title: "调拨成功"
						})
						setTimeout(function() {
							uni.navigateBack({
								delta: 2
							});
						}, 500)
				
					}
				})				
			},
			
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
		font-weight: bold;
		position: fixed;
		bottom: 0;
		left: 0;
		width: calc(100% - 30rpx);
		background: #FAFAFA;
		padding: 20rpx 0rpx 20rpx 30rpx;
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
		text-align: right;
		width: calc(100% - 40rpx);
		background-color: #fff;
		padding: 10rpx 0;
		max-height: 100rpx;
	}

	.confrim_button {
		background: #644fbb;
		color: #fff;
		font-weight: bold;
		font-size: 32rpx;
		border-radius: unset;
		padding: 0 50rpx;
	}
</style>
