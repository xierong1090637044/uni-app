<template>

	<view>
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="确定" @click-right="confrim_this"
		 leftIcon="scan" left-text="扫码" @click-left="scanGoods">
		</uni-nav-bar>
		<view class="page">
			<view class='margin-b-10' v-for="(item,index) in products" :key="index">
				<unicard :title="'品名：'+item.goodsName">
					<view>
						<view style="margin-bottom: 10rpx;">库存：{{item.reserve}}</view>
						<view>建议零售价格：{{item.retailPrice}}(元)</view>
						<view class='margin-t-5'>
							退货量：
							<uninumberbox :min="1" @change="handleNumChange($event, index)" />
						</view>
						<view class="bottom_del">
							<view class='del' @click="handleDel(index)">
								<fa-icon type="close" size="15" color="#fff"></fa-icon>删除
							</view>
						</view>
					</view>
				</unicard>
			</view>
		</view>
	</view>

</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import unicard from '@/components/uni-card/uni-card.vue'
	import uninumberbox from '@/components/uni-number-box/uni-number-box.vue'
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'

	let that;
	export default {
		components: {
			unicard,
			faIcon,
			uninumberbox,
			uniNavBar,
			uniIcon
		},
		data() {
			return {
				products: null
			}
		},

		onLoad() {
			this.products = uni.getStorageSync("products");
			that = this
			uni.removeStorageSync("is_option");
			let key = 0;
			for (let item of uni.getStorageSync("products")) {
				console.log(item)
				if (item.selectd_model) {
					this.make_goods(item, item.selectd_model, key)
				}
				if(key == uni.getStorageSync("products").length-1){
					this.products = [].concat.apply([],this.products)
				}
				key += 1;
			}
		},

		methods: {
			//扫码
			scanGoods() {
				uni.scanCode({
					success(res) {
						uni.showLoading({title:"加载中..."})
						let result = res.result;
						let array = result.split("-");

						const query = Bmob.Query('Goods');
						if (array[1] == "false") {
							query.equalTo("objectId", "==", array[0]);
						} else {
							query.equalTo("productCode", "==", array[0])
						}
						query.equalTo("userId", "==", uid);
						query.equalTo("status", "!=", -1);
						query.find().then(res => {
							console.log(res)
							if (res[0].status == -1) {
								uni.showToast({
									title: "该产品已删除",
									icon: "none"
								})
							} else {
								for (let item of res) {
									item.num = 1;
									item.total_money = 1 * item.retailPrice;
									item.really_total_money = 1 * item.retailPrice;
									item.modify_retailPrice = item.retailPrice;
								}
								that.products = that.products.concat(res);
							}
							uni.hideLoading()
						})
					},
					fail(res) {
						uni.showToast({
							title: '未识别到条形码',
							icon: "none"
						})
					}
				})
			},

			make_goods(good, selectd_model, key) {
				console.log(good, selectd_model, key)
				let model_goods = []
				this.products.splice(key, 1)
				for (let model of JSON.parse(selectd_model)) {
					let new_good = {}
					new_good.reserve = JSON.parse(model).reserve
					new_good.costPrice = good.costPrice
					new_good.createdAt = good.createdAt
					new_good.goodsIcon = good.goodsIcon
					new_good.goodsName = good.goodsName + JSON.parse(model).custom1.value + JSON.parse(model).custom2.value + JSON.parse(
						model).custom3.value + JSON.parse(model).custom4.value
					new_good.is_selected = good.is_selected
					new_good.key = good.key
					new_good.models = good.models
					new_good.modify_retailPrice = good.modify_retailPrice
					new_good.num = good.num
					new_good.objectId = good.objectId
					new_good.packageContent = good.packageContent
					new_good.packingUnit = good.packingUnit
					new_good.position = good.position
					new_good.producer = good.producer
					new_good.productCode = good.productCode
					new_good.product_info = good.product_info
					new_good.product_state = good.product_state
					new_good.regNumber = good.regNumber
					new_good.retailPrice = good.retailPrice
					new_good.selectd_model = good.selectd_model
					new_good.stocks = good.stocks
					new_good.stocktype = good.stocktype
					new_good.total_money = good.total_money
					new_good.updatedAt = good.updatedAt
					new_good.userId = good.userId
					new_good.warning_num = good.warning_num
					model_goods.push(new_good)
					//console.log(model_goods,good.reserve)
				}
				this.products[key] = model_goods
				//console.log(model_goods)
			},

			//头部确定点击
			confrim_this() {
				uni.navigateTo({
					url: "/pages/common/good_return/return_detail/return_detail"
				})
			},

			//数量改变
			handleNumChange($event, index) {
				//console.log($event,index)
				this.products[index].num = $event
				this.products[index].total_money = $event * Number(this.products[index].modify_retailPrice)
				uni.setStorageSync("products", this.products)
			},

			//删除点击
			handleDel(index) {
				console.log(index)
				if (this.products.length == 1) {
					uni.showToast({
						title: "最少选择一个产品",
						icon: "none"
					})
				} else {
					this.products.splice(index, 1);
					uni.setStorageSync("products", this.products)
				}
			},

			//实际价格输入
			getrealprice($event, index) {
				this.products[index].modify_retailPrice = $event.target.value
				this.products[index].total_money = this.products[index].num * Number($event.target.value)
				uni.setStorageSync("products", this.products)
				//console.log($event,index)
			},

		}
	}
</script>

<style>
	.page {
		font-size: 28rpx;
		height: calc(100vh - 88rpx);
		overflow: scroll;
	}

	.margin-b-10 {
		margin-top: 20rpx;
	}

	.input_withlabel {
		display: flex;
		align-items: center;
		margin: 10rpx 0;
	}

	.bottom_del {
		text-align: right;
	}

	.del {
		display: inline-flex;
		align-items: center;
		background: #aa2116;
		color: #fff;
		justify-content: flex-end;
		padding: 4rpx 12rpx;
		border-radius: 8rpx;
	}

	.input_label {
		border: 1rpx solid#ddd;
		border-radius: 8rpx;
		padding: 0 6rpx;
		width: 140rpx;
		color: #aa2116;
	}

	.margin-t-5 {
		margin: 10rpx 0;
	}
</style>
