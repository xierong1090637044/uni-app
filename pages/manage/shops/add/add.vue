<template>
	<view>
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="添加" @click-right="start_add">
			<view></view>
		
		</uni-nav-bar>
		<view>
			<view class="display_flex item">
				<text style="margin-right: 6rpx;">门店名字</text><text style="color: #d93a49;margin-right: 20rpx;">*</text>
				<input placeholder="请输入门店名字" v-model="shop_name" style="width: calc(100% - 200rpx)" />
			</view>
			
			<view class="display_flex item">
				<text style="margin-right: 20rpx;">门店地址</text>
				<input placeholder="请输入门店地址" v-model="shop_address" style="width: calc(100% - 200rpx)" />
			</view>
			<view class="display_flex item">
				<text style="margin-right: 20rpx;">门店电话</text>
				<input placeholder="请输入门店电话" v-model="shop_phone" style="width: calc(100% - 200rpx)" type="number" maxlength="11"/>
			</view>
			<view class="display_flex item">
				<text style="margin-right: 6rpx;">排序</text><text style="color: #d93a49;margin-right: 20rpx;">*</text>
				<input placeholder="请输入排序(数值越小,排列越靠前)" v-model="shop_num" type="number" maxlength="11" style="width: calc(100% - 200rpx)" />
			</view>
			<view class="display_flex_bet item" style="margin-bottom:60rpx">
				<text style="margin-right: 20rpx;">启用</text>
				<switch :checked="disabled" @change="switchChange" />
			</view>

			<view class="display_flex item">
				<text style="margin-right: 20rpx;">备注</text>
				<input placeholder="请输入备注" v-model="shop_beizhu" style="width: calc(100% - 200rpx)" />
			</view>

		</view>
	</view>
</template>

<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import Bmob from '@/utils/bmob.js';
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'

	let that;
	let shop;//仓库
	let charge;//负责人
	let uid;
	export default {
		components: {
			faIcon,
			uniNavBar
		},
		data() {
			return {
				disabled: true, //是否启用
				shop_name: '', //名称
				shop_address: '', //地址
				shop_num: 0, //排序
				shop_phone: '', //门店电话
				shop_beizhu:''
			}
		},
		onLoad(options) {
			that = this;
			uid = uni.getStorageSync('uid');
		},

		onShow() {
			shop = uni.getStorageSync("shop");

			if (shop) {
				uni.setNavigationBarTitle({
					title: '修改门店'
				});
				that.shop_name = shop.name
				that.shop_address = shop.address
				that.shop_phone = shop.phone
				that.shop_num = shop.num
				that.shop_beizhu = shop.beizhu
			}else{
				uni.setNavigationBarTitle({
					title: '新增门店'
				});
			}

		},
		onUnload() {
			uni.removeStorageSync("shop")
		},

		methods: {
			
			//启用的switech
			switchChange(e){
				that.disabled = e.detail.value;
			},
			
			start_add(){
				if (this.shop_name == '') {
					uni.showToast({
						title: "请输入门店名字",
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
				
				if (shop) {//修改操作
					const query = Bmob.Query('shops');
					query.set("name", that.shop_name);
					query.set("num", Number(that.shop_num));
					query.set("address", that.shop_address);
					query.set("phone", that.shop_phone);
					query.set("beizhu", that.shop_beizhu);
					query.set("parent", poiID);
					query.set("disabled", !that.disabled);
					query.set("id", shop.objectId);
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

					const query = Bmob.Query("shops");
					query.equalTo("parent", "==", uid);
					query.equalTo("name", "==", that.shop_name);
					query.find().then(res => {
						console.log(res)
						if (res.length == 0) {
							const query = Bmob.Query('shops');
							query.set("name", that.shop_name);
							query.set("num", Number(that.shop_num));
							query.set("address", that.shop_address);
							query.set("phone", that.shop_phone);
							query.set("beizhu", that.shop_beizhu);
							query.set("have_out", 0);
							query.set("disabled", !that.disabled);
							query.set("parent", poiID);
							query.save().then(res => {
								console.log(res)
								uni.hideLoading();
								uni.showToast({
									title: "添加成功"
								})
								
								that.disabled = true, //是否启用
								that.shop_name = '', //名称
								that.shop_address = '', //地址
								that.shop_num = 0, //排序
								that.shop_phone= '', //门店电话
								that.shop_beizhu =''
							}).catch(err => {
								console.log(err)

							})
						} else {
							uni.showToast({
								title: "已存在此门店",
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
