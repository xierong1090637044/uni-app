(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/staff/staff"],{"6fb5":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},7520:function(t,n,e){"use strict";var a=e("9acf"),o=e.n(a);o.a},9268:function(t,n,e){"use strict";e.r(n);var a=e("ac64"),o=e.n(a);for(var f in a)"default"!==f&&function(t){e.d(n,t,function(){return a[t]})}(f);n["default"]=o.a},"9acf":function(t,n,e){},ac64:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(e("e21e"));function o(t){return t&&t.__esModule?t:{default:t}}var f,s,c=function(){return e.e("components/Loading/index").then(e.bind(null,"c211"))},u=function(){return e.e("components/kilvn-fa-icon/fa-icon").then(e.bind(null,"8899"))},i=t.getStorageSync("uid"),r={components:{faIcon:u,loading:c},data:function(){return{loading:!0,staffs:null,is_choose:!1}},onLoad:function(t){f=this,console.log(t," at pages\\manage\\staff\\staff.vue:59"),"choose"==t.type&&(f.is_choose=!0)},onShow:function(){t.removeStorageSync("staff"),t.removeStorageSync("charge"),f.getstaff_list()},methods:{select_this:function(n){t.setStorageSync("charge",n),t.navigateBack({delta:2})},edit:function(n){t.setStorageSync("staff",n),t.navigateTo({url:"add/add"})},delete_this:function(n){t.showModal({title:"提示",content:"是否删除此员工",success:function(t){t.confirm&&(console.log(n," at pages\\manage\\staff\\staff.vue:94"),f.delete_data(n))}})},delete_data:function(n){console.log(n," at pages\\manage\\staff\\staff.vue:103");var e=a.default.Query("staffs");e.destroy(n).then(function(n){console.log(n," at pages\\manage\\staff\\staff.vue:106"),t.showToast({title:"删除成功",icon:"none"}),f.getstaff_list()}).catch(function(t){console.log(t," at pages\\manage\\staff\\staff.vue:113")})},onNavigationBarButtonTap:function(n){t.navigateTo({url:"add/add"})},onNavigationBarSearchInputConfirmed:function(t){console.log(t.text," at pages\\manage\\staff\\staff.vue:127"),s=t.text,f.getstaff_list()},getstaff_list:function(){var t=a.default.Query("staffs");t.order("-createdAt"),t.equalTo("masterId","==",i),s&&t.equalTo("username","==",{$regex:s+".*"}),t.find().then(function(t){f.loading=!1,f.staffs=t})}}};n.default=r}).call(this,e("6e42")["default"])},da15:function(t,n,e){"use strict";e.r(n);var a=e("6fb5"),o=e("9268");for(var f in o)"default"!==f&&function(t){e.d(n,t,function(){return o[t]})}(f);e("7520");var s=e("2877"),c=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports}},[["153c","common/runtime","common/vendor"]]]);