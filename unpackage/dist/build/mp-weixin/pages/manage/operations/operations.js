(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/operations/operations"],{2064:function(e,t,a){"use strict";a.r(t);var n=a("8a7a"),o=a("24eb");for(var l in o)"default"!==l&&function(e){a.d(t,e,function(){return o[e]})}(l);a("5774");var u=a("2877"),r=Object(u["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=r.exports},"24eb":function(e,t,a){"use strict";a.r(t);var n=a("27ba"),o=a.n(n);for(var l in n)"default"!==l&&function(e){a.d(t,e,function(){return n[e]})}(l);t["default"]=o.a},"27ba":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o,l,u=r(a("c74b"));r(a("df06"));function r(e){return e&&e.__esModule?e:{default:e}}var d={components:{},data:function(){return{type_dec:"操作类型",time_desc:"操作时间",goodsName:"",total_num:0,total_money:0,year:"",month:"",seleted_tab:"",details:null,extra_type:"",tabBars:[{name:"入库",type:1,extra_type:2},{name:"采购",type:1,extra_type:1},{name:"出库",type:-1,extra_type:2},{name:"销售",type:-1,extra_type:1},{name:"盘点",type:3,extra_type:""},{name:"退货",type:2,extra_type:""}]}},onLoad:function(e){n=this,o=wx.getStorageSync("uid"),l=e.objectId,n.goodsName=e.goodsName;var t=new Date;n.year=t.getFullYear(),n.month=t.getMonth()+1,n.getdetail(),console.log(n.year,n.month)},methods:{tapTab:function(e){console.log(e);var t=e.detail.value;n.type_dec=n.tabBars[t].name,n.seleted_tab=n.tabBars[t].type,n.extra_type=n.tabBars[t].extra_type,n.getdetail()},selected_day:function(e){console.log(e);var t=e.detail.value;n.time_desc=t,n.year=t.split("-")[0],n.month=t.split("-")[1],n.getdetail()},getdetail:function(){e.showLoading({title:"加载中..."});var t=u.default.Query("Bills");t.equalTo("userId","==",o),n.seleted_tab&&(1!=n.seleted_tab&&-1!=n.seleted_tab||t.equalTo("extra_type","==",n.extra_type),t.equalTo("type","==",n.seleted_tab)),t.equalTo("status","!=",!1),t.equalTo("goodsId","==",l),t.equalTo("createdAt",">=",n.year+"-"+n.month+"-01 00:00:00"),t.equalTo("createdAt","<=",n.year+"-"+n.month+"-"+new Date(n.year,n.month,0).getDate()+" 23:59:59"),t.order("-createdAt"),t.find().then(function(t){if(console.log(t),n.details=t,e.hideLoading(),3!=n.seleted_tab){var a=u.default.Query("Bills");a.equalTo("userId","==",o),a.equalTo("status","!=",!1),a.equalTo("type","==",n.seleted_tab),n.extra_type&&a.equalTo("extra_type","==",n.extra_type),a.equalTo("goodsId","==",l),a.equalTo("createdAt",">=",n.year+"-"+n.month+"-01 00:00:00"),a.equalTo("createdAt","<=",n.year+"-"+n.month+"-"+new Date(n.year,n.month,0).getDate()+" 23:59:59"),a.statTo("sum","num,total_money"),a.find().then(function(e){e[0]?(n.total_num=e[0]._sumNum,n.total_money=e[0]._sumTotal_money):(n.total_num=0,n.total_money=0)})}})}}};t.default=d}).call(this,a("543d")["default"])},"2bfe":function(e,t,a){"use strict";(function(e){a("a961"),a("921b");n(a("66fd"));var t=n(a("2064"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("543d")["createPage"])},"340c":function(e,t,a){},5774:function(e,t,a){"use strict";var n=a("340c"),o=a.n(n);o.a},"8a7a":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})}},[["2bfe","common/runtime","common/vendor"]]]);