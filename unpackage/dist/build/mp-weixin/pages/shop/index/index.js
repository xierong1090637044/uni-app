(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop/index/index"],{1729:function(e,r,t){"use strict";t.r(r);var o=t("b1ad"),n=t("6750");for(var i in n)"default"!==i&&function(e){t.d(r,e,(function(){return n[e]}))}(i);t("d25d");var s,d=t("f0c5"),u=Object(d["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);r["default"]=u.exports},3213:function(e,r,t){"use strict";(function(e){t("d34b"),t("921b");o(t("66fd"));var r=o(t("1729"));function o(e){return e&&e.__esModule?e:{default:e}}e(r.default)}).call(this,t("543d")["createPage"])},"3c71":function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o,n,i=s(t("4515"));function s(e){return e&&e.__esModule?e:{default:e}}function d(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=u(e))){var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,n,i=!0,s=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){s=!0,n=e},f:function(){try{i||null==o.return||o.return()}finally{if(s)throw n}}}}function u(e,r){if(e){if("string"===typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}var c={data:function(){return{goodsList:[],loadingText:"正在加载...",headerTop:"0px",headerPosition:"fixed",orderbyList:[{text:"销量",selected:!0,orderbyicon:!1,orderby:0,orderDesc:"sellNum"},{text:"价格",selected:!1,orderbyicon:["sheng","jiang"],orderby:0,orderDesc:"retailPrice"}],orderby:"sheng",page_size:20,page_num:1,orderType:"sellNum",userId:""}},onLoad:function(r){console.log(r.cid),o=this,r.userId&&(n=r.userId,o.userId=r.userId,o.get_productList(),e.setNavigationBarTitle({title:r.nickName+"的产品列表"}))},onPageScroll:function(e){e.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onReachBottom:function(){o.loadingText="正在加载中...",o.page_num+=1,o.get_productList()},methods:{get_productList:function(){var e=i.default.Query("Goods");e.equalTo("userId","==",n),e.equalTo("order","!=",1),e.equalTo("status","!=",-1),e.order(o.orderType),e.limit(o.page_size),e.select("goodsIcon","goodsName","retailPrice","sellNum","reserve"),e.skip(o.page_size*(o.page_num-1)),e.find().then((function(e){console.log(e);var r,t=d(e);try{for(t.s();!(r=t.n()).done;){var n=r.value;n.reserve=n.reserve.toFixed(1)}}catch(i){t.e(i)}finally{t.f()}o.goodsList=o.goodsList.concat(e)}))},toGoods:function(r){console.log(r),e.showToast({title:"敬请期待",icon:"none"})},select:function(e){o.goodsList=[],o.page_size=20,o.page_num=1,this.orderbyList[e].orderbyicon?(0==this.orderbyList[e].orderby?o.orderType="-"+this.orderbyList[e].orderDesc:o.orderType=this.orderbyList[e].orderDesc,this.orderbyList[e].selected&&(0==this.orderbyList[e].orderby?o.orderType=this.orderbyList[e].orderDesc:o.orderType="-"+this.orderbyList[e].orderDesc,this.orderbyList[e].orderby=0==this.orderbyList[e].orderby?1:0)):o.orderType=this.orderbyList[e].orderDesc,this.orderbyList[e].selected=!0;for(var r=this.orderbyList.length,t=0;t<r;t++)t!=e&&(this.orderbyList[t].selected=!1);o.get_productList()}}};r.default=c}).call(this,t("543d")["default"])},"4e21":function(e,r,t){},6750:function(e,r,t){"use strict";t.r(r);var o=t("3c71"),n=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(r,e,(function(){return o[e]}))}(i);r["default"]=n.a},b1ad:function(e,r,t){"use strict";var o,n=function(){var e=this,r=e.$createElement;e._self._c},i=[];t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return i})),t.d(r,"a",(function(){return o}))},d25d:function(e,r,t){"use strict";var o=t("4e21"),n=t.n(o);n.a}},[["3213","common/runtime","common/vendor"]]]);