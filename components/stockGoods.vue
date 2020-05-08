<template>
	<view class="page">
		<view class="content">
			<view class="display_flex good_option_view">
				<view class="good_option" @click="selectd('goodsClass')">
					<view class="good_optionText">{{headerSelection.goodsClass.class_text || '分类'}}</view>
					<fa-icon type="angle-down" size="18" color="#999"></fa-icon>
				</view>
				<view class="good_option" >
					<view class="good_optionText">{{thisStock.stock_name || '店仓'}}</view>
					<fa-icon type="angle-down" size="18" color="#999"></fa-icon>
				</view>
				<view class="good_option" @click="selectd('order')">
					<view class="good_optionText">{{headerSelection.order.desc || '排序'}}</view>
					<fa-icon type="angle-down" size="18" color="#999"></fa-icon>
				</view>
				<!--<view class="good_option" @click="selectd('options')">
					<view class="good_optionText">筛选</view>
					<fa-icon type="angle-down" size="18" color="#999"></fa-icon>
				</view>-->
			</view>
			<scroll-view class="uni-product-list" scroll-y>
				<view v-if="productList && productList.length > 0">
					<view class="uni-product display_flex" v-for="(product,index) in productList" :key="index">

						<image v-if="product.goodsIcon" class="product_image" :src="product.goodsIcon+'!upyun520//fwfh/200x200'" mode="aspectFit" @click="priviewImg(product.goodsIcon)"></image>
						<image src="/static/goods-default.png" class="product_image" v-else mode="widthFix"></image>

						<view style="margin:0 20rpx;width: 80%;" @click="goDetail(product)">
							<view class="product_reserve display_flex_bet" style="width: 100%;">
								<view :style="{ 'color': product.stocktype==0 ? '#f30' : ''} " class="product_name">{{product.goodsName}}</view>
								
							</view>

							<view class="product_reserve display_flex_bet" style="width: 100%;">
								<view style="font-size: 24rpx;">成本价:<text class="text_notice">{{product.costPrice || 0}}</text></view>
								<view style="font-size: 24rpx;">零售价:{{product.retailPrice || 0}}</text></view>
							</view>

							<view class="product_reserve display_flex_bet" style="width: 100%;">
								<view style="font-size: 24rpx;">库存数量:<text class="text_notice">{{product.reserve}}</text></view>
								<view v-if="product.warning_num" style="font-size: 24rpx;">预警数量:<text class="text_notice">{{product.warning_num}}</text></view>
							</view>
							<view class="product_reserve display_flex_bet" style="width: 100%;" v-if="product.packageContent && product.packingUnit">
								<view class="product_reserve">包装：{{product.packageContent}}*{{product.packingUnit}}</view>
							</view>
						</view>
						<fa-icon type="angle-right" size="20" color="#426ab3"></fa-icon>
					</view>
				</view>
				<view v-else>
					<view style="margin-top: 100rpx;color:#333;font-weight: bold;text-align: center;font-size: 36rpx;">没有商品啦!</view>
				</view>

			</scroll-view>

			<view style="padding: 6rpx 0;border-top: 1rpx solid#ddd;">
				<uni-pagination :show-icon="true" total="100000" :current="page_num" @change="change_page($event)"></uni-pagination>
			</view>
		</view>

		<!--筛选模板-->
		<view v-if="showOptions" class="modal_background" @click="showOptions = false">
			<view class="showOptions">
				<view class="input_item1" style="padding: 10rpx 30rpx 10rpx;border-bottom: 1rpx solid#F7F7F7;">
					<view class="display_flex">
						<view>预警产品</view>
						<view @click.stop="" style="margin-left: 30rpx;">
							<switch :checked="stock_checked" @change="change_stocktatus" />
						</view>
					</view>

					<view class="display_flex" style="padding: 0 30rpx;margin-top: 10rpx;">
						<view>失效产品</view>
						<view @click.stop="" style="margin-left: 30rpx;">
							<switch :checked="checked" @change="change_timestatus" />
						</view>
					</view>
				</view>
				<view class="option_bottom">
					<view class="selection" @click="option_reset">重置</view>
					<view class="selection1" @click="option_confrim">确定</view>
				</view>
			</view>
		</view>

		<!--排序模板-->
		<view v-if="showOrder" class="modal_backgroundTransparent" @click="showOrder = false">
			<view class="showOptionsTransparent" style="top: 174rpx;">
				<view class="display_flex_bet" v-for="(item,index) in orders" :key="index" style="padding: 16rpx 30rpx;border-bottom: 1rpx solid#F7F7F7;" @click="selectOrder(item)">
					<view style="color: #333;">{{item.desc}}({{item.notice}})</view>
					<fa-icon type="check" size="18" color="#2ca879" v-if="item.checked"></fa-icon>
				</view>
			</view>
		</view>



	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"

	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	import uniPagination from "@/components/uni-pagination/uni-pagination.vue"
	import common from '@/utils/common.js';

	let uid;
	let that;
	export default {
		props:{
			thisStock:{},
			thisClass:{},
		},
		components: {
			uniNavBar,
			faIcon,
			uniPagination,
			uniIcon
		},
		data() {
			return {
				page_num: 1,
				page_size:30,
				showOrder: false, //是否显示排序
				showOptions: false, //是否显示筛选
				isPriviewImg:false,

				productList: null,
				search_text: '',
				user: uni.getStorageSync("user"),
				headerSelection: {
					goodsClass: '',
					stocks: "",
					order: {"order":"-createdAt"},
					options:'' ,
				},
				orders: [{
					"desc": "库存数量",
					"notice": "从高到低",
					"order": "-reserve",
					"checked":false,
				}, {
					"desc": "库存数量",
					"notice": "从低到高",
					"order": "reserve",
					"checked":false,
				}, {
					"desc": "创建日期",
					"notice": "最新",
					"order": "-createdAt",
					"checked":true,
				}, {
					"desc": "创建日期",
					"notice": "最晚",
					"order": "createdAt",
					"checked":false,
				},{
					"desc": "名字",
					"notice": "正序",
					"order": "goodsName",
					"checked":false,
				}]
			}
		},
		
		watch:{
			thisClass(value){
				that.page_num = 1
				that.headerSelection.goodsClass = uni.getStorageSync("category") || ''
				that.get_productList()
			}
		},

		mounted(option) {
			that = this;
			uni.removeStorageSync("category");
			
			uid = uni.getStorageSync('uid');
			that.get_productList();
			
			console.log(that.thisStock)
		},

		methods: {
			
			//选择当前排序
			selectOrder(item){
				for(let item of that.orders){
					item.checked = false
				}
				item.checked = true
				that.headerSelection.order = item
				that.get_productList()
			},

			//支持预览图片
			priviewImg(imgurl) {
				that.isPriviewImg = true
				uni.previewImage({
					current: imgurl,
					urls: [imgurl],
				});
			},

			//分页点击
			change_page(e) {
				that.page_num = e.current
				that.get_productList();
			},

			//是否失效switch的改变
			change_timestatus(e) {
				that.checked = e.detail.value
			},

			//是否已预警的改变
			change_stocktatus(e) {
				that.stock_checked = e.detail.value
			},

			//输入框确定输入
			input_confirm(e) {
				that.search_text = e.detail.value
				that.get_productList();
			},

			//筛选点击
			shaixuan() {
				that.showOptions = true;
			},

			//modal重置的确认点击
			option_reset() {
				uni.removeStorageSync("category");
				uni.removeStorageSync("warehouse");
				that.headerSelection = {
					goodsClass: '',
					stocks: "",
					order: {"order":"-createdAt"},
					options: '',
				};
				that.orders = [{
					"desc": "库存数量",
					"notice": "从高到低",
					"order": "-reserve",
					"checked":false,
				}, {
					"desc": "库存数量",
					"notice": "从低到高",
					"order": "reserve",
					"checked":false,
				}, {
					"desc": "创建日期",
					"notice": "最新",
					"order": "-createdAt",
					"checked":true,
				}, {
					"desc": "创建日期",
					"notice": "最晚",
					"order": "createdAt",
					"checked":false,
				},{
					"desc": "名字",
					"notice": "正序",
					"order": "goodsName",
					"checked":false,
				}]
				that.page_num = 1;
				that.search_text = "";
				that.get_productList();
			},

			//modal筛选的确认点击
			option_confrim() {
				if (uni.getStorageSync("category")) {
					that.category = uni.getStorageSync("category")
				}

				if (uni.getStorageSync("warehouse")) {
					that.stock = uni.getStorageSync("warehouse")[uni.getStorageSync("warehouse").length - 1].stock
				}
				that.showOptions = false;
				that.get_productList()
			},

			//头部的options选择
			selectd(type) {
				console.log(type)
				if (type == "goodsClass") {
					uni.navigateTo({
						url: "/pages/manage/category/category?type=choose"
					})
				} else if (type == "stocks") {
					uni.navigateTo({
						url: "/pages/manage/warehouse/warehouse?type=choose"
					})
				}else if(type == "order"){
					that.showOrder = true
				}else if(type == "options"){
					that.showOptions = true
				}
				
				uni.setStorageSync("isClickShaiXuan",true);
			},

			//点击去到详情
			goDetail(value) {
				console.log(value)
				uni.setStorageSync("now_product", value);
				if (value.order == 0 || value.order == 1) {
					uni.navigateTo({
						url: "/pages/manage/good_det/Ngood_det?id="+value.header.objectId+"&type=false"
					})
				} else {
					uni.showToast({
						icon:"none",
						title:"旧产品不支持跳转"
					})
				}
			},

			//查询产品列表
			get_productList() {
				uni.showLoading({
					title: "加载中..."
				})
				const query = Bmob.Query("Goods");
				query.equalTo("userId", "==", uid);

				query.equalTo("status", "!=", -1);
				query.equalTo("stocks", "==", that.thisStock.objectId);
				if (that.headerSelection.goodsClass.type == 1) {
					query.equalTo("goodsClass", "==", that.headerSelection.goodsClass.objectId);
				} else {
					query.equalTo("second_class", "==", that.headerSelection.goodsClass.objectId);
				}
				const query1 = query.equalTo("goodsName", "==", {
					"$regex": "" + that.search_text + ".*"
				});
				const query2 = query.equalTo("packageContent", "==", {
					"$regex": "" + that.search_text + ".*"
				});
				query.or(query1, query2);

				/*if (that.checked) {
					var timestamp = Date.parse(new Date());
					query.equalTo("nousetime", "<=", timestamp);
				}
				if (that.stock_checked) {
					query.equalTo("stocktype", "==", 0);
				}*/
				query.limit(that.page_size);
				query.skip(that.page_size * (that.page_num - 1));
				query.order(that.headerSelection.order.order); //按照条件降序
				query.include("goodsClass", "stocks", "second_class");
				query.find().then(res => {
					//console.log(res)
					for (let item of res) {
						item.reserve = item.reserve.toFixed(uni.getStorageSync("setting") ? uni.getStorageSync("setting").show_float :
							0)

						if (that.user.identity == 2 && that.user.rights && that.user.rights.othercurrent.indexOf("0") != -1) {
							item.costPrice = 0
						}
					}
					this.productList = res;
					uni.hideLoading();
					uni.removeStorageSync("isClickShaiXuan")
					//this.loading = false;
				});
			},

		}
	}
</script>

<style lang="scss">
	page {
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
		height: calc(100vh - 246rpx);
	}

	.uni-product {
		display: flex;
		padding: 10rpx 0;
		border-bottom: 1px solid#ddd;
		justify-content: space-between;
		align-items: center;
	}

	.product_image {
		width: 100rpx;
		height: 100rpx;
	}

	.product_name {
		font-weight: bold;
		color: #333;
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
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
