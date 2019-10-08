import Bmob from "hydrogen-js-sdk";
export default {
	
	//得到员工的权限
	get_satffAuth(){
		return new Promise((resolve, reject) => {
			let userid = uni.getStorageSync("user").objectId
			const query = Bmob.Query('staffs');
			query.include("masterId")
			query.get(userid).then(res => {
			  //console.log(res)
			  resolve(res)
			}).catch(err => {
			  //console.log(err)
			  resolve()
			})
		})
	},
	
	//得到员工列表
	get_stafflist(disabled,search_text) {
		return new Promise((resolve, reject) => {
			let userid = JSON.parse(localStorage.getItem('bmob')).objectId;
			const query = Bmob.Query("staffs");
			query.order("num");
			query.equalTo("masterId", "==", userid);
			query.equalTo("disabled", "==",disabled);
			query.include("shop")
			if (search_text) {
				query.equalTo("name", "==", {
					"$regex": "" + search_text + ".*"
				});
			
			}
			query.find().then(res => {
				localStorage.setItem("staffs",JSON.stringify(res))
				resolve(res)
			});
		})
		
	},
	
	
	//增加数据操作
	add_staff(params) {
		let userid = JSON.parse(localStorage.getItem('bmob')).objectId;
		
		return new Promise((resolve, reject) => {
			const pointer = Bmob.Pointer('_User');
			let poiID = pointer.set(userid);
			
			const pointer1 = Bmob.Pointer('shops');
			let shopId = pointer1.set(params.shop);
			
			if (params.objectId) {//修改操作				
				const pointer = Bmob.Pointer('_User');
				let poiID = pointer.set(userid);
				
				const query = Bmob.Query('staffs');
				query.set("username", params.name);
				query.set("nickName", params.name);
				query.set("password", params.password);
				query.set("mobilePhoneNumber", params.mobilePhoneNumber);
				query.set("rights", params.rights);
				query.set("address", params.address);
				query.set("avatarUrl", "http://bmob-cdn-23134.b0.upaiyun.com/2019/04/29/4705b31340bfff8080c068f52fd17e2c.png");
				query.set("masterId", poiID);
				query.set("disabled", !params.disabled);
				query.set("shop",shopId);
				query.set("id", params.objectId);
				query.save().then(res => {
					console.log(res)
					resolve(res)
				}).catch(err => {
					console.log(err)
				
				})
			} else {
				
				const query = Bmob.Query("staffs");
				query.equalTo("masterId", "==", userid);
				query.equalTo("mobilePhoneNumber", "==", params.mobilePhoneNumber);
				query.find().then(res => {
					console.log(res)
					if (res.length == 0) {
				
						const query = Bmob.Query('staffs');
						query.set("username", params.name);
						query.set("shop",shopId);
						query.set("nickName", params.name);
						query.set("password", params.password);
						query.set("mobilePhoneNumber", params.mobilePhoneNumber);
						query.set("rights", params.rights);
						query.set("address", params.address);
						query.set("avatarUrl", "http://bmob-cdn-23134.b0.upaiyun.com/2019/04/29/4705b31340bfff8080c068f52fd17e2c.png");
						query.set("masterId", poiID);
						query.set("have_out", 0);
						query.set("disabled", !params.disabled);
						query.save().then(res => {
							console.log(res)
							resolve(res)
						}).catch(err => {
							console.log(err)
				
						})
					} else {
						resolve(false,"已存在此账号")
					}
				
				});
				
			}
				
		})
	},
	
	//删除门店
	delete_staff(id) {
		return new Promise((resolve, reject) => {
			const query = Bmob.Query("staffs");
			query.destroy(id).then(res => {
				resolve(res)
			}).catch(err => {
				console.log(err)
			})
		})
		
	},
	

}
