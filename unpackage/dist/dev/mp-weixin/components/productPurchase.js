(global.webpackJsonp=global.webpackJsonp||[]).push([["components/productPurchase"],{1263:
/*!************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/components/productPurchase.vue ***!
  \************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./productPurchase.vue?vue&type=template&id=549c66c6& */1264),o=n(/*! ./productPurchase.vue?vue&type=script&lang=js& */1266);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n(/*! ./productPurchase.vue?vue&type=style&index=0&lang=scss& */1268);var u=n(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */70),c=Object(u.default)(o.default,r.render,r.staticRenderFns,!1,null,null,null,!1,r.components,void 0);c.options.__file="C:/Users/Administrator/Desktop/wechat/kcb_all/components/productPurchase.vue",t.default=c.exports},1264:
/*!*******************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/components/productPurchase.vue?vue&type=template&id=549c66c6& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,t,n){"use strict";n.r(t);var r=n(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./productPurchase.vue?vue&type=template&id=549c66c6& */1265);n.d(t,"render",function(){return r.render}),n.d(t,"staticRenderFns",function(){return r.staticRenderFns}),n.d(t,"recyclableRender",function(){return r.recyclableRender}),n.d(t,"components",function(){return r.components})},1265:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/components/productPurchase.vue?vue&type=template&id=549c66c6& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,t,n){"use strict";n.r(t),n.d(t,"render",function(){return r}),n.d(t,"staticRenderFns",function(){return a}),n.d(t,"recyclableRender",function(){return o}),n.d(t,"components",function(){});var r=function(){var e=this.$createElement;this._self._c},o=!1,a=[];r._withStripped=!0},1266:
/*!*************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/components/productPurchase.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var r=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./productPurchase.vue?vue&type=script&lang=js& */1267),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t.default=o.a},1267:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/components/productPurchase.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(/*! hydrogen-js-sdk */13)),o=a(n(/*! @/utils/common.js */77));function a(e){return e&&e.__esModule?e:{default:e}}var u,c={components:{zTable:function(){return Promise.all(/*! import() | components/z-table/z-table */[n.e("common/vendor"),n.e("components/z-table/z-table")]).then(n.bind(null,/*! @/components/z-table/z-table.vue */1313))},uniCalendar:function(){return Promise.all(/*! import() | components/uni-calendar/uni-calendar */[n.e("common/vendor"),n.e("components/uni-calendar/uni-calendar")]).then(n.bind(null,/*! @/components/uni-calendar/uni-calendar.vue */1304))}},props:{productId:{type:String,default:{}},stock:{type:Object,default:{}}},data:function(){return{start_date:o.default.getDay(0,!1),end_date:o.default.getDay(1,!1),info:{date:o.default.getDay(0,!0).split(" ")[0],lunar:!0,range:!0,insert:!1,selected:[]},purcharseList:[],purcharseList1:[],purcharseNotice:{num:0,money:0},alignColumns:[{title:"供应商",key:"name",width:"300"},{title:"实际进货数",key:"num",width:"200"},{title:"实际进货金额",key:"really_total_money",width:"200"}],alignColumns1:[{title:"操作人",key:"nickName",width:"300"},{title:"实际进货数",key:"num",width:"200"},{title:"实际进货金额",key:"really_total_money",width:"200"}]}},watch:{stock:function(e,t){e.objectId!=t.objectId&&this.getdetail()}},mounted:function(){(u=this).getdetail()},methods:{open:function(){u.$refs.calendar.open()},confirm:function(e){console.log(e),0==e.range.data.length?u.start_date=e.fulldate:(u.start_date=e.range.data[0],u.end_date=e.range.data[e.range.data.length-1]),u.getdetail()},getdetail:function(){e.removeStorageSync("productPurchase"),u.purcharseNotice.num=0,u.purcharseNotice.money=0,u.purcharseList1=[],u.purcharseList=[];var t=r.default.Query("Bills");t.equalTo("userId","==",e.getStorageSync("uid")),t.equalTo("type","==",1),t.equalTo("extra_type","==",1),t.equalTo("createdAt",">=",u.start_date+" 00:00:00"),t.equalTo("createdAt","<=",u.end_date+" 23:59:59"),t.equalTo("goodsId","==",u.productId),u.stock&&u.stock.objectId&&t.equalTo("stock","==",u.stock.objectId),t.count().then(function(n){var r=n,o=[];if(0!=r)for(var a=0;a<Math.ceil(r/500);a++)u.stock&&u.stock.objectId&&t.equalTo("stock","==",u.stock.objectId),t.include("producer","opreater"),t.limit(500),t.skip(500*a),t.find().then(function(t){var n=!0,r=!1,a=void 0;try{for(var c,d=t[Symbol.iterator]();!(n=(c=d.next()).done);n=!0){var i=c.value;i.producer&&i.producer.objectId&&(u.purcharseNotice.num+=i.num,u.purcharseNotice.money+=i.really_total_money,i.name=i.producer.producer_name,i.nickName=i.opreater.nickName,o.push(i))}}catch(e){r=!0,a=e}finally{try{n||null==d.return||d.return()}finally{if(r)throw a}}e.setStorageSync("productPurchase",o),u.purcharseList=e.getStorageSync("productPurchase").reduce(function(e,t){var n=e.find(function(e){return e.producer.objectId===t.producer.objectId});return n?(n.num+=t.num,n.really_total_money+=t.really_total_money):e.push(t),e},[]),u.purcharseList1=e.getStorageSync("productPurchase").reduce(function(e,t){var n=e.find(function(e){return e.opreater.objectId===t.opreater.objectId});return n?(n.num+=t.num,n.really_total_money+=t.really_total_money):e.push(t),e},[])})})}}};t.default=c}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},1268:
/*!**********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/components/productPurchase.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var r=n(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./productPurchase.vue?vue&type=style&index=0&lang=scss& */1269),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t.default=o.a},1269:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/components/productPurchase.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){}}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/productPurchase.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/productPurchase-create-component',
    {
        'components/productPurchase-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(1263))
        })
    },
    [['components/productPurchase-create-component']]
]);
