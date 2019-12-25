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
			<navigator class="display_flex_bet item" hover-class="none" url="../../shops/shops?type=choose">
				<view class="display_flex">
					<text style="margin-right: 20rpx;">门店</text>
					<input placeholder="请选择门店" v-model="shop_name" style="width: calc(100% - 200rpx)" />
				</view>

				<fa-icon type="angle-right" size="20" color="#ddd"></fa-icon>
			</navigator>
			<!--<navigator class="display_flex_bet item" hover-class="none" url="../../warehouse/warehouse?type=choose" v-if="current.indexOf('2') != -1">
				<view class="display_flex">
					<text style="margin-right: 20rpx;">仓库</text>
					<input placeholder="请选择仓库" :value="stock?stock.stock_name:''" style="width: calc(100% - 200rpx)" />
				</view>
			
				<fa-icon type="angle-right" size="20" color="#ddd"></fa-icon>
			</navigator>-->
			<view class="display_flex_bet item" style="margin-bottom:60rpx">
				<text style="margin-right: 20rpx;">启用</text>
				<switch :checked="disabled" @change="switchChange" />
			</view>

			<uni-collapse>
				<uni-collapse-item :show-animation="true" title="管理权限">
					<view style="padding: 30rpx;">
						<checkbox-group @change="checkboxChange">
							<view class="rights_item" v-for="(item,index) in manage" :key="''+index">
								<view class="display_flex">
									<checkbox :value="''+index" :checked="item.checked" style="transform:scale(0.9)" class="round blue" />
									<text style="margin-left: 20rpx;">{{item.name}}</text>
								</view>

								<view v-if="index == 2" style="padding-left: 80rpx;">
									<checkbox-group @change="checkstockChange" v-if="current.indexOf('2') != -1">
										<view class="display_flex rights_item" v-for="(item,index) in stocks" :key="index">
											<checkbox :value="item.objectId" :checked="item.checked" style="transform:scale(0.9)" class="round blue" />
											<text style="margin-left: 20rpx;">{{item.name}}</text>
										</view>
									</checkbox-group>
								</view>
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
								<view class="display_flex rights_item" v-for="(item,index) in recode" :key="''+index">
									<checkbox :value="''+index" :checked="item.checked" style="transform:scale(0.9)" class="round blue" />
									<text style="margin-left: 20rpx;">{{item.name}}</text>
								</view>
							</checkbox-group>
						</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
			<view>
				<uni-collapse>
					<uni-collapse-item :show-animation="true" title="其他权限">
						<view style="padding: 30rpx;">
							<checkbox-group @change="checkboxChange_other">
								<view class="display_flex rights_item" v-for="(item,index) in others" :key="''+index">
									<checkbox :value="''+index" :checked="item.checked" style="transform:scale(0.9)" class="round blue" />
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
	import Bmob from "hydrogen-js-sdk";
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'

	let that;
	let shopId;
	let shop; //门店
	let staff;
	let uid;
	let rights = {};
	export default {
		components: {
			faIcon,
			uniCollapse,
			uniCollapseItem,
			uniNavBar
		},
		data() {
			return {
				select_stocks: [], //选中的仓库
				stocks: uni.getStorageSync("_warehouse"), //管理的仓库
				modify_desc: "添加",
				disabled: true, //是否启用
				shop_name: '',
				staff_name: '',
				staff_address: '',
				staff_phone: '',
				staff_password: '',
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
						name: '产品类别管理'
					},
					{
						id: 5,
						name: '单品统计'
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
						name: '采购记录'
					},
					{
						id: 4,
						name: '调拨记录'
					},
					{
						id: 5,
						name: '盘点记录'
					},
					{
						id: 6,
						name: '经营状况'
					},
					{
						id: 7,
						name: '报表查看'
					},
				],
				others: [{
					id: 1,
					name: '进价隐藏'
				}, {
					id: 3,
					name: '采购'
				}, {
					id: 4,
					name: '审核'
				}],
				current: [],
				recodecurrent: [],
				othercurrent: [],
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');

			const query = Bmob.Query("stocks");
			query.order("-num");
			query.include("charge", "shop", "Ncharge")
			query.equalTo("parent", "==", uid);
			query.equalTo("disabled", "!=", true);
			query.find().then(res => {
				let stocks = res;
				let _warehouse = []
				for (let item of stocks) {
					let warehouse = {}
					warehouse.name = item.stock_name
					warehouse.objectId = item.objectId
					_warehouse.push(warehouse)
				}
				uni.setStorageSync("_warehouse", _warehouse)
			})
		},

		onShow() {
			staff = uni.getStorageSync("staff");
			shop = uni.getStorageSync("shop");

			if (uni.getStorageSync("warehouse") && uni.getStorageSync("warehouse").length > 0) {
				that.stock = uni.getStorageSync("warehouse")[0].stock;
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
				that.current = []
				that.recodecurrent = []
				that.othercurrent = []

				if (staff.rights.current) {
					for (let i of staff.rights.current) {
						//console.log(i)
						that.manage[i].checked = true;
						that.current.push(i)
					}
				}

				if (staff.rights.recodecurrent) {
					for (let i of staff.rights.recodecurrent) {
						that.recode[i].checked = true;
						that.recodecurrent.push(i)
					}
				}

				if (staff.rights.othercurrent) {
					for (let i of staff.rights.othercurrent) {
						that.others[i].checked = true;
						that.othercurrent.push(i)
					}
				}

				rights.current = that.current
				rights.recodecurrent = that.recodecurrent
				rights.othercurrent = that.othercurrent
			}

			if (shop) {
				that.shop_name = shop.name

				const pointer = Bmob.Pointer('shops');
				shopId = pointer.set(shop.objectId);
			}

		},

		methods: {

			//仓库多选器
			checkstockChange(e) {
				that.select_stocks = e.detail.value
			},

			//启用的switech
			switchChange(e) {
				that.disabled = e.detail.value;
			},

			//管理权限
			checkboxChange(e) {
				that.current = e.detail.value
				rights.current = e.detail.value;
			},

			//记录权限
			checkboxChange_record(e) {
				that.recodecurrent = e.detail.value
				rights.recodecurrent = e.detail.value;
			},

			//其他权限
			checkboxChange_other(e) {
				that.othercurrent = e.detail.value
				rights.othercurrent = e.detail.value;
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
					query.set("rights", rights);
					query.set("address", (that.staff_address == null) ? '' : that.staff_address);
					query.set("avatarUrl", "http://bmob-cdn-23134.b0.upaiyun.com/2019/04/29/4705b31340bfff8080c068f52fd17e2c.png");
					query.set("masterId", poiID);
					query.set("disabled", !that.disabled);
					query.set("stocks", that.select_stocks);
					query.set("identity", 2);
					if (shop) query.set("shop", shopId);
					query.set("id", staff.objectId);
					query.save().then(res => {
						console.log(res)
						uni.showToast({
							title: "修改成功"
						})
						that.select_stocks = []
					}).catch(err => {
						console.log(err)

					})
				} else {

					const query = Bmob.Query("_User");
					query.equalTo("masterId", "==", uid);
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
							if (shop) query.set("shop", shopId);
							query.set("stocks", that.select_stocks);
							query.set("nickName", that.staff_name);
							query.set("password", that.staff_password);
							query.set("pwd", that.staff_password);
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

								that.select_stocks = []
							}).catch(err => {
								if (err.code == 209) {
									uni.showToast({
										title: "已存在此账号",
										icon: "none"
									})
								}
							})
						} else {

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
