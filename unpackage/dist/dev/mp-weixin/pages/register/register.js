(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/register/register"],{130:
/*!****************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/main.js?{"page":"pages%2Fregister%2Fregister"} ***!
  \****************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(e){n(/*! uni-pages */4),n(/*! @dcloudio/uni-stat */5);t(n(/*! vue */2));function t(e){return e&&e.__esModule?e:{default:e}}e(t(n(/*! ./pages/register/register.vue */131)).default)}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).createPage)},131:
/*!*********************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/pages/register/register.vue ***!
  \*********************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var o=n(/*! ./register.vue?vue&type=template&id=f0225224& */132),r=n(/*! ./register.vue?vue&type=script&lang=js& */134);for(var c in r)"default"!==c&&function(e){n.d(t,e,function(){return r[e]})}(c);n(/*! ./register.vue?vue&type=style&index=0&lang=scss& */136);var i=n(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */70),s=Object(i.default)(r.default,o.render,o.staticRenderFns,!1,null,null,null,!1,o.components,void 0);s.options.__file="C:/Users/Administrator/Desktop/wechat/kcb_all/pages/register/register.vue",t.default=s.exports},132:
/*!****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/pages/register/register.vue?vue&type=template&id=f0225224& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,t,n){"use strict";n.r(t);var o=n(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./register.vue?vue&type=template&id=f0225224& */133);n.d(t,"render",function(){return o.render}),n.d(t,"staticRenderFns",function(){return o.staticRenderFns}),n.d(t,"recyclableRender",function(){return o.recyclableRender}),n.d(t,"components",function(){return o.components})},133:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/pages/register/register.vue?vue&type=template&id=f0225224& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,t,n){"use strict";n.r(t),n.d(t,"render",function(){return o}),n.d(t,"staticRenderFns",function(){return c}),n.d(t,"recyclableRender",function(){return r}),n.d(t,"components",function(){});var o=function(){var e=this.$createElement;this._self._c},r=!1,c=[];o._withStripped=!0},134:
/*!**********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/pages/register/register.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var o=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./register.vue?vue&type=script&lang=js& */135),r=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t.default=r.a},135:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/pages/register/register.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r,c=(o=n(/*! hydrogen-js-sdk */13))&&o.__esModule?o:{default:o};var i="",s={data:function(){return{showAgree:!0,code_text:"验证码",code_button_state:!1}},onLoad:function(){r=this},methods:{addMoRenStock:function(e){var t=c.default.Pointer("_User").set(e),n=c.default.Query("stocks");n.set("stock_name","默认店仓"),n.set("disabled",!1),n.set("parent",t),n.set("Ncharge",t),n.save().then(function(e){}).catch(function(e){console.log(e)})},get_userInfo:function(t){console.log(t),0==this.showAgree?e.showToast({title:"请勾选用户协议",icon:"none"}):wx.Bmob.User.decryption(t).then(function(t){console.log(t);var n=t.phoneNumber,o=((new Date).getTime(),{username:String(n),password:String(n),mobilePhoneNumber:String(n),nickName:String(n),avatarUrl:"https://bmob-cdn-23134.bmobcloud.com/2019/07/09/575f6d96402ae0588042d73e90f2ed79.png"});c.default.User.register(o).then(function(t){console.log(t),e.showToast({title:"注册成功"}),c.default.User.login(String(n),String(n)).then(function(t){e.setStorageSync("user",t),e.setStorageSync("masterId",t.objectId),e.setStorageSync("identity",1),e.setStorageSync("uid",t.objectId),e.switchTab({url:"/pages/tarBar/index"}),r.addMoRenStock(t.objectId)}).catch(function(e){console.log(e)})}).catch(function(t){console.log(t),e.showToast({icon:"none",title:"该手机号已注册"})})})},isShowAgree:function(){this.showAgree=!this.showAgree},get_InputPhone:function(e){i=e.detail.value},get_smscode:function(){if(i.length<11)e.showToast({title:"请输入正确的手机号",icon:"none"});else{var t={mobilePhoneNumber:i,template:"积木舟"};c.default.requestSmsCode(t).then(function(t){e.showToast({title:"发送成功"}),r.code_button_state=!0,r.code_text=60;var n=setInterval(function(){r.code_text=r.code_text-1,0==r.code_text&&(clearInterval(n),r.code_button_state=!1,r.code_text="验证码")},1e3)}).catch(function(e){wx.showToast({title:"发送失败",icon:"none"})})}},formSubmit:function(t){var n=Number(t.detail.value.phone);Number(t.detail.value.sms_code);if(t.detail.value.phone.length<11)e.showToast({title:"手机格式错误",icon:"none"});else if(0==this.showAgree)e.showToast({title:"请勾选用户协议",icon:"none"});else if(t.detail.value.sms_code<6)e.showToast({title:"验证码格式错误",icon:"none"});else{(new Date).getTime();var o={username:String(n),password:String(n),mobilePhoneNumber:String(n),nickName:String(n),avatarUrl:"https://bmob-cdn-23134.bmobcloud.com/2019/07/09/575f6d96402ae0588042d73e90f2ed79.png"};c.default.User.register(o).then(function(t){console.log(t),e.showToast({title:"注册成功"}),c.default.User.login(String(n),String(n)).then(function(t){e.setStorageSync("user",t),e.setStorageSync("masterId",t.objectId),e.setStorageSync("identity",1),e.setStorageSync("uid",t.objectId),e.switchTab({url:"/pages/tarBar/index"}),r.addMoRenStock(t.objectId)}).catch(function(e){console.log(e)})}).catch(function(t){e.showToast({icon:"none",title:"该手机号已注册"}),console.log(t)})}}}};t.default=s}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},136:
/*!*******************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/pages/register/register.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */function(e,t,n){"use strict";n.r(t);var o=n(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./register.vue?vue&type=style&index=0&lang=scss& */137),r=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t.default=r.a},137:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/pages/register/register.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){}},[[130,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/register/register.js.map