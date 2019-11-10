<template>
	<view class="qiun-columns">
		
		<scroll-view scroll-y="true" style="height: calc(100vh - 80rpx);">
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
				<view class="qiun-title-dot-light">
					<fa-icon type="paperclip" size="20" color="#21b384"></fa-icon>
					<text style="margin-left: 10rpx;" v-if="type == 1">入库统计</text>
					<text style="margin-left: 10rpx;" v-else-if="type == 2">出库统计</text>
				</view>
			</view>
			<view class="qiun-charts" v-if="type == 1">
				<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts" disable-scroll=true @touchstart="touchColumn" @touchmove="moveColumn" @touchend="touchEndColumn"></canvas>
			</view>
			<view class="qiun-charts" v-else-if="type == 2">
				<canvas canvas-id="canvasColumn2" id="canvasColumn2" class="charts" disable-scroll=true @touchstart="touchColumn" @touchmove="moveColumn" @touchend="touchEndColumn"></canvas>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	import  { isJSON } from '@/utils/checker.js';
	import common from "@/utils/common.js";
	import chart from "@/utils/chart.js";
	let _self;
	let canvaColumn=null;
   
	export default {
		name: 'bchart',
		props: {
			now_day: {
				type: String,
				default: common.getDay(0)
			} ,// 标题
			type: {
				type: Number,
				default: 1
			}
		},
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				textarea:''
			}
		},
		mounted() {
			_self = this;
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.getServerData();
		},
		
		watch: {
			// 如果 `question` 发生改变，这个函数就会运行
			now_day: function(now_day, old_day) {
				//console.log(now_day,old_day)
				_self.now_day = now_day
				_self.getServerData()
			},
			
			type: function(now_type, old_type) {
				console.log(now_type,old_type)
				_self.type = now_type
				_self.getServerData()
			},
		},
		
		methods: {
			getServerData() {
				let year = _self.now_day.split("-")[0]
				let month = _self.now_day.split("-")[1]
				chart.getLineChart(year, month).then(res => {
					console.log(res)
					_self.textarea = JSON.stringify(res);
					
					if(_self.type == 1){
						_self.showColumn("canvasColumn",res);
					}else{
						_self.showColumn("canvasColumn2",res);
					}
					
				})
			},
			
			showColumn(canvasId,chartData){
				canvaColumn=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'column',
					fontSize:11,
					padding:[5,15,15,15],
					legend:{
						show:true,
						position:'top',
						float:'center',
						itemGap:30,
						padding:5,
						margin:5,
						//backgroundColor:'rgba(41,198,90,0.2)',
						//borderColor :'rgba(41,198,90,0.5)',
						borderWidth :1
					},
					dataLabel:true,
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: (canvasId == "canvasColumn")? chartData.columnSeries1:chartData.columnSeries2,
					animation: true,
					enableScroll: true,
					xAxis: {
						disableGrid:false,
						type:'grid',
						gridType:'dash',
						itemCount:4,
						scrollShow:true,
						scrollAlign:'left',
					},
					yAxis: {
						//disabled:true
						gridType:'dash',
						splitNumber:4,
						min:0,
						format:(val)=>{return val.toFixed(0)}//如不写此方法，Y轴刻度默认保留两位小数
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						column: {
							type:'group',
							width: _self.cWidth*_self.pixelRatio*0.45/chartData.categories.length
						}
					},
				});
				
			},
			touchColumn(e){
				canvaColumn.scrollStart(e);
			},
			moveColumn(e) {
				canvaColumn.scroll(e);
			},
			touchEndColumn(e) {
				canvaColumn.scrollEnd(e);
				canvaColumn.touchLegend(e, {
					animation:true,
				});
				canvaColumn.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			},
			changeData(){
				if(isJSON(_self.textarea)){
					let newdata=JSON.parse(_self.textarea);
					canvaColumn.updateData({
						series: newdata.series,
						categories: newdata.categories,
						scrollPosition:'right',
						animation:false
					});
				}else{
					uni.showToast({
						title:'数据格式错误',
						icon:"none"
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
	
	.qiun-title-bar {
		padding: 20rpx 0;
	}
</style>
