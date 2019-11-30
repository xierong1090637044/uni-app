import Bmob from "hydrogen-js-sdk";
module.exports = {
	//入库时增加产品数量
	enterAddGoodNum(products) {
		return new Promise((resolve, reject) => {
			for (let i = 0; i < products.length; i++) {
				let num = 0;
				const query = Bmob.Query('Goods');
				query.get(products[i].objectId).then(res => {
					console.log(products[i])

					if (products[i].selectd_model) {
						for (let model of products[i].selected_model) {
							for (let item of products[i].models) {
								if (item.id == model.id) {
									item.reserve = Number(item.reserve) + Number(model.num)
								}
								delete item.num // 清除没用的属行
							}
						}
						num = Number(products[i].reserve) + Number(products[i].num);
						res.set('models', products[i].models)
					} else {
						num = Number(products[i].reserve) + Number(products[i].num);
					}
					res.set('reserve', num)
					res.set('stocktype', (num > products[i].warning_num) ? 1 : 0)
					res.save()
					
					if(products[i].header){
						const query1 = Bmob.Query("Goods");
						query1.equalTo("header", "==", products[i].header.objectId);
						query1.equalTo("order", "==", 1);
						query1.statTo("sum", "reserve");
						query1.find().then(res => {
							console.log("dasds", res)
							let now_reserve = res[0]._sumReserve
							const query = Bmob.Query('Goods');
							query.get(products[i].header.objectId).then(res => {
								res.set('reserve', now_reserve)
								res.set('stocktype', (now_reserve > products[i].warning_num) ? 1 : 0)
								res.save()
								
								if (i == products.length - 1) {
									resolve(true)
								}
							})
						})
					}else{
						if (i == products.length - 1) {
							resolve(true)
						}
					}
					
				}).catch(err => {
					console.log(err)
				})
			}
		})
	},


	//出库时减少产品数量
	outRedGoodNum(products) {
		return new Promise((resolve, reject) => {
			for (let i = 0; i < products.length; i++) {
				let num = 0;
				const query = Bmob.Query('Goods');
				query.get(products[i].objectId).then(res => {
					//console.log(res)

					if (products[i].selectd_model) {
						for (let model of products[i].selected_model) {
							for (let item of products[i].models) {
								num += Number(item.reserve)
								if (item.id == model.id) {
									item.reserve = Number(item.reserve) - Number(model.num)
								}
								delete item.num // 清除没用的属行
							}
						}
						num = Number(products[i].reserve) - Number(products[i].num);
						res.set('models', products[i].models)
					} else {
						num = Number(products[i].reserve) - Number(products[i].num);
					}

					res.set('reserve', num)
					res.set('stocktype', (num >= products[i].warning_num) ? 1 : 0)
					res.save()

					if (products[i].warning_num >= num) {
						this.log(products[i].goodsName + "出库了" + products[i].num + "件，已经低于预警数量" + products[i].warning_num, -2,
							products[i].objectId);
					}
					this.record_staffOut(Number(products[i].num))

					if(products[i].header){
						const query1 = Bmob.Query("Goods");
						query1.equalTo("header", "==", products[i].header.objectId);
						query1.equalTo("order", "==", 1);
						query1.statTo("sum", "reserve");
						query1.find().then(res => {
							console.log("dasds", res)
							let now_reserve = res[0]._sumReserve
							const query = Bmob.Query('Goods');
							query.get(products[i].header.objectId).then(res => {
								res.set('reserve', now_reserve)
								res.set('stocktype', (now_reserve > products[i].warning_num) ? 1 : 0)
								res.save()
								
								if (i == products.length - 1) {
									resolve(true)
								}
							})
						})
					}else{
						if (i == products.length - 1) {
							resolve(true)
						}
					}
				}).catch(err => {
					console.log(err)
				})
			}
		})
	},

	//清除缓存
	handleData() {
		uni.removeStorageSync("warehouse");
		uni.removeStorageSync("stock");
		uni.removeStorageSync("custom");
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
	record_shopOut(id, have_out) {
		console.log(id, have_out)
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
		console.log(have_out, uni.getStorageSync("user").have_out)
		if (uni.getStorageSync("identity") == 1) {} else {
			const query = Bmob.Query('staffs');
			query.set('id', uni.getStorageSync("user").objectId) //需要修改的objectId
			query.set('have_out', Number(have_out) + uni.getStorageSync("user").have_out)
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

	js_date_time: function(unixtime, is_full) {
		var date = new Date(unixtime);
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		m = m < 10 ? ('0' + m) : m;
		var d = date.getDate();
		d = d < 10 ? ('0' + d) : d;
		var h = date.getHours();
		h = h < 10 ? ('0' + h) : h;
		var minute = date.getMinutes();
		var second = date.getSeconds();
		minute = minute < 10 ? ('0' + minute) : minute;
		second = second < 10 ? ('0' + second) : second;
		// return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;//年月日时分秒
		if (is_full) {
			return y + '-' + m + '-' + d + ' ' + h + ':' + minute;
		} else {
			return y + '-' + m + '-' + d;
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
