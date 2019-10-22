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
		let url = location.href.split('#')[0] //获取锚点之前的链接
		headers['content-type'] = 'application/json';
		uni.request({
			url: 'https://www.jimuzhou.com/api/sample.php', //此处使用了全局变量拼接url（main.js文件中），关于全局变量官方问答里有
			method: 'POST', //get或post
			header: headers,
			data: {
				url: url
			},
			success: res => {
				console.log(jweixin);
				let wx_config = res.data;

				jweixin.config({
					debug: false,
					appId: wx_config.appId,
					timestamp: wx_config.timestamp,
					nonceStr: wx_config.nonceStr,
					signature: wx_config.signature,
					jsApiList: [
						'scanQRCode',
						'checkJsApi',
						'onMenuShareTimeline',
						'closeWindow',
						'updateTimelineShareData',
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
		return new Promise((resolve, reject) => {
			this.initJssdk(function() {
				jweixin.ready(function() {
					jweixin.scanQRCode({
						needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
						scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
						success: function(res) {
							var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果

							resolve(result)
						}
					});
				})
			})
		})

	},

	close: function() {
		this.initJssdk(function() {
			jweixin.ready(function() {
				jweixin.closeWindow();
			})
		})
	},
	
	share_pyq: function() {
		this.initJssdk(function() {
			jweixin.ready(function() {
				 jweixin.updateTimelineShareData({ 
				        title: '库存表-Simple and efficient', // 分享标题
				        link: 'https://www.jimuzhou.com/api/getUser.php', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				        imgUrl: 'https://bmob-cdn-23134.bmobcloud.com/2019/09/14/19716d4640cbb9ef8085676de06d5604.png', // 分享图标
				        success: function () {
				          // 设置成功
				        }
				    })
			})
		})
	},

}
