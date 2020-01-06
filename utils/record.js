import Bmob from "hydrogen-js-sdk";
export default {

	//得到记录的总条数
	querycount: function() {
		let uid = uni.getStorageSync("uid")

		return new Promise((resolve, reject) => {
			const query = Bmob.Query("Goods");
			query.equalTo("userId", "==", uid);
			query.equalTo("status", "!=", -1);
			query.equalTo("order", "!=", 1);
			query.count().then(res => {
				resolve(res)
				console.log(`共有${res}条记录`)
			})
		})
	},

	//客户分析数据
	getAllCustom() {
		let params = {}
		let debt = 0
		let userid = uni.getStorageSync("uid");
		return new Promise((resolve, reject) => {

			const query = Bmob.Query("customs");
			query.order("num");
			query.equalTo("parent", "==", userid);
			query.equalTo("disabled", "!=", true);
			query.limit(500)
			query.find().then(res => {
				let customLength = res.length
				params.number = res.length
				for (let item of res) {
					debt += item.debt ? item.debt : 0
				}
				if (10000 > debt > 1000) {
					debt = (debt / 1000).toFixed(2) + "千"
				} else if (debt > 10000) {
					debt = (debt / 10000).toFixed(2) + "万"
				}
				params.debt = debt


				const query = Bmob.Query("order_opreations");
				query.equalTo("master", "==", userid);
				query.equalTo("type", "==", -1);
				query.equalTo("custom", "!=", null);
				query.count().then(res => {
					params.historyNum = res
					const query = Bmob.Query("order_opreations");
					query.equalTo("master", "==", userid);
					query.equalTo("type", "==", -1);
					query.equalTo("custom", "!=", null);
					query.statTo("groupby", "custom");
					query.find().then(res => {
						params.usedNum = res.length
						params.noUsedNum = customLength - res.length

						resolve(params)
					})
				})

			});
		})
	},


	//客户分析数据
	getAllProducer() {
		let params = {}
		let debt = 0
		let userid = uni.getStorageSync("uid");
		return new Promise((resolve, reject) => {

			const query = Bmob.Query("producers");
			query.equalTo("parent", "==", userid);
			query.equalTo("disabled", "!=", true);
			query.limit(500)
			query.find().then(res => {
				let producerLength = res.length
				params.number = res.length
				for (let item of res) {
					debt += item.debt ? item.debt : 0
				}
				console.log(debt)
				if (10000 > Number(debt) > 1000) {
					debt = (Number(debt) / 1000).toFixed(2) + "千"
				} else if (Number(debt) > 10000) {
					debt = (Number(debt) / 10000).toFixed(2) + "万"
				}
				params.debt = debt

				const query = Bmob.Query("order_opreations");
				query.equalTo("master", "==", userid);
				query.equalTo("type", "==", 1);
				query.equalTo("producer", "!=", null);
				query.count().then(res => {
					params.historyNum = res
					const query = Bmob.Query("order_opreations");
					query.equalTo("master", "==", userid);
					query.equalTo("type", "==", 1);
					query.equalTo("producer", "!=", null);
					query.statTo("groupby", "producer");
					query.find().then(res => {
						params.usedNum = res.length
						params.noUsedNum = producerLength - res.length

						resolve(params)
					})
				})

			});
		})
	},

	//得到账户分析数据
	getAllAccounts() {
		let params = {}
		let money = 0
		let userid = uni.getStorageSync("uid");
		return new Promise((resolve, reject) => {
			const query = Bmob.Query("accounts");
			query.equalTo("parent", "==", userid);
			query.limit(500)
			query.find().then(res => {
				let accountLength = res.length
				params.number = res.length
				for (let item of res) {
					money += item.money ? item.money : 0
				}
				if (10000 > Number(money) > 1000) {
					money = (Number(money) / 1000).toFixed(2) + "千"
				} else if (Number(money) > 10000) {
					money = (Number(money) / 10000).toFixed(2) + "万"
				}
				params.money = money

				const query = Bmob.Query("order_opreations");
				query.include("accounts");
				query.equalTo("master", "==", userid);
				query.statTo("sum", "real_money");
				query.statTo("groupby", "accounts");
				query.find().then(res => {
					console.log('账户', res)
					resolve(params)
				})
			})
		})
	},

	//得到今日概况
	gettoday_detail: function(start_date, end_date) {
		let uid = uni.getStorageSync("uid")
		let get_reserve = 0; //入库数量
		let out_reserve = 0; //出库数量
		let get_reserve_real_money = 0;
		let out_reserve_real_money = 0;
		let get_reserve_num = 0;
		let out_reserve_num = 0;
		let sellNum = 0;
		let purchaseNum = 0;
		let params = {};

		return new Promise((resolve, reject) => {

			const query = Bmob.Query("order_opreations");
			query.equalTo("master", "==", uid);
			query.equalTo("createdAt", ">=", start_date);
			query.equalTo("createdAt", "<=", end_date);
			query.select("real_money", "type");
			query.limit(1000);
			query.find().then(res => {
				for (var i = 0; i < res.length; i++) {
					if (res[i].type == 1) {
						get_reserve_num += res[i].real_money;
					} else if (res[i].type == -1) {
						out_reserve_num += res[i].real_money;
					}
				}

				const query = Bmob.Query("Bills");
				query.equalTo("userId", "==", uid);
				query.equalTo("createdAt", ">=", start_date);
				query.equalTo("createdAt", "<=", end_date);
				query.select("goodsId", "num", "total_money", "type", "extra_type");
				query.limit(1000);
				query.include("goodsId");
				query.find().then(res => {
					//console.log(res)
					for (var i = 0; i < res.length; i++) {
						if (res[i].type == 1) {
							get_reserve += res[i].num;
							get_reserve_real_money += res[i].num * res[i].goodsId.retailPrice;
							//get_reserve_num += res[i].total_money;
							if (res[i].extra_type == 1) {
								purchaseNum += res[i].num;
							}
						} else if (res[i].type == -1) {
							out_reserve += res[i].num;
							out_reserve_real_money += res[i].num * res[i].goodsId.costPrice;
							//out_reserve_num += res[i].total_money;
							if (res[i].extra_type == 1) {
								sellNum += res[i].num;
							}
						}
					}


					params.get_reserve = get_reserve.toFixed(uni.getStorageSync("setting").show_float)
					params.out_reserve = out_reserve.toFixed(uni.getStorageSync("setting").show_float)
					params.get_reserve_real_money = get_reserve_real_money.toFixed(uni.getStorageSync("setting").show_float)
					params.out_reserve_real_money = out_reserve_real_money.toFixed(uni.getStorageSync("setting").show_float)
					params.get_reserve_num = get_reserve_num.toFixed(uni.getStorageSync("setting").show_float)
					params.out_reserve_num = out_reserve_num.toFixed(uni.getStorageSync("setting").show_float)
					params.get_reserve_get_num = (get_reserve_real_money - get_reserve_num).toFixed(uni.getStorageSync(
						"setting").show_float)
					params.out_reserve_get_num = (out_reserve_num - out_reserve_real_money).toFixed(uni.getStorageSync(
						"setting").show_float)
					params.purchaseNum = purchaseNum.toFixed(uni.getStorageSync("setting").show_float)
					params.sellNum = sellNum.toFixed(uni.getStorageSync("setting").show_float)


					console.log(get_reserve)


					//查询当日应收和实际收款
					let should_get_money = 0;
					let real_get_money = 0;
					const query = Bmob.Query("order_opreations");
					query.equalTo("master", "==", uid);
					query.equalTo("createdAt", ">=", start_date);
					query.equalTo("createdAt", "<=", end_date);
					query.equalTo("type", "==", -1);
					query.find().then(res => {
						//console.log(res);
						for (var i = 0; i < res.length; i++) {
							should_get_money += res[i].all_money;
							real_get_money += res[i].real_money;
						}

						params.should_get_money = should_get_money
						params.real_get_money = real_get_money
					});

					resolve(params);
				});
			})

		})


	},

	//获得库存成本和总库存
	loadallGoods: function() {
		let uid = uni.getStorageSync("uid")
		let user = uni.getStorageSync("user")
		let setting = uni.getStorageSync("setting")
		return new Promise((resolve, reject) => {
			let total_reserve = 0;
			let total_money = 0;
			let length = 0;
			let warn_num = 0;
			let over_num = 0;
			let key = 0; //计数器
			let params = {}
			this.querycount().then(count => {
				params.total_products = count
				for (var i = 0; i < Math.ceil(count / 1000); i++) {
					console.log(i)
					const query = Bmob.Query("Goods");
					query.equalTo("userId", "==", uid);
					query.equalTo("status", "!=", -1);
					query.equalTo("order", "!=", 1);
					query.select("reserve", "costPrice", "stocktype");
					query.limit(1000);
					query.skip(1000 * i);
					query.find().then(res => {
						for (let item of res) {
							if (item.stocktype == 0) {
								warn_num += 1;
							} else if (item.stocktype == 2) {
								over_num += 1;
							}
							total_reserve += item.reserve;
							total_money += item.reserve * item.costPrice;
						}

						key += 1

						//返回数据
						if (key == Math.ceil(count / 1000)) {
							if (user.rights && user.rights.othercurrent[0] != '0') {
								total_money = 0
							}
							if (Number(total_reserve) > 1000 && Number(total_reserve) < 10000) {
								total_reserve = Number(total_reserve) / 1000 + "千"
							} else if (Number(total_reserve) >= 10000) {
								total_reserve = Number(total_reserve) / 10000 + "万"
							}
							if (Number(total_money) > 1000 && Number(total_money) < 10000) {
								total_money = Number(total_money) / 1000 + "千"
							} else if (Number(total_money) >= 10000) {
								total_money = Number(total_money) / 10000 + "万"
							}
							params.total_money = total_money,
								params.total_reserve = total_reserve,
								params.warn_num = warn_num
							params.over_num = over_num
							resolve(params)
						}
					});
				}
			})
		})
	},
}
