(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/good_allocation/allocation_detail/allocation_detail"],{"169e":function(t,e,o){},"444e":function(t,e,o){"use strict";var s=o("169e"),u=o.n(s);u.a},"60c3":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,u,n=c(o("c74b")),r=c(o("df06"));c(o("da3f"));function c(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{products:[],stock:"",out_stock:"",button_disabled:!1,beizhu_text:"",out_products:[],all_money:0,real_money:0}},onLoad:function(){u=this,s=t.getStorageSync("uid"),this.products=t.getStorageSync("products");for(var e=0;e<this.products.length;e++)this.all_money=Number((this.products[e].total_money+this.all_money).toFixed(2));this.real_money=Number(this.all_money.toFixed(2))},onShow:function(){u.stock=t.getStorageSync("warehouse")[0].stock,u.out_stock=t.getStorageSync("out_warehouse")?t.getStorageSync("out_warehouse")[0].stock:""},methods:{check:function(){return new Promise(function(e,o){""==u.out_stock||null==u.out_stock?(t.showToast({title:"请选择调入仓库",icon:"none"}),e(!1)):u.check_goods().then(function(o){1==o?e(!0):t.showModal({title:"提示",content:"'"+o+"'没有关联到调出仓库",showCancel:!0,success:function(e){console.log(e),e.confirm&&t.navigateBack({delta:1})},fail:function(){},complete:function(){e(!1)}})})})},check_goods:function(){return new Promise(function(t,e){for(var o=function(e){var o=n.default.Query("Goods");o.equalTo("goodsName","==",u.products[e].goodsName),o.equalTo("userId","==",s),o.equalTo("stocks","==",u.out_stock.objectId),o.find().then(function(o){console.log(o),0==o.length?t(u.products[e].goodsName):(u.out_products=u.out_products.concat(o),t(!0))})},r=0;r<u.products.length;r++)o(r)})},formSubmit:function(t){console.log(t),this.button_disabled=!0,u.check().then(function(e){console.log(e),e?u.add_tb_record(t):u.button_disabled=!1})},add_tb_record:function(e){t.showLoading({title:"上传中..."});for(var o=n.default.Pointer("stocks"),c=o.set(u.stock.objectId),a=o.set(u.out_stock.objectId),d=new Array,i=[],l=0;l<this.products.length;l++){var f=Number(this.products[l].reserve)-Number(this.products[l].num),_=Number(this.out_products[l].reserve)+Number(this.products[l].num),h=n.default.Query("Bills"),m={},g=n.default.Pointer("_User"),p=g.set(s),b=n.default.Pointer("_User"),v=b.set(t.getStorageSync("masterId")),y=n.default.Pointer("Goods"),k=y.set(this.products[l].objectId);h.set("goodsName",this.products[l].goodsName),h.set("retailPrice",this.products[l].modify_retailPrice.toString()),h.set("num",Number(this.products[l].num)),h.set("total_money",this.products[l].total_money),h.set("goodsId",k),h.set("userId",p),h.set("type",-2),h.set("opreater",v),h.set("stock",c),h.set("out_stock",a);var S={};m.goodsName=this.products[l].goodsName,m.stock=u.stock.stock_name,m.out_stock=u.out_stock.stock_name,m.reserve=this.products[l].reserve,m.out_reserve=this.out_products[l].reserve,S.objectId=this.products[l].objectId,S.out_objectId=this.out_products[l].objectId,S.reserve=f,S.out_reserve=_,m.goodsId=S,m.num=Number(this.products[l].num),m.type=-2,d.push(h),i.push(m)}n.default.Query("Bills").saveAll(d).then(function(o){for(var d=[],l=0;l<o.length;l++)d.push(o[l].success.objectId);var f=n.default.Pointer("_User"),_=f.set(s),h=t.getStorageSync("masterId"),m=n.default.Pointer("_User"),g=m.set(h),p=n.default.Query("order_opreations");p.set("detail",i),p.set("bills",d),p.set("beizhu",e.detail.value.input_beizhu),p.set("type",-2),p.set("opreater",g),p.set("stock",c),p.set("out_stock",a),p.set("master",_),p.set("goodsName",u.products[0].goodsName),p.save().then(function(e){console.log("添加操作历史记录成功",e),t.hideLoading(),t.showToast({title:"产品调拨成功",icon:"success",success:function(){for(var o=function(t){var e=Number(u.products[t].reserve)-Number(u.products[t].num),o=Number(u.out_products[t].reserve)+Number(u.products[t].num),s=n.default.Query("Goods");s.get(u.products[t].objectId).then(function(n){n.set("reserve",e),n.set("stocktype",e>u.products[t].warning_num?1:0),n.save(),s.get(u.out_products[t].objectId).then(function(e){e.set("reserve",o),e.set("stocktype",o>u.out_products[t].warning_num?1:0),e.save()})}).catch(function(t){console.log(t)})},s=0;s<u.products.length;s++)o(s);u.button_disabled=!1,t.setStorageSync("is_option",!0),setTimeout(function(){t.removeStorageSync("_warehouse"),t.removeStorageSync("out_warehouse"),t.removeStorageSync("category"),t.removeStorageSync("warehouse"),r.default.log(t.getStorageSync("user").nickName+"调拨了'"+u.products[0].goodsName+"'等"+u.products.length+"商品",-2,e.objectId),t.navigateBack({delta:2})},500)}})})},function(t){console.log("异常处理")})}}};e.default=a}).call(this,o("543d")["default"])},"7b3c":function(t,e,o){"use strict";(function(t){o("a961"),o("921b");s(o("66fd"));var e=s(o("aedb"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},a833:function(t,e,o){"use strict";o.r(e);var s=o("60c3"),u=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);e["default"]=u.a},aedb:function(t,e,o){"use strict";o.r(e);var s=o("b097"),u=o("a833");for(var n in u)"default"!==n&&function(t){o.d(e,t,function(){return u[t]})}(n);o("444e");var r=o("2877"),c=Object(r["a"])(u["default"],s["a"],s["b"],!1,null,null,null);e["default"]=c.exports},b097:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},u=[];o.d(e,"a",function(){return s}),o.d(e,"b",function(){return u})}},[["7b3c","common/runtime","common/vendor"]]]);