(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/manage/staff/history/history"],{"06fc":function(e,t,n){"use strict";var a={"uni-nav-bar":function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"96bd"))},"uni-segmented-control":function(){return n.e("components/uni-segmented-control/uni-segmented-control").then(n.bind(null,"c952"))}},o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.showOptions=!0},e.e1=function(t){t.stopPropagation(),e.showOptions=!1})},r=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}))},5261:function(e,t,n){"use strict";n.r(t);var a=n("06fc"),o=n("d18f");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("a861");var u,i=n("f0c5"),d=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=d.exports},"8d2d":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("7fd5")),o=r(n("9546"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=i(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,r=!0,u=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return r=e.done,e},e:function(e){u=!0,o=e},f:function(){try{r||null==a.return||a.return()}finally{if(u)throw o}}}}function i(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var l,c,f,s,y=function(){n.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(n("4d52"))}.bind(null,n)).catch(n.oe)},m=function(){n.e("components/Loading/index").then(function(){return resolve(n("120a"))}.bind(null,n)).catch(n.oe)},_=function(){n.e("components/uni-segmented-control/uni-segmented-control").then(function(){return resolve(n("c952"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(n("96bd"))}.bind(null,n)).catch(n.oe)},g={components:{faIcon:y,loading:m,uniNavBar:p,uniSegmentedControl:_},data:function(){return{showOptions:!1,header:{total:0,total_money:0,get_money:0},loading:!0,items:["今天","昨天","近七天","近一个月"],list:[],current:0,now_day:a.default.getDay(0,!1),end_day:a.default.getDay(1,!1),max_day:a.default.getDay(0,!1),seleted_tab:"",selected_text:"操作类型",extra_type:"",types:[{name:"入库",type:1,extra_type:2},{name:"采购",type:1,extra_type:1},{name:"出库",type:-1,extra_type:2},{name:"销售",type:-1,extra_type:1},{name:"盘点",type:3,extra_type:""},{name:"退货",type:2,extra_type:""}]}},onLoad:function(t){l=this,c=e.getStorageSync("uid"),f=t.id,l.getdetail()},methods:{bindtypechange:function(e){console.log(e),s=e.detail.value,l.selected_text=l.types[s].name},option_confrim:function(){l.header={total:0,total_money:0,get_money:0},l.seleted_tab=l.types[s].type,l.extra_type=l.types[s].extra_type,l.showOptions=!1,l.getdetail()},option_reset:function(){l.header={total:0,total_money:0,get_money:0},l.seleted_tab=-1,l.extra_type=1,l.selected_text="销售",l.now_day=a.default.getDay(0,!1),l.end_day=a.default.getDay(1,!1),l.max_day=a.default.getDay(0,!1),l.showOptions=!1,l.getdetail()},bindDateChange1:function(e){l.now_day=e.detail.value},bindDateChange2:function(e){l.end_day=e.detail.value},onClickItem:function(e){this.current!==e&&(this.current=e,l.header={total:0,total_money:0,get_money:0},0==e?(l.now_day=a.default.getDay(0,!1),l.end_day=a.default.getDay(1,!1)):1==e?(l.now_day=a.default.getDay(-1,!1),l.end_day=a.default.getDay(0,!1)):2==e?(l.now_day=a.default.getDay(-7,!1),l.end_day=a.default.getDay(1,!1)):3==e&&(l.now_day=a.default.getDay(-30,!1),l.end_day=a.default.getDay(1,!1)),l.getdetail())},getdetail:function(){var e=o.default.Query("order_opreations");e.equalTo("master","==",c),l.seleted_tab&&(e.equalTo("type","==",l.seleted_tab),e.equalTo("extra_type","==",l.extra_type)),e.equalTo("status","!=",!1),e.equalTo("opreater","==",f),e.include("opreater"),e.equalTo("createdAt",">=",l.now_day+" 00:00:00"),e.equalTo("createdAt","<=",l.end_day+" 00:00:00"),e.order("-createdAt"),e.find().then((function(e){console.log(e);var t,n=e,a=u(n);try{for(a.s();!(t=a.n()).done;){var o=t.value;o.num=0,o.relations=o.detail;var r,i=u(o.detail);try{for(i.s();!(r=i.n()).done;){var d=r.value;console.log(d),o.num+=Number(d.num),l.header.total+=d.num,l.header.total_money+=Number(d.goodsId.retailPrice)*d.num,l.header.get_money+=d.total_money-Number(d.goodsId.costPrice)*d.num}}catch(c){i.e(c)}finally{i.f()}}}catch(c){a.e(c)}finally{a.f()}l.list=n,l.loading=!1}))}}};t.default=g}).call(this,n("c11b")["default"])},"96a7":function(e,t,n){"use strict";(function(e){n("d510"),n("921b");a(n("66fd"));var t=a(n("5261"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("c11b")["createPage"])},"9ab5":function(e,t,n){},a861:function(e,t,n){"use strict";var a=n("9ab5"),o=n.n(a);o.a},d18f:function(e,t,n){"use strict";n.r(t);var a=n("8d2d"),o=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=o.a}},[["96a7","common/runtime","common/vendor"]]]);