(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/commonNew/good_count/count_detail/count_detail"],{"1f7c":function(e,t,o){"use strict";var r=o("56bd"),n=o.n(r);n.a},2786:function(e,t,o){"use strict";o.r(t);var r=o("9637"),n=o.n(r);for(var s in r)"default"!==s&&function(e){o.d(t,e,(function(){return r[e]}))}(s);t["default"]=n.a},3478:function(e,t,o){"use strict";(function(e){o("d510"),o("921b");r(o("66fd"));var t=r(o("f2ee"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("c11b")["createPage"])},"56bd":function(e,t,o){},"737b":function(e,t,o){"use strict";var r,n=function(){var e=this,t=e.$createElement,o=(e._self._c,e.nowDay.split(" "));e.$mp.data=Object.assign({},{$root:{g0:o}})},s=[];o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return r}))},9637:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n,s=c(o("9546")),u=c(o("7fd5")),a=c(o("856d"));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=i(e))){var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n,s=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){u=!0,n=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw n}}}}function i(e,t){if(e){if("string"===typeof e)return l(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}var f={data:function(){return{products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,total_num:0,producer:null,stock:{},nowDay:u.default.getDay(0,!0)}},onLoad:function(){n=this,r=e.getStorageSync("uid"),this.products=e.getStorageSync("products");for(var t=0;t<this.products.length;t++)this.total_num+=Number(this.products[t].num)},onShow:function(){n.stock=e.getStorageSync("warehouse")?e.getStorageSync("warehouse")[0].stock:""},methods:{bindDateChange:function(e){n.nowDay=e.detail.value+" 00:00:00"},formSubmit:function(t){if(console.log(t),this.button_disabled=!0,e.showLoading({title:"上传中..."}),null==n.stock||""==n.stock||void 0==n.stock)return e.showToast({icon:"none",title:"请选择盘点仓库"}),e.hideLoading(),void(this.button_disabled=!1);for(var o=new Array,c=[],i=[],l=[],f=0;f<this.products.length;f++){l.push(this.products[f].goodsName);var m=s.default.Query("Bills"),h={},p=s.default.Pointer("_User"),g=p.set(r),v=s.default.Pointer("Goods"),y=v.set(this.products[f].header?this.products[f].header.objectId:this.products[f].objectId),b=e.getStorageSync("masterId"),_=s.default.Pointer("_User"),S=_.set(b);if(m.set("goodsName",this.products[f].goodsName),m.set("retailPrice",this.products[f].modify_retailPrice.toString()),m.set("num",Number(this.products[f].num)),m.set("reserve",Number(this.products[f].reserve)),m.set("now_reserve",this.products[f].num),m.set("total_money",this.products[f].total_money),m.set("opreater",S),m.set("goodsId",y),m.set("userId",g),m.set("type",3),m.set("createdTime",{__type:"Date",iso:n.nowDay}),n.stock&&n.stock.objectId){var k=s.default.Pointer("stocks"),w=k.set(n.stock.objectId);m.set("stock",w),i.push(n.stock.objectId),h.stock=n.stock.stock_name}var I={};this.products[f].selectd_model&&(I.selected_model=this.products[f].selected_model,I.models=this.products[f].models,h.goodsId=I),h.goodsName=this.products[f].goodsName,h.reserve=this.products[f].reserve,h.now_reserve=this.products[f].num.toString(),h.packingUnit=this.products[f].packingUnit,o.push(m),c.push(h)}s.default.Query("Bills").saveAll(o).then((function(o){var f=s.default.Pointer("_User"),m=f.set(r),h=e.getStorageSync("masterId"),p=s.default.Pointer("_User"),g=p.set(h),v=s.default.Query("order_opreations");v.set("beizhu",t.detail.value.input_beizhu),v.set("detail",c),v.set("type",3),v.set("opreater",g),v.set("master",m),v.set("goodsName",l.join(",")),v.set("stockIds",i),v.set("createdTime",{__type:"Date",iso:n.nowDay}),v.save().then((function(t){var o=t.objectId;e.hideLoading(),e.showToast({title:"产品盘点成功",icon:"success",success:function(){for(var t=function(t){var r=0,c=s.default.Query("Goods");c.equalTo("header","==",n.products[t].objectId),c.equalTo("stocks","==",n.stock.objectId),c.find().then((function(s){if(0==s.length)u.default.upload_good_withNoCan(n.products[t],n.stock,Number(n.products[t].num)).then((function(r){c.equalTo("header","==",n.products[t].objectId),c.equalTo("order","==",1),c.statTo("sum","reserve"),c.find().then((function(r){var s=r[0]._sumReserve;c.set("id",n.products[t].objectId),c.set("reserve",s),c.save().then((function(r){u.default.modifyStockType(n.products[t].objectId),n.button_disabled=!1,e.setStorageSync("is_option",!0),setTimeout((function(){e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),u.default.log(e.getStorageSync("user").nickName+"盘点了'"+n.products[0].goodsName+"'等"+n.products.length+"商品",3,o),e.getStorageSync("setting").auto_print&&a.default.autoPrint(o),e.navigateBack({delta:2})}),500)}))}))}));else{var i=s[0];if(c.set("id",i.objectId),n.products[t].selectd_model){var l,f=d(n.products[t].selected_model);try{for(f.s();!(l=f.n()).done;){var m=l.value;delete m.num}}catch(h){f.e(h)}finally{f.f()}c.set("models",n.products[t].selected_model),r=Number(n.products[t].num)}else r=Number(n.products[t].num);c.set("reserve",r),c.save().then((function(r){c.equalTo("header","==",n.products[t].objectId),c.equalTo("order","==",1),c.statTo("sum","reserve"),c.find().then((function(r){var s=r[0]._sumReserve;c.get(n.products[t].objectId).then((function(r){r.set("reserve",s),r.save(),u.default.modifyStockType(n.products[t].objectId),n.button_disabled=!1,e.setStorageSync("is_option",!0),setTimeout((function(){e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),u.default.log(e.getStorageSync("user").nickName+"盘点了'"+n.products[0].goodsName+"'等"+n.products.length+"商品",3,r.objectId),e.getStorageSync("setting").auto_print&&a.default.autoPrint(o),e.navigateBack({delta:2})}),500)}))}))})).catch((function(e){console.log(e)}))}}))},r=0;r<n.products.length;r++)t(r)}})}))}),(function(e){console.log("异常处理")}))}}};t.default=f}).call(this,o("c11b")["default"])},f2ee:function(e,t,o){"use strict";o.r(t);var r=o("737b"),n=o("2786");for(var s in n)"default"!==s&&function(e){o.d(t,e,(function(){return n[e]}))}(s);o("1f7c");var u,a=o("f0c5"),c=Object(a["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);t["default"]=c.exports}},[["3478","common/runtime","common/vendor"]]]);