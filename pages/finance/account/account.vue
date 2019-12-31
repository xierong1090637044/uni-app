<template>
	<view style="height: 100vh;">

		<loading v-if="loading"></loading>

		<view wx:else>
			<uni-nav-bar :fixed="true" color="#333333" background-color="#FFFFFF" right-text="添加" @click-right="goto_add"></uni-nav-bar>

			<scroll-view scroll-y class="indexes" style='height:calc(100vh - 212rpx)' scroll-with-animation="true"
			 enable-back-to-top="true" v-if="accounts && accounts.length > 0">
				<view v-for="(account,index) in accounts" :key="index">
					<view class='content'>
						<view class="display_flex_bet" @click="goto_detail(account)">
							<view class="display_flex">
								<image v-if="account.type =='支付宝' " src="/static/alipay.png" class="account_avatar" @click.stop="priviewImg(account.Image[0])" mode="aspectFit"></image>
								<image v-else-if="account.type =='微信' " src="/static/wechat.png" class="account_avatar" @click.stop="priviewImg(account.Image[0])" mode="aspectFit"></image>
								<image v-else-if="account.type =='银行卡' " src="/static/bankcard.png" class="account_avatar" @click.stop="priviewImg(account.Image[0])" mode="aspectFit"></image>
								<image v-else src="/static/otherway.png" class="account_avatar" @click.stop="priviewImg(account.Image[0])" mode="aspectFit"></image>
								<view>
									<view class='account_name'>{{account.name}}</view>
									<view class='account_money'>余额：<text style="color: #f30;">￥{{account.money}}</text></view>
								</view>
							</view>

							<fa-icon type="angle-right" size="20" color="#999" />
						</view>
						
						<view class="right_item">
							<view class="display_flex" style="justify-content: flex-end;width: 100%;" v-if="is_choose" @click="select_this(account)">
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
			if (options.type == "choose") {
				that.is_choose = true
				that.type = options.type
			}
		},
		onShow() {
			that.getAccounts()
			uni.removeStorageSync("account")
		},
		onUnload() {
			search_text = ""
		},
		methods: {
			
			//选择此账号
			select_this(account) {
				let producer = uni.getStorageSync("producer")
				
				if(producer.debt > account.money){
					uni.showToast({
						icon:'none',
						title:'余额不足'
					})
					
					return
				}
				
				uni.setStorageSync("account", account)
				uni.navigateBack({
					delta: 1
				})
			},

			//前去添加账户
			goto_add() {
				let user = uni.getStorageSync("user")
				let identity = uni.getStorageSync("identity")
				
				uni.navigateTo({
					url: "../add/add"
				})
			},
			
			//去到账户详情
			goto_detail(account){
				uni.setStorageSync("account",account);
				uni.navigateTo({
					url: "../detail/detail"
				})
			},

			//输入内容筛选
			input_confirm(e) {
				search_text = e.detail.value
				that.getAccounts();
			},

			//得到账户列表
			getAccounts: function() {
				const query = Bmob.Query("accounts");
				query.order("-money");
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

	.account_name {
		font-weight: bold;
		font-size: 30rpx;
		color: #3D3D3D;
		margin-bottom: 4rpx;
	}

	.account_money {
		color: #999;
	}

	.right_item {
		width: 100%;
		border-bottom: 1rpx solid#ccc;
		padding-bottom: 10rpx;
	}

	.account_avatar {
		width: 82rpx;
		height: 70rpx;
		margin-right: 20rpx;
	}

	.content {
		padding: 10rpx 30rpx;
		background: #FFFFFF;
	}
</style>
