(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/custom/custom_detail/history/history"],{"030a":function(e,t,n){"use strict";(function(e){n("a961"),n("921b");a(n("66fd"));var t=a(n("809e"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"39cb":function(e,t,n){"use strict";var a=n("7fc3"),o=n.n(a);o.a},"723a":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("df06"));function o(e){return e&&e.__esModule?e:{default:e}}var u,d,l,r=function(){return n.e("components/kilvn-fa-icon/fa-icon").then(n.bind(null,"0914"))},i=function(){return n.e("components/Loading/index").then(n.bind(null,"524a"))},c=function(){return n.e("components/uni-collapse/uni-collapse").then(n.bind(null,"bd14"))},f=function(){return n.e("components/uni-collapse-item/uni-collapse-item").then(n.bind(null,"18d6"))},s=function(){return n.e("components/uni-segmented-control/uni-segmented-control").then(n.bind(null,"9bc6"))},y=function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"b92d"))},_={components:{faIcon:r,uniCollapse:c,loading:i,uniCollapseItem:f,uniNavBar:y,uniSegmentedControl:s},data:function(){return{showOptions:!1,header:{total:0,total_money:0,get_money:0},loading:!0,items:["今天","昨天","近七天","近一个月"],list:[],current:0,now_day:a.default.getDay(0,!1),end_day:a.default.getDay(1,!1),max_day:a.default.getDay(0,!1)}},onLoad:function(t){console.log(t),u=this,l=t.id,d=e.getStorageSync("uid"),u.get_list(l),u.get_header_data(l,0)},methods:{option_confrim:function(){u.header={total:0,total_money:0,get_money:0},u.showOptions=!1,u.get_header_data(l),u.get_list(l)},option_reset:function(){u.header={total:0,total_money:0,get_money:0},u.now_day=a.default.getDay(0,!1),u.end_day=a.default.getDay(1,!1),u.max_day=a.default.getDay(0,!1),u.showOptions=!1,u.get_header_data(l),u.get_list(l)},bindDateChange1:function(e){u.now_day=e.detail.value},bindDateChange2:function(e){u.end_day=e.detail.value},onClickItem:function(e){this.current!==e&&(this.current=e,u.header={total:0,total_money:0,get_money:0},0==e?(u.now_day=a.default.getDay(0,!1),u.end_day=a.default.getDay(1,!1)):1==e?(u.now_day=a.default.getDay(-1,!1),u.end_day=a.default.getDay(0,!1)):2==e?(u.now_day=a.default.getDay(-7,!1),u.end_day=a.default.getDay(1,!1)):3==e&&(u.now_day=a.default.getDay(-30,!1),u.end_day=a.default.getDay(1,!1)),u.get_header_data(l),u.get_list(l))},get_header_data:function(e){var t=Bmob.Query("Bills");t.equalTo("userId","==",d),t.equalTo("type","==",-1),t.equalTo("custom","==",e),t.include("goodsId"),t.equalTo("createdAt",">=",u.now_day+" 00:00:00"),t.equalTo("createdAt","<=",u.end_day+" 00:00:00"),t.find().then(function(e){var t=!0,n=!1,a=void 0;try{for(var o,d=e[Symbol.iterator]();!(t=(o=d.next()).done);t=!0){var l=o.value;u.header.total+=l.num,u.header.total_money+=Number(l.goodsId.costPrice)*l.num,u.header.get_money+=l.total_money-Number(l.goodsId.costPrice)*l.num}}catch(r){n=!0,a=r}finally{try{t||null==d.return||d.return()}finally{if(n)throw a}}})},get_list:function(e){var t=Bmob.Query("order_opreations");t.equalTo("master","==",d),t.equalTo("type","==",-1),t.equalTo("custom","==",e),t.include("opreater"),t.equalTo("createdAt",">=",u.now_day+" 00:00:00"),t.equalTo("createdAt","<=",u.end_day+" 00:00:00"),t.order("-createdAt"),t.find().then(function(e){console.log(e);var t=e,n=!0,a=!1,o=void 0;try{for(var d,l=t[Symbol.iterator]();!(n=(d=l.next()).done);n=!0){var r=d.value;r.relations=r.detail}}catch(i){a=!0,o=i}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}u.list=t,u.loading=!1})}}};t.default=_}).call(this,n("543d")["default"])},"7fc3":function(e,t,n){},"809e":function(e,t,n){"use strict";n.r(t);var a=n("d9c7"),o=n("9ea7");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("39cb");var d=n("2877"),l=Object(d["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=l.exports},"9ea7":function(e,t,n){"use strict";n.r(t);var a=n("723a"),o=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=o.a},d9c7:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.showOptions=!0},e.e1=function(t){t.stopPropagation(),e.showOptions=!1})},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})}},[["030a","common/runtime","common/vendor"]]]);