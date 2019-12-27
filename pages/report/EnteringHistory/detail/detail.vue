<template>
	<view>
		<loading v-if="loading"></loading>

		<view class='page' v-else>
			<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="操作" @click-right="show_options"></uni-nav-bar>
			<scroll-view scroll-y="true" :style="{height:(detail.extra_type == 1&&detail.status== false?'calc(100vh - 170rpx)':'calc(100vh - 80rpx)')}">
				<view style='line-height:70rpx;padding: 0 20rpx;'>操作产品</view>
				<view v-if="detail.type == 3">
					<view>
						<view v-for="(item,index) in products" :key="index" class='pro_listitem'>
							<view class='pro_list' style='color:#000'>
								<view>产品：{{item.goodsName}}</view>
							</view>
							<view class='pro_list'>
								<view>盘点前库存：{{item.reserve}}</view>
								<view>盘点后库存：{{item.now_reserve}}</view>
							</view>
						</view>
					</view>
				</view>

				<view v-else-if="detail.type == 2">
					<view>
						<view v-for="(item,index) in products" :key="index" class='pro_listitem'>
							<view class='pro_list_item' style='color:#000'>
								<view>产品：{{item.goodsName}}（成本价：￥{{item.goodsId.costPrice}}）</view>
							</view>
							<view class='pro_list'>
								<view>退货数量：X{{item.num}}</view>
								<view style="text-align: right;">建议零售价：￥{{item.goodsId.retailPrice}}</view>
							</view>
							<!--<view style="text-align: right;">总价：￥{{item.total_money}}</view>-->
						</view>
					</view>
					<view class='pro_allmoney'>总计：￥{{detail.all_money}}</view>
				</view>

				<view v-else-if="detail.type == -2">
					<view>
						<view v-for="(item,index) in products" :key="index" class='pro_listitem'>
							<view class='pro_list' style='color:#000;border-bottom: 1rpx solid#EEEEEE;padding:0 0 10rpx;'>
								<view>产品：{{item.goodsName}}</view>
								<view>调拨数量：{{item.num}}</view>
							</view>
							<view class='pro_list' style="padding: 10rpx 0;">
								<view>调出仓库：{{item.stock}}</view>
								<view>调拨后库存：{{item.reserve - item.num}}</view>
							</view>
							<view class='pro_list'>
								<view>调入仓库：{{item.out_stock}}</view>
								<view>调拨后库存：{{item.out_reserve + item.num}}</view>
							</view>
						</view>
					</view>
					<view class='pro_allmoney' v-if="detail.type != -2">总计：￥{{detail.all_money}}</view>
				</view>

				<view v-else>
					<view>
						<view v-for="(item,index) in products" :key="index" class='pro_listitem'>
							<view class='pro_list_item' style='color:#000'>
								<view>产品：{{item.goodsName}}
									<text v-if="(user.rights&&user.rights.othercurrent[0] != '0') || detail.type == -1"></text>
									<text v-else>（成本价：￥{{item.goodsId.costPrice}}）</text>
								</view>
							</view>
							<view v-if="item.goodsId.selected_model">
								<view v-for="(model,index) in item.goodsId.selected_model" :key="index" class="display_flex_bet" v-if="model.num > 0">
									<view style="font-size: 24rpx;color: #999;">{{model.custom1.value + model.custom2.value + model.custom3.value + model.custom4.value}}</view>
									<view style="font-size: 24rpx;color: #f30;">{{model.num}}</view>
								</view>
							</view>
							<view class='pro_list'>
								<view>建议零售价：￥{{item.goodsId.retailPrice}}</view>
								<view v-if="item.type == -1">实际卖出价：￥{{item.modify_retailPrice}}（X{{item.num}}）</view>
								<view v-else>
									<text v-if="user.rights&&user.rights.othercurrent[0] != '0'">实际进货价：￥0（X{{item.num}}）</text>
									<text v-else>实际进货价：￥{{item.modify_retailPrice}}（X{{item.num}}）</text>
								</view>
							</view>

							<!--<view style="text-align: right;" v-if="user.rights&&user.rights.othercurrent[0] != '0'">总价：￥0</view>
							<view style="text-align: right;" v-else>总价：￥{{item.total_money }}</view>-->
						</view>
					</view>
					<view class='pro_allmoney' v-if="user.rights&&user.rights.othercurrent[0] != '0'">总计：￥0</view>
					<view class='pro_allmoney' v-else>总计：￥{{detail.all_money }}</view>
				</view>

				<view v-if="detail.type == -1">
					<view class="kaidanmx" v-if="detail.extra_type == 1">
						<view style="padding: 10rpx 30rpx;">销售明细</view>
						<view v-if="detail.custom" class="display_flex" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">客户姓名</view>
							<view>{{detail.custom.custom_name}}</view>
						</view>
						<view v-if="detail.discount" class="display_flex" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">折扣率</view>
							<view>{{detail.discount}}%</view>
						</view>
						<view class="display_flex" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">实际付款</view>
							<view class="real_color">{{detail.real_money == null ?'未填写':detail.real_money }}</view>
						</view>
						<view class="display_flex" v-if="detail.debt > 0" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">欠款</view>
							<view class="real_color">{{detail.debt}}</view>
						</view>
						<view class="display_flex_bet" v-if="detail.typeDesc" style="background: #fff;border-bottom: 1rpx solid#F7F7F7;">
							<view class="display_flex">
								<view class="left_content">发送方式</view>
								<view class="real_color">{{detail.typeDesc}}</view>
							</view>
							<view class="display_flex" v-if="detail.typeDesc =='物流' || detail.typeDesc =='快递'">
								<view class="real_color">{{detail.expressNum}}</view>
							</view>
						</view>
						<view class="display_flex_bet" v-if="detail.typeDesc" style="background: #fff;justify-content: flex-end;padding: 0rpx 30rpx;border-bottom: 1rpx solid#F7F7F7;"
						 @click="gotoexpressDet">
							<view style="margin-right: 10rpx;color: #0a53c3;">查快递 </view>
							<fa-icon type="angle-right" size="20" color="#0a53c3" />
						</view>
						<navigator class="display_flex" hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose" v-if="detail.status == false">
							<view style="width: 140rpx;" class="left_content">入库仓库<text style="color: #f30;">*</text></view>
							<view style="width: calc(100% - 160rpx);display: flex;align-items: center;justify-content: flex-end;">
								<input placeholder="请选择要入库的仓库" disabled="true" :value="stock.stock_name" style="text-align: right;margin-right: 20rpx;" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>
					</view>
				</view>

				<!--入库以及采购明细-->
				<view v-else-if="detail.type == 1">
					<view class="kaidanmx" v-if="detail.extra_type == 1">
						<view style="padding: 10rpx 30rpx;">采购明细</view>
						<view v-if="detail.producer" class="display_flex" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">供货商姓名</view>
							<view>{{detail.producer.producer_name}}</view>
						</view>
						<view class="display_flex" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">实际付款</view>
							<view class="real_color">{{detail.real_money == null ?'未填写':detail.real_money }}</view>
						</view>
						<view class="display_flex" v-if="detail.debt > 0">
							<view class="left_content">欠款</view>
							<view class="real_color">{{detail.debt}}</view>
						</view>
						<navigator class="display_flex" hover-class="none" url="/pages/manage/warehouse/warehouse?type=choose" v-if="detail.status == false">
							<view style="width: 140rpx;" class="left_content">入库仓库<text style="color: #f30;">*</text></view>
							<view style="width: calc(100% - 160rpx);display: flex;align-items: center;justify-content: flex-end;">
								<input placeholder="请选择要入库的仓库" disabled="true" :value="stock.stock_name" style="text-align: right;margin-right: 20rpx;" />
								<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
							</view>
						</navigator>
					</view>
					<view class="kaidanmx" v-else-if="detail.extra_type == 2">
						<view style="padding: 10rpx 30rpx;">入库明细</view>
						<view class="display_flex" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">仓库</view>
							<view>{{detail.stock.stock_name}}</view>
						</view>
						<view class="display_flex">
							<view class="left_content">入库时间</view>
							<view>{{detail.createdTime.iso}}</view>
						</view>
					</view>
				</view>

				<view v-else-if="detail.type == 3">
					<view class="kaidanmx">
						<view style="padding: 10rpx 30rpx;">盘点明细</view>
						<view class="display_flex" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">审核情况</view>
							<view v-if="detail.status" style="color: #2ca879;">已审核</view>
							<view v-else style="color: #f30;">未审核<text style="font-size: 20rpx;">（请点击右上角操作进行审核）</text></view>
						</view>
						<view class="display_flex" v-if="detail.status">
							<view class="left_content">监盘人</view>
							<view v-if="detail.checker" style="color: #FF3300;">{{detail.checker.nickName}}</view>
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
						<view v-if="detail.type != -2 && detail.stock&&detail.stock.stock_name">选择的仓库：{{detail.stock.stock_name}}</view>
						<view v-if="detail.beizhu">备注：{{detail.beizhu}}</view>
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

			<view class="operater_status" v-if="detail.type==1&&detail.extra_type == 1&&detail.status== false">
				<text style="font-size: 30rpx;font-weight: bold;">该笔采购单未入库</text>
				<text style="font-size: 20rpx;">（请点击右上角操作进行入库）</text>
			</view>
			<view class="operater_status" v-else-if="detail.type==1&&detail.extra_type == 1&&detail.status" style="background: #2ca879;">
				<text style="font-size: 30rpx;font-weight: bold;">该笔采购单已入库</text>
			</view>

			<view class="operater_status" v-if="detail.type==-1&&detail.extra_type == 1&&detail.status== false">
				<text style="font-size: 30rpx;font-weight: bold;">该笔销售单未出库</text>
				<text style="font-size: 20rpx;">（请点击右上角操作进行审核）</text>
			</view>
			<view class="operater_status" v-else-if="detail.type==-1&&detail.extra_type == 1&&detail.status" style="background: #2ca879;">
				<text style="font-size: 30rpx;font-weight: bold;">该笔销售单已出库</text>
			</view>
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
	let uid = uni.getStorageSync("uid");
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
				stock: '', //仓库
			}
		},
		onLoad(options) {
			// #ifdef H5
			this.$wechat.share_pyq();
			// #endif

			console.log(options)
			that = this;
			id = options.id;
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
				title: '高明燃气库存管理-操作单详情',
				path: '/pages/report/EnteringHistory/detail/detail?id=' + id
			}
		},

		methods: {

			gotoexpressDet() {
				uni.navigateTo({
					url: "../expressDet/expressDet?number=" + that.detail.expressNum
				})
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
				let options = ['审核','撤销'];
				uni.showActionSheet({
					itemList: options,
					success: function(res) {
						if (res.tapIndex == 0) {
							 that.confrimCount()
						}else if(res.tapIndex == 1){
							that.revoke()
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
				
				/*if (that.detail.type == -1 || that.detail.type == 1) {
					if (that.othercurrent.indexOf("3") != -1 || that.identity == 1 && that.detail.extra_type == 1) {

						options = (that.detail.type == -1) ? ['销售出库', '撤销', '打印'] : ['采购入库', '撤销', '打印']

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
													title: "请选择仓库"
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
													title: "请选择仓库"
												});
												return;
											} else {
												that.confrimOrder()
											}
										}
									}
									uni.setStorageSync("is_option", true)
								} else if (res.tapIndex == 1) {
									that.revoke()
									uni.setStorageSync("is_option", true)
								} else if (res.tapIndex == 2) {
									print.print_operations(that.detail, that.products)
								}
							},
							fail: function(res) {
								console.log(res.errMsg);
							}
						});

					} else {
						options = ['撤销', '打印']
						uni.showActionSheet({
							itemList: options,
							success: function(res) {
								if (res.tapIndex == 0) {
									that.revoke()
									uni.setStorageSync("is_option", true)
								} else if (res.tapIndex == 1) {
									print.print_operations(that.detail, that.products)
								}
							},
							fail: function(res) {
								console.log(res.errMsg);
							}
						});
					}
				}*/
			},
			
			//审核盘点单
			confrimCount(){
				
				if(that.detail.status){
					uni.showToast({
						icon:'none',
						title: '已经审核过了'
					})
					
					return
				}
				
				const pointer = Bmob.Pointer('_User');
				let checkerId = pointer.set(uni.getStorageSync("user").objectId);
				
				const query = Bmob.Query('order_opreations');
				query.set('id', that.detail.objectId) //需要修改的objectId
				query.set('status', true)
				query.set('checker', checkerId)
				query.save().then(res => {
					let products = that.detail.opreatioGoods
					for(let i=0;i<products.length;i++){
						let num = Number(products[i].num);
						const query = Bmob.Query("NGoods");
						query.get(products[i].objectId).then(res => {
							res.set('reserve', num)
							res.save()
							
							const query1 = Bmob.Query("NGoods");
							query1.equalTo("header", "==", products[i].header.objectId);
							query1.equalTo("order", "==", 1);
							query1.statTo("sum", "reserve");
							query1.find().then(res => {
								//console.log("dasds", res)
								let now_reserve = res[0]._sumReserve
								const query = Bmob.Query('NGoods');
								query.get(products[i].header.objectId).then(res => {
									res.set('reserve', now_reserve)
									res.set('stocktype', (now_reserve > products[i].warning_num) ? 1 : 0)
									res.save()
							
									if (i == (products.length - 1)) {
										common.log(uni.getStorageSync("user").nickName + "盘点了'" + products[0].goodsName +"'等" + products.length + "商品", 3, that.detail.objectId);
										console.log(that.bills)
										const query = Bmob.Query('NBills');
										
										query.containedIn("objectId", that.bills);
										query.find().then(todos => {
											todos.set('status', true);
											todos.saveAll().then(res => {
												uni.hideLoading();
										
												that.getdetail(that.detail.objectId);
												setTimeout(function() {
													uni.showToast({
														icon:'none',
														title: '盘点单审核成功'
													})
												}, 1000);
												//console.log(res, 'ok')
											}).catch(err => {
												console.log(err)
											});
										})
									}
								})
							});
						})
					}
				})
				
			},

			getdetail: function(id) {
				const query = Bmob.Query('order_opreations');
				query.include("opreater", "custom", "producer", "stock","checker");
				query.get(id).then(res => {
					console.log(res);
					that.detail = res;
					that.products = res.detail;
					that.bills = res.bills;
					that.loading = false;
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
							
							if(that.detail.status == false){
								uni.showLoading({
									title: '撤销中...'
								})
								const query = Bmob.Query('order_opreations');
								query.destroy(that.detail.objectId).then(res => {
									const query = Bmob.Query('NBills');
									query.containedIn("objectId", that.bills);
									query.find().then(todos => {
								
										todos.destroyAll().then(res => {
											// 成功批量修改
											if (that.detail.type !=3) {
												for (var i = 0; i < that.products.length; i++) {
													that.delete_bill(i);
												}
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
							}else{
								uni.showToast({
									icon:'none',
									title: '审核成功后，暂不支持撤销'
								})
							}
							
						}
					}
				})
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

				const query = Bmob.Query('NGoods');
				query.get(product.goodsId.objectId).then(res => {
					console.log("当前主产品", res)
					let headerGood = res;
					res.set('reserve', res.reserve + product.num);
					res.save().then(res => {
						const query = Bmob.Query("NGoods");
						query.equalTo("userId", "==", uid);
						query.equalTo("header", "==", product.goodsId.objectId);
						query.equalTo("stocks", "==", that.stock.objectId);
						query.find().then(res => {
							console.log("仓库里的产品", res)
							if (res.length == 0) {
								product.objectId = product.goodsId.objectId
								product.costPrice = headerGood.costPrice
								product.retailPrice = headerGood.retailPrice
								common.upload_good_withNoCan(product, that.stock, Number(product.num)).then(res => {
									console.log(res)
									if (count == (that.products.length - 1)) {
										const pointer = Bmob.Pointer('stocks');
										let stockId = pointer.set(that.stock.objectId);

										const query = Bmob.Query('NBills');
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
							} else {
								const query1 = Bmob.Query('NGoods');
								query1.get(res[0].objectId).then(res => {
									//console.log(res)
									/*if (product.goodsId.selected_model) {
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
									}*/

									res.set('reserve', res.reserve + product.num);
									res.save().then(res => {
										const pointer = Bmob.Pointer('stocks');
										let stockId = pointer.set(that.stock.objectId);

										if (count == (that.products.length - 1)) {
											const query = Bmob.Query('NBills');
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
							}

						})
					})
				})
			},

			//销售单确认审核之后减少库存
			ReduceGoodReserve(product, count) {
				const query = Bmob.Query('NGoods');
				query.get(product.goodsId.objectId).then(res => {
					console.log("当前主产品", res)
					res.set('reserve', res.reserve - product.num);
					res.save().then(res => {
						const query = Bmob.Query("NGoods");
						query.equalTo("userId", "==", uid);
						query.equalTo("header", "==", product.goodsId.objectId);
						query.equalTo("stocks", "==", that.stock.objectId);
						query.find().then(res => {
							console.log("仓库里的产品", res)
							if (res.length == 0) {
								product.objectId = product.goodsId.objectId
								product.costPrice = headerGood.costPrice
								product.retailPrice = headerGood.retailPrice
								common.upload_good_withNoCan(product, that.stock, 0 - Number(product.num)).then(res => {
									console.log(res)
									if (count == (that.products.length - 1)) {
										const pointer = Bmob.Pointer('stocks');
										let stockId = pointer.set(that.stock.objectId);

										const query = Bmob.Query('NBills');
										query.containedIn("objectId", that.bills);
										query.find().then(todos => {
											todos.set('status', true);
											todos.set('stock', stockId);
											todos.saveAll().then(res => {
												uni.hideLoading();

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
							} else {
								const query1 = Bmob.Query('NGoods');
								query1.get(res[0].objectId).then(res => {
									//console.log(res)
									/*if (product.goodsId.selected_model) {
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
									}*/

									res.set('reserve', res.reserve - product.num);
									res.save().then(res => {
										if (count == (that.products.length - 1)) {
											const pointer = Bmob.Pointer('stocks');
											let stockId = pointer.set(that.stock.objectId);

											const query = Bmob.Query('NBills');
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
							}

						})
					})
				})
			},

			delete_bill: function(i) {
				let product = that.products[i];
				let bill = that.bills[i]

				const query1 = Bmob.Query('NGoods');
				query1.set('id', product.goodsId.objectId);
				if (product.type == 1) {
					query1.set('reserve', product.goodsId.reserve - product.num);
				} else if (product.type == -1) {
					query1.set('reserve', product.goodsId.reserve + product.num);
				}
				query1.save().then(res => {
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
			}

		}
	}
</script>

<style>
	.page {
		color: #4d4d4d;
		height: 100vh;
		overflow-y: scroll;
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

	.display_flex {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		padding: 15rpx 30rpx;
	}

	.left_content {
		width: 150rpx;
	}
</style>
