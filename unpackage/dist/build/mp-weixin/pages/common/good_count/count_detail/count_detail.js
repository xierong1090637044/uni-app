(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_count/count_detail/count_detail"],{"09cb":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n,s=d(o("4515")),u=d(o("f287")),a=d(o("efc7"));function d(e){return e&&e.__esModule?e:{default:e}}function c(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=i(e))){var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n,s=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){u=!0,n=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw n}}}}function i(e,t){if(e){if("string"===typeof e)return l(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}var f={data:function(){return{products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,total_num:0,producer:null,nowDay:u.default.getDay(0,!0,!0)}},onLoad:function(){n=this,r=e.getStorageSync("uid"),this.products=e.getStorageSync("products");for(var t=0;t<this.products.length;t++)this.total_num+=Number(this.products[t].num)},methods:{bindDateChange:function(e){n.nowDay=e.detail.value+" 00:00:00"},formSubmit:function(t){console.log(t),this.button_disabled=!0,e.showLoading({title:"上传中..."});for(var o=new Array,d=[],i=[],l=0;l<this.products.length;l++){var f=s.default.Query("Bills"),p={},m=s.default.Pointer("_User"),g=m.set(r),h=s.default.Pointer("Goods"),y=h.set(this.products[l].header?this.products[l].header.objectId:this.products[l].objectId),v=e.getStorageSync("masterId"),b=s.default.Pointer("_User"),_=b.set(v);if(f.set("goodsName",this.products[l].goodsName),f.set("retailPrice",this.products[l].modify_retailPrice.toString()),f.set("num",Number(this.products[l].num)),f.set("reserve",Number(this.products[l].reserve)),f.set("now_reserve",this.products[l].num.toString()),f.set("total_money",this.products[l].total_money),f.set("opreater",_),f.set("goodsId",y),f.set("userId",g),f.set("type",3),f.set("createdTime",{__type:"Date",iso:n.nowDay}),n.products[l].stocks&&n.products[l].stocks.objectId){var S=s.default.Pointer("stocks"),w=S.set(n.products[l].stocks.objectId);f.set("stock",w),i.push(this.products[l].stocks.objectId),p.stock=n.products[l].stocks.stock_name}var I={};this.products[l].selectd_model&&(I.selected_model=this.products[l].selected_model,I.models=this.products[l].models,p.goodsId=I),p.goodsName=this.products[l].goodsName,p.reserve=this.products[l].reserve,p.now_reserve=this.products[l].num.toString(),p.packingUnit=this.products[l].packingUnit,o.push(f),d.push(p)}s.default.Query("Bills").saveAll(o).then((function(o){var l=s.default.Pointer("_User"),f=l.set(r),p=e.getStorageSync("masterId"),m=s.default.Pointer("_User"),g=m.set(p),h=s.default.Query("order_opreations");h.set("beizhu",t.detail.value.input_beizhu),h.set("detail",d),h.set("type",3),h.set("opreater",g),h.set("master",f),h.set("goodsName",n.products[0].goodsName),h.set("stockIds",i),h.set("createdTime",{__type:"Date",iso:n.nowDay}),h.save().then((function(t){var o=0,r=t.objectId;e.hideLoading();for(var d=function(t){var d=0,i=s.default.Query("Goods");if(i.set("id",n.products[t].objectId),n.products[t].selectd_model){var l,f=c(n.products[t].selected_model);try{for(f.s();!(l=f.n()).done;){var p=l.value;delete p.num}}catch(m){f.e(m)}finally{f.f()}i.set("models",n.products[t].selected_model),d=Number(n.products[t].num)}else d=Number(n.products[t].num);i.set("reserve",d),i.save().then((function(d){if(n.products[t].header){var c=s.default.Query("Goods");c.equalTo("header","==",n.products[t].header.objectId),c.equalTo("order","==",1),c.statTo("sum","reserve"),c.find().then((function(s){var d=s[0]._sumReserve;i.set("id",n.products[t].header.objectId),i.set("reserve",d),i.save().then((function(s){o+=1,u.default.modifyStockType(n.products[t].header.objectId),console.log(o,n.products.length),o==n.products.length&&(n.button_disabled=!1,e.setStorageSync("is_option",!0),e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),u.default.log(e.getStorageSync("user").nickName+"盘点了'"+n.products[0].goodsName+"'等"+n.products.length+"商品",3,r),e.getStorageSync("setting").auto_print&&a.default.autoPrint(r),e.navigateBack({delta:2}),setTimeout((function(){e.showToast({title:"盘点成功"})}),500))}))}))}else o+=1,u.default.modifyStockType(n.products[t].header.objectId),o==n.products.length&&(n.button_disabled=!1,e.setStorageSync("is_option",!0),e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),u.default.log(e.getStorageSync("user").nickName+"盘点了'"+n.products[0].goodsName+"'等"+n.products.length+"商品",3,d.objectId),e.getStorageSync("setting").auto_print&&a.default.autoPrint(r),e.navigateBack({delta:2}),setTimeout((function(){e.showToast({title:"盘点成功"})}),500))})).catch((function(e){console.log(e)}))},i=0;i<n.products.length;i++)d(i)}))}),(function(e){console.log("异常处理")}))}}};t.default=f}).call(this,o("543d")["default"])},"24ce":function(e,t,o){"use strict";var r,n=function(){var e=this,t=e.$createElement,o=(e._self._c,e.nowDay.split(" "));e.$mp.data=Object.assign({},{$root:{g0:o}})},s=[];o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return r}))},"8eed":function(e,t,o){},a3dd:function(e,t,o){"use strict";o.r(t);var r=o("09cb"),n=o.n(r);for(var s in r)"default"!==s&&function(e){o.d(t,e,(function(){return r[e]}))}(s);t["default"]=n.a},abf6:function(e,t,o){"use strict";var r=o("8eed"),n=o.n(r);n.a},cd10:function(e,t,o){"use strict";(function(e){o("d34b"),o("921b");r(o("66fd"));var t=r(o("ed66"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},ed66:function(e,t,o){"use strict";o.r(t);var r=o("24ce"),n=o("a3dd");for(var s in n)"default"!==s&&function(e){o.d(t,e,(function(){return n[e]}))}(s);o("abf6");var u,a=o("f0c5"),d=Object(a["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);t["default"]=d.exports}},[["cd10","common/runtime","common/vendor"]]]);