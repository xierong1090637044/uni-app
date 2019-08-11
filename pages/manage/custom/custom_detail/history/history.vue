<template>
	<view>
		<scroll-view class='page'  scroll-y="true">
			<view class='list-item'>
				<view v-for="(item,index) in list" :key="index" >
					<view class='item' @click='get_detail(item.objectId)'>
						<view style='display:flex;width:calc(100% - 120rpx);'>
							<view style='line-height:80rpx'>
								<fa-icon type="sign-out" size="20" color="#f30" />
							</view>
							<view style='margin-left:20rpx'>
								<view><text style='color:#999'>操作者：</text>{{item.opreater.nickName}}</view>
								<view v-if='item.goodsName'><text style='color:#999'>操作商品：</text>{{item.goodsName}} 等...</view>
								<view v-if="item.beizhu" class='item_beizhu'><text style='color:#999'>备注：</text>{{item.beizhu}}</view>
								<view><text style='color:#999'>操作时间：</text>{{item.createdAt}}</view>
							</view>
						</view>
						<view class='order_out'>销售</view>
					</view>
					<uni-collapse accordion="true">
					    <uni-collapse-item title="明细">
					        <view v-for="(item,index) in item.relations" :key="index" class='pro_listitem'>
					        	<view class='pro_list' style='color:#3D3D3D'>
					        		<view style="font-size: 24rpx !important;">产品：{{item.goodsName}}（成本价：￥{{item.goodsId.costPrice}}）</view>
					        		<view style="font-size: 24rpx !important;">建议零售价：￥{{item.goodsId.retailPrice}}</view>
					        	</view>
					        	<view class='pro_list'>
					        		<view style="font-size: 24rpx !important;">实际卖出价：￥{{item.retailPrice}}（X{{item.num}}）</view>
					        		<view style="font-size: 24rpx !important;">总价：￥{{item.total_money }}</view>
					        	</view>
					        </view>
					    </uni-collapse-item>
					</uni-collapse>
				</view>
			</view>
		  
		</scroll-view>
	</view>
</template>

<script>
	import Bmob from '@/utils/bmob.js';
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	
	let that;
	let uid = uni.getStorageSync("uid");
	export default {
		components: {
			faIcon,
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				list:[]
			}
		},
		
		onLoad(options) {
			that = this;
			that.get_list(options.id)
		},
		methods: {
			
			//得到该客户的销售列表
			get_list(id) {
				const query = Bmob.Query("order_opreations");
				query.equalTo("master", "==", uid);
				query.equalTo("type", '==', -1);
				query.equalTo("custom", '==', id);
				query.include("opreater");
				query.order("-createdAt");
				query.find().then(res => {
					console.log(res)
					let details = res
					for(let item of details){
						const query = Bmob.Query('order_opreations');
						query.include("goodsId");
						query.field('relations', item.objectId);
						query.relation('Bills').then(res => {
							item.relations = res.results;
						})
					}
					that.list = details
					console.log(details)
				});
			},
		}
	}
</script>

<style>
.page {
		overflow: hidden;
		height: 100vh;
		font-size: 28rpx;
		color: #3D3D3D;
		background: #fafafa;
	}
	
	.pro_list {
		font-size: 20rpx !important;
		display: flex;
		justify-content: space-between;
	}
	
	.pro_listitem {
		background-color: #fff;
		padding: 10rpx 20rpx;
		border-bottom: 1rpx solid#ddd;
	}

	.item {
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		padding: 20rpx;
	}

	.icon-order {
		font-size: 44rpx;
		color: #426ab3;
	}

	.list-item {
		height: 100%;
		overflow: scroll;
	}

	.select_time {
		display: flex;
		justify-content: space-between;
		line-height: 80rpx;
		color: #999;
		padding: 0 30rpx;
	}

	.item_beizhu {
		max-width: calc(100% - 120rpx);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.order_get {
		padding: 0rpx 30rpx;
		color: #2ca879;
		border: .5rpx solid#2ca879;
		height: 52rpx;
		line-height: 52rpx;
		border-radius: 8rpx;
	}

	.order_out {
		padding: 0px 15px;
		color: #f30;
		border: 1px solid#f30;
		height: 26px;
		line-height: 26px;
		margin-top: 7px;
		border-radius: 4px;
	}

	.order_counting {
		padding: 0px 15px;
		color: #000;
		border: 1px solid#000;
		height: 26px;
		line-height: 26px;
		margin-top: 7px;
		border-radius: 4px;
	}

	.order_returning {
		padding: 0px 15px;
		color: #b3b242;
		border: 1px solid#b3b242;
		height: 26px;
		line-height: 26px;
		margin-top: 7px;
		border-radius: 4px;
	}
</style>
