(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tarBar/index"],{"0a37":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=c(o("93e8")),a=c(o("ca83")),i=c(o("5293")),r=c(o("906f"));function c(t){return t&&t.__esModule?t:{default:t}}var s,l,u=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"eaf0"))},d=function(){return o.e("components/uni-notice-bar/uni-notice-bar").then(o.bind(null,"2810"))},g=function(){return o.e("components/uni-search-bar/uni-search-bar").then(o.bind(null,"a8a5"))},f={components:{faIcon:u,uniNoticeBar:d,uniSearchBar:g},data:function(){return{logsList:[],optionsLists:[{name:"采购或入库",icon:"/static/entering.png",url:"/pages/common/goods-select/goods-select?type=entering"},{name:"销售或出库",icon:"/static/delivery.png",url:"/pages/common/goods-select/goods-select?type=delivery"},{name:"产品调拨",icon:"/static/allocation.png",url:"/pages/common/goods-select/goods-select?type=allocation"},{name:"退货入库",icon:"/static/return_goods.png",url:"/pages/common/goods-select/goods-select?type=returing"},{name:"库存盘点",icon:"/static/stocking.png",url:"/pages/common/goods-select/goods-select?type=counting"}],get_reserve:0,out_reserve:0,total_reserve:0,total_money:0,total_products:0,openid:""}},onLoad:function(e){s=this,l=t.getStorageSync("uid"),a.default.query_setting(),e.openid&&t.setStorageSync("openid",e.openid)},onShow:function(){s.gettoday_detail(),s.loadallGoods(),s.get_logsList()},onShareAppMessage:function(t){return"button"===t.from&&console.log(t.target),{title:"库存表，欢迎您的加入",path:"/pages/tarBar/index"}},methods:{search:function(e){console.log(e);var o=e.value;t.navigateTo({url:"/pages/manage/goods/goods?search_text="+o})},scan_code:function(){t.showActionSheet({itemList:["扫码出库","扫码入库","扫码盘点","查看详情","扫码添加商品"],success:function(t){s.scan(t.tapIndex)},fail:function(t){console.log(t.errMsg)}})},scan:function(e){t.scanCode({success:function(o){var n=o.result,a=n.split("-");0==e?t.navigateTo({url:"/pages/common/goods_out/goods_out?id="+a[0]+"&type="+a[1]}):1==e?t.navigateTo({url:"/pages/common/good_confrim/good_confrim?id="+a[0]+"&type="+a[1]}):2==e?t.navigateTo({url:"/pages/common/good_count/good_count?id="+a[0]+"&type="+a[1]}):3==e?t.navigateTo({url:"/pages/manage/good_det/good_det?id="+a[0]+"&type="+a[1]}):4==e&&t.navigateTo({url:"/pages/manage/good_add/good_add?id="+n})},fail:function(e){t.showToast({title:"未识别到条形码",icon:"none"})}})},gettoday_detail:function(){var e=0,o=0,a=r.default.Query("Bills");a.equalTo("userId","==",l),a.equalTo("createdAt",">=",n.default.getDay(0,!0)),a.equalTo("createdAt","<=",n.default.getDay(1,!0)),a.include("goodsId"),a.find().then(function(n){for(var a=0;a<n.length;a++)1==n[a].type?(e+=n[a].num,n[a].num*n[a].goodsId.retailPrice,n[a].total_money):-1==n[a].type&&(o+=n[a].num,n[a].num*n[a].goodsId.costPrice,n[a].total_money);s.get_reserve=e.toFixed(t.getStorageSync("print_setting").show_float),s.out_reserve=o.toFixed(t.getStorageSync("print_setting").show_float)})},loadallGoods:function(){i.default.loadallGoods().then(function(t){s.total_money=t.total_money,s.total_reserve=t.total_reserve,s.total_products=t.total_products})},get_logsList:function(){var t=r.default.Query("logs");t.equalTo("parent","==",l),t.equalTo("type","!=",-2),t.order("-createdAt"),t.limit(20),t.find().then(function(t){var e=!0,o=!1,n=void 0;try{for(var a,i=t[Symbol.iterator]();!(e=(a=i.next()).done);e=!0){var r=a.value;5==r.type?r.link="/pages/manage/good_det/good_det?id="+r.detail_id+"&type=false":-1!=r.type&&1!=r.type&&2!=r.type&&3!=r.type||(r.link="/pages/report/EnteringHistory/detail/detail?id="+r.detail_id)}}catch(c){o=!0,n=c}finally{try{e||null==i.return||i.return()}finally{if(o)throw n}}s.logsList=t})}}};e.default=f}).call(this,o("543d")["default"])},"1bbf":function(t,e,o){"use strict";o.r(e);var n=o("0a37"),a=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=a.a},5608:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return a})},"8fd9":function(t,e,o){"use strict";var n=o("facd"),a=o.n(n);a.a},9326:function(t,e,o){"use strict";o.r(e);var n=o("5608"),a=o("1bbf");for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);o("8fd9");var r=o("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},f359:function(t,e,o){"use strict";(function(t){o("bc8c"),o("921b");n(o("66fd"));var e=n(o("9326"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},facd:function(t,e,o){}},[["f359","common/runtime","common/vendor"]]]);