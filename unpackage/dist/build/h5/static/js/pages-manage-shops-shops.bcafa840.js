(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-shops-shops"],{"016e":function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("da4c")),o=a(n("c8e0")),r={name:"UniNavBar",components:{uniStatusBar:i.default,uniIcon:o.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:Boolean,default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:Boolean,default:!1},shadow:{type:Boolean,default:!0},border:{type:Boolean,default:!0}},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")}}};e.default=r},"112b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"Loading_view"},[n("v-uni-image",{staticClass:"loading_image",attrs:{src:"/static/timg.gif"}}),n("v-uni-view",{staticStyle:{color:"#999","margin-top":"3%"}},[t._v("加载中...")])],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},14951:function(t,e,n){"use strict";n.r(e);var a=n("ed66"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"185d":function(t,e,n){var a=n("6820");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("0991547e",a,!0,{sourceMap:!1,shadowMode:!1})},"199a":function(t,e,n){var a=n("5135");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("2b598fc7",a,!0,{sourceMap:!1,shadowMode:!1})},2994:function(t,e,n){var a=n("f36b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("d74ba56c",a,!0,{sourceMap:!1,shadowMode:!1})},"2aab":function(t,e,n){"use strict";n.r(e);var a=n("5b49"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"2d3d":function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5d73"));n("7514");var o,r,s,c=a(n("b8eb")),l=a(n("3cd5")),u=a(n("b841")),d=a(n("00eb")),f=a(n("e081")),b=a(n("c8e0")),v={components:{uniSegmentedControl:l.default,faIcon:d.default,loading:u.default,uniNavBar:f.default,uniIcon:b.default},data:function(){return{loading:!0,shops:null,is_choose:!1,items:["已启用","未启用"],current:0,disabled:!1}},onLoad:function(t){o=this,s=uni.getStorageSync("uid"),"choose"==t.type&&(o.is_choose=!0)},onShow:function(){uni.removeStorageSync("shop"),o.getshop_list()},onUnload:function(){r=""},methods:{choose_way:function(t){uni.showActionSheet({itemList:["员工列表","查看记录"],success:function(e){console.log("选中了第"+(e.tapIndex+1)+"个按钮"),0==e.tapIndex?uni.navigateTo({url:"staff_in/staff_in?shopId="+t}):uni.navigateTo({url:"record/record?shopId="+t})},fail:function(t){console.log(t.errMsg)}})},onClickItem:function(t){this.current!==t&&(this.current=t,0==t?(o.disabled=!1,o.getshop_list()):1==t&&(o.disabled=!0,o.getshop_list()))},select_this:function(t){uni.setStorageSync("shop",t),uni.navigateBack({delta:1})},edit:function(t){uni.setStorageSync("shop",t),uni.navigateTo({url:"add/add"})},delete_this:function(t){uni.showModal({title:"提示",content:"是否删除此门店",success:function(e){e.confirm&&(console.log(t),o.delete_data(t))}})},delete_data:function(t){console.log(t);var e=Bmob.Query("shops");e.destroy(t).then(function(t){console.log(t),uni.showToast({title:"删除成功",icon:"none"}),o.getshop_list()}).catch(function(t){console.log(t)})},goto_add:function(){uni.navigateTo({url:"add/add"})},input_confirm:function(t){r=t.detail.value,o.getshop_list()},getshop_list:function(){var t=Bmob.Query("shops");t.order("num"),t.equalTo("parent","==",s),t.equalTo("disabled","==",o.disabled),r&&t.equalTo("name","==",{$regex:r+".*"}),t.find().then(function(t){console.log(t,s),o.loading=!1;var e=t;uni.getStorage({key:"identity",success:function(t){"2"==t.data?c.default.get_satffAuth().then(function(t){console.log(t);var n=[];if(t.shop){var a=!0,r=!1,s=void 0;try{for(var c,l=(0,i.default)(e);!(a=(c=l.next()).done);a=!0){var u=c.value;u.objectId==t.shop.objectId&&n.push(u)}}catch(d){r=!0,s=d}finally{try{a||null==l.return||l.return()}finally{if(r)throw s}}}o.shops=n}):"1"==t.data&&(o.shops=e)}})})}}};e.default=v},"38c4":function(t,e,n){"use strict";var a=n("199a"),i=n.n(a);i.a},"3cd5":function(t,e,n){"use strict";n.r(e);var a=n("a4816"),i=n("14951");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("a49d");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"0bf836b0",null);e["default"]=s.exports},"3e0e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-navbar"},[n("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.border,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__header",style:{color:t.color}},[n("v-uni-view",{staticClass:"uni-navbar__header-btns",on:{click:function(e){e=t.$handleEvent(e),t.onClickLeft(e)}}},[t.leftIcon.length?n("v-uni-view",[n("uni-icon",{attrs:{type:t.leftIcon,color:t.color,size:"24"}})],1):t._e(),t.leftText.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[t._v(t._s(t.leftText))]):t._e(),t._t("left")],2),n("v-uni-view",{staticClass:"uni-navbar__header-container"},[t.title.length?n("v-uni-view",{staticClass:"uni-navbar__header-container-inner"},[t._v(t._s(t.title))]):t._e(),t._t("default")],2),n("v-uni-view",{staticClass:"uni-navbar__header-btns",on:{click:function(e){e=t.$handleEvent(e),t.onClickRight(e)}}},[t.rightIcon.length?n("v-uni-view",[n("uni-icon",{attrs:{type:t.rightIcon,color:t.color,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text"},[t._v(t._s(t.rightText))]):t._e(),t._t("right")],2)],1)],1),t.fixed?n("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},5135:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-3b8878b0]{height:100vh;background:#fafafa}.uni-common-mt[data-v-3b8878b0]{background:#fff;padding:%?20?% 0}.shop_name[data-v-3b8878b0]{font-weight:700;font-size:%?30?%;color:#3d3d3d;margin-bottom:%?4?%}.shop_mobile[data-v-3b8878b0]{color:#999}.right_item[data-v-3b8878b0]{padding-bottom:%?10?%;width:100%;border-bottom:%?1?% solid#ccc}.shop_avatar[data-v-3b8878b0]{width:%?90?%;height:%?70?%;margin-right:%?20?%}.content[data-v-3b8878b0]{padding:%?10?% %?30?%;background:#fff}body.?%PAGE?%[data-v-3b8878b0]{background:#fafafa}",""])},"54b4":function(t,e,n){"use strict";n.r(e);var a=n("cdca"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"5a85":function(t,e,n){"use strict";n.r(e);var a=n("016e"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"5b49":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=uni.getSystemInfoSync().statusBarHeight+"px",i={name:"UniStatusBar",data:function(){return{statusBarHeight:a}}};e.default=i},6820:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-status-bar[data-v-299237ae]{display:block;width:100%;height:20px;height:0}",""])},"6e33":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".Loading_view[data-v-b97421aa]{height:100vh;width:100%;text-align:center;background:#fff}.loading_image[data-v-b97421aa]{width:%?200?%;height:%?200?%;margin-top:50%}",""])},"90b5":function(t,e,n){var a=n("cf4d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("08f1b4d0",a,!0,{sourceMap:!1,shadowMode:!1})},"933a":function(t,e,n){"use strict";var a=n("185d"),i=n.n(a);i.a},a4816:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"segmented-control",class:{text:"text"===t.styleType},style:{borderColor:"text"===t.styleType?"":t.activeColor}},t._l(t.values,function(e,a){return n("v-uni-view",{key:a,staticClass:"segmented-control-item",class:[{text:"text"===t.styleType},{active:a===t.currentIndex}],style:{color:a===t.currentIndex?"text"===t.styleType?t.activeColor:"#fff":"text"===t.styleType?"#000":t.activeColor,backgroundColor:a===t.currentIndex&&"button"===t.styleType?t.activeColor:""},on:{click:function(e){e=t.$handleEvent(e),t._onClick(a)}}},[t._v(t._s(e))])}),1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},a49d:function(t,e,n){"use strict";var a=n("2994"),i=n.n(a);i.a},b336:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},b841:function(t,e,n){"use strict";n.r(e);var a=n("112b"),i=n("54b4");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("c1c9");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"b97421aa",null);e["default"]=s.exports},b8eb:function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("7f7f");var i=a(n("f499"));n("7514");var o=a(n("795b")),r={get_satffAuth:function(){return new o.default(function(t,e){var n=uni.getStorageSync("user").objectId,a=Bmob.Query("staffs");a.get(n).then(function(e){t(e)}).catch(function(e){t()})})},get_stafflist:function(t,e){return new o.default(function(n,a){var o=JSON.parse(localStorage.getItem("bmob")).objectId,r=Bmob.Query("staffs");r.order("num"),r.equalTo("masterId","==",o),r.equalTo("disabled","==",t),r.include("shop"),e&&r.equalTo("name","==",{$regex:e+".*"}),r.find().then(function(t){localStorage.setItem("staffs",(0,i.default)(t)),n(t)})})},add_staff:function(t){var e=JSON.parse(localStorage.getItem("bmob")).objectId;return new o.default(function(n,a){var i=Bmob.Pointer("_User"),o=i.set(e),r=Bmob.Pointer("shops"),s=r.set(t.shop);if(t.objectId){var c=Bmob.Pointer("_User"),l=c.set(e),u=Bmob.Query("staffs");u.set("username",t.name),u.set("nickName",t.name),u.set("password",t.password),u.set("mobilePhoneNumber",t.mobilePhoneNumber),u.set("rights",t.rights),u.set("address",t.address),u.set("avatarUrl","http://bmob-cdn-23134.b0.upaiyun.com/2019/04/29/4705b31340bfff8080c068f52fd17e2c.png"),u.set("masterId",l),u.set("disabled",!t.disabled),u.set("shop",s),u.set("id",t.objectId),u.save().then(function(t){console.log(t),n(t)}).catch(function(t){console.log(t)})}else{var d=Bmob.Query("staffs");d.equalTo("masterId","==",e),d.equalTo("mobilePhoneNumber","==",t.mobilePhoneNumber),d.find().then(function(e){if(console.log(e),0==e.length){var a=Bmob.Query("staffs");a.set("username",t.name),a.set("shop",s),a.set("nickName",t.name),a.set("password",t.password),a.set("mobilePhoneNumber",t.mobilePhoneNumber),a.set("rights",t.rights),a.set("address",t.address),a.set("avatarUrl","http://bmob-cdn-23134.b0.upaiyun.com/2019/04/29/4705b31340bfff8080c068f52fd17e2c.png"),a.set("masterId",o),a.set("have_out",0),a.set("disabled",!t.disabled),a.save().then(function(t){console.log(t),n(t)}).catch(function(t){console.log(t)})}else n(!1,"已存在此账号")})}})},delete_staff:function(t){return new o.default(function(e,n){var a=Bmob.Query("staffs");a.destroy(t).then(function(t){e(t)}).catch(function(t){console.log(t)})})}};e.default=r},c1c9:function(t,e,n){"use strict";var a=n("da86"),i=n.n(a);i.a},cdca:function(t,e,n){},cf4d:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'.uni-navbar__content[data-v-21101b8e]{display:block;position:relative;width:100%;background-color:#fff;overflow:hidden;padding:0 %?30?%;width:calc(100% - %?60?%)}.uni-navbar__content uni-view[data-v-21101b8e]{line-height:%?78?%}.uni-navbar__header[data-v-21101b8e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;height:%?78?%;line-height:%?78?%;font-size:%?26?%;font-weight:700;color:#333}.uni-navbar__header-btns[data-v-21101b8e]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding:0 %?12?%}.uni-navbar__header-btns[data-v-21101b8e]:first-child{padding-left:0}.uni-navbar__header-btns[data-v-21101b8e]:last-child{text-align:right}.uni-navbar__header-container[data-v-21101b8e]{width:100%;margin:0 %?10?%}.uni-navbar__header-container-inner[data-v-21101b8e]{font-size:%?30?%;text-align:center;padding-right:%?60?%}.uni-navbar__placeholder-view[data-v-21101b8e]{height:%?88?%}.uni-navbar--fixed[data-v-21101b8e]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-21101b8e]{-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-21101b8e]:after{position:absolute;z-index:3;bottom:0;left:0;right:0;height:1px;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}',""])},da4c:function(t,e,n){"use strict";n.r(e);var a=n("b336"),i=n("2aab");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("933a");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"299237ae",null);e["default"]=s.exports},da86:function(t,e,n){var a=n("6e33");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("753d171d",a,!0,{sourceMap:!1,shadowMode:!1})},daf5:function(t,e,n){"use strict";n.r(e);var a=n("2d3d"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},e081:function(t,e,n){"use strict";n.r(e);var a=n("3e0e"),i=n("5a85");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("ef59");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"21101b8e",null);e["default"]=s.exports},eb38:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.loading?n("loading"):t._e(),n("v-uni-view",{attrs:{"wx:else":""}},[n("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"添加"},on:{"click-right":function(e){e=t.$handleEvent(e),t.goto_add(e)}}},[n("v-uni-view",{staticClass:"input-view"},[n("uni-icon",{attrs:{type:"search",size:"22",color:"#666666"}}),n("v-uni-input",{staticClass:"input",attrs:{"confirm-type":"search",type:"text",placeholder:"输入搜索关键词"},on:{confirm:function(e){e=t.$handleEvent(e),t.input_confirm(e)}}})],1)],1),n("v-uni-view",{staticClass:"uni-common-mt"},[n("uni-segmented-control",{attrs:{current:t.current,values:t.items,"style-type":"text","active-color":"#426ab3"},on:{clickItem:function(e){e=t.$handleEvent(e),t.onClickItem(e)}}})],1),n("v-uni-scroll-view",{staticClass:"indexes",staticStyle:{height:"calc(100vh - 212rpx)"},attrs:{"scroll-y":"","scroll-with-animation":"true","enable-back-to-top":"true"}},t._l(t.shops,function(e,a){return n("v-uni-view",{key:a},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"display_flex_bet",on:{click:function(n){n=t.$handleEvent(n),t.choose_way(e.objectId)}}},[n("v-uni-view",{staticClass:"display_flex"},[n("v-uni-image",{staticClass:"shop_avatar",attrs:{src:"/static/shop.png"}}),n("v-uni-view",[n("v-uni-view",{staticClass:"shop_name"},[t._v(t._s(e.name))]),n("v-uni-view",{staticClass:"shop_mobile"},[t._v("地址："+t._s(e.address))])],1)],1),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1),n("v-uni-view",{staticClass:"right_item"},[t.is_choose?n("v-uni-view",{staticClass:"display_flex",staticStyle:{"justify-content":"flex-end",width:"100%"},on:{click:function(n){n=t.$handleEvent(n),t.select_this(e)}}},[n("v-uni-text",{staticStyle:{color:"#d93a49"}},[t._v("选择")])],1):n("v-uni-view",{staticClass:"display_flex",staticStyle:{"justify-content":"flex-end"}},[n("fa-icon",{staticStyle:{"margin-right":"40rpx"},attrs:{type:"trash",size:"20",color:"#d93a49"},on:{click:function(n){n=t.$handleEvent(n),t.delete_this(e.objectId)}}}),n("fa-icon",{staticStyle:{"margin-right":"40rpx","padding-top":"6rpx"},attrs:{type:"pencil-square-o",size:"20",color:"#d93a49"},on:{click:function(e){e=t.$handleEvent(e),t.edit(t.stock)}}})],1)],1)],1)],1)}),1)],1)],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},ed66:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var a={name:"UniSegmentedControl",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:0}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},created:function(){this.currentIndex=this.current},methods:{_onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",t))}}};e.default=a},ef59:function(t,e,n){"use strict";var a=n("90b5"),i=n.n(a);i.a},f36b:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".segmented-control[data-v-0bf836b0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:75%;font-size:%?28?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;overflow:hidden;border:1px solid;border-radius:%?10?%}.segmented-control.text[data-v-0bf836b0]{border:0;border-radius:0}.segmented-control-item[data-v-0bf836b0]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;line-height:%?60?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-left:1px solid}.segmented-control-item.active[data-v-0bf836b0]{color:#fff}.segmented-control-item.text[data-v-0bf836b0]{border-left:0;color:#000}.segmented-control-item.text.active[data-v-0bf836b0]{border-bottom-style:solid}.segmented-control-item[data-v-0bf836b0]:first-child{border-left-width:0}",""])},f571:function(t,e,n){"use strict";n.r(e);var a=n("eb38"),i=n("daf5");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("38c4");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"3b8878b0",null);e["default"]=s.exports}}]);