(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-collapse/uni-collapse"],{"35fc":function(n,t,e){"use strict";e.r(t);var c=e("dcb3"),u=e.n(c);for(var a in c)"default"!==a&&function(n){e.d(t,n,(function(){return c[n]}))}(a);t["default"]=u.a},7275:function(n,t,e){"use strict";var c,u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return c}))},"7afe":function(n,t,e){"use strict";var c=e("87f8"),u=e.n(c);u.a},"87f8":function(n,t,e){},b4ab:function(n,t,e){"use strict";e.r(t);var c=e("7275"),u=e("35fc");for(var a in u)"default"!==a&&function(n){e.d(t,n,(function(){return u[n]}))}(a);e("7afe");var o,r=e("f0c5"),i=Object(r["a"])(u["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],o);t["default"]=i.exports},dcb3:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c={name:"UniCollapse",props:{accordion:{type:Boolean,default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach((function(t,e){t.isOpen&&n.push(t.nameSync)})),this.$emit("change",n)}}};t.default=c}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b4ab"))
        })
    },
    [['components/uni-collapse/uni-collapse-create-component']]
]);
