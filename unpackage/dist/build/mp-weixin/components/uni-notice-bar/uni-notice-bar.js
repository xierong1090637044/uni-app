(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-notice-bar/uni-notice-bar"],{"35f2":function(t,e,n){},5287:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return n.e("components/uni-icon/uni-icon").then(n.bind(null,"3751"))},i={name:"UniNoticeBar",components:{uniIcon:o},props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#fffbe8"},speed:{type:[String,Number],default:100},color:{type:String,default:"#de8c17"},single:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!1},showGetMore:{type:Boolean,default:!1},showClose:{type:Boolean,default:!1}},data:function(){var t=this.__call_hook?"uni_notice_bar":"Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,show:!0,animation:""}},watch:{text:function(t,e){var n=this;this.$nextTick(function(){setTimeout(n.setAnimation,200)})}},onReady:function(){this.setAnimation()},methods:{clickMore:function(){this.$emit("getmore")},onClick:function(e){var n=e.touches?e.touches[0]?e.touches[0].clientX:e.changedTouches[0].clientX:e.detail.clientX;t.upx2px(48)+12>n&&this.showClose&&(this.show=!1,this.$emit("close")),this.$emit("click")},setAnimation:function(){var e=this;this.scrollable&&t.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function(t){e.animation="notice ".concat(t[0].width/e.speed,"s linear infinite both")})}}};e.default=i}).call(this,n("543d")["default"])},"6bf6":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},a238:function(t,e,n){"use strict";n.r(e);var o=n("6bf6"),i=n("c5bf");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("a780");var a=n("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},a780:function(t,e,n){"use strict";var o=n("35f2"),i=n.n(o);i.a},c5bf:function(t,e,n){"use strict";n.r(e);var o=n("5287"),i=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e["default"]=i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-notice-bar/uni-notice-bar-create-component',
    {
        'components/uni-notice-bar/uni-notice-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a238"))
        })
    },
    [['components/uni-notice-bar/uni-notice-bar-create-component']]
]);                
