(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_allocation/allocation_detail/allocation_detail"],{"0481":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},u=[];o.d(e,"a",function(){return s}),o.d(e,"b",function(){return u})},"3aa5":function(t,e,o){"use strict";var s=o("8aea"),u=o.n(s);u.a},"49b1":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,u,n=a(o("906f")),r=a(o("93e8")),c=(a(o("6312")),a(o("2df3")));function a(t){return t&&t.__esModule?t:{default:t}}var d={data:function(){return{products:[],stock:"",out_stock:"",button_disabled:!1,beizhu_text:"",out_products:[],all_money:0,real_money:0}},onLoad:function(){u=this,s=t.getStorageSync("uid"),this.products=t.getStorageSync("products");for(var e=0;e<this.products.length;e++)this.all_money=Number((this.products[e].total_money+this.all_money).toFixed(2));this.real_money=Number(this.all_money.toFixed(2))},onShow:function(){u.stock=t.getStorageSync("warehouse")[0].stock,u.out_stock=t.getStorageSync("out_warehouse")?t.getStorageSync("out_warehouse")[0].stock:""},methods:{check:function(){return new Promise(function(e,o){""==u.out_stock||null==u.out_stock?(t.showToast({title:"请选择调入仓库",icon:"none"}),e(!1)):u.check_goods().then(function(o){1==o?e(!0):t.showModal({title:"提示",content:"'"+o+"'没有关联到调出仓库",showCancel:!0,success:function(e){console.log(e),e.confirm&&t.navigateBack({delta:1})},fail:function(){},complete:function(){e(!1)}})})})},check_goods:function(){return new Promise(function(t,e){for(var o=function(e){var o=n.default.Query("Goods");o.equalTo("goodsName","==",u.products[e].goodsName),o.equalTo("userId","==",s),o.equalTo("stocks","==",u.out_stock.objectId),o.find().then(function(o){console.log(o),0==o.length?t(u.products[e].goodsName):(u.out_products=u.out_products.concat(o),t(!0))})},r=0;r<u.products.length;r++)o(r)})},formSubmit:function(t){console.log(t),this.button_disabled=!0,u.check().then(function(e){console.log(e),e?u.add_tb_record(t):u.button_disabled=!1})},add_tb_record:function(e){t.showLoading({title:"上传中..."});for(var o=n.default.Pointer("stocks"),a=o.set(u.stock.objectId),d=o.set(u.out_stock.objectId),i=new Array,l=[],f=0;f<this.products.length;f++){var _=Number(this.products[f].reserve)-Number(this.products[f].num),h=Number(this.out_products[f].reserve)+Number(this.products[f].num),m=n.default.Query("Bills"),g={},p=n.default.Pointer("_User"),b=p.set(s),v=n.default.Pointer("_User"),y=v.set(t.getStorageSync("masterId")),k=n.default.Pointer("Goods"),S=k.set(this.products[f].objectId);m.set("goodsName",this.products[f].goodsName),m.set("retailPrice",this.products[f].modify_retailPrice.toString()),m.set("num",Number(this.products[f].num)),m.set("total_money",this.products[f].total_money),m.set("goodsId",S),m.set("userId",b),m.set("type",-2),m.set("opreater",y),m.set("stock",a),m.set("out_stock",d);var N={};g.goodsName=this.products[f].goodsName,g.stock=u.stock.stock_name,g.out_stock=u.out_stock.stock_name,g.reserve=this.products[f].reserve,g.out_reserve=this.out_products[f].reserve,N.objectId=this.products[f].objectId,N.out_objectId=this.out_products[f].objectId,N.reserve=_,N.out_reserve=h,g.goodsId=N,g.num=Number(this.products[f].num),g.type=-2,i.push(m),l.push(g)}n.default.Query("Bills").saveAll(i).then(function(o){for(var i=[],f=0;f<o.length;f++)i.push(o[f].success.objectId);var _=n.default.Pointer("_User"),h=_.set(s),m=t.getStorageSync("masterId"),g=n.default.Pointer("_User"),p=g.set(m),b=n.default.Query("order_opreations");b.set("detail",l),b.set("bills",i),b.set("beizhu",e.detail.value.input_beizhu),b.set("type",-2),b.set("opreater",p),b.set("stock",a),b.set("out_stock",d),b.set("master",h),b.set("goodsName",u.products[0].goodsName),b.save().then(function(e){var o=e.objectId;t.hideLoading(),t.showToast({title:"产品调拨成功",icon:"success",success:function(){for(var s=function(t){var e=Number(u.products[t].reserve)-Number(u.products[t].num),o=Number(u.out_products[t].reserve)+Number(u.products[t].num),s=n.default.Query("Goods");s.get(u.products[t].objectId).then(function(n){n.set("reserve",e),n.set("stocktype",e>u.products[t].warning_num?1:0),n.save(),s.get(u.out_products[t].objectId).then(function(e){e.set("reserve",o),e.set("stocktype",o>u.out_products[t].warning_num?1:0),e.save()})}).catch(function(t){console.log(t)})},a=0;a<u.products.length;a++)s(a);u.button_disabled=!1,t.setStorageSync("is_option",!0),setTimeout(function(){t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),r.default.log(t.getStorageSync("user").nickName+"调拨了'"+u.products[0].goodsName+"'等"+u.products.length+"商品",-2,e.objectId),t.getStorageSync("setting").auto_print&&c.default.autoPrint(o),t.navigateBack({delta:2})},500)}})})},function(t){console.log("异常处理")})}}};e.default=d}).call(this,o("543d")["default"])},"49c0":function(t,e,o){"use strict";o.r(e);var s=o("49b1"),u=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);e["default"]=u.a},"4ae5":function(t,e,o){"use strict";(function(t){o("bc8c"),o("921b");s(o("66fd"));var e=s(o("8ebf"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},"8aea":function(t,e,o){},"8ebf":function(t,e,o){"use strict";o.r(e);var s=o("0481"),u=o("49c0");for(var n in u)"default"!==n&&function(t){o.d(e,t,function(){return u[t]})}(n);o("3aa5");var r=o("2877"),c=Object(r["a"])(u["default"],s["a"],s["b"],!1,null,null,null);e["default"]=c.exports}},[["4ae5","common/runtime","common/vendor"]]]);