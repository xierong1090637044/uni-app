(global.webpackJsonp=global.webpackJsonp||[]).push([["components/uni-fab/uni-fab"],{971:
/*!************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/components/uni-fab/uni-fab.vue ***!
  \************************************************************************************/
/*! no static exports found */function(t,n,i){"use strict";i.r(n);var o=i(/*! ./uni-fab.vue?vue&type=template&id=43e5df52&scoped=true& */972),e=i(/*! ./uni-fab.vue?vue&type=script&lang=js& */974);for(var r in e)"default"!==r&&function(t){i.d(n,t,function(){return e[t]})}(r);i(/*! ./uni-fab.vue?vue&type=style&index=0&id=43e5df52&scoped=true&lang=css& */976);var s=i(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */70),u=Object(s.default)(e.default,o.render,o.staticRenderFns,!1,null,"43e5df52",null);u.options.__file="C:/Users/Administrator/Desktop/wechat/kcb_all/components/uni-fab/uni-fab.vue",n.default=u.exports},972:
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/components/uni-fab/uni-fab.vue?vue&type=template&id=43e5df52&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,n,i){"use strict";i.r(n);var o=i(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-fab.vue?vue&type=template&id=43e5df52&scoped=true& */973);i.d(n,"render",function(){return o.render}),i.d(n,"staticRenderFns",function(){return o.staticRenderFns})},973:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/components/uni-fab/uni-fab.vue?vue&type=template&id=43e5df52&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,n,i){"use strict";i.r(n),i.d(n,"render",function(){return o}),i.d(n,"staticRenderFns",function(){return e});var o=function(){var t=this.$createElement;this._self._c},e=[];o._withStripped=!0},974:
/*!*************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/components/uni-fab/uni-fab.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */function(t,n,i){"use strict";i.r(n);var o=i(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-fab.vue?vue&type=script&lang=js& */975),e=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(n,t,function(){return o[t]})}(r);n.default=e.a},975:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/components/uni-fab/uni-fab.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"UniFab",props:{pattern:{type:Object,default:function(){return{}}},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!1}},data:function(){return{fabShow:!1,flug:!0,isShow:!1,styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#3c3e49"}}},computed:{contentWidth:function(n){return t.upx2px(110*(this.content.length+1)+20)+"px"},contentWidthMin:function(){return t.upx2px(110)+"px"},boxWidth:function(){return this.getPosition(3,"horizontal")},boxHeight:function(){return this.getPosition(3,"vertical")},leftBottom:function(){return this.getPosition(0,"left","bottom")},rightBottom:function(){return this.getPosition(0,"right","bottom")},leftTop:function(){return this.getPosition(0,"left","top")},rightTop:function(){return this.getPosition(0,"right","top")},flexDirectionStart:function(){return this.getPosition(1,"vertical","top")},flexDirectionEnd:function(){return this.getPosition(1,"vertical","bottom")},horizontalLeft:function(){return this.getPosition(2,"horizontal","left")},horizontalRight:function(){return this.getPosition(2,"horizontal","right")}},watch:{pattern:function(t,n){console.log(JSON.stringify(t)),this.styles=Object.assign({},this.styles,t)}},created:function(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern)},methods:{_onClick:function(){this.isShow=!this.isShow},open:function(){this.isShow=!0},close:function(){this.isShow=!1},_onItemClick:function(t,n){this.$emit("trigger",{index:t,item:n})},getPosition:function(t,n,i){return 0===t?this.horizontal===n&&this.vertical===i:1===t?this.direction===n&&this.vertical===i:2===t?this.direction===n&&this.horizontal===i:this.isShow&&this.direction===n?this.contentWidth:this.contentWidthMin}}};n.default=i}).call(this,i(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},976:
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/components/uni-fab/uni-fab.vue?vue&type=style&index=0&id=43e5df52&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */function(t,n,i){"use strict";i.r(n);var o=i(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-fab.vue?vue&type=style&index=0&id=43e5df52&scoped=true&lang=css& */977),e=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(n,t,function(){return o[t]})}(r);n.default=e.a},977:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/components/uni-fab/uni-fab.vue?vue&type=style&index=0&id=43e5df52&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,n,i){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/uni-fab/uni-fab.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-fab/uni-fab-create-component',
    {
        'components/uni-fab/uni-fab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(971))
        })
    },
    [['components/uni-fab/uni-fab-create-component']]
]);
