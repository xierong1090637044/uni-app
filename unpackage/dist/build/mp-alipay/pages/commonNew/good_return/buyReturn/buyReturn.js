(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/commonNew/good_return/buyReturn/buyReturn"],{"01ed":function(t,e,o){"use strict";(function(t){o("d510"),o("921b");r(o("66fd"));var e=r(o("e07e"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("c11b")["createPage"])},"28c7":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,s,n,a=c(o("9546")),u=c(o("7fd5"));c(o("9f50")),c(o("856d")),c(o("a2fc"));function c(t){return t&&t.__esModule?t:{default:t}}function i(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=l(t))){var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,n=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return n=t.done,t},e:function(t){a=!0,s=t},f:function(){try{n||null==r.return||r.return()}finally{if(a)throw s}}}}function l(t,e){if(t){if("string"===typeof t)return d(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}var m={data:function(){return{user:t.getStorageSync("user"),identity:t.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,allCostPrice:0,really_total_money:0,custom:null,account:"",outType:"",discount:"",pickerTypes:[{desc:"自提",type:1},{desc:"快递",type:2},{desc:"物流",type:3},{desc:"送货上门",type:4}],expressNum:"",total_num:0,nowDay:u.default.getDay(0,!0)}},onLoad:function(){s=this,r=t.getStorageSync("uid"),this.products=t.getStorageSync("products"),s.user.rights&&s.user.rights.othercurrent&&(s.othercurrent=s.user.rights.othercurrent)},onShow:function(){if(this.really_total_money=0,this.all_money=0,this.real_money=0,this.total_num=0,s.allCostPrice=0,s.custom=t.getStorageSync("custom"),n=t.getStorageSync("shop"),s.account=t.getStorageSync("account"),n){s.shop_name=n.name;var e=a.default.Pointer("shops");e.set(n.objectId)}for(var o=0;o<this.products.length;o++)this.all_money=Number((this.products[o].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[o].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[o].num),s.allCostPrice=s.allCostPrice+Number(s.products[o].num)*Number(s.products[o].costPrice);this.real_money=Number(this.all_money.toFixed(2)),s.stock=t.getStorageSync("warehouse")?t.getStorageSync("warehouse")[0].stock:""},methods:{bindDateChange:function(t){s.nowDay=t.detail.value+" 00:00:00"},removeImg:function(t){s.Images.splice(t,1),s.Images=s.Images},upload_image:function(){s.user.is_vip?t.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){console.log(t);var e,o,r=Date.parse(new Date),n=t.tempFilePaths,u=i(n);try{for(u.s();!(o=u.n()).done;){var c=o.value;e=a.default.File(r+".jpg",c)}}catch(l){u.e(l)}finally{u.f()}e.save().then((function(t){var e,o=i(t);try{for(o.s();!(e=o.n()).done;){var r=e.value;s.Images.push(r.url)}}catch(l){o.e(l)}finally{o.f()}}))}}):t.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(e){t.getStorageSync("identity");this.button_disabled=!0;e.detail.formId;if(t.showLoading({title:"上传中..."}),""==t.getStorageSync("custom")||void 0==t.getStorageSync("custom"))return t.showToast({icon:"none",title:"请选择客户"}),void(this.button_disabled=!1);for(var o=new Array,n=[],c=[],i=0;i<this.products.length;i++){var l=Number(this.products[i].reserve)-this.products[i].num;c.push(this.products[i].goodsName);var d=a.default.Query("Bills"),m={},y=a.default.Pointer("_User"),f=y.set(r),g=a.default.Pointer("_User"),h=g.set(t.getStorageSync("masterId")),p=a.default.Pointer("Goods"),_=p.set(this.products[i].objectId);if(t.getStorageSync("custom")){var b=a.default.Pointer("customs"),S=b.set(t.getStorageSync("custom").objectId);d.set("custom",S)}d.set("goodsName",this.products[i].goodsName),d.set("retailPrice",this.products[i].modify_retailPrice.toString()),d.set("num",Number(this.products[i].num)),d.set("total_money",Number(this.products[i].total_money)),d.set("really_total_money",Number(this.products[i].really_total_money)),d.set("allCostPrice",Number(s.products[i].num)*Number(s.products[i].costPrice)),d.set("goodsId",_),d.set("userId",f),d.set("type",1),d.set("extra_type",4),d.set("opreater",h),d.set("createdTime",{__type:"Date",iso:s.nowDay});var v={};if(s.stock&&s.stock.objectId){var P=a.default.Pointer("stocks"),w=P.set(s.stock.objectId);d.set("status",!0),d.set("stock",w),m.stock=s.stock.stock_name}else d.set("status",!1);m.goodsName=this.products[i].goodsName,m.modify_retailPrice=this.products[i].modify_retailPrice.toString(),m.retailPrice=this.products[i].retailPrice,m.total_money=this.products[i].total_money,v.costPrice=this.products[i].costPrice,v.retailPrice=this.products[i].retailPrice,v.objectId=this.products[i].objectId,v.reserve=l,this.products[i].selectd_model&&(v.selected_model=this.products[i].selected_model,v.models=this.products[i].models),m.goodsId=v,m.type=1,m.extra_type=4,m.num=this.products[i].num,m.warning_num=this.products[i].warning_num,o.push(d),n.push(m)}a.default.Query("Bills").saveAll(o).then((function(o){for(var i=[],l=0;l<o.length;l++)i.push(o[l].success.objectId);var d=a.default.Pointer("_User"),m=d.set(r),y=t.getStorageSync("masterId"),f=a.default.Pointer("_User"),g=f.set(y),h=a.default.Pointer("customs"),p=h.set(s.custom.objectId),_=a.default.Query("order_opreations");if(_.set("detail",n),_.set("bills",i),_.set("beizhu",e.detail.value.input_beizhu),_.set("type",1),_.set("extra_type",4),_.set("opreater",g),_.set("master",m),_.set("real_num",s.total_num),_.set("allCostPrice",s.allCostPrice),_.set("goodsName",c.join(",")),_.set("real_money",Number(s.real_money)),_.set("debt",s.all_money-Number(s.real_money)),s.account){var b=a.default.Pointer("accounts"),S=b.set(s.account.objectId);_.set("account",S);var v=a.default.Query("accounts");v.get(s.account.objectId).then((function(t){t.set("money",t.money-Number(s.real_money)),t.save().then((function(t){}))}))}if(_.set("recordType","new"),_.set("createdTime",{__type:"Date",iso:s.nowDay}),_.set("all_money",s.all_money),_.set("Images",s.Images),_.set("custom",p),s.stock){var P=a.default.Pointer("stocks"),w=P.set(s.stock.objectId);_.set("status",!0),_.set("stock",w)}else _.set("status",!1);_.save().then((function(e){var o=e.objectId;s.stock&&s.stock.objectId?u.default.enterAddGoodNumNew(s.products).then((function(e){t.hideLoading(),t.removeStorageSync("customs"),t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.setStorageSync("is_option",!0),t.showToast({title:"销售退货成功"}),setTimeout((function(){t.navigateBack({delta:2}),s.button_disabled=!1,u.default.log(t.getStorageSync("user").nickName+"处理了'"+s.products[0].goodsName+"'等"+s.products.length+"商品商品的销售退货",2,o)}),500)})):t.showToast({title:"销售退货成功",icon:"success",duration:1e3,success:function(){t.hideLoading(),t.setStorageSync("is_option",!0),t.removeStorageSync("customs"),t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),setTimeout((function(){s.button_disabled=!1,u.default.log(t.getStorageSync("user").nickName+"处理了'"+s.products[0].goodsName+"'等"+s.products.length+"商品的销售退货",2,o),t.redirectTo({url:"/pages/report/EnteringHistory/returnDetail/returnDetail?id="+o})}),1e3)}})}))}),(function(t){console.log("异常处理")}))}}};e.default=m}).call(this,o("c11b")["default"])},"38bd":function(t,e,o){"use strict";var r,s=function(){var t=this,e=t.$createElement,o=(t._self._c,t.nowDay.split(" "));t.$mp.data=Object.assign({},{$root:{g0:o}})},n=[];o.d(e,"b",(function(){return s})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){return r}))},6417:function(t,e,o){"use strict";var r=o("a606"),s=o.n(r);s.a},a606:function(t,e,o){},afd8:function(t,e,o){"use strict";o.r(e);var r=o("28c7"),s=o.n(r);for(var n in r)"default"!==n&&function(t){o.d(e,t,(function(){return r[t]}))}(n);e["default"]=s.a},e07e:function(t,e,o){"use strict";o.r(e);var r=o("38bd"),s=o("afd8");for(var n in s)"default"!==n&&function(t){o.d(e,t,(function(){return s[t]}))}(n);o("6417");var a,u=o("f0c5"),c=Object(u["a"])(s["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=c.exports}},[["01ed","common/runtime","common/vendor"]]]);