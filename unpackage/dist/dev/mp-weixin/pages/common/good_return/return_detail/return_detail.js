(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/common/good_return/return_detail/return_detail"],{170:
/*!****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/good_return/return_detail/return_detail.vue ***!
  \****************************************************************************************************************/
/*! no static exports found */function(t,e,o){"use strict";o.r(e);var r=o(/*! ./return_detail.vue?vue&type=template&id=1f39f5c6& */171),n=o(/*! ./return_detail.vue?vue&type=script&lang=js& */173);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);o(/*! ./return_detail.vue?vue&type=style&index=0&lang=css& */175);var u=o(/*! ../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */12),i=Object(u.default)(n.default,r.render,r.staticRenderFns,!1,null,null,null);i.options.__file="Desktop/新建文件夹 (8)/wechat/pages/common/good_return/return_detail/return_detail.vue",e.default=i.exports},171:
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/good_return/return_detail/return_detail.vue?vue&type=template&id=1f39f5c6& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,o){"use strict";o.r(e);var r=o(/*! -!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./return_detail.vue?vue&type=template&id=1f39f5c6& */172);o.d(e,"render",function(){return r.render}),o.d(e,"staticRenderFns",function(){return r.staticRenderFns})},172:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/good_return/return_detail/return_detail.vue?vue&type=template&id=1f39f5c6& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,o){"use strict";o.r(e),o.d(e,"render",function(){return r}),o.d(e,"staticRenderFns",function(){return n});var r=function(){var t=this.$createElement;this._self._c},n=[];r._withStripped=!0},173:
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/good_return/return_detail/return_detail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */function(t,e,o){"use strict";o.r(e);var r=o(/*! -!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./return_detail.vue?vue&type=script&lang=js& */174),n=o.n(r);for(var s in r)"default"!==s&&function(t){o.d(e,t,function(){return r[t]})}(s);e.default=n.a},174:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/good_return/return_detail/return_detail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,n,s,u,i=c(o(/*! @/utils/bmob.js */9)),a=c(o(/*! @/utils/common.js */19));function c(t){return t&&t.__esModule?t:{default:t}}var d={data:function(){return{shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,custom:null}},onLoad:function(){n=this,r=t.getStorageSync("uid"),this.products=t.getStorageSync("products");for(var e=0;e<this.products.length;e++)this.all_money=this.products[e].total_money+this.all_money},onShow:function(){if(n.custom=t.getStorageSync("custom"),u=t.getStorageSync("shop")){n.shop_name=u.name;var e=i.default.Pointer("shops");s=e.set(u.objectId)}},methods:{formSubmit:function(e){console.log(e),this.button_disabled=!0,t.showLoading({title:"上传中..."});for(var o=new Array,c=[],d=0;d<this.products.length;d++){Number(this.products[d].reserve),this.products[d].num;var l=i.default.Query("Bills"),f={},m=i.default.Pointer("_User").set(r),p=i.default.Pointer("Goods").set(this.products[d].objectId);l.set("goodsName",this.products[d].goodsName),l.set("retailPrice",this.products[d].modify_retailPrice.toString()),l.set("num",this.products[d].num),l.set("total_money",this.products[d].total_money),l.set("goodsId",p),l.set("userId",m),l.set("type",2);var h={};f.goodsName=this.products[d].goodsName,f.modify_retailPrice=this.products[d].modify_retailPrice.toString(),f.retailPrice=this.products[d].retailPrice,f.total_money=this.products[d].total_money,h.costPrice=this.products[d].costPrice,h.retailPrice=this.products[d].retailPrice,f.goodsId=h,f.num=this.products[d].num,u&&l.set("shop",s),o.push(l),c.push(f)}i.default.Query("Bills").saveAll(o).then(function(o){var s=i.default.Pointer("_User").set(r),u=t.getStorageSync("masterId"),d=i.default.Pointer("_User").set(u),l=i.default.Query("order_opreations");if(l.set("beizhu",e.detail.value.input_beizhu),l.set("detail",c),l.set("type",2),l.set("opreater",d),l.set("master",s),l.set("goodsName",n.products[0].goodsName),l.set("real_money",Number(n.real_money)),l.set("debt",n.all_money-Number(n.real_money)),n.custom){var f=i.default.Pointer("customs").set(n.custom.objectId);l.set("custom",f)}l.set("all_money",n.all_money),l.save().then(function(e){console.log("添加操作历史记录成功",e),t.hideLoading(),t.removeStorageSync("customs"),t.showToast({title:"产品退货成功",icon:"success",success:function(){for(var o=function(t){var e=Number(n.products[t].reserve)+n.products[t].num;i.default.Query("Goods").get(n.products[t].objectId).then(function(o){o.set("reserve",e),o.set("stocktype",e>n.products[t].warning_num?1:0),o.save()}).catch(function(t){console.log(t)})},r=0;r<n.products.length;r++)o(r);n.button_disabled=!1,t.setStorageSync("is_option",!0),setTimeout(function(){a.default.log(t.getStorageSync("user").nickName+"处理了'"+n.products[0].goodsName+"'等"+n.products.length+"商品的退货",2,e.objectId),t.navigateBack({delta:2})},500)}})})},function(t){console.log("异常处理")})}}};e.default=d}).call(this,o(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},175:
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/good_return/return_detail/return_detail.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */function(t,e,o){"use strict";o.r(e);var r=o(/*! -!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./return_detail.vue?vue&type=style&index=0&lang=css& */176),n=o.n(r);for(var s in r)"default"!==s&&function(t){o.d(e,t,function(){return r[t]})}(s);e.default=n.a},176:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/good_return/return_detail/return_detail.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,o){}},[[169,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/common/good_return/return_detail/return_detail.js.map