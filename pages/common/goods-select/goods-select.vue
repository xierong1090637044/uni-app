<template>
	<view class="page">

		<!--<loading v-if="loading"></loading>-->

		<view class="content">
			<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="确定" @click-left="shaixuan"
			 @click-right="confrim_this" :shadow="false">
				<view class="input-view display_flex">
					<fa-icon type="search" size="16" color="#999"></fa-icon>
					<input confirm-type="search" class="input" type="text" placeholder="请输入产品名字或者含量" @confirm="input_confirm" @blur="input_confirm"
					 :value="search_text" />
				</view>
			</uni-nav-bar>
			<view class="display_flex good_option_view">
				<view class="good_option" @click="selectd('goodsClass')">
					<view class="good_optionText">{{headerSelection.goodsClass.class_text || '分类'}}</view>
					<fa-icon type="angle-down" size="18" color="#999"></fa-icon>
				</view>
				<view class="good_option" @click="selectd('stocks')">
					<view class="good_optionText">{{headerSelection.stocks.stock_name || '店仓'}}</view>
					<fa-icon type="angle-down" size="18" color="#999"></fa-icon>
				</view>
				<view class="good_option" @click="selectd('order')">
					<view class="good_optionText">{{headerSelection.order.desc || '排序'}}</view>
					<fa-icon type="angle-down" size="18" color="#999"></fa-icon>
				</view>
				<view class="good_option" @click="option_reset">
					<view class="good_optionText">重置</view>
					<fa-icon type="repeat" size="16" color="#999"></fa-icon>
				</view>
			</view>

			<view class="uni-product-list">
				<scroll-view class="uni-product-list" scroll-y v-if="productList.length > 0">
					<radio-group v-for="(product,index) in productList" :key="index" style="display: flex;align-items: center;"
					 @click.stop="radioChange(product,product.objectId,index)">
						<view>
							<radio style="transform:scale(0.9);" color="#426ab3" class="round blue" :checked="product.checked" :disabled="product.disabled" />
						</view>

						<label class="uni-product" :for="''+index">
							<view>
								<image v-if="product.goodsIcon" class="product_image" :src="product.goodsIcon" mode="widthFix" lazy-load="true"></image>
								<image src="/static/goods-default.png" class="product_image" v-else mode="widthFix" lazy-load="true"></image>
							</view>

							<view style="margin:0 20rpx;width: 80%;">
								<view class="product_reserve display_flex_bet" style="width: 100%;">
									<view :style="{ 'color': product.stocktype==0 ? '#f30' : ''} " class="product_name text_overflow">{{product.goodsName}}</view>
									<view class="product_reserve" v-if="product.packageContent && product.packingUnit">{{product.packageContent}}*{{product.packingUnit}}</view>
								</view>
							
								<view class="product_reserve display_flex_bet" style="width: 100%;">
									<view style="font-size: 24rpx;" v-if="canSeeCostprice">成本价:<text class="text_notice">{{product.costPrice || 0}}</text></view>
									<view style="font-size: 24rpx;" v-else>成本价:<text class="text_notice">0</text></view>
									<view style="font-size: 24rpx;">零售价:{{product.retailPrice || 0}}</text></view>
								</view>
							
								<view class="product_reserve display_flex_bet" style="width: 100%;">
									<view v-if="product.stocks.stock_name" style="font-size: 24rpx;">所存仓库:{{product.stocks.stock_name}}</view>
									<view style="font-size: 24rpx;">库存:<text class="text_notice">{{product.reserve}}</text></view>
								</view>
							</view>
						</label>
					</radio-group>
				</scroll-view>
				<nocontent v-else :type="1"></nocontent>
			</view>

			<view style="padding: 6rpx 0;border-top: 1rpx solid#ddd;">
				<uni-pagination :show-icon="true" total="100000" :current="page_num" @change="change_page($event)"></uni-pagination>
			</view>
		</view>

		<!--排序模板-->
		<view v-if="showOrder" class="modal_backgroundTransparent" @click="showOrder = false">
			<view class="showOptionsTransparent">
				<view class="display_flex_bet" v-for="(item,index) in orders" :key="index" style="padding: 16rpx 30rpx;border-bottom: 1rpx solid#F7F7F7;" @click="selectOrder(item)">
					<view style="color: #333;">{{item.desc}}({{item.notice}})</view>
					<fa-icon type="check" size="18" color="#2ca879" v-if="item.checked"></fa-icon>
				</view>
			</view>
		</view>
	</view>

	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import loading from "@/components/Loading/index.vue"
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	import uniPagination from "@/components/uni-pagination/uni-pagination.vue"

	let uid;
	let that;
	let search_text = '';
	let page_size = 30;
	export default {
		components: {
			loading,
			uniNavBar,
			faIcon,
			uniIcon,
			uniPagination
		},
		data() {
			return {
				showOrder:false,
				user: uni.getStorageSync("user"),
				selectd_model: '',
				models_good: '',
				models_good_key: '',
				page_num: 1,
				search_text: '',
				url: null,
				loading: true,
				productList: null,
				value: '', //操作类型值
				nextProducts: [],
				negativeOut: false,
				
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
				}],
				canSeeCostprice:true,
			}
		},

		onLoad(option) {
			that = this;
			this.handle_data();

			if (option.type == "entering") {
				this.url = "../good_confrim/good_confrim?value=" + option.value
			} else if (option.type == "delivery") {
				this.url = "../goods_out/goods_out?value=" + option.value
			} else if (option.type == "returing") {
				this.url = "../good_return/good_return?value=" + option.value + "&type=" + option.type
			} else if (option.type == "counting") {
				this.url = "../good_count/good_count"
			} else if (option.type == "allocation") {
				this.url = "../good_allocation/good_allocation"
			} else if (option.type == "prodution") {
				this.url = "../good_production/good_production"
			}

			if (uni.getStorageSync("setting") && uni.getStorageSync("setting").negativeOut) {
				that.negativeOut = uni.getStorageSync("setting").negativeOut
			}

			that.type = option.type
			that.value = option.value

			uid = uni.getStorageSync('uid');
			if(that.user.identity == 2&&that.user.rights &&that.user.rights.othercurrent.indexOf("0") !=-1){
				that.canSeeCostprice = false
			}
		},

		onShow() {
			that.headerSelection.goodsClass = uni.getStorageSync("category") || ''
			that.headerSelection.stocks = uni.getStorageSync("warehouse") ? uni.getStorageSync("warehouse")[0].stock : ''
			
			if(uni.getStorageSync("is_option")){
				that.nextProducts = [];
				search_text = '';
				page_size = 30;
				that.page_num = 1;
				that.option_reset()
			}
			that.get_productList();
		},

		onUnload() {
			//数据重置
			that.nextProducts = [];
			search_text = '';
			page_size = 30;
			that.page_num = 1;
			uni.removeStorageSync("is_option"); //用于判断是否进行了操作
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

			//分页点击
			change_page(e) {
				that.page_num = e.current
				that.get_productList();
			},

			//筛选点击
			shaixuan() {
				that.showOptions = true;
			},

			//输入框输入点击确定
			input_confirm(e) {
				search_text = e.detail.value
				that.search_text = e.detail.value
				that.page_num = 1
				that.get_productList()
			},

			//确定点击
			confrim_this() {
				that.go_goodsconfrim();
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
				}]
				that.page_num = 1;
				that.search_text = "";
				that.get_productList();
			},

			//modal筛选的确认点击
			option_confrim() {
				if (uni.getStorageSync("category")) {
					that.isOption = true;
					that.category = uni.getStorageSync("category")
				}

				if (uni.getStorageSync("warehouse")) {
					that.isOption = true;
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
			},

			//多选选择触发
			radioChange: function(item, id, index) {
				//console.log(item, id,index)
				let checkProduct = item

				if (that.productList[index].disabled) {
					that.productList[index].checked = false
					uni.showToast({
						icon: "none",
						title: "当前产品不能选择"
					})

					return
				}

				if (that.productList[index].checked) { // 已选中时取消
					that.productList[index].checked = false

					for (let key in that.nextProducts) {
						if (that.nextProducts[key].objectId == id) {
							that.nextProducts.splice(key, 1)
						}
					}
				} else { // 未选中状态
					that.productList[index].checked = true
					that.nextProducts.push(checkProduct)
				}
			},

			//点击去到添加产品
			go_goodsconfrim() {
				if (that.nextProducts.length == 0) {
					uni.showToast({
						title: "请选择产品",
						icon: "none"
					})
				} else {
					that.confrim_next()
				}
			},

			confrim_next() {
				let index = 0;
				if (that.type == "entering") {
					for (let item of that.nextProducts) {
						that.nextProducts[index] = (typeof item == 'object') ? item : JSON.parse(item)
						that.nextProducts[index].num = 0;
						that.nextProducts[index].total_money = 0 * that.nextProducts[index].costPrice;
						that.nextProducts[index].really_total_money = 0 * that.nextProducts[index].costPrice;
						that.nextProducts[index].modify_retailPrice = that.nextProducts[index].costPrice;
						index += 1;
					}
				} else {
					for (let item of that.nextProducts) {
						that.nextProducts[index] = (typeof item == 'object') ? item : JSON.parse(item)
						that.nextProducts[index].num = 0;
						that.nextProducts[index].total_money = 0 * that.nextProducts[index].retailPrice;
						that.nextProducts[index].really_total_money = 0 * that.nextProducts[index].retailPrice;
						that.nextProducts[index].modify_retailPrice = that.nextProducts[index].retailPrice;
						index += 1;
					}
				}

				uni.setStorageSync("products", that.nextProducts);
				uni.navigateTo({
					url: this.url
				})
			},

			//查询产品列表
			get_productList() {
				uni.showLoading({title:"加载中.."})
				
				that.productList = []
				const query = Bmob.Query("Goods");
				query.include("stocks","header");
				query.equalTo("userId", "==", uid);
				query.equalTo("stocks", "==", that.headerSelection.stocks.objectId);
				query.equalTo("status", "!=", -1);
				if (that.value == 3 || that.value == 4) {
					query.equalTo("order", "==", 0);
				} else {
					query.equalTo("order", "!=", 0);
				}
				if (that.headerSelection.goodsClass.type == 1) {
					query.equalTo("goodsClass", "==", that.headerSelection.goodsClass.objectId);
				} else {
					query.equalTo("second_class", "==", that.headerSelection.goodsClass.objectId);
				}
				const query1 = query.equalTo("goodsName", "==", {
					"$regex": "" + search_text + ".*"
				});
				const query2 = query.equalTo("packageContent", "==", {
					"$regex": "" + search_text + ".*"
				});
				query.or(query1, query2);
				query.limit(page_size);
				query.skip(page_size * (that.page_num - 1));
				query.order(that.headerSelection.order.order,"goodsName"); //按照条件降序
				query.find().then(res => {
					let key = 0;
					for (let product of res) {
						product.key = key
						product.checked = false

						if (that.type == "delivery" && product.reserve <= 0 && that.negativeOut == false) {
							product.disabled = true
						}

						for (let item of that.nextProducts) {
							if (item.objectId == product.objectId) {
								product.checked = true
							}
						}

						product.reserve = product.reserve.toFixed(uni.getStorageSync("setting") ? uni.getStorageSync("setting").show_float:0)
						if(product.order == 1){
							product.packingUnit = product.header.packingUnit
						}
						key += 1
					}

					that.productList = res;
					uni.hideLoading();
					//that.loading = false;
					uni.removeStorageSync("is_option"); //用于判断是否进行了操作
				});
			},

			//数据重置
			handle_data() {
				uni.removeStorageSync("products");
				uni.removeStorageSync("category");
				uni.removeStorageSync("warehouse");
				uni.removeStorageSync("out_warehouse");
				uni.removeStorageSync("shop");

				search_text = '';
				page_size = 30;
			},

		}
	}
</script>

<style>
	page {
		background: #FFFFFF;
	}

	.gLButton {
		position: fixed;
		bottom: 10%;
		right: 18rpx;
		background: #007AFF;
		color: #fff;
		height: 120rpx;
		line-height: 120rpx;
		width: 120rpx;
		border-radius: 50%;
		box-shadow: 0 20rpx 20rpx rgba(108, 158, 235);
	}

	.text_notice {
		margin-left: 6rpx;
	}

	.custom_mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 1;
		background-color: rgba(0, 0, 0, 0.3);
	}

	.confrim_button {
		background: #aa2116;
		color: #fff;
		font-weight: bold;
		font-size: 32rpx;
	}

	.custom_mask_content {
		position: fixed;
		bottom: 0;
		left: 0;
		width: calc(100% - 60rpx);
		z-index: 10;
		background: #fff;
		padding: 30rpx;
	}

	.content {
		height: 100%;
		overflow: hidden;
	}

	.uni-product-list {
		padding: 0 10rpx;
		width: calc(100% - 20rpx);
		height: calc(100vh - 220rpx);
	}

	.uni-product {
		display: flex;
		padding: 10rpx 0;
		border-bottom: 1px solid#ddd;
		justify-content: space-between;
		align-items: center;
		width: 89%;
		margin-left: 20rpx;
	}

	.product_image {
		width: 80rpx;
		height: 80rpx;
	}

	.product_name {
		font-weight: bold;
		color: #333;
		max-width: 60%;
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
