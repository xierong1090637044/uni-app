(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/goods_out/out_detail/out_detail"],{"2b0e":function(e,t,o){"use strict";var r=o("d563"),s=o.n(r);s.a},"5dca":function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},s=[];o.d(t,"a",function(){return r}),o.d(t,"b",function(){return s})},9137:function(e,t,o){"use strict";o.r(t);var r=o("9bfd"),s=o.n(r);for(var u in r)"default"!==u&&function(e){o.d(t,e,function(){return r[e]})}(u);t["default"]=s.a},"9bfd":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,s,u,a,n=l(o("b739")),c=l(o("4c96")),d=l(o("b35a"));function l(e){return e&&e.__esModule?e:{default:e}}var i={data:function(){return{stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,custom:null,outType:"",pickerTypes:[{desc:"自提",type:1},{desc:"快递",type:2},{desc:"物流",type:3},{desc:"送货上门",type:4}],expressNum:""}},onLoad:function(){s=this,r=e.getStorageSync("uid"),this.products=e.getStorageSync("products");for(var t=0;t<this.products.length;t++)this.all_money=Number((this.products[t].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[t].really_total_money+this.really_total_money).toFixed(2));this.real_money=Number(this.all_money.toFixed(2))},onShow:function(){if(s.custom=e.getStorageSync("custom"),a=e.getStorageSync("shop"),a){s.shop_name=a.name;var t=n.default.Pointer("shops");u=t.set(a.objectId)}s.stock=e.getStorageSync("warehouse")?e.getStorageSync("warehouse")[0].stock:""},methods:{select_outType:function(e){s.outType=s.pickerTypes[e.detail.value],2==s.outType.type&&3==s.outType.type||(s.expressNum="")},formSubmit:function(t){console.log(t);var o=t.detail.formId,l=Number(t.detail.target.dataset.type);this.button_disabled=!0,e.showLoading({title:"上传中..."});for(var i=n.default.Pointer("stocks"),m=i.set(s.stock?s.stock.objectId:""),p=new Array,y=[],f=0;f<this.products.length;f++){var h=Number(this.products[f].reserve)-this.products[f].num,_=n.default.Query("Bills"),g={},b=n.default.Pointer("_User"),v=b.set(r),S=n.default.Pointer("_User"),N=S.set(e.getStorageSync("masterId")),k=n.default.Pointer("Goods"),I=k.set(this.products[f].objectId);if(e.getStorageSync("custom")){var w=n.default.Pointer("customs"),P=w.set(e.getStorageSync("custom").objectId);_.set("custom",P)}_.set("goodsName",this.products[f].goodsName),_.set("retailPrice",this.products[f].modify_retailPrice.toString()),_.set("num",Number(this.products[f].num)),_.set("total_money",this.products[f].total_money),_.set("really_total_money",this.products[f].really_total_money),_.set("goodsId",I),_.set("userId",v),_.set("type",-1),_.set("extra_type",l),_.set("opreater",N),_.set("stock",m);var j={};g.goodsName=this.products[f].goodsName,g.modify_retailPrice=this.products[f].modify_retailPrice.toString(),g.retailPrice=this.products[f].retailPrice,g.total_money=this.products[f].total_money,j.costPrice=this.products[f].costPrice,j.retailPrice=this.products[f].retailPrice,j.objectId=this.products[f].objectId,j.reserve=h,g.goodsId=j,g.num=this.products[f].num,g.type=-1,a&&(_.set("shop",u),c.default.record_shopOut(a.objectId,a.have_out+this.products[f].num)),p.push(_),y.push(g),c.default.record_staffOut(this.products[f].num)}n.default.Query("Bills").saveAll(p).then(function(i){for(var p=[],f=0;f<i.length;f++)p.push(i[f].success.objectId);var h=n.default.Pointer("_User"),_=h.set(r),g=e.getStorageSync("masterId"),b=n.default.Pointer("_User"),v=b.set(g),S=n.default.Query("order_opreations");if(S.set("detail",y),S.set("bills",p),S.set("beizhu",t.detail.value.input_beizhu),S.set("type",-1),S.set("extra_type",l),S.set("opreater",v),S.set("stock",m),S.set("master",_),S.set("goodsName",s.products[0].goodsName),S.set("real_money",Number(s.real_money)),S.set("debt",s.all_money-Number(s.real_money)),a&&S.set("shop",u),s.custom){var N=n.default.Pointer("customs"),k=N.set(s.custom.objectId);if(S.set("custom",k),s.all_money-Number(s.real_money)>0){var I=n.default.Query("customs");I.get(s.custom.objectId).then(function(e){var t=null==e.debt?0:e.debt;t+=s.all_money-Number(s.real_money),console.log(t);var o=n.default.Query("customs");o.get(s.custom.objectId).then(function(e){e.set("debt",t),e.save()})})}}s.outType&&(S.set("typeDesc",s.outType.desc),S.set("expressNum",s.expressNum)),S.set("all_money",s.all_money),S.save().then(function(r){console.log("添加操作历史记录成功",r),e.hideLoading(),e.removeStorageSync("customs"),e.showToast({title:"产品出库成功",icon:"success",success:function(){for(var u=function(e){var t=0,o=n.default.Query("Goods");o.get(s.products[e].objectId).then(function(o){if(c.default.log(s.products[e].goodsName+"出库了"+s.products[e].num+"件，已经低于预警数量"+(s.products[e].warning_num?s.products[e].warning_num:0),-2,s.products[e].objectId),s.products[e].selectd_model){var r=!0,u=!1,a=void 0;try{for(var n,d=JSON.parse(s.products[e].selectd_model)[Symbol.iterator]();!(r=(n=d.next()).done);r=!0){var l=n.value,i=!0,m=!1,p=void 0;try{for(var y,f=s.products[e].models[Symbol.iterator]();!(i=(y=f.next()).done);i=!0){var h=y.value;t+=Number(h.reserve),h.id==JSON.parse(l).id&&(h.reserve=Number(h.reserve)-Number(s.products[e].num))}}catch(_){m=!0,p=_}finally{try{i||null==f.return||f.return()}finally{if(m)throw p}}}}catch(_){u=!0,a=_}finally{try{r||null==d.return||d.return()}finally{if(u)throw a}}t-=Number(s.products[e].num),o.set("models",s.products[e].models)}else t=Number(s.products[e].reserve)-Number(s.products[e].num);o.set("reserve",t),o.set("stocktype",t>s.products[e].warning_num?1:0),o.save()}).catch(function(e){console.log(e)})},a=0;a<s.products.length;a++)u(a);s.button_disabled=!1,e.setStorageSync("is_option",!0),setTimeout(function(){e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),c.default.log(e.getStorageSync("user").nickName+"出库了'"+s.products[0].goodsName+"'等"+s.products.length+"商品",-1,r.objectId);var u={data1:r.objectId,data2:e.getStorageSync("user").nickName+"出库了'"+s.products[0].goodsName+"'等"+s.products.length+"商品",data3:s.stock?s.stock.stock_name:"未填写",data4:r.createdAt,remark:t.detail.value.input_beizhu?t.detail.value.input_beizhu:"未填写",url:"https://www.jimuzhou.com/h5/pages/report/EnteringHistory/detail/detail?id="+r.objectId};d.default.send_temp(u);var a={keyword1:{value:s.products[0].goodsName+"'等",color:"#173177"},keyword2:{value:t.detail.value.input_beizhu?t.detail.value.input_beizhu:"未填写"},keyword3:{value:r.createdAt},keyword4:{value:e.getStorageSync("user").nickName}};a.form_Id=o,a.id=r.objectId,d.default.send_out_mini(a),e.navigateBack({delta:2})},500)}})})},function(e){console.log("异常处理")})}}};t.default=i}).call(this,o("543d")["default"])},d015:function(e,t,o){"use strict";(function(e){o("9511"),o("921b");r(o("66fd"));var t=r(o("d065"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},d065:function(e,t,o){"use strict";o.r(t);var r=o("5dca"),s=o("9137");for(var u in s)"default"!==u&&function(e){o.d(t,e,function(){return s[e]})}(u);o("2b0e");var a=o("2877"),n=Object(a["a"])(s["default"],r["a"],r["b"],!1,null,null,null);t["default"]=n.exports},d563:function(e,t,o){}},[["d015","common/runtime","common/vendor"]]]);