(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/manage/warehouse/record/record"],{"0579":function(e,t,n){"use strict";n.r(t);var a=n("d688"),o=n("cd24");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("6ee7");var u,l=n("f0c5"),d=Object(l["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=d.exports},"57d7":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("9546")),o=r(n("7fd5"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=l(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,r=!0,u=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return r=e.done,e},e:function(e){u=!0,o=e},f:function(){try{r||null==a.return||a.return()}finally{if(u)throw o}}}}function l(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var i,c,f,y,s=function(){n.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(n("4d52"))}.bind(null,n)).catch(n.oe)},_=function(){n.e("components/Loading/index").then(function(){return resolve(n("120a"))}.bind(null,n)).catch(n.oe)},m=function(){n.e("components/uni-segmented-control/uni-segmented-control").then(function(){return resolve(n("c952"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(n("96bd"))}.bind(null,n)).catch(n.oe)},g={components:{faIcon:s,loading:_,uniNavBar:p,uniSegmentedControl:m},data:function(){return{showOptions:!1,header:{total:0,total_money:0,get_money:0},loading:!0,items:["今天","昨天","近七天","近一个月"],list:[],current:0,now_day:o.default.getDay(0,!1),end_day:o.default.getDay(1,!1),max_day:o.default.getDay(0,!1),seleted_tab:0,extra_type:0,selected_text:"全部",types:[{name:"入库",type:1,extra_type:2},{name:"采购",type:1,extra_type:1},{name:"出库",type:-1,extra_type:2},{name:"销售",type:-1,extra_type:1},{name:"盘点",type:3,extra_type:""},{name:"退货",type:2,extra_type:""}]}},onLoad:function(t){i=this,c=e.getStorageSync("uid"),f=t.stockId,i.getdetail()},methods:{bindtypechange:function(e){console.log(e),y=e.detail.value,i.selected_text=i.types[y].name},option_confrim:function(){i.header={total:0,total_money:0,get_money:0},i.seleted_tab=i.types[y].type,i.extra_type=i.types[y].extra_type,i.showOptions=!1,i.getdetail()},option_reset:function(){i.header={total:0,total_money:0,get_money:0},i.seleted_tab=-1,i.selected_text="出库",i.now_day=o.default.getDay(0,!1),i.end_day=o.default.getDay(1,!1),i.max_day=o.default.getDay(0,!1),i.showOptions=!1,i.getdetail()},bindDateChange1:function(e){i.now_day=e.detail.value},bindDateChange2:function(e){i.end_day=e.detail.value},onClickItem:function(e){this.current!==e&&(this.current=e,i.header={total:0,total_money:0,get_money:0},0==e?(i.now_day=o.default.getDay(0,!1),i.end_day=o.default.getDay(1,!1)):1==e?(i.now_day=o.default.getDay(-1,!1),i.end_day=o.default.getDay(0,!1)):2==e?(i.now_day=o.default.getDay(-7,!1),i.end_day=o.default.getDay(1,!1)):3==e&&(i.now_day=o.default.getDay(-30,!1),i.end_day=o.default.getDay(1,!1)),i.getdetail())},getdetail:function(){var e=a.default.Query("Bills");e.equalTo("userId","==",c),"全部"!=i.selected_text&&(e.equalTo("type","==",i.seleted_tab),i.extra_type&&e.equalTo("extra_type","==",i.extra_type)),e.equalTo("status","!=",!1),e.equalTo("stock","==",f),e.equalTo("createdAt",">=",i.now_day+" 00:00:00"),e.equalTo("createdAt","<=",i.end_day+" 00:00:00"),e.order("-createdAt"),e.include("opreater","goodsId"),e.limit(500),e.find().then((function(e){var t,n=u(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;1!=a.type&&-1!=a.type||a.really_total_money&&(i.header.total+=a.num,i.header.total_money+=a.really_total_money,i.header.get_money+=a.total_money-a.really_total_money)}}catch(o){n.e(o)}finally{n.f()}i.list=e,i.loading=!1}))}}};t.default=g}).call(this,n("c11b")["default"])},"6ee7":function(e,t,n){"use strict";var a=n("bd24"),o=n.n(a);o.a},bd24:function(e,t,n){},c9ba:function(e,t,n){"use strict";(function(e){n("d510"),n("921b");a(n("66fd"));var t=a(n("0579"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("c11b")["createPage"])},cd24:function(e,t,n){"use strict";n.r(t);var a=n("57d7"),o=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=o.a},d688:function(e,t,n){"use strict";var a={"uni-nav-bar":function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"96bd"))},"uni-segmented-control":function(){return n.e("components/uni-segmented-control/uni-segmented-control").then(n.bind(null,"c952"))}},o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.showOptions=!0},e.e1=function(t){t.stopPropagation(),e.showOptions=!1})},r=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}))}},[["c9ba","common/runtime","common/vendor"]]]);