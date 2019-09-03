<template>
	<view>
		<view class="uni-form-item uni-column">
			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 110rpx;">登陆网址</view>
				<input class="uni-input" type="number" value="http://www.jimuzhou.com/stock/test/"  disabled="true"/>
			</view>
			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 110rpx;">显示精度</view>
				<input class="uni-input" type="number" placeholder="有效值0,1,2" v-model="show_float" />
			</view>

			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 110rpx;">USER账号</view>
				<input class="uni-input" placeholder="请输入USER账号" v-model="USER" />
			</view>
			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 110rpx;">UKEY账号</view>
				<input class="uni-input" placeholder="请输入UKEY账号" v-model="UKEY" />
			</view>
			<view class="display_flex item">
				<view style="margin-right: 10rpx;width: 130rpx;">打印机编号</view>
				<input class="uni-input" placeholder="请输入打印机编号" v-model="number" />
			</view>

		</view>
	</view>
</template>

<script>
	let uid;

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
			uid = wx.getStorageSync("uid")
			
			uni.getStorage({
				key: 'setting',
				success: function(res) {
					setting = res.data;
					that.show_float = setting.show_float;
					that.USER = setting.USER;
					that.UKEY = setting.UKEY;
					that.number = setting.number;
				},
				fail() {
					that.query_setting()
				}
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
				query.equalTo("parent", "==", uid);
				query.find().then(res => {
					//console.log(res)
					uni.setStorageSync("setting",res[0])
					that.show_float = res[0].show_float;
					that.USER = res[0].USER;
					that.UKEY = res[0].UKEY;
					that.number = res[0].number;
				});
			},
			
		}
	}
</script>

<style>
	.item {
		background: #fff;
		padding: 4rpx 30rpx;
		font-size: 24rpx;
	}

	.uni-input {
		border-bottom: 1rpx solid#ccc;
		padding: 10rpx 0;
	}
</style>
