(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-operations-operations"],{"07cb":function(e,t,n){var r=n("53e8");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("4f06").default;o("20426efd",r,!0,{sourceMap:!1,shadowMode:!1})},"32ae":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-tab-bar"},[n("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{padding:"30rpx 0","border-bottom":"6rpx solid#DDDDDD"}},[n("v-uni-picker",{staticClass:"frist_item display_flex",attrs:{range:e.tabBars,"range-key":"name"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.tapTab.apply(void 0,arguments)}}},[n("v-uni-text",{staticStyle:{"margin-right":"10rpx"}},[e._v(e._s(e.type_dec))]),n("fa-icon",{attrs:{type:"angle-down",size:"20",color:"#999"}})],1),n("v-uni-picker",{staticClass:"frist_item display_flex",attrs:{mode:"date",fields:"month"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.selected_day.apply(void 0,arguments)}}},[n("v-uni-text",{staticStyle:{"margin-right":"10rpx"}},[e._v(e._s(e.time_desc))]),n("fa-icon",{attrs:{type:"angle-down",size:"20",color:"#999"}})],1)],1),n("v-uni-scroll-view",{staticClass:"content",attrs:{"scroll-y":!0}},e._l(e.details,function(t,r){return n("v-uni-view",{key:r,staticClass:"detail_item"},[1===t.type?n("v-uni-view",[n("v-uni-view",{staticClass:"display_flex_bet"},[n("v-uni-view",[2==t.extra_type?n("v-uni-text",[e._v("入库数量：")]):1==t.extra_type?n("v-uni-text",[e._v("采购数量：")]):4==t.extra_type?n("v-uni-text",[e._v("销售退货数量：")]):e._e(),n("v-uni-text",{staticStyle:{"margin-left":"10rpx",color:"#FC0F4A"}},[e._v(e._s(t.num))])],1),n("v-uni-view",[2==t.extra_type?n("v-uni-text",[e._v("入库单价：")]):1==t.extra_type?n("v-uni-text",[e._v("采购单价：")]):4==t.extra_type?n("v-uni-text",[e._v("退货单价：")]):e._e(),n("v-uni-text",{staticStyle:{"margin-left":"10rpx",color:"#FC0F4A"}},[e._v(e._s(t.retailPrice))])],1)],1)],1):e._e(),-1===t.type?n("v-uni-view",[n("v-uni-view",{staticClass:"display_flex_bet"},[n("v-uni-view",[2==t.extra_type?n("v-uni-text",[e._v("出库数量：")]):1==t.extra_type?n("v-uni-text",[e._v("销售数量：")]):4==t.extra_type?n("v-uni-text",[e._v("采购退货数量：")]):e._e(),n("v-uni-text",{staticStyle:{"margin-left":"10rpx",color:"#f30","font-weight":"bold"}},[e._v(e._s(t.num))])],1),n("v-uni-view",[2==t.extra_type?n("v-uni-text",[e._v("出库单价：")]):1==t.extra_type?n("v-uni-text",[e._v("销售单价：")]):4==t.extra_type?n("v-uni-text",[e._v("退货单价：")]):e._e(),n("v-uni-text",{staticStyle:{"margin-left":"10rpx",color:"#f30","font-weight":"bold"}},[e._v(e._s(t.retailPrice))])],1)],1)],1):e._e(),3===t.type?n("v-uni-view",{staticClass:"display_flex_bet"},[n("v-uni-view",[n("v-uni-text",[e._v("盘点前库存：")]),n("v-uni-text",{staticStyle:{"margin-left":"10rpx",color:"#f30","font-weight":"bold"}},[e._v(e._s(t.reserve))])],1),n("v-uni-view",[n("v-uni-text",[e._v("盘点后库存：")]),n("v-uni-text",{staticStyle:{"margin-left":"10rpx",color:"#f30","font-weight":"bold"}},[e._v(e._s(t.now_reserve))])],1)],1):e._e(),n("v-uni-view",{staticClass:"content_time"},[e._v(e._s(t.createdAt))])],1)}),1),e.seleted_tab&&3!=e.seleted_tab?n("v-uni-view",{staticClass:"display_flex_bet bottomEle"},[n("v-uni-view",[e._v(e._s(e.goodsName))]),n("v-uni-view",[n("v-uni-view",[e._v("总数:"),n("v-uni-text",{staticStyle:{color:"#f30"}},[e._v(e._s(e.total_num))])],1),n("v-uni-view",[e._v("总金额:"),n("v-uni-text",{staticStyle:{color:"#f30"}},[e._v(e._s(e.total_money))])],1)],1)],1):e._e()],1)},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},"53e8":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"uni-page-body[data-v-8f62f798]{font-size:%?28?%;color:#3d3d3d;background:#fff}.bottomEle[data-v-8f62f798]{background:#fff;position:fixed;bottom:%?0?%;box-shadow:0 %?0?% %?10?% rgba(0,0,0,.5);width:calc(100% - %?60?%);padding:%?20?% %?30?%;font-weight:700}.swiper-tab-list[data-v-8f62f798]{height:100%;line-height:%?100?%!important}.frist_item[data-v-8f62f798]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:50%}.content[data-v-8f62f798]{width:100%;padding:%?10?% %?30?%;width:calc(100% - %?60?%);height:calc(100vh - %?132?%)}.content_time[data-v-8f62f798]{text-align:right;color:#999}.detail_item[data-v-8f62f798]{border-bottom:%?1?% solid#ccc;margin-bottom:%?10?%;padding-bottom:%?10?%}.detail_name[data-v-8f62f798]{font-size:%?32?%;margin-bottom:%?6?%;font-weight:700}body.?%PAGE?%[data-v-8f62f798]{background:#fff}",""])},6746:function(e,t,n){"use strict";(function(e){var r=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("7514"),n("28a5"),n("c5f6");var o,a,u,i=r(n("9546")),l=(r(n("7fd5")),{components:{},data:function(){return{type_dec:"操作类型",time_desc:"操作时间",goodsName:"",total_num:0,total_money:0,year:"",month:"",seleted_tab:"",details:null,extra_type:"",tabBars:[{name:"入库",type:1,extra_type:2},{name:"采购",type:1,extra_type:1},{name:"出库",type:-1,extra_type:2},{name:"销售",type:-1,extra_type:1},{name:"盘点",type:3,extra_type:""},{name:"退货",type:2,extra_type:""}]}},onLoad:function(t){o=this,a=wx.getStorageSync("uid"),u=t.objectId,o.goodsName=t.goodsName;var n=new Date;o.year=n.getFullYear(),o.month=Number(n.getMonth()+1)<10?"0"+Number(n.getMonth()+1):n.getMonth()+1,o.getdetail(),e.log(o.year,o.month)},methods:{tapTab:function(t){e.log(t);var n=t.detail.value;o.type_dec=o.tabBars[n].name,o.seleted_tab=o.tabBars[n].type,o.extra_type=o.tabBars[n].extra_type,o.getdetail()},selected_day:function(t){e.log(t);var n=t.detail.value;o.time_desc=n,o.year=n.split("-")[0],o.month=n.split("-")[1],o.getdetail()},getdetail:function(){uni.showLoading({title:"加载中..."});var t=i.default.Query("Bills");t.equalTo("userId","==",a),o.seleted_tab&&(1!=o.seleted_tab&&-1!=o.seleted_tab||t.equalTo("extra_type","==",o.extra_type),t.equalTo("type","==",o.seleted_tab)),t.equalTo("status","!=",!1),t.equalTo("goodsId","==",u),t.equalTo("createdAt",">=",o.year+"-"+o.month+"-01 00:00:00"),t.equalTo("createdAt","<=",o.year+"-"+o.month+"-"+new Date(o.year,o.month,0).getDate()+" 23:59:59"),t.order("-createdAt"),t.find().then(function(t){if(e.log(t),o.details=t,uni.hideLoading(),3!=o.seleted_tab){var n=i.default.Query("Bills");n.equalTo("userId","==",a),n.equalTo("status","!=",!1),n.equalTo("type","==",o.seleted_tab),o.extra_type&&n.equalTo("extra_type","==",o.extra_type),n.equalTo("goodsId","==",u),n.equalTo("createdAt",">=",o.year+"-"+o.month+"-01 00:00:00"),n.equalTo("createdAt","<=",o.year+"-"+o.month+"-"+new Date(o.year,o.month,0).getDate()+" 23:59:59"),n.statTo("sum","num,total_money"),n.find().then(function(e){e[0]?(o.total_num=e[0]._sumNum,o.total_money=e[0]._sumTotal_money):(o.total_num=0,o.total_money=0)})}})}}});t.default=l}).call(this,n("5a52")["default"])},"7fd5":function(e,t,n){"use strict";(function(t){var r=n("288e");n("6b54"),n("7514");var o=r(n("5d73"));n("c5f6");var a=r(n("795b")),u=r(n("9546"));e.exports={enterAddGoodNum:function(e){var n=this;return new a.default(function(r,a){for(var i=function(a){var i=0,l=u.default.Query("Goods");l.get(e[a].objectId).then(function(s){var d=s;if(e[a].selectd_model){var c=!0,f=!1,v=void 0;try{for(var m,y=(0,o.default)(e[a].selected_model);!(c=(m=y.next()).done);c=!0){var g=m.value,_=!0,h=!1,b=void 0;try{for(var p,x=(0,o.default)(d.models);!(_=(p=x.next()).done);_=!0){var w=p.value;w.id==g.id&&(w.reserve=Number(w.reserve)+Number(g.num)),delete w.num}}catch(S){h=!0,b=S}finally{try{_||null==x.return||x.return()}finally{if(h)throw b}}}}catch(S){f=!0,v=S}finally{try{c||null==y.return||y.return()}finally{if(f)throw v}}i=Number(d.reserve)+Number(e[a].num),l.set("models",d.models)}else i=Number(d.reserve)+Number(e[a].num);l.set("reserve",i),l.set("id",e[a].objectId),l.save().then(function(o){if(e[a].header){var i=u.default.Query("Goods");i.equalTo("header","==",e[a].header.objectId),i.equalTo("order","==",1),i.statTo("sum","reserve"),i.find().then(function(o){t.log("dasds",o);var i=o[0]._sumReserve,l=u.default.Query("Goods");l.set("reserve",i),l.set("id",e[a].header.objectId),l.save().then(function(t){n.modifyStockType(e[a].header.objectId),a==e.length-1&&r(!0)})})}else n.modifyStockType(e[a].objectId),a==e.length-1&&r(!0)}).catch(function(e){t.log(e)})})},l=0;l<e.length;l++)i(l)})},outRedGoodNum:function(e){var n=this;return new a.default(function(r,a){for(var i=function(a){var i=0,l=u.default.Query("Goods");l.get(e[a].objectId).then(function(s){var d=s;if(e[a].selectd_model){var c=!0,f=!1,v=void 0;try{for(var m,y=(0,o.default)(e[a].selected_model);!(c=(m=y.next()).done);c=!0){var g=m.value,_=!0,h=!1,b=void 0;try{for(var p,x=(0,o.default)(d.models);!(_=(p=x.next()).done);_=!0){var w=p.value;i+=Number(w.reserve),w.id==g.id&&(w.reserve=Number(w.reserve)-Number(g.num)),delete w.num}}catch(S){h=!0,b=S}finally{try{_||null==x.return||x.return()}finally{if(h)throw b}}}}catch(S){f=!0,v=S}finally{try{c||null==y.return||y.return()}finally{if(f)throw v}}i=Number(d.reserve)-Number(e[a].num),l.set("models",d.models)}else i=Number(d.reserve)-Number(e[a].num);l.set("reserve",i),l.set("id",e[a].objectId),l.save().then(function(t){if(e[a].header){var o=u.default.Query("Goods");o.equalTo("header","==",e[a].header.objectId),o.equalTo("order","==",1),o.statTo("sum","reserve"),o.find().then(function(t){var o=t[0]._sumReserve,i=u.default.Query("Goods");i.set("reserve",o),i.set("id",e[a].header.objectId),i.save().then(function(t){n.modifyStockType(e[a].header.objectId),a==e.length-1&&r(!0)})})}else n.modifyStockType(e[a].objectId),a==e.length-1&&r(!0)}).catch(function(e){t.log(e)})})},l=0;l<e.length;l++)i(l)})},enterAddGoodNumNew:function(e){var n=this;return new a.default(function(r,a){for(var i=uni.getStorageSync("warehouse")?uni.getStorageSync("warehouse")[0].stock:"",l=uni.getStorageSync("uid"),s=function(a){var s=0,d=u.default.Query("Goods");d.get(e[a].objectId).then(function(d){if(e[a].selectd_model){var c=!0,f=!1,v=void 0;try{for(var m,y=(0,o.default)(e[a].selected_model);!(c=(m=y.next()).done);c=!0){var g=m.value,_=!0,h=!1,b=void 0;try{for(var p,x=(0,o.default)(e[a].models);!(_=(p=x.next()).done);_=!0){var w=p.value;w.id==g.id&&(w.reserve=Number(w.reserve)+Number(g.num)),delete w.num}}catch(N){h=!0,b=N}finally{try{_||null==x.return||x.return()}finally{if(h)throw b}}}}catch(N){f=!0,v=N}finally{try{c||null==y.return||y.return()}finally{if(f)throw v}}s=Number(e[a].reserve)+Number(e[a].num),d.set("models",e[a].models)}else s=Number(e[a].reserve)+Number(e[a].num);d.set("reserve",s),d.save();var S=u.default.Query("Goods");S.equalTo("userId","==",l),S.equalTo("header","==",e[a].objectId),S.equalTo("stocks","==",i.objectId),S.find().then(function(o){if(0==o.length)n.upload_good_withNoCan(e[a],i,Number(e[a].num)).then(function(n){t.log(n),a==e.length-1&&r(!0)});else{var l=u.default.Query("Goods");l.set("id",o[0].objectId),l.set("reserve",o[0].reserve+Number(e[a].num)),l.save().then(function(n){t.log(n),a==e.length-1&&r(!0)}).catch(function(e){t.log(e)})}})}).catch(function(e){t.log(e)})},d=0;d<e.length;d++)s(d)})},outRedGoodNumNew:function(e){var n=this;return new a.default(function(r,a){for(var i=uni.getStorageSync("warehouse")?uni.getStorageSync("warehouse")[0].stock:"",l=uni.getStorageSync("uid"),s=function(a){var s=0,d=u.default.Query("Goods");d.get(e[a].objectId).then(function(d){if(e[a].selectd_model){var c=!0,f=!1,v=void 0;try{for(var m,y=(0,o.default)(e[a].selected_model);!(c=(m=y.next()).done);c=!0){var g=m.value,_=!0,h=!1,b=void 0;try{for(var p,x=(0,o.default)(e[a].models);!(_=(p=x.next()).done);_=!0){var w=p.value;w.id==g.id&&(w.reserve=Number(w.reserve)-Number(g.num)),delete w.num}}catch(N){h=!0,b=N}finally{try{_||null==x.return||x.return()}finally{if(h)throw b}}}}catch(N){f=!0,v=N}finally{try{c||null==y.return||y.return()}finally{if(f)throw v}}s=Number(e[a].reserve)-Number(e[a].num),d.set("models",e[a].models)}else s=Number(e[a].reserve)-Number(e[a].num);d.set("reserve",s),d.save();var S=u.default.Query("Goods");S.equalTo("userId","==",l),S.equalTo("header","==",e[a].objectId),S.equalTo("stocks","==",i.objectId),S.find().then(function(o){if(0==o.length)n.upload_good_withNoCan(e[a],i,Number(e[a].num),"out").then(function(n){t.log(n),a==e.length-1&&r(!0)});else{var l=u.default.Query("Goods");l.set("id",o[0].objectId),l.set("reserve",o[0].reserve-Number(e[a].num)),l.save().then(function(n){t.log(n),a==e.length-1&&r(!0)}).catch(function(e){t.log(e)})}})}).catch(function(e){t.log(e)})},d=0;d<e.length;d++)s(d)})},upload_good_withNoCan:function(e,n,r,i){return new a.default(function(a,l){t.log(e);var s=uni.getStorageSync("uid"),d=u.default.Pointer("_User"),c=d.set(s),f=u.default.Pointer("stocks"),v=f.set(n.objectId),m=u.default.Pointer("Goods"),y="";y=e.header?m.set(e.header.objectId):m.set(e.objectId);var g=u.default.Query("Goods");if(g.set("goodsName",e.goodsName),g.set("goodsIcon",e.goodsIcon),"out"==i){if(g.set("reserve",0-Number(r)),e.goodsId&&e.goodsId.models){var _=!0,h=!1,b=void 0;try{for(var p,x=(0,o.default)(e.goodsId.models);!(_=(p=x.next()).done);_=!0){var w=p.value;w.reserve=0-Number(w.num)}}catch(M){h=!0,b=M}finally{try{_||null==x.return||x.return()}finally{if(h)throw b}}g.set("models",e.goodsId.models)}}else if("allocation"==i){if(g.set("reserve",Number(r)),e.selected_model&&e.selected_model.length>0){var S=!0,N=!1,I=void 0;try{for(var T,j=(0,o.default)(e.selected_model);!(S=(T=j.next()).done);S=!0){var k=T.value;k.reserve=Number(k.num),delete k.num}}catch(M){N=!0,I=M}finally{try{S||null==j.return||j.return()}finally{if(N)throw I}}g.set("models",e.selected_model)}}else if(g.set("reserve",Number(r)),e.goodsId&&e.goodsId.models){var q=!0,G=!1,Q=void 0;try{for(var C,D=(0,o.default)(e.goodsId.models);!(q=(C=D.next()).done);q=!0){var P=C.value;P.reserve=Number(P.num)}}catch(M){G=!0,Q=M}finally{try{q||null==D.return||D.return()}finally{if(G)throw Q}}g.set("models",e.goodsId.models)}g.set("stocks",v),g.set("userId",c),g.set("header",y),g.set("costPrice",""+e.costPrice),g.set("retailPrice",""+e.retailPrice),g.set("order",1),g.save().then(function(e){t.log(e),a([!0,e])}).catch(function(e){t.log(e)})})},handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(e,n,r){var o=u.default.Pointer("_User"),a=o.set(uni.getStorageSync("uid"));if(-2==n){var i=u.default.Pointer("Goods"),l=i.set(r),s=u.default.Query("logs");s.equalTo("goodId","==",r),s.find().then(function(r){if(0==r.length){var o=u.default.Query("logs");o.set("parent",a),o.set("goodId",l),o.set("log",e),o.set("type",n),o.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})}})}else{var d=u.default.Query("logs");d.set("parent",a),d.set("log",e),d.set("detail_id",r),d.set("type",n),d.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})}},modifyStockType:function(e){var n=this,r=u.default.Query("Goods");r.get(e).then(function(e){var t=e;""==t.warning_num&&""==t.max_num?e.set("stocktype",1):void 0==t.warning_num&&void 0==t.max_num?e.set("stocktype",1):null==t.warning_num&&null==t.max_num?e.set("stocktype",1):(""!=t.warning_num&&(t.warning_num>=t.reserve?(e.set("stocktype",0),n.log(t.goodsName+"已经超过设置的最小库存值"+t.warning_num,-2,t.objectId)):t.warning_num<t.reserve&&t.reserve<t.max_num&&e.set("stocktype",1)),""!=t.max_num&&(t.max_num<=t.reserve?(e.set("stocktype",2),n.log(t.goodsName+"已经超过设置的最大库存值"+t.max_num,-2,t.objectId)):t.warning_num<t.reserve&&t.reserve<t.max_num&&e.set("stocktype",1))),e.save()}).catch(function(e){t.log(e)})},record_shopOut:function(e,n){t.log(e,n);var r=u.default.Query("shops");r.set("id",e),r.set("have_out",n),r.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})},record_staffOut:function(e){if(t.log(e,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var n=u.default.Query("_User");n.set("id",uni.getStorageSync("user").objectId),n.set("have_out",Number(e)+uni.getStorageSync("user").have_out),n.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})}},get_allCost:function(){var e=uni.getStorageSync("uid");t.log(e);var n=u.default.Query("Goods");n.equalTo("userId","==",e),n.find().then(function(e){t.log(e);var n=!0,r=!1,a=void 0;try{for(var u,i=(0,o.default)(e);!(n=(u=i.next()).done);n=!0){var l=u.value;t.log(l),Number(l.costPrice)*l.reserve,l.reserve}}catch(s){r=!0,a=s}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}})},getDay:function(e,t){var n=this,r=new Date,o=r.getTime()+864e5*e;r.setTime(o);var a=r.getFullYear(),u=r.getMonth(),i=r.getDate();return u=n.handleMonth(u+1),i=n.handleMonth(i),t?a+"-"+u+"-"+i+" 00:00:00":a+"-"+u+"-"+i},js_date_time:function(e,t){var n=new Date(e),r=n.getFullYear(),o=n.getMonth()+1;o=o<10?"0"+o:o;var a=n.getDate();a=a<10?"0"+a:a;var u=n.getHours();u=u<10?"0"+u:u;var i=n.getMinutes(),l=n.getSeconds();return i=i<10?"0"+i:i,l=l<10?"0"+l:l,t?r+"-"+o+"-"+a+" "+u+":"+i:r+"-"+o+"-"+a},handleMonth:function(e){var t=e;return 1==e.toString().length&&(t="0"+e),t}}}).call(this,n("5a52")["default"])},af8b:function(e,t,n){"use strict";n.r(t);var r=n("6746"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t["default"]=o.a},bfea:function(e,t,n){"use strict";n.r(t);var r=n("32ae"),o=n("af8b");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("f929");var u=n("f0c5"),i=Object(u["a"])(o["default"],r["a"],r["b"],!1,null,"8f62f798",null);t["default"]=i.exports},f929:function(e,t,n){"use strict";var r=n("07cb"),o=n.n(r);o.a}}]);