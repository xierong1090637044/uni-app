(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/custom/producer_detail/history/history"],{"69a2":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return u})},"7b77":function(n,t,e){"use strict";e.r(t);var o=e("69a2"),u=e("fdfe");for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);e("d609");var i=e("2877"),a=Object(i["a"])(u["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},"8bd6":function(n,t,e){},"9a70":function(n,t,e){"use strict";(function(n){e("a961"),e("921b");o(e("66fd"));var t=o(e("7b77"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},b178:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(e("c74b"));function u(n){return n&&n.__esModule?n:{default:n}}var r,i=function(){return e.e("components/kilvn-fa-icon/fa-icon").then(e.bind(null,"0914"))},a=function(){return e.e("components/Loading/index").then(e.bind(null,"524a"))},l=function(){return e.e("components/uni-collapse/uni-collapse").then(e.bind(null,"bd14"))},c=function(){return e.e("components/uni-collapse-item/uni-collapse-item").then(e.bind(null,"18d6"))},d=n.getStorageSync("uid"),f={components:{faIcon:i,uniCollapse:l,loading:a,uniCollapseItem:c},data:function(){return{loading:!0,list:[]}},onLoad:function(n){r=this,r.get_list(n.id)},methods:{get_list:function(n){var t=o.default.Query("order_opreations");t.equalTo("master","==",d),t.equalTo("type","==",1),t.equalTo("producer","==",n),t.include("opreater"),t.order("-createdAt"),t.find().then(function(n){console.log(n);var t=n,e=!0,u=!1,i=void 0;try{for(var a,l=function(){var n=a.value,t=o.default.Query("order_opreations");t.include("goodsId"),t.field("relations",n.objectId),t.relation("Bills").then(function(t){n.relations=t.results})},c=t[Symbol.iterator]();!(e=(a=c.next()).done);e=!0)l()}catch(d){u=!0,i=d}finally{try{e||null==c.return||c.return()}finally{if(u)throw i}}r.list=t,r.loading=!1,console.log(t)})}}};t.default=f}).call(this,e("543d")["default"])},d609:function(n,t,e){"use strict";var o=e("8bd6"),u=e.n(o);u.a},fdfe:function(n,t,e){"use strict";e.r(t);var o=e("b178"),u=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);t["default"]=u.a}},[["9a70","common/runtime","common/vendor"]]]);