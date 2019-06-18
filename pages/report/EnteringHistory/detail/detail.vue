<template>
	<view>
		<loading v-if="loading"></loading>
		
		<view class='page' v-else>
    <view style='line-height:70rpx;padding: 0 20rpx;'>操作产品</view>
    <view v-if="detail.type == 3">
    <view style='max-height:50vh;overflow-x:scroll'>
       <view v-for="(item,index) in products" :key="index" class='pro_listitem'>
          <view class='pro_list' style='color:#000'>
               <view >产品：{{item.goodsName}}</view>
          </view>
          <view class='pro_list'>
            <view>盘点前库存：{{item.reserve}}</view>
            <view>盘点后库存：{{item.now_reserve}}</view>
          </view>
       </view>
    </view>
    </view>

    <view v-else-if="detail.type == 2">
    <view style='max-height:50vh;overflow-x:scroll'>
       <view v-for="(item,index) in products" :key="index" class='pro_listitem'>
          <view class='pro_list' style='color:#000'>
               <view>产品：{{item.goodsName}}（成本价：￥{{item.goodsId.costPrice}}）</view>
               <view >建议零售价：￥{{item.goodsId.retailPrice}}</view>
          </view>
          <view class='pro_list'>
               <view>退货数量：X{{item.num}}</view>
               <view>总价：￥{{item.total_money}}</view>
          </view>
       </view>
    </view>
    <view class='pro_allmoney'>总计：￥{{detail.all_money}}</view>
    </view>

    <view v-else>
    <view style='max-height:50vh;overflow-x:scroll'>
       <view v-for="(item,index) in products" :key="index" class='pro_listitem'>
          <view class='pro_list' style='color:#000'>
               <view>产品：{{item.goodsName}}（成本价：￥{{item.goodsId.costPrice}}）</view>
               <view >建议零售价：￥{{item.goodsId.retailPrice}}</view>
          </view>
          <view class='pro_list'>
               <view v-if="item.type == -1">实际卖出价：￥{{item.retailPrice}}（X{{item.num}}）</view>
               <view v-else>实际进货价：￥{{item.retailPrice}}（X{{item.num}}）</view>
               <view>总价：￥{{item.total_money.toFixed(2)}}</view>
          </view>
       </view>
    </view>
    <view class='pro_allmoney'>总计：￥{{detail.all_money.toFixed(2)}}</view>
    </view>

    <view v-if="detail.type == -1">
			<view class="kaidanmx">
				<view style="padding: 10rpx 30rpx;">开单明细</view>
				<view v-if="detail.producer" class="display_flex"><view class="left_content">客户姓名</view><view>{{detail.custom.custom_nam}}</view></view>
				<view class="display_flex"><view class="left_content">实际付款</view><view class="real_color">{{detail.real_money == null ?'未填写':detail.real_money.toFixed(2)}}</view></view>
				<view class="display_flex" v-if="detail.debt > 0"><view class="left_content">欠款</view><view class="real_color">{{etail.debt}}</view></view>
			</view>
    </view>

    <view v-else-if="detail.type == 1">
			<view class="kaidanmx">
				<view style="padding: 10rpx 30rpx;">开单明细</view>
				<view v-if="detail.producer" class="display_flex"><view class="left_content">供货商姓名</view><view>{{detail.producer.producer_name}}</view></view>
				<view class="display_flex"><view class="left_content">实际付款</view><view class="real_color">{{detail.real_money == null ?'未填写':detail.real_money.toFixed(2)}}</view></view>
				<view class="display_flex" v-if="detail.debt > 0"><view class="left_content">欠款</view><view class="real_color">{{etail.debt}}</view></view>
			</view>
    </view>

    <view v-else-if="detail.type == 2">
			<view class="kaidanmx">
				<view style="padding: 10rpx 30rpx;">退货明细</view>
				<view v-if="detail.custom" class="display_flex"><view class="left_content">客户姓名</view><view>{{detail.custom.custom_name}}</view></view>
				<view v-else class="display_flex"><view class="left_content">未记录客户</view></view>
			</view>
    </view>

    <view style='margin-top:20px' class='detail_bottom'>
         <view style='display:flex;border-bottom:1px solid#ddd'>
            <view><image :src='detail.opreater.avatarUrl' class='avatar'></image></view>
            <view class='common_style'>{{detail.opreater.nickName}}</view>
            <view class='common_style'>（操作者）</view>
         </view>
         <view style='padding:20rpx 0 0'>
            <view v-if="detail.beizhu">备注：{{detail.beizhu}}</view>
            <view v-else>备注：暂无</view>
            <view>操作时间：{{detail.createdAt}}</view>
         </view>
    </view>

    <view v-if="detail.type == -1 || detail.type == 1">
      <button class='confrim_button' @click='revoke'>此操作有误，撤销</button>
    </view>

</view>

	</view>
</template>

<script>
	import Bmob from '@/utils/bmob.js';
	import loading from "@/components/Loading/index.vue"
	
	let that;
	let id;
	export default {
		components: {
			loading,
		},
		data() {
			return {
				loading:true,
				products:null,
				detail:null
			}
		},
		onLoad(options) {
			console.log(options)
			that = this;
			id = options.id;
			that.getdetail(id);
		},
		methods: {
			getdetail:function(id)
			{
			  const query = Bmob.Query('order_opreations');
			  query.include("opreater", "custom","producer");
			  query.get(id).then(res => {
			    //console.log(res);
					that.detail = res;
			    const query = Bmob.Query('order_opreations');
			    query.include("goodsId");
			    query.field('relations',res.objectId);
			    query.relation('Bills').then(res => {
			      //console.log(res);
						that.products = res.results;
						that.loading =false;
			    })
			  }).catch(err => {
			    console.log(err)
			  })
			},
			
			//数据撤销点击
			revoke:function()
			{
			  wx.showModal({
			    title: '提示',
			    content: '数据撤销后不可恢复，请谨慎撤销！',
			    success(res) {
			      if (res.confirm) {
			        uni.showLoading({ title: '撤销中...'})
			        const query = Bmob.Query('order_opreations');
			        query.destroy(that.detail.objectId).then(res => {
			          for (var i = 0; i < that.products.length; i++) {
			            that.delete_bill(i);
			          }
			        }).catch(err => {
			          console.log(err)
			        })
			      }
			    }
			  })
			  
			},
			
			delete_bill:function(i)
			{
			  var product = that.products[i];
			
			  const query = Bmob.Query('Bills');
			  query.destroy(product.objectId).then(res => {
			    const query1 = Bmob.Query('Goods');
			    query1.set('id', product.goodsId.objectId);
			    if (product.type == 1) {
			      query1.set('reserve', product.goodsId.reserve - product.num);
			    } else if (product.type == -1) {
			      query1.set('reserve', product.goodsId.reserve + product.num);
			    }
			    query1.save().then(res => {
			      if (i == (that.products.length - 1))
			      {
			        uni.hideLoading();
			        uni.navigateBack({ delta: 1 })
			        setTimeout(function () {
			          uni.showToast({ title: '撤销成功' })
			        }, 1000);
			      }
			    })
			  });
			}

		}
	}
</script>

<style>
.page
{
  color: #4d4d4d;
  height: 100vh;
	overflow-y: scroll;
	background: #FAFAFA;
	font-size: 28rpx;
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
  color: #f30;
}
.beizhu_style
{
  width: 100%;
  background-color: #fff;
  padding:20rpx;
  font-size: 32rpx;
}
.confrim_button
{
  width: 60%;
  background: #426ab3;
  color: #fff;
  font-size: 32rpx;
  margin-top: 10%;
}
.detail_bottom
{
  width: calc(100% - 40rpx);
  background-color: #fff;
  padding: 20rpx;
}
.avatar
{
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
}
.common_style
{
  line-height:80rpx;
  margin-left:20rpx;
  color: #000;
}

.real_color
{
  color: #f30!important;
}

.kaidanmx
{
	margin-top: 30rpx;
}
.display_flex
{
	display: flex;
	align-items: center;
	background: #FFFFFF;
	padding: 15rpx 30rpx;
}
.left_content
{
	width: 150rpx;
}
</style>
