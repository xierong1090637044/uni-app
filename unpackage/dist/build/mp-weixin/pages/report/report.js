(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/report"],{"1fa7":function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e,r=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"0914"))},i={components:{faIcon:r},data:function(){return{now_optionsLists:[],optionsLists:[{name:"入库记录",icon:"file-o",url:"/pages/report/EnteringHistory/EnteringHistory?type=1",color:"#2ca879"},{name:"出库记录",icon:"file-o",url:"/pages/report/EnteringHistory/EnteringHistory?type=-1",color:"#f30"},{name:"客户退货记录",icon:"file-o",url:"/pages/report/EnteringHistory/EnteringHistory?type=2",color:"#b3b242"},{name:"盘点记录",icon:"file-o",url:"/pages/report/EnteringHistory/EnteringHistory?type=3",color:"#b3424a"},{name:"经营状况",icon:"recycle",url:"/pages/report/operational_status/operational_status",color:"#426ab3"}]}},onLoad:function(){e=this},onShow:function(){n.getStorage({key:"identity",success:function(t){if("2"==t.data){var o=n.getStorageSync("user").rights.recodecurrent,r=[];for(var i in o)r.push(e.optionsLists[i]);e.now_optionsLists=r}else"1"==t.data&&(e.now_optionsLists=e.optionsLists)}})},methods:{}};t.default=i}).call(this,o("543d")["default"])},"3b3e":function(n,t,o){"use strict";o.r(t);var e=o("1fa7"),r=o.n(e);for(var i in e)"default"!==i&&function(n){o.d(t,n,function(){return e[n]})}(i);t["default"]=r.a},"6cb5":function(n,t,o){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},r=[];o.d(t,"a",function(){return e}),o.d(t,"b",function(){return r})},"6ff0":function(n,t,o){"use strict";o.r(t);var e=o("6cb5"),r=o("3b3e");for(var i in r)"default"!==i&&function(n){o.d(t,n,function(){return r[n]})}(i);o("c6a3");var a=o("2877"),s=Object(a["a"])(r["default"],e["a"],e["b"],!1,null,null,null);t["default"]=s.exports},"9c40":function(n,t,o){},c6a3:function(n,t,o){"use strict";var e=o("9c40"),r=o.n(e);r.a}},[["0513","common/runtime","common/vendor"]]]);