<template>
	<view class="page">
		<form @submit="formSubmit">

			<scroll-view style="height: calc(100vh - 108rpx);" scroll-y>
				<view class="frist">
					<view class="notice_text">产品图</view>

					<view style="width: 100%;padding: 20rpx 0;">
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
						<view class="right_input"><input placeholder="产品名称" name="goodsName" :value="goodsName"></input></view>
					</view>

					<navigator class="input_item1" hover-class="none" url="/pages/manage/category/category?type=choose">
						<view style="display: flex;align-items: center;width: 100%;">
							<view class="left_item">类别<text style="color: #aa2116;margin-left: 4rpx;">*</text></view>
							<view class="right_input"><input placeholder="产品类别" name="goodsClass" :value="category.class_text" disabled="true"></input></view>
						</view>

						<view>
							<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
						</view>
					</navigator>

					<view class="input_item">
						<view class="left_item">进价</view>
						<view class="right_input"><input placeholder="产品进价" name="costPrice" type="digit" :value="costPrice"></input></view>
					</view>

					<view class="input_item">
						<view class="left_item">售价</view>
						<view class="right_input"><input placeholder="产品售价" name="retailPrice" type="digit" :value="retailPrice"></input></view>
					</view>
					<view class="input_item">
						<view class="left_item">包装含量</view>
						<view class="right_input"><input placeholder="包装含量" name="packageContent" :value="packageContent"></input></view>
					</view>
					<view class="input_item">
						<view class="left_item">包装单位</view>
						<view class="right_input"><input placeholder="包装单位" name="packingUnit" :value="packingUnit"></input></view>
					</view>
				</view>

				<view class="frist" style="margin: 30rpx 0;">

					<navigator style="line-height: 70rpx;" class="input_item2" hover-class="none" :url="isMoreModelAdd?'modelAdd/modelAdd':'stockAdd/stockAdd'">
						<view class="display_flex">
							<view class="input_item" style="width: 100%;">
								<view class="left_item">初始库存</view>
								<input placeholder="初始库存" type="digit" name="reserve" v-model="reserve" disabled="true" />
							</view>
						</view>
						<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
					</navigator>
					<view class="input_item">
						<view class="left_item">预警库存</view>
						<view class="right_input1"><input placeholder="预警库存" name="warning_num" type="digit" :value="warning_num"></input></view>
					</view>
					<view class="input_item">
						<view class="left_item">最大库存</view>
						<view class="right_input1"><input placeholder="最大库存" name="max_num" type="digit" :value="max_num"></input></view>
					</view>
				</view>

				<!--更多产品信息-->
				<uni-collapse :accordion="true">
					<uni-collapse-item title="更多信息" style="color: #FE104C;font-size: 32rpx;font-weight: bold;">
						<view class="frist" style="margin-top: 0;">
							<view class="input_item">
								<view class="left_item">有效期</view>
								<picker mode="date" @change="bindDateChange" style="width: 100%;">
									<view class="right_input"><input placeholder="有效期" name="nousetime" disabled="true" v-model="nousetime"></input></view>
								</picker>
							</view>
							<view class="input_item">
								<view class="left_item">生产厂家</view>
								<view class="right_input"><input placeholder="生产厂家" name="producer" :value="producer"></input></view>
							</view>
							<view class="input_item">
								<view class="left_item">货号</view>
								<view class="right_input"><input placeholder="货号" name="regNumber" :value="regNumber"></input></view>
							</view>
							<view class="input_item1">

								<view style="display: flex;align-items: center;width: 100%;">
									<view class="left_item">条码</view>
									<view class="right_input"><input :value="productCode" placeholder="条码" name="productCode"></input></view>
								</view>

								<view>
									<fa-icon type="clone" size="16" color="#426ab3" @click="scan_code"></fa-icon>
								</view>
							</view>
							<view class="input_item">
								<view class="left_item">货架位置</view>
								<view class="right_input"><input placeholder="货架位置" name="position" :value="position"></input></view>
							</view>
							<view class="input_item">
								<view class="left_item">产品简介</view>
								<view class="right_input"><input placeholder="产品简介" name="product_info" :value="product_info"></input></view>
							</view>
							<view class="input_item">
								<view class="left_item">半成品</view>
								<view class="right_input">
									<switch :checked="product_state" name="product_state" />
								</view>
							</view>
						</view>
					</uni-collapse-item>
				</uni-collapse>


			</scroll-view>


			<view class="display_flex_bet">
				<button formType="submit" class="submit_button">{{text_desc}}</button>

				<button class="reset_button" formType="reset">重置</button>
			</view>

		</form>

	</view>
</template>

<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'

	import Bmob from "hydrogen-js-sdk";
	import common from '@/utils/common.js';

	let that;
	let p_class_user_id = "";
	let p_second_class_id = "";
	let uid;

	export default {
		components: {
			uniCollapse,
			uniCollapseItem,
			faIcon
		},
		data() {
			return {
				text_desc: "保存",
				goodsName: '',
				costPrice: '', //进价
				retailPrice: '', //售价
				packageContent: '', //包装含量
				packingUnit: '', //包装单位
				warning_num: '', //预警库存
				max_num: '', //合理值
				producer: '', //生产厂家
				regNumber: '', //货号
				position: '', //位置
				product_info: '', //产品简介
				productCode: "", //产品条码
				category: "", //分类
				reserve: 0, //初始库存
				goodsIcon: "", //产品图片
				stock_name: "", //存放仓库的名字
				stocks: "", //存放的仓库
				producttime: "",
				nousetime: "",
				product_state: false, //产品是否是半成品
				isMoreModelAdd:uni.getStorageSync("addMoreModel")
			}
		},

		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');
			uni.removeStorageSync("category")
			uni.removeStorageSync("is_add");

			if (uni.getStorageSync("now_product")) {
				uni.setNavigationBarTitle({
					title: "编辑产品"
				})

				let now_product = uni.getStorageSync("now_product")

				that.text_desc = "修改"
				that.goodsName = now_product.goodsName
				that.costPrice = Number(now_product.costPrice) //进价
				that.retailPrice = Number(now_product.retailPrice) //售价
				that.packageContent = now_product.packageContent //包装含量
				that.packingUnit = now_product.packingUnit //包装单位
				that.warning_num = now_product.warning_num //预警库存
				that.producer = now_product.producer //生产厂家
				that.regNumber = now_product.regNumber //货号
				that.position = now_product.position //位置
				that.product_info = now_product.product_info //产品简介
				that.productCode = now_product.productCode //产品条码
				that.category = now_product.second_class ? now_product.second_class : '' //分类
				that.reserve = now_product.reserve
				that.goodsIcon = now_product.goodsIcon ? now_product.goodsIcon : '' //产品图片
				that.product_state = now_product.product_state //产品是否是半成品
				that.nousetime = (now_product.nousetime) ? common.js_date_time(now_product.nousetime) : ''
				that.max_num = now_product.max_num

				if (now_product.goodsClass && now_product.goodsClass.objectId) {
					let pointer2 = Bmob.Pointer('class_user')
					p_class_user_id = pointer2.set(now_product.goodsClass.objectId) //一级分类id关联
				}

				if (now_product.second_class && now_product.second_class.objectId) {
					let pointer3 = Bmob.Pointer('second_class')
					p_second_class_id = pointer3.set(now_product.second_class.objectId) //仓库的id关联
				}

				if (now_product.stocks && now_product.stocks.length > 0) {
					uni.setStorageSync("warehouse", now_product.stocks)
				}
			} else {
				const query = Bmob.Query("stocks");
				query.order("-num");
				query.equalTo("parent", "==", uid);
				query.equalTo("disabled", "!=", true);
				query.find().then(res => {
					for (let item of res) {
						item.reserve = 0
					}
					uni.setStorageSync("warehouse", res)
				});

			}
		},
		onShow() {


			if (uni.getStorageSync("warehouse")) {
				that.reserve = 0
				let stocksReserve = uni.getStorageSync("warehouse")
				for (let item of stocksReserve) {
					that.reserve += Number(item.reserve)
				}
			}

			if (uni.getStorageSync("category")) {
				that.category = uni.getStorageSync("category")

				if (that.category.type == 2) {
					let pointer2 = Bmob.Pointer('class_user')
					p_class_user_id = pointer2.set(that.category.parent.objectId) //一级分类id关联

					let pointer3 = Bmob.Pointer('second_class')
					p_second_class_id = pointer3.set(that.category.objectId) //仓库的id关联

					console.log(that.category.parent.objectId, that.category.objectId)
				} else {
					let pointer2 = Bmob.Pointer('class_user')
					p_class_user_id = pointer2.set(that.category.objectId) //一级分类id关联
				}

			}
		},

		onUnload() {
			p_class_user_id = "";
			p_second_class_id = "";

			common.handleData()
		},

		methods: {

			//通过条形码扫码得到商品信息
			scan_by_id: function(id) {
				console.log(id);
				wx.showLoading({
					title: '加载中...',
				})
				wx.request({
					url: 'https://route.showapi.com/66-22',
					data: {
						showapi_appid: '84916',
						showapi_sign: 'ad4b63369c834759b411a9d7fcb07ed7',
						code: id,
					},
					header: {
						'content-type': 'application/json' // 默认值
					},
					success(res) {
						wx.hideLoading();
						let good = res.data.showapi_res_body;

						console.log(good)

						that.goodsName = good.goodsName,
							that.producer = good.manuName,
							that.goodsIcon = good.img //产品图片
						that.product_info = good.note //产品简介

						that.productCode = id
					}
				});
			},

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

			bindDateChange: function(e) {
				that.nousetime = e.target.value
			},

			//保存提交
			formSubmit: function(e) {
				console.log(e.detail.value)
				let good = e.detail.value;
				if (good.goodsName == "") {
					uni.showToast({
						title: "请输入产品名称",
						icon: "none"
					})
				}else if(uni.getStorageSync("category") == null || uni.getStorageSync("category") == ""){
					uni.showToast({
						title: "请选择产品类别",
						icon: "none"
					})
				} else {
					that.upload_good(good)
				}
			},

			//上传产品图片
			upload_image: function() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						console.log(res);
						let timestamp = Date.parse(new Date());
						let tempFilePaths = res.tempFilePaths
						let file;
						for (let item of tempFilePaths) {
							file = Bmob.File(timestamp + '.jpg', item);
						}
						file.save().then(res => {
							that.goodsIcon = res[0].url;
						})

					},
				});
			},

			//上传商品
			upload_good(good) {
				uni.showLoading({
					title: "上传中..."
				});

				if (uni.getStorageSync("now_product")) {
					that.edit_good(good)
				} else {
					const query = Bmob.Query("Goods");
					query.equalTo("userId", "==", uid);
					query.equalTo("status", "!=", -1);
					query.equalTo("goodsName", "==", good.goodsName);
					query.equalTo("position", "==", good.position);
					query.equalTo("stocks", "==", that.stocks.objectId);
					query.find().then(res => {
						if (res.length >= 1) {
							uni.showToast({
								title: "你的库存中已存在此产品",
								icon: 'none'
							})
						} else {
							that.add_good(good, "add")
						}
					});
				}
			},

			edit_good(good) {
				let now_product = uni.getStorageSync("now_product")

				const pointer = Bmob.Pointer('_User')
				const userid = pointer.set(uid)

				const query = Bmob.Query('Goods');
				query.set("goodsIcon", that.goodsIcon ? that.goodsIcon : '')
				query.set("goodsName", good.goodsName)
				query.set("costPrice", good.costPrice ? Number(good.costPrice) : 0)
				query.set("retailPrice", good.retailPrice ? Number(good.retailPrice) : 0)
				if (that.nousetime) {
					let time = that.nousetime.replace(new RegExp('-', 'g'), "/")
					time = new Date(time).getTime()
					query.set("nousetime", time)
				}
				query.set("regNumber", good.regNumber)
				query.set("reserve", Number(good.reserve))
				query.set("productCode", good.productCode)
				query.set("product_info", good.product_info)
				query.set("producer", good.producer)
				query.set("packingUnit", good.packingUnit)
				query.set("packageContent", good.packageContent)
				query.set("position", good.position)
				query.set("warning_num", Number(good.warning_num))
				query.set("max_num", Number(good.max_num))
				query.set("stocktype", (Number(good.warning_num) >= Number(that.reserve)) ? 0 : 1) //库存数量类型 0代表库存不足 1代表库存充足

				query.set("product_state", good.product_state) //改产品是否是半成品
				query.set("order", 0)
				if (uni.getStorageSync("category")) { //存在此缓存证明选择了仓库
					if (that.category.type == 1) {
						query.set("goodsClass", p_class_user_id)
					} else {
						query.set("goodsClass", p_class_user_id)
						query.set("second_class", p_second_class_id)
					}
				}

				query.set("userId", userid)
				query.set('id', now_product.objectId) //需要修改的objectId
				query.save().then(res => {

					if (uni.getStorageSync("warehouse") && uni.getStorageSync("warehouse").length > 0) {
						let stocksReserve = uni.getStorageSync("warehouse")
						for (var i = 0; i < stocksReserve.length; i++) {
							console.log(stocksReserve[i])
							let item = stocksReserve[i]
							const query = Bmob.Query('Goods');
							query.get(item.good_id).then(res => {
								console.log(res, item)
								res.set('reserve', Number(item.reserve))
								res.save()
							}).catch(err => {
								console.log(err)
							})
						}
					}

					uni.hideLoading();
					common.log(uni.getStorageSync("user").nickName + "修改了产品'" + now_product.goodsName + "'", 5, now_product.objectId);
					uni.showToast({
						title: "修改成功"
					})
					uni.setStorageSync("is_add", true)

				})
			},

			add_good(good, type) {
				let now_product = uni.getStorageSync("now_product")

				const pointer = Bmob.Pointer('_User')
				const userid = pointer.set(uid)

				const query = Bmob.Query('Goods');
				query.set("goodsIcon", that.goodsIcon ? that.goodsIcon : '')
				query.set("goodsName", good.goodsName)
				query.set("costPrice", good.costPrice ? Number(good.costPrice) : 0)
				query.set("retailPrice", good.retailPrice ? Number(good.retailPrice) : 0)
				if (that.nousetime) {
					let time = that.nousetime.replace(new RegExp('-', 'g'), "/")
					time = new Date(time).getTime()
					query.set("nousetime", time)
				}
				query.set("regNumber", good.regNumber)
				query.set("reserve", Number(good.reserve))
				query.set("productCode", good.productCode)
				query.set("product_info", good.product_info)
				query.set("producer", good.producer)
				query.set("packingUnit", good.packingUnit)
				query.set("packageContent", good.packageContent)
				query.set("position", good.position)
				query.set("warning_num", Number(good.warning_num))
				query.set("max_num", Number(good.max_num))
				query.set("stocktype", (Number(good.warning_num) >= Number(that.reserve)) ? 0 : 1) //库存数量类型 0代表库存不足 1代表库存充足

				query.set("product_state", good.product_state) //改产品是否是半成品
				query.set("order", 0)
				if (uni.getStorageSync("category")) { //存在此缓存证明选择了仓库
					if (that.category.type == 1) {
						query.set("goodsClass", p_class_user_id)
					} else {
						query.set("goodsClass", p_class_user_id)
						query.set("second_class", p_second_class_id)
					}
				}

				query.set("userId", userid)
				query.save().then(res => {

					let this_result = res
					if (uni.getStorageSync("warehouse") && uni.getStorageSync("warehouse").length > 0) {
						let stocksReserve = uni.getStorageSync("warehouse")

						const queryArray = new Array();
						// 构造含有50个对象的数组
						for (var i = 0; i < stocksReserve.length; i++) {
							const pointer1 = Bmob.Pointer('stocks')
							const p_stock_id = pointer1.set(stocksReserve[i].objectId) //仓库的id关联

							const pointer2 = Bmob.Pointer('Goods')
							const p_good_id = pointer2.set(this_result.objectId) //仓库的id关联

							var queryObj = Bmob.Query('Goods');
							queryObj.set("order", 1)
							queryObj.set("goodsName", good.goodsName)
							queryObj.set("header", p_good_id)
							queryObj.set("userId", userid)
							queryObj.set("stocks", p_stock_id)
							queryObj.set("reserve", Number(stocksReserve[i].reserve))
							queryArray.push(queryObj);
						}

						// 传入刚刚构造的数组
						Bmob.Query('Goods').saveAll(queryArray).then(result => {
							console.log(result);
							uni.hideLoading();
							common.log(uni.getStorageSync("user").nickName + "增加了产品'" + good.goodsName + "'", 5, this_result.objectId);
							uni.showToast({
								title: "上传成功"
							})

							uni.setStorageSync("is_add", true)
						}).catch(err => {
							console.log(err);
						});
					} else {
						uni.hideLoading();
						common.log(uni.getStorageSync("user").nickName + "增加了产品'" + good.goodsName + "'", 5, this_result.objectId);
						uni.showToast({
							title: "上传成功"
						})

						uni.setStorageSync("is_add", true)
					}


					//that.handledata()
				}).catch(err => {
					console.log(err)
				})
			},

			//数据重置
			handledata() {
				that.goodsName = ''
				that.costPrice = '' //进价
				that.retailPrice = '' //售价
				that.packageContent = '' //包装含量
				that.packingUnit = '' //包装单位
				that.warning_num = '' //预警库存
				that.producer = '' //生产厂家
				that.regNumber = '' //货号
				that.position = '' //位置
				that.product_info = '' //产品简介
				that.productCode = "" //产品条码
				that.category = "" //分类
				that.reserve = 0 //初始库存
				that.goodsIcon = "" //产品图片
				that.stocks = "" //存放的仓库
				that.stock_name = ""
				that.producttime = ""
				that.nousetime = ""
			}

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
	}

	.input_item {
		display: flex;
		align-items: center;
		height: 80rpx;
		line-height: 80rpx;
		border-bottom: 1rpx solid#f6f5ec;
	}

	.input_item1 {
		display: flex;
		align-items: center;
		height: 80rpx;
		line-height: 80rpx;
		border-bottom: 1rpx solid#f6f5ec;
	}

	.input_item2 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		line-height: 80rpx;
		height: 80rpx;
		border-bottom: 1rpx solid#f6f5ec;
	}

	.left_item {
		color: #333333;
		width: 150rpx;
	}

	.right_input {
		margin-left: 20rpx;
	}

	.submit_button {
		width: 50%;
		background: #426ab3;
		border-radius: 40rpx;
		margin: 10rpx 30rpx;
		height: 88rpx;
		line-height: 88rpx;
		color: #fff;
		font-size: 30rpx;
	}

	.upload_image {
		width: 180rpx;
		height: 180rpx;
		line-height: 220rpx;
		text-align: center;
		border: 1rpx solid#999;
		border-radius: 8rpx;
	}

	.notice_text {
		padding-top: 20rpx;
		font-size: 32rpx;
		color: #3D3D3D;
		font-weight: bold;
	}

	.reset_button {
		font-size: 30rpx;
		width: 50%;
		background: #999;
		border-radius: 40rpx;
		margin: 10rpx 30rpx;
		height: 88rpx;
		line-height: 88rpx;
		color: #fff;
	}
</style>
