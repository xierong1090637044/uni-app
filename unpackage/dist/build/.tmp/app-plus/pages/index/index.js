(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"341d":function(e,t,o){},"478e":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})},"75cf":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(o("e21e")),a=i(o("3e05"));function i(e){return e&&e.__esModule?e:{default:e}}var r,s,c=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"8899"))},u={components:{faIcon:c},data:function(){return{optionsLists:[{name:"产品入库",icon:"/static/entering.png",url:"/pages/common/goods-select/goods-select?type=entering"},{name:"产品出库",icon:"/static/delivery.png",url:"/pages/common/goods-select/goods-select?type=delivery"},{name:"退货入库",icon:"/static/return_goods.png",url:"/pages/common/goods-select/goods-select?type=returing"},{name:"库存盘点",icon:"/static/stocking.png",url:"/pages/common/goods-select/goods-select?type=counting"}],get_reserve:0,out_reserve:0,total_reserve:0,total_money:0,total_products:0}},onLoad:function(){r=this,s=e.getStorageSync("uid"),r.gettoday_detail(),r.loadallGoods()},methods:{scan_code:function(){e.showActionSheet({itemList:["扫码出库","扫码入库","扫码盘点","查看详情"],success:function(e){r.scan(e.tapIndex)},fail:function(e){console.log(e.errMsg," at pages\\index\\index.vue:112")}})},scan:function(t){e.scanCode({success:function(o){var n=o.result,a=n.split("-");0==t?e.navigateTo({url:"/pages/common/goods_out/goods_out?id="+a[0]+"&type="+a[1]}):1==t?e.navigateTo({url:"/pages/common/good_confrim/good_confrim?id="+a[0]+"&type="+a[1]}):2==t?e.navigateTo({url:"/pages/common/good_count/good_count?id="+a[0]+"&type="+a[1]}):3==t&&e.navigateTo({url:"/pages/manage/good_det/good_det?id="+a[0]+"&type="+a[1]})},fail:function(t){e.showToast({title:"未识别到条形码",icon:"none"})}})},gettoday_detail:function(){var e=0,t=0,o=n.default.Query("Bills");o.equalTo("userId","==",s),o.equalTo("createdAt",">=",a.default.getDay(0,!0)),o.equalTo("createdAt","<=",a.default.getDay(1,!0)),o.include("goodsId"),o.find().then(function(o){for(var n=0;n<o.length;n++)1==o[n].type?(e+=o[n].num,o[n].num*o[n].goodsId.retailPrice,o[n].total_money):-1==o[n].type&&(t+=o[n].num,o[n].num*o[n].goodsId.costPrice,o[n].total_money);r.get_reserve=e.toFixed(wx.getStorageSync("print_setting").show_float),r.out_reserve=t.toFixed(wx.getStorageSync("print_setting").show_float)})},loadallGoods:function(){var t=0,o=0,a=n.default.Query("Goods");a.equalTo("userId","==",s),a.limit(500),a.find().then(function(a){for(var i=0;i<a.length;i++)if(t+=a[i].reserve,o+=a[i].reserve*a[i].costPrice,i==a.length-1&&500==a.length){var c=n.default.Query("Goods");c.equalTo("userId","==",s),c.skip(500),c.limit(500),c.find().then(function(e){for(var n=0;n<e.length;n++)t+=e[n].reserve,o+=e[n].reserve*e[n].costPrice}),r.total_money=o.toFixed(e.getStorageSync("print_setting").show_float),r.total_reserve=t.toFixed(e.getStorageSync("print_setting").show_float),r.total_products=a.length}else r.total_money=o.toFixed(e.getStorageSync("print_setting").show_float),r.total_reserve=t.toFixed(e.getStorageSync("print_setting").show_float),r.total_products=a.length})}}};t.default=u}).call(this,o("6e42")["default"])},"7ad3":function(e,t,o){"use strict";o.r(t);var n=o("75cf"),a=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,function(){return n[e]})}(i);t["default"]=a.a},cecf:function(e,t,o){"use strict";o.r(t);var n=o("478e"),a=o("7ad3");for(var i in a)"default"!==i&&function(e){o.d(t,e,function(){return a[e]})}(i);o("d3e1");var r=o("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},d3e1:function(e,t,o){"use strict";var n=o("341d"),a=o.n(n);a.a}},[["8845","common/runtime","common/vendor"]]]);