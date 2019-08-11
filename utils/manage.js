export default {
	
	//删除仓库
	delete_stock(id) {
		return new Promise((resolve, reject) => {
			const query = Bmob.Query("stocks");
			query.destroy(id).then(res => {
				resolve(res)
			}).catch(err => {
				console.log(err)
			})
		})
		
	},

	//得到仓库列表
	getstock_list(disabled, search_text) {
		let userid = JSON.parse(localStorage.getItem('bmob')).objectId;

		return new Promise((resolve, reject) => {
			const query = Bmob.Query("stocks");
			query.order("-num");
			query.include("charge", "shop")
			query.equalTo("parent", "==", userid);
			query.equalTo("disabled", "==", disabled);
			if (search_text) {
				query.equalTo("stock_name", "==", {
					"$regex": "" + search_text + ".*"
				});

			}
			query.find().then(res => {
				localStorage.setItem("stocks", JSON.stringify(res))
				resolve(res)
			});
		})

	},

	//添加仓库
	add_stock(params) {
		let userid = JSON.parse(localStorage.getItem('bmob')).objectId;
		const pointer = Bmob.Pointer('_User');
		let poiID = pointer.set(userid);

		const pointer1 = Bmob.Pointer('staffs');
		let chargeId = pointer1.set(params.charge);

		//const pointer2 = Bmob.Pointer('shops');
		//let shopId = pointer2.set(params.shop);

		return new Promise((resolve, reject) => {
			if (params.objectId) {
				const query = Bmob.Query('stocks');
				query.set("stock_name", params.name);
				query.set("num", params.number ? params.number : 0);
				//query.set("shop",shopId);
				query.set("charge", chargeId);
				query.set("beizhu", params.beizhu);
				query.set("disabled", !params.disabled);
				query.set("parent", poiID);
				query.set("id", params.objectId);
				query.save().then(res => {
					resolve(res)
				}).catch(err => {
					console.log(err)

				})
			} else {
				const query = Bmob.Query("stocks");
				query.equalTo("parent", "==", userid);
				query.equalTo("stock_name", "==", params.name);
				query.find().then(res => {
					console.log(res)
					if (res.length == 0) {
						const query = Bmob.Query('stocks');
						query.set("stock_name", params.name);
						query.set("num", params.number ? params.number : 0);
						//query.set("shop",shopId);
						query.set("charge", chargeId);
						query.set("beizhu", params.beizhu);
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

	//得到员工列表
	get_chargeList(disabled, search_text) {
		let userid = JSON.parse(localStorage.getItem('bmob')).objectId;
		return new Promise((resolve, reject) => {
			const query = Bmob.Query("staffs");
			query.order("-createdAt");
			query.equalTo("masterId", "==", userid);
			query.equalTo("disabled", "==", disabled);
			if (search_text) {
				query.equalTo("username", "==", {
					"$regex": "" + search_text + ".*"
				});

			}
			query.find().then(res => {
				//console.log(res)
				resolve(res)
			});
		})
	},

	//添加一级分类
	add_fristclass(class_text) {
		let userid = JSON.parse(localStorage.getItem('bmob')).objectId;
		return new Promise((resolve, reject) => {
			const pointer = Bmob.Pointer('_User')
			const poiID = pointer.set(userid);

			const query = Bmob.Query('class_user');
			query.set("parent", poiID)
			query.set("class_text", class_text);
			query.save().then(res => {
				resolve(true)
			}).catch(err => {
				console.log(err)
			})
		})

	},

	//添加二级分类
	add_secondclass(selected_id, class_text) {
		let userid = JSON.parse(localStorage.getItem('bmob')).objectId;
		return new Promise((resolve, reject) => {

			const pointer = Bmob.Pointer('class_user')
			const poiID = pointer.set(selected_id)

			const query = Bmob.Query('second_class');
			query.set("class_text", class_text)
			query.set("parent", poiID)
			query.save().then(res => {
				//console.log(res)
				const relation = Bmob.Relation('class_user') // 需要关联的表
				const relID = relation.add([res.objectId]) //关联表中需要关联的objectId, 返回一个Relation对象, add方法接受string和array的类型参数
				const query = Bmob.Query('class_user')
				query.get(selected_id).then(res => {
					res.set('second', relID); // 将Relation对象保存到two字段中，即实现了一对多的关联
					res.save()

					resolve(true)
				})
			}).catch(err => {
				console.log(err)
			})
		})

	},

	//修改分类信息
	edit_secondclass(selected_id, class_text) {
		return new Promise((resolve, reject) => {
			const query = Bmob.Query("second_class");
			query.set('id', selected_id); //需要修改的objectId
			query.set('class_text', class_text);
			query.save().then(res => {
				console.log(res);
				resolve(res)
			}).catch(err => {
				console.log(err)
			})
		})

	},

	//获得产品一级分类
	edit_fristclass(id, class_text) {
		let userid = JSON.parse(localStorage.getItem('bmob')).objectId;
		return new Promise((resolve, reject) => {

			const query = Bmob.Query("class_user");
			query.get(id).then(res => {
				resolve(res)
				res.set('class_text', class_text)
				res.save()
			}).catch(err => {
				console.log(err)
			})

		})
	},

	//删除分类
	delete_class(dbname, id) {
		return new Promise((resolve, reject) => {
			const query = Bmob.Query(dbname);
			query.destroy(id).then(res => {

				resolve(true)
			}).catch(err => {
				console.log(err)
			})
		})
	},


	//刷新产品一级分类
	get_fristclass() {
		let userid = JSON.parse(localStorage.getItem('bmob')).objectId;
		return new Promise((resolve, reject) => {

			const query = Bmob.Query("class_user");
			query.equalTo("parent", "==", userid);
			query.find().then(res => {
				console.log(res)
				localStorage.setItem("frist_class", JSON.stringify(res))
				resolve(res)
			});

		})
	},

}
