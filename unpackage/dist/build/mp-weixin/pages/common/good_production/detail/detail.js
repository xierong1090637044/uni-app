(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_production/detail/detail"],{"1a39":function(t,e,o){"use strict";o.r(e);var r=o("b251"),n=o("8ed4");for(var s in n)"default"!==s&&function(t){o.d(e,t,(function(){return n[t]}))}(s);o("3038");var a,u=o("f0c5"),i=Object(u["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=i.exports},3038:function(t,e,o){"use strict";var r=o("c8ac"),n=o.n(r);n.a},"41b9":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,n,s=u(o("9546")),a=u(o("7fd5"));u(o("9f50")),u(o("856d"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=c(t))){var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n,s=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return s=t.done,t},e:function(t){a=!0,n=t},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw n}}}}function c(t,e){if(t){if("string"===typeof t)return l(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}var d={data:function(){return{startDay:a.default.getDay(0,!1),endDay:a.default.getDay(1,!1),user:t.getStorageSync("user"),identity:t.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,custom:null,outType:"",discount:"",total_num:0}},onLoad:function(){n=this,r=t.getStorageSync("uid"),this.products=t.getStorageSync("products"),n.user.rights&&n.user.rights.othercurrent&&(n.othercurrent=n.user.rights.othercurrent)},onShow:function(){this.really_total_money=0,this.all_money=0,this.real_money=0,n.custom=t.getStorageSync("custom");for(var e=0;e<this.products.length;e++)this.all_money=Number((this.products[e].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[e].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[e].num);this.real_money=Number(this.all_money.toFixed(2))},methods:{bindstartChange:function(t){n.startDay=t.detail.value},bindendChange:function(t){n.endDay=t.detail.value},removeImg:function(t){n.Images.splice(t,1),n.Images=n.Images},upload_image:function(){n.user.is_vip?t.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){console.log(t);var e,o,r=Date.parse(new Date),a=t.tempFilePaths,u=i(a);try{for(u.s();!(o=u.n()).done;){var c=o.value;e=s.default.File(r+".jpg",c)}}catch(l){u.e(l)}finally{u.f()}e.save().then((function(t){var e,o=i(t);try{for(o.s();!(e=o.n()).done;){var r=e.value;n.Images.push(r.url)}}catch(l){o.e(l)}finally{o.f()}}))}}):t.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(e){console.log(e);t.getStorageSync("identity");this.button_disabled=!0;e.detail.formId;t.showLoading({title:"上传中..."});for(var o=s.default.Pointer("stocks"),u=o.set(n.stock?n.stock.objectId:""),i=new Array,c=[],l=0;l<this.products.length;l++){var d=Number(this.products[l].reserve)-this.products[l].num,m=s.default.Query("Bills"),f={},y=s.default.Pointer("_User"),h=y.set(r),g=s.default.Pointer("_User"),p=g.set(t.getStorageSync("masterId")),_=s.default.Pointer("Goods"),b=_.set(this.products[l].objectId);if(t.getStorageSync("custom")){var v=s.default.Pointer("customs"),S=v.set(t.getStorageSync("custom").objectId);m.set("custom",S)}m.set("goodsName",this.products[l].goodsName),m.set("retailPrice",this.products[l].modify_retailPrice.toString()),m.set("num",Number(this.products[l].num)),m.set("total_money",this.products[l].total_money),m.set("really_total_money",this.products[l].really_total_money),m.set("goodsId",b),m.set("userId",h),m.set("type",5),m.set("opreater",p),m.set("status",!1);var I={};f.goodsName=this.products[l].goodsName,f.modify_retailPrice=this.products[l].modify_retailPrice.toString(),f.retailPrice=this.products[l].retailPrice,f.total_money=this.products[l].total_money,I.costPrice=this.products[l].costPrice,I.retailPrice=this.products[l].retailPrice,I.objectId=this.products[l].objectId,I.reserve=d,this.products[l].selected_model&&(I.selected_model=this.products[l].selected_model,I.models=this.products[l].models),f.goodsId=I,f.type=5,f.num=this.products[l].num,f.warning_num=this.products[l].warning_num,i.push(m),c.push(f)}s.default.Query("Bills").saveAll(i).then((function(o){for(var i=[],l=0;l<o.length;l++)i.push(o[l].success.objectId);var d=s.default.Pointer("_User"),m=d.set(r),f=t.getStorageSync("masterId"),y=s.default.Pointer("_User"),h=y.set(f),g=s.default.Query("order_opreations");if(g.set("detail",c),g.set("bills",i),g.set("beizhu",e.detail.value.input_beizhu),g.set("type",5),g.set("opreater",h),g.set("stock",u),g.set("master",m),g.set("real_num",n.total_num),n.discount&&g.set("discount",n.discount),g.set("goodsName",n.products[0].goodsName),g.set("real_money",Number(n.real_money)),g.set("debt",n.all_money-Number(n.real_money)),n.custom){var p=s.default.Pointer("customs"),_=p.set(n.custom.objectId);g.set("custom",_)}g.set("all_money",n.all_money),g.set("Images",n.Images),g.set("status",!1),g.set("matterStatus",!1),g.set("startDay",new Date(n.startDay.replace(/-/g,"/")).getTime()),g.set("endDay",new Date(n.endDay.replace(/-/g,"/")).getTime()),g.save().then((function(e){var o=e.objectId;t.hideLoading(),t.removeStorageSync("customs"),t.showToast({title:"生产单创建成功",icon:"success",success:function(){n.button_disabled=!1,t.setStorageSync("is_option",!0),setTimeout((function(){t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),a.default.log(t.getStorageSync("user").nickName+"创建了'"+n.products[0].goodsName+"'等"+n.products.length+"商品的生产单",5,o),t.navigateBack({delta:2})}),500)}})}))}),(function(t){console.log("异常处理")}))}}};e.default=d}).call(this,o("543d")["default"])},"8ed4":function(t,e,o){"use strict";o.r(e);var r=o("41b9"),n=o.n(r);for(var s in r)"default"!==s&&function(t){o.d(e,t,(function(){return r[t]}))}(s);e["default"]=n.a},b251:function(t,e,o){"use strict";var r,n=function(){var t=this,e=t.$createElement;t._self._c},s=[];o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return s})),o.d(e,"a",(function(){return r}))},bb73:function(t,e,o){"use strict";(function(t){o("d510"),o("921b");r(o("66fd"));var e=r(o("1a39"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},c8ac:function(t,e,o){}},[["bb73","common/runtime","common/vendor"]]]);