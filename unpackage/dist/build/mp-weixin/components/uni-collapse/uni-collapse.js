(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-collapse/uni-collapse"],{"0e04":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c={name:"UniCollapse",props:{accordion:{type:Boolean,default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach(function(e,t){e.isOpen&&n.push(e.nameSync)}),this.$emit("change",n)}}};e.default=c},"8c72":function(n,e,t){},9626:function(n,e,t){"use strict";t.r(e);var c=t("acd2"),u=t("ec3f");for(var a in u)"default"!==a&&function(n){t.d(e,n,function(){return u[n]})}(a);t("e6f5");var o=t("2877"),r=Object(o["a"])(u["default"],c["a"],c["b"],!1,null,null,null);e["default"]=r.exports},acd2:function(n,e,t){"use strict";var c=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"a",function(){return c}),t.d(e,"b",function(){return u})},e6f5:function(n,e,t){"use strict";var c=t("8c72"),u=t.n(c);u.a},ec3f:function(n,e,t){"use strict";t.r(e);var c=t("0e04"),u=t.n(c);for(var a in c)"default"!==a&&function(n){t.d(e,n,function(){return c[n]})}(a);e["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9626"))
        })
    },
    [['components/uni-collapse/uni-collapse-create-component']]
]);                
