(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-popup-new/uni-popup-new"],{"2a72":function(t,n,i){"use strict";var e=i("aaec"),o=i.n(e);o.a},"83f2":function(t,n,i){"use strict";i.r(n);var e=i("ea39"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,(function(){return e[t]}))}(a);n["default"]=o.a},9115:function(t,n,i){"use strict";i.r(n);var e=i("ed15"),o=i("83f2");for(var a in o)"default"!==a&&function(t){i.d(n,t,(function(){return o[t]}))}(a);i("2a72");var s,r=i("f0c5"),u=Object(r["a"])(o["default"],e["b"],e["c"],!1,null,"e6a02b9a",null,!1,e["a"],s);n["default"]=u.exports},aaec:function(t,n,i){},ea39:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=function(){i.e("components/uni-transition/uni-transition").then(function(){return resolve(i("fc2bf"))}.bind(null,i)).catch(i.oe)},o={name:"UniPopupNew",components:{uniTransition:e},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){this.animation?this.duration=300:this.duration=0},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick((function(){clearTimeout(t.timer),t.timer=setTimeout((function(){t.showTrans=!0}),50)})),this.$emit("change",{show:!0})},close:function(t){var n=this;this.showTrans=!1,this.$nextTick((function(){clearTimeout(n.timer),n.timer=setTimeout((function(){n.$emit("change",{show:!1}),n.showPopup=!1}),300)}))},onTap:function(){this.maskClick&&this.close()}}};n.default=o},ed15:function(t,n,i){"use strict";var e={"uni-transition":()=>i.e("components/uni-transition/uni-transition").then(i.bind(null,"fc2bf"))},o=function(){var t=this,n=t.$createElement;t._self._c},a=[];i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return e}))}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-popup-new/uni-popup-new-create-component',
    {
        'components/uni-popup-new/uni-popup-new-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9115"))
        })
    },
    [['components/uni-popup-new/uni-popup-new-create-component']]
]);