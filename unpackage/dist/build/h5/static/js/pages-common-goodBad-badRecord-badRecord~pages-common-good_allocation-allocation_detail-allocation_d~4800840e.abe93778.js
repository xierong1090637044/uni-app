(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-goodBad-badRecord-badRecord~pages-common-good_allocation-allocation_detail-allocation_d~4800840e"],{"54f8":function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return r}));o("a4d3"),o("e01a"),o("d28b"),o("e260"),o("d3b7"),o("3ca3"),o("ddb0");var n=o("dde1");function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n["a"])(e))){var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,u=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){s=!0,a=e},f:function(){try{u||null==r["return"]||r["return"]()}finally{if(s)throw a}}}}},"7fd5":function(e,t,o){"use strict";(function(t){var n=o("ee27");o("7db0"),o("a9e3"),o("d3b7"),o("25f0");var r=n(o("54f8")),a=n(o("9546"));e.exports={enterAddGoodNum:function(e,o){var n=this;return new Promise((function(u,s){for(var d=function(s){var d=0,i=a.default.Query("Goods");i.get(e[s].objectId).then((function(c){var l=c;if(e[s].selectd_model){var f,m=(0,r.default)(e[s].selected_model);try{for(m.s();!(f=m.n()).done;){var v,g=f.value,h=(0,r.default)(l.models);try{for(h.s();!(v=h.n()).done;){var y=v.value;y.id==g.id&&(y.reserve=Number(y.reserve)+Number(g.num)),delete y.num}}catch(b){h.e(b)}finally{h.f()}}}catch(b){m.e(b)}finally{m.f()}d=Number(l.reserve)+Number(e[s].num),i.set("models",l.models)}else d=Number(l.reserve)+Number(e[s].num);i.set("reserve",d),i.set("id",e[s].objectId),i.save().then((function(t){if(e[s].header){var r=a.default.Query("Goods");r.equalTo("header","==",e[s].header.objectId),r.equalTo("order","==",1),r.statTo("sum","reserve"),r.find().then((function(t){var r=t[0]._sumReserve,d=a.default.Query("Goods");d.set("reserve",r),"purchase"==o&&d.set("costPrice",e[s].modify_retailPrice),d.set("id",e[s].header.objectId),d.save().then((function(t){n.modifyStockType(e[s].header.objectId),s==e.length-1&&u(!0)}))}))}else n.modifyStockType(e[s].objectId),s==e.length-1&&u(!0)})).catch((function(e){t.log(e)}))}))},i=0;i<e.length;i++)d(i)}))},outRedGoodNum:function(e){var o=this;return new Promise((function(n,u){for(var s=function(u){var s=0,d=a.default.Query("Goods");d.get(e[u].objectId).then((function(i){var c=i;if(e[u].selectd_model){var l,f=(0,r.default)(e[u].selected_model);try{for(f.s();!(l=f.n()).done;){var m,v=l.value,g=(0,r.default)(c.models);try{for(g.s();!(m=g.n()).done;){var h=m.value;s+=Number(h.reserve),h.id==v.id&&(h.reserve=Number(h.reserve)-Number(v.num)),delete h.num}}catch(y){g.e(y)}finally{g.f()}}}catch(y){f.e(y)}finally{f.f()}s=Number(c.reserve)-Number(e[u].num),d.set("models",c.models)}else s=Number(c.reserve)-Number(e[u].num);d.set("reserve",s),d.set("id",e[u].objectId),d.save().then((function(t){if(e[u].header){var r=a.default.Query("Goods");r.equalTo("header","==",e[u].header.objectId),r.equalTo("order","==",1),r.statTo("sum","reserve"),r.find().then((function(t){var r=t[0]._sumReserve,s=a.default.Query("Goods");s.set("reserve",r),s.set("id",e[u].header.objectId),s.save().then((function(t){o.modifyStockType(e[u].header.objectId),u==e.length-1&&n(!0)}))}))}else o.modifyStockType(e[u].objectId),u==e.length-1&&n(!0)})).catch((function(e){t.log(e)}))}))},d=0;d<e.length;d++)s(d)}))},enterAddGoodNumNew:function(e,o){var n=this;return new Promise((function(u,s){for(var d=uni.getStorageSync("warehouse")?uni.getStorageSync("warehouse")[0].stock:"",i=uni.getStorageSync("uid"),c=function(s){var c=0,l=a.default.Query("Goods");l.equalTo("userId","==",i),l.equalTo("header","==",e[s].objectId),l.equalTo("stocks","==",d.objectId),l.find().then((function(i){if(0==i.length)n.upload_good_withNoCan(e[s],d,Number(e[s].num)).then((function(t){l.equalTo("header","==",e[s].objectId),l.equalTo("order","==",1),l.statTo("sum","reserve"),l.find().then((function(t){var n=t[0]._sumReserve;l.set("reserve",n),l.set("id",e[s].objectId),"purchase"==o&&l.set("costPrice",e[s].modify_retailPrice),l.save().then((function(t){s==e.length-1&&u(!0)}))}))}));else{var f=i[0],m=a.default.Query("Goods");if(e[s].selected_model){var v,g=(0,r.default)(e[s].selected_model);try{for(g.s();!(v=g.n()).done;){var h,y=v.value,b=(0,r.default)(f.models);try{for(b.s();!(h=b.n()).done;){var _=h.value;_.id==y.id&&(_.reserve=Number(_.reserve)+Number(y.num)),delete _.num}}catch(R){b.e(R)}finally{b.f()}}}catch(R){g.e(R)}finally{g.f()}c=Number(f.reserve)+Number(e[s].num),m.set("models",f.models)}else c=Number(f.reserve)+Number(e[s].num);m.set("reserve",c),m.set("id",f.objectId),m.save().then((function(t){m.equalTo("header","==",e[s].objectId),m.equalTo("order","==",1),m.statTo("sum","reserve"),m.find().then((function(t){var n=t[0]._sumReserve;m.set("reserve",n),"purchase"==o&&m.set("costPrice",e[s].modify_retailPrice.toString()),m.set("id",e[s].objectId),m.save().then((function(t){s==e.length-1&&u(!0)}))}))})).catch((function(e){t.log(e)}))}}))},l=0;l<e.length;l++)c(l)}))},outRedGoodNumNew:function(e){var o=this;return new Promise((function(n,u){for(var s=uni.getStorageSync("warehouse")?uni.getStorageSync("warehouse")[0].stock:"",d=uni.getStorageSync("uid"),i=function(u){var i=0,c=a.default.Query("Goods");c.equalTo("userId","==",d),c.equalTo("header","==",e[u].objectId),c.equalTo("stocks","==",s.objectId),c.find().then((function(d){if(0==d.length)o.upload_good_withNoCan(e[u],s,Number(e[u].num),"out").then((function(t){c.equalTo("header","==",e[u].objectId),c.equalTo("order","==",1),c.statTo("sum","reserve"),c.find().then((function(t){var o=t[0]._sumReserve;c.set("reserve",o),c.set("id",e[u].objectId),c.save().then((function(t){a.default.functions("warn_GoodNum",{uid:uni.getStorageSync("uid"),goodId:e[u].objectId}).then((function(e){})),u==e.length-1&&n(!0)}))}))}));else{var l=d[0];if(e[u].selected_model){var f,m=(0,r.default)(e[u].selected_model);try{for(m.s();!(f=m.n()).done;){var v,g=f.value,h=(0,r.default)(l.models);try{for(h.s();!(v=h.n()).done;){var y=v.value;y.id==g.id&&(y.reserve=Number(y.reserve)-Number(g.num)),delete y.num}}catch(b){h.e(b)}finally{h.f()}}}catch(b){m.e(b)}finally{m.f()}i=Number(l.reserve)-Number(e[u].num),c.set("models",l.models)}else i=Number(l.reserve)-Number(e[u].num);c.set("reserve",i),c.set("id",l.objectId),c.save().then((function(t){c.equalTo("header","==",e[u].objectId),c.equalTo("order","==",1),c.statTo("sum","reserve"),c.find().then((function(t){var o=t[0]._sumReserve;c.set("reserve",o),c.set("id",e[u].objectId),c.save().then((function(t){a.default.functions("warn_GoodNum",{uid:uni.getStorageSync("uid"),goodId:e[u].objectId}).then((function(e){})),u==e.length-1&&n(!0)}))}))})).catch((function(e){t.log(e)}))}}))},c=0;c<e.length;c++)i(c)}))},upload_good_withNoCan:function(e,o,n,u){return new Promise((function(s,d){var i=uni.getStorageSync("uid"),c=a.default.Pointer("_User"),l=c.set(i),f=a.default.Pointer("stocks"),m=f.set(o.objectId),v=a.default.Pointer("Goods"),g="";g=e.header?v.set(e.header.objectId):v.set(e.objectId);var h=a.default.Query("Goods");if(h.set("goodsName",e.goodsName),h.set("goodsIcon",e.goodsIcon),"out"==u){if(h.set("reserve",0-Number(n)),e.goodsId&&e.goodsId.models){var y,b=(0,r.default)(e.goodsId.models);try{for(b.s();!(y=b.n()).done;){var _=y.value;_.reserve=0-Number(_.num)}}catch(C){b.e(C)}finally{b.f()}h.set("models",e.goodsId.models)}else if(e.models&&e.models.length>0){var R,B=(0,r.default)(e.models);try{for(B.s();!(R=B.n()).done;){var p=R.value;p.reserve=0-Number(p.num)}}catch(C){B.e(C)}finally{B.f()}h.set("models",e.models)}}else if("allocation"==u){if(h.set("reserve",Number(n)),e.selected_model&&e.selected_model.length>0){var I,S=(0,r.default)(e.selected_model);try{for(S.s();!(I=S.n()).done;){var N=I.value;N.reserve=Number(N.num),delete N.num}}catch(C){S.e(C)}finally{S.f()}h.set("models",e.selected_model)}}else if(h.set("reserve",Number(n)),e.goodsId&&e.goodsId.models){var T,w=(0,r.default)(e.goodsId.models);try{for(w.s();!(T=w.n()).done;){var j=T.value;j.reserve=Number(j.num)}}catch(C){w.e(C)}finally{w.f()}h.set("models",e.goodsId.models)}else if(e.models&&e.models.length>0){var G,k=(0,r.default)(e.models);try{for(k.s();!(G=k.n()).done;){var P=G.value;P.reserve=Number(P.num?P.num:0)}}catch(C){k.e(C)}finally{k.f()}h.set("models",e.models)}h.set("stocks",m),h.set("userId",l),h.set("header",g),h.set("costPrice",""+e.costPrice),h.set("retailPrice",""+e.retailPrice),h.set("order",1),h.save().then((function(e){t.log(e),s([!0,e])})).catch((function(e){t.log(e)}))}))},handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(e,o,n){var r=a.default.Pointer("_User"),u=r.set(uni.getStorageSync("uid"));if(-2==o){var s=a.default.Pointer("Goods"),d=s.set(n),i=a.default.Query("logs");i.equalTo("goodId","==",n),i.find().then((function(n){if(0==n.length){var r=a.default.Query("logs");r.set("parent",u),r.set("goodId",d),r.set("log",e),r.set("type",o),r.save().then((function(e){t.log(e)})).catch((function(e){t.log(e)}))}}))}else{var c=a.default.Query("logs");c.set("parent",u),c.set("log",e),c.set("detail_id",n),c.set("type",o),c.save().then((function(e){t.log(e)})).catch((function(e){t.log(e)}))}},modifyStockType:function(e){var o=this,n=a.default.Query("Goods");n.get(e).then((function(e){var t=e;""==t.warning_num&&""==t.max_num?e.set("stocktype",1):void 0==t.warning_num&&void 0==t.max_num?e.set("stocktype",1):null==t.warning_num&&null==t.max_num?e.set("stocktype",1):(""!=t.warning_num&&(t.warning_num>=t.reserve?(e.set("stocktype",0),o.log(t.goodsName+"已经超过设置的最小库存值"+t.warning_num,-2,t.objectId)):t.warning_num<t.reserve&&t.reserve<t.max_num&&e.set("stocktype",1)),""!=t.max_num&&(t.max_num<=t.reserve?(e.set("stocktype",2),o.log(t.goodsName+"已经超过设置的最大库存值"+t.max_num,-2,t.objectId)):t.warning_num<t.reserve&&t.reserve<t.max_num&&e.set("stocktype",1))),e.save()})).catch((function(e){t.log(e)}))},record_shopOut:function(e,o){t.log(e,o);var n=a.default.Query("shops");n.set("id",e),n.set("have_out",o),n.save().then((function(e){t.log(e)})).catch((function(e){t.log(e)}))},record_staffOut:function(e){if(t.log(e,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var o=a.default.Query("_User");o.set("id",uni.getStorageSync("user").objectId),o.set("have_out",Number(e)+uni.getStorageSync("user").have_out),o.save().then((function(e){t.log(e)})).catch((function(e){t.log(e)}))}},get_allCost:function(){var e=uni.getStorageSync("uid");t.log(e);var o=a.default.Query("Goods");o.equalTo("userId","==",e),o.find().then((function(e){t.log(e);var o,n=(0,r.default)(e);try{for(n.s();!(o=n.n()).done;){var a=o.value;t.log(a),Number(a.costPrice)*a.reserve,a.reserve}}catch(u){n.e(u)}finally{n.f()}}))},getDay:function(e,t,o){var n=this,r=new Date,a=r.getTime()+864e5*e;r.setTime(a);var u=r.getFullYear(),s=r.getMonth(),d=r.getDate();return s=n.handleMonth(s+1),d=n.handleMonth(d),t?o?u+"-"+s+"-01 00:00:00":u+"-"+s+"-"+d+" 00:00:00":u+"-"+s+"-"+d},js_date_time:function(e,t){var o=new Date(e),n=o.getFullYear(),r=o.getMonth()+1;r=r<10?"0"+r:r;var a=o.getDate();a=a<10?"0"+a:a;var u=o.getHours();u=u<10?"0"+u:u;var s=o.getMinutes(),d=o.getSeconds();return s=s<10?"0"+s:s,d=d<10?"0"+d:d,t?n+"-"+r+"-"+a+" "+u+":"+s:n+"-"+r+"-"+a},handleMonth:function(e){var t=e;return 1==e.toString().length&&(t="0"+e),t}}}).call(this,o("5a52")["default"])},"856d":function(e,t,o){"use strict";(function(e){var n=o("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("54f8")),a=n(o("9546")),u={autoPrint:function(t){var o=this;e.log("sssss",t);var n=a.default.Query("order_opreations");n.include("opreater","custom","producer","stock"),n.get(t).then((function(t){e.log(t),o.print_operations(t,t.detail)}))},print_goodDet:function(e){var t,o=uni.getStorageSync("now_product");o.objectId=e.good_id,o.stocks=e,o.productCode=e.productCode,t="<CB>商品信息</CB><BR>",t+="--------------------------------<BR>",t+="产品名称：　　 "+o.goodsName+"<BR>",o.stocks&&(t+="存放店仓：　　 "+o.stocks.stock_name+"<BR>"),o.position&&(t+="货架位置：　　 "+o.position+"<BR>"),o.producttime&&(t+="生产日期：　　 "+o.producttime+"<BR>"),o.nousetime&&(t+="失效日期：　　 "+o.nousetime+"<BR>"),t+="当前库存：　　 "+o.reserve+"<BR>",t+="产品规格:　　　"+o.packageContent+"*"+o.packingUnit+"<BR>",t+="进货价格:      "+o.costPrice+"<BR>",t+="零售价格:      "+o.retailPrice+"<BR>",o.bad_num&&(t+="货损数量:      "+o.bad_num+"<BR>"),t+="--------------------------------<BR>",t+="产品二维码：<BR>",t+="<QR>"+o.productCode+"</QR>",this.print_by_code(t)},print_operations:function(t,o){if(e.log(t),3==t.type){c="<CB>盘点单</CB><BR>",c+="--------------------------------<BR>";for(var n=0;n<o.length;n++)c+="产品名称："+o[n].goodsName+"<BR>",c+="盘点前库存："+o[n].reserve+"<BR>",c+="盘点后库存："+o[n].now_reserve+"<BR>",c+="--------------------------------<BR>"}else if(-2==t.type){c="<CB>调拨单</CB><BR>",c+="--------------------------------<BR>";for(var a=0;a<o.length;a++){c+="产品名称："+o[a].goodsName+"<BR>",c+="调拨数量："+o[a].num+"<BR>",c+="--------------------------------<BR>";var u,s=(0,r.default)(t.detail);try{for(s.s();!(u=s.n()).done;){var d=u.value;c+="调出店仓："+d.stock+"<BR>",c+="<RIGHT>当前库存："+(d.reserve-d.num)+"</RIGHT><BR>",c+="调入店仓："+d.out_stock+"<BR>",c+="<RIGHT>当前库存："+(d.out_reserve+d.num)+"</RIGHT><BR>"}}catch(f){s.e(f)}finally{s.f()}}c+="--------------------------------<BR>"}else if(2==t.type){c="<CB>退货单</CB><BR>",c+="--------------------------------<BR>";for(var i=0;i<o.length;i++)c+="产品名称："+o[i].goodsName+"<BR>",c+="零售价："+o[i].retailPrice+"<BR>",c+="数量    ：X"+o[i].num+"<BR>",c+="<RIGHT>总计："+o[i].total_money+"</RIGHT>",c+="--------------------------------<BR>",c+="退货明细：<BR>",null!=t.custom?c+="客户姓名："+t.custom.custom_name+"<BR>":c+="未记录客户 <BR>";c+="<BOLD><RIGHT>全部总计："+t.all_money+"</RIGHT></BOLD>",c+="--------------------------------<BR>"}else{var c;c=1==t.type?"<CB>入库单</CB><BR>":"<CB>出库单</CB><BR>",c+="--------------------------------<BR>";for(var l=0;l<o.length;l++)c+="产品名称："+o[l].goodsName+"<BR>",c+="实际单价："+o[l].retailPrice+"<BR>",c+="数量    ：X"+o[l].num+"<BR>",c+="<RIGHT>总计："+o[l].total_money+"</RIGHT>",c+="--------------------------------<BR>";c+="<BOLD><RIGHT>全部总计："+t.all_money+"</RIGHT></BOLD>",c+="--------------------------------<BR>",1==t.type&&(c+="开单明细：<BR>",c+="<BR>",null!=t.producer&&(c+="供货商姓名："+t.producer.producer_name+"<BR>"),null==t.real_money?c+="实际收款：未填写 <BR>":c+="实际收款："+t.real_money+"<BR>",t.debt>0&&(c+="本次欠款："+t.debt+"<BR>"),c+="--------------------------------<BR>"),-1==t.type&&(c+="开单明细：<BR>",c+="<BR>",t.custom&&(c+="客户姓名："+t.custom.custom_name+"<BR>"),t.real_money?c+="实际收款：未填写 <BR>":c+="实际收款："+t.real_money+"<BR>",t.debt>0&&(c+="本次欠款  ："+t.debt+"<BR>"),c+="--------------------------------<BR>")}c+="操作者："+t.opreater.nickName+"<BR>",c+="备注："+t.beizhu+"<BR>",c+="操作时间："+t.createdAt+"<BR>",this.print_by_code(c)},print_by_code:function(t){var o=uni.getStorageSync("setting").USER,n=uni.getStorageSync("setting").UKEY,r=uni.getStorageSync("setting").number,a="api.feieyun.cn",u="/Api/Open/",s=(new Date).getTime(),d=c(o+n+s);b(r,t,1);var i=0;function c(e){return y(l(h(e)))}function l(e){for(var t=e,o=Array(80),n=1732584193,r=-271733879,a=-1732584194,u=271733878,s=-1009589776,d=0;d<t.length;d+=16){for(var i=n,c=r,l=a,h=u,y=s,b=0;b<80;b++){o[b]=b<16?t[d+b]:g(o[b-3]^o[b-8]^o[b-14]^o[b-16],1);var _=v(v(g(n,5),f(b,r,a,u)),v(v(s,o[b]),m(b)));s=u,u=a,a=g(r,30),r=n,n=_}n=v(n,i),r=v(r,c),a=v(a,l),u=v(u,h),s=v(s,y)}return new Array(n,r,a,u,s)}function f(e,t,o,n){return e<20?t&o|~t&n:e<40?t^o^n:e<60?t&o|t&n|o&n:t^o^n}function m(e){return e<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514}function v(e,t){var o=(65535&e)+(65535&t),n=(e>>16)+(t>>16)+(o>>16);return n<<16|65535&o}function g(e,t){return e<<t|e>>>32-t}function h(e){for(var t=1+(e.length+8>>6),o=new Array(16*t),n=0;n<16*t;n++)o[n]=0;for(n=0;n<e.length;n++)o[n>>2]|=e.charCodeAt(n)<<24-8*(3&n);return o[n>>2]|=128<<24-8*(3&n),o[16*t-1]=8*e.length,o}function y(e){for(var t=i?"0123456789ABCDEF":"0123456789abcdef",o="",n=0;n<4*e.length;n++)o+=t.charAt(e[n>>2]>>8*(3-n%4)+4&15)+t.charAt(e[n>>2]>>8*(3-n%4)&15);return o}function b(t,n,r){uni.request({url:"https://"+a+u,data:{user:o,stime:s,sig:d,apiname:"Open_printMsg",sn:t,content:n,times:r},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.log(t.data),0!=t.data.ret?uni.showToast({icon:"none",title:t.data.msg}):uni.showToast({icon:"none",title:"打印成功"})}})}}};t.default=u}).call(this,o("5a52")["default"])}}]);