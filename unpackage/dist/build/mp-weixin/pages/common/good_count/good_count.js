(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_count/good_count"],{"203c":function(t,e,o){"use strict";o.r(e);var n=o("4064"),r=o.n(n);for(var u in n)"default"!==u&&function(t){o.d(e,t,function(){return n[t]})}(u);e["default"]=r.a},"3f9f":function(t,e,o){"use strict";o.r(e);var n=o("93d2"),r=o("203c");for(var u in r)"default"!==u&&function(t){o.d(e,t,function(){return r[t]})}(u);o("952d");var c=o("2877"),i=Object(c["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},4064:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(o("c74b"));function r(t){return t&&t.__esModule?t:{default:t}}var u,c=function(){return o.e("components/uni-card/uni-card").then(o.bind(null,"872f"))},i=function(){return o.e("components/uni-number-box/uni-number-box").then(o.bind(null,"8fad"))},a=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"0914"))},s=function(){return o.e("components/uni-nav-bar/uni-nav-bar").then(o.bind(null,"b92d"))},d=function(){return o.e("components/uni-icon/uni-icon").then(o.bind(null,"5753"))},l={components:{unicard:c,faIcon:a,uninumberbox:i,uniNavBar:s,uniIcon:d},data:function(){return{products:null}},onLoad:function(e){var o=this;if(u=t.getStorageSync("uid"),e.id){var r=n.default.Query("Goods");"false"==e.type?r.equalTo("objectId","==",e.id):r.equalTo("productCode","==",e.id),r.equalTo("userId","==",u),r.find().then(function(t){console.log(t),t[0].num=1,t[0].total_money=1*t[0].retailPrice,t[0].modify_retailPrice=t[0].retailPrice,o.products=t})}else{this.products=t.getStorageSync("products");var c=0,i=!0,a=!1,s=void 0;try{for(var d,l=t.getStorageSync("products")[Symbol.iterator]();!(i=(d=l.next()).done);i=!0){var f=d.value;console.log(f),f.selectd_model&&this.make_goods(f,f.selectd_model,c),c+=1}}catch(p){a=!0,s=p}finally{try{i||null==l.return||l.return()}finally{if(a)throw s}}}},onUnload:function(){t.removeStorageSync("products")},methods:{make_goods:function(t,e,o){console.log(t,e,o);var n=[];this.products.splice(o,1);var r=!0,u=!1,c=void 0;try{for(var i,a=JSON.parse(e)[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var s=i.value,d={};d.reserve=JSON.parse(s).reserve,d.costPrice=t.costPrice,d.createdAt=t.createdAt,d.goodsIcon=t.goodsIcon,d.goodsName=t.goodsName+JSON.parse(s).custom1.value+JSON.parse(s).custom2.value+JSON.parse(s).custom3.value+JSON.parse(s).custom4.value,d.is_selected=t.is_selected,d.key=t.key,d.models=t.models,d.modify_retailPrice=t.modify_retailPrice,d.num=t.num,d.objectId=t.objectId,d.packageContent=t.packageContent,d.packingUnit=t.packingUnit,d.position=t.position,d.producer=t.producer,d.productCode=t.productCode,d.product_info=t.product_info,d.product_state=t.product_state,d.regNumber=t.regNumber,d.retailPrice=t.retailPrice,d.selectd_model=t.selectd_model,d.stocks=t.stocks,d.stocktype=t.stocktype,d.total_money=t.total_money,d.updatedAt=t.updatedAt,d.userId=t.userId,d.warning_num=t.warning_num,n.push(d)}}catch(l){u=!0,c=l}finally{try{r||null==a.return||a.return()}finally{if(u)throw c}}this.products=this.products.concat(n)},confrim_this:function(){t.navigateTo({url:"/pages/common/good_count/count_detail/count_detail"})},handleNumChange:function(e,o){this.products[o].num=e||0,this.products[o].total_money=e*Number(this.products[o].modify_retailPrice),t.setStorageSync("products",this.products)},handleDel:function(e){console.log(e),1==this.products.length?t.showToast({title:"最少选择一个产品",icon:"none"}):(this.products.splice(e,1),t.setStorageSync("products",this.products))},getrealprice:function(e,o){this.products[o].modify_retailPrice=e.target.value,this.products[o].total_money=this.products[o].num*Number(e.target.value),t.setStorageSync("products",this.products)}}};e.default=l}).call(this,o("543d")["default"])},6346:function(t,e,o){},"93d2":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},r=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return r})},"952d":function(t,e,o){"use strict";var n=o("6346"),r=o.n(n);r.a},e796:function(t,e,o){"use strict";(function(t){o("a961"),o("921b");n(o("66fd"));var e=n(o("3f9f"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])}},[["e796","common/runtime","common/vendor"]]]);