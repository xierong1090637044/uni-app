(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-finance-outRecord-outRecord~pages-manage-custom-producer_detail-debt_history-debt_history~page~7c1bbebb"],{"7faa":function(e,t,r){"use strict";(function(e){var o=r("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("c5f6");var n=o(r("f499"));r("7514");var u=o(r("795b")),a=o(r("9546")),d={get_producerList:function(e,t){return new u.default(function(r,o){var u=JSON.parse(localStorage.getItem("bmob")).objectId,d=a.default.Query("producers");d.order("num"),d.equalTo("parent","==",u),d.equalTo("disabled","==",e),t&&d.equalTo("name","==",{$regex:t+".*"}),d.find().then(function(e){localStorage.setItem("shops",(0,n.default)(e)),r(e)})})},add_producer:function(t){e.log(t);var r=JSON.parse(localStorage.getItem("bmob")).objectId;return new u.default(function(o,n){var u=a.default.Pointer("_User"),d=u.set(r);if(t.objectId){var l=a.default.Query("producers");l.set("producer_name",t.producer_name),l.set("debt",Number(t.debt)),l.set("producer_address",t.producer_address),l.set("producer_phone",t.producer_phone),l.set("parent",d),l.set("disabled",!t.disabled),l.set("id",t.objectId),l.save().then(function(e){o(e)}).catch(function(t){e.log(t)})}else{var s=a.default.Query("producers");s.equalTo("parent","==",r),s.equalTo("name","==",t.producer_name),s.find().then(function(r){if(e.log(r),0==r.length){var n=a.default.Query("producers");n.set("producer_name",t.producer_name),n.set("debt",Number(t.debt)),n.set("producer_address",t.producer_address),n.set("producer_phone",t.producer_phone),n.set("have_out",0),n.set("disabled",!t.disabled),n.set("parent",d),n.save().then(function(e){o(e)}).catch(function(t){e.log(t)})}else o(!1)})}})},delete_producer:function(t){return new u.default(function(r,o){var n=a.default.Query("producers");n.destroy(t).then(function(e){r(e)}).catch(function(t){e.log(t)})})},producer_detail:function(t){return new u.default(function(r,o){var n=a.default.Query("producers");n.get(t).then(function(e){r(e)}).catch(function(t){e.log(t)})})},get_moneyList:function(t){return new u.default(function(r,o){var n=a.default.Query("order_opreations");n.equalTo("producer","==",t),n.include("opreater","account"),n.find().then(function(t){e.log(t),r(t)})})}};t.default=d}).call(this,r("5a52")["default"])},"7fd5":function(e,t,r){"use strict";(function(t){var o=r("288e");r("6b54"),r("7514");var n=o(r("5d73"));r("c5f6");var u=o(r("795b")),a=o(r("9546"));e.exports={enterAddGoodNum:function(e){var r=this;return new u.default(function(o,u){for(var d=function(u){var d=0,l=a.default.Query("Goods");l.get(e[u].objectId).then(function(s){var c=s;if(e[u].selectd_model){var i=!0,f=!1,v=void 0;try{for(var m,g=(0,n.default)(e[u].selected_model);!(i=(m=g.next()).done);i=!0){var h=m.value,y=!0,b=!1,_=void 0;try{for(var p,N=(0,n.default)(c.models);!(y=(p=N.next()).done);y=!0){var S=p.value;S.id==h.id&&(S.reserve=Number(S.reserve)+Number(h.num)),delete S.num}}catch(I){b=!0,_=I}finally{try{y||null==N.return||N.return()}finally{if(b)throw _}}}}catch(I){f=!0,v=I}finally{try{i||null==g.return||g.return()}finally{if(f)throw v}}d=Number(c.reserve)+Number(e[u].num),l.set("models",c.models)}else d=Number(c.reserve)+Number(e[u].num);l.set("reserve",d),l.set("id",e[u].objectId),l.save().then(function(n){if(e[u].header){var d=a.default.Query("Goods");d.equalTo("header","==",e[u].header.objectId),d.equalTo("order","==",1),d.statTo("sum","reserve"),d.find().then(function(n){t.log("dasds",n);var d=n[0]._sumReserve,l=a.default.Query("Goods");l.set("reserve",d),l.set("id",e[u].header.objectId),l.save().then(function(t){r.modifyStockType(e[u].header.objectId),u==e.length-1&&o(!0)})})}else r.modifyStockType(e[u].objectId),u==e.length-1&&o(!0)}).catch(function(e){t.log(e)})})},l=0;l<e.length;l++)d(l)})},outRedGoodNum:function(e){var r=this;return new u.default(function(o,u){for(var d=function(u){var d=0,l=a.default.Query("Goods");l.get(e[u].objectId).then(function(s){var c=s;if(e[u].selectd_model){var i=!0,f=!1,v=void 0;try{for(var m,g=(0,n.default)(e[u].selected_model);!(i=(m=g.next()).done);i=!0){var h=m.value,y=!0,b=!1,_=void 0;try{for(var p,N=(0,n.default)(c.models);!(y=(p=N.next()).done);y=!0){var S=p.value;d+=Number(S.reserve),S.id==h.id&&(S.reserve=Number(S.reserve)-Number(h.num)),delete S.num}}catch(I){b=!0,_=I}finally{try{y||null==N.return||N.return()}finally{if(b)throw _}}}}catch(I){f=!0,v=I}finally{try{i||null==g.return||g.return()}finally{if(f)throw v}}d=Number(c.reserve)-Number(e[u].num),l.set("models",c.models)}else d=Number(c.reserve)-Number(e[u].num);l.set("reserve",d),l.set("id",e[u].objectId),l.save().then(function(t){if(e[u].header){var n=a.default.Query("Goods");n.equalTo("header","==",e[u].header.objectId),n.equalTo("order","==",1),n.statTo("sum","reserve"),n.find().then(function(t){var n=t[0]._sumReserve,d=a.default.Query("Goods");d.set("reserve",n),d.set("id",e[u].header.objectId),d.save().then(function(t){r.modifyStockType(e[u].header.objectId),u==e.length-1&&o(!0)})})}else r.modifyStockType(e[u].objectId),u==e.length-1&&o(!0)}).catch(function(e){t.log(e)})})},l=0;l<e.length;l++)d(l)})},enterAddGoodNumNew:function(e){var r=this;return new u.default(function(o,u){for(var d=uni.getStorageSync("warehouse")?uni.getStorageSync("warehouse")[0].stock:"",l=uni.getStorageSync("uid"),s=function(u){var s=0,c=a.default.Query("Goods");c.get(e[u].objectId).then(function(c){if(e[u].selectd_model){var i=!0,f=!1,v=void 0;try{for(var m,g=(0,n.default)(e[u].selected_model);!(i=(m=g.next()).done);i=!0){var h=m.value,y=!0,b=!1,_=void 0;try{for(var p,N=(0,n.default)(e[u].models);!(y=(p=N.next()).done);y=!0){var S=p.value;S.id==h.id&&(S.reserve=Number(S.reserve)+Number(h.num)),delete S.num}}catch(w){b=!0,_=w}finally{try{y||null==N.return||N.return()}finally{if(b)throw _}}}}catch(w){f=!0,v=w}finally{try{i||null==g.return||g.return()}finally{if(f)throw v}}s=Number(e[u].reserve)+Number(e[u].num),c.set("models",e[u].models)}else s=Number(e[u].reserve)+Number(e[u].num);c.set("reserve",s),c.save();var I=a.default.Query("Goods");I.equalTo("userId","==",l),I.equalTo("header","==",e[u].objectId),I.equalTo("stocks","==",d.objectId),I.find().then(function(n){if(0==n.length)r.upload_good_withNoCan(e[u],d,Number(e[u].num)).then(function(r){t.log(r),u==e.length-1&&o(!0)});else{var l=a.default.Query("Goods");l.set("id",n[0].objectId),l.set("reserve",n[0].reserve+Number(e[u].num)),l.save().then(function(r){t.log(r),u==e.length-1&&o(!0)}).catch(function(e){t.log(e)})}})}).catch(function(e){t.log(e)})},c=0;c<e.length;c++)s(c)})},outRedGoodNumNew:function(e){var r=this;return new u.default(function(o,u){for(var d=uni.getStorageSync("warehouse")?uni.getStorageSync("warehouse")[0].stock:"",l=uni.getStorageSync("uid"),s=function(u){var s=0,c=a.default.Query("Goods");c.get(e[u].objectId).then(function(c){if(e[u].selectd_model){var i=!0,f=!1,v=void 0;try{for(var m,g=(0,n.default)(e[u].selected_model);!(i=(m=g.next()).done);i=!0){var h=m.value,y=!0,b=!1,_=void 0;try{for(var p,N=(0,n.default)(e[u].models);!(y=(p=N.next()).done);y=!0){var S=p.value;S.id==h.id&&(S.reserve=Number(S.reserve)-Number(h.num)),delete S.num}}catch(w){b=!0,_=w}finally{try{y||null==N.return||N.return()}finally{if(b)throw _}}}}catch(w){f=!0,v=w}finally{try{i||null==g.return||g.return()}finally{if(f)throw v}}s=Number(e[u].reserve)-Number(e[u].num),c.set("models",e[u].models)}else s=Number(e[u].reserve)-Number(e[u].num);c.set("reserve",s),c.save();var I=a.default.Query("Goods");I.equalTo("userId","==",l),I.equalTo("header","==",e[u].objectId),I.equalTo("stocks","==",d.objectId),I.find().then(function(n){if(0==n.length)r.upload_good_withNoCan(e[u],d,Number(e[u].num),"out").then(function(r){t.log(r),u==e.length-1&&o(!0)});else{var l=a.default.Query("Goods");l.set("id",n[0].objectId),l.set("reserve",n[0].reserve-Number(e[u].num)),l.save().then(function(r){t.log(r),u==e.length-1&&o(!0)}).catch(function(e){t.log(e)})}})}).catch(function(e){t.log(e)})},c=0;c<e.length;c++)s(c)})},upload_good_withNoCan:function(e,r,o,d){return new u.default(function(u,l){var s=uni.getStorageSync("uid"),c=a.default.Pointer("_User"),i=c.set(s),f=a.default.Pointer("stocks"),v=f.set(r.objectId),m=a.default.Pointer("Goods"),g="";g=e.header?m.set(e.header.objectId):m.set(e.objectId);var h=a.default.Query("Goods");if(h.set("goodsName",e.goodsName),h.set("goodsIcon",e.goodsIcon),"out"==d){if(h.set("reserve",0-Number(o)),e.goodsId&&e.goodsId.models){var y=!0,b=!1,_=void 0;try{for(var p,N=(0,n.default)(e.goodsId.models);!(y=(p=N.next()).done);y=!0){var S=p.value;S.reserve=0-Number(S.num)}}catch(R){b=!0,_=R}finally{try{y||null==N.return||N.return()}finally{if(b)throw _}}h.set("models",e.goodsId.models)}}else if("allocation"==d){if(h.set("reserve",Number(o)),e.selected_model&&e.selected_model.length>0){var I=!0,w=!1,j=void 0;try{for(var Q,T=(0,n.default)(e.selected_model);!(I=(Q=T.next()).done);I=!0){var x=Q.value;x.reserve=Number(x.num),delete x.num}}catch(R){w=!0,j=R}finally{try{I||null==T.return||T.return()}finally{if(w)throw j}}h.set("models",e.selected_model)}}else if(h.set("reserve",Number(o)),e.goodsId&&e.goodsId.models){var k=!0,G=!1,q=void 0;try{for(var P,M=(0,n.default)(e.goodsId.models);!(k=(P=M.next()).done);k=!0){var D=P.value;D.reserve=Number(D.num)}}catch(R){G=!0,q=R}finally{try{k||null==M.return||M.return()}finally{if(G)throw q}}h.set("models",e.goodsId.models)}h.set("stocks",v),h.set("userId",i),h.set("header",g),h.set("costPrice",""+e.costPrice),h.set("retailPrice",""+e.retailPrice),h.set("order",1),h.save().then(function(e){t.log(e),u([!0,e])}).catch(function(e){t.log(e)})})},handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(e,r,o){var n=a.default.Pointer("_User"),u=n.set(uni.getStorageSync("uid"));if(-2==r){var d=a.default.Pointer("Goods"),l=d.set(o),s=a.default.Query("logs");s.equalTo("goodId","==",o),s.find().then(function(o){if(0==o.length){var n=a.default.Query("logs");n.set("parent",u),n.set("goodId",l),n.set("log",e),n.set("type",r),n.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})}})}else{var c=a.default.Query("logs");c.set("parent",u),c.set("log",e),c.set("detail_id",o),c.set("type",r),c.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})}},modifyStockType:function(e){var r=this,o=a.default.Query("Goods");o.get(e).then(function(e){var t=e;""==t.warning_num&&""==t.max_num?e.set("stocktype",1):void 0==t.warning_num&&void 0==t.max_num?e.set("stocktype",1):null==t.warning_num&&null==t.max_num?e.set("stocktype",1):(""!=t.warning_num&&(t.warning_num>=t.reserve?(e.set("stocktype",0),r.log(t.goodsName+"已经超过设置的最小库存值"+t.warning_num,-2,t.objectId)):t.warning_num<t.reserve&&t.reserve<t.max_num&&e.set("stocktype",1)),""!=t.max_num&&(t.max_num<=t.reserve?(e.set("stocktype",2),r.log(t.goodsName+"已经超过设置的最大库存值"+t.max_num,-2,t.objectId)):t.warning_num<t.reserve&&t.reserve<t.max_num&&e.set("stocktype",1))),e.save()}).catch(function(e){t.log(e)})},record_shopOut:function(e,r){t.log(e,r);var o=a.default.Query("shops");o.set("id",e),o.set("have_out",r),o.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})},record_staffOut:function(e){if(t.log(e,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var r=a.default.Query("_User");r.set("id",uni.getStorageSync("user").objectId),r.set("have_out",Number(e)+uni.getStorageSync("user").have_out),r.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})}},get_allCost:function(){var e=uni.getStorageSync("uid");t.log(e);var r=a.default.Query("Goods");r.equalTo("userId","==",e),r.find().then(function(e){t.log(e);var r=!0,o=!1,u=void 0;try{for(var a,d=(0,n.default)(e);!(r=(a=d.next()).done);r=!0){var l=a.value;t.log(l),Number(l.costPrice)*l.reserve,l.reserve}}catch(s){o=!0,u=s}finally{try{r||null==d.return||d.return()}finally{if(o)throw u}}})},getDay:function(e,t){var r=this,o=new Date,n=o.getTime()+864e5*e;o.setTime(n);var u=o.getFullYear(),a=o.getMonth(),d=o.getDate();return a=r.handleMonth(a+1),d=r.handleMonth(d),t?u+"-"+a+"-"+d+" 00:00:00":u+"-"+a+"-"+d},js_date_time:function(e,t){var r=new Date(e),o=r.getFullYear(),n=r.getMonth()+1;n=n<10?"0"+n:n;var u=r.getDate();u=u<10?"0"+u:u;var a=r.getHours();a=a<10?"0"+a:a;var d=r.getMinutes(),l=r.getSeconds();return d=d<10?"0"+d:d,l=l<10?"0"+l:l,t?o+"-"+n+"-"+u+" "+a+":"+d:o+"-"+n+"-"+u},handleMonth:function(e){var t=e;return 1==e.toString().length&&(t="0"+e),t}}}).call(this,r("5a52")["default"])}}]);