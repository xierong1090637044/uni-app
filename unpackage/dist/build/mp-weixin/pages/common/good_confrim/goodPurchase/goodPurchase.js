(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_confrim/goodPurchase/goodPurchase"],{"0a0c":function(t,e,o){"use strict";var r,n=function(){var t=this,e=t.$createElement,o=(t._self._c,t.othercurrent.indexOf("1")),r=t.nowDay.split(" ");t.$mp.data=Object.assign({},{$root:{g0:o,g1:r}})},s=[];o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return s})),o.d(e,"a",(function(){return r}))},"6a02":function(t,e,o){"use strict";var r=o("788d"),n=o.n(r);n.a},"71bd":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,n,s,a=i(o("9546")),u=i(o("7fd5")),c=(i(o("a2fc")),i(o("9f50")));i(o("856d"));function i(t){return t&&t.__esModule?t:{default:t}}function d(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=l(t))){var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n,s=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return s=t.done,t},e:function(t){a=!0,n=t},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw n}}}}function l(t,e){if(t){if("string"===typeof t)return m(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}var f={data:function(){return{user:t.getStorageSync("user"),identity:t.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,account:"",button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,really_total_money:0,producer:null,total_num:0,nowDay:u.default.getDay(0,!0),canOpretion:!0,shop:"",wetherDebt:!1}},onLoad:function(){n=this,r=t.getStorageSync("uid"),this.products=t.getStorageSync("products");for(var e=0;e<this.products.length;e++)this.all_money=Number((this.products[e].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[e].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[e].num);this.real_money=Number(this.all_money.toFixed(2)),n.user.rights&&n.user.rights.othercurrent&&(n.othercurrent=n.user.rights.othercurrent)},onShow:function(){if(n.producer=t.getStorageSync("producer"),n.account=t.getStorageSync("account"),t.getStorageSync("shop")){n.shop=t.getStorageSync("shop");var e=a.default.Pointer("shops");s=e.set(n.shop.objectId)}},methods:{changeDebtStatus:function(t){0==t.detail.value&&(this.real_money=Number(this.all_money.toFixed(2))),n.wetherDebt=t.detail.value},bindDateChange:function(t){n.nowDay=t.detail.value+" 00:00:00"},changeStatus:function(t){n.canOpretion=t.detail.value},removeImg:function(t){n.Images.splice(t,1),n.Images=n.Images},upload_image:function(){n.user.is_vip?t.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var e,o,r=Date.parse(new Date),s=t.tempFilePaths,u=d(s);try{for(u.s();!(o=u.n()).done;){var c=o.value;e=a.default.File(r+".jpg",c)}}catch(i){u.e(i)}finally{u.f()}e.save().then((function(t){var e,o=d(t);try{for(o.s();!(e=o.n()).done;){var r=e.value;n.Images.push(r.url)}}catch(i){o.e(i)}finally{o.f()}}))}}):t.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(e){t.getStorageSync("identity");if(!this.button_disabled){this.button_disabled=!0;e.detail.formId;var o=1;if(t.showLoading({title:"请勿退出..."}),""==t.getStorageSync("producer")||void 0==t.getStorageSync("producer"))return t.showToast({icon:"none",title:"请选择供应商"}),void(this.button_disabled=!1);for(var i=new Array,d=[],l=[],m=[],f=0;f<this.products.length;f++){var h=Number(this.products[f].reserve)+this.products[f].num,p={},y=a.default.Query("Bills"),g=a.default.Pointer("_User"),_=g.set(r),b=a.default.Pointer("Goods"),v=b.set(this.products[f].header?this.products[f].header.objectId:this.products[f].objectId),S=t.getStorageSync("masterId"),I=a.default.Pointer("_User"),w=I.set(S);if(y.set("goodsName",this.products[f].goodsName),y.set("retailPrice",this.products[f].modify_retailPrice.toString()),y.set("num",Number(this.products[f].num)),y.set("total_money",this.products[f].total_money),y.set("really_total_money",this.products[f].really_total_money),y.set("goodsId",v),y.set("userId",_),y.set("opreater",w),y.set("type",1),y.set("extra_type",o),y.set("status",n.canOpretion),y.set("createdTime",{__type:"Date",iso:n.nowDay}),n.producer){var N=a.default.Pointer("producers"),P=N.set(n.producer.objectId);y.set("producer",P)}var j={};if(this.products[f].stocks&&this.products[f].stocks.objectId){var k=a.default.Pointer("stocks"),D=k.set(this.products[f].stocks.objectId);y.set("stock",D),p.stock=this.products[f].stocks.stock_name,-1==l.indexOf(this.products[f].stocks.objectId)&&(l.push(this.products[f].stocks.objectId),m.push(this.products[f].stocks.stock_name))}p.goodsName=this.products[f].goodsName,p.modify_retailPrice=this.products[f].modify_retailPrice.toString(),p.retailPrice=this.products[f].retailPrice,p.total_money=this.products[f].total_money,j.costPrice=this.products[f].costPrice,j.retailPrice=this.products[f].retailPrice,j.objectId=this.products[f].objectId,j.reserve=h,this.products[f].selected_model&&(j.selected_model=this.products[f].selected_model,j.models=this.products[f].models),p.goodsId=j,p.num=this.products[f].num,p.packingUnit=this.products[f].packingUnit,p.type=1,i.push(y),d.push(p)}a.default.Query("Bills").saveAll(i).then((function(i){for(var f=[],h=0;h<i.length;h++)f.push(i[h].success.objectId);var p=a.default.Pointer("_User"),y=p.set(r),g=t.getStorageSync("masterId"),_=a.default.Pointer("_User"),b=_.set(g),v=a.default.Query("order_opreations");if(v.set("beizhu",e.detail.value.input_beizhu),v.set("detail",d),v.set("real_num",n.total_num),v.set("type",1),v.set("extra_type",o),v.set("bills",f),v.set("opreater",b),v.set("master",y),v.set("stockIds",l),v.set("stockNames",m),v.set("goodsName",n.products[0].goodsName),v.set("real_money",Number(n.real_money)),v.set("debt",n.all_money-Number(n.real_money)),n.shop&&v.set("shop",s),n.account){var S=a.default.Pointer("accounts"),I=S.set(n.account.objectId);v.set("account",I);var w=a.default.Query("accounts");w.get(n.account.objectId).then((function(t){t.set("money",t.money-Number(n.real_money)),t.save().then((function(t){}))}))}if(v.set("createdTime",{__type:"Date",iso:n.nowDay}),n.producer){var N=a.default.Pointer("producers"),P=N.set(n.producer.objectId);if(v.set("producer",P),n.all_money-Number(n.real_money)>0){var j=a.default.Query("producers");j.get(n.producer.objectId).then((function(t){var e=null==t.debt?0:t.debt;e+=n.all_money-Number(n.real_money);var o=a.default.Query("producers");o.get(n.producer.objectId).then((function(t){t.set("debt",e),t.save()}))}))}}v.set("all_money",n.all_money),v.set("Images",n.Images),v.set("status",n.canOpretion),v.save().then((function(e){var o=e.objectId,r=e.createdAt;n.canOpretion?u.default.enterAddGoodNum(n.products,"purchase").then((function(e){t.hideLoading(),t.setStorageSync("is_option",!0),t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),t.showToast({title:"产品采购成功"}),setTimeout((function(){var e={};e.goodsName=n.products[0].goodsName,e.total_num=n.total_num,e.createdAt=r,e.operationId=o,c.default.sendTempMini(e,"enter"),n.button_disabled=!1,u.default.log(t.getStorageSync("user").nickName+"采购了'"+n.products[0].goodsName+"'等"+n.products.length+"商品",1,o),t.navigateBack({delta:2})}),500)})):(t.hideLoading(),t.setStorageSync("is_option",!0),t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),t.showToast({title:"产品采购成功"}),setTimeout((function(){n.button_disabled=!1,u.default.log(t.getStorageSync("user").nickName+"采购了'"+n.products[0].goodsName+"'等"+n.products.length+"商品，还未入库",11,o),t.navigateBack({delta:2})}),500))}))}),(function(t){console.log("异常处理")}))}}}};e.default=f}).call(this,o("543d")["default"])},"788d":function(t,e,o){},"861c":function(t,e,o){"use strict";o.r(e);var r=o("0a0c"),n=o("a98a");for(var s in n)"default"!==s&&function(t){o.d(e,t,(function(){return n[t]}))}(s);o("6a02");var a,u=o("f0c5"),c=Object(u["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=c.exports},a98a:function(t,e,o){"use strict";o.r(e);var r=o("71bd"),n=o.n(r);for(var s in r)"default"!==s&&function(t){o.d(e,t,(function(){return r[t]}))}(s);e["default"]=n.a},f1e9:function(t,e,o){"use strict";(function(t){o("d510"),o("921b");r(o("66fd"));var e=r(o("861c"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])}},[["f1e9","common/runtime","common/vendor"]]]);