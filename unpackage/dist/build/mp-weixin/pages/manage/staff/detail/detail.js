(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/staff/detail/detail"],{1370:function(t,n,e){"use strict";(function(t){e("9787"),e("921b");o(e("66fd"));var n=o(e("bb83"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"384e":function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return o})},4765:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e("93d5"));function a(t){return t&&t.__esModule?t:{default:t}}var c,u=function(){return e.e("components/kilvn-fa-icon/fa-icon").then(e.bind(null,"d7ee"))},i=function(){return e.e("components/Loading/index").then(e.bind(null,"359f"))},f={components:{faIcon:u,loading:i},data:function(){return{staff:"",NGoods:null,reserve_num:0,reserve_money:0}},onLoad:function(){c=this,t.getStorageSync("uid"),c.staff=t.getStorageSync("staff")},methods:{show_options:function(){t.showActionSheet({itemList:["编辑","删除"],success:function(t){0==t.tapIndex?c.edit(c.staff):1==t.tapIndex&&c.delete_this(c.staff.objectId)},fail:function(t){console.log(t.errMsg)}})},edit:function(n){console.log(n),t.setStorageSync("staff",n),t.navigateTo({url:"../add/add"})},delete_this:function(n){t.showModal({title:"提示",content:"是否删除此员工",success:function(t){t.confirm&&(console.log(n),c.delete_data(n))}})},delete_data:function(n){console.log(n);var e=o.default.Pointer("_User");e.destroy(n).then(function(e){var a=o.default.Query("_User");a.get(n).then(function(n){if(n.userId){var e=o.default.Query("_User");e.destroy(n.userId).then(function(n){t.showToast({title:"删除成功",icon:"none"}),t.navigateBack({delta:1})})}console.log(n)}).catch(function(t){console.log(t)}),console.log(e),t.showToast({title:"删除成功",icon:"none"}),t.navigateBack({delta:1})}).catch(function(t){console.log(t)})},goto_edit:function(){t.navigateTo({url:"../add/add"})},goto_detail:function(n){t.setStorageSync("now_product",n),t.navigateTo({url:"/pages/manage/good_det/good_det"})}}};n.default=f}).call(this,e("543d")["default"])},"90b4":function(t,n,e){"use strict";var o=e("cee0"),a=e.n(o);a.a},bb83:function(t,n,e){"use strict";e.r(n);var o=e("384e"),a=e("ebc9");for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);e("90b4");var u,i=e("f0c5"),f=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=f.exports},cee0:function(t,n,e){},ebc9:function(t,n,e){"use strict";e.r(n);var o=e("4765"),a=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);n["default"]=a.a}},[["1370","common/runtime","common/vendor"]]]);