(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/test/test"],{"64a9":function(e,t,o){"use strict";(function(e){o("d510"),o("921b");n(o("66fd"));var t=n(o("b998"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},"8d81":function(e,t,o){"use strict";o.r(t);var n=o("f04c"),r=o.n(n);for(var s in n)"default"!==s&&function(e){o.d(t,e,(function(){return n[e]}))}(s);t["default"]=r.a},b998:function(e,t,o){"use strict";o.r(t);var n=o("bc4b"),r=o("8d81");for(var s in r)"default"!==s&&function(e){o.d(t,e,(function(){return r[e]}))}(s);var a,u=o("f0c5"),c=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);t["default"]=c.exports},bc4b:function(e,t,o){"use strict";var n,r=function(){var e=this,t=e.$createElement;e._self._c},s=[];o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return n}))},f04c:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(o("9546"));function r(e){return e&&e.__esModule?e:{default:e}}function s(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=a(e))){var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,s=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){u=!0,r=e},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw r}}}}function a(e,t){if(e){if("string"===typeof e)return u(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var c={data:function(){return{}},onLoad:function(){var e=n.default.Query("_User");e.get("56b58ee25e").then((function(e){console.log(e),e.unset("identity"),e.unset("rights"),e.save()})).catch((function(e){console.log(e)}))},methods:{modifyGoodsN:function(){var e=n.default.Pointer("_User"),t=e.set("525ad58072"),o=n.default.Query("Goods");o.equalTo("userId","==","525ad58072"),o.equalTo("order","==",0),o.limit(500),o.skip(500),o.find().then((function(e){console.log(e);var o,r=e.length,a=0,u=s(e);try{for(u.s();!(o=u.n()).done;){var c=o.value,i=(c.goodsName,n.default.Query("Goods"));if(i.set("goodsIcon",c.goodsIcon?c.goodsIcon:""),i.set("goodsName",c.goodsName),i.set("costPrice",c.costPrice?c.costPrice.toString():"0"),i.set("retailPrice",c.retailPrice?c.retailPrice.toString():"0"),i.set("regNumber",c.regNumber||""),i.set("reserve",Number(c.reserve)),i.set("productCode",c.productCode||""),i.set("product_info",c.product_info||""),i.set("producer",c.producer||""),i.set("packingUnit",c.packingUnit||""),i.set("packageContent",c.packageContent||""),i.set("position",c.position||""),i.set("warning_num",Number(c.warning_num||0)),i.set("max_num",Number(c.max_num||0)),i.set("stocktype",c.stocktype),i.set("order",c.order),c.goodsClass){var d=n.default.Pointer("class_user"),l=d.set(c.goodsClass.objectId);i.set("goodsClass",l)}if(c.second_class){var f=n.default.Pointer("second_class"),g=f.set(c.second_class.objectId);i.set("second_class",g)}i.set("userId",t),i.save().then((function(e){if(a+=1,a==r){var o=n.default.Query("Goods");o.equalTo("userId","==","525ad58072"),o.equalTo("order","==",1),o.limit(500),o.skip(500),o.find().then((function(e){console.log(e);var o,r=e,a=s(r);try{var u=function(){var e=o.value;console.log(e.goodsName);var r=n.default.Query("Goods");r.equalTo("userId","==","525ad58072"),r.equalTo("order","==",0),r.equalTo("goodsName","==",e.goodsName),r.find().then((function(o){console.log("sssss",o);var r=n.default.Pointer("Goods"),s=r.set(o[0].objectId),a=n.default.Query("Goods");if(a.set("order",1),a.set("goodsIcon",e.goodsIcon?e.goodsIcon:""),a.set("goodsName",e.goodsName),a.set("costPrice",e.costPrice?e.costPrice.toString():"0"),a.set("retailPrice",e.retailPrice?e.retailPrice.toString():"0"),a.set("header",s),a.set("userId",t),e.stocks){var u=n.default.Pointer("stocks"),c=u.set(e.stocks.objectId);a.set("stocks",c)}a.set("reserve",Number(e.reserve)),a.set("warning_num",Number(e.warning_num||0)),a.set("max_num",Number(e.max_num||0)),a.save().then((function(e){}))}))};for(a.s();!(o=a.n()).done;)u()}catch(c){a.e(c)}finally{a.f()}}))}}))}}catch(m){u.e(m)}finally{u.f()}}))}}};t.default=c}},[["64a9","common/runtime","common/vendor"]]]);