(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/report/EnteringHistory/detail/detail"],{"0aa2":function(e,t,n){"use strict";(function(e){n("d510"),n("921b");o(n("66fd"));var t=o(n("fdc4"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("c11b")["createPage"])},"166e":function(e,t,n){"use strict";var o=n("7c57"),r=n.n(o);r.a},"4d3c":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("9546")),a=i(n("856d")),s=i(n("7fd5"));function i(e){return e&&e.__esModule?e:{default:e}}function d(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=l(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,a=!0,s=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return a=e.done,e},e:function(e){s=!0,r=e},f:function(){try{a||null==o.return||o.return()}finally{if(s)throw r}}}}function l(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var c,f,v=function(){n.e("components/Loading/index").then(function(){return resolve(n("120a"))}.bind(null,n)).catch(n.oe)},m=function(){n.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(n("96bd"))}.bind(null,n)).catch(n.oe)},g={components:{loading:v,uniNavBar:m},data:function(){return{user:e.getStorageSync("user"),identity:e.getStorageSync("identity"),othercurrent:"",bills:[],loading:!0,products:null,detail:null}},onLoad:function(e){console.log(e),c=this,f=e.id,c.user.rights&&c.user.rights.othercurrent&&(c.othercurrent=c.user.rights.othercurrent),c.getdetail(f)},onShareAppMessage:function(e){return"button"===e.from&&console.log(e.target),{title:"库存表-操作单详情",path:"/pages/report/EnteringHistory/detail/detail?id="+f}},methods:{gotoexpressDet:function(){c.user.is_vip?e.navigateTo({url:"../expressDet/expressDet?number="+c.detail.expressNum}):e.showToast({title:"您还不是会员，无法使用",icon:"none"})},priview:function(t){e.previewImage({current:t,urls:c.detail.Images})},show_options:function(){var t=[];t=1==c.detail.type||-1==c.detail.type?1==c.detail.type&&1==c.detail.extra_type?["撤销","打印","采购入库"]:-1==c.detail.type&&1==c.detail.extra_type?["撤销","打印","销售出库"]:["撤销","打印"]:["打印"],e.showActionSheet({itemList:t,success:function(t){0==t.tapIndex?(c.revoke(),e.setStorageSync("is_option",!0)):1==t.tapIndex?a.default.print_operations(c.detail,c.products):2==t.tapIndex&&c.confrimOrder()},fail:function(e){console.log(e.errMsg)}})},getdetail:function(e){var t=r.default.Query("order_opreations");t.include("opreater","custom","producer","stock","shop","account"),t.get(e).then((function(e){console.log(e),c.detail=e;var t,n=d(e.detail);try{for(n.s();!(t=n.n()).done;){var o=t.value;o.packingUnit&&"undefined"!=o.packingUnit?o.packingUnit=o.packingUnit:o.packingUnit=""}}catch(r){n.e(r)}finally{n.f()}c.products=e.detail,c.bills=e.bills,c.loading=!1})).catch((function(e){console.log(e)}))},revoke:function(){o.showModal({title:"提示",content:"数据撤销后不可恢复，请谨慎撤销！",success:function(t){if(t.confirm){e.showLoading({title:"撤销中..."});var n=r.default.Query("order_opreations");n.destroy(c.detail.objectId).then((function(t){var n=r.default.Query("Bills");n.containedIn("objectId",c.bills),n.find().then((function(t){t.destroyAll().then((function(t){if(c.detail.status)for(var n=0;n<c.products.length;n++)c.delete_bill(n);else e.hideLoading(),e.navigateBack({delta:1}),setTimeout((function(){e.showToast({title:"撤销成功"})}),1e3)})).catch((function(e){console.log(e)}))}))})).catch((function(e){console.log(e)}))}}})},confrimOrder:function(){o.showModal({title:"提示",content:"是否审核该笔操作单！",success:function(t){if(t.confirm){if(e.showLoading({title:"审核中，请勿退出该页面..."}),c.detail.status)return e.showToast({title:"已经审核过了...",icon:"none"}),e.hideLoading(),!1;var n=r.default.Query("order_opreations");n.set("id",f),n.set("status",!0),n.save().then((function(e){var t=0;if(1==c.detail.type){var n,o=d(c.products);try{for(o.s();!(n=o.n()).done;){var r=n.value;c.addOrReduceGoodReserve(r,t),t+=1}}catch(l){o.e(l)}finally{o.f()}}else if(-1==c.detail.type){var a,s=d(c.products);try{for(s.s();!(a=s.n()).done;){var i=a.value;c.ReduceGoodReserve(i,t),t+=1}}catch(l){s.e(l)}finally{s.f()}}})).catch((function(e){console.log(e)}))}}})},addOrReduceGoodReserve:function(t,n){var o=r.default.Query("Goods");o.get(t.goodsId.objectId).then((function(o){console.log(o);var a=o;if(t.goodsId.selected_model){var s,i=0,l=d(t.goodsId.selected_model);try{for(l.s();!(s=l.n()).done;){var u,f=s.value,v=d(o.models);try{for(v.s();!(u=v.n()).done;){var m=u.value;m.id==f.id&&(m.reserve=Number(m.reserve)+Number(f.num),i+=Number(f.num))}}catch(g){v.e(g)}finally{v.f()}}}catch(g){l.e(g)}finally{l.f()}o.set("models",o.models),o.set("reserve",o.reserve+i)}else o.set("reserve",o.reserve+t.num);o.save().then((function(t){if(a.header){var o=r.default.Query("Goods");o.equalTo("header","==",a.header.objectId),o.equalTo("order","==",1),o.statTo("sum","reserve"),o.find().then((function(t){console.log("dasds",t);var o=t[0]._sumReserve,s=r.default.Query("Goods");s.set("reserve",o),""!=a.order&&null!=a.order&&void 0!=a.order||(a.max_num>=0?num>=a.max_num?s.set("stocktype",2):num<=a.warning_num?s.set("stocktype",0):s.set("stocktype",1):s.set("stocktype",1)),s.set("id",a.header.objectId),s.save().then((function(t){if(n==c.products.length-1){var o=r.default.Query("Bills");o.containedIn("objectId",c.bills),o.find().then((function(t){t.set("status",!0),t.saveAll().then((function(t){e.hideLoading(),e.navigateBack({delta:1}),setTimeout((function(){e.showToast({title:"审核成功"})}),1e3)})).catch((function(e){console.log(e)}))}))}}))}))}else if(n==c.products.length-1){var s=r.default.Query("Bills");s.containedIn("objectId",c.bills),s.find().then((function(t){t.set("status",!0),t.saveAll().then((function(t){e.hideLoading(),e.navigateBack({delta:1}),setTimeout((function(){e.showToast({title:"审核成功"})}),1e3)})).catch((function(e){console.log(e)}))}))}}))}))},ReduceGoodReserve:function(t,n){var o=r.default.Query("Goods"),a=0;o.get(t.goodsId.objectId).then((function(o){console.log(o);var i=o;if(t.goodsId.selected_model){var l,u=0,f=d(t.goodsId.selected_model);try{for(f.s();!(l=f.n()).done;){var v,m=l.value,g=d(o.models);try{for(g.s();!(v=g.n()).done;){var h=v.value;h.id==m.id&&(h.reserve=Number(h.reserve)-Number(m.num),u+=Number(m.num))}}catch(p){g.e(p)}finally{g.f()}}}catch(p){f.e(p)}finally{f.f()}o.set("models",o.models),o.set("reserve",o.reserve-u),a=o.reserve-u}else o.set("reserve",o.reserve-t.num),a=o.reserve-t.num;console.log(t),o.save().then((function(o){if(i.header){var d=r.default.Query("Goods");d.equalTo("header","==",i.header.objectId),d.equalTo("order","==",1),d.statTo("sum","reserve"),d.find().then((function(o){console.log("dasds",o);var a=o[0]._sumReserve,d=r.default.Query("Goods");d.set("reserve",a),""!=i.order&&null!=i.order&&void 0!=i.order||(i.warning_num>=0?num>=i.max_num?d.set("stocktype",2):num<=i.warning_num?d.set("stocktype",0):d.set("stocktype",1):d.set("stocktype",1)),d.set("id",i.header.objectId),d.save().then((function(o){if(t.warning_num>=a&&t.warning_num>=0&&s.default.log(t.goodsName+"销售了"+t.num+"件，已经低于预警数量"+t.warning_num,-2,t.goodsId.objectId),n==c.products.length-1){var i=r.default.Query("Bills");i.containedIn("objectId",c.bills),i.find().then((function(t){t.set("status",!0),t.saveAll().then((function(t){e.hideLoading(),e.navigateBack({delta:1}),setTimeout((function(){e.showToast({title:"审核成功"})}),1e3)})).catch((function(e){console.log(e)}))}))}}))}))}else if(t.warning_num>=a&&s.default.log(t.goodsName+"销售了"+t.num+"件，已经低于预警数量"+t.warning_num,-2,t.goodsId.objectId),n==c.products.length-1){var l=r.default.Query("Bills");l.containedIn("objectId",c.bills),l.find().then((function(t){t.set("status",!0),t.saveAll().then((function(t){e.hideLoading(),e.navigateBack({delta:1}),setTimeout((function(){e.showToast({title:"审核成功"})}),1e3)})).catch((function(e){console.log(e)}))}))}}))}))},delete_bill:function(t){var n=c.products[t],o=(c.bills[t],r.default.Query("Goods"));o.get(n.goodsId.objectId).then((function(a){console.log(a);var s=a;if(o.set("id",n.goodsId.objectId),1==n.type)if(n.goodsId.selected_model){var i,l=0,u=d(n.goodsId.selected_model);try{for(u.s();!(i=u.n()).done;){var f,v=i.value,m=d(a.models);try{for(m.s();!(f=m.n()).done;){var g=f.value;g.id==v.id&&(g.reserve=Number(g.reserve)-Number(v.num),l+=Number(v.num))}}catch(T){m.e(T)}finally{m.f()}}}catch(T){u.e(T)}finally{u.f()}o.set("models",a.models),o.set("reserve",a.reserve-l)}else o.set("reserve",a.reserve-n.num);else if(-1==n.type)if(n.goodsId.selected_model){var h,p=0,y=d(n.goodsId.selected_model);try{for(y.s();!(h=y.n()).done;){var b,I=h.value,_=d(a.models);try{for(_.s();!(b=_.n()).done;){var w=b.value;w.id==I.id&&(w.reserve=Number(w.reserve)+Number(I.num),p+=Number(I.num))}}catch(T){_.e(T)}finally{_.f()}}}catch(T){y.e(T)}finally{y.f()}o.set("models",a.models),o.set("reserve",a.reserve+p)}else o.set("reserve",a.reserve+n.num);o.save().then((function(n){if(s.header){var o=r.default.Query("Goods");o.equalTo("header","==",s.header.objectId),o.equalTo("order","==",1),o.statTo("sum","reserve"),o.find().then((function(n){console.log("当前的产品的主产品",n);var o=n[0]._sumReserve,a=r.default.Query("Goods");a.set("reserve",o),a.set("stocktype",o>s.warning_num?1:0),a.set("id",s.header.objectId),a.save().then((function(n){t==c.products.length-1&&(e.hideLoading(),e.navigateBack({delta:1}),setTimeout((function(){e.showToast({title:"撤销成功"})}),1e3))}))}))}else t==c.products.length-1&&(e.hideLoading(),e.navigateBack({delta:1}),setTimeout((function(){e.showToast({title:"撤销成功"})}),1e3))}))})).catch((function(e){console.log(e)}))}}};t.default=g}).call(this,n("c11b")["default"],n("c11b")["default"])},"5f02":function(e,t,n){"use strict";var o={"uni-nav-bar":function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"96bd"))}},r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.detail.createdTime.iso.split(" ")),o=e.detail.createdTime.iso.split(" "),r=e.detail.createdTime.iso.split(" "),a=e.detail.createdTime.iso.split(" "),s=e.detail.createdTime.iso.split(" ");e.$mp.data=Object.assign({},{$root:{g0:n,g1:o,g2:r,g3:a,g4:s}})},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}))},"7c57":function(e,t,n){},d09e:function(e,t,n){"use strict";n.r(t);var o=n("4d3c"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=r.a},fdc4:function(e,t,n){"use strict";n.r(t);var o=n("5f02"),r=n("d09e");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("166e");var s,i=n("f0c5"),d=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);t["default"]=d.exports}},[["0aa2","common/runtime","common/vendor"]]]);