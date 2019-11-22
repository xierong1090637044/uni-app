import Bmob from "hydrogen-js-sdk";
module.exports = {
	//入库时增加产品数量
	enterAddGoodNum(products) {
		return new Promise((resolve, reject) => {
			let stock = uni.getStorageSync("warehouse") ? uni.getStorageSync("warehouse")[0].stock : ''
			let uid = uni.getStorageSync("uid")
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

					const query = Bmob.Query("Goods");
					query.equalTo("userId", "==", uid);
					query.equalTo("goodsName", "==", products[i].goodsName);
					query.equalTo("stocks", "==", stock.objectId);
					query.find().then(res => {
						console.log("仓库里的产品", res)
						if (res.length == 0) {
							this.upload_good_withNoCan(products[i], stock, Number(products[i].num)).then(res => {
								console.log(res)
								if (i == products.length - 1) {
									resolve(true)
								}
							})
						} else {
							const query = Bmob.Query('Goods');
							query.set('id', res[0].objectId) //需要修改的objectId
							query.set('reserve', res[0].reserve + Number(products[i].num))
							query.save().then(res => {
								console.log(res)
								if (i == products.length - 1) {
									resolve(true)
								}
							}).catch(err => {
								console.log(err)
							})
						}

					})

					if (products[i].max_num >= 0 && products[i].max_num <= num) {
						this.log(products[i].goodsName + "入库了" + products[i].num + "件，已经超过设置的最大库存值" + products[i].max_num, -2,
							products[i].objectId);
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
			let stock = uni.getStorageSync("warehouse") ? uni.getStorageSync("warehouse")[0].stock : ''
			let uid = uni.getStorageSync("uid")
			for (let i = 0; i < products.length; i++) {
				let num = 0;
				const query = Bmob.Query('Goods');
				query.get(products[i].objectId).then(res => {
					console.log(products[i])

					if (products[i].selectd_model) {
						for (let model of products[i].selected_model) {
							for (let item of products[i].models) {
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
					res.set('stocktype', (num > products[i].warning_num) ? 1 : 0)
					res.save()

					const query = Bmob.Query("Goods");
					query.equalTo("userId", "==", uid);
					query.equalTo("goodsName", "==", products[i].goodsName);
					query.equalTo("stocks", "==", stock.objectId);
					query.find().then(res => {
						console.log("仓库里的产品", res)
						if (res.length == 0) {
							this.upload_good_withNoCan(products[i], stock, Number(products[i].num), "out").then(res => {
								console.log(res)
								if (i == products.length - 1) {
									resolve(true)
								}
							})
						} else {
							const query = Bmob.Query('Goods');
							query.set('id', res[0].objectId) //需要修改的objectId
							query.set('reserve', res[0].reserve - Number(products[i].num))
							query.save().then(res => {
								console.log(res)
								if (i == products.length - 1) {
									resolve(true)
								}
							}).catch(err => {
								console.log(err)
							})
						}

					})
					if (products[i].warning_num >= num) {
						this.log(products[i].goodsName + "出库了" + products[i].num + "件，已经低于预警数量" + products[i].warning_num, -2,
							products[i].objectId);
					}

				}).catch(err => {
					console.log(err)
				})
			}
		})
	},

	//上传二级商品
	upload_good_withNoCan(good, stock, reserve, type) {
		return new Promise((resolve, reject) => {
			let uid = uni.getStorageSync("uid");
			const pointer = Bmob.Pointer('_User')
			const userid = pointer.set(uid)

			const pointer1 = Bmob.Pointer('stocks')
			const p_stock_id = pointer1.set(stock.objectId) //仓库的id关联
			const pointer2 = Bmob.Pointer('Goods')
			const p_good_id = pointer2.set(good.objectId) //仓库的id关联

			const query = Bmob.Query('Goods');
			query.set("goodsName", good.goodsName)
			if (type == "out") {
				query.set("reserve", 0 - Number(reserve))
			} else {
				query.set("reserve", Number(reserve))
			}

			query.set("stocks", p_stock_id)
			query.set("userId", userid)
			query.set("header", p_good_id)
			query.set("costPrice", Number(good.costPrice))
			query.set("retailPrice", Number(good.retailPrice))
			query.set("order", 1)
			query.save().then(res => {
				console.log(res)
				resolve([true, res])
			}).catch(err => {
				console.log(err)
			})

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
	getDay: function(day, is_full,now) {
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
			
			if(now){
				let tHour = today.getHours()<10?'0'+today.getHours():today.getHours();
				let tMintue = today.getMinutes()<10?'0'+today.getMinutes():today.getMinutes();
				let tSecond = (today.getSeconds()<10)?'0'+today.getSeconds():today.getSeconds();
				
				return tYear + "-" + tMonth + "-" + tDate + " "+tHour + ":" + tMintue + ":" + tSecond;
			}else{
				return tYear + "-" + tMonth + "-" + tDate + " 00:00:00";
			}
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
