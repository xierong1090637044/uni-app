(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/custom/producer_detail/debt_history/debt_history"],{"0a9d":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;a(e("906f"));var u=a(e("d74a"));function a(n){return n&&n.__esModule?n:{default:n}}var o,c=function(){return e.e("components/Loading/index").then(e.bind(null,"c7fb"))},d={components:{loading:c},data:function(){return{debt_list:[],name:"",loading:!0}},methods:{},onLoad:function(n){o=this,o.name=n.name,u.default.get_moneyList(n.id).then(function(n){o.loading=!1,o.debt_list=n})}};t.default=d},"0fb4":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},"41d5":function(n,t,e){"use strict";e.r(t);var u=e("0a9d"),a=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);t["default"]=a.a},c9a1:function(n,t,e){},dce4c:function(n,t,e){"use strict";e.r(t);var u=e("0fb4"),a=e("41d5");for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);e("e2df");var c=e("2877"),d=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=d.exports},e2df:function(n,t,e){"use strict";var u=e("c9a1"),a=e.n(u);a.a},efd1:function(n,t,e){"use strict";(function(n){e("bc8c"),e("921b");u(e("66fd"));var t=u(e("dce4c"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])}},[["efd1","common/runtime","common/vendor"]]]);