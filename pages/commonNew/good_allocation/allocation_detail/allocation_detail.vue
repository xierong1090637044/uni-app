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
							<view>调出仓库</text></view>
							<view class="kaidan_rightinput display_flex">
								<input placeholder="选择调出仓库" disabled="true" :value="in_stock.stock_name" style="margin-right: 20rpx;text-align: right;" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>
						<navigator class="display_flex_bet" hover-class="none" url="/pages/manage/warehouse/warehouse?type=out_choose"
						 style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
							<view>调入仓库</text></view>
							<view class="kaidan_rightinput display_flex">
								<input placeholder="选择调入仓库" disabled="true" :value="out_stock.stock_name" style="margin-right: 20rpx;text-align: right;" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>
						<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
							<view style="width: 140rpx;">调拨时间</view>
							<picker mode="date" :value="nowDay" :end="nowDay" @change.stop="bindDateChange2" @click.stop>
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
	import send_temp from '@/utils/send_temp.js';
	import print from '@/utils/print.js';
	import _goods from '@/utils/goods.js';

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

				nowDay: common.getDay(0, true, true), //入库时间
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
			
			showHideFunction(){
				that.button_disabled = false;
				uni.hideLoading();
				uni.setStorageSync("is_option", true);
				uni.removeStorageSync("warehouse");
				uni.removeStorageSync("_warehouse")
				uni.removeStorageSync("out_warehouse")
				uni.removeStorageSync("category")
				uni.removeStorageSync("warehouse")
																		
				uni.showToast({
					title: "调拨成功"
				})
				setTimeout(function() {
					uni.navigateBack({
						delta: 2
					});
				}, 500)
			},

			formSubmit: function(e) {
				//console.log(e)
				this.button_disabled = true;
				if (that.out_stock == '' || that.out_stock == null) {
					uni.showToast({
						title: "请选择调入仓库",
						icon: 'none'
					})

					this.button_disabled = false;
					return
				}

				that.addTbRecord(e)
			},

			addTbRecord(e) {
				uni.showLoading({
					title: "请勿退出..."
				});
				
				let pointer3 = Bmob.Pointer('stocks');
				let pointer4 = Bmob.Pointer('stocks');
				let out_stockId = pointer4.set(that.out_stock.objectId);
				let stockId = pointer3.set(that.in_stock.objectId)

				let billsObj = new Array();
				let detailObj = [];
				for (let i = 0; i < that.products.length; i++) {
					


					let tempBills = Bmob.Query('NBills');
					let detailBills = {}

					let pointer = Bmob.Pointer('_User')
					let user = pointer.set(uid)
					let pointer2 = Bmob.Pointer('_User')
					let operater = pointer2.set(uni.getStorageSync("masterId"))
					let pointer1 = Bmob.Pointer('NGoods')
					let tempGoods_id = pointer1.set(this.products[i].objectId);

					tempBills.set('goodsName', this.products[i].goodsName);
					tempBills.set('retailPrice', this.products[i].modify_retailPrice);
					tempBills.set('num', Number(this.products[i].num));
					tempBills.set('total_money', Number(this.products[i].total_money));
					tempBills.set('goodsId', tempGoods_id);
					tempBills.set('userId', user);
					tempBills.set('type', -2);
					tempBills.set('opreater', operater);
					tempBills.set("stock", stockId);
					tempBills.set("out_stock", out_stockId);

					let goodsId = {}
					detailBills.goodsName = this.products[i].goodsName
					detailBills.stock = that.in_stock.stock_name
					detailBills.out_stock = that.out_stock.stock_name
					detailBills.reserve = this.products[i].reserve
					//detailBills.out_reserve = out_products[0].reserve
					goodsId.objectId = this.products[i].objectId
					//goodsId.out_objectId = out_products[0].objectId
					//goodsId.reserve = num
					//goodsId.out_reserve = num1
					if (this.products[i].selectd_model) {
						goodsId.selected_model = this.products[i].selected_model
						goodsId.models = this.products[i].models
					}
					detailBills.goodsId = goodsId
					detailBills.num = Number(this.products[i].num)
					detailBills.type = -2

					billsObj.push(tempBills)
					detailObj.push(detailBills)
				}
				Bmob.Query('NBills').saveAll(billsObj).then(function(res) {
					//console.log("批量新增单据成功", res);
					let bills = []
					for (let i = 0; i < res.length; i++) {
						bills.push(res[i].success.objectId)
					}

					let pointer = Bmob.Pointer('_User')
					let poiID = pointer.set(uid);

					let masterId = uni.getStorageSync("masterId");
					let pointer1 = Bmob.Pointer('_User')
					let poiID1 = pointer1.set(masterId);

					let query = Bmob.Query('order_opreations');
					//query.set("relations", relID);
					query.set("detail", detailObj);
					query.set("bills", bills);
					query.set("beizhu", e.detail.value.input_beizhu);
					query.set("type", -2);
					query.set("opreater", poiID1);
					query.set("stock", stockId);
					query.set("out_stock", out_stockId);
					query.set("master", poiID);
					query.set('goodsName', that.products[0].goodsName);

					query.save().then(res => {
						let operationId = res.objectId;
						//console.log("添加操作历史记录成功", res);

						for (let j = 0; j < that.products.length; j++) {
							const query = Bmob.Query('NGoods');
							query.equalTo("header", "==", that.products[j].objectId);
							query.equalTo("userId", "==", uid);
							query.equalTo("stocks", "==", that.out_stock.objectId);
							query.find().then(res => {
								let out_products = res
								if (out_products.length == 0) {
									common.upload_good_withNoCan(that.products[j], that.out_stock, Number(that.products[j].num),
										"allocation").then(res => {
										query.equalTo("header", "==", that.products[j].objectId);
										query.equalTo("userId", "==", uid);
										query.equalTo("stocks", "==", that.in_stock.objectId);
										query.find().then(res => {
											let in_products = res
											if (in_products.length == 0) {
												common.upload_good_withNoCan(that.products[j], that.in_stock, 0-Number(that.products[j].num),
													"allocation").then(res => {
														if (j == that.products.length - 1) {
															that.showHideFunction()
														}
												})
											} else {
												query.set('id', in_products[0].objectId) //需要修改的objectId
												query.set('reserve', Number(in_products[0].reserve) - Number(that.products[j].num))
												query.save().then(res => {
													if (j == that.products.length - 1) {
														that.showHideFunction()
													}
												}).catch(err => {
													console.log(err)
												})

											}

										})
									})
								} else {
									query.set('id', out_products[0].objectId) //需要修改的objectId
									query.set('reserve', Number(out_products[0].reserve) + Number(that.products[j].num))
									query.save().then(res => {
										query.equalTo("header", "==", that.products[j].objectId);
										query.equalTo("userId", "==", uid);
										query.equalTo("stocks", "==", that.in_stock.objectId);
										query.find().then(res => {
											let in_products = res
											if (in_products.length == 0) {
												common.upload_good_withNoCan(that.products[j], that.in_stock, Number(that.products[j].num),
													"allocation").then(res => {
													if (j == that.products.length - 1) {
														that.showHideFunction()
													}
												})
											} else {
												query.set('id', in_products[0].objectId) //需要修改的objectId
												query.set('reserve', Number(in_products[0].reserve) - Number(that.products[j].num))
												query.save().then(res => {
													if (j == that.products.length - 1) {
														that.showHideFunction()
													}
												}).catch(err => {
													console.log(err)
												})

											}

										})
									}).catch(err => {
										console.log(err)
									})

								}

							})
						}
						//*/
					})
				}, function(error) {
					// 批量新增异常处理
					console.log("异常处理");
				});
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
