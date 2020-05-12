<template>
	<view>
		<view class='page'>
			<view style='line-height:70rpx;padding: 20rpx 20rpx 0;color: #3D3D3D;font-weight: bold;'>已选产品</view>
			<view>
				<view v-for="(item,index) in products" :key="index" class='pro_listitem'>
					<view class='pro_list' style='color:#333'>
						<view>产品：{{item.goodsName}}</view>
						<view v-if="item.stocks">盘点仓库：{{item.stocks.stock_name}}</view>
					</view>
					<view v-if="item.selected_model">
						<view v-for="(model,index) in item.selected_model" :key="index" class="display_flex_bet">
							<view style="font-size: 24rpx;color: #999;" v-if="model">{{model.custom1.value + model.custom2.value + model.custom3.value + model.custom4.value}}</view>
							<view style="font-size: 24rpx;color: #f30;" v-if="model">盘点后库存：{{model.num}}</view>
						</view>
					</view>
					<view class='pro_list' v-else>
						<view>盘点前库存：{{item.reserve}}</view>
						<view>盘点后库存：{{item.num}}</view>
					</view>
				</view>
			</view>

			<form @submit="formSubmit">

				<view style="margin: 30rpx 0;">
					<view style="margin:0 0 10rpx 20rpx;color: #3D3D3D;font-weight: bold;">盘点明细</view>
					<view class="kaidan_detail" style="line-height: 70rpx;">
						<navigator class="display_flex_bet" hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
							<view style="width: 150rpx;" class="left_content">盘点仓库<text style="color: #f30;">*</text></view>
							<view style="display: flex;align-items: center;">
								<input placeholder="请选择要盘点的仓库" disabled="true" :value="stock.stock_name" style="text-align: right;margin-right: 20rpx;" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>
						<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
							<view style="width: 140rpx;">盘点时间</view>
							<picker mode="date" :value="nowDay" :end="nowDay" @change.stop="bindDateChange2" @click.stop>
								<view style="display: flex;align-items: center;">
									<view style="margin-right: 20rpx;">{{nowDay.split(" ")[0]}}</view>
									<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
								</view>
							</picker>
						</view>
						<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
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
						<button class='confrim_button' :disabled='button_disabled' form-type="submit">盘点</button>
					</view>

				</view>
			</form>

		</view>

	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from '@/utils/common.js';
	import print from '@/utils/print.js';

	let uid;
	let that;

	export default {
		data() {
			return {
				products: null,
				button_disabled: false,
				beizhu_text: "",
				Images: [], //上传凭证图
				real_money: 0, //实际付款金额
				all_money: 0, //总价
				total_num: 0,
				producer: null, //制造商
				stock: {},
				nowDay: common.getDay(0, true), //入库时间
				user: uni.getStorageSync("user"),
			}
		},
		onLoad() {
			that = this;
			uid = uni.getStorageSync("uid");

			this.products = uni.getStorageSync("products");
			for (let i = 0; i < this.products.length; i++) {
				this.total_num += Number(this.products[i].num)
			}
		},

		onShow() {
			that.stock = uni.getStorageSync("warehouse") ? uni.getStorageSync("warehouse")[0].stock : ''
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
				console.log(e)
				this.button_disabled = true;
				uni.showLoading({
					title: "上传中..."
				});

				if (that.stock == null || that.stock == "" || that.stock == undefined) {
					uni.showToast({
						icon: "none",
						title: "请选择盘点仓库"
					});
					uni.hideLoading();
					this.button_disabled = false;
					return
				}
				
				that.$http.Post("stock_goodCount", {
					"goods": that.products,
					"beizhu": e.detail.value.input_beizhu,
					"stockId": that.stock.objectId,
					"stockName": that.stock.stock_name,
					"Images": that.Images,
					"opreater":uni.getStorageSync("masterId") ,
					"nowDay": that.nowDay,
					"autoCostPrice":getApp().globalData.setting.autoCostPrice,
				}).then(res => {
					if (res.code == 1) {
						uni.hideLoading();
						uni.setStorageSync("is_option", true);
						
						uni.showToast({
							title: "盘点成功"
						})
						setTimeout(function() {
							that.button_disabled = false;
							uni.navigateBack({
								delta: 2
							});
						}, 500)
				
					}
				})
				
				
			}
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
		text-align: right;
		width: calc(100% - 40rpx);
		background-color: #fff;
		padding: 10rpx 0;
		max-height: 100rpx;
	}

	.confrim_button {
		background: #aa2116;
		color: #fff;
		border-radius: unset;
		font-weight: bold;
		font-size: 32rpx;
	}
</style>
