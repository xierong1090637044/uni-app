<template>
	<view>
		<view class='page'>
			<view style='line-height:70rpx;padding: 20rpx 20rpx 0;'>已选产品</view>
			<view style='max-height:25vh;overflow-x:scroll'>
				<view v-for="(item,index) in products" :key="index" class='pro_listitem'>
					<view class='pro_list' style='color:#3D3D3D'>
						<view>产品：{{item.goodsName}}</view>
						<view>期初进货价：￥{{item.costPrice}}</view>
					</view>
					<view class='pro_list'>
						<view>实际进货价：￥{{item.modify_retailPrice}}（X{{item.num}}）</view>
						<view>合计：￥{{item.total_money}}</view>
					</view>
				</view>
			</view>
			<view class='pro_allmoney'>总计：￥{{all_money}}</view>

			<form @submit="formSubmit">

				<view style="margin: 30rpx 0;">
					<view style="margin:0 0 10rpx 10rpx;">开单明细（用于记录是否有无欠款）</view>
					<view class="kaidan_detail" style="line-height: 70rpx;">
						
						<navigator class="display_flex" hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose">
							<view>选择仓库</text></view>
							<view class="kaidan_rightinput"><input placeholder="选择仓库" disabled="true" :value="stock.stock_name" /></view>
						</navigator>

						<navigator class="display_flex" hover-class="none" url="/pages/manage/shops/shops?type=choose">
							<view>选择门店</text></view>
							<view class="kaidan_rightinput"><input placeholder="选择门店" disabled="true" :value="shop_name" /></view>
						</navigator>

						<navigator class="display_flex" hover-class="none" url="/pages/manage/custom/custom?type=producer">
							<view>供应商姓名</view>
							<view class="kaidan_rightinput"><input placeholder="选择供货商" disabled="true" :value="producer.producer_name" /></view>
						</navigator>

						<view class="display_flex">
							<view>实际应付</view>
							<view class="kaidan_rightinput"><input placeholder="选择供货商" disabled="true" :value="all_money" /></view>
						</view>

						<view class="display_flex">
							<view>实际付款（可修改）</view>
							<view class="kaidan_rightinput"><input placeholder="输入实际付款金额" v-model="real_money" style="color: #d71345;" type="digit" /></view>
						</view>
					</view>
				</view>


				<view style='margin-top:20px'>
					<textarea placeholder='请输入备注' class='beizhu_style' name="input_beizhu"></textarea>
				</view>

				<view style="padding: 0 30rpx;margin-top: 60rpx;">
					<button class='confrim_button' :disabled='button_disabled' form-type="submit">确认入库</button>
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
				stock:'',//仓库
				shop_name: '',
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
			uni.removeStorageSync("producer"); //移除这个缓存
			this.products = uni.getStorageSync("products");
			for (let i = 0; i < this.products.length; i++) {
				this.all_money = Number((this.products[i].total_money + this.all_money).toFixed(2))
			}
			this.real_money = Number(this.all_money.toFixed(2))
		},

		onShow() {
			that.producer = uni.getStorageSync("producer")
			shop = uni.getStorageSync("shop");

			if (shop) {
				that.shop_name = shop.name

				const pointer = Bmob.Pointer('shops');
				shopId = pointer.set(shop.objectId);
			}
			
			that.stock = uni.getStorageSync("warehouse")?uni.getStorageSync("warehouse")[0].stock:''
		},
		methods: {

			formSubmit: function(e) {
				console.log(e)
				this.button_disabled = true;
				uni.showLoading({
					title: "上传中..."
				});
				
				const pointer = Bmob.Pointer('stocks');
				let stockId = pointer.set(that.stock?that.stock.objectId:'');
				
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
					tempBills.set('goodsName', this.products[i].goodsName);
					tempBills.set('retailPrice', (this.products[i].modify_retailPrice).toString());
					tempBills.set('num', this.products[i].num);
					tempBills.set('total_money', this.products[i].total_money);
					tempBills.set('goodsId', tempGoods_id);
					tempBills.set('userId', user);
					tempBills.set('type', 1);
					(shop)?tempBills.set("shop", shopId):'';
					tempBills.set("stock",stockId);

					let goodsId = {}
					detailBills.goodsName = this.products[i].goodsName
					detailBills.modify_retailPrice = (this.products[i].modify_retailPrice).toString()
					detailBills.retailPrice = this.products[i].retailPrice
					detailBills.total_money = this.products[i].total_money
					goodsId.costPrice = this.products[i].costPrice
					goodsId.retailPrice = this.products[i].retailPrice
					goodsId.objectId = this.products[i].objectId
					goodsId.reserve = num
					detailBills.goodsId = goodsId
					detailBills.num = this.products[i].num
					detailBills.type = 1

					billsObj.push(tempBills)
					detailObj.push(detailBills)

				}
				//插入单据
				Bmob.Query('Bills').saveAll(billsObj).then(function(res) {
						console.log("批量新增单据成功", res);
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
						query.set("type", 1);
						query.set("bills", bills);
						query.set("opreater", poiID1);
						query.set("master", poiID);
						query.set("stock",stockId);
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
									console.log(debt);
									let query = Bmob.Query('producers');
									query.get(that.producer.objectId).then(res => {
										res.set('debt', debt)
										res.save()
									})
								})
							}
						}

						query.set("all_money", that.all_money);
						query.save().then(res => {
							console.log("添加操作历史记录成功", res);
							uni.hideLoading();
							uni.showToast({
								title: '产品入库成功',
								icon: 'success',
								success: function() {
									for (let i = 0; i < that.products.length; i++) {
										let num = Number(that.products[i].reserve) + that.products[i].num;
										const query = Bmob.Query('Goods');
										query.get(that.products[i].objectId).then(res => {
											//console.log(res)
											res.set('reserve', num)
											res.set('stocktype', (num > that.products[i].warning_num) ? 1 : 0)
											res.save()
										}).catch(err => {
											console.log(err)
										})
									}

									that.button_disabled = false;
									uni.setStorageSync("is_option", true);
									uni.removeStorageSync("warehouse")
									
									setTimeout(() => {
										common.log(uni.getStorageSync("user").nickName + "入库了'" + that.products[0].goodsName + "'等" + that.products
											.length + "商品", 1, res.objectId);
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
