(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/goods-select/goods-select"],{"40e7":function(o,e,t){"use strict";t.r(e);var n=t("53c1"),r=t("7514");for(var i in r)"default"!==i&&function(o){t.d(e,o,function(){return r[o]})}(i);t("f7ca");var a=t("2877"),c=Object(a["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},"53c1":function(o,e,t){"use strict";var n=function(){var o=this,e=o.$createElement,t=(o._self._c,o.__map(o.productList,function(e,t){var n=JSON.stringify(e);return{$orig:o.__get_orig(e),g0:n}})),n=o.__map(o.models_good.models,function(e,t){var n=JSON.stringify(e);return{$orig:o.__get_orig(e),g1:n}});o.$mp.data=Object.assign({},{$root:{l0:t,l1:n}})},r=[];t.d(e,"a",function(){return n}),t.d(e,"b",function(){return r})},7514:function(o,e,t){"use strict";t.r(e);var n=t("b0bc"),r=t.n(n);for(var i in n)"default"!==i&&function(o){t.d(e,o,function(){return n[o]})}(i);e["default"]=r.a},"9afb":function(o,e,t){"use strict";(function(o){t("9511"),t("921b");n(t("66fd"));var e=n(t("40e7"));function n(o){return o&&o.__esModule?o:{default:o}}o(e.default)}).call(this,t("543d")["createPage"])},b0bc:function(o,e,t){"use strict";(function(o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(t("b739"));function r(o){return o&&o.__esModule?o:{default:o}}var i,a,c=function(){return t.e("components/kilvn-fa-icon/fa-icon").then(t.bind(null,"3636"))},l=function(){return t.e("components/Loading/index").then(t.bind(null,"0190"))},s=function(){return t.e("components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"f190"))},u=function(){return t.e("components/uni-icon/uni-icon").then(t.bind(null,"3751"))},d=function(){return t.e("components/uni-pagination/uni-pagination").then(t.bind(null,"51ea"))},g=[],f=[],y=[],_="",h=30,m=1,p=1,v={components:{loading:l,uniNavBar:s,faIcon:c,uniIcon:u,uniPagination:d},data:function(){return{selectd_model:"",models_good:"",models_good_key:"",page_num:1,search_text:"",url:null,showOptions:!1,loading:!0,productList:null,checked_option:"createdAt",category:"",stock:"",type:"",is_selected:!1}},onLoad:function(e){a=this,this.handle_data(),"entering"==e.type?this.url="../good_confrim/good_confrim":"delivery"==e.type?this.url="../goods_out/goods_out":"returing"==e.type?this.url="../good_return/good_return":"counting"==e.type?this.url="../good_count/good_count":"allocation"==e.type&&(this.url="../good_allocation/good_allocation"),this.type=e.type,i=o.getStorageSync("uid"),a.get_productList()},onShow:function(){o.getStorageSync("category")&&(a.showOptions=!0,a.category=o.getStorageSync("category")),o.getStorageSync("warehouse")&&(a.showOptions=!0,a.stock=o.getStorageSync("warehouse")[o.getStorageSync("warehouse").length-1].stock),o.getStorageSync("is_option")&&(_="",h=30,p=1,y=[],g=[],f=[],this.productList=[],a.get_productList())},onUnload:function(){_="",h=30,p=1,y=[],g=[],f=[],o.removeStorageSync("is_option")},methods:{hide_mask:function(){a.models_good=""},change_page:function(o){m=o.current,_&&m>1&&(p+=1),a.get_productList()},shaixuan:function(){a.showOptions=!0},confirm:function(o){_=o.detail.value,a.search_text=o.detail.value,a.page_num=1,m=1,p+=1,a.get_productList()},confrim_this:function(){this.go_goodsconfrim()},option_reset:function(){this.productList=[],o.removeStorageSync("category"),o.removeStorageSync("warehouse"),a.category="",a.stock="",a.showOptions=!1,a.get_productList()},option_confrim:function(){o.getStorageSync("category")&&(p+=1,a.is_selected=!0,a.category=o.getStorageSync("category")),o.getStorageSync("warehouse")&&(p+=1,a.is_selected=!0,a.stock=o.getStorageSync("warehouse")[o.getStorageSync("warehouse").length-1].stock),a.showOptions=!1,a.get_productList()},selectd:function(o){h=30,a.checked_option=o,a.get_productList()},modelChange:function(o){a.selectd_model=o.detail.value,console.log(o.detail.value)},confrim_thismodel:function(){if(a.selectd_model){console.log(a.models_good);var e=a.models_good.key;y.splice(a.models_good_key-1,1),a.models_good.is_selected=!0,a.models_good.selectd_model=JSON.stringify(a.selectd_model),y.push(JSON.stringify(a.models_good)),a.productList.splice(e,1,a.models_good),a.models_good=""}else o.showToast({title:"请选择规格",icon:"none"})},radioChange:function(o){var e=0;if(_||a.is_selected?f[p-1]=o.detail.value:g[m-1]=o.detail.value,y=f.concat(g),y=y.reduce(function(o,e){return o.concat(e)}),y=Array.from(new Set(y)),"allocation"!=this.type){var t=!0,n=!1,r=void 0;try{for(var i,c=y[Symbol.iterator]();!(t=(i=c.next()).done);t=!0){var l=i.value;l="object"==typeof l?l:JSON.parse(l),e+=1,l.models&&l.models.length>0&&1!=l.is_selected&&(a.models_good=l,a.models_good_key=e)}}catch(s){n=!0,r=s}finally{try{t||null==c.return||c.return()}finally{if(n)throw r}}}},go_goodsconfrim:function(){console.log(y),0==y.length?o.showToast({title:"请选择产品",icon:"none"}):"allocation"==this.type?this.stock?this.confrim_next():o.showToast({title:"请在筛选中选择调拨的仓库",icon:"none"}):this.confrim_next()},confrim_next:function(){var e=0;if("entering"==this.type){var t=!0,n=!1,r=void 0;try{for(var i,a=y[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var c=i.value;y[e]="object"==typeof c?c:JSON.parse(c),y[e].num=1,y[e].total_money=1*y[e].costPrice,y[e].really_total_money=1*y[e].costPrice,y[e].modify_retailPrice=y[e].costPrice,e+=1}}catch(_){n=!0,r=_}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}else{var l=!0,s=!1,u=void 0;try{for(var d,g=y[Symbol.iterator]();!(l=(d=g.next()).done);l=!0){var f=d.value;y[e]="object"==typeof f?f:JSON.parse(f),y[e].num=1,y[e].total_money=1*y[e].retailPrice,y[e].really_total_money=1*y[e].retailPrice,y[e].modify_retailPrice=y[e].retailPrice,e+=1}}catch(_){s=!0,u=_}finally{try{l||null==g.return||g.return()}finally{if(s)throw u}}}o.setStorageSync("products",y),o.navigateTo({url:this.url})},get_productList:function(){var o=this;a.productList=[];var e=n.default.Query("Goods");e.include("stocks"),e.equalTo("userId","==",i),e.equalTo("stocks","==",a.stock.objectId),e.equalTo("status","!=",-1),1==a.category.type?e.equalTo("goodsClass","==",a.category.objectId):e.equalTo("second_class","==",a.category.objectId);var t=e.equalTo("goodsName","==",{$regex:_+".*"}),r=e.equalTo("packageContent","==",{$regex:_+".*"});e.or(t,r),e.limit(h),e.skip(h*(m-1)),e.order("-"+a.checked_option),e.find().then(function(e){console.log(y);var t=0;if(y.length>=1&&0==a.showOptions&&0==a.is_selected&&""==a.search_text){var n=!0,r=!1,i=void 0;try{for(var c,l=y[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var s=c.value,u=!0,d=!1,g=void 0;try{for(var f,_=e[Symbol.iterator]();!(u=(f=_.next()).done);u=!0){var h=f.value;h.objectId==("object"==typeof s?s.objectId:JSON.parse(s).objectId)&&(h.checked=!0,h.key=t,t+=1)}}catch(k){d=!0,g=k}finally{try{u||null==_.return||_.return()}finally{if(d)throw g}}}}catch(k){r=!0,i=k}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}}else{var m=!0,p=!1,v=void 0;try{for(var S,b=e[Symbol.iterator]();!(m=(S=b.next()).done);m=!0){var w=S.value;w.key=t,t+=1}}catch(k){p=!0,v=k}finally{try{m||null==b.return||b.return()}finally{if(p)throw v}}}o.productList=e,o.loading=!1})},handle_data:function(){o.removeStorageSync("products"),o.removeStorageSync("category"),o.removeStorageSync("warehouse"),o.removeStorageSync("out_warehouse"),o.removeStorageSync("shop"),_="",h=30,p=1}}};e.default=v}).call(this,t("543d")["default"])},d0e1:function(o,e,t){},f7ca:function(o,e,t){"use strict";var n=t("d0e1"),r=t.n(n);r.a}},[["9afb","common/runtime","common/vendor"]]]);