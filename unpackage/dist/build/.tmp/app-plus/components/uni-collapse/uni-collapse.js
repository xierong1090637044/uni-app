(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-collapse/uni-collapse"],{"1afd":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniCollapse",props:{accordion:{type:Boolean,default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach(function(e,t){e.isOpen&&n.push(e.nameSync)}),this.$emit("change",n)}}};e.default=a},"4bdf":function(n,e,t){"use strict";t.r(e);var a=t("e4fe"),u=t("ebb5");for(var c in u)"default"!==c&&function(n){t.d(e,n,function(){return u[n]})}(c);t("9dca");var o=t("2877"),r=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"9dca":function(n,e,t){"use strict";var a=t("b918"),u=t.n(a);u.a},b918:function(n,e,t){},e4fe:function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return u})},ebb5:function(n,e,t){"use strict";t.r(e);var a=t("1afd"),u=t.n(a);for(var c in a)"default"!==c&&function(n){t.d(e,n,function(){return a[n]})}(c);e["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("4bdf"))
        })
    },
    [['components/uni-collapse/uni-collapse-create-component']]
]);                
