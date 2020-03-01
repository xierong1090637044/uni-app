import Bmob from "hydrogen-js-sdk";
let uid = uni.getStorageSync("uid");
export default {
	//得到客户列表
	get_customList(disabled, search_text) {
		return new Promise((resolve, reject) => {
			let userid = uni.getStorageSync("uid");
			const query = Bmob.Query("customs");
			query.order("num");
			query.equalTo("parent", "==", userid);
			query.equalTo("disabled", "==", disabled);
			if (search_text) {
				query.equalTo("name", "==", {
					"$regex": "" + search_text + ".*"
				});

			}
			query.find().then(res => {
				resolve(res)
			});
		})
	},

	//产品详情里面得到客户统计
	get_customCount() {
		return new Promise((resolve, reject) => {
			let userid = uni.getStorageSync("uid");
			const query = Bmob.Query("customs");
			query.equalTo("parent", "==", userid);
			query.find().then(res => {

				let custom = res
				for (let item of custom) {
					const query = Bmob.Query("Bills");
					query.equalTo("type", '==', -1);
					query.equalTo("custom", '==', item.objectId);
					query.find().then(res => {
						//console.log(res)
						item.relations = res
					});
				}

				resolve(custom)

			});
		})
	},


	//增加数据操作
	add_custom(params) {

		console.log(params)
		let userid = JSON.parse(localStorage.getItem('bmob')).objectId;

		return new Promise((resolve, reject) => {
			const pointer = Bmob.Pointer('_User');
			let poiID = pointer.set(userid);

			if (params.objectId) { //修改操作
				const query = Bmob.Query('customs');
				query.set("custom_name", params.custom_name);
				query.set("debt", Number(params.debt));
				query.set("custom_address", params.custom_address);
				query.set("custom_phone", params.custom_phone);
				query.set("parent", poiID);
				query.set("disabled", !params.disabled);
				query.set("id", params.objectId);
				query.save().then(res => {
					resolve(res)
				}).catch(err => {
					console.log(err)

				})
			} else {

				const query = Bmob.Query("customs");
				query.equalTo("parent", "==", userid);
				query.equalTo("name", "==", params.custom_name);
				query.find().then(res => {
					console.log(res)
					if (res.length == 0) {
						const query = Bmob.Query('customs');
						query.set("custom_name", params.custom_name);
						query.set("debt", Number(params.debt));
						query.set("custom_address", params.custom_address);
						query.set("custom_phone", params.custom_phone);
						query.set("have_out", 0);
						query.set("disabled", !params.disabled);
						query.set("parent", poiID);
						query.save().then(res => {
							resolve(res)
						}).catch(err => {
							console.log(err)
						})
					} else {
						resolve(false)
					}

				});

			}

		})
	},

	//删除客户
	delete_custom(id) {
		return new Promise((resolve, reject) => {
			const query = Bmob.Query("customs");
			query.destroy(id).then(res => {
				resolve(res)
			}).catch(err => {
				console.log(err)
			})
		})

	},

	//得到客户详情
	custom_detail(id) {
		return new Promise((resolve, reject) => {
			const query = Bmob.Query('customs');
			query.get(id).then(res => {
				//console.log(res)
				resolve(res)
			}).catch(err => {
				console.log(err)
			})

		})
	},

	//得到收款列表
	get_moneyList(id) {
		return new Promise((resolve, reject) => {
			const query = Bmob.Query("order_opreations");
			query.equalTo("custom", "==", id);
			query.include("opreater", "account");
			query.find().then(res => {
				console.log(res)
				resolve(res)
			});

		})
	},

	//得到客户的销售记录
	getCustomSellList(params) {
		return new Promise((resolve, reject) => {
			const query = Bmob.Query("order_opreations");
			query.equalTo("master", "==", uid);
			query.equalTo("type", '==', -1);
			query.equalTo("extra_type", "==", 1);
			query.equalTo("extra_type", "==", 1);
			query.equalTo("custom", "==", params.customId);
			query.equalTo("status", "==", true);
			query.equalTo("createdAt", ">=", params.startDate);
			query.equalTo("createdAt", "<=", params.endDate);
			query.limit(50);
			query.skip(50 * (params.pageNum - 1));
			query.include("opreater", "custom", "stock");
			query.order("-createdAt");
			query.find().then(res => {
				resolve(res)
			});
		})
	},

	//得到所有的客户销售列表
	getAllCustomSellList(params) {
		let data = {}
		let total = 0;
		let money = 0;
		let count = 0;
		let realMoney = 0;
		return new Promise((resolve, reject) => {
			const query = Bmob.Query("order_opreations");
			query.equalTo("master", "==", uid);
			query.equalTo("type", '==', params.type);
			query.equalTo("extra_type", "==", params.extra_type);
			query.equalTo("custom", "==", params.customId);
			query.equalTo("status", "==", true);
			query.equalTo("createdAt", ">=", params.startDate + " 00:00:01");
			query.equalTo("createdAt", "<=", params.endDate + " 00:00:01");
			query.count().then(res => {
				count = res;
				let countIndex = 0;

				if (count == 0) {
					data.total = total;
					data.num = count;
					data.money = money;
					data.realMoney = 0;
					resolve(data)
				} else {
					for (var i = 0; i < Math.ceil(count / 500); i++) {
						query.equalTo("master", "==", uid);
						query.equalTo("type", '==', params.type);
						query.equalTo("extra_type", "==", params.extra_type);
						query.equalTo("custom", "==", params.customId);
						query.equalTo("status", "==", true);
						query.limit(500);
						query.skip(500 * i);
						query.include("opreater", "custom", "stock");
						query.order("-createdAt");
						query.equalTo("createdAt", ">=", params.startDate + " 00:00:01");
						query.equalTo("createdAt", "<=", params.endDate + " 00:00:01");
						query.find().then(res => {
							for (let item of res) {
								total += item.real_num
								money += item.all_money
								realMoney += item.real_money
								countIndex += 1;
							}
							if (countIndex == count) {
								data.total = total;
								data.num = count;
								data.money = money;
								data.realMoney = realMoney;
								resolve(data)
							}
						});
					}
				}
			})
		})
	},
	
	//得到客户收款分析
	getAllCustomInRecord(params) {
		let data = {}
		let total = 0;
		let money = 0;
		let count = 0;
		return new Promise((resolve, reject) => {
			const query = Bmob.Query("order_opreations");
			query.equalTo("master", "==", uid);
			query.equalTo("type", '==', -1);
			query.equalTo("extra_type", "==", 5);
			query.equalTo("custom", "==", params.customId);
			query.equalTo("createdAt", ">=", params.startDate + " 00:00:01");
			query.equalTo("createdAt", "<=", params.endDate + " 00:00:01");
			query.count().then(res => {
				count = res;
				let countIndex = 0;
	
				if (count == 0) {
					data.num = count;
					data.money = money;
					resolve(data)
				} else {
					for (var i = 0; i < Math.ceil(count / 500); i++) {
						query.equalTo("master", "==", uid);
						query.equalTo("type", '==', -1);
						query.equalTo("extra_type", "==", 5);
						query.equalTo("custom", "==", params.customId);
						query.limit(500);
						query.skip(500 * i);
						query.order("-createdAt");
						query.equalTo("createdAt", ">=", params.startDate + " 00:00:01");
						query.equalTo("createdAt", "<=", params.endDate + " 00:00:01");
						query.find().then(res => {
							for (let item of res) {
								money += item.real_money
								countIndex += 1;
							}
							if (countIndex == count) {
								data.num = count;
								data.money = money;
								resolve(data)
							}
						});
					}
				}
			})
		})
	},


}
