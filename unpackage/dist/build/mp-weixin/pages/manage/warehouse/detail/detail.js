(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/warehouse/detail/detail"],{"22d4":function(e,t,n){"use strict";n.r(t);var o=n("4abc"),a=n("5aa9");for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);n("ec82");var r=n("2877"),u=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},"4abc":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},5493:function(e,t,n){"use strict";(function(e){n("d510"),n("921b");o(n("66fd"));var t=o(n("22d4"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"587b":function(e,t,n){},"5aa9":function(e,t,n){"use strict";n.r(t);var o=n("5c5b"),a=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t["default"]=a.a},"5c5b":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("9546"));function a(e){return e&&e.__esModule?e:{default:e}}var c,r,u=function(){return n.e("components/kilvn-fa-icon/fa-icon").then(n.bind(null,"4d52"))},i=function(){return n.e("components/Loading/index").then(n.bind(null,"120a"))},s={components:{faIcon:u,loading:i},data:function(){return{loading:!0,stock:"",Goods:null,reserve_num:0,reserve_money:0}},onLoad:function(){c=this,r=e.getStorageSync("uid"),c.stock=e.getStorageSync("stock"),c.get_detail()},methods:{show_options:function(){e.showActionSheet({itemList:["编辑","删除"],success:function(e){0==e.tapIndex?c.edit(c.stock):1==e.tapIndex&&c.delete_this(c.stock.objectId)},fail:function(e){console.log(e.errMsg)}})},edit:function(t){e.setStorageSync("warehouse",t),e.setStorageSync("charge",t.charge),e.setStorageSync("shop",t.shop),e.navigateTo({url:"../add/add"})},delete_this:function(t){e.showModal({title:"提示",content:"请谨慎删除，一旦删除，数据不能恢复，是否删除此仓库",success:function(e){e.confirm&&(console.log(t),c.delete_data(t))}})},delete_data:function(t){console.log(t);var n=o.default.Query("stocks");n.destroy(t).then(function(t){console.log(t),e.showToast({title:"删除成功",icon:"none"}),e.navigateBack({delta:1})}).catch(function(e){console.log(e)})},goto_detail:function(t){e.setStorageSync("now_product",t),e.navigateTo({url:"/pages/manage/good_det/good_det"})},get_detail:function(){var t=o.default.Query("Goods");t.equalTo("userId","==",r),t.equalTo("stocks","==",e.getStorageSync("stock").objectId),t.order("-reserve"),t.find().then(function(e){console.log(e),c.Goods=e;var t=0,n=0,o=!0,a=!1,r=void 0;try{for(var u,i=e[Symbol.iterator]();!(o=(u=i.next()).done);o=!0){var s=u.value;n+=Number(s.costPrice)*Number(s.reserve),t+=Number(s.reserve)}}catch(l){a=!0,r=l}finally{try{o||null==i.return||i.return()}finally{if(a)throw r}}c.reserve_money=n,c.reserve_num=t,c.loading=!1})}}};t.default=s}).call(this,n("543d")["default"])},ec82:function(e,t,n){"use strict";var o=n("587b"),a=n.n(o);a.a}},[["5493","common/runtime","common/vendor"]]]);