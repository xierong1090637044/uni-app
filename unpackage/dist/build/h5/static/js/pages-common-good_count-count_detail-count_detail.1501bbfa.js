(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-good_count-count_detail-count_detail"],{"3be2":function(t,e,o){var s=o("a1ac");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=o("4f06").default;i("2dcde7e4",s,!0,{sourceMap:!1,shadowMode:!1})},"3f41":function(t,e,o){"use strict";var s=o("3be2"),i=o.n(s);i.a},"6e53":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("v-uni-view",{staticClass:"page"},[o("v-uni-view",{staticStyle:{"line-height":"70rpx",padding:"20rpx 20rpx 0",color:"#3D3D3D","font-weight":"bold"}},[t._v("已选产品")]),o("v-uni-view",t._l(t.products,function(e,s){return o("v-uni-view",{key:s,staticClass:"pro_listitem"},[o("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#333"}},[o("v-uni-view",[t._v("产品："+t._s(e.goodsName))]),e.stocks?o("v-uni-view",[t._v("盘点仓库："+t._s(e.stocks.stock_name))]):t._e()],1),e.selected_model?o("v-uni-view",t._l(e.selected_model,function(e,s){return o("v-uni-view",{key:s,staticClass:"display_flex_bet"},[e?o("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#999"}},[t._v(t._s(e.custom1.value+e.custom2.value+e.custom3.value+e.custom4.value))]):t._e(),e?o("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#f30"}},[t._v("盘点后库存："+t._s(e.reserve))]):t._e()],1)}),1):o("v-uni-view",{staticClass:"pro_list"},[o("v-uni-view",[t._v("盘点前库存："+t._s(e.reserve))]),o("v-uni-view",[t._v("盘点后库存："+t._s(e.num))])],1)],1)}),1),o("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[o("v-uni-view",{staticStyle:{margin:"30rpx 0"}},[o("v-uni-view",{staticStyle:{margin:"0 0 10rpx 20rpx",color:"#3D3D3D","font-weight":"bold"}},[t._v("盘点明细")]),o("v-uni-view",{staticClass:"kaidan_detail",staticStyle:{"line-height":"70rpx"}},[o("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{padding:"10rpx 0","border-bottom":"1rpx solid#F7F7F7"}},[o("v-uni-view",{staticStyle:{width:"140rpx"}},[t._v("盘点时间")]),o("v-uni-picker",{attrs:{mode:"date",value:t.nowDay,end:t.nowDay},on:{change:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.bindDateChange2.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[o("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[o("v-uni-view",{staticStyle:{"margin-right":"20rpx"}},[t._v(t._s(t.nowDay.split(" ")[0]))]),o("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1)],1),o("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{padding:"10rpx 0"}},[o("v-uni-view",{staticStyle:{width:"140rpx"}},[t._v("备注")]),o("v-uni-input",{staticClass:"beizhu_style",attrs:{placeholder:"请输入备注",name:"input_beizhu"}})],1)],1)],1),o("v-uni-view",{staticClass:"bottomEle display_flex_bet",staticStyle:{padding:"0 30rpx","margin-top":"60rpx"}},[o("v-uni-view",[t._v("总数："+t._s(t.total_num))]),o("v-uni-view",{staticClass:"display_flex"},[o("v-uni-button",{staticClass:"confrim_button",attrs:{disabled:t.button_disabled,"form-type":"submit"}},[t._v("盘点")])],1)],1)],1)],1)],1)},i=[];o.d(e,"a",function(){return s}),o.d(e,"b",function(){return i})},a1ac:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".page[data-v-092f1dae]{color:#4d4d4d;font-size:%?28?%;height:calc(100vh - %?110?%);overflow:scroll}.bottomEle[data-v-092f1dae]{position:fixed;bottom:0;left:0;width:calc(100% - %?30?%);background:#fafafa;padding:%?20?% %?0?% %?20?% %?30?%;font-weight:700}.pro_list[data-v-092f1dae]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.pro_listitem[data-v-092f1dae]{background-color:#fff;padding:%?10?% %?20?%;border-bottom:%?1?% solid#ddd}.pro_allmoney[data-v-092f1dae]{background-color:#fff;padding:%?10?% %?20?%;text-align:right;font-size:%?32?%;color:#f30}.beizhu_style[data-v-092f1dae]{text-align:right;width:calc(100% - %?40?%);background-color:#fff;padding:%?10?% 0;max-height:%?100?%}.confrim_button[data-v-092f1dae]{background:#aa2116;color:#fff;border-radius:unset;font-weight:700;font-size:%?32?%}",""])},dce6:function(t,e,o){"use strict";o.r(e);var s=o("e97e"),i=o.n(s);for(var a in s)"default"!==a&&function(t){o.d(e,t,function(){return s[t]})}(a);e["default"]=i.a},e97e:function(t,e,o){"use strict";(function(t){var s=o("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("7514");var i=s(o("5d73"));o("6b54"),o("c5f6");var a,n,r=s(o("9546")),u=s(o("7fd5")),d=s(o("856d")),c={data:function(){return{products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,total_num:0,producer:null,nowDay:u.default.getDay(0,!0,!0)}},onLoad:function(){n=this,a=uni.getStorageSync("uid"),this.products=uni.getStorageSync("products");for(var t=0;t<this.products.length;t++)this.total_num+=Number(this.products[t].num)},methods:{bindDateChange:function(t){n.nowDay=t.detail.value+" 00:00:00"},formSubmit:function(e){t.log(e),this.button_disabled=!0,uni.showLoading({title:"上传中..."});for(var o=new Array,s=[],c=[],l=0;l<this.products.length;l++){var v=r.default.Query("Bills"),f={},p=r.default.Pointer("_User"),_=p.set(a),h=r.default.Pointer("Goods"),m=h.set(this.products[l].header?this.products[l].header.objectId:this.products[l].objectId),g=uni.getStorageSync("masterId"),y=r.default.Pointer("_User"),b=y.set(g);if(v.set("goodsName",this.products[l].goodsName),v.set("retailPrice",this.products[l].modify_retailPrice.toString()),v.set("num",Number(this.products[l].num)),v.set("reserve",Number(this.products[l].reserve)),v.set("now_reserve",this.products[l].num.toString()),v.set("total_money",this.products[l].total_money),v.set("opreater",b),v.set("goodsId",m),v.set("userId",_),v.set("type",3),v.set("createdTime",{__type:"Date",iso:n.nowDay}),n.products[l].stocks&&n.products[l].stocks.objectId){var w=r.default.Pointer("stocks"),S=w.set(n.products[l].stocks.objectId);v.set("stock",S),c.push(this.products[l].stocks.objectId),f.stock=n.products[l].stocks.stock_name}var k={};this.products[l].selectd_model&&(k.selected_model=this.products[l].selected_model,k.models=this.products[l].models,f.goodsId=k),f.goodsName=this.products[l].goodsName,f.reserve=this.products[l].reserve,f.now_reserve=this.products[l].num.toString(),f.packingUnit=this.products[l].packingUnit,o.push(v),s.push(f)}r.default.Query("Bills").saveAll(o).then(function(o){var l=r.default.Pointer("_User"),v=l.set(a),f=uni.getStorageSync("masterId"),p=r.default.Pointer("_User"),_=p.set(f),h=r.default.Query("order_opreations");h.set("beizhu",e.detail.value.input_beizhu),h.set("detail",s),h.set("type",3),h.set("opreater",_),h.set("master",v),h.set("goodsName",n.products[0].goodsName),h.set("stockIds",c),h.set("createdTime",{__type:"Date",iso:n.nowDay}),h.save().then(function(e){var o=e.objectId;uni.hideLoading(),uni.showToast({title:"产品盘点成功",icon:"success",success:function(){for(var s=function(e){var o=0,s=r.default.Query("Goods");s.get(n.products[e].objectId).then(function(t){if(n.products[e].selectd_model){var s=!0,a=!1,d=void 0;try{for(var c,l=(0,i.default)(n.products[e].selected_model);!(s=(c=l.next()).done);s=!0){var v=c.value;delete v.num}}catch(p){a=!0,d=p}finally{try{s||null==l.return||l.return()}finally{if(a)throw d}}t.set("models",n.products[e].selected_model),o=Number(n.products[e].num)}else o=Number(n.products[e].num);if(t.set("reserve",o),t.save(),n.products[e].header){var f=r.default.Query("Goods");f.equalTo("header","==",n.products[e].header.objectId),f.equalTo("order","==",1),f.statTo("sum","reserve"),f.find().then(function(t){var o=t[0]._sumReserve,s=r.default.Query("Goods");s.get(n.products[e].header.objectId).then(function(t){t.set("reserve",o),t.save(),u.default.modifyStockType(n.products[e].header.objectId)})})}else u.default.modifyStockType(n.products[e].objectId)}).catch(function(e){t.log(e)})},a=0;a<n.products.length;a++)s(a);n.button_disabled=!1,uni.setStorageSync("is_option",!0),setTimeout(function(){uni.removeStorageSync("_warehouse"),uni.removeStorageSync("out_warehouse"),uni.removeStorageSync("category"),uni.removeStorageSync("warehouse"),u.default.log(uni.getStorageSync("user").nickName+"盘点了'"+n.products[0].goodsName+"'等"+n.products.length+"商品",3,e.objectId),uni.getStorageSync("setting").auto_print&&d.default.autoPrint(o),uni.navigateBack({delta:2})},500)}})})},function(e){t.log("异常处理")})}}};e.default=c}).call(this,o("5a52")["default"])},fc7e:function(t,e,o){"use strict";o.r(e);var s=o("6e53"),i=o("dce6");for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);o("3f41");var n=o("f0c5"),r=Object(n["a"])(i["default"],s["a"],s["b"],!1,null,"092f1dae",null);e["default"]=r.exports}}]);