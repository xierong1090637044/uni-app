<template>
	<view style="width: 100%;display: flex;justify-content: space-between;position: fixed;bottom: 0;background: #fff;z-index: 100;padding: 12rpx 0;border-top: 1rpx solid#DDDDDD;">
		<view class="Listitem" @click="edit(thisStock)">
			<view class="Icon">
				<fa-icon type="pencil-square-o" size="18" color="#426ab3" />
			</view>
			<view class="Notice">编辑</view>
		</view>
		
		<view class="Listitem" @click="deleteThis">
			<view class="Icon">
				<fa-icon type="trash-o" size="18" color="#426ab3" />
			</view>
			<view class="Notice">删除</view>
		</view>
		
		<navigator class="Listitem" :url="'../record/record?stockId='+thisStock.objectId" hover-class="none">
			<view class="Icon">
				<fa-icon type="calendar-check-o" size="18" color="#426ab3" />
			</view>
			<view class="Notice">操作记录</view>
		</navigator>
		
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import common from "@/utils/common.js";
	
	let that;
	let uid = uni.getStorageSync("uid")
	export default {
		props: {
			thisStock: {
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
			deleteThis() {
				const query = Bmob.Query("stocks");
				query.equalTo("parent", "==", uid);
				query.equalTo("disabled", "!=", true);
				query.find().then(res => {
					if (res.length > 1) {
						let user = uni.getStorageSync("user")
						if(user.identity == 2){
							uni.showToast({
								icon:"none",
								title:"子账户暂不支持删除"
							})
							return
						}
						that.delete_this(that.thisStock.objectId)
					} else {
						uni.showToast({
							title: "最少保留一个店仓",
							icon: "none"
						})
					}
				})
			},
			
			//删除操作
			delete_this(id) {
				uni.showModal({
					title: '提示',
					content: '请谨慎删除，一旦删除，数据不能恢复，是否删除此店仓',
					success: function(res) {
						if (res.confirm) {
							console.log(id);
							that.delete_data(id)
						}
					}
				});
			},
			
			//删除数据
			delete_data(id) {
				console.log(id)
				const query = Bmob.Query("stocks");
				query.destroy(id).then(res => {
					console.log(res)
			
					uni.showToast({
						title: "删除成功",
						icon: "none"
					})
					uni.navigateBack({
						delta: 1
					})
					/*const query = Bmob.Query('Goods');
					// 单词最多删除50条
					query.limit(50)
					query.equalTo("stocks", "==", id);
					query.count().then(res => {
						console.log(`共有${res}条记录`)
						for (var i = 0; i < Math.ceil(res / 50); i++) {
							query.find().then(todos => {
								todos.destroyAll().then(res => {
									// 成功批量修改
									console.log(res, 'ok')
									uni.showToast({
										title: "删除成功",
										icon: "none"
									})
									uni.navigateBack({
										delta: 1
									})
								}).catch(err => {
									console.log(err)
								});
							})
						}
					});*/
			
				}).catch(err => {
					console.log(err)
				})
			},
			
			//编辑操作
			edit(item) {
				uni.setStorageSync("warehouse", item);
				uni.setStorageSync("charge", item.charge);
				uni.setStorageSync("shop", item.shop);
				uni.navigateTo({
					url: "../add/add"
				})
			},
			
			//销售单点击
			sellRecord(){
				uni.setStorageSync("producer",that.producer)
				uni.navigateTo({
					url: '/pages/common/goods-select/goods-select?type=delivery&value=3'
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
