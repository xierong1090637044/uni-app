(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/goods-select/goods-select"],{"003d":function(t,o,e){"use strict";e.r(o);var n=e("7904"),c=e("20b0");for(var r in c)"default"!==r&&function(t){e.d(o,t,function(){return c[t]})}(r);e("7efa");var i=e("2877"),u=Object(i["a"])(c["default"],n["a"],n["b"],!1,null,null,null);o["default"]=u.exports},"20b0":function(t,o,e){"use strict";e.r(o);var n=e("3ede"),c=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(o,t,function(){return n[t]})}(r);o["default"]=c.a},"3ede":function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=c(e("e21e"));function c(t){return t&&t.__esModule?t:{default:t}}var r,i,u=function(){return e.e("components/kilvn-fa-icon/fa-icon").then(e.bind(null,"8899"))},a=function(){return e.e("components/Loading/index").then(e.bind(null,"c211"))},s=function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"f3ca"))},d=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"16b7"))},g=[],l="",f=50,h={components:{loading:a,uniNavBar:s,faIcon:u,uniIcon:d},data:function(){return{url:null,showOptions:!1,loading:!0,productList:null,checked_option:"createdAt",category:"",stock:""}},onNavigationBarButtonTap:function(t){"确定"==t.text&&this.go_goodsconfrim(),"筛选"==t.text&&(i.showOptions=!0)},onLoad:function(o){i=this,"entering"==o.type?this.url="../good_confrim/good_confrim":"delivery"==o.type?this.url="../goods_out/goods_out":"returing"==o.type?this.url="../good_return/good_return":"counting"==o.type&&(this.url="../good_count/good_count"),r=t.getStorageSync("uid"),i.get_productList()},onShow:function(){this.handle_data(),t.removeStorageSync("products"),t.getStorageSync("category")&&(i.category=t.getStorageSync("category")),t.getStorageSync("warehouse")&&(i.stock=t.getStorageSync("warehouse")[t.getStorageSync("warehouse").length-1].stock),t.getStorageSync("is_option")&&i.get_productList()},onUnload:function(){l="",f=50,t.removeStorageSync("is_option")},methods:{option_reset:function(){t.removeStorageSync("category"),t.removeStorageSync("warehouse"),i.category="",i.stock="",i.showOptions=!1,i.get_productList()},option_confrim:function(){t.getStorageSync("category")&&(i.category=t.getStorageSync("category")),t.getStorageSync("warehouse")&&(i.stock=t.getStorageSync("warehouse")[t.getStorageSync("warehouse").length-1].stock),i.showOptions=!1,i.get_productList()},selectd:function(t){f=50,i.checked_option=t,i.get_productList()},load_more:function(){f+=50,i.get_productList()},radioChange:function(t){g=t.detail.value},go_goodsconfrim:function(){if(console.log(g," at pages\\common\\goods-select\\goods-select.vue:210"),0==g.length)t.showToast({title:"请选择产品",icon:"none"});else{for(var o=[],e=0;e<g.length;e++)this.productList[g[e]].num=1,this.productList[g[e]].total_money=1*this.productList[g[e]].retailPrice,this.productList[g[e]].modify_retailPrice=this.productList[g[e]].retailPrice,o.push(this.productList[g[e]]);t.setStorageSync("products",o),t.navigateTo({url:this.url})}},get_productList:function(){var t=this,o=n.default.Query("Goods");o.equalTo("userId","==",r),o.equalTo("stocks","==",i.stock.objectId),o.equalTo("status","!=",-1),o.equalTo("second_class","==",i.category.objectId),o.equalTo("goodsName","==",{$regex:l+".*"}),o.limit(f),o.order("-"+i.checked_option),o.include("userId"),o.include("goodsClass"),o.include("stocks"),o.find().then(function(o){t.productList=o,t.loading=!1})},handle_data:function(){t.removeStorageSync("category"),t.removeStorageSync("warehouse"),t.removeStorageSync("shop"),l="",f=50}}};o.default=h}).call(this,e("6e42")["default"])},7904:function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement;t._self._c;t._isMounted||(t.e0=function(o){t.showOptions=!1})},c=[];e.d(o,"a",function(){return n}),e.d(o,"b",function(){return c})},"7efa":function(t,o,e){"use strict";var n=e("c0c6"),c=e.n(n);c.a},c0c6:function(t,o,e){}},[["85cf","common/runtime","common/vendor"]]]);