<template>
	<view v-if="canUse">
		<view class="modelItem">
			<view class="title">分析模块</view>
			<view class='o_list'>
				<navigator v-for='(value,index) in fristEle' :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem">
						<fa-icon :type="value.icon" size="20" color="#426ab3" style="line-height: 80rpx;"></fa-icon>
						<!--<i :class="'iconfont '+value.icon" style="font-size: 56rpx;color: #426ab3;line-height: 80rpx;"></i>-->
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
				fristEle: [{
						name: '畅销产品',
						icon: 'gg',
						url: '/pages/analysis/goodSell/goodSell',
					}, {
						name: '预警产品',
						icon: 'exclamation-circle',
						url: '/pages/report/warningGoods/warningGoods',
					}, {
						name: '客户销售',
						icon: 'id-card-o',
						url: '/pages/analysis/customSell/customSell',
					},
					{
						name: '供货商采购',
						icon: 'address-book',
						url: '/pages/analysis/producerSell/producerSell',
					}, {
						name: '类别汇总',
						icon: 'list',
						url: '/pages/analysis/classAll/classAll',
					}, {
						name: '单品统计',
						icon: 'quora',
						url: '/pages/manage/productCount/productCount',
					}, {
						name: '销售业绩',
						icon: 'area-chart',
						url: '/pages/report/staffChart/staffChart',
					}, {
						name: '经营状况',
						icon: 'recycle',
						url: '/pages/report/operational_status/operational_status',
					},
					{
						name: '报表',
						icon: 'pie-chart',
						url: '/pages/report/chart/chart',
					}
				],
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
		margin-top: unset;
	}
</style>
