<template>
	<view>
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="确定" @click-right="confrim_this"
		 leftIcon="scan" left-text="扫码" @click-left="scanGoods">
		</uni-nav-bar>
		<view class="page">
			<view class='margin-b-10' v-for="(item,index) in products" :key="index">
				<unicard :title="'品名：'+item.goodsName">
					<view>
						
						<view class="display_flex_bet" style="margin-bottom: 10rpx;">
							<view>库存：{{item.reserve}}</view>
							
							<view>进价：
								<text v-if="user.rights&&user.rights.othercurrent[0] != '0'">0元</text>
								<text v-else style="color: #f30;">{{item.costPrice}}(元)</text>
							</view>
						</view>
						
						<view class="display_flex" v-if="value !=2"  style="margin-bottom: 10rpx;">
							<text>实际进货价<text style="font-size: 24rpx;color: #999;">(可修改)</text>：</text>
							<view v-if="user.rights&&user.rights.othercurrent[0] != '0'">
								<input placeholder='0' @input='getrealprice($event, index)' class='input_label' type='digit' />
							</view>
							<view v-else>
								<input :placeholder='item.costPrice' @input='getrealprice($event, index)' class='input_label' type='digit'/>
							</view>
						</view>

						<view v-if="item.selectd_model">
							<view class='margin-t-5' v-for="(model,key) in (item.selectd_model)" :key="key" style="margin-bottom: 10rpx;">
								<text style="color: #f30;">{{model.custom1.value + model.custom2.value + model.custom3.value + model.custom4.value}}</text>
								<text v-if="value == 1 || value == 3">采购量：</text>
								<text v-else-if="value == 2">入库量：</text>
								<text v-else-if="value == 4">退货量：</text>
								<uninumberbox :min="0" @change="handleModelNumChange($event, index,key,model)" value='1'  v-if="key==0"/>
								<uninumberbox :min="0" @change="handleModelNumChange($event, index,key,model)" value='0'  v-else/>
							</view>
						</view>
						<view class='margin-t-5' v-else>
							<text v-if="value == 1 || value == 3">采购量：</text>
							<text v-else-if="value == 2">入库量：</text>
							<text v-else-if="value == 4">退货量：</text>
							<uninumberbox :min="1" @change="handleNumChange($event, index)" value='1'/>
						</view>

						<view class="bottom_del display_flex_bet">
							<navigator class='del' style="background: #2ca879;" hover-class="none" :url="'/pages/manage/good_det/Ngood_det?id=' + item.header.objectId + '&type=false'" v-if="item.order == 1">
								<fa-icon type="magic" size="12" color="#fff"></fa-icon>
								<text style="margin-left: 10rpx;">详情</text>
							</navigator>
							<navigator class='del' style="background: #2ca879;" hover-class="none" :url="'/pages/manage/good_det/good_det?id=' + item.objectId + '&type=false'" v-else>
								<fa-icon type="magic" size="12" color="#fff"></fa-icon>
								<text style="margin-left: 10rpx;">详情</text>
							</navigator>
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
				value: '',
				products: [],
				user: uni.getStorageSync("user"),
			}
		},

		onLoad(options) {
			this.products = []
			that = this
			uni.removeStorageSync("is_option")
			uid = uni.getStorageSync("uid")
			value = options.value
			that.value = options.value

			if (value == 1) {
				uni.setNavigationBarTitle({
					title: "产品采购"
				})
			}

			if (options.id) {
				uni.showLoading({
					title: "加载中..."
				})
				const query = Bmob.Query('NGoods');
				if (options.type == "false") {
					query.equalTo("objectId", "==", options.id);
				} else {
					query.equalTo("productCode", "==", options.id)
				}
				query.equalTo("userId", "==", uid);
				query.equalTo("status", "!=", -1);
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
					
					if(res[0].order == 0){
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
							that.products = res;
							wx.hideLoading()
						})
					}else{
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
						that.products = res;
						wx.hideLoading()
					}
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
						item.selectd_model = item.models
						item.selected_model = item.models
					}
				}
				that.products = this.products
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

						const query = Bmob.Query('NGoods');
						if (array[1] == "false") {
							query.equalTo("objectId", "==", array[0]);
						} else {
							query.equalTo("productCode", "==", array[0])
						}
						query.equalTo("userId", "==", uid);
						query.include("stocks");
						query.find().then(res => {
							if(res.length == 0){
								uni.showToast({
									icon:"none",
									title:"没有此产品"
								})
								uni.hideLoading();
								return;
							}
							
							if(res[0].order == 0){
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
									that.products.concat(res)
									wx.hideLoading()
								})
							}else{
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
								that.products.concat(res)
								wx.hideLoading()
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
						url: "/pages/commonNew/good_confrim/goodPurchase/goodPurchase"
					})
				} else if (value == 2) {
					uni.navigateTo({
						url: "/pages/commonNew/good_confrim/good_enter/good_enter"
					})
				} else if (value == 3) {
					uni.navigateTo({
						url: "/pages/commonNew/good_confrim/goodPurchaseNew/goodPurchaseNew"
					})
				} else if (value == 4) {
					uni.navigateTo({
						url: "/pages/commonNew/good_return/buyReturn/buyReturn"
					})
				}
			},

			//数量改变
			handleNumChange($event, index) {
				//console.log($event,index)
				this.products[index].num = Number($event)
				this.products[index].total_money = Number($event) * Number(this.products[index].modify_retailPrice)
				this.products[index].really_total_money = Number($event) * Number(this.products[index].costPrice)
				uni.setStorageSync("products", this.products)
			},

			//多类型产品数量改变
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
