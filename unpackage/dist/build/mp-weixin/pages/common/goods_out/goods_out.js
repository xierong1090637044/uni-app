(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/goods_out/goods_out"],{"0546":function(e,t,o){"use strict";o.r(t);var n=o("40b3"),r=o("30fc");for(var a in r)"default"!==a&&function(e){o.d(t,e,(function(){return r[e]}))}(a);o("b69e");var u,i=o("f0c5"),c=Object(i["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=c.exports},"30fc":function(e,t,o){"use strict";o.r(t);var n=o("3c01"),r=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"3c01":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(o("9546"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=u(e))){var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,a=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){i=!0,r=e},f:function(){try{a||null==n.return||n.return()}finally{if(i)throw r}}}}function u(e,t){if(e){if("string"===typeof e)return i(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var c,l,s,d=function(){o.e("components/uni-card/uni-card").then(function(){return resolve(o("8975"))}.bind(null,o)).catch(o.oe)},f=function(){o.e("components/uni-number-box/uni-number-box").then(function(){return resolve(o("55f9"))}.bind(null,o)).catch(o.oe)},m=function(){o.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(o("4d52"))}.bind(null,o)).catch(o.oe)},v=function(){o.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(o("96bd"))}.bind(null,o)).catch(o.oe)},h=function(){o.e("components/uni-icon/uni-icon").then(function(){return resolve(o("3628"))}.bind(null,o)).catch(o.oe)},y={components:{unicard:d,faIcon:m,uninumberbox:f,uniNavBar:v,uniIcon:h},data:function(){return{products:[],user:e.getStorageSync("user"),value:"",negativeOut:!1}},onLoad:function(t){if(console.log(t),e.removeStorageSync("is_option"),c=e.getStorageSync("uid"),l=this,s=t.value,l.value=t.value,t.id){e.showLoading({title:"加载中..."});var o=n.default.Query("Goods");"false"==t.type?o.equalTo("objectId","==",t.id):o.equalTo("productCode","==",t.id),o.equalTo("userId","==",c),o.equalTo("status","!=",-1),o.include("stocks"),o.find().then((function(t){if(e.setStorageSync("keepScan",!0),0==t.length)return e.showToast({icon:"none",title:"没有此产品"}),void e.hideLoading();if(0==t[0].order)o.equalTo("userId","==",c),o.equalTo("header","==",t[0].objectId),o.include("stocks"),o.find().then((function(t){var o,n=a(t);try{for(n.s();!(o=n.n()).done;){var r=o.value;if(r.num=1,r.total_money=1*r.retailPrice,r.really_total_money=1*r.retailPrice,r.modify_retailPrice=r.retailPrice,r.models){var u,i=0,c=a(r.models);try{for(c.s();!(u=c.n()).done;){var s=u.value;s.num=0,i+=1}}catch(d){c.e(d)}finally{c.f()}r.num=i,r.selectd_model=r.models,r.selected_model=r.models}}}catch(d){n.e(d)}finally{n.f()}l.products=l.products.concat(t),e.hideLoading()}));else{var n,r=a(t);try{for(r.s();!(n=r.n()).done;){var u=n.value;if(u.num=1,u.total_money=1*u.retailPrice,u.really_total_money=1*u.retailPrice,u.modify_retailPrice=u.retailPrice,u.models){var i,s=0,d=a(u.models);try{for(d.s();!(i=d.n()).done;){var f=i.value;f.num=0,s+=1}}catch(m){d.e(m)}finally{d.f()}u.num=s,u.selectd_model=u.models,u.selected_model=u.models}}}catch(m){r.e(m)}finally{r.f()}l.products=l.products.concat(t),e.hideLoading()}}))}else{this.products=e.getStorageSync("products");var r,u=a(this.products);try{for(u.s();!(r=u.n()).done;){var i=r.value;if(i.models){var d,f=0,m=a(i.models);try{for(m.s();!(d=m.n()).done;){var v=d.value;v.num=0,f+=1}}catch(h){m.e(h)}finally{m.f()}i.num=f,i.selectd_model=i.models,i.selected_model=i.models}}}catch(h){u.e(h)}finally{u.f()}this.products=this.products}e.getStorageSync("setting")&&e.getStorageSync("setting").negativeOut&&(l.negativeOut=e.getStorageSync("setting").negativeOut)},methods:{scanGoods:function(){e.scanCode({success:function(t){e.showLoading({title:"加载中..."});var o=t.result,r=o.split("-"),u=n.default.Query("Goods");"false"==r[1]?u.equalTo("objectId","==",r[0]):u.equalTo("productCode","==",r[0]),u.equalTo("status","!=",-1),u.equalTo("userId","==",c),u.include("stocks"),u.find().then((function(t){if(console.log(t),0==t.length)return e.showToast({icon:"none",title:"没有此产品"}),void e.hideLoading();if(0==t[0].order)u.equalTo("userId","==",c),u.equalTo("header","==",t[0].objectId),u.include("stocks"),u.find().then((function(e){var t,o=a(e);try{for(o.s();!(t=o.n()).done;){var n=t.value;if(n.num=1,n.total_money=1*n.retailPrice,n.really_total_money=1*n.retailPrice,n.modify_retailPrice=n.retailPrice,n.models){var r,u=0,i=a(n.models);try{for(i.s();!(r=i.n()).done;){var c=r.value;c.num=0,u+=1}}catch(s){i.e(s)}finally{i.f()}n.num=u,n.selectd_model=n.models,n.selected_model=n.models}}}catch(s){o.e(s)}finally{o.f()}l.products=l.products.concat(e),wx.hideLoading()}));else{var o,n=a(t);try{for(n.s();!(o=n.n()).done;){var r=o.value;if(r.num=1,r.total_money=1*r.retailPrice,r.really_total_money=1*r.retailPrice,r.modify_retailPrice=r.retailPrice,r.models){var i,s=0,d=a(r.models);try{for(d.s();!(i=d.n()).done;){var f=i.value;f.num=0,s+=1}}catch(m){d.e(m)}finally{d.f()}r.num=s,r.selectd_model=r.models,r.selected_model=r.models}}}catch(m){n.e(m)}finally{n.f()}l.products=l.products.concat(t),e.hideLoading()}}))},fail:function(t){e.showToast({title:"未识别到条形码",icon:"none"})}})},confrim_this:function(){var t,o=e.getStorageSync("products"),n=a(o);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(0==r.num)return void e.showToast({title:"0库存不能进行操作",icon:"none"})}}catch(u){n.e(u)}finally{n.f()}1==s?e.navigateTo({url:"/pages/common/goods_out/goodSell/goodSell"}):2==s?e.navigateTo({url:"/pages/common/goods_out/out_detail/out_detail"}):3==s?e.navigateTo({url:"/pages/common/goods_out/gooSellNew/gooSellNew"}):4==s&&e.navigateTo({url:"/pages/common/good_return/purchaseReturn/purchaseReturn"})},handleModelNumChange:function(t,o,n,r){r.num=Number(t),this.products[o].selected_model[n]=r;var u,i=0,c=a(this.products[o].selected_model);try{for(c.s();!(u=c.n()).done;){var l=u.value;l.num>0&&(i+=l.num)}}catch(s){c.e(s)}finally{c.f()}this.products[o].num=i,this.products[o].total_money=i*Number(this.products[o].modify_retailPrice),this.products[o].really_total_money=i*Number(this.products[o].retailPrice),e.setStorageSync("products",this.products)},handleNumChange:function(t,o){this.products[o].num=Number(t),this.products[o].total_money=Number(t)*Number(this.products[o].modify_retailPrice),this.products[o].really_total_money=Number(t)*Number(this.products[o].retailPrice),e.setStorageSync("products",this.products)},handleDel:function(t){1==this.products.length?e.showToast({title:"最少选择一个产品",icon:"none"}):(this.products.splice(t,1),e.setStorageSync("products",this.products))},getrealprice:function(t,o){this.products[o].modify_retailPrice=t.target.value,this.products[o].total_money=this.products[o].num*Number(t.target.value),e.setStorageSync("products",this.products)}}};t.default=y}).call(this,o("543d")["default"])},"40b3":function(e,t,o){"use strict";var n={"uni-nav-bar":function(){return o.e("components/uni-nav-bar/uni-nav-bar").then(o.bind(null,"96bd"))}},r=function(){var e=this,t=e.$createElement,o=(e._self._c,e.__map(e.products,(function(t,o){var n=Number(t.reserve),r=e.__map(t.selectd_model,(function(t,o){var n=Number(t.reserve);return{$orig:e.__get_orig(t),m1:n}})),a=Number(t.reserve);return{$orig:e.__get_orig(t),m0:n,l0:r,m2:a}})));e.$mp.data=Object.assign({},{$root:{l1:o}})},a=[];o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return n}))},"40c7":function(e,t,o){},b69e:function(e,t,o){"use strict";var n=o("40c7"),r=o.n(n);r.a},f32d:function(e,t,o){"use strict";(function(e){o("d510"),o("921b");n(o("66fd"));var t=n(o("0546"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])}},[["f32d","common/runtime","common/vendor"]]]);