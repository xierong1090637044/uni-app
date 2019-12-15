(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-collapse/uni-collapse"],{"35fc":function(n,t,e){"use strict";e.r(t);var a=e("cd36"),u=e.n(a);for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);t["default"]=u.a},5025:function(n,t,e){},72754:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})},"7afe":function(n,t,e){"use strict";var a=e("5025"),u=e.n(a);u.a},b4ab:function(n,t,e){"use strict";e.r(t);var a=e("72754"),u=e("35fc");for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);e("7afe");var o=e("2877"),r=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports},cd36:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"UniCollapse",props:{accordion:{type:Boolean,default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach(function(t,e){t.isOpen&&n.push(t.nameSync)}),this.$emit("change",n)}}};t.default=a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b4ab"))
        })
    },
    [['components/uni-collapse/uni-collapse-create-component']]
]);
