import Bmob from "hydrogen-js-sdk";
import common from "@/utils/common.js";
export default {
	//得到出入库的线形图数据
	getLineChart(year, month) {
		let lineReserve = {}
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
			const query = Bmob.Query("Bills");
			query.equalTo("userId", "==", uid);
			query.equalTo("createdAt", "<=", start_date);
			query.equalTo("createdAt", ">=", end_date);
			query.statTo("sum", "num,total_money,really_total_money");
			query.statTo("groupby", "createdAt,type");
			query.statTo("order", "-createdAt");
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

				seriesItem1.name = "入库量"
				seriesItem1.data = inData
				series.push(seriesItem1)
				seriesItem2.name = "出库量"
				seriesItem2.data = outData
				series.push(seriesItem2)
				
				seriesItem3.name = "入库金额"
				seriesItem3.data = outMoney
				series1.push(seriesItem3)
				seriesItem4.name = "出库金额"
				seriesItem4.data = inMoney
				series1.push(seriesItem4)
				
				seriesItem5.name = "入库金额"
				seriesItem5.data = outReaMoney
				series2.push(seriesItem5)
				seriesItem6.name = "出库金额"
				seriesItem6.data = inReaMoney
				series2.push(seriesItem6)
				

				lineReserve.categories = categories
				lineReserve.series = series
				lineReserve.series1 = series1
				lineReserve.series2 = series2

				resolve(lineReserve)
				//console.log(lineReserve)
			});

		});
	}
}
