(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/report/warningGoods/warningGoods"],{"0e2f":function(t,n,e){"use strict";e.r(n);var o=e("7fc2"),r=e("e730");for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);e("6ff8");var c,a=e("f0c5"),d=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);n["default"]=d.exports},"601a":function(t,n,e){"use strict";(function(t){e("d510"),e("921b");o(e("66fd"));var n=o(e("0e2f"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("c11b")["createPage"])},"6ff8":function(t,n,e){"use strict";var o=e("cdf0"),r=e.n(o);r.a},"7fc2":function(t,n,e){"use strict";var o={"uni-segmented-control":function(){return e.e("components/uni-segmented-control/uni-segmented-control").then(e.bind(null,"c952"))}},r=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}))},cdf0:function(t,n,e){},e730:function(t,n,e){"use strict";e.r(n);var o=e("ed2f"),r=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=r.a},ed2f:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;o(e("9546")),o(e("7fd5"));function o(t){return t&&t.__esModule?t:{default:t}}var r,u=function(){e.e("components/uni-segmented-control/uni-segmented-control").then(function(){return resolve(e("c952"))}.bind(null,e)).catch(e.oe)},c={components:{uniSegmentedControl:u},data:function(){return{productList:[],items:["低库存预警","高库存预警","保质期预警"],current:0}},onLoad:function(){r=this,r.getWarnGoodsList()},methods:{onClickItem:function(t){r.current=t,r.getWarnGoodsList()},getWarnGoodsList:function(){r.$http.Post("stock_goodWarnList",{}).then((function(t){0==r.current&&(r.productList=t.data.reserveWarnGoods.flat()),1==r.current&&(r.productList=t.data.reserveOverGoods.flat()),2==r.current&&(r.productList=t.data.reserveTimeGoods.flat())}))},goDetail:function(n){console.log(n),t.setStorageSync("now_product",n),0==n.order||1==n.order?t.navigateTo({url:"/pages/manage/good_det/Ngood_det?id="+n.objectId+"&type=false"}):t.navigateTo({url:"/pages/manage/good_det/good_det"})}}};n.default=c}).call(this,e("c11b")["default"])}},[["601a","common/runtime","common/vendor"]]]);