<template>
	<view>

		<loading v-if="loading"></loading>

		<view wx:else>
			<scroll-view scroll-y class="indexes" style='height:100vh' scroll-with-animation="true" enable-back-to-top="true">
				<view v-for="(stock,index) in stocks" :key="index">
					<view class='content'>
						<view class="display_flex">
							<image src="/static/warehouse.png" class="stock_avatar"></image>
							<view>
								<view class='stock_name'>{{stock.stock_name}}</view>
								<view class='stock_mobile'>负责人：{{stock.charge.nickName}}</view>
							</view>
						</view>
						
						<!--<fa-icon type="user-circle" size="30" color="#426ab3" style="margin-right: 20rpx;" v-else></fa-icon>-->
						<view class="right_item">
							<view class="display_flex" style="justify-content: flex-end;width: 100%;" v-if="is_choose" @click="select_this(stock)">
								<text style="color: #d93a49;">选择</text>
							</view>

							<view class="display_flex" style="justify-content: flex-end;" v-else>
								<fa-icon type="trash" size="20" color="#d93a49" style="margin-right: 40rpx;" @click="delete_this(stock.objectId)"></fa-icon>
								<fa-icon type="pencil-square-o" size="20" color="#d93a49" style="margin-right: 40rpx;" @click="edit(stock)"></fa-icon>
							</view>
						</view>
						<!--<fa-icon type="angle-right" size="20" color="#ddd"></fa-icon>-->
					</view>
				</view>
			</scroll-view>

		</view>
	</view>
</template>

<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import loading from "@/components/Loading/index.vue"
	import Bmob from '@/utils/bmob.js';

	let that;
	let search_text;
	let uid;
	export default {
		components: {
			faIcon,
			loading
		},
		data() {
			return {
				is_choose: false,
				loading: true,
				stocks: null,
			}
		},

		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');

			console.log(options)
			if (options.type == "choose") {
				that.is_choose = true
			}
		},
		onShow() {
			that.getstock_list()
		},
		onUnload() {
			search_text =""
		},
		methods: {

			//选择此仓库
			select_this(item) {
				let warehouse = uni.getStorageSync("warehouse") || [];
				let _stocks ={};
				
				_stocks.stock = item;
				_stocks.reserve = 0;
				
				if(JSON.stringify(warehouse).indexOf(JSON.stringify(_stocks)) ==-1){
					warehouse.push(_stocks);
					
					uni.setStorageSync("warehouse", warehouse)
					uni.navigateBack({
						delta: 1
					})
					
				}else{
					uni.showToast({
						title:"已选择此仓库",
						icon:"none"
					})
				}
				
			},

			//编辑操作
			edit(item) {
				uni.setStorageSync("warehouse", item);
				uni.navigateTo({
					url: "add/add"
				})
			},

			//删除操作
			delete_this(id) {
				uni.showModal({
					title: '提示',
					content: '是否删除此仓库',
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
					that.getstock_list()
				}).catch(err => {
					console.log(err)
				})
			},

			// #ifdef APP-PLUS
			//监听原生标题栏按钮点击事件
			onNavigationBarButtonTap(Object) {
				uni.navigateTo({
					url: "add/add"
				})
			},

			//原生导航栏输入确认的时候
			onNavigationBarSearchInputConfirmed(e) {
				console.log(e.text)
				search_text = e.text
				that.getstock_list();
			},
			// #endif

			//得到仓库列表
			getstock_list: function() {
				that.loading = true;
				const query = Bmob.Query("stocks");
				query.order("-num");
				query.include("charge")
				query.equalTo("parent", "==", uid);
				if (search_text) {
					query.equalTo("stock_name", "==", {
						"$regex": "" + search_text + ".*"
					});

				}
				query.find().then(res => {
					//console.log(res)
					that.loading = false;
					that.stocks = res;
				});
			},

		}
	}
</script>

<style>
	page {
		height: 100vh;
		background: #FAFAFA;
	}

	.stock_name {
		font-weight: bold;
		font-size: 30rpx;
		color: #3D3D3D;
		margin-bottom: 4rpx;
	}

	.stock_mobile {
		color: #999;
	}

	.right_item {
		width: 100%;
		border-bottom: 1rpx solid#ccc;
		padding-bottom: 10rpx;
	}

	.stock_avatar {
		width: 82rpx;
		height: 70rpx;
		margin-right: 20rpx;
	}

	.content {
		padding: 10rpx 30rpx;
		background: #FFFFFF;
	}
</style>
