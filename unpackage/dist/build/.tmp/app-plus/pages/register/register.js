(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"77b7":function(e,t,n){},"7d43":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},"8a5d":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=r(n("e21e"));function r(e){return e&&e.__esModule?e:{default:e}}var a="",s={data:function(){return{showAgree:!0,code_text:"验证码",code_button_state:!1}},onLoad:function(){o=this},methods:{isShowAgree:function(){this.showAgree=!this.showAgree},get_InputPhone:function(e){a=e.detail.value},get_smscode:function(){if(a.length<11)e.showToast({title:"请输入正确的手机号",icon:"none"});else{var t={mobilePhoneNumber:a,template:"积木舟"};i.default.requestSmsCode(t).then(function(t){e.showToast({title:"发送成功"}),o.code_button_state=!0,o.code_text=60;var n=setInterval(function(){o.code_text=o.code_text-1,0==o.code_text&&(clearInterval(n),o.code_button_state=!1,o.code_text="验证码")},1e3)}).catch(function(e){wx.showToast({title:"发送失败",icon:"none"})})}},formSubmit:function(t){var n=Number(t.detail.value.phone);Number(t.detail.value.sms_code);if(t.detail.value.phone.length<11)e.showToast({title:"手机格式错误",icon:"none"});else if(0==this.showAgree)e.showToast({title:"请勾选用户协议",icon:"none"});else if(t.detail.value.sms_code<6)e.showToast({title:"验证码格式错误",icon:"none"});else{var o={username:String(n),password:String(n),mobilePhoneNumber:String(n),nickName:String(n),avatarUrl:"https://bmob-cdn-23134.bmobcloud.com/2019/07/09/575f6d96402ae0588042d73e90f2ed79.png"};i.default.User.register(o).then(function(t){console.log(t," at pages\\register\\register.vue:137"),e.showToast({title:"注册成功"}),i.default.User.login(String(n),String(n)).then(function(t){e.setStorageSync("user",t),e.setStorageSync("masterId",t.objectId),e.setStorageSync("identity",1),e.setStorageSync("uid",t.objectId),e.switchTab({url:"/pages/index/index"})}).catch(function(e){console.log(e," at pages\\register\\register.vue:150")})}).catch(function(e){console.log(e," at pages\\register\\register.vue:153")})}}}};t.default=s}).call(this,n("6e42")["default"])},bc56:function(e,t,n){"use strict";var o=n("77b7"),i=n.n(o);i.a},be66:function(e,t,n){"use strict";n.r(t);var o=n("8a5d"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=i.a},e05e:function(e,t,n){"use strict";n.r(t);var o=n("7d43"),i=n("be66");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("bc56");var a=n("2877"),s=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports}},[["f3c3","common/runtime","common/vendor"]]]);