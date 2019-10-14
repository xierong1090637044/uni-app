<template>
	<view class="qiun-columns">
		<view style="text-align: center;">
			<picker mode="date" :value="now_day" @change="bindDateChange" :end="now_day" fields="month">
				<view class="uni-input display_flex" style="justify-content: center;">
					<tex style="margin-right: 20rpx;">{{now_day}}</tex>
					<fa-icon type="angle-down" size="20" color="#3d3d3d"></fa-icon>
				</view>
			</picker>
		</view>
		<scroll-view scroll-y="true" style="height: calc(100vh - 80rpx);">
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
				<view class="qiun-title-dot-light">
					<fa-icon type="paperclip" size="20" color="#21b384"></fa-icon>
					<text style="margin-left: 10rpx;">出入库总数</text>
				</view>
			</view>
			<view class="qiun-charts">
				<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" disable-scroll=true @touchstart="touchLineA($event,'A')"
				 @touchmove="moveLineA($event,'A')" @touchend="touchEndLineA($event,'A')"></canvas>
			</view>
			
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
				<view class="qiun-title-dot-light">
					<fa-icon type="eercast" size="20" color="#ff4f00"></fa-icon>
					<text style="margin-left: 10rpx;">出入库总额</text>
					<text style="font-size: 24rpx;color:#999">（以实际出入库单价为准）</text>
				</view>
			</view>
			<view class="qiun-charts">
				<canvas canvas-id="canvasLineB" id="canvasLineB" class="charts" disable-scroll=true @touchstart="touchLineA($event,'B')"
				 @touchmove="moveLineA($event,'B')" @touchend="touchEndLineA($event,'B')"></canvas>
			</view>
			
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
				<view class="qiun-title-dot-light">
					<fa-icon type="eercast" size="20" color="#ff4f00"></fa-icon>
					<text style="margin-left: 10rpx;">出入库总额</text>
					<text style="font-size: 24rpx;color:#999">（以成本价、零售价为准，自2019.10.15日更新此数据）</text>
				</view>
			</view>
			<view class="qiun-charts">
				<canvas canvas-id="canvasLineC" id="canvasLineC" class="charts" disable-scroll=true @touchstart="touchLineA($event,'C')"
				 @touchmove="moveLineA($event,'C')" @touchend="touchEndLineA($event,'C')"></canvas>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	import chart from "@/utils/chart.js";
	import common from "@/utils/common.js";
	import {
		isJSON
	} from '@/utils/checker.js';
	let _self;
	let canvaLineA;
	let canvaLineB;
	let canvaLineC;
	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				textarea: '',
				now_day: common.getDay(0)
			}
		},
		onLoad() {
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			//改变时间
			bindDateChange(e){
				console.log(e)
				_self.now_day = e.detail.value
				_self.getServerData()
			},
			
			getServerData() {
				let year = _self.now_day.split("-")[0]
				let month = _self.now_day.split("-")[1]
				chart.getLineChart(year,month).then(res => {
					console.log(res)
					_self.textarea = JSON.stringify(res);
					_self.showLineA("canvasLineA", res);
					_self.showLineB("canvasLineB", res);
					_self.showLineC("canvasLineC", res);
				})
			},
			
			showLineA(canvasId, chartData) {
				canvaLineA = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					fontSize: 11,
					padding: [15, 15, 0, 15],
					legend: {
						show: true,
						padding: 5,
						lineHeight: 11,
						margin: 5,
					},
					dataLabel: true,
					dataPointShape: true,
					dataPointShapeType: 'hollow',
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					enableScroll: true, //开启图表拖拽功能
					xAxis: {
						disableGrid: false,
						type: 'grid',
						gridType: 'dash',
						itemCount: 4,
						scrollShow: true,
						scrollAlign: 'left'
					},
					yAxis: {
						//disabled:true
						gridType: 'dash',
						splitNumber: 8,
						format: (val) => {
							return val.toFixed(0)
						} //如不写此方法，Y轴刻度默认保留两位小数
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						line: {
							type: 'straight'
						}
					},
				});

			},
			
			showLineB(canvasId, chartData) {
				canvaLineB = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					fontSize: 11,
					padding: [15, 15, 0, 15],
					legend: {
						show: true,
						padding: 5,
						lineHeight: 11,
						margin: 5,
					},
					dataLabel: true,
					dataPointShape: true,
					dataPointShapeType: 'hollow',
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series1,
					animation: true,
					enableScroll: true, //开启图表拖拽功能
					xAxis: {
						disableGrid: false,
						type: 'grid',
						gridType: 'dash',
						itemCount: 4,
						scrollShow: true,
						scrollAlign: 'left'
					},
					yAxis: {
						//disabled:true
						gridType: 'dash',
						splitNumber: 8,
						format: (val) => {
							return val.toFixed(0)
						} //如不写此方法，Y轴刻度默认保留两位小数
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						line: {
							type: 'straight'
						}
					},
				});
			},
			
			showLineC(canvasId, chartData) {
				canvaLineC = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'line',
					fontSize: 11,
					padding: [15, 15, 0, 15],
					legend: {
						show: true,
						padding: 5,
						lineHeight: 11,
						margin: 5,
					},
					dataLabel: true,
					dataPointShape: true,
					dataPointShapeType: 'hollow',
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series2,
					animation: true,
					enableScroll: true, //开启图表拖拽功能
					xAxis: {
						disableGrid: false,
						type: 'grid',
						gridType: 'dash',
						itemCount: 4,
						scrollShow: true,
						scrollAlign: 'left'
					},
					yAxis: {
						//disabled:true
						gridType: 'dash',
						splitNumber: 8,
						format: (val) => {
							return val.toFixed(0)
						} //如不写此方法，Y轴刻度默认保留两位小数
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						line: {
							type: 'straight'
						}
					},
				});
			},
			
			touchLineA(e,type) {
				if(type =="A"){
					canvaLineA.scrollStart(e);
				}else if(type =="C"){
					canvaLineC.scrollStart(e);
				}else{
					canvaLineB.scrollStart(e);
				}
			},
			moveLineA(e,type) {
				if(type =="A"){
					canvaLineA.scroll(e);
				}else if(type =="C"){
					canvaLineC.scroll(e);
				}else{
					canvaLineB.scroll(e);
				}
			},
			touchEndLineA(e,type) {
				if(type =="A"){
					canvaLineA.scrollEnd(e);
					//下面是toolTip事件，如果滚动后不需要显示，可不填写
					canvaLineA.touchLegend(e);
					canvaLineA.showToolTip(e, {
						format: function(item, category) {
							return category + ' ' + item.name + ':' + item.data
						}
					});
				}else if(type =="C"){
					canvaLineC.scrollEnd(e);
					//下面是toolTip事件，如果滚动后不需要显示，可不填写
					canvaLineC.touchLegend(e);
					canvaLineC.showToolTip(e, {
						format: function(item, category) {
							return category + ' ' + item.name + ':' + item.data
						}
					});
				}else{
					canvaLineB.scrollEnd(e);
					//下面是toolTip事件，如果滚动后不需要显示，可不填写
					canvaLineB.touchLegend(e);
					canvaLineB.showToolTip(e, {
						format: function(item, category) {
							return category + ' ' + item.name + ':' + item.data
						}
					});
				}
				
			},
			changeData() {
				if (isJSON(_self.textarea)) {
					let newdata = JSON.parse(_self.textarea);
					canvaLineA.updateData({
						series: newdata.series,
						categories: newdata.categories,
						scrollPosition: 'right',
						animation: false
					});
				} else {
					uni.showToast({
						title: '数据格式错误',
						image: '../../../static/images/alert-warning.png'
					})
				}
			}
		}
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.qiun-title-dot-light {
		text-align: left;
		font-size: 32rpx;
		color: #333;
		font-weight: bold;
		padding: 20rpx;
	}
</style>
