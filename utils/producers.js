export default {
	//得到门店列表

	get_producerList(disabled,search_text) {
		return new Promise((resolve, reject) => {
			let userid = JSON.parse(localStorage.getItem('bmob')).objectId;
			const query = Bmob.Query("producers");
			query.order("num");
			query.equalTo("parent", "==", userid);
			query.equalTo("disabled", "==",disabled);
			if (search_text) {
				query.equalTo("name", "==", {
					"$regex": "" + search_text + ".*"
				});
			
			}
			query.find().then(res => {
				localStorage.setItem("shops",JSON.stringify(res))
				resolve(res)
			});
		})
		
	},
	
	
	//增加数据操作
	add_producer(params) {
		
		console.log(params)
		let userid = JSON.parse(localStorage.getItem('bmob')).objectId;
		
		return new Promise((resolve, reject) => {
			const pointer = Bmob.Pointer('_User');
			let poiID = pointer.set(userid);
			
			if (params.objectId) {//修改操作
				const query = Bmob.Query('producers');
				query.set("producer_name", params.producer_name);
				query.set("debt", Number(params.debt));
				query.set("producer_address", params.producer_address);
				query.set("producer_phone", params.producer_phone);
				query.set("parent", poiID);
				query.set("disabled", !params.disabled);
				query.set("id", params.objectId);
				query.save().then(res => {
					resolve(res)
				}).catch(err => {
					console.log(err)
				
				})
			} else {
				
				const query = Bmob.Query("producers");
				query.equalTo("parent", "==", userid);
				query.equalTo("name", "==",params.producer_name);
				query.find().then(res => {
					console.log(res)
					if (res.length == 0) {
						const query = Bmob.Query('producers');
						query.set("producer_name", params.producer_name);
						query.set("debt", Number(params.debt));
						query.set("producer_address",params.producer_address);
						query.set("producer_phone",params.producer_phone);
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
	delete_producer(id) {
		return new Promise((resolve, reject) => {
			const query = Bmob.Query("producers");
			query.destroy(id).then(res => {
				resolve(res)
			}).catch(err => {
				console.log(err)
			})
		})
		
	},
	

}
