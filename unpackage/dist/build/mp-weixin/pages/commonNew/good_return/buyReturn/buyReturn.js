(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/commonNew/good_return/buyReturn/buyReturn"],{"12c3":function(t,e,o){"use strict";var s=o("e678"),r=o.n(s);r.a},"14f2":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,r,a,n=c(o("c74b")),u=c(o("df06"));c(o("da3f")),c(o("b410")),c(o("428b"));function c(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{user:t.getStorageSync("user"),identity:t.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,allCostPrice:0,really_total_money:0,custom:null,account:"",outType:"",discount:"",pickerTypes:[{desc:"自提",type:1},{desc:"快递",type:2},{desc:"物流",type:3},{desc:"送货上门",type:4}],expressNum:"",total_num:0,nowDay:u.default.getDay(0,!0,!0)}},onLoad:function(){r=this,s=t.getStorageSync("uid"),this.products=t.getStorageSync("products"),r.user.rights&&r.user.rights.othercurrent&&(r.othercurrent=r.user.rights.othercurrent)},onShow:function(){if(this.really_total_money=0,this.all_money=0,this.real_money=0,this.total_num=0,r.allCostPrice=0,r.custom=t.getStorageSync("custom"),a=t.getStorageSync("shop"),r.account=t.getStorageSync("account"),a){r.shop_name=a.name;var e=n.default.Pointer("shops");e.set(a.objectId)}for(var o=0;o<this.products.length;o++)this.all_money=Number((this.products[o].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[o].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[o].num),r.allCostPrice=r.allCostPrice+Number(r.products[o].num)*Number(r.products[o].costPrice);this.real_money=Number(this.all_money.toFixed(2)),r.stock=t.getStorageSync("warehouse")?t.getStorageSync("warehouse")[0].stock:""},methods:{bindDateChange:function(t){r.nowDay=t.detail.value+" 00:00:00"},removeImg:function(t){r.Images.splice(t,1),r.Images=r.Images},upload_image:function(){r.user.is_vip?t.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){console.log(t);var e,o=Date.parse(new Date),s=t.tempFilePaths,a=!0,u=!1,c=void 0;try{for(var i,l=s[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var d=i.value;e=n.default.File(o+".jpg",d)}}catch(m){u=!0,c=m}finally{try{a||null==l.return||l.return()}finally{if(u)throw c}}e.save().then((function(t){var e=!0,o=!1,s=void 0;try{for(var a,n=t[Symbol.iterator]();!(e=(a=n.next()).done);e=!0){var u=a.value;r.Images.push(u.url)}}catch(m){o=!0,s=m}finally{try{e||null==n.return||n.return()}finally{if(o)throw s}}}))}}):t.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(e){t.getStorageSync("identity");this.button_disabled=!0;e.detail.formId;if(t.showLoading({title:"上传中..."}),""==t.getStorageSync("custom")||void 0==t.getStorageSync("custom"))return t.showToast({icon:"none",title:"请选择客户"}),void(this.button_disabled=!1);for(var o=new Array,a=[],c=0;c<this.products.length;c++){var i=Number(this.products[c].reserve)-this.products[c].num,l=n.default.Query("Bills"),d={},m=n.default.Pointer("_User"),y=m.set(s),f=n.default.Pointer("_User"),g=f.set(t.getStorageSync("masterId")),h=n.default.Pointer("Goods"),p=h.set(this.products[c].objectId);if(t.getStorageSync("custom")){var _=n.default.Pointer("customs"),b=_.set(t.getStorageSync("custom").objectId);l.set("custom",b)}l.set("goodsName",this.products[c].goodsName),l.set("retailPrice",this.products[c].modify_retailPrice),l.set("num",Number(this.products[c].num)),l.set("total_money",Number(this.products[c].total_money)),l.set("really_total_money",Number(this.products[c].really_total_money)),l.set("allCostPrice",Number(r.products[c].num)*Number(r.products[c].costPrice)),l.set("goodsId",p),l.set("userId",y),l.set("type",1),l.set("extra_type",4),l.set("opreater",g),l.set("createdTime",{__type:"Date",iso:r.nowDay});var S={};if(r.stock&&r.stock.objectId){var v=n.default.Pointer("stocks"),P=v.set(r.stock.objectId);l.set("status",!0),l.set("stock",P),d.stock=r.stock.stock_name}else l.set("status",!1);d.goodsName=this.products[c].goodsName,d.modify_retailPrice=this.products[c].modify_retailPrice.toString(),d.retailPrice=this.products[c].retailPrice,d.total_money=this.products[c].total_money,S.costPrice=this.products[c].costPrice,S.retailPrice=this.products[c].retailPrice,S.objectId=this.products[c].objectId,S.reserve=i,this.products[c].selectd_model&&(S.selected_model=this.products[c].selected_model,S.models=this.products[c].models),d.goodsId=S,d.type=1,d.extra_type=4,d.num=this.products[c].num,d.warning_num=this.products[c].warning_num,o.push(l),a.push(d)}n.default.Query("Bills").saveAll(o).then((function(o){for(var c=[],i=0;i<o.length;i++)c.push(o[i].success.objectId);var l=n.default.Pointer("_User"),d=l.set(s),m=t.getStorageSync("masterId"),y=n.default.Pointer("_User"),f=y.set(m),g=n.default.Pointer("customs"),h=g.set(r.custom.objectId),p=n.default.Query("order_opreations");if(p.set("detail",a),p.set("bills",c),p.set("beizhu",e.detail.value.input_beizhu),p.set("type",1),p.set("extra_type",4),p.set("opreater",f),p.set("master",d),p.set("real_num",r.total_num),p.set("allCostPrice",r.allCostPrice),p.set("goodsName",r.products[0].goodsName),p.set("real_money",Number(r.real_money)),p.set("debt",r.all_money-Number(r.real_money)),r.account){var _=n.default.Pointer("accounts"),b=_.set(r.account.objectId);p.set("account",b);var S=n.default.Query("accounts");S.get(r.account.objectId).then((function(t){t.set("money",t.money-Number(r.real_money)),t.save().then((function(t){}))}))}if(p.set("recordType","new"),p.set("createdTime",{__type:"Date",iso:r.nowDay}),p.set("all_money",r.all_money),p.set("Images",r.Images),p.set("custom",h),r.stock){var v=n.default.Pointer("stocks"),P=v.set(r.stock.objectId);p.set("status",!0),p.set("stock",P)}else p.set("status",!1);p.save().then((function(e){var o=e.objectId;r.stock&&r.stock.objectId?u.default.enterAddGoodNumNew(r.products).then((function(e){t.hideLoading(),t.removeStorageSync("customs"),t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.setStorageSync("is_option",!0),t.showToast({title:"销售退货成功"}),setTimeout((function(){t.navigateBack({delta:2}),r.button_disabled=!1,u.default.log(t.getStorageSync("user").nickName+"处理了'"+r.products[0].goodsName+"'等"+r.products.length+"商品商品的销售退货",2,o)}),500)})):t.showToast({title:"销售退货成功",icon:"success",duration:1e3,success:function(){t.hideLoading(),t.setStorageSync("is_option",!0),t.removeStorageSync("customs"),t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),setTimeout((function(){r.button_disabled=!1,u.default.log(t.getStorageSync("user").nickName+"处理了'"+r.products[0].goodsName+"'等"+r.products.length+"商品的销售退货",2,o),t.redirectTo({url:"/pages/report/EnteringHistory/returnDetail/returnDetail?id="+o})}),1e3)}})}))}),(function(t){console.log("异常处理")}))}}};e.default=i}).call(this,o("543d")["default"])},"490a":function(t,e,o){"use strict";o.r(e);var s=o("14f2"),r=o.n(s);for(var a in s)"default"!==a&&function(t){o.d(e,t,(function(){return s[t]}))}(a);e["default"]=r.a},e1d4:function(t,e,o){"use strict";var s,r=function(){var t=this,e=t.$createElement,o=(t._self._c,t.nowDay.split(" "));t.$mp.data=Object.assign({},{$root:{g0:o}})},a=[];o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return s}))},e678:function(t,e,o){},e877:function(t,e,o){"use strict";o.r(e);var s=o("e1d4"),r=o("490a");for(var a in r)"default"!==a&&function(t){o.d(e,t,(function(){return r[t]}))}(a);o("12c3");var n,u=o("f0c5"),c=Object(u["a"])(r["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],n);e["default"]=c.exports},f62c:function(t,e,o){"use strict";(function(t){o("a961"),o("921b");s(o("66fd"));var e=s(o("e877"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])}},[["f62c","common/runtime","common/vendor"]]]);