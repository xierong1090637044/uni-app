(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/producerDetBottom"],{"0975":function(t,e,n){},"102e":function(t,e,n){"use strict";n.r(e);var o=n("1cd1"),u=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=u.a},1825:function(t,e,n){"use strict";n.r(e);var o=n("5c49"),u=n("102e");for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);n("bf74");var c,a=n("f0c5"),d=Object(a["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=d.exports},"1cd1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o;u(n("4515")),u(n("f287"));function u(t){return t&&t.__esModule?t:{default:t}}var r={props:{producer:{type:Object,default:{}}},data:function(){return{}},mounted:function(){o=this},methods:{gotopay:function(){t.setStorageSync("producer",o.producer),t.navigateTo({url:"/pages/finance/outRecord/outRecord"})},edit:function(){t.setStorageSync("producers",o.producer),t.navigateTo({url:"../add/add"})},sellRecord:function(){t.setStorageSync("producer",o.producer),t.navigateTo({url:"/pages/common/goods-select/goods-select?type=delivery&value=3"})}}};e.default=r}).call(this,n("543d")["default"])},"5c49":function(t,e,n){"use strict";var o,u=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}))},bf74:function(t,e,n){"use strict";var o=n("0975"),u=n.n(o);u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/producerDetBottom-create-component',
    {
        'components/producerDetBottom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1825"))
        })
    },
    [['components/producerDetBottom-create-component']]
]);
