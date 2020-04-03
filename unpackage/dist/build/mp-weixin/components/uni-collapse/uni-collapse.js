(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-collapse/uni-collapse"],{"0d32":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={name:"UniCollapse",props:{accordion:{type:Boolean,default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach((function(t,e){t.isOpen&&n.push(t.nameSync)})),this.$emit("change",n)}}};t.default=u},"101e":function(n,t,e){"use strict";e.r(t);var u=e("0d32"),c=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,(function(){return u[n]}))}(o);t["default"]=c.a},"68c8":function(n,t,e){"use strict";var u=e("d743"),c=e.n(u);c.a},9621:function(n,t,e){"use strict";var u,c=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return u}))},bd14:function(n,t,e){"use strict";e.r(t);var u=e("9621"),c=e("101e");for(var o in c)"default"!==o&&function(n){e.d(t,n,(function(){return c[n]}))}(o);e("68c8");var r,a=e("f0c5"),i=Object(a["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);t["default"]=i.exports},d743:function(n,t,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("bd14"))
        })
    },
    [['components/uni-collapse/uni-collapse-create-component']]
]);
