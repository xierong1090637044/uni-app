(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/sReportModule/sReportModule"],{"0159":function(e,n,t){"use strict";t.r(n);var r=t("3696"),o=t("8695");for(var s in o)"default"!==s&&function(e){t.d(n,e,(function(){return o[e]}))}(s);t("028f");var a,u=t("f0c5"),c=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);n["default"]=c.exports},"028f":function(e,n,t){"use strict";var r=t("05c8"),o=t.n(r);o.a},"05c8":function(e,n,t){},"115d":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{purchaseReport:[{name:"商品采购统计",url:"/pages/reportAnalys/purchaseGoods/purchaseGoods"},{name:"供应商采购统计",url:"/pages/reportAnalys/purchaseProducers/purchaseProducers"},{name:"品牌采购统计",url:"/pages/reportAnalys/brandSellPurchase/brandSellPurchase?type=1"}],sellReport:[{name:"商品销售统计",url:"/pages/reportAnalys/sellGoods/sellGoods"},{name:"客户销售统计",url:"/pages/reportAnalys/sellCustoms/sellCustoms"},{name:"品牌销售统计",url:"/pages/reportAnalys/brandSellPurchase/brandSellPurchase?type=-1"}],stockReport:[{name:"出入库统计",icon:"icon-zijinzhanghu",url:"/pages/reportAnalys/stockOutIn/stockOutIn"},{name:"仓库统计",icon:"icon-zijinzhanghu",url:"/pages/reportAnalys/stockGoods/stockGoods"},{name:"商品出库统计",icon:"icon-zijinzhanghu",url:"/pages/reportAnalys/stockGoodOut/stockGoodOut?type=-1"},{name:"商品入库统计",icon:"icon-zijinzhanghu",url:"/pages/reportAnalys/stockGoodOut/stockGoodOut?type=1"}],user:e.getStorageSync("user"),identity:e.getStorageSync("identity"),canUse:!0}},mounted:function(){2==this.identity&&-1==this.user.rights.analysisCurrent.indexOf("0")&&(this.canUse=!1)}};n.default=t}).call(this,t("543d")["default"])},3696:function(e,n,t){"use strict";var r,o=function(){var e=this,n=e.$createElement;e._self._c},s=[];t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return r}))},8695:function(e,n,t){"use strict";t.r(n);var r=t("115d"),o=t.n(r);for(var s in r)"default"!==s&&function(e){t.d(n,e,(function(){return r[e]}))}(s);n["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/sReportModule/sReportModule-create-component',
    {
        'components/sReportModule/sReportModule-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0159"))
        })
    },
    [['components/sReportModule/sReportModule-create-component']]
]);
