import Bmob from "hydrogen-js-sdk";
let uid = uni.getStorageSync("uid");
let that = this;
export default {
	//得到消息列表
	getNoticeList(limitNum) {
		return new Promise((resolve, reject) => {
			const query = Bmob.Query("InfoCenter");
			query.order("-createdAt");
			const query1 = query.equalTo("toUser", '==', uid);
			const query2 = query.equalTo("fromUser", '==', "I75puc2O"); //这是系统消息
			
			query.or(query1, query2);
			limitNum?query.limit(limitNum):'';
			query.find().then(res => {
				resolve(res)
			});
		})
		
	},
}
