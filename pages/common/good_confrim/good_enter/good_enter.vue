<template>
	<view>
		<view class='page'>
    <view style='line-height:70rpx;padding: 20rpx 20rpx 0;'>已选产品</view>
    <view style='max-height:25vh;overflow-x:scroll'>
       <view v-for="(item,index) in products" :key="index" class='pro_listitem'>
          <view class='pro_list' style='color:#3D3D3D'>
               <view>产品：{{item.goodsName}}</view>
               <view>期初进货价：￥{{item.costPrice}}</view>
          </view>
          <view class='pro_list'>
               <view>实际进货价：￥{{item.modify_retailPrice}}（X{{item.num}}）</view>
               <view>合计：￥{{item.total_money}}</view>
          </view>
       </view>
    </view>
     <view class='pro_allmoney'>总计：￥{{all_money}}</view>

    <form bindsubmit="formSubmit">
    <!--<i-panel title="开单明细（用于记录是否有无欠款）">
      <i-input title="供应商姓名" value="{{producer.producer_name}}" placeholder="选择供货商" disabled="true" bindtap='choose_producer'/>
      <i-input title="实际应付" value="{{all_money}}" placeholder="选择供货商" disabled="true"/>
      <i-input title="实际付款（可修改）" value="{{real_money}}" placeholder="输入实际付款金额" bindchange='getreal_money'/>
    </i-panel>-->

    <view style='margin-top:20px'>
			<textarea placeholder='请输入备注' class='beizhu_style' bindinput="input_beizhu"></textarea>
    </view>

    <view style="padding: 0 30rpx;margin-top: 40rpx;">
        <button class='confrim_button' bindtap='confrim_delivery' :disabled='button_disabled' form-type="submit">确认入库</button>
    </view>
    </form>
		
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				products:null,
				button_disabled:false,
				all_money:0,
			}
		},
		onLoad() {
			this.products = uni.getStorageSync("products");
			for(let i =0;i<this.products.length;i++)
			{
				this.all_money = this.products[i].total_money+this.all_money
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.page
{
  color: #4d4d4d;
	background: #f6f5ec;
	font-size: 28rpx;
	overflow: scroll;
}
.pro_list
{
  display: flex;
  justify-content: space-between;
}
.pro_listitem
{
  background-color: #fff;
  padding: 10rpx 20rpx;
  border-bottom: 1rpx solid#ddd;
}
.pro_allmoney
{
  background-color: #fff;
  padding: 10rpx 20rpx;
  text-align: right;
  font-size: 32rpx;
  color: #f30
}
.beizhu_style
{
  width: calc(100% - 40rpx);
  background-color: #fff;
  padding:20rpx;
  font-size: 32rpx;
  max-height: 100rpx;
}
.confrim_button{
	background: #aa2116;
	color: #fff;
	font-weight: bold;
}

</style>
