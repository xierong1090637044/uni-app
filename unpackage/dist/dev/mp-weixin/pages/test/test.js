(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/test/test"],{410:
/*!********************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/main.js?{"page":"pages%2Ftest%2Ftest"} ***!
  \********************************************************************************************/
/*! no static exports found */function(e,t,o){"use strict";(function(e){o(/*! uni-pages */4),o(/*! @dcloudio/uni-stat */5);t(o(/*! vue */2));function t(e){return e&&e.__esModule?e:{default:e}}e(t(o(/*! ./pages/test/test.vue */411)).default)}).call(this,o(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).createPage)},411:
/*!*************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/pages/test/test.vue ***!
  \*************************************************************************/
/*! no static exports found */function(e,t,o){"use strict";o.r(t);var r=o(/*! ./test.vue?vue&type=template&id=2d7a914e& */412),n=o(/*! ./test.vue?vue&type=script&lang=js& */414);for(var s in n)"default"!==s&&function(e){o.d(t,e,function(){return n[e]})}(s);var a=o(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */70),i=Object(a.default)(n.default,r.render,r.staticRenderFns,!1,null,null,null,!1,r.components,void 0);i.options.__file="C:/Users/Administrator/Desktop/wechat/kcb_all/pages/test/test.vue",t.default=i.exports},412:
/*!********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/pages/test/test.vue?vue&type=template&id=2d7a914e& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,t,o){"use strict";o.r(t);var r=o(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./test.vue?vue&type=template&id=2d7a914e& */413);o.d(t,"render",function(){return r.render}),o.d(t,"staticRenderFns",function(){return r.staticRenderFns}),o.d(t,"recyclableRender",function(){return r.recyclableRender}),o.d(t,"components",function(){return r.components})},413:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/pages/test/test.vue?vue&type=template&id=2d7a914e& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,t,o){"use strict";o.r(t),o.d(t,"render",function(){return r}),o.d(t,"staticRenderFns",function(){return s}),o.d(t,"recyclableRender",function(){return n}),o.d(t,"components",function(){});var r=function(){var e=this.$createElement;this._self._c},n=!1,s=[];r._withStripped=!0},414:
/*!**************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/pages/test/test.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */function(e,t,o){"use strict";o.r(t);var r=o(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./test.vue?vue&type=script&lang=js& */415),n=o.n(r);for(var s in r)"default"!==s&&function(e){o.d(t,e,function(){return r[e]})}(s);t.default=n.a},415:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/pages/test/test.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=o(/*! hydrogen-js-sdk */13))&&r.__esModule?r:{default:r};var s={data:function(){return{}},onLoad:function(){this.modifyGoodsInfo()},methods:{modifyGoodsInfo:function(){for(var e=function(e){var t=n.default.Pointer("_User").set("o0wr5Ngm"),o=n.default.Query("Goods");o.equalTo("userId","==","6438d39096"),o.limit(50),o.find().then(function(e){e.set("userId",t);var o=!0,r=!1,n=void 0;try{for(var s,a=e[Symbol.iterator]();!(o=(s=a.next()).done);o=!0){var i=s.value;console.log(i),"undefined"==i.costPrice&&e.set("costPrice","0"),"undefined"==i.retailPrice&&e.set("retailPrice","0")}}catch(e){r=!0,n=e}finally{try{o||null==a.return||a.return()}finally{if(r)throw n}}e.saveAll().then(function(e){console.log(e,"ok")}).catch(function(e){console.log(e)})})},t=0;t<10;t++)e()},modifyGoodsN:function(){var e=n.default.Pointer("_User").set("525ad58072"),t=n.default.Query("NGoods");t.equalTo("userId","==","525ad58072"),t.equalTo("order","==",0),t.limit(500),t.skip(500),t.find().then(function(t){console.log(t);var o=t.length,r=0,s=!0,a=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(s=(u=c.next()).done);s=!0){var d=u.value,l=(d.goodsName,n.default.Query("Goods"));if(l.set("goodsIcon",d.goodsIcon?d.goodsIcon:""),l.set("goodsName",d.goodsName),l.set("costPrice",d.costPrice?d.costPrice.toString():"0"),l.set("retailPrice",d.retailPrice?d.retailPrice.toString():"0"),l.set("regNumber",d.regNumber||""),l.set("reserve",Number(d.reserve)),l.set("productCode",d.productCode||""),l.set("product_info",d.product_info||""),l.set("producer",d.producer||""),l.set("packingUnit",d.packingUnit||""),l.set("packageContent",d.packageContent||""),l.set("position",d.position||""),l.set("warning_num",Number(d.warning_num||0)),l.set("max_num",Number(d.max_num||0)),l.set("stocktype",d.stocktype),l.set("order",d.order),d.goodsClass){var f=n.default.Pointer("class_user").set(d.goodsClass.objectId);l.set("goodsClass",f)}if(d.second_class){var m=n.default.Pointer("second_class").set(d.second_class.objectId);l.set("second_class",m)}l.set("userId",e),l.save().then(function(t){if((r+=1)==o){var s=n.default.Query("NGoods");s.equalTo("userId","==","525ad58072"),s.equalTo("order","==",1),s.limit(500),s.skip(500),s.find().then(function(t){console.log(t);var o=t,r=!0,s=!1,a=void 0;try{for(var i,u=function(){var t=i.value;console.log(t.goodsName);var o=n.default.Query("Goods");o.equalTo("userId","==","525ad58072"),o.equalTo("order","==",0),o.equalTo("goodsName","==",t.goodsName),o.find().then(function(o){console.log("sssss",o);var r=n.default.Pointer("Goods").set(o[0].objectId),s=n.default.Query("Goods");if(s.set("order",1),s.set("goodsIcon",t.goodsIcon?t.goodsIcon:""),s.set("goodsName",t.goodsName),s.set("costPrice",t.costPrice?t.costPrice.toString():"0"),s.set("retailPrice",t.retailPrice?t.retailPrice.toString():"0"),s.set("header",r),s.set("userId",e),t.stocks){var a=n.default.Pointer("stocks").set(t.stocks.objectId);s.set("stocks",a)}s.set("reserve",Number(t.reserve)),s.set("warning_num",Number(t.warning_num||0)),s.set("max_num",Number(t.max_num||0)),s.save().then(function(e){})})},c=o[Symbol.iterator]();!(r=(i=c.next()).done);r=!0)u()}catch(e){s=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(s)throw a}}})}})}}catch(e){a=!0,i=e}finally{try{s||null==c.return||c.return()}finally{if(a)throw i}}})}}};t.default=s}},[[410,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/test/test.js.map