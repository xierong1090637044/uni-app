(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/goods/goods"],{4404:function(e,t,o){"use strict";o.r(t);var n=o("e698"),c=o("50fc");for(var a in c)"default"!==a&&function(e){o.d(t,e,function(){return c[e]})}(a);o("64af");var r=o("2877"),i=Object(r["a"])(c["default"],n["a"],n["b"],!1,null,null,null);t["default"]=i.exports},"50fc":function(e,t,o){"use strict";o.r(t);var n=o("a112"),c=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t["default"]=c.a},"64af":function(e,t,o){"use strict";var n=o("fff5"),c=o.n(n);c.a},a112:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(o("c74b")),c=a(o("df06"));function a(e){return e&&e.__esModule?e:{default:e}}var r,i,u=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"0914"))},s=function(){return o.e("components/Loading/index").then(o.bind(null,"524a"))},d=function(){return o.e("components/uni-nav-bar/uni-nav-bar").then(o.bind(null,"b92d"))},g=function(){return o.e("components/uni-icon/uni-icon").then(o.bind(null,"5753"))},l=function(){return o.e("components/uni-pagination/uni-pagination").then(o.bind(null,"2bfc"))},f="",h=30,p=1,_={components:{loading:s,uniNavBar:d,faIcon:u,uniPagination:l,uniIcon:g},data:function(){return{page_num:1,showOptions:!1,loading:!0,productList:null,checked_option:"createdAt",category:"",stock:"",checked:!1,stock_checked:!1,search_text:""}},onLoad:function(t){i=this,e.removeStorageSync("category"),e.removeStorageSync("warehouse"),r=e.getStorageSync("uid"),t.search_text&&(i.search_text=t.search_text,f=t.search_text),i.get_productList()},onShow:function(){this.page_num=p,e.removeStorageSync("now_product"),e.getStorageSync("category")&&(i.showOptions=!0,i.category=e.getStorageSync("category")),e.getStorageSync("warehouse")&&(i.showOptions=!0,i.stock=e.getStorageSync("warehouse")[e.getStorageSync("warehouse").length-1].stock),e.getStorageSync("is_add")&&i.get_productList()},onUnload:function(){c.default.handleData(),f="",h=50,e.removeStorageSync("is_add")},methods:{priviewImg:function(t){e.previewImage({current:t,urls:[t]})},change_page:function(e){p=e.current,i.get_productList()},change_timestatus:function(e){console.log(e),i.checked=e.detail.value},change_stocktatus:function(e){console.log(e),i.stock_checked=e.detail.value},input_confirm:function(e){console.log(e),f=e.detail.value,i.get_productList()},shaixuan:function(){i.showOptions=!0},goto_add:function(){e.showActionSheet({itemList:["单产品上传","多仓库产品上传","多规格产品上传"],success:function(t){var o=e.getStorageSync("user"),n=e.getStorageSync("identity");o.is_vip||i.productList.length<30?0==t.tapIndex?e.navigateTo({url:"../good_add/good_add"}):1==t.tapIndex?e.navigateTo({url:"../goods_add/goods_add"}):2==t.tapIndex&&e.navigateTo({url:"../goods_add_MoreG/goods_add_MoreG"}):e.showModal({title:"提示",content:"非会员最多上传30件产品",confirmText:"充值会员",success:function(t){t.confirm?1==n?e.navigateTo({url:"/pages/mine/vip/vip"}):e.showToast({title:"员工不能充值",icon:"none"}):t.cancel&&console.log("用户点击取消")}})},fail:function(e){console.log(e.errMsg)}})},option_reset:function(){e.removeStorageSync("category"),e.removeStorageSync("warehouse"),i.stock_checked=!1,i.checked=!1,i.category="",i.stock="",i.showOptions=!1,i.get_productList()},option_confrim:function(){e.getStorageSync("category")&&(i.category=e.getStorageSync("category")),e.getStorageSync("warehouse")&&(i.stock=e.getStorageSync("warehouse")[e.getStorageSync("warehouse").length-1].stock),i.showOptions=!1,i.get_productList()},selectd:function(e){h=50,i.checked_option=e,i.get_productList()},goDetail:function(t){console.log(t),e.setStorageSync("now_product",t),e.navigateTo({url:"../good_det/good_det"})},get_productList:function(){var t=this,o=n.default.Query("Goods");o.equalTo("userId","==",r),o.equalTo("stocks","==",i.stock.objectId),o.equalTo("status","!=",-1),i.stock||o.equalTo("accessory","!=",!0),1==i.category.type?o.equalTo("goodsClass","==",i.category.objectId):o.equalTo("second_class","==",i.category.objectId);var c=o.equalTo("goodsName","==",{$regex:f+".*"}),a=o.equalTo("packageContent","==",{$regex:f+".*"});if(o.or(c,a),i.checked){var u=Date.parse(new Date);o.equalTo("nousetime","<=",u)}i.stock_checked&&o.equalTo("stocktype","==",0),o.limit(h),o.skip(h*(p-1)),o.order("-"+i.checked_option),o.include("goodsClass","stocks","second_class"),o.find().then(function(o){var n=!0,c=!1,a=void 0;try{for(var r,i=o[Symbol.iterator]();!(n=(r=i.next()).done);n=!0){var u=r.value;u.reserve=u.reserve.toFixed(e.getStorageSync("setting").show_float)}}catch(s){c=!0,a=s}finally{try{n||null==i.return||i.return()}finally{if(c)throw a}}t.productList=o,t.loading=!1})}}};t.default=_}).call(this,o("543d")["default"])},d1e1:function(e,t,o){"use strict";(function(e){o("a961"),o("921b");n(o("66fd"));var t=n(o("4404"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},e698:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},c=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return c})},fff5:function(e,t,o){}},[["d1e1","common/runtime","common/vendor"]]]);