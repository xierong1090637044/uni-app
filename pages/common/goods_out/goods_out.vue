<template>
	<view class="page">
		<view class='margin-b-10' v-for="(item,index) in products" :key="index">
    <unicard :title="'品名：'+item.goodsName" :extra="'库存：'+item.reserve">
      <view>
        <view>建议零售价格：{{item.retailPrice}}(元)</view>
        <view class='input_withlabel'>
            <view>实际价格(可修改)：</view>
            <view><input :placeholder='item.retailPrice' @input='getrealprice($event, index)' class='input_label' type='digit'/></view>
        </view>
        <view class='margin-t-5'>
          出库量：<uninumberbox min="1" :max="item.reserve"  @change="handleNumChange($event, index)" />
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
</template>

<script>
	import unicard from '@/components/uni-card/uni-card.vue'
	import uninumberbox from '@/components/uni-number-box/uni-number-box.vue'
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import Bmob from '@/utils/bmob.js'
	
	let uid;
	export default {
		components: {
			unicard,
			faIcon,
			uninumberbox
		},
		data() {
			return {
				products:null
			}
		},
		// #ifdef APP-PLUS
		//监听原生标题栏按钮点击事件
		onNavigationBarButtonTap(Object) {
				if(Object.text == "确定"){
					uni.navigateTo({url:"/pages/common/goods_out/out_detail/out_detail"})
				}
				
		},
		// #endif
		onLoad(options) {
			console.log(options)
			uid = uni.getStorageSync("uid")
			if (options.id) {
				const query = Bmob.Query('Goods');
				if (options.type == "true") {
					query.equalTo("productCode", "==", options.id)
				} else {
					query.equalTo("objectId", "==", options.id);
				}
				query.equalTo("userId", "==", uid);
				query.find().then(res => {
					console.log(res)
					res[0].num = 1;
					res[0].total_money = 1 * res[0].retailPrice;
					res[0].modify_retailPrice = res[0].retailPrice;
					this.products = res;
				})
			}else{
				this.products = uni.getStorageSync("products");
			}
		},
		onUnload() {
			uni.removeStorageSync("products");
		},
		methods: {
			//数量改变
			handleNumChange($event, index){
				//console.log($event,index)
				this.products[index].num = $event
				this.products[index].total_money = $event*Number(this.products[index].modify_retailPrice)
				uni.setStorageSync("products",this.products)
			},
			
			//删除点击
			handleDel(index){
				console.log(index)
				if(this.products.length == 1)
				{
					uni.showToast({title:"最少选择一个产品",icon:"none"})
				}else{
					this.products.splice(index,1);
					uni.setStorageSync("products",this.products)
				}
			},
			
			//实际价格输入
			getrealprice($event,index){
				this.products[index].modify_retailPrice = $event.target.value
				this.products[index].total_money = this.products[index].num*Number($event.target.value)
				uni.setStorageSync("products",this.products)
				//console.log($event,index)
			},
			
		}
	}
</script>

<style>
.page{
	background: #f6f5ec;
	font-size: 28rpx;
	height: 100vh;
	overflow: scroll;
}
.margin-b-10
{
	margin-top: 20rpx;
}
.input_withlabel{
	display: flex;
	align-items: center;
	margin: 10rpx 0;
}
.bottom_del{
	text-align: right;
}
.del{
	display: inline-flex;
	align-items: center;
	background: #aa2116;
	color: #fff;
	justify-content: flex-end;
	padding: 4rpx 12rpx;
	border-radius: 8rpx;
}
.input_label{
	border: 1rpx solid#ddd;
	border-radius: 8rpx;
	padding: 0 6rpx;
	width: 140rpx;
	color: #aa2116;
}
</style>
