<template>
	<view>
		<view>
			<view class="display_flex item">
				<text style="margin-right: 20rpx;">姓名</text>
				<input placeholder="请输入姓名" v-model="staff_name" style="width: calc(100% - 200rpx)" />
			</view>
			<view class="display_flex item">
				<text style="margin-right: 20rpx;">账号</text>
				<input placeholder="请输入手机号" v-model="staff_phone" type="number" maxlength="11" style="width: calc(100% - 200rpx)" />
			</view>
			<view class="display_flex item">
				<text style="margin-right: 20rpx;">密码</text>
				<input placeholder="请输入登录密码" v-model="staff_password" type="number" maxlength="11" style="width: calc(100% - 200rpx)" />
			</view>
			<view class="display_flex item">
				<text style="margin-right: 20rpx;">联系地址</text>
				<input placeholder="请输入地址" v-model="staff_address" style="width: calc(100% - 200rpx)" />
			</view>
			<navigator class="display_flex_bet item" hover-class="none" url="../../shops/shops?type=choose">
				<view class="display_flex">
					<text style="margin-right: 20rpx;">门店</text>
					<input placeholder="请选择门店" v-model="shop_name" style="width: calc(100% - 200rpx)" />
				</view>
			
				<fa-icon type="angle-right" size="20" color="#ddd"></fa-icon>
			</navigator>
			<view class="display_flex_bet item" style="margin-bottom:60rpx">
				<text style="margin-right: 20rpx;">启用</text>
				<switch :checked="disabled" @change="switchChange" />
			</view>

			<uni-collapse>
				<uni-collapse-item :show-animation="true" title="管理权限">
					<view style="padding: 30rpx;">
						<checkbox-group @change="checkboxChange">
							<view class="display_flex rights_item" v-for="(item,index) in manage" :key="index">
								<checkbox :value="index" :checked="item.checked" style="transform:scale(0.9)" class="round blue"/>
								<text style="margin-left: 20rpx;">{{item.name}}</text>
							</view>
						</checkbox-group>
					</view>
				</uni-collapse-item>
			</uni-collapse>

			<view>
				<uni-collapse>
					<uni-collapse-item :show-animation="true" title="查看权限">
						<view style="padding: 30rpx;">
							<checkbox-group @change="checkboxChange_record">
								<view class="display_flex rights_item" v-for="(item,index) in recode" :key="index">
									<checkbox :value="index" :checked="item.checked"  style="transform:scale(0.9)" class="round blue"/>
									<text style="margin-left: 20rpx;">{{item.name}}</text>
								</view>
							</checkbox-group>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>


		</view>
	</view>
</template>

<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import Bmob from '@/utils/bmob.js';
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'

	let that;
	let shopId;
	let shop;//门店
	let staff;
	let uid;
	let rights = {};
	export default {
		components: {
			faIcon,
			uniCollapse,
			uniCollapseItem,
		},
		data() {
			return {
				disabled: true, //是否启用
				shop_name:'',
				staff_name: '',
				staff_address: '',
				staff_phone: '',
				staff_password:'',
				manage: [{
						id: 1,
						name: '产品管理'
					},
					{
						id: 2,
						name: '员工管理'
					},
					{
						id: 3,
						name: '仓库管理'
					},
					{
						id: 4,
						name: '门店管理'
					},
					{
						id: 5,
						name: '客户管理'
					},
					{
						id: 6,
						name: '产品类别管理'
					}
				],
				recode: [{
						id: 1,
						name: '入库记录'
					},
					{
						id: 2,
						name: '出库记录'
					},
					{
						id: 3,
						name: '客户退货记录'
					},
					{
						id: 4,
						name: '盘点记录'
					},
					{
						id: 5,
						name: '经营状况'
					},
				],
				current: [],
				recodecurrent: [],
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');
		},

		onShow() {
			staff = uni.getStorageSync("staff");
			shop = uni.getStorageSync("shop");
			
			if (staff) {
				uni.setNavigationBarTitle({
					title:"修改员工信息"
				});
				that.staff_name = staff.username
				that.staff_address = staff.address
				that.staff_phone = staff.mobilePhoneNumber
				that.staff_password = staff.password
				
				for(let i of staff.rights.current)
				{
					console.log(i)
					that.manage[i].checked = true;
				}
				
				for(let i of staff.rights.recodecurrent)
				{
					that.recode[i].checked = true;
				}
			}
			
			if(shop){
				that.shop_name = shop.name
				
				const pointer = Bmob.Pointer('shops');
				shopId = pointer.set(shop.objectId);
			}

		},

		methods: {
			
			//启用的switech
			switchChange(e){
				that.disabled = e.detail.value;
			},

			//管理权限
			checkboxChange(e) {
				rights.current = e.detail.value;

			},

			//记录权限
			checkboxChange_record(e) {
				rights.recodecurrent = e.detail.value;
			},

			// #ifdef APP-PLUS
			//监听原生标题栏按钮点击事件
			onNavigationBarButtonTap(Object) {
				console.log(this.staff_name)
				if (this.staff_name == null) {
					uni.showToast({
						title: "请输入姓名",
						icon: "none"
					})
				} else if (this.staff_phone.length < 11) {
					uni.showToast({
						title: "请输入正确的手机号",
						icon: "none"
					})
				}else if(this.staff_password.length <6){
					uni.showToast({
						title: "密码不能少于6位",
						icon: "none"
					})
				} else {
					that.add_data()
				}
			},
			// #endif

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

					const query = Bmob.Query('staffs');
					query.set("username", that.staff_name);
					query.set("nickName", that.staff_name);
					query.set("password", that.staff_password);
					query.set("mobilePhoneNumber", that.staff_phone);
					query.set("rights", rights);
					query.set("address", (that.staff_address == null) ? '' : that.staff_address);
					query.set("avatarUrl", "http://bmob-cdn-23134.b0.upaiyun.com/2019/04/29/4705b31340bfff8080c068f52fd17e2c.png");
					query.set("masterId", poiID);
					query.set("disabled", !that.disabled);
					if(shop) query.set("shop",shopId);
					query.set("id", staff.objectId);
					query.save().then(res => {
						console.log(res)
						uni.showToast({
							title: "修改成功"
						})
					}).catch(err => {
						console.log(err)

					})
				} else {

					const query = Bmob.Query("staffs");
					query.equalTo("masterId", "==", uid);
					query.equalTo("mobilePhoneNumber", "==", that.staff_phone);
					query.find().then(res => {
						console.log(res)
						if (res.length == 0) {
							uni.hideLoading();

							const userid = uni.getStorageSync("uid");
							const pointer = Bmob.Pointer('_User');
							let poiID = pointer.set(userid);

							const query = Bmob.Query('staffs');
							query.set("username", that.staff_name);
							if(shop) query.set("shop",shopId);
							query.set("nickName", that.staff_name);
							query.set("password", that.staff_password);
							query.set("mobilePhoneNumber", that.staff_phone);
							query.set("rights", rights);
							query.set("address", (that.staff_address == null) ? '' : that.staff_address);
							query.set("avatarUrl", "http://bmob-cdn-23134.b0.upaiyun.com/2019/04/29/4705b31340bfff8080c068f52fd17e2c.png");
							query.set("masterId", poiID);
							query.set("have_out", 0);
							query.set("disabled", !that.disabled);
							query.save().then(res => {
								console.log(res)
								uni.showToast({
									title: "添加成功"
								})
							}).catch(err => {
								console.log(err)

							})
						} else {
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
