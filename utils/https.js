module.exports = {
	
	request:function(url,parms)
	{
		uni.request({
		    url: 'http://www.jimuzhou.com/index.php/'+url, //仅为示例，并非真实接口地址。
		    data: parms,
				dataType:"JSONP",
				method:"POST",
		    header: {
		        'Content-Type': 'application/x-www-form-urlencoded' //自定义请求头信息
		    },
		    success: (res) => {
				console.log(res.data)
		        return JSON.parse(res.data);
		    }
		});
	}
}