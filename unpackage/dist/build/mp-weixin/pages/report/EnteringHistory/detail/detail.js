(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/EnteringHistory/detail/detail"],{"0d2d":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("ee11"));function r(e){return e&&e.__esModule?e:{default:e}}var u,d,i=function(){return n.e("components/Loading/index").then(n.bind(null,"524a"))},a={components:{loading:i},data:function(){return{loading:!0,products:null,detail:null}},onLoad:function(e){console.log(e),u=this,d=e.id,u.getdetail(d)},methods:{getdetail:function(e){var t=o.default.Query("order_opreations");t.include("opreater","custom","producer"),t.get(e).then(function(e){u.detail=e;var t=o.default.Query("order_opreations");t.include("goodsId"),t.field("relations",e.objectId),t.relation("Bills").then(function(e){u.products=e.results,u.loading=!1})}).catch(function(e){console.log(e)})},revoke:function(){wx.showModal({title:"提示",content:"数据撤销后不可恢复，请谨慎撤销！",success:function(t){if(t.confirm){e.showLoading({title:"撤销中..."});var n=o.default.Query("order_opreations");n.destroy(u.detail.objectId).then(function(e){for(var t=0;t<u.products.length;t++)u.delete_bill(t)}).catch(function(e){console.log(e)})}}})},delete_bill:function(t){var n=u.products[t],r=o.default.Query("Bills");r.destroy(n.objectId).then(function(r){var d=o.default.Query("Goods");d.set("id",n.goodsId.objectId),1==n.type?d.set("reserve",n.goodsId.reserve-n.num):-1==n.type&&d.set("reserve",n.goodsId.reserve+n.num),d.save().then(function(n){t==u.products.length-1&&(e.hideLoading(),e.navigateBack({delta:1}),setTimeout(function(){e.showToast({title:"撤销成功"})},1e3))})})}}};t.default=a}).call(this,n("543d")["default"])},"134a":function(e,t,n){"use strict";n.r(t);var o=n("0d2d"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=r.a},"53e2":function(e,t,n){},"7b55":function(e,t,n){"use strict";var o=n("53e2"),r=n.n(o);r.a},cd28:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},ff7e:function(e,t,n){"use strict";n.r(t);var o=n("cd28"),r=n("134a");for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);n("7b55");var d=n("2877"),i=Object(d["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=i.exports}},[["3ac5","common/runtime","common/vendor"]]]);