(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/EnteringHistory/EnteringHistory"],{"4ec7":function(t,n,e){"use strict";var i=e("8f63"),o=e.n(i);o.a},"76e8":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},"8f63":function(t,n,e){},a8ee:function(t,n,e){"use strict";e.r(n);var i=e("76e8"),o=e("b98f");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("4ec7");var r=e("2877"),u=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=u.exports},b98f:function(t,n,e){"use strict";e.r(n);var i=e("e0af"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},e0af:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("e21e"));function o(t){return t&&t.__esModule?t:{default:t}}var a,r=function(){return e.e("components/Loading/index").then(e.bind(null,"c211"))},u=function(){return e.e("components/kilvn-fa-icon/fa-icon").then(e.bind(null,"8899"))},l=t.getStorageSync("uid"),c={components:{loading:r,faIcon:u},data:function(){return{loading:!0,list:null}},onLoad:function(n){this,a=Number(n.type),1==a?t.setNavigationBarTitle({title:"入库详情"}):-1==a?t.setNavigationBarTitle({title:"出库详情"}):2==a?t.setNavigationBarTitle({title:"退货详情"}):3==a&&t.setNavigationBarTitle({title:"盘点详情"})},onShow:function(){this.get_list()},methods:{get_list:function(){var t=this,n=i.default.Query("order_opreations");n.equalTo("master","==",l),n.equalTo("type","==",a),n.include("opreater"),n.order("-createdAt"),n.find().then(function(n){t.list=n,t.loading=!1})},get_detail:function(t){wx.navigateTo({url:"detail/detail?id="+t})}}};n.default=c}).call(this,e("6e42")["default"])}},[["d60d","common/runtime","common/vendor"]]]);