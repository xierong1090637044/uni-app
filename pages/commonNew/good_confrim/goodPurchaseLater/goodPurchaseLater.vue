<template>
	<view>
		<view class='page'>
			<view style='line-height:70rpx;padding: 20rpx 20rpx 0;color: #3D3D3D;font-weight: bold;'>已选产品</view>
			<view>
				<view v-for="(item,index) in products" :key="index" class='pro_listitem'>
					<view class='pro_list'>
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
				</view>
			</view>

			<form @submit="formSubmit" report-submit="true">

				<view style="margin: 30rpx 0 0;">
					<view style="margin:0 0 10rpx 20rpx;color: #3D3D3D;font-weight: bold;">订单明细</view>
					<view style="line-height: 70rpx;">

						<navigator class="display_flex_bet orderListItemBorder borderBot" hover-class="none" url="/pages/manage/producer/producer?type=producer">
							<view style="width: 140rpx;">供应商<text style="color: #f30;">*</text></view>
							<view class="kaidan_rightinput display_flex">
								<input placeholder="选择供应商" disabled="true" :value="producer.producer_name" style="text-align: right;margin-right: 20rpx;" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>
						<view class="display_flex_bet orderListItemBorder borderBot">
							<view style="width: 140rpx;">预收款</view>
							<input placeholder='请输入预收款' v-model="haveGetMoney" style="text-align: right;" type="digit"></input>
						</view>
						<view class="display_flex_bet orderListItemBorder borderBot">
							<view style="width: 140rpx;">其他费用</view>
							<input placeholder='可输入其他费用' @input="inputOtherMoney" style="text-align: right;" type="digit"></input>
						</view>

						<view class="display_flex_bet orderListItemBorder borderBot" style="margin-top: 20rpx;">
							<view style="width: 140rpx;">订货时间</view>
							<picker mode="date" :value="setDay" :end="setDay" @change.stop="bindDateChange" @click.stop>
								<view style="display: flex;align-items: center;">
									<view style="margin-right: 20rpx;">{{setDay.split(" ")[0]}}</view>
									<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
								</view>
							</picker>
						</view>
						<view class="display_flex_bet orderListItemBorder borderBot">
							<view style="width: 140rpx;">收货时间</view>
							<picker mode="date" :value="giveDay" :end="giveDay" @change.stop="bindGiveDateChange" @click.stop>
								<view style="display: flex;align-items: center;">
									<view style="margin-right: 20rpx;">{{giveDay.split(" ")[0]}}</view>
									<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
								</view>
							</picker>
						</view>
						<view class="display_flex_bet orderListItemBorder borderBot">
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
					<view style="color: #333333;font-weight: bold;">
						<view>合计：￥{{real_money}}</view>
						<view>总数：{{total_num}}</view>
					</view>
					<view class="display_flex">
						<button class='confrim_button' :disabled='button_disabled' form-type="submit" data-type="1" style="background:#a1aa16 ;">采购订单</button>
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
	let shopId;
	let shop; //门店

	export default {
		data() {
			return {
				user: uni.getStorageSync("user"),
				identity: uni.getStorageSync("identity"),
				othercurrent: '',
				Images: [], //上传凭证图
				stock: '', //店仓
				shop_name: '',
				products: null,
				button_disabled: false,
				beizhu_text: "",
				real_money: 0, //实际付款金额
				all_money: 0, //总价
				allCostPrice: 0, //成本总额
				really_total_money: 0,
				producer: null, //制造商
				account: '', //收款账户
				outType: '', //发货方式
				discount: '', //会员率
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
				wetherDebt: false, //是否欠款

				nowDay: common.getDay(0, true), //时间
				setDay: common.getDay(0, true, true), //订货时间
				giveDay: common.getDay(1, true, true), //交货时间
				otherMoney: 0, //其他费用
				haveGetMoney: 0, //预收款
			}
		},
		onLoad() {
			that = this;
			uid = uni.getStorageSync("uid");
			this.products = uni.getStorageSync("products");
			uni.setNavigationBarTitle({
				title: "销售订单"
			})

			if (that.user.rights && that.user.rights.othercurrent) {
				that.othercurrent = that.user.rights.othercurrent
			}
		},
		onShow() {
			this.really_total_money = 0
			this.all_money = 0
			this.real_money = 0
			this.total_num = 0
			that.allCostPrice = 0

			that.producer = uni.getStorageSync("producer")
			that.account = uni.getStorageSync("account")

			for (let i = 0; i < this.products.length; i++) {
				this.all_money = Number((this.products[i].total_money + this.all_money).toFixed(2))
				this.really_total_money = Number((this.products[i].really_total_money + this.really_total_money).toFixed(2))
				this.total_num += Number(this.products[i].num)
				that.allCostPrice = that.allCostPrice + (Number(that.products[i].num) * Number(that.products[i].costPrice))
			}
			this.real_money = Number(this.all_money.toFixed(2))
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
				that.setDay = e.detail.value + " 00:00:00"
			},

			bindGiveDateChange(e) {
				that.giveDay = e.detail.value + " 00:00:00"
			},

			inputOtherMoney(e) {
				that.real_money = Number(that.all_money.toFixed(2))
				that.otherMoney = Number(e.detail.value)
				that.real_money = that.real_money + Number(e.detail.value)
			},

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
				//console.log(e)
				//console.log(res)
				let identity = uni.getStorageSync("identity") // 身份识别标志
				that.button_disabled = true;
				let fromid = e.detail.formId
				let extraType = 3 // 判断是销售还是出库

				uni.showLoading({
					title: "上传中..."
				});

				if (uni.getStorageSync("producer") == "" || uni.getStorageSync("producer") == undefined) {
					uni.showToast({
						icon: "none",
						title: "请选择供应商"
					});
					this.button_disabled = false;
					return;
				}

				let billsObj = new Array();
				let detailObj = [];
				
				let pointer3 = Bmob.Pointer('producers')
				let producer = pointer3.set(uni.getStorageSync("producer").objectId)
				
				let bills = []
				
				let pointer = Bmob.Pointer('_User')
				let poiID = pointer.set(uid);

				let masterId = uni.getStorageSync("masterId");
				let pointer1 = Bmob.Pointer('_User')
				let poiID1 = pointer1.set(masterId);

				let query = Bmob.Query('order_opreations');
				query.set("detail", detailObj);
				query.set("bills", bills);
				query.set("beizhu", e.detail.value.input_beizhu);
				query.set("type", -4);
				query.set('extra_type', extraType);
				query.set("opreater", poiID1);
				query.set("master", poiID);
				query.set("real_num", that.total_num);
				query.set('goodsName', that.products[0].goodsName);
				
				query.set("allCostPrice", that.allCostPrice);//总成本金额
				query.set("all_money", that.all_money);//总销售额
				query.set('otherMoney', Number(that.otherMoney));//其他金额
				query.set('haveGetMoney', Number(that.haveGetMoney));//预付金额
				query.set('real_money', Number(that.real_money));//最后实际收款
				query.set("recordType", "new"); //"new"代表新版的销售记录
				query.set("giveDay", {
					"__type": "Date",
					"iso": that.giveDay
				});
				query.set("setDay", {
					"__type": "Date",
					"iso": that.setDay
				});
				query.set("createdTime", {
					"__type": "Date",
					"iso": that.nowDay
				});
				query.set("producer", producer);
				query.set("Images", that.Images);
				query.set("status", false); // 操作单详情
				query.set("opreatGood",that.products);//操作产品
				query.save().then(res => {
					//console.log("添加操作历史记录成功", res);
					let operationId = res.objectId;
					uni.showToast({
						title: '生成采购订单',
						icon: 'success',
						duration: 500,
						success: function() {
							setTimeout(() => {
								uni.hideLoading();
								uni.removeStorageSync("producers"); //移除这个缓存
								uni.removeStorageSync("_warehouse")
								uni.removeStorageSync("out_warehouse")
								uni.removeStorageSync("category")
								uni.setStorageSync("is_option", true);
								that.button_disabled = false;

								common.log(uni.getStorageSync("user").nickName + "生成了'" + that.products[0].goodsName + "'等" + that.products
									.length + "商品的采购订单，暂未出库", -13, operationId);

								uni.redirectTo({
									url: '/pages/report/EnteringHistory/SellDetail/SellLaterDetail?id=' + operationId,
								})
							}, 500)
						},
					})

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
