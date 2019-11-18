<template>
	<view>
		<view class='page'>
			<view style='line-height:70rpx;padding: 20rpx 20rpx 0;'>已选产品</view>
			<view>
				<view v-for="(item,index) in products" :key="index" class='pro_listitem'>
					<view class='pro_list' style='color:#3D3D3D'>
						<view style="width: calc(100% - 260rpx);">产品：{{item.goodsName}}</view>
						<view v-if="user.rights&&othercurrent.indexOf('1') ==-1">期初进货价：￥0</view>
						<view v-else>期初进货价：￥{{item.costPrice}}</view>
					</view>
					<view v-if="item.selected_model">
						<view v-for="(model,index) in item.selected_model" :key="index" class="display_flex_bet" v-if="model.num > 0">
							<view style="font-size: 24rpx;color: #999;" v-if="model">{{model.custom1.value + model.custom2.value + model.custom3.value + model.custom4.value}}</view>
							<view style="font-size: 24rpx;color: #f30;" v-if="model">{{model.num}}</view>
						</view>
					</view>
					<view class='pro_list' v-if="user.rights&&user.rights.othercurrent[0] != '0'">
						<view>实际进货价：￥0（X{{item.num}}）</view>
						<view>合计：￥0</view>
					</view>
					<view class='pro_list' v-else>
						<view>实际进货价：￥{{item.modify_retailPrice}}（X{{item.num}}）</view>
						<view>合计：￥{{item.modify_retailPrice*item.num}}</view>
					</view>
					<view v-if="item.stocks && item.stocks.stock_name" style="font-size: 24rpx;color:#2ca879;">存放仓库:{{item.stocks.stock_name}}</view>

				</view>
			</view>

			<form @submit="formSubmit" report-submit="true">

				<view style="margin: 30rpx 0;">
					<view style="margin:0 0 10rpx 10rpx;">开单明细（用于记录是否有无欠款）</view>
					<view class="kaidan_detail" style="line-height: 70rpx;">

						<navigator class="display_flex" hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose">
							<view style="width: 140rpx;">选择仓库</text></view>
							<view class="kaidan_rightinput"><input placeholder="选择仓库" disabled="true" :value="stock.stock_name" /></view>
						</navigator>
						<navigator class="display_flex" hover-class="none" url="/pages/manage/shops/shops?type=choose" style="padding: 10rpx 0;">
							<view style="width: 140rpx;">选择门店</text></view>
							<view class="kaidan_rightinput"><input placeholder="选择门店" disabled="true" :value="shop_name" /></view>
						</navigator>

						<navigator class="display_flex" hover-class="none" url="/pages/manage/custom/custom?type=producer" style="padding: 10rpx 0;">
							<view style="width: 140rpx;">供应商姓名</view>
							<view class="kaidan_rightinput"><input placeholder="选择供货商" disabled="true" :value="producer.producer_name" /></view>
						</navigator>

						<view class="display_flex" style="padding: 10rpx 0;">
							<view style="width: 140rpx;">发货方式</view>
							<picker class="kaidan_rightinput" :range="pickerTypes" range-key="desc" @change="select_outType">
								<input placeholder="请选择发货方式" v-model="outType.desc" disabled="true" />
							</picker>
						</view>
						<view class="display_flex" style="padding: 10rpx 0;" v-if="outType.type == 2 || outType.type == 3">
							<view style="width: 140rpx;">快递单号</view>
							<view class="kaidan_rightinput" :range="pickerTypes" range-key="desc" @change="select_outType">
								<input placeholder="请输入快递单号" v-model="expressNum" />
								<fa-icon type="clone" size="16" color="#426ab3" @click="scan_code"></fa-icon>
							</view>
						</view>
						<view v-if="user.rights&&user.rights.othercurrent[0] != '0'"></view>
						<view class="display_flex" style="padding: 10rpx 0;" v-else>
							<view>实际付款<text style="font-size: 20rpx;color: #CCCCCC;">（可修改）</text></view>
							<view class="kaidan_rightinput"><input placeholder="输入实际付款金额" v-model="real_money" style="color: #d71345;" type="digit" /></view>
						</view>

					</view>
				</view>

				<view style='margin-top:20px'>
					<input placeholder='请输入备注' class='beizhu_style' name="input_beizhu"></input>
				</view>

				<view style='margin-top:20px;background: #fff;padding: 10rpx;'>
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

				<view style="padding: 0 30rpx;margin-top: 60rpx;" class="bottomEle display_flex_bet">
					<view v-if="user.rights&&user.rights.othercurrent[0] != '0'">
						<text>合计：￥0</text>
					</view>
					<view v-else>
						<text>合计：￥{{real_money}}</text>
					</view>
					<view class="display_flex">
						<!-- #ifdef MP-WEIXIN -->
						<button class='confrim_button' :disabled='button_disabled' form-type="submit" data-type="1" style="background:#a1aa16 ;"
						 v-if="othercurrent.indexOf('1') !=-1|| identity==1">采购</button>
						<button class='confrim_button' :disabled='button_disabled' form-type="submit" data-type="2" value="2">入库</button>
						<!-- #endif -->
						<!-- #ifdef APP-PLUS ||H5 -->
						<button class='confrim_button' :disabled='button_disabled' form-type="submit" data-type="2" value="2">入库</button>
						<!-- #endif -->

					</view>

				</view>
			</form>

		</view>

	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from '@/utils/common.js';
	import _goods from '@/utils/goods.js';
	import send_temp from '@/utils/send_temp.js';
	import print from '@/utils/print.js';

	let uid;
	let that;
	let shopId;
	let shop; //门店

	export default {
		data() {
			return {
				user: uni.getStorageSync("user"),
				identity: uni.getStorageSync("identity"),
				othercurrent: '',
				Images: [], //上传凭证图
				stock: '', //仓库
				shop_name: '',
				products: null,
				button_disabled: false,
				beizhu_text: "",
				real_money: 0, //实际付款金额
				all_money: 0, //总价
				really_total_money: 0, //实际的总价
				producer: null, //制造商
				outType: '', //发货方式
				pickerTypes: [{
						desc: "自提",
						type: 1
					},
					{
						desc: "快递",
						type: 2
					},
					{
						desc: "物流",
						type: 3
					},
					{
						desc: "送货上门",
						type: 4
					},
				],
				expressNum: '', //快递单号
				total_num: 0, //实际的总数量
			}
		},
		onLoad() {
			that = this;
			uid = uni.getStorageSync("uid");
			this.products = uni.getStorageSync("products");
			for (let i = 0; i < this.products.length; i++) {
				this.all_money = Number((this.products[i].total_money + this.all_money).toFixed(2))
				this.really_total_money = Number((this.products[i].really_total_money + this.really_total_money).toFixed(2))
				this.total_num += Number(this.products[i].num)
			}
			this.real_money = Number(this.all_money.toFixed(2))

			if (that.user.rights && that.user.rights.othercurrent) {
				that.othercurrent = that.user.rights.othercurrent
			}
		},

		onShow() {
			that.producer = uni.getStorageSync("producer")
			shop = uni.getStorageSync("shop");

			if (shop) {
				that.shop_name = shop.name

				const pointer = Bmob.Pointer('shops');
				shopId = pointer.set(shop.objectId);
			}

			that.stock = uni.getStorageSync("warehouse") ? uni.getStorageSync("warehouse")[0].stock : ''
		},
		methods: {

			//扫码操作
			scan_code() {
				// #ifdef H5
				this.$wechat.scanQRCode().then(res => {
					that.expressNum = res.result
				})
				// #endif

				// #ifdef MP-WEIXIN || APP-PLUS
				uni.scanCode({
					onlyFromCamera: true,
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						that.expressNum = res.result
					}
				});
				// #endif
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

			//选择物流方式
			select_outType(e) {
				//console.log(e)
				that.outType = that.pickerTypes[e.detail.value]
				if (that.outType.type != 2 || that.outType.type != 3) {
					that.expressNum = ''
				}
			},

			//表单提交
			formSubmit: function(e) {
				let identity = uni.getStorageSync("identity") // 身份识别标志

				//console.log(e)
				this.button_disabled = true;
				let fromid = e.detail.formId
				// #ifdef MP-WEIXIN
				let extraType = Number(e.detail.target.dataset.type) // 判断是采购还是入库  2是入库  1是采购
				// #endif
				// #ifdef H5 || APP-PLUS
				let extraType = 2 // 判断是采购还是入库
				// #endif
				uni.showLoading({
					title: "上传中..."
				});


				let billsObj = new Array();
				let detailObj = [];
				for (let i = 0; i < this.products.length; i++) {
					let num = Number(this.products[i].reserve) + this.products[i].num;

					//单据
					let detailBills = {}
					let tempBills = Bmob.Query('Bills');

					let pointer = Bmob.Pointer('_User')
					let user = pointer.set(uid)
					let pointer1 = Bmob.Pointer('Goods')
					let tempGoods_id = pointer1.set(this.products[i].objectId);

					let masterId = uni.getStorageSync("masterId");
					let pointer2 = Bmob.Pointer('_User')
					let poiID2 = pointer2.set(masterId);

					tempBills.set('goodsName', this.products[i].goodsName);
					tempBills.set('retailPrice', (this.products[i].modify_retailPrice).toString());
					tempBills.set('num', Number(this.products[i].num));
					tempBills.set('total_money', this.products[i].total_money);
					tempBills.set('really_total_money', this.products[i].really_total_money);
					tempBills.set('goodsId', tempGoods_id);
					tempBills.set('userId', user);
					tempBills.set("opreater", poiID2);
					tempBills.set('type', 1);
					tempBills.set('extra_type', extraType);
					(shop) ? tempBills.set("shop", shopId): '';

					if (identity == 1) {
						tempBills.set("status", true); // 操作单详情
					} else if (identity == 2) {
						tempBills.set("status", (extraType == 2) ? true : false); // 操作单详情
					}

					let goodsId = {}

					if (that.stock && that.stock.objectId) {
						const pointer = Bmob.Pointer('stocks');
						let stockId = pointer.set(that.stock.objectId);
						tempBills.set("stock", stockId);
						detailBills.stock = that.stock.stock_name
					} else {
						if (this.products[i].stocks && this.products[i].stocks.objectId) {
							const pointer = Bmob.Pointer('stocks');
							let stockId = pointer.set(this.products[i].stocks.objectId);
							tempBills.set("stock", stockId);
							detailBills.stock = this.products[i].stocks.stock_name
						}
					}

					detailBills.goodsName = this.products[i].goodsName
					detailBills.modify_retailPrice = (this.products[i].modify_retailPrice).toString()
					detailBills.retailPrice = this.products[i].retailPrice
					detailBills.total_money = this.products[i].total_money
					goodsId.costPrice = this.products[i].costPrice
					goodsId.retailPrice = this.products[i].retailPrice
					goodsId.objectId = this.products[i].objectId
					goodsId.reserve = num
					if (this.products[i].selectd_model) {
						goodsId.selected_model = this.products[i].selected_model
						goodsId.models = this.products[i].models
					}
					detailBills.goodsId = goodsId
					detailBills.num = this.products[i].num

					detailBills.type = 1

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
						query.set("beizhu", e.detail.value.input_beizhu);
						query.set("detail", detailObj);
						query.set("real_num", that.total_num);
						query.set("type", 1);
						query.set("extra_type", extraType);
						query.set("bills", bills);
						query.set("opreater", poiID1);
						query.set("master", poiID);
						if (that.stock && that.stock.objectId) {
							const pointer = Bmob.Pointer('stocks');
							let stockId = pointer.set(that.stock.objectId);
							query.set("stock", stockId);
						}
						query.set('goodsName', that.products[0].goodsName);
						query.set('real_money', Number(that.real_money));
						query.set('debt', that.all_money - Number(that.real_money));

						if (that.producer) {
							let producer = Bmob.Pointer('producers');
							let producerID = producer.set(that.producer.objectId);
							query.set("producer", producerID);

							//如果客户有欠款
							if ((that.all_money - Number(that.real_money)) > 0) {
								let query = Bmob.Query('producers');
								query.get(that.producer.objectId).then(res => {
									var debt = (res.debt == null) ? 0 : res.debt;
									debt = debt + (that.all_money - Number(that.real_money));
									//console.log(debt);
									let query = Bmob.Query('producers');
									query.get(that.producer.objectId).then(res => {
										res.set('debt', debt)
										res.save()
									})
								})
							}
						}

						if (that.outType) {
							query.set("typeDesc", that.outType.desc);
							query.set("expressNum", that.expressNum);
						}
						query.set("all_money", that.all_money);
						query.set("Images", that.Images);
						if (identity == 1) {
							query.set("status", true); // 操作单详情
						} else if (identity == 2) {
							query.set("status", (extraType == 2) ? true : false); // 操作单详情
						}
						query.save().then(res => {
							let operationId = res.objectId
							//console.log("添加操作历史记录成功", res);
							uni.hideLoading();
							if (extraType == 2) { // 执行入库操作
								uni.showToast({
									title: '产品入库成功',
									icon: 'success',
									duration: 1000,
									complete: function() {
										common.enterAddGoodNum(that.products).then(result => { //添加产品数量
											setTimeout(() => {

												common.log(uni.getStorageSync("user").nickName + "入库了'" + that.products[0].goodsName + "'等" +
													that.products
													.length + "商品", 1, operationId);

												let params = {
													"frist": uni.getStorageSync("user").nickName + "入库了'" + that.products[0].goodsName + "'等" +
														that.products
														.length + "商品",
													"data1": res.createdAt,
													"data2": that.stock ? that.stock.stock_name : "未填写",
													"remark": e.detail.value.input_beizhu ? e.detail.value.input_beizhu : "未填写",
													"url": "https://www.jimuzhou.com/h5/pages/report/EnteringHistory/detail/detail?id=" +
														operationId,
												};
												send_temp.send_in(params);

												let params1 = {
													"keyword1": {
														"value": that.products[0].goodsName + "'等",
														"color": "#173177"
													},
													"keyword2": {
														"value": e.detail.value.input_beizhu ? e.detail.value.input_beizhu : "未填写",
													},
													"keyword3": {
														"value": res.createdAt
													},
													"keyword4": {
														"value": uni.getStorageSync("user").nickName,
													}
												}
												params1.form_Id = fromid
												params1.id = operationId
												send_temp.send_in_mini(params1);

												//自动打印
												if (uni.getStorageSync("setting").auto_print) {
													print.autoPrint(operationId);
												}

												that.button_disabled = false;
												uni.setStorageSync("is_option", true);
												uni.removeStorageSync("_warehouse")
												uni.removeStorageSync("out_warehouse")
												uni.removeStorageSync("category")
												uni.removeStorageSync("warehouse")
												setTimeout(function() {
													uni.navigateBack({
														delta: 2
													});
												}, 500)
											}, 500)
										})

									}
								})
							} else if (extraType == 1) { // 执行采购操作
								uni.showToast({
									title: '产品采购成功',
									icon: 'success',
									duration: 1000,
									complete: function() {
										//common.enterAddGoodNum(that.products) //添加产品数量
										if (identity == 1) {
											common.enterAddGoodNum(that.products).then(result => { //添加产品数量
												setTimeout(() => {

													common.log(uni.getStorageSync("user").nickName + "销售了'" + that.products[0].goodsName +
														"'等" +
														that.products
														.length + "商品", 1, operationId);

													//自动打印
													/*if (uni.getStorageSync("setting").auto_print) {
														print.autoPrint(operationId);
													}*/

													that.button_disabled = false;
													uni.setStorageSync("is_option", true);
													uni.removeStorageSync("_warehouse")
													uni.removeStorageSync("out_warehouse")
													uni.removeStorageSync("category")
													uni.removeStorageSync("warehouse")
													setTimeout(function() {
														uni.navigateBack({
															delta: 2
														});
													}, 500)
												}, 500)

											})
										} else {
											setTimeout(() => {
												common.log(uni.getStorageSync("user").nickName + "采购了'" + that.products[0].goodsName + "'等" +
													that
													.products
													.length + "商品", 1, operationId);

												let params = {
													"frist": uni.getStorageSync("user").nickName + "采购了'" + that.products[0].goodsName + "'等" +
														that
														.products
														.length + "商品",
													"data1": operationId,
													"data2": uni.getStorageSync("user").nickName,
													"data3": "未审核",
													"data4": res.createdAt,
													"remark": e.detail.value.input_beizhu ? e.detail.value.input_beizhu : "未填写",
													"url": "https://www.jimuzhou.com/h5/pages/report/EnteringHistory/detail/detail?id=" +
														operationId,
												};
												send_temp.send_in_noconfrim(params);

												/*let params1 = {
													"keyword1": {
														"value": that.products[0].goodsName + "'等",
														"color": "#173177"
													},
													"keyword2": {
														"value": e.detail.value.input_beizhu ? e.detail.value.input_beizhu : "未填写",
													},
													"keyword3": {
														"value": res.createdAt
													},
													"keyword4": {
														"value": uni.getStorageSync("user").nickName,
													}
												}
												params1.form_Id = fromid
												params1.id = operationId
												send_temp.send_in_mini(params1);*/

												//自动打印
												/*if (uni.getStorageSync("setting").auto_print) {
													print.autoPrint(operationId);
												}*/

												that.button_disabled = false;
												uni.setStorageSync("is_option", true);
												uni.removeStorageSync("_warehouse")
												uni.removeStorageSync("out_warehouse")
												uni.removeStorageSync("category")
												uni.removeStorageSync("warehouse")
												setTimeout(function() {
													uni.navigateBack({
														delta: 2
													});
												}, 500)
											}, 500)
										}

									}
								})
							}
						})

					},
					function(error) {
						// 批量新增异常处理
						console.log("异常处理");
					});
			},


			//判断此商品是否在此仓库中
			can_addGoods() {
				return new Promise((resolve, reject) => {
					let products = uni.getStorageSync("products");
					let warehouse = uni.getStorageSync("warehouse")
					if (warehouse) {
						for (let item of products) {
							if (item.stocks.stock_name == '' || item.stocks.stock_name == undefined || item.stocks.stock_name !=
								warehouse[0].stock.stock_name) {
								uni.showModal({
									title: "'" + item.goodsName + "'" + '没有关联到调出仓库',
									content: "是否将它关联到此仓库",
									showCancel: true,
									success: res => {
										console.log(res)
										if (res.confirm) {
											resolve([true, item])
										} else {
											resolve([false])
										}
									},
									fail: () => {},
								});
								return;
							} else {
								resolve([false])
							}
						}
					} else {
						resolve([false])
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
		height: calc(100vh - 90rpx);
		overflow: scroll;
	}

	.bottomEle {
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
		width: calc(100% - 40rpx);
		background-color: #fff;
		padding: 20rpx;
		font-size: 32rpx;
		max-height: 100rpx;
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
