(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-pagination/uni-pagination"],{"0b01":function(t,n,e){},"51ea":function(t,n,e){"use strict";e.r(n);var u=e("736c"),r=e("57b1");for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);e("df3e");var c=e("2877"),a=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);n["default"]=a.exports},"57b1":function(t,n,e){"use strict";e.r(n);var u=e("fee5"),r=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=r.a},"736c":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})},df3e:function(t,n,e){"use strict";var u=e("0b01"),r=e.n(u);r.a},fee5:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"3751"))},r={name:"UniPagination",components:{uniIcon:u},props:{prevText:{type:String,default:"上一页"},nextText:{type:String,default:"下一页"},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:Boolean,default:!1}},data:function(){return{currentIndex:1}},computed:{maxPage:function(){var t=1,n=Number(this.total),e=Number(this.pageSize);return n&&e&&(t=Math.ceil(n/e)),t}},watch:{current:function(t){this.currentIndex=+t}},created:function(){this.currentIndex=+this.current},methods:{clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)!==this.maxPage&&(this.currentIndex+=1,this.change("next"))},change:function(t){this.$emit("change",{type:t,current:this.currentIndex})}}};n.default=r}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-pagination/uni-pagination-create-component',
    {
        'components/uni-pagination/uni-pagination-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("51ea"))
        })
    },
    [['components/uni-pagination/uni-pagination-create-component']]
]);                
