export default {
	//得到仓库列表
	getstock_list(search_text,disabled) {
		let uid =  uni.getStorageSync('uid');
		return new Promise((resolve, reject) => {
			const query = Bmob.Query("stocks");
			query.order("-num");
			query.include("charge", "shop")
			query.equalTo("parent", "==", uid);
			query.equalTo("disabled", "!=", !disabled);
			if (search_text) {
				query.equalTo("stock_name", "==", {
					"$regex": "" + search_text + ".*"
				});

			}
			query.find().then(res => {
				//console.log(res)
				that.loading = false;
				that.stocks = res;

				if (search_text) {
					return
				} else {

					let _warehouse = []
					for (let item of res) {
						let warehouse = {}
						warehouse.name = item.stock_name
						warehouse.objectId = item.objectId
						_warehouse.push(warehouse)
					}
					uni.setStorageSync("_warehouse", _warehouse)
				}
			});
		})
	}
}
