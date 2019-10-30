import Bmob from "hydrogen-js-sdk";
module.exports = {
	//上传凭证图
	upload_image(num) {
		return new Promise((resolve, reject) => {
			let user = uni.getStorageSync("user");
			let Images = []
			uni.chooseImage({
				count: num, //默认9
				sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], //从相册选择
				success: function(res) {
					console.log(res);
					let timestamp = Date.parse(new Date());
					let tempFilePaths = res.tempFilePaths
					let file;
					for (let item of tempFilePaths) {
						file = Bmob.File(timestamp + '.jpg', item);
					}
					file.save().then(res => {
						for (let item of res) {
							Images.push(res[0].url);
						}
						resolve(Images);
					})
				},
			});
		})
	}
}
