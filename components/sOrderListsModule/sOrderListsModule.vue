<template>
	<view>

		<view class="modelItem">
			<view class="title">销售</view>
			<view class='o_list'>
				<navigator v-for='(value,index) in nowFristEle' :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem">
						<fa-icon :type="value.icon" size="20" color="#426ab3" style="line-height: 80rpx;"></fa-icon>
						<!--<i :class="'iconfont '+value.icon" style="font-size: 56rpx;color: #426ab3;line-height: 80rpx;"></i>-->
					</view>
					<view class='o_text'>{{value.name}}</view>
				</navigator>
			</view>
		</view>

		<view class="modelItem">
			<view class="title">采购</view>
			<view class='o_list'>
				<navigator v-for='(value,index) in nowSecondEle' :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem">
						<fa-icon :type="value.icon" size="20" color="#426ab3" style="line-height: 80rpx;"></fa-icon>
						<!--<i :class="'iconfont '+value.icon" style="font-size: 56rpx;color: #426ab3;line-height: 80rpx;"></i>-->
					</view>
					<view class='o_text'>{{value.name}}</view>
				</navigator>
			</view>
		</view>

		<view class="modelItem">
			<view class="title">库存</view>
			<view class='o_list'>
				<navigator v-for='(value,index) in nowThridEle' :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem">
						<fa-icon :type="value.icon" size="20" color="#426ab3" style="line-height: 80rpx;"></fa-icon>
						<!--<i :class="'iconfont '+value.icon" style="font-size: 56rpx;color: #426ab3;line-height: 80rpx;"></i>-->
					</view>
					<view class='o_text'>{{value.name}}</view>
				</navigator>
			</view>
		</view>
		
		<view class="modelItem">
			<view class="title">明细</view>
			<view class='o_list'>
				<navigator v-for='(value,index) in nowFourEle' :key="index" class='o_item' :url="(value.url)" hover-class="none">
					<view class="o_headerItem">
						<fa-icon :type="value.icon" size="20" color="#426ab3" style="line-height: 80rpx;"></fa-icon>
						<!--<i :class="'iconfont '+value.icon" style="font-size: 56rpx;color: #426ab3;line-height: 80rpx;"></i>-->
					</view>
					<view class='o_text'>{{value.name}}</view>
				</navigator>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				fristEle: [{
						name: '销售订单',
						icon: 'file-o',
						url: '/pages/report/EnteringHistory/EnteringHistory?type=-3&title=销售订单',
						id: 4,
					},
					{
						name: '销售单',
						icon: 'file-o',
						url: '/pages/report/EnteringHistory/EnteringHistory?type=-1&extra_type=1&title=销售单',
						id: 5,
					},
					{
						name: '销售退货单',
						icon: 'file-o',
						url: '/pages/report/EnteringHistory/EnteringHistory?type=1&extra_type=4&title=销售退货单',
						id: 6,
					},
				],
				secondEle: [{
						name: '采购订单',
						icon: 'file-o',
						url: '/pages/report/EnteringHistory/EnteringHistory?type=-4&extra_type=3&title=采购订单',
						id: 7,
					},
					{
						name: '采购单',
						icon: 'file-o',
						url: '/pages/report/EnteringHistory/EnteringHistory?type=1&extra_type=1&title=采购单',
						id: 8,
					},
					{
						name: '采购退货单',
						icon: 'file-o',
						url: '/pages/report/EnteringHistory/EnteringHistory?type=-1&extra_type=4&title=采购退货单',
						id: 9,
					},
				],

				thridEle: [{
						name: '入库记录',
						icon: 'file-o',
						url: '/pages/report/EnteringHistory/EnteringHistory?type=1&title=入库记录',
						id: 0,
					},
					{
						name: '出库记录',
						icon: 'file-o',
						url: '/pages/report/EnteringHistory/EnteringHistory?type=-1&title=出库记录',
						id: 1,
					},
					{
						name: '调拨记录',
						icon: 'file-o',
						url: '/pages/report/EnteringHistory/EnteringHistory?type=-2&title=调拨记录',
						id: 2,
					},
					{
						name: '盘点记录',
						icon: 'file-o',
						url: '/pages/report/EnteringHistory/EnteringHistory?type=3&title=盘点记录',
						id: 3,
					},
				],
				
				fourEle: [{
						name: '销售明细',
						icon: 'file-archive-o',
						url: '/pages/report/sellPurchaseDetList/sellPurchaseDetList?type=-1&extra_type=1&title=销售明细',
						id: 10,
					},
					{
						name: '采购明细',
						icon: 'file-archive-o',
						url: '/pages/report/sellPurchaseDetList/sellPurchaseDetList?type=1&extra_type=1&title=采购明细',
						id: 11,
					},
					{
						name: '出入库明细',
						icon: 'file-archive-o',
						url: '/pages/report/stockOutInDetList/stockOutInDetList',
						id: 12,
					},
				],

				nowFristEle: [],
				nowSecondEle: [],
				nowThridEle: [],
				nowFourEle:[],
				user: uni.getStorageSync("user"),
				identity:uni.getStorageSync("identity"),
			};
		},

		mounted() {
			if (this.identity == 2) {
				//console.log(item)
				for (let model1 of this.fristEle) {
					if (this.user.rights.recodecurrent.indexOf(model1.id.toString()) >= 0) {
						this.nowFristEle.push(model1)
					}
				}

				for (let model2 of this.secondEle) {
					if (this.user.rights.recodecurrent.indexOf(model2.id.toString()) >= 0) {
						this.nowSecondEle.push(model2)
					}
				}

				for (let model3 of this.thridEle) {
					if (this.user.rights.recodecurrent.indexOf(model3.id.toString()) >= 0) {
						this.nowThridEle.push(model3)
					}
				}
				
				for (let model4 of this.thridEle) {
					if (this.user.rights.recodecurrent.indexOf(model4.id.toString()) >= 0) {
						this.nowFourEle.push(model4)
					}
				}
			} else {
				this.nowFristEle = this.fristEle
				this.nowSecondEle = this.secondEle
				this.nowThridEle = this.thridEle
				this.nowFourEle = this.fourEle
			}
		},
	}
</script>

<style>
	.title {
		color: #333;
		font-weight: bold;
		font-size: 28rpx;
	}

	.modelItem {
		padding: 10rpx 30rpx;
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
