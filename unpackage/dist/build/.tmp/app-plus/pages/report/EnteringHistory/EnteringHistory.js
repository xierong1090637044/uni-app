(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/EnteringHistory/EnteringHistory"],{"4ec7":function(t,e,n){"use strict";var o=n("8f63"),i=n.n(o);i.a},5774:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){e.stopPropagation(),t.showOptions=!1})},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"8f63":function(t,e,n){},a8ee:function(t,e,n){"use strict";n.r(e);var o=n("5774"),i=n("b98f");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("4ec7");var r=n("2877"),u=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},b98f:function(t,e,n){"use strict";n.r(e);var o=n("e0af"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},e0af:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("e21e"));function i(t){return t&&t.__esModule?t:{default:t}}var a,r,u,c=function(){return n.e("components/Loading/index").then(n.bind(null,"c211"))},s=function(){return n.e("components/kilvn-fa-icon/fa-icon").then(n.bind(null,"8899"))},f={components:{loading:c,faIcon:s},data:function(){return{loading:!0,list:null,showOptions:!1,goodsName:"",staff:""}},onNavigationBarButtonTap:function(t){"筛选"==t.text&&(r.showOptions=!0)},onLoad:function(e){r=this,u=1,a=t.getStorageSync("uid"),t.removeStorageSync("charge"),1==u?t.setNavigationBarTitle({title:"入库详情"}):-1==u?t.setNavigationBarTitle({title:"出库详情"}):2==u?t.setNavigationBarTitle({title:"退货详情"}):3==u&&t.setNavigationBarTitle({title:"盘点详情"})},onShow:function(){this.get_list(),t.getStorageSync("charge")&&(r.staff=t.getStorageSync("charge"))},methods:{option_reset:function(){t.removeStorageSync("charge"),r.goodsName="",r.staff="",r.showOptions=!1,r.get_list()},option_confrim:function(){r.showOptions=!1,r.get_list()},get_list:function(){var t=this,e=o.default.Query("order_opreations");e.equalTo("master","==",a),e.equalTo("type","==",u),e.equalTo("opreater","==",r.staff.objectId),e.equalTo("goodsName","==",{$regex:r.goodsName+".*"}),e.include("opreater"),e.order("-createdAt"),e.find().then(function(e){t.list=e,t.loading=!1})},get_detail:function(t){wx.navigateTo({url:"detail/detail?id="+t})}}};e.default=f}).call(this,n("6e42")["default"])}},[["d60d","common/runtime","common/vendor"]]]);