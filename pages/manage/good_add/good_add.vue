<template>
	<view class="page">
		<form @submit="formSubmit">
			<view class="frist">
				<view class="notice_text">产品图</view>

				<view style="width: 100%;padding-bottom: 20rpx;">
					<view class="upload_image" @click="upload_image">
						<image :src="goodsIcon" v-if="goodsIcon" style="width: 180rpx;height: 180rpx;"></image>
						<fa-icon type="plus-square-o" size="40" color="#426ab3" v-else></fa-icon>
					</view>
					<input name="goodsIcon" v-show="false" :value="goodsIcon" />

				</view>

			</view>
			
			
			<view class="frist">
				<view class="notice_text">基本信息</view>
				<view class="input_item">
					<view class="left_item">名称<text style="color: #aa2116;margin-left: 4rpx;">*</text></view>
					<view class="right_input"><input placeholder="产品名称" name="goodsName"></input></view>
				</view>

				<navigator class="input_item1" hover-class="none" url="/pages/manage/category/category?type=choose">
					<view style="display: flex;align-items: center;">
						<view class="left_item">类别</view>
						<view class="right_input"><input placeholder="产品类别" name="goodsClass" :value="category.class_text"></input></view>
					</view>

					<view>
						<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
					</view>
				</navigator>

				<view class="input_item">
					<view class="left_item">进价</view>
					<view class="right_input"><input placeholder="产品进价" name="costPrice" type="digit"></input></view>
				</view>

				<view class="input_item">
					<view class="left_item">售价</view>
					<view class="right_input"><input placeholder="产品售价" name="retailPrice" type="digit"></input></view>
				</view>
				<view class="input_item">
					<view class="left_item">包装含量</view>
					<view class="right_input"><input placeholder="包装含量" name="packageContent"></input></view>
				</view>
				<view class="input_item">
					<view class="left_item">包装单位</view>
					<view class="right_input"><input placeholder="包装单位" name="packingUnit"></input></view>
				</view>
			</view>

			<!--<view class="frist">
				<view class="input_item">
					<view class="left_item">生产日期</view>
					<picker mode="date" @change="bindproducttimeChange">
						<view class="right_input"><input placeholder="生产日期" name="producttime" disabled="true" v-model="producttime"></input></view>
					</picker>
				</view>

				<view class="input_item">
					<view class="left_item">失效日期</view>
					<picker mode="date" @change="bindDateChange">
						<view class="right_input"><input placeholder="失效日期" name="nousetime" disabled="true" v-model="nousetime"></input></view>
					</picker>

				</view>
			</view>-->

			<view class="frist">

				<view v-for="(item,index) in stocks" :key="index" style="line-height: 70rpx;">
					<view class="display_flex_bet">
						<view class="display_flex_bet">
							<view class="left_item">初始库存</view>
							<input placeholder="初始库存" type="digit" name="reserve" @input="change_reserve(index,$event)" v-model="item.reserve" />
						</view>
						<view class="display_flex">
							<view style="width: 80rpx;">仓库</view>
							<input v-model="item.stock.stock_name" disabled="true" />
							<fa-icon type="times" size="16" color="#426ab3" v-if="item.stock.stock_name !='默认仓库'" @click="remove_this(index)"></fa-icon>
						</view>
					</view>
				</view>

				<navigator class="input_item1" hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose" style="background: #426ab3;color: #fff;">
					<view style="display: flex;align-items: center;justify-content: center;width: 100%;">
						<view style="margin-right: 20rpx;">选择仓库</view>
						<fa-icon type="plus" size="20" color="#fff"></fa-icon>
					</view>
				</navigator>
				<!--<view class="input_item">
					<view class="left_item">预警库存</view>
					<view class="right_input"><input placeholder="预警库存" name="warning_num" type="digit"></input></view>
				</view>-->
			</view>

			<view class="frist">
				<view class="input_item">
					<view class="left_item">生产厂家</view>
					<view class="right_input"><input placeholder="生产厂家" name="producer"></input></view>
				</view>
				<view class="input_item">
					<view class="left_item">货号</view>
					<view class="right_input"><input placeholder="货号" name="regNumber"></input></view>
				</view>
				<view class="input_item1">

					<view style="display: flex;align-items: center;">
						<view class="left_item">条码</view>
						<view class="right_input"><input :value="productCode" placeholder="条码" name="productCode"></input></view>
					</view>

					<view>
						<fa-icon type="clone" size="16" color="#426ab3" @click="scan_code"></fa-icon>
					</view>
				</view>
				<view class="input_item">
					<view class="left_item">货架位置</view>
					<view class="right_input"><input placeholder="货架位置" name="position"></input></view>
				</view>
				<view class="input_item">
					<view class="left_item">产品简介</view>
					<view class="right_input"><input placeholder="产品简介" name="product_info"></input></view>
				</view>
			</view>

			<view>
				<button formType="submit" class="submit_button">保存</button>
			</view>

		</form>

	</view>
</template>

<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import Bmob from '@/utils/bmob.js';
	let that;
	let tempFilePaths;
	let p_class_user_id;
	let p_second_class_id;
	let uid = uni.getStorageSync('uid');

	export default {
		components: {
			faIcon,
		},
		data() {
			return {
				stocks: [{
					"stock": {
						'stock_name': '默认仓库'
					},
					'reserve': 0
				}], //存放的仓库
				category: "", //分类
				reserve: [0], //初始库存
				goodsIcon: "", //产品图片
				producttime: "",
				nousetime: "",
				productCode: "",
			}
		},
		onLoad() {
			that = this;
			uni.removeStorageSync("category")
			uni.removeStorageSync("warehouse")
		},
		onShow() {
			if (uni.getStorageSync("warehouse")) { //存在此缓存证明选择了仓库
				that.stocks = uni.getStorageSync("warehouse")
			}

			if (uni.getStorageSync("category")) {
				that.category = uni.getStorageSync("category")

				let pointer2 = Bmob.Pointer('class_user')
				p_class_user_id = pointer2.set(that.category.parent.objectId) //一级分类id关联

				let pointer3 = Bmob.Pointer('second_class')
				p_second_class_id = pointer3.set(that.category.objectId) //仓库的id关联

				console.log(that.category.parent.objectId, that.category.objectId)
			}
		},

		onUnload() {
			tempFilePaths = "";
			p_class_user_id = "";
			p_second_class_id = "";
		},

		methods: {

			//扫码操作
			scan_code() {
				uni.scanCode({
					onlyFromCamera: true,
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						that.productCode = res.result
					}
				});
			},

			//移除这个仓库
			remove_this(index) {
				console.log(index)
				that.stocks = that.stocks.splice(index - 1, 1)
				uni.setStorageSync("warehouse", that.stocks)
			},

			//输入初始库存的方法
			change_reserve(index, $event) {
				console.log(index, $event)
				that.stocks[index].reserve = Number($event.detail.value)
				//that.stocks.reverse()
			},

			bindproducttimeChange: function(e) {
				that.producttime = e.target.value;
			},

			bindDateChange: function(e) {
				that.nousetime = e.target.value
			},
			//保存提交
			formSubmit: function(e) {
				//console.log(e.detail.value)
				let good = e.detail.value;
				if (good.goodsName == "") {
					uni.showToast({
						title: "请输入产品名称",
						icon: "none"
					})
				} else {
					if (tempFilePaths) {
						let file;
						for (let item of tempFilePaths) {
							//console.log('itemn',item)
							file = Bmob.File(good.goodsName + ".png", item);
						}
						file.save().then(res => {
							that.goodsIcon = JSON.parse(res).url;
							that.upload_good(good)
						})
					} else {
						that.upload_good(good)
					}
				}
			},
			//上传产品图片
			upload_image: function() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						//console.log(res);
						that.goodsIcon = res.tempFilePaths[0];
						tempFilePaths = res.tempFilePaths;
					},
				});
			},

			//上传商品
			upload_good(good) {
				uni.showLoading({
					title: "上传中..."
				});

				const pointer = Bmob.Pointer('_User')
				const userid = pointer.set(uid)

				const query = Bmob.Query("Goods");
				query.equalTo("userId", "==", uid);
				query.equalTo("goodsName", "==", good.goodsName);
				query.find().then(res => {
					console.log(res)
					if (res.length >= 1) {
						uni.showToast({
							title: "你的库存中已存在此产品",
							icon: 'none'
						})
					} else {
						for (let item of that.stocks) {
							let reserve = item.reserve
							let stock_id = item.stock.objectId || ""

							const pointer1 = Bmob.Pointer('stocks')
							const p_stock_id = pointer1.set(stock_id) //仓库的id关联

							const query = Bmob.Query('Goods');
							query.set("goodsIcon", that.goodsIcon)
							query.set("goodsName", good.goodsName)
							query.set("costPrice", good.costPrice ? good.costPrice : "0")
							query.set("retailPrice", good.retailPrice ? good.retailPrice : "0")
							//query.set("producttime",  new Date(that.producttime.replace("-","/")))
							//query.set("nousetime",new Date(that.nousetime.replace("-","/")) )
							query.set("regNumber", good.regNumber)
							query.set("reserve", Number(reserve))
							query.set("productCode", good.productCode)
							query.set("stocks", p_stock_id)
							query.set("product_info", good.product_info)
							query.set("producer", good.producer)
							query.set("packingUnit", good.packingUnit)
							query.set("packageContent", good.packageContent)
							if (uni.getStorageSync("warehouse")) { //存在此缓存证明选择了仓库
								query.set("second_class", p_second_class_id)
								query.set("goodsClass", p_class_user_id)
							}
							query.set("userId", userid)
							query.save().then(res => {
								uni.hideLoading();
								uni.showToast({
									title: "上传成功"
								})
							}).catch(err => {
								console.log(err)
							})
						}
					}
				});



			},

		}
	}
</script>

<style>
	::-webkit-scrollbar {
		width: 2px;
		height: 6px;
		background-color: transparent;
	}

	/*定义滑块 内阴影+圆角*/
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: #999;
	}

	.page {
		font-size: 28rpx;
		background: #FAFAFA;
		height: 100vh;
		overflow: scroll;
	}

	.frist {
		padding: 0 20rpx;
		background: #FFFFFF;
		margin-top: 30rpx;
	}

	.input_item {
		display: flex;
		align-items: center;
		line-height: 80rpx;
		border-bottom: 1rpx solid#f6f5ec;
	}

	.input_item1 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		line-height: 80rpx;
		border-bottom: 1rpx solid#f6f5ec;
	}

	.left_item {
		width: 150rpx;
	}

	.right_input {
		margin-left: 20rpx;
	}

	.submit_button {
		background: #426ab3;
		border-radius: 40rpx;
		margin: 30rpx;
		height: 88rpx;
		line-height: 88rpx;
		color: #fff;
	}

	.upload_image {
		width: 180rpx;
		height: 180rpx;
		line-height: 220rpx;
		text-align: center;
		border: 1rpx solid#999;
		border-radius: 8rpx;
	}
	.notice_text{
		padding-top: 20rpx;
		font-size: 32rpx;
		color: #3D3D3D;
		font-weight: bold;
	}
</style>
