(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/goods_out/goods_out"],{"0546":function(t,e,r){"use strict";r.r(e);var o=r("fd61"),n=r("30fc");for(var u in n)"default"!==u&&function(t){r.d(e,t,function(){return n[t]})}(u);r("b69e");var i=r("2877"),l=Object(i["a"])(n["default"],o["a"],o["b"],!1,null,null,null);e["default"]=l.exports},"30fc":function(t,e,r){"use strict";r.r(e);var o=r("fef5"),n=r.n(o);for(var u in o)"default"!==u&&function(t){r.d(e,t,function(){return o[t]})}(u);e["default"]=n.a},b69e:function(t,e,r){"use strict";var o=r("d9cb"),n=r.n(o);n.a},d9cb:function(t,e,r){},f32d:function(t,e,r){"use strict";(function(t){r("d510"),r("921b");o(r("66fd"));var e=o(r("0546"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("543d")["createPage"])},fd61:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=(t._self._c,t.__map(t.products,function(e,r){var o=t.__map(e.selectd_model,function(e,r){var o=Number(e.reserve);return{$orig:t.__get_orig(e),m0:o}}),n=Number(e.reserve);return{$orig:t.__get_orig(e),l0:o,m1:n}}));t.$mp.data=Object.assign({},{$root:{l1:r}})},n=[];r.d(e,"a",function(){return o}),r.d(e,"b",function(){return n})},fef5:function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(r("9546"));function n(t){return t&&t.__esModule?t:{default:t}}var u,i,l=function(){return r.e("components/uni-card/uni-card").then(r.bind(null,"8975"))},a=function(){return r.e("components/uni-number-box/uni-number-box").then(r.bind(null,"55f9"))},c=function(){return r.e("components/kilvn-fa-icon/fa-icon").then(r.bind(null,"4d52"))},d=function(){return r.e("components/uni-nav-bar/uni-nav-bar").then(r.bind(null,"96bd"))},s=function(){return r.e("components/uni-icon/uni-icon").then(r.bind(null,"3628"))},f={components:{unicard:l,faIcon:c,uninumberbox:a,uniNavBar:d,uniIcon:s},data:function(){return{products:[],user:t.getStorageSync("user")}},onLoad:function(e){var r=this;if(console.log(e),t.removeStorageSync("is_option"),u=t.getStorageSync("uid"),i=this,e.id){t.showLoading({title:"加载中..."});var n=o.default.Query("Goods");"false"==e.type?n.equalTo("objectId","==",e.id):n.equalTo("productCode","==",e.id),n.equalTo("userId","==",u),n.equalTo("status","!=",-1),n.find().then(function(t){var e=!0,o=!1,n=void 0;try{for(var u,i=t[Symbol.iterator]();!(e=(u=i.next()).done);e=!0){var l=u.value;if(l.num=1,l.total_money=1*l.retailPrice,l.really_total_money=1*l.retailPrice,l.modify_retailPrice=l.retailPrice,l.models){var a=0,c=!0,d=!1,s=void 0;try{for(var f,m=l.models[Symbol.iterator]();!(c=(f=m.next()).done);c=!0){var y=f.value;y.num=0,a+=1}}catch(v){d=!0,s=v}finally{try{c||null==m.return||m.return()}finally{if(d)throw s}}l.num=a,l.selectd_model=l.models,l.selected_model=l.models}}}catch(v){o=!0,n=v}finally{try{e||null==i.return||i.return()}finally{if(o)throw n}}r.products=t,wx.hideLoading()})}else{this.products=t.getStorageSync("products");var l=!0,a=!1,c=void 0;try{for(var d,s=this.products[Symbol.iterator]();!(l=(d=s.next()).done);l=!0){var f=d.value;if(f.models){var m=0,y=!0,v=!1,h=void 0;try{for(var p,_=f.models[Symbol.iterator]();!(y=(p=_.next()).done);y=!0){var b=p.value;b.num=1,m+=1}}catch(g){v=!0,h=g}finally{try{y||null==_.return||_.return()}finally{if(v)throw h}}f.num=m,f.selectd_model=f.models,f.selected_model=f.models}}}catch(g){a=!0,c=g}finally{try{l||null==s.return||s.return()}finally{if(a)throw c}}this.products=this.products}},methods:{scanGoods:function(){t.scanCode({success:function(e){t.showLoading({title:"加载中..."});var r=e.result,n=r.split("-"),l=o.default.Query("Goods");"false"==n[1]?l.equalTo("objectId","==",n[0]):l.equalTo("productCode","==",n[0]),l.equalTo("status","!=",-1),l.equalTo("userId","==",u),l.find().then(function(e){var r=!0,o=!1,n=void 0;try{for(var u,l=e[Symbol.iterator]();!(r=(u=l.next()).done);r=!0){var a=u.value;if(a.num=1,a.total_money=1*a.retailPrice,a.really_total_money=1*a.retailPrice,a.modify_retailPrice=a.retailPrice,a.models){var c=0,d=!0,s=!1,f=void 0;try{for(var m,y=a.models[Symbol.iterator]();!(d=(m=y.next()).done);d=!0){var v=m.value;v.num=0,c+=1}}catch(h){s=!0,f=h}finally{try{d||null==y.return||y.return()}finally{if(s)throw f}}a.num=c,a.selectd_model=a.models,a.selected_model=a.models}}}catch(h){o=!0,n=h}finally{try{r||null==l.return||l.return()}finally{if(o)throw n}}i.products=i.products.concat(e),t.hideLoading()})},fail:function(e){t.showToast({title:"未识别到条形码",icon:"none"})}})},confrim_this:function(){var e=t.getStorageSync("products"),r=!0,o=!1,n=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done);r=!0){var l=u.value;if(0==l.num)return void t.showToast({title:"0库存不能进行操作",icon:"none"})}}catch(a){o=!0,n=a}finally{try{r||null==i.return||i.return()}finally{if(o)throw n}}t.navigateTo({url:"/pages/common/goods_out/out_detail/out_detail"})},handleModelNumChange:function(e,r,o,n){n.num=Number(e),this.products[r].selected_model[o]=n;var u=0,i=!0,l=!1,a=void 0;try{for(var c,d=this.products[r].selected_model[Symbol.iterator]();!(i=(c=d.next()).done);i=!0){var s=c.value;u+=s.num}}catch(f){l=!0,a=f}finally{try{i||null==d.return||d.return()}finally{if(l)throw a}}this.products[r].num=u,this.products[r].total_money=u*Number(this.products[r].modify_retailPrice),this.products[r].really_total_money=u*Number(this.products[r].retailPrice),t.setStorageSync("products",this.products)},handleNumChange:function(e,r){this.products[r].num=Number(e),this.products[r].total_money=Number(e)*Number(this.products[r].modify_retailPrice),this.products[r].really_total_money=Number(e)*Number(this.products[r].retailPrice),t.setStorageSync("products",this.products)},handleDel:function(e){1==this.products.length?t.showToast({title:"最少选择一个产品",icon:"none"}):(this.products.splice(e,1),t.setStorageSync("products",this.products))},getrealprice:function(e,r){this.products[r].modify_retailPrice=e.target.value,this.products[r].total_money=this.products[r].num*Number(e.target.value),t.setStorageSync("products",this.products)}}};e.default=f}).call(this,r("543d")["default"])}},[["f32d","common/runtime","common/vendor"]]]);