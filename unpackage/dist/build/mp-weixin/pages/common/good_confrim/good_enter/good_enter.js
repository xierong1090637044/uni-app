(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_confrim/good_enter/good_enter"],{2545:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=(t._self._c,t.othercurrent.indexOf("1")),r=t.nowDay.split(" ");t.$mp.data=Object.assign({},{$root:{g0:o,g1:r}})},s=[];o.d(e,"a",function(){return r}),o.d(e,"b",function(){return s})},3569:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,s,a=d(o("c74b")),n=d(o("df06")),i=(d(o("428b")),d(o("da3f"))),u=d(o("b410"));function d(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{user:t.getStorageSync("user"),identity:t.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,really_total_money:0,total_num:0,nowDay:n.default.getDay(0,!0,!0)}},onLoad:function(){s=this,r=t.getStorageSync("uid"),this.products=t.getStorageSync("products");for(var e=0;e<this.products.length;e++)this.all_money=Number((this.products[e].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[e].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[e].num);this.real_money=Number(this.all_money.toFixed(2)),s.user.rights&&s.user.rights.othercurrent&&(s.othercurrent=s.user.rights.othercurrent)},onShow:function(){},methods:{bindDateChange:function(t){s.nowDay=t.detail.value+" 00:00:00"},removeImg:function(t){s.Images.splice(t,1),s.Images=s.Images},upload_image:function(){s.user.is_vip?t.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var e,o=Date.parse(new Date),r=t.tempFilePaths,n=!0,i=!1,u=void 0;try{for(var d,c=r[Symbol.iterator]();!(n=(d=c.next()).done);n=!0){var l=d.value;e=a.default.File(o+".jpg",l)}}catch(m){i=!0,u=m}finally{try{n||null==c.return||c.return()}finally{if(i)throw u}}e.save().then(function(t){var e=!0,o=!1,r=void 0;try{for(var a,n=t[Symbol.iterator]();!(e=(a=n.next()).done);e=!0){var i=a.value;s.Images.push(i.url)}}catch(m){o=!0,r=m}finally{try{e||null==n.return||n.return()}finally{if(o)throw r}}})}}):t.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(e){t.getStorageSync("identity");if(!this.button_disabled){this.button_disabled=!0;var o=e.detail.formId,d=2;t.showLoading({title:"上传中..."});for(var c=new Array,l=[],m=[],h=0;h<this.products.length;h++){var f=Number(this.products[h].reserve)+this.products[h].num,p={},y=a.default.Query("Bills"),g=a.default.Pointer("_User"),_=g.set(r),v=a.default.Pointer("Goods"),b=v.set(this.products[h].header?this.products[h].header.objectId:this.products[h].objectId),S=t.getStorageSync("masterId"),k=a.default.Pointer("_User"),I=k.set(S);y.set("goodsName",this.products[h].goodsName),y.set("retailPrice",this.products[h].modify_retailPrice.toString()),y.set("num",Number(this.products[h].num)),y.set("total_money",this.products[h].total_money),y.set("really_total_money",this.products[h].really_total_money),y.set("goodsId",b),y.set("userId",_),y.set("opreater",I),y.set("type",1),y.set("extra_type",d),y.set("createdTime",{__type:"Date",iso:s.nowDay}),y.set("status",!0);var w={};if(this.products[h].stocks&&this.products[h].stocks.objectId){var N=a.default.Pointer("stocks"),P=N.set(this.products[h].stocks.objectId);y.set("stock",P),p.stock=this.products[h].stocks.stock_name,m.push(this.products[h].stocks.objectId)}p.goodsName=this.products[h].goodsName,p.modify_retailPrice=this.products[h].modify_retailPrice.toString(),p.retailPrice=this.products[h].retailPrice,p.total_money=this.products[h].total_money,p.packingUnit=this.products[h].packingUnit,w.costPrice=this.products[h].costPrice,w.retailPrice=this.products[h].retailPrice,w.objectId=this.products[h].objectId,w.reserve=f,this.products[h].selectd_model&&(w.selected_model=this.products[h].selected_model,w.models=this.products[h].models),p.goodsId=w,p.num=this.products[h].num,p.type=1,c.push(y),l.push(p)}a.default.Query("Bills").saveAll(c).then(function(c){for(var h=[],f=0;f<c.length;f++)h.push(c[f].success.objectId);var p=a.default.Pointer("_User"),y=p.set(r),g=t.getStorageSync("masterId"),_=a.default.Pointer("_User"),v=_.set(g),b=a.default.Query("order_opreations");b.set("beizhu",e.detail.value.input_beizhu),b.set("detail",l),b.set("real_num",s.total_num),b.set("type",1),b.set("extra_type",d),b.set("bills",h),b.set("opreater",v),b.set("master",y),b.set("stockIds",m),b.set("goodsName",s.products[0].goodsName),b.set("real_money",Number(s.real_money)),b.set("debt",0),b.set("all_money",s.all_money),b.set("Images",s.Images),b.set("status",!0),b.set("createdTime",{__type:"Date",iso:s.nowDay}),b.save().then(function(r){var a=r.objectId;t.hideLoading(),t.showToast({title:"产品入库成功",icon:"success",duration:1e3,complete:function(){n.default.enterAddGoodNum(s.products).then(function(d){n.default.log(t.getStorageSync("user").nickName+"入库了'"+s.products[0].goodsName+"'等"+s.products.length+"商品",1,a);var c={frist:t.getStorageSync("user").nickName+"入库了'"+s.products[0].goodsName+"'等"+s.products.length+"商品",data1:r.createdAt,data2:s.stock?s.stock.stock_name:"未填写",remark:e.detail.value.input_beizhu?e.detail.value.input_beizhu:"未填写",url:"https://www.jimuzhou.com/h5/pages/report/EnteringHistory/detail/detail?id="+a};i.default.send_in(c);var l={keyword1:{value:s.products[0].goodsName+"'等",color:"#173177"},keyword2:{value:e.detail.value.input_beizhu?e.detail.value.input_beizhu:"未填写"},keyword3:{value:r.createdAt},keyword4:{value:t.getStorageSync("user").nickName}};l.form_Id=o,l.id=a,i.default.send_in_mini(l),t.getStorageSync("setting").auto_print&&u.default.autoPrint(a),s.button_disabled=!1,t.setStorageSync("is_option",!0),t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),t.navigateBack({delta:2})})}})})},function(t){console.log("异常处理")})}}}};e.default=c}).call(this,o("543d")["default"])},4079:function(t,e,o){"use strict";o.r(e);var r=o("3569"),s=o.n(r);for(var a in r)"default"!==a&&function(t){o.d(e,t,function(){return r[t]})}(a);e["default"]=s.a},"5e12":function(t,e,o){"use strict";var r=o("f733"),s=o.n(r);s.a},b142:function(t,e,o){"use strict";o.r(e);var r=o("2545"),s=o("4079");for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);o("5e12");var n=o("2877"),i=Object(n["a"])(s["default"],r["a"],r["b"],!1,null,null,null);e["default"]=i.exports},f697:function(t,e,o){"use strict";(function(t){o("a961"),o("921b");r(o("66fd"));var e=r(o("b142"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},f733:function(t,e,o){}},[["f697","common/runtime","common/vendor"]]]);