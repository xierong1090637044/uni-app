(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/commonNew/good_count/good_count"],{"66ba":function(e,t,o){},"789f":function(e,t,o){"use strict";o.r(t);var n=o("ddf9"),r=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,(function(){return n[e]}))}(i);t["default"]=r.a},ae5f:function(e,t,o){"use strict";var n=o("66ba"),r=o.n(n);r.a},ce37:function(e,t,o){"use strict";(function(e){o("a961"),o("921b");n(o("66fd"));var t=n(o("d4cf"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},d4cf:function(e,t,o){"use strict";o.r(t);var n=o("eeab"),r=o("789f");for(var i in r)"default"!==i&&function(e){o.d(t,e,(function(){return r[e]}))}(i);o("ae5f");var l,a=o("f0c5"),u=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],l);t["default"]=u.exports},ddf9:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(o("c74b"));function r(e){return e&&e.__esModule?e:{default:e}}var i,l,a=function(){o.e("components/uni-card/uni-card").then(function(){return resolve(o("872f"))}.bind(null,o)).catch(o.oe)},u=function(){o.e("components/uni-number-box/uni-number-box").then(function(){return resolve(o("8fad"))}.bind(null,o)).catch(o.oe)},c=function(){o.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(o("0914"))}.bind(null,o)).catch(o.oe)},d=function(){o.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(o("b92d"))}.bind(null,o)).catch(o.oe)},s=function(){o.e("components/uni-icon/uni-icon").then(function(){return resolve(o("5753"))}.bind(null,o)).catch(o.oe)},f={components:{unicard:a,faIcon:c,uninumberbox:u,uniNavBar:d,uniIcon:s},data:function(){return{user:e.getStorageSync("user"),products:null}},onLoad:function(t){var o=this;if(i=e.getStorageSync("uid"),l=this,e.removeStorageSync("is_option"),t.id){e.showLoading({title:"加载中..."});var r=n.default.Query("Goods");"false"==t.type?r.equalTo("objectId","==",t.id):r.equalTo("productCode","==",t.id),r.equalTo("userId","==",i),r.equalTo("status","!=",-1),r.include("stocks"),r.find().then((function(t){if(0==t.length)return e.showToast({icon:"none",title:"没有此产品"}),void e.hideLoading();var n=!0,r=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(n=(l=a.next()).done);n=!0){var u=l.value;if(u.num=1,u.total_money=1*u.retailPrice,u.really_total_money=1*u.retailPrice,u.modify_retailPrice=u.retailPrice,u.models){var c=0,d=!0,s=!1,f=void 0;try{for(var m,v=u.models[Symbol.iterator]();!(d=(m=v.next()).done);d=!0){var h=m.value;h.num=0,c+=1}}catch(y){s=!0,f=y}finally{try{d||null==v.return||v.return()}finally{if(s)throw f}}u.num=c,u.selectd_model=u.models,u.selected_model=u.models}}}catch(y){r=!0,i=y}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}o.products=t,wx.hideLoading()}))}else{this.products=e.getStorageSync("products");var a=!0,u=!1,c=void 0;try{for(var d,s=this.products[Symbol.iterator]();!(a=(d=s.next()).done);a=!0){var f=d.value;if(f.models){var m=!0,v=!1,h=void 0;try{for(var y,p=f.models[Symbol.iterator]();!(m=(y=p.next()).done);m=!0){var b=y.value;b.num=b.reserve}}catch(_){v=!0,h=_}finally{try{m||null==p.return||p.return()}finally{if(v)throw h}}f.selectd_model=f.models,f.selected_model=f.models}}}catch(_){u=!0,c=_}finally{try{a||null==s.return||s.return()}finally{if(u)throw c}}this.products=this.products}},methods:{scanGoods:function(){e.scanCode({success:function(t){e.showLoading({title:"加载中..."});var o=t.result,r=o.split("-"),a=n.default.Query("Goods");"false"==r[1]?a.equalTo("objectId","==",r[0]):a.equalTo("productCode","==",r[0]),a.equalTo("userId","==",i),a.find().then((function(t){if(0==t.length)return e.showToast({icon:"none",title:"没有此产品"}),void e.hideLoading();if(0==t[0].order)a.equalTo("userId","==",i),a.equalTo("objectId","==",t[0].objectId),a.find().then((function(e){var t=!0,o=!1,n=void 0;try{for(var r,i=e[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var a=r.value;if(a.num=1,a.total_money=1*a.retailPrice,a.really_total_money=1*a.retailPrice,a.modify_retailPrice=a.retailPrice,a.models){var u=0,c=!0,d=!1,s=void 0;try{for(var f,m=a.models[Symbol.iterator]();!(c=(f=m.next()).done);c=!0){var v=f.value;v.num=0,u+=1}}catch(h){d=!0,s=h}finally{try{c||null==m.return||m.return()}finally{if(d)throw s}}a.num=u,a.selectd_model=a.models,a.selected_model=a.models}}}catch(h){o=!0,n=h}finally{try{t||null==i.return||i.return()}finally{if(o)throw n}}l.products=l.products.concat(e),wx.hideLoading()}));else{var o=!0,n=!1,r=void 0;try{for(var u,c=t[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var d=u.value;if(d.num=1,d.total_money=1*d.retailPrice,d.really_total_money=1*d.retailPrice,d.modify_retailPrice=d.retailPrice,d.models){var s=0,f=!0,m=!1,v=void 0;try{for(var h,y=d.models[Symbol.iterator]();!(f=(h=y.next()).done);f=!0){var p=h.value;p.num=0,s+=1}}catch(b){m=!0,v=b}finally{try{f||null==y.return||y.return()}finally{if(m)throw v}}d.num=s,d.selectd_model=d.models,d.selected_model=d.models}}}catch(b){n=!0,r=b}finally{try{o||null==c.return||c.return()}finally{if(n)throw r}}l.products=l.products.concat(t),wx.hideLoading()}}))},fail:function(t){e.showToast({title:"未识别到条形码",icon:"none"})}})},confrim_this:function(){e.navigateTo({url:"/pages/commonNew/good_count/count_detail/count_detail"})},handleNumChange:function(t,o){this.products[o].num=t||0,this.products[o].total_money=t*Number(this.products[o].modify_retailPrice),e.setStorageSync("products",this.products)},handleModelNumChange:function(t,o,n,r){r.reserve=Number(t),this.products[o].selected_model[n]=r;var i=0,l=!0,a=!1,u=void 0;try{for(var c,d=this.products[o].selected_model[Symbol.iterator]();!(l=(c=d.next()).done);l=!0){var s=c.value;i+=s.reserve}}catch(f){a=!0,u=f}finally{try{l||null==d.return||d.return()}finally{if(a)throw u}}this.products[o].num=i,this.products[o].total_money=i*Number(this.products[o].modify_retailPrice),this.products[o].really_total_money=i*Number(this.products[o].really_total_money),e.setStorageSync("products",this.products)},handleDel:function(t){console.log(t),1==this.products.length?e.showToast({title:"最少选择一个产品",icon:"none"}):(this.products.splice(t,1),e.setStorageSync("products",this.products))},getrealprice:function(t,o){this.products[o].modify_retailPrice=t.target.value,this.products[o].total_money=this.products[o].num*Number(t.target.value),e.setStorageSync("products",this.products)}}};t.default=f}).call(this,o("543d")["default"])},eeab:function(e,t,o){"use strict";var n={"uni-nav-bar":()=>o.e("components/uni-nav-bar/uni-nav-bar").then(o.bind(null,"b92d"))},r=function(){var e=this,t=e.$createElement,o=(e._self._c,e.__map(e.products,(function(t,o){var n=Number(t.reserve);return{$orig:e.__get_orig(t),m0:n}})));e.$mp.data=Object.assign({},{$root:{l0:o}})},i=[];o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return n}))}},[["ce37","common/runtime","common/vendor"]]]);