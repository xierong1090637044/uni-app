<template>
	<!--操作列表-->
	<view class='o_list'>
		<navigator v-for="(value,index) in optionsLists" :key="index" class='o_item' :url="(value.url)" hover-class="none">
			<view class='o_left_item'>
				<view>
					<fa-icon :type="value.icon" size="20" :color="value.color"></fa-icon>
				</view>
				<span class='o_text'>{{value.name}}</span>
			</view>
			<view>
				<fa-icon type="angle-right" size="20" color="#999" />
			</view>
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
				optionsLists: [{
						name: '入库记录',
						icon: 'file-o',
						url: '/pages/report/EnteringHistory/EnteringHistory?type=1',
						color: "#2ca879"
					},
					{
						name: '出库记录',
						icon: 'file-o',
						url: '/pages/report/EnteringHistory/EnteringHistory?type=-1',
						color: "#f30"
					},
					{
						name: '客户退货记录',
						icon: 'file-o',
						url: '/pages/report/EnteringHistory/EnteringHistory?type=2',
						color: "#b3b242"
					},
					{
						name: '盘点记录',
						icon: 'file-o',
						url: '/pages/report/EnteringHistory/EnteringHistory?type=3',
						color: "#b3424a"
					},
					{ name: '经营状况', icon: 'recycle', url: '/pages/report/operational_status/operational_status', color: "#426ab3" },
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	/* pages/home/index/index.wxss */
	.item {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.every_item {
		width: 50%;
		text-align: center;
		line-height: 30rpx;
		font-size: 14rpx;
	}

	.s_num {
		font-size: 16rpx;
		font-weight: bold;
	}

	.o_list {
		background: #fff;
		padding: 0 15rpx 10rpx;
	}

	.o_item {
		width: 100%;
		text-align: center;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30rpx 0;
		border-bottom: 1rpx solid#ddd;
	}

	.o_left_item {
		display: flex;
		align-items: center;
	}

	.o_text {
		color: #000;
		font-weight: bold;
		font-size: 24rpx;
		margin-left: 30rpx;
	}
</style>
