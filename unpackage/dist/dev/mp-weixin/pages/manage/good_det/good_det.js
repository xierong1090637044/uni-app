(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/manage/good_det/good_det"],{100:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/manage/good_det/good_det.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(o,e,t){"use strict";(function(o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=c(t(/*! @/utils/bmob.js */13)),r=c(t(/*! @/utils/print.js */673));function c(o){return o&&o.__esModule?o:{default:o}}var s,u,d={components:{faIcon:function(){return t.e(/*! import() | components/kilvn-fa-icon/fa-icon */"components/kilvn-fa-icon/fa-icon").then(t.bind(null,/*! @/components/kilvn-fa-icon/fa-icon.vue */449))},tkiQrcode:function(){return Promise.all(/*! import() | components/tki-qrcode/tki-qrcode */[t.e("common/vendor"),t.e("components/tki-qrcode/tki-qrcode")]).then(t.bind(null,/*! @/components/tki-qrcode/tki-qrcode.vue */519))},tkiBarcode:function(){return Promise.all(/*! import() | components/tki-barcode/tki-barcode */[t.e("common/vendor"),t.e("components/tki-barcode/tki-barcode")]).then(t.bind(null,/*! @/components/tki-barcode/tki-barcode.vue */527))},uniFab:function(){return t.e(/*! import() | components/uni-fab/uni-fab */"components/uni-fab/uni-fab").then(t.bind(null,/*! @/components/uni-fab/uni-fab.vue */570))}},data:function(){return{select_qrcode:"",get_reserve_checked:!0,product:{},is_show:!1,bar_code_show:!1}},onLoad:function(e){var t=this;s=this;var r=[];if(u=o.getStorageSync("uid"),console.log(e),e.id){var c=n.default.Query("Goods");"false"==e.type?c.equalTo("objectId","==",e.id):c.equalTo("productCode","==",e.id),c.equalTo("userId","==",u),c.find().then(function(o){console.log(o);var e=o[0],n=0;c.equalTo("userId","==",u),c.equalTo("status","!=",-1),c.include("stocks"),c.equalTo("goodsName","==",e.goodsName),c.find().then(function(o){var c=!0,s=!1,u=void 0;try{for(var d,a=o[Symbol.iterator]();!(c=(d=a.next()).done);c=!0){var i=d.value,l={};l.stock_name=i.stocks.stock_name,l.reserve=i.reserve,l.warning_num=i.warning_num,l.bad_num=i.bad_num,l.good_id=i.objectId,l.accessory=i.accessory?i.accessory:"",l.productCode=i.productCode?i.productCode:i.objectId,i.stocks=l,n+=i.reserve,r.push(i.stocks)}}catch(o){s=!0,u=o}finally{try{c||null==a.return||a.return()}finally{if(s)throw u}}t.product=e,t.product.all_reserve=n,t.product.stocks=r,console.log(t.product)})})}else{var d=o.getStorageSync("now_product"),a=0,i=n.default.Query("Goods");i.equalTo("userId","==",u),i.equalTo("status","!=",-1),i.include("stocks"),i.equalTo("goodsName","==",d.goodsName),i.find().then(function(e){var n=!0,c=!1,s=void 0;try{for(var u,d=e[Symbol.iterator]();!(n=(u=d.next()).done);n=!0){var i=u.value,l={};l.stock_name=i.stocks.stock_name,l.reserve=i.reserve,l.warning_num=i.warning_num,l.bad_num=i.bad_num,l.good_id=i.objectId,l.accessory=i.accessory?i.accessory:"",l.productCode=i.productCode?i.productCode:i.objectId,i.stocks=l,a+=i.reserve,r.push(i.stocks)}}catch(o){c=!0,s=o}finally{try{n||null==d.return||d.return()}finally{if(c)throw s}}t.product=o.getStorageSync("now_product"),t.product.all_reserve=a,t.product.stocks=r,console.log(t.product)})}},methods:{change_state:function(o){s.get_reserve_checked=o.detail.value},print_info:function(o){r.default.print_goodDet(o)},modify:function(e){var t=o.getStorageSync("now_product");t.objectId=e.good_id,t.stocks=e,o.setStorageSync("now_product",t),o.navigateTo({url:"../good_add/good_add"})},trigger:function(e){this.content[e.index].active=!e.item.active,0==e.index?(o.setStorageSync("now_product",this.product),o.navigateTo({url:"../good_add/good_add"})):s.delete()},showcode_option:function(){o.showActionSheet({itemList:["二维码","条形码"],success:function(o){console.log("选中了第"+(o.tapIndex+1)+"个按钮"),0==o.tapIndex?s.is_show=!0:s.bar_code_show=!0},fail:function(o){console.log(o.errMsg)}})},qrR:function(o){this.src=o},bcR:function(o){this.src=o},saveBccode:function(){this.$refs.barcode._saveCode()},saveQrcode:function(){this.$refs.qrcode._saveCode()},delete_good:function(e,t,r){o.showModal({title:"提示",content:"是否删除该商品",success:function(c){if(c.confirm){var u=n.default.Query("Goods");u.set("id",e),u.set("status",-1),u.save().then(function(e){if(t)o.navigateTo({url:"../goods/goods"}),setTimeout(function(){o.showToast({title:"删除成功"})},1e3);else if(s.product.stocks.length>1){var c=s.product.stocks[r+1].good_id;n.default.Query("Goods").get(c).then(function(e){console.log(e),e.set("accessory",!1),e.save(),o.navigateTo({url:"../goods/goods"}),setTimeout(function(){o.showToast({title:"删除成功"})},1e3)}).catch(function(o){console.log(o)})}else o.navigateTo({url:"../goods/goods"}),setTimeout(function(){o.showToast({title:"删除成功"})},1e3)}).catch(function(o){console.log(o)})}}})}}};e.default=d}).call(this,t(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},101:
/*!***************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/manage/good_det/good_det.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */function(o,e,t){"use strict";t.r(e);var n=t(/*! -!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./good_det.vue?vue&type=style&index=0&lang=css& */102),r=t.n(n);for(var c in n)"default"!==c&&function(o){t.d(e,o,function(){return n[o]})}(c);e.default=r.a},102:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/manage/good_det/good_det.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(o,e,t){},95:
/*!***************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/main.js?{"page":"pages%2Fmanage%2Fgood_det%2Fgood_det"} ***!
  \***************************************************************************************************************/
/*! no static exports found */function(o,e,t){"use strict";(function(o){t(/*! uni-pages */4),t(/*! @dcloudio/uni-stat */5);e(t(/*! vue */2));function e(o){return o&&o.__esModule?o:{default:o}}o(e(t(/*! ./pages/manage/good_det/good_det.vue */96)).default)}).call(this,t(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).createPage)},96:
/*!******************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/manage/good_det/good_det.vue ***!
  \******************************************************************************************/
/*! no static exports found */function(o,e,t){"use strict";t.r(e);var n=t(/*! ./good_det.vue?vue&type=template&id=786f48dc& */97),r=t(/*! ./good_det.vue?vue&type=script&lang=js& */99);for(var c in r)"default"!==c&&function(o){t.d(e,o,function(){return r[o]})}(c);t(/*! ./good_det.vue?vue&type=style&index=0&lang=css& */101);var s=t(/*! ../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */16),u=Object(s.default)(r.default,n.render,n.staticRenderFns,!1,null,null,null);u.options.__file="Desktop/新建文件夹 (8)/wechat/pages/manage/good_det/good_det.vue",e.default=u.exports},97:
/*!*************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/manage/good_det/good_det.vue?vue&type=template&id=786f48dc& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(o,e,t){"use strict";t.r(e);var n=t(/*! -!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./good_det.vue?vue&type=template&id=786f48dc& */98);t.d(e,"render",function(){return n.render}),t.d(e,"staticRenderFns",function(){return n.staticRenderFns})},98:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/manage/good_det/good_det.vue?vue&type=template&id=786f48dc& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(o,e,t){"use strict";t.r(e),t.d(e,"render",function(){return n}),t.d(e,"staticRenderFns",function(){return r});var n=function(){var o=this,e=o.$createElement;o._self._c;o._isMounted||(o.e0=function(e){o.is_show=!0,o.select_qrcode=o.item.productCode},o.e1=function(e){o.is_show=!1})},r=[];n._withStripped=!0},99:
/*!*******************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/新建文件夹 (8)/wechat/pages/manage/good_det/good_det.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */function(o,e,t){"use strict";t.r(e);var n=t(/*! -!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../Downloads/HBuilderX.1.9.9.20190522.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./good_det.vue?vue&type=script&lang=js& */100),r=t.n(n);for(var c in n)"default"!==c&&function(o){t.d(e,o,function(){return n[o]})}(c);e.default=r.a}},[[95,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/manage/good_det/good_det.js.map