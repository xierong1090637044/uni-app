(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/warehouse/detail/detail"],{"22d4":function(e,t,n){"use strict";n.r(t);var o=n("aab4"),a=n("5aa9");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("ec82");var c,u=n("f0c5"),i=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=i.exports},"28d2":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("9546"));function a(e){return e&&e.__esModule?e:{default:e}}var r,c,u=function(){return n.e("components/kilvn-fa-icon/fa-icon").then(n.bind(null,"4d52"))},i=function(){return n.e("components/Loading/index").then(n.bind(null,"120a"))},d={components:{faIcon:u,loading:i},data:function(){return{loading:!0,stock:"",Goods:null,reserve_num:0,reserve_money:0}},onLoad:function(){r=this,c=e.getStorageSync("uid"),r.stock=e.getStorageSync("stock"),r.get_detail()},methods:{show_options:function(){e.showActionSheet({itemList:["编辑","删除"],success:function(t){if(0==t.tapIndex)r.edit(r.stock);else if(1==t.tapIndex){var n=o.default.Query("stocks");n.equalTo("parent","==",c),n.equalTo("disabled","!=",!0),n.find().then(function(t){t.length>1?r.delete_this(r.stock.objectId):e.showToast({title:"最少保留一个仓库",icon:"none"})})}},fail:function(e){console.log(e.errMsg)}})},edit:function(t){e.setStorageSync("warehouse",t),e.setStorageSync("charge",t.charge),e.setStorageSync("shop",t.shop),e.navigateTo({url:"../add/add"})},delete_this:function(t){e.showModal({title:"提示",content:"请谨慎删除，一旦删除，数据不能恢复，是否删除此仓库",success:function(e){e.confirm&&(console.log(t),r.delete_data(t))}})},delete_data:function(t){console.log(t);var n=o.default.Query("stocks");n.destroy(t).then(function(t){console.log(t),e.showToast({title:"删除成功",icon:"none"}),e.navigateBack({delta:1})}).catch(function(e){console.log(e)})},goto_detail:function(t){e.setStorageSync("now_product",t),1==t.order?e.navigateTo({url:"/pages/manage/good_det/Ngood_det"}):e.navigateTo({url:"/pages/manage/good_det/good_det"})},get_detail:function(){var t=o.default.Query("Goods");t.equalTo("userId","==",c),t.equalTo("stocks","==",e.getStorageSync("stock").objectId),t.limit(500),t.order("-reserve"),t.find().then(function(e){console.log(e),r.Goods=e;var t=0,n=0,o=!0,a=!1,c=void 0;try{for(var u,i=e[Symbol.iterator]();!(o=(u=i.next()).done);o=!0){var d=u.value;n+=Number(d.costPrice)*Number(d.reserve),t+=Number(d.reserve)}}catch(l){a=!0,c=l}finally{try{o||null==i.return||i.return()}finally{if(a)throw c}}r.reserve_money=n,r.reserve_num=t,r.loading=!1})}}};t.default=d}).call(this,n("543d")["default"])},5493:function(e,t,n){"use strict";(function(e){n("d510"),n("921b");o(n("66fd"));var t=o(n("22d4"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"57e6":function(e,t,n){},"5aa9":function(e,t,n){"use strict";n.r(t);var o=n("28d2"),a=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=a.a},aab4:function(e,t,n){"use strict";var o,a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return o})},ec82:function(e,t,n){"use strict";var o=n("57e6"),a=n.n(o);a.a}},[["5493","common/runtime","common/vendor"]]]);