<template>
	<view>
		<loading v-if="loading"></loading>

		<uni-nav-bar :fixed="true" color="#333333" background-color="#FFFFFF" right-text="操作" @click-right="show_options"></uni-nav-bar>
		<view class="fristImage">
			<image v-if="shop.Image && shop.Image[0]" :src="shop.Image[0]" style="width: 100%;height: 100%;" mode="aspectFit"></image>
			<image v-else src="/static/shop.png" style="height: 100%;" mode="aspectFit"></image>
		</view>
		
		<navigator class="list_item display_flex_bet" hover-class="none" :url="'../record/record?shopId='+shop.objectId">
			<text class="left_desc">相关的操作记录</text>
			<fa-icon type="angle-right" size="20" color="#999" />
		</navigator>
		
		<!---员工统计-->
		<view style="background: #fff;padding: 0 30rpx;">
			<view style="padding:20rpx 0rpx;border-bottom: 1rpx solid#F7F7F7;">员工统计</view>
			<view style="background: #FFFFFF;" v-if="staffs.length>0">
				<view v-for="(staff,index) in staffs" :key="index">
					<view class='content'>
						<view class="display_flex">
							<image :src="staff.avatarUrl" class="user_avatar"></image>
							<view>
								<view class='staff_name'>{{staff.username}}</view>
								<view class='staff_mobile'>账号：{{staff.mobilePhoneNumber}}</view>
							</view>
						</view>

						<view class="right_item">
							<view class="display_flex" style="justify-content: flex-end;width: 100%;">
								<text style="color: #d93a49;">总销售：{{staff.have_out}}</text>
							</view>
						</view>
					</view>
				</view>

			</view>
			<view style="background: #FFFFFF;padding:30rpx 0;" v-else>暂无员工</view>
		</view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import loading from "@/components/Loading/index.vue"

	let that;
	let uid;
	export default {
		components: {
			faIcon,
			loading
		},
		data() {
			return {
				loading: true,
				shop: "",
				staffs: [],
				reserve_num: 0,
				reserve_money: 0,
			}
		},

		onLoad() {
			that = this;
			uid = uni.getStorageSync("uid");
			that.shop = uni.getStorageSync("shop")
			that.getstaff_list()
		},
		methods: {
			show_options() {
				uni.showActionSheet({
					itemList: ["编辑", "删除"],
					success: function(res) {
						if (res.tapIndex == 0) {
							that.edit(that.shop)
						} else if (res.tapIndex == 1) {
							that.delete_this(that.shop.objectId)
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},

			//得到员工列表
			getstaff_list: function() {
				const query = Bmob.Query("staffs");
				query.order("-createdAt");
				query.equalTo("masterId", "==", uid);
				query.equalTo("shop", "==", that.shop.objectId);
				query.find().then(res => {
					//console.log(res)
					that.loading = false;
					that.staffs = res;
				});
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
				const query = Bmob.Query("shops");
				query.destroy(id).then(res => {
					console.log(res)
					uni.showToast({
						title: "删除成功",
						icon: "none"
					})
					uni.navigateBack({
						delta: 1
					})
				}).catch(err => {
					console.log(err)
				})
			},

			goto_detail(good) {
				uni.setStorageSync("now_product", good);
				uni.navigateTo({
					url: "/pages/manage/good_det/good_det"
				})
			},
		}
	}
</script>

<style lang="scss">
	.frist {
		padding: 20rpx 0;
	}
	
	.list_item {
		padding: 20rpx 30rpx;
		background: #FFFFFF;
		border-bottom: 1rpx solid#F7F7F7;
		margin: 0 0 20rpx;
	}

	.fristImage {
		text-align: center;
		width: 100%;
		height: 300rpx;
		padding: 30rpx 0;
		background: #fff;
		border-bottom: 1rpx solid#F7F7F7;
	}

	.border_bottom {
		border-bottom: 1rpx solid#f6f5ec;
	}

	.second {
		line-height: 44rpx;
	}
	
	.staff_name {
		font-weight: bold;
		font-size: 30rpx;
		color: #3D3D3D;
		margin-bottom: 4rpx;
	}
	
	.staff_mobile {
		color: #999;
	}
	
	.right_item {
		width: 100%;
		border-bottom: 1rpx solid#ccc;
	}
	
	.staff_avatar {
		width: 100rpx;
		height: 70rpx;
		margin-right: 20rpx;
	}
	
	.content {
		padding: 10rpx 30rpx;
		background: #FFFFFF;
	}
</style>
