(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/EnteringHistory/productDet/matterDet/matterDet"],{"42c3":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,a=r(n("9546"));function r(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{operationId:"",detail:[],matterStatus:!1}},onLoad:function(t){o=this,o.operationId=t.id},onShow:function(){o.getDetail(o.operationId)},methods:{setStorage:function(){1==o.matterStatus?t.showToast({title:"已经领过物料,不可修改！"}):(t.setStorageSync("products",o.detail),t.navigateTo({url:"/pages/production/matterEnter/matterEnter?type=productionEdit&id="+o.operationId}))},getDetail:function(t){var e=a.default.Query("order_opreations");e.select("mattersId"),e.get(t).then(function(t){console.log("物料单详情",t),o.matterStatus=t.matterStatus,o.detail=t.mattersId}).catch(function(t){console.log(t)})}}};e.default=u}).call(this,n("543d")["default"])},4817:function(t,e,n){"use strict";var o,a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return o})},"7df4":function(t,e,n){"use strict";n.r(e);var o=n("42c3"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=a.a},"92bf":function(t,e,n){"use strict";n.r(e);var o=n("4817"),a=n("7df4");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("cdda");var u,c=n("f0c5"),i=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=i.exports},cdda:function(t,e,n){"use strict";var o=n("eeef"),a=n.n(o);a.a},e37fe:function(t,e,n){"use strict";(function(t){n("d510"),n("921b");o(n("66fd"));var e=o(n("92bf"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},eeef:function(t,e,n){}},[["e37fe","common/runtime","common/vendor"]]]);