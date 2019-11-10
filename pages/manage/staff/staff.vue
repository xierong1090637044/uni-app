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
			 enable-back-to-top="true"  v-if="staffs && staffs.length > 0">
				<view v-for="(staff,index) in staffs" :key="index">
					<view class='content'>
						<!--<image v-if="staff.avatarUrl" :src="staff.avatarUrl" class="staff_avatar"></image>-->
						<view class="display_flex_bet" @click="goto_detail(staff)">
							<view class="display_flex">
								<fa-icon type="user-circle" size="30" color="#426ab3" style="margin-right: 20rpx;"></fa-icon>
								<view>
									<view class='staff_name'>{{staff.username}}</view>
									<view class='staff_mobile'>账号：{{staff.mobilePhoneNumber}}</view>
								</view>

							</view>
							<fa-icon type="angle-right" size="20" color="#999" />
						</view>

						<view class="right_item">
							<view class="display_flex" style="justify-content: flex-end;width: 100%;" v-if="is_choose" @click="select_this(staff)">
								<text style="color: #d93a49;">选择</text>
							</view>

							<!--<view class="display_flex" style="justify-content: flex-end;align-items: center;" v-else>
								<fa-icon type="trash" size="20" color="#d93a49" style="margin-right: 40rpx;" @click="delete_this(staff.objectId)"></fa-icon>
								<fa-icon type="pencil-square-o" size="20" color="#d93a49" style="margin-right: 40rpx;padding-top: 6rpx;" @click="edit(staff)"></fa-icon>
							</view>-->
						</view>
						<!--<fa-icon type="angle-right" size="20" color="#ddd"></fa-icon>-->

					</view>

				</view>
			</scroll-view>
			<nocontent v-else :type="1"></nocontent>
		</view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	
	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
	import loading from "@/components/Loading/index.vue"
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"

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
				disabled: false
			}
		},

		onLoad(options) {
			that = this;
			uni.removeStorageSync("")
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
			
			//去到员工详情
			goto_detail(staff){
				uni.setStorageSync("staff", staff)
				uni.navigateTo({
					url: "detail/detail"
				})
			},

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

			//前去添加员工
			goto_add() {
				let user = uni.getStorageSync("user")
				let identity = uni.getStorageSync("identity")
				if(user.is_vip || that.staffs.length <2){
					uni.navigateTo({
						url: "add/add"
					})
				}else{
					uni.showModal({
					    title: '提示',
					    content: '非会员最多上传2个员工账号',
							confirmText:"充值会员",
					    success: function (res) {
					        if (res.confirm) {
										if(identity == 1){
											uni.navigateTo({
												url:"/pages/mine/vip/vip"
											})
										}else{
											uni.showToast({
												title:"员工不能充值",
												icon:"none"
											})
										}
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					})
				}
				
			},

			//输入内容筛选
			input_confirm(e) {
				search_text = e.detail.value
				that.getstaff_list();
			},

			//得到员工列表
			getstaff_list: function() {
				const query = Bmob.Query("staffs");
				query.order("-createdAt");
				query.equalTo("masterId", "==", uid);
				query.equalTo("disabled", "==", that.disabled);
				query.include("shop")
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
