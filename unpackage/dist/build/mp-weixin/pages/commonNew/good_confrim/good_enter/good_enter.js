(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/commonNew/good_confrim/good_enter/good_enter"],{"15d5":function(t,e,o){"use strict";(function(t){o("d510"),o("921b");s(o("66fd"));var e=s(o("9e20"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},"2d08":function(t,e,o){"use strict";o.r(e);var s=o("e36b"),r=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,(function(){return s[t]}))}(n);e["default"]=r.a},"856c":function(t,e,o){"use strict";var s=o("b258"),r=o.n(s);r.a},"9e20":function(t,e,o){"use strict";o.r(e);var s=o("cf2b"),r=o("2d08");for(var n in r)"default"!==n&&function(t){o.d(e,t,(function(){return r[t]}))}(n);o("856c");var a,i=o("f0c5"),u=Object(i["a"])(r["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],a);e["default"]=u.exports},b258:function(t,e,o){},cf2b:function(t,e,o){"use strict";var s,r=function(){var t=this,e=t.$createElement,o=(t._self._c,t.nowDay.split(" "));t.$mp.data=Object.assign({},{$root:{g0:o}})},n=[];o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return s}))},e36b:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,r,n=i(o("9546")),a=i(o("7fd5"));i(o("a2fc")),i(o("9f50")),i(o("856d"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=c(t))){var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r,n=!0,a=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return n=t.done,t},e:function(t){a=!0,r=t},f:function(){try{n||null==s.return||s.return()}finally{if(a)throw r}}}}function c(t,e){if(t){if("string"===typeof t)return l(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,s=new Array(e);o<e;o++)s[o]=t[o];return s}var d={data:function(){return{user:t.getStorageSync("user"),identity:t.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,really_total_money:0,total_num:0,nowDay:a.default.getDay(0,!0),stockClass:"采购入库",isChooseStockClass:!1}},onLoad:function(){r=this,s=t.getStorageSync("uid"),this.products=t.getStorageSync("products");for(var e=0;e<this.products.length;e++)this.all_money=Number((this.products[e].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[e].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[e].num);this.real_money=Number(this.all_money.toFixed(2)),r.user.rights&&r.user.rights.othercurrent&&(r.othercurrent=r.user.rights.othercurrent)},onShow:function(){r.stock=t.getStorageSync("warehouse")?t.getStorageSync("warehouse")[0].stock:""},methods:{bindDateChange:function(t){r.nowDay=t.detail.value+" 00:00:00"},removeImg:function(t){r.Images.splice(t,1),r.Images=r.Images},chooseStockClass:function(t){r.stockClass=t,r.isChooseStockClass=!1},upload_image:function(){r.user.is_vip?t.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var e,o,s=Date.parse(new Date),a=t.tempFilePaths,i=u(a);try{for(i.s();!(o=i.n()).done;){var c=o.value;e=n.default.File(s+".jpg",c)}}catch(l){i.e(l)}finally{i.f()}e.save().then((function(t){var e,o=u(t);try{for(o.s();!(e=o.n()).done;){var s=e.value;r.Images.push(s.url)}}catch(l){o.e(l)}finally{o.f()}}))}}):t.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(e){t.getStorageSync("identity");if(!this.button_disabled)if(null!=r.stock&&""!=r.stock&&void 0!=r.stock){this.button_disabled=!0;e.detail.formId;var o=2;t.showLoading({title:"请勿退出..."});for(var i=new Array,u=[],c=[],l=[],d=[],f=0;f<this.products.length;f++){d.push(this.products[f].goodsName);var m=Number(this.products[f].reserve)+this.products[f].num,h={},y=n.default.Query("Bills"),p=n.default.Pointer("_User"),g=p.set(s),_=n.default.Pointer("Goods"),b=_.set(this.products[f].header?this.products[f].header.objectId:this.products[f].objectId),v=t.getStorageSync("masterId"),S=n.default.Pointer("_User"),k=S.set(v);y.set("goodsName",this.products[f].goodsName),y.set("retailPrice",this.products[f].modify_retailPrice.toString()),y.set("num",Number(this.products[f].num)),y.set("total_money",this.products[f].total_money),y.set("really_total_money",this.products[f].really_total_money),y.set("goodsId",b),y.set("userId",g),y.set("opreater",k),y.set("type",1),y.set("extra_type",o),y.set("createdTime",{__type:"Date",iso:r.nowDay}),y.set("status",!0);var I={};if(r.stock&&r.stock.objectId){var w=n.default.Pointer("stocks"),N=w.set(r.stock.objectId);y.set("stock",N),h.stock=r.stock.stock_name,c.push(r.stock.objectId),l.push(r.stock.stock_name)}h.goodsName=this.products[f].goodsName,h.modify_retailPrice=this.products[f].modify_retailPrice.toString(),h.retailPrice=this.products[f].retailPrice,h.total_money=this.products[f].total_money,h.packingUnit=this.products[f].packingUnit,I.costPrice=this.products[f].costPrice,I.retailPrice=this.products[f].retailPrice,I.objectId=this.products[f].objectId,I.reserve=m,this.products[f].selectd_model&&(I.selected_model=this.products[f].selected_model,I.models=this.products[f].models),h.goodsId=I,h.num=this.products[f].num,h.type=1,i.push(y),u.push(h)}n.default.Query("Bills").saveAll(i).then((function(i){for(var f=[],m=0;m<i.length;m++)f.push(i[m].success.objectId);var h=n.default.Pointer("_User"),y=h.set(s),p=t.getStorageSync("masterId"),g=n.default.Pointer("_User"),_=g.set(p),b=n.default.Query("order_opreations");b.set("beizhu",e.detail.value.input_beizhu),b.set("detail",u),b.set("real_num",r.total_num),b.set("type",1),b.set("extra_type",o),b.set("bills",f),b.set("opreater",_),b.set("master",y),b.set("stockClass",r.stockClass),b.set("stockIds",c),b.set("stockNames",l),b.set("goodsName",d.join(",")),b.set("real_money",Number(r.real_money)),b.set("debt",0),b.set("all_money",r.all_money),b.set("Images",r.Images),b.set("status",!0),b.set("createdTime",{__type:"Date",iso:r.nowDay}),b.save().then((function(e){var o=e.objectId;e.createdAt;a.default.enterAddGoodNumNew(r.products).then((function(e){t.hideLoading(),t.setStorageSync("is_option",!0),t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),t.showToast({title:"入库成功"}),setTimeout((function(){r.button_disabled=!1,a.default.log(t.getStorageSync("user").nickName+"入库了'"+r.products[0].goodsName+"'等"+r.products.length+"商品",1,o),t.navigateBack({delta:2})}),500)}))}))}),(function(t){console.log("异常处理")}))}else t.showToast({icon:"none",title:"请选择入库仓库"})}}};e.default=d}).call(this,o("543d")["default"])}},[["15d5","common/runtime","common/vendor"]]]);