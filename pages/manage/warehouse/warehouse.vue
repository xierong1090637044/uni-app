<template>
	<view style="height: 100vh;">

		<loading v-if="loading"></loading>

		<view wx:else>
			<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="添加"  @click-right="goto_add" >
				<view class="input-view">
					<uni-icon type="search" size="22" color="#666666" />
					<input confirm-type="search" class="input" type="text" placeholder="输入搜索关键词" @confirm="input_confirm" />
				</view>
			</uni-nav-bar>
			
			<view class="uni-common-mt">
				<uni-segmented-control :current="current" :values="items" style-type="text" active-color="#426ab3" @clickItem="onClickItem" />
			</view>
			
			<scroll-view scroll-y class="indexes" style='height:calc(100vh - 212rpx)' scroll-with-animation="true" enable-back-to-top="true">
				<view v-for="(stock,index) in stocks" :key="index">
					<view class='content'>
						<view class="display_flex_bet" @click="goto_detail(stock)">
							<view class="display_flex">
								<image src="/static/warehouse.png" class="stock_avatar"></image>
								<view>
									<view class='stock_name'>{{stock.stock_name}}</view>
									<view class='stock_mobile' v-if="stock.charge.nickName">负责人：{{stock.charge.nickName}}</view>
									<view class='stock_mobile' v-else>负责人：未填写</view>
								</view>
							</view>
							
							<fa-icon type="angle-right" size="20" color="#999" />
						</view>
						
						<!--<fa-icon type="user-circle" size="30" color="#426ab3" style="margin-right: 20rpx;" v-else></fa-icon>-->
						<view class="right_item">
							<view class="display_flex" style="justify-content: flex-end;width: 100%;" v-if="is_choose" @click="select_this(stock)">
								<text style="color: #d93a49;">选择</text>
							</view>

							<view class="display_flex" style="justify-content: flex-end;" v-else>
								<fa-icon type="trash" size="20" color="#d93a49" style="margin-right: 40rpx;" @click="delete_this(stock.objectId)"></fa-icon>
								<fa-icon type="pencil-square-o" size="20" color="#d93a49" style="margin-right: 40rpx;padding-top: 8rpx;" @click="edit(stock)"></fa-icon>
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
	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import loading from "@/components/Loading/index.vue"
	import Bmob from '@/utils/bmob.js';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'

	let that;
	let search_text;
	let uid;
	export default {
		components: {
			uniSegmentedControl,
			faIcon,
			loading,
			uniNavBar,
			uniIcon
		},
		data() {
			return {
				is_choose: false,
				loading: true,
				stocks: null,
				items: ['已启用', '未启用'],
				current: 0,
				disabled:false
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
			
			//tab点击
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index
			
					if (index == 0) {
						that.disabled = false,
						that.getstock_list()
					} else if (index == 1) {
						that.disabled = true,
						that.getstock_list()
					} 
				}
			},
			
			//点击仓库去到详情
			goto_detail(stock){
				uni.setStorageSync("stock",stock)
				uni.navigateTo({
					url:"detail/detail"
				})
			},

			//选择此仓库
			select_this(item) {
				//let warehouse = uni.getStorageSync("warehouse") || [];
				let warehouse = [];
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
				uni.setStorageSync("charge", item.charge);
				uni.setStorageSync("shop", item.shop);
				uni.navigateTo({
					url: "add/add"
				})
			},

			//删除操作
			delete_this(id) {
				uni.showModal({
					title: '提示',
					content: '请谨慎删除，一旦删除，数据不能恢复，是否删除此仓库',
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
			
			//前去添加员工
			goto_add(){
				uni.navigateTo({
					url: "add/add"
				})
			},
			
			//输入内容筛选
			input_confirm(e){
				search_text = e.detail.value
				that.getstock_list();
			},

			//得到仓库列表
			getstock_list: function() {
				const query = Bmob.Query("stocks");
				query.order("-num");
				query.include("charge","shop")
				query.equalTo("parent", "==", uid);
				query.equalTo("disabled", "!=", !that.disabled);
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
	.uni-common-mt {
		background: #FFFFFF;
		padding: 20rpx 0;
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
