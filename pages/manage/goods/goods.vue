<template>
	<view class="page">

		<loading v-if="loading"></loading>

		<view v-else class="content">
			<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="添加" @click-left="shaixuan" @click-right="goto_add" left-text="筛选">
				<view class="input-view">
					<uni-icon type="search" size="22" color="#666666" />
					<input confirm-type="search" class="input" type="text" placeholder="输入搜索关键词" @confirm="input_confirm" />
				</view>
			</uni-nav-bar>
			<view class="display_flex good_option_view">
				<view class="good_option" @click="selectd('createdAt')">
					<text :class="(checked_option == 'createdAt')?'option_selected':''">创建时间</text>
					<fa-icon type="check" size="20" color="#1d953f" v-if="checked_option == 'createdAt'"></fa-icon>
				</view>
				<view class="good_option" @click="selectd('goodsName')">
					<text :class="(checked_option == 'goodsName')?'option_selected':''">名字</text>
					<fa-icon type="check" size="20" color="#1d953f" v-if="checked_option == 'goodsName'"></fa-icon>
				</view>
				<view class="good_option" @click="selectd('reserve')">
					<text :class="(checked_option == 'reserve')?'option_selected':''">库存</text>
					<fa-icon type="check" size="20" color="#1d953f" v-if="checked_option == 'reserve'"></fa-icon>
				</view>
			</view>
			<scroll-view class="uni-product-list" scroll-y @scrolltolower="load_more">
				<view class="uni-product" v-for="(product,index) in productList" :key="index">
					<view>
						<image v-if="product.goodsIcon" class="product_image" :src="product.goodsIcon" mode="widthFix"></image>
						<image src="/static/goods-default.png" class="product_image" v-else mode="widthFix"></image>
					</view>

					<view style="margin-left: 20rpx;width: 100%;line-height: 40rpx;" @click="goDetail(product)">
						<view style="font-size: 30rpx;" class="product_name">{{product.goodsName}}</view>
						<!--<view class="product_reserve" v-if="product.stocks.stock_name">所存仓库:<text class="text_notice">{{product.stocks.stock_name}}</text></view>-->
						<view class="product_reserve" v-if="product.packageContent && product.packingUnit">规格:<text class="text_notice">{{product.packageContent}}*{{product.packingUnit}}</text></view>
						<view class="product_reserve">库存数量:<text class="text_notice">{{product.reserve}}</text></view>
						<view class="product_reserve">创建时间:<text class="text_notice">{{product.createdAt}}</text></view>
					</view>

					<fa-icon type="angle-right" size="20" color="#426ab3"></fa-icon>
				</view>
			</scroll-view>			
			
		</view>

		<!--筛选模板-->
		<view v-if="showOptions" class="modal_background" @click="showOptions = false">
			<view class="showOptions">
				<navigator class="input_item1" hover-class="none" url="/pages/manage/category/category?type=choose">
					<view style="display: flex;align-items: center;width: 100%;">
						<view class="left_item">类别</view>
						<view class="right_input"><input placeholder="产品类别" :value="category.class_text" disabled="true"></input></view>
					</view>
			
					<view>
						<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
					</view>
				</navigator>
				
				<navigator class="input_item1" hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose">
					<view style="display: flex;align-items: center;width: 100%;">
						<view class="left_item">仓库</view>
						<view class="right_input"><input placeholder="存放仓库" :value="stock.stock_name" disabled="true"></input></view>
					</view>
				
					<view>
						<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
					</view>
				</navigator>
				
				<view class="display_flex" style="padding: 0 30rpx;margin-top: 10rpx;">
					<view>是否失效</view>
					<view @click.stop="" style="margin-left: 30rpx;" ><switch :checked="checked" @change="change_timestatus"/></view>
				</view>
				
				<view class="option_bottom">
					<view class="selection"  @click="option_reset">重置</view>
					<view class="selection1" @click="option_confrim">确定</view>
				</view>
			</view>
		</view>
		

	</view>
</template>

<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import loading from "@/components/Loading/index.vue"
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	
	import Bmob from '@/utils/bmob.js'
	import common from '@/utils/common.js';

	let uid;
	let that;
	let search_text = '';
	let page_size = 50;
	export default {
		components: {
			loading,
			uniNavBar,
			faIcon,
			uniIcon
		},
		data() {
			return {
				showOptions: false, //是否显示筛选
				loading: true,
				productList: null,
				checked_option: 'createdAt',//tab的筛选条件
				category:"",//选择的类别
				stock:"",//选择的仓库
				checked:false,//选择的是否失效
			}
		},
	
		onLoad() {
			that = this;
			uni.removeStorageSync("category");
			uni.removeStorageSync("warehouse");
			
			uid = uni.getStorageSync('uid');
			
			that.get_productList();
		},
		onShow() {
			uni.removeStorageSync("now_product");
			if(uni.getStorageSync("category")){
				that.showOptions = true;
				that.category = uni.getStorageSync("category")
			}
			
			if(uni.getStorageSync("warehouse")){
				that.showOptions = true;
				that.stock = uni.getStorageSync("warehouse")[uni.getStorageSync("warehouse").length - 1].stock
			}
			
			if(uni.getStorageSync("is_add")){
				that.get_productList();
			}
			
		},

		onUnload() {
			common.handleData()
			//数据重置
			search_text = '';
			page_size = 50;
			
			uni.removeStorageSync("is_add");
		},

		methods: {
			
			//是否失效switch的改变
			change_timestatus(e){
				console.log(e)
				that.checked = e.detail.value
			},
			
			//输入框确定输入
			input_confirm(e){
				console.log(e)
				search_text = e.detail.value
				that.get_productList();
			},
			
			//筛选点击
			shaixuan(){
				that.showOptions = true;
			},
			
			//确定点击
			goto_add(){
				this.goAdd();
			},
			
			//modal重置的确认点击
			option_reset(){
				uni.removeStorageSync("category");
				uni.removeStorageSync("warehouse");
				that.category ="";
				that.stock ="";
				that.showOptions= false;
				that.get_productList()
			},
			
			//modal筛选的确认点击
			option_confrim(){
				if(uni.getStorageSync("category")){
					that.category = uni.getStorageSync("category")
				}
				
				if(uni.getStorageSync("warehouse")){
					that.stock = uni.getStorageSync("warehouse")[uni.getStorageSync("warehouse").length - 1].stock
				}
				that.showOptions= false;
				that.get_productList()
			},
			
			//头部的options选择
			selectd(type) {
				page_size = 50;
				that.checked_option = type;
				that.get_productList();
			},

			//加载更多
			load_more() {
				page_size += 50;
				that.get_productList();
			},

			//点击去到详情
			goDetail(value) {
				console.log(value)
				uni.setStorageSync("now_product", value);
				uni.navigateTo({
					url: "../good_det/good_det?id="+value.objectId+"&type=false"
				})
			},

			//点击去到添加产品
			goAdd() {
				uni.navigateTo({
					url: "../good_add/good_add"
				})
			},

			//查询产品列表
			get_productList() {
				const query = Bmob.Query("Goods");
				query.select("goodsName","reserve","goodsIcon","packageContent","packingUnit");
				query.equalTo("userId", "==", uid);
				query.equalTo("stocks", "==", that.stock.objectId);
				query.equalTo("status", "!=", -1);
				query.equalTo("second_class", "==", that.category.objectId);
				const query1 = query.equalTo("goodsName", "==", {
					"$regex": "" + search_text + ".*"
				});
				const query2 = query.equalTo("packageContent", "==", {
					"$regex": "" + search_text + ".*"
				});
				query.or(query1, query2);
				
				if(that.checked){
					var timestamp = Date.parse(new Date());
					query.equalTo("bad_time", "<=", timestamp);
				}
				query.limit(page_size);
				query.order("-" + that.checked_option); //按照条件降序
				query.find().then(res => {
					//console.log(res)
					this.productList = res;
					this.loading = false;
				});
			},

		}
	}
</script>

<style lang="scss">
	page{
		background: #fff;
	}
	.text_notice {
		margin-left: 6rpx;
	}

	.content {
		height: 100%;
		overflow: hidden;
	}

	.uni-product-list {
		padding: 0 10rpx;
		width: calc(100% - 20rpx);
		height: calc(100vh - 164rpx);
	}

	.uni-product {
		display: flex;
		padding: 10rpx 0;
		border-bottom: 1px solid#ddd;
		justify-content: space-between;
		align-items: center;
	}

	.product_image {
		width: 80rpx;
		height: 80rpx;
	}

	.product_name {
		font-weight: bold;
		color: #333;
	}

	.product_reserve {
		color: #6C757D;
		font-size: 24rpx;
		font-weight: bold;
	}
	
	.title {
		font-size: 15px;
		line-height: 20px;
		color: #333333;
		padding: 15px;
	}
	
	.city {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-left: 8px;
		white-space: nowrap;
	}
	
	.input-view {
		width: 92%;
		display: flex;
		background-color: #e7e7e7;
		height: 30px;
		border-radius: 15px;
		padding: 0 4%;
		flex-wrap: nowrap;
		margin: 8rpx 0;
		line-height: 30px;
	}
	
	.input-view .uni-icon {
		line-height: 30px !important;
	}
	
	.input-view .input {
		height: 30px;
		line-height: 30px;
		width: 94%;
		padding: 0 3%;
	}
		
</style>
