(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/common/good_confrim/good_enter/good_enter"],{91:
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/main.js?{"page":"pages%2Fcommon%2Fgood_confrim%2Fgood_enter%2Fgood_enter"} ***!
  \******************************************************************************************************************************************/
/*! no static exports found */function(e,t,o){"use strict";(function(e){o(/*! uni-pages */4),o(/*! @dcloudio/uni-stat */5);t(o(/*! vue */2));function t(e){return e&&e.__esModule?e:{default:e}}e(t(o(/*! ./pages/common/good_confrim/good_enter/good_enter.vue */92)).default)}).call(this,o(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).createPage)},92:
/*!*******************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/pages/common/good_confrim/good_enter/good_enter.vue ***!
  \*******************************************************************************************************************/
/*! no static exports found */function(e,t,o){"use strict";o.r(t);var r=o(/*! ./good_enter.vue?vue&type=template&id=7ba909b2& */93),n=o(/*! ./good_enter.vue?vue&type=script&lang=js& */95);for(var s in n)"default"!==s&&function(e){o.d(t,e,function(){return n[e]})}(s);o(/*! ./good_enter.vue?vue&type=style&index=0&lang=css& */98);var a=o(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */69),u=Object(a.default)(n.default,r.render,r.staticRenderFns,!1,null,null,null);u.options.__file="C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/pages/common/good_confrim/good_enter/good_enter.vue",t.default=u.exports},93:
/*!**************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/pages/common/good_confrim/good_enter/good_enter.vue?vue&type=template&id=7ba909b2& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(e,t,o){"use strict";o.r(t);var r=o(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./good_enter.vue?vue&type=template&id=7ba909b2& */94);o.d(t,"render",function(){return r.render}),o.d(t,"staticRenderFns",function(){return r.staticRenderFns})},94:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/pages/common/good_confrim/good_enter/good_enter.vue?vue&type=template&id=7ba909b2& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(e,t,o){"use strict";o.r(t),o.d(t,"render",function(){return r}),o.d(t,"staticRenderFns",function(){return n});var r=function(){var e=this.$createElement;this._self._c},n=[];r._withStripped=!0},95:
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/pages/common/good_confrim/good_enter/good_enter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */function(e,t,o){"use strict";o.r(t);var r=o(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./good_enter.vue?vue&type=script&lang=js& */96),n=o.n(r);for(var s in r)"default"!==s&&function(e){o.d(t,e,function(){return r[e]})}(s);t.default=n.a},96:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/pages/common/good_confrim/good_enter/good_enter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n,s,a,u=l(o(/*! hydrogen-js-sdk */13)),c=l(o(/*! @/utils/common.js */77)),i=l(o(/*! @/utils/goods.js */97)),d=l(o(/*! @/utils/send_temp.js */88));function l(e){return e&&e.__esModule?e:{default:e}}var m={data:function(){return{stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,really_total_money:0,producer:null,outType:"",pickerTypes:[{desc:"自提",type:1},{desc:"快递",type:2},{desc:"物流",type:3},{desc:"送货上门",type:4}],expressNum:""}},onLoad:function(){n=this,r=e.getStorageSync("uid"),this.products=e.getStorageSync("products");for(var t=0;t<this.products.length;t++)this.all_money=Number((this.products[t].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[t].really_total_money+this.really_total_money).toFixed(2));this.real_money=Number(this.all_money.toFixed(2))},onShow:function(){if(n.producer=e.getStorageSync("producer"),a=e.getStorageSync("shop")){n.shop_name=a.name;var t=u.default.Pointer("shops");s=t.set(a.objectId)}n.stock=e.getStorageSync("warehouse")?e.getStorageSync("warehouse")[0].stock:""},methods:{select_outType:function(e){n.outType=n.pickerTypes[e.detail.value],2==n.outType.type&&3==n.outType.type||(n.expressNum="")},formSubmit:function(t){console.log(t);var o=t.detail.formId,l=Number(t.detail.target.dataset.type);this.button_disabled=!0,e.showLoading({title:"上传中..."});for(var m=u.default.Pointer("stocks").set(n.stock?n.stock.objectId:""),f=new Array,p=[],y=0;y<this.products.length;y++){var h=Number(this.products[y].reserve)+this.products[y].num,_={},g=u.default.Query("Bills"),v=u.default.Pointer("_User").set(r),b=u.default.Pointer("Goods").set(this.products[y].objectId),S=e.getStorageSync("masterId"),k=u.default.Pointer("_User").set(S);g.set("goodsName",this.products[y].goodsName),g.set("retailPrice",this.products[y].modify_retailPrice.toString()),g.set("num",Number(this.products[y].num)),g.set("total_money",this.products[y].total_money),g.set("really_total_money",this.products[y].really_total_money),g.set("goodsId",b),g.set("userId",v),g.set("opreater",k),g.set("type",1),g.set("extra_type",l),a&&g.set("shop",s),g.set("stock",m);var w={};_.goodsName=this.products[y].goodsName,_.modify_retailPrice=this.products[y].modify_retailPrice.toString(),_.retailPrice=this.products[y].retailPrice,_.total_money=this.products[y].total_money,w.costPrice=this.products[y].costPrice,w.retailPrice=this.products[y].retailPrice,w.objectId=this.products[y].objectId,w.reserve=h,_.goodsId=w,_.num=this.products[y].num,_.type=1,f.push(g),p.push(_)}u.default.Query("Bills").saveAll(f).then(function(s){console.log("批量新增单据成功",s);for(var a=[],f=0;f<s.length;f++)a.push(s[f].success.objectId);var y=u.default.Pointer("_User").set(r),h=e.getStorageSync("masterId"),_=u.default.Pointer("_User").set(h),g=u.default.Query("order_opreations");if(g.set("beizhu",t.detail.value.input_beizhu),g.set("detail",p),g.set("type",1),g.set("extra_type",l),g.set("bills",a),g.set("opreater",_),g.set("master",y),g.set("stock",m),g.set("goodsName",n.products[0].goodsName),g.set("real_money",Number(n.real_money)),g.set("debt",n.all_money-Number(n.real_money)),n.producer){var v=u.default.Pointer("producers").set(n.producer.objectId);if(g.set("producer",v),n.all_money-Number(n.real_money)>0)u.default.Query("producers").get(n.producer.objectId).then(function(e){var t=null==e.debt?0:e.debt;t+=n.all_money-Number(n.real_money),console.log(t),u.default.Query("producers").get(n.producer.objectId).then(function(e){e.set("debt",t),e.save()})})}n.outType&&(g.set("typeDesc",n.outType.desc),g.set("expressNum",n.expressNum)),g.set("all_money",n.all_money),g.save().then(function(r){console.log("添加操作历史记录成功",r),e.hideLoading(),e.showToast({title:"产品入库成功",icon:"success",duration:1e3,complete:function(){for(var s=function(e){var t=0;u.default.Query("Goods").get(n.products[e].objectId).then(function(o){if(n.products[e].selectd_model){var r=!0,s=!1,a=void 0;try{for(var u,c=JSON.parse(n.products[e].selectd_model)[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var i=u.value,d=!0,l=!1,m=void 0;try{for(var f,p=n.products[e].models[Symbol.iterator]();!(d=(f=p.next()).done);d=!0){var y=f.value;t+=Number(y.reserve),y.id==JSON.parse(i).id&&(y.reserve=Number(y.reserve)+Number(n.products[e].num))}}catch(e){l=!0,m=e}finally{try{d||null==p.return||p.return()}finally{if(l)throw m}}}}catch(e){s=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(s)throw a}}t+=Number(n.products[e].num),o.set("models",n.products[e].models)}else t=Number(n.products[e].reserve)+Number(n.products[e].num);o.set("reserve",t),o.set("stocktype",t>n.products[e].warning_num?1:0),o.save()}).catch(function(e){console.log(e)})},a=0;a<n.products.length;a++)s(a);setTimeout(function(){e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),c.default.log(e.getStorageSync("user").nickName+"入库了'"+n.products[0].goodsName+"'等"+n.products.length+"商品",1,r.objectId);var s={frist:e.getStorageSync("user").nickName+"入库了'"+n.products[0].goodsName+"'等"+n.products.length+"商品",data1:r.createdAt,data2:n.stock?n.stock.stock_name:"未填写",remark:t.detail.value.input_beizhu?t.detail.value.input_beizhu:"未填写",url:"https://www.jimuzhou.com/h5/pages/report/EnteringHistory/detail/detail?id="+r.objectId};d.default.send_in(s);var a={keyword1:{value:n.products[0].goodsName+"'等",color:"#173177"},keyword2:{value:t.detail.value.input_beizhu?t.detail.value.input_beizhu:"未填写"},keyword3:{value:r.createdAt},keyword4:{value:e.getStorageSync("user").nickName}};a.form_Id=o,a.id=r.objectId,d.default.send_in_mini(a)},500),n.can_addGoods().then(function(t){if(t){var o=e.getStorageSync("products"),r=e.getStorageSync("warehouse"),s=!0,a=!1,u=void 0;try{for(var c,d=o[Symbol.iterator]();!(s=(c=d.next()).done);s=!0){var l=c.value;l.reserve=l.num,i.default.upload_good_withNoCan(l,r[0].stock).then(function(t){console.log(t),t[0]?e.showToast({title:"添加成功",icon:"none"}):e.showToast({title:t[1],icon:"none"})})}}catch(e){a=!0,u=e}finally{try{s||null==d.return||d.return()}finally{if(a)throw u}}n.button_disabled=!1,e.setStorageSync("is_option",!0),e.removeStorageSync("warehouse"),setTimeout(function(){e.navigateBack({delta:2})},1e3)}else n.button_disabled=!1,e.setStorageSync("is_option",!0),e.removeStorageSync("warehouse"),setTimeout(function(){e.navigateBack({delta:2})},1e3)})}})})},function(e){console.log("异常处理")})},can_addGoods:function(){return new Promise(function(t,o){var r=e.getStorageSync("products"),n=e.getStorageSync("warehouse");if(n){var s=!0,a=!1,u=void 0;try{for(var c,i=r[Symbol.iterator]();!(s=(c=i.next()).done);s=!0){var d=c.value;""==d.stocks.stock_name||null==d.stocks.stock_name||d.stocks.stock_name!=n[0].stock.stock_name?e.showModal({title:"'"+d.goodsName+"'没有关联到调出仓库",content:"是否将它关联到此仓库",showCancel:!0,success:function(e){console.log(e),e.confirm&&t(!0)},fail:function(){},complete:function(){t(!1)}}):t(!1)}}catch(e){a=!0,u=e}finally{try{s||null==i.return||i.return()}finally{if(a)throw u}}}else t(!1)})}}};t.default=m}).call(this,o(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},98:
/*!****************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/pages/common/good_confrim/good_enter/good_enter.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */function(e,t,o){"use strict";o.r(t);var r=o(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./good_enter.vue?vue&type=style&index=0&lang=css& */99),n=o.n(r);for(var s in r)"default"!==s&&function(e){o.d(t,e,function(){return r[e]})}(s);t.default=n.a},99:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/wechat/kcb_mobile/pages/common/good_confrim/good_enter/good_enter.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,o){}},[[91,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/common/good_confrim/good_enter/good_enter.js.map