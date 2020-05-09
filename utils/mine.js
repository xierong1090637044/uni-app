import Bmob from "hydrogen-js-sdk";


export default {
	
	//获取用户的信息
	getMineInfo(){
		return new Promise((resolve, reject) => {
			let uid = uni.getStorageSync("uid");
			
			const query = Bmob.Query('_User');
			query.get(uid).then(res => {
				resolve(res)
			}).catch(err => {
			  console.log(err)
			})
		})
		
	},

	//修改配置信息
	modify_setting(params) {
		let uid = uni.getStorageSync("uid");
		let setting = uni.getStorageSync("setting") || {};

		return new Promise((resolve, reject) => {
			uni.showLoading({
				title: "上传中"
			});
			const query = Bmob.Query("setting");
			const pointer = Bmob.Pointer('_User')
			const poiID = pointer.set(uid)

			if (setting.objectId) query.set("id", setting.objectId)
			query.set("show_float", Number(params.show_float))
			
			//query.set("sn",params.number)
			//query.set("key",params.key)
			//query.set("remark",params.remark)
			//query.set("carnum",params.carnum)
			
			query.set("wx_openid", params.wx_openid)
			query.set("auto_print", params.auto_print)
			query.set("production", params.production)
			query.set("negativeOut", params.negativeOut)
			query.set("parent", poiID)
			//query.set("beizhu", "Bmob")
			query.save().then(res => {
				console.log(res)
				uni.hideLoading();
				uni.showToast({
					title: "保存成功",
				})
				this.query_setting()

			}).catch(err => {
				console.log(err)
			})
		})

	},


	//查询当前用户的设置
	query_setting() {
		let uid = uni.getStorageSync("uid");
		return new Promise((resolve, reject) => {
			const query = Bmob.Query("setting");
			query.equalTo("parent", "==", uid);
			query.find().then(res => {
				console.log(res)
				if(res[0]){
					uni.setStorageSync("setting", res[0])
				}else{
					res[0] = {}
					res[0].show_float = 2
					uni.setStorageSync("setting", res[0])
				}
				resolve(res)
			});
		})
	},
	
	//得到用户信息
	getUserInfo(){
		let uid = uni.getStorageSync("uid");
		return new Promise((resolve, reject) => {
			const query = Bmob.Query('_User');
			query.get(uid).then(res => {
				uni.setStorageSync("user",res)
				resolve(true,res)
			}).catch(err => {
			  resolve(false,err)
			})
		})
	},
	//修改用户信息
	update_user(user) {
		let uid = uni.getStorageSync("uid");
		return new Promise((resolve, reject) => {
			const query = Bmob.Query('_User');
			query.get(uid).then(res => {
			  res.set('avatarUrl', user.avatarUrl)
			  res.set('nickName', user.nickName)
			  res.set('sex', Number(user.sex)?Number(user.sex):0)
			  res.save()
				resolve(true,res)
			}).catch(err => {
			  resolve(false,err)
			})
		})
	},


}
