;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/uParse/src/components/wxParseTemplate3"],{"7f58c":function(e,n,t){"use strict";t.r(n);var r=t("ecf0"),c=t("dbac");for(var o in c)"default"!==o&&function(e){t.d(n,e,(function(){return c[e]}))}(o);var a,u=t("f0c5"),s=Object(u["a"])(c["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);n["default"]=s.exports},a908:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){t.e("components/uParse/src/components/wxParseTemplate4").then(function(){return resolve(t("423c"))}.bind(null,t)).catch(t.oe)},c=function(){t.e("components/uParse/src/components/wxParseImg").then(function(){return resolve(t("12d8"))}.bind(null,t)).catch(t.oe)},o=function(){t.e("components/uParse/src/components/wxParseVideo").then(function(){return resolve(t("5d61"))}.bind(null,t)).catch(t.oe)},a=function(){t.e("components/uParse/src/components/wxParseAudio").then(function(){return resolve(t("6744"))}.bind(null,t)).catch(t.oe)},u={name:"wxParseTemplate3",props:{node:{}},components:{wxParseTemplate:r,wxParseImg:c,wxParseVideo:o,wxParseAudio:a},inject:["uparse"],methods:{wxParseATap:function(e){var n=e.currentTarget.dataset.href;n&&this.uparse.navigate(n,e)}}};n.default=u},dbac:function(e,n,t){"use strict";t.r(n);var r=t("a908"),c=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=c.a},ecf0:function(e,n,t){"use strict";var r,c=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return r}))}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/uParse/src/components/wxParseTemplate3-create-component',
    {
        'components/uParse/src/components/wxParseTemplate3-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("7f58c"))
        })
    },
    [['components/uParse/src/components/wxParseTemplate3-create-component']]
]);