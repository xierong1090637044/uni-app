<template>
	<view>
		<view v-if="params.type=='get'">
			<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-text="添加" @click-right="params.type='add'"></uni-nav-bar>

			<scroll-view>
				<view v-for="(item,index) in brandList" class="display_flex_bet brandItem" :key="index">
					<view>
						<view style="font-weight: bold;font-size: 30rpx;color: #333;">{{item.name}}</view>
						<view>备注：{{item.beizhu}}</view>
					</view>
					<view class="display_flex" style="font-weight: bold;" v-if="isChoose">
						<view style="color: #2CA879;margin-right: 20rpx;" @click="chooseThis(item)">选择</view>
					</view>
					<view class="display_flex" style="font-weight: bold;" v-else>
						<view style="color: #2CA879;margin-right: 20rpx;" @click="modify(item)">修改</view>
						<view style="color: #f30;" @click='deleteThis(item)'>删除</view>
					</view>
				</view>
			</scroll-view>
		</view>

		<view v-else-if="params.type=='add' || params.type=='edit'">
			<view class="editContent">
				<view style="text-align: right;" @click="params.type='get'">
					<fa-icon type="times-circle" size="20" color="#426ab3"></fa-icon>
				</view>
				<view class="display_flex input-view">
					<view style="width: 180rpx;">品牌名称<text style="color: #f30;">*</text></view>
					<input placeholder="请输入品牌名称" class="contentInput" v-model="params.name" />
				</view>
				<view class="display_flex input-view">
					<view style="width: 180rpx;">备注</view>
					<input placeholder="请输入备注" class="contentInput" v-model="params.beizhu" />
				</view>
			</view>

			<button class="submitButton" @click="addBrand">保存</button>
		</view>

	</view>
</template>

<script>
	let that;
	export default {
		data() {
			return {
				brandList: [],
				isChoose: false,
				params: {
					type: 'get',
					name: '',
					beizhu: '',
					objectId: ''
				}
			}
		},
		onLoad(option) {
			that = this;
			uni.setNavigationBarTitle({
				title: "商品品牌管理"
			})

			if (option.type == 'choose') {
				that.isChoose = true
			}

			that.getBrandList()
		},
		methods: {

			//选择当前品牌
			chooseThis(item) {
				uni.$emit('chooseBrand', item);
				uni.navigateBack({
					delta:1
				})
			},

			//修改产品品牌
			modify(item) {
				that.params.type = "edit"
				that.params.name = item.name
				that.params.beizhu = item.beizhu
				that.params.objectId = item.objectId
			},

			//删除
			deleteThis(item) {
				uni.showModal({
					title: '提示',
					content: '是否删除此品品牌？',
					success: function(res) {
						if (res.confirm) {
							that.params.type = "delete"
							that.params.objectId = item.objectId
							that.addBrand()
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},

			addBrand() {
				that.$http.Post("good_brandManage", that.params).then(res => {
					if (res.code == 1) {
						if (that.params.type == "edit") {
							that.common.showToast("编辑成功")
						} else if (that.params.type == "add") {
							that.common.showToast("添加成功")
						} else if (that.params.type == "delete") {
							that.common.showToast("删除成功")
						}
						that.getBrandList()
					}
				})
			},

			getBrandList() {
				that.params.type = "get"
				that.$http.Post("good_brandManage", that.params).then(res => {
					if (res.code == 1) {
						that.brandList = res.data
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.editContent {
		background: #fff;
		padding: 30rpx;
	}

	.input-view {
		margin-bottom: 30rpx;
		padding: 6rpx 30rpx;
	}

	.contentInput {
		margin-left: 20rpx;
	}

	.submitButton {
		background: $main-color;
		color: #fff;
		height: 70rpx;
		line-height: 70rpx;
		margin-top: 100rpx;
		font-size: 28rpx;
		width: 60%;
	}

	.brandItem {
		background: #fff;
		padding: 6rpx 30rpx;
		border-bottom: 1rpx solid#ddd;
	}
</style>
