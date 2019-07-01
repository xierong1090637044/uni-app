import Bmob from '@/utils/bmob.js';

module.exports = {
	//日志功能
	log(log) {
		let pointer = Bmob.Pointer('_User')
		let userid = pointer.set(uni.getStorageSync("uid"));
		
		const query = Bmob.Query('logs');
		query.set("parent", userid);
		query.set("log", log);
		query.save().then(res => {
			console.log(res)
		}).catch(err => {
			console.log(err)
		})
	},
}
