<template>
	<view>
		<view class='page'>
			<view style='line-height:70rpx;padding: 20rpx 20rpx 0;color: #3D3D3D;font-weight: bold;'>已选产品</view>
			<view>
				<view v-for="(item,index) in products" :key="index" class='pro_listitem'>
					<view class='pro_list' style='color:#3D3D3D'>
						<view style="width: calc(100% - 200rpx);">产品：{{item.goodsName}}</view>
						<view>零售价：￥{{item.retailPrice?item.retailPrice:0}}</view>
					</view>
					<view v-if="item.selected_model">
						<view v-for="(model,index) in item.selected_model" :key="index" class="display_flex_bet" v-if="model.num > 0">
							<view style="font-size: 24rpx;color: #999;" v-if="model">{{model.custom1.value + model.custom2.value + model.custom3.value + model.custom4.value}}</view>
							<view style="font-size: 24rpx;color: #f30;" v-if="model">{{model.num}}</view>
						</view>
					</view>
					<view class='pro_list'>
						<view>实际零售价：￥{{item.modify_retailPrice}}（X{{item.num}}）</view>
						<view>合计：￥{{item.total_money}}</view>
					</view>
					<view v-if="item.stocks && item.stocks.stock_name" style="font-size: 24rpx;color:#2ca879;">出库店仓:{{item.stocks.stock_name}}</view>
				</view>
			</view>

			<form @submit="formSubmit" report-submit="true">

				<view style="margin: 30rpx 0 0;">
					<view style="margin:0 0 10rpx 20rpx;color: #3D3D3D;font-weight: bold;">销售明细</view>
					<view style="line-height: 70rpx;">

						<navigator class="display_flex_bet orderListItemBorder borderBot" hover-class="none" url="/pages/manage/custom/custom?type=custom">
							<view style="width: 140rpx;">客户<text style="color: #f30;">*</text></view>
							<view class="kaidan_rightinput display_flex">
								<input placeholder="选择客户" disabled="true" :value="custom.custom_name" style="text-align: right;margin-right: 20rpx;" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>
						<navigator class="display_flex_bet orderListItemBorder borderBot" hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose">
							<view style="width: 150rpx;" class="left_content">出库仓库<text style="color: #f30;">*</text></view>
							<view style="display: flex;align-items: center;">
								<input placeholder="请选择要出库的仓库" disabled="true" :value="stock.stock_name" style="text-align: right;margin-right: 20rpx;" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>
						<view class="display_flex_bet orderListItemBorder borderBot">
							<view>商品总价</view>
							<view class="kaidan_rightinput display_flex">
								<input style="color: #d71345;text-align: right;margin-right: 20rpx;font-size: 30rpx;"
								 disabled="true" v-model="all_money"/>
								<text style="color: #333;font-weight: bold;">元</text>
							</view>
						</view>
						<view class="display_flex_bet orderListItemBorder borderBot">
							<view>其他费用</view>
							<view class="kaidan_rightinput display_flex">
								<input placeholder="输入其他费用" style="color: #d71345;text-align: right;margin-right: 20rpx;font-size: 30rpx;"
								 type="digit" @input="inputOtherMoney" />
								<text style="color: #333;font-weight: bold;">元</text>
							</view>
						</view>
						<view class="display_flex_bet orderListItemBorder borderBot">
							<view>优惠金额</view>
							<view class="kaidan_rightinput display_flex">
								<input placeholder="输入优惠金额" style="color: #d71345;text-align: right;margin-right: 20rpx;font-size: 30rpx;"
								 type="digit" @input="inputDiscountMoney" />
								<text style="color: #333;font-weight: bold;">元</text>
							</view>
						</view>

						<navigator hover-class="none" url="/pages/finance/myData/account/account?type=choose" class="display_flex_bet orderListItemBorder borderBot"
						 style="margin-top:20rpx;">
							<view style="width: 140rpx;">结算账户</view>
							<view class="kaidan_rightinput display_flex">
								<input placeholder="选择结算账户" disabled="true" :value="account.name" style="text-align: right;margin-right: 20rpx;" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>
						<view class="display_flex_bet orderListItemBorder borderBot">
							<view>现结（预付）款</view>
							<view class="kaidan_rightinput display_flex">
								<input placeholder="输入预付款" style="color: #d71345;text-align: right;margin-right: 20rpx;font-size: 30rpx;"
								 type="digit"  v-model="haveGetMoney"/>
								<text style="color: #333;font-weight: bold;">元</text>
							</view>
						</view>
						<view class="display_flex_bet orderListItemBorder borderBot">
							<view>现结（预付）后欠款</view>
							<view class="kaidan_rightinput display_flex">
								<input :value="Number(real_money) - Number(haveGetMoney) - Number(discountMoney) +Number(otherMoney)" style="color: #d71345;text-align: right;margin-right: 20rpx;font-size: 30rpx;"
								 type="digit" disabled="true" />
								<text style="color: #333;font-weight: bold;">元</text>
							</view>
						</view>

						<view class="display_flex_bet orderListItemBorder borderBot" style="margin-top:20rpx;">
							<view style="width: 140rpx;">发货方式</view>
							<picker class="kaidan_rightinput" :range="pickerTypes" range-key="desc" @change="select_outType">
								<input placeholder="请选择发货方式" v-model="outType.desc" disabled="true" style="text-align: right;margin-right: 20rpx;" />
							</picker>
						</view>
						<view class="display_flex_bet orderListItemBorder borderBot" v-if="outType.type == 2 || outType.type == 3">
							<view style="width: 140rpx;">快递单号</view>
							<view class="kaidan_rightinput display_flex" :range="pickerTypes" range-key="desc" @change="select_outType">
								<input placeholder="请输入快递单号" v-model="expressNum" style="text-align: right;margin-right: 20rpx;" />

								<fa-icon type="clone" size="16" color="#426ab3" @click="scan_code"></fa-icon>
							</view>
						</view>

						<view class="display_flex_bet orderListItemBorder borderBot" style="margin-top:20rpx;">
							<view style="width: 140rpx;">销售时间</view>
							<picker mode="date" :value="nowDay" :end="nowDay" @change.stop="bindDateChange" @click.stop>
								<view style="display: flex;align-items: center;">
									<view style="margin-right: 20rpx;">{{nowDay.split(" ")[0]}}</view>
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
						<view>合计：￥{{Number(real_money) - Number(discountMoney) +Number(otherMoney)}}</view>
						<view>总数：{{total_num}}</view>
					</view>
					<view class="display_flex">
						<button class='confrim_button' :disabled='button_disabled' form-type="submit" data-type="1" style="background:#a1aa16 ;">销售</button>
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
				custom: null, //制造商
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

				nowDay: common.getDay(0, true), //时间
				otherMoney: 0, //其他金额 +
				discountMoney: 0, //优惠金额 -
				haveGetMoney: 0, //预付款 -
				sellLaterOrderId: '', //预付订单id
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync("uid");
			that.products = uni.getStorageSync("products");
			that.sellLaterOrderId = options.id || ''

			if (that.user.rights && that.user.rights.othercurrent) {
				that.othercurrent = that.user.rights.othercurrent
			}

			for (let i = 0; i < that.products.length; i++) {
				that.all_money = Number((that.products[i].total_money + that.all_money).toFixed(2)) //修改价格后的总价
				that.really_total_money = Number((that.products[i].really_total_money + that.really_total_money).toFixed(2)) //未修改价格时的总价
				that.total_num += Number(that.products[i].num)
				that.allCostPrice = that.allCostPrice + (Number(that.products[i].num) * Number(that.products[i].costPrice)) //总成本价
			}
			that.real_money = Number(that.all_money.toFixed(2))
			that.haveGetMoney = Number(that.all_money.toFixed(2))
		},
		onShow() {
			that.custom = uni.getStorageSync("custom")
			that.account = uni.getStorageSync("account")
			that.stock = uni.getStorageSync("warehouse") ? uni.getStorageSync("warehouse")[0].stock : ''

			if (uni.getStorageSync("haveGetMoney")) {
				that.haveGetMoney = uni.getStorageSync("haveGetMoney")
			}
			if (uni.getStorageSync("otherMoney")) {
				that.otherMoney = uni.getStorageSync("otherMoney")
			}
		},

		methods: {

			inputOtherMoney(e) {
				that.otherMoney =  Number(e.detail.value)
				that.haveGetMoney = Number(that.all_money.toFixed(2)) + Number(e.detail.value) - Number(that.discountMoney)
			},

			inputDiscountMoney(e) {
				that.discountMoney = Number(e.detail.value)
				that.haveGetMoney = Number(that.all_money.toFixed(2)) + Number(that.otherMoney) - Number(e.detail.value)
			},

			//选择时间
			bindDateChange(e) {
				that.nowDay = e.detail.value + " 00:00:00"
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

			//选择物流方式
			select_outType(e) {
				//console.log(e)
				that.outType = that.pickerTypes[e.detail.value]

				if (that.outType.type != 2 || that.outType.type != 3) {
					that.expressNum = ''
				}
			},
			
			confirmOrder(input_beizhu){
				this.button_disabled = true;
				
				let params = {
					goods:that.products,
					beizhu:input_beizhu,
					real_num:that.total_num,
					stockId:that.stock?that.stock.objectId:'',
					stockName:that.stock?that.stock.stock_name:'',
					allCostPrice:that.allCostPrice,
					otherMoney:that.otherMoney,
					discountMoney:that.discountMoney,
					haveGetMoney:that.haveGetMoney,
					real_money:that.real_money,
					all_money:that.all_money,
					accountId:that.account?that.account.objectId:'',
					customId:that.custom.objectId,
					Images:that.Images,
					opreater:uni.getStorageSync("masterId"),
					nowDay:that.nowDay,
					typeDesc:that.outType.desc,
					expressNum:that.expressNum,
					negativeOut:getApp().globalData.setting.negativeOut,
					autoRetailPrice:getApp().globalData.setting.autoRetailPrice,
					sellLaterOrderId:that.sellLaterOrderId,//销售订单id
				}
				
				if(that.identity == 2){
					if(uni.getStorageSync("setting")){
						params.isChecked = uni.getStorageSync("setting").isChecked
					}else{
						params.isChecked = false
					}
				}
				
				that.$http.Post("stock_goodOutBuy", params).then(res => {
					if(res.code == 1){
						uni.hideLoading();
						uni.setStorageSync("is_option", true);
						uni.showToast({
							title: "销售出库成功"
						});
						
						setTimeout(function(){
							uni.navigateBack({
								delta: 2
							});
							that.button_disabled = false;
						},1000)
					}
				})
			},

			formSubmit: function(e) {
				//console.log(e)
				//console.log(res)
				let identity = uni.getStorageSync("identity") // 身份识别标志

				if (uni.getStorageSync("custom") == "" || uni.getStorageSync("custom") == undefined) {
					uni.showToast({
						icon: "none",
						title: "请选择客户"
					});
					return;
				}
				
				if (that.stock == null || that.stock == "" || that.stock == undefined) {
					 uni.showToast({
					 	icon: "none",
					 	title: "请选择仓库"
					 });
					
					return
				}
				
				that.confirmOrder(e.detail.value.input_beizhu)

				
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
