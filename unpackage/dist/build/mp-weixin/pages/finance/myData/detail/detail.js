(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/finance/myData/detail/detail"],{"212b":function(n,t,e){"use strict";(function(n){e("d510"),e("921b");o(e("66fd"));var t=o(e("368b"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"368b":function(n,t,e){"use strict";e.r(t);var o=e("eeb4"),c=e("d56a");for(var a in c)"default"!==a&&function(n){e.d(t,n,(function(){return c[n]}))}(a);e("b76f");var u,i=e("f0c5"),r=Object(i["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=r.exports},"61e2":function(n,t,e){},b76f:function(n,t,e){"use strict";var o=e("61e2"),c=e.n(o);c.a},d56a:function(n,t,e){"use strict";e.r(t);var o=e("f429"),c=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=c.a},eeb4:function(n,t,e){"use strict";var o={"uni-nav-bar":function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"96bd"))}},c=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}))},f429:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(e("9546"));function c(n){return n&&n.__esModule?n:{default:n}}var a,u=function(){e.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(e("4d52"))}.bind(null,e)).catch(e.oe)},i=function(){e.e("components/Loading/index").then(function(){return resolve(e("120a"))}.bind(null,e)).catch(e.oe)},r={components:{faIcon:u,loading:i},data:function(){return{account:"",Goods:null,reserve_num:0,reserve_money:0,sellRecord:{}}},onLoad:function(t){a=this,n.getStorageSync("uid"),a.account=n.getStorageSync("account"),console.log(t)},methods:{show_options:function(){n.showActionSheet({itemList:["编辑","删除"],success:function(n){0==n.tapIndex?a.edit(a.account):1==n.tapIndex&&a.delete_this(a.account.objectId)},fail:function(n){console.log(n.errMsg)}})},edit:function(t){console.log(t),n.setStorageSync("account",t),n.navigateTo({url:"../add/add"})},delete_this:function(t){n.showModal({title:"提示",content:"是否删除此账户及其相关的流水记录",success:function(n){n.confirm&&(console.log(t),a.delete_data(t))}})},delete_data:function(t){console.log(t);var e=o.default.Query("accounts");e.destroy(t).then((function(t){console.log(t),n.navigateBack({delta:1}),setTimeout((function(){n.showToast({title:"删除成功",icon:"none"})}),1e3)})).catch((function(n){console.log(n)}))},goto_edit:function(){n.redirectTo({url:"../add/add"})},goto_detail:function(t){n.setStorageSync("now_product",t),n.navigateTo({url:"/pages/manage/good_det/good_det"})}}};t.default=r}).call(this,e("543d")["default"])}},[["212b","common/runtime","common/vendor"]]]);