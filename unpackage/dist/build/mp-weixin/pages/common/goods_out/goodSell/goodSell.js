(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/goods_out/goodSell/goodSell"],{"0a91":function(t,e,o){},"185f":function(t,e,o){"use strict";(function(t){o("d510"),o("921b");s(o("66fd"));var e=s(o("9016"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},3152:function(t,e,o){"use strict";var s=o("0a91"),r=o.n(s);r.a},"3b6a":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,r,n,a,u=i(o("9546")),c=i(o("7fd5"));i(o("9f50")),i(o("856d")),i(o("a2fc"));function i(t){return t&&t.__esModule?t:{default:t}}var l={data:function(){return{user:t.getStorageSync("user"),identity:t.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",really_total_money:0,real_money:0,all_money:0,allCostPrice:0,custom:null,account:"",outType:"",discount:"",pickerTypes:[{desc:"自提",type:1},{desc:"快递",type:2},{desc:"物流",type:3},{desc:"送货上门",type:4}],expressNum:"",total_num:0,nowDay:c.default.getDay(0,!0,!0),canOpretion:!0,wetherDebt:!1}},onLoad:function(){r=this,s=t.getStorageSync("uid"),this.products=t.getStorageSync("products"),r.user.rights&&r.user.rights.othercurrent&&(r.othercurrent=r.user.rights.othercurrent)},onShow:function(){if(this.really_total_money=0,this.all_money=0,this.real_money=0,this.total_num=0,r.allCostPrice=0,r.custom=t.getStorageSync("custom"),a=t.getStorageSync("shop"),r.account=t.getStorageSync("account"),a){r.shop_name=a.name;var e=u.default.Pointer("shops");n=e.set(a.objectId)}if(r.custom.discount){r.discount=r.custom.discount;for(var o=0;o<this.products.length;o++)this.all_money=Number((this.products[o].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[o].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[o].num),r.allCostPrice=r.allCostPrice+Number(r.products[o].num)*Number(r.products[o].costPrice);this.really_total_money=this.really_total_money*r.discount/100,this.real_money=Number(this.all_money.toFixed(2))*r.discount/100,this.all_money=this.all_money*r.discount/100}else{for(var s=0;s<this.products.length;s++)this.all_money=Number((this.products[s].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[s].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[s].num),r.allCostPrice=r.allCostPrice+Number(r.products[s].num)*Number(r.products[s].costPrice);this.real_money=Number(this.all_money.toFixed(2))}r.stock=t.getStorageSync("warehouse")?t.getStorageSync("warehouse")[0].stock:""},methods:{changeDebtStatus:function(t){0==t.detail.value&&(this.real_money=Number(this.all_money.toFixed(2))),r.wetherDebt=t.detail.value},changeStatus:function(t){r.canOpretion=t.detail.value},scan_code:function(){t.scanCode({onlyFromCamera:!0,success:function(t){console.log("条码类型："+t.scanType),console.log("条码内容："+t.result),r.expressNum=t.result}})},bindDateChange:function(t){r.nowDay=t.detail.value+" 00:00:00"},removeImg:function(t){r.Images.splice(t,1),r.Images=r.Images},upload_image:function(){r.user.is_vip?t.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){console.log(t);var e,o=Date.parse(new Date),s=t.tempFilePaths,n=!0,a=!1,c=void 0;try{for(var i,l=s[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var d=i.value;e=u.default.File(o+".jpg",d)}}catch(m){a=!0,c=m}finally{try{n||null==l.return||l.return()}finally{if(a)throw c}}e.save().then(function(t){var e=!0,o=!1,s=void 0;try{for(var n,a=t[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var u=n.value;r.Images.push(u.url)}}catch(m){o=!0,s=m}finally{try{e||null==a.return||a.return()}finally{if(o)throw s}}})}}):t.showToast({title:"您还不是会员，无法使用",icon:"none"})},getDiscount:function(t){var e=Number(t.detail.value);e>=100?r.discount=100:(r.discount=e,r.real_money=Number(this.all_money.toFixed(2))*e/100)},select_outType:function(t){r.outType=r.pickerTypes[t.detail.value],2==r.outType.type&&3==r.outType.type||(r.expressNum="")},formSubmit:function(e){if(!this.button_disabled){t.getStorageSync("identity");this.button_disabled=!0;e.detail.formId;var o=1;if(t.showLoading({title:"请勿退出..."}),""==t.getStorageSync("custom")||void 0==t.getStorageSync("custom"))return t.showToast({icon:"none",title:"请选择客户"}),void(this.button_disabled=!1);for(var i=new Array,l=[],d=[],m=[],y=0;y<this.products.length;y++){var h=Number(this.products[y].reserve)-this.products[y].num,p=u.default.Query("Bills"),f={},_=u.default.Pointer("_User"),g=_.set(s),b=u.default.Pointer("_User"),v=b.set(t.getStorageSync("masterId")),S=u.default.Pointer("Goods"),N=S.set(this.products[y].header?this.products[y].header.objectId:this.products[y].objectId);if(t.getStorageSync("custom")){var P=u.default.Pointer("customs"),I=P.set(t.getStorageSync("custom").objectId);p.set("custom",I)}p.set("goodsName",this.products[y].goodsName),p.set("retailPrice",this.products[y].modify_retailPrice.toString()),p.set("num",Number(this.products[y].num)),p.set("total_money",this.products[y].total_money),p.set("really_total_money",this.products[y].really_total_money),p.set("goodsId",N),p.set("userId",g),p.set("allCostPrice",Number(r.products[y].num)*Number(r.products[y].costPrice)),p.set("type",-1),p.set("count",1),p.set("extra_type",o),p.set("opreater",v),p.set("status",r.canOpretion),p.set("createdTime",{__type:"Date",iso:r.nowDay});var k={};if(this.products[y].stocks&&this.products[y].stocks.objectId){var w=u.default.Pointer("stocks"),j=w.set(this.products[y].stocks.objectId);p.set("stock",j),f.stock=this.products[y].stocks.stock_name,-1==d.indexOf(this.products[y].stocks.objectId)&&(d.push(this.products[y].stocks.objectId),m.push(this.products[y].stocks.stock_name))}f.goodsName=this.products[y].goodsName,f.modify_retailPrice=this.products[y].modify_retailPrice.toString(),f.retailPrice=this.products[y].retailPrice,f.total_money=this.products[y].total_money,k.costPrice=this.products[y].costPrice,k.retailPrice=this.products[y].retailPrice,k.objectId=this.products[y].objectId,k.reserve=h,this.products[y].selectd_model&&(k.selected_model=this.products[y].selected_model,k.models=this.products[y].models),f.goodsId=k,f.type=-1,f.num=this.products[y].num,f.warning_num=this.products[y].warning_num,f.packingUnit=this.products[y].packingUnit,a&&(p.set("shop",n),c.default.record_shopOut(a.objectId,a.have_out+this.products[y].num)),i.push(p),l.push(f)}u.default.Query("Bills").saveAll(i).then(function(i){for(var y=[],h=0;h<i.length;h++)y.push(i[h].success.objectId);var p=u.default.Pointer("_User"),f=p.set(s),_=t.getStorageSync("masterId"),g=u.default.Pointer("_User"),b=g.set(_),v=u.default.Query("order_opreations");if(v.set("detail",l),v.set("bills",y),v.set("beizhu",e.detail.value.input_beizhu),v.set("type",-1),v.set("extra_type",o),v.set("opreater",b),v.set("stockIds",d),v.set("stockNames",m),v.set("master",f),v.set("real_num",r.total_num),v.set("allCostPrice",r.allCostPrice),v.set("profit",r.all_money-r.allCostPrice),r.discount&&v.set("discount",r.discount),v.set("goodsName",r.products[0].goodsName),v.set("real_money",Number(r.real_money)),v.set("debt",r.all_money-Number(r.real_money)),a&&v.set("shop",n),r.account){var S=u.default.Pointer("accounts"),N=S.set(r.account.objectId);v.set("account",N);var P=u.default.Query("accounts");P.get(r.account.objectId).then(function(t){t.set("money",t.money+Number(r.real_money)),t.save().then(function(t){})})}if(r.custom){var I=u.default.Pointer("customs"),k=I.set(r.custom.objectId);if(v.set("custom",k),r.all_money-Number(r.real_money)>0){var w=u.default.Query("customs");w.get(r.custom.objectId).then(function(t){var e=null==t.debt?0:t.debt;e+=r.all_money-Number(r.real_money),console.log(e);var o=u.default.Query("customs");o.get(r.custom.objectId).then(function(t){t.set("debt",e),t.save()})})}}r.outType&&(v.set("typeDesc",r.outType.desc),v.set("expressNum",r.expressNum)),v.set("all_money",r.all_money),v.set("Images",r.Images),v.set("status",r.canOpretion),v.set("createdTime",{__type:"Date",iso:r.nowDay}),v.save().then(function(e){var o=e.objectId;if(r.canOpretion){r.products;c.default.outRedGoodNum(r.products).then(function(e){t.hideLoading(),t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),t.setStorageSync("is_option",!0),t.showToast({title:"产品销售成功"}),setTimeout(function(){r.button_disabled=!1,c.default.log(t.getStorageSync("user").nickName+"销售了'"+r.products[0].goodsName+"'等"+r.products.length+"商品",-1,o),t.navigateBack({delta:2})},500)})}})},function(t){console.log("异常处理")})}}}};e.default=l}).call(this,o("543d")["default"])},9016:function(t,e,o){"use strict";o.r(e);var s=o("be02"),r=o("e8bc");for(var n in r)"default"!==n&&function(t){o.d(e,t,function(){return r[t]})}(n);o("3152");var a,u=o("f0c5"),c=Object(u["a"])(r["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],a);e["default"]=c.exports},be02:function(t,e,o){"use strict";var s,r=function(){var t=this,e=t.$createElement,o=(t._self._c,t.nowDay.split(" "));t.$mp.data=Object.assign({},{$root:{g0:o}})},n=[];o.d(e,"b",function(){return r}),o.d(e,"c",function(){return n}),o.d(e,"a",function(){return s})},e8bc:function(t,e,o){"use strict";o.r(e);var s=o("3b6a"),r=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);e["default"]=r.a}},[["185f","common/runtime","common/vendor"]]]);