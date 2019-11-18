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

	//得到今日概况
	gettoday_detail: function(start_date, end_date) {
		let uid = uni.getStorageSync("uid")
		let get_reserve = 0; //入库数量
		let out_reserve = 0; //出库数量
		let get_reserve_real_money = 0;
		let out_reserve_real_money = 0;
		let get_reserve_num = 0;
		let out_reserve_num = 0;
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
					query.select("goodsId", "num", "total_money", "type");
					query.limit(1000);
					query.include("goodsId");
					query.find().then(res => {
						//console.log(res)
						for (var i = 0; i < res.length; i++) {
							if (res[i].type == 1) {
								get_reserve += res[i].num;
								get_reserve_real_money += res[i].num * res[i].goodsId.retailPrice;
								//get_reserve_num += res[i].total_money;
							} else if (res[i].type == -1) {
								out_reserve += res[i].num;
								out_reserve_real_money += res[i].num * res[i].goodsId.costPrice;
								//out_reserve_num += res[i].total_money;
							}
						}
					
					
						params.get_reserve = get_reserve.toFixed(uni.getStorageSync("setting").show_float)
						params.out_reserve = out_reserve.toFixed(uni.getStorageSync("setting").show_float)
						params.get_reserve_real_money = get_reserve_real_money.toFixed(uni.getStorageSync("setting").show_float)
						params.out_reserve_real_money = out_reserve_real_money.toFixed(uni.getStorageSync("setting").show_float)
						params.get_reserve_num = get_reserve_num.toFixed(uni.getStorageSync("setting").show_float)
						params.out_reserve_num = out_reserve_num.toFixed(uni.getStorageSync("setting").show_float)
						params.get_reserve_get_num = (get_reserve_real_money - get_reserve_num).toFixed(uni.getStorageSync("setting").show_float)
						params.out_reserve_get_num = (out_reserve_num - out_reserve_real_money).toFixed(uni.getStorageSync("setting").show_float)
					
					
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

		return new Promise((resolve, reject) => {
			var total_reserve = 0;
			var total_money = 0;
			let length = 0;
			let warn_num = 0;

			let params = {}
			this.querycount().then(count => {
				params.total_products = count
				const query = Bmob.Query("Goods");
				query.equalTo("userId", "==", uid);
				query.equalTo("status", "!=", -1);
				query.equalTo("order", "==", 0);
				query.select("reserve", "costPrice", "stocktype");
				query.limit(1000);
				query.find().then(res => {



					for (let item of res) {
						if (item.stocktype == 0) {
							warn_num += 1;
						}
						total_reserve += item.reserve;
						total_money += item.reserve * item.costPrice;
						params.total_money = total_money.toFixed(uni.getStorageSync("print_setting").show_float),
							params.total_reserve = total_reserve.toFixed(uni.getStorageSync("print_setting").show_float),

							params.warn_num = warn_num
						resolve(params)
					}
				});
			})

		})

	},
}
