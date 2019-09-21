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
				<view>条码: <text class="second_right_text">{{product.productCode?product.productCode:product.objectId}}</text></view>
				<view>型号: <text class="second_right_text">{{product.packageContent?product.packageContent:"未填写"}}*{{product.packingUnit?product.packingUnit:"未填写"}}</text></view>
				<view>简介: <text class="second_right_text">{{product.product_info?product.product_info:"未填写"}}</text></view>
			</view>

			<view class="second_one">
				<view>存放仓库: <text style="margin-left: 20rpx;color: #3D3D3D;">{{product.stocks.stock_name?product.stocks.stock_name:"未填写"}}</text></view>
				<view>存放位置: <text style="margin-left: 20rpx;color: #3D3D3D;">{{product.position?product.position:"未填写"}}</text></view>
				<view>当前库存: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.reserve}}</text></view>
				<view>预警数量: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.warning_num ?product.warning_num:0}}</text></view>
				<view>货损数量: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.bad_num ?product.bad_num:0}}</text></view>
			</view>

		</view>

		<view class="thrid" @click="showcode_option">
			<view>生成条码</view>
			<fa-icon type="angle-right" size="20" color="#ccc"></fa-icon>
		</view>
		
		<navigator class="thrid" hover-class="none" :url="'custom_detail/custom_detail?id='+product.objectId" style="margin-bottom: 20rpx;">
			<view>客户统计</view>
			<fa-icon type="angle-right" size="20" color="#ccc"></fa-icon>
		</navigator>

		<navigator class="thrid" hover-class="none" url="../operations/operations" style="margin-bottom: 20rpx;">
			<view>此产品的操作记录</view>
			<fa-icon type="angle-right" size="20" color="#ccc"></fa-icon>
		</navigator>

		<!--<view class="four">
				<fa-icon type="edit" size="30" color="#e0861a"></fa-icon>
				<fa-icon type="trash-o" size="30" color="#fff"></fa-icon>
				<fa-icon type="share-alt-square" size="30" color="#1d953f"></fa-icon>
			</view>-->

		<view class="qrimg" v-if="is_show">
			<view style="text-align: right;margin-right: 20rpx;" @click="is_show = false">
				<fa-icon type="times-circle" size="20" color="#fff"></fa-icon>
			</view>
			<view style="margin-top: 20%;" @tap="saveQrcode">
				<view style="padding: 20rpx;background: #fff;">
					<tki-qrcode cid="qrcode" ref="qrcode" :val="(product.productCode)?product.productCode:product.objectId+'-'+false"
					 size="200" loadMake="true" usingComponents="true" unit="rpx" @result="qrR" />
				</view>

				<view style="color: #fff;margin-top: 30rpx;font-size: 32rpx;">产品:{{product.goodsName}}</view>
				<view style="color: #fff;margin-top: 20rpx;font-size: 24rpx;">(点击二维码可下载)</view>
			</view>
		</view>

		<view class="qrimg" v-if="bar_code_show">
			<view style="text-align: right;margin-right: 20rpx;" @click="bar_code_show = false">
				<fa-icon type="times-circle" size="20" color="#fff"></fa-icon>
			</view>
			<view style="margin-top: 20%;text-align: center;" @tap="saveBccode">
				<view style="padding: 20rpx;background: #fff;">
					<tki-barcode ref="barcode" :val="(product.productCode)?product.productCode:product.objectId+'-'+false"
					 loadMake="true" :opations="opations" onval="true" format="code128" unit="upx" @result="bcR" />
				</view>
				<view style="color: #fff;margin-top: 30rpx;font-size: 32rpx;">产品:{{product.goodsName}}</view>
				<view style="color: #fff;margin-top: 20rpx;font-size: 24rpx;">(点击条形码可下载)</view>
			</view>
		</view>

		<uni-fab ref="fab" :pattern="pattern" :content="content" horizontal="right" vertical="bottom" direction="horizontal"
		 @trigger="trigger" />
	</view>
</template>

<script>
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
				pattern: {
					color: '#7A7E83',
					backgroundColor: '#fff',
					selectedColor: '#426ab3',
					buttonColor: '#426ab3'
				},
				content: [{
					iconPath: '/static/edit.png',
					selectedIconPath: '/static/edit.png',
					text: '编辑',
					active: false
				},{
					iconPath: '/static/delete.png',
					selectedIconPath: '/static/delete.png',
					text: '删除',
					active: false
				}],
				opations: {
					width: 2,
					height: 80,
					displayValue: true,
					marginTop: 50,
					marginLeft: 98
				},
				product: "",
				is_show: false, //二维码显示
				bar_code_show: false, //条形码显示
			}
		},
		onLoad(options) {
			that = this;
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
					this.product = res[0];
				})
			} else {
				this.product = uni.getStorageSync("now_product");
			}


		},
		
		methods: {

			//fab列目点击
			trigger(e) {
				this.content[e.index].active = !e.item.active;
				if (e.index == 0) {
					uni.setStorageSync("now_product",this.product)
					uni.navigateTo({
						url: '../good_add/good_add'
					});
				}else{
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
			delete() {
				uni.showModal({
					title: '提示',
					content: '是否删除该商品',
					success: function(res) {
						if (res.confirm) {

							const query = Bmob.Query('Goods');
							query.set('id', that.product.objectId) //需要修改的objectId
							query.set('status', -1)
							query.save().then(res => {
								
								uni.navigateTo({
									url: '../goods/goods'
								});
								
								setTimeout(function(){
									uni.showToast({
										title: "删除成功"
									})
								},1000)
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
