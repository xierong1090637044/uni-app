<template>
	<view style="position: relative;height: 100vh;background: #f2f3f5;">
		<view style="position: relative;">
			<image src="https://bmob-cdn-23134.bmobcloud.com/2019/10/07/8407027640cedf52801a6b7b6d50c7ac.png" class="background_img"></image>

			<view class="user_content display_flex_bet">
				<view class="user_name">{{user.nickName}}</view>
				<image :src="user.avatarUrl" class="user_avatar"></image>
			</view>
		</view>

		<view class="vip_content">
			<view class="content_bg">
				<view>开通会员可以体验全部功能哦！<text style="font-size: 20rpx;">（将于七日后恢复原价）</text></view>
				<view class="display_flex_bet" style="margin-top: 40rpx;">
					<view :class="['price_content',(selected_price==10)?'selected_price_bg':'']"  @click="selected_this(10)">
						<view class="time_desc">一个月</view>
						<view class="price_text">￥10</view>
						<view style="position: relative;font-size: 24rpx;">原价20 <view class="price_line">————</view>
						</view>
					</view>
					<view :class="['price_content',(selected_price==25)?'selected_price_bg':'']" style="margin: 0 30rpx;"
					 @click="selected_this(25)">
						<view class="time_desc">一个季度</view>
						<view class="price_text">￥25</view>
						<view style="position: relative;font-size: 24rpx;">原价60 <view class="price_line">————</view>
						</view>
					</view>
					<view :class="['price_content',(selected_price==100)?'selected_price_bg':'']" @click="selected_this(100)">
						<view class="time_desc">一年</view>
						<view class="price_text">￥100</view>
						<view style="position: relative;font-size: 24rpx;">原价240 <view class="price_line">————</view>
						</view>
					</view>
				</view>

				<button class="pay_button" @click="pay_off" :disabled="payStatus">支付</button>
				
				<view style="margin-top: 40rpx;line-height: 50rpx;">
					<view style="font-size: 32rpx;">
						<text>会员的好处</text>
						<text style="font-size: 20rpx;">（感谢您一如既往的支持）</text>
						<fa-icon type="info-circle" size="18" color="#12b9fe" style="margin-left: 20rpx;"></fa-icon>
					</view>
					
					<view style="color: #999999;font-size: 24rpx;">
						<view>1.会员可无限制上传产品、员工、店仓、门店</view>
						<view>2.会员可上传凭证图，门店图、店仓图</view>
						<view>3.会员可查询出入库单中的物流信息</view>
						<view>4.会员可扫码添加产品</view>
						<view>5.会员可使用电脑版</view>
						<view>6.更多特权正在开发中...</view>
					</view>
					
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	let that;
	import Bmob from "hydrogen-js-sdk";
	export default {

		data() {
			return {
				payStatus:false,
				user: uni.getStorageSync("user"),
				selected_price: 10,
			}
		},

		onLoad() {
			that = this;
			// #ifdef MP-WEIXIN
			Bmob.User.auth().then(res => {
				console.log(res)
				let Opid = res?res.authData.weapp.openid:''
				let thisUser = uni.getStorageSync("user");
				if(thisUser){
					const query = Bmob.Query('_User');
					query.get(thisUser.objectId).then(res => {
					  res.set('miniProgramOpid',Opid)
					  res.save()
					}).catch(err => {
					  console.log(err)
					})
				}
			}).catch(err => {
				console.log(err)
			});
			// #endif
		},

		methods: {
			selected_this(price) {
				console.log(price)
				that.selected_price = Number(price)
			},

			pay_off() {
				if(that.user.is_vip){
					uni.showToast({
						title:"您已经是VIP了",
						icon:"none"
					})
				}else if(uni.getStorageSync("identity") == "2" || uni.getStorageSync("identity") == 2){
					uni.showToast({
						title:"员工不能充值",
						icon:"none"
					})
				}else{
					uni.showLoading({title:"充值中..."})
					that.payStatus = true;
					that.pay().then(res=>{
						if(res){
							const query = Bmob.Query('_User');
							query.get(that.user.objectId).then(res => {
							  let timestamp=new Date().getTime();
							  if(that.selected_price == 10){
							  	res.set('vip_time',timestamp + 2592000000)
									res.set('vip_shouldtime',timestamp + 2592000000)
									that.user.vip_time = timestamp + 2592000000
							  }else if(that.selected_price == 25){
							  	res.set('vip_time',timestamp + 2592000000*3)
									res.set('vip_shouldtime',timestamp + 2592000000*3)
									that.user.vip_time = timestamp + 2592000000*3
							  }else if(that.selected_price == 100){
							  	res.set('vip_time',timestamp + 2592000000*12)
									res.set('vip_shouldtime',timestamp + 2592000000*12)
									that.user.vip_time = timestamp + 2592000000*12
							  }
								res.set('is_vip',true)
							  res.save()
								
								that.user.is_vip = true
								uni.setStorageSync("user",that.user)
							}).catch(err => {
							  console.log(err)
							})
							
						}else{
							uni.showToast({
								title:"充值失败",
								icon:"none"
							})
						}
						that.payStatus = false;
						uni.hideLoading()
					})
					
				}
				
			},
			
			pay(){
				return new Promise((resolve, reject) => {
					let openId = uni.getStorageSync('openid');
					//传参数金额，名称，描述,openid
					Bmob.Pay.weApp(that.selected_price, '库存表-会员充值', '库存表-会员充值', openId).then(function(resp) {
						console.log(resp);
					
						//服务端返回成功
						var timeStamp = resp.timestamp,
							nonceStr = resp.noncestr,
							packages = resp.package,
							orderId = resp.out_trade_no, //订单号，如需保存请建表保存。
							sign = resp.sign;
					
						//打印订单号
						console.log(orderId);
					
						//发起支付
						wx.requestPayment({
							'timeStamp': timeStamp,
							'nonceStr': nonceStr,
							'package': packages,
							'signType': 'MD5',
							'paySign': sign,
							'success': function(res) {
								//付款成功,这里可以写你的业务代码
								resolve(true,res)
							},
							'fail': function(res) {
								//付款失败
								console.log('付款失败');
								console.log(res);
								resolve(false,res)
							}
						})
					
					}, function(err) {
						console.log('服务端返回失败');
						console.log(err);
						resolve(false,err)
					});
				})
				
			}
			
		},

	}
</script>

<style>
	.background_img {
		width: 100%;
		height: 380rpx;
	}

	.user_content {
		position: absolute;
		top: 25%;
		padding: 0 60rpx;
		width: calc(100% - 120rpx);
	}

	.user_avatar {
		height: 100rpx;
		width: 100rpx;
	}

	.user_name {
		color: #fff;
		font-size: 32rpx;
	}

	.vip_content {
		position: absolute;
		top: 20%;
		left: 0;
		padding: 0 40rpx;
		width: calc(100% - 80rpx);
	}

	.content_bg {
		background: #FFFFFF;
		padding: 20rpx 40rpx;
		border-radius: 16rpx;
	}

	.price_content {
		width: 33.33%;
		border: 1rpx solid#12dafe;
		text-align: center;
		padding: 20rpx 0;
		border-radius: 16rpx;
		line-height: 40rpx;
		color: #333;
	}

	.price_line {
		position: absolute;
		left: 40rpx;
		top: -7rpx;
	}

	.price_text {
		font-size: 32rpx;
		font-weight: bold;
	}

	.time_desc {
		font-size: 28rpx;
	}

	.selected_price_bg {
		background: #12bcfe !important;
		color: #fff !important;
	}

	.pay_button {
		line-height: 90rpx;
		border-radius: 40rpx;
		background: linear-gradient(to right, #12d8fe, #12b9fe);
		/* 标准的语法 */
		text-align: center;
		margin-top: 60rpx;
		color: #FFFFFF;
		font-size: 32rpx;
	}
</style>
