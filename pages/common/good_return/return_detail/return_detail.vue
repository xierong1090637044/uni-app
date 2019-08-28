<template>
	<view>
		<view class='page'>
			<view style='line-height:70rpx;padding: 20rpx 20rpx 0;'>已选产品</view>
			<view style='max-height:25vh;overflow-x:scroll'>
				<view v-for="(item,index) in products" :key="index" class='pro_listitem'>
					<view class='pro_list' style='color:#3D3D3D'>
						<view>产品：{{item.goodsName}}</view>
						<view>零售价：￥{{item.retailPrice?item.retailPrice:0}}</view>
					</view>
					<view class='pro_list'>
						<view>退货数量：X{{item.num}}</view>
						<view>合计：￥{{item.total_money}}</view>
					</view>
				</view>
			</view>
			<view class='pro_allmoney'>总计：￥{{all_money}}</view>

			<form @submit="formSubmit">
				<view style="margin: 30rpx 0;">
					<view style="margin:0 0 10rpx 10rpx;">开单明细（用于记录退货客户）</view>
					<view class="kaidan_detail" style="line-height: 70rpx;">
						<navigator class="display_flex" hover-class="none" url="/pages/manage/shops/shops?type=choose">
							<view>选择门店</text></view>
							<view class="kaidan_rightinput"><input placeholder="选择门店" disabled="true" :value="shop_name" /></view>
						</navigator>

						<navigator class="display_flex" hover-class="none" url="/pages/manage/custom/custom?type=custom">
							<view>客户姓名</view>
							<view class="kaidan_rightinput"><input placeholder="选择客户" disabled="true" :value="custom.custom_name" /></view>
						</navigator>
					</view>
				</view>

				<view style='margin-top:20px'>
					<textarea placeholder='请输入备注' class='beizhu_style' name="input_beizhu"></textarea>
				</view>

				<view style="padding: 0 30rpx;margin-top: 60rpx;">
					<button class='confrim_button' :disabled='button_disabled' form-type="submit">确认退货</button>
				</view>
			</form>

		</view>

	</view>
</template>

<script>
	import Bmob from '@/utils/bmob.js';
	import common from '@/utils/common.js';

	let uid;
	let that;
	let shopId;
	let shop; //门店

	export default {
		data() {
			return {
				shop_name: '',
				products: null,
				button_disabled: false,
				beizhu_text: "",
				real_money: 0, //实际付款金额
				all_money: 0, //总价
				custom: null, //制造商
			}
		},
		onLoad() {
			that = this;
			uid = uni.getStorageSync("uid");

			this.products = uni.getStorageSync("products");
			for (let i = 0; i < this.products.length; i++) {
				this.all_money = this.products[i].total_money + this.all_money
			}
		},
		onShow() {
			that.custom = uni.getStorageSync("custom")
			
			shop = uni.getStorageSync("shop");
			
			if (shop) {
				that.shop_name = shop.name
			
				const pointer = Bmob.Pointer('shops');
				shopId = pointer.set(shop.objectId);
			}
			
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
					let num = Number(this.products[i].reserve) + this.products[i].num;
					const query = Bmob.Query('Goods');
					query.get(this.products[i].objectId).then(res => {
						//console.log(res)
						res.set('reserve', num)
						res.set('stocktype', (num > this.products[i].warning_num) ? 1 : 0)
						res.save()
					}).catch(err => {
						console.log(err)
					})

					//单据
					let tempBills = Bmob.Query('Bills');
					let detailBills = {}

					let pointer = Bmob.Pointer('_User')
					let user = pointer.set(uid)
					let pointer1 = Bmob.Pointer('Goods')
					let tempGoods_id = pointer1.set(this.products[i].objectId);

					tempBills.set('goodsName', this.products[i].goodsName);
					tempBills.set('retailPrice', (this.products[i].modify_retailPrice).toString());
					tempBills.set('num', this.products[i].num);
					tempBills.set('total_money', this.products[i].total_money);
					tempBills.set('goodsId', tempGoods_id);
					tempBills.set('userId', user);
					tempBills.set('type', 2);

					let goodsId = {}
					detailBills.goodsName = this.products[i].goodsName
					detailBills.modify_retailPrice = (this.products[i].modify_retailPrice).toString()
					detailBills.retailPrice = this.products[i].retailPrice
					detailBills.total_money = this.products[i].total_money
					goodsId.costPrice = this.products[i].costPrice
					goodsId.retailPrice = this.products[i].retailPrice
					detailBills.goodsId = goodsId
					detailBills.num = this.products[i].num
					
					if (shop) {
						tempBills.set("shop", shopId);
						//common.record_shopOut(shop.objectId, shop.have_out + this.products[i].num)
					}

					billsObj.push(tempBills)
					detailObj.push(detailBills)
				}
				//插入单据
				Bmob.Query('Bills').saveAll(billsObj).then(function(res) {
						//console.log("批量新增单据成功", res);

						/*let relation = Bmob.Relation('Bills'); // 需要关联的表
						let relID = relation.add(operation_ids);*/

						let pointer = Bmob.Pointer('_User')
						let poiID = pointer.set(uid);

						let masterId = uni.getStorageSync("masterId");
						let pointer1 = Bmob.Pointer('_User')
						let poiID1 = pointer1.set(masterId);

						let query = Bmob.Query('order_opreations');
						//query.set("relations", relID);
						query.set("beizhu", e.detail.value.input_beizhu);
						query.set("detail", detailObj);
						query.set("type", 2);
						query.set("opreater", poiID1);
						query.set("master", poiID);
						query.set('goodsName', that.products[0].goodsName);
						query.set('real_money', Number(that.real_money));
						query.set('debt', that.all_money - Number(that.real_money));

						if (that.custom) {
							let custom = Bmob.Pointer('customs');
							let customID = custom.set(that.custom.objectId);
							query.set("custom", customID);
						}

						query.set("all_money", that.all_money);
						query.save().then(res => {
							console.log("添加操作历史记录成功", res);
							uni.hideLoading();
							uni.removeStorageSync("customs"); //移除这个缓存
							uni.showToast({
								title: '产品退货成功',
								icon: 'success',
								success: function() {
									that.button_disabled = false;
									uni.setStorageSync("is_option", true);
									setTimeout(() => {
										common.log(uni.getStorageSync("user").nickName + "处理了'" + that.products[0].goodsName + "'等" + that
											.products.length + "商品的退货", 2, res.objectId);
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
