<template>
	<view>

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
				<view v-for="(staff,index) in staffs" :key="index">
					<view class='content'>
						<!--<image v-if="staff.avatarUrl" :src="staff.avatarUrl" class="staff_avatar"></image>-->
						<view class="display_flex">
							<fa-icon type="user-circle" size="30" color="#426ab3" style="margin-right: 20rpx;"></fa-icon>
							<view>
								<view class='staff_name'>{{staff.username}}</view>
								<view class='staff_mobile'>账号：{{staff.mobilePhoneNumber}}</view>
							</view>

						</view>

						<view class="right_item">
							<view class="display_flex" style="justify-content: flex-end;width: 100%;" v-if="is_choose" @click="select_this(staff)">
								<text style="color: #d93a49;">选择</text>
							</view>

							<view class="display_flex" style="justify-content: flex-end;align-items: center;" v-else>
								<fa-icon type="trash" size="20" color="#d93a49" style="margin-right: 40rpx;" @click="delete_this(staff.objectId)"></fa-icon>
								<fa-icon type="pencil-square-o" size="20" color="#d93a49" style="margin-right: 40rpx;padding-top: 6rpx;" @click="edit(staff)"></fa-icon>
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
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	import loading from "@/components/Loading/index.vue"
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import Bmob from '@/utils/bmob.js';

	let that;
	let search_text;
	let uid;
	export default {
		components: {
			uniSegmentedControl,
			loading,
			uniNavBar,
			faIcon,
			uniIcon
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
			console.log(options)
			if (options.type == "choose") {
				that.is_choose = true
			}
		},
		onShow() {
			uni.removeStorageSync("staff")
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
				const query = Bmob.Query("staffs");
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
			
			//前去添加员工
			goto_add(){
				uni.navigateTo({
					url: "add/add"
				})
			},
			
			//输入内容筛选
			input_confirm(e){
				search_text = e.detail.value
				that.getstaff_list();
			},

			//得到员工列表
			getstaff_list: function() {
				const query = Bmob.Query("staffs");
				query.order("-createdAt");
				query.equalTo("masterId", "==", uid);
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
		background: #FFFFFF;
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
