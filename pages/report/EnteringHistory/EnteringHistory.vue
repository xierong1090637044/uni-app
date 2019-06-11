<template>
<view>
	<loading v-if="loading"></loading>
	<view class='page' v-else>
		<view class='list-item'>
			<view v-for="(item,index) in list" :key="index" class='item' @click='get_detail(item.objectId)'>
			<view style='display:flex;width:calc(100% - 120rpx);'>
			     <view style='line-height:80rpx'>
						 <fa-icon v-if='item.type == 1' type="sign-in" size="20" color="#2ca879" />
						 <fa-icon v-if='item.type == -1' type="sign-out" size="20" color="#f30" />
						 <fa-icon v-if='item.type == 2' type="leanpub" size="20" color="#b3b242" />
						 <fa-icon v-if='item.type == 3' type="check-square-o" size="20" color="#000" />
					 </view>
			     <view style='margin-left:20rpx'>
			         <view><text style='color:#999'>操作者：</text>{{item.opreater.nickName}}</view>
			         <view v-if='item.goodsName'><text style='color:#999'>操作商品：</text>{{item.goodsName}}  等...</view>
			         <view v-if="item.beizhu" class='item_beizhu'><text style='color:#999'>备注：</text>{{item.beizhu}}</view>
			         <view><text style='color:#999'>操作时间：</text>{{item.createdAt}}</view>
			     </view>
			  </view>
			  <view v-if='item.type == -1' class='order_out'>出库</view>
			  <view v-else-if='item.type == 2' class='order_returning'>退货</view>
			  <view v-else-if='item.type == 3' class='order_counting'>盘点</view>
			  <view v-else class='order_get' >入库</view>
			 </view>
		</view>
		
	</view>
	
</view>


</template>

<script>
	import Bmob from '@/utils/bmob.js';
	import loading from "@/components/Loading/index.vue"
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
		
	let uid = uni.getStorageSync("uid");
	let that;
	let opeart_type;
	
	export default {
		components: {
			loading,
			faIcon,
		},
		data() {
			return {
				loading:true,
				list:null,
			}
		},
		onLoad(options) {
			that = this;
			opeart_type = Number(options.type);
			if(opeart_type == 1)
			{
				uni.setNavigationBarTitle({title:"入库详情"})
			}else if(opeart_type == -1){
				uni.setNavigationBarTitle({title:"出库详情"})
			}else if(opeart_type == 2){
				uni.setNavigationBarTitle({title:"退货详情"})
			}else if(opeart_type == 3){
				uni.setNavigationBarTitle({title:"盘点详情"})
			}
		},
		
		onShow() {
			this.get_list();	
		},
		
		methods: {
					//得到列表
			get_list(){
			  const query = Bmob.Query("order_opreations");
			  query.equalTo("master", "==", uid);
			  query.equalTo("type", '==', opeart_type);
			  query.include("opreater");
			  query.order("-createdAt");
			  query.find().then(res => {
					//console.log(res)
					this.list = res;
					this.loading = false;
			  });
			},
			
			//点击得到详情
			get_detail:function(id)
			{
			  wx.navigateTo({
			    url: 'detail/detail?id='+id,
			  })
			},
		}
	}
</script>

<style>
.page
{
  overflow: hidden;
	height: 100vh;
	font-size: 28rpx;
	color: #3D3D3D;
	background: #fafafa;
}
.item
{
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 20rpx;
	border-bottom: .5rpx solid#ddd;
}
.icon-order
{
  font-size: 44rpx;
  color: #426ab3;
}
.list-item
{
  height:100%;
  overflow: scroll;
}

.select_time
{
  display: flex;
  justify-content: space-between;
  line-height: 80rpx;
  color: #999;
  padding: 0 30rpx;
}
.item_beizhu
{
  max-width: calc(100% - 120rpx);
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.order_get
{
  padding: 0rpx 30rpx;
  color: #2ca879;
  border:.5rpx solid#2ca879;
  height: 52rpx;
  line-height: 52rpx;
  border-radius: 8rpx;
}
.order_out
{
  padding: 0px 15px;
  color: #f30;
  border:1px solid#f30;
  height: 26px;
  line-height: 26px;
  margin-top: 7px;
  border-radius: 4px;
}
.order_counting
{
   padding: 0px 15px;
  color: #000;
  border:1px solid#000;
  height: 26px;
  line-height: 26px;
  margin-top: 7px;
  border-radius: 4px;
}

.order_returning
{
   padding: 0px 15px;
  color: #b3b242;
  border:1px solid#b3b242;
  height: 26px;
  line-height: 26px;
  margin-top: 7px;
  border-radius: 4px;
}
</style>
