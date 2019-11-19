<template>
	<view class="page">

		<view class="frist" v-for="(item,index) in model" :key="index" style="margin-bottom: 30rpx;">
			<view class="input_item">
				<view class="left_item">颜色</view>
				<view class="right_input1 display_flex_bet" style="width: calc(100% - 200rpx);">
					<input placeholder="请输入颜色名"  v-model="item.custom1.value"></input>
					<fa-icon type="minus-square-o" size="20" color="#2ca879" v-if="index >= 1" @click="reduce_this(index)"></fa-icon>
				</view>
				
			</view>
			<view class="input_item">
				<view class="left_item">尺寸</view>
				<view class="right_input1"><input placeholder="尺寸"  v-model="item.custom2.value"></input></view>
			</view>
			<view class="input_item">
				<view class="left_item"><input placeholder="自定义规格名1" v-model="item.custom3.name"/></view>
				<view class="right_input1"><input placeholder="请输入自定义规格1的值"  v-model="item.custom3.value"></input></view>
			</view>
			<view class="input_item">
				<view class="left_item"><input placeholder="自定义规格名2" v-model="item.custom4.name" /></view>
				<view class="right_input1"><input placeholder="请输入自定义规格2的值"  v-model="item.custom4.value"></input></view>
			</view>
			<navigator class="input_item">
				<view class="left_item">库存</view>
				<view class="right_input1"><input placeholder="请输入库存数量"  v-model="item.reserve" type="number" :disabled="true"></input></view>
			</navigator>
		</view>
		<view class="input_item2 frist1" style="margin: 30rpx 0;justify-content: center;" @click="push_model">
			<view style="display: flex;align-items: center;">
				<view class="left_item" style="color: #2ca879;">增加规格</view>
				<fa-icon type="plus" size="20" color="#2ca879"></fa-icon>
			</view>
		</view>
		
		<button class='confrim_button' @click='confrim_this'>确定</button>
	</view>
</template>

<script>
	import Bmob from "hydrogen-js-sdk";
	
	let that;
	export default {
		data() {
			return {
				model:[{
					id:0,
					custom1:{"name":"颜色",value:""},
					custom2:{"name":"尺寸",value:""},
					custom3:{"name":"",value:""},
					custom4:{"name":"",value:""},
					reserve:0,
				}]
			}
		},
		onLoad(){
			that = this;
		},
		
		onShow() {
			if(uni.getStorageSync("now_model")){
				let now_model = uni.getStorageSync("now_model")
				that.model = now_model
			}
		},
		
		methods: {
			
			//点击增加规格
			push_model(){
				let model = {
					custom1:{"name":"颜色",value:""},
					custom2:{"name":"尺寸",value:""},
					custom3:{"name":"",value:""},
					custom4:{"name":"",value:""},
					reserve:0,
				}
				model.id = that.model.length
				that.model.push(model)
			},
			
			//减少当前的规格
			reduce_this(index){
				that.model.splice(index,1)
			},
			
			confrim_this(){
				uni.setStorageSync("now_model",that.model)
				uni.navigateBack({
					delta:1
				})
			},
			
		}
	}
</script>

<style>
	.page {
		height: 100vh;
		background: #FAFAFA;
	}
	.frist{
		padding: 0 20rpx;
		background: #FFFFFF;
	}
	.frist1 {
		padding: 0 20rpx;
		background: #FFFFFF;
	}
	.input_item {
		display: flex;
		align-items: center;
		line-height: 80rpx;
		height: 80rpx;
		border-bottom: 1rpx solid#f6f5ec;
	}
	
	.left_item {
		color: #333333;
		width: 200rpx;
	}
	
	.right_input1 {
		font-size: 12px;
	}
	
	.confrim_button {
		width: 60%;
		background: #426ab3;
		color: #fff;
		font-size: 32rpx;
		margin: 10% 20%;
	}
	
	.input_item2 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		line-height: 80rpx;
		height: 80rpx;
		border-bottom: 1rpx solid#f6f5ec;
	}
</style>
