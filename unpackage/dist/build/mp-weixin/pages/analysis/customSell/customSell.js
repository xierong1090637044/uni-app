(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/analysis/customSell/customSell"],{"1b0f":function(t,e,n){"use strict";n.r(e);var a=n("2062"),u=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=u.a},2062:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,u,o=d(n("9546")),c=d(n("7fd5"));function d(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{start_date:c.default.getDay(0,!0),end_date:c.default.getDay(1,!0),start_date_desc:"",end_date_desc:"",goodSellList:[]}},onLoad:function(){a=this,u=t.getStorageSync("uid"),a.start_date_desc=a.start_date.split(" ")[0],a.end_date_desc=a.end_date.split(" ")[0],a.getdetail()},methods:{bindDate_startChange:function(t){console.log(t),a.start_date=t.detail.value+" 00:00:00",a.getdetail()},bindDate_endChange:function(t){console.log(t),a.end_date=t.detail.value+" 00:00:00",a.getdetail()},getdetail:function(){t.showLoading({title:"加载中..."});var e=o.default.Query("Bills");e.equalTo("userId","==",u),e.equalTo("type","==",-1),e.equalTo("extra_type","==",1),e.equalTo("createdAt",">=",a.start_date),e.equalTo("createdAt","<=",a.end_date),e.order("-num"),e.include("custom"),e.statTo("sum","num,total_money"),e.statTo("groupby","custom"),e.statTo("order","-_sumNum"),e.statTo("groupcount","true"),e.count().then(function(n){var u=n,o=[];if(0!=u)for(var c=function(n){e.limit(500),e.skip(500*n),e.find().then(function(e){var c=!0,d=!1,i=void 0;try{for(var r,l=e[Symbol.iterator]();!(c=(r=l.next()).done);c=!0){var s=r.value;s.custom&&s.custom.objectId&&o.push(s)}}catch(f){d=!0,i=f}finally{try{c||null==l.return||l.return()}finally{if(d)throw i}}n==Math.ceil(u/500)-1&&(a.goodSellList=o.sort(function(t,e){return e._sumNum-t._sumNum}),t.hideLoading())})},d=0;d<Math.ceil(u/500);d++)c(d);else t.hideLoading()})},selectd:function(t){a.stock_checked="stocktype"==t,a.checked_option=t},priviewImg:function(e){t.previewImage({current:e,urls:[e]})},goDetail:function(e){t.navigateTo({url:"/pages/manage/custom/custom_detail/custom_detail?id="+e})}}};e.default=i}).call(this,n("543d")["default"])},"41c2":function(t,e,n){},4800:function(t,e,n){"use strict";var a,u=function(){var t=this,e=t.$createElement,n=(t._self._c,t.start_date.split(" ")),a=t.end_date.split(" ");t.$mp.data=Object.assign({},{$root:{g0:n,g1:a}})},o=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},"702e":function(t,e,n){"use strict";n.r(e);var a=n("4800"),u=n("1b0f");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n("c9cc");var c,d=n("f0c5"),i=Object(d["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);e["default"]=i.exports},a4f0:function(t,e,n){"use strict";(function(t){n("d510"),n("921b");a(n("66fd"));var e=a(n("702e"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},c9cc:function(t,e,n){"use strict";var a=n("41c2"),u=n.n(a);u.a}},[["a4f0","common/runtime","common/vendor"]]]);