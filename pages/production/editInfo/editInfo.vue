<template>
	<view class="page">
		<form @submit="formSubmit">

			<scroll-view style="height: calc(100vh - 160rpx);" scroll-y>
				<view class="frist">
					<view class="notice_text">物料图</view>

					<view style="width: 100%;padding: 20rpx 0;">
						<view class="upload_image" @click="upload_image">
							<image :src="goodsIcon" v-if="goodsIcon" style="width: 180rpx;height: 180rpx;"></image>
							<fa-icon type="plus-square-o" size="40" color="#426ab3" v-else style="height: 180rpx;line-height: 180rpx;"></fa-icon>
						</view>
						<input name="goodsIcon" v-show="false" :value="goodsIcon" />

					</view>

				</view>

				<view class="frist" style="margin-bottom: 20rpx;">
					<view class="notice_text">基本信息</view>
					<view class="input_item">
						<view class="left_item">名称<text style="color: #aa2116;margin-left: 4rpx;">*</text></view>
						<view class="right_input1"><input placeholder="物料名称" name="goodsName" :value="goodsName"></input></view>
					</view>

					<navigator class="input_item2" hover-class="none" url="/pages/production/matterCategroy/matterCategroy?type=choose">
						<view style="display: flex;align-items: center;">
							<view class="left_item">类别</view>
							<view class="right_input1"><input placeholder="物料类别" name="goodsClass" :value="category.class_text" disabled="true"></input></view>
						</view>

						<view>
							<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
						</view>
					</navigator>

					<view class="input_item">
						<view class="left_item">进价</view>
						<view class="right_input1"><input placeholder="进价" name="costPrice" type="digit" :value="costPrice"></input></view>
					</view>

					<view class="input_item">
						<view class="left_item">售价</view>
						<view class="right_input1"><input placeholder="售价" name="retailPrice" type="digit" :value="retailPrice"></input></view>
					</view>
					<view class="input_item">
						<view class="left_item">规格</view>
						<view class="right_input1"><input placeholder="规格" name="packageContent" :value="packageContent"></input></view>
					</view>
					<view class="input_item">
						<view class="left_item">单位</view>
						<view class="right_input1"><input placeholder="单位" name="packingUnit" :value="packingUnit"></input></view>
					</view>
					<view class="input_item">
						<view class="left_item">材质</view>
						<view class="right_input1"><input placeholder="材质" name="packingModel" :value="packingModel"></input></view>
					</view>
					<view class="input_item">
						<view class="left_item">编号</view>
						<view class="right_input1"><input placeholder="编号" name="regNumber" :value="regNumber"></input></view>
					</view>

					<view class="input_item">
						<view class="left_item">物料简介</view>
						<view class="right_input1"><input placeholder="物料简介" name="product_info" :value="product_info"></input></view>
					</view>
				</view>

				<view class="frist" style="margin-bottom: 30rpx;">
					<view style="line-height: 70rpx;">
						<view class="display_flex_bet">
							<view class="input_item" style="width: 100%;">
								<view class="left_item">初始库存</view>
								<input placeholder="初始库存" type="digit" name="reserve" v-model="reserve" />
							</view>
						</view>
					</view>
					<view class="input_item">
						<view class="left_item">预警库存</view>
						<view class="right_input1"><input placeholder="预警库存" name="warning_num" type="digit" :value="warning_num"></input></view>
					</view>

					<navigator class="input_item2" hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose">
						<view style="display: flex;align-items: center;">
							<view class="left_item">店仓</view>
							<view class="right_input1">
								<input placeholder="选择店仓" v-model="stock_name" disabled="true"></input>
							</view>
						</view>

						<view>
							<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
						</view>
					</navigator>
				</view>
			</scroll-view>

			<view class="display_flex_bet">
				<button formType="submit" class="submit_button">保存</button>

				<button class="reset_button" formType="reset" @click="stocks = ''">重置</button>
			</view>

		</form>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import common from '@/utils/common.js';

	let that;
	let tempFilePaths;
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
				user: uni.getStorageSync("user"),
				text_desc: "保存",
				goodsName: '',
				costPrice: '', //进价
				retailPrice: '', //售价
				packageContent: '', //包装含量
				packingUnit: '', //包装单位
				warning_num: '', //预警库存
				producer: '', //生产厂家
				regNumber: '', //货号
				position: '', //位置
				product_info: '', //物料简介
				productCode: "", //物料条码
				category: "", //分类
				reserve: 0, //初始库存
				goodsIcon: "", //物料图片
				stock_name: "", //存放店仓的名字
				stocks: "", //存放的店仓
				packingModel: '', //材质
				producttime: "",
				nousetime: "",
				product_state: false, //物料是否是半成品
				uploadImg: false,
			}
		},

		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');
			uni.removeStorageSync("category")
			uni.removeStorageSync("is_add");

			if (options.id) {
				that.scan_by_id(options.id)
			}
		},
		onShow() {

			if (uni.getStorageSync("now_product")) {
				uni.setNavigationBarTitle({
					title: "编辑物料"
				})

				let now_product = uni.getStorageSync("now_product")

				that.text_desc = "修改"
				that.goodsName = now_product.goodsName
				that.costPrice = now_product.costPrice //进价
				that.retailPrice = now_product.retailPrice //售价
				that.packageContent = now_product.packageContent //包装含量
				that.packingUnit = now_product.packingUnit //包装单位
				that.warning_num = now_product.warning_num //预警库存
				that.producer = now_product.producer //生产厂家
				that.regNumber = now_product.regNumber //货号
				that.position = now_product.position //位置
				that.product_info = now_product.product_info //物料简介
				that.productCode = now_product.productCode //物料条码
				that.category = now_product.secondClass ? now_product.secondClass : '' //分类
				that.reserve = now_product.reserve
				that.goodsIcon = now_product.goodsIcon ? now_product.goodsIcon : '' //物料图片
				that.product_state = now_product.product_state //物料是否是半成品
				that.nousetime = (now_product.nousetime) ? common.js_date_time(now_product.nousetime) : ''
				that.packingModel = now_product.packingModel
				that.stock_name = now_product.stocks?now_product.stocks.stock_name:''
			}

			if (uni.getStorageSync("warehouse")) { //存在此缓存证明选择了店仓
				that.stocks = uni.getStorageSync("warehouse")[0].stock
				that.stock_name = uni.getStorageSync("warehouse")[0].stock.stock_name
			}

			if (uni.getStorageSync("category")) {
				that.category = uni.getStorageSync("category")

				if (that.category.type == 1) {
					let pointer2 = Bmob.Pointer('M_frist_class')
					p_class_user_id = pointer2.set(that.category.objectId) //一级分类id关联
				} else if (that.category.type == 2) {
					let pointer2 = Bmob.Pointer('M_frist_class')
					p_class_user_id = pointer2.set(that.category.parent.objectId) //一级分类id关联

					let pointer3 = Bmob.Pointer('M_second_class')
					p_second_class_id = pointer3.set(that.category.objectId) //店仓的id关联
				}

				console.log(that.category.parent.objectId, that.category.objectId)
			} else {
				let now_product = uni.getStorageSync("now_product")

				if (now_product.fristClass) {
					let pointer2 = Bmob.Pointer('M_frist_class')
					p_class_user_id = pointer2.set(now_product.fristClass.objectId) //一级分类id关联
				}

				if (now_product.secondClass) {
					let pointer3 = Bmob.Pointer('M_second_class')
					p_second_class_id = pointer3.set(now_product.secondClass.objectId) //店仓的id关联
				}
			}
		},

		onUnload() {
			tempFilePaths = "";
			p_class_user_id = "";
			p_second_class_id = "";

			common.handleData()
		},

		methods: {

			bindproducttimeChange: function(e) {
				that.producttime = e.target.value;
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
						title: "请输入物料名称",
						icon: "none"
					})
				} else {
					that.upload_good(good)
				}
			},

			//上传物料图片
			upload_image: function() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						console.log(res);
						let tempFilePaths = res.tempFilePaths
						let file;
						for (let item of tempFilePaths) {
							file = Bmob.File(that.goodsName + ".png", item);
						}
						file.save().then(res => {
							console.log(res.length);
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
				let now_product = uni.getStorageSync("now_product")
				for (let item of now_product.ids) {
					good.good_id = item.good_id
					that.add_good(good, "edit")
				}

			},

			add_good(good, type) {
				const pointer = Bmob.Pointer('_User')
				const userid = pointer.set(uid)
				
				const stock_id = (that.stocks.objectId ? that.stocks.objectId : '')
				
				const pointer1 = Bmob.Pointer('stocks')
				const p_stock_id = pointer1.set(stock_id) //店仓的id关联

				const query = Bmob.Query('Matters');
				query.set("goodsIcon", that.goodsIcon)
				query.set("goodsName", good.goodsName)
				query.set("costPrice", good.costPrice ? good.costPrice : "0")
				query.set("retailPrice", good.retailPrice ? good.retailPrice : "0")
				query.set("regNumber", good.regNumber)
				query.set("packingModel", good.packingModel)
				query.set("product_info", good.product_info)
				query.set("packingUnit", good.packingUnit)
				query.set("packageContent", good.packageContent)
				query.set("stocks", p_stock_id)
				query.set("reserve", Number(good.reserve))
				query.set("warning_num", Number(good.warning_num))
				query.set("stocktype", (Number(good.warning_num) >= Number(that.reserve)) ? 0 : 1) //库存数量类型 0代表库存不足 1代表库存充足
				
				if (uni.getStorageSync("category")) { //存在此缓存证明选择了类别
					let category = uni.getStorageSync("category")
					if (category.type == 1) {
						query.set("fristClass", p_class_user_id)
					} else if (category.type == 2) {
						query.set("secondClass", p_second_class_id)
						query.set("fristClass", p_class_user_id)
					}
				}
				query.set("userId", userid)
				query.set("id", good.good_id)
				query.save().then(res => {
					uni.hideLoading();

					common.log(uni.getStorageSync("user").nickName + "修改了物料'" + good.goodsName + "'", 7, uni.getStorageSync(
						"now_product").objectId);
					uni.navigateBack({
						delta: 2
					})

					setTimeout(function() {
						uni.showToast({
							title: "修改成功",
							duration: 1000,
						})
					}, 1000)

					uni.setStorageSync("is_add", true)

					//that.handledata()
				}).catch(err => {
					console.log(err)
				})
			},

			//数据重置
			handledata() {
				that.uploadImg = false;
				that.goodsName = ''
				that.costPrice = '' //进价
				that.retailPrice = '' //售价
				that.packageContent = '' //包装含量
				that.packingUnit = '' //包装单位
				that.warning_num = '' //预警库存
				that.producer = '' //生产厂家
				that.regNumber = '' //货号
				that.position = '' //位置
				that.product_info = '' //物料简介
				that.productCode = "" //物料条码
				that.category = "" //分类
				that.reserve = 0 //初始库存
				that.goodsIcon = "" //物料图片
				that.stocks = "" //存放的店仓
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

	.uni-input-placeholder {
		font-size: 12px;
	}

	input {
		font-size: 12px;
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
		height: 80rpx;
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

	.right_input1 {
		width: calc(100% - 200rpx);
		font-size: 12px;
	}

	.submit_button {
		width: 50%;
		background: #426ab3;
		border-radius: 40rpx;
		margin: 30rpx;
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
		margin: 30rpx;
		height: 88rpx;
		line-height: 88rpx;
		color: #fff;
	}
</style>
