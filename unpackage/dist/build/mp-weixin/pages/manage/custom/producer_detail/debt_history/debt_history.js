(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/custom/producer_detail/debt_history/debt_history"],{2757:function(n,t,e){"use strict";var u=e("900d"),a=e.n(u);a.a},"54f2":function(n,t,e){"use strict";e.r(t);var u=e("de39"),a=e("a3f0");for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);e("2757");var i=e("2877"),r=Object(i["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=r.exports},"6f11":function(n,t,e){"use strict";(function(n){e("a961"),e("921b");u(e("66fd"));var t=u(e("54f2"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"900d":function(n,t,e){},a3f0:function(n,t,e){"use strict";e.r(t);var u=e("f64c"),a=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);t["default"]=a.a},de39:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},f64c:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(e("5fbc"));function a(n){return n&&n.__esModule?n:{default:n}}var o,i=function(){return e.e("components/Loading/index").then(e.bind(null,"524a"))},r={components:{loading:i},data:function(){return{debt_list:[],name:"",loading:!0}},methods:{},onLoad:function(n){o=this,o.name=n.name,u.default.get_moneyList(n.id).then(function(n){o.loading=!1,o.debt_list=n})}};t.default=r}},[["6f11","common/runtime","common/vendor"]]]);