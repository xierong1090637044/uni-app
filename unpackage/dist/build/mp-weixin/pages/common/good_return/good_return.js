(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_return/good_return"],{"2a3e":function(t,e,o){"use strict";o.r(e);var n=o("9938"),r=o.n(n);for(var u in n)"default"!==u&&function(t){o.d(e,t,function(){return n[t]})}(u);e["default"]=r.a},4156:function(t,e,o){"use strict";o.r(e);var n=o("c160"),r=o("2a3e");for(var u in r)"default"!==u&&function(t){o.d(e,t,function(){return r[t]})}(u);o("7e4f");var c=o("2877"),i=Object(c["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},"7e4f":function(t,e,o){"use strict";var n=o("fb37"),r=o.n(n);r.a},"8c53":function(t,e,o){"use strict";(function(t){o("a961"),o("921b");n(o("66fd"));var e=n(o("4156"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},9938:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(o("c74b"));function r(t){return t&&t.__esModule?t:{default:t}}var u,c=function(){return o.e("components/uni-card/uni-card").then(o.bind(null,"872f"))},i=function(){return o.e("components/uni-number-box/uni-number-box").then(o.bind(null,"8fad"))},a=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"0914"))},s=function(){return o.e("components/uni-nav-bar/uni-nav-bar").then(o.bind(null,"b92d"))},l=function(){return o.e("components/uni-icon/uni-icon").then(o.bind(null,"5753"))},d={components:{unicard:c,faIcon:a,uninumberbox:i,uniNavBar:s,uniIcon:l},data:function(){return{products:null}},onLoad:function(){this.products=t.getStorageSync("products"),u=this,t.removeStorageSync("is_option");var e=0,o=!0,n=!1,r=void 0;try{for(var c,i=t.getStorageSync("products")[Symbol.iterator]();!(o=(c=i.next()).done);o=!0){var a=c.value;console.log(a),a.selectd_model&&this.make_goods(a,a.selectd_model,e),e+=1}}catch(s){n=!0,r=s}finally{try{o||null==i.return||i.return()}finally{if(n)throw r}}},methods:{scanGoods:function(){t.scanCode({success:function(e){t.showLoading({title:"加载中..."});var o=e.result,r=o.split("-"),c=n.default.Query("Goods");"false"==r[1]?c.equalTo("objectId","==",r[0]):c.equalTo("productCode","==",r[0]),c.equalTo("userId","==",uid),c.find().then(function(e){if(console.log(e),-1==e[0].status)t.showToast({title:"该产品已删除",icon:"none"});else{var o=!0,n=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(o=(c=i.next()).done);o=!0){var a=c.value;a.num=1,a.total_money=1*a.retailPrice,a.really_total_money=1*a.retailPrice,a.modify_retailPrice=a.retailPrice}}catch(s){n=!0,r=s}finally{try{o||null==i.return||i.return()}finally{if(n)throw r}}u.products=u.products.concat(e)}t.hideLoading()})},fail:function(e){t.showToast({title:"未识别到条形码",icon:"none"})}})},make_goods:function(t,e,o){console.log(t,e,o);var n=[];this.products.splice(o,1);var r=!0,u=!1,c=void 0;try{for(var i,a=JSON.parse(e)[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var s=i.value,l={};l.reserve=JSON.parse(s).reserve,l.costPrice=t.costPrice,l.createdAt=t.createdAt,l.goodsIcon=t.goodsIcon,l.goodsName=t.goodsName+JSON.parse(s).custom1.value+JSON.parse(s).custom2.value+JSON.parse(s).custom3.value+JSON.parse(s).custom4.value,l.is_selected=t.is_selected,l.key=t.key,l.models=t.models,l.modify_retailPrice=t.modify_retailPrice,l.num=t.num,l.objectId=t.objectId,l.packageContent=t.packageContent,l.packingUnit=t.packingUnit,l.position=t.position,l.producer=t.producer,l.productCode=t.productCode,l.product_info=t.product_info,l.product_state=t.product_state,l.regNumber=t.regNumber,l.retailPrice=t.retailPrice,l.selectd_model=t.selectd_model,l.stocks=t.stocks,l.stocktype=t.stocktype,l.total_money=t.total_money,l.updatedAt=t.updatedAt,l.userId=t.userId,l.warning_num=t.warning_num,n.push(l)}}catch(d){u=!0,c=d}finally{try{r||null==a.return||a.return()}finally{if(u)throw c}}this.products=this.products.concat(n)},confrim_this:function(){t.navigateTo({url:"/pages/common/good_return/return_detail/return_detail"})},handleNumChange:function(e,o){this.products[o].num=e,this.products[o].total_money=e*Number(this.products[o].modify_retailPrice),t.setStorageSync("products",this.products)},handleDel:function(e){console.log(e),1==this.products.length?t.showToast({title:"最少选择一个产品",icon:"none"}):(this.products.splice(e,1),t.setStorageSync("products",this.products))},getrealprice:function(e,o){this.products[o].modify_retailPrice=e.target.value,this.products[o].total_money=this.products[o].num*Number(e.target.value),t.setStorageSync("products",this.products)}}};e.default=d}).call(this,o("543d")["default"])},c160:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},r=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return r})},fb37:function(t,e,o){}},[["8c53","common/runtime","common/vendor"]]]);