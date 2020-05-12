<template>
	<view>
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" :right-text="modify_desc" @click-right="start_add">
		</uni-nav-bar>
		<view>
			<view class="display_flex item">
				<text style="margin-right: 20rpx;">姓名</text>
				<input placeholder="请输入姓名" v-model="staff_name" style="width: calc(100% - 200rpx)" />
			</view>
			<view class="display_flex item">
				<text style="margin-right: 20rpx;">账号</text>
				<input placeholder="手机号(员工不用注册,直接在员工登陆界面输入即可)" v-model="staff_phone" type="number" maxlength="11" style="width: calc(100% - 200rpx)" />
			</view>
			<view class="display_flex item">
				<text style="margin-right: 20rpx;">密码</text>
				<input placeholder="请输入登录密码" v-model="staff_password" type="number" maxlength="11" style="width: calc(100% - 200rpx)" />
			</view>
			<view class="display_flex item">
				<text style="margin-right: 20rpx;">联系地址</text>
				<input placeholder="请输入地址" v-model="staff_address" style="width: calc(100% - 200rpx)" />
			</view>
			<!--<navigator class="display_flex_bet item" hover-class="none" url="../../shops/shops?type=choose">
				<view class="display_flex">
					<text style="margin-right: 20rpx;">门店</text>
					<input placeholder="请选择门店" v-model="shop_name" style="width: calc(100% - 200rpx)" disabled="true"/>
				</view>

				<fa-icon type="angle-right" size="20" color="#ddd"></fa-icon>
			</navigator>-->
			
			<navigator class="display_flex_bet item" hover-class="none" url="../authAdd/authAdd">
				<view class="display_flex">
					<text style="margin-right: 20rpx;">权限分配</text>
					<view placeholder="权限分配" style="width: calc(100% - 200rpx)" />
				</view>
			
				<fa-icon type="angle-right" size="20" color="#ddd"></fa-icon>
			</navigator>
			<view class="display_flex_bet item" style="margin-bottom:60rpx">
				<text style="margin-right: 20rpx;">启用</text>
				<switch :checked="disabled" @change="switchChange" />
			</view>
		</view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'

	let that;
	let shopId;
	let shop; //门店
	let staff;
	let uid;
	let rights = {
		current:[],
		analysisCurrent:[],
		moneyCurrent:[],
		recodecurrent:[],
		othercurrent:[],
	};
	export default {
		components: {
			faIcon,
			uniNavBar
		},
		data() {
			return {
				stocks: uni.getStorageSync("_warehouse"), //管理的店仓
				modify_desc: "添加",
				disabled: true, //是否启用
				shop_name: '',
				staff_name: '',
				staff_address: '',
				staff_phone: '',
				staff_password: '',
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');
		},

		onShow() {
			staff = uni.getStorageSync("staff");
			if(uni.getStorageSync("staffRights")){
				rights = uni.getStorageSync("staffRights")
			}
			
			if (staff) {
				uni.setNavigationBarTitle({
					title: "修改员工信息"
				});
				that.modify_desc = "修改"
				that.shop_name = (staff.shop) ? staff.shop.name : ''
				that.staff_name = staff.nickName
				that.staff_address = staff.address
				that.staff_phone = staff.mobilePhoneNumber
				that.staff_password = staff.pwd || ""
				uni.setStorageSync("staffRights",staff.rights)
			}
		},

		methods: {
			//启用的switech
			switchChange(e) {
				that.disabled = e.detail.value;
			},

			start_add() {
				if (this.staff_name == null) {
					uni.showToast({
						title: "请输入姓名",
						icon: "none"
					})
				} else if (this.staff_phone.length < 11) {
					uni.showToast({
						title: "账号不能少于11位",
						icon: "none"
					})
				} else if (this.staff_password == '' || this.staff_password == null || this.staff_password == undefined) {
					uni.showToast({
						title: "请输入密码",
						icon: "none"
					})
				} else if (this.staff_password.length < 6) {
					uni.showToast({
						title: "密码不能少于6位",
						icon: "none"
					})
				} else {
					that.add_data()
				}
			},

			//增加数据操作
			add_data() {
				uni.showLoading({
					title: '上传中...'
				})

				if (staff) {
					uni.hideLoading();
					const userid = uni.getStorageSync("uid");
					const pointer = Bmob.Pointer('_User');
					let poiID = pointer.set(userid);

					const query = Bmob.Query("_User");
					query.set("username", that.staff_phone);
					query.set("nickName", that.staff_name);
					query.set("password", that.staff_password);
					query.set("pwd", that.staff_password);
					query.set("mobilePhoneNumber", that.staff_phone);
					//query.set("rights", rights);
					query.set("address", (that.staff_address == null) ? '' : that.staff_address);
					query.set("avatarUrl", "http://bmob-cdn-23134.b0.upaiyun.com/2019/04/29/4705b31340bfff8080c068f52fd17e2c.png");
					//query.set("masterId", poiID);
					query.set("disabled", !that.disabled);
					//query.set("stocks", rights.select_stocks || []);
					query.set("identity", 2);
					//if (shop) query.set("shop", shopId);
					query.set("id", staff.objectId);
					query.save().then(res => {
						//console.log(res)
						that.select_stocks = []
						uni.removeStorageSync("staffRights")
						setTimeout(function(){
							uni.showToast({
								title: "修改成功"
							})
						},1000)
						uni.navigateBack({
							delta:2
						})
					}).catch(err => {
						console.log(err)

					})
				} else {

					const query = Bmob.Query("_User");
					query.equalTo("mobilePhoneNumber", "==", that.staff_phone);
					query.find().then(res => {
						console.log(res)
						if (res.length == 0) {
							uni.hideLoading();

							const userid = uni.getStorageSync("uid");
							const pointer = Bmob.Pointer('_User');
							let poiID = pointer.set(userid);

							const query = Bmob.Query("_User");
							query.set("username", that.staff_phone);
							//if (shop) query.set("shop", shopId);
							query.set("stocks", rights.select_stocks || []);
							query.set("nickName", that.staff_name);
							query.set("password", that.staff_password);
							query.set("pwd", that.staff_password);
							query.set("mobilePhoneNumber", that.staff_phone);
							query.set("rights", rights);
							query.set("address", that.staff_address || '');
							query.set("avatarUrl", "https://bmob-cdn-23134.bmobcloud.com/2019/07/09/575f6d96402ae0588042d73e90f2ed79.png");
							query.set("masterId", poiID);
							query.set("have_out", 0);
							query.set("identity", 2);
							query.set("disabled", !that.disabled);
							query.save().then(res => {
								console.log(res)
								uni.showToast({
									title: "添加成功"
								})

								that.select_stocks = []
								uni.removeStorageSync("staffRights")
							}).catch(err => {
								console.log(err)
								if (err.code == 209) {
									uni.showToast({
										title: "已存在此账号",
										icon: "none"
									})
								}
							})
						} else {
							uni.hideLoading();
							uni.showToast({
								title: "已存在此账号",
								icon: "none"
							})
						}

					});

				}


			},
		}
	}
</script>

<style>
	page {
		background: #FAFAFA;
	}

	.item {
		padding: 20rpx 30rpx;
		background: #FFFFFF;
		border-bottom: 1rpx solid#f6f5ec;
	}

	.rights_item {
		margin-bottom: 20rpx;
	}
</style>
