(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/mine/vip/vip"],{542:
/*!*************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/main.js?{"page":"pages%2Fmine%2Fvip%2Fvip"} ***!
  \*************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(e){n(/*! uni-pages */4),n(/*! @dcloudio/uni-stat */5);t(n(/*! vue */2));function t(e){return e&&e.__esModule?e:{default:e}}e(t(n(/*! ./pages/mine/vip/vip.vue */543)).default)}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).createPage)},543:
/*!****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/pages/mine/vip/vip.vue ***!
  \****************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var i=n(/*! ./vip.vue?vue&type=template&id=4c664ce0& */544),o=n(/*! ./vip.vue?vue&type=script&lang=js& */546);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n(/*! ./vip.vue?vue&type=style&index=0&lang=css& */548);var c=n(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */70),s=Object(c.default)(o.default,i.render,i.staticRenderFns,!1,null,null,null,!1,i.components,void 0);s.options.__file="C:/Users/Administrator/Desktop/wechat/kcb_all/pages/mine/vip/vip.vue",t.default=s.exports},544:
/*!***********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/pages/mine/vip/vip.vue?vue&type=template&id=4c664ce0& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,t,n){"use strict";n.r(t);var i=n(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./vip.vue?vue&type=template&id=4c664ce0& */545);n.d(t,"render",function(){return i.render}),n.d(t,"staticRenderFns",function(){return i.staticRenderFns}),n.d(t,"recyclableRender",function(){return i.recyclableRender}),n.d(t,"components",function(){return i.components})},545:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/pages/mine/vip/vip.vue?vue&type=template&id=4c664ce0& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,t,n){"use strict";n.r(t),n.d(t,"render",function(){return i}),n.d(t,"staticRenderFns",function(){return r}),n.d(t,"recyclableRender",function(){return o}),n.d(t,"components",function(){});var i=function(){var e=this.$createElement;this._self._c},o=!1,r=[];i._withStripped=!0},546:
/*!*****************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/pages/mine/vip/vip.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var i=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./vip.vue?vue&type=script&lang=js& */547),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t.default=o.a},547:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/pages/mine/vip/vip.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o,r=(i=n(/*! hydrogen-js-sdk */13))&&i.__esModule?i:{default:i};var c={data:function(){return{payStatus:!1,user:e.getStorageSync("user"),selected_price:10}},onLoad:function(){o=this},methods:{selected_this:function(e){console.log(e),o.selected_price=Number(e)},pay_off:function(){o.user.is_vip?e.showToast({title:"您已经是VIP了",icon:"none"}):"2"==e.getStorageSync("identity")||2==e.getStorageSync("identity")?e.showToast({title:"员工不能充值",icon:"none"}):(e.showLoading({title:"充值中..."}),o.payStatus=!0,o.pay().then(function(t){t?r.default.Query("_User").get(o.user.objectId).then(function(t){var n=(new Date).getTime();10==o.selected_price?(t.set("vip_time",n+2592e6),t.set("vip_shouldtime",n+2592e6),o.user.vip_time=n+2592e6):25==o.selected_price?(t.set("vip_time",n+7776e6),t.set("vip_shouldtime",n+7776e6),o.user.vip_time=n+7776e6):100==o.selected_price&&(t.set("vip_time",n+31104e6),t.set("vip_shouldtime",n+31104e6),o.user.vip_time=n+31104e6),t.set("is_vip",!0),t.save(),o.user.is_vip=!0,e.setStorageSync("user",o.user)}).catch(function(e){console.log(e)}):e.showToast({title:"充值失败",icon:"none"});o.payStatus=!1,e.hideLoading()}))},pay:function(){return new Promise(function(t,n){var i=e.getStorageSync("openid");r.default.Pay.weApp(o.selected_price,"库存表-会员充值","库存表-会员充值",i).then(function(e){console.log(e);var n=e.timestamp,i=e.noncestr,o=e.package,r=e.out_trade_no,c=e.sign;console.log(r),wx.requestPayment({timeStamp:n,nonceStr:i,package:o,signType:"MD5",paySign:c,success:function(e){t(!0,e)},fail:function(e){console.log("付款失败"),console.log(e),t(!1,e)}})},function(e){console.log("服务端返回失败"),console.log(e),t(!1,e)})})}}};t.default=c}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},548:
/*!*************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/pages/mine/vip/vip.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var i=n(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./vip.vue?vue&type=style&index=0&lang=css& */549),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t.default=o.a},549:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/pages/mine/vip/vip.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){}},[[542,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/mine/vip/vip.js.map