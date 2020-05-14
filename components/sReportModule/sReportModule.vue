<template>
	<view v-if="canUse">
		<view class="modelItem">
			<view class="title">采购报表</view>
			<view class='o_list'>
				<navigator v-for='(value,index) in purchaseReport' :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem">
						<fa-icon type="pie-chart" size="20" color="#426ab3" style="line-height: 80rpx;"></fa-icon>
					</view>
					<view class='o_text'>{{value.name}}</view>
				</navigator>
			</view>
		</view>
		
		<view class="modelItem">
			<view class="title">销售报表</view>
			<view class='o_list'>
				<navigator v-for='(value,index) in sellReport' :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem">
						<fa-icon type="pie-chart" size="20" color="#426ab3" style="line-height: 80rpx;"></fa-icon>
					</view>
					<view class='o_text'>{{value.name}}</view>
				</navigator>
			</view>
		</view>

		<view class="modelItem">
			<view class="title">仓库报表</view>
			<view class='o_list'>
				<navigator v-for='(value,index) in stockReport' :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem">
						<fa-icon type="pie-chart" size="20" color="#426ab3" style="line-height: 80rpx;"></fa-icon>
					</view>
					<view class='o_text'>{{value.name}}</view>
				</navigator>
			</view>
		</view>
	</view>
	<view v-else style="font-size: 32rpx;color: #333;font-weight: bold;">请联系管理员开通使用</view>
</template>

<script>
	export default {
		data() {
			return {
				purchaseReport: [{
					name: '商品采购统计',
					url: '/pages/reportAnalys/purchaseGoods/purchaseGoods',
				},{
					name: '供应商采购统计',
					url: '/pages/reportAnalys/purchaseProducers/purchaseProducers',
				},{
					name: '品牌采购统计',
					url: '/pages/reportAnalys/brandSellPurchase/brandSellPurchase?type=1',
				}],

				sellReport: [{
					name: '商品销售统计',
					url: '/pages/reportAnalys/sellGoods/sellGoods',
				},{
					name: '客户销售统计',
					url: '/pages/reportAnalys/sellCustoms/sellCustoms',
				},{
					name: '品牌销售统计',
					url: '/pages/reportAnalys/brandSellPurchase/brandSellPurchase?type=-1',
				}],
				
				stockReport: [{
					name: '出入库统计',
					icon: 'icon-zijinzhanghu',
					url: '/pages/reportAnalys/stockOutIn/stockOutIn',
				},{
					name: '仓库统计',
					icon: 'icon-zijinzhanghu',
					url: '/pages/reportAnalys/stockGoods/stockGoods',
				},{
					name: '商品出库统计',
					icon: 'icon-zijinzhanghu',
					url: '/pages/reportAnalys/stockGoodOut/stockGoodOut?type=-1',
				},{
					name: '商品入库统计',
					icon: 'icon-zijinzhanghu',
					url: '/pages/reportAnalys/stockGoodOut/stockGoodOut?type=1',
				}],
				
				user: uni.getStorageSync("user"),
				identity:uni.getStorageSync("identity"),
				canUse:true
			};
		},
		
		mounted() {
			if (this.identity == 2) {
				if(this.user.rights.analysisCurrent.indexOf("0") == -1){
					this.canUse = false
				}
			}
		}
	}
</script>

<style>
	.title {
		color: #333;
		font-weight: bold;
		font-size: 28rpx;
	}

	.modelItem {
		padding: 20rpx 30rpx;
		width: calc(100% - 60rpx);
		margin-bottom: 30rpx;
		border-radius: 40rpx;
		background: #F7F7F7;
	}

	.o_list {
		background: #F7F7F7;
	}

	.o_headerItem {
		background: #F7F7F7;
	}

	.o_item {
		width: 33.33%;
		font-weight: bold;
		margin-bottom: unset;
	}

	.o_text {
		margin-top: -10rpx;
	}
</style>
