(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/goods_out/out_detail/out_detail"],{"0279":function(t,e,o){"use strict";(function(t){o("a961"),o("921b");s(o("66fd"));var e=s(o("7b57"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},7874:function(t,e,o){"use strict";o.r(e);var s=o("a573"),a=o.n(s);for(var r in s)"default"!==r&&function(t){o.d(e,t,function(){return s[t]})}(r);e["default"]=a.a},"7b57":function(t,e,o){"use strict";o.r(e);var s=o("a55c"),a=o("7874");for(var r in a)"default"!==r&&function(t){o.d(e,t,function(){return a[t]})}(r);o("8a61");var n=o("2877"),u=Object(n["a"])(a["default"],s["a"],s["b"],!1,null,null,null);e["default"]=u.exports},"8a61":function(t,e,o){"use strict";var s=o("ed24"),a=o.n(s);a.a},a55c:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=(t._self._c,t.nowDay.split(" "));t.$mp.data=Object.assign({},{$root:{g0:o}})},a=[];o.d(e,"a",function(){return s}),o.d(e,"b",function(){return a})},a573:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,a,r=c(o("c74b")),n=c(o("df06")),u=c(o("da3f")),i=c(o("b410"));c(o("428b"));function c(t){return t&&t.__esModule?t:{default:t}}var d={data:function(){return{user:t.getStorageSync("user"),identity:t.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,total_num:0,nowDay:n.default.getDay(0,!0,!0)}},onLoad:function(){a=this,s=t.getStorageSync("uid"),this.products=t.getStorageSync("products");for(var e=0;e<this.products.length;e++)this.all_money=Number((this.products[e].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[e].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[e].num);this.real_money=Number(this.all_money.toFixed(2))},methods:{bindDateChange:function(t){a.nowDay=t.detail.value+" 00:00:00"},removeImg:function(t){a.Images.splice(t,1),a.Images=a.Images},upload_image:function(){a.user.is_vip?t.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){console.log(t);var e,o=Date.parse(new Date),s=t.tempFilePaths,n=!0,u=!1,i=void 0;try{for(var c,d=s[Symbol.iterator]();!(n=(c=d.next()).done);n=!0){var l=c.value;e=r.default.File(o+".jpg",l)}}catch(m){u=!0,i=m}finally{try{n||null==d.return||d.return()}finally{if(u)throw i}}e.save().then(function(t){var e=!0,o=!1,s=void 0;try{for(var r,n=t[Symbol.iterator]();!(e=(r=n.next()).done);e=!0){var u=r.value;a.Images.push(u.url)}}catch(m){o=!0,s=m}finally{try{e||null==n.return||n.return()}finally{if(o)throw s}}})}}):t.showToast({title:"您还不是会员，无法使用",icon:"none"})},can_addGoods:function(){return new Promise(function(e,o){var s=t.getStorageSync("products"),a=t.getStorageSync("warehouse");if(a){var r=!0,n=!1,u=void 0;try{for(var i,c=function(){var o=i.value;if(""==o.stocks.stock_name||void 0==o.stocks.stock_name||o.stocks.stock_name!=a[0].stock.stock_name)return t.showModal({title:"'"+o.goodsName+"'没有关联到此仓库",content:"是否将它关联到此仓库",showCancel:!0,success:function(t){console.log(t),t.confirm?e([!0,o]):e([!1])},fail:function(){}}),{v:void 0};e([!1])},d=s[Symbol.iterator]();!(r=(i=d.next()).done);r=!0){var l=c();if("object"===typeof l)return l.v}}catch(m){n=!0,u=m}finally{try{r||null==d.return||d.return()}finally{if(n)throw u}}}else e([!1])})},formSubmit:function(e){if(!this.button_disabled){t.getStorageSync("identity");this.button_disabled=!0;var o=2,c=e.detail.formId;t.showLoading({title:"上传中..."});for(var d=new Array,l=[],m=0;m<this.products.length;m++){var f=Number(this.products[m].reserve)-this.products[m].num,y=r.default.Query("Bills"),h={},_=r.default.Pointer("_User"),g=_.set(s),p=r.default.Pointer("_User"),v=p.set(t.getStorageSync("masterId")),b=r.default.Pointer("Goods"),S=b.set(this.products[m].header?this.products[m].header.objectId:this.products[m].objectId);if(t.getStorageSync("custom")){var k=r.default.Pointer("customs"),w=k.set(t.getStorageSync("custom").objectId);y.set("custom",w)}y.set("goodsName",this.products[m].goodsName),y.set("retailPrice",this.products[m].modify_retailPrice.toString()),y.set("num",Number(this.products[m].num)),y.set("total_money",this.products[m].total_money),y.set("really_total_money",this.products[m].really_total_money),y.set("goodsId",S),y.set("userId",g),y.set("type",-1),y.set("extra_type",o),y.set("opreater",v),y.set("status",!0),y.set("createdTime",{__type:"Date",iso:a.nowDay});var I={};if(this.products[m].stocks&&this.products[m].stocks.objectId){var N=r.default.Pointer("stocks"),P=N.set(this.products[m].stocks.objectId);y.set("stock",P),h.stock=this.products[m].stocks.stock_name}h.goodsName=this.products[m].goodsName,h.modify_retailPrice=this.products[m].modify_retailPrice.toString(),h.retailPrice=this.products[m].retailPrice,h.total_money=this.products[m].total_money,I.costPrice=this.products[m].costPrice,I.retailPrice=this.products[m].retailPrice,I.objectId=this.products[m].objectId,I.reserve=f,this.products[m].selectd_model&&(I.selected_model=this.products[m].selected_model,I.models=this.products[m].models),h.goodsId=I,h.type=-1,h.num=this.products[m].num,h.warning_num=this.products[m].warning_num,d.push(y),l.push(h)}r.default.Query("Bills").saveAll(d).then(function(d){for(var m=[],f=0;f<d.length;f++)m.push(d[f].success.objectId);var y=r.default.Pointer("_User"),h=y.set(s),_=t.getStorageSync("masterId"),g=r.default.Pointer("_User"),p=g.set(_),v=r.default.Query("order_opreations");v.set("detail",l),v.set("bills",m),v.set("beizhu",e.detail.value.input_beizhu),v.set("type",-1),v.set("extra_type",o),v.set("opreater",p),v.set("master",h),v.set("real_num",a.total_num),v.set("goodsName",a.products[0].goodsName),v.set("real_money",Number(a.real_money)),v.set("debt",a.all_money-Number(a.real_money)),v.set("all_money",a.all_money),v.set("Images",a.Images),v.set("status",!0),v.set("createdTime",{__type:"Date",iso:a.nowDay}),v.save().then(function(o){var s=o.objectId;t.hideLoading(),t.removeStorageSync("customs"),t.showToast({title:"产品出库成功",icon:"success",success:function(){n.default.outRedGoodNum(a.products).then(function(r){setTimeout(function(){t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),n.default.log(t.getStorageSync("user").nickName+"出库了'"+a.products[0].goodsName+"'等"+a.products.length+"商品",-1,s);var r={data1:s,data2:t.getStorageSync("user").nickName+"出库了'"+a.products[0].goodsName+"'等"+a.products.length+"商品",data3:a.stock?a.stock.stock_name:"未填写",data4:o.createdAt,remark:e.detail.value.input_beizhu?e.detail.value.input_beizhu:"未填写",url:"https://www.jimuzhou.com/h5/pages/report/EnteringHistory/detail/detail?id="+s};u.default.send_temp(r);var d={keyword1:{value:a.products[0].goodsName+"'等",color:"#173177"},keyword2:{value:e.detail.value.input_beizhu?e.detail.value.input_beizhu:"未填写"},keyword3:{value:o.createdAt},keyword4:{value:t.getStorageSync("user").nickName}};d.form_Id=c,d.id=s,u.default.send_out_mini(d),t.getStorageSync("setting").auto_print&&i.default.autoPrint(s),a.button_disabled=!1,t.setStorageSync("is_option",!0),t.navigateBack({delta:2})},500)})}})})},function(t){console.log("异常处理")})}}}};e.default=d}).call(this,o("543d")["default"])},ed24:function(t,e,o){}},[["0279","common/runtime","common/vendor"]]]);