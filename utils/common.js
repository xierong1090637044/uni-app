import Bmob from '@/utils/bmob.js';

module.exports = {
	//清除缓存
	handleData(){
		uni.removeStorageSync("warehouse");
		uni.removeStorageSync("stock");
		uni.removeStorageSync("custom");
		uni.removeStorageSync("now_product");
		uni.removeStorageSync("category");
		uni.removeStorageSync("class_user")
		uni.removeStorageSync("second_class")
	},
	
	//日志功能
	log(log, type, id) {
		let pointer = Bmob.Pointer('_User')
		let userid = pointer.set(uni.getStorageSync("uid"));

		const query = Bmob.Query('logs');
		query.set("parent", userid);
		query.set("log", log);
		query.set("detail_id", id);
		query.set("type", type);
		query.save().then(res => {
			console.log(res)
		}).catch(err => {
			console.log(err)
		})
	},

	//记录门店的出库数量
	record_shopOut(id,have_out) {
		console.log(id,have_out)
		const query = Bmob.Query('shops');
		query.set('id', id) //需要修改的objectId
		query.set('have_out', have_out)
		query.save().then(res => {
			console.log(res)
		}).catch(err => {
			console.log(err)
		})
	},
	
	//记录员工的出库数量
	record_staffOut(have_out) {
		console.log(have_out,uni.getStorageSync("user").have_out)
		if(uni.getStorageSync("identity") == 1){}else{
			const query = Bmob.Query('staffs');
			query.set('id', uni.getStorageSync("user").objectId) //需要修改的objectId
			query.set('have_out', have_out+uni.getStorageSync("user").have_out)
			query.save().then(res => {
				console.log(res)
			}).catch(err => {
				console.log(err)
			})
		}
		
	},

	//获得库存成本和总库存
	get_allCost() {
		let userid = uni.getStorageSync("uid")
		console.log(userid)
		const query = Bmob.Query("Goods");
		query.equalTo("userId", "==", userid);
		query.find().then(res => {
			console.log(res)
			let reserve_money = 0;
			let all_reserve = 0;
			for (let item of res) {
				console.log(item)
				reserve_money += Number(item.costPrice) * item.reserve
				all_reserve += item.reserve
			}
		});
	},

	//获取时间
	getDay: function(day, is_full) {
		var that = this;
		var today = new Date();
		var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
		today.setTime(targetday_milliseconds);
		var tYear = today.getFullYear();
		var tMonth = today.getMonth();
		var tDate = today.getDate();
		tMonth = that.handleMonth(tMonth + 1);
		tDate = that.handleMonth(tDate);
		if (is_full) {
			return tYear + "-" + tMonth + "-" + tDate + " 00:00:00";
		} else {
			return tYear + "-" + tMonth + "-" + tDate;
		}

	},

	handleMonth: function(month) {
		var m = month;
		if (month.toString().length == 1) {
			m = "0" + month;
		}
		return m;
	},
}
