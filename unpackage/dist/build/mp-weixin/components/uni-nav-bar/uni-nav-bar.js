(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-nav-bar/uni-nav-bar"],{"4dec":function(t,n,e){"use strict";e.r(n);var u=e("d42e"),i=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=i.a},"50f2":function(t,n,e){},"6cea":function(t,n,e){"use strict";var u=e("50f2"),i=e.n(u);i.a},8803:function(t,n,e){"use strict";var u,i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return u})},"96bd":function(t,n,e){"use strict";e.r(n);var u=e("8803"),i=e("4dec");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("6cea");var o,r=e("f0c5"),c=Object(r["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);n["default"]=c.exports},d42e:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return e.e("components/uni-status-bar/uni-status-bar").then(e.bind(null,"14ce"))},i=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"3628"))},a={name:"UniNavBar",components:{uniStatusBar:u,uniIcon:i},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:Boolean,default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:Boolean,default:!1},shadow:{type:Boolean,default:!0},border:{type:Boolean,default:!0}},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")}}};n.default=a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-nav-bar/uni-nav-bar-create-component',
    {
        'components/uni-nav-bar/uni-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("96bd"))
        })
    },
    [['components/uni-nav-bar/uni-nav-bar-create-component']]
]);
