import Bmob from "hydrogen-js-sdk";
export default {
	//批量删除功能
	delete_goods(goods) {
		return new Promise((resolve, reject) => {
			let count = 0;
			for (let good of goods) {
				const query = Bmob.Query('Goods');
				query.destroy(good.objectId).then(res => {

					count += 1;
					if (count == goods.length) {
						//console.log(res,count)
						resolve(true)
					}
				}).catch(err => {
					console.log(err)
				})
			}
		})
	},

	//上传商品
	upload_good_withNoCan(good, stock) {
		return new Promise((resolve, reject) => {
			let uid = uni.getStorageSync("uid");
			const pointer = Bmob.Pointer('_User')
			const userid = pointer.set(uid)

			let reserve = good.reserve

			const pointer1 = Bmob.Pointer('stocks')
			const p_stock_id = pointer1.set(stock.objectId) //仓库的id关联

			const query = Bmob.Query("Goods");
			query.equalTo("userId", "==", uid);
			query.equalTo("goodsName", "==", good.goodsName);
			query.equalTo("stocks", "==", stock.objectId);
			query.find().then(res => {
				console.log(res)
				if (res.length >= 1) {
					resolve([false, '该商品存在此仓库中'])
				} else {
					const query = Bmob.Query('Goods');
					query.set("goodsName", good.goodsName)
					query.set("goodsIcon", good.goodsIcon)
					query.set("costPrice", good.costPrice)
					query.set("retailPrice", good.retailPrice)
					//query.set("producttime", good.producttime)
					//query.set("nousetime", good.nousetime)
					//query.set("regNumber", good.regNumber)
					query.set("reserve", Number(good.reserve))
					query.set("productCode", good.productCode?good.productCode:'')
					query.set("stocks", p_stock_id)
					query.set("product_info", good.product_info?good.product_info:'')
					query.set("producer", good.producer?good.producer:'')
					query.set("packingUnit", good.packingUnit?good.packingUnit:'')
					query.set("packageContent", good.packageContent?good.packageContent:'')
					query.set("warning_num", Number(good.warning_num?good.warning_num:0))
					query.set("stocktype", (Number(good.warning_num?good.warning_num:0) >= Number(reserve)) ? 0 : 1) //库存数量类型 0代表库存不足 1代表库存充足
					
					if(good.second_class){
						let pointer2 = Bmob.Pointer('class_user')
						let p_class_user_id = pointer2.set(good.goodsClass) //一级分类id关联
						query.set("second_class", p_second_class_id)
						
						let pointer3 = Bmob.Pointer('second_class')
						let p_second_class_id = pointer3.set(good.second_class) //仓库的id关联
						query.set("goodsClass", p_class_user_id)
					}
					
					query.set("userId", userid)
					query.save().then(res => {
						console.log(res)
						resolve([true, res])
					}).catch(err => {
						console.log(err)
					})
				}
			})

		})

	},

	//上传商品
	upload_good(good) {
		return new Promise((resolve, reject) => {
			let uid = JSON.parse(localStorage.getItem('bmob')).objectId;

			const pointer = Bmob.Pointer('_User')
			const userid = pointer.set(uid)

			let pointer2 = Bmob.Pointer('class_user')
			let p_class_user_id = pointer2.set(good.goodsClass) //一级分类id关联

			let pointer3 = Bmob.Pointer('second_class')
			let p_second_class_id = pointer3.set(good.second_class) //仓库的id关联

			const query = Bmob.Query("Goods");
			query.equalTo("userId", "==", uid);
			query.equalTo("goodsName", "==", good.goodsName);
			query.equalTo("position", "==", good.position);
			query.equalTo("stocks", "==", good.stocks);
			query.find().then(res => {
				console.log(res)
				if (res.length >= 1) {
					resolve([false, res])
				} else {
					let reserve = good.reserve

					const pointer1 = Bmob.Pointer('stocks')
					const p_stock_id = pointer1.set(good.stocks) //仓库的id关联

					const query = Bmob.Query('Goods');
					query.set("goodsName", good.goodsName)
					query.set("goodsIcon", good.goodsIcon)
					query.set("costPrice", good.costPrice)
					query.set("retailPrice", good.retailPrice)
					query.set("producttime", good.producttime)
					query.set("nousetime", good.nousetime)
					query.set("regNumber", good.regNumber)
					query.set("reserve", Number(good.reserve))
					query.set("productCode", good.productCode)
					query.set("stocks", p_stock_id)
					query.set("product_info", good.product_info)
					query.set("producer", good.producer)
					query.set("packingUnit", good.packingUnit)
					query.set("packageContent", good.packageContent)
					query.set("warning_num", Number(good.warning_num))
					query.set("stocktype", (Number(good.warning_num) >= Number(reserve)) ? 0 : 1) //库存数量类型 0代表库存不足 1代表库存充足
					query.set("second_class", p_second_class_id)
					query.set("goodsClass", p_class_user_id)

					query.set("userId", userid)
					query.save().then(res => {
						console.log(res)
						resolve([true, res])
					}).catch(err => {
						console.log(err)
					})
				}
			});
		})

	},


	//获得产品一级分类
	get_fristclass() {
		let userid = JSON.parse(localStorage.getItem('bmob')).objectId;
		return new Promise((resolve, reject) => {

			const query = Bmob.Query("class_user");
			query.equalTo("parent", "==", userid);
			query.find().then(res => {
				//console.log(res)
				localStorage.setItem("frist_class", JSON.stringify(res))
				resolve(res)
			});

		})
	},

	//获得产品的二级分类
	get_secondclass(frist_classid) {
		return new Promise((resolve, reject) => {

			const query = Bmob.Query('class_user')
			query.field('second', frist_classid)
			query.relation('second_class').then(res => {
				//console.log(res);
				resolve(res.results)
			})
		})
	},

	//得到仓库列表
	getstock_list: function(search_text) {
		let userid = JSON.parse(localStorage.getItem('bmob')).objectId;
		return new Promise((resolve, reject) => {
			const query = Bmob.Query("stocks");
			query.order("-num");
			query.include("charge", "shop")
			query.equalTo("parent", "==", userid);
			//query.equalTo("disabled", "==", that.disabled);
			if (search_text) {
				query.equalTo("stock_name", "==", {
					"$regex": "" + search_text + ".*"
				});

			}
			query.find().then(res => {
				//console.log(res)
				localStorage.setItem("stocks", JSON.stringify(res))
				resolve(res)
			});
		})
	},

}
