(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/commonNew/goods_out/out_detail/out_detail"],{"1a84":function(t,e,o){"use strict";var s,r=function(){var t=this,e=t.$createElement,o=(t._self._c,t.nowDay.split(" "));t._isMounted||(t.e0=function(e){t.isChooseStockClass=!0},t.e1=function(e){t.isChooseStockClass=!1}),t.$mp.data=Object.assign({},{$root:{g0:o}})},n=[];o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return s}))},"34a5":function(t,e,o){"use strict";o.r(e);var s=o("8585"),r=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,(function(){return s[t]}))}(n);e["default"]=r.a},"43b2":function(t,e,o){"use strict";(function(t){o("d510"),o("921b");s(o("66fd"));var e=s(o("5cae"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("c11b")["createPage"])},"5cae":function(t,e,o){"use strict";o.r(e);var s=o("1a84"),r=o("34a5");for(var n in r)"default"!==n&&function(t){o.d(e,t,(function(){return r[t]}))}(n);o("dfb6");var a,i=o("f0c5"),u=Object(i["a"])(r["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],a);e["default"]=u.exports},8585:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,r,n=i(o("9546")),a=i(o("7fd5"));i(o("9f50")),i(o("856d")),i(o("a2fc"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=c(t))){var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r,n=!0,a=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return n=t.done,t},e:function(t){a=!0,r=t},f:function(){try{n||null==s.return||s.return()}finally{if(a)throw r}}}}function c(t,e){if(t){if("string"===typeof t)return l(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,s=new Array(e);o<e;o++)s[o]=t[o];return s}var d={data:function(){return{user:t.getStorageSync("user"),identity:t.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,really_total_money:0,all_money:0,total_num:0,nowDay:a.default.getDay(0,!0),stockClass:"销售出库",isChooseStockClass:!1}},onLoad:function(){r=this,s=t.getStorageSync("uid"),this.products=t.getStorageSync("products");for(var e=0;e<this.products.length;e++)this.all_money=Number((this.products[e].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[e].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[e].num);this.real_money=Number(this.all_money.toFixed(2))},onShow:function(){r.stock=t.getStorageSync("warehouse")?t.getStorageSync("warehouse")[0].stock:""},methods:{bindDateChange:function(t){r.nowDay=t.detail.value+" 00:00:00"},chooseStockClass:function(t){r.stockClass=t,r.isChooseStockClass=!1},removeImg:function(t){r.Images.splice(t,1),r.Images=r.Images},upload_image:function(){r.user.is_vip?t.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){console.log(t);var e,o,s=Date.parse(new Date),a=t.tempFilePaths,i=u(a);try{for(i.s();!(o=i.n()).done;){var c=o.value;e=n.default.File(s+".jpg",c)}}catch(l){i.e(l)}finally{i.f()}e.save().then((function(t){var e,o=u(t);try{for(o.s();!(e=o.n()).done;){var s=e.value;r.Images.push(s.url)}}catch(l){o.e(l)}finally{o.f()}}))}}):t.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(e){if(!this.button_disabled)if(null!=r.stock&&""!=r.stock&&void 0!=r.stock){t.getStorageSync("identity");this.button_disabled=!0;var o=2;e.detail.formId;t.showLoading({title:"请勿退出..."});for(var i=new Array,u=[],c=[],l=[],d=[],m=0;m<this.products.length;m++){var f=Number(this.products[m].reserve)-this.products[m].num;d.push(this.products[m].goodsName);var h=n.default.Query("Bills"),y={},p=n.default.Pointer("_User"),g=p.set(s),_=n.default.Pointer("_User"),b=_.set(t.getStorageSync("masterId")),v=n.default.Pointer("Goods"),S=v.set(this.products[m].header?this.products[m].header.objectId:this.products[m].objectId);if(t.getStorageSync("custom")){var k=n.default.Pointer("customs"),I=k.set(t.getStorageSync("custom").objectId);h.set("custom",I)}h.set("goodsName",this.products[m].goodsName),h.set("retailPrice",this.products[m].modify_retailPrice.toString()),h.set("num",Number(this.products[m].num)),h.set("total_money",this.products[m].total_money),h.set("really_total_money",this.products[m].really_total_money),h.set("goodsId",S),h.set("userId",g),h.set("type",-1),h.set("extra_type",o),h.set("opreater",b),h.set("status",!0),h.set("createdTime",{__type:"Date",iso:r.nowDay});var w={};if(r.stock&&r.stock.objectId){var N=n.default.Pointer("stocks"),P=N.set(r.stock.objectId);h.set("stock",P),y.stock=r.stock.stock_name,c.push(r.stock.objectId),l.push(r.stock.stock_name)}y.goodsName=this.products[m].goodsName,y.modify_retailPrice=this.products[m].modify_retailPrice.toString(),y.retailPrice=this.products[m].retailPrice,y.total_money=this.products[m].total_money,w.costPrice=this.products[m].costPrice,w.retailPrice=this.products[m].retailPrice,w.objectId=this.products[m].objectId,w.reserve=f,this.products[m].selectd_model&&(w.selected_model=this.products[m].selected_model,w.models=this.products[m].models),y.goodsId=w,y.type=-1,y.num=this.products[m].num,y.warning_num=this.products[m].warning_num,y.packingUnit=this.products[m].packingUnit,i.push(h),u.push(y)}n.default.Query("Bills").saveAll(i).then((function(i){for(var m=[],f=0;f<i.length;f++)m.push(i[f].success.objectId);var h=n.default.Pointer("_User"),y=h.set(s),p=t.getStorageSync("masterId"),g=n.default.Pointer("_User"),_=g.set(p),b=n.default.Query("order_opreations");b.set("detail",u),b.set("bills",m),b.set("beizhu",e.detail.value.input_beizhu),b.set("type",-1),b.set("extra_type",o),b.set("opreater",_),b.set("stockClass",r.stockClass),b.set("stockIds",c),b.set("stockNames",l),b.set("master",y),b.set("real_num",r.total_num),b.set("goodsName",d.join(",")),b.set("real_money",Number(r.real_money)),b.set("debt",r.all_money-Number(r.real_money)),b.set("all_money",r.all_money),b.set("Images",r.Images),b.set("status",!0),b.set("createdTime",{__type:"Date",iso:r.nowDay}),b.save().then((function(e){var o=e.objectId;e.createdAt;a.default.outRedGoodNumNew(r.products).then((function(e){t.showToast({title:"出库成功"}),t.hideLoading(),t.setStorageSync("is_option",!0),t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),setTimeout((function(){r.button_disabled=!1,a.default.log(t.getStorageSync("user").nickName+"出库了'"+r.products[0].goodsName+"'等"+r.products.length+"商品",-1,o),t.navigateBack({delta:2})}),500)}))}))}),(function(t){console.log("异常处理")}))}else t.showToast({icon:"none",title:"请选择出库仓库"})},sendTemp:function(){}}};e.default=d}).call(this,o("c11b")["default"])},dfb6:function(t,e,o){"use strict";var s=o("e027"),r=o.n(s);r.a},e027:function(t,e,o){}},[["43b2","common/runtime","common/vendor"]]]);