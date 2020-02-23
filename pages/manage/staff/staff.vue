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

			<view class="display_flex good_option_view" style="background: #fff;">
				<view class="good_option" @click="selectd('order')">
					<view class="good_optionText">{{headerSelection.order.desc || '排序'}}</view>
					<fa-icon type="angle-down" size="18" color="#999"></fa-icon>
				</view>
				<!--<view class="good_option" @click="selectd('options')">
					<view class="good_optionText">筛选</view>
					<fa-icon type="angle-down" size="18" color="#999"></fa-icon>
				</view>-->
				<view class="good_option" @click="option_reset">
					<view class="good_optionText">重置</view>
					<fa-icon type="repeat" size="16" color="#999"></fa-icon>
				</view>
			</view>

			<view style="padding: 10rpx 30rpx;background: #FAFAFA;color: #999;" class="display_flex_bet">
				<view style="font-size: 24rpx;font-weight: 500;">员工总数：{{staffHeader.num}}</view>
				<!--<view style="font-size: 24rpx;font-weight: 500;">应收欠款：{{staffHeader.debtMoney}}</view>-->
			</view>

			<scroll-view scroll-y class="indexes" style='height:calc(100vh - 212rpx)' scroll-with-animation="true"
			 enable-back-to-top="true" v-if="staffs && staffs.length > 0">
				<radio-group @change="select_this">
					<label v-for="(staff,index) in staffs" :key="index" style="width: 100%;" class="display_flex_bet">
						<view class='content normalBorder'>
							<!--<image v-if="staff.avatarUrl" :src="staff.avatarUrl" class="staff_avatar"></image>-->
							<view class="display_flex_bet" @click.stop="goto_detail(staff)">
								<view class="display_flex" style="width: 94%;">
									<fa-icon type="user-circle" size="30" color="#426ab3" style="margin-right: 20rpx;"></fa-icon>
									<view style="width: 100%;">
										<view class='staff_name'>{{staff.nickName}}</view>
										<view class="display_flex_bet">
											<view class='staff_mobile'>账号：{{staff.mobilePhoneNumber}}</view>
											<view class="display_flex" @click.stop="makePhoneCall(staff.mobilePhoneNumber)">
												<fa-icon type="phone" size="14" color="#999" />
												<text style="margin-left: 10rpx;font-size: 24rpx;">打电话</text>
											</view>
										</view>
									</view>

								</view>
								<view v-if="is_choose">
									<radio :value="JSON.stringify(staff)" style="transform:scale(0.7)" />
								</view>
								<fa-icon type="angle-right" size="20" color="#999" v-else/>
							</view>
						</view>
					</label>
				</radio-group>
				
				<!--排序模板-->
				<view v-if="showOrder" class="modal_backgroundTransparent" @click="showOrder = false">
					<view class="showOptionsTransparent">
						<view class="display_flex_bet" v-for="(item,index) in orders" :key="index" style="padding: 16rpx 30rpx;border-bottom: 1rpx solid#F7F7F7;"
						 @click="selectOrder(item)">
							<view style="color: #333;">{{item.desc}}({{item.notice}})</view>
							<fa-icon type="check" size="18" color="#2ca879" v-if="item.checked"></fa-icon>
						</view>
					</view>
				</view>
				
			</scroll-view>
			
			<nocontent v-else :type="1"></nocontent>
		</view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";

	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'

	let that;
	let search_text;
	let uid;
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {
				showOrder:false,
				loading: true,
				staffs: [],
				is_choose: false,
				disabled: false,

				staffHeader: {
					num: 0,
					debtMoney: 0
				},

				headerSelection: {
					order: {
						"order": "-createdAt"
					},
					options: '',
				},
				orders: [{
					"desc": "创建日期",
					"notice": "最新",
					"order": "-createdAt",
					"checked": true,
				}, {
					"desc": "创建日期",
					"notice": "最晚",
					"order": "createdAt",
					"checked": false,
				}, {
					"desc": "名字",
					"notice": "正序",
					"order": "goodsName",
					"checked": false,
				}]
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

			//头部的options选择
			selectd(type) {
				if (type == "order") {
					that.showOrder = true
				} else if (type == "options") {
					that.showOptions = true
				}
			},

			//选择当前排序
			selectOrder(item) {
				for (let item of that.orders) {
					item.checked = false
				}
				item.checked = true
				that.headerSelection.order = item
				that.getstaff_list();
			},

			//打电话
			makePhoneCall(phone) {
				if (phone) {
					uni.makePhoneCall({
						phoneNumber: phone //仅为示例
					});
				} else {
					uni.showToast({
						icon: "none",
						title: "未填写联系电话"
					})
				}
			},

			//去到员工详情
			goto_detail(staff) {
				if(that.is_choose){
					return
				}
				
				uni.setStorageSync("staff", staff)
				uni.navigateTo({
					url: "detail/detail"
				})
			},

			//选择此员工当负责人
			select_this(e) {
				let charge = JSON.parse(e.detail.value);
				uni.setStorageSync("charge", charge);
				uni.navigateBack({
					delta: 1
				})
			},

			//前去添加员工
			goto_add() {
				let user = uni.getStorageSync("user")
				let identity = uni.getStorageSync("identity")
				if (user.is_vip || that.staffs.length < 2) {
					uni.navigateTo({
						url: "add/add"
					})
				} else {
					uni.showModal({
						title: '提示',
						content: '非会员最多上传2个员工账号',
						confirmText: "充值会员",
						success: function(res) {
							if (res.confirm) {
								if (identity == 1) {
									uni.navigateTo({
										url: "/pages/mine/vip/vip"
									})
								} else {
									uni.showToast({
										title: "员工不能充值",
										icon: "none"
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
				const query = Bmob.Query("_User");
				query.order("-createdAt");
				query.equalTo("masterId", "==", uid);
				if (that.disabled) {
					query.equalTo("disabled", "==", that.disabled);
				}
				query.include("shop");
				query.order(that.headerSelection.order.order);
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
		width: 100%;
	}
</style>
