(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-warehouse-detail-detail"],{"0032":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.frist[data-v-24ac6d3c]{padding:%?20?% 0}.border_bottom[data-v-24ac6d3c]{border-bottom:%?1?% solid #f6f5ec}.list_item[data-v-24ac6d3c]{padding:%?20?% %?30?%;background:#fff;border-bottom:%?1?% solid #f7f7f7;margin:0 0 %?20?%}.second[data-v-24ac6d3c]{line-height:%?44?%}',""])},"064b":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.loading?n("loading"):t._e(),n("uni-nav-bar",{attrs:{fixed:!0,color:"#333333","background-color":"#FFFFFF","right-text":"操作"},on:{"click-right":function(e){arguments[0]=e=t.$handleEvent(e),t.show_options.apply(void 0,arguments)}}}),n("v-uni-view",{staticStyle:{padding:"0 30rpx",background:"#fff"}},[n("v-uni-view",{staticClass:"display_flex_bet frist border_bottom",attrs:{"hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.edit(t.stock)}}},[n("v-uni-view",{staticClass:"display_flex"},[n("v-uni-view",[t._v("仓库名称")]),n("v-uni-view",{staticStyle:{"margin-left":"30rpx"}},[t._v(t._s(t.stock.stock_name))])],1),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1),n("v-uni-view",{staticClass:"display_flex_bet frist border_bottom"},[n("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{width:"100%"}},[n("v-uni-view",[t._v("库存数量")]),n("v-uni-view",[t._v(t._s(t.reserve_num))])],1)],1),n("v-uni-view",{staticClass:"display_flex_bet frist border_bottom"},[n("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{width:"100%"}},[n("v-uni-view",[t._v("库存金额")]),n("v-uni-view",[t._v(t._s(t.reserve_money))])],1)],1)],1),n("v-uni-navigator",{staticClass:"list_item display_flex_bet",attrs:{"hover-class":"none",url:"../record/record?stockId="+t.stock.objectId}},[n("v-uni-text",{staticClass:"left_desc"},[t._v("相关的操作记录")]),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1),n("v-uni-view",{staticStyle:{margin:"40rpx 0 20rpx"}},[n("v-uni-view",{staticStyle:{padding:"0 30rpx 20rpx"}},[t._v("存货统计")]),n("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"0 30rpx"}},[t.Goods&&0==t.Goods.length?n("v-uni-view",{staticClass:"second",staticStyle:{"font-weight":"bold",padding:"20rpx 0"}},[t._v("未有存货")]):t._l(t.Goods,function(e,i){return n("v-uni-view",{key:i,staticClass:"display_flex_bet second border_bottom",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goto_detail(e)}}},[n("v-uni-view",[n("v-uni-view",[t._v(t._s(e.goodsName))]),0==e.reserve?n("v-uni-view",[t._v("0%")]):n("v-uni-view",[t._v(t._s(e.reserve/t.reserve_num*100)+"%")])],1),n("v-uni-view",{staticClass:"display_flex"},[n("v-uni-view",{staticStyle:{"margin-right":"20rpx"}},[t._v(t._s(e.reserve))]),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1)})],2)],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"22d4":function(t,e,n){"use strict";n.r(e);var i=n("064b"),a=n("5aa9");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("b38a");var s=n("f0c5"),r=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"24ac6d3c",null);e["default"]=r.exports},"2aff":function(t,e,n){"use strict";(function(t){var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var a=i(n("5d73"));n("7514");var o,s,r=i(n("9546")),c=i(n("4d52")),d=i(n("120a")),u={components:{faIcon:c.default,loading:d.default},data:function(){return{loading:!0,stock:"",Goods:null,reserve_num:0,reserve_money:0}},onLoad:function(){o=this,s=uni.getStorageSync("uid"),o.stock=uni.getStorageSync("stock"),o.get_detail()},methods:{show_options:function(){uni.showActionSheet({itemList:["编辑","删除"],success:function(t){if(0==t.tapIndex)o.edit(o.stock);else if(1==t.tapIndex){var e=r.default.Query("stocks");e.equalTo("parent","==",s),e.equalTo("disabled","!=",!0),e.find().then(function(t){t.length>1?o.delete_this(o.stock.objectId):uni.showToast({title:"最少保留一个仓库",icon:"none"})})}},fail:function(e){t.log(e.errMsg)}})},edit:function(t){uni.setStorageSync("warehouse",t),uni.setStorageSync("charge",t.charge),uni.setStorageSync("shop",t.shop),uni.navigateTo({url:"../add/add"})},delete_this:function(e){uni.showModal({title:"提示",content:"请谨慎删除，一旦删除，数据不能恢复，是否删除此仓库",success:function(n){n.confirm&&(t.log(e),o.delete_data(e))}})},delete_data:function(e){t.log(e);var n=r.default.Query("stocks");n.destroy(e).then(function(e){t.log(e),uni.showToast({title:"删除成功",icon:"none"}),uni.navigateBack({delta:1})}).catch(function(e){t.log(e)})},goto_detail:function(t){uni.setStorageSync("now_product",t),1==t.order?uni.navigateTo({url:"/pages/manage/good_det/Ngood_det"}):uni.navigateTo({url:"/pages/manage/good_det/good_det"})},get_detail:function(){var e=r.default.Query("Goods");e.equalTo("userId","==",s),e.equalTo("stocks","==",uni.getStorageSync("stock").objectId),e.limit(500),e.order("-reserve"),e.find().then(function(e){t.log(e),o.Goods=e;var n=0,i=0,s=!0,r=!1,c=void 0;try{for(var d,u=(0,a.default)(e);!(s=(d=u.next()).done);s=!0){var l=d.value;i+=Number(l.costPrice)*Number(l.reserve),n+=Number(l.reserve)}}catch(v){r=!0,c=v}finally{try{s||null==u.return||u.return()}finally{if(r)throw c}}o.reserve_money=i,o.reserve_num=n,o.loading=!1})}}};e.default=u}).call(this,n("5a52")["default"])},"5aa9":function(t,e,n){"use strict";n.r(e);var i=n("2aff"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},b38a:function(t,e,n){"use strict";var i=n("ea84"),a=n.n(i);a.a},ea84:function(t,e,n){var i=n("0032");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("a2047730",i,!0,{sourceMap:!1,shadowMode:!1})}}]);