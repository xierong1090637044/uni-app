<template>
	<view>
		<loading v-if="loading"></loading>

		<view class='page' v-else>
			<uni-nav-bar :fixed="true" color="#333333" background-color="#FFFFFF" right-text="操作" @click-right="show_options"></uni-nav-bar>
			<scroll-view scroll-y="true" style="height: calc(100vh - 80rpx);">
				<view style='line-height:70rpx;padding: 0 20rpx;'>操作产品</view>

				<view>
					<view v-if="detail.opreatGood && detail.opreatGood.length>0">
						<view v-for="(item,index) in detail.opreatGood" :key="index" class='pro_listitem'>
							<view class='pro_list' style='color:#000'>
								<view style="max-width: 60%;">产品：{{item.goodsName}}
									<!--<text v-if="(user.rights&&user.rights.othercurrent[0] != '0') || detail.type == -1"></text>
									<text v-else>（成本价：￥{{item.costPrice}}）</text>-->
								</view>
								<view>数量：X{{item.num}}{{item.packingUnit ||''}}</view>
							</view>
							<view v-if="item.selected_model">
								<view v-for="(model,index) in item.selected_model" :key="index" class="display_flex" v-if="model.num > 0" style="justify-content: space-between;">
									<view style="font-size: 24rpx;color: #999;">{{model.custom1.value + model.custom2.value + model.custom3.value + model.custom4.value}}</view>
									<view style="font-size: 24rpx;color: #f30;">{{model.num}}</view>
								</view>
							</view>

							<view class='pro_list'>
								<view>建议零售价：￥{{item.retailPrice}}</view>
								<view v-if="detail.type == -1">实际卖出价：￥{{item.modify_retailPrice}}</view>
								<view v-else>
									<text v-if="user.rights&&user.rights.othercurrent[0] != '0'">实际进货价：￥0</text>
									<text v-else>实际进货价：￥{{item.modify_retailPrice}}</text>
								</view>
							</view>

						</view>
					</view>
					
					<view v-else>
						<view v-for="(item,index) in products" :key="index" class='pro_listitem'>
							<view class='pro_list' style='color:#000'>
								<view style="max-width: 60%;">产品：{{item.goodsName}}
									<!--<text v-if="(user.rights&&user.rights.othercurrent[0] != '0') || detail.type == -1"></text>
									<text v-else>（成本价：￥{{item.goodsId.costPrice}}）</text>-->
								</view>
								<view>数量：X{{item.num}}{{item.packingUnit ||''}}</view>
							</view>
							<view v-if="item.goodsId.selected_model">
								<view v-for="(model,index) in item.goodsId.selected_model" :key="index" class="display_flex" v-if="model.num > 0" style="justify-content: space-between;">
									<view style="font-size: 24rpx;color: #999;">{{model.custom1.value + model.custom2.value + model.custom3.value + model.custom4.value}}</view>
									<view style="font-size: 24rpx;color: #f30;">{{model.num}}</view>
								</view>
							</view>
					
							<view class='pro_list'>
								<view>建议零售价：￥{{item.goodsId.retailPrice}}</view>
								<view v-if="item.type == -1">实际卖出价：￥{{item.modify_retailPrice}}</view>
								<view v-else>
									<text v-if="user.rights&&user.rights.othercurrent[0] != '0'">实际进货价：￥0</text>
									<text v-else>实际进货价：￥{{item.modify_retailPrice}}</text>
								</view>
							</view>
					
						</view>
					</view>
					<view class='pro_allmoney'>总计：￥{{detail.all_money }}</view>
				</view>

				<view v-if="detail.type == -1">
					<view class="kaidanmx" v-if="detail.extra_type == 1">
						<view style="padding: 10rpx 30rpx;font-size: 30rpx;font-weight: bold;">销售明细</view>
						<view v-if="detail.custom" class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">客户姓名</view>
							<view>{{detail.custom.custom_name}}</view>
						</view>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">商品总价</view>
							<view class="display_flex">
								<view class="real_color">{{detail.all_money}}</view>
								<text style="color: #333;font-weight: bold;margin-left: 6rpx;">元</text>
							</view>
						</view>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">其他费用</view>
							<view class="display_flex">
								<view class="real_color">{{detail.otherMoney || 0}}</view>
								<text style="color: #333;font-weight: bold;margin-left: 6rpx;">元</text>
							</view>
						</view>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">优惠金额</view>
							<view class="display_flex">
								<view class="real_color">{{detail.discountMoney || 0}}</view>
								<text style="color: #333;font-weight: bold;margin-left: 6rpx;">元</text>
							</view>
							
						</view>
						
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;margin-top: 20rpx;">
							<view class="left_content">结算账户</view>
							<view class="real_color">{{detail.account?detail.account.name:'未填写' }}</view>
						</view>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view >现结（预付）款</view>
							<view class="display_flex">
								<view class="real_color">{{detail.haveGetMoney||0 }}</view>
								<text style="color: #333;font-weight: bold;margin-left: 6rpx;">元</text>
							</view>
						</view>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view>现结（预付）后欠款</view>
							<view class="display_flex">
								<view class="real_color">{{detail.debt||0}}</view>
								<text style="color: #333;font-weight: bold;margin-left: 6rpx;">元</text>
							</view>
						</view>
						<view class="display_flex_bet" v-if="detail.createdTime">
							<view class="left_content">销售时间</view>
							<view>{{detail.createdTime.iso.split(" ")[0]}}</view>
						</view>

						<view class="display_flex_bet" v-if="detail.typeDesc" style="background: #fff;border-bottom: 1rpx solid#F7F7F7;margin-top: 20rpx;">
							<view class="display_flex_bet">
								<view class="left_content">发送方式</view>
								<view class="real_color">{{detail.typeDesc}}</view>
							</view>
							<view class="display_flex_bet" v-if="detail.typeDesc =='物流' || detail.typeDesc =='快递'">
								<view class="real_color">{{detail.expressNum}}</view>
							</view>
						</view>
						<view class="display_flex_bet" v-if="detail.expressNum" style="background: #fff;justify-content: flex-end;padding: 0rpx 30rpx;border-bottom: 1rpx solid#F7F7F7;"
						 @click="gotoexpressDet">
							<view style="margin-right: 10rpx;color: #0a53c3;">查快递 </view>
							<fa-icon type="angle-right" size="20" color="#0a53c3" />
						</view>


						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;margin-top: 20rpx;">
							<view class="left_content">出库情况</view>
							<view v-if="detail.status" style="color: #2ca879;">已出库</view>
							<view v-else style="color: #f30;">未出库<text style="font-size: 20rpx;">（请点击右上角操作进行入库）</text></view>
						</view>
						<navigator class="display_flex_bet" hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose" v-if="detail.status == false"
						 style="border-bottom: 1rpx solid#F7F7F7;">
							<view style="width: 150rpx;" class="left_content">出库店仓<text style="color: #f30;">*</text></view>
							<view style="display: flex;align-items: center;">
								<input placeholder="请选择要出库的店仓" disabled="true" :value="stock.stock_name" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;" v-if="detail.status">
							<view class="left_content">出库店仓</view>
							<view style="color: #2ca879;">{{detail.stock.stock_name}}</view>
						</view>
						<view class="display_flex_bet" v-if="detail.status">
							<view class="left_content">出库时间</view>
							<view>{{detail.updatedAt}}</view>
						</view>

					</view>
				</view>

				<!--入库以及采购明细-->
				<view v-else-if="detail.type == 1">
					<view class="kaidanmx" v-if="detail.extra_type == 1">
						<view style="padding: 10rpx 30rpx;">采购明细</view>
						<view v-if="detail.producer" class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">供货商姓名</view>
							<view>{{detail.producer.producer_name}}</view>
						</view>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">商品总价</view>
							<view class="display_flex">
								<view class="real_color">{{detail.all_money}}</view>
								<text style="color: #333;font-weight: bold;margin-left: 6rpx;">元</text>
							</view>
						</view>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">其他费用</view>
							<view class="display_flex">
								<view class="real_color">{{detail.otherMoney || 0}}</view>
								<text style="color: #333;font-weight: bold;margin-left: 6rpx;">元</text>
							</view>
						</view>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">优惠金额</view>
							<view class="display_flex">
								<view class="real_color">{{detail.discountMoney || 0}}</view>
								<text style="color: #333;font-weight: bold;margin-left: 6rpx;">元</text>
							</view>
						</view>
						
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;margin-top: 20rpx;">
							<view class="left_content">结算账户</view>
							<view class="real_color">{{detail.account?detail.account.name:'未填写' }}</view>
						</view>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view >预付款</view>
							<view class="display_flex">
								<view class="real_color">{{detail.haveGetMoney||0 }}</view>
								<text style="color: #333;font-weight: bold;margin-left: 6rpx;">元</text>
							</view>
						</view>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;">
							<view>预付后欠款</view>
							<view class="display_flex">
								<view class="real_color">{{detail.debt||0}}</view>
								<text style="color: #333;font-weight: bold;margin-left: 6rpx;">元</text>
							</view>
						</view>
						<view class="display_flex_bet" v-if="detail.createdTime">
							<view class="left_content">采购时间</view>
							<view>{{detail.createdTime.iso.split(" ")[0]}}</view>
						</view>
						
						<view class="display_flex_bet" style="margin-top: 20rpx;">
							<view class="left_content">入库情况</view>
							<view v-if="detail.status" style="color: #2ca879;">已入库</view>
							<view v-else style="color: #f30;">未入库<text style="font-size: 20rpx;">（请点击右上角操作进行入库）</text></view>
						</view>
						<navigator class="display_flex_bet" hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose" v-if="detail.status == false">
							<view style="width: 150rpx;" class="left_content">入库店仓<text style="color: #f30;">*</text></view>
							<view style="width: calc(100% - 160rpx);display: flex;align-items: center;justify-content: flex-end;">
								<input placeholder="请选择要入库的店仓" disabled="true" :value="stock.stock_name" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;" v-else>
							<view class="left_content">入库店仓</view>
							<view style="text-align: right;">{{detail.stock.stock_name}}</view>
						</view>
						<view class="display_flex_bet" v-if="detail.status">
							<view class="left_content">入库时间</view>
							<view>{{detail.updatedAt}}</view>
						</view>
					</view>
				</view>


				<view style='margin-top:20px' class='detail_bottom'>
					<view style='display:flex;border-bottom:1px solid#ddd;padding-bottom: 20upx;'>
						<view>
							<image :src='detail.opreater.avatarUrl' class='avatar'></image>
						</view>
						<view class='common_style'>{{detail.opreater.nickName}}</view>
						<view class='common_style'>（操作者）</view>
					</view>
					<view style='padding:20rpx 0 0'>
						<view v-if="detail.beizhu" style="word-break: break-all;">备注：{{detail.beizhu}}</view>
						<view v-else>备注：暂无</view>
						<view>操作时间：{{detail.createdAt}}</view>

						<view v-if="detail.Images && detail.Images.length > 0">
							<view class="notice_text">凭证图</view>

							<view style="width: 100%;padding: 20rpx 0;">
								<view class="upload_image display_flex">
									<view style="position: relative;" v-for="(url,index) in detail.Images" :key="index" @click="priview(url)">
										<image :src="url" style="width: 180rpx;height: 180rpx;margin-right: 10rpx;"></image>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>

		</view>

	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import print from "@/utils/print.js"
	import common from "@/utils/common.js"

	import loading from "@/components/Loading/index.vue"
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'

	let that;
	let id;
	let uid;
	export default {
		components: {
			loading,
			uniNavBar
		},
		data() {
			return {
				user: uni.getStorageSync("user"),
				identity: uni.getStorageSync("identity"),
				othercurrent: '',
				bills: [],
				loading: true,
				products: null,
				detail: null,
				stock: '', //店仓
			}
		},
		onLoad(options) {
			// #ifdef H5
			this.$wechat.share_pyq();
			// #endif

			console.log(options)
			that = this;
			id = options.id;
			uid = uni.getStorageSync("uid");
			if (that.user.rights && that.user.rights.othercurrent) {
				that.othercurrent = that.user.rights.othercurrent
			}
			that.getdetail(id);
		},

		onShow() {
			that.stock = uni.getStorageSync("warehouse") ? uni.getStorageSync("warehouse")[0].stock : ''
		},

		//分享
		onShareAppMessage: function(res) {
			if (res.from === 'button') {
				// 来自页面内转发按钮
				console.log(res.target)
			}
			return {
				title: '库存表-操作单详情',
				path: '/pages/report/EnteringHistory/detail/detail?id=' + id
			}
		},

		methods: {

			gotoexpressDet() {
				if (that.user.is_vip) {
					uni.navigateTo({
						url: "../expressDet/expressDet?number=" + that.detail.expressNum
					})
				} else {
					uni.showToast({
						title: "您还不是会员，无法使用",
						icon: 'none'
					})
				}
			},

			//预览图片
			priview(url) {
				uni.previewImage({
					current: url,
					urls: that.detail.Images,
				});
			},

			//点击显示操作菜单
			show_options() {
				let options = ['打印'];
				if (that.detail.type == -1 || that.detail.type == 1) {
					if (that.othercurrent.indexOf("1") != -1 || that.identity == 1 && that.detail.extra_type == 1) {

						options = (that.detail.type == -1) ? ['销售出库', '撤销', '打印','编辑'] : ['采购入库', '撤销', '打印','编辑']
						//options = (that.detail.type == -1) ? ['销售出库', '撤销', '打印'] : ['采购入库', '撤销', '打印']

						uni.showActionSheet({
							itemList: options,
							success: function(res) {
								if (res.tapIndex == 0) {
									if (that.detail.type == 1) {
										if (that.detail.status) {
											uni.showToast({
												title: "该笔采购单已入库",
												icon: "none"
											})
										} else {
											if (uni.getStorageSync("warehouse") == "" || uni.getStorageSync("warehouse") == undefined) {
												uni.showToast({
													icon: "none",
													title: "请选择店仓"
												});
												return;
											} else {
												that.confrimOrder()
											}
										}
									} else if (that.detail.type == -1) {
										if (that.detail.status) {
											uni.showToast({
												title: "该笔销售单已出库",
												icon: "none"
											})
										} else {
											if (uni.getStorageSync("warehouse") == "" || uni.getStorageSync("warehouse") == undefined) {
												uni.showToast({
													icon: "none",
													title: "请选择店仓"
												});
												return;
											} else {
												that.confrimOrder()
											}
										}
									}
									uni.setStorageSync("is_option", true)
								} else if (res.tapIndex == 1) {
									that.$http.Post("order_opreationSellPurchaseRevoke", {
										orderId:that.detail.objectId,
									}).then(res => {
										if(res.code == 1){
											uni.setStorageSync("is_option", true)
											uni.hideLoading();
											uni.navigateBack({
												delta: 1
											})
											setTimeout(function() {
												uni.showToast({
													title: '撤销成功'
												})
											}, 1000);
										}
									})
								} else if (res.tapIndex == 2) {
									that.$http.Post("stock_printInfo", {
										sn:uni.getStorageSync("setting").sn,
										type:"opreations",
										id:that.detail.objectId,
									}).then(res => {
										console.log(res)
									})
								} else if (res.tapIndex == 3) {//编辑操作单
									let stock = {}
									stock.stock = that.detail.stock
									uni.setStorageSync("discountMoney",that.detail.discountMoney)
									uni.setStorageSync("haveGetMoney",that.detail.haveGetMoney)
									uni.setStorageSync("otherMoney",that.detail.otherMoney)
									uni.setStorageSync("custom",that.detail.custom)
									uni.setStorageSync("account",that.detail.account)
									uni.setStorageSync("warehouse",[stock])
									uni.setStorageSync("products",that.detail.opreatGood)
									uni.setStorageSync("orderId",that.detail.objectId)
									uni.setStorageSync("beizhu_text",that.detail.beizhu)
									uni.setStorageSync("Images",that.detail.Images)
									if(that.detail.type == -1 ){
										uni.navigateTo({
											url:"/pages/commonNew/goods_out/goods_out?value=3&option=edit"
										})
									}else if(that.detail.type == 1){
										uni.navigateTo({
											url:"/pages/commonNew/good_confrim/good_confrim?value=3&option=edit"
										})
									}
								}
							},
							fail: function(res) {
								console.log(res.errMsg);
							}
						});
					}else{
						uni.showToast({
							title:"暂无操作权限",
							icon:"none",
						})
					}
				}
			},

			getdetail: function(id) {
				const query = Bmob.Query('order_opreations');
				query.include("opreater", "custom", "producer", "stock", "account");
				query.get(id).then(res => {
					console.log(res);
					that.detail = res;
					that.products = res.detail;
					that.bills = res.bills;
					that.loading = false;
					
					if(res.type == 1){
						uni.setNavigationBarTitle({
							title:"采购单详情"
						})
					}
				}).catch(err => {
					console.log(err)
				})
			},

			//数据撤销点击
			revoke: function() {
				wx.showModal({
					title: '提示',
					content: '数据撤销后不可恢复，请谨慎撤销！',
					success(res) {
						if (res.confirm) {
							uni.showLoading({
								title: '撤销中...'
							})
							const query = Bmob.Query('order_opreations');
							query.destroy(that.detail.objectId).then(res => {
								const query = Bmob.Query('Bills');
								query.containedIn("objectId", that.bills);
								query.find().then(todos => {

									todos.destroyAll().then(res => {
										if (that.detail.status) {
											that.reduceAll()
										} else {
											uni.hideLoading();
											uni.navigateBack({
												delta: 1
											})
											setTimeout(function() {
												uni.showToast({
													title: '撤销成功'
												})
											}, 1000);
										}

									}).catch(err => {
										console.log(err)
									});
								})
							}).catch(err => {
								console.log(err)
							})
						}
					}
				})
			},
			
			async reduceAll(){
				await that.reduceAccount()
				//await that.reduceDebt()
				await that.reduceGoods()
			},
			
			reduceAccount(){
				if (that.detail.account && that.detail.account.objectId) {
					const accountQuery = Bmob.Query('accounts');
					accountQuery.get( that.detail.account.objectId).then(res => {
						if(that.detail.type == 1){
							res.set('money', res.money + Number(that.detail.haveGetMoney));
						}else if(that.detail.type == -1){
							res.set('money', res.money - Number(that.detail.haveGetMoney));
						}
						res.save()
					})
				}
			},
			
			reduceGoods(){
				for (var i = 0; i < that.products.length; i++) {
					that.delete_bill(i);
				}
			},

			//审核订单
			confrimOrder() {
				wx.showModal({
					title: '提示',
					content: '确定进行此操作！',
					success(res) {
						if (res.confirm) {
							uni.showLoading({
								title: '操作中，请勿退出该页面...'
							})
							const pointer = Bmob.Pointer('stocks');
							let stockId = pointer.set(that.stock.objectId);

							const query = Bmob.Query('order_opreations');
							query.set('id', id) //需要修改的objectId
							query.set("stock", stockId);
							query.set('status', true)
							query.save().then(res => {
								//console.log(res)
								let count = 0
								if (that.detail.type == 1) {
									for (let item of that.products) {
										that.addOrReduceGoodReserve(item, count);
										count += 1;
									}
								} else if (that.detail.type == -1) {
									for (let item of that.products) {
										that.ReduceGoodReserve(item, count);
										count += 1;
									}
								}
							}).catch(err => {
								console.log(err)
							})
						}
					}
				})
			},

			//采购单确定采购入库之后改变产品库存
			addOrReduceGoodReserve(product, count) {
				const query = Bmob.Query("Goods");
				query.equalTo("userId", "==", uid);
				query.equalTo("header", "==", product.goodsId.objectId);
				query.equalTo("stocks", "==", that.stock.objectId);
				query.find().then(res => {
					//console.log("店仓里的产品", res)
					if (res.length == 0) {
						query.get(product.goodsId.objectId).then(res => {
							product.objectId = product.goodsId.objectId
							product.costPrice = res.costPrice
							product.retailPrice = res.retailPrice
							common.upload_good_withNoCan(res, that.stock, Number(product.num)).then(res => { //上传没有的产品
								const query1 = Bmob.Query("Goods");
								query1.equalTo("header", "==", product.goodsId.objectId);
								query1.equalTo("order", "==", 1);
								query1.statTo("sum", "reserve");
								query1.find().then(res => { //计算首产品的总库存
									let now_reserve = res[0]._sumReserve
									const query = Bmob.Query('Goods');
									query.set('reserve', now_reserve)
									query.set('id', product.goodsId.objectId)
									if(product.modify_retailPrice) query.set('costPrice', product.modify_retailPrice)
									query.save().then(res => {
										//common.modifyStockType(product.goodsId.objectId)
										if (count == (that.products.length - 1)) {
											const pointer = Bmob.Pointer('stocks');
											let stockId = pointer.set(that.stock.objectId);
							
											const query = Bmob.Query('Bills');
											query.containedIn("objectId", that.bills);
											query.find().then(todos => {
												todos.set('status', true);
												todos.set("stock", stockId);
												todos.saveAll().then(res => {
													uni.hideLoading();
							
													that.getdetail(id);
													setTimeout(function() {
														uni.showToast({
															title: '采购入库成功'
														})
													}, 1000);
													//console.log(res, 'ok')
												}).catch(err => {
													console.log(err)
												});
											})
										}
									})
								})
							})
						})
						
					} else {
						const query1 = Bmob.Query('Goods');
						query1.get(res[0].objectId).then(res => {
							//console.log(res)
							if (product.goodsId.selected_model) {
								let num = 0;
								for (let model of product.goodsId.selected_model) {
									for (let item of res.models) {
										if (item.id == model.id) {
											item.reserve = Number(item.reserve) + Number(model.num)
											//console.log(item.reserve)
											num += Number(model.num)
										}
									}
								}
								//console.log(res.models)
								res.set('models', res.models)
								res.set('reserve', res.reserve + num);
							} else {
								res.set('reserve', res.reserve + product.num);
							}
							res.save().then(res => {
								const pointer = Bmob.Pointer('stocks');
								let stockId = pointer.set(that.stock.objectId);

								const query1 = Bmob.Query("Goods");
								query1.equalTo("header", "==", product.goodsId.objectId);
								query1.equalTo("order", "==", 1);
								query1.statTo("sum", "reserve");
								query1.find().then(res => { //计算首产品的总库存
									let now_reserve = res[0]._sumReserve
									const query = Bmob.Query('Goods');
									query.set('reserve', now_reserve)
									if(product.modify_retailPrice) query.set('costPrice', product.modify_retailPrice)
									query.set('id', product.goodsId.objectId)
									query.save().then(res => {
										if (count == (that.products.length - 1)) {
											const query = Bmob.Query('Bills');
											query.containedIn("objectId", that.bills);
											query.find().then(todos => {
												todos.set('status', true);
												todos.set("stock", stockId);
												todos.saveAll().then(res => {
													uni.hideLoading();
													/*uni.navigateBack({
														delta: 1
													})*/
													that.getdetail(id);
													setTimeout(function() {

														const query1 = Bmob.Query("Goods");
														query1.equalTo("header", "==", product.goodsId.objectId);
														query1.equalTo("order", "==", 1);
														query1.statTo("sum", "reserve");
														query1.find().then(res => {
															common.modifyStockType(product.goodsId.objectId)
															
															let now_reserve = res[0]._sumReserve
															const query = Bmob.Query('Goods');
															query.set('reserve', now_reserve)
															query.set('id', product.goodsId.objectId)
															query.save().then(res => {
																uni.removeStorageSync("warehouse")
																uni.showToast({
																	title: '采购入库成功'
																})
															})
														})

													}, 1000);
													//console.log(res, 'ok')
												}).catch(err => {
													console.log(err)
												});
											})
										}
									})
								})
							})
						})
					}

				})
			},

			//销售单确认审核之后减少库存
			ReduceGoodReserve(product, count) {

				const query = Bmob.Query("Goods");
				query.equalTo("userId", "==", uid);
				query.equalTo("header", "==", product.goodsId.objectId);
				query.equalTo("stocks", "==", that.stock.objectId);
				query.find().then(res => {
					//console.log("店仓里的产品", res)
					if (res.length == 0) {
						query.get(product.goodsId.objectId).then(res => {
							product.objectId = product.goodsId.objectId
							product.costPrice = res.costPrice
							product.retailPrice = res.retailPrice
							common.upload_good_withNoCan(res, that.stock, 0 - Number(product.num)).then(res => {
								console.log(res)
								const query1 = Bmob.Query("Goods");
								query1.equalTo("header", "==", product.goodsId.objectId);
								query1.equalTo("order", "==", 1);
								query1.statTo("sum", "reserve");
								query1.find().then(res => {
									let now_reserve = res[0]._sumReserve
									const query = Bmob.Query('Goods');
									query.set('reserve', now_reserve)
									query.set('id', product.goodsId.objectId)
									query.save().then(res => {
										
										//common.modifyStockType(product.goodsId.objectId)
										
										if (count == (that.products.length - 1)) {
											const pointer = Bmob.Pointer('stocks');
											let stockId = pointer.set(that.stock.objectId);
							
											const query = Bmob.Query('Bills');
											query.containedIn("objectId", that.bills);
											query.find().then(todos => {
												todos.set('status', true);
												todos.set('stock', stockId);
												todos.saveAll().then(res => {
													uni.hideLoading();
							
													that.getdetail(id);
													setTimeout(function() {
							
							
														uni.removeStorageSync("warehouse")
														uni.showToast({
															title: '销售出库成功'
														})
							
													}, 1000);
													//console.log(res, 'ok')
												}).catch(err => {
													console.log(err)
												});
											})
										}
									})
								})
							})
						})
					} else {
						const query1 = Bmob.Query('Goods');
						query1.get(res[0].objectId).then(res => {
							//console.log(res)
							if (product.goodsId.selected_model) {
								let num = 0;
								for (let model of product.goodsId.selected_model) {
									for (let item of res.models) {
										if (item.id == model.id) {
											item.reserve = Number(item.reserve) - Number(model.num)
											//console.log(item.reserve)
											num += Number(model.num)
										}
									}
								}
								//console.log(res.models)
								res.set('models', res.models)
								res.set('reserve', res.reserve - num);
							} else {
								res.set('reserve', res.reserve - product.num);
							}
							res.save().then(res => {
								const query1 = Bmob.Query("Goods");
								query1.equalTo("header", "==", product.goodsId.objectId);
								query1.equalTo("order", "==", 1);
								query1.statTo("sum", "reserve");
								query1.find().then(res => {
									let now_reserve = res[0]._sumReserve
									const query = Bmob.Query('Goods');
									query.set('reserve', now_reserve)
									query.set('id', product.goodsId.objectId)
									query.save().then(res => {
										//common.modifyStockType(product.goodsId.objectId)
										if (count == (that.products.length - 1)) {
											const pointer = Bmob.Pointer('stocks');
											let stockId = pointer.set(that.stock.objectId);

											const query = Bmob.Query('Bills');
											query.containedIn("objectId", that.bills);
											query.find().then(todos => {
												todos.set('status', true);
												todos.set('stock', stockId);
												todos.saveAll().then(res => {
													uni.hideLoading();
													/*uni.navigateBack({
														delta: 1
													})*/

													that.getdetail(id);
													setTimeout(function() {

														uni.showToast({
															title: '销售出库成功'
														})

													}, 1000);
													//console.log(res, 'ok')
												}).catch(err => {
													console.log(err)
												});
											})
										}
									})
								})
							})
						})
					}

				})

			},

			delete_bill: function(i) {
				let product = that.products[i];
				let bill = that.bills[i]

				const query1 = Bmob.Query('Goods');
				query1.equalTo("order", "==", 1);
				query1.equalTo("header", "==", product.goodsId.objectId);
				query1.equalTo("stocks", "==", that.detail.stock.objectId);
				query1.find().then(res => {
					console.log(res)
					let thisGood = res[0];
					query1.set('id', res[0].objectId);
					if (product.type == 1) {
						if (product.goodsId.selected_model) {
							let num = 0;
							for (let model of product.goodsId.selected_model) {
								for (let item of thisGood.models) {
									if (item.id == model.id) {
										item.reserve = Number(item.reserve) - Number(model.num)
										//console.log(item.reserve)
										num += Number(model.num)
									}
								}
							}
							//console.log(res.models)
							query1.set('models', res[0].models)
							query1.set('reserve', res[0].reserve - num);
						} else {
							query1.set('reserve', res[0].reserve - product.num);
						}
					} else if (product.type == -1) {
						if (product.goodsId.selected_model) {
							let num = 0;
							for (let model of product.goodsId.selected_model) {
								for (let item of thisGood.models) {
									if (item.id == model.id) {
										item.reserve = Number(item.reserve) + Number(model.num)
										//console.log(item.reserve)
										num += Number(model.num)
									}
								}
							}
							//console.log(res.models)
							query1.set('models', res[0].models)
							query1.set('reserve', res[0].reserve + num);
						} else {
							query1.set('reserve', res[0].reserve + product.num);
						}

					}
					query1.save().then(res => {
						if (thisGood.header) {
							const query1 = Bmob.Query("Goods");
							query1.equalTo("header", "==", thisGood.header.objectId);
							query1.equalTo("order", "==", 1);
							query1.statTo("sum", "reserve");
							query1.find().then(res => {
								console.log("dasds", res)
								let now_reserve = res[0]._sumReserve
								const query = Bmob.Query('Goods');
								query.set('reserve', now_reserve)
								query.set('id', thisGood.header.objectId)
								query.save().then(res => {
									//common.modifyStockType(thisGood.header.objectId)
									if (i == (that.products.length - 1)) {
										uni.hideLoading();
										uni.navigateBack({
											delta: 1
										})
										setTimeout(function() {
											uni.showToast({
												title: '撤销成功'
											})
										}, 1000);
									}
								})
							})
						} else {
							//common.modifyStockType(thisGood.objectId)
							if (i == (that.products.length - 1)) {
								uni.hideLoading();
								uni.navigateBack({
									delta: 1
								})
								setTimeout(function() {
									uni.showToast({
										title: '撤销成功'
									})
								}, 1000);
							}
						}


					})

				}).catch(err => {
					console.log(err)
				})

			}
		}
	}
</script>

<style>
	.page {
		color: #4d4d4d;
		background: #FAFAFA;
		font-size: 28rpx;
	}

	.operater_status {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 20rpx 0;
		background: #b82626;
		color: #fff;
		z-index: 100;
		text-align: center;
	}

	.pro_list {
		display: flex;
		justify-content: space-between;
	}

	.pro_listitem {
		background-color: #fff;
		padding: 10rpx 20rpx;
		border-bottom: 1rpx solid#ddd;
	}

	.pro_allmoney {
		background-color: #fff;
		padding: 10rpx 20rpx;
		text-align: right;
		font-size: 32rpx;
		color: #f30;
	}

	.beizhu_style {
		width: 100%;
		background-color: #fff;
		padding: 20rpx;
		font-size: 32rpx;
	}

	.confrim_button {
		width: 60%;
		background: #426ab3;
		color: #fff;
		font-size: 32rpx;
		margin: 10% 20%;
	}

	.detail_bottom {
		width: calc(100% - 40rpx);
		background-color: #fff;
		padding: 20rpx;
	}

	.avatar {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}

	.common_style {
		line-height: 80rpx;
		margin-left: 20rpx;
		color: #000;
	}

	.real_color {
		color: #f30 !important;
	}

	.kaidanmx {
		margin-top: 30rpx;
	}

	.display_flex_bet {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		padding: 15rpx 30rpx;
	}

	.left_content {
		width: 150rpx;
	}
</style>
