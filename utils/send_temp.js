import Bmob from "hydrogen-js-sdk";
export default {
	//发送入库模板
	send_in(params){
		let openid = uni.getStorageSync("setting").wx_openid
		uni.request({
		    url: 'https://www.jimuzhou.com/api/send_temp.php', //仅为示例，并非真实接口地址。
			method:"POST",
		    data: {
		        openid: openid,
				frist:params.frist,
				data1: params.data1,
				data2: params.data2,
				remark: params.remark,
				url:params.url,
				type:"in"
		    },
		    header: {
		        'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
		    },
		    success: (res) => {
		        console.log(res);
		    }
		});
	},
	
	//发送入库模板
	send_in_mini(params){
		let modelData = {
		    "touser": uni.getStorageSync("openid"),
		    "template_id": "nqZl9FWDofCo9cxU4de45grLKh2GU-PJcAvWSbJMy9k",
		    "page": "/pages/report/EnteringHistory/detail/detail?id="+params.id,
		    "form_id":params.form_Id,
		    "data": params,
		    "emphasis_keyword": ""
		}
		
		Bmob.sendWeAppMessage(modelData).then(function (response) {
		    console.log(response);
		}).catch(function (error) {
		    console.log(error);
		});
	},
	
	//发送入库模板
	send_out_mini(params){
		let modelData = {
		    "touser": uni.getStorageSync("openid"),
		    "template_id": "z0Km0FFiuvnNiUcXtZD046j43ue5_AxR05cDHFLLXPY",
		    "page": "/pages/report/EnteringHistory/detail/detail?id="+params.id,
		    "form_id":params.form_Id,
		    "data": params,
		    "emphasis_keyword": ""
		}
		
		Bmob.sendWeAppMessage(modelData).then(function (response) {
		    console.log(response);
		}).catch(function (error) {
		    console.log(error);
		});
	},
	
	//发送出库模板
	send_temp(params){
		let openid = uni.getStorageSync("setting").wx_openid
		uni.request({
		    url: 'https://www.jimuzhou.com/api/send_temp.php', //仅为示例，并非真实接口地址。
			method:"POST",
		    data: {
		        openid: openid,
				data1: params.data1,
				data2: params.data2,
				data3: params.data3,
				data4: params.data4,
				remark: "备注:"+params.remark,
				url:params.url,
				type:"out"
		    },
		    header: {
		        'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
		    },
		    success: (res) => {
		        console.log(res);
		    }
		});
	}
}
