(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/operations/operations"],{"3bc1":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=u(n("e21e"));function u(e){return e&&e.__esModule?e:{default:e}}var c=wx.getStorageSync("uid"),i="5ca2ad2594",r={components:{},data:function(){return{seleted_tab:1,details:null,tabBars:[{name:"入库",type:1},{name:"出库",type:-1},{name:"盘点",type:3},{name:"退货",type:2}]}},onLoad:function(){a=this,a.getdetail()},methods:{tapTab:function(e){a.seleted_tab=e,a.getdetail()},getdetail:function(){e.showLoading({title:"加载中..."});var t=o.default.Query("Bills");t.equalTo("userId","==",c),t.equalTo("type","==",a.seleted_tab),t.equalTo("goodsId","==",i),t.order("-createdAt"),t.find().then(function(t){console.log(t," at pages\\manage\\operations\\operations.vue:108"),a.details=t,e.hideLoading()})}}};t.default=r}).call(this,n("6e42")["default"])},"502c":function(e,t,n){"use strict";var a=n("c73c"),o=n.n(a);o.a},"8d6c":function(e,t,n){"use strict";n.r(t);var a=n("f162"),o=n("b0da");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("502c");var c=n("2877"),i=Object(c["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=i.exports},b0da:function(e,t,n){"use strict";n.r(t);var a=n("3bc1"),o=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=o.a},c73c:function(e,t,n){},f162:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})}},[["ec06","common/runtime","common/vendor"]]]);