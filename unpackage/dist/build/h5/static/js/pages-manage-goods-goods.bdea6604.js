(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-goods-goods"],{"1fff":function(t,e,i){var o=i("8e11");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("713eba4a",o,!0,{sourceMap:!1,shadowMode:!1})},"23b0":function(t,e,i){"use strict";i.r(e);var o=i("9ad5"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);e["default"]=n.a},"7ce5":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[t.loading?i("loading"):i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"display_flex good_option_view"},[i("v-uni-view",{staticClass:"good_option"},[i("v-uni-text",[t._v("创建时间")]),"createdAt"==t.checked_option?i("fa-icon",{attrs:{type:"check",size:"20",color:"#1d953f"}}):t._e()],1),i("v-uni-view",{staticClass:"good_option"},[i("v-uni-text",[t._v("名字")]),i("fa-icon",{attrs:{type:"check",size:"20",color:"#1d953f"}})],1),i("v-uni-view",{staticClass:"good_option"},[i("v-uni-text",[t._v("库存")]),i("fa-icon",{attrs:{type:"check",size:"20",color:"#1d953f"}})],1)],1),i("v-uni-scroll-view",{staticClass:"uni-product-list"},t._l(t.productList,function(e,o){return i("v-uni-view",{key:o,staticClass:"uni-product"},[i("v-uni-view",[e.goodsIcon?i("v-uni-image",{staticClass:"product_image",attrs:{src:e.goodsIcon,mode:"widthFix","lazy-load":"true"}}):i("v-uni-image",{staticClass:"product_image",attrs:{src:"/static/goods-default.png",mode:"widthFix","lazy-load":"true"}})],1),i("v-uni-view",{staticStyle:{"margin-left":"20rpx",width:"100%","line-height":"40rpx"},on:{click:function(i){i=t.$handleEvent(i),t.goDetail(e)}}},[i("v-uni-view",{staticClass:"product_name",staticStyle:{"font-size":"30rpx"}},[t._v(t._s(e.goodsName))]),i("v-uni-view",{staticClass:"product_reserve"},[t._v("库存数量:"),i("v-uni-text",{staticClass:"text_notice"},[t._v(t._s(e.reserve))])],1),i("v-uni-view",{staticClass:"product_reserve"},[t._v("创建时间:"),i("v-uni-text",{staticClass:"text_notice"},[t._v(t._s(e.createdAt))])],1)],1),i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#426ab3"}})],1)}),1)],1)],1)},n=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return n})},"8e11":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".text_notice[data-v-3b98e5cf]{margin-left:%?6?%}.content[data-v-3b98e5cf]{height:100%;overflow:hidden}.uni-product-list[data-v-3b98e5cf]{padding:0 %?10?%;width:-webkit-calc(100% - %?20?%);width:calc(100% - %?20?%)}.uni-product[data-v-3b98e5cf]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?10?% 0;border-bottom:1px solid#ddd;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.product_image[data-v-3b98e5cf]{width:%?80?%;height:%?80?%}.product_name[data-v-3b98e5cf]{font-weight:700;color:#333}.product_reserve[data-v-3b98e5cf]{color:#6c757d;font-size:%?24?%;font-weight:700}",""])},"9ad5":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,n,a=r(i("0909")),c=r(i("921a")),s=r(i("1809")),d=r(i("ad7b")),u=r(i("8577"));function r(t){return t&&t.__esModule?t:{default:t}}var l={components:{loading:c.default,uniNavBar:s.default,faIcon:a.default,uniIcon:d.default},data:function(){return{loading:!0,productList:null,checked_option:"createdAt"}},onLoad:function(){n=this,o=uni.getStorageSync("uid")},onShow:function(){n.get_productList()},onUnload:function(){uni.removeStorageSync("now_product")},methods:{goDetail:function(t){console.log(t),uni.setStorageSync("now_product",t),uni.navigateTo({url:"../good_det/good_det"})},goAdd:function(){uni.navigateTo({url:"../good_add/good_add"})},get_productList:function(){var t=this,e=u.default.Query("Goods");e.equalTo("userId","==",o),e.limit(500),e.order("-"+n.checked_option),e.include("userId"),e.include("goodsClass"),e.find().then(function(e){t.productList=e,t.loading=!1})}}};e.default=l},a0a2:function(t,e,i){"use strict";var o=i("1fff"),n=i.n(o);n.a},b73f:function(t,e,i){"use strict";i.r(e);var o=i("7ce5"),n=i("23b0");for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);i("a0a2");var c=i("2877"),s=Object(c["a"])(n["default"],o["a"],o["b"],!1,null,"3b98e5cf",null);e["default"]=s.exports}}]);