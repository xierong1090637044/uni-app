import Bmob from "hydrogen-js-sdk";
module.exports = {
	//入库时增加产品数量
	enterAddGoodNum(products, type) {
		let that = this;
		return new Promise((resolve, reject) => {
			for (let i = 0; i < products.length; i++) {
				let num = 0;
				const query = Bmob.Query('Goods');
				query.get(products[i].objectId).then(res => {
					let goodInfo = res
					if (products[i].selected_model) {
						for (let model of products[i].selected_model) {
							for (let item of goodInfo.models) {
								if (item.id == model.id) {
									item.reserve = Number(item.reserve) + Number(model.num)
								}
								delete item.num // 清除没用的属行
							}
						}
						num = Number(goodInfo.reserve) + Number(products[i].num);
						query.set('models', goodInfo.models)
					} else {
						num = Number(goodInfo.reserve) + Number(products[i].num);
					}
					query.set('reserve', num)
					query.set('id', products[i].objectId) //需要修改的objectId
					query.save().then(res => {
						//console.log(products[i])
						if (products[i].header) {
							const query1 = Bmob.Query("Goods");
							query1.equalTo("header", "==", products[i].header.objectId);
							query1.equalTo("order", "==", 1);
							query1.statTo("sum", "reserve");
							query1.find().then(res => {
								//console.log("dasds", res)
								let now_reserve = res[0]._sumReserve
								const query = Bmob.Query('Goods');
								query.set('reserve', now_reserve)
								if (type == "purchase") {
									query.set('costPrice', products[i].modify_retailPrice)
								}
								query.set('id', products[i].header.objectId)
								query.save().then(res => {
									//that.modifyStockType(products[i].header.objectId) //显示预警
									if (i == products.length - 1) {
										resolve(true)
									}
								})
							})
						} else {
							//that.modifyStockType(products[i].objectId) //显示预警
							if (i == products.length - 1) {
								resolve(true)
							}
						}

					}).catch(err => {
						console.log(err)
					})
				})

			}
		})
	},


	//出库时减少产品数量
	outRedGoodNum(products) {
		let that = this;
		return new Promise((resolve, reject) => {
			for (let i = 0; i < products.length; i++) {
				let num = 0;
				const query = Bmob.Query('Goods');
				query.get(products[i].objectId).then(res => {
					let goodInfo = res

					if (products[i].selected_model) {
						for (let model of products[i].selected_model) {
							for (let item of goodInfo.models) {
								num += Number(item.reserve)
								if (item.id == model.id) {
									item.reserve = Number(item.reserve) - Number(model.num)
								}
								delete item.num // 清除没用的属行
							}
						}
						num = Number(goodInfo.reserve) - Number(products[i].num);
						query.set('models', goodInfo.models)
					} else {
						num = Number(goodInfo.reserve) - Number(products[i].num);
					}

					query.set('reserve', num)
					query.set('id', products[i].objectId) //需要修改的objectId
					query.save().then(res => {
						//that.record_staffOut(Number(products[i].num))

						if (products[i].header) {
							const query1 = Bmob.Query("Goods");
							query1.equalTo("header", "==", products[i].header.objectId);
							query1.equalTo("order", "==", 1);
							query1.statTo("sum", "reserve");
							query1.find().then(res => {
								//console.log("dasds", res)
								let now_reserve = res[0]._sumReserve
								const query = Bmob.Query('Goods');
								query.set('reserve', now_reserve)
								query.set('id', products[i].header.objectId)
								query.save().then(res => {
									//that.modifyStockType(products[i].header.objectId) //修改库存类型
									if (i == products.length - 1) {
										resolve(true)
									}
								})
							})

						} else {
							//that.modifyStockType(products[i].objectId) //修改库存类型
							if (i == products.length - 1) {
								resolve(true)
							}
						}
					}).catch(err => {
						console.log(err)
					})
				})

			}
		})
	},


	//入库时增加产品数量
	enterAddGoodNumNew(products, type) {
		return new Promise((resolve, reject) => {
			let stock = uni.getStorageSync("warehouse") ? uni.getStorageSync("warehouse")[0].stock : ''
			let uid = uni.getStorageSync("uid")
			for (let i = 0; i < products.length; i++) {
				let num = 0;
				//console.log(products[i])
				const query = Bmob.Query("Goods");
				query.equalTo("userId", "==", uid);
				query.equalTo("header", "==", products[i].objectId);
				query.equalTo("stocks", "==", stock.objectId);
				query.find().then(res => {
					//console.log("仓库里的产品", res)
					if (res.length == 0) {
						this.upload_good_withNoCan(products[i], stock, Number(products[i].num)).then(res => {
							query.equalTo("header", "==", products[i].objectId);
							query.equalTo("order", "==", 1);
							query.statTo("sum", "reserve");
							query.find().then(res => {
								let now_reserve = res[0]._sumReserve;
								query.set('reserve', now_reserve)
								query.set('id', products[i].objectId)
								if (type == "purchase") {
									query.set('costPrice', products[i].modify_retailPrice)
								}
								query.save().then(res => {
									if (i == products.length - 1) {
										resolve(true)
									}
								})
							})
						})
					} else {
						let thisProduct = res[0];
						const query = Bmob.Query('Goods');

						if (products[i].selected_model) {
							for (let model of products[i].selected_model) {
								for (let item of thisProduct.models) {
									if (item.id == model.id) {
										item.reserve = Number(item.reserve) + Number(model.num)
									}
									delete item.num // 清除没用的属行
								}
							}
							num = Number(thisProduct.reserve) + Number(products[i].num);
							query.set('models', thisProduct.models)
						} else {
							num = Number(thisProduct.reserve) + Number(products[i].num);
						}
						query.set('reserve', num)
						query.set('id', thisProduct.objectId) //需要修改的objectId
						query.save().then(res => {
							query.equalTo("header", "==", products[i].objectId);
							query.equalTo("order", "==", 1);
							query.statTo("sum", "reserve");
							query.find().then(res => {
								let now_reserve = res[0]._sumReserve
								query.set('reserve', now_reserve)
								if (type == "purchase") {
									query.set('costPrice', products[i].modify_retailPrice.toString())
								}
								query.set('id', products[i].objectId)
								query.save().then(res => {
									if (i == products.length - 1) {
										resolve(true)
									}
								})
							})
						}).catch(err => {
							console.log(err)
						})
					}

				})

			}
		})
	},


	//出库时减少产品数量
	outRedGoodNumNew(products) {
		return new Promise((resolve, reject) => {
			let stock = uni.getStorageSync("warehouse") ? uni.getStorageSync("warehouse")[0].stock : ''
			let uid = uni.getStorageSync("uid")
			for (let i = 0; i < products.length; i++) {
				let num = 0;
				//console.log(products[i])
				const query = Bmob.Query("Goods");
				query.equalTo("userId", "==", uid);
				query.equalTo("header", "==", products[i].objectId);
				query.equalTo("stocks", "==", stock.objectId);
				query.find().then(res => {
					//console.log("仓库里的产品", res)

					if (res.length == 0) {
						this.upload_good_withNoCan(products[i], stock, Number(products[i].num), "out").then(res => {
							query.equalTo("header", "==", products[i].objectId);
							query.equalTo("order", "==", 1);
							query.statTo("sum", "reserve");
							query.find().then(res => {
								let now_reserve = res[0]._sumReserve;
								query.set('reserve', now_reserve)
								query.set('id', products[i].objectId)
								query.save().then(res => {
									Bmob.functions("warn_GoodNum", {
										"uid": uni.getStorageSync("uid"),
										"goodId": products[i].objectId
									}).then(function(res) {
										//console.log("sss",res)
									});
									if (i == products.length - 1) {
										resolve(true)
									}
								})
							})
						})
					} else {
						let thisProduct = res[0]
						if (products[i].selected_model) {
							for (let model of products[i].selected_model) {
								for (let item of thisProduct.models) {
									if (item.id == model.id) {
										item.reserve = Number(item.reserve) - Number(model.num)
									}
									delete item.num // 清除没用的属行
								}
							}
							num = Number(thisProduct.reserve) - Number(products[i].num);
							query.set('models', thisProduct.models)
						} else {
							num = Number(thisProduct.reserve) - Number(products[i].num);
						}
						query.set('reserve', num)
						query.set('id', thisProduct.objectId) //需要修改的objectId
						query.save().then(res => {
							query.equalTo("header", "==", products[i].objectId);
							query.equalTo("order", "==", 1);
							query.statTo("sum", "reserve");
							query.find().then(res => {
								let now_reserve = res[0]._sumReserve;
								query.set('reserve', now_reserve)
								query.set('id', products[i].objectId)
								query.save().then(res => {
									
									if (i == products.length - 1) {
										resolve(true)
									}
								})
							})
						}).catch(err => {
							console.log(err)
						})
					}

				})

			}
		})
	},

	//上传二级商品
	upload_good_withNoCan(good, stock, reserve, type) {
		return new Promise((resolve, reject) => {
			//console.log(good)
			let uid = uni.getStorageSync("uid");
			const pointer = Bmob.Pointer('_User')
			const userid = pointer.set(uid)

			const pointer1 = Bmob.Pointer('stocks')
			const p_stock_id = pointer1.set(stock.objectId) //店仓的id关联
			const pointer2 = Bmob.Pointer('Goods')
			let p_good_id = ""
			if (good.header) {
				p_good_id = pointer2.set(good.header.objectId)
			} else {
				p_good_id = pointer2.set(good.objectId)
			}

			const query = Bmob.Query('Goods');
			query.set("goodsName", good.goodsName)
			query.set("goodsIcon", good.goodsIcon)
			if (type == "out") {
				query.set("reserve", 0 - Number(reserve))
				if (good.goodsId && good.goodsId.models) {
					for (let model of good.goodsId.models) {
						model.reserve = 0 - Number(model.num)
					}
					query.set("models", good.goodsId.models)
				} else if (good.models && good.models.length > 0) {
					for (let model of good.models) {
						model.reserve = 0 - Number(model.num)
					}
					query.set("models", good.models)
				}
			} else if (type == "allocation") {
				query.set("reserve", Number(reserve))
				if (good.selected_model && good.selected_model.length > 0) {
					for (let model of good.selected_model) {
						model.reserve = Number(model.num)
						delete model.num
					}
					query.set("models", good.selected_model)
				}
			} else {
				query.set("reserve", Number(reserve))
				if (good.goodsId && good.goodsId.models) {
					for (let model of good.goodsId.models) {
						model.reserve = Number(model.num)
					}
					query.set("models", good.goodsId.models)
				} else if (good.models && good.models.length > 0) {
					for (let model of good.models) {
						model.reserve = Number(model.num ? model.num : 0)
					}
					query.set("models", good.models)
				}
			}

			query.set("stocks", p_stock_id)
			query.set("userId", userid)
			query.set("header", p_good_id)
			query.set("costPrice", '' + good.costPrice)
			query.set("retailPrice", '' + good.retailPrice)
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

		if (type == -2) {
			let pointer1 = Bmob.Pointer('Goods')
			let goodId = pointer1.set(id);

			const query = Bmob.Query('logs');
			query.equalTo("goodId", "==", id);
			query.find().then(res => {
				if (res.length == 0) {
					const query = Bmob.Query('logs');
					query.set("parent", userid);
					query.set("goodId", goodId);
					query.set("log", log);
					query.set("type", type);
					query.save().then(res => {
						console.log(res)
					}).catch(err => {
						console.log(err)
					})
				}
			});
		} else {
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
		}
	},

	//更新产品的库存类型
	modifyStockType(productId) {
		let that = this
		const query = Bmob.Query('Goods');
		query.get(productId).then(res => {

			let good = res
			if (good.warning_num == "" && good.max_num == "") {
				res.set("stocktype", 1) //库存数量类型 0代表库存不足 1代表库存充足  2代表库存过足
			} else if (good.warning_num == undefined && good.max_num == undefined) {
				res.set("stocktype", 1) //库存数量类型 0代表库存不足 1代表库存充足  2代表库存过足
			} else if (good.warning_num == null && good.max_num == null) {
				res.set("stocktype", 1) //库存数量类型 0代表库存不足 1代表库存充足  2代表库存过足
			} else {
				if (good.warning_num != "") {
					if (good.warning_num >= good.reserve) {
						res.set("stocktype", 0)
						that.log(good.goodsName + "已经超过设置的最小库存值" + good.warning_num, -2, good.objectId);
					} else if (good.warning_num < good.reserve && good.reserve < good.max_num) {
						res.set("stocktype", 1)
					}
				}
				if (good.max_num != "") {
					if (good.max_num <= good.reserve) {

						res.set("stocktype", 2)
						that.log(good.goodsName + "已经超过设置的最大库存值" + good.max_num, -2, good.objectId);
					} else if (good.warning_num < good.reserve && good.reserve < good.max_num) {
						res.set("stocktype", 1)
					}
				}
			}
			res.save()
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
			const query = Bmob.Query("_User");
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

	getDay: function(day, is_full, isStartDay, isNow) {
		var that = this;
		var today = new Date();
		var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
		today.setTime(targetday_milliseconds);
		var tYear = today.getFullYear();
		var tMonth = today.getMonth();
		var tDate = today.getDate();

		tMonth = that.handleMonth(tMonth + 1);
		tDate = that.handleMonth(tDate);

		let tH = today.getHours() < 10 ? '0' + today.getHours() : today.getHours()
		let tM = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
		let tS = today.getSeconds() < 10 ? '0' + today.getSeconds() : today.getSeconds()
		if (is_full) {
			if (isStartDay) {
				return tYear + "-" + tMonth + "-01" + " 00:00:00";
			} else if (isNow) {
				return tYear + "-" + tMonth + "-" + tDate + " " + tH + ":" + tM + ":" + tS;
			} else {
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
	
	clearOrderDetStorage(){
		uni.removeStorageSync("haveGetMoney")
		uni.removeStorageSync("otherMoney")
		uni.removeStorageSync("products")
		uni.removeStorageSync("discountMoney")
		uni.removeStorageSync("beizhu_text")
		uni.removeStorageSync("Images")
		uni.removeStorageSync("orderId")
	},
	
	showToast(title){
		uni.showToast({
			icon:"none",
			title:title
		})
	},
}
