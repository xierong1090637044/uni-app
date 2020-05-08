<template>
	<view class="qiun-columns">
		<view class="qiun-charts">
			<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" @touchstart="touchColumn" disable-scroll=true></canvas>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	var _self;
	var canvaColumn = null;

	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				serverData: '',
			}
		},
		mounted() {
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(400);
			this.getServerData();
		},
		methods: {
			getServerData() {
				this.$http.Post("record_customDetBarChart", {}).then(res => {
					//console.log(res.data.data)
					//下面这个根据需要保存后台数据，我是为了模拟更新柱状图，所以存下来了
					_self.serverData = res.data;
					let debtMoneys = []
					let Column = {
						categories: [],
						series: []
					};
					let seriesItem = {}
					for (let item of res.data) {
						Column.categories.push(item.客户)
						debtMoneys.push(item.欠款金额)
					}
					seriesItem.name = "客户"
					seriesItem.data = debtMoneys
					Column.series.push(seriesItem)

					console.log(Column)
					_self.showColumn("canvasColumn", Column);
				});
			},
			showColumn(canvasId, chartData) {
				canvaColumn = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'column',
					legend: {
						show: true
					},
					fontSize: 11,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					animation: true,
					categories: chartData.categories,
					series: chartData.series,
					enableScroll: true, //开启图表拖拽功能
					xAxis: {
						disableGrid: true,
						scrollShow: true, //新增是否显示滚动条，默认false
						scrollAlign: 'left', //滚动条初始位置
						itemCount: 5, //x轴单屏显示数据的数量，默认为5个
						scrollShow: true, //新增是否显示滚动条，默认false
						scrollAlign: 'left', //滚动条初始位置
						scrollBackgroundColor: '#F7F7FF', //默认为 #EFEBEF
						scrollColor: '#DEE7F7', //默认为 #A6A6A6
					},
					yAxis: {
						//disabled:true
					},
					dataLabel: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						column: {
							type: 'group',
							width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length
						}
					}
				});

			},
			touchColumn(e) {
				canvaColumn.showToolTip(e, {
					format: function(item, category) {
						if (typeof item.data === 'object') {
							return category + ' ' + item.name + ':' + item.data.value
						} else {
							return category + ' ' + item.name + ':' + item.data
						}
					}
				});
			},
		}
	}
</script>

<style>
	page {
		background: #F2F2F2;
		width: 750upx;
		overflow-x: hidden;
	}

	.qiun-padding {
		padding: 2%;
		width: 96%;
	}

	.qiun-wrap {
		display: flex;
		flex-wrap: wrap;
	}

	.qiun-rows {
		display: flex;
		flex-direction: row !important;
	}

	.qiun-columns {
		display: flex;
		flex-direction: column !important;
	}

	.qiun-common-mt {
		margin-top: 10upx;
	}

	.qiun-bg-white {
		background: #FFFFFF;
	}

	.qiun-title-bar {
		width: 96%;
		padding: 10upx 2%;
		flex-wrap: nowrap;
	}

	.qiun-title-dot-light {
		border-left: 10upx solid #0ea391;
		padding-left: 10upx;
		font-size: 32upx;
		color: #000000
	}

	.qiun-charts {
		width: 750upx;
		height: 400upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 400upx;
		background-color: #FFFFFF;
	}
</style>
