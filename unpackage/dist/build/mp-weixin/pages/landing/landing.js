(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/landing/landing"],{"08e9":function(e,t,n){"use strict";var o,a=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return o})},"5b3e":function(e,t,n){"use strict";n.r(t);var o=n("08e9"),a=n("f013");for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);n("8e1e");var i,s=n("f0c5"),u=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);t["default"]=u.exports},"8ac2":function(e,t,n){},"8dbf":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=c(n("9546"));function c(e){return e&&e.__esModule?e:{default:e}}var i="",s={data:function(){return{code_text:"验证码",code_button_state:!1}},onLoad:function(){o=this},methods:{get_InputPhone:function(e){i=e.detail.value},loginTiYan:function(){e.showLoading({title:"登录中..."}),a.default.User.login("test","test").then(function(t){console.log(t),e.setStorageSync("user",t),e.setStorageSync("masterId",t.objectId),e.setStorageSync("identity",1),e.setStorageSync("uid",t.objectId),e.switchTab({url:"/pages/tarBar/index"})}).catch(function(t){console.log(t),101==t.code&&e.showToast({title:"账号密码不正确",icon:"none"})})},get_smscode:function(){if(i.length<11)e.showToast({title:"请输入正确的手机号",icon:"none"});else{var t={mobilePhoneNumber:i,template:"积木舟"};a.default.requestSmsCode(t).then(function(t){e.showToast({title:"发送成功"}),o.code_button_state=!0,o.code_text=60;var n=setInterval(function(){o.code_text=o.code_text-1,0==o.code_text&&(clearInterval(n),o.code_button_state=!1,o.code_text="验证码")},1e3)}).catch(function(e){wx.showToast({title:"发送失败",icon:"none"})})}},formSubmit:function(t){console.log(t);var n=t.detail.value.phone,o=t.detail.value.sms_code;if(t.detail.value.phone.length<11)e.showToast({title:"手机格式错误",icon:"none"});else if(t.detail.value.sms_code<6)e.showToast({title:"验证码格式错误",icon:"none"});else{var c=o,i={mobilePhoneNumber:n};a.default.verifySmsCode(c,i).then(function(t){console.log(t);var o=a.default.Query("_User");o.equalTo("mobilePhoneNumber","==",n),o.find().then(function(t){if(console.log(t),t[0].masterId&&t[0].masterId.objectId||2==t[0].identity){var n=t[0],o=t[0].masterId;e.hideLoading(),o.is_vip?(n.is_vip=!0,n.vip_time=o.vip_time):(n.is_vip=!1,n.vip_time=0),e.setStorageSync("user",n),e.setStorageSync("identity",2),e.setStorageSync("masterId",t[0].objectId),e.setStorageSync("uid",o[0].objectId)}else e.setStorageSync("user",t[0]),e.setStorageSync("masterId",t[0].objectId),e.setStorageSync("identity",1),e.setStorageSync("uid",t[0].objectId),e.switchTab({url:"/pages/tarBar/index"}),t[0].pwd?a.default.User.login(t[0].username,t[0].pwd).then(function(e){console.log(e)}).catch(function(e){console.log(e)}):a.default.User.login(t[0].username,t[0].username).then(function(e){console.log(e)}).catch(function(e){console.log(e)})})}).catch(function(t){e.showToast({title:"验证码或手机号错误",icon:"none"})})}}}};t.default=s}).call(this,n("543d")["default"])},"8e1e":function(e,t,n){"use strict";var o=n("8ac2"),a=n.n(o);a.a},f013:function(e,t,n){"use strict";n.r(t);var o=n("8dbf"),a=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t["default"]=a.a},f336:function(e,t,n){"use strict";(function(e){n("d510"),n("921b");o(n("66fd"));var t=o(n("5b3e"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["f336","common/runtime","common/vendor"]]]);