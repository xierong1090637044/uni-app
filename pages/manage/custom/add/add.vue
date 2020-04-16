<template>
	<view>
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" :right-text="textDesc" @click-right="add_data">
			<view></view>

		</uni-nav-bar>
		<view>
			
			<view style='background: #fff;padding: 0 30rpx;' class="normalBorder">
				<view class="notice_text">上传客户头像(会员可用)</view>
			
				<view style="width: 100%;padding: 20rpx 0;">
					<view class="upload_image display_flex">
						<view v-if="Images.length > 0" style="position: relative;" v-for="(url,index) in Images" :key="index">
							<image :src="url" style="width: 180rpx;height: 180rpx;"></image>
							<fa-icon type="times-circle-o" size="20" color="#426ab3" style="position: absolute;top:-10rpx;right:-10rpx;"
							 @click="removeImg(index)"></fa-icon>
						</view>
						<view v-if="Images.length == 0" style="width: 180rpx;height: 180rpx;line-height:220rpx;text-align:center;border:1rpx solid#ccc;border-radius:16rpx"
						 @click="upload_image">
							<fa-icon type="plus-square-o" size="40" color="#426ab3"></fa-icon>
						</view>
					</view>
				</view>
			</view>
			
			<view class="display_flex_bet item normalBorder">
				<view style="margin-right: 20rpx;width: 160rpx;">姓名<text style="color: #d93a49;">*</text></view>
				<input placeholder="请输入姓名" v-model="name" style="width: calc(100% - 200rpx)" class="rightInput"/>
			</view>
			
			<navigator class="display_flex_bet item normalBorder" hover-class="none" url="/pages/manage/customClass/customClass?type=choose">
				<view style="margin-right: 20rpx;width: 160rpx;">客户类别</view>
				<input placeholder="请选择客户分类" v-model="customClass.class_text" style="width: calc(100% - 200rpx)" class="rightInput" :disabled="true"/>
				
				<fa-icon type="angle-right" size="20" color="#999" style="margin-left: 20rpx;"></fa-icon>
			</navigator>
			
			<view class="display_flex_bet item normalBorder">
				<view style="margin-right: 20rpx;width: 320rpx;">订货平台登陆账号<text style="color: #d93a49;">*</text></view>
				<input placeholder="系统自动生成" v-model="username" style="width: calc(100% - 200rpx)" class="rightInput" disabled="true"/>
			</view>
			
			<view class="display_flex_bet item normalBorder">
				<view style="margin-right: 20rpx;width: 320rpx;">订货平台登陆密码<text style="color: #d93a49;">*</text></view>
				<input placeholder="订货平台登陆密码" v-model="password" style="width: calc(100% - 200rpx)" class="rightInput" maxlength="11"/>
			</view>

			<view class="display_flex_bet item normalBorder">
				<view style="margin-right: 20rpx;width: 160rpx;">联系地址</view>
				<input placeholder="请输入地址" v-model="address" style="width: calc(100% - 200rpx)"  class="rightInput"/>
			</view>

			<view class="display_flex_bet item normalBorder">
				<view style="margin-right: 20rpx;width: 160rpx;">联系电话</view>
				<input placeholder="请输入电话" v-model="phone" type="number" maxlength="11" style="width: calc(100% - 200rpx)"  class="rightInput"/>
			</view>

			<view class="display_flex_bet item normalBorder">
				<view style="margin-right: 20rpx;width: 160rpx;">折扣率</view>
				<input placeholder="请输入折扣率" v-model="discount" type="number" maxlength="3" style="width: calc(100% - 200rpx)"
				 @input="getDiscount" class="rightInput" />
				<text style="margin-left: 20rpx;">%</text>
			</view>

			<view class="display_flex_bet item">
				<view style="margin-right: 20rpx;width: 160rpx;">期初欠款</view>
				<input placeholder="请输入期初欠款金额" v-model="debt" type="digit" style="width: calc(100% - 200rpx)"  class="rightInput"/>
			</view>
		</view>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	import upload from "@/utils/upload.js";
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
				username:'',
				password:'',
				Images:[],
				name: '',
				address: '',
				phone: '',
				debt: 0,
				discount: 100, //折扣率
				textDesc:'添加',
				customClass:{}
			}
		},
		onLoad(options) {
			type = options.type
			that = this;
			uid = uni.getStorageSync('uid');
			uni.removeStorageSync("customCategory")
			//type = "customs"
		},

		onShow() {

			custom = uni.getStorageSync("customs");

			if (custom) {//修改模式
				type = uni.getStorageSync("custom_type");
				uni.setNavigationBarTitle({
					title: '修改客户'
				});
				that.textDesc = "修改";
				that.Images = custom.Images || [];
				that.name = custom.custom_name || '';
				that.address = custom.custom_address || '';
				that.phone = custom.custom_phone || '';
				that.debt = custom.debt || 0;
				that.discount = custom.discount || 100 ;
				that.username = custom.username || '';
				that.password = custom.password || '';
			}else{
				uni.setNavigationBarTitle({
					title: '新增客户'
				});
			}
			
			if(uni.getStorageSync("customCategory")){
				that.customClass = uni.getStorageSync("customCategory")
			}
		},

		onUnload() {
			uni.removeStorageSync("custom_type");
			uni.removeStorageSync("customs");
			uni.removeStorageSync("customCategory")
		},

		methods: {
			
			//数据重置
			handleData(){
				that.Images =  [];
				that.name =  '';
				that.address =  '';
				that.phone =  '';
				that.debt =  0;
				that.discount = 100 ;
			},
			
			//移除此张照片
			removeImg(index) {
				that.Images.splice(index, 1)
				that.Images = that.Images
			},
			
			//上传凭证图
			upload_image() {
				upload.upload_image(1).then(res => {
					that.Images = res
				})
			},

			//得到输入的折扣率
			getDiscount(e) {
				//console.log(e)
				let discount = Number(e.detail.value)
				if (discount >= 100) {
					that.discount = 100
				}
			},

			//增加数据操作
			add_data() {
				if (that.name == null || that.name == "") {
					uni.showToast({
						title: "请输入姓名",
						icon: "none"
					})
				} else {
					const query = Bmob.Query("customs");
					const pointer = Bmob.Pointer('_User')
					const poiID = pointer.set(uid)

					if (custom) query.set("id", custom.objectId)
					query.set("custom_name", that.name)
					query.set("custom_phone", that.phone ? that.phone : '')
					query.set("custom_address", that.address ? that.address : '')
					query.set("orginDebt", Number(that.debt))
					query.set("discount", Number(that.discount))
					query.set("parent", poiID)
					query.set("Images",that.Images)
					query.set("password",that.password)
					if (that.customClass.type == 1) {
						let pointer1 = Bmob.Pointer('customFristClass')
						let  customFristClass = pointer1.set(that.customClass.objectId) //一级分类id关联
						query.set("customFristClass", customFristClass)
						
						if(custom){
							query.get(custom.objectId).then(res => {
								res.unset('customSecondClass')
								res.save()
							})
						}
					} else if(that.customClass.type == 2) {
						let pointer1 = Bmob.Pointer('customFristClass')
						let customFristClass = pointer1.set(that.customClass.parent.objectId) //一级分类id关联
						let pointer2 = Bmob.Pointer('customSecondClass')
						let customSecondClass = pointer2.set(that.customClass.objectId) //店仓的id关联
						
						
						query.set("customFristClass", customFristClass)
						query.set("customSecondClass", customSecondClass)
					}
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
							
							that.handleData();
						}

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
	
	.notice_text{
		padding: 20rpx 0 0;
	}

	.item {
		padding: 20rpx 30rpx;
		background: #FFFFFF;
	}
	.rightInput{
		text-align: right;
	}
</style>
