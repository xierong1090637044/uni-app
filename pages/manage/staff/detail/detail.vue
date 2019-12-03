<template>
	<view>
		<uni-nav-bar :fixed="true" color="#333333" background-color="#FFFFFF" right-text="操作" @click-right="show_options"></uni-nav-bar>
		<view style="padding: 0 30rpx;background: #fff;">
			<view class="display_flex_bet frist border_bottom" @click="goto_edit()">
				<view class="display_flex">
					<view>员工姓名</view>
					<view style="margin-left: 30rpx;">{{staff.nickName}}</view>
				</view>
				<fa-icon type="angle-right" size="20" color="#999" />
			</view>

			<view class="display_flex_bet frist border_bottom">
				<view>联系电话</view>
				<view style="color: #999;">{{staff.mobilePhoneNumber}}</view>
			</view>

			<view class="display_flex_bet frist border_bottom">
				<view class="display_flex_bet" style="width: 100%;">
					<view>是否成功激活</view>
					<view style="color: #999;">已成功激活</view>
				</view>
			</view>

			<view class="display_flex_bet frist">
				<view class="display_flex_bet" style="width: 100%;">
					<view>创建时间</view>
					<view style="color: #999;">{{staff.createdAt}}</view>
				</view>
			</view>
		</view>

		<!---相关的操作记录-->
		<navigator class="list_item display_flex_bet" style="margin: 20rpx 0;" hover-class="none" :url="'../history/history?id='+staff.objectId">
			<text class="left_desc">相关的操作记录</text>
			<fa-icon type="angle-right" size="20" color="#999" />
		</navigator>

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
				staff: "",
				Goods: null,
				reserve_num: 0,
				reserve_money: 0,
			}
		},

		onLoad() {
			that = this;
			uid = uni.getStorageSync("uid");
			that.staff = uni.getStorageSync("staff")
		},
		methods: {

			show_options() {
				uni.showActionSheet({
					itemList: ["编辑", "删除"],
					success: function(res) {
						if (res.tapIndex == 0) {
							that.edit(that.staff)
						} else if (res.tapIndex == 1) {
							that.delete_this(that.staff.objectId)
						}
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},

			//编辑操作
			edit(item) {
				console.log(item)
				uni.setStorageSync("staff", item);
				uni.navigateTo({
					url: "../add/add"
				})
			},

			//删除操作
			delete_this(id) {
				uni.showModal({
					title: '提示',
					content: '是否删除此员工',
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
				const query = Bmob.Query("_User");
				query.destroy(id).then(res => {
					const query = Bmob.Query("_User");
					query.get(id).then(res => {
						if (res.userId) {
							const query = Bmob.Query("_User");
							query.destroy(res.userId).then(res => {
								uni.showToast({
									title: "删除成功",
									icon: "none"
								})
								uni.navigateBack({
									delta:1
								})
							})
						}
						console.log(res)
					}).catch(err => {
						console.log(err)
					})
					console.log(res)
					uni.showToast({
						title: "删除成功",
						icon: "none"
					})
					uni.navigateBack({
						delta:1
					})
				}).catch(err => {
					console.log(err)
				})
			},

			goto_edit() {
				uni.navigateTo({
					url: "../add/add"
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
	}

	.border_bottom {
		border-bottom: 1rpx solid#f6f5ec;
	}

	.second {
		line-height: 44rpx;
	}
</style>
