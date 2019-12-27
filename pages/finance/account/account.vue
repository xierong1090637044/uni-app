<template>
	<view style="height: 100vh;">

		<loading v-if="loading"></loading>

		<view wx:else>
			<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="添加" @click-right="goto_add"></uni-nav-bar>

			<scroll-view scroll-y class="indexes" style='height:calc(100vh - 212rpx)' scroll-with-animation="true"
			 enable-back-to-top="true" v-if="accounts && accounts.length > 0">
				<view v-for="(stock,index) in accounts" :key="index">
					<view class='content'>
						<view class="display_flex_bet" @click="goto_detail(stock)">
							<view class="display_flex">
								<image v-if="stock.Image && stock.Image.length> 0 " :src="stock.Image[0]" class="stock_avatar" @click.stop="priviewImg(stock.Image[0])" mode="aspectFit"></image>
								<image src="/static/warehouse.png" class="stock_avatar" v-else></image>
								<view>
									<view class='stock_name'>{{stock.stock_name}}</view>
									<view class='stock_mobile' v-if="stock.charge &&stock.charge.nickName">负责人：{{stock.charge.nickName}}</view>
									<view class='stock_mobile' v-else-if="stock.Ncharge &&stock.Ncharge.nickName">负责人：{{stock.Ncharge.nickName}}</view>
									<view class='stock_mobile' v-else>负责人：未填写</view>
								</view>
							</view>

							<fa-icon type="angle-right" size="20" color="#999" />
						</view>
						
						<view class="right_item">
							<view class="display_flex" style="justify-content: flex-end;width: 100%;" v-if="is_choose" @click="select_this(stock)">
								<text style="color: #d93a49;">选择</text>
							</view>
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
	import staffs from "@/utils/staffs.js"

	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import loading from "@/components/Loading/index.vue"
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
				accounts: null,
				items: ['已启用', '未启用'],
				current: 0,
				disabled: false,
				type: '', //'out_choose'是调拨时的选择
			}
		},

		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');

			console.log(options)
			/*if (options.type == "choose" || options.type == "out_choose" || options.type == "choose_more") {
				that.is_choose = true
				that.type = options.type
			}*/
		},
		onShow() {
			that.getstock_list()
		},
		onUnload() {
			search_text = ""
		},
		methods: {
			//预览图片
			priviewImg(url){
				uni.previewImage({
					current:url,
					urls: [url],
				});
			},

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
			goto_detail(stock) {
				uni.setStorageSync("stock", stock)
				uni.navigateTo({
					url: "detail/detail"
				})
			},

			//选择此仓库
			select_this(item) {
				let warehouse;
				if (that.type == "choose_more") {
					warehouse = uni.getStorageSync("warehouse") || [];
				} else {
					warehouse = []
				}

				let _accounts = {};

				_accounts.stock = item;
				_accounts.reserve = 0;
				_accounts.warning_num = 0;

				if (JSON.stringify(warehouse).indexOf(JSON.stringify(_accounts)) == -1) {
					warehouse.push(_accounts);
					if (that.type == "out_choose") {
						uni.setStorageSync("out_warehouse", warehouse)
						uni.navigateBack({
							delta: 1
						})
					} else {
						uni.setStorageSync("warehouse", warehouse)
						uni.navigateBack({
							delta: 1
						})
					}
				} else {
					uni.showToast({
						title: "已选择此仓库",
						icon: "none"
					})
				}

			},

			//前去添加仓库
			goto_add() {
				let user = uni.getStorageSync("user")
				let identity = uni.getStorageSync("identity")
				
				uni.navigateTo({
					url: "../add/add"
				})
				
				/*if(user.is_vip || that.accounts.length <2){
					uni.navigateTo({
						url: "add/add"
					})
				}else{
					uni.showModal({
					    title: '提示',
					    content: '非会员最多上传2个仓库',
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
				}*/
			},

			//输入内容筛选
			input_confirm(e) {
				search_text = e.detail.value
				that.getstock_list();
			},

			//得到账户列表
			getstock_list: function() {
				const query = Bmob.Query("accounts");
				query.order("-num");
				query.include("charge", "shop","Ncharge")
				query.equalTo("parent", "==", uid);
				query.equalTo("disabled", "!=", !that.disabled);
				if (search_text) {
					query.equalTo("name", "==", {
						"$regex": "" + search_text + ".*"
					});

				}
				query.find().then(res => {
					//console.log(res)
					that.loading = false;
					let accounts = res;
					that.accounts = accounts
					
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
