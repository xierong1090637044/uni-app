(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-staff_landing-staff_landing"],{"290b":function(t,e,i){var n=i("48d8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("607f4630",n,!0,{sourceMap:!1,shadowMode:!1})},"48d8":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-73bb5cfc]{background:#fff;text-align:center}uni-input[data-v-73bb5cfc]:focus{border-bottom:1px solid#426ab3!important}.header_text[data-v-73bb5cfc]{color:#4d4d4d;font-weight:700;font-size:20px;margin-top:5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.iconImage[data-v-73bb5cfc]{width:%?40?%;height:%?40?%;margin-left:%?10?%;margin-top:%?10?%}.input_view[data-v-73bb5cfc]{padding:%?40?% 0 0}.input_view_flex[data-v-73bb5cfc]{padding:%?40?% 0 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.input_element[data-v-73bb5cfc]{text-align:left;border-bottom:1px solid#ddd;padding:0 %?10?%;height:%?80?%;line-height:%?80?%}.login_button[data-v-73bb5cfc]{width:90%;margin:0 auto;border-radius:%?40?%;background:#f1f1f1!important;border:unset!important;color:#999;font-weight:700;margin-top:15%;-webkit-box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1);box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1)}.staff_login_button[data-v-73bb5cfc]{width:90%;margin:0 auto;border-radius:%?40?%;background:#b34257!important;border:unset!important;color:#fff!important;font-weight:700;margin-top:10%;-webkit-box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1);box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1)}.confirm_btton[data-v-73bb5cfc]{width:90%;margin:0 auto;border-radius:%?40?%;background:#42b35f!important;border:unset!important;color:#fff;font-weight:700;margin-top:10%;-webkit-box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1);box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1)}.bg_button[data-v-73bb5cfc]{background:#426ab3!important;color:#fff!important}.avatar[data-v-73bb5cfc]{width:%?120?%;height:%?120?%;border-radius:50%;border:1px solid#fff}.display_flex[data-v-73bb5cfc]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.get_smscode[data-v-73bb5cfc]{font-size:12px;border-radius:%?40?%;color:#999;font-weight:700;background:#f1f1f1!important;border:unset!important}body.?%PAGE?%[data-v-73bb5cfc]{background:#fff}",""])},"82d6":function(t,e,i){"use strict";i.r(e);var n=i("e2c2"),a=i("bf0a");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("d417");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"73bb5cfc",null);e["default"]=r.exports},bf0a:function(t,e,i){"use strict";i.r(e);var n=i("d8add"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},d417:function(t,e,i){"use strict";var n=i("290b"),a=i.n(n);a.a},d8add:function(t,e,i){"use strict";(function(t){var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("7514");var a,o=n(i("c74b")),s={data:function(){return{phone:"",password:""}},onLoad:function(){a=this},methods:{staff_login:function(){if(t.log(a.phone),t.log(a.password),a.phone.length<1||a.password.length<1)uni.showToast({title:"请填写完整",icon:"none"});else{uni.showLoading({title:"登录中..."});var e=o.default.Query("staffs");e.equalTo("mobilePhoneNumber","==",a.phone),e.equalTo("password","==",a.password),e.include("masterId"),e.find().then(function(e){t.log(e[0]);var i=e[0];if(i&&i.userId)uni.hideLoading(),i.masterId.is_vip?(i.is_vip=!0,i.vip_time=i.masterId.vip_time):(i.is_vip=!1,i.vip_time=0),uni.setStorageSync("user",i),uni.setStorageSync("identity",2),uni.setStorageSync("masterId",i.userId.objectId),uni.setStorageSync("uid",i.masterId.objectId),uni.switchTab({url:"/pages/tarBar/index"});else{var n=o.default.Pointer("_User"),a=n.set(i.masterId.objectId),s={rights:i.rights,masterId:a,nickName:i.username,username:i.mobilePhoneNumber,password:i.password,mobilePhoneNumber:i.mobilePhoneNumber,avatarUrl:i.avatarUrl};o.default.User.register(s).then(function(e){t.log(e);var n=e,a=o.default.Pointer("_User"),s=a.set(n.objectId),r=o.default.Query("staffs");r.set("id",i.objectId),r.set("userId",s),r.save().then(function(e){t.log(e),uni.hideLoading(),i.masterId.is_vip?(i.is_vip=!0,i.vip_time=i.masterId.vip_time):(i.is_vip=!1,i.vip_time=0),uni.setStorageSync("user",i),uni.setStorageSync("identity",2),uni.setStorageSync("masterId",n.objectId),uni.setStorageSync("uid",i.masterId.objectId),uni.switchTab({url:"/pages/tarBar/index"})}).catch(function(e){t.log(e),uni.hideLoading(),uni,uni.showToast({title:"账户名或者密码错误",icon:"none"})})}).catch(function(e){t.log(e),uni.hideLoading(),uni,uni.showToast({title:"账户名或者密码错误",icon:"none"})})}})}}}};e.default=s}).call(this,i("5a52")["default"])},e2c2:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between",padding:"30rpx"}},[i("v-uni-view",{staticStyle:{"font-size":"18px"}}),i("v-uni-view",{staticStyle:{"font-size":"12px"}})],1),i("v-uni-view",{staticClass:"header_text"},[i("v-uni-view",[t._v("登陆积木舟")]),i("v-uni-view",{staticClass:"iconImage"},[i("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"/static/chuan.png"}})],1)],1),i("v-uni-view",{staticStyle:{padding:"30rpx 60rpx",margin:"5% 0"}},[i("v-uni-form",{attrs:{bindsubmit:"formSubmit"}},[i("v-uni-view",{staticClass:"input_view"},[i("v-uni-input",{staticClass:"input_element",attrs:{placeholder:"请输入手机号",maxlength:"11",type:"number"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),i("v-uni-view",{staticClass:"input_view_flex"},[i("v-uni-view",{staticStyle:{width:"100%"}},[i("v-uni-input",{staticClass:"input_element",attrs:{placeholder:"请输入密码",name:"password",type:"number"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),i("v-uni-view",[i("v-uni-button",{staticClass:"login_button",attrs:{plain:"true","hover-class":"bg_button"},on:{click:function(e){e=t.$handleEvent(e),t.staff_login(e)}}},[t._v("登陆")])],1)],1)],1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})}}]);