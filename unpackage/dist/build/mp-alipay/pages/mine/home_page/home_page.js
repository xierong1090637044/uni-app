(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/mine/home_page/home_page"],{1834:function(e,n,t){"use strict";(function(e){t("d510"),t("921b");o(t("66fd"));var n=o(t("e120"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("c11b")["createPage"])},"260f":function(e,n,t){},"32a6":function(e,n,t){"use strict";var o=t("260f"),u=t.n(o);u.a},"9e1a":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(t("9546")),u=i(t("2bc1")),c=i(t("7fd5"));function i(e){return e&&e.__esModule?e:{default:e}}var r,a=function(){t.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(t("4d52"))}.bind(null,t)).catch(t.oe)},s=function(){t.e("components/uni-popup/uni-popup").then(function(){return resolve(t("7aeb"))}.bind(null,t)).catch(t.oe)},f={components:{faIcon:a,uniPopup:s},data:function(){return{userInfo:"",modal_show:!1,identity:e.getStorageSync("identity"),sexs:["男","女"],vipShow:!1,user:""}},onLoad:function(){r=this,r.user=e.getStorageSync("user");var n=o.default.Query("wc_setting");n.get("FtIO888D").then((function(e){"aXcyRBaf"==r.user.objectId?r.vipShow=!1:r.vipShow=e.isShow})).catch((function(e){console.log(e)}))},onShow:function(){r.userInfo=e.getStorageSync("user"),r.userInfo.vip_time=c.default.js_date_time(r.userInfo.vip_time)},methods:{setheaderimg:function(){1==r.identity?e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(n){var t;console.log(n),t=o.default.File(r.userInfo.nickName+".png",n.tempFilePaths[0]),t.save().then((function(n){console.log("图片地址",n),r.userInfo.avatarUrl=n[0].url,u.default.update_user(r.userInfo).then((function(n){n&&e.setStorageSync("user",r.userInfo)}))}))}}):e.showToast({title:"员工暂不支持修改",icon:"none"})},confrim_username:function(){1==r.identity?u.default.update_user(r.userInfo).then((function(n){n&&(e.showToast({title:"修改成功",icon:"none"}),r.modal_show=!1,e.setStorageSync("user",r.userInfo),r.userInfo=e.getStorageSync("user"))})):e.showToast({title:"员工暂不支持修改",icon:"none"})},chooseSex:function(n){var t=Number(n.detail.value)+1;r.userInfo.sex=t,1==r.identity?u.default.update_user(r.userInfo).then((function(n){n&&(e.showToast({title:"修改成功",icon:"none"}),e.setStorageSync("user",r.userInfo),r.userInfo=e.getStorageSync("user"))})):e.showToast({title:"员工暂不支持修改",icon:"none"})}}};n.default=f}).call(this,t("c11b")["default"])},a9ee:function(e,n,t){"use strict";t.r(n);var o=t("9e1a"),u=t.n(o);for(var c in o)"default"!==c&&function(e){t.d(n,e,(function(){return o[e]}))}(c);n["default"]=u.a},bc61:function(e,n,t){"use strict";var o={"uni-popup":function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"7aeb"))}},u=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.modal_show=!0},e.e1=function(n){e.modal_show=!1})},c=[];t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return o}))},e120:function(e,n,t){"use strict";t.r(n);var o=t("bc61"),u=t("a9ee");for(var c in u)"default"!==c&&function(e){t.d(n,e,(function(){return u[e]}))}(c);t("32a6");var i,r=t("f0c5"),a=Object(r["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);n["default"]=a.exports}},[["1834","common/runtime","common/vendor"]]]);