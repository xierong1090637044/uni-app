<template>

	<view>
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="确定" @click-right="confrim_this" leftIcon="scan" left-text="扫码" @click-left="scanGoods">
		</uni-nav-bar>
		<view class="page">
			<view class='margin-b-10' v-for="(item,index) in products" :key="index">
				<unicard :title="'品名：'+item.goodsName">
					<view>
						<view style="margin-bottom: 10rpx;">可调数量：{{item.reserve}}</view>
						
						<view class='margin-t-5 display_flex'>
							调出仓库：
							<view>{{stock.stock_name}}</view>
						</view>
						<view class='margin-t-5'>
							调出库存：
							<uninumberbox :min="0" @change="handleNumChange($event, index)" :max="item.reserve"/>
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
				products: null,
				stock:uni.getStorageSync("warehouse")[0].stock
			}
		},

		onLoad(options) {
			uid = uni.getStorageSync("uid")
			that = this;
			uni.removeStorageSync("is_option")

			if (options.id) {
				const query = Bmob.Query('Goods');
				if (options.type == "false") {
					query.equalTo("objectId", "==", options.id);
				} else {
					query.equalTo("productCode", "==", options.id)
				}
				query.equalTo("userId", "==", uid);
				query.find().then(res => {
					console.log(res)
					res[0].num = 1;
					res[0].total_money = 1 * res[0].retailPrice;
					res[0].modify_retailPrice = res[0].retailPrice;
					this.products = res;
				})
			} else {
				this.products = uni.getStorageSync("products");
			}

		},

		methods: {
			//扫码
			scanGoods(){
				uni.scanCode({
					success(res) {
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
							for(let item of res){
								item.num = 1;
								item.total_money = 1 * item.retailPrice;
								item.really_total_money = 1 * item.retailPrice;
								item.modify_retailPrice = item.retailPrice;
							}
							that.products = that.products.concat(res);
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
			confrim_this(){
				uni.navigateTo({url:"/pages/common/good_allocation/allocation_detail/allocation_detail"})
			},
			
			//数量改变
			handleNumChange($event, index) {
				//console.log($event,index)
				this.products[index].num = $event?$event:0
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
