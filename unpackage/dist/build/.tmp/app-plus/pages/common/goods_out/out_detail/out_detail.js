(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/goods_out/out_detail/out_detail"],{"237c":function(t,e,o){"use strict";o.r(e);var s=o("8ee9"),u=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);e["default"]=u.a},3616:function(t,e,o){},"39f0":function(t,e,o){"use strict";o.r(e);var s=o("4efa"),u=o("237c");for(var n in u)"default"!==n&&function(t){o.d(e,t,function(){return u[t]})}(n);o("d224");var a=o("2877"),r=Object(a["a"])(u["default"],s["a"],s["b"],!1,null,null,null);e["default"]=r.exports},"4efa":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},u=[];o.d(e,"a",function(){return s}),o.d(e,"b",function(){return u})},"8ee9":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,u,n,a,r=c(o("e21e")),d=c(o("3e05"));function c(t){return t&&t.__esModule?t:{default:t}}var l={data:function(){return{shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,custom:null}},onLoad:function(){u=this,s=t.getStorageSync("uid"),this.products=t.getStorageSync("products");for(var e=0;e<this.products.length;e++)this.all_money=this.products[e].total_money+this.all_money;this.real_money=this.all_money},onShow:function(){if(u.custom=t.getStorageSync("custom"),a=t.getStorageSync("shop"),a){u.shop_name=a.name;var e=r.default.Pointer("shops");n=e.set(a.objectId)}},methods:{formSubmit:function(e){var o=this;console.log(e," at pages\\common\\goods_out\\out_detail\\out_detail.vue:104"),this.button_disabled=!0,t.showLoading({title:"上传中..."});for(var c=[],l=new Array,i=function(e){var u=Number(o.products[e].reserve)-o.products[e].num,c=r.default.Query("Goods");c.get(o.products[e].objectId).then(function(t){d.default.log(o.products[e].goodsName+"出库了"+o.products[e].num+"件，已经低于预警数量"+o.products[e].warning_num,-2,o.products[e].objectId),t.set("reserve",u),t.set("stocktype",u>o.products[e].warning_num?1:0),t.save()}).catch(function(t){console.log(t," at pages\\common\\goods_out\\out_detail\\out_detail.vue:124")});var i=r.default.Query("Bills"),m=r.default.Pointer("_User"),f=m.set(s),_=r.default.Pointer("_User"),g=_.set(t.getStorageSync("masterId")),p=r.default.Pointer("Goods"),h=p.set(o.products[e].objectId);i.set("goodsName",o.products[e].goodsName),i.set("retailPrice",o.products[e].modify_retailPrice.toString()),i.set("num",o.products[e].num),i.set("total_money",o.products[e].total_money),i.set("goodsId",h),i.set("userId",f),i.set("type",-1),i.set("operater",g),a&&(i.set("shop",n),d.default.record_shopOut(a.objectId,a.have_out+o.products[e].num)),l.push(i),d.default.record_staffOut(o.products[e].num)},m=0;m<this.products.length;m++)i(m);r.default.Query("Bills").saveAll(l).then(function(o){for(var l=0;l<o.length;l++)if(c.push(o[l].success.objectId),l==o.length-1){var i=r.default.Relation("Bills"),m=i.add(c),f=r.default.Pointer("_User"),_=f.set(s),g=t.getStorageSync("masterId"),p=r.default.Pointer("_User"),h=(p.set(g),r.default.Query("order_opreations"));if(h.set("relations",m),h.set("beizhu",e.detail.value.input_beizhu),h.set("type",-1),h.set("opreater",_),h.set("master",_),h.set("goodsName",u.products[0].goodsName),h.set("real_money",Number(u.real_money)),h.set("debt",u.all_money-Number(u.real_money)),a&&h.set("shop",n),u.custom){var v=r.default.Pointer("customs"),y=v.set(u.custom.objectId);if(h.set("custom",y),u.all_money-Number(u.real_money)>0){var b=r.default.Query("customs");b.get(u.custom.objectId).then(function(t){var e=null==t.debt?0:t.debt;e+=u.all_money-Number(u.real_money),console.log(e," at pages\\common\\goods_out\\out_detail\\out_detail.vue:194");var o=r.default.Query("customs");o.get(u.custom.objectId).then(function(t){t.set("debt",e),t.save()})})}}h.set("all_money",u.all_money),h.save().then(function(e){console.log("添加操作历史记录成功",e," at pages\\common\\goods_out\\out_detail\\out_detail.vue:206"),t.hideLoading(),t.removeStorageSync("customs"),t.showToast({title:"产品出库成功",icon:"success",success:function(){u.button_disabled=!1,t.setStorageSync("is_option",!0),setTimeout(function(){d.default.log(t.getStorageSync("user").nickName+"入库了'"+u.products[0].goodsName+"'等"+u.products.length+"商品",-1,e.objectId),t.navigateBack({delta:2})},500)}})})}},function(t){console.log("异常处理"," at pages\\common\\goods_out\\out_detail\\out_detail.vue:232")})}}};e.default=l}).call(this,o("6e42")["default"])},d224:function(t,e,o){"use strict";var s=o("3616"),u=o.n(s);u.a}},[["a5f5","common/runtime","common/vendor"]]]);