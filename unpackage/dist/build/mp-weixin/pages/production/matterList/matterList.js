(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/production/matterList/matterList"],{1543:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(o("c74b")),c=a(o("df06"));function a(t){return t&&t.__esModule?t:{default:t}}var r,i,u=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"0914"))},s=function(){return o.e("components/Loading/index").then(o.bind(null,"524a"))},l=function(){return o.e("components/uni-nav-bar/uni-nav-bar").then(o.bind(null,"b92d"))},d=function(){return o.e("components/uni-icon/uni-icon").then(o.bind(null,"5753"))},g=function(){return o.e("components/uni-pagination/uni-pagination").then(o.bind(null,"2bfc"))},f="",h=30,p=1,S={components:{loading:s,uniNavBar:l,faIcon:u,uniPagination:g,uniIcon:d},data:function(){return{page_num:1,showOptions:!1,loading:!0,productList:null,checked_option:"createdAt",category:"",stock:"",checked:!1,stock_checked:!1,search_text:""}},onLoad:function(e){i=this,t.removeStorageSync("category"),t.removeStorageSync("warehouse"),r=t.getStorageSync("uid"),e.search_text&&(i.search_text=e.search_text,f=e.search_text),i.get_productList()},onShow:function(){this.page_num=p,t.removeStorageSync("now_product"),t.getStorageSync("category")&&(i.showOptions=!0,i.category=t.getStorageSync("category")),t.getStorageSync("warehouse")&&(i.showOptions=!0,i.stock=t.getStorageSync("warehouse")[t.getStorageSync("warehouse").length-1].stock),t.getStorageSync("is_add")&&i.get_productList()},onUnload:function(){c.default.handleData(),f="",h=50,t.removeStorageSync("is_add")},methods:{priviewImg:function(e){t.previewImage({current:e,urls:[e]})},change_page:function(t){p=t.current,i.get_productList()},change_timestatus:function(t){console.log(t),i.checked=t.detail.value},change_stocktatus:function(t){console.log(t),i.stock_checked=t.detail.value},input_confirm:function(t){console.log(t),f=t.detail.value,i.get_productList()},shaixuan:function(){i.showOptions=!0},goto_add:function(){var e=t.getStorageSync("user");t.getStorageSync("identity");e.is_vip||i.productList.length<30?t.navigateTo({url:"../matterAdd/matterAdd"}):t.showModal({title:"提示",content:"暂未全部开放，敬请期待",confirmText:"确认",success:function(t){t.confirm?console.log("用户点击确定"):t.cancel&&console.log("用户点击取消")}})},option_reset:function(){t.removeStorageSync("category"),t.removeStorageSync("warehouse"),i.stock_checked=!1,i.checked=!1,i.category="",i.stock="",i.showOptions=!1,i.get_productList()},option_confrim:function(){t.getStorageSync("category")&&(i.category=t.getStorageSync("category")),t.getStorageSync("warehouse")&&(i.stock=t.getStorageSync("warehouse")[t.getStorageSync("warehouse").length-1].stock),i.showOptions=!1,i.get_productList()},selectd:function(t){h=50,i.checked_option=t,i.get_productList()},goDetail:function(e){console.log(e),t.setStorageSync("now_product",e),t.navigateTo({url:"../matterDet/matterDet"})},get_productList:function(){var e=this,o=n.default.Query("Matters");o.equalTo("userId","==",r),o.equalTo("stocks","==",i.stock.objectId),o.equalTo("status","!=",-1),i.stock||o.equalTo("accessory","!=",!0),1==i.category.type?o.equalTo("fristClass","==",i.category.objectId):o.equalTo("secondClass","==",i.category.objectId);var c=o.equalTo("goodsName","==",{$regex:f+".*"}),a=o.equalTo("packageContent","==",{$regex:f+".*"});if(o.or(c,a),i.checked){var u=Date.parse(new Date);o.equalTo("nousetime","<=",u)}i.stock_checked&&o.equalTo("stocktype","==",0),o.limit(h),o.skip(h*(p-1)),o.order("-"+i.checked_option),o.include("fristClass","stocks","secondClass"),o.find().then(function(o){var n=!0,c=!1,a=void 0;try{for(var r,i=o[Symbol.iterator]();!(n=(r=i.next()).done);n=!0){var u=r.value;u.reserve=u.reserve.toFixed(t.getStorageSync("setting")?t.getStorageSync("setting").show_float:0)}}catch(s){c=!0,a=s}finally{try{n||null==i.return||i.return()}finally{if(c)throw a}}e.productList=o,e.loading=!1})}}};e.default=S}).call(this,o("543d")["default"])},"28b9":function(t,e,o){"use strict";o.r(e);var n=o("7189"),c=o("66fc");for(var a in c)"default"!==a&&function(t){o.d(e,t,function(){return c[t]})}(a);o("58a0");var r=o("2877"),i=Object(r["a"])(c["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},"58a0":function(t,e,o){"use strict";var n=o("6c5a"),c=o.n(n);c.a},"66fc":function(t,e,o){"use strict";o.r(e);var n=o("1543"),c=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);e["default"]=c.a},"6c5a":function(t,e,o){},7189:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.showOptions=!1})},c=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return c})},d9b7:function(t,e,o){"use strict";(function(t){o("a961"),o("921b");n(o("66fd"));var e=n(o("28b9"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])}},[["d9b7","common/runtime","common/vendor"]]]);