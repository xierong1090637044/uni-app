(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-shops-add-add"],{"304d":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".uni-status-bar[data-v-245f82ea]{display:block;width:100%;height:20px;height:0}",""])},"46f2":function(t,e,a){"use strict";var n=a("73a9"),i=a.n(n);i.a},"492c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"添加"},on:{"click-right":function(e){e=t.$handleEvent(e),t.start_add(e)}}},[a("v-uni-view")],1),a("v-uni-view",[a("v-uni-view",{staticClass:"display_flex item"},[a("v-uni-text",{staticStyle:{"margin-right":"6rpx"}},[t._v("门店名字")]),a("v-uni-text",{staticStyle:{color:"#d93a49","margin-right":"20rpx"}},[t._v("*")]),a("v-uni-input",{staticStyle:{width:"calc(100% - 200rpx)"},attrs:{placeholder:"请输入门店名字"},model:{value:t.shop_name,callback:function(e){t.shop_name=e},expression:"shop_name"}})],1),a("v-uni-view",{staticClass:"display_flex item"},[a("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[t._v("门店地址")]),a("v-uni-input",{staticStyle:{width:"calc(100% - 200rpx)"},attrs:{placeholder:"请输入门店地址"},model:{value:t.shop_address,callback:function(e){t.shop_address=e},expression:"shop_address"}})],1),a("v-uni-view",{staticClass:"display_flex item"},[a("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[t._v("门店电话")]),a("v-uni-input",{staticStyle:{width:"calc(100% - 200rpx)"},attrs:{placeholder:"请输入门店电话",type:"number",maxlength:"11"},model:{value:t.shop_phone,callback:function(e){t.shop_phone=e},expression:"shop_phone"}})],1),a("v-uni-view",{staticClass:"display_flex item"},[a("v-uni-text",{staticStyle:{"margin-right":"6rpx"}},[t._v("排序")]),a("v-uni-text",{staticStyle:{color:"#d93a49","margin-right":"20rpx"}},[t._v("*")]),a("v-uni-input",{staticStyle:{width:"calc(100% - 200rpx)"},attrs:{placeholder:"请输入排序(数值越小,排列越靠前)",type:"number",maxlength:"11"},model:{value:t.shop_num,callback:function(e){t.shop_num=e},expression:"shop_num"}})],1),a("v-uni-view",{staticClass:"display_flex_bet item",staticStyle:{"margin-bottom":"60rpx"}},[a("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[t._v("启用")]),a("v-uni-switch",{attrs:{checked:t.disabled},on:{change:function(e){e=t.$handleEvent(e),t.switchChange(e)}}})],1),a("v-uni-view",{staticClass:"display_flex item"},[a("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[t._v("备注")]),a("v-uni-input",{staticStyle:{width:"calc(100% - 200rpx)"},attrs:{placeholder:"请输入备注"},model:{value:t.shop_beizhu,callback:function(e){t.shop_beizhu=e},expression:"shop_beizhu"}})],1)],1)],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"51a9":function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("bc99")),o=n(a("c5a6")),s={name:"UniNavBar",components:{uniStatusBar:i.default,uniIcon:o.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:Boolean,default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:Boolean,default:!1},shadow:{type:Boolean,default:!0},border:{type:Boolean,default:!0}},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")}}};e.default=s},"52ac":function(t,e,a){var n=a("a21e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("3ac5d0d1",n,!0,{sourceMap:!1,shadowMode:!1})},"5c2c":function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("7514"),a("c5f6"),a("7f7f");var i,o,s,r=n(a("0f39")),u=n(a("e44a")),l={components:{faIcon:r.default,uniNavBar:u.default},data:function(){return{disabled:!0,shop_name:"",shop_address:"",shop_num:0,shop_phone:"",shop_beizhu:""}},onLoad:function(t){i=this,s=uni.getStorageSync("uid")},onShow:function(){o=uni.getStorageSync("shop"),o?(uni.setNavigationBarTitle({title:"修改门店"}),i.shop_name=o.name,i.shop_address=o.address,i.shop_phone=o.phone,i.shop_num=o.num,i.shop_beizhu=o.beizhu):uni.setNavigationBarTitle({title:"新增门店"})},onUnload:function(){uni.removeStorageSync("shop")},methods:{switchChange:function(t){i.disabled=t.detail.value},start_add:function(){""==this.shop_name?uni.showToast({title:"请输入门店名字",icon:"none"}):i.add_data()},add_data:function(){uni.showLoading({title:"上传中..."});var t=Bmob.Pointer("_User"),e=t.set(s);if(o){var a=Bmob.Query("shops");a.set("name",i.shop_name),a.set("num",Number(i.shop_num)),a.set("address",i.shop_address),a.set("phone",i.shop_phone),a.set("beizhu",i.shop_beizhu),a.set("parent",e),a.set("disabled",!i.disabled),a.set("id",o.objectId),a.save().then(function(t){uni.hideLoading(),console.log(t),uni.showToast({title:"修改成功"})}).catch(function(t){console.log(t)})}else{var n=Bmob.Query("shops");n.equalTo("parent","==",s),n.equalTo("name","==",i.shop_name),n.find().then(function(t){if(console.log(t),0==t.length){var a=Bmob.Query("shops");a.set("name",i.shop_name),a.set("num",Number(i.shop_num)),a.set("address",i.shop_address),a.set("phone",i.shop_phone),a.set("beizhu",i.shop_beizhu),a.set("have_out",0),a.set("disabled",!i.disabled),a.set("parent",e),a.save().then(function(t){console.log(t),uni.hideLoading(),uni.showToast({title:"添加成功"}),i.disabled=!0,i.shop_name="",i.shop_address="",i.shop_num=0,i.shop_phone="",i.shop_beizhu=""}).catch(function(t){console.log(t)})}else uni.showToast({title:"已存在此门店",icon:"none"})})}}}};e.default=l},"6b70":function(t,e,a){"use strict";a.r(e);var n=a("cc5d"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},"72dd":function(t,e,a){"use strict";a.r(e);var n=a("51a9"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},"73a9":function(t,e,a){var n=a("df0b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("e428c30a",n,!0,{sourceMap:!1,shadowMode:!1})},7418:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},a114:function(t,e,a){var n=a("304d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("1138b26e",n,!0,{sourceMap:!1,shadowMode:!1})},a21e:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"uni-page-body[data-v-04000128]{background:#fafafa}.item[data-v-04000128]{padding:%?20?% %?30?%;background:#fff}.rights_item[data-v-04000128]{margin-bottom:%?20?%}body.?%PAGE?%[data-v-04000128]{background:#fafafa}",""])},a4b8:function(t,e,a){"use strict";a.r(e);var n=a("492c"),i=a("fee9");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("efba");var s=a("2877"),r=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"04000128",null);e["default"]=r.exports},b554:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-navbar"},[a("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.border,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?a("uni-status-bar"):t._e(),a("v-uni-view",{staticClass:"uni-navbar__header",style:{color:t.color}},[a("v-uni-view",{staticClass:"uni-navbar__header-btns",on:{click:function(e){e=t.$handleEvent(e),t.onClickLeft(e)}}},[t.leftIcon.length?a("v-uni-view",[a("uni-icon",{attrs:{type:t.leftIcon,color:t.color,size:"24"}})],1):t._e(),t.leftText.length?a("v-uni-view",{staticClass:"uni-navbar-btn-text",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[t._v(t._s(t.leftText))]):t._e(),t._t("left")],2),a("v-uni-view",{staticClass:"uni-navbar__header-container"},[t.title.length?a("v-uni-view",{staticClass:"uni-navbar__header-container-inner"},[t._v(t._s(t.title))]):t._e(),t._t("default")],2),a("v-uni-view",{staticClass:"uni-navbar__header-btns",on:{click:function(e){e=t.$handleEvent(e),t.onClickRight(e)}}},[t.rightIcon.length?a("v-uni-view",[a("uni-icon",{attrs:{type:t.rightIcon,color:t.color,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?a("v-uni-view",{staticClass:"uni-navbar-btn-text"},[t._v(t._s(t.rightText))]):t._e(),t._t("right")],2)],1)],1),t.fixed?a("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?a("uni-status-bar"):t._e(),a("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},bc99:function(t,e,a){"use strict";a.r(e);var n=a("7418"),i=a("6b70");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("de06");var s=a("2877"),r=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"245f82ea",null);e["default"]=r.exports},cc5d:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.getSystemInfoSync().statusBarHeight+"px",i={name:"UniStatusBar",data:function(){return{statusBarHeight:n}}};e.default=i},de06:function(t,e,a){"use strict";var n=a("a114"),i=a.n(n);i.a},df0b:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,'.uni-navbar__content[data-v-afd25488]{display:block;position:relative;width:100%;background-color:#fff;overflow:hidden;padding:0 %?30?%;width:calc(100% - %?60?%)}.uni-navbar__content uni-view[data-v-afd25488]{line-height:%?78?%}.uni-navbar__header[data-v-afd25488]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;height:%?78?%;line-height:%?78?%;font-size:%?26?%;font-weight:700;color:#333}.uni-navbar__header-btns[data-v-afd25488]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding:0 %?12?%}.uni-navbar__header-btns[data-v-afd25488]:first-child{padding-left:0}.uni-navbar__header-btns[data-v-afd25488]:last-child{text-align:right}.uni-navbar__header-container[data-v-afd25488]{width:100%;margin:0 %?10?%}.uni-navbar__header-container-inner[data-v-afd25488]{font-size:%?30?%;text-align:center;padding-right:%?60?%}.uni-navbar__placeholder-view[data-v-afd25488]{height:%?88?%}.uni-navbar--fixed[data-v-afd25488]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-afd25488]{-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-afd25488]:after{position:absolute;z-index:3;bottom:0;left:0;right:0;height:1px;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}',""])},e44a:function(t,e,a){"use strict";a.r(e);var n=a("b554"),i=a("72dd");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("46f2");var s=a("2877"),r=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"afd25488",null);e["default"]=r.exports},efba:function(t,e,a){"use strict";var n=a("52ac"),i=a.n(n);i.a},fee9:function(t,e,a){"use strict";a.r(e);var n=a("5c2c"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a}}]);