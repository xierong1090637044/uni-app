<template>
	<view class="page">

		<loading v-if="loading"></loading>

		<view v-else class="content">
			<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="确定" @click-left="shaixuan"
			 @click-right="confrim_this" left-text="筛选">
				<view class="input-view">
					<uni-icon type="search" size="22" color="#666666" />
					<input confirm-type="search" class="input" type="text" placeholder="请输入产品名字或者含量" @confirm="confirm" @blur="confirm"/>
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

			<view class="uni-product-list">
				<scroll-view class="uni-product-list" scroll-y v-if="productList.length > 0">
					<radio-group v-for="(product,index) in productList" :key="index" style="display: flex;align-items: center;" @click.stop="radioChange(product,product.objectId,index)">
						<view>
							<radio style="transform:scale(0.9)" color="#426ab3" class="round blue" :checked="product.checked" />
						</view>

						<label class="uni-product" :for="''+index">
							<view>
								<image v-if="product.goodsIcon" class="product_image" :src="product.goodsIcon" mode="widthFix" lazy-load="true"></image>
								<image src="/static/goods-default.png" class="product_image" v-else mode="widthFix" lazy-load="true"></image>
							</view>

							<view style="margin-left: 20rpx;width: 100%;line-height: 40rpx;">
								<view style="font-size: 30rpx;" class="product_name">{{product.goodsName}}</view>
								<view class="product_reserve" v-if="product.stocks">
									<text v-if="product.stocks.stock_name">所存仓库:{{product.stocks.stock_name}}</text>
								</view>
								<view class="product_reserve" v-if="product.packageContent && product.packingUnit">规格:{{product.packageContent}}*{{product.packingUnit}}</view>
								<view class="product_reserve">库存数量:<text class="text_notice">{{product.reserve}}</text></view>

								<!--<view class="product_reserve">创建时间:<text class="text_notice">{{product.createdAt}}</text></view>-->
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

		<!--筛选模板-->
		<view v-if="showOptions" class="modal_background" @click="showOptions = false">
			<view class="showOptions">
				<navigator class="input_item1" hover-class="none" url="/pages/manage/category/category?type=choose" style="padding: 10rpx 30rpx 10rpx;border-bottom: 1rpx solid#F7F7F7;"
				 @click.stop="">
					<view style="display: flex;align-items: center;width: 100%;">
						<view class="left_item">类别</view>
						<view class="right_input"><input placeholder="产品类别" :value="category.class_text" disabled="true"></input></view>
					</view>

					<view>
						<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
					</view>
				</navigator>

				<navigator class="input_item1" hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose" style="padding: 10rpx 30rpx 10rpx;border-bottom: 1rpx solid#F7F7F7;"
				 v-if="value !=3&&type !='returing'" @click.stop="">
					<view style="display: flex;align-items: center;width: 100%;">
						<view class="left_item">仓库</view>
						<view class="right_input">
							<input placeholder="调出仓库" :value="stock.stock_name" disabled="true" v-if="type=='allocation'||type=='delivery'"></input>
							<input placeholder="盘点仓库" :value="stock.stock_name" disabled="true" v-if="type=='counting'"></input>
							<input placeholder="存放仓库" :value="stock.stock_name" disabled="true" v-if="type=='entering'"></input>
						</view>
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

		<!--一键清零显示-->
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
				identity: uni.getStorageSync("identity"),
				selectd_model: '',
				models_good: '',
				models_good_key: '',
				page_num: 1,
				search_text: '',
				url: null,
				showOptions: false, //是否显示筛选
				loading: true,
				productList: null,
				checked_option: 'goodsName', //tab的筛选条件
				category: "", //选择的类别
				stock: "", //选择的仓库
				type: '', //操作类型
				isOption: false, //是否筛选
				value: '', //操作类型值
				nextProducts: [],
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

			that.type = option.type
			that.value = option.value

			uid = uni.getStorageSync('uid');
			that.get_productList();
		},

		onShow() {

			that.category = uni.getStorageSync("category") || ""
			that.stock = uni.getStorageSync("warehouse") ? uni.getStorageSync("warehouse")[uni.getStorageSync("warehouse").length -
				1].stock : ""

			//操作完成后刷新数据
			if (uni.getStorageSync("is_option")) {
				that.nextProducts = [];
				that.page_num = 1;
				search_text = '';
				page_size = 30;
				that.productList = []
				that.get_productList();
			}
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
			confirm(e) {
				that.showOptions = false;
				that.isOption = true;
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
				console.log("3")
				that.productList = [];
				uni.removeStorageSync("category");
				uni.removeStorageSync("warehouse");
				that.category = "";
				that.stock = "";
				that.isOption = false;
				that.showOptions = false;
				that.get_productList()
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
				that.page_num = 1;
				that.checked_option = type;
				that.get_productList();
			},

			//多选选择触发
			radioChange: function(item, id, index) {
				//console.log(item, id,index)
				let checkProduct = item
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
					if (that.type == "allocation") {
						if (that.stock) {
							that.confrim_next()
						} else {
							that.nextProducts = []
							that.get_productList()
							uni.showToast({
								title: that.type == "allocation" ? "请在筛选中选择调拨的仓库" : "请在筛选中选择盘点的仓库",
								icon: "none"
							})
						}
					} else {
						that.confrim_next()
					}
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
				that.productList = []
				const query = Bmob.Query("NGoods");
				query.include("stocks");
				query.equalTo("userId", "==", uid);
				query.equalTo("status", "!=", -1);
				query.equalTo("order", "==", 0);
				if (that.category.type == 1) {
					query.equalTo("goodsClass", "==", that.category.objectId);
				} else {
					query.equalTo("second_class", "==", that.category.objectId);
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
				query.order("-" + that.checked_option); //按照条件降序
				query.find().then(res => {
					let key = 0;
					for (let product of res) {
						product.key = key
						product.checked = false
						for (let item of that.nextProducts) {
							if (item.objectId == product.objectId) {
								product.checked = true
							}
						}
						product.reserve = product.reserve.toFixed(uni.getStorageSync("setting") ? uni.getStorageSync("setting").show_float :
							0)
						key += 1
					}

					that.productList = res;
					that.loading = false;
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
