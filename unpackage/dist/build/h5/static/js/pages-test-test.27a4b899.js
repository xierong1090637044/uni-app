(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-test-test"],{8661:function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view")},n=[];o.d(t,"a",function(){return r}),o.d(t,"b",function(){return n})},"8d81":function(e,t,o){"use strict";o.r(t);var r=o("bf2f"),n=o.n(r);for(var s in r)"default"!==s&&function(e){o.d(t,e,function(){return r[e]})}(s);t["default"]=n.a},b998:function(e,t,o){"use strict";o.r(t);var r=o("8661"),n=o("8d81");for(var s in n)"default"!==s&&function(e){o.d(t,e,function(){return n[e]})}(s);var a=o("f0c5"),u=Object(a["a"])(n["default"],r["a"],r["b"],!1,null,"e3b5c778",null);t["default"]=u.exports},bf2f:function(e,t,o){"use strict";(function(e){var r=o("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o("c5f6"),o("6b54");var n=r(o("5d73"));o("7514");var s=r(o("9546")),a={data:function(){return{}},onLoad:function(){this.modifyGoodsInfo()},methods:{modifyGoodsInfo:function(){for(var t=function(t){var o=s.default.Pointer("_User"),r=o.set("o0wr5Ngm"),a=s.default.Query("Goods");a.equalTo("userId","==","6438d39096"),a.limit(50),a.find().then(function(t){t.set("userId",r);var o=!0,s=!1,a=void 0;try{for(var u,i=(0,n.default)(t);!(o=(u=i.next()).done);o=!0){var d=u.value;e.log(d),"undefined"==d.costPrice&&t.set("costPrice","0"),"undefined"==d.retailPrice&&t.set("retailPrice","0")}}catch(c){s=!0,a=c}finally{try{o||null==i.return||i.return()}finally{if(s)throw a}}t.saveAll().then(function(t){e.log(t,"ok")}).catch(function(t){e.log(t)})})},o=0;o<10;o++)t(o)},modifyGoodsN:function(){var t=s.default.Pointer("_User"),o=t.set("525ad58072"),r=s.default.Query("NGoods");r.equalTo("userId","==","525ad58072"),r.equalTo("order","==",0),r.limit(500),r.skip(500),r.find().then(function(t){e.log(t);var r=t.length,a=0,u=!0,i=!1,d=void 0;try{for(var c,l=(0,n.default)(t);!(u=(c=l.next()).done);u=!0){var f=c.value,v=(f.goodsName,s.default.Query("Goods"));if(v.set("goodsIcon",f.goodsIcon?f.goodsIcon:""),v.set("goodsName",f.goodsName),v.set("costPrice",f.costPrice?f.costPrice.toString():"0"),v.set("retailPrice",f.retailPrice?f.retailPrice.toString():"0"),v.set("regNumber",f.regNumber||""),v.set("reserve",Number(f.reserve)),v.set("productCode",f.productCode||""),v.set("product_info",f.product_info||""),v.set("producer",f.producer||""),v.set("packingUnit",f.packingUnit||""),v.set("packageContent",f.packageContent||""),v.set("position",f.position||""),v.set("warning_num",Number(f.warning_num||0)),v.set("max_num",Number(f.max_num||0)),v.set("stocktype",f.stocktype),v.set("order",f.order),f.goodsClass){var g=s.default.Pointer("class_user"),m=g.set(f.goodsClass.objectId);v.set("goodsClass",m)}if(f.second_class){var p=s.default.Pointer("second_class"),y=p.set(f.second_class.objectId);v.set("second_class",y)}v.set("userId",o),v.save().then(function(t){if(a+=1,a==r){var u=s.default.Query("NGoods");u.equalTo("userId","==","525ad58072"),u.equalTo("order","==",1),u.limit(500),u.skip(500),u.find().then(function(t){e.log(t);var r=t,a=!0,u=!1,i=void 0;try{for(var d,c=function(){var t=d.value;e.log(t.goodsName);var r=s.default.Query("Goods");r.equalTo("userId","==","525ad58072"),r.equalTo("order","==",0),r.equalTo("goodsName","==",t.goodsName),r.find().then(function(r){e.log("sssss",r);var n=s.default.Pointer("Goods"),a=n.set(r[0].objectId),u=s.default.Query("Goods");if(u.set("order",1),u.set("goodsIcon",t.goodsIcon?t.goodsIcon:""),u.set("goodsName",t.goodsName),u.set("costPrice",t.costPrice?t.costPrice.toString():"0"),u.set("retailPrice",t.retailPrice?t.retailPrice.toString():"0"),u.set("header",a),u.set("userId",o),t.stocks){var i=s.default.Pointer("stocks"),d=i.set(t.stocks.objectId);u.set("stocks",d)}u.set("reserve",Number(t.reserve)),u.set("warning_num",Number(t.warning_num||0)),u.set("max_num",Number(t.max_num||0)),u.save().then(function(e){})})},l=(0,n.default)(r);!(a=(d=l.next()).done);a=!0)c()}catch(f){u=!0,i=f}finally{try{a||null==l.return||l.return()}finally{if(u)throw i}}})}})}}catch(b){i=!0,d=b}finally{try{u||null==l.return||l.return()}finally{if(i)throw d}}})}}};t.default=a}).call(this,o("5a52")["default"])}}]);