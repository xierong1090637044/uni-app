(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-good_count-count_detail-count_detail"],{2154:function(t,e,o){var n=o("841e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=o("4f06").default;s("5819aa1a",n,!0,{sourceMap:!1,shadowMode:!1})},"2d61":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("v-uni-view",{staticClass:"page"},[o("v-uni-view",{staticStyle:{"line-height":"70rpx",padding:"20rpx 20rpx 0"}},[t._v("已选产品")]),o("v-uni-view",{staticStyle:{"max-height":"25vh","overflow-x":"scroll"}},t._l(t.products,function(e,n){return o("v-uni-view",{key:n,staticClass:"pro_listitem"},[o("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#3D3D3D"}},[o("v-uni-view",[t._v("产品："+t._s(e.goodsName))])],1),o("v-uni-view",{staticClass:"pro_list"},[o("v-uni-view",[t._v("盘点前库存："+t._s(e.reserve))]),o("v-uni-view",[t._v("盘点后库存："+t._s(e.num))])],1)],1)}),1),o("v-uni-form",{on:{submit:function(e){e=t.$handleEvent(e),t.formSubmit(e)}}},[o("v-uni-view",{staticStyle:{"margin-top":"20px"}},[o("v-uni-textarea",{staticClass:"beizhu_style",attrs:{placeholder:"请输入备注",name:"input_beizhu"}})],1),o("v-uni-view",{staticStyle:{padding:"0 30rpx","margin-top":"60rpx"}},[o("v-uni-button",{staticClass:"confrim_button",attrs:{disabled:t.button_disabled,"form-type":"submit"}},[t._v("确认盘点")])],1)],1)],1)],1)},s=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return s})},"3bfc":function(t,e,o){"use strict";var n=o("2154"),s=o.n(n);s.a},"50fa":function(t,e,o){"use strict";var n=o("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("c5f6"),o("6b54"),o("87b3");var s,r,i=n(o("df06")),a={data:function(){return{products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,producer:null}},onLoad:function(){r=this,s=uni.getStorageSync("uid"),this.products=uni.getStorageSync("products")},methods:{formSubmit:function(t){console.log(t),this.button_disabled=!0,uni.showLoading({title:"上传中..."});for(var e=new Array,o=[],n=0;n<this.products.length;n++){var a=Bmob.Query("Bills"),u={},c=Bmob.Pointer("_User"),l=c.set(s),d=Bmob.Pointer("Goods"),f=d.set(this.products[n].objectId);a.set("goodsName",this.products[n].goodsName),a.set("retailPrice",this.products[n].modify_retailPrice.toString()),a.set("num",Number(this.products[n].num)),a.set("reserve",this.products[n].reserve),a.set("now_reserve",this.products[n].num.toString()),a.set("total_money",this.products[n].total_money),a.set("goodsId",f),a.set("userId",l),a.set("type",3);u.goodsName=this.products[n].goodsName,u.reserve=this.products[n].reserve,u.now_reserve=this.products[n].num.toString(),e.push(a),o.push(u)}Bmob.Query("Bills").saveAll(e).then(function(e){var n=Bmob.Pointer("_User"),a=n.set(s),u=uni.getStorageSync("masterId"),c=Bmob.Pointer("_User"),l=c.set(u),d=Bmob.Query("order_opreations");d.set("beizhu",t.detail.value.input_beizhu),d.set("detail",o),d.set("type",3),d.set("opreater",l),d.set("master",a),d.set("goodsName",r.products[0].goodsName),d.save().then(function(t){console.log("添加操作历史记录成功",t),uni.hideLoading(),uni.showToast({title:"产品盘点成功",icon:"success",success:function(){for(var e=function(t){var e=Bmob.Query("Goods");e.get(r.products[t].objectId).then(function(e){e.set("reserve",Number(r.products[t].num)),e.set("stocktype",Number(r.products[t].num)>r.products[t].warning_num?1:0),e.save()}).catch(function(t){console.log(t)})},o=0;o<r.products.length;o++)e(o);r.button_disabled=!1,uni.setStorageSync("is_option",!0),setTimeout(function(){i.default.log(uni.getStorageSync("user").nickName+"盘点了'"+r.products[0].goodsName+"'等"+r.products.length+"商品",3,t.objectId),uni.navigateBack({delta:2})},500)}})})},function(t){console.log("异常处理")})}}};e.default=a},"841e":function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".page[data-v-3b85871c]{color:#4d4d4d;font-size:%?28?%;height:100vh;overflow:scroll}.pro_list[data-v-3b85871c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.pro_listitem[data-v-3b85871c]{background-color:#fff;padding:%?10?% %?20?%;border-bottom:%?1?% solid#ddd}.pro_allmoney[data-v-3b85871c]{background-color:#fff;padding:%?10?% %?20?%;text-align:right;font-size:%?32?%;color:#f30}.beizhu_style[data-v-3b85871c]{width:calc(100% - %?40?%);background-color:#fff;padding:%?20?%;font-size:%?32?%;max-height:%?100?%}.confrim_button[data-v-3b85871c]{background:#aa2116;color:#fff;font-weight:700;font-size:%?32?%}",""])},"9a54":function(t,e,o){"use strict";o.r(e);var n=o("50fa"),s=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e["default"]=s.a},"9fb9":function(t,e,o){"use strict";o.r(e);var n=o("2d61"),s=o("9a54");for(var r in s)"default"!==r&&function(t){o.d(e,t,function(){return s[t]})}(r);o("3bfc");var i=o("2877"),a=Object(i["a"])(s["default"],n["a"],n["b"],!1,null,"3b85871c",null);e["default"]=a.exports},df06:function(t,e,o){"use strict";var n=o("288e");o("6b54"),o("87b3"),o("c5f6");var s=n(o("5d73"));o("7514"),t.exports={handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("now_product"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(t,e,o){var n=Bmob.Pointer("_User"),s=n.set(uni.getStorageSync("uid")),r=Bmob.Query("logs");r.set("parent",s),r.set("log",t),r.set("detail_id",o),r.set("type",e),r.save().then(function(t){console.log(t)}).catch(function(t){console.log(t)})},record_shopOut:function(t,e){console.log(t,e);var o=Bmob.Query("shops");o.set("id",t),o.set("have_out",e),o.save().then(function(t){console.log(t)}).catch(function(t){console.log(t)})},record_staffOut:function(t){if(console.log(t,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var e=Bmob.Query("staffs");e.set("id",uni.getStorageSync("user").objectId),e.set("have_out",t+uni.getStorageSync("user").have_out),e.save().then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},get_allCost:function(){var t=uni.getStorageSync("uid");console.log(t);var e=Bmob.Query("Goods");e.equalTo("userId","==",t),e.find().then(function(t){console.log(t);var e=!0,o=!1,n=void 0;try{for(var r,i=(0,s.default)(t);!(e=(r=i.next()).done);e=!0){var a=r.value;console.log(a),Number(a.costPrice)*a.reserve,a.reserve}}catch(u){o=!0,n=u}finally{try{e||null==i.return||i.return()}finally{if(o)throw n}}})},getDay:function(t,e){var o=this,n=new Date,s=n.getTime()+864e5*t;n.setTime(s);var r=n.getFullYear(),i=n.getMonth(),a=n.getDate();return i=o.handleMonth(i+1),a=o.handleMonth(a),e?r+"-"+i+"-"+a+" 00:00:00":r+"-"+i+"-"+a},handleMonth:function(t){var e=t;return 1==t.toString().length&&(e="0"+t),e}}}}]);