<template>
	<view>
		<view class='page'>
			<view style='line-height:70rpx;padding: 20rpx 20rpx 0;'>已选产品</view>
			<view style='max-height:25vh;overflow-x:scroll'>
				<view v-for="(item,index) in products" :key="index" class='pro_listitem'>
					<view class='pro_list' style='color:#3D3D3D'>
						<view>产品：{{item.goodsName}}</view>
					</view>
					<view class='pro_list'>
						<view>盘点前库存：{{item.reserve}}</view>
						<view>盘点后库存：{{item.num}}</view>
					</view>
				</view>
			</view>

			<form @submit="formSubmit">

				<view style='margin-top:20px'>
					<textarea placeholder='请输入备注' class='beizhu_style' name="input_beizhu"></textarea>
				</view>

				<view style="padding: 0 30rpx;margin-top: 60rpx;">
					<button class='confrim_button' :disabled='button_disabled' form-type="submit">确认盘点</button>
				</view>
			</form>

		</view>

	</view>
</template>

<script>
	import common from '@/utils/common.js';

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
				producer: null, //制造商
			}
		},
		onLoad() {
			that = this;
			uid = uni.getStorageSync("uid");

			this.products = uni.getStorageSync("products");
		},
		methods: {

			formSubmit: function(e) {
				console.log(e)
				this.button_disabled = true;
				uni.showLoading({
					title: "上传中..."
				});

				let operation_ids = [];
				let billsObj = new Array();
				let detailObj = [];

				for (let i = 0; i < this.products.length; i++) {


					//单据
					let tempBills = Bmob.Query('Bills');
					let detailBills = {}

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
					tempBills.set('reserve', this.products[i].reserve);
					tempBills.set('now_reserve', this.products[i].num.toString());
					tempBills.set('total_money', this.products[i].total_money);
					tempBills.set('operater', operater);
					tempBills.set('goodsId', tempGoods_id);
					tempBills.set('userId', user);
					tempBills.set('type', 3);

					let goodsId = {}
					detailBills.goodsName = this.products[i].goodsName
					detailBills.reserve = this.products[i].reserve
					detailBills.now_reserve = this.products[i].num.toString()

					billsObj.push(tempBills)
					detailObj.push(detailBills)
				}
				//插入单据
				Bmob.Query('Bills').saveAll(billsObj).then(function(res) {
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

						query.save().then(res => {
							console.log("添加操作历史记录成功", res);
							uni.hideLoading();
							uni.showToast({
								title: '产品盘点成功',
								icon: 'success',
								success: function() {
									for (let i = 0; i < that.products.length; i++) {
										const query = Bmob.Query('Goods');
										query.get(that.products[i].objectId).then(res => {
											//console.log(res)
											res.set('reserve', Number(that.products[i].num))
											res.set('stocktype', (Number(that.products[i].num) > that.products[i].warning_num) ? 1 : 0)
											res.save()
										}).catch(err => {
											console.log(err)
										})
									}

									that.button_disabled = false;
									uni.setStorageSync("is_option", true);
									setTimeout(() => {
										common.log(uni.getStorageSync("user").nickName + "盘点了'" + that.products[0].goodsName + "'等" + that.products
											.length + "商品", 3, res.objectId);
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
		background: #aa2116;
		color: #fff;
		font-weight: bold;
		font-size: 32rpx;
	}
</style>
