(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uParse/src/components/wxParseTemplate2"],{"01e4":function(e,n,t){"use strict";var r,a=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"b",function(){return a}),t.d(n,"c",function(){return u}),t.d(n,"a",function(){return r})},"649b":function(e,n,t){"use strict";t.r(n);var r=t("01e4"),a=t("d309");for(var u in a)"default"!==u&&function(e){t.d(n,e,function(){return a[e]})}(u);var o,s=t("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);n["default"]=c.exports},a2be:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){return t.e("components/uParse/src/components/wxParseTemplate3").then(t.bind(null,"7f58"))},a=function(){return t.e("components/uParse/src/components/wxParseImg").then(t.bind(null,"12d8"))},u=function(){return t.e("components/uParse/src/components/wxParseVideo").then(t.bind(null,"5d61"))},o=function(){return t.e("components/uParse/src/components/wxParseAudio").then(t.bind(null,"6744"))},s={name:"wxParseTemplate2",props:{node:{}},components:{wxParseTemplate:r,wxParseImg:a,wxParseVideo:u,wxParseAudio:o},inject:["uparse"],methods:{wxParseATap:function(e){var n=e.currentTarget.dataset.href;n&&this.uparse.navigate(n,e)}}};n.default=s},d309:function(e,n,t){"use strict";t.r(n);var r=t("a2be"),a=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,function(){return r[e]})}(u);n["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uParse/src/components/wxParseTemplate2-create-component',
    {
        'components/uParse/src/components/wxParseTemplate2-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("649b"))
        })
    },
    [['components/uParse/src/components/wxParseTemplate2-create-component']]
]);
