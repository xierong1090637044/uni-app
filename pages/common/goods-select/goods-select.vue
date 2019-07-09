<template>
	<view class="page">

		<loading v-if="loading"></loading>

		<view v-else class="content">
			<!--<uni-nav-bar left-icon="back" right-text="菜单" left-text="返回" title="标题" @click-left="back" />-->
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
				<checkbox-group @change="radioChange">
					<view v-for="(product,index) in productList" :key="index" style="display: flex;align-items: center;">
						<view>
							<checkbox :value="index" style="transform:scale(0.9)" color="#426ab3" :data="index" class="round blue" :id="index" />
						</view>

						<label class="uni-product" :for="index">
							<view>
								<image v-if="product.goodsIcon" class="product_image" :src="product.goodsIcon" mode="widthFix" lazy-load="true"></image>
								<image src="/static/goods-default.png" class="product_image" v-else mode="widthFix" lazy-load="true"></image>
							</view>

							<view style="margin-left: 20rpx;width: 100%;line-height: 40rpx;">
								<view style="font-size: 30rpx;" class="product_name">{{product.goodsName}}</view>
								<view class="product_reserve" v-if="product.stocks.stock_name">所存仓库:<text class="text_notice">{{product.stocks.stock_name}}</text></view>
								<view class="product_reserve">库存数量:<text class="text_notice">{{product.reserve}}</text></view>
								<view class="product_reserve">创建时间:<text class="text_notice">{{product.createdAt}}</text></view>
							</view>
						</label>
					</view>
				</checkbox-group>
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
	import Bmob from '@/utils/bmob.js'

	let indexs = [];
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
				url: null,
				showOptions: false, //是否显示筛选
				loading: true,
				productList: null,
				checked_option: 'createdAt', //tab的筛选条件
				category: "", //选择的类别
				stock: "", //选择的仓库
			}
		},
		// #ifdef APP-PLUS
		//监听原生标题栏按钮点击事件
		onNavigationBarButtonTap(Object) {
			if (Object.text == "确定") {
				this.go_goodsconfrim();
			}
			if (Object.text == "筛选") {
				that.showOptions = true;
			}

		},
		// #endif

		onLoad(option) {
			that = this;

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
			this.handle_data();
			uni.removeStorageSync("products");

			if (uni.getStorageSync("category")) {
				that.category = uni.getStorageSync("category")
			}

			if (uni.getStorageSync("warehouse")) {
				that.stock = uni.getStorageSync("warehouse")[uni.getStorageSync("warehouse").length - 1].stock
			}

			if (uni.getStorageSync("is_option")) {
				that.get_productList();
			}
		},
		onUnload() {
			//数据重置
			search_text = '';
			page_size = 50;
			uni.removeStorageSync("is_option"); //用于判断是否进行了操作
		},

		methods: {
			//modal重置的确认点击
			option_reset() {
				uni.removeStorageSync("category");
				uni.removeStorageSync("warehouse");
				that.category = "";
				that.stock = "";
				that.showOptions = false;
				that.get_productList()
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
				page_size = 50;
				that.checked_option = type;
				that.get_productList();
			},

			//加载更多
			load_more() {
				page_size += 50;
				that.get_productList();
			},

			//多选选择触发
			radioChange: function(e) {
				indexs = e.detail.value;
			},

			//点击去到添加产品
			go_goodsconfrim() {
				console.log(indexs)
				if (indexs.length == 0) {
					uni.showToast({
						title: "请选择产品",
						icon: "none"
					})
				} else {
					let products = [];
					for (let i = 0; i < indexs.length; i++) {
						this.productList[indexs[i]].num = 1;
						this.productList[indexs[i]].total_money = 1 * this.productList[indexs[i]].retailPrice;
						this.productList[indexs[i]].modify_retailPrice = this.productList[indexs[i]].retailPrice;
						products.push(this.productList[indexs[i]])
					}
					uni.setStorageSync("products", products);
					uni.navigateTo({
						url: this.url
					})
				}
			},

			//查询产品列表
			get_productList() {
				const query = Bmob.Query("Goods");
				query.equalTo("userId", "==", uid);
				query.equalTo("stocks", "==", that.stock.objectId);
				query.equalTo("status", "!=", -1);
				query.equalTo("second_class", "==", that.category.objectId);
				query.equalTo("goodsName", "==", {
					"$regex": "" + search_text + ".*"
				});
				query.limit(page_size);
				query.order("-" + that.checked_option); //按照条件降序
				query.include("userId");
				query.include("goodsClass");
				query.include("stocks");
				query.find().then(res => {
					//console.log(res)
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
				page_size = 50;
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
		height: calc(100vh - 80rpx);
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
</style>
