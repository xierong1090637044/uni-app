(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/goods-select/goods-select"],{"10b1":function(t,o,e){"use strict";e.r(o);var n=e("96e7"),r=e("bfcd");for(var i in r)"default"!==i&&function(t){e.d(o,t,function(){return r[t]})}(i);e("d431");var c=e("2877"),a=Object(c["a"])(r["default"],n["a"],n["b"],!1,null,null,null);o["default"]=a.exports},"6c0b":function(t,o,e){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=r(e("ee11"));function r(t){return t&&t.__esModule?t:{default:t}}var i,c,a=function(){return e.e("components/kilvn-fa-icon/fa-icon").then(e.bind(null,"0914"))},u=function(){return e.e("components/Loading/index").then(e.bind(null,"524a"))},s=function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"b92d"))},l=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"5753"))},d=[],g="",f=50,h={components:{loading:u,uniNavBar:s,faIcon:a,uniIcon:l},data:function(){return{search_text:"",url:null,showOptions:!1,loading:!0,productList:null,checked_option:"createdAt",category:"",stock:""}},onLoad:function(o){c=this,this.handle_data(),"entering"==o.type?this.url="../good_confrim/good_confrim":"delivery"==o.type?this.url="../goods_out/goods_out":"returing"==o.type?this.url="../good_return/good_return":"counting"==o.type&&(this.url="../good_count/good_count"),i=t.getStorageSync("uid"),c.get_productList()},onShow:function(){t.removeStorageSync("products"),t.getStorageSync("category")&&(c.showOptions=!0,c.category=t.getStorageSync("category")),t.getStorageSync("warehouse")&&(c.showOptions=!0,c.stock=t.getStorageSync("warehouse")[t.getStorageSync("warehouse").length-1].stock),t.getStorageSync("is_option")&&(this.productList=[],c.get_productList())},onHide:function(){g="",f=50,d=[],this.productList=[],t.removeStorageSync("is_option")},methods:{shaixuan:function(){c.showOptions=!0},confirm:function(t){g=t.detail.value,c.search_text=t.detail.value,c.get_productList()},confrim_this:function(){this.go_goodsconfrim()},option_reset:function(){t.removeStorageSync("category"),t.removeStorageSync("warehouse"),c.category="",c.stock="",c.showOptions=!1,c.get_productList()},option_confrim:function(){t.getStorageSync("category")&&(c.category=t.getStorageSync("category")),t.getStorageSync("warehouse")&&(c.stock=t.getStorageSync("warehouse")[t.getStorageSync("warehouse").length-1].stock),c.showOptions=!1,c.get_productList()},selectd:function(t){f=50,c.checked_option=t,c.get_productList()},load_more:function(){f+=50,c.get_productList()},radioChange:function(t){d=t.detail.value},radioChange_search:function(t){var o=t.detail.value;d=this.concat_(d,o),console.log(d)},concat_:function(t,o){for(var e=t.concat(),n=0;n<o.length;n++)-1===e.indexOf(o[n])&&e.push(o[n]);return e},go_goodsconfrim:function(){if(console.log(d),0==d.length)t.showToast({title:"请选择产品",icon:"none"});else{var o=0,e=!0,n=!1,r=void 0;try{for(var i,c=d[Symbol.iterator]();!(e=(i=c.next()).done);e=!0){var a=i.value;d[o]=JSON.parse(a),d[o].num=1,d[o].total_money=1*d[o].retailPrice,d[o].modify_retailPrice=d[o].retailPrice,o+=1}}catch(u){n=!0,r=u}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}t.setStorageSync("products",d),t.navigateTo({url:this.url})}},get_productList:function(){var t=this,o=n.default.Query("Goods");o.equalTo("userId","==",i),o.equalTo("stocks","==",c.stock.objectId),o.equalTo("status","!=",-1),o.equalTo("second_class","==",c.category.objectId),o.equalTo("goodsName","==",{$regex:g+".*"}),o.limit(f),o.order("-"+c.checked_option),o.include("userId"),o.include("goodsClass"),o.include("stocks"),o.find().then(function(o){console.log(d);var e=!0,n=!1,r=void 0;try{for(var i,c=o[Symbol.iterator]();!(e=(i=c.next()).done);e=!0){var a=i.value;d.indexOf(JSON.stringify(a))>-1&&(console.log(d.indexOf(JSON.stringify(a))),a.checked=!0)}}catch(u){n=!0,r=u}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}t.productList=o,t.loading=!1})},handle_data:function(){t.removeStorageSync("category"),t.removeStorageSync("warehouse"),t.removeStorageSync("shop"),g="",f=50}}};o.default=h}).call(this,e("543d")["default"])},"96e7":function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=(t._self._c,t.__map(t.productList,function(o,e){var n=JSON.stringify(o);return{$orig:t.__get_orig(o),g0:n}})),n=t.__map(t.productList,function(o,e){var n=JSON.stringify(o);return{$orig:t.__get_orig(o),g1:n}});t._isMounted||(t.e0=function(o){t.showOptions=!1}),t.$mp.data=Object.assign({},{$root:{l0:e,l1:n}})},r=[];e.d(o,"a",function(){return n}),e.d(o,"b",function(){return r})},bfcd:function(t,o,e){"use strict";e.r(o);var n=e("6c0b"),r=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(o,t,function(){return n[t]})}(i);o["default"]=r.a},d431:function(t,o,e){"use strict";var n=e("f64d"),r=e.n(n);r.a},f64d:function(t,o,e){}},[["b5e1","common/runtime","common/vendor"]]]);