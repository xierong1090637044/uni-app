(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_production/detail/detail"],{"0a3f":function(t,e,o){},"36eb":function(t,e,o){"use strict";o.r(e);var s=o("4538"),r=o("705f");for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);o("b8fa");var n,u=o("f0c5"),i=Object(u["a"])(r["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],n);e["default"]=i.exports},4538:function(t,e,o){"use strict";var s,r=function(){var t=this,e=t.$createElement;t._self._c},a=[];o.d(e,"b",function(){return r}),o.d(e,"c",function(){return a}),o.d(e,"a",function(){return s})},5057:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,r,a=u(o("93d5")),n=u(o("2839"));u(o("0279")),u(o("844a"));function u(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{startDay:n.default.getDay(0,!1),endDay:n.default.getDay(1,!1),user:t.getStorageSync("user"),identity:t.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,custom:null,outType:"",discount:"",total_num:0}},onLoad:function(){r=this,s=t.getStorageSync("uid"),this.products=t.getStorageSync("products"),r.user.rights&&r.user.rights.othercurrent&&(r.othercurrent=r.user.rights.othercurrent)},onShow:function(){this.really_total_money=0,this.all_money=0,this.real_money=0,r.custom=t.getStorageSync("custom");for(var e=0;e<this.products.length;e++)this.all_money=Number((this.products[e].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[e].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[e].num);this.real_money=Number(this.all_money.toFixed(2))},methods:{bindstartChange:function(t){r.startDay=t.detail.value},bindendChange:function(t){r.endDay=t.detail.value},removeImg:function(t){r.Images.splice(t,1),r.Images=r.Images},upload_image:function(){r.user.is_vip?t.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){console.log(t);var e,o=Date.parse(new Date),s=t.tempFilePaths,n=!0,u=!1,i=void 0;try{for(var c,l=s[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var d=c.value;e=a.default.File(o+".jpg",d)}}catch(m){u=!0,i=m}finally{try{n||null==l.return||l.return()}finally{if(u)throw i}}e.save().then(function(t){var e=!0,o=!1,s=void 0;try{for(var a,n=t[Symbol.iterator]();!(e=(a=n.next()).done);e=!0){var u=a.value;r.Images.push(u.url)}}catch(m){o=!0,s=m}finally{try{e||null==n.return||n.return()}finally{if(o)throw s}}})}}):t.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(e){console.log(e);t.getStorageSync("identity");this.button_disabled=!0;e.detail.formId;t.showLoading({title:"上传中..."});for(var o=a.default.Pointer("stocks"),u=o.set(r.stock?r.stock.objectId:""),i=new Array,c=[],l=0;l<this.products.length;l++){var d=Number(this.products[l].reserve)-this.products[l].num,m=a.default.Query("NBills"),f={},y=a.default.Pointer("_User"),h=y.set(s),g=a.default.Pointer("_User"),_=g.set(t.getStorageSync("masterId")),p=a.default.Pointer("NGoods"),v=p.set(this.products[l].objectId);if(t.getStorageSync("custom")){var b=a.default.Pointer("customs"),S=b.set(t.getStorageSync("custom").objectId);m.set("custom",S)}m.set("goodsName",this.products[l].goodsName),m.set("retailPrice",this.products[l].modify_retailPrice.toString()),m.set("num",Number(this.products[l].num)),m.set("total_money",this.products[l].total_money),m.set("really_total_money",this.products[l].really_total_money),m.set("goodsId",v),m.set("userId",h),m.set("type",5),m.set("opreater",_),m.set("status",!1);var I={};f.goodsName=this.products[l].goodsName,f.modify_retailPrice=this.products[l].modify_retailPrice.toString(),f.retailPrice=this.products[l].retailPrice,f.total_money=this.products[l].total_money,I.costPrice=this.products[l].costPrice,I.retailPrice=this.products[l].retailPrice,I.objectId=this.products[l].objectId,I.reserve=d,this.products[l].selectd_model&&(I.selected_model=this.products[l].selected_model,I.models=this.products[l].models),f.goodsId=I,f.type=5,f.num=this.products[l].num,f.warning_num=this.products[l].warning_num,i.push(m),c.push(f)}a.default.Query("NBills").saveAll(i).then(function(o){for(var i=[],l=0;l<o.length;l++)i.push(o[l].success.objectId);var d=a.default.Pointer("_User"),m=d.set(s),f=t.getStorageSync("masterId"),y=a.default.Pointer("_User"),h=y.set(f),g=a.default.Query("order_opreations");if(g.set("detail",c),g.set("bills",i),g.set("beizhu",e.detail.value.input_beizhu),g.set("type",5),g.set("opreater",h),g.set("stock",u),g.set("master",m),g.set("real_num",r.total_num),r.discount&&g.set("discount",r.discount),g.set("goodsName",r.products[0].goodsName),g.set("real_money",Number(r.real_money)),g.set("debt",r.all_money-Number(r.real_money)),r.custom){var _=a.default.Pointer("customs"),p=_.set(r.custom.objectId);g.set("custom",p)}g.set("all_money",r.all_money),g.set("Images",r.Images),g.set("status",!1),g.set("matterStatus",!1),g.set("startDay",new Date(r.startDay.replace(/-/g,"/")).getTime()),g.set("endDay",new Date(r.endDay.replace(/-/g,"/")).getTime()),g.save().then(function(e){var o=e.objectId;t.hideLoading(),t.removeStorageSync("customs"),t.showToast({title:"生产单创建成功",icon:"success",success:function(){r.button_disabled=!1,t.setStorageSync("is_option",!0),setTimeout(function(){t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),n.default.log(t.getStorageSync("user").nickName+"创建了'"+r.products[0].goodsName+"'等"+r.products.length+"商品的生产单",5,o),t.navigateBack({delta:2})},500)}})})},function(t){console.log("异常处理")})}}};e.default=i}).call(this,o("543d")["default"])},"705f":function(t,e,o){"use strict";o.r(e);var s=o("5057"),r=o.n(s);for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);e["default"]=r.a},b8fa:function(t,e,o){"use strict";var s=o("0a3f"),r=o.n(s);r.a},f40c:function(t,e,o){"use strict";(function(t){o("9787"),o("921b");s(o("66fd"));var e=s(o("36eb"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])}},[["f40c","common/runtime","common/vendor"]]]);