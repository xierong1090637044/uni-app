import Bmob from "hydrogen-js-sdk";
import common from "@/utils/common.js";
export default {
	
	//查询产品列表
	RingChart() {
		let uid = uni.getStorageSync("uid")
		let ringChart = {}
		return new Promise((resolve, reject) => {
			const query = Bmob.Query("Goods");
			query.equalTo("userId", "==", uid);
			query.equalTo("status", "!=", -1);
			
			query.order("-reserve"); //按照条件降序
			query.limit(30);
			query.select("reserve","goodsName");
			query.find().then(res => {
				//console.log(res)
				let series = []
				for(let item of res){
					let data = {}
					data.name = item.goodsName
					data.data = item.reserve
					series.push(data)
				}
				ringChart.series = series
				resolve(ringChart)
			});
		})
		
	},
	
	//得到出入库的线形图数据
	getLineChart(year, month) {
		let lineReserve = {}
		let columnChart = {}
		
		let categories = []
		let series = []
		let seriesItem1 = {}
		let seriesItem2 = {}
		let outData = []
		let inData = []
		
		let series1 = []
		let seriesItem3 = {}
		let seriesItem4 = {}
		let outMoney = []
		let inMoney = []
		
		let series2 = []
		let seriesItem5 = {}
		let seriesItem6 = {}
		let outReaMoney = []
		let inReaMoney = []
		
		let columnSeries1 = [] // 入库统计
		let columnSeries2 = [] // 出库统计

		let uid = uni.getStorageSync("uid")
		let Day = new Date()
		let d
		let now_month = Day.getMonth() + 1
		let now_year = Day.getFullYear();
		let start_date
		let end_date
		if (now_month != month || now_year != now_year) {
			Day = new Date(year, month, 0)
			d = Day.getDate()
			start_date = year + "-" + month + "-" + d + " 00:00:00"
			end_date = year + "-" + month + "-01" + " 00:00:00"
		} else {
			d = Day.getDate()
			start_date = common.getDay(1) + " 00:00:00"
			end_date = common.getDay(-d + 1) + " 00:00:00"
		}


		return new Promise((resolve, reject) => {
			const query = Bmob.Query("NBills");
			query.equalTo("userId", "==", uid);
			query.equalTo("createdAt", ">=", end_date);
			query.equalTo("createdAt", "<=", start_date);
			query.statTo("sum", "num,total_money,really_total_money");
			query.statTo("groupby", "createdAt,type");
			query.statTo("order", "-createdAt");
			query.equalTo("status", "!=", false);
			query.limit(1000)
			query.find().then(res => {

				if (now_month != month || now_year != now_year) {
					for (let i = 1; i <= d; i++) {
						let day = year + "-" + month + "-" + (i <10?'0'+i:i)
						categories.push(day)
						outData.push(0)
						inData.push(0)
						outMoney.push(0)
						inMoney.push(0)
						outReaMoney.push(0)
						inReaMoney.push(0)
					}
				} else {
					for (let i = 0; i < d; i++) {
						categories.push(common.getDay(-i))
						outData.push(0)
						inData.push(0)
						outMoney.push(0)
						inMoney.push(0)
						outReaMoney.push(0)
						inReaMoney.push(0)
					}
				}

				for (let item of res) {
					let key = categories.indexOf(item.createdAt)
					if (item.type == 1 && key != -1) {
						inData[key] = item._sumNum
						inMoney[key] = item._sumTotal_money
						inReaMoney[key] = item._sumReally_total_money
					} else {
						outData[key] = item._sumNum
						outMoney[key] = item._sumTotal_money
						outReaMoney[key] = item._sumReally_total_money
					}
				}
				
				seriesItem2.name = "出库量"
				seriesItem2.data = outData
				series.push(seriesItem2)
				columnSeries2.push(seriesItem2)
				seriesItem1.name = "入库量"
				seriesItem1.data = inData
				series.push(seriesItem1)
				columnSeries1.push(seriesItem1)
				
				seriesItem3.name = "出库金额"
				seriesItem3.data = outMoney
				series1.push(seriesItem3)
				//columnSeries1.push(seriesItem3)
				seriesItem4.name = "入库金额"
				seriesItem4.data = inMoney
				series1.push(seriesItem4)
				
				seriesItem5.name = "出库金额"
				seriesItem5.data = outReaMoney
				columnSeries2.push(seriesItem5)
				series2.push(seriesItem5)
				seriesItem6.name = "入库金额"
				seriesItem6.data = inReaMoney
				series2.push(seriesItem6)
				columnSeries1.push(seriesItem6)
				

				lineReserve.categories = categories
				lineReserve.series = series
				lineReserve.series1 = series1
				lineReserve.series2 = series2
				lineReserve.columnSeries1 = columnSeries1
				lineReserve.columnSeries2 = columnSeries2

				resolve(lineReserve)
				//console.log(lineReserve)
			});

		});
	},
	
	
	
	//得到销售采购的线形图数据
	getLineChart2(year, month) {
		let lineReserve = {}
		let columnChart = {}
		
		let categories = []
		let series = []
		let seriesItem1 = {}
		let seriesItem2 = {}
		let outData = []
		let inData = []
		
		let series1 = []
		let seriesItem3 = {}
		let seriesItem4 = {}
		let outMoney = []
		let inMoney = []
		
		let series2 = []
		let seriesItem5 = {}
		let seriesItem6 = {}
		let outReaMoney = []
		let inReaMoney = []
		
		let columnSeries1 = [] // 入库统计
		let columnSeries2 = [] // 出库统计
	
		let uid = uni.getStorageSync("uid")
		let Day = new Date()
		let d
		let now_month = Day.getMonth() + 1
		let now_year = Day.getFullYear();
		let start_date
		let end_date
		if (now_month != month || now_year != now_year) {
			Day = new Date(year, month, 0)
			d = Day.getDate()
			start_date = year + "-" + month + "-" + d + " 00:00:00"
			end_date = year + "-" + month + "-01" + " 00:00:00"
		} else {
			d = Day.getDate()
			start_date = common.getDay(1) + " 00:00:00"
			end_date = common.getDay(-d + 1) + " 00:00:00"
		}
	
	
		return new Promise((resolve, reject) => {
			const query = Bmob.Query("NBills");
			query.equalTo("userId", "==", uid);
			query.equalTo("createdAt", ">=", end_date);
			query.equalTo("createdAt", "<=", start_date);
			query.equalTo("extra_type", "==", 1);
			query.statTo("sum", "num,total_money,really_total_money");
			query.statTo("groupby", "createdAt,type");
			query.statTo("order", "-createdAt");
			query.equalTo("status", "!=", false);
			query.limit(1000)
			query.find().then(res => {
	
				if (now_month != month || now_year != now_year) {
					for (let i = 1; i <= d; i++) {
						let day = year + "-" + month + "-" + (i <10?'0'+i:i)
						categories.push(day)
						outData.push(0)
						inData.push(0)
						outMoney.push(0)
						inMoney.push(0)
						outReaMoney.push(0)
						inReaMoney.push(0)
					}
				} else {
					for (let i = 0; i < d; i++) {
						categories.push(common.getDay(-i))
						outData.push(0)
						inData.push(0)
						outMoney.push(0)
						inMoney.push(0)
						outReaMoney.push(0)
						inReaMoney.push(0)
					}
				}
	
				for (let item of res) {
					let key = categories.indexOf(item.createdAt)
					if (item.type == 1 && key != -1) {
						inData[key] = item._sumNum
						inMoney[key] = item._sumTotal_money
						inReaMoney[key] = item._sumReally_total_money
					} else {
						outData[key] = item._sumNum
						outMoney[key] = item._sumTotal_money
						outReaMoney[key] = item._sumReally_total_money
					}
				}
				
				seriesItem1.name = "销售量"
				seriesItem1.data = outData
				series.push(seriesItem1)
				columnSeries1.push(seriesItem1)
				seriesItem2.name = "采购数量"
				seriesItem2.data = inData
				series.push(seriesItem2)
				columnSeries2.push(seriesItem2)
				
				seriesItem3.name = "销售金额"
				seriesItem3.data = outMoney
				series1.push(seriesItem3)
				//columnSeries1.push(seriesItem3)
				seriesItem4.name = "采购金额"
				seriesItem4.data = inMoney
				series1.push(seriesItem4)
				
				seriesItem5.name = "销售金额"
				seriesItem5.data = outReaMoney
				columnSeries2.push(seriesItem5)
				series2.push(seriesItem5)
				seriesItem6.name = "采购金额"
				seriesItem6.data = inReaMoney
				series2.push(seriesItem6)
				columnSeries1.push(seriesItem6)
				
	
				lineReserve.categories = categories
				lineReserve.series = series
				lineReserve.series1 = series1
				lineReserve.series2 = series2
				lineReserve.columnSeries1 = columnSeries1
				lineReserve.columnSeries2 = columnSeries2
	
				resolve(lineReserve)
				//console.log(lineReserve)
			});
	
		});
	}
}
