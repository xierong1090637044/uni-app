(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/manage/operations/operations"],{5422:function(e,t,a){"use strict";var n,o=function(){var e=this,t=e.$createElement;e._self._c},u=[];a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return n}))},"5926a":function(e,t,a){},"688d":function(e,t,a){"use strict";(function(e){a("d510"),a("921b");n(a("66fd"));var t=n(a("bfea"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("c11b")["createPage"])},af8b:function(e,t,a){"use strict";a.r(t);var n=a("b7f9"),o=a.n(n);for(var u in n)"default"!==u&&function(e){a.d(t,e,(function(){return n[e]}))}(u);t["default"]=o.a},b452:function(e,t,a){"use strict";var n=a("5926a"),o=a.n(n);o.a},b7f9:function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u,r,l=d(a("9546"));d(a("7fd5"));function d(e){return e&&e.__esModule?e:{default:e}}var s={components:{},data:function(){return{type_dec:"操作类型",time_desc:"操作时间",goodsName:"",total_num:0,total_money:0,year:"",month:"",seleted_tab:"",details:null,extra_type:"",tabBars:[{name:"入库",type:1,extra_type:2},{name:"采购",type:1,extra_type:1},{name:"出库",type:-1,extra_type:2},{name:"销售",type:-1,extra_type:1},{name:"盘点",type:3,extra_type:""},{name:"退货",type:2,extra_type:""}]}},onLoad:function(t){o=this,u=e.getStorageSync("uid"),r=t.objectId,o.goodsName=t.goodsName;var a=new Date;o.year=a.getFullYear(),o.month=Number(a.getMonth()+1)<10?"0"+Number(a.getMonth()+1):a.getMonth()+1,o.getdetail(),console.log(o.year,o.month)},methods:{tapTab:function(e){console.log(e);var t=e.detail.value;o.type_dec=o.tabBars[t].name,o.seleted_tab=o.tabBars[t].type,o.extra_type=o.tabBars[t].extra_type,o.getdetail()},selected_day:function(e){console.log(e);var t=e.detail.value;o.time_desc=t,o.year=t.split("-")[0],o.month=t.split("-")[1],o.getdetail()},getdetail:function(){n.showLoading({title:"加载中..."});var e=l.default.Query("Bills");e.equalTo("userId","==",u),o.seleted_tab&&(1!=o.seleted_tab&&-1!=o.seleted_tab||e.equalTo("extra_type","==",o.extra_type),e.equalTo("type","==",o.seleted_tab)),e.equalTo("status","!=",!1),e.equalTo("goodsId","==",r),e.equalTo("createdAt",">=",o.year+"-"+o.month+"-01 00:00:00"),e.equalTo("createdAt","<=",o.year+"-"+o.month+"-"+new Date(o.year,o.month,0).getDate()+" 23:59:59"),e.order("-createdAt"),e.find().then((function(e){if(console.log(e),o.details=e,n.hideLoading(),3!=o.seleted_tab){var t=l.default.Query("Bills");t.equalTo("userId","==",u),t.equalTo("status","!=",!1),t.equalTo("type","==",o.seleted_tab),o.extra_type&&t.equalTo("extra_type","==",o.extra_type),t.equalTo("goodsId","==",r),t.equalTo("createdAt",">=",o.year+"-"+o.month+"-01 00:00:00"),t.equalTo("createdAt","<=",o.year+"-"+o.month+"-"+new Date(o.year,o.month,0).getDate()+" 23:59:59"),t.statTo("sum","num,total_money"),t.find().then((function(e){e[0]?(o.total_num=e[0]._sumNum,o.total_money=e[0]._sumTotal_money):(o.total_num=0,o.total_money=0)}))}}))}}};t.default=s}).call(this,a("c11b")["default"],a("c11b")["default"])},bfea:function(e,t,a){"use strict";a.r(t);var n=a("5422"),o=a("af8b");for(var u in o)"default"!==u&&function(e){a.d(t,e,(function(){return o[e]}))}(u);a("b452");var r,l=a("f0c5"),d=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);t["default"]=d.exports}},[["688d","common/runtime","common/vendor"]]]);