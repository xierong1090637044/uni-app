(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/custom/producer_detail/history/history"],{"7b77":function(n,e,t){"use strict";t.r(e);var o=t("ee96"),u=t("fdfe");for(var r in u)"default"!==r&&function(n){t.d(e,n,function(){return u[n]})}(r);t("d609");var a=t("2877"),i=Object(a["a"])(u["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},"8bd6":function(n,e,t){},"9a70":function(n,e,t){"use strict";(function(n){t("a961"),t("921b");o(t("66fd"));var e=o(t("7b77"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},b178:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(t("c74b"));function u(n){return n&&n.__esModule?n:{default:n}}var r,a=function(){return t.e("components/kilvn-fa-icon/fa-icon").then(t.bind(null,"0914"))},i=function(){return t.e("components/Loading/index").then(t.bind(null,"524a"))},l=function(){return t.e("components/uni-collapse/uni-collapse").then(t.bind(null,"bd14"))},c=function(){return t.e("components/uni-collapse-item/uni-collapse-item").then(t.bind(null,"18d6"))},d=n.getStorageSync("uid"),f={components:{faIcon:a,uniCollapse:l,loading:i,uniCollapseItem:c},data:function(){return{loading:!0,list:[]}},onLoad:function(n){r=this,r.get_list(n.id)},methods:{get_list:function(n){var e=o.default.Query("order_opreations");e.equalTo("master","==",d),e.equalTo("type","==",1),e.equalTo("producer","==",n),e.include("opreater"),e.order("-createdAt"),e.find().then(function(n){console.log(n);var e=n,t=!0,o=!1,u=void 0;try{for(var a,i=e[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var l=a.value;l.relations=l.detail}}catch(c){o=!0,u=c}finally{try{t||null==i.return||i.return()}finally{if(o)throw u}}r.list=e,r.loading=!1,console.log(e)})}}};e.default=f}).call(this,t("543d")["default"])},d609:function(n,e,t){"use strict";var o=t("8bd6"),u=t.n(o);u.a},ee96:function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return u})},fdfe:function(n,e,t){"use strict";t.r(e);var o=t("b178"),u=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,function(){return o[n]})}(r);e["default"]=u.a}},[["9a70","common/runtime","common/vendor"]]]);