;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/uParse/src/components/wxParseTemplate1"],{3691:function(e,n,t){"use strict";t.r(n);var r=t("423e"),o=t("7bdb");for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);var c,a=t("f0c5"),s=Object(a["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);n["default"]=s.exports},"423e":function(e,n,t){"use strict";var r,o=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return r}))},"7bdb":function(e,n,t){"use strict";t.r(n);var r=t("da61"),o=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=o.a},da61:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){t.e("components/uParse/src/components/wxParseTemplate2").then(function(){return resolve(t("649b"))}.bind(null,t)).catch(t.oe)},o=function(){t.e("components/uParse/src/components/wxParseImg").then(function(){return resolve(t("12d8"))}.bind(null,t)).catch(t.oe)},u=function(){t.e("components/uParse/src/components/wxParseVideo").then(function(){return resolve(t("5d61"))}.bind(null,t)).catch(t.oe)},c=function(){t.e("components/uParse/src/components/wxParseAudio").then(function(){return resolve(t("6744"))}.bind(null,t)).catch(t.oe)},a={name:"wxParseTemplate1",props:{node:{}},components:{wxParseTemplate:r,wxParseImg:o,wxParseVideo:u,wxParseAudio:c},inject:["uparse"],methods:{wxParseATap:function(e){var n=e.currentTarget.dataset.href;n&&this.uparse.navigate(n,e)}}};n.default=a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/uParse/src/components/wxParseTemplate1-create-component',
    {
        'components/uParse/src/components/wxParseTemplate1-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("3691"))
        })
    },
    [['components/uParse/src/components/wxParseTemplate1-create-component']]
]);