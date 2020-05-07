<template>
	<view>
		<view style="padding: 20rpx;">

			<view class="display_flex_bet">
				<view>跟进时间</view>
				<view class="display_flex">
					<datetimePicker mode="date" fields="minute" :defaultValue="params.nowTime" @change="changeNowTime"></datetimePicker>
					<fa-icon type="angle-right" size="18" color="#426ab3" style="margin-left: 10rpx;"></fa-icon>
				</view>
			</view>


			<navigator class="display_flex_bet" hover-class="none" url="/pages/manage/custom/custom?type=custom">
				<view>跟进客户</view>
				<view class="display_flex">
					<view style="margin-right: 10rpx;">{{params.custom.custom_name}}</view>
					<fa-icon type="angle-right" size="18" color="#426ab3"></fa-icon>
				</view>
			</navigator>

			<view style="background: #fff;padding: 10rpx;margin-bottom: 20rpx;">
				<textarea placeholder="请输入跟进内容" style="font-size: 28rpx;" maxlength="1000" v-model="params.content"></textarea>
			</view>

			<view class="display_flex_bet">
				<view>下次跟进</view>
				<view class="display_flex">
					<datetimePicker mode="date" fields="minute" :defaultValue="params.nextTime" @change="changeNextTime"></datetimePicker>
					<fa-icon type="angle-right" size="18" color="#426ab3" style="margin-left: 10rpx;"></fa-icon>
				</view>
			</view>

			<view class="display_flex_bet">
				<view>停止跟进</view>
				<view class="display_flex">
					<switch :checked="params.isStop" @change="changeIsStop"></switch>
				</view>
			</view>
		</view>

		<view style="position: fixed;bottom: 0;width: 100%;background: #fff;" v-if="params.type=='add'">
			<view class="buttonBottom" @click="submit">完成</view>
		</view>
		<view style="position: fixed;bottom: 0;width: 100%;background: #fff;" v-if="params.type=='edit'">
			<view class="buttonBottom" @click="submit">编辑</view>
			<view class="buttonBottom" @click="deleteThisFollow" style="border-right: 1rpx solid#fff;background: #f30;">删除</view>
		</view>
	</view>

</template>

<script>
	import datetimePicker from "@/components/biaofun-datetime-picker/biaofun-datetime-picker.vue"

	let that;
	export default {
		components: {
			datetimePicker
		},
		data() {
			return {
				params: {
					type: "add",
					nowTime: this.common.getDay(0, true, false, true),
					nextTime: this.common.getDay(0, true, false, true),
					content: '', //跟进内容
					custom: {
						custom_name: '',
						objectId: ''
					},
					isStop: false,
					objectId: ''
				},
			}
		},
		onLoad(options) {
			that = this
			uni.setNavigationBarTitle({
				title: "客户跟进"
			})

			if (options.type == "edit") {
				that.params.type = "edit"
				let customFollowDet = uni.getStorageSync("customFollowDet")
				that.params.nowTime = customFollowDet.nowTime.iso
				that.params.nextTime = customFollowDet.nextTime.iso
				that.params.content = customFollowDet.content
				that.params.isStop = customFollowDet.isStop
				that.params.objectId = customFollowDet.objectId
			}
		},

		onShow() {
			if (uni.getStorageSync("custom")) {
				let custom = uni.getStorageSync("custom")
				that.params.custom.custom_name = custom.custom_name
				that.params.custom.objectId = custom.objectId
			}
		},

		methods: {
			changeNextTime(value) {
				console.log(value)
				that.params.nextTime = value.year + "-" + value.month2 + "-" + value.day2 + " " + value.hour2 + ":" + value.minute2 +":00"
			},

			changeNowTime(value) {
				that.params.nowTime = value.year + "-" + value.month2 + "-" + value.day2 + " " + value.hour2 + ":" + value.minute2 +
					":00"
			},

			changeIsStop(e) {
				that.params.isStop = e.detail.value
			},

			//删除跟进记录
			deleteThisFollow() {
				uni.showModal({
				    title: '提示',
				    content: '是否删除此跟进记录',
				    success: function (res) {
				        if (res.confirm) {
				            that.$http.Post("stock_customFollow", {
				            	type: "delete",
				            	objectId: that.params.objectId
				            }).then(res => {
				            	if(res.code == 1){
												setTimeout(function(){
													uni.showToast({
														icon:"none",
														title:"删除成功"
													})
												},1000)
												
												uni.navigateBack({
													delta:1
												})
											}
				            })
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				
			},

			//提交或者修改跟进记录
			submit() {
				if (that.params.custom.objectId == "") {
					uni.showToast({
						icon: "none",
						title: "请选择跟进客户"
					})
					return
				} else if (that.params.content == "") {
					uni.showToast({
						icon: "none",
						title: "请输入跟进内容"
					})
					return
				}

				that.$http.Post("stock_customFollow", that.params).then(res => {
					if (res.code == 1) {
						setTimeout(function(){
							uni.showToast({
								icon: "none",
								title: that.params.type == 'add' ? "跟进成功" : "修改成功"
							})
						},1000)
						
						uni.navigateBack({
							delta:1
						})
					}
				})
			}
		}
	}
</script>

<style>
	.display_flex_bet {
		background: #fff;
		margin-bottom: 20rpx;
		padding: 20rpx;
	}

	.buttonBottom {
		background: #007aff;
		color: #fff;
		width: 200rpx;
		text-align: center;
		line-height: 100rpx;
		float: right;
	}
</style>
