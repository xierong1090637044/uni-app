(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/EnteringHistory/detail/detail"],{"134a":function(e,t,n){"use strict";n.r(t);var o=n("c8a7"),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=r.a},"3ac5":function(e,t,n){"use strict";(function(e){n("a961"),n("921b");o(n("66fd"));var t=o(n("ff7e"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"7b55":function(e,t,n){"use strict";var o=n("c78d"),r=n.n(o);r.a},c78d:function(e,t,n){},c8a7:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("c74b")),r=i(n("b410"));function i(e){return e&&e.__esModule?e:{default:e}}var a,l,u=function(){return n.e("components/Loading/index").then(n.bind(null,"524a"))},s=function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"b92d"))},d={components:{loading:u,uniNavBar:s},data:function(){return{user:e.getStorageSync("user"),bills:[],loading:!0,products:null,detail:null}},onLoad:function(e){console.log(e),a=this,l=e.id,a.getdetail(l)},methods:{gotoexpressDet:function(){a.user.is_vip?e.navigateTo({url:"../expressDet/expressDet?number="+a.detail.expressNum}):e.showToast({title:"您还不是会员，无法使用",icon:"none"})},priview:function(t){e.previewImage({current:t,urls:a.detail.Images})},show_options:function(){var t=["打印"];-1!=a.detail.type&&1!=a.detail.type||(t=["审核","撤销","打印"]),e.showActionSheet({itemList:t,success:function(t){0==t.tapIndex?(1==a.detail.type?a.detail.status?e.showToast({title:"该笔采购单已审核",icon:"none"}):a.confrimOrder():-1==a.detail.type&&(a.detail.status?e.showToast({title:"该笔销售单已审核",icon:"none"}):a.confrimOrder()),e.setStorageSync("is_option",!0)):1==t.tapIndex?(a.revoke(),e.setStorageSync("is_option",!0)):1==t.tapIndex&&r.default.print_operations(a.detail,a.products)},fail:function(e){console.log(e.errMsg)}})},getdetail:function(e){var t=o.default.Query("order_opreations");t.include("opreater","custom","producer","stock"),t.get(e).then(function(e){console.log(e),a.detail=e,a.products=e.detail,a.bills=e.bills,a.loading=!1}).catch(function(e){console.log(e)})},revoke:function(){wx.showModal({title:"提示",content:"数据撤销后不可恢复，请谨慎撤销！",success:function(t){if(t.confirm){e.showLoading({title:"撤销中..."});var n=o.default.Query("order_opreations");n.destroy(a.detail.objectId).then(function(e){var t=o.default.Query("Bills");t.containedIn("objectId",a.bills),t.find().then(function(e){e.destroyAll().then(function(e){for(var t=0;t<a.products.length;t++)a.delete_bill(t)}).catch(function(e){console.log(e)})})}).catch(function(e){console.log(e)})}}})},confrimOrder:function(){wx.showModal({title:"提示",content:"是否审核该笔操作单！",success:function(t){if(t.confirm){e.showLoading({title:"审核中，请勿退出该页面..."});var n=o.default.Query("order_opreations");n.set("id",l),n.set("status",!0),n.save().then(function(e){var t=0;if(1==a.detail.type){var n=!0,o=!1,r=void 0;try{for(var i,l=a.products[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var u=i.value;a.addOrReduceGoodReserve(u,t),t+=1}}catch(m){o=!0,r=m}finally{try{n||null==l.return||l.return()}finally{if(o)throw r}}}else if(-1==a.detail.type){var s=!0,d=!1,c=void 0;try{for(var f,v=a.products[Symbol.iterator]();!(s=(f=v.next()).done);s=!0){var h=f.value;a.ReduceGoodReserve(h,t),t+=1}}catch(m){d=!0,c=m}finally{try{s||null==v.return||v.return()}finally{if(d)throw c}}}}).catch(function(e){console.log(e)})}}})},addOrReduceGoodReserve:function(t,n){var r=o.default.Query("Goods");r.get(t.goodsId.objectId).then(function(r){if(t.goodsId.selected_model){var i=0,l=!0,u=!1,s=void 0;try{for(var d,c=t.goodsId.selected_model[Symbol.iterator]();!(l=(d=c.next()).done);l=!0){var f=d.value,v=!0,h=!1,m=void 0;try{for(var y,g=r.models[Symbol.iterator]();!(v=(y=g.next()).done);v=!0){var p=y.value;p.id==f.id&&(p.reserve=Number(p.reserve)+Number(f.num),i+=Number(f.num))}}catch(b){h=!0,m=b}finally{try{v||null==g.return||g.return()}finally{if(h)throw m}}}}catch(b){u=!0,s=b}finally{try{l||null==c.return||c.return()}finally{if(u)throw s}}r.set("models",r.models),r.set("reserve",r.reserve+i)}else r.set("reserve",r.reserve+t.num);r.save().then(function(t){if(n==a.products.length-1){var r=o.default.Query("Bills");r.containedIn("objectId",a.bills),r.find().then(function(t){t.set("status",!0),t.saveAll().then(function(t){e.hideLoading(),e.navigateBack({delta:1}),setTimeout(function(){e.showToast({title:"审核成功"})},1e3)}).catch(function(e){console.log(e)})})}})})},ReduceGoodReserve:function(t,n){var r=o.default.Query("Goods");r.get(t.goodsId.objectId).then(function(r){if(t.goodsId.selected_model){var i=0,l=!0,u=!1,s=void 0;try{for(var d,c=t.goodsId.selected_model[Symbol.iterator]();!(l=(d=c.next()).done);l=!0){var f=d.value,v=!0,h=!1,m=void 0;try{for(var y,g=r.models[Symbol.iterator]();!(v=(y=g.next()).done);v=!0){var p=y.value;p.id==f.id&&(p.reserve=Number(p.reserve)-Number(f.num),i+=Number(f.num))}}catch(b){h=!0,m=b}finally{try{v||null==g.return||g.return()}finally{if(h)throw m}}}}catch(b){u=!0,s=b}finally{try{l||null==c.return||c.return()}finally{if(u)throw s}}r.set("models",r.models),r.set("reserve",r.reserve-i)}else r.set("reserve",r.reserve-t.num);r.save().then(function(t){if(n==a.products.length-1){var r=o.default.Query("Bills");r.containedIn("objectId",a.bills),r.find().then(function(t){t.set("status",!0),t.saveAll().then(function(t){e.hideLoading(),e.navigateBack({delta:1}),setTimeout(function(){e.showToast({title:"审核成功"})},1e3)}).catch(function(e){console.log(e)})})}})})},delete_bill:function(t){var n=a.products[t],r=(a.bills[t],o.default.Query("Goods"));r.set("id",n.goodsId.objectId),1==n.type?r.set("reserve",n.goodsId.reserve-n.num):-1==n.type&&r.set("reserve",n.goodsId.reserve+n.num),r.save().then(function(n){t==a.products.length-1&&(e.hideLoading(),e.navigateBack({delta:1}),setTimeout(function(){e.showToast({title:"撤销成功"})},1e3))})}}};t.default=d}).call(this,n("543d")["default"])},fc11:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},ff7e:function(e,t,n){"use strict";n.r(t);var o=n("fc11"),r=n("134a");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("7b55");var a=n("2877"),l=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=l.exports}},[["3ac5","common/runtime","common/vendor"]]]);