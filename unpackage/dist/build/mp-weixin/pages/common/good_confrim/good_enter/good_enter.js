(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_confrim/good_enter/good_enter"],{"1df3":function(t,e,o){},3543:function(t,e,o){"use strict";o.r(e);var s=o("f059"),r=o.n(s);for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);e["default"]=r.a},"509d":function(t,e,o){"use strict";o.r(e);var s=o("a399"),r=o("3543");for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);o("9c56");var n,i=o("f0c5"),u=Object(i["a"])(r["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],n);e["default"]=u.exports},"59e8":function(t,e,o){"use strict";(function(t){o("d510"),o("921b");s(o("66fd"));var e=s(o("509d"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},"9c56":function(t,e,o){"use strict";var s=o("1df3"),r=o.n(s);r.a},a399:function(t,e,o){"use strict";var s,r=function(){var t=this,e=t.$createElement,o=(t._self._c,t.othercurrent.indexOf("1")),s=t.nowDay.split(" ");t.$mp.data=Object.assign({},{$root:{g0:o,g1:s}})},a=[];o.d(e,"b",function(){return r}),o.d(e,"c",function(){return a}),o.d(e,"a",function(){return s})},f059:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,r,a=d(o("9546")),n=d(o("7fd5")),i=(d(o("a2fc")),d(o("9f50"))),u=d(o("856d"));function d(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{user:t.getStorageSync("user"),identity:t.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,really_total_money:0,total_num:0,nowDay:n.default.getDay(0,!0,!0)}},onLoad:function(){r=this,s=t.getStorageSync("uid"),this.products=t.getStorageSync("products");for(var e=0;e<this.products.length;e++)this.all_money=Number((this.products[e].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[e].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[e].num);this.real_money=Number(this.all_money.toFixed(2)),r.user.rights&&r.user.rights.othercurrent&&(r.othercurrent=r.user.rights.othercurrent)},onShow:function(){},methods:{bindDateChange:function(t){r.nowDay=t.detail.value+" 00:00:00"},removeImg:function(t){r.Images.splice(t,1),r.Images=r.Images},upload_image:function(){r.user.is_vip?t.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var e,o=Date.parse(new Date),s=t.tempFilePaths,n=!0,i=!1,u=void 0;try{for(var d,c=s[Symbol.iterator]();!(n=(d=c.next()).done);n=!0){var l=d.value;e=a.default.File(o+".jpg",l)}}catch(m){i=!0,u=m}finally{try{n||null==c.return||c.return()}finally{if(i)throw u}}e.save().then(function(t){var e=!0,o=!1,s=void 0;try{for(var a,n=t[Symbol.iterator]();!(e=(a=n.next()).done);e=!0){var i=a.value;r.Images.push(i.url)}}catch(m){o=!0,s=m}finally{try{e||null==n.return||n.return()}finally{if(o)throw s}}})}}):t.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(e){t.getStorageSync("identity");if(!this.button_disabled){this.button_disabled=!0;e.detail.formId;var o=2;t.showLoading({title:"请勿退出..."});for(var d=new Array,c=[],l=[],m=[],h=0;h<this.products.length;h++){var f=Number(this.products[h].reserve)+this.products[h].num,p={},g=a.default.Query("Bills"),y=a.default.Pointer("_User"),_=y.set(s),v=a.default.Pointer("Goods"),b=v.set(this.products[h].header?this.products[h].header.objectId:this.products[h].objectId),S=t.getStorageSync("masterId"),I=a.default.Pointer("_User"),k=I.set(S);g.set("goodsName",this.products[h].goodsName),g.set("retailPrice",this.products[h].modify_retailPrice.toString()),g.set("num",Number(this.products[h].num)),g.set("total_money",this.products[h].total_money),g.set("really_total_money",this.products[h].really_total_money),g.set("goodsId",b),g.set("userId",_),g.set("opreater",k),g.set("type",1),g.set("extra_type",o),g.set("createdTime",{__type:"Date",iso:r.nowDay}),g.set("status",!0);var w={};if(this.products[h].stocks&&this.products[h].stocks.objectId){var N=a.default.Pointer("stocks"),P=N.set(this.products[h].stocks.objectId);g.set("stock",P),p.stock=this.products[h].stocks.stock_name,-1==l.indexOf(this.products[h].stocks.objectId)&&(l.push(this.products[h].stocks.objectId),m.push(this.products[h].stocks.stock_name))}p.goodsName=this.products[h].goodsName,p.modify_retailPrice=this.products[h].modify_retailPrice.toString(),p.retailPrice=this.products[h].retailPrice,p.total_money=this.products[h].total_money,p.packingUnit=this.products[h].packingUnit,w.costPrice=this.products[h].costPrice,w.retailPrice=this.products[h].retailPrice,w.objectId=this.products[h].objectId,w.reserve=f,this.products[h].selectd_model&&(w.selected_model=this.products[h].selected_model,w.models=this.products[h].models),p.goodsId=w,p.num=this.products[h].num,p.type=1,d.push(g),c.push(p)}a.default.Query("Bills").saveAll(d).then(function(d){for(var h=[],f=0;f<d.length;f++)h.push(d[f].success.objectId);var p=a.default.Pointer("_User"),g=p.set(s),y=t.getStorageSync("masterId"),_=a.default.Pointer("_User"),v=_.set(y),b=a.default.Query("order_opreations");b.set("beizhu",e.detail.value.input_beizhu),b.set("detail",c),b.set("real_num",r.total_num),b.set("type",1),b.set("extra_type",o),b.set("bills",h),b.set("opreater",v),b.set("master",g),b.set("stockIds",l),b.set("stockNames",m),b.set("goodsName",r.products[0].goodsName),b.set("real_money",Number(r.real_money)),b.set("debt",0),b.set("all_money",r.all_money),b.set("Images",r.Images),b.set("status",!1),b.set("createdTime",{__type:"Date",iso:r.nowDay}),b.save().then(function(o){var s=o.objectId,d=o.createdAt;n.default.enterAddGoodNum(r.products).then(function(o){var c=a.default.Query("order_opreations");c.set("id",s),c.set("status",!0),c.save().then(function(o){t.hideLoading();var a={frist:t.getStorageSync("user").nickName+"入库了'"+r.products[0].goodsName+"'等"+r.products.length+"商品",data1:d,data2:r.stock?r.stock.stock_name:"未填写",remark:e.detail.value.input_beizhu?e.detail.value.input_beizhu:"未填写",url:"https://www.jimuzhou.com/h5/pages/report/EnteringHistory/detail/detail?id="+s};i.default.send_in(a);var c={};c.goodsName=r.products[0].goodsName,c.total_num=r.total_num,c.createdAt=d,c.operationId=s,i.default.sendTempMini(c,"enter"),t.getStorageSync("setting").auto_print&&u.default.autoPrint(s),t.setStorageSync("is_option",!0),t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),t.showToast({title:"入库成功"}),setTimeout(function(){r.button_disabled=!1,n.default.log(t.getStorageSync("user").nickName+"入库了'"+r.products[0].goodsName+"'等"+r.products.length+"商品",1,s),t.navigateBack({delta:2})},500)})})})},function(t){console.log("异常处理")})}}}};e.default=c}).call(this,o("543d")["default"])}},[["59e8","common/runtime","common/vendor"]]]);