(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/staff/history/history"],{"4a7d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("df06")),o=r(n("c74b"));function r(e){return e&&e.__esModule?e:{default:e}}var u,d,l,i,c=function(){return n.e("components/kilvn-fa-icon/fa-icon").then(n.bind(null,"0914"))},y=function(){return n.e("components/Loading/index").then(n.bind(null,"524a"))},f=function(){return n.e("components/uni-segmented-control/uni-segmented-control").then(n.bind(null,"9bc6"))},s=function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"b92d"))},_={components:{faIcon:c,loading:y,uniNavBar:s,uniSegmentedControl:f},data:function(){return{showOptions:!1,header:{total:0,total_money:0,get_money:0},loading:!0,items:["今天","昨天","近七天","近一个月"],list:[],current:0,now_day:a.default.getDay(0,!1),end_day:a.default.getDay(1,!1),max_day:a.default.getDay(0,!1),seleted_tab:"",selected_text:"操作类型",extra_type:"",types:[{name:"入库",type:1,extra_type:2},{name:"采购",type:1,extra_type:1},{name:"出库",type:-1,extra_type:2},{name:"销售",type:-1,extra_type:1},{name:"盘点",type:3,extra_type:""},{name:"退货",type:2,extra_type:""}]}},onLoad:function(e){u=this,d=wx.getStorageSync("uid"),l=e.id,u.getdetail()},methods:{bindtypechange:function(e){console.log(e),i=e.detail.value,u.selected_text=u.types[i].name},option_confrim:function(){u.header={total:0,total_money:0,get_money:0},u.seleted_tab=u.types[i].type,u.extra_type=u.types[i].extra_type,u.showOptions=!1,u.getdetail()},option_reset:function(){u.header={total:0,total_money:0,get_money:0},u.seleted_tab=-1,u.extra_type=1,u.selected_text="销售",u.now_day=a.default.getDay(0,!1),u.end_day=a.default.getDay(1,!1),u.max_day=a.default.getDay(0,!1),u.showOptions=!1,u.getdetail()},bindDateChange1:function(e){u.now_day=e.detail.value},bindDateChange2:function(e){u.end_day=e.detail.value},onClickItem:function(e){this.current!==e&&(this.current=e,u.header={total:0,total_money:0,get_money:0},0==e?(u.now_day=a.default.getDay(0,!1),u.end_day=a.default.getDay(1,!1)):1==e?(u.now_day=a.default.getDay(-1,!1),u.end_day=a.default.getDay(0,!1)):2==e?(u.now_day=a.default.getDay(-7,!1),u.end_day=a.default.getDay(1,!1)):3==e&&(u.now_day=a.default.getDay(-30,!1),u.end_day=a.default.getDay(1,!1)),u.getdetail())},getdetail:function(){var e=o.default.Query("order_opreations");e.equalTo("master","==",d),u.seleted_tab&&(e.equalTo("type","==",u.seleted_tab),e.equalTo("extra_type","==",u.extra_type)),e.equalTo("status","!=",!1),e.equalTo("opreater","==",l),e.include("opreater"),e.equalTo("createdAt",">=",u.now_day+" 00:00:00"),e.equalTo("createdAt","<=",u.end_day+" 00:00:00"),e.order("-createdAt"),e.find().then(function(e){console.log(e);var t=e,n=!0,a=!1,o=void 0;try{for(var r,d=t[Symbol.iterator]();!(n=(r=d.next()).done);n=!0){var l=r.value;l.num=0,l.relations=l.detail;var i=!0,c=!1,y=void 0;try{for(var f,s=l.detail[Symbol.iterator]();!(i=(f=s.next()).done);i=!0){var _=f.value;console.log(_),l.num+=Number(_.num),u.header.total+=_.num,u.header.total_money+=Number(_.goodsId.retailPrice)*_.num,u.header.get_money+=_.total_money-Number(_.goodsId.costPrice)*_.num}}catch(m){c=!0,y=m}finally{try{i||null==s.return||s.return()}finally{if(c)throw y}}}}catch(m){a=!0,o=m}finally{try{n||null==d.return||d.return()}finally{if(a)throw o}}u.list=t,u.loading=!1})}}};t.default=_},b2b1:function(e,t,n){"use strict";n.r(t);var a=n("4a7d"),o=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=o.a},b7e2:function(e,t,n){"use strict";n.r(t);var a=n("e110"),o=n("b2b1");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("ec49");var u=n("2877"),d=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=d.exports},ba60:function(e,t,n){"use strict";(function(e){n("a961"),n("921b");a(n("66fd"));var t=a(n("b7e2"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},e110:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.showOptions=!0},e.e1=function(t){t.stopPropagation(),e.showOptions=!1})},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},e67e:function(e,t,n){},ec49:function(e,t,n){"use strict";var a=n("e67e"),o=n.n(a);o.a}},[["ba60","common/runtime","common/vendor"]]]);