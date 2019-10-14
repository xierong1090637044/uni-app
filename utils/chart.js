import Bmob from "hydrogen-js-sdk";
import common from "@/utils/common.js";
export default {
	//得到出入库的线形图数据
	getLineChart(month) {
		let lineReserve = {}
		let categories = []
		let series = []
		let seriesItem1 = {}
		let seriesItem2 = {}
		let outData = []
		let inData = []

		let uid = uni.getStorageSync("uid")
		let Day = new Date()
		let d = Day.getDate()
		let start_date = common.getDay(0)+" 00:00:00"
		let end_date = common.getDay(-d+1)+" 00:00:00"

		return new Promise((resolve, reject) => {
			const query = Bmob.Query("Bills");
			query.equalTo("userId", "==", uid);
			query.equalTo("createdAt", "<=", start_date);
			query.equalTo("createdAt", ">=", end_date);
			query.statTo("sum", "num");
			query.statTo("groupby", "createdAt,type");
			query.statTo("order", "-createdAt");
			query.limit(1000)
			query.find().then(res => {

				for (let i = 1; i < d; i++) {
					categories.push(common.getDay(-i))
					outData.push(0)
					inData.push(0)
				}
				
				for (let item of res) {
					let key = categories.indexOf(item.createdAt)
					if (item.type == 1 && key!=-1) {
						 inData[key] = item._sumNum
					} else {
						outData[key] = item._sumNum
					}
				}
				
				seriesItem1.name ="入库量"
				seriesItem1.data =inData
				series.push(seriesItem1)
				seriesItem2.name ="出库量"
				seriesItem2.data =outData
				series.push(seriesItem2)
				
				lineReserve.categories = categories
				lineReserve.series = series
				
				resolve(lineReserve)
				//console.log(lineReserve)
			});

		});
	}
}
