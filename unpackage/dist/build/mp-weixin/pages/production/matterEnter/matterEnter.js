(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/production/matterEnter/matterEnter"],{4836:function(t,e,o){"use strict";(function(t){o("a961"),o("921b");n(o("66fd"));var e=n(o("e785"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},"4e53":function(t,e,o){},c742:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(o("c74b"));function r(t){return t&&t.__esModule?t:{default:t}}var u,i,l=function(){return o.e("components/uni-card/uni-card").then(o.bind(null,"872f"))},a=function(){return o.e("components/uni-number-box/uni-number-box").then(o.bind(null,"8fad"))},c=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"0914"))},s=function(){return o.e("components/uni-nav-bar/uni-nav-bar").then(o.bind(null,"b92d"))},d=function(){return o.e("components/uni-icon/uni-icon").then(o.bind(null,"5753"))},f={components:{unicard:l,faIcon:c,uninumberbox:a,uniNavBar:s,uniIcon:d},data:function(){return{products:[],user:t.getStorageSync("user")}},onLoad:function(e){var o=this;if(this.products=[],i=this,t.removeStorageSync("is_option"),u=t.getStorageSync("uid"),e.id){t.showLoading({title:"加载中..."});var r=n.default.Query("Goods");"false"==e.type?r.equalTo("objectId","==",e.id):r.equalTo("productCode","==",e.id),r.equalTo("userId","==",u),r.equalTo("status","!=",-1),r.find().then(function(e){console.log(e);var n=!0,r=!1,u=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var a=i.value;if(a.num=1,a.total_money=1*a.costPrice,a.really_total_money=1*a.costPrice,a.modify_retailPrice=a.costPrice,a.models){var c=0,s=!0,d=!1,f=void 0;try{for(var m,h=a.models[Symbol.iterator]();!(s=(m=h.next()).done);s=!0){var y=m.value;y.num=0,c+=1}}catch(v){d=!0,f=v}finally{try{s||null==h.return||h.return()}finally{if(d)throw f}}a.num=c,a.selectd_model=a.models,a.selected_model=a.models}}}catch(v){r=!0,u=v}finally{try{n||null==l.return||l.return()}finally{if(r)throw u}}o.products=e,t.hideLoading()})}else{this.products=t.getStorageSync("products");var l=!0,a=!1,c=void 0;try{for(var s,d=this.products[Symbol.iterator]();!(l=(s=d.next()).done);l=!0){var f=s.value;if(f.models){var m=0,h=!0,y=!1,v=void 0;try{for(var p,b=f.models[Symbol.iterator]();!(h=(p=b.next()).done);h=!0){var _=p.value;_.num=0,m+=1}}catch(g){y=!0,v=g}finally{try{h||null==b.return||b.return()}finally{if(y)throw v}}f.num=m,f.selectd_model=f.models,f.selected_model=f.models}}}catch(g){a=!0,c=g}finally{try{l||null==d.return||d.return()}finally{if(a)throw c}}this.products=this.products}},methods:{scanGoods:function(){t.scanCode({success:function(e){t.showLoading({title:"加载中..."});var o=e.result,r=o.split("-"),l=n.default.Query("Goods");"false"==r[1]?l.equalTo("objectId","==",r[0]):l.equalTo("productCode","==",r[0]),l.equalTo("userId","==",u),l.find().then(function(e){console.log(e);var o=!0,n=!1,r=void 0;try{for(var u,l=e[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var a=u.value;if(a.num=1,a.total_money=1*a.costPrice,a.really_total_money=1*a.costPrice,a.modify_retailPrice=a.costPrice,a.models){var c=0,s=!0,d=!1,f=void 0;try{for(var m,h=a.models[Symbol.iterator]();!(s=(m=h.next()).done);s=!0){var y=m.value;y.num=0,c+=1}}catch(v){d=!0,f=v}finally{try{s||null==h.return||h.return()}finally{if(d)throw f}}a.num=c,a.selectd_model=a.models,a.selected_model=a.models}}}catch(v){n=!0,r=v}finally{try{o||null==l.return||l.return()}finally{if(n)throw r}}i.products=i.products.concat(e),t.hideLoading()})},fail:function(e){t.showToast({title:"未识别到条形码",icon:"none"})}})},confrim_this:function(){t.navigateTo({url:"/pages/production/matterEnter/enterDetail/enterDetail"})},handleNumChange:function(e,o){this.products[o].num=Number(e),this.products[o].total_money=Number(e)*Number(this.products[o].modify_retailPrice),this.products[o].really_total_money=Number(e)*Number(this.products[o].costPrice),t.setStorageSync("products",this.products)},handleModelNumChange:function(e,o,n,r){r.num=Number(e),this.products[o].selected_model[n]=r;var u=0,i=!0,l=!1,a=void 0;try{for(var c,s=this.products[o].selected_model[Symbol.iterator]();!(i=(c=s.next()).done);i=!0){var d=c.value;u+=d.num}}catch(f){l=!0,a=f}finally{try{i||null==s.return||s.return()}finally{if(l)throw a}}this.products[o].num=u,this.products[o].total_money=u*Number(this.products[o].modify_retailPrice),this.products[o].really_total_money=u*Number(this.products[o].costPrice),t.setStorageSync("products",this.products)},handleDel:function(e){console.log(e),1==this.products.length?t.showToast({title:"最少选择一个产品",icon:"none"}):(this.products.splice(e,1),t.setStorageSync("products",this.products))},getrealprice:function(e,o){this.products[o].modify_retailPrice=e.target.value,this.products[o].total_money=this.products[o].num*Number(e.target.value),t.setStorageSync("products",this.products)}}};e.default=f}).call(this,o("543d")["default"])},d574:function(t,e,o){"use strict";var n=o("4e53"),r=o.n(n);r.a},d5e3:function(t,e,o){"use strict";o.r(e);var n=o("c742"),r=o.n(n);for(var u in n)"default"!==u&&function(t){o.d(e,t,function(){return n[t]})}(u);e["default"]=r.a},e199:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},r=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return r})},e785:function(t,e,o){"use strict";o.r(e);var n=o("e199"),r=o("d5e3");for(var u in r)"default"!==u&&function(t){o.d(e,t,function(){return r[t]})}(u);o("d574");var i=o("2877"),l=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=l.exports}},[["4836","common/runtime","common/vendor"]]]);