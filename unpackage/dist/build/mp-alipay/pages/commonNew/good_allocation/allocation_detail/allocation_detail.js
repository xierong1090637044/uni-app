(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/commonNew/good_allocation/allocation_detail/allocation_detail"],{"008a":function(e,t,o){"use strict";o.r(t);var n=o("a7cc"),r=o("6046");for(var s in r)"default"!==s&&function(e){o.d(t,e,(function(){return r[e]}))}(s);o("30ef");var u,c=o("f0c5"),a=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=a.exports},"30ef":function(e,t,o){"use strict";var n=o("370e"),r=o.n(n);r.a},"370e":function(e,t,o){},6046:function(e,t,o){"use strict";o.r(t);var n=o("9211"),r=o.n(n);for(var s in n)"default"!==s&&function(e){o.d(t,e,(function(){return n[e]}))}(s);t["default"]=r.a},"864c":function(e,t,o){"use strict";(function(e){o("d510"),o("921b");n(o("66fd"));var t=n(o("008a"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("c11b")["createPage"])},9211:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r,s=c(o("9546")),u=c(o("7fd5"));c(o("9f50")),c(o("856d")),c(o("a2fc"));function c(e){return e&&e.__esModule?e:{default:e}}function a(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=d(e))){var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,s=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){u=!0,r=e},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw r}}}}function d(e,t){if(e){if("string"===typeof e)return i(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var l={data:function(){return{products:[],in_stock:"",out_stock:"",button_disabled:!1,beizhu_text:"",out_products:[],all_money:0,real_money:0,total_num:0,nowDay:u.default.getDay(0,!0)}},onLoad:function(){r=this,n=e.getStorageSync("uid"),this.products=e.getStorageSync("products");for(var t=0;t<this.products.length;t++)this.all_money=Number((this.products[t].total_money+this.all_money).toFixed(2)),this.total_num+=Number(this.products[t].num);this.real_money=Number(this.all_money.toFixed(2))},onShow:function(){r.in_stock=e.getStorageSync("in_warehouse")?e.getStorageSync("in_warehouse")[0].stock:"",r.out_stock=e.getStorageSync("out_warehouse")?e.getStorageSync("out_warehouse")[0].stock:""},methods:{showHideFunction:function(){r.button_disabled=!1,e.hideLoading(),e.setStorageSync("is_option",!0),e.removeStorageSync("warehouse"),e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),e.showToast({title:"调拨成功"}),setTimeout((function(){e.navigateBack({delta:2})}),500)},formSubmit:function(t){if(this.button_disabled=!0,""==r.out_stock||null==r.out_stock)return e.showToast({title:"请选择调入仓库",icon:"none"}),void(this.button_disabled=!1);r.addTbRecord(t)},addTbRecord:function(t){e.showLoading({title:"请勿退出..."});for(var o=s.default.Pointer("stocks"),c=s.default.Pointer("stocks"),d=c.set(r.out_stock.objectId),i=o.set(r.in_stock.objectId),l=new Array,f=[],m=[],h=0;h<r.products.length;h++){m.push(this.products[h].goodsName);var p=s.default.Query("Bills"),_={},v=s.default.Pointer("_User"),b=v.set(n),y=s.default.Pointer("_User"),g=y.set(e.getStorageSync("masterId")),k=s.default.Pointer("Goods"),S=k.set(this.products[h].objectId);p.set("goodsName",this.products[h].goodsName),p.set("retailPrice",this.products[h].modify_retailPrice),p.set("num",Number(this.products[h].num)),p.set("total_money",Number(this.products[h].total_money)),p.set("goodsId",S),p.set("userId",b),p.set("type",-2),p.set("opreater",g),p.set("stock",i),p.set("out_stock",d);var w={};_.goodsName=this.products[h].goodsName,_.stock=r.in_stock.stock_name,_.out_stock=r.out_stock.stock_name,_.reserve=this.products[h].reserve,w.objectId=this.products[h].objectId,this.products[h].selectd_model&&(w.selected_model=this.products[h].selected_model,w.models=this.products[h].models),_.goodsId=w,_.num=Number(this.products[h].num),_.type=-2,_.packingUnit=this.products[h].packingUnit||"",l.push(p),f.push(_)}s.default.Query("Bills").saveAll(l).then((function(o){for(var c=[],l=0;l<o.length;l++)c.push(o[l].success.objectId);var h=s.default.Pointer("_User"),p=h.set(n),_=e.getStorageSync("masterId"),v=s.default.Pointer("_User"),b=v.set(_),y=s.default.Query("order_opreations");y.set("detail",f),y.set("bills",c),y.set("beizhu",t.detail.value.input_beizhu),y.set("type",-2),y.set("opreater",b),y.set("stock",i),y.set("out_stock",d),y.set("master",p),y.set("goodsName",m.join(",")),y.save().then((function(e){e.objectId;for(var t=function(e){var t=s.default.Query("Goods");t.equalTo("header","==",r.products[e].objectId),t.equalTo("userId","==",n),t.equalTo("stocks","==",r.out_stock.objectId),t.find().then((function(o){var s,c=o;if(0==c.length)u.default.upload_good_withNoCan(r.products[e],r.out_stock,Number(r.products[e].num),"allocation").then((function(o){t.equalTo("header","==",r.products[e].objectId),t.equalTo("userId","==",n),t.equalTo("stocks","==",r.in_stock.objectId),t.find().then((function(o){if(s=o,0==s.length)u.default.upload_good_withNoCan(r.products[e],r.in_stock,0-Number(r.products[e].num),"allocation").then((function(t){e==r.products.length-1&&r.showHideFunction()}));else{if(r.products[e].selected_model){var n,c=a(r.products[e].selectd_model);try{for(c.s();!(n=c.n()).done;){var d,i=n.value,l=a(s[0].models);try{for(l.s();!(d=l.n()).done;){var f=d.value;f.id==i.id&&(f.reserve=Number(f.reserve)-Number(i.num)),delete f.num}}catch(m){l.e(m)}finally{l.f()}}}catch(m){c.e(m)}finally{c.f()}t.set("models",s[0].models)}t.set("reserve",Number(s[0].reserve)-Number(r.products[e].num)),t.set("id",s[0].objectId),t.save().then((function(t){e==r.products.length-1&&r.showHideFunction()})).catch((function(e){console.log(e)}))}}))}));else{if(r.products[e].selected_model){var d,i=a(r.products[e].selectd_model);try{for(i.s();!(d=i.n()).done;){var l,f=d.value,m=a(c[0].models);try{for(m.s();!(l=m.n()).done;){var h=l.value;h.id==f.id&&(h.reserve=Number(h.reserve)+Number(f.num)),delete h.num}}catch(p){m.e(p)}finally{m.f()}}}catch(p){i.e(p)}finally{i.f()}t.set("models",c[0].models)}t.set("reserve",Number(c[0].reserve)+Number(r.products[e].num)),t.set("id",c[0].objectId),t.save().then((function(o){t.equalTo("header","==",r.products[e].objectId),t.equalTo("userId","==",n),t.equalTo("stocks","==",r.in_stock.objectId),t.find().then((function(o){if(s=o,0==s.length)u.default.upload_good_withNoCan(r.products[e],r.in_stock,Number(r.products[e].num),"allocation").then((function(t){e==r.products.length-1&&r.showHideFunction()}));else{if(r.products[e].selected_model){var n,c=a(r.products[e].selectd_model);try{for(c.s();!(n=c.n()).done;){var d,i=n.value,l=a(s[0].models);try{for(l.s();!(d=l.n()).done;){var f=d.value;f.id==i.id&&(f.reserve=Number(f.reserve)-Number(i.num)),delete f.num}}catch(p){l.e(p)}finally{l.f()}}}catch(p){c.e(p)}finally{c.f()}t.set("models",s[0].models)}t.set("reserve",Number(s[0].reserve)-Number(r.products[e].num)),t.set("id",s[0].objectId),t.save().then((function(t){e==r.products.length-1&&r.showHideFunction()})).catch((function(e){console.log(e)}))}}))})).catch((function(e){console.log(e)}))}}))},o=0;o<r.products.length;o++)t(o)}))}),(function(e){console.log("异常处理")}))}}};t.default=l}).call(this,o("c11b")["default"])},a7cc:function(e,t,o){"use strict";var n,r=function(){var e=this,t=e.$createElement,o=(e._self._c,e.nowDay.split(" "));e.$mp.data=Object.assign({},{$root:{g0:o}})},s=[];o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return n}))}},[["864c","common/runtime","common/vendor"]]]);