(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-home_page-home_page"],{1505:function(t,a,i){var e=i("481a");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("18d36164",e,!0,{sourceMap:!1,shadowMode:!1})},"2b28":function(t,a,i){"use strict";var e=i("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("0914")),s={components:{faIcon:n.default},data:function(){return{userInfo:uni.getStorageSync("user")}},methods:{}};a.default=s},3062:function(t,a,i){"use strict";i.r(a);var e=i("2b28"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,function(){return e[t]})}(s);a["default"]=n.a},"481a":function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,".avatar[data-v-42929a64]{width:%?100?%;height:%?100?%;border-radius:50%}.thumb_background[data-v-42929a64]{width:%?100?%;height:%?100?%}.frist[data-v-42929a64]{padding:0 %?20?%;background:#fff}.item[data-v-42929a64]{padding:%?8?% 0;border-bottom:%?1?% solid#ddd}.item1[data-v-42929a64]{padding:%?20?% 0;border-bottom:%?1?% solid#ddd}.icon_enter[data-v-42929a64]{margin-left:%?20?%}.right_item[data-v-42929a64]{color:#999}.grjj[data-v-42929a64]{padding:%?20?% %?0?%;border-bottom:%?1?% solid#ccc}",""])},"698d":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("v-uni-view",{staticClass:"frist"},[i("v-uni-view",{staticClass:"display_flex_bet item",attrs:{bindtap:"setheaderimg"}},[i("v-uni-view",[t._v("头像")]),i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-image",{staticClass:"avatar",attrs:{src:t.userInfo.avatarUrl}}),i("fa-icon",{staticStyle:{"margin-left":"10rpx"},attrs:{type:"angle-right",size:"18",color:"#999"}})],1)],1),i("v-uni-view",{staticClass:"display_flex_bet item1"},[i("v-uni-view",[t._v("昵称")]),i("v-uni-view",{staticClass:"display_flex right_item"},[i("v-uni-text",[t._v(t._s(t.userInfo.nickName))]),i("fa-icon",{staticStyle:{"margin-left":"10rpx"},attrs:{type:"angle-right",size:"18",color:"#999"}})],1)],1),i("v-uni-view",{staticClass:"display_flex_bet item1",attrs:{bindtap:"change_sex"}},[i("v-uni-view",[t._v("性别")]),i("v-uni-view",{staticClass:"display_flex right_item"},[1==t.userInfo.sex?i("v-uni-text",[t._v("男")]):i("v-uni-text",[t._v("女")]),i("fa-icon",{staticStyle:{"margin-left":"10rpx"},attrs:{type:"angle-right",size:"18",color:"#999"}})],1)],1)],1),i("v-uni-view",{staticClass:"frist",staticStyle:{"margin-top":"20rpx"}},[i("v-uni-view",{staticClass:"display_flex_bet item1"},[i("v-uni-view",[t._v("手机号")]),i("v-uni-view",{staticClass:"display_flex right_item"},[i("v-uni-text",[t._v(t._s(t.userInfo.mobilePhoneNumber))]),i("fa-icon",{staticStyle:{"margin-left":"10rpx"},attrs:{type:"angle-right",size:"18",color:"#999"}})],1)],1)],1)],1)},n=[];i.d(a,"a",function(){return e}),i.d(a,"b",function(){return n})},c049:function(t,a,i){"use strict";i.r(a);var e=i("698d"),n=i("3062");for(var s in n)"default"!==s&&function(t){i.d(a,t,function(){return n[t]})}(s);i("ee01");var r=i("2877"),o=Object(r["a"])(n["default"],e["a"],e["b"],!1,null,"42929a64",null);a["default"]=o.exports},ee01:function(t,a,i){"use strict";var e=i("1505"),n=i.n(e);n.a}}]);