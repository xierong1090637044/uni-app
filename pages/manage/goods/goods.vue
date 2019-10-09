<template>
	<view class="page">

		<loading v-if="loading"></loading>

		<view v-else class="content">
			<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="添加" @click-left="shaixuan"
			 @click-right="goto_add" left-text="筛选">
				<view class="input-view">
					<uni-icon type="search" size="22" color="#666666" />
					<input confirm-type="search" class="input" type="text" placeholder="请输入产品名字或者含量" @confirm="input_confirm" />
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
				<view v-if="productList.length > 0">
					<view class="uni-product" v-for="(product,index) in productList" :key="index">
						<view>
							<image v-if="product.goodsIcon" class="product_image" :src="product.goodsIcon" mode="widthFix" @click="priviewImg(product.goodsIcon)"></image>
							<image src="/static/goods-default.png" class="product_image" v-else mode="widthFix"></image>
						</view>

						<view style="margin-left: 20rpx;width: 100%;line-height: 40rpx;" @click="goDetail(product)">
							<view style="font-size: 30rpx;" class="product_name">{{product.goodsName}}</view>
							<!--<view class="product_reserve" v-if="product.stocks">
								<view v-if="product.stocks.stock_name">所存仓库:<text class="text_notice">{{product.stocks.stock_name}}</text></view>
							</view>
							<view class="product_reserve">库存数量:<text class="text_notice">{{product.reserve}}</text></view>
							<view class="product_reserve" v-if="product.packageContent && product.packingUnit">规格:<text class="text_notice">{{product.packageContent}}*{{product.packingUnit}}</text></view>-->

							<view class="product_reserve">创建时间:<text class="text_notice">{{product.createdAt}}</text></view>
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
		<view v-if="showOptions" class="modal_background">
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

				<view class="option_bottom">
					<view class="selection" @click="option_reset">重置</view>
					<view class="selection1" @click="option_confrim">确定</view>
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
	import common from '@/utils/common.js';

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
			uniPagination,
			uniIcon
		},
		data() {
			return {
				page_num: 1,
				showOptions: false, //是否显示筛选
				loading: true,
				productList: null,
				checked_option: 'createdAt', //tab的筛选条件
				category: "", //选择的类别
				stock: "", //选择的仓库
				checked: false, //选择的是否失效
				stock_checked: false,
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
			this.page_num = page_num
			uni.removeStorageSync("now_product");
			if (uni.getStorageSync("category")) {
				that.showOptions = true;
				that.category = uni.getStorageSync("category")
			}

			if (uni.getStorageSync("warehouse")) {
				that.showOptions = true;
				that.stock = uni.getStorageSync("warehouse")[uni.getStorageSync("warehouse").length - 1].stock
			}

			if (uni.getStorageSync("is_add")) {
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

			//支持预览图片
			priviewImg(imgurl) {
				uni.previewImage({
					current:imgurl,
					urls: [imgurl],
				});
			},

			//分页点击
			change_page(e) {
				page_num = e.current
				that.get_productList();
			},

			//是否失效switch的改变
			change_timestatus(e) {
				console.log(e)
				that.checked = e.detail.value
			},

			//是否已预警的改变
			change_stocktatus(e) {
				console.log(e)
				that.stock_checked = e.detail.value
			},

			//输入框确定输入
			input_confirm(e) {
				console.log(e)
				search_text = e.detail.value
				that.get_productList();
			},

			//筛选点击
			shaixuan() {
				that.showOptions = true;
			},

			//确定点击
			goto_add() {
				uni.showActionSheet({
					itemList: ['单产品上传', '多仓库产品上传', '多规格产品上传'],
					success: function(res) {
						let user = uni.getStorageSync("user")
						let identity = uni.getStorageSync("identity")
						if (user.is_vip || that.productList.length < 30) {
							if (res.tapIndex == 0) {
								uni.navigateTo({
									url: "../good_add/good_add"
								})
							} else if (res.tapIndex == 1) {
								uni.navigateTo({
									url: "../goods_add/goods_add"
								})
							} else if (res.tapIndex == 2) {
								uni.navigateTo({
									url: "../goods_add_MoreG/goods_add_MoreG"
								})
							}
						} else {
							uni.showModal({
								title: '提示',
								content: '非会员最多上传30件产品',
								confirmText: "充值会员",
								success: function(res) {
									if (res.confirm) {
										if (identity == 1) {
											uni.navigateTo({
												url: "/pages/mine/vip/vip"
											})
										} else {
											uni.showToast({
												title: "员工不能充值",
												icon: "none"
											})
										}
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							})
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},

			//modal重置的确认点击
			option_reset() {
				uni.removeStorageSync("category");
				uni.removeStorageSync("warehouse");
				that.stock_checked = false,
					that.checked = false,
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

			//点击去到详情
			goDetail(value) {
				console.log(value)
				uni.setStorageSync("now_product", value);
				uni.navigateTo({
					url: "../good_det/good_det"
				})
			},

			//查询产品列表
			get_productList() {
				const query = Bmob.Query("Goods");
				query.equalTo("userId", "==", uid);
				query.equalTo("stocks", "==", that.stock.objectId);
				query.equalTo("status", "!=", -1);
				if (that.stock) {} else {
					query.equalTo("accessory", "!=", true);
				}
				query.equalTo("second_class", "==", that.category.objectId);
				const query1 = query.equalTo("goodsName", "==", {
					"$regex": "" + search_text + ".*"
				});
				const query2 = query.equalTo("packageContent", "==", {
					"$regex": "" + search_text + ".*"
				});
				query.or(query1, query2);

				if (that.checked) {
					var timestamp = Date.parse(new Date());
					query.equalTo("nousetime", "<=", timestamp);
				}
				if (that.stock_checked) {
					query.equalTo("stocktype", "==", 0);
				}
				query.limit(page_size);
				query.skip(page_size * (page_num - 1));
				query.order("-" + that.checked_option); //按照条件降序
				query.include("goodsClass", "stocks", "second_class");
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
		height: calc(100vh - 236rpx);
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
