(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/setting/setting"],{"07cf":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return o})},"1c1b":function(t,e,n){"use strict";n.r(e);var u=n("07cf"),o=n("eec6");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("ae35");var i=n("2877"),s=Object(i["a"])(o["default"],u["a"],u["b"],!1,null,null,null);e["default"]=s.exports},4006:function(t,e,n){},ae35:function(t,e,n){"use strict";var u=n("4006"),o=n.n(u);o.a},d308:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u,o,a,i=s(n("e21e"));function s(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{show_float:null,USER:null,UKEY:null,number:null}},onLoad:function(){o=this,u=wx.getStorageSync("uid"),t.getStorage({key:"setting",success:function(t){a=t.data,o.show_float=a.show_float,o.USER=a.USER,o.UKEY=a.UKEY,o.number=a.number}})},methods:{onNavigationBarButtonTap:function(e){t.showLoading({title:"上传中"});var n=i.default.Query("setting"),s=i.default.Pointer("_User"),r=s.set(u);a&&n.set("id",a.objectId),n.set("show_float",Number(o.show_float)),n.set("USER",o.USER),n.set("UKEY",o.UKEY),n.set("number",o.number),n.set("parent",r),n.save().then(function(e){console.log(e," at pages\\mine\\setting\\setting.vue:75"),t.hideLoading(),t.showToast({title:"保存成功"}),o.query_setting()}).catch(function(t){console.log(t," at pages\\mine\\setting\\setting.vue:83")})},query_setting:function(){var e=i.default.Query("setting");e.equalTo("parent","==",res.data.objectId),e.find().then(function(e){t.setStorageSync("setting",e[0])})}}};e.default=r}).call(this,n("6e42")["default"])},eec6:function(t,e,n){"use strict";n.r(e);var u=n("d308"),o=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=o.a}},[["af16","common/runtime","common/vendor"]]]);