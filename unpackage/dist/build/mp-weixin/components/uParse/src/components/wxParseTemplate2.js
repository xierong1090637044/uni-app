(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uParse/src/components/wxParseTemplate2"],{"01e4":function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return r}),t.d(n,"b",function(){return a})},"649b":function(e,n,t){"use strict";t.r(n);var r=t("01e4"),a=t("d309");for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);var u=t("2877"),s=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);n["default"]=s.exports},af4a:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){return t.e("components/uParse/src/components/wxParseTemplate3").then(t.bind(null,"7f58"))},a=function(){return t.e("components/uParse/src/components/wxParseImg").then(t.bind(null,"12d8"))},o=function(){return t.e("components/uParse/src/components/wxParseVideo").then(t.bind(null,"5d61"))},u=function(){return t.e("components/uParse/src/components/wxParseAudio").then(t.bind(null,"6744"))},s={name:"wxParseTemplate2",props:{node:{}},components:{wxParseTemplate:r,wxParseImg:a,wxParseVideo:o,wxParseAudio:u},inject:["uparse"],methods:{wxParseATap:function(e){var n=e.currentTarget.dataset.href;n&&this.uparse.navigate(n,e)}}};n.default=s},d309:function(e,n,t){"use strict";t.r(n);var r=t("af4a"),a=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);n["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uParse/src/components/wxParseTemplate2-create-component',
    {
        'components/uParse/src/components/wxParseTemplate2-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("649b"))
        })
    },
    [['components/uParse/src/components/wxParseTemplate2-create-component']]
]);
