(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/goods_out/out_detail/out_detail"],{"2a0c":function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},s=[];o.d(t,"a",function(){return r}),o.d(t,"b",function(){return s})},"3cab":function(e,t,o){"use strict";o.r(t);var r=o("2a0c"),s=o("7825");for(var a in s)"default"!==a&&function(e){o.d(t,e,function(){return s[e]})}(a);o("f54d");var u=o("2877"),n=Object(u["a"])(s["default"],r["a"],r["b"],!1,null,null,null);t["default"]=n.exports},5110:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,s,a,u,n=d(o("906f")),c=d(o("93e8")),l=d(o("6312")),i=d(o("2df3"));function d(e){return e&&e.__esModule?e:{default:e}}var m={data:function(){return{user:e.getStorageSync("user"),Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,custom:null,outType:"",discount:"",pickerTypes:[{desc:"自提",type:1},{desc:"快递",type:2},{desc:"物流",type:3},{desc:"送货上门",type:4}],expressNum:""}},onLoad:function(){s=this,r=e.getStorageSync("uid"),this.products=e.getStorageSync("products")},onShow:function(){if(this.really_total_money=0,this.all_money=0,this.real_money=0,s.custom=e.getStorageSync("custom"),u=e.getStorageSync("shop"),u){s.shop_name=u.name;var t=n.default.Pointer("shops");a=t.set(u.objectId)}if(s.custom.discount){s.discount=s.custom.discount;for(var o=0;o<this.products.length;o++)this.all_money=Number((this.products[o].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[o].really_total_money+this.really_total_money).toFixed(2));this.really_total_money=this.really_total_money*s.discount/100,this.real_money=Number(this.all_money.toFixed(2))*s.discount/100,this.all_money=this.all_money*s.discount/100}else{for(var r=0;r<this.products.length;r++)this.all_money=Number((this.products[r].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[r].really_total_money+this.really_total_money).toFixed(2));this.real_money=Number(this.all_money.toFixed(2))}s.stock=e.getStorageSync("warehouse")?e.getStorageSync("warehouse")[0].stock:""},methods:{removeImg:function(e){s.Images.splice(e,1),s.Images=s.Images},upload_image:function(){s.user.is_vip?e.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){console.log(e);var t,o=Date.parse(new Date),r=e.tempFilePaths,a=!0,u=!1,c=void 0;try{for(var l,i=r[Symbol.iterator]();!(a=(l=i.next()).done);a=!0){var d=l.value;t=n.default.File(o+".jpg",d)}}catch(m){u=!0,c=m}finally{try{a||null==i.return||i.return()}finally{if(u)throw c}}t.save().then(function(e){var t=!0,o=!1,r=void 0;try{for(var a,u=e[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var n=a.value;s.Images.push(n.url)}}catch(m){o=!0,r=m}finally{try{t||null==u.return||u.return()}finally{if(o)throw r}}})}}):e.showToast({title:"您还不是会员，无法使用",icon:"none"})},getDiscount:function(e){var t=Number(e.detail.value);t>=100?s.discount=100:(s.discount=t,s.real_money=Number(this.all_money.toFixed(2))*t/100)},select_outType:function(e){s.outType=s.pickerTypes[e.detail.value],2==s.outType.type&&3==s.outType.type||(s.expressNum="")},formSubmit:function(t){console.log(t);var o=t.detail.formId,d=Number(t.detail.target.dataset.type);this.button_disabled=!0,e.showLoading({title:"上传中..."});for(var m=n.default.Pointer("stocks"),y=m.set(s.stock?s.stock.objectId:""),p=new Array,f=[],h=0;h<this.products.length;h++){var _=Number(this.products[h].reserve)-this.products[h].num,g=n.default.Query("Bills"),v={},b=n.default.Pointer("_User"),S=b.set(r),N=n.default.Pointer("_User"),I=N.set(e.getStorageSync("masterId")),w=n.default.Pointer("Goods"),k=w.set(this.products[h].objectId);if(e.getStorageSync("custom")){var P=n.default.Pointer("customs"),j=P.set(e.getStorageSync("custom").objectId);g.set("custom",j)}g.set("goodsName",this.products[h].goodsName),g.set("retailPrice",this.products[h].modify_retailPrice.toString()),g.set("num",Number(this.products[h].num)),g.set("total_money",this.products[h].total_money),g.set("really_total_money",this.products[h].really_total_money),g.set("goodsId",k),g.set("userId",S),g.set("type",-1),g.set("extra_type",d),g.set("opreater",I),g.set("stock",y);var x={};v.goodsName=this.products[h].goodsName,v.modify_retailPrice=this.products[h].modify_retailPrice.toString(),v.retailPrice=this.products[h].retailPrice,v.total_money=this.products[h].total_money,x.costPrice=this.products[h].costPrice,x.retailPrice=this.products[h].retailPrice,x.objectId=this.products[h].objectId,x.reserve=_,v.goodsId=x,v.num=this.products[h].num,v.type=-1,u&&(g.set("shop",a),c.default.record_shopOut(u.objectId,u.have_out+this.products[h].num)),p.push(g),f.push(v),c.default.record_staffOut(this.products[h].num)}n.default.Query("Bills").saveAll(p).then(function(m){for(var p=[],h=0;h<m.length;h++)p.push(m[h].success.objectId);var _=n.default.Pointer("_User"),g=_.set(r),v=e.getStorageSync("masterId"),b=n.default.Pointer("_User"),S=b.set(v),N=n.default.Query("order_opreations");if(N.set("detail",f),N.set("bills",p),N.set("beizhu",t.detail.value.input_beizhu),N.set("type",-1),N.set("extra_type",d),N.set("opreater",S),N.set("stock",y),N.set("master",g),s.discount&&N.set("discount",s.discount),N.set("goodsName",s.products[0].goodsName),N.set("real_money",Number(s.real_money)),N.set("debt",s.all_money-Number(s.real_money)),u&&N.set("shop",a),s.custom){var I=n.default.Pointer("customs"),w=I.set(s.custom.objectId);if(N.set("custom",w),s.all_money-Number(s.real_money)>0){var k=n.default.Query("customs");k.get(s.custom.objectId).then(function(e){var t=null==e.debt?0:e.debt;t+=s.all_money-Number(s.real_money),console.log(t);var o=n.default.Query("customs");o.get(s.custom.objectId).then(function(e){e.set("debt",t),e.save()})})}}s.outType&&(N.set("typeDesc",s.outType.desc),N.set("expressNum",s.expressNum)),N.set("all_money",s.all_money),N.set("Images",s.Images),N.save().then(function(r){var a=r.objectId;e.hideLoading(),e.removeStorageSync("customs"),e.showToast({title:"产品出库成功",icon:"success",success:function(){for(var u=function(e){var t=0,o=n.default.Query("Goods");o.get(s.products[e].objectId).then(function(o){if(s.products[e].warning_num>=s.products[e].reserve&&c.default.log(s.products[e].goodsName+"出库了"+s.products[e].num+"件，已经低于预警数量"+s.products[e].warning_num,-2,s.products[e].objectId),s.products[e].selectd_model){var r=!0,a=!1,u=void 0;try{for(var n,l=JSON.parse(s.products[e].selectd_model)[Symbol.iterator]();!(r=(n=l.next()).done);r=!0){var i=n.value,d=!0,m=!1,y=void 0;try{for(var p,f=s.products[e].models[Symbol.iterator]();!(d=(p=f.next()).done);d=!0){var h=p.value;t+=Number(h.reserve),h.id==JSON.parse(i).id&&(h.reserve=Number(h.reserve)-Number(s.products[e].num))}}catch(_){m=!0,y=_}finally{try{d||null==f.return||f.return()}finally{if(m)throw y}}}}catch(_){a=!0,u=_}finally{try{r||null==l.return||l.return()}finally{if(a)throw u}}t-=Number(s.products[e].num),o.set("models",s.products[e].models)}else t=Number(s.products[e].reserve)-Number(s.products[e].num);o.set("reserve",t),o.set("stocktype",t>=s.products[e].warning_num?1:0),o.save()}).catch(function(e){console.log(e)})},d=0;d<s.products.length;d++)u(d);s.button_disabled=!1,e.setStorageSync("is_option",!0),setTimeout(function(){e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),c.default.log(e.getStorageSync("user").nickName+"出库了'"+s.products[0].goodsName+"'等"+s.products.length+"商品",-1,r.objectId);var u={data1:r.objectId,data2:e.getStorageSync("user").nickName+"出库了'"+s.products[0].goodsName+"'等"+s.products.length+"商品",data3:s.stock?s.stock.stock_name:"未填写",data4:r.createdAt,remark:t.detail.value.input_beizhu?t.detail.value.input_beizhu:"未填写",url:"https://www.jimuzhou.com/h5/pages/report/EnteringHistory/detail/detail?id="+r.objectId};l.default.send_temp(u);var n={keyword1:{value:s.products[0].goodsName+"'等",color:"#173177"},keyword2:{value:t.detail.value.input_beizhu?t.detail.value.input_beizhu:"未填写"},keyword3:{value:r.createdAt},keyword4:{value:e.getStorageSync("user").nickName}};n.form_Id=o,n.id=r.objectId,l.default.send_out_mini(n),e.getStorageSync("setting").auto_print&&i.default.autoPrint(a),e.navigateBack({delta:2})},500)}})})},function(e){console.log("异常处理")})}}};t.default=m}).call(this,o("543d")["default"])},"6df5":function(e,t,o){"use strict";(function(e){o("bc8c"),o("921b");r(o("66fd"));var t=r(o("3cab"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},7825:function(e,t,o){"use strict";o.r(t);var r=o("5110"),s=o.n(r);for(var a in r)"default"!==a&&function(e){o.d(t,e,function(){return r[e]})}(a);t["default"]=s.a},"8f1b":function(e,t,o){},f54d:function(e,t,o){"use strict";var r=o("8f1b"),s=o.n(r);s.a}},[["6df5","common/runtime","common/vendor"]]]);