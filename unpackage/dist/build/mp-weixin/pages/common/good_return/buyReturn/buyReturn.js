(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_return/buyReturn/buyReturn"],{"3dce":function(t,e,o){"use strict";o.r(e);var r=o("eb3f"),n=o.n(r);for(var s in r)"default"!==s&&function(t){o.d(e,t,(function(){return r[t]}))}(s);e["default"]=n.a},7535:function(t,e,o){},bc45:function(t,e,o){"use strict";var r,n=function(){var t=this,e=t.$createElement,o=(t._self._c,t.nowDay.split(" "));t.$mp.data=Object.assign({},{$root:{g0:o}})},s=[];o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return s})),o.d(e,"a",(function(){return r}))},c494:function(t,e,o){"use strict";var r=o("7535"),n=o.n(r);n.a},dc98:function(t,e,o){"use strict";(function(t){o("d34b"),o("921b");r(o("66fd"));var e=r(o("f96a"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},eb3f:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,n,s,a,u=i(o("4515")),c=i(o("f287"));i(o("cbd0")),i(o("efc7")),i(o("ce79"));function i(t){return t&&t.__esModule?t:{default:t}}function l(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=d(t))){var e=0,o=function(){};return{s:o,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n,s=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return s=t.done,t},e:function(t){a=!0,n=t},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw n}}}}function d(t,e){if(t){if("string"===typeof t)return m(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}var y={data:function(){return{user:t.getStorageSync("user"),identity:t.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,allCostPrice:0,really_total_money:0,custom:null,account:"",outType:"",discount:"",pickerTypes:[{desc:"自提",type:1},{desc:"快递",type:2},{desc:"物流",type:3},{desc:"送货上门",type:4}],expressNum:"",total_num:0,nowDay:c.default.getDay(0,!0,!0)}},onLoad:function(){n=this,r=t.getStorageSync("uid"),this.products=t.getStorageSync("products"),n.user.rights&&n.user.rights.othercurrent&&(n.othercurrent=n.user.rights.othercurrent)},onShow:function(){if(this.really_total_money=0,this.all_money=0,this.real_money=0,this.total_num=0,n.allCostPrice=0,n.custom=t.getStorageSync("custom"),a=t.getStorageSync("shop"),n.account=t.getStorageSync("account"),a){n.shop_name=a.name;var e=u.default.Pointer("shops");s=e.set(a.objectId)}for(var o=0;o<this.products.length;o++)this.all_money=Number((this.products[o].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[o].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[o].num),n.allCostPrice=n.allCostPrice+Number(n.products[o].num)*Number(n.products[o].costPrice);this.real_money=Number(this.all_money.toFixed(2)),n.stock=t.getStorageSync("warehouse")?t.getStorageSync("warehouse")[0].stock:""},methods:{bindDateChange:function(t){n.nowDay=t.detail.value+" 00:00:00"},removeImg:function(t){n.Images.splice(t,1),n.Images=n.Images},upload_image:function(){n.user.is_vip?t.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){console.log(t);var e,o,r=Date.parse(new Date),s=t.tempFilePaths,a=l(s);try{for(a.s();!(o=a.n()).done;){var c=o.value;e=u.default.File(r+".jpg",c)}}catch(i){a.e(i)}finally{a.f()}e.save().then((function(t){var e,o=l(t);try{for(o.s();!(e=o.n()).done;){var r=e.value;n.Images.push(r.url)}}catch(i){o.e(i)}finally{o.f()}}))}}):t.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(e){t.getStorageSync("identity");this.button_disabled=!0;e.detail.formId;if(t.showLoading({title:"上传中..."}),""==t.getStorageSync("custom")||void 0==t.getStorageSync("custom"))return t.showToast({icon:"none",title:"请选择客户"}),void(this.button_disabled=!1);for(var o=new Array,i=[],l=0;l<this.products.length;l++){var d=Number(this.products[l].reserve)-this.products[l].num,m=u.default.Query("Bills"),y={},f=u.default.Pointer("_User"),h=f.set(r),p=u.default.Pointer("_User"),g=p.set(t.getStorageSync("masterId")),_=u.default.Pointer("Goods"),b=_.set(this.products[l].objectId);if(t.getStorageSync("custom")){var v=u.default.Pointer("customs"),S=v.set(t.getStorageSync("custom").objectId);m.set("custom",S)}m.set("goodsName",this.products[l].goodsName),m.set("retailPrice",this.products[l].modify_retailPrice),m.set("num",Number(this.products[l].num)),m.set("total_money",Number(this.products[l].total_money)),m.set("really_total_money",Number(this.products[l].really_total_money)),m.set("allCostPrice",Number(n.products[l].num)*Number(n.products[l].costPrice)),m.set("goodsId",b),m.set("userId",h),m.set("type",1),m.set("extra_type",4),m.set("opreater",g),m.set("createdTime",{__type:"Date",iso:n.nowDay}),a&&m.set("shop",s);var P={};m.set("status",!1),y.goodsName=this.products[l].goodsName,y.modify_retailPrice=this.products[l].modify_retailPrice.toString(),y.retailPrice=this.products[l].retailPrice,y.total_money=this.products[l].total_money,P.costPrice=this.products[l].costPrice,P.retailPrice=this.products[l].retailPrice,P.objectId=this.products[l].objectId,P.reserve=d,this.products[l].selectd_model&&(P.selected_model=this.products[l].selected_model,P.models=this.products[l].models),y.goodsId=P,y.type=1,y.extra_type=4,y.num=this.products[l].num,y.warning_num=this.products[l].warning_num,o.push(m),i.push(y)}u.default.Query("Bills").saveAll(o).then((function(o){for(var l=[],d=0;d<o.length;d++)l.push(o[d].success.objectId);var m=u.default.Pointer("_User"),y=m.set(r),f=t.getStorageSync("masterId"),h=u.default.Pointer("_User"),p=h.set(f),g=u.default.Pointer("customs"),_=g.set(n.custom.objectId),b=u.default.Query("order_opreations");if(b.set("detail",i),b.set("bills",l),b.set("beizhu",e.detail.value.input_beizhu),b.set("type",1),b.set("extra_type",4),b.set("opreater",p),b.set("master",y),b.set("real_num",n.total_num),b.set("allCostPrice",n.allCostPrice),b.set("goodsName",n.products[0].goodsName),b.set("real_money",Number(n.real_money)),b.set("debt",n.all_money-Number(n.real_money)),n.account){var v=u.default.Pointer("accounts"),S=v.set(n.account.objectId);b.set("account",S);var P=u.default.Query("accounts");P.get(n.account.objectId).then((function(t){t.set("money",t.money-Number(n.real_money)),t.save().then((function(t){}))}))}b.set("recordType","new"),a&&b.set("shop",s),b.set("createdTime",{__type:"Date",iso:n.nowDay}),b.set("all_money",n.all_money),b.set("Images",n.Images),b.set("custom",_),b.set("status",!1),b.save().then((function(e){var o=e.objectId;t.showToast({title:"销售退货成功",icon:"success",duration:1e3,success:function(){t.hideLoading(),t.setStorageSync("is_option",!0),t.removeStorageSync("customs"),t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),setTimeout((function(){n.button_disabled=!1,c.default.log(t.getStorageSync("user").nickName+"处理了'"+n.products[0].goodsName+"'等"+n.products.length+"商品的销售退货",2,o),t.redirectTo({url:"/pages/report/EnteringHistory/returnDetail/returnDetail?id="+o})}),1e3)}})}))}),(function(t){console.log("异常处理")}))}}};e.default=y}).call(this,o("543d")["default"])},f96a:function(t,e,o){"use strict";o.r(e);var r=o("bc45"),n=o("3dce");for(var s in n)"default"!==s&&function(t){o.d(e,t,(function(){return n[t]}))}(s);o("c494");var a,u=o("f0c5"),c=Object(u["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=c.exports}},[["dc98","common/runtime","common/vendor"]]]);