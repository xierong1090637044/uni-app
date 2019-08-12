import Bmob from '@/utils/bmob.js';

export default {
	//得到门店列表
	get_customList(disabled, search_text) {
		return new Promise((resolve, reject) => {
			let userid = JSON.parse(localStorage.getItem('bmob')).objectId;
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

	//删除门店
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
	get_moneyList(id){
		return new Promise((resolve, reject) => {
			const query = Bmob.Query("debt_history");
			query.equalTo("custom","==", id);
			query.include("operater");
			query.find().then(res => {
			    console.log(res)
					resolve(res)
			});
			
		})
	},


}
