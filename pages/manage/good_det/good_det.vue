<template>
	<view class="page">

		<view class="frist">
			<image v-if="product.goodsIcon" :src="product.goodsIcon" style="width: 100%;height: 100%;" mode="aspectFit"></image>
			<image v-else src="/static/goods-default.png" style="height: 100%;" mode="aspectFit"></image>
		</view>

		<view class="second">
			<view class="second_one">
				<view style="color: #3d3d3d;font-weight: bold;font-size: 34rpx;">{{product.goodsName}}</view>
				<view>成本价: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.costPrice?product.costPrice:"未填写"}}</text></view>
				<view>零售价: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.retailPrice ?product.retailPrice:"未填写"}}</text></view>
			</view>

			<view class="second_one">
				<view>品牌: <text class="second_right_text">{{product.producer?product.producer:"未填写"}}</text></view>
				<view>型号: <text class="second_right_text">{{product.packageContent?product.packageContent:"未填写"}}*{{product.packingUnit?product.packingUnit:"未填写"}}</text></view>
				<view>简介: <text class="second_right_text">{{product.product_info?product.product_info:"未填写"}}</text></view>
				<view>存放位置: <text style="margin-left: 20rpx;color: #3D3D3D;">{{product.position?product.position:"未填写"}}</text></view>
			</view>

			<view class="second_one display_flex_bet">
				<view>总库存: <text class="second_right_text">{{product.all_reserve}}</text></view>
				<view class="display_flex">
					<text style="margin-right: 10rpx;">分库存</text>
					<switch @change="change_state" :checked="get_reserve_checked" />
				</view>
			</view>

			<view v-if="get_reserve_checked" class="second_one" v-for="(item,index) in product.stocks" :key="index">
				<view>存放仓库: <text style="margin-left: 20rpx;color: #3D3D3D;">{{item.stock_name?item.stock_name:"未填写"}}</text></view>

				<view>当前库存: <text style="color: #FD2E32;margin-left: 20rpx;">{{item.reserve}}</text></view>
				<view>预警数量: <text style="color: #FD2E32;margin-left: 20rpx;">{{item.warning_num ?item.warning_num:0}}</text></view>
				<view>货损数量: <text style="color: #FD2E32;margin-left: 20rpx;">{{item.bad_num ?item.bad_num:0}}</text></view>
				<view>条码: <text class="second_right_text">{{item.productCode}}</text></view>

				<view class="display_flex">
					<view class="opion_item" @click="show_qrcode(item)">生成二维码</view>
					<navigator hover-class="none" :url="'custom_detail/custom_detail?id='+item.good_id" class="opion_item">客户统计</navigator>
					<navigator hover-class="none" :url="'../operations/operations?objectId='+item.good_id" class="opion_item">此产品的操作记录</navigator>
				</view>
				<view class="display_flex">
					<view class="opion_item" @click='print_info(item)'>打印</view>
					<view class="opion_item" @click='modify(item)'>编辑</view>
					<view class="opion_item" @click='delete_good(item.good_id,item.accessory,index)'>删除</view>
				</view>
			</view>

		</view>

		<view class="qrimg" v-if="is_show">
			<view style="text-align: right;margin-right: 20rpx;" @click="is_show = false">
				<fa-icon type="times-circle" size="20" color="#fff"></fa-icon>
			</view>
			<view style="margin-top: 20%;" @tap="saveQrcode">
				<view style="padding: 20rpx;background: #fff;">
					<tki-qrcode cid="qrcode" ref="qrcode" :val="select_qrcode" :size="200" :loadMake="true" :usingComponents="true"
					 unit="rpx" @result="qrR" />
				</view>

				<view style="color: #fff;margin-top: 30rpx;font-size: 32rpx;">产品:{{product.goodsName}}</view>
				<view style="color: #fff;margin-top: 20rpx;font-size: 24rpx;">(点击二维码可下载)</view>
			</view>
		</view>

	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk"
	import print from "@/utils/print.js"
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue'
	import tkiBarcode from "@/components/tki-barcode/tki-barcode.vue"
	import uniFab from '@/components/uni-fab/uni-fab.vue'

	let that;
	let uid;
	export default {
		components: {
			faIcon,
			tkiQrcode,
			tkiBarcode,
			uniFab
		},
		data() {
			return {
				select_qrcode: '',
				get_reserve_checked: true, //分库存显示控制
				product: {},
				is_show: false, //二维码显示
				bar_code_show: false, //条形码显示
			}
		},
		onLoad(options) {
			that = this;
			let stocks = [];
			uid = uni.getStorageSync("uid");

			console.log(options)

			if (options.id) {
				const query = Bmob.Query('Goods');
				if (options.type == "false") {
					query.equalTo("objectId", "==", options.id);
				} else {
					query.equalTo("productCode", "==", options.id)
				}
				query.equalTo("userId", "==", uid);
				query.find().then(res => {
					console.log(res)
					let product = res[0];
					let all_reserve = 0;

					query.equalTo("userId", "==", uid);
					query.equalTo("status", "!=", -1);
					query.include("stocks");
					query.equalTo("goodsName", "==", product.goodsName);
					query.find().then(res => {

						for (let item of res) {
							cache.log(item)
							let stocks_o = {}
							stocks_o.stock_name = item.stocks.stock_name
							stocks_o.reserve = item.reserve
							stocks_o.warning_num = item.warning_num
							stocks_o.bad_num = item.bad_num
							stocks_o.good_id = item.objectId
							stocks_o.accessory = (item.accessory)?item.accessory:''
							stocks_o.productCode = (item.productCode) ? item.productCode : item.objectId
							item.stocks = stocks_o
							all_reserve += item.reserve
							stocks.push(item.stocks)
						}

						this.product = product;
						this.product.all_reserve = all_reserve;
						this.product.stocks = stocks
						console.log(this.product)
					})
				})
			} else {
				let product = uni.getStorageSync("now_product");
				let all_reserve = 0;
				console.log(product)

				const query = Bmob.Query('Goods');
				query.equalTo("userId", "==", uid);
				query.equalTo("status", "!=", -1);
				query.include("stocks");
				query.equalTo("goodsName", "==", product.goodsName);
				query.find().then(res => {

					for (let item of res) {
						console.log(item)
						let stocks_o = {}
						stocks_o.stock_name = item.stocks.stock_name
						stocks_o.reserve = item.reserve
						stocks_o.warning_num = item.warning_num
						stocks_o.bad_num = item.bad_num
						stocks_o.good_id = item.objectId
						stocks_o.accessory = (item.accessory)?item.accessory:''
						stocks_o.productCode = (item.productCode) ? item.productCode : item.objectId
						item.stocks = stocks_o
						all_reserve += item.reserve
						stocks.push(item.stocks)
					}

					this.product = uni.getStorageSync("now_product");
					this.product.all_reserve = all_reserve;
					this.product.stocks = stocks
					console.log(this.product)
				})
			}


		},

		methods: {
			
			//生成二维码
			show_qrcode(item){
				that.is_show = true,
				that.select_qrcode = item.productCode
			},

			//分库存的switch点击
			change_state(e) {
				that.get_reserve_checked = e.detail.value
			},

			//商品信息点击
			print_info(item) {
				print.print_goodDet(item)
			},

			//产品信息修改点击
			modify(item) {
				let now_product = uni.getStorageSync("now_product")
				now_product.objectId = item.good_id
				now_product.stocks = item
				uni.setStorageSync("now_product", now_product)
				uni.navigateTo({
					url: '../good_add/good_add'
				});
			},

			//fab列目点击
			trigger(e) {
				this.content[e.index].active = !e.item.active;
				if (e.index == 0) {
					uni.setStorageSync("now_product", this.product)
					uni.navigateTo({
						url: '../good_add/good_add'
					});
				} else {
					that.delete()
				}
			},

			//点击显示二维码的操作
			showcode_option() {
				uni.showActionSheet({
					itemList: ['二维码', '条形码'],
					success: function(res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						if (res.tapIndex == 0) {
							that.is_show = true
						} else {
							that.bar_code_show = true
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
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

			//删除商品
			delete_good(objectId, accessory, index) {
				uni.showModal({
					title: '提示',
					content: '是否删除该商品',
					success: function(res) {
						if (res.confirm) {

							const query = Bmob.Query('Goods');
							query.set('id', objectId) //需要修改的objectId
							query.set('status', -1)
							query.save().then(res => {

								if (accessory) {
									uni.navigateTo({
										url: '../goods/goods'
									});

									setTimeout(function() {
										uni.showToast({
											title: "删除成功"
										})
									}, 1000)
								} else {
									if (that.product.stocks.length > 1) {
										let next_good = that.product.stocks[index + 1].good_id
										const query = Bmob.Query('Goods');
										query.get(next_good).then(res => {
											console.log(res)
											res.set('accessory', false)
											res.save()
											uni.navigateTo({
												url: '../goods/goods'
											});

											setTimeout(function() {
												uni.showToast({
													title: "删除成功"
												})
											}, 1000)
										}).catch(err => {
											console.log(err)
										})
									} else {
										uni.navigateTo({
											url: '../goods/goods'
										});

										setTimeout(function() {
											uni.showToast({
												title: "删除成功"
											})
										}, 1000)
									}

								}


							}).catch(err => {
								console.log(err)
							})

						}
					}
				});

			},

		},
	}
</script>

<style>
	.opion_item {
		color: #118FFF;
		font-weight: bold;
		padding: 0 20rpx 0 0;
	}

	.page {
		height: 100vh;
		overflow: scroll;
		font-size: 28rpx;
	}

	.frist {
		text-align: center;
		width: 100%;
		height: 300rpx;
		padding: 30rpx 0;
		background: #fff;
	}

	.second {
		padding: 0 30rpx;
		border-top: 1rpx solid#DDDDDD;
		background: #fff;
	}

	.second_one {
		padding: 20rpx 0;
		border-bottom: 1rpx solid#DDDDDD;
		line-height: 60rpx;
		font-size: 26rpx;
		color: #999999;
	}

	.second_right_text {
		color: #3d3d3d;
		margin-left: 20rpx;
	}

	.thrid {
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 30rpx;
		font-size: 28rpx;
		border-bottom: 1rpx solid#DDDDDD;
		background: #fff;
		border-bottom: 1px solid#DDDDDD;
	}

	.four {
		display: flex;
		justify-content: space-around;
		margin: 30rpx 0 60rpx;
	}

	.qrimg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #426ab3;
		text-align: center;
	}
</style>
