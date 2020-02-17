(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uParse/src/components/wxParseTemplate4"],{"0acf":function(e,n,t){"use strict";var r,a=function(){var e=this,n=e.$createElement;e._self._c},c=[];t.d(n,"b",function(){return a}),t.d(n,"c",function(){return c}),t.d(n,"a",function(){return r})},"423c":function(e,n,t){"use strict";t.r(n);var r=t("0acf"),a=t("cccd");for(var c in a)"default"!==c&&function(e){t.d(n,e,function(){return a[e]})}(c);var u,o=t("f0c5"),s=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);n["default"]=s.exports},"93ba":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){return t.e("components/uParse/src/components/wxParseTemplate5").then(t.bind(null,"676d"))},a=function(){return t.e("components/uParse/src/components/wxParseImg").then(t.bind(null,"12d8"))},c=function(){return t.e("components/uParse/src/components/wxParseVideo").then(t.bind(null,"5d61"))},u=function(){return t.e("components/uParse/src/components/wxParseAudio").then(t.bind(null,"6744"))},o={name:"wxParseTemplate4",props:{node:{}},components:{wxParseTemplate:r,wxParseImg:a,wxParseVideo:c,wxParseAudio:u},inject:["uparse"],methods:{wxParseATap:function(e){var n=e.currentTarget.dataset.href;n&&this.uparse.navigate(n,e)}}};n.default=o},cccd:function(e,n,t){"use strict";t.r(n);var r=t("93ba"),a=t.n(r);for(var c in r)"default"!==c&&function(e){t.d(n,e,function(){return r[e]})}(c);n["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uParse/src/components/wxParseTemplate4-create-component',
    {
        'components/uParse/src/components/wxParseTemplate4-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("423c"))
        })
    },
    [['components/uParse/src/components/wxParseTemplate4-create-component']]
]);
