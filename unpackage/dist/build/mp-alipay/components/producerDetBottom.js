;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/producerDetBottom"],{"0dee":function(e,t,n){"use strict";var u=n("26b8"),r=n.n(u);r.a},"26b8":function(e,t,n){},"631f":function(e,t,n){"use strict";n.r(t);var u=n("efac"),r=n("cb3f");for(var c in r)"default"!==c&&function(e){n.d(t,e,(function(){return r[e]}))}(c);n("0dee");var o,a=n("f0c5"),d=Object(a["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);t["default"]=d.exports},"9cbc":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u;r(n("9546")),r(n("7fd5"));function r(e){return e&&e.__esModule?e:{default:e}}var c={props:{producer:{type:Object,default:{}}},data:function(){return{}},mounted:function(){u=this},methods:{gotopay:function(){e.navigateTo({url:"/pages/finance/CPHistory/producerOutDet/producerOutDet?producerId="+u.producer.objectId})},edit:function(){e.setStorageSync("producers",u.producer),e.navigateTo({url:"../add/add"})},sellRecord:function(){e.setStorageSync("producer",u.producer),e.navigateTo({url:"/pages/common/goods-select/goods-select?type=delivery&value=3"})}}};t.default=c}).call(this,n("c11b")["default"])},cb3f:function(e,t,n){"use strict";n.r(t);var u=n("9cbc"),r=n.n(u);for(var c in u)"default"!==c&&function(e){n.d(t,e,(function(){return u[e]}))}(c);t["default"]=r.a},efac:function(e,t,n){"use strict";var u,r=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u}))}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/producerDetBottom-create-component',
    {
        'components/producerDetBottom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("631f"))
        })
    },
    [['components/producerDetBottom-create-component']]
]);
