(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/EnteringHistory/detail/detail"],{"4c98":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("e21e"));function r(e){return e&&e.__esModule?e:{default:e}}var i,a,d=function(){return n.e("components/Loading/index").then(n.bind(null,"c211"))},u={components:{loading:d},data:function(){return{loading:!0,products:null,detail:null}},onLoad:function(e){console.log(e," at pages\\report\\EnteringHistory\\detail\\detail.vue:120"),i=this,a=e.id,i.getdetail(a)},methods:{getdetail:function(e){var t=o.default.Query("order_opreations");t.include("opreater","custom","producer"),t.get(e).then(function(e){i.detail=e;var t=o.default.Query("order_opreations");t.include("goodsId"),t.field("relations",e.objectId),t.relation("Bills").then(function(e){i.products=e.results,i.loading=!1})}).catch(function(e){console.log(e," at pages\\report\\EnteringHistory\\detail\\detail.vue:142")})},revoke:function(){wx.showModal({title:"提示",content:"数据撤销后不可恢复，请谨慎撤销！",success:function(t){if(t.confirm){e.showLoading({title:"撤销中..."});var n=o.default.Query("order_opreations");n.destroy(i.detail.objectId).then(function(e){for(var t=0;t<i.products.length;t++)i.delete_bill(t)}).catch(function(e){console.log(e," at pages\\report\\EnteringHistory\\detail\\detail.vue:161")})}}})},delete_bill:function(t){var n=i.products[t],r=o.default.Query("Bills");r.destroy(n.objectId).then(function(r){var a=o.default.Query("Goods");a.set("id",n.goodsId.objectId),1==n.type?a.set("reserve",n.goodsId.reserve-n.num):-1==n.type&&a.set("reserve",n.goodsId.reserve+n.num),a.save().then(function(n){t==i.products.length-1&&(e.hideLoading(),e.navigateBack({delta:1}),setTimeout(function(){e.showToast({title:"撤销成功"})},1e3))})})}}};t.default=u}).call(this,n("6e42")["default"])},7293:function(e,t,n){"use strict";n.r(t);var o=n("9505"),r=n("af09");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("c81c9");var a=n("2877"),d=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=d.exports},9505:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.products.map(function(t,n){var o=t.total_money.toFixed(2);return{$orig:e.__get_orig(t),g0:o}})),o=e.detail.all_money.toFixed(2),r=e.detail.real_money.toFixed(2),i=e.detail.real_money.toFixed(2);e.$mp.data=Object.assign({},{$root:{l0:n,g1:o,g2:r,g3:i}})},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},af09:function(e,t,n){"use strict";n.r(t);var o=n("4c98"),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=r.a},b6d6:function(e,t,n){},c81c9:function(e,t,n){"use strict";var o=n("b6d6"),r=n.n(o);r.a}},[["9e3a","common/runtime","common/vendor"]]]);