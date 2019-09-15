export default{
	
	//修改配置信息
	modify_setting(params){
		let uid = uni.getStorageSync("uid");
		let setting = uni.getStorageSync("setting");
		
		return new Promise((resolve, reject) => {
			uni.showLoading({
				title: "上传中"
			});
			const query = Bmob.Query("setting");
			const pointer = Bmob.Pointer('_User')
			const poiID = pointer.set(uid)
			
			query.set("id", setting.objectId)
			query.set("show_float", Number(params.show_float))
			query.set("USER", params.USER)
			query.set("UKEY", params.UKEY)
			query.set("number", params.number)
			query.set("wx_openid", params.wx_openid)
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
				//console.log(res)
				uni.setStorageSync("setting", res[0])
				resolve(res)
			});
		})
	},
}