(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/staff_landing/staff_landing"],{228:
/*!**************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/main.js?{"page":"pages%2Fstaff_landing%2Fstaff_landing"} ***!
  \**************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){n(/*! uni-pages */4),n(/*! @dcloudio/uni-stat */5);e(n(/*! vue */2));function e(t){return t&&t.__esModule?t:{default:t}}t(e(n(/*! ./pages/staff_landing/staff_landing.vue */229)).default)}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).createPage)},229:
/*!*******************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/pages/staff_landing/staff_landing.vue ***!
  \*******************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var o=n(/*! ./staff_landing.vue?vue&type=template&id=78cb5240& */230),r=n(/*! ./staff_landing.vue?vue&type=script&lang=js& */232);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n(/*! ./staff_landing.vue?vue&type=style&index=0&lang=css& */234);var s=n(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */70),a=Object(s.default)(r.default,o.render,o.staticRenderFns,!1,null,null,null,!1,o.components,void 0);a.options.__file="C:/Users/Administrator/Desktop/wechat/kcb_all/pages/staff_landing/staff_landing.vue",e.default=a.exports},230:
/*!**************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/pages/staff_landing/staff_landing.vue?vue&type=template&id=78cb5240& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,e,n){"use strict";n.r(e);var o=n(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./staff_landing.vue?vue&type=template&id=78cb5240& */231);n.d(e,"render",function(){return o.render}),n.d(e,"staticRenderFns",function(){return o.staticRenderFns}),n.d(e,"recyclableRender",function(){return o.recyclableRender}),n.d(e,"components",function(){return o.components})},231:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/pages/staff_landing/staff_landing.vue?vue&type=template&id=78cb5240& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,e,n){"use strict";n.r(e),n.d(e,"render",function(){return o}),n.d(e,"staticRenderFns",function(){return i}),n.d(e,"recyclableRender",function(){return r}),n.d(e,"components",function(){});var o=function(){var t=this.$createElement;this._self._c},r=!1,i=[];o._withStripped=!0},232:
/*!********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/pages/staff_landing/staff_landing.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var o=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./staff_landing.vue?vue&type=script&lang=js& */233),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e.default=r.a},233:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/pages/staff_landing/staff_landing.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,r,i=(o=n(/*! hydrogen-js-sdk */13))&&o.__esModule?o:{default:o};var s={data:function(){return{phone:"",password:""}},onLoad:function(){r=this},methods:{staff_login:function(){console.log(r.phone),console.log(r.password),r.phone.length<1||r.password.length<1?t.showToast({title:"请填写完整",icon:"none"}):(t.showLoading({title:"登录中..."}),i.default.User.login(r.phone,r.password).then(function(e){if(console.log(e),e.masterId&&e.masterId.objectId||2==e.identity){var n=e,o=e.masterId;t.hideLoading(),o.is_vip?(n.is_vip=!0,n.vip_time=o.vip_time):(n.is_vip=!1,n.vip_time=0),t.setStorageSync("user",n),t.setStorageSync("identity",2),t.setStorageSync("masterId",e.objectId),t.setStorageSync("uid",o.objectId)}else t.setStorageSync("user",e),t.setStorageSync("masterId",e.objectId),t.setStorageSync("identity",1),t.setStorageSync("uid",e.objectId);t.switchTab({url:"/pages/tarBar/index"})}).catch(function(e){console.log(e),101==e.code&&t.showToast({title:"账号密码不正确",icon:"none"})}))}}};e.default=s}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},234:
/*!****************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/pages/staff_landing/staff_landing.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var o=n(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./staff_landing.vue?vue&type=style&index=0&lang=css& */235),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e.default=r.a},235:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/pages/staff_landing/staff_landing.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){}},[[228,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/staff_landing/staff_landing.js.map