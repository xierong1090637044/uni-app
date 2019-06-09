<template>
	<!--当月详情-->
<view>
  <swiper indicator-dots="true" indicator-active-color="#fff" class='swiper' autoplay='true'>
  <block>
    <swiper-item class="item">
      <view class='every_item'>
        <view class='s_num'>{{total_reserve}}</view>
        <view>库存总量</view>
      </view>
      <view class='every_item'>
        <view class='s_num'>{{total_money}}</view>
        <view>库存成本</view>
      </view>
    </swiper-item>
  </block>
  </swiper>
	
	<!--操作列表-->
<view class='o_list'>
  <navigator v-for='(value,index) in optionsLists' :key="index" class='o_item' :url="(value.url)" hover-class="none">
    <view style='width:100%'><image :src="(value.icon)" class='o_image'/></view>
    <view class='o_text'>{{value.name}}</view>
  </navigator>
</view>

</view>

</template>

<script>
	import config from '../../utils/config.js';
	
	let uid = uni.getStorageSync('uid');
	export default {
		data() {
			return {
				optionsLists: [{name: '产品入库', icon: '/static/entering.png',url: '/pages/common/goods-select/goods-select?type=entering'},
					{name: '产品出库', icon: '/static/delivery.png',url: '/pages/common/goods-select/goods-select?type=delivery'},
					{name: '退货入库', icon: '/static/return_goods.png',url: '/pages/common/goods-select/goods-select?type=returing'},
					{name: '库存盘点', icon: '/static/stocking.png',url: '/pages/common/goods-select/goods-select?type=counting'},],
				total_reserve:0,
				total_money:0
			}
		},
		onLoad() {
			
		},
		methods: {
		}
	}
</script>

<style>
/* pages/home/index/index.wxss */
.swiper
{
  background: #426ab3;
  color: #fff;
  height: 20vh;
}
.item
{
  display: flex;
  justify-content:space-between;
  align-items: center;
}
.every_item
{
  width: 50%;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
}
.s_num
{
  font-size: 16px;
  font-weight: bold;
}

.o_list
{
  background: #fff;
  padding: 15px 15px 0;
}
.o_image
{
  width:80rpx;
  height:80rpx;
  border-radius: 50%;
  border: 3px solid#e2e2e2;
  padding: 6rpx 6rpx 0;
}
.o_item
{
  width: 25%;
  text-align: center;
  display: inline-block;
  margin-bottom: 20rpx;
}
.o_text
{
  color: #000;
  font-weight: bold;
  font-size: 23rpx;
}

.scan_code
{
  position: fixed;
  width: calc(100% - 30px);
  left: 15px;
  right: 15px;
  bottom: 10%;
  background: linear-gradient(to right, #426ab3 , #118fff);
  line-height: 40px;
  text-align: center;
  border-radius: 4px;
  color: #fff;
  box-shadow: 0 5px 5px rgba(0,0,0,0.2)
}
.icon-scan
{
  margin-right: 20rpx;
}

</style>
