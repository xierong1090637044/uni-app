(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/shops/shops"],{"039d":function(n,t,e){},"1dff":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(e("c74b")),i=a(e("c8f0"));function a(n){return n&&n.__esModule?n:{default:n}}var c,u,s,l=function(){return e.e("components/uni-segmented-control/uni-segmented-control").then(e.bind(null,"9bc6"))},r=function(){return e.e("components/Loading/index").then(e.bind(null,"524a"))},d=function(){return e.e("components/kilvn-fa-icon/fa-icon").then(e.bind(null,"0914"))},f=function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"b92d"))},h=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"5753"))},g={components:{uniSegmentedControl:l,faIcon:d,loading:r,uniNavBar:f,uniIcon:h},data:function(){return{loading:!0,shops:null,is_choose:!1,items:["已启用","未启用"],current:0,disabled:!1}},onLoad:function(t){c=this,s=n.getStorageSync("uid"),"choose"==t.type&&(c.is_choose=!0)},onShow:function(){n.removeStorageSync("shop"),c.getshop_list()},onUnload:function(){u=""},methods:{choose_way:function(t){n.showActionSheet({itemList:["员工列表","查看记录"],success:function(e){console.log("选中了第"+(e.tapIndex+1)+"个按钮"),0==e.tapIndex?n.navigateTo({url:"staff_in/staff_in?shopId="+t}):n.navigateTo({url:"record/record?shopId="+t})},fail:function(n){console.log(n.errMsg)}})},onClickItem:function(n){this.current!==n&&(this.current=n,0==n?(c.disabled=!1,c.getshop_list()):1==n&&(c.disabled=!0,c.getshop_list()))},select_this:function(t){n.setStorageSync("shop",t),n.navigateBack({delta:1})},edit:function(t){n.setStorageSync("shop",t),n.navigateTo({url:"add/add"})},delete_this:function(t){n.showModal({title:"提示",content:"是否删除此门店",success:function(n){n.confirm&&(console.log(t),c.delete_data(t))}})},delete_data:function(t){console.log(t);var e=o.default.Query("shops");e.destroy(t).then(function(t){console.log(t),n.showToast({title:"删除成功",icon:"none"}),c.getshop_list()}).catch(function(n){console.log(n)})},goto_add:function(){n.navigateTo({url:"add/add"})},input_confirm:function(n){u=n.detail.value,c.getshop_list()},getshop_list:function(){var t=o.default.Query("shops");t.order("num"),t.equalTo("parent","==",s),t.equalTo("disabled","==",c.disabled),u&&t.equalTo("name","==",{$regex:u+".*"}),t.find().then(function(t){console.log(t,s),c.loading=!1;var e=t;n.getStorage({key:"identity",success:function(n){"2"==n.data?i.default.get_satffAuth().then(function(n){console.log(n);var t=[];if(n.shop){var o=!0,i=!1,a=void 0;try{for(var u,s=e[Symbol.iterator]();!(o=(u=s.next()).done);o=!0){var l=u.value;l.objectId==n.shop.objectId&&t.push(l)}}catch(r){i=!0,a=r}finally{try{o||null==s.return||s.return()}finally{if(i)throw a}}}c.shops=t}):"1"==n.data&&(c.shops=e)}})})}}};t.default=g}).call(this,e("543d")["default"])},"6f71":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},i=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i})},"772c":function(n,t,e){"use strict";(function(n){e("a961"),e("921b");o(e("66fd"));var t=o(e("ed63"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},c8ef:function(n,t,e){"use strict";e.r(t);var o=e("1dff"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);t["default"]=i.a},cd0a:function(n,t,e){"use strict";var o=e("039d"),i=e.n(o);i.a},ed63:function(n,t,e){"use strict";e.r(t);var o=e("6f71"),i=e("c8ef");for(var a in i)"default"!==a&&function(n){e.d(t,n,function(){return i[n]})}(a);e("cd0a");var c=e("2877"),u=Object(c["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports}},[["772c","common/runtime","common/vendor"]]]);