(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/EnteringHistory/productDet/productEnter/productEnter"],{"21c6":function(t,n,e){"use strict";var r=e("bffb"),o=e.n(r);o.a},"570a":function(t,n,e){"use strict";var r,o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return r})},6882:function(t,n,e){"use strict";(function(t){e("d510"),e("921b");r(e("66fd"));var n=r(e("b511"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},a2fa:function(t,n,e){"use strict";e.r(n);var r=e("c055"),o=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);n["default"]=o.a},b511:function(t,n,e){"use strict";e.r(n);var r=e("570a"),o=e("a2fa");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("21c6");var i,c=e("f0c5"),a=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);n["default"]=a.exports},bffb:function(t,n,e){},c055:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;r(e("9546"));function r(t){return t&&t.__esModule?t:{default:t}}var o,u=function(){return e.e("components/uni-card/uni-card").then(e.bind(null,"8975"))},i=function(){return e.e("components/uni-number-box/uni-number-box").then(e.bind(null,"55f9"))},c=function(){return e.e("components/kilvn-fa-icon/fa-icon").then(e.bind(null,"4d52"))},a=function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"96bd"))},s=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"3628"))},d={components:{unicard:u,faIcon:c,uninumberbox:i,uniNavBar:a,uniIcon:s},data:function(){return{id:"",products:[],user:t.getStorageSync("user")}},onLoad:function(n){o=this,o.id=n.id,t.removeStorageSync("is_option"),t.getStorageSync("uid"),this.products=[],this.products=t.getStorageSync("products");var e=!0,r=!1,u=void 0;try{for(var i,c=this.products[Symbol.iterator]();!(e=(i=c.next()).done);e=!0){var a=i.value;if(a.models){var s=0,d=!0,l=!1,f=void 0;try{for(var p,m=a.models[Symbol.iterator]();!(d=(p=m.next()).done);d=!0){var h=p.value;h.num=0,s+=1}}catch(b){l=!0,f=b}finally{try{d||null==m.return||m.return()}finally{if(l)throw f}}a.num=s,a.selectd_model=a.models,a.selected_model=a.models}}}catch(b){r=!0,u=b}finally{try{e||null==c.return||c.return()}finally{if(r)throw u}}this.products=this.products},methods:{confrim_this:function(){t.navigateTo({url:"/pages/report/EnteringHistory/productDet/productEnter/enterDetail/enterDetail?id="+o.id})},handleNumChange:function(n,e){this.products[e].num=Number(n),this.products[e].total_money=Number(n)*Number(this.products[e].modify_retailPrice),this.products[e].really_total_money=Number(n)*Number(this.products[e].costPrice),t.setStorageSync("products",this.products)},handleModelNumChange:function(n,e,r,o){o.num=Number(n),this.products[e].selected_model[r]=o;var u=0,i=!0,c=!1,a=void 0;try{for(var s,d=this.products[e].selected_model[Symbol.iterator]();!(i=(s=d.next()).done);i=!0){var l=s.value;u+=l.num}}catch(f){c=!0,a=f}finally{try{i||null==d.return||d.return()}finally{if(c)throw a}}this.products[e].num=u,this.products[e].total_money=u*Number(this.products[e].modify_retailPrice),this.products[e].really_total_money=u*Number(this.products[e].costPrice),t.setStorageSync("products",this.products)},handleDel:function(n){console.log(n),1==this.products.length?t.showToast({title:"最少选择一个产品",icon:"none"}):(this.products.splice(n,1),t.setStorageSync("products",this.products))},getrealprice:function(n,e){this.products[e].modify_retailPrice=n.target.value,this.products[e].total_money=this.products[e].num*Number(n.target.value),t.setStorageSync("products",this.products)}}};n.default=d}).call(this,e("543d")["default"])}},[["6882","common/runtime","common/vendor"]]]);