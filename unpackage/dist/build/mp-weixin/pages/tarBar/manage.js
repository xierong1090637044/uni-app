(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tarBar/manage"],{"0e2e":function(n,e,t){"use strict";t.r(e);var o=t("0eb6"),a=t("5182");for(var r in a)"default"!==r&&function(n){t.d(e,n,function(){return a[n]})}(r);t("4442");var s=t("2877"),c=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},"0eb6":function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return a})},4442:function(n,e,t){"use strict";var o=t("9d98"),a=t.n(o);a.a},5182:function(n,e,t){"use strict";t.r(e);var o=t("e6ce"),a=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);e["default"]=a.a},"680c":function(n,e,t){"use strict";(function(n){t("bc8c"),t("921b");o(t("66fd"));var e=o(t("0e2e"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"9d98":function(n,e,t){},e6ce:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a(t("906f"));var o=a(t("fc53"));function a(n){return n&&n.__esModule?n:{default:n}}var r,s=function(){return t.e("components/kilvn-fa-icon/fa-icon").then(t.bind(null,"eaf0"))},c={components:{faIcon:s},data:function(){return{now_optionsLists:[],optionsLists:[{name:"产品管理",icon:"envelope-open-o",url:"/pages/manage/goods/goods",color:"#af42b3"},{name:"员工管理",icon:"user",url:"/pages/manage/staff/staff",color:"#b38c42"},{name:"仓库管理",icon:"home",url:"/pages/manage/warehouse/warehouse",color:"#b34742"},{name:"门店管理",icon:"shopping-cart",url:"/pages/manage/shops/shops",color:"#6f60aa"},{name:"客户管理",icon:"address-card",url:"/pages/manage/custom/custom",color:"#82b342"},{name:"产品类别管理",icon:"list",url:"/pages/manage/category/category",color:"#426ab3"},{name:"单品统计",icon:"quora",url:"/pages/manage/productCount/productCount",color:"#65c294"}]}},onLoad:function(){r=this},onShow:function(){n.getStorage({key:"identity",success:function(e){var t;"2"==e.data?o.default.get_satffAuth().then(function(e){console.log(e);var o=n.getStorageSync("user");e.masterId.is_vip?(o.is_vip=!0,o.vip_time=o.masterId.vip_time):(o.is_vip=!1,o.vip_time=0),t=e?e.rights.current:n.getStorageSync("user").rights.current;var a=[];for(var s in t)a.push(r.optionsLists[s]);r.now_optionsLists=a,n.setStorageSync("user",o)}):"1"==e.data&&(r.now_optionsLists=r.optionsLists)}})},methods:{}};e.default=c}).call(this,t("543d")["default"])}},[["680c","common/runtime","common/vendor"]]]);