(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-goods-goods"],{"0b6d":function(e,t,n){"use strict";var o={"uni-nav-bar":n("96bd").default,"uni-pagination":n("0d6a").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"content"},[n("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"新增",shadow:!1},on:{"click-left":function(t){arguments[0]=t=e.$handleEvent(t),e.shaixuan.apply(void 0,arguments)},"click-right":function(t){arguments[0]=t=e.$handleEvent(t),e.goto_add.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"input-view display_flex"},[n("fa-icon",{attrs:{type:"search",size:"16",color:"#999"}}),n("v-uni-input",{staticClass:"input",attrs:{"confirm-type":"search",type:"text",placeholder:"请输入名字 含量 存放位置",value:e.search_text},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.input_confirm.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.input_confirm.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"display_flex good_option_view"},[n("v-uni-view",{staticClass:"good_option",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectd("goodsClass")}}},[n("v-uni-view",{staticClass:"good_optionText"},[e._v(e._s(e.headerSelection.goodsClass.class_text||"分类"))]),n("fa-icon",{attrs:{type:"angle-down",size:"18",color:"#999"}})],1),n("v-uni-view",{staticClass:"good_option",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectd("stocks")}}},[n("v-uni-view",{staticClass:"good_optionText"},[e._v(e._s(e.headerSelection.stocks.stock_name||"店仓"))]),n("fa-icon",{attrs:{type:"angle-down",size:"18",color:"#999"}})],1),n("v-uni-view",{staticClass:"good_option",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectd("order")}}},[n("v-uni-view",{staticClass:"good_optionText"},[e._v(e._s(e.headerSelection.order.desc||"排序"))]),n("fa-icon",{attrs:{type:"angle-down",size:"18",color:"#999"}})],1),n("v-uni-view",{staticClass:"good_option",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.option_reset.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"good_optionText"},[e._v("重置")]),n("fa-icon",{attrs:{type:"repeat",size:"16",color:"#999"}})],1)],1),n("v-uni-scroll-view",{staticClass:"uni-product-list",attrs:{"scroll-y":!0}},[e.productList&&e.productList.length>0?n("v-uni-view",e._l(e.productList,(function(t,o){return n("v-uni-view",{key:o,staticClass:"uni-product display_flex"},[t.goodsIcon?n("v-uni-image",{staticClass:"product_image",attrs:{src:t.goodsIcon+"!upyun520//fwfh/200x200",mode:"aspectFit"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.priviewImg(t.goodsIcon)}}}):n("v-uni-image",{staticClass:"product_image",attrs:{src:"/static/goods-default.png",mode:"widthFix"}}),n("v-uni-view",{staticStyle:{margin:"0 20rpx",width:"80%"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.goDetail(t)}}},[n("v-uni-view",{staticClass:"product_reserve display_flex_bet",staticStyle:{width:"100%"}},[n("v-uni-view",{staticClass:"product_name",style:{color:0==t.stocktype?"#f30":""}},[e._v(e._s(t.goodsName))])],1),n("v-uni-view",{staticClass:"product_reserve display_flex_bet",staticStyle:{width:"100%"}},[n("v-uni-view",{staticStyle:{"font-size":"24rpx"}},[e._v("成本价:"),n("v-uni-text",{staticClass:"text_notice"},[e._v(e._s(t.costPrice||0))])],1),n("v-uni-view",{staticStyle:{"font-size":"24rpx"}},[e._v("零售价:"+e._s(t.retailPrice||0))])],1),n("v-uni-view",{staticClass:"product_reserve display_flex_bet",staticStyle:{width:"100%"}},[n("v-uni-view",{staticStyle:{"font-size":"24rpx"}},[e._v("库存数量:"),n("v-uni-text",{staticClass:"text_notice"},[e._v(e._s(t.reserve))])],1),t.warning_num?n("v-uni-view",{staticStyle:{"font-size":"24rpx"}},[e._v("预警数量:"),n("v-uni-text",{staticClass:"text_notice"},[e._v(e._s(t.warning_num))])],1):e._e()],1),t.packageContent&&t.packingUnit?n("v-uni-view",{staticClass:"product_reserve display_flex_bet",staticStyle:{width:"100%"}},[n("v-uni-view",{staticClass:"product_reserve"},[e._v("规格："+e._s(t.packageContent)+"*"+e._s(t.packingUnit))])],1):e._e()],1),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#426ab3"}})],1)})),1):n("v-uni-view",[n("v-uni-view",{staticStyle:{"margin-top":"100rpx",color:"#333","font-weight":"bold","text-align":"center","font-size":"36rpx"}},[e._v("没有商品啦!")])],1)],1),n("v-uni-view",{staticStyle:{padding:"6rpx 0","border-top":"1rpx solid#ddd"}},[n("uni-pagination",{attrs:{"show-icon":!0,total:"100000",current:e.page_num},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change_page(t)}}})],1)],1),e.showOptions?n("v-uni-view",{staticClass:"modal_background",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showOptions=!1}}},[n("v-uni-view",{staticClass:"showOptions"},[n("v-uni-view",{staticClass:"input_item1",staticStyle:{padding:"10rpx 30rpx 10rpx","border-bottom":"1rpx solid#F7F7F7"}},[n("v-uni-view",{staticClass:"display_flex"},[n("v-uni-view",[e._v("预警产品")]),n("v-uni-view",{staticStyle:{"margin-left":"30rpx"},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t)}}},[n("v-uni-switch",{attrs:{checked:e.stock_checked},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change_stocktatus.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"display_flex",staticStyle:{padding:"0 30rpx","margin-top":"10rpx"}},[n("v-uni-view",[e._v("失效产品")]),n("v-uni-view",{staticStyle:{"margin-left":"30rpx"},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t)}}},[n("v-uni-switch",{attrs:{checked:e.checked},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change_timestatus.apply(void 0,arguments)}}})],1)],1)],1),n("v-uni-view",{staticClass:"option_bottom"},[n("v-uni-view",{staticClass:"selection",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.option_reset.apply(void 0,arguments)}}},[e._v("重置")]),n("v-uni-view",{staticClass:"selection1",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.option_confrim.apply(void 0,arguments)}}},[e._v("确定")])],1)],1)],1):e._e(),e.showOrder?n("v-uni-view",{staticClass:"modal_backgroundTransparent",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showOrder=!1}}},[n("v-uni-view",{staticClass:"showOptionsTransparent"},e._l(e.orders,(function(t,o){return n("v-uni-view",{key:o,staticClass:"display_flex_bet",staticStyle:{padding:"16rpx 30rpx","border-bottom":"1rpx solid#F7F7F7"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.selectOrder(t)}}},[n("v-uni-view",{staticStyle:{color:"#333"}},[e._v(e._s(t.desc)+"("+e._s(t.notice)+")")]),t.checked?n("fa-icon",{attrs:{type:"check",size:"18",color:"#2ca879"}}):e._e()],1)})),1)],1):e._e()],1)},r=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}))},"0d6a":function(e,t,n){"use strict";n.r(t);var o=n("7097"),i=n("b582");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("afa2");var a,s=n("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"43876716",null,!1,o["a"],a);t["default"]=c.exports},"408a":function(e,t,n){var o=n("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=o(e))throw TypeError("Incorrect invocation");return+e}},5438:function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-a889419a]{background:#fff}.text_notice[data-v-a889419a]{margin-left:%?6?%}.content[data-v-a889419a]{height:100%;overflow:hidden}.uni-product-list[data-v-a889419a]{padding:0 %?10?%;width:calc(100% - %?20?%);height:calc(100vh - %?220?%)}.uni-product[data-v-a889419a]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?10?% 0;border-bottom:1px solid #ddd;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.product_image[data-v-a889419a]{width:%?100?%;height:%?100?%}.product_name[data-v-a889419a]{font-weight:700;color:#333;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.product_reserve[data-v-a889419a]{color:#6c757d;font-size:%?24?%;font-weight:700}.title[data-v-a889419a]{font-size:15px;line-height:20px;color:#333;padding:15px}.city[data-v-a889419a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;margin-left:8px;white-space:nowrap}.input-view[data-v-a889419a]{width:92%;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#e7e7e7;height:30px;border-radius:15px;padding:0 4%;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;margin:%?8?% 0;line-height:30px}.input-view .uni-icon[data-v-a889419a]{line-height:30px!important}.input-view .input[data-v-a889419a]{height:30px;line-height:30px;width:94%;padding:0 3%}body.?%PAGE?%[data-v-a889419a]{background:#fff}',""]),e.exports=t},"54f8":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");var o=n("dde1");function i(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(o["a"])(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r,a=!0,s=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return a=e.done,e},e:function(e){s=!0,r=e},f:function(){try{a||null==i["return"]||i["return"]()}finally{if(s)throw r}}}}},"69c2":function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,'.uni-pagination[data-v-43876716]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?40?%;position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-pagination__btns[data-v-43876716]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-pagination__btn[data-v-43876716]{width:%?120?%;height:%?60?%;padding:0 %?16?%;line-height:%?60?%;font-size:%?28?%;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;background-color:#f8f8f8;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-pagination__btn[data-v-43876716]:after{content:"";width:200%;height:200%;position:absolute;top:0;left:0;border:1px solid #c8c7cc;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?12?%}.uni-pagination__num[data-v-43876716]{height:%?60?%;line-height:%?60?%;font-size:%?28?%;color:#333;position:absolute;left:50%;top:0;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.uni-pagination__num-current[data-v-43876716]{color:#007aff}.uni-pagination--disabled[data-v-43876716]{opacity:.3}.uni-pagination--hover[data-v-43876716]{color:rgba(0,0,0,.6);background-color:#f1f1f1}',""]),e.exports=t},"6b78":function(e,t,n){"use strict";n.r(t);var o=n("ea0f"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},7097:function(e,t,n){"use strict";var o={"uni-icon":n("3628").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-pagination"},[n("v-uni-view",{staticClass:"uni-pagination__btns"},[n("v-uni-view",{class:["uni-pagination__btn",{"uni-pagination--disabled":1===e.currentIndex}],attrs:{"hover-class":1===e.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickLeft.apply(void 0,arguments)}}},[e.showIcon?[n("uni-icon",{attrs:{color:"#000",size:"20",type:"arrowleft"}})]:[e._v(e._s(e.prevText))]],2),n("v-uni-view",{class:["uni-pagination__btn",{"uni-pagination--disabled":e.currentIndex===e.maxPage}],attrs:{"hover-class":e.currentIndex===e.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickRight.apply(void 0,arguments)}}},[e.showIcon?[n("uni-icon",{attrs:{color:"#000",size:"20",type:"arrowright"}})]:[e._v(e._s(e.nextText))]],2)],1),n("v-uni-view",{staticClass:"uni-pagination__num"},[n("v-uni-input",{staticClass:"uni-pagination__num-current",staticStyle:{"text-align":"center","margin-top":"10rpx"},attrs:{value:e.currentIndex,type:"number"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.inputNumber.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.inputNumber.apply(void 0,arguments)}}})],1)],1)},r=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}))},"7fd5":function(e,t,n){"use strict";(function(t){var o=n("ee27");n("7db0"),n("a9e3"),n("d3b7"),n("25f0");var i=o(n("54f8")),r=o(n("9546"));e.exports={enterAddGoodNum:function(e,n){var o=this;return new Promise((function(a,s){for(var c=function(s){var c=0,u=r.default.Query("Goods");u.get(e[s].objectId).then((function(d){var l=d;if(e[s].selectd_model){var f,v=(0,i.default)(e[s].selected_model);try{for(v.s();!(f=v.n()).done;){var g,h=f.value,p=(0,i.default)(l.models);try{for(p.s();!(g=p.n()).done;){var m=g.value;m.id==h.id&&(m.reserve=Number(m.reserve)+Number(h.num)),delete m.num}}catch(b){p.e(b)}finally{p.f()}}}catch(b){v.e(b)}finally{v.f()}c=Number(l.reserve)+Number(e[s].num),u.set("models",l.models)}else c=Number(l.reserve)+Number(e[s].num);u.set("reserve",c),u.set("id",e[s].objectId),u.save().then((function(t){if(e[s].header){var i=r.default.Query("Goods");i.equalTo("header","==",e[s].header.objectId),i.equalTo("order","==",1),i.statTo("sum","reserve"),i.find().then((function(t){var i=t[0]._sumReserve,c=r.default.Query("Goods");c.set("reserve",i),"purchase"==n&&c.set("costPrice",e[s].modify_retailPrice),c.set("id",e[s].header.objectId),c.save().then((function(t){o.modifyStockType(e[s].header.objectId),s==e.length-1&&a(!0)}))}))}else o.modifyStockType(e[s].objectId),s==e.length-1&&a(!0)})).catch((function(e){t.log(e)}))}))},u=0;u<e.length;u++)c(u)}))},outRedGoodNum:function(e){var n=this;return new Promise((function(o,a){for(var s=function(a){var s=0,c=r.default.Query("Goods");c.get(e[a].objectId).then((function(u){var d=u;if(e[a].selectd_model){var l,f=(0,i.default)(e[a].selected_model);try{for(f.s();!(l=f.n()).done;){var v,g=l.value,h=(0,i.default)(d.models);try{for(h.s();!(v=h.n()).done;){var p=v.value;s+=Number(p.reserve),p.id==g.id&&(p.reserve=Number(p.reserve)-Number(g.num)),delete p.num}}catch(m){h.e(m)}finally{h.f()}}}catch(m){f.e(m)}finally{f.f()}s=Number(d.reserve)-Number(e[a].num),c.set("models",d.models)}else s=Number(d.reserve)-Number(e[a].num);c.set("reserve",s),c.set("id",e[a].objectId),c.save().then((function(t){if(e[a].header){var i=r.default.Query("Goods");i.equalTo("header","==",e[a].header.objectId),i.equalTo("order","==",1),i.statTo("sum","reserve"),i.find().then((function(t){var i=t[0]._sumReserve,s=r.default.Query("Goods");s.set("reserve",i),s.set("id",e[a].header.objectId),s.save().then((function(t){n.modifyStockType(e[a].header.objectId),a==e.length-1&&o(!0)}))}))}else n.modifyStockType(e[a].objectId),a==e.length-1&&o(!0)})).catch((function(e){t.log(e)}))}))},c=0;c<e.length;c++)s(c)}))},enterAddGoodNumNew:function(e,n){var o=this;return new Promise((function(a,s){for(var c=uni.getStorageSync("warehouse")?uni.getStorageSync("warehouse")[0].stock:"",u=uni.getStorageSync("uid"),d=function(s){var d=0,l=r.default.Query("Goods");l.equalTo("userId","==",u),l.equalTo("header","==",e[s].objectId),l.equalTo("stocks","==",c.objectId),l.find().then((function(u){if(0==u.length)o.upload_good_withNoCan(e[s],c,Number(e[s].num)).then((function(t){l.equalTo("header","==",e[s].objectId),l.equalTo("order","==",1),l.statTo("sum","reserve"),l.find().then((function(t){var o=t[0]._sumReserve;l.set("reserve",o),l.set("id",e[s].objectId),"purchase"==n&&l.set("costPrice",e[s].modify_retailPrice),l.save().then((function(t){s==e.length-1&&a(!0)}))}))}));else{var f=u[0],v=r.default.Query("Goods");if(e[s].selected_model){var g,h=(0,i.default)(e[s].selected_model);try{for(h.s();!(g=h.n()).done;){var p,m=g.value,b=(0,i.default)(f.models);try{for(b.s();!(p=b.n()).done;){var y=p.value;y.id==m.id&&(y.reserve=Number(y.reserve)+Number(m.num)),delete y.num}}catch(w){b.e(w)}finally{b.f()}}}catch(w){h.e(w)}finally{h.f()}d=Number(f.reserve)+Number(e[s].num),v.set("models",f.models)}else d=Number(f.reserve)+Number(e[s].num);v.set("reserve",d),v.set("id",f.objectId),v.save().then((function(t){v.equalTo("header","==",e[s].objectId),v.equalTo("order","==",1),v.statTo("sum","reserve"),v.find().then((function(t){var o=t[0]._sumReserve;v.set("reserve",o),"purchase"==n&&v.set("costPrice",e[s].modify_retailPrice.toString()),v.set("id",e[s].objectId),v.save().then((function(t){s==e.length-1&&a(!0)}))}))})).catch((function(e){t.log(e)}))}}))},l=0;l<e.length;l++)d(l)}))},outRedGoodNumNew:function(e){var n=this;return new Promise((function(o,a){for(var s=uni.getStorageSync("warehouse")?uni.getStorageSync("warehouse")[0].stock:"",c=uni.getStorageSync("uid"),u=function(a){var u=0,d=r.default.Query("Goods");d.equalTo("userId","==",c),d.equalTo("header","==",e[a].objectId),d.equalTo("stocks","==",s.objectId),d.find().then((function(c){if(0==c.length)n.upload_good_withNoCan(e[a],s,Number(e[a].num),"out").then((function(t){d.equalTo("header","==",e[a].objectId),d.equalTo("order","==",1),d.statTo("sum","reserve"),d.find().then((function(t){var n=t[0]._sumReserve;d.set("reserve",n),d.set("id",e[a].objectId),d.save().then((function(t){r.default.functions("warn_GoodNum",{uid:uni.getStorageSync("uid"),goodId:e[a].objectId}).then((function(e){})),a==e.length-1&&o(!0)}))}))}));else{var l=c[0];if(e[a].selected_model){var f,v=(0,i.default)(e[a].selected_model);try{for(v.s();!(f=v.n()).done;){var g,h=f.value,p=(0,i.default)(l.models);try{for(p.s();!(g=p.n()).done;){var m=g.value;m.id==h.id&&(m.reserve=Number(m.reserve)-Number(h.num)),delete m.num}}catch(b){p.e(b)}finally{p.f()}}}catch(b){v.e(b)}finally{v.f()}u=Number(l.reserve)-Number(e[a].num),d.set("models",l.models)}else u=Number(l.reserve)-Number(e[a].num);d.set("reserve",u),d.set("id",l.objectId),d.save().then((function(t){d.equalTo("header","==",e[a].objectId),d.equalTo("order","==",1),d.statTo("sum","reserve"),d.find().then((function(t){var n=t[0]._sumReserve;d.set("reserve",n),d.set("id",e[a].objectId),d.save().then((function(t){r.default.functions("warn_GoodNum",{uid:uni.getStorageSync("uid"),goodId:e[a].objectId}).then((function(e){})),a==e.length-1&&o(!0)}))}))})).catch((function(e){t.log(e)}))}}))},d=0;d<e.length;d++)u(d)}))},upload_good_withNoCan:function(e,n,o,a){return new Promise((function(s,c){var u=uni.getStorageSync("uid"),d=r.default.Pointer("_User"),l=d.set(u),f=r.default.Pointer("stocks"),v=f.set(n.objectId),g=r.default.Pointer("Goods"),h="";h=e.header?g.set(e.header.objectId):g.set(e.objectId);var p=r.default.Query("Goods");if(p.set("goodsName",e.goodsName),p.set("goodsIcon",e.goodsIcon),"out"==a){if(p.set("reserve",0-Number(o)),e.goodsId&&e.goodsId.models){var m,b=(0,i.default)(e.goodsId.models);try{for(b.s();!(m=b.n()).done;){var y=m.value;y.reserve=0-Number(y.num)}}catch(q){b.e(q)}finally{b.f()}p.set("models",e.goodsId.models)}else if(e.models&&e.models.length>0){var w,_=(0,i.default)(e.models);try{for(_.s();!(w=_.n()).done;){var x=w.value;x.reserve=0-Number(x.num)}}catch(q){_.e(q)}finally{_.f()}p.set("models",e.models)}}else if("allocation"==a){if(p.set("reserve",Number(o)),e.selected_model&&e.selected_model.length>0){var k,S=(0,i.default)(e.selected_model);try{for(S.s();!(k=S.n()).done;){var I=k.value;I.reserve=Number(I.num),delete I.num}}catch(q){S.e(q)}finally{S.f()}p.set("models",e.selected_model)}}else if(p.set("reserve",Number(o)),e.goodsId&&e.goodsId.models){var N,T=(0,i.default)(e.goodsId.models);try{for(T.s();!(N=T.n()).done;){var C=N.value;C.reserve=Number(C.num)}}catch(q){T.e(q)}finally{T.f()}p.set("models",e.goodsId.models)}else if(e.models&&e.models.length>0){var j,P=(0,i.default)(e.models);try{for(P.s();!(j=P.n()).done;){var z=j.value;z.reserve=Number(z.num?z.num:0)}}catch(q){P.e(q)}finally{P.f()}p.set("models",e.models)}p.set("stocks",v),p.set("userId",l),p.set("header",h),p.set("costPrice",""+e.costPrice),p.set("retailPrice",""+e.retailPrice),p.set("order",1),p.save().then((function(e){t.log(e),s([!0,e])})).catch((function(e){t.log(e)}))}))},handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(e,n,o){var i=r.default.Pointer("_User"),a=i.set(uni.getStorageSync("uid"));if(-2==n){var s=r.default.Pointer("Goods"),c=s.set(o),u=r.default.Query("logs");u.equalTo("goodId","==",o),u.find().then((function(o){if(0==o.length){var i=r.default.Query("logs");i.set("parent",a),i.set("goodId",c),i.set("log",e),i.set("type",n),i.save().then((function(e){t.log(e)})).catch((function(e){t.log(e)}))}}))}else{var d=r.default.Query("logs");d.set("parent",a),d.set("log",e),d.set("detail_id",o),d.set("type",n),d.save().then((function(e){t.log(e)})).catch((function(e){t.log(e)}))}},modifyStockType:function(e){var n=this,o=r.default.Query("Goods");o.get(e).then((function(e){var t=e;""==t.warning_num&&""==t.max_num?e.set("stocktype",1):void 0==t.warning_num&&void 0==t.max_num?e.set("stocktype",1):null==t.warning_num&&null==t.max_num?e.set("stocktype",1):(""!=t.warning_num&&(t.warning_num>=t.reserve?(e.set("stocktype",0),n.log(t.goodsName+"已经超过设置的最小库存值"+t.warning_num,-2,t.objectId)):t.warning_num<t.reserve&&t.reserve<t.max_num&&e.set("stocktype",1)),""!=t.max_num&&(t.max_num<=t.reserve?(e.set("stocktype",2),n.log(t.goodsName+"已经超过设置的最大库存值"+t.max_num,-2,t.objectId)):t.warning_num<t.reserve&&t.reserve<t.max_num&&e.set("stocktype",1))),e.save()})).catch((function(e){t.log(e)}))},record_shopOut:function(e,n){t.log(e,n);var o=r.default.Query("shops");o.set("id",e),o.set("have_out",n),o.save().then((function(e){t.log(e)})).catch((function(e){t.log(e)}))},record_staffOut:function(e){if(t.log(e,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var n=r.default.Query("_User");n.set("id",uni.getStorageSync("user").objectId),n.set("have_out",Number(e)+uni.getStorageSync("user").have_out),n.save().then((function(e){t.log(e)})).catch((function(e){t.log(e)}))}},get_allCost:function(){var e=uni.getStorageSync("uid");t.log(e);var n=r.default.Query("Goods");n.equalTo("userId","==",e),n.find().then((function(e){t.log(e);var n,o=(0,i.default)(e);try{for(o.s();!(n=o.n()).done;){var r=n.value;t.log(r),Number(r.costPrice)*r.reserve,r.reserve}}catch(a){o.e(a)}finally{o.f()}}))},getDay:function(e,t,n){var o=this,i=new Date,r=i.getTime()+864e5*e;i.setTime(r);var a=i.getFullYear(),s=i.getMonth(),c=i.getDate();return s=o.handleMonth(s+1),c=o.handleMonth(c),t?n?a+"-"+s+"-01 00:00:00":a+"-"+s+"-"+c+" 00:00:00":a+"-"+s+"-"+c},js_date_time:function(e,t){var n=new Date(e),o=n.getFullYear(),i=n.getMonth()+1;i=i<10?"0"+i:i;var r=n.getDate();r=r<10?"0"+r:r;var a=n.getHours();a=a<10?"0"+a:a;var s=n.getMinutes(),c=n.getSeconds();return s=s<10?"0"+s:s,c=c<10?"0"+c:c,t?o+"-"+i+"-"+r+" "+a+":"+s:o+"-"+i+"-"+r},handleMonth:function(e){var t=e;return 1==e.toString().length&&(t="0"+e),t}}}).call(this,n("5a52")["default"])},8364:function(e,t,n){"use strict";var o=n("f03b"),i=n.n(o);i.a},"8bc0":function(e,t,n){var o=n("69c2");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("1841f6a9",o,!0,{sourceMap:!1,shadowMode:!1})},afa2:function(e,t,n){"use strict";var o=n("8bc0"),i=n.n(o);i.a},b582:function(e,t,n){"use strict";n.r(t);var o=n("d7ad"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},b6802:function(e,t,n){"use strict";var o=n("23e7"),i=n("a691"),r=n("408a"),a=n("1148"),s=n("d039"),c=1..toFixed,u=Math.floor,d=function(e,t,n){return 0===t?n:t%2===1?d(e,t-1,n*e):d(e*e,t/2,n)},l=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},f=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));o({target:"Number",proto:!0,forced:f},{toFixed:function(e){var t,n,o,s,c=r(this),f=i(e),v=[0,0,0,0,0,0],g="",h="0",p=function(e,t){var n=-1,o=t;while(++n<6)o+=e*v[n],v[n]=o%1e7,o=u(o/1e7)},m=function(e){var t=6,n=0;while(--t>=0)n+=v[t],v[t]=u(n/e),n=n%e*1e7},b=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==v[e]){var n=String(v[e]);t=""===t?n:t+a.call("0",7-n.length)+n}return t};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(g="-",c=-c),c>1e-21)if(t=l(c*d(2,69,1))-69,n=t<0?c*d(2,-t,1):c/d(2,t,1),n*=4503599627370496,t=52-t,t>0){p(0,n),o=f;while(o>=7)p(1e7,0),o-=7;p(d(10,o,1),0),o=t-1;while(o>=23)m(1<<23),o-=23;m(1<<o),p(1,1),m(2),h=b()}else p(0,n),p(1<<-t,0),h=b()+a.call("0",f);return f>0?(s=h.length,h=g+(s<=f?"0."+a.call("0",f-s)+h:h.slice(0,s-f)+"."+h.slice(s-f))):h=g+h,h}})},d7ad:function(e,t,n){"use strict";(function(e){var o=n("ee27");n("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("3628")),r={name:"UniPagination",components:{uniIcon:i.default},props:{prevText:{type:String,default:"上一页"},nextText:{type:String,default:"下一页"},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:Boolean,default:!1}},data:function(){return{currentIndex:1}},computed:{maxPage:function(){var e=1,t=Number(this.total),n=Number(this.pageSize);return t&&n&&(e=Math.ceil(t/n)),e}},watch:{current:function(e){this.currentIndex=+e}},created:function(){this.currentIndex=+this.current},methods:{clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)!==this.maxPage&&(this.currentIndex+=1,this.change("next"))},inputNumber:function(t){e.log(t),this.currentIndex=Number(t.detail.value),this.$emit("change",{type:t,current:this.currentIndex})},change:function(t){e.log(t),this.$emit("change",{type:t,current:this.currentIndex})}}};t.default=r}).call(this,n("5a52")["default"])},da10:function(e,t,n){"use strict";n.r(t);var o=n("0b6d"),i=n("6b78");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("8364");var a,s=n("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"a889419a",null,!1,o["a"],a);t["default"]=c.exports},ea0f:function(e,t,n){"use strict";(function(e){var o=n("ee27");n("7db0"),n("c975"),n("b6802"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r,a=o(n("54f8")),s=o(n("9546")),c=o(n("4d52")),u=o(n("96bd")),d=o(n("3628")),l=o(n("0d6a")),f=o(n("7fd5")),v={components:{uniNavBar:u.default,faIcon:c.default,uniPagination:l.default,uniIcon:d.default},data:function(){return{page_num:1,page_size:30,showOrder:!1,showOptions:!1,isPriviewImg:!1,productList:null,search_text:"",user:uni.getStorageSync("user"),headerSelection:{goodsClass:"",stocks:"",order:{order:"-createdAt"},options:""},orders:[{desc:"库存数量",notice:"从高到低",order:"-reserve",checked:!1},{desc:"库存数量",notice:"从低到高",order:"reserve",checked:!1},{desc:"创建日期",notice:"最新",order:"-createdAt",checked:!0},{desc:"创建日期",notice:"最晚",order:"createdAt",checked:!1},{desc:"名字",notice:"正序",order:"goodsName",checked:!1}]}},onLoad:function(e){r=this,uni.removeStorageSync("category"),uni.removeStorageSync("warehouse"),i=uni.getStorageSync("uid"),e.search_text&&(r.search_text=e.search_text),r.get_productList()},onShow:function(){uni.removeStorageSync("now_product"),uni.getStorageSync("isClickShaiXuan")&&(r.page_num=1,r.headerSelection.goodsClass=uni.getStorageSync("category")||"",r.headerSelection.stocks=uni.getStorageSync("warehouse")?uni.getStorageSync("warehouse")[0].stock:"",r.get_productList())},onShareAppMessage:function(t){return"button"===t.from&&e.log(t.target),{title:r.user.nickName+"的商品列表",path:"/pages/shop/index/index?userId="+i+"&nickName="+r.user.nickName}},onUnload:function(){f.default.handleData(),uni.removeStorageSync("is_add"),r.option_reset()},methods:{selectOrder:function(e){var t,n=(0,a.default)(r.orders);try{for(n.s();!(t=n.n()).done;){var o=t.value;o.checked=!1}}catch(i){n.e(i)}finally{n.f()}e.checked=!0,r.headerSelection.order=e,r.get_productList()},priviewImg:function(e){r.isPriviewImg=!0,uni.previewImage({current:e,urls:[e]})},change_page:function(e){r.page_num=e.current,r.get_productList()},change_timestatus:function(e){r.checked=e.detail.value},change_stocktatus:function(e){r.stock_checked=e.detail.value},input_confirm:function(e){r.search_text=e.detail.value,r.get_productList()},shaixuan:function(){r.showOptions=!0},goto_add:function(){var t=uni.getStorageSync("user"),n=uni.getStorageSync("identity"),o=s.default.Query("Goods");o.equalTo("userId","==",i),o.equalTo("order","==",0),o.find().then((function(o){var i=o;t.is_vip||i.length<30?wx.showActionSheet({itemList:["多店仓添加","单店仓添加"],success:function(e){0==e.tapIndex?uni.navigateTo({url:"../good_add/good_add?type=more"}):1==e.tapIndex&&uni.navigateTo({url:"../good_add/good_add?type=single"})},fail:function(t){e.log(t.errMsg)}}):uni.showModal({title:"提示",content:"非会员最多上传30件产品",confirmText:"充值会员",success:function(t){t.confirm?1==n?uni.navigateTo({url:"/pages/mine/vip/vip"}):uni.showToast({title:"员工不能充值",icon:"none"}):t.cancel&&e.log("用户点击取消")}})}))},option_reset:function(){uni.removeStorageSync("category"),uni.removeStorageSync("warehouse"),r.headerSelection={goodsClass:"",stocks:"",order:{order:"-createdAt"},options:""},r.orders=[{desc:"库存数量",notice:"从高到低",order:"-reserve",checked:!1},{desc:"库存数量",notice:"从低到高",order:"reserve",checked:!1},{desc:"创建日期",notice:"最新",order:"-createdAt",checked:!0},{desc:"创建日期",notice:"最晚",order:"createdAt",checked:!1},{desc:"名字",notice:"正序",order:"goodsName",checked:!1}],r.page_num=1,r.search_text="",r.get_productList()},option_confrim:function(){uni.getStorageSync("category")&&(r.category=uni.getStorageSync("category")),uni.getStorageSync("warehouse")&&(r.stock=uni.getStorageSync("warehouse")[uni.getStorageSync("warehouse").length-1].stock),r.showOptions=!1,r.get_productList()},selectd:function(t){e.log(t),"goodsClass"==t?uni.navigateTo({url:"/pages/manage/category/category?type=choose"}):"stocks"==t?uni.navigateTo({url:"/pages/manage/warehouse/warehouse?type=choose"}):"order"==t?r.showOrder=!0:"options"==t&&(r.showOptions=!0),uni.setStorageSync("isClickShaiXuan",!0)},goDetail:function(t){e.log(t),uni.setStorageSync("now_product",t),0==t.order?uni.navigateTo({url:"../good_det/Ngood_det?id="+t.objectId+"&type=false"}):1==t.order?uni.navigateTo({url:"../good_det/Ngood_det?id="+t.header.objectId+"&type=false"}):uni.navigateTo({url:"../good_det/good_det"})},get_productList:function(){var e=this;uni.showLoading({title:"加载中..."});var t=s.default.Query("Goods");t.equalTo("userId","==",i),t.equalTo("status","!=",-1),r.headerSelection.stocks&&r.headerSelection.stocks.objectId?t.equalTo("stocks","==",r.headerSelection.stocks.objectId):t.equalTo("order","!=",1),1==r.headerSelection.goodsClass.type?t.equalTo("goodsClass","==",r.headerSelection.goodsClass.objectId):t.equalTo("second_class","==",r.headerSelection.goodsClass.objectId);var n=t.equalTo("goodsName","==",{$regex:r.search_text+".*"}),o=t.equalTo("packageContent","==",{$regex:r.search_text+".*"}),c=t.equalTo("position","==",{$regex:r.search_text+".*"});t.or(n,o,c),t.limit(r.page_size),t.skip(r.page_size*(r.page_num-1)),t.order(r.headerSelection.order.order),t.include("goodsClass","stocks","second_class"),t.find().then((function(t){var n,o=(0,a.default)(t);try{for(o.s();!(n=o.n()).done;){var i=n.value;i.reserve=i.reserve.toFixed(uni.getStorageSync("setting")?uni.getStorageSync("setting").show_float:0),2==r.user.identity&&r.user.rights&&-1!=r.user.rights.othercurrent.indexOf("0")&&(i.costPrice=0)}}catch(s){o.e(s)}finally{o.f()}e.productList=t,uni.hideLoading(),uni.removeStorageSync("isClickShaiXuan")}))}}};t.default=v}).call(this,n("5a52")["default"])},f03b:function(e,t,n){var o=n("5438");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("e56b4366",o,!0,{sourceMap:!1,shadowMode:!1})}}]);