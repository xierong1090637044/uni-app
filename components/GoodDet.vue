<template>
	<view class="second">
		<view class="second_one">
			<view>品牌: <text class="second_right_text">{{product.producer?product.producer:"未填写"}}</text></view>
			<view>型号: <text class="second_right_text">{{product.packageContent?product.packageContent:"未填写"}}*{{product.packingUnit?product.packingUnit:"未填写"}}</text></view>
			<view>简介: <text class="second_right_text">{{product.product_info?product.product_info:"未填写"}}</text></view>
			<view>存放位置: <text style="margin-left: 20rpx;color: #3D3D3D;">{{product.position?product.position:"未填写"}}</text></view>

			<view v-if="product.goodsClass && product.goodsClass.class_text">
				所属分类
				<text style="margin-left: 20rpx;color: #3D3D3D;">{{product.goodsClass.class_text}}</text>
				<text style="color: #3D3D3D;" v-if="product.second_class && product.second_class.class_text">
					<text style="color: #2ca879;">-></text>{{product.second_class.class_text}}
				</text>
			</view>

			<view class="display_flex_bet">
				<view>预警库存: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.warning_num>=0 ?product.warning_num:"未设置"}}</text></view>
				<view style="margin-left: 40rpx;">最大库存: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.max_num>=0 ?product.max_num:"未设置"}}</text></view>
			</view>

			<navigator class="display_flex_bet" hover-class="none" :url="'/pages/manage/good_det/bad_history/bad_history?id='+product.objectId">
				<view>货损数量: <text style="color: #FD2E32;margin-left: 20rpx;">{{product.bad_num ?product.bad_num:0}}</text></view>
				<fa-icon type="angle-right" size="20" color="#999" />
			</navigator>

			<view v-if="product.nousetime">过期时间: <text style="margin-left: 20rpx;color: #3D3D3D;">{{product.nousetime}}</text></view>
			<view>创建时间: <text style="margin-left: 20rpx;color: #3D3D3D;">{{product.createdAt}}</text></view>

			<view v-if="product.productCode">条码: <text class="second_right_text">{{product.productCode}}</text></view>

		</view>

		<view class="second_one display_flex_bet">
			<view>总库存: <text class="second_right_text">{{product.all_reserve}}</text></view>
			<view class="display_flex">
				<text style="margin-right: 10rpx;">分库存</text>
				<switch @change="change_state" :checked="get_reserve_checked" />
			</view>
		</view>

		<view v-if="get_reserve_checked" class="second_one" v-for="(item,index) in product.stocks" :key="index">
			<view class="display_flex_bet">
				<view>存放店仓: <text style="margin-left: 20rpx;color: #3D3D3D;">{{item.stock_name?item.stock_name:"未填写"}}</text></view>
				<view class="opion_item" @click='delete_singlegood(item.good_id)' v-if="identity == 1">删除</view>
			</view>

			<view>当前库存: <text style="color: #FD2E32;margin-left: 20rpx;">{{item.reserve}}</text></view>
			<view v-if="item.now_model" style="color: #3D3D3D;">
				<view v-for="(model,index) in item.now_model" :key="index" class="display_flex_bet">
					<view style="font-size: 24rpx;">{{model.custom1.value}}{{model.custom2.value}}{{model.custom3.value}}{{model.custom4.value}}</view>
					<view style="color: #FD2E32;font-size: 24rpx;">库存:{{model.reserve}}</view>
				</view>
			</view>
		</view>

		<view class="second_one">
			<view style="margin: 0 0 20rpx;">产品二维码</view>
			<view style="padding: 20rpx;background: #fff;text-align: center;">
				<tki-qrcode cid="qrcode" ref="qrcode" :val="product.productCode" :size="100" :loadMake="true" :usingComponents="true"
				 unit="rpx" @result="qrR" v-if="product.productCode" />
			</view>
		</view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from "@/utils/common.js"
	
	import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue'
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	
	let that;
	export default {
		props: {
			product: {
				type: Object,
				default: {}
			} // 标题
		},
		components: {
			uniPopup,
			tkiQrcode
		},
		data() {
			return {
				identity:uni.getStorageSync("identity"),
				get_reserve_checked: true, //分库存显示控制
			};
		},
		
		mounted() {
			that = this;
		},
		methods:{
			
			//删除商品
			delete_singlegood(objectId) {
				uni.showModal({
					title: '提示',
					content: '是否删除该商品',
					success: function(res) {
						if (res.confirm) {
							const query = Bmob.Query('Goods');
							query.destroy(objectId).then(res => {
								console.log(res)
								const query1 = Bmob.Query("Goods");
								query1.equalTo("header", "==", that.product.objectId);
								query1.equalTo("order", "==", 1);
								query1.statTo("sum", "reserve");
								query1.find().then(res => {
									//console.log("dasds", res)
									let now_reserve = res[0]._sumReserve
									const query = Bmob.Query('Goods');
									query.set('reserve', now_reserve)
									query.set('id', that.product.objectId)
									query.save().then(res => {
										common.modifyStockType(that.product.objectId);
								    that.$emit("deleteSingle",true);
										uni.setStorageSync("isClickShaiXuan",true)
										uni.showToast({title:"删除成功"});
									})
								})
							}).catch(err => {
								console.log(err)
							})
						}
					}
				});
			},
			
			//分库存的switch点击
			change_state(e) {
				that.get_reserve_checked = e.detail.value
			},
			
			//二维码路径
			qrR(res) {
				this.src = res
			},
			
			//点击条形码保存
			saveQrcode() {
				this.$refs.qrcode._saveCode()
			},
		}
	}
</script>

<style>
	
	.opion_item {
		color: #118FFF;
		font-weight: bold;
		padding: 0 20rpx 0 0;
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
