<template>
	<view>

		<loading v-if="loading"></loading>

		<view wx:else>
			<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="添加" @click-right="goto_add">
				<view class="input-view">
					<uni-icon type="search" size="22" color="#666666" />
					<input confirm-type="search" class="input" type="text" placeholder="输入搜索关键词" @confirm="input_confirm" />
				</view>
			</uni-nav-bar>

			<view class="uni-common-mt">
				<uni-segmented-control :current="current" :values="items" style-type="text" active-color="#426ab3" @clickItem="onClickItem" />
			</view>

			<scroll-view scroll-y class="indexes" style='height:calc(100vh - 212rpx)' scroll-with-animation="true"
			 enable-back-to-top="true">
				<view v-for="(shop,index) in shops" :key="index">

					<view class='content'>
						<view class="display_flex_bet" @click="choose_way(shop.objectId)">
							<view class="display_flex">
								<image src="/static/shop.png" class="shop_avatar"></image>
								<view>
									<view class='shop_name'>{{shop.name}}</view>
									<view class='shop_mobile'>地址：{{shop.address}}</view>
								</view>
							</view>


							<fa-icon type="angle-right" size="20" color="#999" />

						</view>

						<!--<fa-icon type="user-circle" size="30" color="#426ab3" style="margin-right: 20rpx;"></fa-icon>-->
						<view class="right_item">
							<view class="display_flex" style="justify-content: flex-end;width: 100%;" v-if="is_choose" @click="select_this(shop)">
								<text style="color: #d93a49;">选择</text>
							</view>

							<view class="display_flex" style="justify-content: flex-end;" v-else>
								<fa-icon type="trash" size="20" color="#d93a49" style="margin-right: 40rpx;" @click="delete_this(shop.objectId)"></fa-icon>
								<fa-icon type="pencil-square-o" size="20" color="#d93a49" style="margin-right: 40rpx;padding-top: 6rpx;" @click="edit(stock)"></fa-icon>
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
	import staffs from "@/utils/staffs.js"

	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';
	import loading from "@/components/Loading/index.vue"
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
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
				loading: true,
				shops: null,
				is_choose: false,
				items: ['已启用', '未启用'],
				current: 0,
				disabled: false
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
		onUnload() {
			search_text = ""
		},
		methods: {

			//点击选择操作列表
			choose_way(shopId) {
				uni.showActionSheet({
					itemList: ['员工列表', '查看记录'],
					success: function(res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');

						if (res.tapIndex == 0) {
							uni.navigateTo({
								url: "staff_in/staff_in?shopId=" + shopId
							})
						} else {
							uni.navigateTo({
								url: "record/record?shopId=" + shopId
							})
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},

			//tab点击
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index

					if (index == 0) {
						that.disabled = false,
							that.getshop_list()
					} else if (index == 1) {
						that.disabled = true,
							that.getshop_list()
					}
				}
			},

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

			//前去添加员工
			goto_add() {
				uni.navigateTo({
					url: "add/add"
				})
			},

			//输入内容筛选
			input_confirm(e) {
				search_text = e.detail.value
				that.getshop_list();
			},

			//得到门店列表
			getshop_list: function() {
				const query = Bmob.Query("shops");
				query.order("num");
				query.equalTo("parent", "==", uid);
				query.equalTo("disabled", "==", that.disabled);
				if (search_text) {
					query.equalTo("name", "==", {
						"$regex": "" + search_text + ".*"
					});

				}
				query.find().then(res => {
					console.log(res, uid)
					that.loading = false;
					let shops = res;

					uni.getStorage({
						key: 'identity',
						success: function(res) {
							if (res.data == "2") {
								staffs.get_satffAuth().then(res => {
									console.log(res)
									let manange_shops = []
									if (res.shop) {
										for (let shop of shops) {
											if (shop.objectId == res.shop.objectId) {
												manange_shops.push(shop)
											}
										}
									}
									that.shops = manange_shops;
								});
							} else if (res.data == "1") {
								that.shops = shops;
							}
						},
					})

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
		padding-bottom: 10rpx;
		width: 100%;
		border-bottom: 1rpx solid#ccc;
	}

	.shop_avatar {
		width: 90rpx;
		height: 70rpx;
		margin-right: 20rpx;
	}

	.content {
		padding: 10rpx 30rpx;
		background: #FFFFFF;
	}
</style>
