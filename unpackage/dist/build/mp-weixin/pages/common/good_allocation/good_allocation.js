(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_allocation/good_allocation"],{1092:function(t,n,o){"use strict";o.r(n);var e=o("c610"),i=o.n(e);for(var u in e)"default"!==u&&function(t){o.d(n,t,function(){return e[t]})}(u);n["default"]=i.a},3947:function(t,n,o){"use strict";o.r(n);var e=o("e3ea"),i=o("1092");for(var u in i)"default"!==u&&function(t){o.d(n,t,function(){return i[t]})}(u);o("a599");var a=o("2877"),r=Object(a["a"])(i["default"],e["a"],e["b"],!1,null,null,null);n["default"]=r.exports},6271:function(t,n,o){"use strict";(function(t){o("a961"),o("921b");e(o("66fd"));var n=e(o("3947"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("543d")["createPage"])},a599:function(t,n,o){"use strict";var e=o("c712"),i=o.n(e);i.a},c610:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i(o("c74b"));function i(t){return t&&t.__esModule?t:{default:t}}var u,a,r=function(){return o.e("components/uni-card/uni-card").then(o.bind(null,"872f"))},c=function(){return o.e("components/uni-number-box/uni-number-box").then(o.bind(null,"8fad"))},l=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"0914"))},s=function(){return o.e("components/uni-nav-bar/uni-nav-bar").then(o.bind(null,"b92d"))},d=function(){return o.e("components/uni-icon/uni-icon").then(o.bind(null,"5753"))},f={components:{unicard:r,faIcon:l,uninumberbox:c,uniNavBar:s,uniIcon:d},data:function(){return{products:null,stock:t.getStorageSync("warehouse")[0].stock}},onLoad:function(n){var o=this;if(u=t.getStorageSync("uid"),a=this,t.removeStorageSync("is_option"),n.id){t.showLoading({title:"加载中..."});var i=e.default.Query("Goods");"false"==n.type?i.equalTo("objectId","==",n.id):i.equalTo("productCode","==",n.id),i.equalTo("userId","==",u),i.find().then(function(n){console.log(n),-1==n[0].status?t.showToast({title:"该产品已删除",icon:"none"}):(n[0].num=1,n[0].total_money=1*n[0].retailPrice,n[0].modify_retailPrice=n[0].retailPrice,o.products=n),t.hideLoading()})}else this.products=t.getStorageSync("products")},methods:{scanGoods:function(){t.scanCode({success:function(n){t.showLoading({title:"加载中..."});var o=n.result,i=o.split("-"),r=e.default.Query("Goods");"false"==i[1]?r.equalTo("objectId","==",i[0]):r.equalTo("productCode","==",i[0]),r.equalTo("userId","==",u),r.find().then(function(n){if(console.log(n),-1==n[0].status)t.showToast({title:"该产品已删除",icon:"none"});else{var o=!0,e=!1,i=void 0;try{for(var u,r=n[Symbol.iterator]();!(o=(u=r.next()).done);o=!0){var c=u.value;c.num=1,c.total_money=1*c.retailPrice,c.really_total_money=1*c.retailPrice,c.modify_retailPrice=c.retailPrice}}catch(l){e=!0,i=l}finally{try{o||null==r.return||r.return()}finally{if(e)throw i}}a.products=a.products.concat(n)}t.hideLoading()})},fail:function(n){t.showToast({title:"未识别到条形码",icon:"none"})}})},confrim_this:function(){t.navigateTo({url:"/pages/common/good_allocation/allocation_detail/allocation_detail"})},handleNumChange:function(n,o){this.products[o].num=n||0,this.products[o].total_money=n*Number(this.products[o].modify_retailPrice),t.setStorageSync("products",this.products)},handleDel:function(n){console.log(n),1==this.products.length?t.showToast({title:"最少选择一个产品",icon:"none"}):(this.products.splice(n,1),t.setStorageSync("products",this.products))},getrealprice:function(n,o){this.products[o].modify_retailPrice=n.target.value,this.products[o].total_money=this.products[o].num*Number(n.target.value),t.setStorageSync("products",this.products)}}};n.default=f}).call(this,o("543d")["default"])},c712:function(t,n,o){},e3ea:function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},i=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return i})}},[["6271","common/runtime","common/vendor"]]]);