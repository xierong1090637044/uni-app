(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_count/good_count"],{1813:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("4515"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=a(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,c=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){c=!0,r=e},f:function(){try{i||null==o.return||o.return()}finally{if(c)throw r}}}}function a(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var u,l,s=function(){n.e("components/uni-card/uni-card").then(function(){return resolve(n("8513"))}.bind(null,n)).catch(n.oe)},d=function(){n.e("components/uni-number-box/uni-number-box").then(function(){return resolve(n("ccef"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(n("cc4b"))}.bind(null,n)).catch(n.oe)},m=function(){n.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(n("8157"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/uni-icon/uni-icon").then(function(){return resolve(n("5920"))}.bind(null,n)).catch(n.oe)},v={components:{unicard:s,faIcon:f,uninumberbox:d,uniNavBar:m,uniIcon:h},data:function(){return{user:e.getStorageSync("user"),products:null}},onLoad:function(t){var n=this;if(u=e.getStorageSync("uid"),l=this,e.removeStorageSync("is_option"),t.id){e.showLoading({title:"加载中..."});var r=o.default.Query("Goods");"false"==t.type?r.equalTo("objectId","==",t.id):r.equalTo("productCode","==",t.id),r.equalTo("userId","==",u),r.equalTo("status","!=",-1),r.include("stocks"),r.find().then((function(t){if(e.setStorageSync("keepScan",!0),0==t.length)return e.showToast({icon:"none",title:"没有此产品"}),void e.hideLoading();if(0==t[0].order)r.equalTo("userId","==",u),r.equalTo("header","==",t[0].objectId),r.include("stocks"),r.find().then((function(e){var t,o=i(e);try{for(o.s();!(t=o.n()).done;){var r=t.value;if(r.num=1,r.total_money=1*r.retailPrice,r.really_total_money=1*r.retailPrice,r.modify_retailPrice=r.retailPrice,r.models){var a,c=0,u=i(r.models);try{for(u.s();!(a=u.n()).done;){var l=a.value;l.num=0,c+=1}}catch(s){u.e(s)}finally{u.f()}r.num=c,r.selectd_model=r.models,r.selected_model=r.models}}}catch(s){o.e(s)}finally{o.f()}n.products=e,wx.hideLoading()}));else{var o,a=i(t);try{for(a.s();!(o=a.n()).done;){var c=o.value;if(c.num=1,c.total_money=1*c.retailPrice,c.really_total_money=1*c.retailPrice,c.modify_retailPrice=c.retailPrice,c.models){var l,s=0,d=i(c.models);try{for(d.s();!(l=d.n()).done;){var f=l.value;f.num=0,s+=1}}catch(m){d.e(m)}finally{d.f()}c.num=s,c.selectd_model=c.models,c.selected_model=c.models}}}catch(m){a.e(m)}finally{a.f()}n.products=t,wx.hideLoading()}}))}else{this.products=e.getStorageSync("products");var a,c=i(this.products);try{for(c.s();!(a=c.n()).done;){var s=a.value;if(s.models){var d,f=i(s.models);try{for(f.s();!(d=f.n()).done;){var m=d.value;m.num=m.reserve}}catch(h){f.e(h)}finally{f.f()}s.selectd_model=s.models,s.selected_model=s.models}}}catch(h){c.e(h)}finally{c.f()}this.products=this.products}},methods:{scanGoods:function(){e.scanCode({success:function(t){e.showLoading({title:"加载中..."});var n=t.result,r=n.split("-"),a=o.default.Query("Goods");"false"==r[1]?a.equalTo("objectId","==",r[0]):a.equalTo("productCode","==",r[0]),a.equalTo("userId","==",u),a.include("stocks"),a.find().then((function(t){if(0==t.length)return e.showToast({icon:"none",title:"没有此产品"}),void e.hideLoading();if(0==t[0].order)a.equalTo("userId","==",u),a.equalTo("header","==",t[0].objectId),a.include("stocks"),a.find().then((function(e){var t,n=i(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(o.num=1,o.total_money=1*o.retailPrice,o.really_total_money=1*o.retailPrice,o.modify_retailPrice=o.retailPrice,o.models){var r,a=0,c=i(o.models);try{for(c.s();!(r=c.n()).done;){var u=r.value;u.num=0,a+=1}}catch(s){c.e(s)}finally{c.f()}o.num=a,o.selectd_model=o.models,o.selected_model=o.models}}}catch(s){n.e(s)}finally{n.f()}l.products=l.products.concat(e),wx.hideLoading()}));else{var n,o=i(t);try{for(o.s();!(n=o.n()).done;){var r=n.value;if(r.num=1,r.total_money=1*r.retailPrice,r.really_total_money=1*r.retailPrice,r.modify_retailPrice=r.retailPrice,r.models){var c,s=0,d=i(r.models);try{for(d.s();!(c=d.n()).done;){var f=c.value;f.num=0,s+=1}}catch(m){d.e(m)}finally{d.f()}r.num=s,r.selectd_model=r.models,r.selected_model=r.models}}}catch(m){o.e(m)}finally{o.f()}l.products=l.products.concat(t),wx.hideLoading()}}))},fail:function(t){e.showToast({title:"未识别到条形码",icon:"none"})}})},confrim_this:function(){e.navigateTo({url:"/pages/common/good_count/count_detail/count_detail"})},handleNumChange:function(t,n){this.products[n].num=t||0,this.products[n].total_money=t*Number(this.products[n].modify_retailPrice),e.setStorageSync("products",this.products)},handleModelNumChange:function(t,n,o,r){r.reserve=Number(t),this.products[n].selected_model[o]=r;var a,c=0,u=i(this.products[n].selected_model);try{for(u.s();!(a=u.n()).done;){var l=a.value;c+=l.reserve}}catch(s){u.e(s)}finally{u.f()}this.products[n].num=c,this.products[n].total_money=c*Number(this.products[n].modify_retailPrice),this.products[n].really_total_money=c*Number(this.products[n].really_total_money),e.setStorageSync("products",this.products)},handleDel:function(t){console.log(t),1==this.products.length?e.showToast({title:"最少选择一个产品",icon:"none"}):(this.products.splice(t,1),e.setStorageSync("products",this.products))},getrealprice:function(t,n){this.products[n].modify_retailPrice=t.target.value,this.products[n].total_money=this.products[n].num*Number(t.target.value),e.setStorageSync("products",this.products)}}};t.default=v}).call(this,n("543d")["default"])},"18e7":function(e,t,n){"use strict";var o={"uni-nav-bar":function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"8157"))}},r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.products,(function(t,n){var o=Number(t.reserve);return{$orig:e.__get_orig(t),m0:o}})));e.$mp.data=Object.assign({},{$root:{l0:n}})},i=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}))},6752:function(e,t,n){"use strict";(function(e){n("d34b"),n("921b");o(n("66fd"));var t=o(n("c799"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"978b":function(e,t,n){"use strict";n.r(t);var o=n("1813"),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=r.a},b7ae:function(e,t,n){},c799:function(e,t,n){"use strict";n.r(t);var o=n("18e7"),r=n("978b");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("d384");var a,c=n("f0c5"),u=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=u.exports},d384:function(e,t,n){"use strict";var o=n("b7ae"),r=n.n(o);r.a}},[["6752","common/runtime","common/vendor"]]]);