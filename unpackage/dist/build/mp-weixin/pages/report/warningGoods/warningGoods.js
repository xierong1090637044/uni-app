(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/warningGoods/warningGoods"],{"0e2f":function(t,e,n){"use strict";n.r(e);var o=n("19f4"),r=n("e730");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n("6ff8");var a,c=n("f0c5"),i=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=i.exports},1995:function(t,e,n){},"19f4":function(t,e,n){"use strict";var o,r=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return o})},"601a":function(t,e,n){"use strict";(function(t){n("d510"),n("921b");o(n("66fd"));var e=o(n("0e2f"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"6ff8":function(t,e,n){"use strict";var o=n("1995"),r=n.n(o);r.a},e730:function(t,e,n){"use strict";n.r(e);var o=n("ed2f"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=r.a},ed2f:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("9546"));r(n("7fd5"));function r(t){return t&&t.__esModule?t:{default:t}}var u,a,c=function(){return n.e("components/uni-segmented-control/uni-segmented-control").then(n.bind(null,"c952"))},i={components:{uniSegmentedControl:c},data:function(){return{productList:[],items:["低库存预警","高库存预警"],current:0,search_text:""}},onLoad:function(){u=this,a=t.getStorageSync("uid"),u.get_productList(0)},methods:{onClickItem:function(t){u.productList=[],1==t?u.get_productList(2):0==t&&u.get_productList(0)},goDetail:function(e){console.log(e),t.setStorageSync("now_product",e),0==e.order||1==e.order?t.navigateTo({url:"/pages/manage/good_det/Ngood_det?id="+e.objectId+"&type=false"}):t.navigateTo({url:"/pages/manage/good_det/good_det"})},get_productList:function(e){var n=o.default.Query("Goods");n.equalTo("userId","==",a),n.equalTo("status","!=",-1),n.equalTo("order","!=",1),n.equalTo("stocktype","==",e),n.limit(500),n.order("-createdAt"),n.include("goodsClass","stocks","second_class"),n.find().then(function(e){var n=!0,o=!1,r=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done);n=!0){var i=a.value;i.reserve=i.reserve.toFixed(t.getStorageSync("setting")?t.getStorageSync("setting").show_float:0)}}catch(d){o=!0,r=d}finally{try{n||null==c.return||c.return()}finally{if(o)throw r}}u.productList=e})}}};e.default=i}).call(this,n("543d")["default"])}},[["601a","common/runtime","common/vendor"]]]);