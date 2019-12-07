<template>
	<view>
		<view class='page'>
			<view style='line-height:70rpx;padding: 20rpx 20rpx 0;font-size: 32rpx;color: #333;font-weight: bold;'>已选产品</view>
			<view>
				<view v-for="(item,index) in products" :key="index" class='pro_listitem'>
					<view class='pro_list' style='color:#3D3D3D'>
						<view>产品：{{item.goodsName}}</view>
						<view>库存：{{item.reserve}}</view>
					</view>
					<view class='pro_list' style='color:#3D3D3D'>
						<view v-if="item.stocks && item.stocks.stock_name">调出仓库：{{item.stocks.stock_name}}</view>
						<view v-else>调出仓库：未填写</view>
						<view>
							<view>调出库存：{{item.num}}</view>
						</view>
					</view>
				</view>
			</view>

			<form @submit="formSubmit">

				<view style="margin: 30rpx 0;">
					<view style="margin:0 0 10rpx 10rpx;font-size: 32rpx;color: #333;font-weight: bold;">调拨明细</view>
					<view class="kaidan_detail" style="line-height: 70rpx;">
						<navigator class="display_flex_bet" hover-class="none" url="/pages/manage/warehouse/warehouse?type=out_choose"
						 style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
							<view>调入仓库</text></view>
							<view class="kaidan_rightinput display_flex">
								<input placeholder="选择调入仓库" disabled="true" :value="out_stock.stock_name"  style="margin-right: 20rpx;"/>
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
				stock: '', //调出仓库
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
			that.out_stock = uni.getStorageSync("out_warehouse") ? uni.getStorageSync("out_warehouse")[0].stock : ''
		},
		methods: {

			upload_good_withNoCan(good, stock) {
				return new Promise((resolve, reject) => {
					let uid = uni.getStorageSync("uid");
					const pointer = Bmob.Pointer('_User')
					const userid = pointer.set(uid)
					const pointer1 = Bmob.Pointer('stocks')
					const p_stock_id = pointer1.set(stock.objectId) //仓库的id关联

					const pointer2 = Bmob.Pointer('Goods')
					const p_good_id = pointer2.set(good.header ? good.header.objectId : good.objectId) //仓库的id关联

					const query = Bmob.Query('Goods');
					query.set("goodsName", good.goodsName)
					query.set("costPrice", good.costPrice)
					query.set("retailPrice", good.retailPrice)
					if(good.models)query.set("models", good.models)
					query.set("reserve", 0)
					query.set("stocks", p_stock_id)
					query.set("header", p_good_id)
					query.set("order", 1)
					query.set("userId", userid)
					query.save().then(res => {
						console.log(res)
						resolve([true, res])
					}).catch(err => {
						console.log(err)
					})

				})

			},

			//校验
			check() {
				return new Promise((resolve, reject) => {
					if (that.out_stock == '' || that.out_stock == null) {
						uni.showToast({
							title: "请选择调入仓库",
							icon: 'none'
						})

						resolve(false)
					} else {
						for (let i = 0; i < that.products.length; i++) {

							const query = Bmob.Query('Goods');
							query.equalTo("goodsName", "==", that.products[i].goodsName);
							query.equalTo("userId", "==", uid);
							query.equalTo("stocks", "==", that.out_stock.objectId);
							query.find().then(res => {
								console.log(res)

								if (res.length == 0) {
									//console.log(that.products[i].goodsName)

									let product = that.products[i]
									let products = uni.getStorageSync("products");
									let warehouse = uni.getStorageSync("out_warehouse")
									that.upload_good_withNoCan(product, warehouse[0].stock).then(res => {
										console.log(res)
										if (i == that.products.length - 1) {
											for (let i = 0; i < that.products.length; i++) {

												const query = Bmob.Query('Goods');
												query.equalTo("goodsName", "==", that.products[i].goodsName);
												query.equalTo("userId", "==", uid);
												query.equalTo("stocks", "==", that.out_stock.objectId);
												query.find().then(res => {
													if(that.out_products.length == 0){
														res[0].shouldNum =  Number(that.products[i].num)
														that.out_products = that.out_products.concat(res)
													}else{
														for (let item of that.out_products) {
															item.shouldNum =  Number(that.products[i].num)
															if (res[0].goodsName == item.goodsName){
																item.shouldNum = item.shouldNum + Number(that.products[i].num);
															}else{
																that.out_products = that.out_products.concat(res)
															}
														}
													}
													if (i == that.products.length - 1) {
														resolve(true)
													}
												})
											}
										}
									})
								} else {
									if(that.out_products.length == 0){
										res[0].shouldNum =  Number(that.products[i].num)
										that.out_products = that.out_products.concat(res)
									}else{
										for (let item of that.out_products) {
											item.shouldNum =  Number(that.products[i].num)
											if (res[0].goodsName == item.goodsName){
												item.shouldNum = item.shouldNum + Number(that.products[i].num);
											}else{
												that.out_products = that.out_products.concat(res)
											}
										}
									}
									
									
									if (i == that.products.length - 1) {
										console.log("dsadas", that.out_products)
										resolve(true)
									}
								}
							})
						}
					}
				})
			},

			formSubmit: function(e) {
				console.log(e)
				this.button_disabled = true;
				that.check().then(res => {
					console.log(res)

					if (res) {
						that.add_tb_record(e)
					} else {
						that.button_disabled = false;
					}
				})

			},

			//生成调拨单
			add_tb_record(e) {
				uni.showLoading({
					title: "上传中..."
				});

				const pointer = Bmob.Pointer('stocks');
				let out_stockId = pointer.set(that.out_stock.objectId);


				let billsObj = new Array();
				let detailObj = [];
				let stockIds = []
				for (let i = 0; i < this.products.length; i++) {
					let num = Number(this.products[i].reserve) - Number(this.products[i].num);
					//let num1 = Number(this.out_products[i].reserve) + Number(this.products[i].num);

					//单据
					let tempBills = Bmob.Query('Bills');
					let detailBills = {}

					let pointer = Bmob.Pointer('_User')
					let user = pointer.set(uid)
					let pointer2 = Bmob.Pointer('_User')
					let operater = pointer2.set(uni.getStorageSync("masterId"))
					let pointer1 = Bmob.Pointer('Goods')
					let tempGoods_id = pointer1.set(this.products[i].objectId);

					tempBills.set('goodsName', this.products[i].goodsName);
					tempBills.set('retailPrice', (this.products[i].modify_retailPrice).toString());
					tempBills.set('num', Number(this.products[i].num));
					tempBills.set('total_money', this.products[i].total_money);
					tempBills.set('goodsId', tempGoods_id);
					tempBills.set('userId', user);
					tempBills.set('type', -2);
					tempBills.set('opreater', operater);
					tempBills.set("out_stock", out_stockId);
					tempBills.set("createdTime", {
						"__type": "Date",
						"iso": that.nowDay
					}); // 操作单详情

					let goodsId = {}
					if (this.products[i].stocks && this.products[i].stocks.objectId) {
						const pointer = Bmob.Pointer('stocks');
						let stockId = pointer.set(this.products[i].stocks.objectId);
						tempBills.set("stock", stockId);
						detailBills.stock = this.products[i].stocks.stock_name
						stockIds.push(this.products[i].stocks.objectId)
					}else{
						detailBills.stock = "未填写"
					}
					detailBills.goodsName = this.products[i].goodsName
					//detailBills.stock = this.products[i].stock_name
					detailBills.out_stock = that.out_stock.stock_name
					detailBills.reserve = this.products[i].reserve
					//detailBills.out_reserve = this.out_products[i].reserve
					goodsId.objectId = this.products[i].objectId
					//goodsId.out_objectId = this.out_products[i].objectId
					goodsId.reserve = num
					//goodsId.out_reserve = num1
					detailBills.goodsId = goodsId
					detailBills.num = Number(this.products[i].num)
					detailBills.type = -2

					billsObj.push(tempBills)
					detailObj.push(detailBills)
				}
				//插入单据
				Bmob.Query('Bills').saveAll(billsObj).then(function(res) {
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
						query.set("out_stock", out_stockId);
						query.set("master", poiID);
						query.set("stockIds", stockIds);
						query.set('goodsName', that.products[0].goodsName);
						query.set("createdTime", {
							"__type": "Date",
							"iso": that.nowDay
						}); // 操作单详情

						query.save().then(res => {
							let operationId = res.objectId;
							//console.log("添加操作历史记录成功", res);
							uni.hideLoading();
							//uni.removeStorageSync("customs"); //移除这个缓存
							uni.showToast({
								title: '产品调拨成功',
								icon: 'success',
								success: function() {
									for (let i = 0; i < that.products.length; i++) {
										let num = Number(that.products[i].reserve) - Number(that.products[i].num);

										console.log(Number(that.products[i].num),num)
										const query = Bmob.Query('Goods');
										query.set('reserve', num)
										query.set('stocktype', (num > that.products[i].warning_num) ? 1 : 0)
										query.set('id', that.products[i].objectId)
										query.save().then(res => {
											//console.log(res)
											
											if(i == that.products.length - 1){
												for (let j = 0; j < that.out_products.length; j++) {
													const query = Bmob.Query('Goods');
													query.get(that.out_products[j].objectId).then(res => {
													  console.log(res)
													  const query = Bmob.Query("Goods");
													  query.set('reserve', res.reserve + Number(that.out_products[j].shouldNum))
													  query.set('id', that.out_products[j].objectId)
													  query.save().then(res => {
													  	const query1 = Bmob.Query("Goods");
													  	query1.equalTo("goodsName", "==", that.out_products[j].goodsName);
													  	query1.equalTo("order", "==", 1);
													  	query1.statTo("sum", "reserve");
													  	query1.find().then(res => {
													  		console.log("dasds", res)
													  		let now_reserve = res[0]._sumReserve
													  		const query = Bmob.Query('Goods');
													  		query.set('reserve', now_reserve)
													  		query.set('stocktype', (now_reserve > that.out_products[j].warning_num) ? 1 : 0)
													  		query.set('id', that.out_products[j].header ? that.out_products[j].header.objectId : that.out_products[j].objectId)
													  		query.save().then(res => {
													  
													  		})
													  	})
													  
													  })
													}).catch(err => {
													  console.log(err)
													})
													
													
												}
											}


										}).catch(err => {
											console.log(err)
										})
									}


									that.button_disabled = false;
									uni.setStorageSync("is_option", true);
									//uni.removeStorageSync("warehouse");

									setTimeout(() => {
										uni.removeStorageSync("_warehouse")
										uni.removeStorageSync("out_warehouse")
										uni.removeStorageSync("category")
										uni.removeStorageSync("warehouse")
										common.log(uni.getStorageSync("user").nickName + "调拨了'" + that.products[0].goodsName + "'等" + that
											.products.length + "商品", -2, res.objectId);

										/*let params = {
											"data1": res.objectId,
											"data2": uni.getStorageSync("user").nickName + "调拨了'" + that.products[0].goodsName + "'等" + that.products
												.length + "商品",
											"data3": that.stock ? that.stock.stock_name : "未填写",
											"data4": res.createdAt,
											"remark": e.detail.value.input_beizhu ? e.detail.value.input_beizhu : "未填写",
											"url": "https://www.jimuzhou.com/h5/pages/report/EnteringHistory/detail/detail?id=" + res.objectId,
										};
										send_temp.send_temp(params);*/

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
		height: 100vh;
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
