(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-landing-landing"],{"1ea9":function(t,e,n){"use strict";var i=n("c759"),a=n.n(i);a.a},2899:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".footer[data-v-182c356a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?28?%;margin-top:%?180?%;color:rgba(0,0,0,.7);text-align:center;height:%?40?%;line-height:%?40?%}uni-page-body[data-v-182c356a]{background:#fff;text-align:center;font-size:%?28?%;color:#3d3d3d}uni-input[data-v-182c356a]:focus{border-bottom:1px solid#426ab3!important}.header_text[data-v-182c356a]{color:#4d4d4d;font-weight:700;font-size:%?40?%;margin-top:5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.iconImage[data-v-182c356a]{width:%?40?%;height:%?40?%;margin-left:%?10?%;margin-top:%?10?%}.input_view[data-v-182c356a]{padding:%?40?% 0 0}.input_view_flex[data-v-182c356a]{padding:%?40?% 0 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.input_element[data-v-182c356a]{text-align:left;border-bottom:%?0.5?% solid#ddd;padding:0 %?10?%;height:%?80?%;line-height:%?80?%}.login_button[data-v-182c356a]{width:90%;margin:0 auto;border-radius:%?40?%;background:#f1f1f1!important;border:unset!important;color:#999;font-weight:700;margin-top:15%;-webkit-box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1);box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1)}.staff_login_button[data-v-182c356a]{width:90%;margin:0 auto;border-radius:%?40?%;background:#b34257!important;border:unset!important;color:#fff!important;font-weight:700;margin-top:10%;-webkit-box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1);box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1)}.confirm_btton[data-v-182c356a]{width:90%;margin:0 auto;border-radius:%?40?%;background:#42b35f!important;border:unset!important;color:#fff;font-weight:700;margin-top:10%;-webkit-box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1);box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1)}.bg_button[data-v-182c356a]{background:#426ab3!important;color:#fff!important}.display_flex[data-v-182c356a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.get_smscode[data-v-182c356a]{font-size:%?24?%;border-radius:%?40?%;color:#999;font-weight:700;background:#f1f1f1!important;border:unset!important}body.?%PAGE?%[data-v-182c356a]{background:#fff}",""])},3184:function(t,e,n){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var a="",o={data:function(){return{code_text:"验证码",code_button_state:!1}},onLoad:function(){i=this},methods:{get_InputPhone:function(t){a=t.detail.value},get_smscode:function(){if(a.length<11)uni.showToast({title:"请输入正确的手机号",icon:"none"});else{var t={mobilePhoneNumber:a,template:"积木舟"};Bmob.requestSmsCode(t).then(function(t){uni.showToast({title:"发送成功"}),i.code_button_state=!0,i.code_text=60;var e=setInterval(function(){i.code_text=i.code_text-1,0==i.code_text&&(clearInterval(e),i.code_button_state=!1,i.code_text="验证码")},1e3)}).catch(function(t){wx.showToast({title:"发送失败",icon:"none"})})}},formSubmit:function(t){console.log(t);var e=Number(t.detail.value.phone),n=Number(t.detail.value.sms_code);t.detail.value.phone.length<11?uni.showToast({title:"手机格式错误",icon:"none"}):t.detail.value.sms_code<6?uni.showToast({title:"验证码格式错误",icon:"none"}):Bmob.User.signOrLoginByMobilePhone(e,n).then(function(t){console.log(t),uni.setStorageSync("user",t),uni.setStorageSync("masterId",t.objectId),uni.setStorageSync("identity",1),uni.setStorageSync("uid",t.objectId),uni.switchTab({url:"/pages/index/index"})}).catch(function(t){uni.showToast({title:"验证码或手机号错误",icon:"none"})})}}};e.default=o},"62df":function(t,e,n){"use strict";n.r(e);var i=n("3184"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},a392:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{height:"100vh"}},[n("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between",padding:"15px"}},[n("v-uni-view",{staticStyle:{"font-size":"18px"}}),n("v-uni-view",{staticStyle:{"font-size":"12px"}})],1),n("v-uni-view",{staticClass:"header_text"},[n("v-uni-view",{staticStyle:{"font-size":"40rpx"}},[t._v("登陆")]),n("v-uni-view",{staticClass:"iconImage"},[n("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"/static/chuan.png"}})],1)],1),n("v-uni-view",{staticStyle:{padding:"15px 30px",margin:"5% 0"}},[n("v-uni-form",{on:{submit:function(e){e=t.$handleEvent(e),t.formSubmit(e)}}},[n("v-uni-view",{staticClass:"input_view"},[n("v-uni-input",{staticClass:"input_element",attrs:{placeholder:"请输入手机号",name:"phone",maxlength:"11",type:"number"},on:{input:function(e){e=t.$handleEvent(e),t.get_InputPhone(e)}}})],1),n("v-uni-view",{staticClass:"input_view_flex"},[n("v-uni-view",{staticStyle:{width:"60%"}},[n("v-uni-input",{staticClass:"input_element",attrs:{placeholder:"请输入验证码",maxlength:"6",name:"sms_code",type:"number"}})],1),n("v-uni-view",[n("v-uni-button",{staticClass:"get_smscode",attrs:{plain:"true",disabled:t.code_button_state},on:{click:function(e){e=t.$handleEvent(e),t.get_smscode(e)}}},[t._v(t._s(t.code_text))])],1)],1),n("v-uni-view",[n("v-uni-button",{staticClass:"login_button",attrs:{plain:"true","form-type":"submit","hover-class":"bg_button"}},[t._v("登陆")])],1),n("v-uni-navigator",{attrs:{"open-type":"navigate",url:"../staff_landing/staff_landing"}},[n("v-uni-button",{staticClass:"staff_login_button",attrs:{plain:"true","hover-class":"bg_button"}},[t._v("员工登陆")])],1)],1)],1),n("v-uni-view",{staticClass:"footer"},[n("v-uni-navigator",{attrs:{url:"/pages/register/register","open-type":"navigate"}},[t._v("注册账号")])],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},c759:function(t,e,n){var i=n("2899");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("702d86cf",i,!0,{sourceMap:!1,shadowMode:!1})},db7d:function(t,e,n){"use strict";n.r(e);var i=n("a392"),a=n("62df");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("1ea9");var s=n("2877"),r=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"182c356a",null);e["default"]=r.exports}}]);