(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_confrim/good_confrim"],{"211c":function(t,o,e){},3865:function(t,o,e){"use strict";e.r(o);var n=e("e18c"),r=e("711b");for(var u in r)"default"!==u&&function(t){e.d(o,t,function(){return r[t]})}(u);e("9445");var i=e("2877"),c=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);o["default"]=c.exports},"711b":function(t,o,e){"use strict";e.r(o);var n=e("8353"),r=e.n(n);for(var u in n)"default"!==u&&function(t){e.d(o,t,function(){return n[t]})}(u);o["default"]=r.a},8353:function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=r(e("c74b"));function r(t){return t&&t.__esModule?t:{default:t}}var u,i,c=function(){return e.e("components/uni-card/uni-card").then(e.bind(null,"872f"))},a=function(){return e.e("components/uni-number-box/uni-number-box").then(e.bind(null,"8fad"))},l=function(){return e.e("components/kilvn-fa-icon/fa-icon").then(e.bind(null,"0914"))},s=function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"b92d"))},d=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"5753"))},f={components:{unicard:c,faIcon:l,uninumberbox:a,uniNavBar:s,uniIcon:d},data:function(){return{products:[],user:t.getStorageSync("user"),nums:[],selected_model:[]}},onLoad:function(o){var e=this;if(this.products=[],i=this,t.removeStorageSync("is_option"),u=t.getStorageSync("uid"),o.id){t.showLoading({title:"加载中..."});var r=n.default.Query("Goods");"false"==o.type?r.equalTo("objectId","==",o.id):r.equalTo("productCode","==",o.id),r.equalTo("userId","==",u),r.find().then(function(o){console.log(o),-1==o[0].status?t.showToast({title:"该产品已删除",icon:"none"}):(o[0].num=1,o[0].total_money=1*o[0].costPrice,o[0].really_total_money=1*o[0].costPrice,o[0].modify_retailPrice=o[0].costPrice,o[0].models&&(o[0].selectd_model=o[0].models),e.products=o),t.hideLoading()})}else{this.products=t.getStorageSync("products");var c=!0,a=!1,l=void 0;try{for(var s,d=this.products[Symbol.iterator]();!(c=(s=d.next()).done);c=!0){var f=s.value;f.selectd_model=f.models}}catch(m){a=!0,l=m}finally{try{c||null==d.return||d.return()}finally{if(a)throw l}}this.products=this.products}},methods:{scanGoods:function(){t.scanCode({success:function(o){t.showLoading({title:"加载中..."});var e=o.result,r=e.split("-"),c=n.default.Query("Goods");"false"==r[1]?c.equalTo("objectId","==",r[0]):c.equalTo("productCode","==",r[0]),c.equalTo("userId","==",u),c.find().then(function(o){if(console.log(o),-1==o[0].status)t.showToast({title:"该产品已删除",icon:"none"});else{var e=!0,n=!1,r=void 0;try{for(var u,c=o[Symbol.iterator]();!(e=(u=c.next()).done);e=!0){var a=u.value;a.num=1,a.total_money=1*a.costPrice,a.really_total_money=1*a.costPrice,a.modify_retailPrice=a.costPrice}}catch(l){n=!0,r=l}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}i.products=i.products.concat(o)}t.hideLoading()})},fail:function(o){t.showToast({title:"未识别到条形码",icon:"none"})}})},confrim_this:function(){t.navigateTo({url:"/pages/common/good_confrim/good_enter/good_enter"})},handleNumChange:function(o,e){this.products[e].num=Number(o),this.products[e].total_money=Number(o)*Number(this.products[e].modify_retailPrice),this.products[e].really_total_money=Number(o)*Number(this.products[e].really_total_money),t.setStorageSync("products",this.products)},handleModelNumChange:function(o,e,n,r){i.nums[n]=Number(o);var u=!0,c=!1,a=void 0;try{for(var l,s=this.products[e].models[Symbol.iterator]();!(u=(l=s.next()).done);u=!0){var d=l.value;d.id==r.id&&(r.num=Number(o))}}catch(b){c=!0,a=b}finally{try{u||null==s.return||s.return()}finally{if(c)throw a}}var f=0,m=!0,h=!1,p=void 0;try{for(var y,v=i.nums[Symbol.iterator]();!(m=(y=v.next()).done);m=!0){var _=y.value;f+=_}}catch(b){h=!0,p=b}finally{try{m||null==v.return||v.return()}finally{if(h)throw p}}i.selected_model[n]=r,this.products[e].num=f,this.products[e].selected_model=i.selected_model,this.products[e].total_money=f*Number(this.products[e].modify_retailPrice),this.products[e].really_total_money=f*Number(this.products[e].really_total_money),t.setStorageSync("products",this.products)},handleDel:function(o){console.log(o),1==this.products.length?t.showToast({title:"最少选择一个产品",icon:"none"}):(this.products.splice(o,1),t.setStorageSync("products",this.products))},getrealprice:function(o,e){this.products[e].modify_retailPrice=o.target.value,this.products[e].total_money=this.products[e].num*Number(o.target.value),t.setStorageSync("products",this.products)}}};o.default=f}).call(this,e("543d")["default"])},9445:function(t,o,e){"use strict";var n=e("211c"),r=e.n(n);r.a},"9d25":function(t,o,e){"use strict";(function(t){e("a961"),e("921b");n(e("66fd"));var o=n(e("3865"));function n(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,e("543d")["createPage"])},e18c:function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement;t._self._c},r=[];e.d(o,"a",function(){return n}),e.d(o,"b",function(){return r})}},[["9d25","common/runtime","common/vendor"]]]);