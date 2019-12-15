(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uParse/src/components/wxParseTemplate1"],{3691:function(e,n,t){"use strict";t.r(n);var r=t("423e"),a=t("7bdb");for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);var u=t("2877"),s=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);n["default"]=s.exports},"423e":function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return r}),t.d(n,"b",function(){return a})},"7bdb":function(e,n,t){"use strict";t.r(n);var r=t("e099"),a=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);n["default"]=a.a},e099:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){return t.e("components/uParse/src/components/wxParseTemplate2").then(t.bind(null,"649b"))},a=function(){return t.e("components/uParse/src/components/wxParseImg").then(t.bind(null,"12d8"))},o=function(){return t.e("components/uParse/src/components/wxParseVideo").then(t.bind(null,"5d61"))},u=function(){return t.e("components/uParse/src/components/wxParseAudio").then(t.bind(null,"6744"))},s={name:"wxParseTemplate1",props:{node:{}},components:{wxParseTemplate:r,wxParseImg:a,wxParseVideo:o,wxParseAudio:u},inject:["uparse"],methods:{wxParseATap:function(e){var n=e.currentTarget.dataset.href;n&&this.uparse.navigate(n,e)}}};n.default=s}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uParse/src/components/wxParseTemplate1-create-component',
    {
        'components/uParse/src/components/wxParseTemplate1-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3691"))
        })
    },
    [['components/uParse/src/components/wxParseTemplate1-create-component']]
]);
