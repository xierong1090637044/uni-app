(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/report/report"],{371:
/*!**********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/main.js?{"page":"pages%2Freport%2Freport"} ***!
  \**********************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){n(/*! uni-pages */4),n(/*! @dcloudio/uni-stat */5);e(n(/*! vue */2));function e(t){return t&&t.__esModule?t:{default:t}}t(e(n(/*! ./pages/report/report.vue */372)).default)}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).createPage)},372:
/*!***************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/pages/report/report.vue ***!
  \***************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var r=n(/*! ./report.vue?vue&type=template&id=18347f22& */373),o=n(/*! ./report.vue?vue&type=script&lang=js& */375);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n(/*! ./report.vue?vue&type=style&index=0&lang=css& */377);var s=n(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */69),a=Object(s.default)(o.default,r.render,r.staticRenderFns,!1,null,null,null);a.options.__file="C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/pages/report/report.vue",e.default=a.exports},373:
/*!**********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/pages/report/report.vue?vue&type=template&id=18347f22& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e);var r=n(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./report.vue?vue&type=template&id=18347f22& */374);n.d(e,"render",function(){return r.render}),n.d(e,"staticRenderFns",function(){return r.staticRenderFns})},374:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/pages/report/report.vue?vue&type=template&id=18347f22& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e),n.d(e,"render",function(){return r}),n.d(e,"staticRenderFns",function(){return o});var r=function(){var t=this.$createElement;this._self._c},o=[];r._withStripped=!0},375:
/*!****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/pages/report/report.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var r=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./report.vue?vue&type=script&lang=js& */376),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e.default=o.a},376:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/pages/report/report.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;o(n(/*! hydrogen-js-sdk */13));var r=o(n(/*! @/utils/staffs.js */280));function o(t){return t&&t.__esModule?t:{default:t}}var i,s={components:{faIcon:function(){return n.e(/*! import() | components/kilvn-fa-icon/fa-icon */"components/kilvn-fa-icon/fa-icon").then(n.bind(null,/*! @/components/kilvn-fa-icon/fa-icon.vue */585))}},data:function(){return{now_optionsLists:[],optionsLists:[{name:"入库记录",icon:"file-o",url:"/pages/report/EnteringHistory/EnteringHistory?type=1",color:"#2ca879"},{name:"出库记录",icon:"file-o",url:"/pages/report/EnteringHistory/EnteringHistory?type=-1",color:"#f30"},{name:"调拨记录",icon:"file-o",url:"/pages/report/EnteringHistory/EnteringHistory?type=-2",color:"#4e72b8"},{name:"客户退货记录",icon:"file-o",url:"/pages/report/EnteringHistory/EnteringHistory?type=2",color:"#b3b242"},{name:"盘点记录",icon:"file-o",url:"/pages/report/EnteringHistory/EnteringHistory?type=3",color:"#b3424a"},{name:"经营状况",icon:"recycle",url:"/pages/report/operational_status/operational_status",color:"#426ab3"},{name:"报表",icon:"pie-chart",url:"/pages/report/chart/chart",color:"#0c95bc"}]}},onLoad:function(){i=this},onShow:function(){t.getStorage({key:"identity",success:function(e){var n;"2"==e.data?r.default.get_satffAuth().then(function(e){console.log(e);var r=t.getStorageSync("user");e.masterId.is_vip?(r.is_vip=!0,r.vip_time=r.masterId.vip_time):(r.is_vip=!1,r.vip_time=0),n=e?e.rights.recodecurrent:t.getStorageSync("user").rights.recodecurrent;var o=[];for(var s in n)o.push(i.optionsLists[s]);i.now_optionsLists=o,t.setStorageSync("user",r)}):"1"==e.data&&(i.now_optionsLists=i.optionsLists)}})},methods:{}};e.default=s}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},377:
/*!************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/pages/report/report.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var r=n(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./report.vue?vue&type=style&index=0&lang=css& */378),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e.default=o.a},378:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/pages/report/report.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){}},[[371,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/report/report.js.map