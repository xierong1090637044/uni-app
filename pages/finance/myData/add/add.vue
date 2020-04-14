<template>
	<view>
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" :right-text="operationDesc" @click-right="start_add">
			<view></view>
		
		</uni-nav-bar>
		<view>
			
			<view class="display_flex_bet item" style="border-bottom: 1rpx solid#F7F7F7;">
				<view style="width: 200rpx;"><text style="margin-right: 6rpx;">名称</text><text style="color: #d93a49;margin-right: 20rpx;">*</text></view>
				<input placeholder="请输入名称" v-model="name" style="width: calc(100% - 200rpx);text-align: ;" />
			</view>
			<view class="display_flex_bet item" style="border-bottom: 1rpx solid#F7F7F7;">
				<view style="width: 200rpx;"><text style="margin-right: 6rpx;">账号</text></view>
				<input placeholder="请输入账号" v-model="number" style="width: calc(100% - 200rpx)" />
			</view>
			
			<view class="display_flex_bet item" style="border-bottom: 1rpx solid#F7F7F7;" >
				<view style="width: 200rpx;"><text style="margin-right: 6rpx;">账户类型</text></view>
				<picker style="width: calc(100% - 200rpx)" :range="typeArray" @change="selectType">
					<input placeholder="请选择账户类型" disabled="true" v-model="type"/>
				</picker>
			</view>
			
			<view class="display_flex_bet item" style="border-bottom: 1rpx solid#F7F7F7;">
				<view style="width: 200rpx;"><text style="margin-right: 6rpx;">初始金额</text></view>
				<input placeholder="请输入初始金额" v-model="money" type="number" maxlength="11" style="width: calc(100% - 200rpx)" />
			</view>

			<view class="display_flex_bet item"  style="border-bottom: 1rpx solid#F7F7F7;">
				<view style="width: 200rpx;"><text style="margin-right: 20rpx;">备注</text></view>
				<input placeholder="请输入备注" v-model="beizhu" style="width: calc(100% - 200rpx)" />
			</view>

		</view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import upload from "@/utils/upload.js";
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'

	let that;
	let account;
	let uid;
	export default {
		components: {
			faIcon,
			uniNavBar
		},
		data() {
			return {
				operationDesc:"添加",
				user:uni.getStorageSync("user"),
				name: '', //名称
				number: '', //账号
				type: '', //账户类型
				money:0,
				beizhu: '', //备注
				disabled: true, //是否启用
				typeArray:['支付宝',"微信",'银行卡','其他'],
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');
		},

		onShow() {
			account = uni.getStorageSync("account");

			if (account) {
				uni.setNavigationBarTitle({
					title: '修改结算账户'
				});
				
				that.operationDesc = "修改"
				that.name = account.name
				that.number = account.number || ''
				that.money = account.money || 0
				that.type = account.type || ''
				that.beizhu = account.beizhu || ''
			}else{
				uni.setNavigationBarTitle({
					title: '新增结算账户'
				});
			}

		},
		
		onUnload() {
			uni.removeStorageSync('account')
		},

		methods: {
			
			//选择账户类型
			selectType(e){
				console.log(e)
				that.type = that.typeArray[e.detail.value]
			},
			
			start_add(){
				if (this.name == '') {
					uni.showToast({
						title: "请输入账户名称",
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
				
				const pointer = Bmob.Pointer('_User');
				let poiID = pointer.set(uid);
				
				if (account) {//修改操作
					const query = Bmob.Query('accounts');
					query.set("name", that.name);
					query.set("number", that.number);
					//if(shop) query.set("shop",shopId);
					//query.set("shop", that.warehouse_shop);
					query.set("beizhu", that.beizhu||'');
					query.set("type",that.type);
					query.set("money",Number(that.money));
					query.set("parent", poiID);
					query.set("id", account.objectId);
					query.save().then(res => {
						uni.hideLoading();
						console.log(res)
						uni.showToast({
							title: "修改成功"
						})
					}).catch(err => {
						console.log(err)

					})
				} else {

					const query = Bmob.Query("accounts");
					query.equalTo("parent", "==", uid);
					query.equalTo("name", "==", that.name);
					query.find().then(res => {
						console.log(res)
						if (res.length == 0) {
							const query = Bmob.Query('accounts');
							query.set("name", that.name);
							query.set("number", that.number);
							query.set("beizhu", that.beizhu||'');
							query.set("money",Number(that.money));
							query.set("type",that.type);
							//query.set("disabled", !that.disabled);
							query.set("parent", poiID);
							query.save().then(res => {
								console.log(res)
								uni.hideLoading();
								uni.showToast({
									title: "添加成功"
								})
								
								that.name = '' //名称
								that.number = '' //排序
								that.beizhu = '' //备注
								that.type = ''
								that.money = '' //初始金额
							}).catch(err => {
								console.log(err)

							})
						} else {
							uni.showToast({
								title: "已存在此账户",
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
	}

	.rights_item {
		margin-bottom: 20rpx;
	}
</style>
