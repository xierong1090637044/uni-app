(global.webpackJsonp=global.webpackJsonp||[]).push([["components/tki-qrcode/tki-qrcode"],{660:
/*!****************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/components/tki-qrcode/tki-qrcode.vue ***!
  \****************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! ./tki-qrcode.vue?vue&type=template&id=54c099c8&xlang=wxml&minapp=mpvue& */661),o=n(/*! ./tki-qrcode.vue?vue&type=script&lang=js& */663);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n(/*! ./tki-qrcode.vue?vue&type=style&index=0&lang=css& */666);var r=n(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */69),a=Object(r.default)(o.default,i.render,i.staticRenderFns,!1,null,null,null);a.options.__file="C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/components/tki-qrcode/tki-qrcode.vue",e.default=a.exports},661:
/*!***********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/components/tki-qrcode/tki-qrcode.vue?vue&type=template&id=54c099c8&xlang=wxml&minapp=mpvue& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tki-qrcode.vue?vue&type=template&id=54c099c8&xlang=wxml&minapp=mpvue& */662);n.d(e,"render",function(){return i.render}),n.d(e,"staticRenderFns",function(){return i.staticRenderFns})},662:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/components/tki-qrcode/tki-qrcode.vue?vue&type=template&id=54c099c8&xlang=wxml&minapp=mpvue& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,n){"use strict";n.r(e),n.d(e,"render",function(){return i}),n.d(e,"staticRenderFns",function(){return o});var i=function(){var t=this.$createElement;this._self._c},o=[];i._withStripped=!0},663:
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/components/tki-qrcode/tki-qrcode.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tki-qrcode.vue?vue&type=script&lang=js& */664),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e.default=o.a},664:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/components/tki-qrcode/tki-qrcode.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o,u=(i=n(/*! ./qrcode.js */665))&&i.__esModule?i:{default:i};var r={name:"tki-qrcode",props:{cid:{type:String,default:"tki-qrcode-canvas"},size:{type:Number,default:200},unit:{type:String,default:"upx"},show:{type:Boolean,default:!0},val:{type:String,default:""},background:{type:String,default:"#ffffff"},foreground:{type:String,default:"#000000"},pdground:{type:String,default:"#000000"},icon:{type:String,default:""},iconSize:{type:Number,default:40},lv:{type:Number,default:3},onval:{type:Boolean,default:!1},loadMake:{type:Boolean,default:!1},usingComponents:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},loadingText:{type:String,default:"二维码生成中"}},data:function(){return{result:""}},methods:{_makeCode:function(){var e=this;this._empty(this.val)?t.showToast({title:"二维码内容不能为空",icon:"none",duration:2e3}):o=new u.default({context:e,canvasId:e.cid,usingComponents:e.usingComponents,showLoading:e.showLoading,loadingText:e.loadingText,text:e.val,size:e.cpSize,background:e.background,foreground:e.foreground,pdground:e.pdground,correctLevel:e.lv,image:e.icon,imageSize:e.iconSize,cbResult:function(t){e._result(t)}})},_clearCode:function(){this._result(""),o.clear()},_saveCode:function(){""!=this.result&&t.saveImageToPhotosAlbum({filePath:this.result,success:function(){t.showToast({title:"二维码保存成功",icon:"success",duration:2e3})}})},_result:function(t){this.result=t,this.$emit("result",t)},_empty:function(t){var e=typeof t,n=!1;return"number"==e&&""==String(t)?n=!0:"undefined"==e?n=!0:"object"==e?"{}"!=JSON.stringify(t)&&"[]"!=JSON.stringify(t)&&null!=t||(n=!0):"string"==e?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(n=!0):"function"==e&&(n=!1),n}},watch:{size:function(t,e){var n=this;t==e||this._empty(t)||(this.cSize=t,this._empty(this.val)||setTimeout(function(){n._makeCode()},100))},val:function(t,e){var n=this;this.onval&&(t==e||this._empty(t)||setTimeout(function(){n._makeCode()},0))}},computed:{cpSize:function(){return"upx"==this.unit?t.upx2px(this.size):this.size}},mounted:function(){var t=this;this.loadMake&&(this._empty(this.val)||setTimeout(function(){t._makeCode()},0))}};e.default=r}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},666:
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/components/tki-qrcode/tki-qrcode.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var i=n(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tki-qrcode.vue?vue&type=style&index=0&lang=css& */667),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e.default=o.a},667:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/components/tki-qrcode/tki-qrcode.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/tki-qrcode/tki-qrcode.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tki-qrcode/tki-qrcode-create-component',
    {
        'components/tki-qrcode/tki-qrcode-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(660))
        })
    },
    [['components/tki-qrcode/tki-qrcode-create-component']]
]);                
