(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_confrim/good_enter/good_enter"],{"0dfb":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,s,a,n,u=m(o("906f")),c=m(o("93e8")),l=m(o("9cc3")),i=m(o("6312")),d=m(o("2df3"));function m(e){return e&&e.__esModule?e:{default:e}}var f={data:function(){return{user:e.getStorageSync("user"),Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,really_total_money:0,producer:null,outType:"",pickerTypes:[{desc:"自提",type:1},{desc:"快递",type:2},{desc:"物流",type:3},{desc:"送货上门",type:4}],expressNum:""}},onLoad:function(){s=this,r=e.getStorageSync("uid"),this.products=e.getStorageSync("products");for(var t=0;t<this.products.length;t++)this.all_money=Number((this.products[t].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[t].really_total_money+this.really_total_money).toFixed(2));this.real_money=Number(this.all_money.toFixed(2))},onShow:function(){if(s.producer=e.getStorageSync("producer"),n=e.getStorageSync("shop"),n){s.shop_name=n.name;var t=u.default.Pointer("shops");a=t.set(n.objectId)}s.stock=e.getStorageSync("warehouse")?e.getStorageSync("warehouse")[0].stock:""},methods:{removeImg:function(e){s.Images.splice(e,1),s.Images=s.Images},upload_image:function(){s.user.is_vip?e.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){console.log(e);var t,o=Date.parse(new Date),r=e.tempFilePaths,a=!0,n=!1,c=void 0;try{for(var l,i=r[Symbol.iterator]();!(a=(l=i.next()).done);a=!0){var d=l.value;t=u.default.File(o+".jpg",d)}}catch(m){n=!0,c=m}finally{try{a||null==i.return||i.return()}finally{if(n)throw c}}t.save().then(function(e){var t=!0,o=!1,r=void 0;try{for(var a,n=e[Symbol.iterator]();!(t=(a=n.next()).done);t=!0){var u=a.value;s.Images.push(u.url)}}catch(m){o=!0,r=m}finally{try{t||null==n.return||n.return()}finally{if(o)throw r}}})}}):e.showToast({title:"您还不是会员，无法使用",icon:"none"})},select_outType:function(e){s.outType=s.pickerTypes[e.detail.value],2==s.outType.type&&3==s.outType.type||(s.expressNum="")},formSubmit:function(t){console.log(t);var o=t.detail.formId,m=Number(t.detail.target.dataset.type);this.button_disabled=!0,e.showLoading({title:"上传中..."});for(var f=u.default.Pointer("stocks"),y=f.set(s.stock?s.stock.objectId:""),p=new Array,g=[],h=0;h<this.products.length;h++){var v=Number(this.products[h].reserve)+this.products[h].num,_={},b=u.default.Query("Bills"),S=u.default.Pointer("_User"),w=S.set(r),N=u.default.Pointer("Goods"),k=N.set(this.products[h].objectId),I=e.getStorageSync("masterId"),P=u.default.Pointer("_User"),j=P.set(I);b.set("goodsName",this.products[h].goodsName),b.set("retailPrice",this.products[h].modify_retailPrice.toString()),b.set("num",Number(this.products[h].num)),b.set("total_money",this.products[h].total_money),b.set("really_total_money",this.products[h].really_total_money),b.set("goodsId",k),b.set("userId",w),b.set("opreater",j),b.set("type",1),b.set("extra_type",m),n&&b.set("shop",a),b.set("stock",y);var T={};_.goodsName=this.products[h].goodsName,_.modify_retailPrice=this.products[h].modify_retailPrice.toString(),_.retailPrice=this.products[h].retailPrice,_.total_money=this.products[h].total_money,T.costPrice=this.products[h].costPrice,T.retailPrice=this.products[h].retailPrice,T.objectId=this.products[h].objectId,T.reserve=v,_.goodsId=T,_.num=this.products[h].num,_.type=1,p.push(b),g.push(_)}u.default.Query("Bills").saveAll(p).then(function(a){console.log("批量新增单据成功",a);for(var n=[],f=0;f<a.length;f++)n.push(a[f].success.objectId);var p=u.default.Pointer("_User"),h=p.set(r),v=e.getStorageSync("masterId"),_=u.default.Pointer("_User"),b=_.set(v),S=u.default.Query("order_opreations");if(S.set("beizhu",t.detail.value.input_beizhu),S.set("detail",g),S.set("type",1),S.set("extra_type",m),S.set("bills",n),S.set("opreater",b),S.set("master",h),S.set("stock",y),S.set("goodsName",s.products[0].goodsName),S.set("real_money",Number(s.real_money)),S.set("debt",s.all_money-Number(s.real_money)),s.producer){var w=u.default.Pointer("producers"),N=w.set(s.producer.objectId);if(S.set("producer",N),s.all_money-Number(s.real_money)>0){var k=u.default.Query("producers");k.get(s.producer.objectId).then(function(e){var t=null==e.debt?0:e.debt;t+=s.all_money-Number(s.real_money),console.log(t);var o=u.default.Query("producers");o.get(s.producer.objectId).then(function(e){e.set("debt",t),e.save()})})}}s.outType&&(S.set("typeDesc",s.outType.desc),S.set("expressNum",s.expressNum)),S.set("all_money",s.all_money),S.set("Images",s.Images),S.save().then(function(r){var a=r.objectId;e.hideLoading(),e.showToast({title:"产品入库成功",icon:"success",duration:1e3,complete:function(){for(var n=function(e){var t=0,o=u.default.Query("Goods");o.get(s.products[e].objectId).then(function(o){if(s.products[e].selectd_model){var r=!0,a=!1,n=void 0;try{for(var u,c=JSON.parse(s.products[e].selectd_model)[Symbol.iterator]();!(r=(u=c.next()).done);r=!0){var l=u.value,i=!0,d=!1,m=void 0;try{for(var f,y=s.products[e].models[Symbol.iterator]();!(i=(f=y.next()).done);i=!0){var p=f.value;t+=Number(p.reserve),p.id==JSON.parse(l).id&&(p.reserve=Number(p.reserve)+Number(s.products[e].num))}}catch(g){d=!0,m=g}finally{try{i||null==y.return||y.return()}finally{if(d)throw m}}}}catch(g){a=!0,n=g}finally{try{r||null==c.return||c.return()}finally{if(a)throw n}}t+=Number(s.products[e].num),o.set("models",s.products[e].models)}else t=Number(s.products[e].reserve)+Number(s.products[e].num);o.set("reserve",t),o.set("stocktype",t>s.products[e].warning_num?1:0),o.save()}).catch(function(e){console.log(e)})},m=0;m<s.products.length;m++)n(m);setTimeout(function(){e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),c.default.log(e.getStorageSync("user").nickName+"入库了'"+s.products[0].goodsName+"'等"+s.products.length+"商品",1,r.objectId);var n={frist:e.getStorageSync("user").nickName+"入库了'"+s.products[0].goodsName+"'等"+s.products.length+"商品",data1:r.createdAt,data2:s.stock?s.stock.stock_name:"未填写",remark:t.detail.value.input_beizhu?t.detail.value.input_beizhu:"未填写",url:"https://www.jimuzhou.com/h5/pages/report/EnteringHistory/detail/detail?id="+r.objectId};i.default.send_in(n);var u={keyword1:{value:s.products[0].goodsName+"'等",color:"#173177"},keyword2:{value:t.detail.value.input_beizhu?t.detail.value.input_beizhu:"未填写"},keyword3:{value:r.createdAt},keyword4:{value:e.getStorageSync("user").nickName}};u.form_Id=o,u.id=r.objectId,i.default.send_in_mini(u),e.getStorageSync("setting").auto_print&&d.default.autoPrint(a)},500),s.can_addGoods().then(function(t){if(t){var o=e.getStorageSync("products"),r=e.getStorageSync("warehouse"),a=!0,n=!1,u=void 0;try{for(var c,i=o[Symbol.iterator]();!(a=(c=i.next()).done);a=!0){var d=c.value;d.reserve=d.num,l.default.upload_good_withNoCan(d,r[0].stock).then(function(t){console.log(t),t[0]?e.showToast({title:"添加成功",icon:"none"}):e.showToast({title:t[1],icon:"none"})})}}catch(m){n=!0,u=m}finally{try{a||null==i.return||i.return()}finally{if(n)throw u}}s.button_disabled=!1,e.setStorageSync("is_option",!0),e.removeStorageSync("warehouse"),setTimeout(function(){e.navigateBack({delta:2})},1e3)}else s.button_disabled=!1,e.setStorageSync("is_option",!0),e.removeStorageSync("warehouse"),setTimeout(function(){e.navigateBack({delta:2})},1e3)})}})})},function(e){console.log("异常处理")})},can_addGoods:function(){return new Promise(function(t,o){var r=e.getStorageSync("products"),s=e.getStorageSync("warehouse");if(s){var a=!0,n=!1,u=void 0;try{for(var c,l=r[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var i=c.value;""==i.stocks.stock_name||void 0==i.stocks.stock_name||i.stocks.stock_name!=s[0].stock.stock_name?e.showModal({title:"'"+i.goodsName+"'没有关联到调出仓库",content:"是否将它关联到此仓库",showCancel:!0,success:function(e){console.log(e),e.confirm&&t(!0)},fail:function(){},complete:function(){t(!1)}}):t(!1)}}catch(d){n=!0,u=d}finally{try{a||null==l.return||l.return()}finally{if(n)throw u}}}else t(!1)})}}};t.default=f}).call(this,o("543d")["default"])},1800:function(e,t,o){"use strict";(function(e){o("bc8c"),o("921b");r(o("66fd"));var t=r(o("faf6"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},"23b5":function(e,t,o){"use strict";o.r(t);var r=o("0dfb"),s=o.n(r);for(var a in r)"default"!==a&&function(e){o.d(t,e,function(){return r[e]})}(a);t["default"]=s.a},"4d12":function(e,t,o){"use strict";var r=o("dce4"),s=o.n(r);s.a},"944b":function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},s=[];o.d(t,"a",function(){return r}),o.d(t,"b",function(){return s})},dce4:function(e,t,o){},faf6:function(e,t,o){"use strict";o.r(t);var r=o("944b"),s=o("23b5");for(var a in s)"default"!==a&&function(e){o.d(t,e,function(){return s[e]})}(a);o("4d12");var n=o("2877"),u=Object(n["a"])(s["default"],r["a"],r["b"],!1,null,null,null);t["default"]=u.exports}},[["1800","common/runtime","common/vendor"]]]);