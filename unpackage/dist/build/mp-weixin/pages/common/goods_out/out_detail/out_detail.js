(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/goods_out/out_detail/out_detail"],{"159a":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},n=[];o.d(e,"a",function(){return s}),o.d(e,"b",function(){return n})},"3f3a":function(t,e,o){},"58ed":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,n,u,r,a=d(o("ee11")),c=d(o("df06"));function d(t){return t&&t.__esModule?t:{default:t}}var l={data:function(){return{shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,custom:null}},onLoad:function(){n=this,s=t.getStorageSync("uid"),this.products=t.getStorageSync("products");for(var e=0;e<this.products.length;e++)this.all_money=this.products[e].total_money+this.all_money;this.real_money=this.all_money},onShow:function(){if(n.custom=t.getStorageSync("custom"),r=t.getStorageSync("shop"),r){n.shop_name=r.name;var e=a.default.Pointer("shops");u=e.set(r.objectId)}},methods:{formSubmit:function(e){var o=this;console.log(e),this.button_disabled=!0,t.showLoading({title:"上传中..."});for(var d=[],l=new Array,i=function(e){var n=Number(o.products[e].reserve)-o.products[e].num,d=a.default.Query("Goods");d.get(o.products[e].objectId).then(function(t){c.default.log(o.products[e].goodsName+"出库了"+o.products[e].num+"件，已经低于预警数量"+(o.products[e].warning_num?o.products[e].warning_num:0),-2,o.products[e].objectId),t.set("reserve",n),t.set("stocktype",n>o.products[e].warning_num?1:0),t.save()}).catch(function(t){console.log(t)});var i=a.default.Query("Bills"),f=a.default.Pointer("_User"),m=f.set(s),g=a.default.Pointer("_User"),p=g.set(t.getStorageSync("masterId")),_=a.default.Pointer("Goods"),h=_.set(o.products[e].objectId);if(t.getStorageSync("custom")){var y=a.default.Pointer("customs"),b=y.set(t.getStorageSync("custom").objectId);i.set("custom",b)}i.set("goodsName",o.products[e].goodsName),i.set("retailPrice",o.products[e].modify_retailPrice.toString()),i.set("num",o.products[e].num),i.set("total_money",o.products[e].total_money),i.set("goodsId",h),i.set("userId",m),i.set("type",-1),i.set("operater",p),r&&(i.set("shop",u),c.default.record_shopOut(r.objectId,r.have_out+o.products[e].num)),l.push(i),c.default.record_staffOut(o.products[e].num)},f=0;f<this.products.length;f++)i(f);a.default.Query("Bills").saveAll(l).then(function(o){for(var l=0;l<o.length;l++)if(d.push(o[l].success.objectId),l==o.length-1){var i=a.default.Relation("Bills"),f=i.add(d),m=a.default.Pointer("_User"),g=m.set(s),p=t.getStorageSync("masterId"),_=a.default.Pointer("_User"),h=_.set(p),y=a.default.Query("order_opreations");if(y.set("relations",f),y.set("beizhu",e.detail.value.input_beizhu),y.set("type",-1),y.set("opreater",h),y.set("master",g),y.set("goodsName",n.products[0].goodsName),y.set("real_money",Number(n.real_money)),y.set("debt",n.all_money-Number(n.real_money)),r&&y.set("shop",u),n.custom){var b=a.default.Pointer("customs"),v=b.set(n.custom.objectId);if(y.set("custom",v),n.all_money-Number(n.real_money)>0){var S=a.default.Query("customs");S.get(n.custom.objectId).then(function(t){var e=null==t.debt?0:t.debt;e+=n.all_money-Number(n.real_money),console.log(e);var o=a.default.Query("customs");o.get(n.custom.objectId).then(function(t){t.set("debt",e),t.save()})})}}y.set("all_money",n.all_money),y.save().then(function(e){console.log("添加操作历史记录成功",e),t.hideLoading(),t.removeStorageSync("customs"),t.showToast({title:"产品出库成功",icon:"success",success:function(){n.button_disabled=!1,t.setStorageSync("is_option",!0),setTimeout(function(){c.default.log(t.getStorageSync("user").nickName+"出库了'"+n.products[0].goodsName+"'等"+n.products.length+"商品",-1,e.objectId),t.navigateBack({delta:2})},500)}})})}},function(t){console.log("异常处理")})}}};e.default=l}).call(this,o("543d")["default"])},7874:function(t,e,o){"use strict";o.r(e);var s=o("58ed"),n=o.n(s);for(var u in s)"default"!==u&&function(t){o.d(e,t,function(){return s[t]})}(u);e["default"]=n.a},"7b57":function(t,e,o){"use strict";o.r(e);var s=o("159a"),n=o("7874");for(var u in n)"default"!==u&&function(t){o.d(e,t,function(){return n[t]})}(u);o("8a61");var r=o("2877"),a=Object(r["a"])(n["default"],s["a"],s["b"],!1,null,null,null);e["default"]=a.exports},"8a61":function(t,e,o){"use strict";var s=o("3f3a"),n=o.n(s);n.a}},[["0279","common/runtime","common/vendor"]]]);