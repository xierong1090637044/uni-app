;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/customDetBottom"],{"02a9":function(t,o,c){"use strict";c.r(o);var e=c("f590"),n=c.n(e);for(var u in e)"default"!==u&&function(t){c.d(o,t,(function(){return e[t]}))}(u);o["default"]=n.a},"0c46":function(t,o,c){},"11f6":function(t,o,c){"use strict";var e=c("0c46"),n=c.n(e);n.a},"51ca":function(t,o,c){"use strict";c.r(o);var e=c("5cc9"),n=c("02a9");for(var u in n)"default"!==u&&function(t){c.d(o,t,(function(){return n[t]}))}(u);c("11f6");var s,a=c("f0c5"),r=Object(a["a"])(n["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],s);o["default"]=r.exports},"5cc9":function(t,o,c){"use strict";var e,n=function(){var t=this,o=t.$createElement;t._self._c},u=[];c.d(o,"b",(function(){return n})),c.d(o,"c",(function(){return u})),c.d(o,"a",(function(){return e}))},f590:function(t,o,c){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e;n(c("9546")),n(c("7fd5"));function n(t){return t&&t.__esModule?t:{default:t}}var u={props:{custom:{type:Object,default:{}}},data:function(){return{}},mounted:function(){e=this},methods:{gotopay:function(){t.navigateTo({url:"/pages/finance/CPHistory/costomInDet/costomInDet?customId="+e.custom.objectId})},addCustomFollow:function(){t.setStorageSync("custom",e.custom),t.navigateTo({url:"/pages/manage/customFollow/customFollow"})},edit:function(){e.custom.customSecondClass?t.setStorageSync("customCategory",e.custom.customSecondClass):e.custom.customFristClass&&t.setStorageSync("customCategory",e.custom.customFristClass),t.setStorageSync("customs",e.custom),t.navigateTo({url:"../add/add"})},sellRecord:function(){t.setStorageSync("custom",e.custom),t.navigateTo({url:"/pages/common/goods-select/goods-select?type=delivery&value=3"})}}};o.default=u}).call(this,c("c11b")["default"])}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/customDetBottom-create-component',
    {
        'components/customDetBottom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("51ca"))
        })
    },
    [['components/customDetBottom-create-component']]
]);
