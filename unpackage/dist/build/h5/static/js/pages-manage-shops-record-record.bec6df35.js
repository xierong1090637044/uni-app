(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-shops-record-record"],{"00ea":function(t,e,i){"use strict";var n=i("31f2"),a=i.n(n);a.a},"112b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"Loading_view"},[i("v-uni-image",{staticClass:"loading_image",attrs:{src:"/static/timg.gif"}}),i("v-uni-view",{staticStyle:{color:"#999","margin-top":"3%"}},[t._v("加载中...")])],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"12d8":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var n={name:"UniSegmentedControl",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:0}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},created:function(){this.currentIndex=this.current},methods:{_onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",t))}}};e.default=n},14951:function(t,e,i){"use strict";i.r(e);var n=i("12d8"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"1a78":function(t,e,i){var n=i("e9e8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0b41e0fa",n,!0,{sourceMap:!1,shadowMode:!1})},"24f7":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".Loading_view[data-v-b97421aa]{height:100vh;width:100%;text-align:center;background:#fff}.loading_image[data-v-b97421aa]{width:%?200?%;height:%?200?%;margin-top:50%}",""])},"2aab":function(t,e,i){"use strict";i.r(e);var n=i("d4b4"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"2bef":function(t,e,i){"use strict";var n=i("288e");i("6b54"),i("87b3"),i("c5f6");var a=n(i("5d73"));i("7514"),t.exports={handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("now_product"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(t,e,i){var n=Bmob.Pointer("_User"),a=n.set(uni.getStorageSync("uid")),o=Bmob.Query("logs");o.set("parent",a),o.set("log",t),o.set("detail_id",i),o.set("type",e),o.save().then(function(t){console.log(t)}).catch(function(t){console.log(t)})},record_shopOut:function(t,e){console.log(t,e);var i=Bmob.Query("shops");i.set("id",t),i.set("have_out",e),i.save().then(function(t){console.log(t)}).catch(function(t){console.log(t)})},record_staffOut:function(t){if(console.log(t,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var e=Bmob.Query("staffs");e.set("id",uni.getStorageSync("user").objectId),e.set("have_out",t+uni.getStorageSync("user").have_out),e.save().then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},get_allCost:function(){var t=uni.getStorageSync("uid");console.log(t);var e=Bmob.Query("Goods");e.equalTo("userId","==",t),e.find().then(function(t){console.log(t);var e=!0,i=!1,n=void 0;try{for(var o,r=(0,a.default)(t);!(e=(o=r.next()).done);e=!0){var l=o.value;console.log(l),Number(l.costPrice)*l.reserve,l.reserve}}catch(s){i=!0,n=s}finally{try{e||null==r.return||r.return()}finally{if(i)throw n}}})},getDay:function(t,e){var i=this,n=new Date,a=n.getTime()+864e5*t;n.setTime(a);var o=n.getFullYear(),r=n.getMonth(),l=n.getDate();return r=i.handleMonth(r+1),l=i.handleMonth(l),e?o+"-"+r+"-"+l+" 00:00:00":o+"-"+r+"-"+l},handleMonth:function(t){var e=t;return 1==t.toString().length&&(e="0"+t),e}}},"2cb6":function(t,e,i){},"2d91":function(t,e,i){var n=i("8c32");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0e70fe70",n,!0,{sourceMap:!1,shadowMode:!1})},"31f2":function(t,e,i){var n=i("ae83");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("278a9de4",n,!0,{sourceMap:!1,shadowMode:!1})},"3cd5":function(t,e,i){"use strict";i.r(e);var n=i("a4816"),a=i("14951");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("a49d");var r=i("2877"),l=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"0bf836b0",null);e["default"]=l.exports},"3d82":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.uni-navbar__content[data-v-21101b8e]{display:block;position:relative;width:100%;background-color:#fff;overflow:hidden;padding:0 %?30?%;width:calc(100% - %?60?%)}.uni-navbar__content uni-view[data-v-21101b8e]{line-height:%?78?%}.uni-navbar__header[data-v-21101b8e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;height:%?78?%;line-height:%?78?%;font-size:%?26?%;font-weight:700;color:#333}.uni-navbar__header-btns[data-v-21101b8e]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding:0 %?12?%}.uni-navbar__header-btns[data-v-21101b8e]:first-child{padding-left:0}.uni-navbar__header-btns[data-v-21101b8e]:last-child{text-align:right}.uni-navbar__header-container[data-v-21101b8e]{width:100%;margin:0 %?10?%}.uni-navbar__header-container-inner[data-v-21101b8e]{font-size:%?30?%;text-align:center;padding-right:%?60?%}.uni-navbar__placeholder-view[data-v-21101b8e]{height:%?88?%}.uni-navbar--fixed[data-v-21101b8e]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-21101b8e]{-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-21101b8e]:after{position:absolute;z-index:3;bottom:0;left:0;right:0;height:1px;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}',""])},"3e0e":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-navbar"},[i("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.border,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?i("uni-status-bar"):t._e(),i("v-uni-view",{staticClass:"uni-navbar__header",style:{color:t.color}},[i("v-uni-view",{staticClass:"uni-navbar__header-btns",on:{click:function(e){e=t.$handleEvent(e),t.onClickLeft(e)}}},[t.leftIcon.length?i("v-uni-view",[i("uni-icon",{attrs:{type:t.leftIcon,color:t.color,size:"24"}})],1):t._e(),t.leftText.length?i("v-uni-view",{staticClass:"uni-navbar-btn-text",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[t._v(t._s(t.leftText))]):t._e(),t._t("left")],2),i("v-uni-view",{staticClass:"uni-navbar__header-container"},[t.title.length?i("v-uni-view",{staticClass:"uni-navbar__header-container-inner"},[t._v(t._s(t.title))]):t._e(),t._t("default")],2),i("v-uni-view",{staticClass:"uni-navbar__header-btns",on:{click:function(e){e=t.$handleEvent(e),t.onClickRight(e)}}},[t.rightIcon.length?i("v-uni-view",[i("uni-icon",{attrs:{type:t.rightIcon,color:t.color,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?i("v-uni-view",{staticClass:"uni-navbar-btn-text"},[t._v(t._s(t.rightText))]):t._e(),t._t("right")],2)],1)],1),t.fixed?i("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?i("uni-status-bar"):t._e(),i("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"4e21":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("da4c")),o=n(i("c8e0")),r={name:"UniNavBar",components:{uniStatusBar:a.default,uniIcon:o.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:Boolean,default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:Boolean,default:!1},shadow:{type:Boolean,default:!0},border:{type:Boolean,default:!0}},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")}}};e.default=r},"54b4":function(t,e,i){"use strict";i.r(e);var n=i("2cb6"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"5a85":function(t,e,i){"use strict";i.r(e);var n=i("4e21"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"74ef":function(t,e,i){"use strict";i.r(e);var n=i("f97a"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"8c32":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".segmented-control[data-v-0bf836b0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:75%;font-size:%?28?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;overflow:hidden;border:1px solid;border-radius:%?10?%}.segmented-control.text[data-v-0bf836b0]{border:0;border-radius:0}.segmented-control-item[data-v-0bf836b0]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;line-height:%?60?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-left:1px solid}.segmented-control-item.active[data-v-0bf836b0]{color:#fff}.segmented-control-item.text[data-v-0bf836b0]{border-left:0;color:#000}.segmented-control-item.text.active[data-v-0bf836b0]{border-bottom-style:solid}.segmented-control-item[data-v-0bf836b0]:first-child{border-left-width:0}",""])},"8dc9":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-tab-bar"},[t.loading?i("loading"):i("v-uni-view",[i("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"筛选"},on:{"click-right":function(e){e=t.$handleEvent(e),t.showOptions=!0}}}),i("v-uni-view",[i("v-uni-view",{staticClass:"uni-common-mt",staticStyle:{background:"#FFFFFF"}},[i("uni-segmented-control",{attrs:{current:t.current,values:t.items,"style-type":"text","active-color":"#426ab3"},on:{clickItem:function(e){e=t.$handleEvent(e),t.onClickItem(e)}}}),i("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{padding:"20rpx 30rpx","border-bottom":"10rpx solid#ddd","text-align":"center"}},[i("v-uni-view",[i("v-uni-view",[t._v(t._s(t.header.total))]),i("v-uni-view",{staticStyle:{color:"#999","font-size":"24rpx"}},[t._v("单品数")])],1),i("v-uni-view",[i("v-uni-view",[t._v("¥"+t._s(t.header.total_money))]),i("v-uni-view",{staticStyle:{color:"#999","font-size":"24rpx"}},[t._v("总额")])],1),-1==t.seleted_tab?i("v-uni-view",[i("v-uni-view",[t._v("¥"+t._s(t.header.get_money))]),i("v-uni-view",{staticStyle:{color:"#999","font-size":"24rpx"}},[t._v("毛利润")])],1):t._e()],1)],1)],1),i("v-uni-scroll-view",{staticClass:"page",attrs:{"scroll-y":"true"}},[1==t.seleted_tab?i("v-uni-view",{staticClass:"list-item"},t._l(t.list,function(e,n){return i("v-uni-view",{key:n},[i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticStyle:{display:"flex",width:"calc(100% - 120rpx)"}},[i("v-uni-view",{staticStyle:{"line-height":"80rpx"}},[i("fa-icon",{attrs:{type:"sign-in",size:"20",color:"#2ca879"}})],1),i("v-uni-view",{staticStyle:{"margin-left":"20rpx"}},[i("v-uni-view",[e.opreater?i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("操作者：")]):t._e(),t._v(t._s(e.opreater.nickName))],1),i("v-uni-view",[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("操作商品：")]),t._v(t._s(e.goodsName)+" 等...")],1),i("v-uni-view",[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("采购数量：")]),t._v(t._s(e.num))],1),e.beizhu?i("v-uni-view",{staticClass:"item_beizhu"},[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("备注：")]),t._v(t._s(e.beizhu))],1):t._e(),i("v-uni-view",[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("操作时间：")]),t._v(t._s(e.createdAt))],1)],1)],1),i("v-uni-view",{staticClass:"order_get"},[t._v("采购")])],1)],1)}),1):t._e(),-1==t.seleted_tab?i("v-uni-view",{staticClass:"list-item"},t._l(t.list,function(e,n){return i("v-uni-view",{key:n},[i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticStyle:{display:"flex",width:"calc(100% - 120rpx)"}},[i("v-uni-view",{staticStyle:{"line-height":"80rpx"}},[i("fa-icon",{attrs:{type:"sign-out",size:"20",color:"#f30"}})],1),i("v-uni-view",{staticStyle:{"margin-left":"20rpx"}},[i("v-uni-view",[e.opreater?i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("操作者：")]):t._e(),t._v(t._s(e.opreater.nickName))],1),i("v-uni-view",[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("操作商品：")]),t._v(t._s(e.goodsName)+" 等...")],1),i("v-uni-view",[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("销售数量：")]),t._v(t._s(e.num))],1),e.beizhu?i("v-uni-view",{staticClass:"item_beizhu"},[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("备注：")]),t._v(t._s(e.beizhu))],1):t._e(),i("v-uni-view",[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("操作时间：")]),t._v(t._s(e.createdAt))],1)],1)],1),i("v-uni-view",{staticClass:"order_out"},[t._v("销售")])],1)],1)}),1):t._e(),2==t.seleted_tab?i("v-uni-view",{staticClass:"list-item"},t._l(t.list,function(e,n){return i("v-uni-view",{key:n},[i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticStyle:{display:"flex",width:"calc(100% - 120rpx)"}},[i("v-uni-view",{staticStyle:{"line-height":"80rpx"}},[i("fa-icon",{attrs:{type:"sign-out",size:"20",color:"#b3b242"}})],1),i("v-uni-view",{staticStyle:{"margin-left":"20rpx"}},[i("v-uni-view",[e.opreater?i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("操作者：")]):t._e(),t._v(t._s(e.opreater.nickName))],1),i("v-uni-view",[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("操作商品：")]),t._v(t._s(e.goodsName)+" 等...")],1),i("v-uni-view",[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("退货数量：")]),t._v(t._s(e.num))],1),e.beizhu?i("v-uni-view",{staticClass:"item_beizhu"},[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("备注：")]),t._v(t._s(e.beizhu))],1):t._e(),i("v-uni-view",[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("操作时间：")]),t._v(t._s(e.createdAt))],1)],1)],1),i("v-uni-view",{staticClass:"order_returning"},[t._v("退货")])],1)],1)}),1):t._e()],1)],1),t.showOptions?i("v-uni-view",{staticClass:"modal_background",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.showOptions=!1}}},[i("v-uni-view",{staticClass:"showOptions"},[i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",{staticStyle:{"margin-right":"10px"}},[t._v("类型")]),i("v-uni-picker",{staticClass:"select_type",staticStyle:{width:"500rpx"},attrs:{range:t.types,"range-key":"name"},on:{change:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.bindtypechange(e)},click:function(e){e.stopPropagation(),e=t.$handleEvent(e)}}},[t._v(t._s(t.selected_text))])],1),i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1),i("v-uni-view",{staticClass:"input_item1"},[i("v-uni-view",[i("v-uni-picker",{attrs:{mode:"date",value:t.now_day,end:t.max_day},on:{change:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.bindDateChange1(e)},click:function(e){e.stopPropagation(),e=t.$handleEvent(e)}}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",{staticStyle:{"margin-right":"20rpx"}},[t._v(t._s(t.now_day))]),i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1)],1),i("v-uni-view",[t._v("至")]),i("v-uni-view",[i("v-uni-picker",{attrs:{mode:"date",value:t.end_day,end:t.max_day},on:{change:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.bindDateChange2(e)},click:function(e){e.stopPropagation(),e=t.$handleEvent(e)}}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",{staticStyle:{"margin-right":"20rpx"}},[t._v(t._s(t.end_day))]),i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"option_bottom"},[i("v-uni-view",{staticClass:"selection",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.option_reset(e)}}},[t._v("重置")]),i("v-uni-view",{staticClass:"selection1",on:{click:function(e){e.stopPropagation(),e=t.$handleEvent(e),t.option_confrim(e)}}},[t._v("确定")])],1)],1)],1):t._e()],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"933a":function(t,e,i){"use strict";var n=i("1a78"),a=i.n(n);a.a},a4816:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"segmented-control",class:{text:"text"===t.styleType},style:{borderColor:"text"===t.styleType?"":t.activeColor}},t._l(t.values,function(e,n){return i("v-uni-view",{key:n,staticClass:"segmented-control-item",class:[{text:"text"===t.styleType},{active:n===t.currentIndex}],style:{color:n===t.currentIndex?"text"===t.styleType?t.activeColor:"#fff":"text"===t.styleType?"#000":t.activeColor,backgroundColor:n===t.currentIndex&&"button"===t.styleType?t.activeColor:""},on:{click:function(e){e=t.$handleEvent(e),t._onClick(n)}}},[t._v(t._s(e))])}),1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},a49d:function(t,e,i){"use strict";var n=i("2d91"),a=i.n(n);a.a},ae83:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".page[data-v-103fa8ac]{overflow:hidden;height:calc(100vh - %?256?%);font-size:%?28?%;color:#3d3d3d;background:#fafafa}.input_item[data-v-103fa8ac]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;line-height:%?80?%;padding:0 %?30?%}.pro_list[data-v-103fa8ac]{font-size:%?20?%!important;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.pro_listitem[data-v-103fa8ac]{background-color:#fff;padding:%?10?% %?20?%;border-bottom:%?1?% solid#ddd}.item[data-v-103fa8ac]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#fff;padding:%?20?%;border-bottom:%?1?% solid#EEEEEE}.icon-order[data-v-103fa8ac]{font-size:%?44?%;color:#426ab3}.list-item[data-v-103fa8ac]{height:100%;overflow:scroll}.select_time[data-v-103fa8ac]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;line-height:%?80?%;color:#999;padding:0 %?30?%}.item_beizhu[data-v-103fa8ac]{max-width:calc(100% - %?120?%);overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.order_get[data-v-103fa8ac]{padding:%?0?% %?30?%;color:#2ca879;border:%?0.5?% solid#2ca879;height:%?52?%;line-height:%?52?%;border-radius:%?8?%}.order_out[data-v-103fa8ac]{padding:0 15px;color:#f30;border:1px solid#f30;height:26px;line-height:26px;margin-top:7px;border-radius:4px}.order_counting[data-v-103fa8ac]{padding:0 15px;color:#000;border:1px solid#000;height:26px;line-height:26px;margin-top:7px;border-radius:4px}.order_returning[data-v-103fa8ac]{padding:0 15px;color:#b3b242;border:1px solid#b3b242;height:26px;line-height:26px;margin-top:7px;border-radius:4px}",""])},b336:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},b841:function(t,e,i){"use strict";i.r(e);var n=i("112b"),a=i("54b4");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("c1c9");var r=i("2877"),l=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"b97421aa",null);e["default"]=l.exports},c1c9:function(t,e,i){"use strict";var n=i("d292"),a=i.n(n);a.a},d292:function(t,e,i){var n=i("24f7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2876b71b",n,!0,{sourceMap:!1,shadowMode:!1})},d4b4:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.getSystemInfoSync().statusBarHeight+"px",a={name:"UniStatusBar",data:function(){return{statusBarHeight:n}}};e.default=a},da4c:function(t,e,i){"use strict";i.r(e);var n=i("b336"),a=i("2aab");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("933a");var r=i("2877"),l=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"299237ae",null);e["default"]=l.exports},e081:function(t,e,i){"use strict";i.r(e);var n=i("3e0e"),a=i("5a85");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("ef59");var r=i("2877"),l=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"21101b8e",null);e["default"]=l.exports},e944:function(t,e,i){var n=i("3d82");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("b3a5ecd4",n,!0,{sourceMap:!1,shadowMode:!1})},e9e8:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-status-bar[data-v-299237ae]{display:block;width:100%;height:20px;height:0}",""])},ef59:function(t,e,i){"use strict";var n=i("e944"),a=i.n(n);a.a},f5eb:function(t,e,i){"use strict";i.r(e);var n=i("8dc9"),a=i("74ef");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("00ea");var r=i("2877"),l=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"103fa8ac",null);e["default"]=l.exports},f97a:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c5f6");var a=n(i("5d73"));i("7514"),i("7f7f");var o,r,l,s,c=n(i("2bef")),u=n(i("00eb")),d=n(i("b841")),v=n(i("3cd5")),f=n(i("e081")),b={components:{faIcon:u.default,loading:d.default,uniNavBar:f.default,uniSegmentedControl:v.default},data:function(){return{showOptions:!1,header:{total:0,total_money:0,get_money:0},loading:!0,items:["今天","昨天","近七天","近一个月"],list:[],current:0,now_day:c.default.getDay(0,!1),end_day:c.default.getDay(1,!1),max_day:c.default.getDay(0,!1),seleted_tab:-1,selected_text:"销售",types:[{name:"采购",type:1},{name:"销售",type:-1},{name:"退货",type:2}]}},onLoad:function(t){o=this,r=wx.getStorageSync("uid"),l=t.shopId,o.getdetail()},methods:{bindtypechange:function(t){console.log(t),s=t.detail.value,o.selected_text=o.types[s].name},option_confrim:function(){o.header={total:0,total_money:0,get_money:0},o.seleted_tab=o.types[s].type,o.showOptions=!1,o.getdetail()},option_reset:function(){o.header={total:0,total_money:0,get_money:0},o.seleted_tab=-1,o.selected_text="销售",o.now_day=c.default.getDay(0,!1),o.end_day=c.default.getDay(1,!1),o.max_day=c.default.getDay(0,!1),o.showOptions=!1,o.getdetail()},bindDateChange1:function(t){o.now_day=t.detail.value},bindDateChange2:function(t){o.end_day=t.detail.value},onClickItem:function(t){this.current!==t&&(this.current=t,o.header={total:0,total_money:0,get_money:0},0==t?(o.now_day=c.default.getDay(0,!1),o.end_day=c.default.getDay(1,!1)):1==t?(o.now_day=c.default.getDay(-1,!1),o.end_day=c.default.getDay(0,!1)):2==t?(o.now_day=c.default.getDay(-7,!1),o.end_day=c.default.getDay(1,!1)):3==t&&(o.now_day=c.default.getDay(-30,!1),o.end_day=c.default.getDay(1,!1)),o.getdetail())},getdetail:function(){var t=Bmob.Query("Bills");t.equalTo("userId","==",r),t.equalTo("type","==",o.seleted_tab),t.equalTo("shop","==",l),t.equalTo("createdAt",">=",o.now_day+" 00:00:00"),t.equalTo("createdAt","<=",o.end_day+" 00:00:00"),t.order("-createdAt"),t.include("opreater","goodsId"),t.find().then(function(t){console.log(t);var e=!0,i=!1,n=void 0;try{for(var r,l=(0,a.default)(t);!(e=(r=l.next()).done);e=!0){var s=r.value;console.log(s),o.header.total+=s.num,o.header.total_money+=Number(s.goodsId.costPrice)*s.num,o.header.get_money+=s.total_money-Number(s.goodsId.costPrice)*s.num}}catch(c){i=!0,n=c}finally{try{e||null==l.return||l.return()}finally{if(i)throw n}}o.list=t,o.loading=!1})}}};e.default=b}}]);