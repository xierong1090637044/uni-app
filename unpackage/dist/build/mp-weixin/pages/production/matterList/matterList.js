(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/production/matterList/matterList"],{"31dd":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("9546")),c=r(n("7fd5"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=i(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c,r=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return r=t.done,t},e:function(t){a=!0,c=t},f:function(){try{r||null==o.return||o.return()}finally{if(a)throw c}}}}function i(t,e){if(t){if("string"===typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var s,l,d=function(){n.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(n("4d52"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/Loading/index").then(function(){return resolve(n("120a"))}.bind(null,n)).catch(n.oe)},g=function(){n.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(n("96bd"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/uni-icon/uni-icon").then(function(){return resolve(n("3628"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/uni-pagination/uni-pagination").then(function(){return resolve(n("0d6a"))}.bind(null,n)).catch(n.oe)},y="",v=30,S=1,m={components:{loading:f,uniNavBar:g,faIcon:d,uniPagination:p,uniIcon:h},data:function(){return{page_num:1,showOptions:!1,loading:!0,productList:null,checked_option:"createdAt",category:"",stock:"",checked:!1,stock_checked:!1,search_text:""}},onLoad:function(e){l=this,t.removeStorageSync("category"),t.removeStorageSync("warehouse"),s=t.getStorageSync("uid"),e.search_text&&(l.search_text=e.search_text,y=e.search_text),l.get_productList()},onShow:function(){this.page_num=S,t.removeStorageSync("now_product"),t.getStorageSync("category")&&(l.showOptions=!0,l.category=t.getStorageSync("category")),t.getStorageSync("warehouse")&&(l.showOptions=!0,l.stock=t.getStorageSync("warehouse")[t.getStorageSync("warehouse").length-1].stock),t.getStorageSync("is_add")&&l.get_productList()},onUnload:function(){c.default.handleData(),y="",v=50,t.removeStorageSync("is_add")},methods:{priviewImg:function(e){t.previewImage({current:e,urls:[e]})},change_page:function(t){S=t.current,l.get_productList()},change_timestatus:function(t){console.log(t),l.checked=t.detail.value},change_stocktatus:function(t){console.log(t),l.stock_checked=t.detail.value},input_confirm:function(t){console.log(t),y=t.detail.value,l.get_productList()},shaixuan:function(){l.showOptions=!0},goto_add:function(){var e=t.getStorageSync("user");t.getStorageSync("identity");e.is_vip||l.productList.length<30?t.navigateTo({url:"../matterAdd/matterAdd"}):t.showModal({title:"提示",content:"暂未全部开放，敬请期待",confirmText:"确认",success:function(t){t.confirm?console.log("用户点击确定"):t.cancel&&console.log("用户点击取消")}})},option_reset:function(){t.removeStorageSync("category"),t.removeStorageSync("warehouse"),l.stock_checked=!1,l.checked=!1,l.category="",l.stock="",l.showOptions=!1,l.get_productList()},option_confrim:function(){t.getStorageSync("category")&&(l.category=t.getStorageSync("category")),t.getStorageSync("warehouse")&&(l.stock=t.getStorageSync("warehouse")[t.getStorageSync("warehouse").length-1].stock),l.showOptions=!1,l.get_productList()},selectd:function(t){v=50,l.checked_option=t,l.get_productList()},goDetail:function(e){console.log(e),t.setStorageSync("now_product",e),t.navigateTo({url:"../matterDet/matterDet"})},get_productList:function(){var e=this,n=o.default.Query("Matters");n.equalTo("userId","==",s),n.equalTo("stocks","==",l.stock.objectId),n.equalTo("status","!=",-1),l.stock||n.equalTo("accessory","!=",!0),1==l.category.type?n.equalTo("fristClass","==",l.category.objectId):n.equalTo("secondClass","==",l.category.objectId);var c=n.equalTo("goodsName","==",{$regex:y+".*"}),r=n.equalTo("packageContent","==",{$regex:y+".*"});if(n.or(c,r),l.checked){var i=Date.parse(new Date);n.equalTo("nousetime","<=",i)}l.stock_checked&&n.equalTo("stocktype","==",0),n.limit(v),n.skip(v*(S-1)),n.order("-"+l.checked_option),n.include("fristClass","stocks","secondClass"),n.find().then((function(n){var o,c=a(n);try{for(c.s();!(o=c.n()).done;){var r=o.value;r.reserve=r.reserve.toFixed(t.getStorageSync("setting")?t.getStorageSync("setting").show_float:0)}}catch(i){c.e(i)}finally{c.f()}e.productList=n,e.loading=!1}))}}};e.default=m}).call(this,n("543d")["default"])},"3bfe":function(t,e,n){"use strict";var o={"uni-nav-bar":function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"96bd"))},"uni-icon":function(){return n.e("components/uni-icon/uni-icon").then(n.bind(null,"3628"))},"uni-pagination":function(){return n.e("components/uni-pagination/uni-pagination").then(n.bind(null,"0d6a"))}},c=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.showOptions=!1})},r=[];n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}))},"868f":function(t,e,n){"use strict";var o=n("fecd"),c=n.n(o);c.a},"9a42":function(t,e,n){"use strict";(function(t){n("d510"),n("921b");o(n("66fd"));var e=o(n("e94c"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},bb4f:function(t,e,n){"use strict";n.r(e);var o=n("31dd"),c=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=c.a},e94c:function(t,e,n){"use strict";n.r(e);var o=n("3bfe"),c=n("bb4f");for(var r in c)"default"!==r&&function(t){n.d(e,t,(function(){return c[t]}))}(r);n("868f");var a,i=n("f0c5"),u=Object(i["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=u.exports},fecd:function(t,e,n){}},[["9a42","common/runtime","common/vendor"]]]);