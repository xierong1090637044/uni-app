(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/report/matterRecord/detail/detail"],{"0049":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n("9546")),i=s(n("856d")),a=s(n("7fd5"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=c(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){a=!0,r=e},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw r}}}}function c(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var d,f,v=function(){n.e("components/Loading/index").then(function(){return resolve(n("120a"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(n("96bd"))}.bind(null,n)).catch(n.oe)},g={components:{loading:v,uniNavBar:h},data:function(){return{user:e.getStorageSync("user"),identity:e.getStorageSync("identity"),othercurrent:"",bills:[],loading:!0,products:null,detail:null}},onLoad:function(e){console.log(e),d=this,f=e.id,d.user.rights&&d.user.rights.othercurrent&&(d.othercurrent=d.user.rights.othercurrent),d.getdetail(f)},methods:{gotoexpressDet:function(){d.user.is_vip?e.navigateTo({url:"../expressDet/expressDet?number="+d.detail.expressNum}):e.showToast({title:"您还不是会员，无法使用",icon:"none"})},priview:function(t){e.previewImage({current:t,urls:d.detail.Images})},show_options:function(){var t=["打印"];(-1==d.detail.type||1==d.detail.type)&&(-1!=d.othercurrent.indexOf("1")||1==d.identity&&1==d.detail.extra_type)?(t=["审核","撤销","打印"],e.showActionSheet({itemList:t,success:function(t){0==t.tapIndex?(1==d.detail.type?d.detail.status?e.showToast({title:"该笔采购单已审核",icon:"none"}):d.confrimOrder():-1==d.detail.type&&(d.detail.status?e.showToast({title:"该笔销售单已审核",icon:"none"}):d.confrimOrder()),e.setStorageSync("is_option",!0)):1==t.tapIndex?(d.revoke(),e.setStorageSync("is_option",!0)):2==t.tapIndex&&i.default.print_operations(d.detail,d.products)},fail:function(e){console.log(e.errMsg)}})):(t=["撤销","打印"],e.showActionSheet({itemList:t,success:function(t){0==t.tapIndex?(d.revoke(),e.setStorageSync("is_option",!0)):1==t.tapIndex&&i.default.print_operations(d.detail,d.products)},fail:function(e){console.log(e.errMsg)}}))},getdetail:function(e){var t=r.default.Query("order_opreations");t.include("opreater","custom","producer","stock"),t.get(e).then((function(e){console.log(e),d.detail=e,d.products=e.detail,d.bills=e.bills,d.loading=!1})).catch((function(e){console.log(e)}))},revoke:function(){o.showModal({title:"提示",content:"数据撤销后不可恢复，请谨慎撤销！",success:function(t){if(t.confirm){e.showLoading({title:"撤销中..."});var n=r.default.Query("order_opreations");n.destroy(d.detail.objectId).then((function(t){var n=r.default.Query("Bills");n.containedIn("objectId",d.bills),n.find().then((function(t){t.destroyAll().then((function(t){if(d.detail.status)for(var n=0;n<d.products.length;n++)d.delete_bill(n);else e.hideLoading(),e.navigateBack({delta:1}),setTimeout((function(){e.showToast({title:"撤销成功"})}),1e3)})).catch((function(e){console.log(e)}))}))})).catch((function(e){console.log(e)}))}}})},confrimOrder:function(){o.showModal({title:"提示",content:"是否审核该笔操作单！",success:function(t){if(t.confirm){e.showLoading({title:"审核中，请勿退出该页面..."});var n=r.default.Query("order_opreations");n.set("id",f),n.set("status",!0),n.save().then((function(e){var t=0;if(1==d.detail.type){var n,o=u(d.products);try{for(o.s();!(n=o.n()).done;){var r=n.value;d.addOrReduceGoodReserve(r,t),t+=1}}catch(c){o.e(c)}finally{o.f()}}else if(-1==d.detail.type){var i,a=u(d.products);try{for(a.s();!(i=a.n()).done;){var s=i.value;d.ReduceGoodReserve(s,t),t+=1}}catch(c){a.e(c)}finally{a.f()}}})).catch((function(e){console.log(e)}))}}})},addOrReduceGoodReserve:function(t,n){var o=r.default.Query("Matters");o.get(t.goodsId.objectId).then((function(o){if(t.goodsId.selected_model){var i,a=0,s=u(t.goodsId.selected_model);try{for(s.s();!(i=s.n()).done;){var c,l=i.value,f=u(o.models);try{for(f.s();!(c=f.n()).done;){var v=c.value;v.id==l.id&&(v.reserve=Number(v.reserve)+Number(l.num),a+=Number(l.num))}}catch(h){f.e(h)}finally{f.f()}}}catch(h){s.e(h)}finally{s.f()}o.set("models",o.models),o.set("reserve",o.reserve+a)}else o.set("reserve",o.reserve+t.num);o.save().then((function(t){if(n==d.products.length-1){var o=r.default.Query("Bills");o.containedIn("objectId",d.bills),o.find().then((function(t){t.set("status",!0),t.saveAll().then((function(t){e.hideLoading(),e.navigateBack({delta:1}),setTimeout((function(){e.showToast({title:"审核成功"})}),1e3)})).catch((function(e){console.log(e)}))}))}}))}))},ReduceGoodReserve:function(t,n){var o=r.default.Query("Matters"),i=0;o.get(t.goodsId.objectId).then((function(o){if(t.goodsId.selected_model){var s,c=0,l=u(t.goodsId.selected_model);try{for(l.s();!(s=l.n()).done;){var f,v=s.value,h=u(o.models);try{for(h.s();!(f=h.n()).done;){var g=f.value;g.id==v.id&&(g.reserve=Number(g.reserve)-Number(v.num),c+=Number(v.num))}}catch(m){h.e(m)}finally{h.f()}}}catch(m){l.e(m)}finally{l.f()}o.set("models",o.models),o.set("reserve",o.reserve-c),i=o.reserve-c}else o.set("reserve",o.reserve-t.num),i=o.reserve-t.num;console.log(t),o.save().then((function(o){if(t.warning_num>=i&&a.default.log(t.goodsName+"销售了"+t.num+"件，已经低于预警数量"+t.warning_num,-2,t.goodsId.objectId),n==d.products.length-1){var s=r.default.Query("Bills");s.containedIn("objectId",d.bills),s.find().then((function(t){t.set("status",!0),t.saveAll().then((function(t){e.hideLoading(),e.navigateBack({delta:1}),setTimeout((function(){e.showToast({title:"审核成功"})}),1e3)})).catch((function(e){console.log(e)}))}))}}))}))},delete_bill:function(t){var n=d.products[t],o=(d.bills[t],r.default.Query("Matters"));o.set("id",n.goodsId.objectId),1==n.type?o.set("reserve",n.goodsId.reserve-n.num):-1==n.type&&o.set("reserve",n.goodsId.reserve+n.num),o.save().then((function(n){t==d.products.length-1&&(e.hideLoading(),e.navigateBack({delta:1}),setTimeout((function(){e.showToast({title:"撤销成功"})}),1e3))}))}}};t.default=g}).call(this,n("c11b")["default"],n("c11b")["default"])},"57ee":function(e,t,n){"use strict";n.r(t);var o=n("a541"),r=n("d3fb");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("f999");var a,s=n("f0c5"),u=Object(s["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=u.exports},"5f67":function(e,t,n){"use strict";(function(e){n("d510"),n("921b");o(n("66fd"));var t=o(n("57ee"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("c11b")["createPage"])},"9dde":function(e,t,n){},a541:function(e,t,n){"use strict";var o={"uni-nav-bar":function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"96bd"))}},r=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}))},d3fb:function(e,t,n){"use strict";n.r(t);var o=n("0049"),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},f999:function(e,t,n){"use strict";var o=n("9dde"),r=n.n(o);r.a}},[["5f67","common/runtime","common/vendor"]]]);