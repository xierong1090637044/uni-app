(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/manage/shops/detail/detail"],{2131:function(n,t,e){"use strict";var o=e("e963"),a=e.n(o);a.a},"29e7":function(n,t,e){"use strict";e.r(t);var o=e("a5d0"),a=e("819d");for(var c in a)"default"!==c&&function(n){e.d(t,n,(function(){return a[n]}))}(c);e("2131");var u,i=e("f0c5"),s=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=s.exports},"792f":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(e("9546"));function a(n){return n&&n.__esModule?n:{default:n}}var c,u,i=function(){e.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(e("4d52"))}.bind(null,e)).catch(e.oe)},s=function(){e.e("components/Loading/index").then(function(){return resolve(e("120a"))}.bind(null,e)).catch(e.oe)},r={components:{faIcon:i,loading:s},data:function(){return{loading:!0,shop:"",staffs:[],reserve_num:0,reserve_money:0}},onLoad:function(){c=this,u=n.getStorageSync("uid"),c.shop=n.getStorageSync("shop"),c.getstaff_list()},methods:{show_options:function(){n.showActionSheet({itemList:["编辑","删除"],success:function(n){0==n.tapIndex?c.edit(c.shop):1==n.tapIndex&&c.delete_this(c.shop.objectId)},fail:function(n){console.log(n.errMsg)}})},getstaff_list:function(){var n=o.default.Query("_User");n.order("-createdAt"),n.equalTo("masterId","==",u),n.equalTo("shop","==",c.shop.objectId),n.find().then((function(n){c.loading=!1,c.staffs=n}))},edit:function(t){n.setStorageSync("warehouse",t),n.setStorageSync("charge",t.charge),n.setStorageSync("shop",t.shop),n.navigateTo({url:"../add/add"})},delete_this:function(t){n.showModal({title:"提示",content:"请谨慎删除，一旦删除，数据不能恢复，是否删除此店仓",success:function(n){n.confirm&&(console.log(t),c.delete_data(t))}})},delete_data:function(t){console.log(t);var e=o.default.Query("shops");e.destroy(t).then((function(t){console.log(t),n.showToast({title:"删除成功",icon:"none"}),n.navigateBack({delta:1})})).catch((function(n){console.log(n)}))},goto_detail:function(t){n.setStorageSync("now_product",t),n.navigateTo({url:"/pages/manage/good_det/good_det"})}}};t.default=r}).call(this,e("c11b")["default"])},"819d":function(n,t,e){"use strict";e.r(t);var o=e("792f"),a=e.n(o);for(var c in o)"default"!==c&&function(n){e.d(t,n,(function(){return o[n]}))}(c);t["default"]=a.a},a5d0:function(n,t,e){"use strict";var o={"uni-nav-bar":function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"96bd"))}},a=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return o}))},d21a:function(n,t,e){"use strict";(function(n){e("d510"),e("921b");o(e("66fd"));var t=o(e("29e7"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("c11b")["createPage"])},e963:function(n,t,e){}},[["d21a","common/runtime","common/vendor"]]]);