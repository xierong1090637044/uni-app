(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/common/good_count/count_detail/count_detail"],{330:
/*!*************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/good_count/count_detail/count_detail.vue ***!
  \*************************************************************************************************************/
/*! no static exports found */function(t,e,o){"use strict";o.r(e);var n=o(/*! ./count_detail.vue?vue&type=template&id=34faa1d8& */331),r=o(/*! ./count_detail.vue?vue&type=script&lang=js& */333);for(var s in r)"default"!==s&&function(t){o.d(e,t,function(){return r[t]})}(s);o(/*! ./count_detail.vue?vue&type=style&index=0&lang=css& */335);var u=o(/*! ../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */12),i=Object(u.default)(r.default,n.render,n.staticRenderFns,!1,null,null,null);i.options.__file="Desktop/新建文件夹 (8)/wechat/pages/common/good_count/count_detail/count_detail.vue",e.default=i.exports},331:
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/good_count/count_detail/count_detail.vue?vue&type=template&id=34faa1d8& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,o){"use strict";o.r(e);var n=o(/*! -!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./count_detail.vue?vue&type=template&id=34faa1d8& */332);o.d(e,"render",function(){return n.render}),o.d(e,"staticRenderFns",function(){return n.staticRenderFns})},332:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/good_count/count_detail/count_detail.vue?vue&type=template&id=34faa1d8& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,o){"use strict";o.r(e),o.d(e,"render",function(){return n}),o.d(e,"staticRenderFns",function(){return r});var n=function(){var t=this.$createElement;this._self._c},r=[];n._withStripped=!0},333:
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/good_count/count_detail/count_detail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */function(t,e,o){"use strict";o.r(e);var n=o(/*! -!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./count_detail.vue?vue&type=script&lang=js& */334),r=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e.default=r.a},334:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/good_count/count_detail/count_detail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,r,s=i(o(/*! @/utils/bmob.js */9)),u=i(o(/*! @/utils/common.js */20));function i(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,producer:null}},onLoad:function(){r=this,n=t.getStorageSync("uid"),this.products=t.getStorageSync("products")},methods:{formSubmit:function(e){console.log(e),this.button_disabled=!0,t.showLoading({title:"上传中..."});for(var o=new Array,i=[],c=0;c<this.products.length;c++){var d=s.default.Query("Bills"),a={},l=s.default.Pointer("_User").set(n),f=s.default.Pointer("Goods").set(this.products[c].objectId);d.set("goodsName",this.products[c].goodsName),d.set("retailPrice",this.products[c].modify_retailPrice.toString()),d.set("num",Number(this.products[c].num)),d.set("reserve",this.products[c].reserve),d.set("now_reserve",this.products[c].num.toString()),d.set("total_money",this.products[c].total_money),d.set("goodsId",f),d.set("userId",l),d.set("type",3);a.goodsName=this.products[c].goodsName,a.reserve=this.products[c].reserve,a.now_reserve=this.products[c].num.toString(),o.push(d),i.push(a)}s.default.Query("Bills").saveAll(o).then(function(o){var c=s.default.Pointer("_User").set(n),d=t.getStorageSync("masterId"),a=s.default.Pointer("_User").set(d),l=s.default.Query("order_opreations");l.set("beizhu",e.detail.value.input_beizhu),l.set("detail",i),l.set("type",3),l.set("opreater",a),l.set("master",c),l.set("goodsName",r.products[0].goodsName),l.save().then(function(e){console.log("添加操作历史记录成功",e),t.hideLoading(),t.showToast({title:"产品盘点成功",icon:"success",success:function(){for(var o=function(t){s.default.Query("Goods").get(r.products[t].objectId).then(function(e){e.set("reserve",Number(r.products[t].num)),e.set("stocktype",Number(r.products[t].num)>r.products[t].warning_num?1:0),e.save()}).catch(function(t){console.log(t)})},n=0;n<r.products.length;n++)o(n);r.button_disabled=!1,t.setStorageSync("is_option",!0),setTimeout(function(){u.default.log(t.getStorageSync("user").nickName+"盘点了'"+r.products[0].goodsName+"'等"+r.products.length+"商品",3,e.objectId),t.navigateBack({delta:2})},500)}})})},function(t){console.log("异常处理")})}}};e.default=c}).call(this,o(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},335:
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/good_count/count_detail/count_detail.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */function(t,e,o){"use strict";o.r(e);var n=o(/*! -!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./count_detail.vue?vue&type=style&index=0&lang=css& */336),r=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e.default=r.a},336:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/good_count/count_detail/count_detail.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,o){}},[[329,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/common/good_count/count_detail/count_detail.js.map