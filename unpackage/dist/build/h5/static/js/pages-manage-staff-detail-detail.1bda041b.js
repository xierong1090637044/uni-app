(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-staff-detail-detail"],{"07ed":function(t,e,n){var i=n("5df1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("559413fe",i,!0,{sourceMap:!1,shadowMode:!1})},"283a":function(t,e,n){"use strict";n.r(e);var i=n("d62b"),a=n("34c1");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("444f");var o=n("2877"),r=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"4825547b",null);e["default"]=r.exports},"34c1":function(t,e,n){"use strict";n.r(e);var i=n("a4d0"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=a.a},"444f":function(t,e,n){"use strict";var i=n("07ed"),a=n.n(i);a.a},"5df1":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.frist[data-v-4825547b]{padding:%?20?% 0}.list_item[data-v-4825547b]{padding:%?20?% %?30?%;background:#fff}.border_bottom[data-v-4825547b]{border-bottom:%?1?% solid #f6f5ec}.second[data-v-4825547b]{line-height:%?44?%}',""])},a4d0:function(t,e,n){"use strict";(function(t){var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,s=i(n("c74b")),o=i(n("0914")),r=i(n("524a")),c={components:{faIcon:o.default,loading:r.default},data:function(){return{staff:"",Goods:null,reserve_num:0,reserve_money:0}},onLoad:function(){a=this,uni.getStorageSync("uid"),a.staff=uni.getStorageSync("staff")},methods:{show_options:function(){uni.showActionSheet({itemList:["编辑","删除"],success:function(t){0==t.tapIndex?a.edit(a.staff):1==t.tapIndex&&a.delete_this(a.staff.objectId)},fail:function(e){t.log(e.errMsg)}})},edit:function(e){t.log(e),uni.setStorageSync("staff",e),uni.navigateTo({url:"../add/add"})},delete_this:function(e){uni.showModal({title:"提示",content:"是否删除此员工",success:function(n){n.confirm&&(t.log(e),a.delete_data(e))}})},delete_data:function(e){t.log(e);var n=s.default.Query("staffs");n.destroy(e).then(function(n){var i=s.default.Query("staffs");i.get(e).then(function(e){if(e.userId){var n=s.default.Query("_User");n.destroy(e.userId).then(function(t){uni.showToast({title:"删除成功",icon:"none"}),uni.navigateBack({delta:1})})}t.log(e)}).catch(function(e){t.log(e)}),t.log(n),uni.showToast({title:"删除成功",icon:"none"}),uni.navigateBack({delta:1})}).catch(function(e){t.log(e)})},goto_edit:function(){uni.navigateTo({url:"../add/add"})},goto_detail:function(t){uni.setStorageSync("now_product",t),uni.navigateTo({url:"/pages/manage/good_det/good_det"})}}};e.default=c}).call(this,n("5a52")["default"])},d62b:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-nav-bar",{attrs:{fixed:!0,color:"#333333","background-color":"#FFFFFF","right-text":"操作"},on:{"click-right":function(e){e=t.$handleEvent(e),t.show_options(e)}}}),n("v-uni-view",{staticStyle:{padding:"0 30rpx",background:"#fff"}},[n("v-uni-view",{staticClass:"display_flex_bet frist border_bottom",on:{click:function(e){e=t.$handleEvent(e),t.goto_edit()}}},[n("v-uni-view",{staticClass:"display_flex"},[n("v-uni-view",[t._v("员工姓名")]),n("v-uni-view",{staticStyle:{"margin-left":"30rpx"}},[t._v(t._s(t.staff.username))])],1),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1),n("v-uni-view",{staticClass:"display_flex_bet frist border_bottom"},[n("v-uni-view",[t._v("联系电话")]),n("v-uni-view",{staticStyle:{color:"#999"}},[t._v(t._s(t.staff.mobilePhoneNumber))])],1),n("v-uni-view",{staticClass:"display_flex_bet frist border_bottom"},[n("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{width:"100%"}},[n("v-uni-view",[t._v("是否成功激活")]),t.staff.userId?n("v-uni-view",{staticStyle:{color:"#999"}},[t._v("已登录成功并激活")]):n("v-uni-view",{staticStyle:{color:"#999"}},[t._v("请让他登录激活")])],1)],1),n("v-uni-view",{staticClass:"display_flex_bet frist"},[n("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{width:"100%"}},[n("v-uni-view",[t._v("创建时间")]),n("v-uni-view",{staticStyle:{color:"#999"}},[t._v(t._s(t.staff.createdAt))])],1)],1)],1),t.staff.userId?n("v-uni-navigator",{staticClass:"list_item display_flex_bet",staticStyle:{margin:"20rpx 0"},attrs:{"hover-class":"none",url:"../history/history?id="+t.staff.userId.objectId}},[n("v-uni-text",{staticClass:"left_desc"},[t._v("相关的操作记录")]),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1):n("v-uni-view",{staticClass:"list_item display_flex_bet",staticStyle:{margin:"20rpx 0"},attrs:{"hover-class":"none"}},[n("v-uni-text",{staticClass:"left_desc"},[t._v("未激活，未产生操作记录")]),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})}}]);