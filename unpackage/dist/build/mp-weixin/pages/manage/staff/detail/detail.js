(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/staff/detail/detail"],{"1ed9":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(e("c74b"));function o(n){return n&&n.__esModule?n:{default:n}}var a,u=function(){return e.e("components/kilvn-fa-icon/fa-icon").then(e.bind(null,"0914"))},c=function(){return e.e("components/Loading/index").then(e.bind(null,"524a"))},f={components:{faIcon:u,loading:c},data:function(){return{staff:"",Goods:null,reserve_num:0,reserve_money:0}},onLoad:function(){a=this,n.getStorageSync("uid"),a.staff=n.getStorageSync("staff")},methods:{goto_edit:function(){n.navigateTo({url:"../add/add"})},goto_detail:function(t){n.setStorageSync("now_product",t),n.navigateTo({url:"/pages/manage/good_det/good_det"})}}};t.default=f}).call(this,e("543d")["default"])},"283a":function(n,t,e){"use strict";e.r(t);var o=e("f67a"),a=e("34c1");for(var u in a)"default"!==u&&function(n){e.d(t,n,function(){return a[n]})}(u);e("fc71");var c=e("2877"),f=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=f.exports},"34c1":function(n,t,e){"use strict";e.r(t);var o=e("1ed9"),a=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);t["default"]=a.a},"3ef6":function(n,t,e){},c405:function(n,t,e){"use strict";(function(n){e("a961"),e("921b");o(e("66fd"));var t=o(e("283a"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},f67a:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a})},fc71:function(n,t,e){"use strict";var o=e("3ef6"),a=e.n(o);a.a}},[["c405","common/runtime","common/vendor"]]]);