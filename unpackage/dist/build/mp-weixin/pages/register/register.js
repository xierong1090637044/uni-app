(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"12ca":function(e,t,n){"use strict";var o,c=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",function(){return c}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return o})},"1a0b":function(e,t,n){"use strict";(function(e){n("d510"),n("921b");o(n("66fd"));var t=o(n("ccae"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"535a":function(e,t,n){},"9e21":function(e,t,n){"use strict";var o=n("535a"),c=n.n(o);c.a},ccae:function(e,t,n){"use strict";n.r(t);var o=n("12ca"),c=n("e94e");for(var a in c)"default"!==a&&function(e){n.d(t,e,function(){return c[e]})}(a);n("9e21");var i,s=n("f0c5"),r=Object(s["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);t["default"]=r.exports},cf11:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,c=a(n("9546"));function a(e){return e&&e.__esModule?e:{default:e}}var i="",s={data:function(){return{showAgree:!0,code_text:"验证码",code_button_state:!1}},onLoad:function(){o=this},methods:{addMoRenStock:function(e){var t=c.default.Pointer("_User"),n=t.set(e),o=c.default.Query("stocks");o.set("stock_name","默认仓库"),o.set("disabled",!1),o.set("parent",n),o.set("Ncharge",n),o.save().then(function(e){}).catch(function(e){console.log(e)})},get_userInfo:function(t){console.log(t),0==this.showAgree?e.showToast({title:"请勾选用户协议",icon:"none"}):wx.Bmob.User.decryption(t).then(function(t){console.log(t);var n=t.phoneNumber,a=((new Date).getTime(),{username:String(n),password:String(n),mobilePhoneNumber:String(n),nickName:String(n),avatarUrl:"https://bmob-cdn-23134.bmobcloud.com/2019/07/09/575f6d96402ae0588042d73e90f2ed79.png"});c.default.User.register(a).then(function(t){console.log(t),e.showToast({title:"注册成功"}),c.default.User.login(String(n),String(n)).then(function(t){e.setStorageSync("user",t),e.setStorageSync("masterId",t.objectId),e.setStorageSync("identity",1),e.setStorageSync("uid",t.objectId),e.switchTab({url:"/pages/tarBar/index"}),o.addMoRenStock(t.objectId)}).catch(function(e){console.log(e)})}).catch(function(t){console.log(t),e.showToast({icon:"none",title:"该手机号已注册"})})})},isShowAgree:function(){this.showAgree=!this.showAgree},get_InputPhone:function(e){i=e.detail.value},get_smscode:function(){if(i.length<11)e.showToast({title:"请输入正确的手机号",icon:"none"});else{var t={mobilePhoneNumber:i,template:"积木舟"};c.default.requestSmsCode(t).then(function(t){e.showToast({title:"发送成功"}),o.code_button_state=!0,o.code_text=60;var n=setInterval(function(){o.code_text=o.code_text-1,0==o.code_text&&(clearInterval(n),o.code_button_state=!1,o.code_text="验证码")},1e3)}).catch(function(e){wx.showToast({title:"发送失败",icon:"none"})})}},formSubmit:function(t){var n=Number(t.detail.value.phone);Number(t.detail.value.sms_code);if(t.detail.value.phone.length<11)e.showToast({title:"手机格式错误",icon:"none"});else if(0==this.showAgree)e.showToast({title:"请勾选用户协议",icon:"none"});else if(t.detail.value.sms_code<6)e.showToast({title:"验证码格式错误",icon:"none"});else{(new Date).getTime();var a={username:String(n),password:String(n),mobilePhoneNumber:String(n),nickName:String(n),avatarUrl:"https://bmob-cdn-23134.bmobcloud.com/2019/07/09/575f6d96402ae0588042d73e90f2ed79.png"};c.default.User.register(a).then(function(t){console.log(t),e.showToast({title:"注册成功"}),c.default.User.login(String(n),String(n)).then(function(t){e.setStorageSync("user",t),e.setStorageSync("masterId",t.objectId),e.setStorageSync("identity",1),e.setStorageSync("uid",t.objectId),e.switchTab({url:"/pages/tarBar/index"}),o.addMoRenStock(t.objectId)}).catch(function(e){console.log(e)})}).catch(function(t){e.showToast({icon:"none",title:"该手机号已注册"}),console.log(t)})}}}};t.default=s}).call(this,n("543d")["default"])},e94e:function(e,t,n){"use strict";n.r(t);var o=n("cf11"),c=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=c.a}},[["1a0b","common/runtime","common/vendor"]]]);