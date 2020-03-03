<template>

	<view>
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="确定" @click-right="confrim_this"
		 leftIcon="scan" left-text="扫码" @click-left="scanGoods">
		</uni-nav-bar>
		<view class="page">
			<view class='margin-b-10' v-for="(item,index) in products" :key="index">
				<unicard :title="'品名：'+item.goodsName">
					<view>
						<view class='margin-t-5 display_flex_bet'>
							<view style="margin-bottom: 10rpx;">库存：{{item.reserve}}</view>
						</view>
						<view v-if="item.selectd_model">
							<view class='margin-t-5' v-for="(model,key) in (item.selectd_model)" :key="key" style="margin-bottom: 10rpx;">
								<text style="color: #f30;">{{model.custom1.value + model.custom2.value + model.custom3.value + model.custom4.value}}</text>
								调出库存：
								<uninumberbox :min="0" @change="handleModelNumChange($event, index,key,model)" :max="Number(model.reserve)"  :value='key==0?1:0'/>
							</view>
						</view>
						<view v-else>
							<view class='margin-t-5'>
								调出库存：
								<uninumberbox :min="1" @change="handleNumChange($event, index)" :max="Number(item.reserve)" :value="1"/>
							</view>
						</view>
						
						<view class="bottom_del display_flex_bet">
							<navigator class='del' style="background: #2ca879;" hover-class="none" :url="'/pages/manage/good_det/Ngood_det?id=' + item.header.objectId + '&type=false'" v-if="item.order == 1">
								<fa-icon type="magic" size="12" color="#fff"></fa-icon>
								<text style="margin-left: 10rpx;">详情</text>
							</navigator>
							<navigator class='del'  style="background: #2ca879;" hover-class="none" :url="'/pages/manage/good_det/good_det?id=' + item.objectId + '&type=false'" v-else>
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
				products: null,
			}
		},

		onLoad(options) {
			uid = uni.getStorageSync("uid")
			that = this;
			uni.removeStorageSync("is_option")

			if (options.id) {
				uni.showLoading({title:"加载中..."})
				const query = Bmob.Query('NGoods');
				if (options.type == "false") {
					query.equalTo("objectId", "==", options.id);
				} else {
					query.equalTo("productCode", "==", options.id)
				}
				query.equalTo("userId", "==", uid);
				query.equalTo("status", "!=", -1);
				query.find().then(res => {
					if(res.length == 0){
						uni.showToast({
							icon:"none",
							title:"没有此产品"
						})
						uni.hideLoading();
						return;
					}
					
					if (res[0].status == -1) {
						uni.showToast({
							title: "该产品已删除",
							icon: "none"
						})
					} else {
						res[0].num = 1;
						res[0].total_money = 1 * res[0].retailPrice;
						res[0].modify_retailPrice = res[0].retailPrice;
						this.products = res;
					}
					uni.hideLoading()
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

		},

		methods: {
			//扫码
			scanGoods() {
				uni.scanCode({
					success(res) {
						uni.showLoading({title:"加载中..."})
						let result = res.result;
						let array = result.split("-");

						const query = Bmob.Query('NGoods');
						if (array[1] == "false") {
							query.equalTo("objectId", "==", array[0]);
						} else {
							query.equalTo("productCode", "==", array[0])
						}
						query.equalTo("userId", "==", uid);
						query.find().then(res => {
							if(res.length == 0){
								uni.showToast({
									icon:"none",
									title:"没有此产品"
								})
								uni.hideLoading();
								return;
							}
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
					url: "/pages/commonNew/good_allocation/allocation_detail/allocation_detail"
				})
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
				this.products[index].num = $event ? $event : 0
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

	.margin-t-5 {
		margin: 10rpx 0;
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
