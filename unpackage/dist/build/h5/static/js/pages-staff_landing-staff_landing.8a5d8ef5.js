(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-staff_landing-staff_landing"],{"2f34":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-040244a3]{background:#fff;text-align:center}uni-input[data-v-040244a3]:focus{border-bottom:1px solid#426ab3!important}.header_text[data-v-040244a3]{color:#4d4d4d;font-weight:700;font-size:20px;margin-top:5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.iconImage[data-v-040244a3]{width:%?40?%;height:%?40?%;margin-left:%?10?%;margin-top:%?10?%}.input_view[data-v-040244a3]{padding:%?40?% 0 0}.input_view_flex[data-v-040244a3]{padding:%?40?% 0 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.input_element[data-v-040244a3]{text-align:left;border-bottom:1px solid#ddd;padding:0 %?10?%;height:%?80?%;line-height:%?80?%}.login_button[data-v-040244a3]{width:90%;margin:0 auto;border-radius:%?40?%;background:#f1f1f1!important;border:unset!important;color:#999;font-weight:700;margin-top:15%;-webkit-box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1);box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1)}.staff_login_button[data-v-040244a3]{width:90%;margin:0 auto;border-radius:%?40?%;background:#b34257!important;border:unset!important;color:#fff!important;font-weight:700;margin-top:10%;-webkit-box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1);box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1)}.confirm_btton[data-v-040244a3]{width:90%;margin:0 auto;border-radius:%?40?%;background:#42b35f!important;border:unset!important;color:#fff;font-weight:700;margin-top:10%;-webkit-box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1);box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1)}.bg_button[data-v-040244a3]{background:#426ab3!important;color:#fff!important}.avatar[data-v-040244a3]{width:%?120?%;height:%?120?%;border-radius:50%;border:1px solid#fff}.display_flex[data-v-040244a3]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.get_smscode[data-v-040244a3]{font-size:12px;border-radius:%?40?%;color:#999;font-weight:700;background:#f1f1f1!important;border:unset!important}body.?%PAGE?%[data-v-040244a3]{background:#fff}",""])},"4e9c":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{height:"100vh"}},[n("v-uni-view",[n("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between",padding:"30rpx"}},[n("v-uni-view",{staticStyle:{"font-size":"18px"}}),n("v-uni-view",{staticStyle:{"font-size":"12px"}})],1),n("v-uni-view",{staticClass:"header_text"},[n("v-uni-view",[t._v("登陆积木舟")]),n("v-uni-view",{staticClass:"iconImage"},[n("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"/static/chuan.png"}})],1)],1),n("v-uni-view",{staticStyle:{padding:"30rpx 60rpx",margin:"5% 0"}},[n("v-uni-form",{attrs:{bindsubmit:"formSubmit"}},[n("v-uni-view",{staticClass:"input_view"},[n("v-uni-input",{staticClass:"input_element",attrs:{placeholder:"请输入手机号",maxlength:"11",type:"number"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("v-uni-view",{staticClass:"input_view_flex"},[n("v-uni-view",{staticStyle:{width:"100%"}},[n("v-uni-input",{staticClass:"input_element",attrs:{placeholder:"请输入密码",name:"password",type:"number"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),n("v-uni-view",[n("v-uni-button",{staticClass:"login_button",attrs:{plain:"true","hover-class":"bg_button"},on:{click:function(e){e=t.$handleEvent(e),t.staff_login(e)}}},[t._v("登陆")])],1)],1)],1)],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"82d6":function(t,e,n){"use strict";n.r(e);var i=n("4e9c"),a=n("bf0a");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("a70d");var s=n("2877"),r=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"040244a3",null);e["default"]=r.exports},a70d:function(t,e,n){"use strict";var i=n("ab46"),a=n.n(i);a.a},ab46:function(t,e,n){var i=n("2f34");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2708fdff",i,!0,{sourceMap:!1,shadowMode:!1})},b5ee:function(t,e,n){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("7514");var a={data:function(){return{phone:"",password:""}},onLoad:function(){i=this},methods:{staff_login:function(){if(console.log(i.phone),console.log(i.password),i.phone.length<1||i.password.length<1)uni.showToast({title:"请填写完整",icon:"none"});else{uni.showLoading({title:"登录中..."});var t=Bmob.Query("staffs");t.equalTo("mobilePhoneNumber","==",i.phone),t.equalTo("password","==",i.password),t.find().then(function(t){console.log(t[0]);var e=t[0];if(e.userId)uni.hideLoading(),uni.setStorageSync("user",e),uni.setStorageSync("identity",2),uni.setStorageSync("masterId",e.userId.objectId),uni.setStorageSync("uid",e.masterId.objectId),uni.switchTab({url:"/pages/index/index"});else{var n={rights:e.rights,masterId:e.masterId,nickName:e.username,username:e.mobilePhoneNumber,password:e.password,mobilePhoneNumber:e.mobilePhoneNumber,avatarUrl:e.avatarUrl};Bmob.User.register(n).then(function(t){console.log(t);var n=t,i=Bmob.Pointer("_User"),a=i.set(n.objectId),o=Bmob.Query("staffs");o.set("id",e.objectId),o.set("userId",a),o.save().then(function(t){console.log(t),uni.hideLoading(),uni.setStorageSync("user",e),uni.setStorageSync("identity",2),uni.setStorageSync("masterId",n.objectId),uni.setStorageSync("uid",e.masterId.objectId),uni.switchTab({url:"/pages/index/index"})}).catch(function(t){console.log(t),uni.hideLoading(),uni,uni.showToast({title:"账户名或者密码错误",icon:"none"})})}).catch(function(t){console.log(t),uni.hideLoading(),uni,uni.showToast({title:"账户名或者密码错误",icon:"none"})})}})}}}};e.default=a},bf0a:function(t,e,n){"use strict";n.r(e);var i=n("b5ee"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a}}]);