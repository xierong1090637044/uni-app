(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/EnteringHistory/detail/detail"],{"134a":function(e,t,n){"use strict";n.r(t);var o=n("c8a7"),i=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);t["default"]=i.a},"3ac5":function(e,t,n){"use strict";(function(e){n("a961"),n("921b");o(n("66fd"));var t=o(n("ff7e"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"6f59":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},"7b55":function(e,t,n){"use strict";var o=n("c78d"),i=n.n(o);i.a},c78d:function(e,t,n){},c8a7:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n("c74b")),i=u(n("b410"));function u(e){return e&&e.__esModule?e:{default:e}}var r,a,l=function(){return n.e("components/Loading/index").then(n.bind(null,"524a"))},c=function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"b92d"))},d={components:{loading:l,uniNavBar:c},data:function(){return{user:e.getStorageSync("user"),bills:[],loading:!0,products:null,detail:null}},onLoad:function(e){console.log(e),r=this,a=e.id,r.getdetail(a)},methods:{show_options:function(){e.showActionSheet({itemList:["打印"],success:function(e){0==e.tapIndex&&i.default.print_operations(r.detail,r.products)},fail:function(e){console.log(e.errMsg)}})},getdetail:function(e){var t=o.default.Query("order_opreations");t.include("opreater","custom","producer","stock"),t.get(e).then(function(e){if(console.log(e),r.detail=e,e.detail)r.products=e.detail,r.bills=e.bills,r.loading=!1;else{var t=o.default.Query("order_opreations");t.include("goodsId"),t.field("relations",e.objectId),t.relation("Bills").then(function(e){r.products=e.results,r.loading=!1})}}).catch(function(e){console.log(e)})},revoke:function(){wx.showModal({title:"提示",content:"数据撤销后不可恢复，请谨慎撤销！",success:function(t){if(t.confirm){e.showLoading({title:"撤销中..."});var n=o.default.Query("order_opreations");n.destroy(r.detail.objectId).then(function(e){for(var t=0;t<r.products.length;t++)r.delete_bill(t)}).catch(function(e){console.log(e)})}}})},delete_bill:function(t){var n=r.products[t],i=r.bills[t],u=o.default.Query("Bills");u.destroy(i).then(function(i){var u=o.default.Query("Goods");u.set("id",n.goodsId.objectId),1==n.type?u.set("reserve",n.goodsId.reserve-n.num):-1==n.type&&u.set("reserve",n.goodsId.reserve+n.num),u.save().then(function(n){t==r.products.length-1&&(e.hideLoading(),e.navigateBack({delta:1}),setTimeout(function(){e.showToast({title:"撤销成功"})},1e3))})})}}};t.default=d}).call(this,n("543d")["default"])},ff7e:function(e,t,n){"use strict";n.r(t);var o=n("6f59"),i=n("134a");for(var u in i)"default"!==u&&function(e){n.d(t,e,function(){return i[e]})}(u);n("7b55");var r=n("2877"),a=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports}},[["3ac5","common/runtime","common/vendor"]]]);