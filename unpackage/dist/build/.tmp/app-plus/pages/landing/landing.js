(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/landing/landing"],{"2edd":function(t,e,n){"use strict";n.r(e);var o=n("febb"),a=n("6c66");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("c932");var c=n("2877"),i=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},"677a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,a=u(n("e21e"));function u(t){return t&&t.__esModule?t:{default:t}}var c="",i={data:function(){return{code_text:"验证码",code_button_state:!1}},onLoad:function(){o=this},methods:{get_InputPhone:function(t){c=t.detail.value},get_smscode:function(){if(c.length<11)t.showToast({title:"请输入正确的手机号",icon:"none"});else{var e={mobilePhoneNumber:c,template:"积木舟"};a.default.requestSmsCode(e).then(function(e){t.showToast({title:"发送成功"}),o.code_button_state=!0,o.code_text=60;var n=setInterval(function(){o.code_text=o.code_text-1,0==o.code_text&&(clearInterval(n),o.code_button_state=!1,o.code_text="验证码")},1e3)}).catch(function(t){wx.showToast({title:"发送失败",icon:"none"})})}},formSubmit:function(e){var n=Number(e.detail.value.phone),o=Number(e.detail.value.sms_code);e.detail.value.phone.length<11?t.showToast({title:"手机格式错误",icon:"none"}):e.detail.value.sms_code<6?t.showToast({title:"验证码格式错误",icon:"none"}):a.default.User.signOrLoginByMobilePhone(n,o).then(function(e){console.log(e," at pages\\landing\\landing.vue:97"),t.setStorageSync("user",e)}).catch(function(e){t.showToast({title:"验证码或手机号错误",icon:"none"})})}}};e.default=i}).call(this,n("6e42")["default"])},"6c66":function(t,e,n){"use strict";n.r(e);var o=n("677a"),a=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=a.a},9744:function(t,e,n){},c932:function(t,e,n){"use strict";var o=n("9744"),a=n.n(o);a.a},febb:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})}},[["f0fe","common/runtime","common/vendor"]]]);