(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/producerDetBottom"],{"20eb":function(e,t,n){"use strict";var o,u=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}))},2888:function(e,t,n){"use strict";n.r(t);var o=n("20eb"),u=n("5cef");for(var r in u)"default"!==r&&function(e){n.d(t,e,(function(){return u[e]}))}(r);n("dfed");var c,a=n("f0c5"),d=Object(a["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=d.exports},"2c7e":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o;u(n("c74b")),u(n("df06"));function u(e){return e&&e.__esModule?e:{default:e}}var r={props:{producer:{type:Object,default:{}}},data:function(){return{}},mounted:function(){o=this},methods:{gotopay:function(){e.setStorageSync("producer",o.producer),e.navigateTo({url:"/pages/finance/outRecord/outRecord"})},edit:function(){e.setStorageSync("producers",o.producer),e.navigateTo({url:"../add/add"})},sellRecord:function(){e.setStorageSync("producer",o.producer),e.navigateTo({url:"/pages/common/goods-select/goods-select?type=delivery&value=3"})}}};t.default=r}).call(this,n("543d")["default"])},"5cef":function(e,t,n){"use strict";n.r(t);var o=n("2c7e"),u=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=u.a},8191:function(e,t,n){},dfed:function(e,t,n){"use strict";var o=n("8191"),u=n.n(o);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/producerDetBottom-create-component',
    {
        'components/producerDetBottom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2888"))
        })
    },
    [['components/producerDetBottom-create-component']]
]);
