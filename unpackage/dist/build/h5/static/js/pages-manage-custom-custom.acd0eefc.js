(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-custom-custom"],{"016e":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("da4c")),o=i(n("c8e0")),r={name:"UniNavBar",components:{uniStatusBar:a.default,uniIcon:o.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:Boolean,default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:Boolean,default:!1},shadow:{type:Boolean,default:!0},border:{type:Boolean,default:!0}},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")}}};e.default=r},"0822":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-5fb8b8a0]{background:#fafafa}.uni-common-mt[data-v-5fb8b8a0]{padding:%?30?%}.content[data-v-5fb8b8a0]{height:calc(100vh - %?214?%);background:#fff}.info_item[data-v-5fb8b8a0]{padding:%?20?% %?30?%;background:#fff}.item[data-v-5fb8b8a0]{border-bottom:%?1?% solid#ccc;padding-bottom:%?10?%;margin-bottom:%?10?%}body.?%PAGE?%[data-v-5fb8b8a0]{background:#fafafa}",""])},14951:function(t,e,n){"use strict";n.r(e);var i=n("ed66"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"185d":function(t,e,n){var i=n("6820");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("0991547e",i,!0,{sourceMap:!1,shadowMode:!1})},2994:function(t,e,n){var i=n("f36b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("d74ba56c",i,!0,{sourceMap:!1,shadowMode:!1})},"2aab":function(t,e,n){"use strict";n.r(e);var i=n("5b49"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"3cd5":function(t,e,n){"use strict";n.r(e);var i=n("a4816"),a=n("14951");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("a49d");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"0bf836b0",null);e["default"]=c.exports},"3dc8":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.loading?n("loading"):t._e(),n("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"添加"},on:{"click-right":function(e){e=t.$handleEvent(e),t.goto_add(e)}}},[n("v-uni-view",{staticClass:"input-view"},[n("uni-icon",{attrs:{type:"search",size:"22",color:"#666666"}}),n("v-uni-input",{staticClass:"input",attrs:{"confirm-type":"search",type:"text",placeholder:"输入搜索关键词"},on:{confirm:function(e){e=t.$handleEvent(e),t.input_confirm(e)}}})],1)],1),n("v-uni-view",{staticClass:"uni-common-mt"},[n("uni-segmented-control",{attrs:{current:t.current,values:t.items,"style-type":"text","active-color":"#426ab3"},on:{clickItem:function(e){e=t.$handleEvent(e),t.onClickItem(e)}}})],1),n("v-uni-scroll-view",{staticClass:"content",attrs:{"scroll-y":"true"}},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===t.current,expression:"current === 0"}],staticClass:"info_item"},t._l(t.people,function(e,i){return n("v-uni-view",{key:i,staticClass:"item"},[n("v-uni-navigator",{staticClass:"display_flex_bet",attrs:{"hover-class":"none",url:"custom_detail/custom_detail?id="+e.objectId}},[n("v-uni-view",[n("v-uni-view",{staticStyle:{"font-size":"30rpx",color:"#3d3d3d","font-weight":"bold"}},[t._v(t._s(e.custom_name))]),e.beizhu?n("v-uni-view",[t._v("备注："+t._s(e.beizhu))]):t._e(),n("v-uni-view",{staticStyle:{color:"#999"}},[t._v("创建时间："+t._s(e.createdAt))])],1),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#ddd"}})],1),n("v-uni-view",{staticClass:"display_flex",staticStyle:{"justify-content":"flex-end"}},[t.is_custom?n("v-uni-view",{staticClass:"display_flex",staticStyle:{"justify-content":"flex-end",width:"100%"},on:{click:function(n){n=t.$handleEvent(n),t.select_this("custom",e)}}},[n("v-uni-text",{staticStyle:{color:"#d93a49"}},[t._v("选择")])],1):n("v-uni-view",{staticClass:"display_flex",staticStyle:{"justify-content":"flex-end","align-items":"center"}},[n("fa-icon",{staticStyle:{"margin-right":"40rpx"},attrs:{type:"trash",size:"20",color:"#d93a49"},on:{click:function(n){n=t.$handleEvent(n),t.delete_this(e.objectId)}}}),n("fa-icon",{staticStyle:{"margin-right":"40rpx","padding-top":"6rpx"},attrs:{type:"pencil-square-o",size:"20",color:"#d93a49"},on:{click:function(n){n=t.$handleEvent(n),t.edit(e)}}})],1)],1)],1)}),1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.current,expression:"current === 1"}],staticClass:"info_item"},t._l(t.people,function(e,i){return n("v-uni-view",{key:i,staticClass:"item"},[n("v-uni-navigator",{staticClass:"display_flex_bet",attrs:{"hover-class":"none",url:"producer_detail/producer_detail?id="+e.objectId}},[n("v-uni-view",[n("v-uni-view",{staticStyle:{"font-size":"30rpx",color:"#3d3d3d","font-weight":"bold"}},[t._v(t._s(e.producer_name))]),e.beizhu?n("v-uni-view",[t._v("备注："+t._s(e.beizhu))]):t._e(),n("v-uni-view",{staticStyle:{color:"#999"}},[t._v("创建时间："+t._s(e.createdAt))])],1),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#ddd"}})],1),n("v-uni-view",{staticClass:"display_flex",staticStyle:{"justify-content":"flex-end"}},[t.is_producer?n("v-uni-view",{staticClass:"display_flex",staticStyle:{"justify-content":"flex-end",width:"100%"},on:{click:function(n){n=t.$handleEvent(n),t.select_this("producer",e)}}},[n("v-uni-text",{staticStyle:{color:"#d93a49"}},[t._v("选择")])],1):n("v-uni-view",{staticClass:"display_flex",staticStyle:{"justify-content":"flex-end","align-items":"center"}},[n("fa-icon",{staticStyle:{"margin-right":"40rpx"},attrs:{type:"trash",size:"20",color:"#d93a49"},on:{click:function(n){n=t.$handleEvent(n),t.delete_this(e.objectId)}}}),n("fa-icon",{staticStyle:{"margin-right":"40rpx","padding-top":"6rpx"},attrs:{type:"pencil-square-o",size:"20",color:"#d93a49"},on:{click:function(n){n=t.$handleEvent(n),t.edit(e)}}})],1)],1)],1)}),1)],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"3e0e":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-navbar"},[n("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.border,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__header",style:{color:t.color}},[n("v-uni-view",{staticClass:"uni-navbar__header-btns",on:{click:function(e){e=t.$handleEvent(e),t.onClickLeft(e)}}},[t.leftIcon.length?n("v-uni-view",[n("uni-icon",{attrs:{type:t.leftIcon,color:t.color,size:"24"}})],1):t._e(),t.leftText.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[t._v(t._s(t.leftText))]):t._e(),t._t("left")],2),n("v-uni-view",{staticClass:"uni-navbar__header-container"},[t.title.length?n("v-uni-view",{staticClass:"uni-navbar__header-container-inner"},[t._v(t._s(t.title))]):t._e(),t._t("default")],2),n("v-uni-view",{staticClass:"uni-navbar__header-btns",on:{click:function(e){e=t.$handleEvent(e),t.onClickRight(e)}}},[t.rightIcon.length?n("v-uni-view",[n("uni-icon",{attrs:{type:t.rightIcon,color:t.color,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text"},[t._v(t._s(t.rightText))]):t._e(),t._t("right")],2)],1)],1),t.fixed?n("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"427a":function(t,e,n){"use strict";var i=n("e5a7"),a=n.n(i);a.a},"5a85":function(t,e,n){"use strict";n.r(e);var i=n("016e"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"5b49":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=uni.getSystemInfoSync().statusBarHeight+"px",a={name:"UniStatusBar",data:function(){return{statusBarHeight:i}}};e.default=a},6820:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-status-bar[data-v-299237ae]{display:block;width:100%;height:20px;height:0}",""])},"89ae":function(t,e,n){"use strict";n.r(e);var i=n("3dc8"),a=n("ce32");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("427a");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"5fb8b8a0",null);e["default"]=c.exports},"90b5":function(t,e,n){var i=n("cf4d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("08f1b4d0",i,!0,{sourceMap:!1,shadowMode:!1})},"933a":function(t,e,n){"use strict";var i=n("185d"),a=n.n(i);a.a},a4816:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"segmented-control",class:{text:"text"===t.styleType},style:{borderColor:"text"===t.styleType?"":t.activeColor}},t._l(t.values,function(e,i){return n("v-uni-view",{key:i,staticClass:"segmented-control-item",class:[{text:"text"===t.styleType},{active:i===t.currentIndex}],style:{color:i===t.currentIndex?"text"===t.styleType?t.activeColor:"#fff":"text"===t.styleType?"#000":t.activeColor,backgroundColor:i===t.currentIndex&&"button"===t.styleType?t.activeColor:""},on:{click:function(e){e=t.$handleEvent(e),t._onClick(i)}}},[t._v(t._s(e))])}),1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},a49d:function(t,e,n){"use strict";var i=n("2994"),a=n.n(i);a.a},b336:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},cb40:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("7514");var a,o,r,c=i(n("b841")),s=i(n("00eb")),l=i(n("3cd5")),u=i(n("e081")),d=i(n("c8e0")),f={components:{loading:c.default,faIcon:s.default,uniSegmentedControl:l.default,uniNavBar:u.default,uniIcon:d.default},data:function(){return{loading:!0,items:["销售客户","供货商"],current:0,people:null,is_producer:!1,is_custom:!1}},onLoad:function(t){a=this,r=uni.getStorageSync("uid"),"producer"==t.type?(a.is_producer=!0,a.current=1,a.load_data("producers")):"custom"==t.type&&(a.is_custom=!0,a.current=0,a.load_data("customs"))},onShow:function(){uni.removeStorageSync("customs"),uni.removeStorageSync("custom_type"),0==a.current?a.load_data("customs"):a.load_data("producers")},onUnload:function(){o=""},methods:{select_this:function(t,e){uni.setStorageSync(t,e),uni.navigateBack({delta:1})},edit:function(t){uni.setStorageSync("customs",t),0==a.current?uni.setStorageSync("custom_type","customs"):uni.setStorageSync("custom_type","producers"),uni.navigateTo({url:"add/add"})},delete_this:function(t){uni.showModal({title:"提示",content:"是否删除此客户",success:function(e){e.confirm&&(console.log(t),0==a.current?a.delete_data("customs",t):a.delete_data("producers",t))}})},delete_data:function(t,e){console.log(e);var n=Bmob.Query(t);n.destroy(e).then(function(e){console.log(e),uni.showToast({title:"删除成功",icon:"none"}),a.load_data(t)}).catch(function(t){console.log(t)})},goto_add:function(){uni.showActionSheet({itemList:["新增客户","新增供货商"],success:function(t){console.log("选中了第"+(t.tapIndex+1)+"个按钮"),0==t.tapIndex?uni.navigateTo({url:"add/add?type=customs"}):uni.navigateTo({url:"add/add?type=producers"})},fail:function(t){console.log(t.errMsg)}})},input_confirm:function(t){o=t.detail.value,0==this.current?a.load_data("customs"):a.load_data("producers")},onClickItem:function(t){this.current!==t&&(this.current=t,0==this.current?a.load_data("customs"):a.load_data("producers"))},load_data:function(t){var e=Bmob.Query(t);e.equalTo("parent","==",r),e.limit(500),o&&("customs"==t?e.equalTo("custom_name","==",{$regex:o+".*"}):e.equalTo("producer_name","==",{$regex:o+".*"})),e.find().then(function(t){console.log(t),a.loading=!1,a.people=t})}}};e.default=f},ce32:function(t,e,n){"use strict";n.r(e);var i=n("cb40"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},cf4d:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'.uni-navbar__content[data-v-21101b8e]{display:block;position:relative;width:100%;background-color:#fff;overflow:hidden;padding:0 %?30?%;width:calc(100% - %?60?%)}.uni-navbar__content uni-view[data-v-21101b8e]{line-height:%?78?%}.uni-navbar__header[data-v-21101b8e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;height:%?78?%;line-height:%?78?%;font-size:%?26?%;font-weight:700;color:#333}.uni-navbar__header-btns[data-v-21101b8e]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding:0 %?12?%}.uni-navbar__header-btns[data-v-21101b8e]:first-child{padding-left:0}.uni-navbar__header-btns[data-v-21101b8e]:last-child{text-align:right}.uni-navbar__header-container[data-v-21101b8e]{width:100%;margin:0 %?10?%}.uni-navbar__header-container-inner[data-v-21101b8e]{font-size:%?30?%;text-align:center;padding-right:%?60?%}.uni-navbar__placeholder-view[data-v-21101b8e]{height:%?88?%}.uni-navbar--fixed[data-v-21101b8e]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-21101b8e]{-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-21101b8e]:after{position:absolute;z-index:3;bottom:0;left:0;right:0;height:1px;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}',""])},da4c:function(t,e,n){"use strict";n.r(e);var i=n("b336"),a=n("2aab");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("933a");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"299237ae",null);e["default"]=c.exports},e081:function(t,e,n){"use strict";n.r(e);var i=n("3e0e"),a=n("5a85");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("ef59");var r=n("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"21101b8e",null);e["default"]=c.exports},e5a7:function(t,e,n){var i=n("0822");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("4dbe61af",i,!0,{sourceMap:!1,shadowMode:!1})},ed66:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var i={name:"UniSegmentedControl",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:0}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},created:function(){this.currentIndex=this.current},methods:{_onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",t))}}};e.default=i},ef59:function(t,e,n){"use strict";var i=n("90b5"),a=n.n(i);a.a},f36b:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".segmented-control[data-v-0bf836b0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:75%;font-size:%?28?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;overflow:hidden;border:1px solid;border-radius:%?10?%}.segmented-control.text[data-v-0bf836b0]{border:0;border-radius:0}.segmented-control-item[data-v-0bf836b0]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;line-height:%?60?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-left:1px solid}.segmented-control-item.active[data-v-0bf836b0]{color:#fff}.segmented-control-item.text[data-v-0bf836b0]{border-left:0;color:#000}.segmented-control-item.text.active[data-v-0bf836b0]{border-bottom-style:solid}.segmented-control-item[data-v-0bf836b0]:first-child{border-left-width:0}",""])}}]);