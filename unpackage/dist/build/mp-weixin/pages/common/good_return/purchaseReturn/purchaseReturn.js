(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_return/purchaseReturn/purchaseReturn"],{"489e":function(e,t,o){"use strict";var r,n=function(){var e=this,t=e.$createElement,o=(e._self._c,e.nowDay.split(" "));e.$mp.data=Object.assign({},{$root:{g0:o}})},s=[];o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return r}))},"4d57":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n,s,a,u=i(o("4515")),c=i(o("f287"));i(o("cbd0")),i(o("efc7")),i(o("ce79"));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=d(e))){var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,n,s=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){a=!0,n=e},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw n}}}}function d(e,t){if(e){if("string"===typeof e)return m(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}var y={data:function(){return{user:e.getStorageSync("user"),identity:e.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,allCostPrice:0,really_total_money:0,producer:null,account:"",outType:"",discount:"",pickerTypes:[{desc:"自提",type:1},{desc:"快递",type:2},{desc:"物流",type:3},{desc:"送货上门",type:4}],expressNum:"",total_num:0,nowDay:c.default.getDay(0,!0,!0)}},onLoad:function(){n=this,r=e.getStorageSync("uid"),this.products=e.getStorageSync("products"),n.user.rights&&n.user.rights.othercurrent&&(n.othercurrent=n.user.rights.othercurrent)},onShow:function(){if(this.really_total_money=0,this.all_money=0,this.real_money=0,this.total_num=0,n.allCostPrice=0,n.producer=e.getStorageSync("producer"),n.account=e.getStorageSync("account"),a=e.getStorageSync("shop"),a){n.shop_name=a.name;var t=u.default.Pointer("shops");s=t.set(a.objectId)}for(var o=0;o<this.products.length;o++)this.all_money=Number((this.products[o].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[o].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[o].num),n.allCostPrice=n.allCostPrice+Number(n.products[o].num)*Number(n.products[o].costPrice);this.real_money=Number(this.all_money.toFixed(2)),n.stock=e.getStorageSync("warehouse")?e.getStorageSync("warehouse")[0].stock:""},methods:{bindDateChange:function(e){n.nowDay=e.detail.value+" 00:00:00"},removeImg:function(e){n.Images.splice(e,1),n.Images=n.Images},upload_image:function(){n.user.is_vip?e.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){console.log(e);var t,o,r=Date.parse(new Date),s=e.tempFilePaths,a=l(s);try{for(a.s();!(o=a.n()).done;){var c=o.value;t=u.default.File(r+".jpg",c)}}catch(i){a.e(i)}finally{a.f()}t.save().then((function(e){var t,o=l(e);try{for(o.s();!(t=o.n()).done;){var r=t.value;n.Images.push(r.url)}}catch(i){o.e(i)}finally{o.f()}}))}}):e.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(t){e.getStorageSync("identity");this.button_disabled=!0;t.detail.formId;if(e.showLoading({title:"上传中..."}),""==e.getStorageSync("producer")||void 0==e.getStorageSync("producer"))return e.showToast({icon:"none",title:"请选择供应商"}),void(this.button_disabled=!1);for(var o=new Array,i=[],l=0;l<this.products.length;l++){var d=Number(this.products[l].reserve)-this.products[l].num,m=u.default.Query("Bills"),y={},f=u.default.Pointer("_User"),p=f.set(r),h=u.default.Pointer("_User"),g=h.set(e.getStorageSync("masterId")),_=u.default.Pointer("Goods"),b=_.set(this.products[l].objectId);if(e.getStorageSync("producer")){var v=u.default.Pointer("producers"),S=v.set(e.getStorageSync("producer").objectId);m.set("producer",S)}m.set("goodsName",this.products[l].goodsName),m.set("retailPrice",this.products[l].modify_retailPrice),m.set("num",Number(this.products[l].num)),m.set("total_money",Number(this.products[l].total_money)),m.set("really_total_money",Number(this.products[l].really_total_money)),m.set("allCostPrice",Number(n.products[l].num)*Number(n.products[l].costPrice)),m.set("goodsId",b),m.set("userId",p),m.set("type",-1),m.set("extra_type",4),m.set("opreater",g),m.set("createdTime",{__type:"Date",iso:n.nowDay}),a&&m.set("shop",s);var P={};m.set("status",!1),y.goodsName=this.products[l].goodsName,y.modify_retailPrice=this.products[l].modify_retailPrice.toString(),y.retailPrice=this.products[l].retailPrice,y.total_money=this.products[l].total_money,P.costPrice=this.products[l].costPrice,P.retailPrice=this.products[l].retailPrice,P.objectId=this.products[l].objectId,P.reserve=d,this.products[l].selectd_model&&(P.selected_model=this.products[l].selected_model,P.models=this.products[l].models),y.goodsId=P,y.type=-1,y.extra_type=4,y.num=this.products[l].num,y.warning_num=this.products[l].warning_num,o.push(m),i.push(y)}u.default.Query("Bills").saveAll(o).then((function(o){for(var l=[],d=0;d<o.length;d++)l.push(o[d].success.objectId);var m=u.default.Pointer("_User"),y=m.set(r),f=e.getStorageSync("masterId"),p=u.default.Pointer("_User"),h=p.set(f),g=u.default.Pointer("producers"),_=g.set(n.producer.objectId),b=u.default.Query("order_opreations");if(b.set("detail",i),b.set("bills",l),b.set("beizhu",t.detail.value.input_beizhu),b.set("type",-1),b.set("extra_type",4),b.set("opreater",h),b.set("master",y),b.set("real_num",n.total_num),b.set("allCostPrice",n.allCostPrice),b.set("goodsName",n.products[0].goodsName),b.set("real_money",Number(n.real_money)),b.set("debt",n.all_money-Number(n.real_money)),b.set("recordType","new"),a&&b.set("shop",s),n.account){var v=u.default.Pointer("accounts"),S=v.set(n.account.objectId);b.set("account",S);var P=u.default.Query("accounts");P.get(n.account.objectId).then((function(e){e.set("money",e.money+Number(n.real_money)),e.save().then((function(e){}))}))}b.set("createdTime",{__type:"Date",iso:n.nowDay}),b.set("all_money",n.all_money),b.set("Images",n.Images),b.set("producer",_),b.set("status",!1),b.save().then((function(t){var o=t.objectId;e.hideLoading(),e.removeStorageSync("customs"),e.showToast({title:"采购退货成功",icon:"success",duration:1e3,success:function(){e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),e.setStorageSync("is_option",!0),setTimeout((function(){n.button_disabled=!1,c.default.log(e.getStorageSync("user").nickName+"处理了'"+n.products[0].goodsName+"'等"+n.products.length+"商品的采购退货",4,o),e.redirectTo({url:"/pages/report/EnteringHistory/returnDetail/returnDetail?id="+o})}),1e3)}})}))}),(function(e){console.log("异常处理")}))}}};t.default=y}).call(this,o("543d")["default"])},"81a3":function(e,t,o){"use strict";var r=o("d951"),n=o.n(r);n.a},"962b":function(e,t,o){"use strict";o.r(t);var r=o("4d57"),n=o.n(r);for(var s in r)"default"!==s&&function(e){o.d(t,e,(function(){return r[e]}))}(s);t["default"]=n.a},d4db:function(e,t,o){"use strict";o.r(t);var r=o("489e"),n=o("962b");for(var s in n)"default"!==s&&function(e){o.d(t,e,(function(){return n[e]}))}(s);o("81a3");var a,u=o("f0c5"),c=Object(u["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);t["default"]=c.exports},d625:function(e,t,o){"use strict";(function(e){o("d34b"),o("921b");r(o("66fd"));var t=r(o("d4db"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},d951:function(e,t,o){}},[["d625","common/runtime","common/vendor"]]]);