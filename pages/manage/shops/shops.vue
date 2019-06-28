<template>
	<view>

		<loading v-if="loading"></loading>

		<view wx:else>
			<scroll-view scroll-y class="indexes" style='height:100vh' scroll-with-animation="true" enable-back-to-top="true">
				<view v-for="(shop,index) in shops" :key="index">

					<view class='content display_flex_bet'>
						<image src="/static/shop.png" class="shop_avatar"></image>
						<!--<fa-icon type="user-circle" size="30" color="#426ab3" style="margin-right: 20rpx;"></fa-icon>-->
						<view class="right_item">
							<view class='shop_name'>{{shop.name}}</view>
							<view class='shop_mobile'>地址：{{shop.address}}</view>
							
							<view class="display_flex" style="justify-content: flex-end;width: 100%;" v-if="is_choose" @click="select_this(shop)">
								<text style="color: #f69c9f;">选择</text>
							</view>
							
							<view class="display_flex" style="justify-content: flex-end;" v-else>
								<fa-icon type="trash" size="20" color="#f69c9f" style="margin-right: 40rpx;" @click="delete_this(shop.objectId)"></fa-icon>
								<fa-icon type="pencil-square-o" size="20" color="#f69c9f" style="margin-right: 40rpx;" @click="edit(shop)"></fa-icon>
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
	import loading from "@/components/Loading/index.vue"
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
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
				loading: true,
				shops: null,
				is_choose: false
			}
		},

		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');
			
			if (options.type == "choose") {
				that.is_choose = true
			}
		},
		onShow() {
			uni.removeStorageSync("shop")
			that.getshop_list()
		},
		methods: {

			//选择此门店
			select_this(shop) {
				uni.setStorageSync("shop", shop)
				uni.navigateBack({
					delta: 1
				})
			},

			//编辑操作
			edit(item) {
				uni.setStorageSync("shop", item);
				uni.navigateTo({
					url: "add/add"
				})
			},

			//删除操作
			delete_this(id) {
				uni.showModal({
					title: '提示',
					content: '是否删除此门店',
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
				const query = Bmob.Query("shops");
				query.destroy(id).then(res => {
					console.log(res)
					uni.showToast({
						title: "删除成功",
						icon: "none"
					})
					that.getshop_list()
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
				that.getshop_list();
			},
			// #endif

			//得到门店列表
			getshop_list: function() {
				const query = Bmob.Query("shops");
				query.order("num");
				query.equalTo("parent", "==", uid);
				if (search_text) {
					query.equalTo("name", "==", {
						"$regex": "" + search_text + ".*"
					});

				}
				query.find().then(res => {
					console.log(res,uid)
					that.loading = false;
					that.shops = res;
				});
			},

		}
	}
</script>

<style>
	.shop_name {
		font-weight: bold;
		font-size: 30rpx;
		color: #3D3D3D;
		margin-bottom: 4rpx;
	}

	.shop_mobile {
		color: #999;
	}

	.right_item {
		padding: 10rpx 0;
		width: 100%;
		border-bottom: 1rpx solid#ccc;
	}

	.shop_avatar {
		width: 90rpx;
		height: 70rpx;
		margin-right: 20rpx;
	}

	.content {
		padding: 0rpx 30rpx;

	}
</style>
