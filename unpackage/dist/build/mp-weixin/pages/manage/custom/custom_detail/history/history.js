(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/custom/custom_detail/history/history"],{4650:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n("93d5")),o=u(n("2839"));function u(e){return e&&e.__esModule?e:{default:e}}var l,d,r,i=function(){return n.e("components/kilvn-fa-icon/fa-icon").then(n.bind(null,"d7ee"))},c=function(){return n.e("components/Loading/index").then(n.bind(null,"359f"))},f=function(){return n.e("components/uni-collapse/uni-collapse").then(n.bind(null,"f698"))},s=function(){return n.e("components/uni-collapse-item/uni-collapse-item").then(n.bind(null,"4b7b"))},y=function(){return n.e("components/uni-segmented-control/uni-segmented-control").then(n.bind(null,"0461"))},_=function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"904c"))},g={components:{faIcon:i,uniCollapse:f,loading:c,uniCollapseItem:s,uniNavBar:_,uniSegmentedControl:y},data:function(){return{showOptions:!1,header:{total:0,total_money:0,get_money:0},loading:!0,items:["今天","昨天","近七天","近一个月"],list:[],current:0,now_day:o.default.getDay(0,!1),end_day:o.default.getDay(1,!1),max_day:o.default.getDay(0,!1)}},onLoad:function(t){console.log(t),l=this,r=t.id,d=e.getStorageSync("uid"),l.get_list(r),l.get_header_data(r,0)},methods:{option_confrim:function(){l.header={total:0,total_money:0,get_money:0},l.showOptions=!1,l.get_header_data(r),l.get_list(r)},option_reset:function(){l.header={total:0,total_money:0,get_money:0},l.now_day=o.default.getDay(0,!1),l.end_day=o.default.getDay(1,!1),l.max_day=o.default.getDay(0,!1),l.showOptions=!1,l.get_header_data(r),l.get_list(r)},bindDateChange1:function(e){l.now_day=e.detail.value},bindDateChange2:function(e){l.end_day=e.detail.value},onClickItem:function(e){this.current!==e&&(this.current=e,l.header={total:0,total_money:0,get_money:0},0==e?(l.now_day=o.default.getDay(0,!1),l.end_day=o.default.getDay(1,!1)):1==e?(l.now_day=o.default.getDay(-1,!1),l.end_day=o.default.getDay(0,!1)):2==e?(l.now_day=o.default.getDay(-7,!1),l.end_day=o.default.getDay(1,!1)):3==e&&(l.now_day=o.default.getDay(-30,!1),l.end_day=o.default.getDay(1,!1)),l.get_header_data(r),l.get_list(r))},get_header_data:function(e){var t=a.default.Query("NBills");t.equalTo("userId","==",d),t.equalTo("type","==",-1),t.equalTo("custom","==",e),t.include("goodsId"),t.equalTo("createdAt",">=",l.now_day+" 00:00:00"),t.equalTo("createdAt","<=",l.end_day+" 00:00:00"),t.find().then(function(e){var t=!0,n=!1,a=void 0;try{for(var o,u=e[Symbol.iterator]();!(t=(o=u.next()).done);t=!0){var d=o.value;l.header.total+=d.num,l.header.total_money+=Number(d.goodsId.costPrice)*d.num,l.header.get_money+=d.total_money-Number(d.goodsId.costPrice)*d.num}}catch(r){n=!0,a=r}finally{try{t||null==u.return||u.return()}finally{if(n)throw a}}})},get_list:function(e){var t=a.default.Query("order_opreations");t.equalTo("master","==",d),t.equalTo("type","==",-1),t.equalTo("custom","==",e),t.include("opreater"),t.equalTo("createdAt",">=",l.now_day+" 00:00:00"),t.equalTo("createdAt","<=",l.end_day+" 00:00:00"),t.order("-createdAt"),t.find().then(function(e){console.log(e);var t=e,n=!0,a=!1,o=void 0;try{for(var u,d=t[Symbol.iterator]();!(n=(u=d.next()).done);n=!0){var r=u.value;r.relations=r.detail}}catch(i){a=!0,o=i}finally{try{n||null==d.return||d.return()}finally{if(a)throw o}}l.list=t,l.loading=!1})}}};t.default=g}).call(this,n("543d")["default"])},"58ce":function(e,t,n){"use strict";n.r(t);var a=n("fca5"),o=n("683f");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("5a68");var l,d=n("f0c5"),r=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],l);t["default"]=r.exports},"5a68":function(e,t,n){"use strict";var a=n("b5e4"),o=n.n(a);o.a},"683f":function(e,t,n){"use strict";n.r(t);var a=n("4650"),o=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=o.a},"760f":function(e,t,n){"use strict";(function(e){n("9787"),n("921b");a(n("66fd"));var t=a(n("58ce"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},b5e4:function(e,t,n){},fca5:function(e,t,n){"use strict";var a,o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.showOptions=!0},e.e1=function(t){t.stopPropagation(),e.showOptions=!1})},u=[];n.d(t,"b",function(){return o}),n.d(t,"c",function(){return u}),n.d(t,"a",function(){return a})}},[["760f","common/runtime","common/vendor"]]]);