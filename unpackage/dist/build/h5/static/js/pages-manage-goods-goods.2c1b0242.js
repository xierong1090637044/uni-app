(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-goods-goods"],{"0807":function(e,t,n){var i=n("2f86");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("100b4cdf",i,!0,{sourceMap:!1,shadowMode:!1})},"19da":function(e,t,n){"use strict";var i=n("0807"),a=n.n(i);a.a},"21c0":function(e,t,n){var i=n("bfc1");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("0a87ec79",i,!0,{sourceMap:!1,shadowMode:!1})},"2bfc":function(e,t,n){"use strict";n.r(t);var i=n("7715"),a=n("80d9");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("58ab");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"68102392",null);t["default"]=c.exports},"2f86":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-4aba5b8a]{background:#fff}.text_notice[data-v-4aba5b8a]{margin-left:%?6?%}.content[data-v-4aba5b8a]{height:100%;overflow:hidden}.uni-product-list[data-v-4aba5b8a]{padding:0 %?10?%;width:calc(100% - %?20?%);height:calc(100vh - %?236?%)}.uni-product[data-v-4aba5b8a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?10?% 0;border-bottom:1px solid #ddd;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.product_image[data-v-4aba5b8a]{width:%?80?%;height:%?80?%}.product_name[data-v-4aba5b8a]{font-weight:700;color:#333}.product_reserve[data-v-4aba5b8a]{color:#6c757d;font-size:%?24?%;font-weight:700}.title[data-v-4aba5b8a]{font-size:15px;line-height:20px;color:#333;padding:15px}.city[data-v-4aba5b8a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin-left:8px;white-space:nowrap}.input-view[data-v-4aba5b8a]{width:92%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#e7e7e7;height:30px;border-radius:15px;padding:0 4%;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin:%?8?% 0;line-height:30px}.input-view .uni-icon[data-v-4aba5b8a]{line-height:30px!important}.input-view .input[data-v-4aba5b8a]{height:30px;line-height:30px;width:94%;padding:0 3%}body.?%PAGE?%[data-v-4aba5b8a]{background:#fff}',""])},4404:function(e,t,n){"use strict";n.r(t);var i=n("a1da"),a=n("50fc");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("19da");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"4aba5b8a",null);t["default"]=c.exports},"50fc":function(e,t,n){"use strict";n.r(t);var i=n("ad5e"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},"58ab":function(e,t,n){"use strict";var i=n("21c0"),a=n.n(i);a.a},7715:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-pagination"},[n("v-uni-view",{staticClass:"uni-pagination__btns"},[n("v-uni-view",{class:["uni-pagination__btn",{"uni-pagination--disabled":1===e.currentIndex}],attrs:{"hover-class":1===e.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){t=e.$handleEvent(t),e.clickLeft(t)}}},[e.showIcon?[n("uni-icon",{attrs:{color:"#000",size:"20",type:"arrowleft"}})]:[e._v(e._s(e.prevText))]],2),n("v-uni-view",{class:["uni-pagination__btn",{"uni-pagination--disabled":e.currentIndex===e.maxPage}],attrs:{"hover-class":e.currentIndex===e.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){t=e.$handleEvent(t),e.clickRight(t)}}},[e.showIcon?[n("uni-icon",{attrs:{color:"#000",size:"20",type:"arrowright"}})]:[e._v(e._s(e.nextText))]],2)],1),n("v-uni-view",{staticClass:"uni-pagination__num"},[n("v-uni-input",{staticClass:"uni-pagination__num-current",staticStyle:{"text-align":"center","margin-top":"10rpx"},attrs:{value:e.currentIndex,type:"number"},on:{blur:function(t){t=e.$handleEvent(t),e.inputNumber(t)},confirm:function(t){t=e.$handleEvent(t),e.inputNumber(t)}}})],1)],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"80d9":function(e,t,n){"use strict";n.r(t);var i=n("cd4e"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},a1da:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page"},[e.loading?n("loading"):n("v-uni-view",{staticClass:"content"},[n("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"添加","left-text":"筛选"},on:{"click-left":function(t){t=e.$handleEvent(t),e.shaixuan(t)},"click-right":function(t){t=e.$handleEvent(t),e.goto_add(t)}}},[n("v-uni-view",{staticClass:"input-view"},[n("uni-icon",{attrs:{type:"search",size:"22",color:"#666666"}}),n("v-uni-input",{staticClass:"input",attrs:{"confirm-type":"search",type:"text",placeholder:"请输入产品名字或者含量",value:e.search_text},on:{confirm:function(t){t=e.$handleEvent(t),e.input_confirm(t)},blur:function(t){t=e.$handleEvent(t),e.input_confirm(t)}}})],1)],1),n("v-uni-view",{staticClass:"display_flex good_option_view"},[n("v-uni-view",{staticClass:"good_option",on:{click:function(t){t=e.$handleEvent(t),e.selectd("createdAt")}}},[n("v-uni-text",{class:"createdAt"==e.checked_option?"option_selected":""},[e._v("创建时间")]),"createdAt"==e.checked_option?n("fa-icon",{attrs:{type:"check",size:"20",color:"#1d953f"}}):e._e()],1),n("v-uni-view",{staticClass:"good_option",on:{click:function(t){t=e.$handleEvent(t),e.selectd("goodsName")}}},[n("v-uni-text",{class:"goodsName"==e.checked_option?"option_selected":""},[e._v("名字")]),"goodsName"==e.checked_option?n("fa-icon",{attrs:{type:"check",size:"20",color:"#1d953f"}}):e._e()],1),n("v-uni-view",{staticClass:"good_option",on:{click:function(t){t=e.$handleEvent(t),e.selectd("reserve")}}},[n("v-uni-text",{class:"reserve"==e.checked_option?"option_selected":""},[e._v("库存")]),"reserve"==e.checked_option?n("fa-icon",{attrs:{type:"check",size:"20",color:"#1d953f"}}):e._e()],1)],1),n("v-uni-scroll-view",{staticClass:"uni-product-list",attrs:{"scroll-y":""}},[e.productList.length>0?n("v-uni-view",e._l(e.productList,function(t,i){return n("v-uni-view",{key:i,staticClass:"uni-product"},[n("v-uni-view",[t.goodsIcon?n("v-uni-image",{staticClass:"product_image",attrs:{src:t.goodsIcon,mode:"widthFix"},on:{click:function(n){n=e.$handleEvent(n),e.priviewImg(t.goodsIcon)}}}):n("v-uni-image",{staticClass:"product_image",attrs:{src:"/static/goods-default.png",mode:"widthFix"}})],1),n("v-uni-view",{staticStyle:{"margin-left":"20rpx",width:"100%","line-height":"40rpx"},on:{click:function(n){n=e.$handleEvent(n),e.goDetail(t)}}},[n("v-uni-view",{staticClass:"product_name",style:{color:0==t.stocktype?"#f30":""}},[e._v(e._s(t.goodsName))]),n("v-uni-view",{staticClass:"product_reserve display_flex_bet",staticStyle:{width:"90%"}},[n("v-uni-view",{staticStyle:{"font-size":"24rpx"}},[e._v("库存数量:"),n("v-uni-text",{staticClass:"text_notice"},[e._v(e._s(t.reserve))])],1),t.warning_num?n("v-uni-view",{staticStyle:{"font-size":"24rpx"}},[e._v("预警数量:"),n("v-uni-text",{staticClass:"text_notice"},[e._v(e._s(t.warning_num))])],1):e._e()],1),t.packageContent&&t.packingUnit?n("v-uni-view",{staticClass:"product_reserve"},[e._v("规格:"),n("v-uni-text",{staticClass:"text_notice"},[e._v(e._s(t.packageContent)+"*"+e._s(t.packingUnit))])],1):e._e()],1),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#426ab3"}})],1)}),1):n("v-uni-view",[n("v-uni-view",{staticStyle:{"margin-top":"100rpx",color:"#333","font-weight":"bold","text-align":"center","font-size":"36rpx"}},[e._v("没有商品啦!")])],1)],1),n("v-uni-view",{staticStyle:{padding:"6rpx 0","border-top":"1rpx solid#ddd"}},[n("uni-pagination",{attrs:{"show-icon":!0,total:"100000",current:e.page_num},on:{change:function(t){t=e.$handleEvent(t),e.change_page(t)}}})],1)],1),e.showOptions?n("v-uni-view",{staticClass:"modal_background"},[n("v-uni-view",{staticClass:"showOptions"},[n("v-uni-navigator",{staticClass:"input_item1",attrs:{"hover-class":"none",url:"/pages/manage/category/category?type=choose"}},[n("v-uni-view",{staticStyle:{display:"flex","align-items":"center",width:"100%"}},[n("v-uni-view",{staticClass:"left_item"},[e._v("类别")]),n("v-uni-view",{staticClass:"right_input"},[n("v-uni-input",{attrs:{placeholder:"产品类别",value:e.category.class_text,disabled:"true"}})],1)],1),n("v-uni-view",[n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1),n("v-uni-navigator",{staticClass:"input_item1",attrs:{"hover-class":"none",url:"/pages/manage/warehouse/warehouse?type=choose"}},[n("v-uni-view",{staticStyle:{display:"flex","align-items":"center",width:"100%"}},[n("v-uni-view",{staticClass:"left_item"},[e._v("仓库")]),n("v-uni-view",{staticClass:"right_input"},[n("v-uni-input",{attrs:{placeholder:"存放仓库",value:e.stock.stock_name,disabled:"true"}})],1)],1),n("v-uni-view",[n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1),n("v-uni-view",{staticClass:"display_flex",staticStyle:{padding:"0 30rpx","margin-top":"10rpx"}},[n("v-uni-view",[e._v("预警产品")]),n("v-uni-view",{staticStyle:{"margin-left":"30rpx"},on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t)}}},[n("v-uni-switch",{attrs:{checked:e.stock_checked},on:{change:function(t){t=e.$handleEvent(t),e.change_stocktatus(t)}}})],1)],1),n("v-uni-view",{staticClass:"display_flex",staticStyle:{padding:"0 30rpx","margin-top":"10rpx"}},[n("v-uni-view",[e._v("失效产品")]),n("v-uni-view",{staticStyle:{"margin-left":"30rpx"},on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t)}}},[n("v-uni-switch",{attrs:{checked:e.checked},on:{change:function(t){t=e.$handleEvent(t),e.change_timestatus(t)}}})],1)],1),n("v-uni-view",{staticClass:"option_bottom"},[n("v-uni-view",{staticClass:"selection",on:{click:function(t){t=e.$handleEvent(t),e.option_reset(t)}}},[e._v("重置")]),n("v-uni-view",{staticClass:"selection1",on:{click:function(t){t=e.$handleEvent(t),e.option_confrim(t)}}},[e._v("确定")])],1)],1)],1):e._e()],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},ad5e:function(e,t,n){"use strict";(function(e){var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("5d73"));n("7514");var o,r,c=i(n("c74b")),s=i(n("0914")),u=i(n("524a")),l=i(n("b92d")),d=i(n("5753")),f=i(n("2bfc")),g=i(n("df06")),v="",p=30,h=1,b={components:{loading:u.default,uniNavBar:l.default,faIcon:s.default,uniPagination:f.default,uniIcon:d.default},data:function(){return{page_num:1,showOptions:!1,loading:!0,productList:null,checked_option:"createdAt",category:"",stock:"",checked:!1,stock_checked:!1,search_text:""}},onLoad:function(e){r=this,uni.removeStorageSync("category"),uni.removeStorageSync("warehouse"),o=uni.getStorageSync("uid"),e.search_text&&(r.search_text=e.search_text,v=e.search_text),r.get_productList()},onShow:function(){this.page_num=h,uni.removeStorageSync("now_product"),uni.getStorageSync("category")&&(r.showOptions=!0,r.category=uni.getStorageSync("category")),uni.getStorageSync("warehouse")&&(r.showOptions=!0,r.stock=uni.getStorageSync("warehouse")[uni.getStorageSync("warehouse").length-1].stock),uni.getStorageSync("is_add")&&r.get_productList()},onUnload:function(){g.default.handleData(),v="",p=50,uni.removeStorageSync("is_add")},methods:{priviewImg:function(e){uni.previewImage({current:e,urls:[e]})},change_page:function(e){h=e.current,r.get_productList()},change_timestatus:function(t){e.log(t),r.checked=t.detail.value},change_stocktatus:function(t){e.log(t),r.stock_checked=t.detail.value},input_confirm:function(t){e.log(t),v=t.detail.value,r.get_productList()},shaixuan:function(){r.showOptions=!0},goto_add:function(){uni.showActionSheet({itemList:["单产品上传","多仓库产品上传","多规格产品上传"],success:function(t){var n=uni.getStorageSync("user"),i=uni.getStorageSync("identity");n.is_vip||r.productList.length<30?0==t.tapIndex?uni.navigateTo({url:"../good_add/good_add"}):1==t.tapIndex?uni.navigateTo({url:"../goods_add/goods_add"}):2==t.tapIndex&&uni.navigateTo({url:"../goods_add_MoreG/goods_add_MoreG"}):uni.showModal({title:"提示",content:"非会员最多上传30件产品",confirmText:"充值会员",success:function(t){t.confirm?1==i?uni.navigateTo({url:"/pages/mine/vip/vip"}):uni.showToast({title:"员工不能充值",icon:"none"}):t.cancel&&e.log("用户点击取消")}})},fail:function(t){e.log(t.errMsg)}})},option_reset:function(){uni.removeStorageSync("category"),uni.removeStorageSync("warehouse"),r.stock_checked=!1,r.checked=!1,r.category="",r.stock="",r.showOptions=!1,r.get_productList()},option_confrim:function(){uni.getStorageSync("category")&&(r.category=uni.getStorageSync("category")),uni.getStorageSync("warehouse")&&(r.stock=uni.getStorageSync("warehouse")[uni.getStorageSync("warehouse").length-1].stock),r.showOptions=!1,r.get_productList()},selectd:function(e){p=50,r.checked_option=e,r.get_productList()},goDetail:function(t){e.log(t),uni.setStorageSync("now_product",t),uni.navigateTo({url:"../good_det/good_det"})},get_productList:function(){var e=this,t=c.default.Query("Goods");t.equalTo("userId","==",o),t.equalTo("stocks","==",r.stock.objectId),t.equalTo("status","!=",-1),r.stock||t.equalTo("accessory","!=",!0),1==r.category.type?t.equalTo("goodsClass","==",r.category.objectId):t.equalTo("second_class","==",r.category.objectId);var n=t.equalTo("goodsName","==",{$regex:v+".*"}),i=t.equalTo("packageContent","==",{$regex:v+".*"});if(t.or(n,i),r.checked){var s=Date.parse(new Date);t.equalTo("nousetime","<=",s)}r.stock_checked&&t.equalTo("stocktype","==",0),t.limit(p),t.skip(p*(h-1)),t.order("-"+r.checked_option),t.include("goodsClass","stocks","second_class"),t.find().then(function(t){var n=!0,i=!1,o=void 0;try{for(var r,c=(0,a.default)(t);!(n=(r=c.next()).done);n=!0){var s=r.value;s.reserve=s.reserve.toFixed(uni.getStorageSync("setting")?uni.getStorageSync("setting").show_float:0)}}catch(u){i=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(i)throw o}}e.productList=t,e.loading=!1})}}};t.default=b}).call(this,n("5a52")["default"])},bfc1:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'.uni-pagination[data-v-68102392]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?40?%;position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.uni-pagination__btns[data-v-68102392]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.uni-pagination__btn[data-v-68102392]{width:%?120?%;height:%?60?%;padding:0 %?16?%;line-height:%?60?%;font-size:%?28?%;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;background-color:#f8f8f8;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.uni-pagination__btn[data-v-68102392]:after{content:"";width:200%;height:200%;position:absolute;top:0;left:0;border:1px solid #c8c7cc;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?12?%}.uni-pagination__num[data-v-68102392]{height:%?60?%;line-height:%?60?%;font-size:%?28?%;color:#333;position:absolute;left:50%;top:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.uni-pagination__num-current[data-v-68102392]{color:#007aff}.uni-pagination--disabled[data-v-68102392]{opacity:.3}.uni-pagination--hover[data-v-68102392]{color:rgba(0,0,0,.6);background-color:#f1f1f1}',""])},cd4e:function(e,t,n){"use strict";(function(e){var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c5f6");var a=i(n("5753")),o={name:"UniPagination",components:{uniIcon:a.default},props:{prevText:{type:String,default:"上一页"},nextText:{type:String,default:"下一页"},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:Boolean,default:!1}},data:function(){return{currentIndex:1}},computed:{maxPage:function(){var e=1,t=Number(this.total),n=Number(this.pageSize);return t&&n&&(e=Math.ceil(t/n)),e}},watch:{current:function(e){this.currentIndex=+e}},created:function(){this.currentIndex=+this.current},methods:{clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)!==this.maxPage&&(this.currentIndex+=1,this.change("next"))},inputNumber:function(t){e.log(t),this.currentIndex=Number(t.detail.value),this.$emit("change",{type:t,current:this.currentIndex})},change:function(t){e.log(t),this.$emit("change",{type:t,current:this.currentIndex})}}};t.default=o}).call(this,n("5a52")["default"])},df06:function(e,t,n){"use strict";(function(t){var i=n("288e");n("6b54"),n("87b3"),n("7514");var a=i(n("5d73"));n("c5f6");var o=i(n("795b")),r=i(n("c74b"));e.exports={enterAddGoodNum:function(e){return new o.default(function(n,i){for(var o=function(i){var o=0,c=r.default.Query("Goods");c.get(e[i].objectId).then(function(r){if(t.log(e[i]),e[i].selectd_model){var c=!0,s=!1,u=void 0;try{for(var l,d=(0,a.default)(e[i].selected_model);!(c=(l=d.next()).done);c=!0){var f=l.value,g=!0,v=!1,p=void 0;try{for(var h,b=(0,a.default)(e[i].models);!(g=(h=b.next()).done);g=!0){var w=h.value;w.id==f.id&&(w.reserve=Number(w.reserve)+Number(f.num)),delete w.num}}catch(m){v=!0,p=m}finally{try{g||null==b.return||b.return()}finally{if(v)throw p}}}}catch(m){s=!0,u=m}finally{try{c||null==d.return||d.return()}finally{if(s)throw u}}o=Number(e[i].reserve)+Number(e[i].num),r.set("models",e[i].models)}else o=Number(e[i].reserve)+Number(e[i].num);r.set("reserve",o),r.set("stocktype",o>e[i].warning_num?1:0),r.save(),i==e.length-1&&n(!0)}).catch(function(e){t.log(e)})},c=0;c<e.length;c++)o(c)})},outRedGoodNum:function(e){var n=this;return new o.default(function(i,o){for(var c=function(o){var c=0,s=r.default.Query("Goods");s.get(e[o].objectId).then(function(t){if(e[o].selectd_model){var r=!0,s=!1,u=void 0;try{for(var l,d=(0,a.default)(e[o].selected_model);!(r=(l=d.next()).done);r=!0){var f=l.value,g=!0,v=!1,p=void 0;try{for(var h,b=(0,a.default)(e[o].models);!(g=(h=b.next()).done);g=!0){var w=h.value;c+=Number(w.reserve),w.id==f.id&&(w.reserve=Number(w.reserve)-Number(f.num)),delete w.num}}catch(m){v=!0,p=m}finally{try{g||null==b.return||b.return()}finally{if(v)throw p}}}}catch(m){s=!0,u=m}finally{try{r||null==d.return||d.return()}finally{if(s)throw u}}c=Number(e[o].reserve)-Number(e[o].num),t.set("models",e[o].models)}else c=Number(e[o].reserve)-Number(e[o].num);t.set("reserve",c),t.set("stocktype",c>=e[o].warning_num?1:0),t.save(),e[o].warning_num>=c&&n.log(e[o].goodsName+"出库了"+e[o].num+"件，已经低于预警数量"+e[o].warning_num,-2,e[o].objectId),n.record_staffOut(Number(e[o].num)),o==e.length-1&&i(!0)}).catch(function(e){t.log(e)})},s=0;s<e.length;s++)c(s)})},handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(e,n,i){var a=r.default.Pointer("_User"),o=a.set(uni.getStorageSync("uid")),c=r.default.Query("logs");c.set("parent",o),c.set("log",e),c.set("detail_id",i),c.set("type",n),c.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})},record_shopOut:function(e,n){t.log(e,n);var i=r.default.Query("shops");i.set("id",e),i.set("have_out",n),i.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})},record_staffOut:function(e){if(t.log(e,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var n=r.default.Query("staffs");n.set("id",uni.getStorageSync("user").objectId),n.set("have_out",Number(e)+uni.getStorageSync("user").have_out),n.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})}},get_allCost:function(){var e=uni.getStorageSync("uid");t.log(e);var n=r.default.Query("Goods");n.equalTo("userId","==",e),n.find().then(function(e){t.log(e);var n=!0,i=!1,o=void 0;try{for(var r,c=(0,a.default)(e);!(n=(r=c.next()).done);n=!0){var s=r.value;t.log(s),Number(s.costPrice)*s.reserve,s.reserve}}catch(u){i=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(i)throw o}}})},getDay:function(e,t){var n=this,i=new Date,a=i.getTime()+864e5*e;i.setTime(a);var o=i.getFullYear(),r=i.getMonth(),c=i.getDate();return r=n.handleMonth(r+1),c=n.handleMonth(c),t?o+"-"+r+"-"+c+" 00:00:00":o+"-"+r+"-"+c},js_date_time:function(e,t){var n=new Date(e),i=n.getFullYear(),a=n.getMonth()+1;a=a<10?"0"+a:a;var o=n.getDate();o=o<10?"0"+o:o;var r=n.getHours();r=r<10?"0"+r:r;var c=n.getMinutes(),s=n.getSeconds();return c=c<10?"0"+c:c,s=s<10?"0"+s:s,t?i+"-"+a+"-"+o+" "+r+":"+c:i+"-"+a+"-"+o},handleMonth:function(e){var t=e;return 1==e.toString().length&&(t="0"+e),t}}}).call(this,n("5a52")["default"])}}]);