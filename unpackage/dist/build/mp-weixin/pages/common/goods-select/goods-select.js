(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/goods-select/goods-select"],{"10b1":function(t,e,o){"use strict";o.r(e);var n=o("c3d1"),r=o("bfcd");for(var i in r)"default"!==i&&function(t){o.d(e,t,function(){return r[t]})}(i);o("d431");var c=o("2877"),a=Object(c["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=a.exports},"29f2":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(o("c74b"));function r(t){return t&&t.__esModule?t:{default:t}}var i,c,a=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"0914"))},u=function(){return o.e("components/Loading/index").then(o.bind(null,"524a"))},s=function(){return o.e("components/uni-nav-bar/uni-nav-bar").then(o.bind(null,"b92d"))},l=function(){return o.e("components/uni-icon/uni-icon").then(o.bind(null,"5753"))},d=function(){return o.e("components/uni-pagination/uni-pagination").then(o.bind(null,"2bfc"))},g=[],f=[],y=[],h="",_=30,p=1,v=1,m={components:{loading:u,uniNavBar:s,faIcon:a,uniIcon:l,uniPagination:d},data:function(){return{identity:t.getStorageSync("identity"),selectd_model:"",models_good:"",models_good_key:"",page_num:1,search_text:"",url:null,showOptions:!1,loading:!0,productList:null,checked_option:"createdAt",category:"",stock:"",type:"",is_selected:!1}},onLoad:function(e){c=this,this.handle_data(),"entering"==e.type?this.url="../good_confrim/good_confrim":"delivery"==e.type?this.url="../goods_out/goods_out":"returing"==e.type?this.url="../good_return/good_return":"counting"==e.type?this.url="../good_count/good_count":"allocation"==e.type&&(this.url="../good_allocation/good_allocation"),this.type=e.type,i=t.getStorageSync("uid"),c.get_productList()},onShow:function(){t.getStorageSync("category")&&(c.showOptions=!0,c.category=t.getStorageSync("category")),t.getStorageSync("warehouse")&&(c.showOptions=!0,c.stock=t.getStorageSync("warehouse")[t.getStorageSync("warehouse").length-1].stock),t.getStorageSync("is_option")&&(h="",_=30,v=1,y=[],g=[],f=[],this.productList=[],c.get_productList())},onUnload:function(){h="",_=30,v=1,y=[],g=[],f=[],t.removeStorageSync("is_option")},methods:{hide_mask:function(){c.models_good=""},reserveTo:function(){t.showModal({title:"提示（暂时只支持500条）",content:"是否将所有库存都归0，归0后不可恢复",success:function(t){if(t.confirm){var e=n.default.Query("Goods");e.equalTo("userId","==",i),e.equalTo("status","!=",-1),e.limit(500),e.find().then(function(t){t.set("reserve",0),t.saveAll().then(function(t){console.log(t,"ok")}).catch(function(t){console.log(t)})})}else t.cancel&&console.log("用户点击取消")}})},change_page:function(t){p=t.current,h&&p>1&&(v+=1),c.get_productList()},shaixuan:function(){c.showOptions=!0},confirm:function(t){h=t.detail.value,c.search_text=t.detail.value,c.page_num=1,p=1,v+=1,c.get_productList()},confrim_this:function(){this.go_goodsconfrim()},option_reset:function(){this.productList=[],t.removeStorageSync("category"),t.removeStorageSync("warehouse"),c.category="",c.stock="",c.showOptions=!1,c.get_productList()},option_confrim:function(){t.getStorageSync("category")&&(v+=1,c.is_selected=!0,c.category=t.getStorageSync("category")),t.getStorageSync("warehouse")&&(v+=1,c.is_selected=!0,c.stock=t.getStorageSync("warehouse")[t.getStorageSync("warehouse").length-1].stock),c.showOptions=!1,c.get_productList()},selectd:function(t){_=30,c.checked_option=t,c.get_productList()},radioChange:function(t){h||c.is_selected?f[v-1]=t.detail.value:g[p-1]=t.detail.value,y=f.concat(g),y=y.reduce(function(t,e){return t.concat(e)}),y=Array.from(new Set(y))},go_goodsconfrim:function(){console.log(y),0==y.length?t.showToast({title:"请选择产品",icon:"none"}):"allocation"==this.type?this.stock?this.confrim_next():t.showToast({title:"请在筛选中选择调拨的仓库",icon:"none"}):this.confrim_next()},confrim_next:function(){var e=0;if("entering"==this.type){var o=!0,n=!1,r=void 0;try{for(var i,c=y[Symbol.iterator]();!(o=(i=c.next()).done);o=!0){var a=i.value;y[e]="object"==typeof a?a:JSON.parse(a),y[e].num=1,y[e].total_money=1*y[e].costPrice,y[e].really_total_money=1*y[e].costPrice,y[e].modify_retailPrice=y[e].costPrice,e+=1}}catch(h){n=!0,r=h}finally{try{o||null==c.return||c.return()}finally{if(n)throw r}}}else{var u=!0,s=!1,l=void 0;try{for(var d,g=y[Symbol.iterator]();!(u=(d=g.next()).done);u=!0){var f=d.value;y[e]="object"==typeof f?f:JSON.parse(f),y[e].num=1,y[e].total_money=1*y[e].retailPrice,y[e].really_total_money=1*y[e].retailPrice,y[e].modify_retailPrice=y[e].retailPrice,e+=1}}catch(h){s=!0,l=h}finally{try{u||null==g.return||g.return()}finally{if(s)throw l}}}t.setStorageSync("products",y),t.navigateTo({url:this.url})},get_productList:function(){var e=this;c.productList=[];var o=n.default.Query("Goods");o.include("stocks"),o.equalTo("userId","==",i),o.equalTo("stocks","==",c.stock.objectId),o.equalTo("status","!=",-1),1==c.category.type?o.equalTo("goodsClass","==",c.category.objectId):o.equalTo("second_class","==",c.category.objectId);var r=o.equalTo("goodsName","==",{$regex:h+".*"}),a=o.equalTo("packageContent","==",{$regex:h+".*"});o.or(r,a),o.limit(_),o.skip(_*(p-1)),o.order("-"+c.checked_option),o.find().then(function(o){console.log(y);var n=0;if(y.length>=1&&0==c.showOptions&&0==c.is_selected&&""==c.search_text){var r=!0,i=!1,a=void 0;try{for(var u,s=y[Symbol.iterator]();!(r=(u=s.next()).done);r=!0){var l=u.value,d=!0,g=!1,f=void 0;try{for(var h,_=o[Symbol.iterator]();!(d=(h=_.next()).done);d=!0){var p=h.value;p.objectId==("object"==typeof l?l.objectId:JSON.parse(l).objectId)&&(p.checked=!0,p.key=n,p.reserve=p.reserve.toFixed(t.getStorageSync("setting").show_float),n+=1)}}catch(x){g=!0,f=x}finally{try{d||null==_.return||_.return()}finally{if(g)throw f}}}}catch(x){i=!0,a=x}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}else{var v=!0,m=!1,S=void 0;try{for(var b,w=o[Symbol.iterator]();!(v=(b=w.next()).done);v=!0){var k=b.value;k.key=n,k.reserve=k.reserve.toFixed(t.getStorageSync("setting").show_float),n+=1}}catch(x){m=!0,S=x}finally{try{v||null==w.return||w.return()}finally{if(m)throw S}}}e.productList=o,e.loading=!1})},handle_data:function(){t.removeStorageSync("products"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("shop"),h="",_=30,v=1}}};e.default=m}).call(this,o("543d")["default"])},"82b8":function(t,e,o){},b5e1:function(t,e,o){"use strict";(function(t){o("a961"),o("921b");n(o("66fd"));var e=n(o("10b1"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},bfcd:function(t,e,o){"use strict";o.r(e);var n=o("29f2"),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=r.a},c3d1:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=(t._self._c,t.__map(t.productList,function(e,o){var n=JSON.stringify(e);return{$orig:t.__get_orig(e),g0:n}}));t.$mp.data=Object.assign({},{$root:{l0:o}})},r=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return r})},d431:function(t,e,o){"use strict";var n=o("82b8"),r=o.n(n);r.a}},[["b5e1","common/runtime","common/vendor"]]]);