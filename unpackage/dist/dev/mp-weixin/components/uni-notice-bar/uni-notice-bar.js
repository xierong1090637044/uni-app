(global.webpackJsonp=global.webpackJsonp||[]).push([["components/uni-notice-bar/uni-notice-bar"],{604:
/*!************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/components/uni-notice-bar/uni-notice-bar.vue ***!
  \************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! ./uni-notice-bar.vue?vue&type=template&id=2e984b88& */605),o=n(/*! ./uni-notice-bar.vue?vue&type=script&lang=js& */607);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);n(/*! ./uni-notice-bar.vue?vue&type=style&index=0&lang=css& */609);var r=n(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */69),u=Object(r.default)(o.default,i.render,i.staticRenderFns,!1,null,null,null);u.options.__file="C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/components/uni-notice-bar/uni-notice-bar.vue",e.default=u.exports},605:
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/components/uni-notice-bar/uni-notice-bar.vue?vue&type=template&id=2e984b88& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-notice-bar.vue?vue&type=template&id=2e984b88& */606);n.d(e,"render",function(){return i.render}),n.d(e,"staticRenderFns",function(){return i.staticRenderFns})},606:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/components/uni-notice-bar/uni-notice-bar.vue?vue&type=template&id=2e984b88& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e),n.d(e,"render",function(){return i}),n.d(e,"staticRenderFns",function(){return o});var i=function(){var t=this.$createElement;this._self._c},o=[];i._withStripped=!0},607:
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/components/uni-notice-bar/uni-notice-bar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-notice-bar.vue?vue&type=script&lang=js& */608),o=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e.default=o.a},608:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/components/uni-notice-bar/uni-notice-bar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniNoticeBar",components:{uniIcon:function(){return n.e(/*! import() | components/uni-icon/uni-icon */"components/uni-icon/uni-icon").then(n.bind(null,/*! ../uni-icon/uni-icon.vue */639))}},props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#fffbe8"},speed:{type:[String,Number],default:100},color:{type:String,default:"#de8c17"},single:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!1},showGetMore:{type:Boolean,default:!1},showClose:{type:Boolean,default:!1}},data:function(){return{elId:this.__call_hook?"uni_notice_bar":"Uni_".concat(Math.ceil(1e6*Math.random()).toString(36)),show:!0,animation:""}},watch:{text:function(t,e){var n=this;this.$nextTick(function(){setTimeout(n.setAnimation,200)})}},onReady:function(){this.setAnimation()},methods:{clickMore:function(){this.$emit("getmore")},onClick:function(e){var n=e.touches?e.touches[0]?e.touches[0].clientX:e.changedTouches[0].clientX:e.detail.clientX;t.upx2px(48)+12>n&&this.showClose&&(this.show=!1,this.$emit("close")),this.$emit("click")},setAnimation:function(){var e=this;this.scrollable&&t.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function(t){e.animation="notice ".concat(t[0].width/e.speed,"s linear infinite both")})}}};e.default=i}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},609:
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/components/uni-notice-bar/uni-notice-bar.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-notice-bar.vue?vue&type=style&index=0&lang=css& */610),o=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e.default=o.a},610:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/components/uni-notice-bar/uni-notice-bar.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/uni-notice-bar/uni-notice-bar.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-notice-bar/uni-notice-bar-create-component',
    {
        'components/uni-notice-bar/uni-notice-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(604))
        })
    },
    [['components/uni-notice-bar/uni-notice-bar-create-component']]
]);                
