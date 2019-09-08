let jweixin = require('jweixin-module/out/index.js')

export default {
	//判断是否在微信中  
	isWechat: function() {
		var ua = window.navigator.userAgent.toLowerCase();
		if (ua.match(/micromessenger/i) == 'micromessenger') {
			return true;
		} else {
			return false;
		}
	},
	//初始化sdk配置  
	initJssdk: function(callback) {
		let headers = {};
		headers['content-type'] = 'application/json; charset=UTF-8';
		uni.request({
			url: 'https://www.jimuzhou.com/api/sample.php', //此处使用了全局变量拼接url（main.js文件中），关于全局变量官方问答里有
			method: 'POST', //get或post
			header: headers,
			data: {},
			success: res => {
				console.log(jweixin);
				let wx_config = res.data;

				jweixin.config({
					debug: true,
					appId: wx_config.appId,
					timestamp: wx_config.timestamp,
					nonceStr: wx_config.nonceStr,
					signature: wx_config.signature,
					jsApiList: [
						'scanQRCode',
						'checkJsApi',
						'onMenuShareTimeline',
						'onMenuShareAppMessage'
					]
				});
				//配置完成后，再执行分享等功能
				if (callback) {
					callback();
				}
			},
		});
	},

	scanQRCode: function() {
		this.initJssdk(function() {
			jweixin.ready(function(){
				jweixin.scanQRCode({
				needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
				scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
				success: function (res) {
				var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
				
				return  res
				}
				});
			})
		})
	}

}
