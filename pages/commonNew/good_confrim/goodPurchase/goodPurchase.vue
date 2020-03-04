<template>
	<view>
		<view class='page'>
			<view style='line-height:70rpx;padding: 20rpx 20rpx 0;color: #3D3D3D;font-weight: bold;'>已选产品</view>
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
					<view class='pro_list' style='color:#3D3D3D'>
						<view v-if="user.rights&&user.rights.othercurrent[0] != '0'">实际进货价：￥0（X{{item.num}}））</view>
						<view v-else>实际进货价：￥{{item.modify_retailPrice}}（X{{item.num}}）</view>
						<view>入库数量：X{{item.num}}</view>
					</view>
					<view class='pro_list'>
						<view></view>
						<view>合计：￥0</view>
					</view>

				</view>
			</view>

			<form @submit="formSubmit" report-submit="true">

				<view style="margin: 30rpx 0;">
					<view style="margin:0 0 10rpx 20rpx;color: #3D3D3D;font-weight: bold;">采购明细</view>
					<view style="line-height: 70rpx;">

						<navigator class="display_flex_bet" hover-class="none" url="/pages/manage/producer/producer?type=producer" style="padding:10rpx 20rpx;border-bottom: 1rpx solid#F7F7F7;">
							<view style="width: 140rpx;">供应商<text style="color: #f30;">*</text></view>
							<view class="kaidan_rightinput display_flex" style="width: 100%;justify-content: flex-end;">
								<input placeholder="选择供货商" disabled="true" :value="producer.producer_name" style="text-align: right;margin-right: 20rpx;" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>
						<navigator class="display_flex_bet" hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose" style="padding: 10rpx 20rpx;border-bottom: 1rpx solid#F7F7F7;">
							<view style="width: 150rpx;" class="left_content">入库仓库<text style="color: #f30;">*</text></view>
							<view style="display: flex;align-items: center;">
								<input placeholder="请选择要入库的仓库" disabled="true" :value="stock.stock_name" style="text-align: right;margin-right: 20rpx;" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>
						<view v-if="user.rights&&user.rights.othercurrent[0] != '0'"></view>
						<view class="display_flex_bet" style="padding:10rpx 20rpx;border-bottom: 1rpx solid#F7F7F7;background: #fff;"
						 v-else>
							<view>是否赊账</view>
							<view class="kaidan_rightinput" style="text-align: right;">
								<switch :checked="wetherDebt" @change="changeDebtStatus" />
							</view>
						</view>
						<view class="display_flex_bet" style="padding:10rpx 20rpx;border-bottom: 1rpx solid#F7F7F7;background: #fff;"
						 v-if="wetherDebt">
							<view>实际付款</view>
							<view class="kaidan_rightinput"><input placeholder="输入实际付款金额" v-model="real_money" style="color: #d71345;text-align: right;margin-right: 20rpx;font-size: 30rpx;"
								 type="digit" /></view>
						</view>

						<view class="display_flex_bet" style="padding:10rpx 20rpx;border-bottom: 1rpx solid#F7F7F7;margin-top: 20rpx;">
							<view style="width: 140rpx;">采购时间</view>
							<picker mode="date" :value="nowDay" :end="nowDay" @change.stop="bindDateChange" @click.stop>
								<view style="display: flex;align-items: center;">
									<view style="margin-right: 20rpx;">{{nowDay.split(" ")[0]}}</view>
									<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
								</view>
							</picker>
						</view>
						<!--<view class="display_flex_bet" style="padding:10rpx 20rpx;border-bottom: 1rpx solid#F7F7F7;">
							<view>是否入库</view>
							<view class="kaidan_rightinput" style="text-align: right;">
								<switch :checked="canOpretion" @change="changeStatus" />
							</view>
						</view>-->

						<view class="display_flex_bet" style="padding:10rpx 20rpx;border-bottom: 1rpx solid#F7F7F7;">
							<view style="width: 140rpx;">备注</view>
							<input placeholder='请输入备注' class='beizhu_style' name="input_beizhu"></input>
						</view>
						<view style='background: #fff;padding:10rpx 20rpx;'>
							<view style="width: 100%;">
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
				</view>

				<view style="padding: 0 30rpx;margin-top: 60rpx;" class="bottomEle display_flex_bet">
					<view style="color: #333333;font-weight: bold;">
						<view v-if="user.rights&&user.rights.othercurrent[0] != '0'">合计：￥0</view>
						<view v-else>合计：￥{{real_money}}</view>
						<view>总数：{{total_num}}</view>
					</view>
					<view class="display_flex">
						<button class='confrim_button' :disabled='button_disabled' form-type="submit" data-type="1" style="background:#a1aa16 ;">采购</button>
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
				account: '', //结算账户
				button_disabled: false,
				beizhu_text: "",
				real_money: 0, //实际付款金额
				all_money: 0, //总价
				really_total_money: 0, //实际的总价
				producer: null, //制造商
				total_num: 0, //实际的总数量

				nowDay: common.getDay(0, true, true), //时间
				canOpretion: true,
				shop: '', //门店
				wetherDebt: false,
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
			that.stock = uni.getStorageSync("warehouse") ? uni.getStorageSync("warehouse")[0].stock : ''
		},
		methods: {
			changeDebtStatus(e) {
				if (e.detail.value == false) {
					this.real_money = Number(this.all_money.toFixed(2))
				}
				that.wetherDebt = e.detail.value
			},

			//选择时间
			bindDateChange(e) {
				that.nowDay = e.detail.value + " 00:00:00"
			},

			//是否立即入库
			changeStatus(e) {
				that.canOpretion = e.detail.value
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

			//表单提交
			formSubmit: function(e) {
				let identity = uni.getStorageSync("identity") // 身份识别标志

				//console.log(that.canOpretion)
				if (this.button_disabled) {
					return
				}
				//console.log(e)
				this.button_disabled = true;
				let fromid = e.detail.formId
				let extraType = 1 // 判断是采购还是入库

				uni.showLoading({
					title: "请勿退出..."
				});

				if (uni.getStorageSync("producer") == "" || uni.getStorageSync("producer") == undefined) {
					uni.showToast({
						icon: "none",
						title: "请选择供应商"
					});
					this.button_disabled = false;
					return;
				}

				if (that.stock == null || that.stock == "" || that.stock == undefined) {
					uni.showToast({
						icon: "none",
						title: "请选择入库仓库"
					});
					this.button_disabled = false;
					return
				}

				let billsObj = new Array();
				let detailObj = [];
				let stockIds = [];
				let stockNames = [];

				for (let i = 0; i < this.products.length; i++) {
					let num = Number(this.products[i].reserve) + this.products[i].num;

					//单据
					let detailBills = {}
					let tempBills = Bmob.Query('Bills');

					let pointer = Bmob.Pointer('_User')
					let user = pointer.set(uid)
					let pointer1 = Bmob.Pointer('Goods')
					let tempGoods_id = pointer1.set(this.products[i].header ? this.products[i].header.objectId : this.products[i].objectId);

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
					tempBills.set("status", that.canOpretion); // 操作单详情
					tempBills.set("createdTime", {
						"__type": "Date",
						"iso": that.nowDay
					}); // 操作单详情
					if (that.producer) {
						let producer = Bmob.Pointer('producers');
						let producerID = producer.set(that.producer.objectId);
						tempBills.set("producer", producerID);
					}

					let goodsId = {}
					if (that.stock && that.stock.objectId) {
						const pointer = Bmob.Pointer('stocks');
						let stockId = pointer.set(that.stock.objectId);
						tempBills.set("stock", stockId);
						detailBills.stock = that.stock.stock_name

						stockIds.push(that.stock.objectId)
						stockNames.push(that.stock.stock_name)
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
					detailBills.packingUnit = this.products[i].packingUnit
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
						//query.set("stock", stockId);
						query.set("stockIds", stockIds);
						query.set("stockNames", stockNames);
						query.set('goodsName', that.products[0].goodsName);
						query.set('real_money', Number(that.real_money));
						query.set('debt', that.all_money - Number(that.real_money));
						
						if (that.account) {
							let pointer4 = Bmob.Pointer('accounts')
							let accountId = pointer4.set(that.account.objectId)
							query.set("account", accountId);
							const accountQuery = Bmob.Query('accounts');
							accountQuery.get(that.account.objectId).then(res => {
								res.set('money', res.money - Number(that.real_money));
								res.save().then(res => {})
							})
						}
						query.set("createdTime", {
							"__type": "Date",
							"iso": that.nowDay
						});

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

						query.set("all_money", that.all_money);
						query.set("Images", that.Images);
						query.set("status", that.canOpretion); // 操作单详情
						query.save().then(res => {
							let operationId = res.objectId
							let createdAt = res.createdAt
							//console.log("添加操作历史记录成功", res);

							if (that.canOpretion) {
								common.enterAddGoodNumNew(that.products).then(result => { //添加产品数量
									uni.hideLoading();

									uni.setStorageSync("is_option", true);
									uni.removeStorageSync("_warehouse")
									uni.removeStorageSync("out_warehouse")
									uni.removeStorageSync("category")
									uni.removeStorageSync("warehouse")
									uni.showToast({
										title: "产品采购成功"
									})
									setTimeout(function() {
										that.button_disabled = false;
										common.log(uni.getStorageSync("user").nickName + "采购了'" + that.products[0].goodsName + "'等" + that.products
											.length + "商品", 1, operationId);
										uni.navigateBack({
											delta: 2
										});
									}, 500)
								})
							} else {
								uni.hideLoading();
								uni.setStorageSync("is_option", true);
								uni.removeStorageSync("_warehouse")
								uni.removeStorageSync("out_warehouse")
								uni.removeStorageSync("category")
								uni.removeStorageSync("warehouse")
								uni.showToast({
									title: "产品采购成功"
								})
								setTimeout(function() {
									that.button_disabled = false;
									common.log(uni.getStorageSync("user").nickName + "采购了'" + that.products[0].goodsName + "'等" + that.products
										.length + "商品，还未入库", 11, operationId);

									uni.navigateBack({
										delta: 2
									});
								}, 500)

							}

						})

					},
					function(error) {
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

	.display_flex_bet {
		background: #fff;
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
		max-height: 100rpx;
		padding: 10rpx 0;
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
