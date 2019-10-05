<template>
	<view class="page">
		<form @submit="formSubmit">

			<scroll-view style="height: calc(100vh - 148rpx);" scroll-y>
				<view class="frist">
					<view class="notice_text">产品图<text style="font-size: 20rpx;color: #333;">(暂时不支持上传图片，请先去小程序端上传)</text></view>


					<view style="width: 100%;padding: 20rpx 0;">
						<view class="upload_image">
							<image :src="goodsIcon" v-if="goodsIcon" style="width: 180rpx;height: 180rpx;"></image>
							<fa-icon type="plus-square-o" size="40" color="#426ab3" v-else style="height: 180rpx;line-height: 180rpx;"></fa-icon>
						</view>
						<input name="goodsIcon" v-show="false" :value="goodsIcon" />

					</view>

				</view>

				<view class="frist">
					<view class="notice_text">基本信息</view>
					<view class="input_item">
						<view class="left_item">名称<text style="color: #aa2116;margin-left: 4rpx;">*</text></view>
						<view class="right_input1"><input placeholder="产品名称" name="goodsName" :value="goodsName"></input></view>
					</view>

					<navigator class="input_item2" hover-class="none" url="/pages/manage/category/category?type=choose">
						<view style="display: flex;align-items: center;">
							<view class="left_item">类别</view>
							<view class="right_input1"><input placeholder="产品类别" name="goodsClass" :value="category.class_text" disabled="true"></input></view>
						</view>

						<view>
							<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
						</view>
					</navigator>

					<view class="input_item">
						<view class="left_item">进价</view>
						<view class="right_input1"><input placeholder="产品进价" name="costPrice" type="digit" :value="costPrice"></input></view>
					</view>

					<view class="input_item">
						<view class="left_item">售价</view>
						<view class="right_input1"><input placeholder="产品售价" name="retailPrice" type="digit" :value="retailPrice"></input></view>
					</view>
					<view class="input_item">
						<view class="left_item">包装含量</view>
						<view class="right_input1"><input placeholder="包装含量" name="packageContent" :value="packageContent"></input></view>
					</view>
					<view class="input_item">
						<view class="left_item">包装单位</view>
						<view class="right_input1"><input placeholder="包装单位" name="packingUnit" :value="packingUnit"></input></view>
					</view>
				</view>

				<!--<view class="frist">
					<view class="input_item">
						<view class="left_item">生产日期</view>
						<picker mode="date" @change="bindproducttimeChange">
							<view class="right_input1"><input placeholder="生产日期" name="producttime" disabled="true" v-model="producttime"></input></view>
						</picker>
					</view>
				
					<view class="input_item">
						<view class="left_item">失效日期</view>
						<picker mode="date" @change="bindDateChange">
							<view class="right_input1"><input placeholder="失效日期" name="nousetime" disabled="true" v-model="nousetime"></input></view>
						</picker>
				
					</view>
				</view>-->

				<view class="frist" style="margin-bottom: 30rpx;">

					<navigator style="line-height: 70rpx;" class="input_item2" hover-class="none" url="G_More/G_More">
						<view class="display_flex">
							<view class="input_item" style="width: 100%;">
								<view class="left_item">初始库存</view>
								<input placeholder="初始库存" type="digit" name="reserve" v-model="reserve" disabled="true"/>
							</view>
						</view>
						<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
					</navigator>
					<view class="input_item">
						<view class="left_item">预警库存</view>
						<view class="right_input1"><input placeholder="预警库存" name="warning_num" type="digit" :value="warning_num"></input></view>
					</view>

					<navigator class="input_item2" hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose">
						<view style="display: flex;align-items: center;">
							<view class="left_item">仓库</view>
							<view class="right_input1">
								<input placeholder="选择仓库" v-model="stock_name" disabled="true"></input>
							</view>
						</view>

						<view>
							<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
						</view>
					</navigator>
				</view>

				<!--更多产品信息-->
				<uni-collapse :accordion="true">
					<uni-collapse-item title="更多信息" style="color: #FE104C;font-size: 32rpx;font-weight: bold;">
						<view class="frist" style="margin-top: 0;">
							<view class="input_item">
								<view class="left_item">生产厂家</view>
								<view class="right_input1"><input placeholder="生产厂家" name="producer" :value="producer"></input></view>
							</view>
							<view class="input_item">
								<view class="left_item">货号</view>
								<view class="right_input1"><input placeholder="货号" name="regNumber" :value="regNumber"></input></view>
							</view>
							<view class="input_item2">

								<view style="display: flex;align-items: center;">
									<view class="left_item">条码</view>
									<view class="right_input1"><input :value="productCode" placeholder="条码" name="productCode"></input></view>
								</view>

								<view>
									<fa-icon type="clone" size="16" color="#426ab3" @click="scan_code"></fa-icon>
								</view>
							</view>
							<view class="input_item">
								<view class="left_item">货架位置</view>
								<view class="right_input1"><input placeholder="货架位置" name="position" :value="position"></input></view>
							</view>
							<view class="input_item">
								<view class="left_item">产品简介</view>
								<view class="right_input1"><input placeholder="产品简介" name="product_info" :value="product_info"></input></view>
							</view>
							<view class="input_item">
								<view class="left_item">是否半成品</view>
								<view class="right_input1">
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
				text_desc:"保存",
				goodsName: '',
				costPrice: '', //进价
				retailPrice: '', //售价
				packageContent: '', //包装含量
				packingUnit: '', //包装单位
				warning_num: '', //预警库存
				producer: '', //生产厂家
				regNumber: '', //货号
				position: '', //位置
				product_info: '', //产品简介
				productCode: "", //产品条码
				category: "", //分类
				reserve: 0, //初始库存
				goodsIcon: "", //产品图片
				stock_name:"",//存放仓库的名字
				stocks: "",//存放的仓库
				producttime: "",
				nousetime: "",
				product_state: false, //产品是否是半成品
				model:'',//多种规格
			}
		},

		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');
			uni.removeStorageSync("category")
			uni.removeStorageSync("is_add");
			uni.removeStorageSync("now_model")
		},
		onShow() {

			if (uni.getStorageSync("warehouse")) { //存在此缓存证明选择了仓库
				that.stocks = uni.getStorageSync("warehouse")[0].stock
				that.stock_name = uni.getStorageSync("warehouse")[0].stock.stock_name
			}

			if (uni.getStorageSync("category")) {
				that.category = uni.getStorageSync("category")

				let pointer2 = Bmob.Pointer('class_user')
				p_class_user_id = pointer2.set(that.category.parent.objectId) //一级分类id关联

				let pointer3 = Bmob.Pointer('second_class')
				p_second_class_id = pointer3.set(that.category.objectId) //仓库的id关联

				console.log(that.category.parent.objectId, that.category.objectId)
			}
			
			if(uni.getStorageSync("now_model")){
				that.reserve = 0;
				let now_model = uni.getStorageSync("now_model")
				for(let item of now_model){
					 that.reserve += Number(item.reserve)
				}
			}
			
		},

		onUnload() {
			tempFilePaths = "";
			p_class_user_id = "";
			p_second_class_id = "";
			uni.removeStorageSync("now_model")

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
						title: "请输入产品名称",
						icon: "none"
					})
				} else {
					if(uni.getStorageSync("now_model")){
						that.upload_good(good)
					}else{
						uni.showToast({
							title: "请输入规格以及对应的库存",
							icon: "none"
						})
						
					}
					
				}
			},

			//上传商品
			upload_good(good) {
				uni.showLoading({
					title: "上传中..."
				});
				
				if(uni.getStorageSync("now_product")){
					that.add_good(good,"edit")
				}else{
					const query = Bmob.Query("Goods");
					query.equalTo("userId", "==", uid);
					query.equalTo("goodsName", "==", good.goodsName);
					query.find().then(res => {
						if (res.length >= 1) {
							uni.showToast({
								title: "你的库存中已存在此产品",
								icon: 'none'
							})
						} else {
							that.add_good(good,"add")
						}
					});
				}
			},
			
			
			add_good(good,type){
				const pointer = Bmob.Pointer('_User')
				const userid = pointer.set(uid)
				
				let stock_id = (that.stocks.objectId ? that.stocks.objectId : '')
				
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
				query.set("models", uni.getStorageSync("now_model"))
				query.set("reserve", Number(good.reserve))
				query.set("productCode", good.productCode)
				query.set("stocks", p_stock_id)
				query.set("product_info", good.product_info)
				query.set("producer", good.producer)
				query.set("packingUnit", good.packingUnit)
				query.set("packageContent", good.packageContent)
				query.set("position", good.position)
				query.set("warning_num", Number(good.warning_num))
				query.set("stocktype", (Number(good.warning_num) >= Number(that.reserve)) ? 0 : 1) //库存数量类型 0代表库存不足 1代表库存充足
				
				query.set("product_state", good.product_state) //改产品是否是半成品
				if (uni.getStorageSync("category")) { //存在此缓存证明选择了仓库
					query.set("second_class", p_second_class_id)
					query.set("goodsClass", p_class_user_id)
				}
				
				query.set("userId", userid)
				query.set("id", uni.getStorageSync("now_product")?uni.getStorageSync("now_product").objectId:"")
				query.save().then(res => {
					uni.hideLoading();
					if(type == "add"){
						common.log(uni.getStorageSync("user").nickName + "增加了产品'" + good.goodsName + "'", 5, res.objectId);
						uni.showToast({
							title: "上传成功"
						})
					}else{
						common.log(uni.getStorageSync("user").nickName + "修改了产品'" + good.goodsName + "'", 5, uni.getStorageSync("now_product").objectId);
						uni.navigateBack({
							delta:2
						})
						
						setTimeout(function(){
							uni.showToast({
								title: "修改成功",
								duration:1000,
							})
						},1000)
					}
					
					uni.setStorageSync("is_add", true)
				
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
