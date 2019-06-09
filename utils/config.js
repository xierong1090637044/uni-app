module.exports = {
	baseUrl: "http://www.jimuzhou.com/index.php/",
	
	
	request:function(url,params){
		uni.request({
		    url: "http://www.jimuzhou.com/index.php/"+url, //仅为示例，并非真实接口地址。
		    data: params,//{"parent":uid,"type":"wechat"},
				dataType:"JSONP",
				method:"POST",
		    header: {
		        'Content-Type': 'application/x-www-form-urlencoded' //自定义请求头信息
		    },
		    success: (res) => {
					return res.data;
					console.log(res.data);
		    }
		});
	},
	
}