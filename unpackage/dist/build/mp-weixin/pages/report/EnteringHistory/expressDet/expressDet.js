(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/EnteringHistory/expressDet/expressDet"],{"1ebc":function(t,e,n){"use strict";n.r(e);var o=n("946e"),a=n("7768");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("76a9");var c=n("2877"),i=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,"58dbc1d6",null);e["default"]=i.exports},"5cf1":function(t,e,n){},"76a9":function(t,e,n){"use strict";var o=n("5cf1"),a=n.n(o);a.a},7768:function(t,e,n){"use strict";n.r(e);var o=n("d809"),a=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=a.a},"906c":function(t,e,n){"use strict";(function(t){n("a961"),n("921b");o(n("66fd"));var e=o(n("1ebc"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"946e":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},d809:function(t,e,n){"use strict";(function(t){var n,o;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{logisticsList:[]}},onLoad:function(t){n=this,o=t.number,console.log(o),n.getInfoById(o)},methods:{getInfoById:function(e){console.log(e),t.showLoading({title:"加载中..."}),t.request({url:"https://route.showapi.com/64-21",data:{showapi_appid:"84916",showapi_sign:"ad4b63369c834759b411a9d7fcb07ed7",nu:e},header:{"content-type":"application/json"},success:function(o){console.log(o.data.showapi_res_body.data),t.request({url:"https://route.showapi.com/64-19",data:{showapi_appid:"84916",showapi_sign:"ad4b63369c834759b411a9d7fcb07ed7",com:o.data.showapi_res_body.data[0].simpleName,nu:e},header:{"content-type":"application/json"},success:function(e){t.hideLoading(),n.logisticsList=e.data.showapi_res_body.data,console.log(e)}}),console.log(o)}})}}};e.default=a}).call(this,n("543d")["default"])}},[["906c","common/runtime","common/vendor"]]]);