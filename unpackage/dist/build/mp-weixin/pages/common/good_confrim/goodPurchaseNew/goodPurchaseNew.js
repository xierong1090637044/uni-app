(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_confrim/goodPurchaseNew/goodPurchaseNew"],{1207:function(e,t,o){"use strict";o.r(t);var r=o("744c"),n=o("37f1");for(var s in n)"default"!==s&&function(e){o.d(t,e,(function(){return n[e]}))}(s);o("5814");var a,c=o("f0c5"),u=Object(c["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);t["default"]=u.exports},1975:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n,s=c(o("4515")),a=c(o("f287"));c(o("ce79")),c(o("cbd0")),c(o("efc7"));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=i(e))){var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n,s=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){a=!0,n=e},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw n}}}}function i(e,t){if(e){if("string"===typeof e)return l(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}var d={data:function(){return{user:e.getStorageSync("user"),identity:e.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,account:"",button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,really_total_money:0,producer:null,total_num:0,nowDay:a.default.getDay(0,!0,!0),wetherDebt:!1}},onLoad:function(){n=this,r=e.getStorageSync("uid"),this.products=e.getStorageSync("products");for(var t=0;t<this.products.length;t++)this.all_money=Number((this.products[t].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[t].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[t].num);this.real_money=Number(this.all_money.toFixed(2)),n.user.rights&&n.user.rights.othercurrent&&(n.othercurrent=n.user.rights.othercurrent)},onShow:function(){n.producer=e.getStorageSync("producer"),n.stock=e.getStorageSync("warehouse")?e.getStorageSync("warehouse")[0].stock:"",n.account=e.getStorageSync("account")},methods:{changeDebtStatus:function(e){0==e.detail.value&&(this.real_money=Number(this.all_money.toFixed(2))),n.wetherDebt=e.detail.value},bindDateChange:function(e){n.nowDay=e.detail.value+" 00:00:00"},removeImg:function(e){n.Images.splice(e,1),n.Images=n.Images},upload_image:function(){n.user.is_vip?e.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var t,o,r=Date.parse(new Date),a=e.tempFilePaths,c=u(a);try{for(c.s();!(o=c.n()).done;){var i=o.value;t=s.default.File(r+".jpg",i)}}catch(l){c.e(l)}finally{c.f()}t.save().then((function(e){var t,o=u(e);try{for(o.s();!(t=o.n()).done;){var r=t.value;n.Images.push(r.url)}}catch(l){o.e(l)}finally{o.f()}}))}}):e.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(t){e.getStorageSync("identity");this.button_disabled=!0;t.detail.formId;var o=1;if(e.showLoading({title:"上传中..."}),""==e.getStorageSync("producer")||void 0==e.getStorageSync("producer"))return e.showToast({icon:"none",title:"请选择供应商"}),void(this.button_disabled=!1);for(var c=new Array,u=[],i=0;i<this.products.length;i++){var l=Number(this.products[i].reserve)+this.products[i].num,d={},f=s.default.Query("Bills"),m=s.default.Pointer("_User"),y=m.set(r),h=s.default.Pointer("Goods"),g=h.set(this.products[i].objectId),p=e.getStorageSync("masterId"),_=s.default.Pointer("_User"),v=_.set(p);if(f.set("goodsName",this.products[i].goodsName),f.set("retailPrice",this.products[i].modify_retailPrice),f.set("num",Number(this.products[i].num)),f.set("total_money",Number(this.products[i].total_money)),f.set("really_total_money",Number(this.products[i].really_total_money)),f.set("goodsId",g),f.set("userId",y),f.set("opreater",v),f.set("type",1),f.set("extra_type",o),f.set("status",!1),f.set("createdTime",{__type:"Date",iso:n.nowDay}),n.producer){var b=s.default.Pointer("producers"),S=b.set(n.producer.objectId);f.set("producer",S)}var w={};if(n.stock&&n.stock.objectId){var I=s.default.Pointer("stocks"),k=I.set(n.stock.objectId);f.set("stock",k),d.stock=n.stock.stock_name}d.goodsName=this.products[i].goodsName,d.modify_retailPrice=this.products[i].modify_retailPrice.toString(),d.retailPrice=this.products[i].retailPrice,d.total_money=this.products[i].total_money,w.costPrice=this.products[i].costPrice,w.retailPrice=this.products[i].retailPrice,w.objectId=this.products[i].objectId,w.reserve=l,this.products[i].selectd_model&&(w.selected_model=this.products[i].selected_model,w.models=this.products[i].models),d.goodsId=w,d.num=this.products[i].num,d.type=1,c.push(f),u.push(d)}s.default.Query("Bills").saveAll(c).then((function(c){for(var i=[],l=0;l<c.length;l++)i.push(c[l].success.objectId);var d=s.default.Pointer("_User"),f=d.set(r),m=e.getStorageSync("masterId"),y=s.default.Pointer("_User"),h=y.set(m),g=s.default.Query("order_opreations");if(g.set("beizhu",t.detail.value.input_beizhu),g.set("detail",u),g.set("real_num",n.total_num),g.set("type",1),g.set("extra_type",o),g.set("bills",i),g.set("opreater",h),g.set("master",f),n.stock&&n.stock.objectId){var p=s.default.Pointer("stocks"),_=p.set(n.stock.objectId);g.set("stock",_)}if(g.set("goodsName",n.products[0].goodsName),g.set("real_money",Number(n.real_money)),g.set("debt",n.all_money-Number(n.real_money)),n.account){var v=s.default.Pointer("accounts"),b=v.set(n.account.objectId);g.set("account",b);var S=s.default.Query("accounts");S.get(n.account.objectId).then((function(e){e.set("money",e.money-Number(n.real_money)),e.save().then((function(e){}))}))}if(g.set("recordType","new"),n.producer){var w=s.default.Pointer("producers"),I=w.set(n.producer.objectId);if(g.set("producer",I),n.all_money-Number(n.real_money)>0){var k=s.default.Query("producers");k.get(n.producer.objectId).then((function(e){var t=e.debt?e.debt:0;t+=n.all_money-Number(n.real_money);var o=s.default.Query("producers");o.get(n.producer.objectId).then((function(e){e.set("debt",t),e.save()}))}))}}g.set("all_money",n.all_money),g.set("Images",n.Images),g.set("status",!1),g.set("createdTime",{__type:"Date",iso:n.nowDay}),g.save().then((function(t){var o=t.objectId;e.hideLoading(),e.showToast({title:"产品采购成功",icon:"success",duration:1e3,complete:function(){setTimeout((function(){a.default.log(e.getStorageSync("user").nickName+"采购了'"+n.products[0].goodsName+"'等"+n.products.length+"商品",11,o),n.button_disabled=!1,e.setStorageSync("is_option",!0),e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),e.redirectTo({url:"/pages/report/EnteringHistory/SellDetail/SellDetail?id="+o})}),1e3)}})}))}),(function(e){console.log("异常处理")}))},can_addGoods:function(){return new Promise((function(t,o){var r=e.getStorageSync("products"),n=e.getStorageSync("warehouse");if(n){var s,a=u(r);try{var c=function(){var o=s.value;if(""==o.stocks.stock_name||void 0==o.stocks.stock_name||o.stocks.stock_name!=n[0].stock.stock_name)return e.showModal({title:"'"+o.goodsName+"'没有关联到调出店仓",content:"是否将它关联到此店仓",showCancel:!0,success:function(e){console.log(e),e.confirm?t([!0,o]):t([!1])},fail:function(){}}),{v:void 0};t([!1])};for(a.s();!(s=a.n()).done;){var i=c();if("object"===typeof i)return i.v}}catch(l){a.e(l)}finally{a.f()}}else t([!1])}))}}};t.default=d}).call(this,o("543d")["default"])},"37f1":function(e,t,o){"use strict";o.r(t);var r=o("1975"),n=o.n(r);for(var s in r)"default"!==s&&function(e){o.d(t,e,(function(){return r[e]}))}(s);t["default"]=n.a},5814:function(e,t,o){"use strict";var r=o("f6a5"),n=o.n(r);n.a},"744c":function(e,t,o){"use strict";var r,n=function(){var e=this,t=e.$createElement,o=(e._self._c,e.othercurrent.indexOf("1")),r=e.nowDay.split(" "),n=e.othercurrent.indexOf("1");e.$mp.data=Object.assign({},{$root:{g0:o,g1:r,g2:n}})},s=[];o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return r}))},c373:function(e,t,o){"use strict";(function(e){o("d34b"),o("921b");r(o("66fd"));var t=r(o("1207"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},f6a5:function(e,t,o){}},[["c373","common/runtime","common/vendor"]]]);