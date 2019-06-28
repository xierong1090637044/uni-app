<template>
	<view>
		<view class="uni-form-item uni-column">
			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 160rpx;">显示精度</view>
				<input class="uni-input" type="number" placeholder="有效值0,1,2" v-model="show_float" />
			</view>

			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 160rpx;">USER账号</view>
				<input class="uni-input" placeholder="请输入USER账号" v-model="USER" />
			</view>
			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 160rpx;">UKEY账号</view>
				<input class="uni-input" placeholder="请输入UKEY账号" v-model="UKEY" />
			</view>
			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 160rpx;">打印机编号</view>
				<input class="uni-input" placeholder="请输入打印机编号" v-model="number" />
			</view>

		</view>
	</view>
</template>

<script>
	import Bmob from '@/utils/bmob.js';
	let uid = uni.getStorageSync('uid');

	let that;
	let setting;
	export default {
		data() {
			return {
				show_float: null,
				USER: null,
				UKEY: null,
				number: null,
			}
		},
		onLoad() {
			that = this;

			uni.getStorage({
				key: 'setting',
				success: function(res) {
					setting = res.data;
					that.show_float = setting.show_float;
					that.USER = setting.USER;
					that.UKEY = setting.UKEY;
					that.number = setting.number;
				},
			})
		},
		methods: {
			// #ifdef APP-PLUS
			//监听原生标题栏按钮点击事件
			onNavigationBarButtonTap(Object) {
				//console.log(that.show_float, that.USER, that.UKEY, that.number)
				
				uni.showLoading({title:"上传中"});
				const query = Bmob.Query("setting");
				const pointer = Bmob.Pointer('_User')
				const poiID = pointer.set(uid)

				if (setting) query.set("id", setting.objectId)
				query.set("show_float", Number(that.show_float))
				query.set("USER", that.USER)
				query.set("UKEY", that.UKEY)
				query.set("number", that.number)
				query.set("parent", poiID)
				//query.set("beizhu", "Bmob")
				query.save().then(res => {
					console.log(res)
					uni.hideLoading();
					uni.showToast({
						title: "保存成功",
					})
					that.query_setting()
					
				}).catch(err => {
					console.log(err)
				})
			},
			// #endif
			
			//查询当前用户的设置
			query_setting(){
				const query = Bmob.Query("setting");
				query.equalTo("parent", "==", res.data.objectId);
				query.find().then(res => {
					//console.log(res)
					uni.setStorageSync("setting",res[0])
				});
			},
			
		}
	}
</script>

<style>
	.item {
		background: #fff;
		padding: 4rpx 8rpx;
	}

	.uni-input {
		border-bottom: 1rpx solid#ccc;
	}
</style>
