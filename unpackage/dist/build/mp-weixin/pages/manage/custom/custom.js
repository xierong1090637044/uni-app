(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/custom/custom"],{"017c":function(n,t,e){"use strict";e.r(t);var o=e("8c3f"),u=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);t["default"]=u.a},"49a5":function(n,t,e){"use strict";e.r(t);var o=e("e228"),u=e("017c");for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);e("b821");var c=e("2877"),r=Object(c["a"])(u["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},"8c3f":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(e("c74b"));function u(n){return n&&n.__esModule?n:{default:n}}var a,c,r,i=function(){return e.e("components/Loading/index").then(e.bind(null,"524a"))},d=function(){return e.e("components/kilvn-fa-icon/fa-icon").then(e.bind(null,"0914"))},l=function(){return e.e("components/uni-segmented-control/uni-segmented-control").then(e.bind(null,"9bc6"))},s=function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"b92d"))},f=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"5753"))},m={components:{loading:i,faIcon:d,uniSegmentedControl:l,uniNavBar:s,uniIcon:f},data:function(){return{loading:!0,items:["销售客户","供货商"],current:0,people:null,is_producer:!1,is_custom:!1}},onLoad:function(t){a=this,r=n.getStorageSync("uid"),"producer"==t.type?(a.is_producer=!0,a.current=1,a.load_data("producers")):"custom"==t.type&&(a.is_custom=!0,a.current=0,a.load_data("customs"))},onShow:function(){n.removeStorageSync("customs"),n.removeStorageSync("custom_type"),0==a.current?a.load_data("customs"):a.load_data("producers")},onUnload:function(){c=""},methods:{select_this:function(t,e){n.setStorageSync(t,e),n.navigateBack({delta:1})},goto_add:function(){n.showActionSheet({itemList:["新增客户","新增供货商"],success:function(t){console.log("选中了第"+(t.tapIndex+1)+"个按钮"),0==t.tapIndex?n.navigateTo({url:"add/add?type=customs"}):n.navigateTo({url:"add/add?type=producers"})},fail:function(n){console.log(n.errMsg)}})},input_confirm:function(n){c=n.detail.value,0==this.current?a.load_data("customs"):a.load_data("producers")},onClickItem:function(n){this.current!==n&&(this.current=n,0==this.current?a.load_data("customs"):a.load_data("producers"))},load_data:function(n){var t=o.default.Query(n);t.equalTo("parent","==",r),t.limit(500),c&&("customs"==n?t.equalTo("custom_name","==",{$regex:c+".*"}):t.equalTo("producer_name","==",{$regex:c+".*"})),t.find().then(function(n){console.log(n),a.loading=!1,a.people=n})}}};t.default=m}).call(this,e("543d")["default"])},aba9d:function(n,t,e){},b821:function(n,t,e){"use strict";var o=e("aba9d"),u=e.n(o);u.a},c258:function(n,t,e){"use strict";(function(n){e("a961"),e("921b");o(e("66fd"));var t=o(e("49a5"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},e228:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return u})}},[["c258","common/runtime","common/vendor"]]]);