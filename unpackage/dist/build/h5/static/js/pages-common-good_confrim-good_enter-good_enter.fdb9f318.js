(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-good_confrim-good_enter-good_enter"],{"2bef":function(e,t,o){"use strict";var n=o("288e");o("6b54"),o("87b3"),o("c5f6");var s=n(o("5d73"));o("7514"),e.exports={handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(e,t,o){var n=Bmob.Pointer("_User"),s=n.set(uni.getStorageSync("uid")),r=Bmob.Query("logs");r.set("parent",s),r.set("log",e),r.set("detail_id",o),r.set("type",t),r.save().then(function(e){console.log(e)}).catch(function(e){console.log(e)})},record_shopOut:function(e,t){console.log(e,t);var o=Bmob.Query("shops");o.set("id",e),o.set("have_out",t),o.save().then(function(e){console.log(e)}).catch(function(e){console.log(e)})},record_staffOut:function(e){if(console.log(e,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var t=Bmob.Query("staffs");t.set("id",uni.getStorageSync("user").objectId),t.set("have_out",e+uni.getStorageSync("user").have_out),t.save().then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},get_allCost:function(){var e=uni.getStorageSync("uid");console.log(e);var t=Bmob.Query("Goods");t.equalTo("userId","==",e),t.find().then(function(e){console.log(e);var t=!0,o=!1,n=void 0;try{for(var r,a=(0,s.default)(e);!(t=(r=a.next()).done);t=!0){var i=r.value;console.log(i),Number(i.costPrice)*i.reserve,i.reserve}}catch(u){o=!0,n=u}finally{try{t||null==a.return||a.return()}finally{if(o)throw n}}})},getDay:function(e,t){var o=this,n=new Date,s=n.getTime()+864e5*e;n.setTime(s);var r=n.getFullYear(),a=n.getMonth(),i=n.getDate();return a=o.handleMonth(a+1),i=o.handleMonth(i),t?r+"-"+a+"-"+i+" 00:00:00":r+"-"+a+"-"+i},handleMonth:function(e){var t=e;return 1==e.toString().length&&(t="0"+e),t}}},"396a":function(e,t,o){"use strict";var n=o("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(o("f499"));o("c5f6"),o("7514");var r=n(o("5d73")),a=n(o("795b")),i={delete_goods:function(e){return new a.default(function(t,o){var n=0,s=!0,a=!1,i=void 0;try{for(var u,c=(0,r.default)(e);!(s=(u=c.next()).done);s=!0){var l=u.value,d=Bmob.Query("Goods");d.destroy(l.objectId).then(function(o){n+=1,n==e.length&&t(!0)}).catch(function(e){console.log(e)})}}catch(g){a=!0,i=g}finally{try{s||null==c.return||c.return()}finally{if(a)throw i}}})},upload_good_withNoCan:function(e,t){return new a.default(function(o,n){var s=uni.getStorageSync("uid"),r=Bmob.Pointer("_User"),a=r.set(s),i=e.reserve,u=Bmob.Pointer("stocks"),c=u.set(t.objectId),l=Bmob.Query("Goods");l.equalTo("userId","==",s),l.equalTo("goodsName","==",e.goodsName),l.equalTo("stocks","==",t.objectId),l.find().then(function(t){if(console.log(t),t.length>=1)o([!1,"该商品存在此仓库中"]);else{var n=Bmob.Query("Goods");if(n.set("goodsName",e.goodsName),n.set("goodsIcon",e.goodsIcon),n.set("costPrice",e.costPrice),n.set("retailPrice",e.retailPrice),n.set("reserve",Number(e.reserve)),n.set("productCode",e.productCode?e.productCode:""),n.set("stocks",c),n.set("product_info",e.product_info?e.product_info:""),n.set("producer",e.producer?e.producer:""),n.set("packingUnit",e.packingUnit?e.packingUnit:""),n.set("packageContent",e.packageContent?e.packageContent:""),n.set("warning_num",Number(e.warning_num?e.warning_num:0)),n.set("stocktype",Number(e.warning_num?e.warning_num:0)>=Number(i)?0:1),e.second_class){var s=Bmob.Pointer("class_user"),r=s.set(e.goodsClass);n.set("second_class",l);var u=Bmob.Pointer("second_class"),l=u.set(e.second_class);n.set("goodsClass",r)}n.set("userId",a),n.save().then(function(e){console.log(e),o([!0,e])}).catch(function(e){console.log(e)})}})})},upload_good:function(e){return new a.default(function(t,o){var n=JSON.parse(localStorage.getItem("bmob")).objectId,s=Bmob.Pointer("_User"),r=s.set(n),a=Bmob.Pointer("class_user"),i=a.set(e.goodsClass),u=Bmob.Pointer("second_class"),c=u.set(e.second_class),l=Bmob.Query("Goods");l.equalTo("userId","==",n),l.equalTo("goodsName","==",e.goodsName),l.equalTo("position","==",e.position),l.equalTo("stocks","==",e.stocks),l.find().then(function(o){if(console.log(o),o.length>=1)t([!1,o]);else{var n=e.reserve,s=Bmob.Pointer("stocks"),a=s.set(e.stocks),u=Bmob.Query("Goods");u.set("goodsName",e.goodsName),u.set("goodsIcon",e.goodsIcon),u.set("costPrice",e.costPrice),u.set("retailPrice",e.retailPrice),u.set("producttime",e.producttime),u.set("nousetime",e.nousetime),u.set("regNumber",e.regNumber),u.set("reserve",Number(e.reserve)),u.set("productCode",e.productCode),u.set("stocks",a),u.set("product_info",e.product_info),u.set("producer",e.producer),u.set("packingUnit",e.packingUnit),u.set("packageContent",e.packageContent),u.set("warning_num",Number(e.warning_num)),u.set("stocktype",Number(e.warning_num)>=Number(n)?0:1),u.set("second_class",c),u.set("goodsClass",i),u.set("userId",r),u.save().then(function(e){console.log(e),t([!0,e])}).catch(function(e){console.log(e)})}})})},get_fristclass:function(){var e=JSON.parse(localStorage.getItem("bmob")).objectId;return new a.default(function(t,o){var n=Bmob.Query("class_user");n.equalTo("parent","==",e),n.find().then(function(e){localStorage.setItem("frist_class",(0,s.default)(e)),t(e)})})},get_secondclass:function(e){return new a.default(function(t,o){var n=Bmob.Query("class_user");n.field("second",e),n.relation("second_class").then(function(e){t(e.results)})})},getstock_list:function(e){var t=JSON.parse(localStorage.getItem("bmob")).objectId;return new a.default(function(o,n){var r=Bmob.Query("stocks");r.order("-num"),r.include("charge","shop"),r.equalTo("parent","==",t),e&&r.equalTo("stock_name","==",{$regex:e+".*"}),r.find().then(function(e){localStorage.setItem("stocks",(0,s.default)(e)),o(e)})})}};t.default=i},"3b7e":function(e,t,o){t=e.exports=o("2350")(!1),t.push([e.i,".page[data-v-185e2b66]{color:#4d4d4d;font-size:%?28?%;height:100vh;overflow:scroll}.pro_list[data-v-185e2b66]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.pro_listitem[data-v-185e2b66]{background-color:#fff;padding:%?10?% %?20?%;border-bottom:%?1?% solid#ddd}.pro_allmoney[data-v-185e2b66]{background-color:#fff;padding:%?10?% %?20?%;text-align:right;font-size:%?32?%;color:#f30}.beizhu_style[data-v-185e2b66]{width:calc(100% - %?40?%);background-color:#fff;padding:%?20?%;font-size:%?32?%;max-height:%?100?%}.confrim_button[data-v-185e2b66]{background:#aa2116;color:#fff;font-weight:700;font-size:%?32?%}",""])},"5c81":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",[o("v-uni-view",{staticClass:"page"},[o("v-uni-view",{staticStyle:{"line-height":"70rpx",padding:"20rpx 20rpx 0"}},[e._v("已选产品")]),o("v-uni-view",{staticStyle:{"max-height":"25vh","overflow-x":"scroll"}},e._l(e.products,function(t,n){return o("v-uni-view",{key:n,staticClass:"pro_listitem"},[o("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#3D3D3D"}},[o("v-uni-view",[e._v("产品："+e._s(t.goodsName))]),o("v-uni-view",[e._v("期初进货价：￥"+e._s(t.costPrice))])],1),o("v-uni-view",{staticClass:"pro_list"},[o("v-uni-view",[e._v("实际进货价：￥"+e._s(t.modify_retailPrice)+"（X"+e._s(t.num)+"）")]),o("v-uni-view",[e._v("合计：￥"+e._s(t.total_money))])],1)],1)}),1),o("v-uni-view",{staticClass:"pro_allmoney"},[e._v("总计：￥"+e._s(e.all_money))]),o("v-uni-form",{on:{submit:function(t){t=e.$handleEvent(t),e.formSubmit(t)}}},[o("v-uni-view",{staticStyle:{margin:"30rpx 0"}},[o("v-uni-view",{staticStyle:{margin:"0 0 10rpx 10rpx"}},[e._v("开单明细（用于记录是否有无欠款）")]),o("v-uni-view",{staticClass:"kaidan_detail",staticStyle:{"line-height":"70rpx"}},[o("v-uni-navigator",{staticClass:"display_flex",attrs:{"hover-class":"none",url:"/pages/manage/warehouse/warehouse?type=choose"}},[o("v-uni-view",[e._v("选择仓库")]),o("v-uni-view",{staticClass:"kaidan_rightinput"},[o("v-uni-input",{attrs:{placeholder:"选择仓库",disabled:"true",value:e.stock.stock_name}})],1)],1),o("v-uni-navigator",{staticClass:"display_flex",staticStyle:{padding:"10rpx 0"},attrs:{"hover-class":"none",url:"/pages/manage/shops/shops?type=choose"}},[o("v-uni-view",[e._v("选择门店")]),o("v-uni-view",{staticClass:"kaidan_rightinput"},[o("v-uni-input",{attrs:{placeholder:"选择门店",disabled:"true",value:e.shop_name}})],1)],1),o("v-uni-navigator",{staticClass:"display_flex",staticStyle:{padding:"10rpx 0"},attrs:{"hover-class":"none",url:"/pages/manage/custom/custom?type=producer"}},[o("v-uni-view",[e._v("供应商姓名")]),o("v-uni-view",{staticClass:"kaidan_rightinput"},[o("v-uni-input",{attrs:{placeholder:"选择供货商",disabled:"true",value:e.producer.producer_name}})],1)],1),o("v-uni-view",{staticClass:"display_flex",staticStyle:{padding:"10rpx 0"}},[o("v-uni-view",[e._v("实际应付")]),o("v-uni-view",{staticClass:"kaidan_rightinput"},[o("v-uni-input",{attrs:{placeholder:"选择供货商",disabled:"true",value:e.all_money}})],1)],1),o("v-uni-view",{staticClass:"display_flex",staticStyle:{padding:"10rpx 0"}},[o("v-uni-view",[e._v("实际付款（可修改）")]),o("v-uni-view",{staticClass:"kaidan_rightinput"},[o("v-uni-input",{staticStyle:{color:"#d71345"},attrs:{placeholder:"输入实际付款金额",type:"digit"},model:{value:e.real_money,callback:function(t){e.real_money=t},expression:"real_money"}})],1)],1)],1)],1),o("v-uni-view",{staticStyle:{"margin-top":"20px"}},[o("v-uni-textarea",{staticClass:"beizhu_style",attrs:{placeholder:"请输入备注",name:"input_beizhu"}})],1),o("v-uni-view",{staticStyle:{padding:"0 30rpx","margin-top":"60rpx"}},[o("v-uni-button",{staticClass:"confrim_button",attrs:{disabled:e.button_disabled,"form-type":"submit"}},[e._v("确认入库")])],1)],1)],1)],1)},s=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return s})},"660b":function(e,t,o){var n=o("3b7e");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=o("4f06").default;s("5a71ac0c",n,!0,{sourceMap:!1,shadowMode:!1})},b4dd:function(e,t,o){"use strict";var n=o("660b"),s=o.n(n);s.a},b92b:function(e,t,o){"use strict";var n=o("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(o("795b")),r=n(o("5d73"));o("6b54"),o("87b3"),o("7f7f"),o("c5f6");var a,i,u,c,l=n(o("2bef")),d=n(o("396a")),g=n(o("e2e1")),p={data:function(){return{stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,producer:null}},onLoad:function(){i=this,a=uni.getStorageSync("uid"),uni.removeStorageSync("producer"),this.products=uni.getStorageSync("products");for(var e=0;e<this.products.length;e++)this.all_money=Number((this.products[e].total_money+this.all_money).toFixed(2));this.real_money=Number(this.all_money.toFixed(2))},onShow:function(){if(i.producer=uni.getStorageSync("producer"),c=uni.getStorageSync("shop"),c){i.shop_name=c.name;var e=Bmob.Pointer("shops");u=e.set(c.objectId)}i.stock=uni.getStorageSync("warehouse")?uni.getStorageSync("warehouse")[0].stock:""},methods:{formSubmit:function(e){console.log(e),this.button_disabled=!0,uni.showLoading({title:"上传中..."});for(var t=Bmob.Pointer("stocks"),o=t.set(i.stock?i.stock.objectId:""),n=new Array,s=[],p=0;p<this.products.length;p++){var v=Number(this.products[p].reserve)+this.products[p].num,f={},m=Bmob.Query("Bills"),h=Bmob.Pointer("_User"),_=h.set(a),b=Bmob.Pointer("Goods"),y=b.set(this.products[p].objectId),w=uni.getStorageSync("masterId"),S=Bmob.Pointer("_User"),k=S.set(w);m.set("goodsName",this.products[p].goodsName),m.set("retailPrice",this.products[p].modify_retailPrice.toString()),m.set("num",this.products[p].num),m.set("total_money",this.products[p].total_money),m.set("goodsId",y),m.set("userId",_),m.set("opreater",k),m.set("type",1),c&&m.set("shop",u),m.set("stock",o);var x={};f.goodsName=this.products[p].goodsName,f.modify_retailPrice=this.products[p].modify_retailPrice.toString(),f.retailPrice=this.products[p].retailPrice,f.total_money=this.products[p].total_money,x.costPrice=this.products[p].costPrice,x.retailPrice=this.products[p].retailPrice,x.objectId=this.products[p].objectId,x.reserve=v,f.goodsId=x,f.num=this.products[p].num,f.type=1,n.push(m),s.push(f)}Bmob.Query("Bills").saveAll(n).then(function(t){console.log("批量新增单据成功",t);for(var n=[],u=0;u<t.length;u++)n.push(t[u].success.objectId);var c=Bmob.Pointer("_User"),p=c.set(a),v=uni.getStorageSync("masterId"),f=Bmob.Pointer("_User"),m=f.set(v),h=Bmob.Query("order_opreations");if(h.set("beizhu",e.detail.value.input_beizhu),h.set("detail",s),h.set("type",1),h.set("bills",n),h.set("opreater",m),h.set("master",p),h.set("stock",o),h.set("goodsName",i.products[0].goodsName),h.set("real_money",Number(i.real_money)),h.set("debt",i.all_money-Number(i.real_money)),i.producer){var _=Bmob.Pointer("producers"),b=_.set(i.producer.objectId);if(h.set("producer",b),i.all_money-Number(i.real_money)>0){var y=Bmob.Query("producers");y.get(i.producer.objectId).then(function(e){var t=null==e.debt?0:e.debt;t+=i.all_money-Number(i.real_money),console.log(t);var o=Bmob.Query("producers");o.get(i.producer.objectId).then(function(e){e.set("debt",t),e.save()})})}}h.set("all_money",i.all_money),h.save().then(function(t){console.log("添加操作历史记录成功",t),uni.hideLoading(),uni.showToast({title:"产品入库成功",icon:"success",duration:1e3,complete:function(){for(var o=function(e){var t=Number(i.products[e].reserve)+i.products[e].num,o=Bmob.Query("Goods");o.get(i.products[e].objectId).then(function(o){o.set("reserve",t),o.set("stocktype",t>i.products[e].warning_num?1:0),o.save()}).catch(function(e){console.log(e)})},n=0;n<i.products.length;n++)o(n);setTimeout(function(){l.default.log(uni.getStorageSync("user").nickName+"入库了'"+i.products[0].goodsName+"'等"+i.products.length+"商品",1,t.objectId);var o={frist:uni.getStorageSync("user").nickName+"入库了'"+i.products[0].goodsName+"'等"+i.products.length+"商品",data1:t.createdAt,data2:i.stock?i.stock.stock_name:"未填写",remark:e.detail.value.input_beizhu?e.detail.value.input_beizhu:"未填写",url:"https://www.jimuzhou.com/h5/pages/report/EnteringHistory/detail/detail?id="+t.objectId};g.default.send_in(o)},500),i.can_addGoods().then(function(e){if(e){var t=uni.getStorageSync("products"),o=uni.getStorageSync("warehouse"),n=!0,s=!1,a=void 0;try{for(var u,c=(0,r.default)(t);!(n=(u=c.next()).done);n=!0){var l=u.value;l.reserve=l.num,d.default.upload_good_withNoCan(l,o[0].stock).then(function(e){console.log(e),e[0]?uni.showToast({title:"添加成功",icon:"none"}):uni.showToast({title:e[1],icon:"none"})})}}catch(g){s=!0,a=g}finally{try{n||null==c.return||c.return()}finally{if(s)throw a}}i.button_disabled=!1,uni.setStorageSync("is_option",!0),uni.removeStorageSync("warehouse"),uni.navigateBack({delta:2})}else i.button_disabled=!1,uni.setStorageSync("is_option",!0),uni.removeStorageSync("warehouse"),uni.navigateBack({delta:2})})}})})},function(e){console.log("异常处理")})},can_addGoods:function(){return new s.default(function(e,t){var o=uni.getStorageSync("products"),n=uni.getStorageSync("warehouse");if(n){var s=!0,a=!1,i=void 0;try{for(var u,c=(0,r.default)(o);!(s=(u=c.next()).done);s=!0){var l=u.value;""==l.stocks.stock_name||void 0==l.stocks.stock_name||l.stocks.stock_name!=n[0].stock.stock_name?uni.showModal({title:"'"+l.goodsName+"'没有关联到调出仓库",content:"是否将它关联到此仓库",showCancel:!0,success:function(t){console.log(t),t.confirm&&e(!0)},fail:function(){},complete:function(){e(!1)}}):e(!1)}}catch(d){a=!0,i=d}finally{try{s||null==c.return||c.return()}finally{if(a)throw i}}}else e(!1)})}}};t.default=p},ba76:function(e,t,o){"use strict";o.r(t);var n=o("5c81"),s=o("e717");for(var r in s)"default"!==r&&function(e){o.d(t,e,function(){return s[e]})}(r);o("b4dd");var a=o("2877"),i=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,"185e2b66",null);t["default"]=i.exports},e2e1:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={send_in:function(e){var t=uni.getStorageSync("setting").wx_openid;uni.request({url:"https://www.jimuzhou.com/api/send_temp.php",method:"POST",data:{openid:t,frist:e.frist,data1:e.data1,data2:e.data2,remark:e.remark,url:e.url,type:"in"},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log(e)}})},send_temp:function(e){var t=uni.getStorageSync("setting").wx_openid;uni.request({url:"https://www.jimuzhou.com/api/send_temp.php",method:"POST",data:{openid:t,data1:e.data1,data2:e.data2,data3:e.data3,data4:e.data4,remark:"备注:"+e.remark,url:e.url,type:"out"},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log(e)}})}};t.default=n},e717:function(e,t,o){"use strict";o.r(t);var n=o("b92b"),s=o.n(n);for(var r in n)"default"!==r&&function(e){o.d(t,e,function(){return n[e]})}(r);t["default"]=s.a}}]);