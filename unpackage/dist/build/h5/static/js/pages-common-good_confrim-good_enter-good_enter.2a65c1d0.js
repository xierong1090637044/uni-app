(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-good_confrim-good_enter-good_enter"],{"0569":function(e,t,o){"use strict";var n=o("62bc"),i=o.n(n);i.a},1598:function(e,t,o){"use strict";var n=o("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o("6b54"),o("87b3"),o("7f7f"),o("c5f6");var i,s,r,a,u=n(o("df06")),c={data:function(){return{shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,producer:null}},onLoad:function(){s=this,i=uni.getStorageSync("uid"),uni.removeStorageSync("producer"),this.products=uni.getStorageSync("products");for(var e=0;e<this.products.length;e++)this.all_money=Number((this.products[e].total_money+this.all_money).toFixed(2));this.real_money=Number(this.all_money.toFixed(2))},onShow:function(){if(s.producer=uni.getStorageSync("producer"),a=uni.getStorageSync("shop"),a){s.shop_name=a.name;var e=Bmob.Pointer("shops");r=e.set(a.objectId)}},methods:{formSubmit:function(e){console.log(e),this.button_disabled=!0,uni.showLoading({title:"上传中..."});for(var t=new Array,o=[],n=0;n<this.products.length;n++){var c=Number(this.products[n].reserve)+this.products[n].num,l={},d=Bmob.Query("Bills"),v=Bmob.Pointer("_User"),p=v.set(i),f=Bmob.Pointer("Goods"),m=f.set(this.products[n].objectId);d.set("goodsName",this.products[n].goodsName),d.set("retailPrice",this.products[n].modify_retailPrice.toString()),d.set("num",this.products[n].num),d.set("total_money",this.products[n].total_money),d.set("goodsId",m),d.set("userId",p),d.set("type",1);var g={};l.goodsName=this.products[n].goodsName,l.modify_retailPrice=this.products[n].modify_retailPrice.toString(),l.retailPrice=this.products[n].retailPrice,l.total_money=this.products[n].total_money,g.costPrice=this.products[n].costPrice,g.retailPrice=this.products[n].retailPrice,g.objectId=this.products[n].objectId,g.reserve=c,l.goodsId=g,l.num=this.products[n].num,l.type=1,a&&d.set("shop",r),t.push(d),o.push(l)}Bmob.Query("Bills").saveAll(t).then(function(t){console.log("批量新增单据成功",t);for(var n=[],r=0;r<t.length;r++)n.push(t[r].success.objectId);var a=Bmob.Pointer("_User"),c=a.set(i),l=uni.getStorageSync("masterId"),d=Bmob.Pointer("_User"),v=d.set(l),p=Bmob.Query("order_opreations");if(p.set("beizhu",e.detail.value.input_beizhu),p.set("detail",o),p.set("type",1),p.set("bills",n),p.set("opreater",v),p.set("master",c),p.set("goodsName",s.products[0].goodsName),p.set("real_money",Number(s.real_money)),p.set("debt",s.all_money-Number(s.real_money)),s.producer){var f=Bmob.Pointer("producers"),m=f.set(s.producer.objectId);if(p.set("producer",m),s.all_money-Number(s.real_money)>0){var g=Bmob.Query("producers");g.get(s.producer.objectId).then(function(e){var t=null==e.debt?0:e.debt;t+=s.all_money-Number(s.real_money),console.log(t);var o=Bmob.Query("producers");o.get(s.producer.objectId).then(function(e){e.set("debt",t),e.save()})})}}p.set("all_money",s.all_money),p.save().then(function(e){console.log("添加操作历史记录成功",e),uni.hideLoading(),uni.showToast({title:"产品入库成功",icon:"success",success:function(){for(var t=function(e){var t=Number(s.products[e].reserve)+s.products[e].num,o=Bmob.Query("Goods");o.get(s.products[e].objectId).then(function(o){o.set("reserve",t),o.set("stocktype",t>s.products[e].warning_num?1:0),o.save()}).catch(function(e){console.log(e)})},o=0;o<s.products.length;o++)t(o);s.button_disabled=!1,uni.setStorageSync("is_option",!0),setTimeout(function(){u.default.log(uni.getStorageSync("user").nickName+"入库了'"+s.products[0].goodsName+"'等"+s.products.length+"商品",1,e.objectId),uni.navigateBack({delta:2})},500)}})})},function(e){console.log("异常处理")})}}};t.default=c},4079:function(e,t,o){"use strict";o.r(t);var n=o("1598"),i=o.n(n);for(var s in n)"default"!==s&&function(e){o.d(t,e,function(){return n[e]})}(s);t["default"]=i.a},"62bc":function(e,t,o){var n=o("cb9a");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=o("4f06").default;i("c6927d60",n,!0,{sourceMap:!1,shadowMode:!1})},"91f8":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",[o("v-uni-view",{staticClass:"page"},[o("v-uni-view",{staticStyle:{"line-height":"70rpx",padding:"20rpx 20rpx 0"}},[e._v("已选产品")]),o("v-uni-view",{staticStyle:{"max-height":"25vh","overflow-x":"scroll"}},e._l(e.products,function(t,n){return o("v-uni-view",{key:n,staticClass:"pro_listitem"},[o("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#3D3D3D"}},[o("v-uni-view",[e._v("产品："+e._s(t.goodsName))]),o("v-uni-view",[e._v("期初进货价：￥"+e._s(t.costPrice))])],1),o("v-uni-view",{staticClass:"pro_list"},[o("v-uni-view",[e._v("实际进货价：￥"+e._s(t.modify_retailPrice)+"（X"+e._s(t.num)+"）")]),o("v-uni-view",[e._v("合计：￥"+e._s(t.total_money))])],1)],1)}),1),o("v-uni-view",{staticClass:"pro_allmoney"},[e._v("总计：￥"+e._s(e.all_money))]),o("v-uni-form",{on:{submit:function(t){t=e.$handleEvent(t),e.formSubmit(t)}}},[o("v-uni-view",{staticStyle:{margin:"30rpx 0"}},[o("v-uni-view",{staticStyle:{margin:"0 0 10rpx 10rpx"}},[e._v("开单明细（用于记录是否有无欠款）")]),o("v-uni-view",{staticClass:"kaidan_detail",staticStyle:{"line-height":"70rpx"}},[o("v-uni-navigator",{staticClass:"display_flex",attrs:{"hover-class":"none",url:"/pages/manage/shops/shops?type=choose"}},[o("v-uni-view",[e._v("选择门店")]),o("v-uni-view",{staticClass:"kaidan_rightinput"},[o("v-uni-input",{attrs:{placeholder:"选择门店",disabled:"true",value:e.shop_name}})],1)],1),o("v-uni-navigator",{staticClass:"display_flex",attrs:{"hover-class":"none",url:"/pages/manage/custom/custom?type=producer"}},[o("v-uni-view",[e._v("供应商姓名")]),o("v-uni-view",{staticClass:"kaidan_rightinput"},[o("v-uni-input",{attrs:{placeholder:"选择供货商",disabled:"true",value:e.producer.producer_name}})],1)],1),o("v-uni-view",{staticClass:"display_flex"},[o("v-uni-view",[e._v("实际应付")]),o("v-uni-view",{staticClass:"kaidan_rightinput"},[o("v-uni-input",{attrs:{placeholder:"选择供货商",disabled:"true",value:e.all_money}})],1)],1),o("v-uni-view",{staticClass:"display_flex"},[o("v-uni-view",[e._v("实际付款（可修改）")]),o("v-uni-view",{staticClass:"kaidan_rightinput"},[o("v-uni-input",{staticStyle:{color:"#d71345"},attrs:{placeholder:"输入实际付款金额",type:"digit"},model:{value:e.real_money,callback:function(t){e.real_money=t},expression:"real_money"}})],1)],1)],1)],1),o("v-uni-view",{staticStyle:{"margin-top":"20px"}},[o("v-uni-textarea",{staticClass:"beizhu_style",attrs:{placeholder:"请输入备注",name:"input_beizhu"}})],1),o("v-uni-view",{staticStyle:{padding:"0 30rpx","margin-top":"60rpx"}},[o("v-uni-button",{staticClass:"confrim_button",attrs:{disabled:e.button_disabled,"form-type":"submit"}},[e._v("确认入库")])],1)],1)],1)],1)},i=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return i})},b142:function(e,t,o){"use strict";o.r(t);var n=o("91f8"),i=o("4079");for(var s in i)"default"!==s&&function(e){o.d(t,e,function(){return i[e]})}(s);o("0569");var r=o("2877"),a=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"23d83347",null);t["default"]=a.exports},cb9a:function(e,t,o){t=e.exports=o("2350")(!1),t.push([e.i,".page[data-v-23d83347]{color:#4d4d4d;font-size:%?28?%;height:100vh;overflow:scroll}.pro_list[data-v-23d83347]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.pro_listitem[data-v-23d83347]{background-color:#fff;padding:%?10?% %?20?%;border-bottom:%?1?% solid#ddd}.pro_allmoney[data-v-23d83347]{background-color:#fff;padding:%?10?% %?20?%;text-align:right;font-size:%?32?%;color:#f30}.beizhu_style[data-v-23d83347]{width:calc(100% - %?40?%);background-color:#fff;padding:%?20?%;font-size:%?32?%;max-height:%?100?%}.confrim_button[data-v-23d83347]{background:#aa2116;color:#fff;font-weight:700;font-size:%?32?%}",""])},df06:function(e,t,o){"use strict";var n=o("288e");o("6b54"),o("87b3"),o("c5f6");var i=n(o("5d73"));o("7514"),e.exports={handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("now_product"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(e,t,o){var n=Bmob.Pointer("_User"),i=n.set(uni.getStorageSync("uid")),s=Bmob.Query("logs");s.set("parent",i),s.set("log",e),s.set("detail_id",o),s.set("type",t),s.save().then(function(e){console.log(e)}).catch(function(e){console.log(e)})},record_shopOut:function(e,t){console.log(e,t);var o=Bmob.Query("shops");o.set("id",e),o.set("have_out",t),o.save().then(function(e){console.log(e)}).catch(function(e){console.log(e)})},record_staffOut:function(e){if(console.log(e,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var t=Bmob.Query("staffs");t.set("id",uni.getStorageSync("user").objectId),t.set("have_out",e+uni.getStorageSync("user").have_out),t.save().then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},get_allCost:function(){var e=uni.getStorageSync("uid");console.log(e);var t=Bmob.Query("Goods");t.equalTo("userId","==",e),t.find().then(function(e){console.log(e);var t=!0,o=!1,n=void 0;try{for(var s,r=(0,i.default)(e);!(t=(s=r.next()).done);t=!0){var a=s.value;console.log(a),Number(a.costPrice)*a.reserve,a.reserve}}catch(u){o=!0,n=u}finally{try{t||null==r.return||r.return()}finally{if(o)throw n}}})},getDay:function(e,t){var o=this,n=new Date,i=n.getTime()+864e5*e;n.setTime(i);var s=n.getFullYear(),r=n.getMonth(),a=n.getDate();return r=o.handleMonth(r+1),a=o.handleMonth(a),t?s+"-"+r+"-"+a+" 00:00:00":s+"-"+r+"-"+a},handleMonth:function(e){var t=e;return 1==e.toString().length&&(t="0"+e),t}}}}]);