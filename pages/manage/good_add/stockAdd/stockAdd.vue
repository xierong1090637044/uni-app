<template>
	<view style="height: 100vh;overflow: scroll;">
		<uni-nav-bar :fixed="true" color="#333333" background-color="#FFFFFF" right-text="确定" @click-right="confrimThis">
			<view></view>
		</uni-nav-bar>

		<view class="frist1" v-if="stocks.length>0" v-for="(item,index) in stocks" :key="index">
			<view style="line-height: 70rpx;">
				<view class="display_flex_bet">
					
					<!---多规格的情况-->
					<navigator class="input_item display_flex_bet" style="width: 100%;" v-if="productMoreG == 'true'" hover-class="none" :url="'../../goods_add_MoreG/G_More/G_More?index='+index">
						<view class="display_flex">
							<view class="left_item">初始库存</view>
							<input placeholder="初始库存" type="digit" name="reserve" :value="''+item.reserve" disabled="true" />
						</view>
						
						<fa-icon type="angle-right" size="20" color="#999"></fa-icon>
					</navigator>

					<view class="input_item" style="width: 100%;" v-else>
						<view class="left_item">初始库存</view>
						<input placeholder="初始库存" type="digit" name="reserve" :placeholder="''+item.reserve" @input="change_reserve($event,index)" />
						
					</view>
				</view>
			</view>

			<view class="input_item2 display_flex_bet">
				<view style="display: flex;align-items: center;">
					<view class="left_item">仓库</view>
					<view class="right_input1">
						<input :value="item.stock_name" disabled="true"></input>
					</view>
				</view>
				<view style="color: #2ca879;font-weight: bold;" @click="remove_stock(index)" v-if="isEdit == false">移除</view>
			</view>
		</view>

		<nocontent v-if="stocks.length == 0" :type="1"></nocontent>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	let that;

	export default {
		data() {
			return {
				stocks: [],
				productMoreG: '',
				isEdit:false,
			}
		},

		onLoad(options) {
			console.log(options)
			that = this;
			that.productMoreG = options.type
		},

		onShow() {
			that.stocks = uni.getStorageSync("warehouse")
			
			if (uni.getStorageSync("now_product")) {
				that.isEdit = true
			}
		},

		methods: {
			remove_stock(index) {
				if(that.stocks.length ==1){
					uni.showToast({
						title:"至少选择一个仓库",
						icon:'none'
					})
				}else{
					that.stocks.splice(index, 1)
					uni.setStorageSync("warehouse", that.stocks)
				}
			},
			
			confrimThis() {
				uni.navigateBack({
					delta: 1
				})
			},

			change_reserve($event, index) {
				//console.log($event, index)
				that.stocks[index].reserve = $event.detail.value
				uni.setStorageSync("warehouse", that.stocks)
			},
		}
	}
</script>

<style>
	.frist1 {
		padding: 0 20rpx;
		background: #FFFFFF;
		margin-bottom: 30rpx;
	}

	.input_item {
		display: flex;
		align-items: center;
		line-height: 80rpx;
		height: 80rpx;
		border-bottom: 1rpx solid#f6f5ec;
	}

	.input_item2 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		line-height: 80rpx;
		height: 80rpx;
		border-bottom: 1rpx solid#f6f5ec;
	}

	.left_item {
		color: #333333;
		width: 150rpx;
	}

	.right_input1 {
		font-size: 12px;
	}

	.submit_button {
		width: 50%;
		background: #426ab3;
		border-radius: 40rpx;
		margin: 30rpx;
		height: 88rpx;
		line-height: 88rpx;
		color: #fff;
		font-size: 30rpx;
	}

	.upload_image {
		width: 180rpx;
		height: 180rpx;
		line-height: 220rpx;
		text-align: center;
		border: 1rpx solid#999;
		border-radius: 8rpx;
	}

	.notice_text {
		padding-top: 20rpx;
		font-size: 32rpx;
		color: #3D3D3D;
		font-weight: bold;
	}

	.reset_button {
		font-size: 30rpx;
		width: 50%;
		background: #999;
		border-radius: 40rpx;
		margin: 30rpx;
		height: 88rpx;
		line-height: 88rpx;
		color: #fff;
	}
</style>
