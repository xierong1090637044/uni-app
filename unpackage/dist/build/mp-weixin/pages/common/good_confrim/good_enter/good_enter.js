(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_confrim/good_enter/good_enter"],{4079:function(e,t,o){"use strict";o.r(t);var n=o("4528"),r=o.n(n);for(var u in n)"default"!==u&&function(e){o.d(t,e,function(){return n[e]})}(u);t["default"]=r.a},4528:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r,u=a(o("ee11")),s=a(o("df06"));function a(e){return e&&e.__esModule?e:{default:e}}var c={data:function(){return{products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,producer:null}},onLoad:function(){r=this,n=e.getStorageSync("uid"),e.removeStorageSync("producer"),this.products=e.getStorageSync("products");for(var t=0;t<this.products.length;t++)this.all_money=this.products[t].total_money+this.all_money;this.real_money=this.all_money},onShow:function(){r.producer=e.getStorageSync("producer")},methods:{formSubmit:function(t){var o=this;console.log(t),this.button_disabled=!0,e.showLoading({title:"上传中..."});for(var a=[],c=new Array,l=function(e){var t=Number(o.products[e].reserve)+o.products[e].num,r=u.default.Query("Goods");r.get(o.products[e].objectId).then(function(n){n.set("reserve",t),n.set("stocktype",t>o.products[e].warning_num?1:0),n.save()}).catch(function(e){console.log(e)});var s=u.default.Query("Bills"),a=u.default.Pointer("_User"),l=a.set(n),d=u.default.Pointer("Goods"),i=d.set(o.products[e].objectId);s.set("goodsName",o.products[e].goodsName),s.set("retailPrice",o.products[e].modify_retailPrice.toString()),s.set("num",o.products[e].num),s.set("total_money",o.products[e].total_money),s.set("goodsId",i),s.set("userId",l),s.set("type",1),c.push(s)},d=0;d<this.products.length;d++)l(d);u.default.Query("Bills").saveAll(c).then(function(o){for(var c=0;c<o.length;c++)if(a.push(o[c].success.objectId),c==o.length-1){var l=u.default.Relation("Bills"),d=l.add(a),i=u.default.Pointer("_User"),f=i.set(n),m=e.getStorageSync("masterId"),p=u.default.Pointer("_User"),g=p.set(m),_=u.default.Query("order_opreations");if(_.set("relations",d),_.set("beizhu",t.detail.value.input_beizhu),_.set("type",1),_.set("opreater",g),_.set("master",f),_.set("goodsName",r.products[0].goodsName),_.set("real_money",Number(r.real_money)),_.set("debt",r.all_money-Number(r.real_money)),r.producer){var y=u.default.Pointer("producers"),b=y.set(r.producer.objectId);if(_.set("producer",b),r.all_money-Number(r.real_money)>0){var h=u.default.Query("producers");h.get(r.producer.objectId).then(function(e){var t=null==e.debt?0:e.debt;t+=r.all_money-Number(r.real_money),console.log(t);var o=u.default.Query("producers");o.get(r.producer.objectId).then(function(e){e.set("debt",t),e.save()})})}}_.set("all_money",r.all_money),_.save().then(function(t){console.log("添加操作历史记录成功",t),e.hideLoading(),e.showToast({title:"产品入库成功",icon:"success",success:function(){r.button_disabled=!1,e.setStorageSync("is_option",!0),setTimeout(function(){s.default.log(e.getStorageSync("user").nickName+"入库了'"+r.products[0].goodsName+"'等"+r.products.length+"商品",1,t.objectId),e.navigateBack({delta:2})},500)}})})}},function(e){console.log("异常处理")})}}};t.default=c}).call(this,o("543d")["default"])},"5e12":function(e,t,o){"use strict";var n=o("94fc"),r=o.n(n);r.a},"94fc":function(e,t,o){},b142:function(e,t,o){"use strict";o.r(t);var n=o("e399"),r=o("4079");for(var u in r)"default"!==u&&function(e){o.d(t,e,function(){return r[e]})}(u);o("5e12");var s=o("2877"),a=Object(s["a"])(r["default"],n["a"],n["b"],!1,null,null,null);t["default"]=a.exports},e399:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},r=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return r})}},[["f697","common/runtime","common/vendor"]]]);