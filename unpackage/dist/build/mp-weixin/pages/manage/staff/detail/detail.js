(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/staff/detail/detail"],{"0ed4":function(n,t,e){"use strict";var o=e("f363"),a=e.n(o);a.a},5746:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o(e("906f"));function o(n){return n&&n.__esModule?n:{default:n}}var a,u=function(){return e.e("components/kilvn-fa-icon/fa-icon").then(e.bind(null,"eaf0"))},f=function(){return e.e("components/Loading/index").then(e.bind(null,"c7fb"))},r={components:{faIcon:u,loading:f},data:function(){return{staff:"",Goods:null,reserve_num:0,reserve_money:0}},onLoad:function(){a=this,n.getStorageSync("uid"),a.staff=n.getStorageSync("staff")},methods:{goto_edit:function(){n.navigateTo({url:"../add/add"})},goto_detail:function(t){n.setStorageSync("now_product",t),n.navigateTo({url:"/pages/manage/good_det/good_det"})}}};t.default=r}).call(this,e("543d")["default"])},"6a1a":function(n,t,e){"use strict";(function(n){e("bc8c"),e("921b");o(e("66fd"));var t=o(e("9950"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},8248:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a})},9950:function(n,t,e){"use strict";e.r(t);var o=e("8248"),a=e("9b1b");for(var u in a)"default"!==u&&function(n){e.d(t,n,function(){return a[n]})}(u);e("0ed4");var f=e("2877"),r=Object(f["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},"9b1b":function(n,t,e){"use strict";e.r(t);var o=e("5746"),a=e.n(o);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);t["default"]=a.a},f363:function(n,t,e){}},[["6a1a","common/runtime","common/vendor"]]]);