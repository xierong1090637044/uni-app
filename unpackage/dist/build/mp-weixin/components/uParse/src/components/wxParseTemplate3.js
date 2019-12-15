(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uParse/src/components/wxParseTemplate3"],{"7f58":function(e,n,t){"use strict";t.r(n);var r=t("ecf0"),a=t("dbac");for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);var u=t("2877"),s=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);n["default"]=s.exports},d95b:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){return t.e("components/uParse/src/components/wxParseTemplate4").then(t.bind(null,"423c"))},a=function(){return t.e("components/uParse/src/components/wxParseImg").then(t.bind(null,"12d8"))},o=function(){return t.e("components/uParse/src/components/wxParseVideo").then(t.bind(null,"5d61"))},u=function(){return t.e("components/uParse/src/components/wxParseAudio").then(t.bind(null,"6744"))},s={name:"wxParseTemplate3",props:{node:{}},components:{wxParseTemplate:r,wxParseImg:a,wxParseVideo:o,wxParseAudio:u},inject:["uparse"],methods:{wxParseATap:function(e){var n=e.currentTarget.dataset.href;n&&this.uparse.navigate(n,e)}}};n.default=s},dbac:function(e,n,t){"use strict";t.r(n);var r=t("d95b"),a=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);n["default"]=a.a},ecf0:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return r}),t.d(n,"b",function(){return a})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uParse/src/components/wxParseTemplate3-create-component',
    {
        'components/uParse/src/components/wxParseTemplate3-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7f58"))
        })
    },
    [['components/uParse/src/components/wxParseTemplate3-create-component']]
]);
