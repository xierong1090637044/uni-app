(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/staff/staff"],{"1dc0":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a})},"2c03":function(n,t,e){"use strict";e.r(t);var o=e("1dc0"),a=e("576d");for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);e("dd2e");var u=e("2877"),c=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=c.exports},"576d":function(n,t,e){"use strict";e.r(t);var o=e("72cea"),a=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=a.a},"72cea":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(e("9546"));function a(n){return n&&n.__esModule?n:{default:n}}var i,u,c,r=function(){return e.e("components/uni-segmented-control/uni-segmented-control").then(e.bind(null,"c952"))},f=function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"96bd"))},s=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"3628"))},l=function(){return e.e("components/Loading/index").then(e.bind(null,"120a"))},d=function(){return e.e("components/kilvn-fa-icon/fa-icon").then(e.bind(null,"4d52"))},g={components:{uniSegmentedControl:r,loading:l,uniNavBar:f,faIcon:d,uniIcon:s},data:function(){return{loading:!0,staffs:null,is_choose:!1,items:["已启用","未启用"],current:0,disabled:!1}},onLoad:function(t){i=this,n.removeStorageSync(""),c=n.getStorageSync("uid"),console.log(t),"choose"==t.type&&(i.is_choose=!0)},onShow:function(){n.removeStorageSync("staff"),i.getstaff_list()},onUnload:function(){u=""},methods:{goto_detail:function(t){n.setStorageSync("staff",t),n.navigateTo({url:"detail/detail"})},onClickItem:function(n){this.current!==n&&(this.current=n,0==n?(i.disabled=!1,i.getstaff_list()):1==n&&(i.disabled=!0,i.getstaff_list()))},select_this:function(t){n.setStorageSync("charge",t),n.navigateBack({delta:1})},goto_add:function(){var t=n.getStorageSync("user"),e=n.getStorageSync("identity");t.is_vip||i.staffs.length<2?n.navigateTo({url:"add/add"}):n.showModal({title:"提示",content:"非会员最多上传2个员工账号",confirmText:"充值会员",success:function(t){t.confirm?1==e?n.navigateTo({url:"/pages/mine/vip/vip"}):n.showToast({title:"员工不能充值",icon:"none"}):t.cancel&&console.log("用户点击取消")}})},input_confirm:function(n){u=n.detail.value,i.getstaff_list()},getstaff_list:function(){var n=o.default.Query("staffs");n.order("-createdAt"),n.equalTo("masterId","==",c),n.equalTo("disabled","==",i.disabled),n.include("shop"),u&&n.equalTo("username","==",{$regex:u+".*"}),n.find().then(function(n){i.loading=!1,i.staffs=n})}}};t.default=g}).call(this,e("543d")["default"])},dd2e:function(n,t,e){"use strict";var o=e("e424"),a=e.n(o);a.a},e18f:function(n,t,e){"use strict";(function(n){e("d510"),e("921b");o(e("66fd"));var t=o(e("2c03"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},e424:function(n,t,e){}},[["e18f","common/runtime","common/vendor"]]]);