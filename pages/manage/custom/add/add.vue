<template>
	<view>
		<view>
			<view class="display_flex item">
				<text style="margin-right: 20rpx;">姓名</text>
				<input placeholder="请输入姓名" v-model="name" />
			</view>

			<view class="display_flex item">
				<text style="margin-right: 20rpx;">联系地址</text>
				<input placeholder="请输入地址" v-model="address" />
			</view>

			<view class="display_flex item">
				<text style="margin-right: 20rpx;">联系电话</text>
				<input placeholder="请输入电话" v-model="phone" type="number" maxlength="11" />
			</view>

			<view class="display_flex item">
				<text style="margin-right: 20rpx;">欠款金额</text>
				<input placeholder="请输入起初欠款金额" v-model="debt" type="digit" />
			</view>
		</view>
	</view>
</template>

<script>
	import Bmob from '@/utils/bmob.js';

	let type;
	let that;
	let uid = uni.getStorageSync('uid');
	export default {
		data() {
			return {
				name: null,
				address: '',
				phone: '',
				debt: 0,
			}
		},
		onLoad(options) {
			type = options.type
			that = this;
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
		methods: {

			// #ifdef APP-PLUS
			//监听原生标题栏按钮点击事件
			onNavigationBarButtonTap(Object) {
				console.log(this.name)
				if (this.name == null) {
					uni.showToast({
						title: "请输入姓名",
						icon: "none"
					})
				} else {
					that.add_data()
				}
			},
			// #endif

			//增加数据操作
			add_data() {
				if (type == "customs") {
					const query = Bmob.Query("customs");
					const pointer = Bmob.Pointer('_User')
					const poiID = pointer.set(uid)

					query.set("custom_name", that.name)
					query.set("custom_phone", that.phone ? that.phone : '')
					query.set("custom_address", that.address ? that.address : '')
					query.set("debt", Number(that.debt))
					query.set("parent", poiID)
					//query.set("beizhu", "Bmob")
					query.save().then(res => {
						console.log(res)
						uni.showToast({
							title: "添加成功",
						})
					}).catch(err => {
						console.log(err)
					})
				} else {
					const query = Bmob.Query("producers");
					const pointer = Bmob.Pointer('_User')
					const poiID = pointer.set(uid)
					
					query.set("producer_name", that.name)
					query.set("producer_phone", that.phone ? that.phone : '')
					query.set("producer_address", that.address ? that.address : '')
					query.set("debt", Number(that.debt))
					query.set("parent", poiID)
					//query.set("beizhu", "Bmob")
					query.save().then(res => {
						console.log(res)
						uni.showToast({
							title: "添加成功",
						})
					}).catch(err => {
						console.log(err)
					})
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
