import Bmob from "hydrogen-js-sdk";
export default {
	
	sendTempMini(params,type){
		if(type == "enter"){
			let params1 = {
				"thing1": {
					"value": params.goodsName + "...等",
					"color": "#173177"
				},
				"number2": {
					"value": params.total_num,
					"color": "#173177"
				},
				"name3": {
					"value": uni.getStorageSync("user").nickName,
				},
				"date4": {
					"value": params.createdAt
				},
			}
			params1.id = params.operationId
			this.send_in_mini(params1);
		}else if(type == "out"){
			let params1 = {
				"thing1": {
					"value": params.goodsName + "...等",
					"color": "#173177"
				},
				"number2": {
					"value": params.total_num,
					"color": "#173177"
				},
				"name3": {
					"value": uni.getStorageSync("user").nickName,
				},
				"time4": {
					"value": params.createdAt
				},
			}
			params1.id = params.operationId
			this.send_out_mini(params1);
		}
		
	},
	
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
	
	//发送采购模板
	send_in_noconfrim(params){
		let openid = uni.getStorageSync("setting").wx_openid
		uni.request({
		    url: 'https://www.jimuzhou.com/api/send_temp.php', //仅为示例，并非真实接口地址。
			method:"POST",
		    data: {
		    openid: openid,
				frist:params.frist,
				data1: params.data1,
				data2: params.data2,
				data3: params.data3,
				data4: params.data4,
				remark: params.remark,
				url:params.url,
				type:"in_noconfrim"
		    },
		    header: {
		        'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
		    },
		    success: (res) => {
		        console.log(res);
		    }
		});
	},
	
	//小程序发送入库模板
	send_in_mini(params){
		let modelData = {
		    "touser": uni.getStorageSync("openid"),
		    "template_id": "G2UJEDEyAtGuBdO-Yv96yBi-UnTLhaInr-KzEXqZ-48",
		    "page": "/pages/report/EnteringHistory/detail/detail?id="+params.id,
		    "data": params,
		    "emphasis_keyword": ""
		}
		
		Bmob.sendWeAppMessage(modelData).then(function (response) {
		    console.log(response);
		}).catch(function (error) {
		    console.log(error);
		});
	},
	
	//小程序发送出库模板
	send_out_mini(params){
		let modelData = {
		    "touser": uni.getStorageSync("openid"),
		    "template_id": "BKT2_0OuWF3mLZGvFmpRzWFa_Dyr4EIppl_LFF1uRLE",
		    "page": "/pages/report/EnteringHistory/detail/detail?id="+params.id,
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
