(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_confrim/goodPurchaseNew/goodPurchaseNew"],{"044d":function(e,t,o){},"258c":function(e,t,o){"use strict";o.r(t);var r=o("b588"),s=o("5fed");for(var n in s)"default"!==n&&function(e){o.d(t,e,function(){return s[e]})}(n);o("2c42");var a,c=o("f0c5"),u=Object(c["a"])(s["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);t["default"]=u.exports},"2c42":function(e,t,o){"use strict";var r=o("044d"),s=o.n(r);s.a},"43d3":function(e,t,o){"use strict";(function(e){o("d510"),o("921b");r(o("66fd"));var t=r(o("258c"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},"5fed":function(e,t,o){"use strict";o.r(t);var r=o("b837"),s=o.n(r);for(var n in r)"default"!==n&&function(e){o.d(t,e,function(){return r[e]})}(n);t["default"]=s.a},b588:function(e,t,o){"use strict";var r,s=function(){var e=this,t=e.$createElement,o=(e._self._c,e.othercurrent.indexOf("1")),r=e.nowDay.split(" "),s=e.othercurrent.indexOf("1");e.$mp.data=Object.assign({},{$root:{g0:o,g1:r,g2:s}})},n=[];o.d(t,"b",function(){return s}),o.d(t,"c",function(){return n}),o.d(t,"a",function(){return r})},b837:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,s,n=c(o("9546")),a=c(o("7fd5"));c(o("a2fc")),c(o("9f50")),c(o("856d"));function c(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{user:e.getStorageSync("user"),identity:e.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,account:"",button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,really_total_money:0,producer:null,total_num:0,nowDay:a.default.getDay(0,!0,!0),wetherDebt:!1}},onLoad:function(){s=this,r=e.getStorageSync("uid"),this.products=e.getStorageSync("products");for(var t=0;t<this.products.length;t++)this.all_money=Number((this.products[t].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[t].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[t].num);this.real_money=Number(this.all_money.toFixed(2)),s.user.rights&&s.user.rights.othercurrent&&(s.othercurrent=s.user.rights.othercurrent)},onShow:function(){s.producer=e.getStorageSync("producer"),s.stock=e.getStorageSync("warehouse")?e.getStorageSync("warehouse")[0].stock:"",s.account=e.getStorageSync("account")},methods:{changeDebtStatus:function(e){0==e.detail.value&&(this.real_money=Number(this.all_money.toFixed(2))),s.wetherDebt=e.detail.value},bindDateChange:function(e){s.nowDay=e.detail.value+" 00:00:00"},removeImg:function(e){s.Images.splice(e,1),s.Images=s.Images},upload_image:function(){s.user.is_vip?e.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var t,o=Date.parse(new Date),r=e.tempFilePaths,a=!0,c=!1,u=void 0;try{for(var i,d=r[Symbol.iterator]();!(a=(i=d.next()).done);a=!0){var l=i.value;t=n.default.File(o+".jpg",l)}}catch(m){c=!0,u=m}finally{try{a||null==d.return||d.return()}finally{if(c)throw u}}t.save().then(function(e){var t=!0,o=!1,r=void 0;try{for(var n,a=e[Symbol.iterator]();!(t=(n=a.next()).done);t=!0){var c=n.value;s.Images.push(c.url)}}catch(m){o=!0,r=m}finally{try{t||null==a.return||a.return()}finally{if(o)throw r}}})}}):e.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(t){e.getStorageSync("identity");this.button_disabled=!0;t.detail.formId;var o=1;if(e.showLoading({title:"上传中..."}),""==e.getStorageSync("producer")||void 0==e.getStorageSync("producer"))return e.showToast({icon:"none",title:"请选择供应商"}),void(this.button_disabled=!1);for(var c=new Array,u=[],i=0;i<this.products.length;i++){var d=Number(this.products[i].reserve)+this.products[i].num,l={},m=n.default.Query("Bills"),f=n.default.Pointer("_User"),y=f.set(r),h=n.default.Pointer("Goods"),g=h.set(this.products[i].objectId),p=e.getStorageSync("masterId"),_=n.default.Pointer("_User"),v=_.set(p);if(m.set("goodsName",this.products[i].goodsName),m.set("retailPrice",this.products[i].modify_retailPrice),m.set("num",Number(this.products[i].num)),m.set("total_money",Number(this.products[i].total_money)),m.set("really_total_money",Number(this.products[i].really_total_money)),m.set("goodsId",g),m.set("userId",y),m.set("opreater",v),m.set("type",1),m.set("extra_type",o),m.set("status",!1),m.set("createdTime",{__type:"Date",iso:s.nowDay}),s.producer){var b=n.default.Pointer("producers"),S=b.set(s.producer.objectId);m.set("producer",S)}var w={};if(s.stock&&s.stock.objectId){var I=n.default.Pointer("stocks"),k=I.set(s.stock.objectId);m.set("stock",k),l.stock=s.stock.stock_name}l.goodsName=this.products[i].goodsName,l.modify_retailPrice=this.products[i].modify_retailPrice.toString(),l.retailPrice=this.products[i].retailPrice,l.total_money=this.products[i].total_money,w.costPrice=this.products[i].costPrice,w.retailPrice=this.products[i].retailPrice,w.objectId=this.products[i].objectId,w.reserve=d,this.products[i].selectd_model&&(w.selected_model=this.products[i].selected_model,w.models=this.products[i].models),l.goodsId=w,l.num=this.products[i].num,l.type=1,c.push(m),u.push(l)}n.default.Query("Bills").saveAll(c).then(function(c){for(var i=[],d=0;d<c.length;d++)i.push(c[d].success.objectId);var l=n.default.Pointer("_User"),m=l.set(r),f=e.getStorageSync("masterId"),y=n.default.Pointer("_User"),h=y.set(f),g=n.default.Query("order_opreations");if(g.set("beizhu",t.detail.value.input_beizhu),g.set("detail",u),g.set("real_num",s.total_num),g.set("type",1),g.set("extra_type",o),g.set("bills",i),g.set("opreater",h),g.set("master",m),s.stock&&s.stock.objectId){var p=n.default.Pointer("stocks"),_=p.set(s.stock.objectId);g.set("stock",_)}if(g.set("goodsName",s.products[0].goodsName),g.set("real_money",Number(s.real_money)),g.set("debt",s.all_money-Number(s.real_money)),s.account){var v=n.default.Pointer("accounts"),b=v.set(s.account.objectId);g.set("account",b);var S=n.default.Query("accounts");S.get(s.account.objectId).then(function(e){e.set("money",e.money-Number(s.real_money)),e.save().then(function(e){})})}if(g.set("recordType","new"),s.producer){var w=n.default.Pointer("producers"),I=w.set(s.producer.objectId);if(g.set("producer",I),s.all_money-Number(s.real_money)>0){var k=n.default.Query("producers");k.get(s.producer.objectId).then(function(e){var t=e.debt?e.debt:0;t+=s.all_money-Number(s.real_money);var o=n.default.Query("producers");o.get(s.producer.objectId).then(function(e){e.set("debt",t),e.save()})})}}g.set("all_money",s.all_money),g.set("Images",s.Images),g.set("status",!1),g.set("createdTime",{__type:"Date",iso:s.nowDay}),g.save().then(function(t){var o=t.objectId;e.hideLoading(),e.showToast({title:"产品采购成功",icon:"success",duration:1e3,complete:function(){setTimeout(function(){a.default.log(e.getStorageSync("user").nickName+"采购了'"+s.products[0].goodsName+"'等"+s.products.length+"商品",11,o),s.button_disabled=!1,e.setStorageSync("is_option",!0),e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),e.redirectTo({url:"/pages/report/EnteringHistory/SellDetail/SellDetail?id="+o})},1e3)}})})},function(e){console.log("异常处理")})},can_addGoods:function(){return new Promise(function(t,o){var r=e.getStorageSync("products"),s=e.getStorageSync("warehouse");if(s){var n=!0,a=!1,c=void 0;try{for(var u,i=function(){var o=u.value;if(""==o.stocks.stock_name||void 0==o.stocks.stock_name||o.stocks.stock_name!=s[0].stock.stock_name)return e.showModal({title:"'"+o.goodsName+"'没有关联到调出仓库",content:"是否将它关联到此仓库",showCancel:!0,success:function(e){console.log(e),e.confirm?t([!0,o]):t([!1])},fail:function(){}}),{v:void 0};t([!1])},d=r[Symbol.iterator]();!(n=(u=d.next()).done);n=!0){var l=i();if("object"===typeof l)return l.v}}catch(m){a=!0,c=m}finally{try{n||null==d.return||d.return()}finally{if(a)throw c}}}else t([!1])})}}};t.default=u}).call(this,o("543d")["default"])}},[["43d3","common/runtime","common/vendor"]]]);