<template>
	<view style="width: 100%;display: flex;justify-content: space-between;position: fixed;bottom: 0;background: #fff;z-index: 100;padding: 12rpx 0;border-top: 1rpx solid#DDDDDD;">
		<view class="Listitem" @click="modify">
			<view class="Icon">
				<fa-icon type="pencil-square-o" size="18" color="#426ab3" />
			</view>
			<view class="Notice">编辑</view>
		</view>
		<button class="Listitem" open-type="share" plain="true" style="border: unset;">
			<view class="Icon">
				<fa-icon type="share-square-o" size="18" color="#426ab3" />
			</view>
			<view class="Notice">分享</view>
		</button>
		<view class="Listitem" @click="addBadGoodRecord">
			<view class="Icon">
				<fa-icon type="cube" size="18" color="#426ab3" />
			</view>
			<view class="Notice">货损单</view>
		</view>
		<view class="Listitem" @click="moreActions">
			<view class="Icon">
				<fa-icon type="tags" size="18" color="#426ab3" />
			</view>
			<view class="Notice">更多操作</view>
		</view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from "@/utils/common.js";
	import print from "@/utils/print.js";
	
	let that;
	export default {
		props: {
			product: {
				type: Object,
				default: {}
			} // 标题
		},
		data() {
			return {

			};
		},
		mounted() {
			that = this
		},
		methods: {
			
			//货损记录点击
			addBadGoodRecord(){
				let products = []
				let uid = uni.getStorageSync("uid")
				const query = Bmob.Query("Goods");
				query.equalTo("userId", "==", uid);
				query.equalTo("header", "==", that.product.objectId);
				query.include("stocks");
				query.find().then(res => {
					for(let item of res){
						item.num = 1;
						item.total_money = 1 * item.costPrice;
						item.really_total_money = 1 * item.costPrice;
						item.modify_retailPrice = item.costPrice;
					}
					uni.setStorageSync("products",res)
					uni.navigateTo({
						url:"/pages/common/goodBad/goodBad"
					})
				});
			},
			
			//产品信息修改点击
			modify() {
				uni.navigateTo({
					url: '../good_add/good_add?type=more'
				});
			},

			moreActions() {
				uni.showActionSheet({
					itemList: ['产品操作记录', '关联新店仓', '删除','打印'],
					success: function(res) {
						let tapIndex = res.tapIndex + 1;
						if(tapIndex == 1){
							uni.navigateTo({
								url:'../operations/operations?objectId='+that.product.objectId+'&goodsName='+that.product.goodsName
							})
						}else if(tapIndex == 2){
							uni.navigateTo({
								url:"/pages/manage/warehouse/warehouse?type=choose"
							})
							that.$emit("isChooseStock")
						}else if(tapIndex == 3){
							that.delete_good(that.product.objectId);
						}else if(tapIndex == 4){
							print.print_goodDet(that.product);
						}
					},
				})
			},
			
			//删除商品
			delete_good(objectId) {
				let uid = uni.getStorageSync("uid")
				uni.showModal({
					title: '提示',
					content: '是否删除该商品',
					success: function(res) {
						if (res.confirm) {
							uni.setStorageSync("isClickShaiXuan", true)
							const query = Bmob.Query('Goods');
							query.destroy(objectId).then(res => {
								const query = Bmob.Query('Goods');
								// 单词最多删除50条
								query.equalTo("header", "==", objectId);
								query.equalTo("userId", "==", uid);
								query.find().then(todos => {
									
									if(todos.length > 0){
										todos.destroyAll().then(res => {
											// 成功批量修改
											uni.navigateBack({
												delta: 1
											})	
											setTimeout(function() {
												uni.showToast({
													title: "删除成功"
												})
											}, 1000)
													
										}).catch(err => {
											console.log(err)
										});
									}else{
										uni.navigateBack({
											delta: 1
										})
												
										setTimeout(function() {
											uni.showToast({
												title: "删除成功"
											})
										}, 1000)
									}
									
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
	.Listitem {
		width: 25%;
		text-align: center;
	}

	.Icon {
		line-height: 40rpx;
	}

	.Notice {
		line-height: 32rpx;
		font-size: 24rpx;
		color: #333;
	}
</style>
