(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/manage"],{"0185":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a(t("c74b"));var o=a(t("c8f0"));function a(n){return n&&n.__esModule?n:{default:n}}var s,r=function(){return t.e("components/kilvn-fa-icon/fa-icon").then(t.bind(null,"0914"))},i={components:{faIcon:r},data:function(){return{now_optionsLists:[],optionsLists:[{name:"产品管理",icon:"envelope-open-o",url:"/pages/manage/goods/goods",color:"#af42b3"},{name:"员工管理",icon:"user",url:"/pages/manage/staff/staff",color:"#b38c42"},{name:"仓库管理",icon:"home",url:"/pages/manage/warehouse/warehouse",color:"#b34742"},{name:"门店管理",icon:"shopping-cart",url:"/pages/manage/shops/shops",color:"#6f60aa"},{name:"客户管理",icon:"address-card",url:"/pages/manage/custom/custom",color:"#82b342"},{name:"产品类别管理",icon:"list",url:"/pages/manage/category/category",color:"#426ab3"}]}},onLoad:function(){s=this},onShow:function(){n.getStorage({key:"identity",success:function(e){var t;"2"==e.data?o.default.get_satffAuth().then(function(e){console.log(e);var o=n.getStorageSync("user");e.masterId.is_vip?(o.is_vip=!0,o.vip_time=o.masterId.vip_time):(o.is_vip=!1,o.vip_time=0),t=e?e.rights.current:n.getStorageSync("user").rights.current;var a=[];for(var r in t)a.push(s.optionsLists[r]);s.now_optionsLists=a,n.setStorageSync("user",o)}):"1"==e.data&&(s.now_optionsLists=s.optionsLists)}})},methods:{}};e.default=i}).call(this,t("543d")["default"])},"28bd":function(n,e,t){},"4fb3":function(n,e,t){"use strict";t.r(e);var o=t("8fee"),a=t("a6ed");for(var s in a)"default"!==s&&function(n){t.d(e,n,function(){return a[n]})}(s);t("85fa");var r=t("2877"),i=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},"85fa":function(n,e,t){"use strict";var o=t("28bd"),a=t.n(o);a.a},"8fee":function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return a})},a6ed:function(n,e,t){"use strict";t.r(e);var o=t("0185"),a=t.n(o);for(var s in o)"default"!==s&&function(n){t.d(e,n,function(){return o[n]})}(s);e["default"]=a.a},e4b0:function(n,e,t){"use strict";(function(n){t("a961"),t("921b");o(t("66fd"));var e=o(t("4fb3"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])}},[["e4b0","common/runtime","common/vendor"]]]);