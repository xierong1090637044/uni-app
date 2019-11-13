<template>
	<view>
		<loading v-if="loading"></loading>

		<view class='page' v-else>
			<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="操作" @click-right="show_options"></uni-nav-bar>
			<scroll-view scroll-y="true" :style="{height:(detail.extra_type == 1&&detail.status== false?'calc(100vh - 170rpx)':'calc(100vh - 80rpx)')}">
				<view style='line-height:70rpx;padding: 0 20rpx;'>操作产品</view>

				<view>
					<view>
						<view v-for="(item,index) in products" :key="index" class='pro_listitem'>
							<view class='pro_list_item' style='color:#000'>
								<view>产品：{{item.goodsName}}
									<text>（成本价：￥{{item.goodsId.costPrice}}）</text>
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
								<view>
									<text v-if="user.rights&&user.rights.othercurrent[0] != '0'">实际进货价：￥0（X{{item.num}}）</text>
									<text v-else>实际进货价：￥{{item.modify_retailPrice}}（X{{item.num}}）</text>
								</view>
							</view>
						</view>
					</view>
					<view class='pro_allmoney'>生产总数：{{detail.real_num }}</view>
				</view>

				<view>
					<view class="kaidanmx">
						<view style="padding: 10rpx 30rpx;">记录明细</view>
						<view v-if="detail.custom" class="display_flex" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">客户姓名</view>
							<view>{{detail.custom.custom_name}}</view>
						</view>
						<view v-else class="display_flex" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">未记录客户</view>
						</view>
						<view class="display_flex" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">开工时间</view>
							<view>{{detail.startDay}}</view>
						</view>
						<view class="display_flex" style="border-bottom: 1rpx solid#F7F7F7;">
							<view class="left_content">计划完成</view>
							<view>{{detail.endDay}}</view>
						</view>
						<navigator class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;" hover-class="none" :url="'matterDet/matterDet?id='+detail.objectId">
							<view style="display: flex;">
								<view class="left_content">物料信息</view>
								<view v-if="detail.mattersId && detail.mattersId.length > 0">{{detail.mattersId.length}}</view>
								<view v-else style="color: #FF3300;">未添加</view>
							</view>
							<fa-icon type="angle-right" size="20" color="#bba14f" />
						</navigator>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;" @click="confrimMatter">
							<view style="display: flex;">
								<view class="left_content">是否领料</view>
								<view v-if="detail.matterStatus" style="color: #2ca879;">已领料</view>
								<view v-else style="color: #FF3300;">未领料</view>
							</view>
							<fa-icon type="angle-right" size="20" color="#bba14f" />
						</view>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;" @click="confrimComplete">
							<view style="display: flex;">
								<view class="left_content">生产状态</view>
								<view v-if="detail.status" style="color: #2ca879;">已完成</view>
								<view v-else style="color: #FF3300;">未完成</view>
							</view>
							<fa-icon type="angle-right" size="20" color="#bba14f" />
						</view>
						<view class="display_flex_bet" style="border-bottom: 1rpx solid#F7F7F7;" v-if="detail.status">
							<view style="display: flex;">
								<view class="left_content">已入库数</view>
								<view style="color: #FF3300;">{{enterNum}}</view>
							</view>
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

					<view style="text-align: center;padding: 20rpx 0;">
						<tki-qrcode cid="qrcode" ref="qrcode" :val="detail.objectId" :size="140" :loadMake="true" :usingComponents="true"
						 unit="rpx" @result="qrR" />
						<view style="color: #333333;font-weight: bold;">生产单二维码</view>
					</view>

					<view style='padding:20rpx 0 0'>
						<view v-if="detail.beizhu">备注：{{detail.beizhu}}</view>
						<view v-else>备注：暂无</view>
						<view>操作时间：{{detail.createdAt}}</view>

						<view v-if="detail.Images && detail.Images.length > 0">
							<view class="notice_text">生产图</view>

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
	import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue'

	import loading from "@/components/Loading/index.vue"
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'

	let that;
	let id;
	export default {
		components: {
			tkiQrcode,
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
				matters: [], //确认的物料
				all_money: 0,
				really_total_money: 0,
				real_money: 0,
				enterNum:0,//已经入库数
			}
		},
		onLoad(options) {
			console.log(options)
			that = this;
			id = options.id;
			if (that.user.rights && that.user.rights.othercurrent) {
				that.othercurrent = that.user.rights.othercurrent
			}

		},

		onShow() {
			that.getdetail(id);
		},

		methods: {

			//点击显示操作菜单
			show_options() {
				uni.showActionSheet({
					itemList: ['领料', '生产完成', '入库'],
					success: function(res) {
						let tapIndex = res.tapIndex
						if (tapIndex == 0) {
							that.confrimMatter()
						} else if (tapIndex == 1) {
							that.confrimComplete()
						} else if (tapIndex == 2) {
							that.confrimEnter()
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});

			},

			//确认入库
			confrimEnter() {
				if (that.detail.status == false) {
					uni.showToast({
						icon: "none",
						title: "未生产完成！"
					})
				} else if (that.detail.matterStatus == false) {
					uni.showToast({
						icon: "none",
						title: "未领料！"
					})
				}  else if (that.enterNum == that.detail.real_num) {
					uni.showToast({
						icon: "none",
						title: "已经全部入库了！"
					})
				} else {
					let GoodIds = []
					for (let item of that.detail.detail) {
						GoodIds.push(item.goodsId.objectId)
					}
					const query = Bmob.Query("Goods");
					query.containedIn("objectId", GoodIds);
					query.find().then(res => {

						for (let item of res) {
							for (let good of that.detail.detail) {
								if (good.goodsId.objectId == item.objectId) {
									if(good.enterNum){
										item.num = good.num - good.enterNum;
									}else{
										item.num = good.num
									}
									
									item.total_money = good.num * item.costPrice;
									item.really_total_money = good.num * item.costPrice;
									item.modify_retailPrice = item.costPrice;
								}
							}
						}
						
						console.log(res)
						uni.setStorageSync("products",res);
						uni.setStorageSync("detailBills",that.detail.detail);
						uni.navigateTo({
							url:'/pages/report/EnteringHistory/productDet/productEnter/productEnter?id='+id
						})
					});
				}

			},

			//确认生产完成
			confrimComplete() {
				uni.showModal({
					title: '提示',
					content: '是否确认生产完成',
					success: function(res) {
						if (res.confirm) {
							if (that.detail.status) {
								uni.showToast({
									title: "已经生产完成！"
								})
							} else {
								uni.showLoading({
									title: "生产中..."
								})
								const query = Bmob.Query('order_opreations');
								query.set('id', id) //需要修改的objectId
								query.set('status', true)
								query.save().then(res => {
									const query = Bmob.Query('Bills');
									query.containedIn("objectId", that.detail.bills);
									query.find().then(todos => {
										todos.set('status', true);
										todos.saveAll().then(res => {

											uni.showToast({
												title: "生产完成"
											})

											that.getdetail(id);
										})
									})
								})
							}
						}
					}
				})

			},

			//确认领料
			confrimMatter() {
				if (that.detail.mattersId && that.detail.mattersId.length > 0) {
					uni.showModal({
						title: '是否确认领料',
						content: '领料后不可修改',
						success: function(res) {
							if (res.confirm) {
								if (that.detail.matterStatus) {
									uni.showToast({
										title: "已经领过物料！"
									})
								} else {
									let billsObj = new Array();
									let detailObj = [];
									let uid = uni.getStorageSync('uid');
									let total_num = 0;
									for (let i = 0; i < that.matters.length; i++) {
										let num = Number(that.matters[i].reserve) - that.matters[i].num;
										total_num += that.matters[i].num;
										//单据
										let detailBills = {}
										let tempBills = Bmob.Query('Bills');

										let pointer = Bmob.Pointer('_User')
										let user = pointer.set(uid)
										let pointer1 = Bmob.Pointer('Matters')
										let tempGoods_id = pointer1.set(that.matters[i].objectId);

										let masterId = uni.getStorageSync("masterId");
										let pointer2 = Bmob.Pointer('_User')
										let poiID2 = pointer2.set(masterId);

										tempBills.set('goodsName', that.matters[i].goodsName);
										tempBills.set('retailPrice', (that.matters[i].modify_retailPrice).toString());
										tempBills.set('num', Number(that.matters[i].num));
										tempBills.set('total_money', that.matters[i].total_money);
										tempBills.set('really_total_money', that.matters[i].really_total_money);
										tempBills.set('mattersId', tempGoods_id);
										tempBills.set('userId', user);
										tempBills.set("opreater", poiID2);
										tempBills.set('type', 6);

										let goodsId = {}
										detailBills.goodsName = that.matters[i].goodsName
										detailBills.modify_retailPrice = (that.matters[i].modify_retailPrice).toString()
										detailBills.retailPrice = that.matters[i].retailPrice
										detailBills.total_money = that.matters[i].total_money
										goodsId.costPrice = that.matters[i].costPrice
										goodsId.retailPrice = that.matters[i].retailPrice
										goodsId.objectId = that.matters[i].objectId
										goodsId.reserve = num
										if (that.matters[i].selectd_model) {
											goodsId.selected_model = that.matters[i].selected_model
											goodsId.models = that.matters[i].models
										}
										detailBills.goodsId = goodsId
										detailBills.num = that.matters[i].num
										detailBills.type = 6

										billsObj.push(tempBills)
										detailObj.push(detailBills)

									}

									//插入单据
									Bmob.Query('Bills').saveAll(billsObj).then(function(res) {
										//console.log("批量新增单据成功", res);
										let bills = []
										for (let i = 0; i < res.length; i++) {
											bills.push(res[i].success.objectId)
										}

										let pointer = Bmob.Pointer('_User')
										let poiID = pointer.set(uid);

										let masterId = uni.getStorageSync("masterId");
										let pointer1 = Bmob.Pointer('_User')
										let poiID1 = pointer1.set(masterId);

										let query = Bmob.Query('order_opreations');
										//query.set("relations", relID);
										query.set("detail", detailObj);
										query.set("real_num", total_num);
										query.set("type", 6);
										query.set("bills", bills);
										query.set("opreater", poiID1);
										query.set("master", poiID);
										query.set('goodsName', that.matters[0].goodsName);

										query.set("all_money", that.all_money);
										query.save().then(res => {
											let operationId = res.objectId
											//console.log("添加操作历史记录成功", res);
											uni.hideLoading();
											const query = Bmob.Query('order_opreations');
											query.set('id', id) //需要修改的objectId
											query.set('matterStatus', true)
											query.save().then(res => {
												uni.showToast({
													title: '领料成功',
													icon: 'success',
													duration: 1000,
													complete: function() {
														//common.enterAddGoodNum(that.matters) //添加物料数量
														that.outRedGoodNum(that.matters).then(result => { //添加物料数量
															common.log(uni.getStorageSync("user").nickName + "确认领了'" + that.matters[0].goodsName +
																"'等" +
																that.matters
																.length + "物料", 6, operationId);
															uni.setStorageSync("is_option", true);
															uni.removeStorageSync("_warehouse")
															uni.removeStorageSync("out_warehouse")
															uni.removeStorageSync("category")
															uni.removeStorageSync("warehouse")

															that.getdetail(id);
														})
													}
												})
											}).catch(err => {
												console.log(err)
											})

										})

									})
								}

							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				} else {
					uni.showToast({
						title: "请先添加物料",
						icon: "none"
					})
				}


			},

			//出库时减少产品数量
			outRedGoodNum(products) {
				return new Promise((resolve, reject) => {
					for (let i = 0; i < products.length; i++) {
						let num = 0;
						const query = Bmob.Query('Matters');
						query.get(products[i].objectId).then(res => {
							//console.log(res)

							num = Number(products[i].reserve) - Number(products[i].num);

							res.set('reserve', num)
							res.set('stocktype', (num >= products[i].warning_num) ? 1 : 0)
							res.save()

							if (products[i].warning_num >= num) {
								common.log(products[i].goodsName + "在生产时领了" + products[i].num + "件，已经低于预警数量" + products[i].warning_num, -2,
									products[i].objectId);
							}

							if (i == products.length - 1) {
								resolve(true)
							}
						}).catch(err => {
							console.log(err)
						})
					}
				})
			},

			//预览图片
			priview(url) {
				uni.previewImage({
					current: url,
					urls: that.detail.Images,
				});
			},

			getdetail: function(id) {
				const query = Bmob.Query('order_opreations');
				query.include("opreater", "custom", "producer", "stock");
				query.get(id).then(res => {
					console.log(res);
					if (res.startDay) res.startDay = common.js_date_time(res.startDay)
					if (res.endDay) res.endDay = common.js_date_time(res.endDay)
					that.detail = res;
					that.products = res.detail;
					that.bills = res.bills;
					if (res.mattersId && res.mattersId.length > 0) {
						that.matters = res.mattersId

						for (let i = 0; i < this.matters.length; i++) {
							this.all_money = Number((this.matters[i].total_money + this.all_money).toFixed(2))
							this.really_total_money = Number((this.matters[i].really_total_money + this.really_total_money).toFixed(2))
							this.total_num += Number(this.matters[i].num)
						}
						this.real_money = Number(this.all_money.toFixed(2))
					}
					
					for (let detail of res.detail) {
						if(detail.enterNum){
							that.enterNum +=detail.enterNum
						}
					}

					that.loading = false;
				}).catch(err => {
					console.log(err)
				})
			},
			//二维码路径
			qrR(res) {
				this.src = res
			},

			bcR(res) {
				this.src = res
			},

			saveBccode() {
				this.$refs.barcode._saveCode()
			},

			//点击条形码保存
			saveQrcode() {
				this.$refs.qrcode._saveCode()
			},

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

	.display_flex_bet {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		padding: 15rpx 30rpx;
		justify-content: space-between;
	}

	.left_content {
		width: 150rpx;
	}
</style>
