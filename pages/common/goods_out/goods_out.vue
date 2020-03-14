<template>

	<view>
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="确定" @click-right="confrim_this"
		 leftIcon="scan" left-text="扫码" @click-left="scanGoods">
		</uni-nav-bar>
		<view class="page">
			<view class='margin-b-10' v-for="(item,index) in products" :key="index">
				<unicard :title="'品名：'+item.goodsName">
					<view>
						<view class="display_flex_bet" style="margin-bottom: 10rpx;" v-if="item.stocks && item.stocks.stock_name">
							<view>存放店仓：{{item.stocks.stock_name}}</view>
						</view>

						<view class="display_flex_bet" style="margin-bottom: 10rpx;">
							<view>库存：{{item.reserve}}</view>
							<view style="color: #f30;">零售价：{{item.retailPrice}}(元)</view>
						</view>

						<view class="display_flex_bet" v-if="value == 1 || value == 3" style="margin-bottom: 10rpx;">
							<view class='input_withlabel'>
								<view>实际零售价<text style="font-size: 24rpx;color: #999;">(可修改)</text>：</view>
								<view><input :placeholder='item.retailPrice' @input='getrealprice($event, index)' class='input_label' type='digit' /></view>
							</view>
						</view>

						<view v-if="item.selectd_model">
							<view class='margin-t-5' v-for="(model,key) in (item.selectd_model)" :key="key" style="margin-bottom: 10rpx;">
								<text style="color: #f30;">{{model.custom1.value + model.custom2.value + model.custom3.value + model.custom4.value}}</text>
								<text v-if="value == 1 || value == 3">销售量：</text>
								<text v-else-if="value == 2">出库量：</text>
								<text v-else-if="value == 4">退货量：</text>
								<uninumberbox :min="0" @change="handleModelNumChange($event, index,key,model)" :value='key==0?1:0' v-if="negativeOut" />
								<uninumberbox :min="0" @change="handleModelNumChange($event, index,key,model)" :value='key==0?1:0' v-else-if="value == 4 || value == 3" :max="Number(item.reserve)"/>
								<uninumberbox :min="0" @change="handleModelNumChange($event, index,key,model)" :value='key==0?1:0' :max="Number(model.reserve)" v-else />
							</view>
						</view>
						<view class='margin-t-5' v-else>
							<text v-if="value == 1 || value == 3">销售量：</text>
							<text v-else-if="value == 2">出库量：</text>
							<text v-else-if="value == 4">退货量：</text>
							<uninumberbox :min="1" @change="handleNumChange($event, index)" :value='1' v-if="negativeOut" />
							<uninumberbox :min="1" @change="handleNumChange($event, index)" :max="Number(item.reserve)" :value='1' v-else />
						</view>

						<view class="bottom_del display_flex_bet">
							<view>
								<view v-if="user.identity !=2">
									<navigator class='del' style="background: #2ca879;" hover-class="none" :url="'/pages/manage/good_det/Ngood_det?id=' + item.header.objectId + '&type=false'"
									 v-if="item.order == 1">
										<fa-icon type="magic" size="12" color="#fff"></fa-icon>
										<text style="margin-left: 10rpx;">详情</text>
									</navigator>
									<navigator class='del' style="background: #2ca879;" hover-class="none" :url="'/pages/manage/good_det/Ngood_det?id=' + item.objectId + '&type=false'"
									 v-else-if="item.order == 0">
										<fa-icon type="magic" size="12" color="#fff"></fa-icon>
										<text style="margin-left: 10rpx;">详情</text>
									</navigator>
									<navigator class='del' style="background: #2ca879;" hover-class="none" :url="'/pages/manage/good_det/good_det?id=' + item.objectId + '&type=false'"
									 v-else>
										<fa-icon type="magic" size="12" color="#fff"></fa-icon>
										<text style="margin-left: 10rpx;">详情</text>
									</navigator>
								</view>
							</view>
							
							<view class='del' @click="handleDel(index)">
								<fa-icon type="close" size="12" color="#fff"></fa-icon>
								<text style="margin-left: 10rpx;">删除</text>
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
	let value;
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
				value: '',
				negativeOut: false
			}
		},

		onLoad(options) {
			console.log(options)
			uni.removeStorageSync("is_option")
			uid = uni.getStorageSync("uid")
			that = this
			value = options.value
			that.value = options.value
			if (options.id) { // 扫码进入的情况
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
				query.equalTo("status", "!=", -1);
				query.include("stocks");
				query.find().then(res => {
					uni.setStorageSync("keepScan", true);
					if(res.length == 0){
						uni.showToast({
							icon:"none",
							title:"没有此产品"
						})
						uni.hideLoading();
						return;
					}
					
					if (res[0].order == 0) {
						query.equalTo("userId", "==", uid);
						query.equalTo("header", "==", res[0].objectId);
						query.include("stocks");
						query.find().then(res => {
							for (let item of res) {
								item.num = 1;
								item.total_money = 1 * item.retailPrice;
								item.really_total_money = 1 * item.retailPrice;
								item.modify_retailPrice = item.retailPrice;
								if (item.models) {
									let count = 0
									for (let model of item.models) {
										model.num = 0
										count += 1
									}
									item.num = count
									item.selectd_model = item.models
									item.selected_model = item.models
								}
							}
							this.products = res;
							uni.hideLoading()
						})
					} else {
						for (let item of res) {
							item.num = 1;
							item.total_money = 1 * item.retailPrice;
							item.really_total_money = 1 * item.retailPrice;
							item.modify_retailPrice = item.retailPrice;
							if (item.models) {
								let count = 0
								for (let model of item.models) {
									model.num = 0
									count += 1
								}
								item.num = count
								item.selectd_model = item.models
								item.selected_model = item.models
							}
						}
						this.products = res;
						uni.hideLoading()
					}
				})
			} else {
				this.products = uni.getStorageSync("products");
				for (let item of this.products) {
					if (item.models) {
						let count = 0
						for (let model of item.models) {
							model.num = 0;
							count += 1;
						}
						item.num = count;
						item.selectd_model = item.models
						item.selected_model = item.models
					}
				}
				this.products = this.products
			}


			if (uni.getStorageSync("setting") && uni.getStorageSync("setting").negativeOut) {
				that.negativeOut = uni.getStorageSync("setting").negativeOut
				//console.log(uni.getStorageSync("setting").negativeOut)
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
						query.equalTo("status", "!=", -1);
						query.equalTo("userId", "==", uid);
						query.include("stocks");
						query.find().then(res => {
							console.log(res)
							if(res.length == 0){
								uni.showToast({
									icon:"none",
									title:"没有此产品"
								})
								uni.hideLoading();
								return;
							}
							
							if (res[0].order == 0) {
								query.equalTo("userId", "==", uid);
								query.equalTo("header", "==", res[0].objectId);
								query.include("stocks");
								query.find().then(res => {
									for (let item of res) {
										item.num = 1;
										item.total_money = 1 * item.retailPrice;
										item.really_total_money = 1 * item.retailPrice;
										item.modify_retailPrice = item.retailPrice;
										if (item.models) {
											let count = 0
											for (let model of item.models) {
												model.num = 0
												count += 1
											}
											item.num = count
											item.selectd_model = item.models
											item.selected_model = item.models
										}
									}
									that.products = that.products.concat(res);
									wx.hideLoading()
								})
							} else {
								for (let item of res) {
									item.num = 1;
									item.total_money = 1 * item.retailPrice;
									item.really_total_money = 1 * item.retailPrice;
									item.modify_retailPrice = item.retailPrice;
									if (item.models) {
										let count = 0
										for (let model of item.models) {
											model.num = 0
											count += 1
										}
										item.num = count
										item.selectd_model = item.models
										item.selected_model = item.models
									}
								}
								that.products = that.products.concat(res);
								uni.hideLoading()
							}

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
				let products = uni.getStorageSync('products')
				for (let item of products) {
					if (item.num == 0) {
						uni.showToast({
							title: "0库存不能进行操作",
							icon: "none"
						})

						return
					}
				}

				if (value == 1) {
					uni.navigateTo({
						url: "/pages/common/goods_out/goodSell/goodSell"
					})
				} else if (value == 2) {
					uni.navigateTo({
						url: "/pages/common/goods_out/out_detail/out_detail"
					})
				} else if (value == 3) { //新版的销售流程
					uni.navigateTo({
						url: "/pages/common/goods_out/gooSellNew/gooSellNew"
					})
				} else if (value == 4) { //新版的采购退货流程
					uni.navigateTo({
						url: "/pages/common/good_return/purchaseReturn/purchaseReturn"
					})
				}

			},

			//多类型产品数量改变  步骤很重要
			handleModelNumChange($event, index, key, item) {
				item.num = Number($event)
				this.products[index].selected_model[key] = item

				//console.log(this.products[index].selected_model)
				let _sumNum = 0;
				for (let model of this.products[index].selected_model) {
					if (model.num > 0) {
						_sumNum += model.num
					}

				}
				//console.log(this.products[index].selected_model)

				this.products[index].num = _sumNum
				this.products[index].total_money = _sumNum * Number(this.products[index].modify_retailPrice)
				this.products[index].really_total_money = _sumNum * Number(this.products[index].retailPrice)
				uni.setStorageSync("products", this.products)
			},

			//数量改变
			handleNumChange($event, index) {
				//console.log($event,index)
				this.products[index].num = Number($event)
				this.products[index].total_money = Number($event) * Number(this.products[index].modify_retailPrice)
				this.products[index].really_total_money = Number($event) * Number(this.products[index].retailPrice)
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
		margin-top: 10rpx;
	}

	.del {
		display: inline-flex;
		align-items: center;
		background: #aa2116;
		color: #fff;
		justify-content: flex-end;
		padding: 4rpx 20rpx;
		border-radius: 8rpx;
		font-size: 20rpx;
	}

	.input_label {
		border: 1rpx solid#ddd;
		border-radius: 8rpx;
		padding: 0 6rpx;
		width: 140rpx;
		color: #aa2116;
	}
</style>
