(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/goods_out/out_detail/out_detail"],{"0279":function(e,t,o){"use strict";(function(e){o("a961"),o("921b");s(o("66fd"));var t=s(o("7b57"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},"5b94":function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement,o=(e._self._c,e.othercurrent.indexOf("2"));e.$mp.data=Object.assign({},{$root:{g0:o}})},r=[];o.d(t,"a",function(){return s}),o.d(t,"b",function(){return r})},7874:function(e,t,o){"use strict";o.r(t);var s=o("a573"),r=o.n(s);for(var a in s)"default"!==a&&function(e){o.d(t,e,function(){return s[e]})}(a);t["default"]=r.a},"7b57":function(e,t,o){"use strict";o.r(t);var s=o("5b94"),r=o("7874");for(var a in r)"default"!==a&&function(e){o.d(t,e,function(){return r[e]})}(a);o("8a61");var u=o("2877"),n=Object(u["a"])(r["default"],s["a"],s["b"],!1,null,null,null);t["default"]=n.exports},"8a61":function(e,t,o){"use strict";var s=o("ed24"),r=o.n(s);r.a},a573:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,r,a,u,n=d(o("c74b")),c=d(o("df06")),i=d(o("da3f")),l=d(o("b410"));function d(e){return e&&e.__esModule?e:{default:e}}var m={data:function(){return{user:e.getStorageSync("user"),identity:e.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,custom:null,outType:"",discount:"",pickerTypes:[{desc:"自提",type:1},{desc:"快递",type:2},{desc:"物流",type:3},{desc:"送货上门",type:4}],expressNum:"",total_num:0}},onLoad:function(){r=this,s=e.getStorageSync("uid"),this.products=e.getStorageSync("products"),r.user.rights&&r.user.rights.othercurrent&&(r.othercurrent=r.user.rights.othercurrent)},onShow:function(){if(this.really_total_money=0,this.all_money=0,this.real_money=0,r.custom=e.getStorageSync("custom"),u=e.getStorageSync("shop"),u){r.shop_name=u.name;var t=n.default.Pointer("shops");a=t.set(u.objectId)}if(r.custom.discount){r.discount=r.custom.discount;for(var o=0;o<this.products.length;o++)this.all_money=Number((this.products[o].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[o].really_total_money+this.really_total_money).toFixed(2));this.really_total_money=this.really_total_money*r.discount/100,this.real_money=Number(this.all_money.toFixed(2))*r.discount/100,this.all_money=this.all_money*r.discount/100}else{for(var s=0;s<this.products.length;s++)this.all_money=Number((this.products[s].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[s].really_total_money+this.really_total_money).toFixed(2));this.real_money=Number(this.all_money.toFixed(2))}r.stock=e.getStorageSync("warehouse")?e.getStorageSync("warehouse")[0].stock:""},methods:{scan_code:function(){e.scanCode({onlyFromCamera:!0,success:function(e){console.log("条码类型："+e.scanType),console.log("条码内容："+e.result),r.expressNum=e.result}})},removeImg:function(e){r.Images.splice(e,1),r.Images=r.Images},upload_image:function(){r.user.is_vip?e.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){console.log(e);var t,o=Date.parse(new Date),s=e.tempFilePaths,a=!0,u=!1,c=void 0;try{for(var i,l=s[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var d=i.value;t=n.default.File(o+".jpg",d)}}catch(m){u=!0,c=m}finally{try{a||null==l.return||l.return()}finally{if(u)throw c}}t.save().then(function(e){var t=!0,o=!1,s=void 0;try{for(var a,u=e[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var n=a.value;r.Images.push(n.url)}}catch(m){o=!0,s=m}finally{try{t||null==u.return||u.return()}finally{if(o)throw s}}})}}):e.showToast({title:"您还不是会员，无法使用",icon:"none"})},getDiscount:function(e){var t=Number(e.detail.value);t>=100?r.discount=100:(r.discount=t,r.real_money=Number(this.all_money.toFixed(2))*t/100)},select_outType:function(e){r.outType=r.pickerTypes[e.detail.value],2==r.outType.type&&3==r.outType.type||(r.expressNum="")},formSubmit:function(t){console.log(t),this.button_disabled=!0;var o=t.detail.formId,d=Number(t.detail.target.dataset.type);e.showLoading({title:"上传中..."});for(var m=n.default.Pointer("stocks"),y=m.set(r.stock?r.stock.objectId:""),h=new Array,p=[],_=0;_<this.products.length;_++){var g=Number(this.products[_].reserve)-this.products[_].num,f=n.default.Query("Bills"),v={},b=n.default.Pointer("_User"),S=b.set(s),N=n.default.Pointer("_User"),I=N.set(e.getStorageSync("masterId")),k=n.default.Pointer("Goods"),w=k.set(this.products[_].objectId);if(e.getStorageSync("custom")){var P=n.default.Pointer("customs"),j=P.set(e.getStorageSync("custom").objectId);f.set("custom",j)}f.set("goodsName",this.products[_].goodsName),f.set("retailPrice",this.products[_].modify_retailPrice.toString()),f.set("num",Number(this.products[_].num)),f.set("total_money",this.products[_].total_money),f.set("really_total_money",this.products[_].really_total_money),f.set("goodsId",w),f.set("userId",S),f.set("type",-1),f.set("extra_type",d),f.set("opreater",I),f.set("stock",y),f.set("status",2==d);var x={};v.goodsName=this.products[_].goodsName,v.modify_retailPrice=this.products[_].modify_retailPrice.toString(),v.retailPrice=this.products[_].retailPrice,v.total_money=this.products[_].total_money,x.costPrice=this.products[_].costPrice,x.retailPrice=this.products[_].retailPrice,x.objectId=this.products[_].objectId,x.reserve=g,this.products[_].selectd_model&&(x.selected_model=this.products[_].selected_model,x.models=this.products[_].models),v.goodsId=x,v.num=this.products[_].num,v.type=-1,u&&(f.set("shop",a),c.default.record_shopOut(u.objectId,u.have_out+this.products[_].num)),h.push(f),p.push(v)}n.default.Query("Bills").saveAll(h).then(function(m){for(var h=[],_=0;_<m.length;_++)h.push(m[_].success.objectId);var g=n.default.Pointer("_User"),f=g.set(s),v=e.getStorageSync("masterId"),b=n.default.Pointer("_User"),S=b.set(v),N=n.default.Query("order_opreations");if(N.set("detail",p),N.set("bills",h),N.set("beizhu",t.detail.value.input_beizhu),N.set("type",-1),N.set("extra_type",d),N.set("opreater",S),N.set("stock",y),N.set("master",f),N.set("real_num",r.total_num),r.discount&&N.set("discount",r.discount),N.set("goodsName",r.products[0].goodsName),N.set("real_money",Number(r.real_money)),N.set("debt",r.all_money-Number(r.real_money)),u&&N.set("shop",a),r.custom){var I=n.default.Pointer("customs"),k=I.set(r.custom.objectId);if(N.set("custom",k),r.all_money-Number(r.real_money)>0){var w=n.default.Query("customs");w.get(r.custom.objectId).then(function(e){var t=null==e.debt?0:e.debt;t+=r.all_money-Number(r.real_money),console.log(t);var o=n.default.Query("customs");o.get(r.custom.objectId).then(function(e){e.set("debt",t),e.save()})})}}r.outType&&(N.set("typeDesc",r.outType.desc),N.set("expressNum",r.expressNum)),N.set("all_money",r.all_money),N.set("Images",r.Images),N.set("status",!1),N.save().then(function(s){var a=s.objectId;e.hideLoading(),e.removeStorageSync("customs"),2==d?e.showToast({title:"产品出库成功",icon:"success",success:function(){c.default.enterAddGoodNum(r.products).then(function(s){r.button_disabled=!1,e.setStorageSync("is_option",!0),setTimeout(function(){e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),c.default.log(e.getStorageSync("user").nickName+"出库了'"+r.products[0].goodsName+"'等"+r.products.length+"商品",-1,s.objectId);var u={data1:s.objectId,data2:e.getStorageSync("user").nickName+"出库了'"+r.products[0].goodsName+"'等"+r.products.length+"商品",data3:r.stock?r.stock.stock_name:"未填写",data4:s.createdAt,remark:t.detail.value.input_beizhu?t.detail.value.input_beizhu:"未填写",url:"https://www.jimuzhou.com/h5/pages/report/EnteringHistory/detail/detail?id="+s.objectId};i.default.send_temp(u);var n={keyword1:{value:r.products[0].goodsName+"'等",color:"#173177"},keyword2:{value:t.detail.value.input_beizhu?t.detail.value.input_beizhu:"未填写"},keyword3:{value:s.createdAt},keyword4:{value:e.getStorageSync("user").nickName}};n.form_Id=o,n.id=s.objectId,i.default.send_out_mini(n),e.getStorageSync("setting").auto_print&&l.default.autoPrint(a),e.navigateBack({delta:2})},500)})}}):1==d&&e.showToast({title:"产品销售成功",icon:"success",success:function(){r.button_disabled=!1,e.setStorageSync("is_option",!0),setTimeout(function(){e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),c.default.log(e.getStorageSync("user").nickName+"销售了'"+r.products[0].goodsName+"'等"+r.products.length+"商品",-1,s.objectId),e.getStorageSync("setting").auto_print&&l.default.autoPrint(a),e.navigateBack({delta:2})},500)}})})},function(e){console.log("异常处理")})}}};t.default=m}).call(this,o("543d")["default"])},ed24:function(e,t,o){}},[["0279","common/runtime","common/vendor"]]]);