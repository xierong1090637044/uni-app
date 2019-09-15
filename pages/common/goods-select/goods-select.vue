<template>
	<view class="page">

		<loading v-if="loading"></loading>

		<view v-else class="content">
			<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="确定" @click-left="shaixuan"
			 @click-right="confrim_this" left-text="筛选">
				<view class="input-view">
					<uni-icon type="search" size="22" color="#666666" />
					<input confirm-type="search" class="input" type="text" placeholder="输入搜索关键词" @confirm="confirm" />
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

			<scroll-view class="uni-product-list" scroll-y>
				<checkbox-group @change="radioChange">
					<view v-for="(product,index) in productList" :key="index" style="display: flex;align-items: center;">
						<view>
							<checkbox :value="JSON.stringify(product)" style="transform:scale(0.9)" color="#426ab3" :data="index" class="round blue"
							 :id="''+index" :checked="product.checked" />
						</view>

						<label class="uni-product" :for="''+index">
							<view>
								<image v-if="product.goodsIcon" class="product_image" :src="product.goodsIcon" mode="widthFix" lazy-load="true"></image>
								<image src="/static/goods-default.png" class="product_image" v-else mode="widthFix" lazy-load="true"></image>
							</view>

							<view style="margin-left: 20rpx;width: 100%;line-height: 40rpx;">
								<view style="font-size: 30rpx;" class="product_name">{{product.goodsName}}</view>
								<!--<view class="product_reserve" v-if="product.stocks.stock_name">所存仓库:<text class="text_notice">{{product.stocks.stock_name}}</text></view>-->
								<!--<view class="product_reserve" v-if="product.packageContent && product.packingUnit">规格:<text class="text_notice">{{product.packageContent}}*{{product.packingUnit}}</text></view>-->
								<view class="product_reserve">库存数量:<text class="text_notice">{{product.reserve}}</text></view>
								<view class="product_reserve">创建时间:<text class="text_notice">{{product.createdAt}}</text></view>
							</view>
						</label>
					</view>
				</checkbox-group>
			</scroll-view>
			<view style="padding: 6rpx 0;border-top: 1rpx solid#ddd;">
				<uni-pagination :show-icon="true" total="100000" :current="page_num" @change="change_page($event)"></uni-pagination>
			</view>
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

				<view class="option_bottom">
					<view class="selection" @click="option_reset">重置</view>
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
	import uniPagination from "@/components/uni-pagination/uni-pagination.vue"

	let products = [];
	let search_products = [];
	let all_products = [];
	let uid;
	let that;
	let search_text = '';
	let page_size = 30;
	let page_num = 1;
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
				page_num:1,
				search_text: '',
				url: null,
				showOptions: false, //是否显示筛选
				loading: true,
				productList: null,
				checked_option: 'createdAt', //tab的筛选条件
				category: "", //选择的类别
				stock: "", //选择的仓库
			}
		},

		onLoad(option) {
			that = this;
			this.handle_data();

			if (option.type == "entering") {
				this.url = "../good_confrim/good_confrim"
			} else if (option.type == "delivery") {
				this.url = "../goods_out/goods_out"
			} else if (option.type == "returing") {
				this.url = "../good_return/good_return"
			} else if (option.type == "counting") {
				this.url = "../good_count/good_count"
			}

			uid = uni.getStorageSync('uid');
			that.get_productList();
		},

		onShow() {

			uni.removeStorageSync("products");

			if (uni.getStorageSync("category")) {
				that.showOptions = true;
				that.category = uni.getStorageSync("category")
			}

			if (uni.getStorageSync("warehouse")) {
				that.showOptions = true;
				that.stock = uni.getStorageSync("warehouse")[uni.getStorageSync("warehouse").length - 1].stock
			}

			if (uni.getStorageSync("is_option")) {
				this.productList = []
				that.get_productList();
			}
		},
		
		onHide() {
			//数据重置
			search_text = '';
			page_size = 30;
			products = [];
			all_products = [];
			search_products = [];
			uni.removeStorageSync("is_option"); //用于判断是否进行了操作
		},

		methods: {
			
			//分页点击
			change_page(e){
				page_num = e.current
				that.get_productList();
			},
			
			//筛选点击
			shaixuan() {
				that.showOptions = true;
			},

			//输入框输入点击确定
			confirm(e) {
				search_text = e.detail.value
				that.search_text = e.detail.value
				that.page_num = 1
				page_num = 1
				
				that.get_productList()
			},

			//确定点击
			confrim_this() {
				this.go_goodsconfrim();
			},

			//modal重置的确认点击
			option_reset() {
				this.productList = [];
				uni.removeStorageSync("category");
				uni.removeStorageSync("warehouse");
				that.category = "";
				that.stock = "";
				that.showOptions = false;
				that.get_productList()
			},

			//modal筛选的确认点击
			option_confrim() {
				this.productList = [];
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
				page_size = 30;
				that.checked_option = type;
				that.get_productList();
			},

			//多选选择触发
			radioChange: function(e) {
				let current = []
				if(search_text){
					search_products[page_num - 1] = e.detail.value
				}else{
					products[page_num - 1] = e.detail.value
				}
				all_products = search_products.concat(products)
				all_products = all_products.reduce(function (a, b) { return a.concat(b)} );
				
				console.log(all_products)
			},

			//点击去到添加产品
			go_goodsconfrim() {
				console.log(all_products)
				if (all_products.length == 0) {
					uni.showToast({
						title: "请选择产品",
						icon: "none"
					})
				} else {
					let index = 0;
					for (let item of all_products) {
						all_products[index] = JSON.parse(item)
						all_products[index].num = 1;
						all_products[index].total_money = 1 * all_products[index].retailPrice;
						all_products[index].modify_retailPrice = all_products[index].retailPrice;
						index += 1;
					}
					uni.setStorageSync("products", all_products);
					uni.navigateTo({
						url: this.url
					})
				}
			},

			//查询产品列表
			get_productList() {
				that.productList = []
				const query = Bmob.Query("Goods");
				query.select("goodsName","reserve","goodsIcon","packageContent","packingUnit","retailPrice","costPrice");
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
				query.limit(page_size);
				query.skip(page_size*(page_num-1));
				query.order("-" + that.checked_option); //按照条件降序
				query.find().then(res => {
					console.log(all_products)
					
					if(all_products.length >=1){
						for(let item of all_products){
							for(let product of res){
								if(product.objectId == JSON.parse(item).objectId){
									product.checked = true
								}
								
							}
						}
					}
					
					this.productList = res;
					this.loading = false;
				});
			},

			//数据重置
			handle_data() {
				uni.removeStorageSync("category");
				uni.removeStorageSync("warehouse");
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
		height: calc(100vh - 236rpx);
	}

	.uni-product {
		display: flex;
		padding: 10rpx 0;
		border-bottom: 1px solid#ddd;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin-left: 20rpx;
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
