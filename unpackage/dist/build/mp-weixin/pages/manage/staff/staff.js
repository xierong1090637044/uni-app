(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/staff/staff"],{"12d7":function(n,t,e){"use strict";e.r(t);var o=e("44d3"),a=e("1d5c");for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);e("939a");var c=e("2877"),u=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},"1d5c":function(n,t,e){"use strict";e.r(t);var o=e("2565"),a=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=a.a},2565:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(e("c74b"));function a(n){return n&&n.__esModule?n:{default:n}}var i,c,u,s=function(){return e.e("components/uni-segmented-control/uni-segmented-control").then(e.bind(null,"9bc6"))},l=function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"b92d"))},f=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"5753"))},r=function(){return e.e("components/Loading/index").then(e.bind(null,"524a"))},d=function(){return e.e("components/kilvn-fa-icon/fa-icon").then(e.bind(null,"0914"))},g={components:{uniSegmentedControl:s,loading:r,uniNavBar:l,faIcon:d,uniIcon:f},data:function(){return{loading:!0,staffs:null,is_choose:!1,items:["已启用","未启用"],current:0,disabled:!1}},onLoad:function(t){i=this,u=n.getStorageSync("uid"),console.log(t),"choose"==t.type&&(i.is_choose=!0)},onShow:function(){n.removeStorageSync("staff"),i.getstaff_list()},onUnload:function(){c=""},methods:{goto_detail:function(t){n.setStorageSync("staff",t),n.navigateTo({url:"detail/detail"})},onClickItem:function(n){this.current!==n&&(this.current=n,0==n?(i.disabled=!1,i.getstaff_list()):1==n&&(i.disabled=!0,i.getstaff_list()))},select_this:function(t){n.setStorageSync("charge",t),n.navigateBack({delta:1})},edit:function(t){console.log(t),n.setStorageSync("staff",t),n.navigateTo({url:"add/add"})},delete_this:function(t){n.showModal({title:"提示",content:"是否删除此员工",success:function(n){n.confirm&&(console.log(t),i.delete_data(t))}})},delete_data:function(t){console.log(t);var e=o.default.Query("staffs");e.destroy(t).then(function(t){console.log(t),n.showToast({title:"删除成功",icon:"none"}),i.getstaff_list()}).catch(function(n){console.log(n)})},goto_add:function(){var t=n.getStorageSync("user"),e=n.getStorageSync("identity");t.is_vip||i.staffs.length<2?n.navigateTo({url:"add/add"}):n.showModal({title:"提示",content:"非会员最多上传2个员工账号",confirmText:"充值会员",success:function(t){t.confirm?1==e?n.navigateTo({url:"/pages/mine/vip/vip"}):n.showToast({title:"员工不能充值",icon:"none"}):t.cancel&&console.log("用户点击取消")}})},input_confirm:function(n){c=n.detail.value,i.getstaff_list()},getstaff_list:function(){var n=o.default.Query("staffs");n.order("-createdAt"),n.equalTo("masterId","==",u),n.equalTo("disabled","==",i.disabled),n.include("shop"),c&&n.equalTo("username","==",{$regex:c+".*"}),n.find().then(function(n){i.loading=!1,i.staffs=n})}}};t.default=g}).call(this,e("543d")["default"])},"44d3":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a})},"939a":function(n,t,e){"use strict";var o=e("d901"),a=e.n(o);a.a},a70c:function(n,t,e){"use strict";(function(n){e("a961"),e("921b");o(e("66fd"));var t=o(e("12d7"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},d901:function(n,t,e){}},[["a70c","common/runtime","common/vendor"]]]);