;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/stockGoods"],{"60c8":function(e,t,o){"use strict";var n={"uni-pagination":function(){return o.e("components/uni-pagination/uni-pagination").then(o.bind(null,"0d6a"))}},r=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.showOptions=!1},e.e1=function(t){e.showOrder=!1})},c=[];o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return c})),o.d(t,"a",(function(){return n}))},"9a8e":function(e,t,o){"use strict";var n=o("e9cf"),r=o.n(n);r.a},"9f18":function(e,t,o){"use strict";o.r(t);var n=o("e2a3"),r=o.n(n);for(var c in n)"default"!==c&&function(e){o.d(t,e,(function(){return n[e]}))}(c);t["default"]=r.a},ca0f:function(e,t,o){"use strict";o.r(t);var n=o("60c8"),r=o("9f18");for(var c in r)"default"!==c&&function(e){o.d(t,e,(function(){return r[e]}))}(c);o("9a8e");var a,i=o("f0c5"),s=Object(i["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);t["default"]=s.exports},e2a3:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(o("9546"));r(o("7fd5"));function r(e){return e&&e.__esModule?e:{default:e}}function c(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=a(e))){var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,c=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw r}}}}function a(e,t){if(e){if("string"===typeof e)return i(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var s,u,d=function(){o.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(o("4d52"))}.bind(null,o)).catch(o.oe)},l=function(){o.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(o("96bd"))}.bind(null,o)).catch(o.oe)},g=function(){o.e("components/uni-icon/uni-icon").then(function(){return resolve(o("3628"))}.bind(null,o)).catch(o.oe)},f=function(){o.e("components/uni-pagination/uni-pagination").then(function(){return resolve(o("0d6a"))}.bind(null,o)).catch(o.oe)},h={props:{thisStock:{},thisClass:{}},components:{uniNavBar:l,faIcon:d,uniPagination:f,uniIcon:g},data:function(){return{page_num:1,page_size:30,showOrder:!1,showOptions:!1,isPriviewImg:!1,productList:null,search_text:"",user:e.getStorageSync("user"),headerSelection:{goodsClass:"",stocks:"",order:{order:"-createdAt"},options:""},orders:[{desc:"库存数量",notice:"从高到低",order:"-reserve",checked:!1},{desc:"库存数量",notice:"从低到高",order:"reserve",checked:!1},{desc:"创建日期",notice:"最新",order:"-createdAt",checked:!0},{desc:"创建日期",notice:"最晚",order:"createdAt",checked:!1},{desc:"名字",notice:"正序",order:"goodsName",checked:!1}]}},watch:{thisClass:function(t){u.page_num=1,u.headerSelection.goodsClass=e.getStorageSync("category")||"",u.get_productList()}},mounted:function(t){u=this,e.removeStorageSync("category"),s=e.getStorageSync("uid"),u.get_productList(),console.log(u.thisStock)},methods:{selectOrder:function(e){var t,o=c(u.orders);try{for(o.s();!(t=o.n()).done;){var n=t.value;n.checked=!1}}catch(r){o.e(r)}finally{o.f()}e.checked=!0,u.headerSelection.order=e,u.get_productList()},priviewImg:function(t){u.isPriviewImg=!0,e.previewImage({current:t,urls:[t]})},change_page:function(e){u.page_num=e.current,u.get_productList()},change_timestatus:function(e){u.checked=e.detail.value},change_stocktatus:function(e){u.stock_checked=e.detail.value},input_confirm:function(e){u.search_text=e.detail.value,u.get_productList()},shaixuan:function(){u.showOptions=!0},option_reset:function(){e.removeStorageSync("category"),e.removeStorageSync("warehouse"),u.headerSelection={goodsClass:"",stocks:"",order:{order:"-createdAt"},options:""},u.orders=[{desc:"库存数量",notice:"从高到低",order:"-reserve",checked:!1},{desc:"库存数量",notice:"从低到高",order:"reserve",checked:!1},{desc:"创建日期",notice:"最新",order:"-createdAt",checked:!0},{desc:"创建日期",notice:"最晚",order:"createdAt",checked:!1},{desc:"名字",notice:"正序",order:"goodsName",checked:!1}],u.page_num=1,u.search_text="",u.get_productList()},option_confrim:function(){e.getStorageSync("category")&&(u.category=e.getStorageSync("category")),e.getStorageSync("warehouse")&&(u.stock=e.getStorageSync("warehouse")[e.getStorageSync("warehouse").length-1].stock),u.showOptions=!1,u.get_productList()},selectd:function(t){console.log(t),"goodsClass"==t?e.navigateTo({url:"/pages/manage/category/category?type=choose"}):"stocks"==t?e.navigateTo({url:"/pages/manage/warehouse/warehouse?type=choose"}):"order"==t?u.showOrder=!0:"options"==t&&(u.showOptions=!0),e.setStorageSync("isClickShaiXuan",!0)},goDetail:function(t){console.log(t),e.setStorageSync("now_product",t),0==t.order||1==t.order?e.navigateTo({url:"/pages/manage/good_det/Ngood_det?id="+t.header.objectId+"&type=false"}):e.showToast({icon:"none",title:"旧产品不支持跳转"})},get_productList:function(){var t=this;e.showLoading({title:"加载中..."});var o=n.default.Query("Goods");o.equalTo("userId","==",s),o.equalTo("status","!=",-1),o.equalTo("stocks","==",u.thisStock.objectId),1==u.headerSelection.goodsClass.type?o.equalTo("goodsClass","==",u.headerSelection.goodsClass.objectId):o.equalTo("second_class","==",u.headerSelection.goodsClass.objectId);var r=o.equalTo("goodsName","==",{$regex:u.search_text+".*"}),a=o.equalTo("packageContent","==",{$regex:u.search_text+".*"});o.or(r,a),o.limit(u.page_size),o.skip(u.page_size*(u.page_num-1)),o.order(u.headerSelection.order.order),o.include("goodsClass","stocks","second_class"),o.find().then((function(o){var n,r=c(o);try{for(r.s();!(n=r.n()).done;){var a=n.value;a.reserve=a.reserve.toFixed(e.getStorageSync("setting")?e.getStorageSync("setting").show_float:0),2==u.user.identity&&u.user.rights&&-1!=u.user.rights.othercurrent.indexOf("0")&&(a.costPrice=0)}}catch(i){r.e(i)}finally{r.f()}t.productList=o,e.hideLoading(),e.removeStorageSync("isClickShaiXuan")}))}}};t.default=h}).call(this,o("c11b")["default"])},e9cf:function(e,t,o){}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/stockGoods-create-component',
    {
        'components/stockGoods-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("ca0f"))
        })
    },
    [['components/stockGoods-create-component']]
]);