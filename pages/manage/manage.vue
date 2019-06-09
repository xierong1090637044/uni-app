<template>
	<!--操作列表-->
<view class='o_list'>
  <navigator v-for="(value,index) in optionsLists" :key="index" class='o_item' :url="(value.url)" hover-class="none">
    <view class='o_left_item'>
      <view><fa-icon :type="value.icon" size="20" :color="value.color"></fa-icon></view>
      <span class='o_text'>{{value.name}}</span>
    </view>
    <view><fa-icon type="angle-right" size="20" color="#999" /></view>
  </navigator>
</view>
</template>

<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	export default {
		components: {
		    faIcon
		},
		data() {
			return {
				optionsLists:[
					{ name: '产品管理', icon: 'envelope-open-o', url: '/pages/manage/goods/goods', color: "#af42b3" },
					//{ name: '员工管理', icon: 'group', url: '/pages/second/staff/staff', color: "#b38c42" },
					//{ name: '客户管理', icon: 'addressbook', url: '/pages/second/custom/custom', color: "#82b342" },
					//{ name: '供货商管理', icon: 'mine', url: '/pages/second/producer/producer', color: "#42b3af" },
					//{ name: '仓库管理', icon: 'homepage', url: '/pages/manage/add_warehouse/add_warehouse', color: "#b34742" },
					//{ name: '产品类别管理', icon: 'accessory', url: '/pages/manage/add_class/add_class', color: "#426ab3" },
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
/* pages/home/index/index.wxss */
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
  line-height: 30rpx;
  font-size: 14rpx;
}
.s_num
{
  font-size: 16rpx;
  font-weight: bold;
}

.o_list
{
  background: #fff;
  padding: 0 15rpx 10rpx;
}
.o_item
{
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30rpx 0;
  border-bottom: 1rpx solid#ddd;
}
.o_left_item
{
  display: flex;
  align-items: center;
}
.o_text
{
  color: #000;
  font-weight: bold;
  font-size: 24rpx;
  margin-left: 30rpx;
}

</style>
