(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_return/buyReturn/buyReturn"],{3211:function(t,e,o){"use strict";var r,s=function(){var t=this,e=t.$createElement,o=(t._self._c,t.nowDay.split(" "));t.$mp.data=Object.assign({},{$root:{g0:o}})},n=[];o.d(e,"b",function(){return s}),o.d(e,"c",function(){return n}),o.d(e,"a",function(){return r})},"6ca1":function(t,e,o){"use strict";var r=o("7e3c"),s=o.n(r);s.a},"73b3":function(t,e,o){"use strict";o.r(e);var r=o("3211"),s=o("8006");for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);o("6ca1");var a,u=o("f0c5"),c=Object(u["a"])(s["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);e["default"]=c.exports},"7e3c":function(t,e,o){},8006:function(t,e,o){"use strict";o.r(e);var r=o("9d78"),s=o.n(r);for(var n in r)"default"!==n&&function(t){o.d(e,t,function(){return r[t]})}(n);e["default"]=s.a},"9d78":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,s,n,a,u=i(o("9546")),c=i(o("7fd5"));i(o("9f50")),i(o("856d")),i(o("a2fc"));function i(t){return t&&t.__esModule?t:{default:t}}var l={data:function(){return{user:t.getStorageSync("user"),identity:t.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,allCostPrice:0,really_total_money:0,custom:null,account:"",outType:"",discount:"",pickerTypes:[{desc:"自提",type:1},{desc:"快递",type:2},{desc:"物流",type:3},{desc:"送货上门",type:4}],expressNum:"",total_num:0,nowDay:c.default.getDay(0,!0,!0)}},onLoad:function(){s=this,r=t.getStorageSync("uid"),this.products=t.getStorageSync("products"),s.user.rights&&s.user.rights.othercurrent&&(s.othercurrent=s.user.rights.othercurrent)},onShow:function(){if(this.really_total_money=0,this.all_money=0,this.real_money=0,this.total_num=0,s.allCostPrice=0,s.custom=t.getStorageSync("custom"),a=t.getStorageSync("shop"),s.account=t.getStorageSync("account"),a){s.shop_name=a.name;var e=u.default.Pointer("shops");n=e.set(a.objectId)}for(var o=0;o<this.products.length;o++)this.all_money=Number((this.products[o].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[o].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[o].num),s.allCostPrice=s.allCostPrice+Number(s.products[o].num)*Number(s.products[o].costPrice);this.real_money=Number(this.all_money.toFixed(2)),s.stock=t.getStorageSync("warehouse")?t.getStorageSync("warehouse")[0].stock:""},methods:{bindDateChange:function(t){s.nowDay=t.detail.value+" 00:00:00"},removeImg:function(t){s.Images.splice(t,1),s.Images=s.Images},upload_image:function(){s.user.is_vip?t.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){console.log(t);var e,o=Date.parse(new Date),r=t.tempFilePaths,n=!0,a=!1,c=void 0;try{for(var i,l=r[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var d=i.value;e=u.default.File(o+".jpg",d)}}catch(m){a=!0,c=m}finally{try{n||null==l.return||l.return()}finally{if(a)throw c}}e.save().then(function(t){var e=!0,o=!1,r=void 0;try{for(var n,a=t[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var u=n.value;s.Images.push(u.url)}}catch(m){o=!0,r=m}finally{try{e||null==a.return||a.return()}finally{if(o)throw r}}})}}):t.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(e){t.getStorageSync("identity");this.button_disabled=!0;e.detail.formId;if(t.showLoading({title:"上传中..."}),""==t.getStorageSync("custom")||void 0==t.getStorageSync("custom"))return t.showToast({icon:"none",title:"请选择客户"}),void(this.button_disabled=!1);for(var o=new Array,i=[],l=0;l<this.products.length;l++){var d=Number(this.products[l].reserve)-this.products[l].num,m=u.default.Query("Bills"),y={},h=u.default.Pointer("_User"),f=h.set(r),g=u.default.Pointer("_User"),p=g.set(t.getStorageSync("masterId")),_=u.default.Pointer("Goods"),b=_.set(this.products[l].objectId);if(t.getStorageSync("custom")){var v=u.default.Pointer("customs"),S=v.set(t.getStorageSync("custom").objectId);m.set("custom",S)}m.set("goodsName",this.products[l].goodsName),m.set("retailPrice",this.products[l].modify_retailPrice),m.set("num",Number(this.products[l].num)),m.set("total_money",Number(this.products[l].total_money)),m.set("really_total_money",Number(this.products[l].really_total_money)),m.set("allCostPrice",Number(s.products[l].num)*Number(s.products[l].costPrice)),m.set("goodsId",b),m.set("userId",f),m.set("type",1),m.set("extra_type",4),m.set("opreater",p),m.set("createdTime",{__type:"Date",iso:s.nowDay}),a&&m.set("shop",n);var P={};m.set("status",!1),y.goodsName=this.products[l].goodsName,y.modify_retailPrice=this.products[l].modify_retailPrice.toString(),y.retailPrice=this.products[l].retailPrice,y.total_money=this.products[l].total_money,P.costPrice=this.products[l].costPrice,P.retailPrice=this.products[l].retailPrice,P.objectId=this.products[l].objectId,P.reserve=d,this.products[l].selectd_model&&(P.selected_model=this.products[l].selected_model,P.models=this.products[l].models),y.goodsId=P,y.type=1,y.extra_type=4,y.num=this.products[l].num,y.warning_num=this.products[l].warning_num,o.push(m),i.push(y)}u.default.Query("Bills").saveAll(o).then(function(o){for(var l=[],d=0;d<o.length;d++)l.push(o[d].success.objectId);var m=u.default.Pointer("_User"),y=m.set(r),h=t.getStorageSync("masterId"),f=u.default.Pointer("_User"),g=f.set(h),p=u.default.Pointer("customs"),_=p.set(s.custom.objectId),b=u.default.Query("order_opreations");if(b.set("detail",i),b.set("bills",l),b.set("beizhu",e.detail.value.input_beizhu),b.set("type",1),b.set("extra_type",4),b.set("opreater",g),b.set("master",y),b.set("real_num",s.total_num),b.set("allCostPrice",s.allCostPrice),b.set("goodsName",s.products[0].goodsName),b.set("real_money",Number(s.real_money)),b.set("debt",s.all_money-Number(s.real_money)),s.account){var v=u.default.Pointer("accounts"),S=v.set(s.account.objectId);b.set("account",S);var P=u.default.Query("accounts");P.get(s.account.objectId).then(function(t){t.set("money",t.money-Number(s.real_money)),t.save().then(function(t){})})}b.set("recordType","new"),a&&b.set("shop",n),b.set("createdTime",{__type:"Date",iso:s.nowDay}),b.set("all_money",s.all_money),b.set("Images",s.Images),b.set("custom",_),b.set("status",!1),b.save().then(function(e){var o=e.objectId;t.showToast({title:"销售退货成功",icon:"success",duration:1e3,success:function(){t.hideLoading(),t.setStorageSync("is_option",!0),t.removeStorageSync("customs"),t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),setTimeout(function(){s.button_disabled=!1,c.default.log(t.getStorageSync("user").nickName+"处理了'"+s.products[0].goodsName+"'等"+s.products.length+"商品的销售退货",2,o),t.redirectTo({url:"/pages/report/EnteringHistory/returnDetail/returnDetail?id="+o})},1e3)}})})},function(t){console.log("异常处理")})}}};e.default=l}).call(this,o("543d")["default"])},d00c:function(t,e,o){"use strict";(function(t){o("d510"),o("921b");r(o("66fd"));var e=r(o("73b3"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])}},[["d00c","common/runtime","common/vendor"]]]);