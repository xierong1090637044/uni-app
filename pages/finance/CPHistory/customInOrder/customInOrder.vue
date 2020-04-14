<template>
	<view>
		<view class='page'>

			<view class="backgroundfff" style="padding: 0 20rpx;margin-top: 20rpx;">
				<view class="newOrderTitle borderBot">基础信息</view>
				<view>
					<navigator class="display_flex" hover-class="none" url="/pages/manage/custom/custom?type=customFinance" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
						<view style="width: 140rpx;">客户<text style="color: #f30;">*</text></view>
						<view class="kaidan_rightinput display_flex" style="width: 100%;justify-content: flex-end;">
							<input placeholder="选择客户" disabled="true" :value="custom.custom_name" style="text-align: right;margin-right: 20rpx;" />
							<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
						</view>
					</navigator>

					<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
						<view style="width: 140rpx;">收款日期</view>
						<picker mode="date" :value="nowDay" :end="nowDay" @change.stop="bindDateChange" @click.stop>
							<view style="display: flex;align-items: center;">
								<view style="margin-right: 20rpx;">{{nowDay.split(" ")[0]}}</view>
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</picker>
					</view>
				</view>
			</view>

			<view class="backgroundfff" style="padding: 0 20rpx;margin-top: 20rpx;">
				<view class="newOrderTitle borderBot">要收款的单据</view>
				<view>
					<view class="borderBot" style="padding: 20rpx 0;width: 100%;" v-for="(item,index) in customInOrders" :key="index">
						<view class="color333">单据编号：{{item.objectId}}</view>
						<view class="color333">单据日期：{{item.createdAt}}</view>
						<view class="display_flex_bet">
							<view class="color333">应收金额：{{item.real_money}}元</view>
							<view class="moneyIcon">待收：￥{{item.debt}}元</view>
						</view>

						<view class="color333">已收：{{item.haveGetMoney}}元</view>

						<view class="display_flex_bet">
							<view class="color333 display_flex">本次收款(可编辑)<text style="color: #f30;font-size: 20rpx;">*</text></view>
							<view class="display_flex">
								<input v-model="item.shouldGetMoney" placeholder="请输入本次收款" style="text-align: right;color: #f30;font-weight: bold;font-size: 28rpx;"
								 @input="inputShouldGetMoney($event,index)" type="digit" @blur="inputShouldGetMoney($event,index)"/>
								<text style="margin-left: 10rpx;">元</text>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="backgroundfff" style="padding: 0 20rpx;margin-top: 20rpx;">
				<view class="newOrderTitle borderBot">收款信息</view>
				<view>
					<navigator class="display_flex_bet" hover-class="none" url="/pages/finance/myData/account/account?type=choose" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
						<view style="width: 140rpx;">收款账户<text style="color: #f30;">*</text></view>
						<view class="kaidan_rightinput display_flex" style="justify-content: flex-end;">
							<input placeholder="选择收款账户" disabled="true" :value="account?account.name:''" style="text-align: right;margin-right: 20rpx;" />
							<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
						</view>
					</navigator>

					<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
						<view>收款人<text style="font-size: 20rpx;color: #f30;">*</text></view>
						<view class="kaidan_rightinput" style="text-align: right;">{{user.nickName}}</view>
					</view>
				</view>
			</view>

			<view class="backgroundfff" style="padding: 0 20rpx;margin-top: 20rpx;">
				<view class="newOrderTitle borderBot">备注</view>
				<view>
					<input placeholder='请输入备注' class='beizhu_style' name="input_beizhu" v-model="beizhu_text"></input>
				</view>
			</view>

			<view class="backgroundfff" style="padding: 0 20rpx;margin-top: 20rpx;">
				<view class="newOrderTitle borderBot">上传凭证图(会员可用)</view>
				<view>
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
				<view>
					<text>总计收款：￥{{real_money || 0}}</text>
				</view>
				<view class="display_flex">
					<button class='confrim_button' :disabled='button_disabled' style="background:#426ab3;" @click="formSubmit">完成</button>
				</view>

			</view>

		</view>

	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from '@/utils/common.js';
	import customs from '@/utils/customs.js';

	let uid;
	let that;
	let fristClassId
	let secondClassId
	export default {
		data() {
			return {
				custom: {},
				user: uni.getStorageSync("user"),
				identity: uni.getStorageSync("identity"),
				Images: [], //上传凭证图
				account: '',
				button_disabled: false,
				beizhu_text: "",
				real_money: 0,
				nowDay: common.getDay(0, true, true), //时间
				customInOrders: '',
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync("uid");
			that.customInOrders = uni.getStorageSync("customInOrders")
			for (let item of that.customInOrders) {
				that.real_money += Number(item.shouldGetMoney)
			}

			uni.setNavigationBarTitle({
				title: "新增收款单"
			})
		},

		onShow() {
			that.custom = uni.getStorageSync("custom")
			that.account = uni.getStorageSync("account")

			if (uni.getStorageSync("category")) {
				that.category = uni.getStorageSync("category")

				if (that.category.type == 2) {
					let pointer2 = Bmob.Pointer('financeFristClass')
					fristClassId = pointer2.set(that.category.parent.objectId) //一级分类id关联

					let pointer3 = Bmob.Pointer('financeSecondClass')
					secondClassId = pointer3.set(that.category.objectId) //二级分类关联

				} else {
					let pointer2 = Bmob.Pointer('financeFristClass')
					fristClassId = pointer2.set(that.category.objectId) //一级分类id关联
				}
			}

		},
		methods: {

			//输入本次收款金额
			inputShouldGetMoney(e, index) {
				let inputMoney = Number(e.detail.value)
				if (inputMoney > that.customInOrders[index].debt) {
					that.customInOrders[index].shouldGetMoney = that.customInOrders[index].debt;
				} else {
					that.customInOrders[index].shouldGetMoney = e.detail.value;
				}

				that.real_money = 0;
				for (let item of that.customInOrders) {
					that.real_money += Number(item.shouldGetMoney)
				}
			},

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

			formSubmit() {
				that.button_disabled = true;
				if (uni.getStorageSync("custom") == "" || uni.getStorageSync("custom") == undefined) {
					uni.showToast({
						icon: "none",
						title: "请选择客户"
					});
					this.button_disabled = false;
					return;
				} else if (uni.getStorageSync("account") == "" || uni.getStorageSync("account") == undefined) {
					uni.showToast({
						icon: "none",
						title: "请选择收款账户"
					});
					this.button_disabled = false;
					return;
				}

				let p1 = new Promise((resolve, reject) => {
					const query = Bmob.Query('accounts');
					query.get(that.account.objectId).then(res => {
						res.set('money', res.money + Number(that.real_money));
						res.save().then(res => {
							let custom = Bmob.Pointer('customs');
							let customID = custom.set(that.custom.objectId);
							let account = Bmob.Pointer('accounts');
							let accountID = account.set(that.account.objectId);

							let pointer = Bmob.Pointer('_User')
							let poiID = pointer.set(uid);
							let masterId = uni.getStorageSync("masterId");
							let pointer1 = Bmob.Pointer('_User')
							let poiID1 = pointer1.set(masterId);

							const query = Bmob.Query('order_opreations');
							query.set("account", accountID)
							query.set("custom", customID)
							query.set("master", poiID);
							query.set("opreater", poiID1)
							query.set("real_money", Number(that.real_money))
							query.set("beizhu", that.beizhu_text)
							query.set('customInOrders', that.customInOrders)
							//query.set("debt", that.custom.debt || 0)
							query.set("createdTime", {
								"__type": "Date",
								"iso": that.nowDay
							}); // 操作单详情
							query.set("type", -1);
							query.set("extra_type", 5);
							query.set("Images", that.Images);
							query.save().then(res => {
								
								common.log(uni.getStorageSync("user").nickName + "操作'" + that.custom.custom_name + "'客户还款￥" + that.real_money +
									"元", 6, res.objectId);
									resolve("success")
							}).catch(err => {
								console.log(err)
							})
						})
					})
				})


				let p2 = new Promise((resolve, reject) => {
					for (let item of that.customInOrders) {
						const query = Bmob.Query('order_opreations');
						query.set('id', item.objectId) //需要修改的objectId
						query.set('debt', Number(item.debt) - Number(item.shouldGetMoney))
						query.set('haveGetMoney', Number(item.haveGetMoney) + Number(item.shouldGetMoney))
						query.save().then(res => {
							resolve("success")
							console.log(res)
						}).catch(err => {
							console.log(err)
						})
					}
				})

				Promise.all([p1, p2]).then((result) => {
					console.log(result) //['成功了', 'success']
					this.button_disabled = false;
					uni.navigateBack({
						delta: 1
					})

					setTimeout(function() {
						uni.showToast({
							icon: "none",
							title: '收款成功',
						})
					}, 1000)
				}).catch((error) => {
					console.log(error)
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
	
	.uni-input-input{
		font-size: 28rpx;
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
		text-align: left;
		background-color: #fff;
		max-height: 100rpx;
		padding: 20rpx 0;
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
