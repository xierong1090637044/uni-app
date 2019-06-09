<template>
	<view class="page">
		<form @submit="formSubmit">
			<view class="frist">
				<view style="padding: 20rpx 0;">产品图</view>

				<view style="width: 100%;padding-bottom: 20rpx;">
					<view class="upload_image" @click="upload_image">
						<image :src="goodsIcon" v-if="goodsIcon" style="width: 180rpx;height: 180rpx;"></image>
						<fa-icon type="plus-square-o" size="40" color="#f58220" v-else></fa-icon>
					</view>
					<input name="goodsIcon" v-show="false" :value="goodsIcon"/>
						
				</view>
				
			</view>
			
			<view class="frist">
				<view class="input_item">
					<view class="left_item">名称<text style="color: #aa2116;margin-left: 4rpx;">*</text></view>
					<view class="right_input"><input placeholder="产品名称" name="goodsName"></input></view>
				</view>
				
				<view class="input_item">
					<view class="left_item">类别</view>
					<view class="right_input"><input placeholder="产品类别" name="goodsClass"></input></view>
				</view>
				
				<view class="input_item">
					<view class="left_item">进价</view>
					<view class="right_input"><input placeholder="产品进价" name="costPrice" type="digit"></input></view>
				</view>
				
				<view class="input_item">
					<view class="left_item">售价</view>
					<view class="right_input"><input placeholder="产品售价" name="retailPrice" type="digit"></input></view>
				</view>
			</view>
			
			<view class="frist">
				<view class="input_item">
					<view class="left_item">生产日期</view>
					<picker mode="date" @change="bindproducttimeChange">
					  <view class="right_input"><input placeholder="生产日期" name="producttime" :value="producttime" disabled="true"></input></view>
					</picker>
				</view>
				
				<view class="input_item">
					<view class="left_item">失效日期</view>
					<picker mode="date" @change="bindDateChange">
						<view class="right_input"><input placeholder="失效日期" name="nousetime" :value="nousetime" disabled="true"></input></view>
          </picker>
					
				</view>
			</view>
			
			<view class="frist">
				<view class="input_item">
					<view class="left_item">初始库存<text style="color: #aa2116;margin-left: 4rpx;">*</text></view>
					<view class="right_input"><input placeholder="初始库存" name="reserve" type="digit"></input></view>
				</view>
				<view class="input_item">
					<view class="left_item">预警库存</view>
					<view class="right_input"><input placeholder="预警库存" name="warning_num" type="digit"></input></view>
				</view>
			</view>
			
			<view class="frist">
				<view class="input_item">
					<view class="left_item">生产厂家</view>
					<view class="right_input"><input placeholder="生产厂家" name="producer"></input></view>
				</view>
				<view class="input_item">
					<view class="left_item">货号</view>
					<view class="right_input"><input placeholder="货号" name="regNumber"></input></view>
				</view>
				<view class="input_item">
					<view class="left_item">条码</view>
					<view class="right_input"><input placeholder="条码" name="productCode"></input></view>
				</view>
				<view class="input_item">
					<view class="left_item">货架位置</view>
					<view class="right_input"><input placeholder="货架位置" name="position"></input></view>
				</view>
				<view class="input_item">
					<view class="left_item">产品简介</view>
					<view class="right_input"><input placeholder="产品简介" name="product_info"></input></view>
				</view>
			</view>
			
			<view>
				<button formType="submit" class="submit_button">保存</button>
			</view>
			
		</form>
		
	</view>
</template>

<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import Bmob from '@/utils/bmob.js';
	let that;
	let tempFilePaths;
	let uid = uni.getStorageSync('uid');
	let producttime;
	let nousetime;
	export default {
		components: {
			faIcon,
		},
		data() {
			return {
				goodsIcon:"",//产品图片
				nousetime:"",//失效时间
				producttime:"",//生产日期
			}
		},
		onLoad() {
			that = this;
		},
		methods: {
			bindproducttimeChange: function(e) {
				 let date = new Date(e.target.value);
         this.producttime = e.target.value;
				 producttime = date.getTime();
       },
			 
			bindDateChange: function(e) {
				let date = new Date(e.target.value);
        this.nousetime = e.target.value;
				nousetime = date.getTime();
       },
			//保存提交
			formSubmit: function(e) {
           //console.log(e.detail.value)
					 let good = e.detail.value;
					 if(good.goodsName == "")
					 {
						 uni.showToast({
						 	  title:"请输入产品名称",
								icon:"none"
						 })
					 }else if(good.reserve == ""){
						 uni.showToast({
						 	  title:"请输入产品库存",
								icon:"none"
						 })
					 }else{				 
						 if(tempFilePaths)
						 {
							 let file;
							 for (let item of tempFilePaths) {
							   //console.log('itemn',item)
							   file = Bmob.File(good.goodsName+".png", item);
							 }
							 file.save().then(res => {
								 that.goodsIcon = JSON.parse(res).url;
								 let params = {
								 			goodsIcon:that.goodsIcon,
								 			goodsName:good.goodsName,
											costPrice:good.costPrice,
											retailPrice:good.retailPrice,
											producttime:producttime,
											nousetime:nousetime,
											regNumber:good.regNumber,
								 			reserve:good.reserve,
											productCode:good.productCode,
											product_info:good.product_info,
											producer:good.producer,
											userid:uid,
								 }
								 this.$http.post('/product/add.php', params, {
								      header: {
								          'Content-Type': 'application/x-www-form-urlencoded' //自定义请求头信息
								      },
								   }).then(res => {
								 		console.log(res)
										uni.showToast({title:"上传成功"})
								   }).catch(err => {
								 
								 });
							 })
						 }else{
							 let params = {
							 			goodsIcon:"",
							 			goodsName:good.goodsName,
							 			costPrice:good.costPrice,
							 			retailPrice:good.retailPrice,
										producttime:producttime,
										nousetime:nousetime,
							 			regNumber:good.regNumber,
							 			reserve:good.reserve,
							 			productCode:good.productCode,
							 			product_info:good.product_info,
							 			producer:good.producer,
							 			userid:uid,
							 }
							 this.$http.post('/product/add.php', params, {
							      header: {
							          'Content-Type': 'application/x-www-form-urlencoded' //自定义请求头信息
							      },
							   }).then(res => {
							 		uni.showToast({title:"上传成功"})
							   }).catch(err => {
							 
							 });
						 }
					 }
        },
		  //上传产品图片
			upload_image:function()
			{
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success: function (res) {
						//console.log(res);
						that.goodsIcon = res.tempFilePaths[0];
						tempFilePaths = res.tempFilePaths;
					},
				});
			},
			
		}
	}
</script>

<style>
::-webkit-scrollbar
{
width: 2px;
height: 6px;
background-color: transparent;
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
border-radius: 10px;
background-color: #999;
}

	.page{
		font-size: 28rpx;
		background: #f6f5ec;
		height: 100vh;
		overflow: scroll;
	}
	.frist{
		padding: 0 20rpx;
		background: #FFFFFF;
		margin-top: 30rpx;
	}
.input_item
{
	display: flex;
	align-items: center;
	line-height: 80rpx;
	border-bottom: 1rpx solid#f6f5ec;
}
.left_item
{
	width: 150rpx;
}
.right_input
{
	margin-left: 20rpx;
}
.submit_button
{
	background: #f58220;
	border-radius: 40rpx;
	margin: 30rpx;
	height: 88rpx;
	line-height: 88rpx;
	color: #fff;
}
.upload_image
{
	width: 180rpx;
	height: 180rpx;
	line-height: 220rpx;
	text-align: center;
	border: 1rpx solid#999;
	border-radius: 8rpx;
}
</style>
