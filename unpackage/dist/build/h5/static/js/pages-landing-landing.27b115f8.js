(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-landing-landing"],{"565d":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".footer[data-v-56fe5e1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;margin-top:%?180?%;color:rgba(0,0,0,.7);text-align:center;height:%?40?%;line-height:%?40?%}uni-page-body[data-v-56fe5e1e]{background:#fff;text-align:center;font-size:%?28?%;color:#3d3d3d}uni-input[data-v-56fe5e1e]:focus{border-bottom:1px solid#426ab3!important}.header_text[data-v-56fe5e1e]{color:#4d4d4d;font-weight:700;font-size:%?40?%;margin-top:5%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.iconImage[data-v-56fe5e1e]{width:%?40?%;height:%?40?%;margin-left:%?10?%;margin-top:%?10?%}.input_view[data-v-56fe5e1e]{padding:%?40?% 0 0}.input_view_flex[data-v-56fe5e1e]{padding:%?40?% 0 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.input_element[data-v-56fe5e1e]{text-align:left;border-bottom:%?0.5?% solid#ddd;padding:0 %?10?%;height:%?80?%;line-height:%?80?%}.login_button[data-v-56fe5e1e]{width:90%;margin:0 auto;border-radius:%?40?%;background:#f1f1f1!important;border:unset!important;color:#999;font-weight:700;margin-top:15%;box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1)}.staff_login_button[data-v-56fe5e1e]{width:90%;margin:0 auto;border-radius:%?40?%;background:#b34257!important;border:unset!important;color:#fff!important;font-weight:700;margin-top:10%;box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1)}.confirm_btton[data-v-56fe5e1e]{width:90%;margin:0 auto;border-radius:%?40?%;background:#42b35f!important;border:unset!important;color:#fff;font-weight:700;margin-top:10%;box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1)}.bg_button[data-v-56fe5e1e]{background:#426ab3!important;color:#fff!important}.display_flex[data-v-56fe5e1e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.get_smscode[data-v-56fe5e1e]{font-size:%?24?%;border-radius:%?40?%;color:#999;font-weight:700;background:#f1f1f1!important;border:unset!important}body.?%PAGE?%[data-v-56fe5e1e]{background:#fff}",""])},"5b3e":function(t,e,i){"use strict";i.r(e);var n=i("c043"),a=i("f013");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("98a1");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"56fe5e1e",null);e["default"]=s.exports},"98a1":function(t,e,i){"use strict";var n=i("bb64"),a=i.n(n);a.a},9920:function(t,e,i){"use strict";(function(t){var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("7514");var a,o=n(i("9546")),r="",s={data:function(){return{code_text:"验证码",code_button_state:!1}},onLoad:function(){a=this},methods:{get_InputPhone:function(t){r=t.detail.value},get_smscode:function(){if(r.length<11)uni.showToast({title:"请输入正确的手机号",icon:"none"});else{var t={mobilePhoneNumber:r,template:"积木舟"};o.default.requestSmsCode(t).then(function(t){uni.showToast({title:"发送成功"}),a.code_button_state=!0,a.code_text=60;var e=setInterval(function(){a.code_text=a.code_text-1,0==a.code_text&&(clearInterval(e),a.code_button_state=!1,a.code_text="验证码")},1e3)}).catch(function(t){wx.showToast({title:"发送失败",icon:"none"})})}},formSubmit:function(e){t.log(e);var i=e.detail.value.phone,n=e.detail.value.sms_code;if(e.detail.value.phone.length<11)uni.showToast({title:"手机格式错误",icon:"none"});else if(e.detail.value.sms_code<6)uni.showToast({title:"验证码格式错误",icon:"none"});else{var a=n,r={mobilePhoneNumber:i};o.default.verifySmsCode(a,r).then(function(e){t.log(e);var n=o.default.Query("_User");n.equalTo("mobilePhoneNumber","==",i),n.find().then(function(e){if(t.log(e),e[0].masterId&&e[0].masterId.objectId||2==e[0].identity){var i=e[0],n=e[0].masterId;uni.hideLoading(),n.is_vip?(i.is_vip=!0,i.vip_time=n.vip_time):(i.is_vip=!1,i.vip_time=0),uni.setStorageSync("user",i),uni.setStorageSync("identity",2),uni.setStorageSync("masterId",e[0].objectId),uni.setStorageSync("uid",n[0].objectId)}else uni.setStorageSync("user",e[0]),uni.setStorageSync("masterId",e[0].objectId),uni.setStorageSync("identity",1),uni.setStorageSync("uid",e[0].objectId),uni.switchTab({url:"/pages/tarBar/index"}),e[0].pwd?o.default.User.login(e[0].username,e[0].pwd).then(function(e){t.log(e)}).catch(function(e){t.log(e)}):o.default.User.login(e[0].username,e[0].username).then(function(e){t.log(e)}).catch(function(e){t.log(e)})})}).catch(function(t){uni.showToast({title:"验证码或手机号错误",icon:"none"})})}}}};e.default=s}).call(this,i("5a52")["default"])},bb64:function(t,e,i){var n=i("565d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("65f9f62a",n,!0,{sourceMap:!1,shadowMode:!1})},c043:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between",padding:"15px"}},[i("v-uni-view",{staticStyle:{"font-size":"18px"}}),i("v-uni-view",{staticStyle:{"font-size":"12px"}})],1),i("v-uni-view",{staticClass:"header_text"},[i("v-uni-view",[t._v("登陆")]),i("v-uni-view",{staticClass:"iconImage"},[i("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"/static/chuan.png"}})],1)],1),i("v-uni-view",{staticStyle:{padding:"15px 30px",margin:"5% 0"}},[i("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"input_view"},[i("v-uni-input",{staticClass:"input_element",attrs:{placeholder:"请输入手机号",name:"phone",maxlength:"11",type:"number"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.get_InputPhone.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"input_view_flex"},[i("v-uni-view",{staticStyle:{width:"60%"}},[i("v-uni-input",{staticClass:"input_element",attrs:{placeholder:"请输入验证码",maxlength:"6",name:"sms_code",type:"number"}})],1),i("v-uni-view",[i("v-uni-button",{staticClass:"get_smscode",attrs:{plain:"true",disabled:t.code_button_state},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.get_smscode.apply(void 0,arguments)}}},[t._v(t._s(t.code_text))])],1)],1),i("v-uni-view",[i("v-uni-button",{staticClass:"login_button",attrs:{plain:"true","form-type":"submit","hover-class":"bg_button"}},[t._v("登陆")])],1),i("v-uni-navigator",{attrs:{"open-type":"navigate",url:"../staff_landing/staff_landing"}},[i("v-uni-button",{staticClass:"staff_login_button",attrs:{plain:"true","hover-class":"bg_button"}},[t._v("账号密码登陆")])],1)],1)],1),i("v-uni-navigator",{staticClass:"footer",attrs:{url:"/pages/register/register","open-type":"navigate","hover-class":"none"}},[i("fa-icon",{staticStyle:{"margin-right":"20rpx"},attrs:{type:"wechat",size:"18",color:"#26cf23"}}),i("v-uni-view",[t._v("注册账号")])],1),i("v-uni-view",{staticStyle:{color:"#0081FF","font-size":"20rpx","margin-top":"10rpx",padding:"0 40rpx"}},[i("fa-icon",{staticStyle:{"margin-right":"10rpx"},attrs:{type:"info-circle",size:"10",color:"#0081FF"}}),t._v("注册说明：注册成功之后，您可以使用关于一些进销存的功能（包含进库、出库、入库...）")],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},f013:function(t,e,i){"use strict";i.r(e);var n=i("9920"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a}}]);