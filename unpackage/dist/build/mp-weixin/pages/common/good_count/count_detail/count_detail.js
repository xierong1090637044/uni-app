(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_count/count_detail/count_detail"],{"0141":function(t,e,o){"use strict";o.r(e);var r=o("ade2"),s=o.n(r);for(var n in r)"default"!==n&&function(t){o.d(e,t,function(){return r[t]})}(n);e["default"]=s.a},"2b15":function(t,e,o){"use strict";o.r(e);var r=o("6f65"),s=o("0141");for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);o("ac00");var u=o("2877"),a=Object(u["a"])(s["default"],r["a"],r["b"],!1,null,null,null);e["default"]=a.exports},"39db":function(t,e,o){},"5df5":function(t,e,o){"use strict";(function(t){o("bc8c"),o("921b");r(o("66fd"));var e=r(o("2b15"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},"6f65":function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},s=[];o.d(e,"a",function(){return r}),o.d(e,"b",function(){return s})},ac00:function(t,e,o){"use strict";var r=o("39db"),s=o.n(r);s.a},ade2:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,s,n=c(o("906f")),u=c(o("93e8")),a=c(o("2df3"));function c(t){return t&&t.__esModule?t:{default:t}}var d={data:function(){return{products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,producer:null}},onLoad:function(){s=this,r=t.getStorageSync("uid"),this.products=t.getStorageSync("products")},methods:{formSubmit:function(e){console.log(e),this.button_disabled=!0,t.showLoading({title:"上传中..."});for(var o=new Array,c=[],d=0;d<this.products.length;d++){var i=n.default.Query("Bills"),l={},f=n.default.Pointer("_User"),p=f.set(r),m=n.default.Pointer("Goods"),v=m.set(this.products[d].objectId),g=t.getStorageSync("masterId"),h=n.default.Pointer("_User"),b=h.set(g);if(i.set("goodsName",this.products[d].goodsName),i.set("retailPrice",this.products[d].modify_retailPrice.toString()),i.set("num",Number(this.products[d].num)),i.set("reserve",this.products[d].reserve),i.set("now_reserve",this.products[d].num.toString()),i.set("total_money",this.products[d].total_money),i.set("opreater",b),i.set("goodsId",v),i.set("userId",p),i.set("type",3),s.products[d].stocks&&s.products[d].stocks.objectId){var y=n.default.Pointer("stocks"),_=y.set(s.products[d].stocks.objectId);i.set("stock",_)}l.goodsName=this.products[d].goodsName,l.reserve=this.products[d].reserve,l.now_reserve=this.products[d].num.toString(),o.push(i),c.push(l)}n.default.Query("Bills").saveAll(o).then(function(o){var d=n.default.Pointer("_User"),i=d.set(r),l=t.getStorageSync("masterId"),f=n.default.Pointer("_User"),p=f.set(l),m=n.default.Query("order_opreations");if(m.set("beizhu",e.detail.value.input_beizhu),m.set("detail",c),m.set("type",3),m.set("opreater",p),m.set("master",i),m.set("goodsName",s.products[0].goodsName),s.products[0].stocks&&s.products[0].stocks.objectId){var v=n.default.Pointer("stocks"),g=v.set(s.products[0].stocks.objectId);m.set("stock",g)}m.save().then(function(e){var o=e.objectId;t.hideLoading(),t.showToast({title:"产品盘点成功",icon:"success",success:function(){for(var r=function(t){var e=0,o=n.default.Query("Goods");o.get(s.products[t].objectId).then(function(o){if(s.products[t].selectd_model){var r=!0,n=!1,u=void 0;try{for(var a,c=JSON.parse(s.products[t].selectd_model)[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){var d=a.value,i=!0,l=!1,f=void 0;try{for(var p,m=s.products[t].models[Symbol.iterator]();!(i=(p=m.next()).done);i=!0){var v=p.value;v.id==JSON.parse(d).id?(v.reserve=Number(s.products[t].num),e+=Number(s.products[t].num)):e+=Number(v.reserve)}}catch(g){l=!0,f=g}finally{try{i||null==m.return||m.return()}finally{if(l)throw f}}}}catch(g){n=!0,u=g}finally{try{r||null==c.return||c.return()}finally{if(n)throw u}}o.set("models",s.products[t].models)}else e=Number(s.products[t].num);o.set("reserve",e),o.set("stocktype",e>s.products[t].warning_num?1:0),o.save()}).catch(function(t){console.log(t)})},c=0;c<s.products.length;c++)r(c);s.button_disabled=!1,t.setStorageSync("is_option",!0),setTimeout(function(){t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),u.default.log(t.getStorageSync("user").nickName+"盘点了'"+s.products[0].goodsName+"'等"+s.products.length+"商品",3,e.objectId),t.getStorageSync("setting").auto_print&&a.default.autoPrint(o),t.navigateBack({delta:2})},500)}})})},function(t){console.log("异常处理")})}}};e.default=d}).call(this,o("543d")["default"])}},[["5df5","common/runtime","common/vendor"]]]);