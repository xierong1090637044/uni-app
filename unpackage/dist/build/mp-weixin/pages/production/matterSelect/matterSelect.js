(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/production/matterSelect/matterSelect"],{"336d":function(t,e,o){},"787c":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(o("c74b"));function r(t){return t&&t.__esModule?t:{default:t}}var a,i,c=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"0914"))},u=function(){return o.e("components/Loading/index").then(o.bind(null,"524a"))},s=function(){return o.e("components/uni-nav-bar/uni-nav-bar").then(o.bind(null,"b92d"))},l=function(){return o.e("components/uni-icon/uni-icon").then(o.bind(null,"5753"))},d=function(){return o.e("components/uni-pagination/uni-pagination").then(o.bind(null,"2bfc"))},g=[],f=[],y=[],h="",p=30,v=1,S=1,_={components:{loading:u,uniNavBar:s,faIcon:c,uniIcon:l,uniPagination:d},data:function(){return{identity:t.getStorageSync("identity"),selectd_model:"",models_good:"",models_good_key:"",page_num:1,search_text:"",url:null,showOptions:!1,loading:!0,productList:null,checked_option:"createdAt",category:"",stock:"",type:"",is_selected:!1}},onLoad:function(e){i=this,this.handle_data(),"entering"==e.type?this.url="../matterEnter/matterEnter?type=entering":"production"==e.type&&(this.url="../matterEnter/matterEnter?type=production&id="+e.id),this.type=e.type,a=t.getStorageSync("uid"),i.get_productList()},onShow:function(){t.getStorageSync("category")&&(i.showOptions=!0,i.category=t.getStorageSync("category")),t.getStorageSync("warehouse")&&(i.showOptions=!0,i.stock=t.getStorageSync("warehouse")[t.getStorageSync("warehouse").length-1].stock),t.getStorageSync("is_option")&&(h="",p=30,S=1,y=[],g=[],f=[],this.productList=[],i.get_productList())},onUnload:function(){h="",p=30,S=1,y=[],g=[],f=[],t.removeStorageSync("is_option")},methods:{hide_mask:function(){i.models_good=""},change_page:function(t){v=t.current,h&&v>1&&(S+=1),i.get_productList()},shaixuan:function(){i.showOptions=!0},confirm:function(t){h=t.detail.value,i.search_text=t.detail.value,i.page_num=1,v=1,S+=1,i.get_productList()},confrim_this:function(){this.go_goodsconfrim()},option_reset:function(){this.productList=[],t.removeStorageSync("category"),t.removeStorageSync("warehouse"),i.category="",i.stock="",i.showOptions=!1,i.get_productList()},option_confrim:function(){t.getStorageSync("category")&&(S+=1,i.is_selected=!0,i.category=t.getStorageSync("category")),t.getStorageSync("warehouse")&&(S+=1,i.is_selected=!0,i.stock=t.getStorageSync("warehouse")[t.getStorageSync("warehouse").length-1].stock),i.showOptions=!1,i.get_productList()},selectd:function(t){p=30,i.checked_option=t,i.get_productList()},radioChange:function(t){h||i.is_selected?f[S-1]=t.detail.value:g[v-1]=t.detail.value,y=f.concat(g),y=y.reduce(function(t,e){return t.concat(e)}),y=Array.from(new Set(y))},go_goodsconfrim:function(){console.log(y),0==y.length?t.showToast({title:"请选择物料",icon:"none"}):this.confrim_next()},confrim_next:function(){var e=0;if("entering"==this.type){var o=!0,n=!1,r=void 0;try{for(var a,i=y[Symbol.iterator]();!(o=(a=i.next()).done);o=!0){var c=a.value;y[e]="object"==typeof c?c:JSON.parse(c),y[e].num=1,y[e].total_money=1*y[e].costPrice,y[e].really_total_money=1*y[e].costPrice,y[e].modify_retailPrice=y[e].costPrice,e+=1}}catch(h){n=!0,r=h}finally{try{o||null==i.return||i.return()}finally{if(n)throw r}}}else{var u=!0,s=!1,l=void 0;try{for(var d,g=y[Symbol.iterator]();!(u=(d=g.next()).done);u=!0){var f=d.value;y[e]="object"==typeof f?f:JSON.parse(f),y[e].num=0,y[e].total_money=0*y[e].retailPrice,y[e].really_total_money=0*y[e].retailPrice,y[e].modify_retailPrice=y[e].retailPrice,e+=1}}catch(h){s=!0,l=h}finally{try{u||null==g.return||g.return()}finally{if(s)throw l}}}t.setStorageSync("products",y),t.navigateTo({url:this.url})},get_productList:function(){var e=this;i.productList=[];var o=n.default.Query("Matters");o.include("stocks"),o.equalTo("userId","==",a),o.equalTo("stocks","==",i.stock.objectId),o.equalTo("status","!=",-1),1==i.category.type?o.equalTo("fristClass","==",i.category.objectId):o.equalTo("secondClass","==",i.category.objectId);var r=o.equalTo("goodsName","==",{$regex:h+".*"}),c=o.equalTo("regNumber","==",{$regex:h+".*"});o.or(r,c),o.limit(p),o.skip(p*(v-1)),o.order("-"+i.checked_option),o.find().then(function(o){console.log(y);var n=0;if(y.length>=1&&0==i.showOptions&&0==i.is_selected&&""==i.search_text){var r=!0,a=!1,c=void 0;try{for(var u,s=y[Symbol.iterator]();!(r=(u=s.next()).done);r=!0){var l=u.value,d=!0,g=!1,f=void 0;try{for(var h,p=o[Symbol.iterator]();!(d=(h=p.next()).done);d=!0){var v=h.value;v.objectId==("object"==typeof l?l.objectId:JSON.parse(l).objectId)&&(v.checked=!0,v.key=n,v.reserve=v.reserve.toFixed(t.getStorageSync("setting")?t.getStorageSync("setting").show_float:0),n+=1)}}catch(x){g=!0,f=x}finally{try{d||null==p.return||p.return()}finally{if(g)throw f}}}}catch(x){a=!0,c=x}finally{try{r||null==s.return||s.return()}finally{if(a)throw c}}}else{var S=!0,_=!1,m=void 0;try{for(var b,w=o[Symbol.iterator]();!(S=(b=w.next()).done);S=!0){var k=b.value;k.key=n,k.reserve=k.reserve.toFixed(t.getStorageSync("setting")?t.getStorageSync("setting").show_float:0),n+=1}}catch(x){_=!0,m=x}finally{try{S||null==w.return||w.return()}finally{if(_)throw m}}}e.productList=o,e.loading=!1})},handle_data:function(){t.removeStorageSync("products"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("shop"),h="",p=30,S=1}}};e.default=_}).call(this,o("543d")["default"])},a5b0:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=(t._self._c,t.__map(t.productList,function(e,o){var n=JSON.stringify(e);return{$orig:t.__get_orig(e),g0:n}}));t._isMounted||(t.e0=function(e){t.showOptions=!1}),t.$mp.data=Object.assign({},{$root:{l0:o}})},r=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return r})},a876:function(t,e,o){"use strict";var n=o("336d"),r=o.n(n);r.a},bf07:function(t,e,o){"use strict";o.r(e);var n=o("787c"),r=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);e["default"]=r.a},ea15:function(t,e,o){"use strict";(function(t){o("a961"),o("921b");n(o("66fd"));var e=n(o("f6e7"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},f6e7:function(t,e,o){"use strict";o.r(e);var n=o("a5b0"),r=o("bf07");for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);o("a876");var i=o("2877"),c=Object(i["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports}},[["ea15","common/runtime","common/vendor"]]]);