let now = new Date(); //当前日期
let nowDayOfWeek = now.getDay(); //今天本周的第几天
let nowDay = now.getDate(); //当前日
let nowMonth = now.getMonth(); //当前月
let nowYear = now.getYear(); //当前年
nowYear += (nowYear < 2000) ? 1900 : 0; //

let lastMonthDate = new Date(); //上月日期
lastMonthDate.setDate(1);
lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
let lastYear = lastMonthDate.getYear();
let lastMonth = lastMonthDate.getMonth();

module.exports = {


	//格式化日期：yyyy-MM-dd
	formatDate(date) {
		let myyear = date.getFullYear();
		let mymonth = date.getMonth() + 1;
		let myweekday = date.getDate();

		if (mymonth < 10) {
			mymonth = "0" + mymonth;
		}
		if (myweekday < 10) {
			myweekday = "0" + myweekday;
		}
		return (myyear + "-" + mymonth + "-" + myweekday);
	},

	//获得某月的天数
	getMonthDays(myMonth) {
		let monthStartDate = new Date(nowYear, myMonth, 1);
		let monthEndDate = new Date(nowYear, myMonth + 1, 1);
		let days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
		return days;
	},
	
	//本月
	getThisMonth(){
		let thisMonth ={}
		thisMonth.startDate = this.getMonthStartDate()+"  00:00:00";
		thisMonth.endDate = this.getMonthEndDate()+" 23:59:59";
		return thisMonth
	},

	//获得本季度的开始月份
	getQuarterStartMonth() {
		let quarterStartMonth = 0;
		if (nowMonth < 3) {
			quarterStartMonth = 0;
		}
		if (2 < nowMonth && nowMonth < 6) {
			quarterStartMonth = 3;
		}
		if (5 < nowMonth && nowMonth < 9) {
			quarterStartMonth = 6;
		}
		if (nowMonth > 8) {
			quarterStartMonth = 9;
		}
		return quarterStartMonth;
	},

	//获得本周的开始日期
	getWeekStartDate() {
		let weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
		return this.formatDate(weekStartDate);
	},

	//获得本周的结束日期
	getWeekEndDate() {
		let weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
		return this.formatDate(weekEndDate);
	},

	//获得本月的开始日期
	getMonthStartDate() {
		let monthStartDate = new Date(nowYear, nowMonth, 1);
		return this.formatDate(monthStartDate);
	},

	//获得本月的结束日期
	getMonthEndDate() {
		let monthEndDate = new Date(nowYear, nowMonth, this.getMonthDays(nowMonth));
		return this.formatDate(monthEndDate);
	},

	//获得上月开始时间
	getLastMonthStartDate() {
		let lastMonthStartDate = new Date(nowYear, lastMonth, 1);
		return this.formatDate(lastMonthStartDate);
	},

	//获得上月结束时间
	getLastMonthEndDate() {
		let lastMonthEndDate = new Date(nowYear, lastMonth, this.getMonthDays(lastMonth));
		return this.formatDate(lastMonthEndDate);
	},

	//获得本季度的开始日期
	getQuarterStartDate() {

		let quarterStartDate = new Date(nowYear, getQuarterStartMonth(), 1);
		return this.formatDate(quarterStartDate);
	},

	//或的本季度的结束日期
	getQuarterEndDate() {
		let quarterEndMonth = getQuarterStartMonth() + 2;
		let quarterStartDate = new Date(nowYear, quarterEndMonth, this.getMonthDays(quarterEndMonth));
		return this.formatDate(quarterStartDate);
	},
}
