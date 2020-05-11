<template>
	<view>
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="确定" @click-right="confrim_this"
		 leftIcon="scan" left-text="扫码" @click-left="scanGoods">
		</uni-nav-bar>
		<view class="page">
			<view class='margin-b-10' v-for="(item,index) in products" :key="index">
				<unicard :title="'品名：'+item.goodsName">
					<view>
						<view style="margin-bottom: 10rpx;" v-if="item.stocks">
							<text v-if="item.stocks.stock_name">所存店仓:{{item.stocks.stock_name}}</text>
						</view>
						<view style="margin-bottom: 10rpx;">库存：{{item.reserve}}</view>
						<view v-if="user.rights&&user.rights.othercurrent[0] != '0'"></view>
						<view v-else>期初进货价：{{item.costPrice}}(元)</view>

						<view v-if="user.rights&&user.rights.othercurrent[0] != '0'" class='input_withlabel'>
							<view>实际进货价(可修改)：</view>
							<view><input placeholder='0' @input='getrealprice($event, index)' class='input_label' type='digit' /></view>
						</view>
						<view class='input_withlabel' v-else>
							<view>实际进货价(可修改)：</view>
							<view><input :placeholder='item.costPrice' @input='getrealprice($event, index)' class='input_label' type='digit' /></view>
						</view>

						<view v-if="item.selected_model">
							<view class='margin-t-5' v-for="(model,key) in (item.selected_model)" :key="key" style="margin-bottom: 10rpx;">
								<text style="color: #f30;">{{model.custom1.value + model.custom2.value + model.custom3.value + model.custom4.value}}</text>入库量：
								<uninumberbox :min="0" @change="handleModelNumChange($event, index,key,model)" value='1' />
							</view>
						</view>
						<view class='margin-t-5' v-else>
							生产量：
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

	let uid;
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
				products: [],
				user: uni.getStorageSync("user"),
			}
		},

		onLoad(options) {
			this.products = []
			that = this
			uni.removeStorageSync("is_option")
			uid = uni.getStorageSync("uid")

			if (options.id) {
				uni.showLoading({
					title: "加载中..."
				})
				const query = Bmob.Query('Matters');
				if (options.type == "false") {
					query.equalTo("objectId", "==", options.id);
				} else {
					query.equalTo("productCode", "==", options.id)
				}
				query.equalTo("userId", "==", uid);
				query.equalTo("status", "!=", -1);
				query.find().then(res => {
					console.log(res)

					for (let item of res) {
						item.num = 1;
						item.total_money = 1 * item.costPrice;
						item.really_total_money = 1 * item.costPrice;
						item.modify_retailPrice = item.costPrice;
						if (item.models) {
							let count = 0
							for (let model of item.models) {
								model.num = 0
								count += 1
							}
							item.num = count
							item.selected_model = item.models
							item.selected_model = item.models
						}
					}
					this.products = res;
					uni.hideLoading()
				})
			} else {
				this.products = uni.getStorageSync("products");
				for (let item of this.products) {
					if (item.models) {
						let count = 0
						for (let model of item.models) {
							model.num = 0
							count += 1
						}
						item.num = count
						item.selected_model = item.models
						item.selected_model = item.models
					}
				}
				this.products = this.products
			}

		},

		methods: {
			//扫码
			scanGoods() {
				uni.scanCode({
					success(res) {
						uni.showLoading({
							title: "加载中..."
						})
						let result = res.result;
						let array = result.split("-");

						const query = Bmob.Query('Matters');
						if (array[1] == "false") {
							query.equalTo("objectId", "==", array[0]);
						} else {
							query.equalTo("productCode", "==", array[0])
						}
						query.equalTo("userId", "==", uid);
						query.find().then(res => {
							console.log(res)
							for (let item of res) {
								item.num = 1;
								item.total_money = 1 * item.costPrice;
								item.really_total_money = 1 * item.costPrice;
								item.modify_retailPrice = item.costPrice;
								if (item.models) {
									let count = 0
									for (let model of item.models) {
										model.num = 0
										count += 1
									}
									item.num = count
									item.selected_model = item.models
									item.selected_model = item.models
								}
							}
							that.products = that.products.concat(res);
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

			//头部确定点击
			confrim_this() {
				uni.navigateTo({
					url: "/pages/common/good_production/detail/detail"
				})
			},

			//数量改变
			handleNumChange($event, index) {
				//console.log($event,index)
				this.products[index].num = Number($event)
				this.products[index].total_money = Number($event) * Number(this.products[index].modify_retailPrice)
				this.products[index].really_total_money = Number($event) * Number(this.products[index].costPrice)
				uni.setStorageSync("products", this.products)
			},

			//多类型物料数量改变
			handleModelNumChange($event, index, key, item) {
				item.num = Number($event)
				this.products[index].selected_model[key] = item
				let _sumNum = 0;
				for (let model of this.products[index].selected_model) {
					_sumNum += model.num
				}

				this.products[index].num = _sumNum
				this.products[index].total_money = _sumNum * Number(this.products[index].modify_retailPrice)
				this.products[index].really_total_money = _sumNum * Number(this.products[index].costPrice)
				uni.setStorageSync("products", this.products)
			},

			//删除点击
			handleDel(index) {
				console.log(index)
				if (this.products.length == 1) {
					uni.showToast({
						title: "最少选择一个物料",
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
</style>
