(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/producerDetBottom"],{"0dee":function(e,t,n){"use strict";var u=n("26b8"),r=n.n(u);r.a},"26b8":function(e,t,n){},"4c11":function(e,t,n){"use strict";var u,r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return u}))},"631f":function(e,t,n){"use strict";n.r(t);var u=n("4c11"),r=n("cb3f");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("0dee");var c,a=n("f0c5"),d=Object(a["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);t["default"]=d.exports},"9cbc":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u;r(n("9546")),r(n("7fd5"));function r(e){return e&&e.__esModule?e:{default:e}}var o={props:{producer:{type:Object,default:{}}},data:function(){return{}},mounted:function(){u=this},methods:{gotopay:function(){e.navigateTo({url:"/pages/finance/CPHistory/producerOutDet/producerOutDet?producerId="+u.producer.objectId})},edit:function(){e.setStorageSync("producers",u.producer),e.navigateTo({url:"../add/add"})},sellRecord:function(){e.setStorageSync("producer",u.producer),e.navigateTo({url:"/pages/commonNew/goods-select/goods-select?type=entering&value=3"})}}};t.default=o}).call(this,n("543d")["default"])},cb3f:function(e,t,n){"use strict";n.r(t);var u=n("9cbc"),r=n.n(u);for(var o in u)"default"!==o&&function(e){n.d(t,e,(function(){return u[e]}))}(o);t["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/producerDetBottom-create-component',
    {
        'components/producerDetBottom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("631f"))
        })
    },
    [['components/producerDetBottom-create-component']]
]);
