<template>
	<view>
		<uni-nav-bar :fixed="true" color="#333333" background-color="#FFFFFF" right-text="操作" @click-right="show_options"></uni-nav-bar>
		<view style="padding: 0 30rpx;background: #fff;">
			<view class="display_flex_bet frist border_bottom" @click="goto_edit()">
				<view class="display_flex">
					<view>账户名称</view>
					<view style="margin-left: 30rpx;">{{account.name}}</view>
				</view>
				<fa-icon type="angle-right" size="20" color="#999" />
			</view>
			
			<view class="display_flex_bet frist border_bottom">
				<view>账户类型</view>
				<view style="color: #999;">{{account.type || "未填写"}}</view>
			</view>
			
			<view class="display_flex_bet frist border_bottom">
				<view>账号</view>
				<view style="color: #999;">{{account.number || "未填写"}}</view>
			</view>

			<view class="display_flex_bet frist border_bottom">
				<view class="display_flex_bet" style="width: 100%;">
					<view>账户余额</view>
					<view style="color: #f30;">￥{{account.money || 0}}</view>
				</view>
			</view>
			
			<view class="display_flex_bet frist border_bottom">
				<view class="display_flex_bet" style="width: 100%;">
					<view>备注</view>
					<view style="color: #999;">{{account.beizhu || "未填写"}}</view>
				</view>
			</view>

			<view class="display_flex_bet frist">
				<view class="display_flex_bet" style="width: 100%;">
					<view>创建时间</view>
					<view style="color: #999;">{{account.createdAt}}</view>
				</view>
			</view>
		</view>

		<!---相关的操作记录-->
		<navigator class="list_item display_flex_bet" style="margin: 20rpx 0;" hover-class="none" :url="'../history/history?id='+account.objectId">
			<text class="left_desc">查看资金流水</text>
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
				account: "",
				Goods: null,
				reserve_num: 0,
				reserve_money: 0,
				
				sellRecord:{}
			}
		},

		onLoad(options) {
			that = this;
			uid = uni.getStorageSync("uid");
			that.account = uni.getStorageSync("account")
			
			console.log(options)
		},
		methods: {

			show_options() {
				uni.showActionSheet({
					itemList: ["编辑", "删除"],
					success: function(res) {
						if (res.tapIndex == 0) {
							that.edit(that.account)
						} else if (res.tapIndex == 1) {
							that.delete_this(that.account.objectId)
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
				uni.setStorageSync("account", item);
				uni.navigateTo({
					url: "../add/add"
				})
			},

			//删除操作
			delete_this(id) {
				uni.showModal({
					title: '提示',
					content: '是否删除此账户及其相关的流水记录',
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
				const query = Bmob.Query("accounts");
				query.destroy(id).then(res => {
					console.log(res)
					uni.navigateBack({
						delta:1
					})
					setTimeout(function(){
						uni.showToast({
							title: "删除成功",
							icon: "none"
						})
					},1000)
				}).catch(err => {
					console.log(err)
				})
			},
			
			//去编辑
			goto_edit() {
				uni.redirectTo({
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
