<template>
	<view class="qiun-columns">
		
		<view class="display_flex_bet">
			<view style="text-align: center;width:50%">
				<picker :range="chartTypes" @change="select_type">
					<view class="uni-input display_flex" style="justify-content: center;">
						<text style="margin-right: 20rpx;">{{chartTypes[chartValue]}}</text>
						<fa-icon type="angle-down" size="20" color="#3d3d3d"></fa-icon>
					</view>
				</picker>
			</view>
			
			<view style="text-align: center;width:50%">
				<picker mode="date" :value="now_day" @change="bindDateChange" fields="month">
					<view class="uni-input display_flex" style="justify-content: center;">
						<text style="margin-right: 20rpx;">{{now_day}}</text>
						<fa-icon type="angle-down" size="20" color="#3d3d3d"></fa-icon>
					</view>
				</picker>
			</view>
		</view>
		
		
		<achart :now_day="now_day" v-if="chartValue == 0"></achart>
		<bchart :now_day="now_day" v-if="chartValue == 1 || chartValue == 2" :type="chartValue"></bchart>
		<cchart v-if="chartValue == 3"></cchart>
	</view>
</template>

<script>
	import common from "@/utils/common.js";
	import achart from '@/components/charts/AChart.vue'
	import bchart from '@/components/charts/BChart.vue'
	import cchart from '@/components/charts/CChart.vue'
	
	let that;
	export default {
		components: {
			achart,
			bchart,
			cchart
		},
		
		data() {
			return {
				now_day: common.getDay(0),
				chartTypes:["出入库统计","入库统计","出库统计","产品占比图"],
				chartValue:0,
			}
		},
		onLoad() {
			that = this;
		},
		methods: {
			//改变时间
			bindDateChange(e){
				console.log(e)
				that.now_day = e.detail.value
			},
			
			//选择图表类型
			select_type(e){
				that.chartValue = e.detail.value
			},
		}
	}
</script>

<style>
	
</style>
