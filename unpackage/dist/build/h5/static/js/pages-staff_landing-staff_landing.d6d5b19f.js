(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-staff_landing-staff_landing"],{"00a6":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-0fd8817e]{background:#fff;text-align:center}uni-input[data-v-0fd8817e]:focus{border-bottom:1px solid#426ab3!important}.header_text[data-v-0fd8817e]{color:#4d4d4d;font-weight:700;font-size:20px;margin-top:5%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.iconImage[data-v-0fd8817e]{width:%?40?%;height:%?40?%;margin-left:%?10?%;margin-top:%?10?%}.input_view[data-v-0fd8817e]{padding:%?40?% 0 0}.input_view_flex[data-v-0fd8817e]{padding:%?40?% 0 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.input_element[data-v-0fd8817e]{text-align:left;border-bottom:1px solid#ddd;padding:0 %?10?%;height:%?80?%;line-height:%?80?%}.login_button[data-v-0fd8817e]{width:90%;margin:0 auto;border-radius:%?40?%;background:#f1f1f1!important;border:unset!important;color:#999;font-weight:700;margin-top:15%;box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1)}.staff_login_button[data-v-0fd8817e]{width:90%;margin:0 auto;border-radius:%?40?%;background:#b34257!important;border:unset!important;color:#fff!important;font-weight:700;margin-top:10%;box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1)}.confirm_btton[data-v-0fd8817e]{width:90%;margin:0 auto;border-radius:%?40?%;background:#42b35f!important;border:unset!important;color:#fff;font-weight:700;margin-top:10%;box-shadow:0 %?20?% %?20?% rgba(0,0,0,.1)}.bg_button[data-v-0fd8817e]{background:#426ab3!important;color:#fff!important}.avatar[data-v-0fd8817e]{width:%?120?%;height:%?120?%;border-radius:50%;border:1px solid#fff}.display_flex[data-v-0fd8817e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.get_smscode[data-v-0fd8817e]{font-size:12px;border-radius:%?40?%;color:#999;font-weight:700;background:#f1f1f1!important;border:unset!important}body.?%PAGE?%[data-v-0fd8817e]{background:#fff}",""])},"0e41":function(t,e,i){"use strict";(function(t){var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,o=n(i("9546")),r={data:function(){return{phone:"",password:""}},onLoad:function(){a=this},methods:{staff_login:function(){t.log(a.phone),t.log(a.password),a.phone.length<1||a.password.length<1?uni.showToast({title:"请填写完整",icon:"none"}):(uni.showLoading({title:"登录中..."}),o.default.User.login(a.phone,a.password).then(function(e){if(t.log(e),e.masterId&&e.masterId.objectId||2==e.identity){var i=e,n=e.masterId;uni.hideLoading(),n.is_vip?(i.is_vip=!0,i.vip_time=n.vip_time):(i.is_vip=!1,i.vip_time=0),uni.setStorageSync("user",i),uni.setStorageSync("identity",2),uni.setStorageSync("masterId",e.objectId),uni.setStorageSync("uid",n.objectId)}else uni.setStorageSync("user",e),uni.setStorageSync("masterId",e.objectId),uni.setStorageSync("identity",1),uni.setStorageSync("uid",e.objectId);uni.switchTab({url:"/pages/tarBar/index"})}).catch(function(e){t.log(e),101==e.code&&uni.showToast({title:"账号密码不正确",icon:"none"})}))}}};e.default=r}).call(this,i("5a52")["default"])},"1c7b":function(t,e,i){"use strict";i.r(e);var n=i("0e41"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},2455:function(t,e,i){var n=i("00a6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("71f4cc78",n,!0,{sourceMap:!1,shadowMode:!1})},2544:function(t,e,i){"use strict";i.r(e);var n=i("b602"),a=i("1c7b");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("43ee");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"0fd8817e",null);e["default"]=s.exports},"43ee":function(t,e,i){"use strict";var n=i("2455"),a=i.n(n);a.a},b602:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between",padding:"30rpx"}},[i("v-uni-view",{staticStyle:{"font-size":"18px"}}),i("v-uni-view",{staticStyle:{"font-size":"12px"}})],1),i("v-uni-view",{staticClass:"header_text"},[i("v-uni-view",[t._v("登陆库存表")]),i("v-uni-view",{staticClass:"iconImage"},[i("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:"/static/chuan.png"}})],1)],1),i("v-uni-view",{staticStyle:{padding:"30rpx 60rpx",margin:"5% 0"}},[i("v-uni-form",{attrs:{bindsubmit:"formSubmit"}},[i("v-uni-view",{staticClass:"input_view"},[i("v-uni-input",{staticClass:"input_element",attrs:{placeholder:"请输入账号",maxlength:"11",type:"text"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),i("v-uni-view",{staticClass:"input_view_flex"},[i("v-uni-view",{staticStyle:{width:"100%"}},[i("v-uni-input",{staticClass:"input_element",attrs:{placeholder:"请输入密码",name:"password",type:"text"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),i("v-uni-view",[i("v-uni-button",{staticClass:"login_button",attrs:{plain:"true","hover-class":"bg_button"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.staff_login.apply(void 0,arguments)}}},[t._v("登陆")])],1)],1)],1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})}}]);