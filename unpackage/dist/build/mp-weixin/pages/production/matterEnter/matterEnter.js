(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/production/matterEnter/matterEnter"],{"27e4":function(t,e,o){"use strict";(function(t){o("d510"),o("921b");r(o("66fd"));var e=r(o("9603"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},"41cc":function(t,e,o){"use strict";o.r(e);var r=o("cbdf"),n=o.n(r);for(var u in r)"default"!==u&&function(t){o.d(e,t,function(){return r[t]})}(u);e["default"]=n.a},"434a":function(t,e,o){},7983:function(t,e,o){"use strict";var r,n=function(){var t=this,e=t.$createElement,o=(t._self._c,t.__map(t.products,function(e,o){var r=Number(e.reserve),n=Number(e.reserve),u=Number(e.num);return{$orig:t.__get_orig(e),m0:r,m1:n,m2:u}}));t.$mp.data=Object.assign({},{$root:{l0:o}})},u=[];o.d(e,"b",function(){return n}),o.d(e,"c",function(){return u}),o.d(e,"a",function(){return r})},8242:function(t,e,o){"use strict";var r=o("434a"),n=o.n(r);n.a},9603:function(t,e,o){"use strict";o.r(e);var r=o("7983"),n=o("41cc");for(var u in n)"default"!==u&&function(t){o.d(e,t,function(){return n[t]})}(u);o("8242");var i,a=o("f0c5"),c=Object(a["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=c.exports},cbdf:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(o("9546"));n(o("7fd5"));function n(t){return t&&t.__esModule?t:{default:t}}var u,i,a=function(){return o.e("components/uni-card/uni-card").then(o.bind(null,"8975"))},c=function(){return o.e("components/uni-number-box/uni-number-box").then(o.bind(null,"55f9"))},l=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"4d52"))},s=function(){return o.e("components/uni-nav-bar/uni-nav-bar").then(o.bind(null,"96bd"))},d=function(){return o.e("components/uni-icon/uni-icon").then(o.bind(null,"3628"))},f={components:{unicard:a,faIcon:l,uninumberbox:c,uniNavBar:s,uniIcon:d},data:function(){return{products:[],user:t.getStorageSync("user"),type:"",id:""}},onLoad:function(e){var o=this;if(this.products=[],i=this,t.removeStorageSync("is_option"),u=t.getStorageSync("uid"),i.type=e.type,i.id=e.id,e.id&&"production"!=e.type&&"productionEdit"!=e.type){t.showLoading({title:"加载中..."});var n=r.default.Query("Goods");"false"==e.type?n.equalTo("objectId","==",e.id):n.equalTo("productCode","==",e.id),n.equalTo("userId","==",u),n.equalTo("status","!=",-1),n.find().then(function(e){console.log(e);var r=!0,n=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var c=i.value;if(c.num=1,c.total_money=1*c.costPrice,c.really_total_money=1*c.costPrice,c.modify_retailPrice=c.costPrice,c.models){var l=0,s=!0,d=!1,f=void 0;try{for(var m,y=c.models[Symbol.iterator]();!(s=(m=y.next()).done);s=!0){var p=m.value;p.num=0,l+=1}}catch(h){d=!0,f=h}finally{try{s||null==y.return||y.return()}finally{if(d)throw f}}c.num=l,c.selectd_model=c.models,c.selected_model=c.models}}}catch(h){n=!0,u=h}finally{try{r||null==a.return||a.return()}finally{if(n)throw u}}o.products=e,t.hideLoading()})}else{this.products=t.getStorageSync("products");var a=!0,c=!1,l=void 0;try{for(var s,d=this.products[Symbol.iterator]();!(a=(s=d.next()).done);a=!0){var f=s.value;if(f.models){var m=0,y=!0,p=!1,h=void 0;try{for(var v,g=f.models[Symbol.iterator]();!(y=(v=g.next()).done);y=!0){var b=v.value;b.num=0,m+=1}}catch(_){p=!0,h=_}finally{try{y||null==g.return||g.return()}finally{if(p)throw h}}f.num=m,f.selectd_model=f.models,f.selected_model=f.models}}}catch(_){c=!0,l=_}finally{try{a||null==d.return||d.return()}finally{if(c)throw l}}this.products=this.products}},methods:{scanGoods:function(){t.scanCode({success:function(e){t.showLoading({title:"加载中..."});var o=e.result,n=o.split("-"),a=r.default.Query("Goods");"false"==n[1]?a.equalTo("objectId","==",n[0]):a.equalTo("productCode","==",n[0]),a.equalTo("userId","==",u),a.find().then(function(e){console.log(e);var o=!0,r=!1,n=void 0;try{for(var u,a=e[Symbol.iterator]();!(o=(u=a.next()).done);o=!0){var c=u.value;if(c.num=1,c.total_money=1*c.costPrice,c.really_total_money=1*c.costPrice,c.modify_retailPrice=c.costPrice,c.models){var l=0,s=!0,d=!1,f=void 0;try{for(var m,y=c.models[Symbol.iterator]();!(s=(m=y.next()).done);s=!0){var p=m.value;p.num=0,l+=1}}catch(h){d=!0,f=h}finally{try{s||null==y.return||y.return()}finally{if(d)throw f}}c.num=l,c.selectd_model=c.models,c.selected_model=c.models}}}catch(h){r=!0,n=h}finally{try{o||null==a.return||a.return()}finally{if(r)throw n}}i.products=i.products.concat(e),t.hideLoading()})},fail:function(e){t.showToast({title:"未识别到条形码",icon:"none"})}})},confrim_this:function(){var e=this;if("production"==i.type)i.confrimMatter();else if("productionEdit"==i.type){var o=r.default.Query("order_opreations");o.get(i.id).then(function(o){console.log(o),o.set("mattersId",e.products),o.save(),t.showToast({title:"物料修改成功",icon:"success",duration:1e3,complete:function(){i.button_disabled=!1,t.setStorageSync("is_option",!0),t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),setTimeout(function(){t.navigateBack({delta:2})},500)}})})}else t.navigateTo({url:"/pages/production/matterEnter/enterDetail/enterDetail"})},confrimMatter:function(){var e=this,o=r.default.Query("order_opreations");o.get(i.id).then(function(o){console.log(o),o.add("mattersId",e.products),o.save(),t.showToast({title:"物料添加成功",icon:"success",duration:1e3,complete:function(){i.button_disabled=!1,t.setStorageSync("is_option",!0),t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),setTimeout(function(){t.navigateBack({delta:2})},500)}})})},handleNumChange:function(e,o){this.products[o].num=Number(e),this.products[o].total_money=Number(e)*Number(this.products[o].modify_retailPrice),this.products[o].really_total_money=Number(e)*Number(this.products[o].costPrice),t.setStorageSync("products",this.products)},handleModelNumChange:function(e,o,r,n){n.num=Number(e),this.products[o].selected_model[r]=n;var u=0,i=!0,a=!1,c=void 0;try{for(var l,s=this.products[o].selected_model[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var d=l.value;u+=d.num}}catch(f){a=!0,c=f}finally{try{i||null==s.return||s.return()}finally{if(a)throw c}}this.products[o].num=u,this.products[o].total_money=u*Number(this.products[o].modify_retailPrice),this.products[o].really_total_money=u*Number(this.products[o].costPrice),t.setStorageSync("products",this.products)},handleDel:function(e){console.log(e),1==this.products.length?t.showToast({title:"最少选择一个产品",icon:"none"}):(this.products.splice(e,1),t.setStorageSync("products",this.products))},getrealprice:function(e,o){this.products[o].modify_retailPrice=e.target.value,this.products[o].total_money=this.products[o].num*Number(e.target.value),t.setStorageSync("products",this.products)}}};e.default=f}).call(this,o("543d")["default"])}},[["27e4","common/runtime","common/vendor"]]]);