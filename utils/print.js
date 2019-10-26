import Bmob from "hydrogen-js-sdk";
export default {
	//自动打印凭证
	autoPrint(id) {
		console.log("sssss",id)
		const query = Bmob.Query('order_opreations');
		query.include("opreater", "custom", "producer", "stock");
		query.get(id).then(res => {
			console.log(res);
			this.print_operations(res, res.detail)
		})
	},

	//打印产品信息
	print_goodDet(item) {
		//console.log(item)
		let orderInfo;
		let good = uni.getStorageSync("now_product")
		good.objectId = item.good_id
		good.stocks = item
		good.productCode = item.productCode

		orderInfo = '<CB>商品信息</CB><BR>';
		orderInfo += '--------------------------------<BR>';
		orderInfo += '产品名称：　　 ' + good.goodsName + '<BR>';
		if (good.stocks) orderInfo += '存放仓库：　　 ' + good.stocks.stock_name + '<BR>';

		if (good.position) orderInfo += '货架位置：　　 ' + good.position + '<BR>';
		if (good.producttime) orderInfo += '生产日期：　　 ' + good.producttime + '<BR>';
		if (good.nousetime) orderInfo += '失效日期：　　 ' + good.nousetime + '<BR>';
		orderInfo += '当前库存：　　 ' + good.reserve + '<BR>';
		orderInfo += '产品规格:　　　' + good.packageContent + '*' + good.packingUnit + '<BR>';
		orderInfo += '进货价格:      ' + good.costPrice + '<BR>';
		orderInfo += '零售价格:      ' + good.retailPrice + '<BR>';
		if (good.bad_num) orderInfo += '货损数量:      ' + good.bad_num + '<BR>';
		orderInfo += '--------------------------------<BR>';
		orderInfo += '产品二维码：<BR>';
		orderInfo += '<QR>' + good.productCode + '</QR>'; //把二维码字符串用标签套上即可自动生成二维码

		this.print_by_code(orderInfo);
	},

	//打印操作记录明细
	print_operations(detail, products) {
		console.log(detail)

		if (detail.type == 3) {
			orderInfo = '<CB>盘点单</CB><BR>';
			orderInfo += '--------------------------------<BR>';
			for (let i = 0; i < products.length; i++) {
				orderInfo += '产品名称：' + products[i].goodsName + '<BR>';
				orderInfo += '盘点前库存：' + products[i].reserve + '<BR>';
				orderInfo += '盘点后库存：' + products[i].now_reserve + '<BR>';
				orderInfo += '--------------------------------<BR>';
			}
		} else if (detail.type == -2) {
			orderInfo = '<CB>调拨单</CB><BR>';
			orderInfo += '--------------------------------<BR>';
			for (let i = 0; i < products.length; i++) {
				orderInfo += '产品名称：' + products[i].goodsName + '<BR>';
				orderInfo += '调拨数量：' + products[i].num + '<BR>';
				orderInfo += '--------------------------------<BR>';
				for (let item of detail.detail) {
					orderInfo += '调出仓库：' + item.stock + '<BR>';
					orderInfo += '<RIGHT>当前库存：' + (item.reserve - item.num) + '</RIGHT><BR>';
					orderInfo += '调入仓库：' + item.out_stock + '<BR>';
					orderInfo += '<RIGHT>当前库存：' + (item.out_reserve + item.num) + '</RIGHT><BR>';
				}
			}
			orderInfo += '--------------------------------<BR>';
		} else if (detail.type == 2) {
			orderInfo = '<CB>退货单</CB><BR>';
			orderInfo += '--------------------------------<BR>';
			for (let i = 0; i < products.length; i++) {
				orderInfo += '产品名称：' + products[i].goodsName + '<BR>';
				orderInfo += '零售价：' + products[i].retailPrice + '<BR>';
				orderInfo += '数量    ：X' + products[i].num + '<BR>';
				orderInfo += '<RIGHT>总计：' + products[i].total_money + '</RIGHT>';
				orderInfo += '--------------------------------<BR>';
				orderInfo += '退货明细：<BR>';
				if (detail.custom != null) {
					orderInfo += '客户姓名：' + detail.custom.custom_name + '<BR>';
				} else {
					orderInfo += '未记录客户 <BR>';
				}
			}
			orderInfo += '<BOLD><RIGHT>全部总计：' + detail.all_money + '</RIGHT></BOLD>';
			orderInfo += '--------------------------------<BR>';
		} else {
			var orderInfo;
			if (detail.type == 1) {
				orderInfo = '<CB>入库单</CB><BR>';
			} else {
				orderInfo = '<CB>出库单</CB><BR>';
			}
			orderInfo += '--------------------------------<BR>';
			for (let i = 0; i < products.length; i++) {
				orderInfo += '产品名称：' + products[i].goodsName + '<BR>';
				orderInfo += '实际单价：' + products[i].retailPrice + '<BR>';
				orderInfo += '数量    ：X' + products[i].num + '<BR>';
				orderInfo += '<RIGHT>总计：' + products[i].total_money + '</RIGHT>';
				orderInfo += '--------------------------------<BR>';
			}
			orderInfo += '<BOLD><RIGHT>全部总计：' + detail.all_money + '</RIGHT></BOLD>';
			orderInfo += '--------------------------------<BR>';
			if (detail.type == 1) {
				orderInfo += '开单明细：<BR>';
				orderInfo += '<BR>';
				if (detail.producer != null) {
					orderInfo += '供货商姓名：' + detail.producer.producer_name + '<BR>';
				}
				if (detail.real_money == null) {
					orderInfo += '实际收款：未填写 <BR>';
				} else {
					orderInfo += '实际收款：' + detail.real_money + '<BR>';
				}
				if (detail.debt > 0) {
					orderInfo += '本次欠款：' + detail.debt + '<BR>';
				}
				orderInfo += '--------------------------------<BR>';
			}

			if (detail.type == -1) {
				orderInfo += '开单明细：<BR>';
				orderInfo += '<BR>';
				if (detail.custom) {
					orderInfo += '客户姓名：' + detail.custom.custom_name + '<BR>';
				}
				if (detail.real_money) {
					orderInfo += '实际收款：未填写 <BR>';
				} else {
					orderInfo += '实际收款：' + detail.real_money + '<BR>';
				}

				if (detail.debt > 0) {
					orderInfo += '本次欠款  ：' + detail.debt + '<BR>';
				}

				orderInfo += '--------------------------------<BR>';
			}
		}

		orderInfo += '操作者：' + detail.opreater.nickName + '<BR>';
		orderInfo += '备注：' + (detail.beizhu) ? '备注：'+detail.beizhu + '<BR>':'备注：暂无' + '<BR>' ;
		orderInfo += '操作时间：' + detail.createdAt + '<BR>';

		this.print_by_code(orderInfo);
	},

	//打印商品信息
	print_by_code: function(orderInfo) {
		//USER和UKEY在飞鹅云（ http://admin.feieyun.com/ ）管理后台的个人中心可以查看
		var USER = uni.getStorageSync("setting").USER; //必填，飞鹅云 http://admin.feieyun.com/ 管理后台注册的账号名
		var UKEY = uni.getStorageSync("setting").UKEY; //必填，这个不是填打印机的key，是在飞鹅云后台注册账号后生成的UKEY

		var SN = uni.getStorageSync("setting").number; //必填，打印机编号,打印机必须要在管理后台先添加

		//以下URL参数不需要修改
		var HOST = "api.feieyun.cn"; //域名
		var PATH = "/Api/Open/"; //接口路径
		var STIME = new Date().getTime(); //请求时间,当前时间的秒数
		var SIG = hex_sha1(USER + UKEY + STIME); //获取签名

		//标签说明：
		//单标签:
		//"<BR>"为换行,"<CUT>"为切刀指令(主动切纸,仅限切刀打印机使用才有效果)
		//"<LOGO>"为打印LOGO指令(前提是预先在机器内置LOGO图片),"<PLUGIN>"为钱箱或者外置音响指令
		//成对标签：
		//"<CB></CB>"为居中放大一倍,"<B></B>"为放大一倍,"<C></C>"为居中,<L></L>字体变高一倍
		//<W></W>字体变宽一倍,"<QR></QR>"为二维码,"<BOLD></BOLD>"为字体加粗,"<RIGHT></RIGHT>"为右对齐
		//拼凑订单内容时可参考如下格式
		//根据打印纸张的宽度，自行调整内容的格式，可参考下面的样例格式



		//***接口返回值说明***
		//正确例子：{"msg":"ok","ret":0,"data":"123456789_20160823165104_1853029628","serverExecutedTime":6}
		//错误：{"msg":"错误信息.","ret":非零错误码,"data":null,"serverExecutedTime":5}
		// console.log(orderInfo);
		//打开注释可测试
		print_r(SN, orderInfo, 1);

		var hexcase = 0;
		var chrsz = 8;

		function hex_sha1(s) {
			return binb2hex(core_sha1(AlignSHA1(s)));
		}

		function core_sha1(blockArray) {
			var x = blockArray;
			var w = Array(80);
			var a = 1732584193;
			var b = -271733879;
			var c = -1732584194;
			var d = 271733878;
			var e = -1009589776;
			for (var i = 0; i < x.length; i += 16) {
				var olda = a;
				var oldb = b;
				var oldc = c;
				var oldd = d;
				var olde = e;
				for (var j = 0; j < 80; j++) {
					if (j < 16)
						w[j] = x[i + j];
					else
						w[j] = rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
					var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));
					e = d;
					d = c;
					c = rol(b, 30);
					b = a;
					a = t;
				}
				a = safe_add(a, olda);
				b = safe_add(b, oldb);
				c = safe_add(c, oldc);
				d = safe_add(d, oldd);
				e = safe_add(e, olde);
			}
			return new Array(a, b, c, d, e);
		}

		function sha1_ft(t, b, c, d) {
			if (t < 20)
				return (b & c) | ((~b) & d);
			if (t < 40)
				return b ^ c ^ d;
			if (t < 60)
				return (b & c) | (b & d) | (c & d);
			return b ^ c ^ d;
		}

		function sha1_kt(t) {
			return (t < 20) ? 1518500249 : (t < 40) ? 1859775393 : (t < 60) ? -1894007588 : -899497514;
		}

		function safe_add(x, y) {
			var lsw = (x & 0xFFFF) + (y & 0xFFFF);
			var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
			return (msw << 16) | (lsw & 0xFFFF);
		}

		function rol(num, cnt) {
			return (num << cnt) | (num >>> (32 - cnt));
		}

		function AlignSHA1(str) {
			var nblk = ((str.length + 8) >> 6) + 1,
				blks = new Array(nblk * 16);
			for (var i = 0; i < nblk * 16; i++)
				blks[i] = 0;
			for (i = 0; i < str.length; i++)
				blks[i >> 2] |= str.charCodeAt(i) << (24 - (i & 3) * 8);
			blks[i >> 2] |= 0x80 << (24 - (i & 3) * 8);
			blks[nblk * 16 - 1] = str.length * 8;
			return blks;
		}

		function binb2hex(binarray) {
			var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
			var str = "";
			for (var i = 0; i < binarray.length * 4; i++) {
				str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +
					hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
			}
			return str;
		}

		/*
		 *  打印订单方法：Open_printMsg
		 */
		function print_r(SN, orderInfo, TIMES) {
			uni.request({
				url: 'https://' + HOST + PATH,
				data: {
					user: USER, //账号
					stime: STIME, //当前时间的秒数，请求时间
					sig: SIG, //签名

					apiname: "Open_printMsg", //不需要修改
					sn: SN, //打印机编号
					content: orderInfo, //打印内容
					times: TIMES, //打印联数,默认为1
				},
				method: "POST",
				header: {
					"content-type": "application/x-www-form-urlencoded"
				},
				success: function(res) {
					console.log(res.data)
					if (res.data.ret != 0) {
						uni.showToast({
							icon: "none",
							title: res.data.msg,
						})
					} else {
						uni.showToast({
							icon: "none",
							title: "打印成功",
						})
					}
				}
			})
		}
	},
}
