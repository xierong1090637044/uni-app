(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/staffChart/staffChart"],{3241:function(t,e,a){"use strict";(function(t){a("d510"),a("921b");n(a("66fd"));var e=n(a("5f7d"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},"4f72":function(t,e,a){},"5f7d":function(t,e,a){"use strict";a.r(e);var n=a("82ca"),r=a("7101");for(var o in r)"default"!==o&&function(t){a.d(e,t,function(){return r[t]})}(o);a("7e65");var l,d=a("f0c5"),u=Object(d["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],l);e["default"]=u.exports},7101:function(t,e,a){"use strict";a.r(e);var n=a("a83c"),r=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=r.a},"7e65":function(t,e,a){"use strict";var n=a("4f72"),r=a.n(n);r.a},"82ca":function(t,e,a){"use strict";var n,r=function(){var t=this,e=t.$createElement,a=(t._self._c,t.start_date.split(" ")),n=t.end_date.split(" ");t.$mp.data=Object.assign({},{$root:{g0:a,g1:n}})},o=[];a.d(e,"b",function(){return r}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return n})},a83c:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,r,o=d(a("9546")),l=d(a("7fd5"));function d(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{start_date:l.default.getDay(0,!0),end_date:l.default.getDay(1,!0),start_date_desc:"",end_date_desc:"",headerData:{data1:0,data2:0,data3:0},opreaterList:[]}},onLoad:function(){r=this,n=t.getStorageSync("uid"),r.start_date_desc=r.start_date.split(" ")[0],r.end_date_desc=r.end_date.split(" ")[0],r.getdetail()},methods:{StorageSync:function(e){t.setStorageSync("staff",e)},bindDate_startChange:function(t){console.log(t),r.start_date=t.detail.value+" 00:00:00",r.getdetail()},bindDate_endChange:function(t){console.log(t),r.end_date=t.detail.value+" 00:00:00",r.getdetail()},getdetail:function(){t.showLoading({title:"加载中..."});var e=o.default.Query("_User"),a=e.equalTo("objectId","==",n),l=e.equalTo("masterId","==",n);e.or(a,l),e.find().then(function(e){console.log(e);var a=e,l=0,d=!0,u=!1,i=void 0;try{for(var c,f=function(){var e=c.value,d=o.default.Query("order_opreations");d.equalTo("master","==",n),d.equalTo("opreater","==",e.objectId),d.equalTo("type","==",-1),d.equalTo("status","==",!0),d.equalTo("extra_type","==",1),d.equalTo("createdAt",">=",r.start_date),d.equalTo("createdAt","<=",r.end_date),d.count().then(function(n){var o=n;if(l+=1,0==o)e.sellNum=0,e.sellPrice=0,l==a.length&&(r.opreaterList=a,t.hideLoading());else for(var u=0;u<Math.ceil(o/500);u++)d.limit(500),d.skip(500*u),d.find().then(function(n){e.sellNum=n.length>0?n.length:0,e.sellPrice=0;var o=!0,d=!1,u=void 0;try{for(var i,c=n[Symbol.iterator]();!(o=(i=c.next()).done);o=!0){var f=i.value;e.sellPrice+=f.all_money}}catch(s){d=!0,u=s}finally{try{o||null==c.return||c.return()}finally{if(d)throw u}}l==a.length&&(r.opreaterList=a,t.hideLoading())})})},s=a[Symbol.iterator]();!(d=(c=s.next()).done);d=!0)f()}catch(h){u=!0,i=h}finally{try{d||null==s.return||s.return()}finally{if(u)throw i}}r.getheaderData()})},getheaderData:function(){r.headerData={data1:0,data2:0,data3:0};var t=o.default.Query("order_opreations");t.equalTo("master","==",n),t.equalTo("type","==",-1),t.equalTo("status","==",!0),t.equalTo("extra_type","==",1),t.equalTo("createdAt",">=",r.start_date),t.equalTo("createdAt","<=",r.end_date),t.limit(500),t.count().then(function(e){for(var a=e,n=0;n<Math.ceil(a/500);n++)t.limit(500),t.skip(500*n),t.find().then(function(t){var e=!0,a=!1,n=void 0;try{for(var o,l=t[Symbol.iterator]();!(e=(o=l.next()).done);e=!0){var d=o.value;r.headerData.data1+=d.all_money?d.all_money:0,r.headerData.data2+=d.profit?d.profit:0}}catch(u){a=!0,n=u}finally{try{e||null==l.return||l.return()}finally{if(a)throw n}}r.headerData.data3+=t.length})})}}};e.default=u}).call(this,a("543d")["default"])}},[["3241","common/runtime","common/vendor"]]]);