(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/goods-select/goods-select"],{"003d":function(n,o,t){"use strict";t.r(o);var e=t("9126"),i=t("20b0");for(var u in i)"default"!==u&&function(n){t.d(o,n,function(){return i[n]})}(u);t("7efa");var c=t("2877"),a=Object(c["a"])(i["default"],e["a"],e["b"],!1,null,null,null);o["default"]=a.exports},"20b0":function(n,o,t){"use strict";t.r(o);var e=t("3ede"),i=t.n(e);for(var u in e)"default"!==u&&function(n){t.d(o,n,function(){return e[n]})}(u);o["default"]=i.a},"3ede":function(n,o,t){"use strict";(function(n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;i(t("46df"));var e=i(t("e21e"));function i(n){return n&&n.__esModule?n:{default:n}}var u,c=function(){return t.e("components/kilvn-fa-icon/fa-icon").then(t.bind(null,"8899"))},a=function(){return t.e("components/Loading/index").then(t.bind(null,"c211"))},r=function(){return t.e("components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"f3ca"))},s=function(){return t.e("components/uni-icon/uni-icon").then(t.bind(null,"16b7"))},l=[],d=[],f={components:{loading:a,uniNavBar:r,faIcon:c,uniIcon:s},data:function(){return{loading:!0,productList:null,url:null}},onNavigationBarButtonTap:function(n){console.log(n," at pages\\common\\goods-select\\goods-select.vue:61"),"确定"==n.text&&this.go_goodsconfrim()},onLoad:function(o){console.log(o," at pages\\common\\goods-select\\goods-select.vue:70"),(o.type="entering")?this.url="../good_confrim/good_confrim":(o.type="delivery")&&(this.url="../good_out/good_out"),u=n.getStorageSync("uid")},onShow:function(){var n=this;this.handle_data();var o=e.default.Query("Goods");o.equalTo("userId","==",u),o.limit(500),o.order("-createdAt"),o.include("userId"),o.include("goodsClass"),o.find().then(function(o){n.productList=o,n.loading=!1})},methods:{radioChange:function(n){d=n.detail.value,console.log(d," at pages\\common\\goods-select\\goods-select.vue:102")},go_goodsconfrim:function(){if(console.log(d," at pages\\common\\goods-select\\goods-select.vue:118"),0==d.length)n.showToast({title:"请选择产品",icon:"none"});else{for(var o=0;o<d.length;o++)this.productList[d[o]].num=1,this.productList[d[o]].total_money=1*this.productList[d[o]].retailPrice,this.productList[d[o]].modify_retailPrice=this.productList[d[o]].retailPrice,l.push(this.productList[d[o]]);n.setStorageSync("products",l),n.navigateTo({url:this.url})}},handle_data:function(){l=[]}}};o.default=f}).call(this,t("6e42")["default"])},"7efa":function(n,o,t){"use strict";var e=t("c0c6"),i=t.n(e);i.a},9126:function(n,o,t){"use strict";var e=function(){var n=this,o=n.$createElement;n._self._c},i=[];t.d(o,"a",function(){return e}),t.d(o,"b",function(){return i})},c0c6:function(n,o,t){}},[["85cf","common/runtime","common/vendor"]]]);