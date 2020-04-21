<template>
	<view style="height: 100vh;background: #fff;">

		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="确定" @click-right="confrim_this" />

		<view class="display_flex_bet" style="width:calc(90% - 60rpx);padding: 20rpx 30rpx;background:#F7F7F7;margin: 30rpx 5%;"
		 @click="openPopup">
			<view>当前扫码选中产品</view>
			<view class="display_flex">
				<view style="color: #f30;font-weight: bold;margin-right: 10rpx;">{{products.length}}</view>
				<fa-icon type="angle-right" size="18" color="#999"></fa-icon>
			</view>
		</view>

		<!-- #ifdef MP-WEIXIN -->
		<camera device-position="back" flash="off" binderror="error" style="width: 380rpx;height: 380rpx;margin: 0 auto;"
		 mode="scanCode" @scancode="scanCode" v-if="isOpen == false"></camera>
		<!-- #endif -->

		<!--<image mode="widthFix" src="{{src}}"></image>-->

		<uniPopupNew ref="popup" type="bottom" @change="changeView">

			<view style="background: #fff;border-top-left-radius: 40rpx;border-top-right-radius: 40rpx;">
				<view style="padding:20rpx 30rpx;border-bottom: 1rpx solid#ddd;">扫码选中的产品</view>
				<scroll-view style="height: 75vh;" scroll-y="true">
					<view class='margin-b-10' v-for="(item,index) in products" :key="index">
						<unicard :title="'品名：'+item.goodsName">
							<view>
								<view class="display_flex_bet" style="margin-bottom: 10rpx;">
									<view>库存：{{item.reserve}}</view>
									<view style="color: #f30;" v-if="type == '销售' || type == '销售退货'">零售价：{{item.retailPrice}}(元)</view>
									<view style="color: #f30;" v-else-if="type == '采购' || type == '采购退货'">进货价：{{item.costPrice}}(元)</view>
								</view>

								<view class="display_flex_bet" style="margin-bottom: 10rpx;" v-if="type=='销售' || type == '销售退货'">
									<view class='input_withlabel'>
										<view>实际零售价<text style="font-size: 24rpx;color: #999;">(可修改)</text>：</view>
										<view><input :placeholder='item.retailPrice' @input='getrealprice($event, index)' class='input_label' type='digit' /></view>
									</view>
								</view>

								<view class="display_flex_bet" style="margin-bottom: 10rpx;" v-if="type=='采购' || type == '采购退货'">
									<view class='input_withlabel'>
										<view>实际进货价<text style="font-size: 24rpx;color: #999;">(可修改)</text>：</view>
										<view><input :placeholder='item.costPrice' @input='getrealprice($event, index)' class='input_label' type='digit' /></view>
									</view>
								</view>

								<view v-if="item.selectd_model">
									<view class='margin-t-5' v-for="(model,key) in (item.selectd_model)" :key="key" style="margin-bottom: 10rpx;">
										<text style="color: #f30;">{{model.custom1.value + model.custom2.value + model.custom3.value + model.custom4.value}}</text>
										<text>数量：</text>
										<uninumberbox :min="0" @change="handleModelNumChange($event, index,key,model)" :value='key==0?1:0' />
									</view>
								</view>
								<view class='margin-t-5' v-else>
									<text>数量：</text>
									<uninumberbox :min="1" @change="handleNumChange($event, index)" :value='item.num' />
								</view>

								<view class="bottom_del display_flex_bet">
									<view>
										<view v-if="user.identity !=2">
											<navigator class='del' style="background: #2ca879;" hover-class="none" :url="'/pages/manage/good_det/Ngood_det?id=' + item.objectId + '&type=false'">
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
				</scroll-view>

			</view>

		</uniPopupNew>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import unicard from '@/components/uni-card/uni-card.vue'
	import uninumberbox from '@/components/uni-number-box/uni-number-box.vue'
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniPopupNew from "@/components/uni-popup-new/uni-popup-new.vue"

	let uid;
	let that;
	let value;
	export default {
		components: {
			unicard,
			faIcon,
			uninumberbox,
			uniNavBar,
			uniPopupNew
		},
		data() {
			return {
				isOpen: false,
				user: uni.getStorageSync("user"),
				type: '',
				negativeOut: false,
				products: []
			}
		},
		onLoad(options) {
			that = this
			uid = uni.getStorageSync("uid")
			that.type = options.type
			uni.setNavigationBarTitle({
				title: "连续扫码" + options.type
			})

			//that.scanCode()

			if (uni.getStorageSync("setting") && uni.getStorageSync("setting").negativeOut) {
				that.negativeOut = uni.getStorageSync("setting").negativeOut
			}
		},

		methods: {
			openPopup() {
				that.isOpen = true,
					this.$refs.popup.open()
			},

			changeView(value) {
				if (value.show == true) {
					that.isOpen = true
				} else {
					that.isOpen = false
				}
			},

			//头部确定点击
			confrim_this() {
				for (let item of that.products) {
					if (item.num == 0) {
						uni.showToast({
							title: "0库存不能进行操作",
							icon: "none"
						})

						return
					}
				}

				if (that.type == '出库') {
					uni.navigateTo({
						url: "/pages/commonNew/goods_out/out_detail/out_detail"
					})
				} else if (that.type == '入库') {
					uni.navigateTo({
						url: "/pages/commonNew/good_confrim/good_enter/good_enter"
					})
				} else if (that.type == '调拨') {
					uni.navigateTo({
						url: "/pages/commonNew/good_allocation/allocation_detail/allocation_detail"
					})
				} else if (that.type == '盘点') {
					uni.navigateTo({
						url: "/pages/commonNew/good_count/count_detail/count_detail"
					})
				} else if (that.type == '销售') {
					uni.navigateTo({
						url: "/pages/commonNew/goods_out/gooSellNew/gooSellNew"
					})
				} else if (that.type == '销售退货') {
					uni.navigateTo({
						url: "/pages/commonNew/good_return/buyReturn/buyReturn"
					})
				} else if (that.type == '采购') {
					uni.navigateTo({
						url: "/pages/commonNew/good_confrim/goodPurchaseNew/goodPurchaseNew"
					})
				} else if (that.type == '采购退货') {
					uni.navigateTo({
						url: "/pages/commonNew/good_return/purchaseReturn/purchaseReturn"
					})
				}
			},

			scanCode(e) {
				//console.log(e)
				let code = e.detail.result
				//let code = "97de19af43-false-new"
				let array = code.split("-");
				console.log(array[0], array[1])
				uni.showLoading({
					title: "加载中..."
				})
				const query = Bmob.Query('Goods');
				if (array[1] == "false" || array[1] == false) {
					query.equalTo("objectId", "==", array[0]);
				} else {
					query.equalTo("productCode", "==", array[0])
				}
				query.equalTo("userId", "==", uid);
				query.equalTo("status", "!=", -1);
				query.find().then(res => {

					uni.vibrate({
						success: function() {
							uni.showToast({
								icon: "none",
								title: "扫描成功"
							})
						}
					});
					
					if (res.length == 0) {
						uni.showToast({
							icon: "none",
							title: "没有此产品"
						})
						uni.hideLoading();
						return;
					}

					let thisProduct = res[0]

					if (that.products.length == 0) {
						thisProduct.num = 1;
						thisProduct.total_money = Number(1 * thisProduct.retailPrice);
						thisProduct.really_total_money = Number(1 * thisProduct.retailPrice);
						thisProduct.modify_retailPrice = Number(thisProduct.retailPrice);
						if (thisProduct.models) {
							for (let model of thisProduct.models) {
								model.num = 0
							}
							thisProduct.num = 1
							thisProduct.selectd_model = thisProduct.models
							thisProduct.selected_model = thisProduct.models
						}

						that.products.push(thisProduct);
						uni.hideLoading()
					} else {
						let count = 0;
						for (let item of that.products) {

							if (item.objectId == thisProduct.objectId) {
								item.num += 1;
								item.total_money += Number(thisProduct.retailPrice);
								item.really_total_money += Number(thisProduct.retailPrice);
								item.modify_retailPrice += Number(thisProduct.retailPrice);
								if (item.models) {
									for (let model of item.models) {
										model.num = 0
									}
									item.num = 1
									item.selectd_model = item.models
									item.selected_model = item.models
								}
								that.products[count] = item
								uni.setStorageSync("products", that.products)
								uni.hideLoading()
								return
							} else {
								if (count == that.products.length - 1) {
									thisProduct.num = 1;
									thisProduct.total_money = Number(1 * thisProduct.retailPrice);
									thisProduct.really_total_money = Number(1 * thisProduct.retailPrice);
									thisProduct.modify_retailPrice = Number(1 * thisProduct.retailPrice);
									if (thisProduct.models) {
										for (let model of thisProduct.models) {
											model.num = 0
										}
										thisProduct.num = 1
										thisProduct.selectd_model = thisProduct.models
										thisProduct.selected_model = thisProduct.models
									}
									that.products.push(thisProduct);
									uni.setStorageSync("products", that.products)
									uni.hideLoading()
									return
								}
							}
							count += 1;
						}
					}
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
				this.products.splice(index, 1);
				uni.setStorageSync("products", this.products)
			},

			//实际价格输入
			getrealprice($event, index) {
				this.products[index].modify_retailPrice = $event.target.value
				this.products[index].total_money = this.products[index].num * Number($event.target.value)
				uni.setStorageSync("products", this.products)
				//console.log($event,index)
			},
		},

	}
</script>

<style>
	.page {
		font-size: 28rpx;
		height: calc(100vh - 88rpx);
		overflow: scroll;
		background: #fff;
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
