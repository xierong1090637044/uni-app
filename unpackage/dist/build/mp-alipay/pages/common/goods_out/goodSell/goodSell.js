(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/common/goods_out/goodSell/goodSell"],{"185f":function(t,e,o){"use strict";(function(t){o("d510"),o("921b");s(o("66fd"));var e=s(o("9016"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("c11b")["createPage"])},3152:function(t,e,o){"use strict";var s=o("782d"),r=o.n(s);r.a},"3b6a":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,r,n,a,u=l(o("9546")),c=l(o("7fd5")),i=l(o("9f50"));l(o("856d")),l(o("a2fc"));function l(t){return t&&t.__esModule?t:{default:t}}function d(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=m(t))){var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r,n=!0,a=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return n=t.done,t},e:function(t){a=!0,r=t},f:function(){try{n||null==s.return||s.return()}finally{if(a)throw r}}}}function m(t,e){if(t){if("string"===typeof t)return y(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?y(t,e):void 0}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,s=new Array(e);o<e;o++)s[o]=t[o];return s}var h={data:function(){return{user:t.getStorageSync("user"),identity:t.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",really_total_money:0,real_money:0,all_money:0,allCostPrice:0,custom:null,account:"",outType:"",discount:"",pickerTypes:[{desc:"自提",type:1},{desc:"快递",type:2},{desc:"物流",type:3},{desc:"送货上门",type:4}],expressNum:"",total_num:0,nowDay:c.default.getDay(0,!0),canOpretion:!0,wetherDebt:!1}},onLoad:function(){r=this,s=t.getStorageSync("uid"),this.products=t.getStorageSync("products"),r.user.rights&&r.user.rights.othercurrent&&(r.othercurrent=r.user.rights.othercurrent)},onShow:function(){if(this.really_total_money=0,this.all_money=0,this.real_money=0,this.total_num=0,r.allCostPrice=0,r.custom=t.getStorageSync("custom"),a=t.getStorageSync("shop"),r.account=t.getStorageSync("account"),a){r.shop_name=a.name;var e=u.default.Pointer("shops");n=e.set(a.objectId)}if(r.custom.discount){r.discount=r.custom.discount;for(var o=0;o<this.products.length;o++)this.all_money=Number((this.products[o].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[o].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[o].num),r.allCostPrice=r.allCostPrice+Number(r.products[o].num)*Number(r.products[o].costPrice);this.really_total_money=this.really_total_money*r.discount/100,this.real_money=Number(this.all_money.toFixed(2))*r.discount/100,this.all_money=this.all_money*r.discount/100}else{for(var s=0;s<this.products.length;s++)this.all_money=Number((this.products[s].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[s].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[s].num),r.allCostPrice=r.allCostPrice+Number(r.products[s].num)*Number(r.products[s].costPrice);this.real_money=Number(this.all_money.toFixed(2))}r.stock=t.getStorageSync("warehouse")?t.getStorageSync("warehouse")[0].stock:""},methods:{changeDebtStatus:function(t){0==t.detail.value&&(this.real_money=Number(this.all_money.toFixed(2))),r.wetherDebt=t.detail.value},changeStatus:function(t){r.canOpretion=t.detail.value},scan_code:function(){},bindDateChange:function(t){r.nowDay=t.detail.value+" 00:00:00"},removeImg:function(t){r.Images.splice(t,1),r.Images=r.Images},upload_image:function(){r.user.is_vip?t.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){console.log(t);var e,o,s=Date.parse(new Date),n=t.tempFilePaths,a=d(n);try{for(a.s();!(o=a.n()).done;){var c=o.value;e=u.default.File(s+".jpg",c)}}catch(i){a.e(i)}finally{a.f()}e.save().then((function(t){var e,o=d(t);try{for(o.s();!(e=o.n()).done;){var s=e.value;r.Images.push(s.url)}}catch(i){o.e(i)}finally{o.f()}}))}}):t.showToast({title:"您还不是会员，无法使用",icon:"none"})},getDiscount:function(t){var e=Number(t.detail.value);e>=100?r.discount=100:(r.discount=e,r.real_money=Number(this.all_money.toFixed(2))*e/100)},select_outType:function(t){r.outType=r.pickerTypes[t.detail.value],2==r.outType.type&&3==r.outType.type||(r.expressNum="")},formSubmit:function(e){if(!this.button_disabled){t.getStorageSync("identity");this.button_disabled=!0;e.detail.formId;var o=1;if(t.showLoading({title:"请勿退出..."}),""==t.getStorageSync("custom")||void 0==t.getStorageSync("custom"))return t.showToast({icon:"none",title:"请选择客户"}),void(this.button_disabled=!1);for(var l=new Array,d=[],m=[],y=[],h=0;h<this.products.length;h++){var p=Number(this.products[h].reserve)-this.products[h].num,f=u.default.Query("Bills"),_={},g=u.default.Pointer("_User"),b=g.set(s),v=u.default.Pointer("_User"),S=v.set(t.getStorageSync("masterId")),N=u.default.Pointer("Goods"),I=N.set(this.products[h].header?this.products[h].header.objectId:this.products[h].objectId);if(t.getStorageSync("custom")){var P=u.default.Pointer("customs"),w=P.set(t.getStorageSync("custom").objectId);f.set("custom",w)}f.set("goodsName",this.products[h].goodsName),f.set("retailPrice",this.products[h].modify_retailPrice.toString()),f.set("num",Number(this.products[h].num)),f.set("total_money",this.products[h].total_money),f.set("really_total_money",this.products[h].really_total_money),f.set("goodsId",I),f.set("userId",b),f.set("allCostPrice",Number(r.products[h].num)*Number(r.products[h].costPrice)),f.set("type",-1),f.set("count",1),f.set("extra_type",o),f.set("opreater",S),f.set("status",r.canOpretion),f.set("createdTime",{__type:"Date",iso:r.nowDay});var j={};if(this.products[h].stocks&&this.products[h].stocks.objectId){var k=u.default.Pointer("stocks"),T=k.set(this.products[h].stocks.objectId);f.set("stock",T),_.stock=this.products[h].stocks.stock_name,-1==m.indexOf(this.products[h].stocks.objectId)&&(m.push(this.products[h].stocks.objectId),y.push(this.products[h].stocks.stock_name))}_.goodsName=this.products[h].goodsName,_.modify_retailPrice=this.products[h].modify_retailPrice.toString(),_.retailPrice=this.products[h].retailPrice,_.total_money=this.products[h].total_money,j.costPrice=this.products[h].costPrice,j.retailPrice=this.products[h].retailPrice,j.objectId=this.products[h].objectId,j.reserve=p,this.products[h].selectd_model&&(j.selected_model=this.products[h].selected_model,j.models=this.products[h].models),_.goodsId=j,_.type=-1,_.num=this.products[h].num,_.warning_num=this.products[h].warning_num,_.packingUnit=this.products[h].packingUnit,a&&(f.set("shop",n),c.default.record_shopOut(a.objectId,a.have_out+this.products[h].num)),l.push(f),d.push(_)}u.default.Query("Bills").saveAll(l).then((function(l){for(var h=[],p=0;p<l.length;p++)h.push(l[p].success.objectId);var f=u.default.Pointer("_User"),_=f.set(s),g=t.getStorageSync("masterId"),b=u.default.Pointer("_User"),v=b.set(g),S=u.default.Query("order_opreations");if(S.set("detail",d),S.set("bills",h),S.set("beizhu",e.detail.value.input_beizhu),S.set("type",-1),S.set("extra_type",o),S.set("opreater",v),S.set("stockIds",m),S.set("stockNames",y),S.set("master",_),S.set("real_num",r.total_num),S.set("allCostPrice",r.allCostPrice),S.set("profit",r.all_money-r.allCostPrice),r.discount&&S.set("discount",r.discount),S.set("goodsName",r.products[0].goodsName),S.set("real_money",Number(r.real_money)),S.set("debt",r.all_money-Number(r.real_money)),a&&S.set("shop",n),r.account){var N=u.default.Pointer("accounts"),I=N.set(r.account.objectId);S.set("account",I);var P=u.default.Query("accounts");P.get(r.account.objectId).then((function(t){t.set("money",t.money+Number(r.real_money)),t.save().then((function(t){}))}))}if(r.custom){var w=u.default.Pointer("customs"),j=w.set(r.custom.objectId);if(S.set("custom",j),r.all_money-Number(r.real_money)>0){var k=u.default.Query("customs");k.get(r.custom.objectId).then((function(t){var e=null==t.debt?0:t.debt;e+=r.all_money-Number(r.real_money),console.log(e);var o=u.default.Query("customs");o.get(r.custom.objectId).then((function(t){t.set("debt",e),t.save()}))}))}}r.outType&&(S.set("typeDesc",r.outType.desc),S.set("expressNum",r.expressNum)),S.set("all_money",r.all_money),S.set("Images",r.Images),S.set("status",r.canOpretion),S.set("createdTime",{__type:"Date",iso:r.nowDay}),S.save().then((function(e){var o=e.objectId,s=e.createdAt;if(r.canOpretion){r.products;c.default.outRedGoodNum(r.products).then((function(e){t.hideLoading(),t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),t.setStorageSync("is_option",!0),t.showToast({title:"产品销售成功"}),setTimeout((function(){var e={};e.goodsName=r.products[0].goodsName,e.total_num=r.total_num,e.createdAt=s,e.operationId=o,i.default.sendTempMini(e,"out"),r.button_disabled=!1,c.default.log(t.getStorageSync("user").nickName+"销售了'"+r.products[0].goodsName+"'等"+r.products.length+"商品",-1,o),t.navigateBack({delta:2})}),500)}))}}))}),(function(t){console.log("异常处理")}))}}}};e.default=h}).call(this,o("c11b")["default"])},"782d":function(t,e,o){},9016:function(t,e,o){"use strict";o.r(e);var s=o("dd41"),r=o("e8bc");for(var n in r)"default"!==n&&function(t){o.d(e,t,(function(){return r[t]}))}(n);o("3152");var a,u=o("f0c5"),c=Object(u["a"])(r["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],a);e["default"]=c.exports},dd41:function(t,e,o){"use strict";var s,r=function(){var t=this,e=t.$createElement,o=(t._self._c,t.nowDay.split(" "));t.$mp.data=Object.assign({},{$root:{g0:o}})},n=[];o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return s}))},e8bc:function(t,e,o){"use strict";o.r(e);var s=o("3b6a"),r=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,(function(){return s[t]}))}(n);e["default"]=r.a}},[["185f","common/runtime","common/vendor"]]]);