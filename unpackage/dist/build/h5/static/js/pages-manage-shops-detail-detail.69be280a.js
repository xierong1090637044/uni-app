(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-shops-detail-detail"],{"10ef":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.frist[data-v-5e8abb68]{padding:%?20?% 0}.list_item[data-v-5e8abb68]{padding:%?20?% %?30?%;background:#fff;border-bottom:%?1?% solid #f7f7f7;margin:0 0 %?20?%}.fristImage[data-v-5e8abb68]{text-align:center;width:100%;height:%?300?%;padding:%?30?% 0;background:#fff;border-bottom:%?1?% solid #f7f7f7}.border_bottom[data-v-5e8abb68]{border-bottom:%?1?% solid #f6f5ec}.second[data-v-5e8abb68]{line-height:%?44?%}.staff_name[data-v-5e8abb68]{font-weight:700;font-size:%?30?%;color:#3d3d3d;margin-bottom:%?4?%}.staff_mobile[data-v-5e8abb68]{color:#999}.right_item[data-v-5e8abb68]{width:100%;border-bottom:%?1?% solid #ccc}.staff_avatar[data-v-5e8abb68]{width:%?100?%;height:%?70?%;margin-right:%?20?%}.content[data-v-5e8abb68]{padding:%?10?% %?30?%;background:#fff}',""]),t.exports=e},"29e7":function(t,e,a){"use strict";a.r(e);var n=a("7ae8"),i=a("819d");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("fcf5");var s,r=a("f0c5"),d=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"5e8abb68",null,!1,n["a"],s);e["default"]=d.exports},"7ae8":function(t,e,a){"use strict";var n={"uni-nav-bar":a("96bd").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t.loading?a("loading"):t._e(),a("uni-nav-bar",{attrs:{fixed:!0,color:"#333333","background-color":"#FFFFFF","right-text":"操作"},on:{"click-right":function(e){arguments[0]=e=t.$handleEvent(e),t.show_options.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"fristImage"},[t.shop.Image&&t.shop.Image[0]?a("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.shop.Image[0],mode:"aspectFit"}}):a("v-uni-image",{staticStyle:{height:"100%"},attrs:{src:"/static/shop.png",mode:"aspectFit"}})],1),a("v-uni-navigator",{staticClass:"list_item display_flex_bet",attrs:{"hover-class":"none",url:"../record/record?shopId="+t.shop.objectId}},[a("v-uni-text",{staticClass:"left_desc"},[t._v("相关的操作记录")]),a("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1),a("v-uni-view",{staticStyle:{background:"#fff",padding:"0 30rpx"}},[a("v-uni-view",{staticStyle:{padding:"20rpx 0rpx","border-bottom":"1rpx solid#F7F7F7"}},[t._v("员工统计")]),t.staffs.length>0?a("v-uni-view",{staticStyle:{background:"#FFFFFF"}},t._l(t.staffs,(function(e,n){return a("v-uni-view",{key:n},[a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"display_flex"},[a("v-uni-image",{staticClass:"user_avatar",attrs:{src:e.avatarUrl}}),a("v-uni-view",[a("v-uni-view",{staticClass:"staff_name"},[t._v(t._s(e.username))]),a("v-uni-view",{staticClass:"staff_mobile"},[t._v("账号："+t._s(e.mobilePhoneNumber))])],1)],1),a("v-uni-view",{staticClass:"right_item"},[a("v-uni-view",{staticClass:"display_flex",staticStyle:{"justify-content":"flex-end",width:"100%"}},[a("v-uni-text",{staticStyle:{color:"#d93a49"}},[t._v("总销售："+t._s(e.have_out))])],1)],1)],1)],1)})),1):a("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"30rpx 0"}},[t._v("暂无员工")])],1)],1)},o=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}))},"819d":function(t,e,a){"use strict";a.r(e);var n=a("c39e"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},af24:function(t,e,a){var n=a("10ef");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("c850dbd8",n,!0,{sourceMap:!1,shadowMode:!1})},c39e:function(t,e,a){"use strict";(function(t){var n=a("ee27");a("7db0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o,s=n(a("9546")),r=n(a("4d52")),d=n(a("120a")),c={components:{faIcon:r.default,loading:d.default},data:function(){return{loading:!0,shop:"",staffs:[],reserve_num:0,reserve_money:0}},onLoad:function(){i=this,o=uni.getStorageSync("uid"),i.shop=uni.getStorageSync("shop"),i.getstaff_list()},methods:{show_options:function(){uni.showActionSheet({itemList:["编辑","删除"],success:function(t){0==t.tapIndex?i.edit(i.shop):1==t.tapIndex&&i.delete_this(i.shop.objectId)},fail:function(e){t.log(e.errMsg)}})},getstaff_list:function(){var t=s.default.Query("_User");t.order("-createdAt"),t.equalTo("masterId","==",o),t.equalTo("shop","==",i.shop.objectId),t.find().then((function(t){i.loading=!1,i.staffs=t}))},edit:function(t){uni.setStorageSync("warehouse",t),uni.setStorageSync("charge",t.charge),uni.setStorageSync("shop",t.shop),uni.navigateTo({url:"../add/add"})},delete_this:function(e){uni.showModal({title:"提示",content:"请谨慎删除，一旦删除，数据不能恢复，是否删除此店仓",success:function(a){a.confirm&&(t.log(e),i.delete_data(e))}})},delete_data:function(e){t.log(e);var a=s.default.Query("shops");a.destroy(e).then((function(e){t.log(e),uni.showToast({title:"删除成功",icon:"none"}),uni.navigateBack({delta:1})})).catch((function(e){t.log(e)}))},goto_detail:function(t){uni.setStorageSync("now_product",t),uni.navigateTo({url:"/pages/manage/good_det/good_det"})}}};e.default=c}).call(this,a("5a52")["default"])},fcf5:function(t,e,a){"use strict";var n=a("af24"),i=a.n(n);i.a}}]);