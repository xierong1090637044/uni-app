(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/warehouse/detail/detail"],{"4cc7":function(e,n,t){},"53b9":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t("c74b"));function r(e){return e&&e.__esModule?e:{default:e}}var a,u,c=function(){return t.e("components/kilvn-fa-icon/fa-icon").then(t.bind(null,"0914"))},i=function(){return t.e("components/Loading/index").then(t.bind(null,"524a"))},l={components:{faIcon:c,loading:i},data:function(){return{loading:!0,stock:"",Goods:null,reserve_num:0,reserve_money:0}},onLoad:function(){a=this,u=e.getStorageSync("uid"),a.stock=e.getStorageSync("stock"),a.get_detail()},methods:{goto_detail:function(n){e.setStorageSync("now_product",n),e.navigateTo({url:"/pages/manage/good_det/good_det"})},get_detail:function(){var n=o.default.Query("Goods");n.equalTo("userId","==",u),n.equalTo("stocks","==",e.getStorageSync("stock").objectId),n.order("-reserve"),n.find().then(function(e){console.log(e),a.Goods=e;var n=0,t=0,o=!0,r=!1,u=void 0;try{for(var c,i=e[Symbol.iterator]();!(o=(c=i.next()).done);o=!0){var l=c.value;t+=Number(l.costPrice)*l.reserve,n+=l.reserve}}catch(d){r=!0,u=d}finally{try{o||null==i.return||i.return()}finally{if(r)throw u}}a.reserve_money=t,a.reserve_num=n,a.loading=!1})}}};n.default=l}).call(this,t("543d")["default"])},5578:function(e,n,t){"use strict";t.r(n);var o=t("efbd1"),r=t("d9a7");for(var a in r)"default"!==a&&function(e){t.d(n,e,function(){return r[e]})}(a);t("5878");var u=t("2877"),c=Object(u["a"])(r["default"],o["a"],o["b"],!1,null,null,null);n["default"]=c.exports},5878:function(e,n,t){"use strict";var o=t("4cc7"),r=t.n(o);r.a},c4a8:function(e,n,t){"use strict";(function(e){t("a961"),t("921b");o(t("66fd"));var n=o(t("5578"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},d9a7:function(e,n,t){"use strict";t.r(n);var o=t("53b9"),r=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);n["default"]=r.a},efbd1:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return r})}},[["c4a8","common/runtime","common/vendor"]]]);