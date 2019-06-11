<template>
	<view class="page">
		
		<loading v-if="loading"></loading>
		
		<view v-else class="content">
			<!--<uni-nav-bar left-icon="back" right-text="菜单" left-text="返回" title="标题" @click-left="back" />-->
			<scroll-view class="uni-product-list">
					<checkbox-group  @change="radioChange">
						<view  v-for="(product,index) in productList" :key="index" style="display: flex;align-items: center;">
							<view><checkbox :value="index"  style="transform:scale(0.9)" color="#426ab3" :data="index"/></view>
							
							<view class="uni-product">
								<view>
									<image v-if="product.goodsIcon" class="product_image" :src="product.goodsIcon" mode="widthFix" lazy-load="true"></image>
									<image src="../../../static/goods-default.png" class="product_image" v-else mode="widthFix" lazy-load="true"></image>
								</view>
								
								<view style="margin-left: 20rpx;width: 100%;line-height: 40rpx;">
									<view style="font-size: 30rpx;" class="product_name">{{product.goodsName}}</view>
									<view class="product_reserve">库存数量:<text class="text_notice">{{product.reserve}}</text></view>
									<view class="product_reserve">创建时间:<text class="text_notice">{{product.createdTime}}</text></view>
								</view>
							</view>
						</view>
					</checkbox-group>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	import config from '../../../utils/config.js';
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import loading from "@/components/Loading/index.vue"
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	
	let products =[];
	let indexs = [];
	export default {
		components: {
			loading,
			uniNavBar,
			faIcon,
			uniIcon
		},
		data(){
			return {
				loading:true,
				productList:null,
			}
		},
		// #ifdef APP-PLUS
		//监听原生标题栏按钮点击事件
		onNavigationBarButtonTap(Object) {  
        console.log(Object);
				if(Object.text == "确定"){
					this.go_goodsconfrim();
				}
				
    },
		// #endif
		
		onLoad() {
			
		},
		
		onShow() {
			this.handle_data();
			let uid = uni.getStorageSync('uid');
			
			this.$http.post('/do_getdata.php', {userid:uid}, {
			     header: {
			         'Content-Type': 'application/x-www-form-urlencoded' //自定义请求头信息
			     },
			  }).then(res => {
					this.productList = res.data.alldata;
					this.loading = false;
			  }).catch(err => {
			
			  });
		},
		
		methods: {
			
			//多选选择触发
			radioChange: function(e) {
				indexs = e.detail.value;
				console.log(indexs)
				
				/*products =[];
				for(let i =0;i<indexs.length;i++)
				{
					this.productList[indexs[i]].num = 1;
					this.productList[indexs[i]].total_money = 1*this.productList[indexs[i]].retailPrice;
					this.productList[indexs[i]].modify_retailPrice = this.productList[indexs[i]].retailPrice;
					products.push(this.productList[indexs[i]])
				}
				uni.setStorageSync("products",products);
				*/
			},
			
			//点击去到添加产品
			go_goodsconfrim(){
				console.log(indexs)
				if(indexs.length == 0)
				{
					uni.showToast({title:"请选择产品",icon:"none"})
				}else{
					for(let i =0;i<indexs.length;i++)
					{
						this.productList[indexs[i]].num = 1;
						this.productList[indexs[i]].total_money = 1*this.productList[indexs[i]].retailPrice;
						this.productList[indexs[i]].modify_retailPrice = this.productList[indexs[i]].retailPrice;
						products.push(this.productList[indexs[i]])
					}
					uni.setStorageSync("products",products);
					uni.navigateTo({url:"../good_confrim/good_confrim"})
				}
			},
			
			//数据重置
			handle_data(){
				products =[];
			},
			
		}
	}
</script>

<style>
.text_notice
{
	margin-left: 6rpx;
}
.content
{
	height: 100%;
	overflow: hidden;
}
.uni-product-list
{
	padding: 0 10rpx;
	width: calc(100% - 20rpx);
}
.uni-product
{
	display: flex;
	padding: 10rpx 0;
	border-bottom: 1px solid#ddd;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-left: 20rpx;
}
.product_image
{
	width: 80rpx;
	height: 80rpx;
}
.product_name
{
	font-weight: bold;
	color: #333;
}
.product_reserve
{
	color: #6C757D;
	font-size: 24rpx;
	font-weight: bold;
}
</style>
