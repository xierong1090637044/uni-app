(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop/index/index"],{"10ad":function(e,r,t){},"142e":function(e,r,t){"use strict";t.r(r);var o=t("5811"),i=t.n(o);for(var n in o)"default"!==n&&function(e){t.d(r,e,function(){return o[e]})}(n);r["default"]=i.a},"1d84":function(e,r,t){"use strict";var o=t("10ad"),i=t.n(o);i.a},"4b8f":function(e,r,t){"use strict";(function(e){t("d510"),t("921b");o(t("66fd"));var r=o(t("f234a"));function o(e){return e&&e.__esModule?e:{default:e}}e(r.default)}).call(this,t("543d")["createPage"])},5811:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o,i,n=s(t("9546"));function s(e){return e&&e.__esModule?e:{default:e}}var d={data:function(){return{goodsList:[],loadingText:"正在加载...",headerTop:"0px",headerPosition:"fixed",orderbyList:[{text:"销量",selected:!0,orderbyicon:!1,orderby:0,orderDesc:"sellNum"},{text:"价格",selected:!1,orderbyicon:["sheng","jiang"],orderby:0,orderDesc:"retailPrice"}],orderby:"sheng",page_size:20,page_num:1,orderType:"sellNum"}},onLoad:function(r){console.log(r.cid),o=this,r.userId&&(i=r.userId,o.get_productList(),e.setNavigationBarTitle({title:r.nickName+"的产品列表"}))},onPageScroll:function(e){e.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onReachBottom:function(){o.loadingText="正在加载中...",o.page_num+=1,o.get_productList()},methods:{get_productList:function(){var e=n.default.Query("Goods");e.equalTo("userId","==",i),e.equalTo("order","!=",1),e.equalTo("status","!=",-1),e.order(o.orderType),e.limit(o.page_size),e.select("goodsIcon","goodsName","retailPrice","sellNum","reserve"),e.skip(o.page_size*(o.page_num-1)),e.find().then(function(e){console.log(e);var r=!0,t=!1,i=void 0;try{for(var n,s=e[Symbol.iterator]();!(r=(n=s.next()).done);r=!0){var d=n.value;d.reserve=d.reserve.toFixed(2)}}catch(a){t=!0,i=a}finally{try{r||null==s.return||s.return()}finally{if(t)throw i}}o.goodsList=o.goodsList.concat(e)})},toGoods:function(r){console.log(r),e.showToast({title:"敬请期待",icon:"none"})},select:function(e){o.goodsList=[],o.page_size=20,o.page_num=1,this.orderbyList[e].orderbyicon?(0==this.orderbyList[e].orderby?o.orderType="-"+this.orderbyList[e].orderDesc:o.orderType=this.orderbyList[e].orderDesc,this.orderbyList[e].selected&&(0==this.orderbyList[e].orderby?o.orderType=this.orderbyList[e].orderDesc:o.orderType="-"+this.orderbyList[e].orderDesc,this.orderbyList[e].orderby=0==this.orderbyList[e].orderby?1:0)):o.orderType=this.orderbyList[e].orderDesc,this.orderbyList[e].selected=!0;for(var r=this.orderbyList.length,t=0;t<r;t++)t!=e&&(this.orderbyList[t].selected=!1);o.get_productList()}}};r.default=d}).call(this,t("543d")["default"])},d550:function(e,r,t){"use strict";var o,i=function(){var e=this,r=e.$createElement;e._self._c},n=[];t.d(r,"b",function(){return i}),t.d(r,"c",function(){return n}),t.d(r,"a",function(){return o})},f234a:function(e,r,t){"use strict";t.r(r);var o=t("d550"),i=t("142e");for(var n in i)"default"!==n&&function(e){t.d(r,e,function(){return i[e]})}(n);t("1d84");var s,d=t("f0c5"),a=Object(d["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);r["default"]=a.exports}},[["4b8f","common/runtime","common/vendor"]]]);