<template>
	<view>
		<view class='page'>
			<view style='line-height:70rpx;padding: 20rpx 20rpx 0;color: #3D3D3D;font-weight: bold;'>已选产品</view>
			<view>
				<view v-for="(item,index) in products" :key="index" class='pro_listitem'>
					<view class='pro_list' style='color:#333'>
						<view style="width: calc(100% - 200rpx);">产品：{{item.goodsName}}</view>
						<view>数量：X{{item.num}}</view>
					</view>

					<view v-if="item.selected_model">
						<view v-for="(model,index) in item.selected_model" :key="index" class="display_flex_bet" v-if="model.num > 0">
							<view style="font-size: 24rpx;color: #999;" v-if="model">{{model.custom1.value + model.custom2.value + model.custom3.value + model.custom4.value}}</view>
							<view style="font-size: 24rpx;color: #f30;" v-if="model">{{model.num}}</view>
						</view>
					</view>
					<view>
						<view>实际零售价：<text style="color: #f30;">￥{{item.modify_retailPrice}}</text></view>
					</view>
				</view>
			</view>

			<form @submit="formSubmit" report-submit="true">

				<view style="margin: 30rpx 0 0;">
					<view style="margin:0 0 10rpx 20rpx;color: #3D3D3D;font-weight: bold;">出库明细</view>
					<view class="kaidan_detail" style="line-height: 70rpx;">
						<navigator class="display_flex_bet" hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
							<view style="width: 150rpx;" class="left_content">出库仓库<text style="color: #f30;">*</text></view>
							<view style="display: flex;align-items: center;">
								<input placeholder="请选择要出库的仓库" disabled="true" :value="stock.stock_name" style="text-align: right;margin-right: 20rpx;" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>
						<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;" @click="isChooseStockClass = true">
							<view style="width: 150rpx;" class="left_content">出库类别<text style="color: #f30;">*</text></view>
							<view style="display: flex;align-items: center;">
								<input placeholder="请选择要出库类别" disabled="true" :value="stockClass" style="text-align: right;margin-right: 20rpx;" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</view>
						<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
							<view style="width: 140rpx;">出库时间</view>
							<picker mode="date" :value="nowDay" :end="nowDay" @change.stop="bindDateChange" @click.stop>
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

				<view style="padding: 0 30rpx;" class="bottomEle display_flex_bet">
					<view>
						<view>合计：￥{{all_money}}</view>
						<view>总数：{{total_num}}</view>
					</view>
					<view class="display_flex">
						<button class='confrim_button' :disabled='button_disabled' form-type="submit" data-type="2">出库</button>
					</view>

				</view>
			</form>

		</view>

		<view style="position: fixed;top: 0;left: 0;z-index: 10;width: calc(100% - 60rpx);height: 100vh;background: #fff;line-height: 60rpx;padding:20rpx 30rpx;"
		 v-if="isChooseStockClass">
			<view style="text-align: right;" @tap="isChooseStockClass = false">
				<fa-icon type="times-circle-o" size="20" color="#426ab3"></fa-icon>
			</view>
			<view class="borderBot stockClassItem" @click="chooseStockClass('借用出库')">借用出库</view>
			<view class="borderBot stockClassItem" @click="chooseStockClass('领料出库')">领料出库</view>
			<view class="borderBot stockClassItem" @click="chooseStockClass('零售出库')">零售出库</view>
			<view class="borderBot stockClassItem" @click="chooseStockClass('盘点出库')">盘点出库</view>
			<view class="borderBot stockClassItem" @click="chooseStockClass('报损出库')">报损出库</view>
			<view class="borderBot stockClassItem" @click="chooseStockClass('调拨出库')">调拨出库</view>
			<view class="borderBot stockClassItem" @click="chooseStockClass('网点发货出库')">网点发货出库</view>
			<view class="borderBot stockClassItem" @click="chooseStockClass('加工成品出库')">加工成品出库</view>
			<view class="borderBot stockClassItem" @click="chooseStockClass('委外出库')">委外出库</view>
			<view class="borderBot stockClassItem" @click="chooseStockClass('返修出库')">返修出库</view>
			<view class="borderBot stockClassItem" @click="chooseStockClass('批发出库')">批发出库</view>
			<view class="borderBot stockClassItem" @click="chooseStockClass('归还出库')">归还出库</view>
			<view class="borderBot stockClassItem" @click="chooseStockClass('其他出库')">其他出库</view>
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
				products: null,
				button_disabled: false,
				beizhu_text: "",
				real_money: 0, //实际付款金额
				really_total_money: 0, //实际的总价
				all_money: 0, //总价
				total_num: 0, //实际的总数量
				nowDay: common.getDay(0, true), //入库时间

				stockClass: "销售出库",
				isChooseStockClass: false,
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
		},

		onShow() {
			that.stock = uni.getStorageSync("warehouse") ? uni.getStorageSync("warehouse")[0].stock : ''
		},

		methods: {
			//选择时间
			bindDateChange(e) {
				that.nowDay = e.detail.value + " 00:00:00"
			},

			chooseStockClass(desc) {
				that.stockClass = desc
				that.isChooseStockClass = false
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
							console.log(res);
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
				if (this.button_disabled) {
					return
				}

				if (that.stock == null || that.stock == "" || that.stock == undefined) {
					uni.showToast({
						icon: "none",
						title: "请选择出库仓库"
					});
					return
				}

				let identity = uni.getStorageSync("identity") // 身份识别标志
				this.button_disabled = true;
				let extraType = 2 // 判断是销售还是出库
				let fromid = e.detail.formId

				uni.showLoading({
					title: "请勿退出..."
				});

				let billsObj = new Array();
				let detailObj = [];
				let stockIds = [];
				let stockNames = [];
				let goodsName = [];
				for (let i = 0; i < this.products.length; i++) {
					let num = Number(this.products[i].reserve) - this.products[i].num;
					goodsName.push(this.products[i].goodsName)

					//单据
					let tempBills = Bmob.Query('Bills');
					let detailBills = {}

					let pointer = Bmob.Pointer('_User')
					let user = pointer.set(uid)
					let pointer2 = Bmob.Pointer('_User')
					let operater = pointer2.set(uni.getStorageSync("masterId"))
					let pointer1 = Bmob.Pointer('Goods')
					let tempGoods_id = pointer1.set(this.products[i].header ? this.products[i].header.objectId : this.products[i].objectId);

					if (uni.getStorageSync("custom")) {
						let pointer3 = Bmob.Pointer('customs')
						let custom = pointer3.set(uni.getStorageSync("custom").objectId)
						tempBills.set('custom', custom);
					}
					tempBills.set('goodsName', this.products[i].goodsName);
					tempBills.set('retailPrice', (this.products[i].modify_retailPrice).toString());
					tempBills.set('num', Number(this.products[i].num));
					tempBills.set('total_money', this.products[i].total_money);
					tempBills.set('really_total_money', this.products[i].really_total_money);
					tempBills.set('goodsId', tempGoods_id);
					tempBills.set('userId', user);
					tempBills.set('type', -1);
					tempBills.set('extra_type', extraType);
					tempBills.set('opreater', operater);
					tempBills.set("status", true); // 操作单详情
					tempBills.set("createdTime", {
						"__type": "Date",
						"iso": that.nowDay
					}); // 操作单详情

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
					detailBills.type = -1
					detailBills.num = this.products[i].num
					detailBills.warning_num = this.products[i].warning_num
					detailBills.packingUnit = this.products[i].packingUnit

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
						query.set("type", -1);
						query.set('extra_type', extraType);
						query.set("opreater", poiID1);
						query.set("stockClass", that.stockClass);
						query.set("stockIds", stockIds); //仓库Id的数组
						query.set("stockNames", stockNames); //仓库名字的数组
						query.set("master", poiID);
						query.set("real_num", that.total_num);
						query.set('goodsName', goodsName.join(","));
						query.set('real_money', Number(that.real_money));
						query.set('debt', that.all_money - Number(that.real_money));

						query.set("all_money", that.all_money);
						query.set("Images", that.Images);
						query.set("status", true); // 操作单详情
						query.set("createdTime", {
							"__type": "Date",
							"iso": that.nowDay
						}); // 操作单详情
						query.save().then(res => {
							//console.log("添加操作历史记录成功", res);
							let operationId = res.objectId;
							let createdAt = res.createdAt;
							common.outRedGoodNumNew(that.products).then(result => { //减少产品数量
								uni.showToast({
									title: "出库成功"
								})

								uni.hideLoading();
								uni.setStorageSync("is_option", true);
								uni.removeStorageSync("_warehouse")
								uni.removeStorageSync("out_warehouse")
								uni.removeStorageSync("category")
								uni.removeStorageSync("warehouse")

								setTimeout(() => {
									that.button_disabled = false;
									common.log(uni.getStorageSync("user").nickName + "出库了'" + that.products[0].goodsName + "'等" + that.products
										.length + "商品", -1, operationId);
									uni.navigateBack({
										delta: 2
									});
								}, 500)
							})
						})
					},
					function(error) {
						// 批量新增异常处理
						console.log("异常处理");
					});
			},

			sendTemp() {

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

	.stockClassItem {
		line-height: 80rpx;
		font-weight: bold;
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
		padding: 0 50rpx;
		background: #1651aa;
		color: #fff;
		font-weight: bold;
		font-size: 32rpx;
		border-radius: unset;
	}
</style>
