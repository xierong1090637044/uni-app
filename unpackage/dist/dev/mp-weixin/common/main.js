(global.webpackJsonp=global.webpackJsonp||[]).push([["common/main"],{0:
/*!***************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/main.js ***!
  \***************************************************************/
/*! no static exports found */function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t(/*! uni-pages */4),t(/*! @dcloudio/uni-stat */5);var o=c(t(/*! vue */2)),u=c(t(/*! vue-i18n */9)),a=c(t(/*! ./App */10)),i=c(t(/*! hydrogen-js-sdk */13));function c(n){return n&&n.__esModule?n:{default:n}}function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var l=function(){return t.e(/*! import() | components/kilvn-fa-icon/fa-icon */"components/kilvn-fa-icon/fa-icon").then(t.bind(null,/*! @/components/kilvn-fa-icon/fa-icon.vue */595))},f=function(){return t.e(/*! import() | components/Loading/index */"components/Loading/index").then(t.bind(null,/*! @/components/Loading/index.vue */602))},d=function(){return t.e(/*! import() | components/No_content */"components/No_content").then(t.bind(null,/*! @/components/No_content.vue */609))},s=function(){return t.e(/*! import() | components/uni-icon/uni-icon */"components/uni-icon/uni-icon").then(t.bind(null,/*! @/components/uni-icon/uni-icon.vue */614))};i.default.initialize("825b954fe97e9186","109063","47f76baf4ee4d90630d7b2bc17f7505c"),o.default.config.productionTip=!1,a.default.mpType="app",o.default.use(u.default);var p=new u.default({locale:"zh-CN",messages:{"en-US":{operational_status:{1:"Invite",2:"Game"}},"zh-CN":{operational_status:{a:"库存成本：",b:"游戏"}}}});o.default.prototype._i18n=p,o.default.prototype.Bmob=i.default,o.default.component("loading",f),o.default.component("faIcon",l),o.default.component("uniIcon",s),o.default.component("nocontent",d);var v=new o.default(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){r(n,e,t[e])})}return n}({i18n:p,Bmob:i.default},a.default)),m={components:{faIcon:l,nocontent:d,uniIcon:s,loading:f}};e.default=m,n(v).$mount()}).call(this,t(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).createApp)},10:
/*!***************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/App.vue ***!
  \***************************************************************/
/*! no static exports found */function(n,e,t){"use strict";t.r(e);var o=t(/*! ./App.vue?vue&type=script&lang=js& */11);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t(/*! ./App.vue?vue&type=style&index=0&lang=scss& */67);var a=t(/*! ../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */69),i=Object(a.default)(o.default,void 0,void 0,!1,null,null,null);i.options.__file="Desktop/新建文件夹 (8)/wechat/App.vue",e.default=i.exports},11:
/*!****************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */function(n,e,t){"use strict";t.r(e);var o=t(/*! -!../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */12),u=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);e.default=u.a},12:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,u=(o=t(/*! hydrogen-js-sdk */13))&&o.__esModule?o:{default:o};var a={onLaunch:function(){var e=n.getUpdateManager();e.onCheckForUpdate(function(n){console.log(n.hasUpdate)}),e.onUpdateReady(function(t){n.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(n){n.confirm&&e.applyUpdate()}})}),u.default.User.auth().then(function(n){}).catch(function(n){console.log(n)}),n.getStorage({key:"user",success:function(e){var t=e.data,o=n.getStorageSync("identity"),a=(new Date).getTime();(console.log(t),t.vip_time<=a)&&(1==o?u.default.Query("_User").get(t.objectId).then(function(e){e.set("is_vip",!1),e.set("vip_time",0),e.save(),t.is_vip=!1,t.vip_time=0,n.setStorageSync("user",t)}).catch(function(n){}):(t.is_vip=!1,t.vip_time=0,n.setStorageSync("user",t)))},fail:function(){n.reLaunch({url:"/pages/landing/landing"})}})},onShow:function(){},onHide:function(){}};e.default=a}).call(this,t(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},67:
/*!*************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */function(n,e,t){"use strict";t.r(e);var o=t(/*! -!../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=scss& */68),u=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);e.default=u.a},68:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/App.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(n,e,t){}},[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map