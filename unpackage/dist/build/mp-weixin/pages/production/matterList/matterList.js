(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/production/matterList/matterList"],{1543:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("c74b")),c=a(n("df06"));function a(t){return t&&t.__esModule?t:{default:t}}var r,i,u=function(){return n.e("components/kilvn-fa-icon/fa-icon").then(n.bind(null,"0914"))},s=function(){return n.e("components/Loading/index").then(n.bind(null,"524a"))},l=function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"b92d"))},d=function(){return n.e("components/uni-icon/uni-icon").then(n.bind(null,"5753"))},g=function(){return n.e("components/uni-pagination/uni-pagination").then(n.bind(null,"2bfc"))},f="",h=30,p=1,S={components:{loading:s,uniNavBar:l,faIcon:u,uniPagination:g,uniIcon:d},data:function(){return{page_num:1,showOptions:!1,loading:!0,productList:null,checked_option:"createdAt",category:"",stock:"",checked:!1,stock_checked:!1,search_text:""}},onLoad:function(e){i=this,t.removeStorageSync("category"),t.removeStorageSync("warehouse"),r=t.getStorageSync("uid"),e.search_text&&(i.search_text=e.search_text,f=e.search_text),i.get_productList()},onShow:function(){this.page_num=p,t.removeStorageSync("now_product"),t.getStorageSync("category")&&(i.showOptions=!0,i.category=t.getStorageSync("category")),t.getStorageSync("warehouse")&&(i.showOptions=!0,i.stock=t.getStorageSync("warehouse")[t.getStorageSync("warehouse").length-1].stock),t.getStorageSync("is_add")&&i.get_productList()},onUnload:function(){c.default.handleData(),f="",h=50,t.removeStorageSync("is_add")},methods:{priviewImg:function(e){t.previewImage({current:e,urls:[e]})},change_page:function(t){p=t.current,i.get_productList()},change_timestatus:function(t){console.log(t),i.checked=t.detail.value},change_stocktatus:function(t){console.log(t),i.stock_checked=t.detail.value},input_confirm:function(t){console.log(t),f=t.detail.value,i.get_productList()},shaixuan:function(){i.showOptions=!0},goto_add:function(){var e=t.getStorageSync("user"),n=t.getStorageSync("identity");e.is_vip||i.productList.length<30?t.navigateTo({url:"../matterAdd/matterAdd"}):t.showModal({title:"提示",content:"非会员最多上传30件物料",confirmText:"充值会员",success:function(e){e.confirm?1==n?t.navigateTo({url:"/pages/mine/vip/vip"}):t.showToast({title:"员工不能充值",icon:"none"}):e.cancel&&console.log("用户点击取消")}})},option_reset:function(){t.removeStorageSync("category"),t.removeStorageSync("warehouse"),i.stock_checked=!1,i.checked=!1,i.category="",i.stock="",i.showOptions=!1,i.get_productList()},option_confrim:function(){t.getStorageSync("category")&&(i.category=t.getStorageSync("category")),t.getStorageSync("warehouse")&&(i.stock=t.getStorageSync("warehouse")[t.getStorageSync("warehouse").length-1].stock),i.showOptions=!1,i.get_productList()},selectd:function(t){h=50,i.checked_option=t,i.get_productList()},goDetail:function(e){console.log(e),t.setStorageSync("now_product",e),t.navigateTo({url:"../matterDet/matterDet"})},get_productList:function(){var e=this,n=o.default.Query("Matters");n.equalTo("userId","==",r),n.equalTo("stocks","==",i.stock.objectId),n.equalTo("status","!=",-1),i.stock||n.equalTo("accessory","!=",!0),1==i.category.type?n.equalTo("fristClass","==",i.category.objectId):n.equalTo("secondClass","==",i.category.objectId);var c=n.equalTo("goodsName","==",{$regex:f+".*"}),a=n.equalTo("packageContent","==",{$regex:f+".*"});if(n.or(c,a),i.checked){var u=Date.parse(new Date);n.equalTo("nousetime","<=",u)}i.stock_checked&&n.equalTo("stocktype","==",0),n.limit(h),n.skip(h*(p-1)),n.order("-"+i.checked_option),n.include("fristClass","stocks","secondClass"),n.find().then(function(n){var o=!0,c=!1,a=void 0;try{for(var r,i=n[Symbol.iterator]();!(o=(r=i.next()).done);o=!0){var u=r.value;u.reserve=u.reserve.toFixed(t.getStorageSync("setting")?t.getStorageSync("setting").show_float:0)}}catch(s){c=!0,a=s}finally{try{o||null==i.return||i.return()}finally{if(c)throw a}}e.productList=n,e.loading=!1})}}};e.default=S}).call(this,n("543d")["default"])},"28b9":function(t,e,n){"use strict";n.r(e);var o=n("db77"),c=n("66fc");for(var a in c)"default"!==a&&function(t){n.d(e,t,function(){return c[t]})}(a);n("58a0");var r=n("2877"),i=Object(r["a"])(c["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},"58a0":function(t,e,n){"use strict";var o=n("6c5a"),c=n.n(o);c.a},"66fc":function(t,e,n){"use strict";n.r(e);var o=n("1543"),c=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=c.a},"6c5a":function(t,e,n){},d9b7:function(t,e,n){"use strict";(function(t){n("a961"),n("921b");o(n("66fd"));var e=o(n("28b9"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},db77:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return c})}},[["d9b7","common/runtime","common/vendor"]]]);