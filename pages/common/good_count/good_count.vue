<template>

	<view>
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="确定" @click-right="confrim_this">
		</uni-nav-bar>
		<view class="page">
			<view class='margin-b-10' v-for="(item,index) in products" :key="index">
				<unicard :title="'品名：'+item.goodsName" :extra="'当前库存：'+item.reserve">
					<view>
						<view class='margin-t-5'>
							盘点后库存：
							<uninumberbox min="0" @change="handleNumChange($event, index)" />
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
	import unicard from '@/components/uni-card/uni-card.vue'
	import uninumberbox from '@/components/uni-number-box/uni-number-box.vue'
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import Bmob from '@/utils/bmob.js'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'

	let uid;
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

		onLoad(options) {
			uid = uni.getStorageSync("uid")

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
		onUnload() {
			uni.removeStorageSync("products");
		},
		methods: {
			
			//头部确定点击
			confrim_this(){
				uni.navigateTo({url:"/pages/common/good_count/count_detail/count_detail"})
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
