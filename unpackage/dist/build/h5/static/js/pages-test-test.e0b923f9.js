(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-test-test"],{4328:function(e,t,o){"use strict";var n,r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view")},s=[];o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return n}))},"54f8":function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return r}));o("a4d3"),o("e01a"),o("d28b"),o("e260"),o("d3b7"),o("3ca3"),o("ddb0");var n=o("dde1");function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n["a"])(e))){var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,a=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,s=e},f:function(){try{a||null==r["return"]||r["return"]()}finally{if(u)throw s}}}}},"8d81":function(e,t,o){"use strict";o.r(t);var n=o("e6e2"),r=o.n(n);for(var s in n)"default"!==s&&function(e){o.d(t,e,(function(){return n[e]}))}(s);t["default"]=r.a},b998:function(e,t,o){"use strict";o.r(t);var n=o("4328"),r=o("8d81");for(var s in r)"default"!==s&&function(e){o.d(t,e,(function(){return r[e]}))}(s);var a,u=o("f0c5"),i=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"57add251",null,!1,n["a"],a);t["default"]=i.exports},e6e2:function(e,t,o){"use strict";(function(e){var n=o("ee27");o("7db0"),o("a9e3"),o("d3b7"),o("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("54f8")),s=n(o("9546")),a={data:function(){return{}},onLoad:function(){var t=s.default.Query("_User");t.get("56b58ee25e").then((function(t){e.log(t),t.unset("identity"),t.unset("rights"),t.save()})).catch((function(t){e.log(t)}))},methods:{modifyGoodsN:function(){var t=s.default.Pointer("_User"),o=t.set("525ad58072"),n=s.default.Query("Goods");n.equalTo("userId","==","525ad58072"),n.equalTo("order","==",0),n.limit(500),n.skip(500),n.find().then((function(t){e.log(t);var n,a=t.length,u=0,i=(0,r.default)(t);try{for(i.s();!(n=i.n()).done;){var d=n.value,c=(d.goodsName,s.default.Query("Goods"));if(c.set("goodsIcon",d.goodsIcon?d.goodsIcon:""),c.set("goodsName",d.goodsName),c.set("costPrice",d.costPrice?d.costPrice.toString():"0"),c.set("retailPrice",d.retailPrice?d.retailPrice.toString():"0"),c.set("regNumber",d.regNumber||""),c.set("reserve",Number(d.reserve)),c.set("productCode",d.productCode||""),c.set("product_info",d.product_info||""),c.set("producer",d.producer||""),c.set("packingUnit",d.packingUnit||""),c.set("packageContent",d.packageContent||""),c.set("position",d.position||""),c.set("warning_num",Number(d.warning_num||0)),c.set("max_num",Number(d.max_num||0)),c.set("stocktype",d.stocktype),c.set("order",d.order),d.goodsClass){var f=s.default.Pointer("class_user"),l=f.set(d.goodsClass.objectId);c.set("goodsClass",l)}if(d.second_class){var g=s.default.Pointer("second_class"),v=g.set(d.second_class.objectId);c.set("second_class",v)}c.set("userId",o),c.save().then((function(t){if(u+=1,u==a){var n=s.default.Query("Goods");n.equalTo("userId","==","525ad58072"),n.equalTo("order","==",1),n.limit(500),n.skip(500),n.find().then((function(t){e.log(t);var n,a=t,u=(0,r.default)(a);try{var i=function(){var t=n.value;e.log(t.goodsName);var r=s.default.Query("Goods");r.equalTo("userId","==","525ad58072"),r.equalTo("order","==",0),r.equalTo("goodsName","==",t.goodsName),r.find().then((function(n){e.log("sssss",n);var r=s.default.Pointer("Goods"),a=r.set(n[0].objectId),u=s.default.Query("Goods");if(u.set("order",1),u.set("goodsIcon",t.goodsIcon?t.goodsIcon:""),u.set("goodsName",t.goodsName),u.set("costPrice",t.costPrice?t.costPrice.toString():"0"),u.set("retailPrice",t.retailPrice?t.retailPrice.toString():"0"),u.set("header",a),u.set("userId",o),t.stocks){var i=s.default.Pointer("stocks"),d=i.set(t.stocks.objectId);u.set("stocks",d)}u.set("reserve",Number(t.reserve)),u.set("warning_num",Number(t.warning_num||0)),u.set("max_num",Number(t.max_num||0)),u.save().then((function(e){}))}))};for(u.s();!(n=u.n()).done;)i()}catch(d){u.e(d)}finally{u.f()}}))}}))}}catch(m){i.e(m)}finally{i.f()}}))}}};t.default=a}).call(this,o("5a52")["default"])}}]);