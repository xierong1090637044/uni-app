(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/staff_landing/staff_landing"],{"08bb":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=s(n("9546"));function s(e){return e&&e.__esModule?e:{default:e}}var i={data:function(){return{phone:"",password:""}},onLoad:function(){o=this},methods:{staff_login:function(){if(console.log(o.phone),console.log(o.password),o.phone.length<1||o.password.length<1)e.showToast({title:"请填写完整",icon:"none"});else{e.showLoading({title:"登录中..."});var t=a.default.Query("staffs");t.equalTo("mobilePhoneNumber","==",o.phone),t.equalTo("password","==",o.password),t.include("masterId"),t.find().then(function(t){console.log(t[0]);var n=t[0];if(n&&n.userId)e.hideLoading(),n.masterId.is_vip?(n.is_vip=!0,n.vip_time=n.masterId.vip_time):(n.is_vip=!1,n.vip_time=0),e.setStorageSync("user",n),e.setStorageSync("identity",2),e.setStorageSync("masterId",n.userId.objectId),e.setStorageSync("uid",n.masterId.objectId),e.switchTab({url:"/pages/tarBar/index"});else{var o=a.default.Pointer("_User"),s=o.set(n.masterId.objectId),i={rights:n.rights,masterId:s,nickName:n.username,username:n.mobilePhoneNumber,password:n.password,mobilePhoneNumber:n.mobilePhoneNumber,avatarUrl:n.avatarUrl};a.default.User.register(i).then(function(t){console.log(t);var o=t,s=a.default.Pointer("_User"),i=s.set(o.objectId),r=a.default.Query("staffs");r.set("id",n.objectId),r.set("userId",i),r.save().then(function(t){console.log(t),e.hideLoading(),n.masterId.is_vip?(n.is_vip=!0,n.vip_time=n.masterId.vip_time):(n.is_vip=!1,n.vip_time=0),e.setStorageSync("user",n),e.setStorageSync("identity",2),e.setStorageSync("masterId",o.objectId),e.setStorageSync("uid",n.masterId.objectId),e.switchTab({url:"/pages/tarBar/index"})}).catch(function(t){console.log(t),e.hideLoading(),e.showToast({title:"账户名或者密码错误",icon:"none"})})}).catch(function(t){console.log(t),e.hideLoading(),e.showToast({title:"账户名或者密码错误",icon:"none"})})}})}}}};t.default=i}).call(this,n("543d")["default"])},"1c7b":function(e,t,n){"use strict";n.r(t);var o=n("08bb"),a=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);t["default"]=a.a},2544:function(e,t,n){"use strict";n.r(t);var o=n("d350"),a=n("1c7b");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);n("f635");var i=n("2877"),r=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},cd7f:function(e,t,n){"use strict";(function(e){n("d510"),n("921b");o(n("66fd"));var t=o(n("2544"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},d350:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},f635:function(e,t,n){"use strict";var o=n("fa87"),a=n.n(o);a.a},fa87:function(e,t,n){}},[["cd7f","common/runtime","common/vendor"]]]);