(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/uploadFile/uploadFile"],{"267e":function(n,e,t){"use strict";(function(n){t("a961"),t("921b");u(t("66fd"));var e=u(t("39a1"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"28b8":function(n,e,t){"use strict";var u=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"a",function(){return u}),t.d(e,"b",function(){return o})},"39a1":function(n,e,t){"use strict";t.r(e);var u=t("28b8"),o=t("634c");for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);t("6200");var c=t("2877"),i=Object(c["a"])(o["default"],u["a"],u["b"],!1,null,null,null);e["default"]=i.exports},6200:function(n,e,t){"use strict";var u=t("68e7"),o=t.n(u);o.a},"634c":function(n,e,t){"use strict";t.r(e);var u=t("ada8"),o=t.n(u);for(var a in u)"default"!==a&&function(n){t.d(e,n,function(){return u[n]})}(a);e["default"]=o.a},"68e7":function(n,e,t){},ada8:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u,o=function(){return t.e("components/kilvn-fa-icon/fa-icon").then(t.bind(null,"0914"))},a={components:{faIcon:o},data:function(){return{user:null}},onLoad:function(){u=this},onShow:function(){u.user=n.getStorageSync("user")},methods:{uploadfile:function(){wx.chooseMessageFile({count:1,type:"file",success:function(e){console.log(e);var t=e.tempFiles;n.uploadFile({url:"https://www.jimuzhou.com/api/getfile.php",filePath:t[0].path,name:"file",formData:{user:"test"},success:function(n){console.log(n.data)}})}})}}};e.default=a}).call(this,t("543d")["default"])}},[["267e","common/runtime","common/vendor"]]]);