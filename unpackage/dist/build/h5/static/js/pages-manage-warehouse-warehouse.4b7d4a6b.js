(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-warehouse-warehouse"],{"112b":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"Loading_view"},[n("v-uni-image",{staticClass:"loading_image",attrs:{src:"/static/timg.gif"}}),n("v-uni-view",{staticStyle:{color:"#999","margin-top":"3%"}},[t._v("加载中...")])],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"12d8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var i={name:"UniSegmentedControl",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:0}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},created:function(){this.currentIndex=this.current},methods:{_onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",t))}}};e.default=i},14951:function(t,e,n){"use strict";n.r(e);var i=n("12d8"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"1a78":function(t,e,n){var i=n("e9e8");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("0b41e0fa",i,!0,{sourceMap:!1,shadowMode:!1})},"24f7":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".Loading_view[data-v-b97421aa]{height:100vh;width:100%;text-align:center;background:#fff}.loading_image[data-v-b97421aa]{width:%?200?%;height:%?200?%;margin-top:50%}",""])},"2aab":function(t,e,n){"use strict";n.r(e);var i=n("d4b4"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"2cb6":function(t,e,n){},"2d91":function(t,e,n){var i=n("8c32");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("0e70fe70",i,!0,{sourceMap:!1,shadowMode:!1})},"372e":function(t,e,n){"use strict";var i=n("812c"),a=n.n(i);a.a},"3cd5":function(t,e,n){"use strict";n.r(e);var i=n("a4816"),a=n("14951");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("a49d");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"0bf836b0",null);e["default"]=c.exports},"3d82":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'.uni-navbar__content[data-v-21101b8e]{display:block;position:relative;width:100%;background-color:#fff;overflow:hidden;padding:0 %?30?%;width:calc(100% - %?60?%)}.uni-navbar__content uni-view[data-v-21101b8e]{line-height:%?78?%}.uni-navbar__header[data-v-21101b8e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;height:%?78?%;line-height:%?78?%;font-size:%?26?%;font-weight:700;color:#333}.uni-navbar__header-btns[data-v-21101b8e]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding:0 %?12?%}.uni-navbar__header-btns[data-v-21101b8e]:first-child{padding-left:0}.uni-navbar__header-btns[data-v-21101b8e]:last-child{text-align:right}.uni-navbar__header-container[data-v-21101b8e]{width:100%;margin:0 %?10?%}.uni-navbar__header-container-inner[data-v-21101b8e]{font-size:%?30?%;text-align:center;padding-right:%?60?%}.uni-navbar__placeholder-view[data-v-21101b8e]{height:%?88?%}.uni-navbar--fixed[data-v-21101b8e]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-21101b8e]{-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-21101b8e]:after{position:absolute;z-index:3;bottom:0;left:0;right:0;height:1px;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}',""])},"3e0e":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-navbar"},[n("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.border,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__header",style:{color:t.color}},[n("v-uni-view",{staticClass:"uni-navbar__header-btns",on:{click:function(e){e=t.$handleEvent(e),t.onClickLeft(e)}}},[t.leftIcon.length?n("v-uni-view",[n("uni-icon",{attrs:{type:t.leftIcon,color:t.color,size:"24"}})],1):t._e(),t.leftText.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[t._v(t._s(t.leftText))]):t._e(),t._t("left")],2),n("v-uni-view",{staticClass:"uni-navbar__header-container"},[t.title.length?n("v-uni-view",{staticClass:"uni-navbar__header-container-inner"},[t._v(t._s(t.title))]):t._e(),t._t("default")],2),n("v-uni-view",{staticClass:"uni-navbar__header-btns",on:{click:function(e){e=t.$handleEvent(e),t.onClickRight(e)}}},[t.rightIcon.length?n("v-uni-view",[n("uni-icon",{attrs:{type:t.rightIcon,color:t.color,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text"},[t._v(t._s(t.rightText))]):t._e(),t._t("right")],2)],1)],1),t.fixed?n("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"4e21":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("da4c")),o=i(n("c8e0")),r={name:"UniNavBar",components:{uniStatusBar:a.default,uniIcon:o.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:Boolean,default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:Boolean,default:!1},shadow:{type:Boolean,default:!0},border:{type:Boolean,default:!0}},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")}}};e.default=r},"54b4":function(t,e,n){"use strict";n.r(e);var i=n("2cb6"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"5a85":function(t,e,n){"use strict";n.r(e);var i=n("4e21"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"6dcb":function(t,e,n){"use strict";n.r(e);var i=n("c0fa"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"812c":function(t,e,n){var i=n("dbd1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("15fc3f96",i,!0,{sourceMap:!1,shadowMode:!1})},"8c32":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".segmented-control[data-v-0bf836b0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:75%;font-size:%?28?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;overflow:hidden;border:1px solid;border-radius:%?10?%}.segmented-control.text[data-v-0bf836b0]{border:0;border-radius:0}.segmented-control-item[data-v-0bf836b0]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;line-height:%?60?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-left:1px solid}.segmented-control-item.active[data-v-0bf836b0]{color:#fff}.segmented-control-item.text[data-v-0bf836b0]{border-left:0;color:#000}.segmented-control-item.text.active[data-v-0bf836b0]{border-bottom-style:solid}.segmented-control-item[data-v-0bf836b0]:first-child{border-left-width:0}",""])},"933a":function(t,e,n){"use strict";var i=n("1a78"),a=n.n(i);a.a},a4816:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"segmented-control",class:{text:"text"===t.styleType},style:{borderColor:"text"===t.styleType?"":t.activeColor}},t._l(t.values,function(e,i){return n("v-uni-view",{key:i,staticClass:"segmented-control-item",class:[{text:"text"===t.styleType},{active:i===t.currentIndex}],style:{color:i===t.currentIndex?"text"===t.styleType?t.activeColor:"#fff":"text"===t.styleType?"#000":t.activeColor,backgroundColor:i===t.currentIndex&&"button"===t.styleType?t.activeColor:""},on:{click:function(e){e=t.$handleEvent(e),t._onClick(i)}}},[t._v(t._s(e))])}),1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},a49d:function(t,e,n){"use strict";var i=n("2d91"),a=n.n(i);a.a},a6fe:function(t,e,n){"use strict";n.r(e);var i=n("b7b2"),a=n("6dcb");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("372e");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"1e1bb5c8",null);e["default"]=c.exports},b336:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},b7b2:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{height:"100vh"}},[t.loading?n("loading"):t._e(),n("v-uni-view",{attrs:{"wx:else":""}},[n("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"添加"},on:{"click-right":function(e){e=t.$handleEvent(e),t.goto_add(e)}}},[n("v-uni-view",{staticClass:"input-view"},[n("uni-icon",{attrs:{type:"search",size:"22",color:"#666666"}}),n("v-uni-input",{staticClass:"input",attrs:{"confirm-type":"search",type:"text",placeholder:"输入搜索关键词"},on:{confirm:function(e){e=t.$handleEvent(e),t.input_confirm(e)}}})],1)],1),n("v-uni-view",{staticClass:"uni-common-mt"},[n("uni-segmented-control",{attrs:{current:t.current,values:t.items,"style-type":"text","active-color":"#426ab3"},on:{clickItem:function(e){e=t.$handleEvent(e),t.onClickItem(e)}}})],1),n("v-uni-scroll-view",{staticClass:"indexes",staticStyle:{height:"calc(100vh - 212rpx)"},attrs:{"scroll-y":"","scroll-with-animation":"true","enable-back-to-top":"true"}},t._l(t.stocks,function(e,i){return n("v-uni-view",{key:i},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"display_flex_bet",on:{click:function(n){n=t.$handleEvent(n),t.goto_detail(e)}}},[n("v-uni-view",{staticClass:"display_flex"},[n("v-uni-image",{staticClass:"stock_avatar",attrs:{src:"/static/warehouse.png"}}),n("v-uni-view",[n("v-uni-view",{staticClass:"stock_name"},[t._v(t._s(e.stock_name))]),e.charge?n("v-uni-view",{staticClass:"stock_mobile"},[t._v("负责人："+t._s(e.charge.nickName))]):n("v-uni-view",{staticClass:"stock_mobile"},[t._v("负责人：未填写")])],1)],1),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1),n("v-uni-view",{staticClass:"right_item"},[t.is_choose?n("v-uni-view",{staticClass:"display_flex",staticStyle:{"justify-content":"flex-end",width:"100%"},on:{click:function(n){n=t.$handleEvent(n),t.select_this(e)}}},[n("v-uni-text",{staticStyle:{color:"#d93a49"}},[t._v("选择")])],1):n("v-uni-view",{staticClass:"display_flex",staticStyle:{"justify-content":"flex-end"}},[n("fa-icon",{staticStyle:{"margin-right":"40rpx"},attrs:{type:"trash",size:"20",color:"#d93a49"},on:{click:function(n){n=t.$handleEvent(n),t.delete_this(e.objectId)}}}),n("fa-icon",{staticStyle:{"margin-right":"40rpx","padding-top":"8rpx"},attrs:{type:"pencil-square-o",size:"20",color:"#d93a49"},on:{click:function(n){n=t.$handleEvent(n),t.edit(e)}}})],1)],1)],1)],1)}),1)],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},b841:function(t,e,n){"use strict";n.r(e);var i=n("112b"),a=n("54b4");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("c1c9");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"b97421aa",null);e["default"]=c.exports},c0fa:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("7514");var a,o,r,c=i(n("f499")),s=i(n("3cd5")),l=i(n("00eb")),u=i(n("b841")),d=i(n("e081")),f=i(n("c8e0")),v={components:{uniSegmentedControl:s.default,faIcon:l.default,loading:u.default,uniNavBar:d.default,uniIcon:f.default},data:function(){return{is_choose:!1,loading:!0,stocks:null,items:["已启用","未启用"],current:0,disabled:!1}},onLoad:function(t){a=this,r=uni.getStorageSync("uid"),console.log(t),"choose"==t.type&&(a.is_choose=!0)},onShow:function(){a.getstock_list()},onUnload:function(){o=""},methods:{onClickItem:function(t){this.current!==t&&(this.current=t,0==t?(a.disabled=!1,a.getstock_list()):1==t&&(a.disabled=!0,a.getstock_list()))},goto_detail:function(t){uni.setStorageSync("stock",t),uni.navigateTo({url:"detail/detail"})},select_this:function(t){var e=[],n={};n.stock=t,n.reserve=0,-1==(0,c.default)(e).indexOf((0,c.default)(n))?(e.push(n),uni.setStorageSync("warehouse",e),uni.navigateBack({delta:1})):uni.showToast({title:"已选择此仓库",icon:"none"})},edit:function(t){uni.setStorageSync("warehouse",t),uni.setStorageSync("charge",t.charge),uni.setStorageSync("shop",t.shop),uni.navigateTo({url:"add/add"})},delete_this:function(t){uni.showModal({title:"提示",content:"请谨慎删除，一旦删除，数据不能恢复，是否删除此仓库",success:function(e){e.confirm&&(console.log(t),a.delete_data(t))}})},delete_data:function(t){console.log(t);var e=Bmob.Query("stocks");e.destroy(t).then(function(t){console.log(t),uni.showToast({title:"删除成功",icon:"none"}),a.getstock_list()}).catch(function(t){console.log(t)})},goto_add:function(){uni.navigateTo({url:"add/add"})},input_confirm:function(t){o=t.detail.value,a.getstock_list()},getstock_list:function(){var t=Bmob.Query("stocks");t.order("-num"),t.include("charge","shop"),t.equalTo("parent","==",r),t.equalTo("disabled","!=",!a.disabled),o&&t.equalTo("stock_name","==",{$regex:o+".*"}),t.find().then(function(t){a.loading=!1,a.stocks=t})}}};e.default=v},c1c9:function(t,e,n){"use strict";var i=n("d292"),a=n.n(i);a.a},d292:function(t,e,n){var i=n("24f7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2876b71b",i,!0,{sourceMap:!1,shadowMode:!1})},d4b4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=uni.getSystemInfoSync().statusBarHeight+"px",a={name:"UniStatusBar",data:function(){return{statusBarHeight:i}}};e.default=a},da4c:function(t,e,n){"use strict";n.r(e);var i=n("b336"),a=n("2aab");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("933a");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"299237ae",null);e["default"]=c.exports},dbd1:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-1e1bb5c8]{height:100vh;background:#fafafa}.uni-common-mt[data-v-1e1bb5c8]{background:#fff;padding:%?20?% 0}.stock_name[data-v-1e1bb5c8]{font-weight:700;font-size:%?30?%;color:#3d3d3d;margin-bottom:%?4?%}.stock_mobile[data-v-1e1bb5c8]{color:#999}.right_item[data-v-1e1bb5c8]{width:100%;border-bottom:%?1?% solid#ccc;padding-bottom:%?10?%}.stock_avatar[data-v-1e1bb5c8]{width:%?82?%;height:%?70?%;margin-right:%?20?%}.content[data-v-1e1bb5c8]{padding:%?10?% %?30?%;background:#fff}body.?%PAGE?%[data-v-1e1bb5c8]{background:#fafafa}",""])},e081:function(t,e,n){"use strict";n.r(e);var i=n("3e0e"),a=n("5a85");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("ef59");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"21101b8e",null);e["default"]=c.exports},e944:function(t,e,n){var i=n("3d82");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("b3a5ecd4",i,!0,{sourceMap:!1,shadowMode:!1})},e9e8:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-status-bar[data-v-299237ae]{display:block;width:100%;height:20px;height:0}",""])},ef59:function(t,e,n){"use strict";var i=n("e944"),a=n.n(i);a.a}}]);