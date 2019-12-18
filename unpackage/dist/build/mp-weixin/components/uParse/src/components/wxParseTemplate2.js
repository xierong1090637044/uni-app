(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uParse/src/components/wxParseTemplate2"],{"6c1a":function(e,n,t){"use strict";t.r(n);var r=t("e9d1"),a=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);n["default"]=a.a},7540:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return r}),t.d(n,"b",function(){return a})},db1d:function(e,n,t){"use strict";t.r(n);var r=t("7540"),a=t("6c1a");for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);var u=t("2877"),s=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);n["default"]=s.exports},e9d1:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){return t.e("components/uParse/src/components/wxParseTemplate3").then(t.bind(null,"7b20"))},a=function(){return t.e("components/uParse/src/components/wxParseImg").then(t.bind(null,"64a2"))},o=function(){return t.e("components/uParse/src/components/wxParseVideo").then(t.bind(null,"9aca"))},u=function(){return t.e("components/uParse/src/components/wxParseAudio").then(t.bind(null,"1f01"))},s={name:"wxParseTemplate2",props:{node:{}},components:{wxParseTemplate:r,wxParseImg:a,wxParseVideo:o,wxParseAudio:u},inject:["uparse"],methods:{wxParseATap:function(e){var n=e.currentTarget.dataset.href;n&&this.uparse.navigate(n,e)}}};n.default=s}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uParse/src/components/wxParseTemplate2-create-component',
    {
        'components/uParse/src/components/wxParseTemplate2-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("db1d"))
        })
    },
    [['components/uParse/src/components/wxParseTemplate2-create-component']]
]);
