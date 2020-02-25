<template>
	<view>
		<view class='page'>
			<view style='line-height:70rpx;padding: 20rpx 20rpx 0;color: #3D3D3D;font-weight: bold;'>已选产品</view>
			<view>
				<view v-for="(item,index) in products" :key="index" class='pro_listitem'>
					<view class='pro_list' style='color:#333'>
						<view>产品：{{item.goodsName}}</view>
						<view v-if="item.stocks">盘点店仓：{{item.stocks.stock_name}}</view>
					</view>
					<view v-if="item.selected_model">
						<view v-for="(model,index) in item.selected_model" :key="index" class="display_flex_bet">
							<view style="font-size: 24rpx;color: #999;" v-if="model">{{model.custom1.value + model.custom2.value + model.custom3.value + model.custom4.value}}</view>
							<view style="font-size: 24rpx;color: #f30;" v-if="model">盘点后库存：{{model.reserve}}</view>
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
						<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
							<view style="width: 140rpx;">盘点时间</view>
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
				real_money: 0, //实际付款金额
				all_money: 0, //总价
				total_num: 0,
				producer: null, //制造商

				nowDay: common.getDay(0, true, true), //入库时间
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
		methods: {
			//选择时间
			bindDateChange(e) {
				that.nowDay = e.detail.value + " 00:00:00"
			},

			formSubmit: function(e) {
				console.log(e)
				this.button_disabled = true;
				uni.showLoading({
					title: "上传中..."
				});

				let operation_ids = [];
				let billsObj = new Array();
				let detailObj = [];
				let stockIds = []
				for (let i = 0; i < this.products.length; i++) {


					//单据
					let tempBills = Bmob.Query('NBills');
					let detailBills = {}

					let pointer = Bmob.Pointer('_User')
					let user = pointer.set(uid)
					let pointer1 = Bmob.Pointer('NGoods')
					let tempGoods_id = pointer1.set(this.products[i].header ? this.products[i].header.objectId : this.products[i].objectId);

					let masterId = uni.getStorageSync("masterId");
					let pointer2 = Bmob.Pointer('_User')
					let poiID2 = pointer2.set(masterId);

					tempBills.set('goodsName', this.products[i].goodsName);
					tempBills.set('retailPrice', (this.products[i].modify_retailPrice).toString());
					tempBills.set('num', Number(this.products[i].num));
					tempBills.set('reserve', Number(this.products[i].reserve));
					tempBills.set('now_reserve', this.products[i].num.toString());
					tempBills.set('total_money', this.products[i].total_money);
					tempBills.set('opreater', poiID2);
					tempBills.set('goodsId', tempGoods_id);
					tempBills.set('userId', user);
					tempBills.set('type', 3);
					tempBills.set("createdTime", {
						"__type": "Date",
						"iso": that.nowDay
					}); // 操作单详情
					if (that.products[i].stocks && that.products[i].stocks.objectId) {
						let pointer3 = Bmob.Pointer('stocks')
						let poiID3 = pointer3.set(that.products[i].stocks.objectId);

						tempBills.set('stock', poiID3);
						stockIds.push(this.products[i].stocks.objectId)
						detailBills.stock = that.products[i].stocks.stock_name
					}

					let goodsId = {}
					if (this.products[i].selectd_model) {
						goodsId.selected_model = this.products[i].selected_model
						goodsId.models = this.products[i].models
						detailBills.goodsId = goodsId
					}
					detailBills.goodsName = this.products[i].goodsName
					detailBills.reserve = this.products[i].reserve
					detailBills.now_reserve = this.products[i].num.toString()
					detailBills.packingUnit = this.products[i].packingUnit

					billsObj.push(tempBills)
					detailObj.push(detailBills)
				}
				//插入单据
				Bmob.Query('NBills').saveAll(billsObj).then(function(res) {
						//console.log("批量新增单据成功", res);

						let pointer = Bmob.Pointer('_User')
						let poiID = pointer.set(uid);

						let masterId = uni.getStorageSync("masterId");
						let pointer1 = Bmob.Pointer('_User')
						let poiID1 = pointer1.set(masterId);

						let query = Bmob.Query('order_opreations');
						query.set("beizhu", e.detail.value.input_beizhu);
						query.set("detail", detailObj);
						query.set("type", 3);
						query.set("opreater", poiID1);
						query.set("master", poiID);
						query.set('goodsName', that.products[0].goodsName);
						query.set("stockIds", stockIds);
						query.set("createdTime", {
							"__type": "Date",
							"iso": that.nowDay
						}); // 操作单详情
						query.save().then(res => {
							let operationId = res.objectId;
							//console.log("添加操作历史记录成功", res);
							uni.hideLoading();
							uni.showToast({
								title: '产品盘点成功',
								icon: 'success',
								success: function() {
									for (let i = 0; i < that.products.length; i++) {
										let num = 0;
										const query = Bmob.Query('NGoods');
										query.get(that.products[i].objectId).then(res => {
											//console.log(res)
											if (that.products[i].selectd_model) {
												for (let item of that.products[i].selected_model) {
													delete item.num // 清除没用的属行
												}
												res.set('models', that.products[i].selected_model)
												num = Number(that.products[i].num);
											} else {
												num = Number(that.products[i].num);
											}

											res.set('reserve', num)
											//res.set('stocktype', (num > that.products[i].warning_num) ? 1 : 0)
											res.save()

											if (that.products[i].header) {
												const query1 = Bmob.Query("NGoods");
												query1.equalTo("header", "==", that.products[i].header.objectId);
												query1.equalTo("order", "==", 1);
												query1.statTo("sum", "reserve");
												query1.find().then(res => {
													//console.log("dasds", res)
													let now_reserve = res[0]._sumReserve
													const query = Bmob.Query('NGoods');
													query.get(that.products[i].header.objectId).then(res => {
														res.set('reserve', now_reserve)
														res.save()
														
														common.modifyStockType(that.products[i].header.objectId)
													})
												})
											}else{
												common.modifyStockType(that.products[i].objectId)
											}

										}).catch(err => {
											console.log(err)
										})
									}

									that.button_disabled = false;
									uni.setStorageSync("is_option", true);
									setTimeout(() => {
										uni.removeStorageSync("_warehouse")
										uni.removeStorageSync("out_warehouse")
										uni.removeStorageSync("category")
										uni.removeStorageSync("warehouse")
										common.log(uni.getStorageSync("user").nickName + "盘点了'" + that.products[0].goodsName + "'等" + that.products
											.length + "商品", 3, res.objectId);

										//自动打印
										if (uni.getStorageSync("setting").auto_print) {
											print.autoPrint(operationId);
										}
										uni.navigateBack({
											delta: 2
										});
									}, 500)
								}
							})
						})


					},
					function(error) {
						// 批量新增异常处理
						console.log("异常处理");
					});
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
