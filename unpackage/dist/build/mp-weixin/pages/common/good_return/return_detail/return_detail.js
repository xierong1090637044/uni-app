(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_return/return_detail/return_detail"],{"172c":function(t,e,o){"use strict";o.r(e);var s=o("c336"),r=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);e["default"]=r.a},"1e73":function(t,e,o){"use strict";o.r(e);var s=o("3d03"),r=o("172c");for(var n in r)"default"!==n&&function(t){o.d(e,t,function(){return r[t]})}(n);o("21bf");var a=o("2877"),u=Object(a["a"])(r["default"],s["a"],s["b"],!1,null,null,null);e["default"]=u.exports},"21bf":function(t,e,o){"use strict";var s=o("d6ae"),r=o.n(s);r.a},"3d03":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=(t._self._c,t.nowDay.split(" "));t.$mp.data=Object.assign({},{$root:{g0:o}})},r=[];o.d(e,"a",function(){return s}),o.d(e,"b",function(){return r})},"880f":function(t,e,o){"use strict";(function(t){o("a961"),o("921b");s(o("66fd"));var e=s(o("1e73"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},c336:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,r,n,a,u=i(o("c74b")),c=i(o("df06"));i(o("da3f")),i(o("b410")),i(o("428b"));function i(t){return t&&t.__esModule?t:{default:t}}var d={data:function(){return{user:t.getStorageSync("user"),identity:t.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,custom:"",total_num:0,nowDay:c.default.getDay(0,!0,!0)}},onLoad:function(){r=this,s=t.getStorageSync("uid"),this.products=t.getStorageSync("products"),r.user.rights&&r.user.rights.othercurrent&&(r.othercurrent=r.user.rights.othercurrent)},onShow:function(){if(this.really_total_money=0,this.all_money=0,this.real_money=0,this.total_num=0,r.custom=t.getStorageSync("custom"),a=t.getStorageSync("shop"),a){r.shop_name=a.name;var e=u.default.Pointer("shops");n=e.set(a.objectId)}for(var o=0;o<this.products.length;o++)this.all_money=Number((this.products[o].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[o].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[o].num);this.real_money=Number(this.all_money.toFixed(2))},methods:{scan_code:function(){t.scanCode({onlyFromCamera:!0,success:function(t){console.log("条码类型："+t.scanType),console.log("条码内容："+t.result),r.expressNum=t.result}})},bindDateChange:function(t){r.nowDay=t.detail.value+" 00:00:00"},removeImg:function(t){r.Images.splice(t,1),r.Images=r.Images},upload_image:function(){r.user.is_vip?t.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){console.log(t);var e,o=Date.parse(new Date),s=t.tempFilePaths,n=!0,a=!1,c=void 0;try{for(var i,d=s[Symbol.iterator]();!(n=(i=d.next()).done);n=!0){var l=i.value;e=u.default.File(o+".jpg",l)}}catch(m){a=!0,c=m}finally{try{n||null==d.return||d.return()}finally{if(a)throw c}}e.save().then(function(t){var e=!0,o=!1,s=void 0;try{for(var n,a=t[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var u=n.value;r.Images.push(u.url)}}catch(m){o=!0,s=m}finally{try{e||null==a.return||a.return()}finally{if(o)throw s}}})}}):t.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(e){t.getStorageSync("identity");this.button_disabled=!0;e.detail.formId;if(t.showLoading({title:"上传中..."}),""==t.getStorageSync("custom")||void 0==t.getStorageSync("custom"))return t.showToast({icon:"none",title:"请选择客户"}),void(this.button_disabled=!1);for(var o=new Array,i=[],d=0;d<this.products.length;d++){var l=Number(this.products[d].reserve)-this.products[d].num,m=u.default.Query("Bills"),h={},f=u.default.Pointer("_User"),y=f.set(s),g=u.default.Pointer("_User"),p=g.set(t.getStorageSync("masterId")),_=u.default.Pointer("Goods"),b=_.set(this.products[d].header?this.products[d].header.objectId:this.products[d].objectId);if(t.getStorageSync("custom")){var v=u.default.Pointer("customs"),S=v.set(t.getStorageSync("custom").objectId);m.set("custom",S)}m.set("goodsName",this.products[d].goodsName),m.set("retailPrice",this.products[d].modify_retailPrice.toString()),m.set("num",Number(this.products[d].num)),m.set("total_money",this.products[d].total_money),m.set("really_total_money",this.products[d].really_total_money),m.set("goodsId",b),m.set("userId",y),m.set("type",2),m.set("opreater",p),m.set("createdTime",{__type:"Date",iso:r.nowDay});var I={};if(this.products[d].stocks&&this.products[d].stocks.objectId){var P=u.default.Pointer("stocks"),w=P.set(this.products[d].stocks.objectId);m.set("stock",w),h.stock=this.products[d].stocks.stock_name}h.goodsName=this.products[d].goodsName,h.modify_retailPrice=this.products[d].modify_retailPrice.toString(),h.retailPrice=this.products[d].retailPrice,h.total_money=this.products[d].total_money,h.packingUnit=this.products[d].packingUnit,I.costPrice=this.products[d].costPrice,I.retailPrice=this.products[d].retailPrice,I.objectId=this.products[d].objectId,I.reserve=l,this.products[d].selectd_model&&(I.selected_model=this.products[d].selected_model,I.models=this.products[d].models),h.goodsId=I,h.type=2,h.num=this.products[d].num,h.warning_num=this.products[d].warning_num,a&&m.set("shop",n),o.push(m),i.push(h)}u.default.Query("Bills").saveAll(o).then(function(o){for(var d=[],l=0;l<o.length;l++)d.push(o[l].success.objectId);var m=u.default.Pointer("_User"),h=m.set(s),f=t.getStorageSync("masterId"),y=u.default.Pointer("_User"),g=y.set(f),p=u.default.Query("order_opreations");p.set("detail",i),p.set("bills",d),p.set("beizhu",e.detail.value.input_beizhu),p.set("type",2),p.set("opreater",g),p.set("master",h),p.set("real_num",r.total_num),r.discount&&p.set("discount",r.discount),p.set("goodsName",r.products[0].goodsName),p.set("real_money",Number(r.real_money)),p.set("debt",Number(r.real_money)),a&&p.set("shop",n);var _=u.default.Pointer("customs"),b=_.set(r.custom.objectId);if(console.log("dddddd",r.custom),p.set("custom",b),r.custom){var v=u.default.Query("customs");v.get(r.custom.objectId).then(function(t){var e=null==t.debt?0:t.debt;e-=Number(r.real_money),console.log(e);var o=u.default.Query("customs");o.get(r.custom.objectId).then(function(t){t.set("debt",e),t.save()})})}p.set("all_money",r.all_money),p.set("Images",r.Images),p.set("status",!0),p.set("createdTime",{__type:"Date",iso:r.nowDay}),p.save().then(function(e){var o=e.objectId;t.hideLoading(),t.showToast({title:"退货成功",icon:"success",success:function(){c.default.enterAddGoodNum(r.products).then(function(e){r.button_disabled=!1,t.setStorageSync("is_option",!0),setTimeout(function(){t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),c.default.log(t.getStorageSync("user").nickName+"处理了'"+r.products[0].goodsName+"'等"+r.products.length+"商品的退货",2,o),t.navigateBack({delta:2})},500)})}})})},function(t){console.log("异常处理")})}}};e.default=d}).call(this,o("543d")["default"])},d6ae:function(t,e,o){}},[["880f","common/runtime","common/vendor"]]]);