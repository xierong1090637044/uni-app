(global.webpackJsonp=global.webpackJsonp||[]).push([["common/main"],{0:
/*!***********************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/main.js ***!
  \***********************************************************************/
/*! no static exports found */function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t(/*! uni-pages */4),t(/*! @dcloudio/uni-stat */5);var o=c(t(/*! vue */2)),a=c(t(/*! vue-i18n */9)),u=c(t(/*! ./App */10)),i=c(t(/*! hydrogen-js-sdk */13));function c(e){return e&&e.__esModule?e:{default:e}}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var l=function(){return t.e(/*! import() | components/kilvn-fa-icon/fa-icon */"components/kilvn-fa-icon/fa-icon").then(t.bind(null,/*! @/components/kilvn-fa-icon/fa-icon.vue */593))},f=function(){return t.e(/*! import() | components/Loading/index */"components/Loading/index").then(t.bind(null,/*! @/components/Loading/index.vue */600))},d=function(){return t.e(/*! import() | components/No_content */"components/No_content").then(t.bind(null,/*! @/components/No_content.vue */607))};i.default.initialize("825b954fe97e9186","109063","47f76baf4ee4d90630d7b2bc17f7505c"),o.default.config.productionTip=!1,u.default.mpType="app",o.default.use(a.default);var s=new a.default({locale:"zh-CN",messages:{"en-US":{operational_status:{1:"Invite",2:"Game"}},"zh-CN":{operational_status:{a:"库存成本：",b:"游戏"}}}});o.default.prototype._i18n=s,o.default.prototype.Bmob=i.default,o.default.component("loading",f),o.default.component("faIcon",l),o.default.component("nocontent",d);var p=new o.default(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){r(e,n,t[n])})}return e}({i18n:s,Bmob:i.default},u.default)),v={components:{faIcon:l,nocontent:d,loading:f}};n.default=v,e(p).$mount()}).call(this,t(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).createApp)},10:
/*!***********************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/App.vue ***!
  \***********************************************************************/
/*! no static exports found */function(e,n,t){"use strict";t.r(n);var o=t(/*! ./App.vue?vue&type=script&lang=js& */11);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);t(/*! ./App.vue?vue&type=style&index=0&lang=scss& */67);var u=t(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */69),i=Object(u.default)(o.default,void 0,void 0,!1,null,null,null);i.options.__file="C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/App.vue",n.default=i.exports},11:
/*!************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */function(e,n,t){"use strict";t.r(n);var o=t(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */12),a=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);n.default=a.a},12:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o,a=(o=t(/*! hydrogen-js-sdk */13))&&o.__esModule?o:{default:o};var u={onLaunch:function(){var n=e.getUpdateManager();n.onCheckForUpdate(function(e){console.log(e.hasUpdate)}),n.onUpdateReady(function(t){e.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(e){e.confirm&&n.applyUpdate()}})}),a.default.User.auth().then(function(e){}).catch(function(e){console.log(e)}),e.getStorage({key:"user",success:function(n){var t=n.data,o=e.getStorageSync("identity"),u=(new Date).getTime();(console.log(t),t.vip_time<=u)&&(1==o?a.default.Query("_User").get(t.objectId).then(function(n){n.set("is_vip",!1),n.set("vip_time",0),n.save(),t.is_vip=!1,t.vip_time=0,e.setStorageSync("user",t)}).catch(function(e){}):(t.is_vip=!1,t.vip_time=0,e.setStorageSync("user",t)))},fail:function(){e.reLaunch({url:"/pages/landing/landing"})}})},onShow:function(){},onHide:function(){}};n.default=u}).call(this,t(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},67:
/*!*********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */function(e,n,t){"use strict";t.r(n);var o=t(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=scss& */68),a=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);n.default=a.a},68:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/App.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,n,t){}},[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map