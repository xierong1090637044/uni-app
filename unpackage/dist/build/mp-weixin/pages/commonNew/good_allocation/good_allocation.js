(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/commonNew/good_allocation/good_allocation"],{"0fe3":function(t,n,e){"use strict";var o=e("767c"),r=e.n(o);r.a},"2c86":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(e("4515"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=u(t))){var n=0,e=function(){};return{s:e,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){a=!0,r=t},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw r}}}}function u(t,n){if(t){if("string"===typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(t,n):void 0}}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}var c,l,s=function(){e.e("components/uni-card/uni-card").then(function(){return resolve(e("8513"))}.bind(null,e)).catch(e.oe)},d=function(){e.e("components/uni-number-box/uni-number-box").then(function(){return resolve(e("ccef"))}.bind(null,e)).catch(e.oe)},f=function(){e.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(e("cc4b"))}.bind(null,e)).catch(e.oe)},h=function(){e.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(e("8157"))}.bind(null,e)).catch(e.oe)},m=function(){e.e("components/uni-icon/uni-icon").then(function(){return resolve(e("5920"))}.bind(null,e)).catch(e.oe)},p={components:{unicard:s,faIcon:f,uninumberbox:d,uniNavBar:h,uniIcon:m},data:function(){return{user:t.getStorageSync("user"),products:[]}},onLoad:function(n){var e=this;if(c=t.getStorageSync("uid"),l=this,t.removeStorageSync("is_option"),n.id){t.showLoading({title:"加载中..."});var r=o.default.Query("Goods");"false"==n.type?r.equalTo("objectId","==",n.id):r.equalTo("productCode","==",n.id),r.equalTo("userId","==",c),r.equalTo("status","!=",-1),r.find().then((function(n){if(0==n.length)return t.showToast({icon:"none",title:"没有此产品"}),void t.hideLoading();-1==n[0].status?t.showToast({title:"该产品已删除",icon:"none"}):(n[0].num=1,n[0].total_money=1*n[0].retailPrice,n[0].modify_retailPrice=n[0].retailPrice,e.products=n),t.hideLoading()}))}else{this.products=t.getStorageSync("products");var u,a=i(this.products);try{for(a.s();!(u=a.n()).done;){var s=u.value;if(s.models){var d,f=0,h=i(s.models);try{for(h.s();!(d=h.n()).done;){var m=d.value;m.num=0,f+=1}}catch(p){h.e(p)}finally{h.f()}s.num=f,s.selectd_model=s.models,s.selected_model=s.models}}}catch(p){a.e(p)}finally{a.f()}this.products=this.products}},methods:{scanGoods:function(){t.scanCode({success:function(n){t.showLoading({title:"加载中..."});var e=n.result,r=e.split("-"),u=o.default.Query("Goods");"false"==r[1]?u.equalTo("objectId","==",r[0]):u.equalTo("productCode","==",r[0]),u.equalTo("userId","==",c),u.find().then((function(n){if(0==n.length)return t.showToast({icon:"none",title:"没有此产品"}),void t.hideLoading();if(-1==n[0].status)t.showToast({title:"该产品已删除",icon:"none"});else{var e,o=i(n);try{for(o.s();!(e=o.n()).done;){var r=e.value;r.num=1,r.total_money=1*r.retailPrice,r.really_total_money=1*r.retailPrice,r.modify_retailPrice=r.retailPrice}}catch(u){o.e(u)}finally{o.f()}l.products=l.products.concat(n)}t.hideLoading()}))},fail:function(n){t.showToast({title:"未识别到条形码",icon:"none"})}})},confrim_this:function(){t.navigateTo({url:"/pages/commonNew/good_allocation/allocation_detail/allocation_detail"})},handleModelNumChange:function(n,e,o,r){r.num=Number(n),this.products[e].selected_model[o]=r;var u,a=0,c=i(this.products[e].selected_model);try{for(c.s();!(u=c.n()).done;){var l=u.value;l.num>0&&(a+=l.num)}}catch(s){c.e(s)}finally{c.f()}this.products[e].num=a,this.products[e].total_money=a*Number(this.products[e].modify_retailPrice),this.products[e].really_total_money=a*Number(this.products[e].retailPrice),t.setStorageSync("products",this.products)},handleNumChange:function(n,e){this.products[e].num=n||0,this.products[e].total_money=n*Number(this.products[e].modify_retailPrice),t.setStorageSync("products",this.products)},handleDel:function(n){console.log(n),1==this.products.length?t.showToast({title:"最少选择一个产品",icon:"none"}):(this.products.splice(n,1),t.setStorageSync("products",this.products))},getrealprice:function(n,e){this.products[e].modify_retailPrice=n.target.value,this.products[e].total_money=this.products[e].num*Number(n.target.value),t.setStorageSync("products",this.products)}}};n.default=p}).call(this,e("543d")["default"])},"58ab":function(t,n,e){"use strict";var o={"uni-nav-bar":function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"8157"))}},r=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.products,(function(n,e){var o=Number(n.reserve);return{$orig:t.__get_orig(n),m0:o}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},i=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o}))},"767c":function(t,n,e){},"80ab":function(t,n,e){"use strict";e.r(n);var o=e("58ab"),r=e("a95f");for(var i in r)"default"!==i&&function(t){e.d(n,t,(function(){return r[t]}))}(i);e("0fe3");var u,a=e("f0c5"),c=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=c.exports},"979f":function(t,n,e){"use strict";(function(t){e("d34b"),e("921b");o(e("66fd"));var n=o(e("80ab"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},a95f:function(t,n,e){"use strict";e.r(n);var o=e("2c86"),r=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n["default"]=r.a}},[["979f","common/runtime","common/vendor"]]]);