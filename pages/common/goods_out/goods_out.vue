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
						<view class='input_withlabel'>
							<view>实际价格(可修改)：</view>
							<view><input :placeholder='item.retailPrice' @input='getrealprice($event, index)' class='input_label' type='digit' /></view>
						</view>

						<view v-if="item.selectd_model">
							<view v-if="item.selectd_model">
								<view class='margin-t-5' v-for="(model,key) in (item.selectd_model)" :key="key" style="margin-bottom: 10rpx;">
									<text style="color: #f30;">{{model.custom1.value + model.custom2.value + model.custom3.value + model.custom4.value}}</text>入库量：
									<uninumberbox :min="0" @change="handleModelNumChange($event, index,key,model)" value='0'  :max="model.reserve"/>
								</view>
							</view>
						</view>
						<view class='margin-t-5' v-else>
							出库量：
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
				nums: [],
				selected_model: []
			}
		},

		onLoad(options) {
			console.log(options)
			uni.removeStorageSync("is_option")
			uid = uni.getStorageSync("uid")
			that = this
			if (options.id) {
				uni.showLoading({
					title: "加载中..."
				})
				const query = Bmob.Query('Goods');
				if (options.type == "false") {
					query.equalTo("objectId", "==", options.id);
				} else {
					query.equalTo("productCode", "==", options.id)
				}
				query.equalTo("userId", "==", uid);
				query.find().then(res => {
					//console.log(res)
					if (res[0].status == -1) {
						uni.showToast({
							title: "该产品已删除",
							icon: "none"
						})
					} else {
						res[0].num = 1;
						res[0].total_money = 1 * res[0].retailPrice;
						res[0].really_total_money = 1 * res[0].retailPrice;
						res[0].modify_retailPrice = res[0].retailPrice;
						if(res[0].models) res[0].selectd_model = res[0].models
						this.products = res;
					}
					wx.hideLoading()
				})
			} else {
				this.products = uni.getStorageSync("products");
				for(let item of this.products){
					item.selectd_model = item.models
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

						const query = Bmob.Query('Goods');
						if (array[1] == "false") {
							query.equalTo("objectId", "==", array[0]);
						} else {
							query.equalTo("productCode", "==", array[0])
						}
						query.equalTo("userId", "==", uid);
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

			//头部确定点击
			confrim_this() {
				uni.navigateTo({
					url: "/pages/common/goods_out/out_detail/out_detail"
				})
			},

			//多类型产品数量改变
			handleModelNumChange($event, index, key, item) {

				that.nums[key] = Number($event)
				for (let model of this.products[index].models) {
					if (model.id == item.id) {
						item.num = Number($event)
					}
				}
				let _sumNum = 0;
				for (let item of that.nums) {
					_sumNum += item
				}
				that.selected_model[key] = item
				this.products[index].num = _sumNum
				this.products[index].selected_model = that.selected_model
				this.products[index].total_money = _sumNum * Number(this.products[index].modify_retailPrice)
				this.products[index].really_total_money = _sumNum * Number(this.products[index].really_total_money)
				uni.setStorageSync("products", this.products)
			},

			//数量改变
			handleNumChange($event, index) {
				//console.log($event,index)
				this.products[index].num = Number($event)
				this.products[index].total_money = Number($event) * Number(this.products[index].modify_retailPrice)
				this.products[index].really_total_money = Number($event) * Number(this.products[index].really_total_money)
				uni.setStorageSync("products", this.products)
			},

			//删除点击
			handleDel(index) {
				//console.log(index)
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
</style>
