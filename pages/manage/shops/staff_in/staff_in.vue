<template>
	<view>

		<loading v-if="loading"></loading>

		<view wx:else>
			<scroll-view scroll-y class="indexes" style='100vh' scroll-with-animation="true" enable-back-to-top="true">
				<view v-for="(staff,index) in staffs" :key="index">
					<view class='content'>
						<!--<image v-if="staff.avatarUrl" :src="staff.avatarUrl" class="staff_avatar"></image>-->
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
						<!--<fa-icon type="angle-right" size="20" color="#ddd"></fa-icon>-->

					</view>

				</view>
			</scroll-view>

		</view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	
	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';
	import loading from "@/components/Loading/index.vue"
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"

	let that;
	let search_text;
	let uid;
	let shopId;
	export default {
		components: {
			uniSegmentedControl,
			faIcon,
			loading
		},
		data() {
			return {
				loading: true,
				staffs: null,
				is_choose: false,
				items: ['已启用', '未启用'],
				current: 0,
				disabled:false
			}
		},

		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid')
			shopId = options.shopId
		},
		onShow() {

			that.getstaff_list()
		},
		onUnload() {
			search_text = ""
		},
		methods: {
			
			//tab点击
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index
			
					if (index == 0) {
						that.disabled = false,
						that.getstaff_list()
					} else if (index == 1) {
						that.disabled = true,
						that.getstaff_list()
					} 
				}
			},

			//选择此员工当负责人
			select_this(charge) {
				uni.setStorageSync("charge", charge)
				uni.navigateBack({
					delta: 1
				})
			},

			//编辑操作
			edit(item) {
				console.log(item)
				uni.setStorageSync("staff", item);
				uni.navigateTo({
					url: "add/add"
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
				const query = Bmob.Pointer('_User');
				query.destroy(id).then(res => {
					console.log(res)
					uni.showToast({
						title: "删除成功",
						icon: "none"
					})
					that.getstaff_list()
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
				that.getstaff_list();
			},
			// #endif

			//得到员工列表
			getstaff_list: function() {
				const query = Bmob.Pointer('_User');
				query.order("-createdAt");
				query.equalTo("masterId", "==", uid);
				query.equalTo("shop", "==", shopId);
				query.equalTo("disabled", "==", that.disabled);
				if (search_text) {
					query.equalTo("username", "==", {
						"$regex": "" + search_text + ".*"
					});

				}
				query.find().then(res => {
					//console.log(res)
					that.loading = false;
					that.staffs = res;
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
		padding: 20rpx 0;
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
