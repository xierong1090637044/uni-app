(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_return/return_detail/return_detail"],{1746:function(e,t,o){"use strict";(function(e){o("9511"),o("921b");r(o("66fd"));var t=r(o("572e"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},2222:function(e,t,o){"use strict";var r=o("d5ee"),s=o.n(r);s.a},"572e":function(e,t,o){"use strict";o.r(t);var r=o("f1e3"),s=o("5ea7");for(var n in s)"default"!==n&&function(e){o.d(t,e,function(){return s[e]})}(n);o("2222");var u=o("2877"),a=Object(u["a"])(s["default"],r["a"],r["b"],!1,null,null,null);t["default"]=a.exports},"5ea7":function(e,t,o){"use strict";o.r(t);var r=o("ad7e"),s=o.n(r);for(var n in r)"default"!==n&&function(e){o.d(t,e,function(){return r[e]})}(n);t["default"]=s.a},ad7e:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,s,n,u,a=i(o("b739")),c=i(o("4c96"));function i(e){return e&&e.__esModule?e:{default:e}}var d={data:function(){return{shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,custom:null}},onLoad:function(){s=this,r=e.getStorageSync("uid"),this.products=e.getStorageSync("products");for(var t=0;t<this.products.length;t++)this.all_money=this.products[t].total_money+this.all_money},onShow:function(){if(s.custom=e.getStorageSync("custom"),u=e.getStorageSync("shop"),u){s.shop_name=u.name;var t=a.default.Pointer("shops");n=t.set(u.objectId)}},methods:{formSubmit:function(t){console.log(t),this.button_disabled=!0,e.showLoading({title:"上传中..."});for(var o=new Array,i=[],d=0;d<this.products.length;d++){Number(this.products[d].reserve),this.products[d].num;var l=a.default.Query("Bills"),m={},f=a.default.Pointer("_User"),p=f.set(r),h=a.default.Pointer("Goods"),g=h.set(this.products[d].objectId),y=e.getStorageSync("masterId"),v=a.default.Pointer("_User"),_=v.set(y);l.set("goodsName",this.products[d].goodsName),l.set("retailPrice",this.products[d].modify_retailPrice.toString()),l.set("num",Number(this.products[d].num)),l.set("total_money",this.products[d].total_money),l.set("goodsId",g),l.set("opreater",_),l.set("userId",p),l.set("type",2);var b={};m.goodsName=this.products[d].goodsName,m.modify_retailPrice=this.products[d].modify_retailPrice.toString(),m.retailPrice=this.products[d].retailPrice,m.total_money=this.products[d].total_money,b.costPrice=this.products[d].costPrice,b.retailPrice=this.products[d].retailPrice,m.goodsId=b,m.num=this.products[d].num,u&&l.set("shop",n),o.push(l),i.push(m)}a.default.Query("Bills").saveAll(o).then(function(o){var n=a.default.Pointer("_User"),u=n.set(r),d=e.getStorageSync("masterId"),l=a.default.Pointer("_User"),m=l.set(d),f=a.default.Query("order_opreations");if(f.set("beizhu",t.detail.value.input_beizhu),f.set("detail",i),f.set("type",2),f.set("opreater",m),f.set("master",u),f.set("goodsName",s.products[0].goodsName),f.set("real_money",Number(s.real_money)),f.set("debt",s.all_money-Number(s.real_money)),s.custom){var p=a.default.Pointer("customs"),h=p.set(s.custom.objectId);f.set("custom",h)}f.set("all_money",s.all_money),f.save().then(function(t){console.log("添加操作历史记录成功",t),e.hideLoading(),e.removeStorageSync("customs"),e.showToast({title:"产品退货成功",icon:"success",success:function(){for(var o=function(e){var t=0,o=a.default.Query("Goods");o.get(s.products[e].objectId).then(function(o){if(s.products[e].selectd_model){var r=!0,n=!1,u=void 0;try{for(var a,c=JSON.parse(s.products[e].selectd_model)[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){var i=a.value,d=!0,l=!1,m=void 0;try{for(var f,p=s.products[e].models[Symbol.iterator]();!(d=(f=p.next()).done);d=!0){var h=f.value;t+=Number(h.reserve),h.id==JSON.parse(i).id&&(h.reserve=Number(h.reserve)+Number(s.products[e].num))}}catch(g){l=!0,m=g}finally{try{d||null==p.return||p.return()}finally{if(l)throw m}}}}catch(g){n=!0,u=g}finally{try{r||null==c.return||c.return()}finally{if(n)throw u}}t+=Number(s.products[e].num),o.set("models",s.products[e].models)}else t=Number(s.products[e].reserve)+Number(s.products[e].num);o.set("reserve",t),o.set("stocktype",t>s.products[e].warning_num?1:0),o.save()}).catch(function(e){console.log(e)})},r=0;r<s.products.length;r++)o(r);s.button_disabled=!1,e.setStorageSync("is_option",!0),setTimeout(function(){e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),c.default.log(e.getStorageSync("user").nickName+"处理了'"+s.products[0].goodsName+"'等"+s.products.length+"商品的退货",2,t.objectId),e.navigateBack({delta:2})},500)}})})},function(e){console.log("异常处理")})}}};t.default=d}).call(this,o("543d")["default"])},d5ee:function(e,t,o){},f1e3:function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},s=[];o.d(t,"a",function(){return r}),o.d(t,"b",function(){return s})}},[["1746","common/runtime","common/vendor"]]]);