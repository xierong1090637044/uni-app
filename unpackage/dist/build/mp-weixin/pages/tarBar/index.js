(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tarBar/index"],{"2e1e":function(e,t,o){"use strict";var n=o("eb2f"),a=o.n(n);a.a},4493:function(e,t,o){"use strict";o.r(t);var n=o("c5b8"),a=o("ead9");for(var r in a)"default"!==r&&function(e){o.d(t,e,function(){return a[e]})}(r);o("2e1e");var i=o("2877"),s=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},"58c4":function(e,t,o){"use strict";(function(e){o("a961"),o("921b");n(o("66fd"));var t=n(o("4493"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},c5b8:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})},d312:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(o("df06")),a=u(o("0082")),r=u(o("2dc1")),i=u(o("a739")),s=u(o("c74b"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var l,d,g=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"0914"))},f=function(){return o.e("components/uni-notice-bar/uni-notice-bar").then(o.bind(null,"7fee"))},p=function(){return o.e("components/uni-search-bar/uni-search-bar").then(o.bind(null,"4fee"))},m={components:{faIcon:g,uniNoticeBar:f,uniSearchBar:p},data:function(){return c({user:e.getStorageSync("user"),othercurrent:"",noticeText:"",logsList:[],optionsLists:[{name:"入库",icon:"/static/entering.png",url:"/pages/common/goods-select/goods-select?type=entering&value=2"},{name:"出库",icon:"/static/delivery.png",url:"/pages/common/goods-select/goods-select?type=delivery&value=2"},{name:"产品调拨",icon:"/static/allocation.png",url:"/pages/common/goods-select/goods-select?type=allocation"},{name:"库存盘点",icon:"/static/stocking.png",url:"/pages/common/goods-select/goods-select?type=counting"},{name:"采购",icon:"/static/purchase.png",url:"/pages/common/goods-select/goods-select?type=entering&value=1"},{name:"销售",icon:"/static/sell.png",url:"/pages/common/goods-select/goods-select?type=delivery&value=1"},{name:"退货入库",icon:"/static/return_goods.png",url:"/pages/common/goods-select/goods-select?type=returing"},{name:"产品添加",icon:"/static/stock.png",url:"/pages/manage/good_add/good_add?type=single"},{name:"使用手册",icon:"/static/userInfo.png",url:"/pages/mine/manual/manual"}],get_reserve:0,out_reserve:0,sellNum:0,purchaseNum:0,total_reserve:0,total_money:0,total_products:0,openid:""},"user",e.getStorageSync("user"))},onLoad:function(t){l=this,d=e.getStorageSync("uid"),t.openid&&e.setStorageSync("openid",t.openid)},onShow:function(){e.getStorageSync("user")?(l.gettoday_detail(),l.loadallGoods(),a.default.query_setting(),l.user.rights&&l.user.rights.othercurrent&&(l.othercurrent=l.user.rights.othercurrent),i.default.getNoticeList(1).then(function(e){l.noticeText=e[0].content,console.log(e)})):(setTimeout(function(){e.showToast({title:"请先登录",icon:"none"})},1e3),e.reLaunch({url:"/pages/landing/landing"}))},onShareAppMessage:function(e){return"button"===e.from&&console.log(e.target),{title:"库存表，欢迎您的加入",path:"/pages/tarBar/index"}},methods:{navigateToKCB:function(){e.navigateToMiniProgram({appId:"wx6783307185c8385e",path:"pages/tarBar/index?phone="+l.user.mobilePhoneNumber,success:function(e){}})},search:function(t){console.log(t);var o=t.value;e.navigateTo({url:"/pages/manage/goods/goods?search_text="+o})},scan_code:function(){e.showActionSheet({itemList:["扫码出库","扫码销售","扫码入库","扫码采购","扫码盘点","查看详情"],success:function(e){l.scan(e.tapIndex)},fail:function(e){console.log(e.errMsg)}})},scan:function(t){e.scanCode({success:function(o){var n=o.result,a=n.split("-"),r=a[2];if(0==t)e.navigateTo({url:"/pages/common/goods_out/goods_out?id="+a[0]+"&type="+a[1]+"&value=2"});else if(1==t)e.navigateTo({url:"/pages/common/goods_out/goods_out?id="+a[0]+"&type="+a[1]+"&value=1"});else if(2==t)e.navigateTo({url:"/pages/common/good_confrim/good_confrim?id="+a[0]+"&type="+a[1]+"&value=2"});else if(3==t)e.navigateTo({url:"/pages/common/good_confrim/good_confrim?id="+a[0]+"&type="+a[1]+"&value=1"});else if(4==t)e.navigateTo({url:"/pages/common/good_count/good_count?id="+a[0]+"&type="+a[1]+"&value=2"});else if(5==t)"new"==r?e.navigateTo({url:"/pages/manage/good_det/Ngood_det?id="+a[0]+"&type="+a[1]}):"old"==r&&e.navigateTo({url:"/pages/manage/good_det/good_det?id="+a[0]+"&type="+a[1]});else if(6==t){var i=e.getStorageSync("user");i.is_vip?e.navigateTo({url:"/pages/manage/good_add/good_add?id="+n+"&type=more"}):e.showToast({title:"该功能只限会员使用",icon:"none"})}},fail:function(t){e.showToast({title:"未识别到条形码",icon:"none"})}})},gettoday_detail:function(){var t=0,o=0,a=0,r=0,i=s.default.Query("Bills");i.equalTo("userId","==",d),i.equalTo("createdAt",">=",n.default.getDay(0,!0)),i.equalTo("createdAt","<=",n.default.getDay(1,!0)),i.equalTo("status","!=",!1),i.include("goodsId"),i.find().then(function(n){for(var i=0;i<n.length;i++)1==n[i].type?(t+=n[i].num,n[i].num*n[i].goodsId.retailPrice,n[i].total_money,1==n[i].extra_type&&(a+=n[i].num)):-1==n[i].type&&(o+=n[i].num,n[i].num*n[i].goodsId.costPrice,n[i].total_money,1==n[i].extra_type&&(r+=n[i].num));console.log(a,r),l.purchaseNum=a.toFixed(e.getStorageSync("print_setting").show_float),l.sellNum=r.toFixed(e.getStorageSync("print_setting").show_float),l.get_reserve=t.toFixed(e.getStorageSync("print_setting").show_float),l.out_reserve=o.toFixed(e.getStorageSync("print_setting").show_float)})},loadallGoods:function(){r.default.loadallGoods().then(function(e){l.user.rights&&"0"!=l.user.rights.othercurrent[0]?l.total_money=0:l.total_money=e.total_money,l.total_reserve=e.total_reserve,l.total_products=e.total_products})},get_logsList:function(){var e=s.default.Query("logs");e.equalTo("parent","==",d),e.equalTo("type","!=",-2),e.order("-createdAt"),e.limit(20),e.find().then(function(e){var t=!0,o=!1,n=void 0;try{for(var a,r=e[Symbol.iterator]();!(t=(a=r.next()).done);t=!0){var i=a.value;5==i.type?i.link="/pages/manage/good_det/good_det?id="+i.detail_id+"&type=false":-1!=i.type&&1!=i.type&&2!=i.type&&3!=i.type||(i.link="/pages/report/EnteringHistory/detail/detail?id="+i.detail_id)}}catch(s){o=!0,n=s}finally{try{t||null==r.return||r.return()}finally{if(o)throw n}}l.logsList=e})}}};t.default=m}).call(this,o("543d")["default"])},ead9:function(e,t,o){"use strict";o.r(t);var n=o("d312"),a=o.n(n);for(var r in n)"default"!==r&&function(e){o.d(t,e,function(){return n[e]})}(r);t["default"]=a.a},eb2f:function(e,t,o){}},[["58c4","common/runtime","common/vendor"]]]);