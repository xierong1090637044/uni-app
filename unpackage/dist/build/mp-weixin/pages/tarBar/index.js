(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tarBar/index"],{"2e1e":function(e,t,o){"use strict";var n=o("eb2f"),a=o.n(n);a.a},4493:function(e,t,o){"use strict";o.r(t);var n=o("58a2"),a=o("ead9");for(var i in a)"default"!==i&&function(e){o.d(t,e,function(){return a[e]})}(i);o("2e1e");var r=o("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},"58a2":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})},"58c4":function(e,t,o){"use strict";(function(e){o("a961"),o("921b");n(o("66fd"));var t=n(o("4493"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},d312:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(o("df06")),a=s(o("0082")),i=s(o("2dc1")),r=s(o("c74b"));function s(e){return e&&e.__esModule?e:{default:e}}var c,l,u=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"0914"))},d=function(){return o.e("components/uni-notice-bar/uni-notice-bar").then(o.bind(null,"7fee"))},g=function(){return o.e("components/uni-search-bar/uni-search-bar").then(o.bind(null,"4fee"))},f={components:{faIcon:u,uniNoticeBar:d,uniSearchBar:g},data:function(){return{logsList:[],optionsLists:[{name:"采购或入库",icon:"/static/entering.png",url:"/pages/common/goods-select/goods-select?type=entering"},{name:"销售或出库",icon:"/static/delivery.png",url:"/pages/common/goods-select/goods-select?type=delivery"},{name:"产品调拨",icon:"/static/allocation.png",url:"/pages/common/goods-select/goods-select?type=allocation"},{name:"退货入库",icon:"/static/return_goods.png",url:"/pages/common/goods-select/goods-select?type=returing"},{name:"库存盘点",icon:"/static/stocking.png",url:"/pages/common/goods-select/goods-select?type=counting"}],get_reserve:0,out_reserve:0,total_reserve:0,total_money:0,total_products:0,openid:""}},onLoad:function(t){c=this,l=e.getStorageSync("uid"),a.default.query_setting(),t.openid&&e.setStorageSync("openid",t.openid)},onShow:function(){c.gettoday_detail(),c.loadallGoods(),c.get_logsList()},onShareAppMessage:function(e){return"button"===e.from&&console.log(e.target),{title:"库存表，欢迎您的加入",path:"/pages/tarBar/index"}},methods:{search:function(t){console.log(t);var o=t.value;e.navigateTo({url:"/pages/manage/goods/goods?search_text="+o})},scan_code:function(){e.showActionSheet({itemList:["扫码出库","扫码入库","扫码盘点","查看详情","扫码添加商品"],success:function(e){c.scan(e.tapIndex)},fail:function(e){console.log(e.errMsg)}})},scan:function(t){e.scanCode({success:function(o){var n=o.result,a=n.split("-");0==t?e.navigateTo({url:"/pages/common/goods_out/goods_out?id="+a[0]+"&type="+a[1]}):1==t?e.navigateTo({url:"/pages/common/good_confrim/good_confrim?id="+a[0]+"&type="+a[1]}):2==t?e.navigateTo({url:"/pages/common/good_count/good_count?id="+a[0]+"&type="+a[1]}):3==t?e.navigateTo({url:"/pages/manage/good_det/good_det?id="+a[0]+"&type="+a[1]}):4==t&&e.navigateTo({url:"/pages/manage/good_add/good_add?id="+n})},fail:function(t){e.showToast({title:"未识别到条形码",icon:"none"})}})},gettoday_detail:function(){var t=0,o=0,a=r.default.Query("Bills");a.equalTo("userId","==",l),a.equalTo("createdAt",">=",n.default.getDay(0,!0)),a.equalTo("createdAt","<=",n.default.getDay(1,!0)),a.equalTo("status","!=",!1),a.include("goodsId"),a.find().then(function(n){for(var a=0;a<n.length;a++)1==n[a].type?(t+=n[a].num,n[a].num*n[a].goodsId.retailPrice,n[a].total_money):-1==n[a].type&&(o+=n[a].num,n[a].num*n[a].goodsId.costPrice,n[a].total_money);c.get_reserve=t.toFixed(e.getStorageSync("print_setting").show_float),c.out_reserve=o.toFixed(e.getStorageSync("print_setting").show_float)})},loadallGoods:function(){i.default.loadallGoods().then(function(e){c.total_money=e.total_money,c.total_reserve=e.total_reserve,c.total_products=e.total_products})},get_logsList:function(){var e=r.default.Query("logs");e.equalTo("parent","==",l),e.equalTo("type","!=",-2),e.order("-createdAt"),e.limit(20),e.find().then(function(e){var t=!0,o=!1,n=void 0;try{for(var a,i=e[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var r=a.value;5==r.type?r.link="/pages/manage/good_det/good_det?id="+r.detail_id+"&type=false":-1!=r.type&&1!=r.type&&2!=r.type&&3!=r.type||(r.link="/pages/report/EnteringHistory/detail/detail?id="+r.detail_id)}}catch(s){o=!0,n=s}finally{try{t||null==i.return||i.return()}finally{if(o)throw n}}c.logsList=e})}}};t.default=f}).call(this,o("543d")["default"])},ead9:function(e,t,o){"use strict";o.r(t);var n=o("d312"),a=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,function(){return n[e]})}(i);t["default"]=a.a},eb2f:function(e,t,o){}},[["58c4","common/runtime","common/vendor"]]]);