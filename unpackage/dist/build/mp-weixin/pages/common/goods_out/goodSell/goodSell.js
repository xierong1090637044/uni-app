(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/goods_out/goodSell/goodSell"],{"0302":function(t,e,o){"use strict";(function(t){o("a961"),o("921b");s(o("66fd"));var e=s(o("6b08"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},4442:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,r,a,n,u=l(o("c74b")),c=l(o("df06")),i=l(o("da3f"));l(o("b410")),l(o("428b"));function l(t){return t&&t.__esModule?t:{default:t}}var d={data:function(){return{user:t.getStorageSync("user"),identity:t.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",really_total_money:0,real_money:0,all_money:0,allCostPrice:0,custom:null,account:"",outType:"",discount:"",pickerTypes:[{desc:"自提",type:1},{desc:"快递",type:2},{desc:"物流",type:3},{desc:"送货上门",type:4}],expressNum:"",total_num:0,nowDay:c.default.getDay(0,!0,!0),canOpretion:!0,wetherDebt:!1}},onLoad:function(){r=this,s=t.getStorageSync("uid"),this.products=t.getStorageSync("products"),r.user.rights&&r.user.rights.othercurrent&&(r.othercurrent=r.user.rights.othercurrent)},onShow:function(){if(this.really_total_money=0,this.all_money=0,this.real_money=0,this.total_num=0,r.allCostPrice=0,r.custom=t.getStorageSync("custom"),n=t.getStorageSync("shop"),r.account=t.getStorageSync("account"),n){r.shop_name=n.name;var e=u.default.Pointer("shops");a=e.set(n.objectId)}if(r.custom.discount){r.discount=r.custom.discount;for(var o=0;o<this.products.length;o++)this.all_money=Number((this.products[o].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[o].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[o].num),r.allCostPrice=r.allCostPrice+Number(r.products[o].num)*Number(r.products[o].costPrice);this.really_total_money=this.really_total_money*r.discount/100,this.real_money=Number(this.all_money.toFixed(2))*r.discount/100,this.all_money=this.all_money*r.discount/100}else{for(var s=0;s<this.products.length;s++)this.all_money=Number((this.products[s].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[s].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[s].num),r.allCostPrice=r.allCostPrice+Number(r.products[s].num)*Number(r.products[s].costPrice);this.real_money=Number(this.all_money.toFixed(2))}r.stock=t.getStorageSync("warehouse")?t.getStorageSync("warehouse")[0].stock:""},methods:{changeDebtStatus:function(t){0==t.detail.value&&(this.real_money=Number(this.all_money.toFixed(2))),r.wetherDebt=t.detail.value},changeStatus:function(t){r.canOpretion=t.detail.value},scan_code:function(){t.scanCode({onlyFromCamera:!0,success:function(t){console.log("条码类型："+t.scanType),console.log("条码内容："+t.result),r.expressNum=t.result}})},bindDateChange:function(t){r.nowDay=t.detail.value+" 00:00:00"},removeImg:function(t){r.Images.splice(t,1),r.Images=r.Images},upload_image:function(){r.user.is_vip?t.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){console.log(t);var e,o=Date.parse(new Date),s=t.tempFilePaths,a=!0,n=!1,c=void 0;try{for(var i,l=s[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var d=i.value;e=u.default.File(o+".jpg",d)}}catch(m){n=!0,c=m}finally{try{a||null==l.return||l.return()}finally{if(n)throw c}}e.save().then((function(t){var e=!0,o=!1,s=void 0;try{for(var a,n=t[Symbol.iterator]();!(e=(a=n.next()).done);e=!0){var u=a.value;r.Images.push(u.url)}}catch(m){o=!0,s=m}finally{try{e||null==n.return||n.return()}finally{if(o)throw s}}}))}}):t.showToast({title:"您还不是会员，无法使用",icon:"none"})},getDiscount:function(t){var e=Number(t.detail.value);e>=100?r.discount=100:(r.discount=e,r.real_money=Number(this.all_money.toFixed(2))*e/100)},select_outType:function(t){r.outType=r.pickerTypes[t.detail.value],2==r.outType.type&&3==r.outType.type||(r.expressNum="")},formSubmit:function(e){if(!this.button_disabled){t.getStorageSync("identity");this.button_disabled=!0;e.detail.formId;var o=1;if(t.showLoading({title:"请勿退出..."}),""==t.getStorageSync("custom")||void 0==t.getStorageSync("custom"))return t.showToast({icon:"none",title:"请选择客户"}),void(this.button_disabled=!1);for(var l=new Array,d=[],m=[],y=[],h=0;h<this.products.length;h++){var p=Number(this.products[h].reserve)-this.products[h].num,_=u.default.Query("Bills"),f={},g=u.default.Pointer("_User"),b=g.set(s),v=u.default.Pointer("_User"),S=v.set(t.getStorageSync("masterId")),N=u.default.Pointer("Goods"),P=N.set(this.products[h].header?this.products[h].header.objectId:this.products[h].objectId);if(t.getStorageSync("custom")){var I=u.default.Pointer("customs"),k=I.set(t.getStorageSync("custom").objectId);_.set("custom",k)}_.set("goodsName",this.products[h].goodsName),_.set("retailPrice",this.products[h].modify_retailPrice.toString()),_.set("num",Number(this.products[h].num)),_.set("total_money",this.products[h].total_money),_.set("really_total_money",this.products[h].really_total_money),_.set("goodsId",P),_.set("userId",b),_.set("allCostPrice",Number(r.products[h].num)*Number(r.products[h].costPrice)),_.set("type",-1),_.set("count",1),_.set("extra_type",o),_.set("opreater",S),_.set("status",r.canOpretion),_.set("createdTime",{__type:"Date",iso:r.nowDay});var w={};if(this.products[h].stocks&&this.products[h].stocks.objectId){var j=u.default.Pointer("stocks"),x=j.set(this.products[h].stocks.objectId);_.set("stock",x),f.stock=this.products[h].stocks.stock_name,-1==m.indexOf(this.products[h].stocks.objectId)&&(m.push(this.products[h].stocks.objectId),y.push(this.products[h].stocks.stock_name))}f.goodsName=this.products[h].goodsName,f.modify_retailPrice=this.products[h].modify_retailPrice.toString(),f.retailPrice=this.products[h].retailPrice,f.total_money=this.products[h].total_money,w.costPrice=this.products[h].costPrice,w.retailPrice=this.products[h].retailPrice,w.objectId=this.products[h].objectId,w.reserve=p,this.products[h].selectd_model&&(w.selected_model=this.products[h].selected_model,w.models=this.products[h].models),f.goodsId=w,f.type=-1,f.num=this.products[h].num,f.warning_num=this.products[h].warning_num,f.packingUnit=this.products[h].packingUnit,n&&(_.set("shop",a),c.default.record_shopOut(n.objectId,n.have_out+this.products[h].num)),l.push(_),d.push(f)}u.default.Query("Bills").saveAll(l).then((function(l){for(var h=[],p=0;p<l.length;p++)h.push(l[p].success.objectId);var _=u.default.Pointer("_User"),f=_.set(s),g=t.getStorageSync("masterId"),b=u.default.Pointer("_User"),v=b.set(g),S=u.default.Query("order_opreations");if(S.set("detail",d),S.set("bills",h),S.set("beizhu",e.detail.value.input_beizhu),S.set("type",-1),S.set("extra_type",o),S.set("opreater",v),S.set("stockIds",m),S.set("stockNames",y),S.set("master",f),S.set("real_num",r.total_num),S.set("allCostPrice",r.allCostPrice),S.set("profit",r.all_money-r.allCostPrice),r.discount&&S.set("discount",r.discount),S.set("goodsName",r.products[0].goodsName),S.set("real_money",Number(r.real_money)),S.set("debt",r.all_money-Number(r.real_money)),n&&S.set("shop",a),r.account){var N=u.default.Pointer("accounts"),P=N.set(r.account.objectId);S.set("account",P);var I=u.default.Query("accounts");I.get(r.account.objectId).then((function(t){t.set("money",t.money+Number(r.real_money)),t.save().then((function(t){}))}))}if(r.custom){var k=u.default.Pointer("customs"),w=k.set(r.custom.objectId);if(S.set("custom",w),r.all_money-Number(r.real_money)>0){var j=u.default.Query("customs");j.get(r.custom.objectId).then((function(t){var e=null==t.debt?0:t.debt;e+=r.all_money-Number(r.real_money),console.log(e);var o=u.default.Query("customs");o.get(r.custom.objectId).then((function(t){t.set("debt",e),t.save()}))}))}}r.outType&&(S.set("typeDesc",r.outType.desc),S.set("expressNum",r.expressNum)),S.set("all_money",r.all_money),S.set("Images",r.Images),S.set("status",r.canOpretion),S.set("createdTime",{__type:"Date",iso:r.nowDay}),S.save().then((function(e){var o=e.objectId,s=e.createdAt;if(r.canOpretion){r.products;c.default.outRedGoodNum(r.products).then((function(e){t.hideLoading(),t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),t.setStorageSync("is_option",!0),t.showToast({title:"产品销售成功"}),setTimeout((function(){var e={};e.goodsName=r.products[0].goodsName,e.total_num=r.total_num,e.createdAt=s,e.operationId=o,i.default.sendTempMini(e,"out"),r.button_disabled=!1,c.default.log(t.getStorageSync("user").nickName+"销售了'"+r.products[0].goodsName+"'等"+r.products.length+"商品",-1,o),t.navigateBack({delta:2})}),500)}))}}))}),(function(t){console.log("异常处理")}))}}}};e.default=d}).call(this,o("543d")["default"])},"6b08":function(t,e,o){"use strict";o.r(e);var s=o("f648"),r=o("71d1");for(var a in r)"default"!==a&&function(t){o.d(e,t,(function(){return r[t]}))}(a);o("c42a");var n,u=o("f0c5"),c=Object(u["a"])(r["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],n);e["default"]=c.exports},"71d1":function(t,e,o){"use strict";o.r(e);var s=o("4442"),r=o.n(s);for(var a in s)"default"!==a&&function(t){o.d(e,t,(function(){return s[t]}))}(a);e["default"]=r.a},c0a8:function(t,e,o){},c42a:function(t,e,o){"use strict";var s=o("c0a8"),r=o.n(s);r.a},f648:function(t,e,o){"use strict";var s,r=function(){var t=this,e=t.$createElement,o=(t._self._c,t.nowDay.split(" "));t.$mp.data=Object.assign({},{$root:{g0:o}})},a=[];o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return s}))}},[["0302","common/runtime","common/vendor"]]]);