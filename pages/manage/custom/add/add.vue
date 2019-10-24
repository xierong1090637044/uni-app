<template>
	<view>
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="添加" @click-right="add_data">
			<view></view>

		</uni-nav-bar>
		<view>
			<view class="display_flex item">
				<view style="margin-right: 20rpx;width: 160rpx;">姓名</view>
				<input placeholder="请输入姓名" v-model="name" style="width: calc(100% - 200rpx)" />
			</view>

			<view class="display_flex item">
				<view style="margin-right: 20rpx;width: 160rpx;">联系地址</view>
				<input placeholder="请输入地址" v-model="address" style="width: calc(100% - 200rpx)" />
			</view>

			<view class="display_flex item">
				<view style="margin-right: 20rpx;width: 160rpx;">联系电话</view>
				<input placeholder="请输入电话" v-model="phone" type="number" maxlength="11" style="width: calc(100% - 200rpx)"/>
			</view>
			
			<view class="display_flex item">
				<view style="margin-right: 20rpx;width: 160rpx;">折扣率</view>
				<input placeholder="请输入折扣率" v-model="discount" type="number" maxlength="3" style="width: calc(100% - 200rpx)" @input="getDiscount"/>
				<text>%</text>
			</view>

			<view class="display_flex item">
				<view style="margin-right: 20rpx;width: 160rpx;">欠款金额</view>
				<input placeholder="请输入起初欠款金额" v-model="debt" type="digit" style="width: calc(100% - 200rpx)" />
			</view>
		</view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'

	let type;
	let that;
	let custom;
	let uid;
	export default {
		components: {
			uniNavBar,
		},
		data() {
			return {
				name: '',
				address: '',
				phone: '',
				debt: 0,
				discount:100,//折扣率
			}
		},
		onLoad(options) {
			type = options.type
			that = this;
			uid = uni.getStorageSync('uid');
			//type = "customs"

			if (type == "customs") {
				uni.setNavigationBarTitle({
					title: '新增客户'
				});
			} else {
				uni.setNavigationBarTitle({
					title: '新增供货商'
				});
			}
		},

		onShow() {

			custom = uni.getStorageSync("customs");

			if (custom) {
				type = uni.getStorageSync("custom_type");
				if (type == "customs") {
					that.name = custom.custom_name
					that.address = custom.custom_address
					that.phone = custom.custom_phone
					that.debt = custom.debt
				} else {
					that.name = custom.producer_name
					that.address = custom.producer_address
					that.phone = custom.producer_phone
					that.debt = custom.debt
				}
			} else {
				if (type == "customs") {
					uni.setNavigationBarTitle({
						title: '修改客户'
					});
				} else {
					uni.setNavigationBarTitle({
						title: '修改供货商'
					});
				}
			}
		},

		onUnload() {
			uni.removeStorageSync("custom_type")
			uni.removeStorageSync("customs")
		},

		methods: {
			
			//得到输入的折扣率
			getDiscount(e){
				//console.log(e)
				let discount = Number(e.detail.value)
				if(discount >=100){
					that.discount =100
				}
			},

			//增加数据操作
			add_data() {
				if (this.name == null) {
					uni.showToast({
						title: "请输入姓名",
						icon: "none"
					})
				} else {
					if (type == "customs") {
						const query = Bmob.Query("customs");
						const pointer = Bmob.Pointer('_User')
						const poiID = pointer.set(uid)

						if (custom) query.set("id", custom.objectId)
						query.set("custom_name", that.name)
						query.set("custom_phone", that.phone ? that.phone : '')
						query.set("custom_address", that.address ? that.address : '')
						query.set("debt", Number(that.debt))
						query.set("discount", Number(that.discount))
						query.set("parent", poiID)
						//query.set("beizhu", "Bmob")
						query.save().then(res => {
							console.log(res)
							if (custom) {
								uni.showToast({
									title: "修改成功",
								})
							} else {
								uni.showToast({
									title: "添加成功",
								})
							}

						}).catch(err => {
							console.log(err)
						})
					} else {
						const query = Bmob.Query("producers");
						const pointer = Bmob.Pointer('_User')
						const poiID = pointer.set(uid)

						if (custom) query.set("id", custom.objectId)
						query.set("producer_name", that.name)
						query.set("producer_phone", that.phone ? that.phone : '')
						query.set("producer_address", that.address ? that.address : '')
						query.set("debt", Number(that.debt))
						query.set("discount", Number(that.discount))
						query.set("parent", poiID)
						//query.set("beizhu", "Bmob")
						query.save().then(res => {
							console.log(res)
							if (custom) {
								uni.showToast({
									title: "修改成功",
								})
							} else {
								uni.showToast({
									title: "添加成功",
								})
							}
						}).catch(err => {
							console.log(err)
						})
					}
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
</style>
