(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/shops/shops"],{5871:function(n,e,o){},"5ba9":function(n,e,o){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=i(o("ee11"));function i(n){return n&&n.__esModule?n:{default:n}}var c,u,a,s=function(){return o.e("components/uni-segmented-control/uni-segmented-control").then(o.bind(null,"9bc6"))},l=function(){return o.e("components/Loading/index").then(o.bind(null,"524a"))},r=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"0914"))},d=function(){return o.e("components/uni-nav-bar/uni-nav-bar").then(o.bind(null,"b92d"))},f=function(){return o.e("components/uni-icon/uni-icon").then(o.bind(null,"5753"))},h={components:{uniSegmentedControl:s,faIcon:r,loading:l,uniNavBar:d,uniIcon:f},data:function(){return{loading:!0,shops:null,is_choose:!1,items:["已启用","未启用"],current:0,disabled:!1}},onLoad:function(e){c=this,a=n.getStorageSync("uid"),"choose"==e.type&&(c.is_choose=!0)},onShow:function(){n.removeStorageSync("shop"),c.getshop_list()},onUnload:function(){u=""},methods:{choose_way:function(e){n.showActionSheet({itemList:["员工列表","查看记录"],success:function(o){console.log("选中了第"+(o.tapIndex+1)+"个按钮"),0==o.tapIndex?n.navigateTo({url:"staff_in/staff_in?shopId="+e}):n.navigateTo({url:"record/record?shopId="+e})},fail:function(n){console.log(n.errMsg)}})},onClickItem:function(n){this.current!==n&&(this.current=n,0==n?(c.disabled=!1,c.getshop_list()):1==n&&(c.disabled=!0,c.getshop_list()))},select_this:function(e){n.setStorageSync("shop",e),n.navigateBack({delta:1})},edit:function(e){n.setStorageSync("shop",e),n.navigateTo({url:"add/add"})},delete_this:function(e){n.showModal({title:"提示",content:"是否删除此门店",success:function(n){n.confirm&&(console.log(e),c.delete_data(e))}})},delete_data:function(e){console.log(e);var o=t.default.Query("shops");o.destroy(e).then(function(e){console.log(e),n.showToast({title:"删除成功",icon:"none"}),c.getshop_list()}).catch(function(n){console.log(n)})},goto_add:function(){n.navigateTo({url:"add/add"})},input_confirm:function(n){u=n.detail.value,c.getshop_list()},getshop_list:function(){var n=t.default.Query("shops");n.order("num"),n.equalTo("parent","==",a),n.equalTo("disabled","==",c.disabled),u&&n.equalTo("name","==",{$regex:u+".*"}),n.find().then(function(n){console.log(n,a),c.loading=!1,c.shops=n})}}};e.default=h}).call(this,o("543d")["default"])},c8ef:function(n,e,o){"use strict";o.r(e);var t=o("5ba9"),i=o.n(t);for(var c in t)"default"!==c&&function(n){o.d(e,n,function(){return t[n]})}(c);e["default"]=i.a},cd0a:function(n,e,o){"use strict";var t=o("5871"),i=o.n(t);i.a},e8b4:function(n,e,o){"use strict";var t=function(){var n=this,e=n.$createElement;n._self._c},i=[];o.d(e,"a",function(){return t}),o.d(e,"b",function(){return i})},ed63:function(n,e,o){"use strict";o.r(e);var t=o("e8b4"),i=o("c8ef");for(var c in i)"default"!==c&&function(n){o.d(e,n,function(){return i[n]})}(c);o("cd0a");var u=o("2877"),a=Object(u["a"])(i["default"],t["a"],t["b"],!1,null,null,null);e["default"]=a.exports}},[["772c","common/runtime","common/vendor"]]]);