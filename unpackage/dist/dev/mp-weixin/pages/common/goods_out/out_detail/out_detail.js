(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/common/goods_out/out_detail/out_detail"],{170:
/*!********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/goods_out/out_detail/out_detail.vue ***!
  \********************************************************************************************************/
/*! no static exports found */function(t,e,o){"use strict";o.r(e);var s=o(/*! ./out_detail.vue?vue&type=template&id=5cb3eb0e& */171),r=o(/*! ./out_detail.vue?vue&type=script&lang=js& */173);for(var n in r)"default"!==n&&function(t){o.d(e,t,function(){return r[t]})}(n);o(/*! ./out_detail.vue?vue&type=style&index=0&lang=css& */175);var u=o(/*! ../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */12),c=Object(u.default)(r.default,s.render,s.staticRenderFns,!1,null,null,null);c.options.__file="Desktop/新建文件夹 (8)/wechat/pages/common/goods_out/out_detail/out_detail.vue",e.default=c.exports},171:
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/goods_out/out_detail/out_detail.vue?vue&type=template&id=5cb3eb0e& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,o){"use strict";o.r(e);var s=o(/*! -!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./out_detail.vue?vue&type=template&id=5cb3eb0e& */172);o.d(e,"render",function(){return s.render}),o.d(e,"staticRenderFns",function(){return s.staticRenderFns})},172:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/goods_out/out_detail/out_detail.vue?vue&type=template&id=5cb3eb0e& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,o){"use strict";o.r(e),o.d(e,"render",function(){return s}),o.d(e,"staticRenderFns",function(){return r});var s=function(){var t=this.$createElement;this._self._c},r=[];s._withStripped=!0},173:
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/goods_out/out_detail/out_detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */function(t,e,o){"use strict";o.r(e);var s=o(/*! -!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./out_detail.vue?vue&type=script&lang=js& */174),r=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);e.default=r.a},174:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/goods_out/out_detail/out_detail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,r,n,u,c=i(o(/*! @/utils/bmob.js */9)),a=i(o(/*! @/utils/common.js */20));function i(t){return t&&t.__esModule?t:{default:t}}var d={data:function(){return{stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,custom:null}},onLoad:function(){r=this,s=t.getStorageSync("uid"),this.products=t.getStorageSync("products");for(var e=0;e<this.products.length;e++)this.all_money=Number((this.products[e].total_money+this.all_money).toFixed(2));this.real_money=Number(this.all_money.toFixed(2))},onShow:function(){if(r.custom=t.getStorageSync("custom"),u=t.getStorageSync("shop")){r.shop_name=u.name;var e=c.default.Pointer("shops");n=e.set(u.objectId)}r.stock=t.getStorageSync("warehouse")?t.getStorageSync("warehouse")[0].stock:""},methods:{formSubmit:function(e){console.log(e),this.button_disabled=!0,t.showLoading({title:"上传中..."});for(var o=c.default.Pointer("stocks").set(r.stock?r.stock.objectId:""),i=new Array,d=[],l=0;l<this.products.length;l++){var m=Number(this.products[l].reserve)-this.products[l].num,f=c.default.Query("Bills"),p={},h=c.default.Pointer("_User").set(s),g=c.default.Pointer("_User").set(t.getStorageSync("masterId")),_=c.default.Pointer("Goods").set(this.products[l].objectId);if(t.getStorageSync("custom")){var y=c.default.Pointer("customs").set(t.getStorageSync("custom").objectId);f.set("custom",y)}f.set("goodsName",this.products[l].goodsName),f.set("retailPrice",this.products[l].modify_retailPrice.toString()),f.set("num",this.products[l].num),f.set("total_money",this.products[l].total_money),f.set("goodsId",_),f.set("userId",h),f.set("type",-1),f.set("operater",g),f.set("stock",o),u&&(f.set("shop",n),a.default.record_shopOut(u.objectId,u.have_out+this.products[l].num));var b={};p.goodsName=this.products[l].goodsName,p.modify_retailPrice=this.products[l].modify_retailPrice.toString(),p.retailPrice=this.products[l].retailPrice,p.total_money=this.products[l].total_money,b.costPrice=this.products[l].costPrice,b.retailPrice=this.products[l].retailPrice,b.objectId=this.products[l].objectId,b.reserve=m,p.goodsId=b,p.num=this.products[l].num,p.type=-1,i.push(f),d.push(p),a.default.record_staffOut(this.products[l].num)}c.default.Query("Bills").saveAll(i).then(function(i){for(var l=[],m=0;m<i.length;m++)l.push(i[m].success.objectId);var f=c.default.Pointer("_User").set(s),p=t.getStorageSync("masterId"),h=c.default.Pointer("_User").set(p),g=c.default.Query("order_opreations");if(g.set("detail",d),g.set("bills",l),g.set("beizhu",e.detail.value.input_beizhu),g.set("type",-1),g.set("opreater",h),g.set("stock",o),g.set("master",f),g.set("goodsName",r.products[0].goodsName),g.set("real_money",Number(r.real_money)),g.set("debt",r.all_money-Number(r.real_money)),u&&g.set("shop",n),r.custom){var _=c.default.Pointer("customs").set(r.custom.objectId);if(g.set("custom",_),r.all_money-Number(r.real_money)>0)c.default.Query("customs").get(r.custom.objectId).then(function(t){var e=null==t.debt?0:t.debt;e+=r.all_money-Number(r.real_money),console.log(e),c.default.Query("customs").get(r.custom.objectId).then(function(t){t.set("debt",e),t.save()})})}g.set("all_money",r.all_money),g.save().then(function(e){console.log("添加操作历史记录成功",e),t.hideLoading(),t.removeStorageSync("customs"),t.showToast({title:"产品出库成功",icon:"success",success:function(){for(var o=function(t){var e=Number(r.products[t].reserve)-r.products[t].num;c.default.Query("Goods").get(r.products[t].objectId).then(function(o){a.default.log(r.products[t].goodsName+"出库了"+r.products[t].num+"件，已经低于预警数量"+(r.products[t].warning_num?r.products[t].warning_num:0),-2,r.products[t].objectId),o.set("reserve",e),o.set("stocktype",e>r.products[t].warning_num?1:0),o.save()}).catch(function(t){console.log(t)})},s=0;s<r.products.length;s++)o(s);r.button_disabled=!1,t.setStorageSync("is_option",!0),t.removeStorageSync("warehouse"),setTimeout(function(){a.default.log(t.getStorageSync("user").nickName+"出库了'"+r.products[0].goodsName+"'等"+r.products.length+"商品",-1,e.objectId),t.navigateBack({delta:2})},500)}})})},function(t){console.log("异常处理")})}}};e.default=d}).call(this,o(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},175:
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/goods_out/out_detail/out_detail.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */function(t,e,o){"use strict";o.r(e);var s=o(/*! -!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./out_detail.vue?vue&type=style&index=0&lang=css& */176),r=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);e.default=r.a},176:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/common/goods_out/out_detail/out_detail.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,o){}},[[169,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/common/goods_out/out_detail/out_detail.js.map