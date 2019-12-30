<template>
	<view>
		<view class='page'>
			<form @submit="formSubmit" report-submit="true">

				<view style="margin: 30rpx 0;">
					<view style="margin:0 0 10rpx 10rpx;font-size: 32rpx;color: #333;font-weight: bold;">基本信息</view>
					<view class="kaidan_detail" style="line-height: 70rpx;">

						<navigator class="display_flex" hover-class="none" url="/pages/manage/custom/custom?type=customFinance" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
							<view style="width: 140rpx;">客户<text style="color: #f30;">*</text></view>
							<view class="kaidan_rightinput display_flex" style="width: 100%;justify-content: flex-end;">
								<input placeholder="选择供货商" disabled="true" :value="custom.custom_name" style="text-align: right;margin-right: 20rpx;" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>

						<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
							<view style="width: 140rpx;">应收欠款</view>
							<view class="kaidan_rightinput display_flex" style="justify-content: flex-end;">
								<input placeholder="应收欠款" disabled="true" :value="custom.debt || 0" style="text-align: right;margin-right: 20rpx;"
								 type="digit" />
							</view>
						</view>
						<navigator class="display_flex_bet" hover-class="none" url="/pages/finance/account/account?type=choose" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
							<view style="width: 140rpx;">收款账户<text style="color: #f30;">*</text></view>
							<view class="kaidan_rightinput display_flex" style="justify-content: flex-end;">
								<input placeholder="选择收款账户" disabled="true" :value="account?account.name:''" style="text-align: right;margin-right: 20rpx;" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>

						<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
							<view>本次实收<text style="font-size: 20rpx;color: #f30;">*</text></view>
							<view class="kaidan_rightinput" style="text-align: right;"><input placeholder="输入实际付款金额" v-model="real_money"
								 style="color: #d71345;" type="digit" /></view>
						</view>
						<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
							<view style="width: 140rpx;">收款日期</view>
							<picker mode="date" :value="nowDay" :end="nowDay" @change.stop="bindDateChange" @click.stop>
								<view style="display: flex;align-items: center;">
									<view style="margin-right: 20rpx;">{{nowDay.split(" ")[0]}}</view>
									<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
								</view>
							</picker>
						</view>

						<view class="display_flex_bet" style="padding: 10rpx 0;border-bottom: 1rpx solid#F7F7F7;">
							<view style="width: 140rpx;">备注</view>
							<input placeholder='请输入备注' class='beizhu_style' name="input_beizhu" v-model="beizhu_text"></input>
						</view>
					</view>
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
					<view>
						<text>本次实收：￥{{real_money || 0}}</text>
					</view>
					<view class="display_flex">
						<button class='confrim_button' :disabled='button_disabled' form-type="submit" data-type="1" style="background:#426ab3 ;">确认收款</button>
					</view>

				</view>
			</form>

		</view>

	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from '@/utils/common.js';
	import customs from '@/utils/customs.js';

	let uid;
	let that;
	export default {
		data() {
			return {
				user: uni.getStorageSync("user"),
				identity: uni.getStorageSync("identity"),
				Images: [], //上传凭证图
				account: '',
				button_disabled: false,
				beizhu_text: "",
				real_money: '',
				nowDay: common.getDay(0, true, true), //时间
			}
		},
		onLoad() {
			that = this;
			uid = uni.getStorageSync("uid");
			uni.removeStorageSync("account");
			uni.removeStorageSync("custom")
		},

		onShow() {
			that.custom = uni.getStorageSync("custom")
			that.account = uni.getStorageSync("account")
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

			//表单提交
			formSubmit: function(e) {
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
				} else if (that.real_money == "") {
					uni.showToast({
						icon: "none",
						title: "请输入本次实收"
					});
					this.button_disabled = false;
					return;
				}

				const query = Bmob.Query('customs');
				query.get(that.custom.objectId).then(res => {
					if (res.debt - Number(that.real_money) < 0) {
						uni.showToast({
							icon: "none",
							title: '收款金额过大',
						})
					} else {
						res.set('debt', res.debt - Number(that.real_money));
						res.save().then(res => {
							let custom = Bmob.Pointer('customs');
							let customID = custom.set(that.custom.objectId);
							let account = Bmob.Pointer('accounts');
							let accountID = account.set(that.account.objectId);

							const query = Bmob.Query('financeRecord');
							query.set("account", accountID)
							query.set("custom", customID)
							query.set("real_money", Number(that.real_money))
							query.set("beizhu", that.beizhu_text)
							query.set("debt", that.custom.debt || 0)
							query.set("createdTime", {
								"__type": "Date",
								"iso": that.nowDay
							}); // 操作单详情
							query.set("Images", that.Images);
							query.save().then(res => {
								this.button_disabled = false;
								
								customs.custom_detail(that.custom.objectId).then(res => {
									uni.setStorageSync("custom",res)
									that.custom = res
									common.log(uni.getStorageSync("user").nickName + "操作'" + that.custom.custom_name + "'客户还款￥" +that.real_money + "元", 6, res.objectId);
									uni.showToast({
										icon: "none",
										title: '收款成功',
									})
								})
								
							}).catch(err => {
								console.log(err)
							})
						});
					}

				}).catch(err => {
					console.log(err)
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
