(global.webpackJsonp=global.webpackJsonp||[]).push([["components/goodDetBottom"],{1277:
/*!**********************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/components/goodDetBottom.vue ***!
  \**********************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var o=n(/*! ./goodDetBottom.vue?vue&type=template&id=4abdf22e& */1278),r=n(/*! ./goodDetBottom.vue?vue&type=script&lang=js& */1280);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);n(/*! ./goodDetBottom.vue?vue&type=style&index=0&lang=css& */1282);var u=n(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */70),d=Object(u.default)(r.default,o.render,o.staticRenderFns,!1,null,null,null,!1,o.components,void 0);d.options.__file="C:/Users/Administrator/Desktop/wechat/kcb_all/components/goodDetBottom.vue",e.default=d.exports},1278:
/*!*****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/components/goodDetBottom.vue?vue&type=template&id=4abdf22e& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,e,n){"use strict";n.r(e);var o=n(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goodDetBottom.vue?vue&type=template&id=4abdf22e& */1279);n.d(e,"render",function(){return o.render}),n.d(e,"staticRenderFns",function(){return o.staticRenderFns}),n.d(e,"recyclableRender",function(){return o.recyclableRender}),n.d(e,"components",function(){return o.components})},1279:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/components/goodDetBottom.vue?vue&type=template&id=4abdf22e& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,e,n){"use strict";n.r(e),n.d(e,"render",function(){return o}),n.d(e,"staticRenderFns",function(){return c}),n.d(e,"recyclableRender",function(){return r}),n.d(e,"components",function(){});var o=function(){var t=this.$createElement;this._self._c},r=!1,c=[];o._withStripped=!0},1280:
/*!***********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/components/goodDetBottom.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var o=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goodDetBottom.vue?vue&type=script&lang=js& */1281),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},1281:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/components/goodDetBottom.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,r=u(n(/*! hydrogen-js-sdk */13)),c=(u(n(/*! @/utils/common.js */77)),u(n(/*! @/utils/print.js */87)));function u(t){return t&&t.__esModule?t:{default:t}}var d={props:{product:{type:Object,default:{}}},data:function(){return{}},mounted:function(){o=this},methods:{addBadGoodRecord:function(){t.showToast({icon:"none",title:"正在完善中"})},modify:function(){t.navigateTo({url:"../good_add/good_add?type=more"})},moreActions:function(){t.showActionSheet({itemList:["产品操作记录","关联新店仓","删除","打印"],success:function(e){var n=e.tapIndex+1;1==n?t.navigateTo({url:"../operations/operations?objectId="+o.product.objectId+"&goodsName="+o.product.goodsName}):2==n?(t.navigateTo({url:"/pages/manage/warehouse/warehouse?type=choose"}),o.$emit("isChooseStock")):3==n?o.delete_good(o.product.objectId):4==n&&c.default.print_goodDet(o.product)}})},delete_good:function(e){var n=t.getStorageSync("uid");t.showModal({title:"提示",content:"是否删除该商品",success:function(o){o.confirm&&(t.setStorageSync("is_add",!0),r.default.Query("Goods").destroy(e).then(function(o){var c=r.default.Query("Goods");c.equalTo("header","==",e),c.equalTo("userId","==",n),c.find().then(function(e){e.destroyAll().then(function(e){console.log(e,"ok"),t.navigateBack({delta:1}),setTimeout(function(){t.showToast({title:"删除成功"})},1e3)}).catch(function(t){console.log(t)})})}).catch(function(t){console.log(t)}))}})}}};e.default=d}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},1282:
/*!*******************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/components/goodDetBottom.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var o=n(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goodDetBottom.vue?vue&type=style&index=0&lang=css& */1283),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e.default=r.a},1283:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/components/goodDetBottom.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){}}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/goodDetBottom.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/goodDetBottom-create-component',
    {
        'components/goodDetBottom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(1277))
        })
    },
    [['components/goodDetBottom-create-component']]
]);
