(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-goods_out-out_detail-out_detail"],{"015a":function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".page[data-v-4515ed4a]{color:#4d4d4d;font-size:%?28?%;height:100vh;overflow:scroll}.pro_list[data-v-4515ed4a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.pro_listitem[data-v-4515ed4a]{background-color:#fff;padding:%?10?% %?20?%;border-bottom:%?1?% solid#ddd}.pro_allmoney[data-v-4515ed4a]{background-color:#fff;padding:%?10?% %?20?%;text-align:right;font-size:%?32?%;color:#f30}.beizhu_style[data-v-4515ed4a]{width:calc(100% - %?40?%);background-color:#fff;padding:%?20?%;font-size:%?32?%;max-height:%?100?%}.confrim_button[data-v-4515ed4a]{background:#aa2116;color:#fff;font-weight:700;font-size:%?32?%}",""])},"026d":function(t,e,o){"use strict";o.r(e);var s=o("e697"),a=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);e["default"]=a.a},"2bef":function(t,e,o){"use strict";var s=o("288e");o("6b54"),o("87b3"),o("c5f6");var a=s(o("5d73"));o("7514"),t.exports={handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(t,e,o){var s=Bmob.Pointer("_User"),a=s.set(uni.getStorageSync("uid")),n=Bmob.Query("logs");n.set("parent",a),n.set("log",t),n.set("detail_id",o),n.set("type",e),n.save().then(function(t){console.log(t)}).catch(function(t){console.log(t)})},record_shopOut:function(t,e){console.log(t,e);var o=Bmob.Query("shops");o.set("id",t),o.set("have_out",e),o.save().then(function(t){console.log(t)}).catch(function(t){console.log(t)})},record_staffOut:function(t){if(console.log(t,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var e=Bmob.Query("staffs");e.set("id",uni.getStorageSync("user").objectId),e.set("have_out",t+uni.getStorageSync("user").have_out),e.save().then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},get_allCost:function(){var t=uni.getStorageSync("uid");console.log(t);var e=Bmob.Query("Goods");e.equalTo("userId","==",t),e.find().then(function(t){console.log(t);var e=!0,o=!1,s=void 0;try{for(var n,i=(0,a.default)(t);!(e=(n=i.next()).done);e=!0){var r=n.value;console.log(r),Number(r.costPrice)*r.reserve,r.reserve}}catch(u){o=!0,s=u}finally{try{e||null==i.return||i.return()}finally{if(o)throw s}}})},getDay:function(t,e){var o=this,s=new Date,a=s.getTime()+864e5*t;s.setTime(a);var n=s.getFullYear(),i=s.getMonth(),r=s.getDate();return i=o.handleMonth(i+1),r=o.handleMonth(r),e?n+"-"+i+"-"+r+" 00:00:00":n+"-"+i+"-"+r},handleMonth:function(t){var e=t;return 1==t.toString().length&&(e="0"+t),e}}},"3eea":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("v-uni-view",{staticClass:"page"},[o("v-uni-view",{staticStyle:{"line-height":"70rpx",padding:"20rpx 20rpx 0"}},[t._v("已选产品")]),o("v-uni-view",{staticStyle:{"max-height":"25vh","overflow-x":"scroll"}},t._l(t.products,function(e,s){return o("v-uni-view",{key:s,staticClass:"pro_listitem"},[o("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#3D3D3D"}},[o("v-uni-view",[t._v("产品："+t._s(e.goodsName))]),o("v-uni-view",[t._v("零售价：￥"+t._s(e.retailPrice?e.retailPrice:0))])],1),o("v-uni-view",{staticClass:"pro_list"},[o("v-uni-view",[t._v("实际进货价：￥"+t._s(e.modify_retailPrice)+"（X"+t._s(e.num)+"）")]),o("v-uni-view",[t._v("合计：￥"+t._s(e.total_money))])],1)],1)}),1),o("v-uni-view",{staticClass:"pro_allmoney"},[t._v("总计：￥"+t._s(t.all_money))]),o("v-uni-form",{on:{submit:function(e){e=t.$handleEvent(e),t.formSubmit(e)}}},[o("v-uni-view",{staticStyle:{margin:"30rpx 0"}},[o("v-uni-view",{staticStyle:{margin:"0 0 10rpx 10rpx"}},[t._v("开单明细（用于记录是否有无欠款）")]),o("v-uni-view",{staticClass:"kaidan_detail",staticStyle:{"line-height":"70rpx"}},[o("v-uni-navigator",{staticClass:"display_flex",attrs:{"hover-class":"none",url:"/pages/manage/warehouse/warehouse?type=choose"}},[o("v-uni-view",[t._v("选择仓库")]),o("v-uni-view",{staticClass:"kaidan_rightinput"},[o("v-uni-input",{attrs:{placeholder:"选择仓库",disabled:"true",value:t.stock.stock_name}})],1)],1),o("v-uni-navigator",{staticClass:"display_flex",staticStyle:{padding:"10rpx 0"},attrs:{"hover-class":"none",url:"/pages/manage/shops/shops?type=choose"}},[o("v-uni-view",[t._v("选择门店")]),o("v-uni-view",{staticClass:"kaidan_rightinput"},[o("v-uni-input",{attrs:{placeholder:"选择门店",disabled:"true",value:t.shop_name}})],1)],1),o("v-uni-navigator",{staticClass:"display_flex",staticStyle:{padding:"10rpx 0"},attrs:{"hover-class":"none",url:"/pages/manage/custom/custom?type=custom"}},[o("v-uni-view",[t._v("客户姓名")]),o("v-uni-view",{staticClass:"kaidan_rightinput"},[o("v-uni-input",{attrs:{placeholder:"选择客户",disabled:"true",value:t.custom.custom_name}})],1)],1),o("v-uni-view",{staticClass:"display_flex",staticStyle:{padding:"10rpx 0"}},[o("v-uni-view",[t._v("实际应付")]),o("v-uni-view",{staticClass:"kaidan_rightinput"},[o("v-uni-input",{attrs:{placeholder:"实际应付",disabled:"true",value:t.all_money}})],1)],1),o("v-uni-view",{staticClass:"display_flex",staticStyle:{padding:"10rpx 0"}},[o("v-uni-view",[t._v("实际付款（可修改）")]),o("v-uni-view",{staticClass:"kaidan_rightinput"},[o("v-uni-input",{staticStyle:{color:"#d71345"},attrs:{placeholder:"输入实际付款金额",type:"digit"},model:{value:t.real_money,callback:function(e){t.real_money=e},expression:"real_money"}})],1)],1)],1)],1),o("v-uni-view",{staticStyle:{"margin-top":"20px"}},[o("v-uni-textarea",{staticClass:"beizhu_style",attrs:{placeholder:"请输入备注",name:"input_beizhu"}})],1),o("v-uni-view",{staticStyle:{padding:"0 30rpx","margin-top":"60rpx"}},[o("v-uni-button",{staticClass:"confrim_button",attrs:{disabled:t.button_disabled,"form-type":"submit"}},[t._v("确认出库")])],1)],1)],1)],1)},a=[];o.d(e,"a",function(){return s}),o.d(e,"b",function(){return a})},"728b":function(t,e,o){var s=o("015a");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=o("4f06").default;a("3edac53b",s,!0,{sourceMap:!1,shadowMode:!1})},b28e:function(t,e,o){"use strict";o.r(e);var s=o("3eea"),a=o("026d");for(var n in a)"default"!==n&&function(t){o.d(e,t,function(){return a[t]})}(n);o("f830");var i=o("2877"),r=Object(i["a"])(a["default"],s["a"],s["b"],!1,null,"4515ed4a",null);e["default"]=r.exports},e2e1:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={send_in:function(t){var e=uni.getStorageSync("setting").wx_openid;uni.request({url:"https://www.jimuzhou.com/api/send_temp.php",method:"POST",data:{openid:e,frist:t.frist,data1:t.data1,data2:t.data2,remark:t.remark,url:t.url,type:"in"},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(t)}})},send_temp:function(t){var e=uni.getStorageSync("setting").wx_openid;uni.request({url:"https://www.jimuzhou.com/api/send_temp.php",method:"POST",data:{openid:e,data1:t.data1,data2:t.data2,data3:t.data3,data4:t.data4,remark:"备注:"+t.remark,url:t.url,type:"out"},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){console.log(t)}})}};e.default=s},e697:function(t,e,o){"use strict";var s=o("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("6b54"),o("87b3"),o("7f7f"),o("c5f6");var a,n,i,r,u=s(o("2bef")),c=s(o("e2e1")),l={data:function(){return{stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,custom:null}},onLoad:function(){n=this,a=uni.getStorageSync("uid"),this.products=uni.getStorageSync("products");for(var t=0;t<this.products.length;t++)this.all_money=Number((this.products[t].total_money+this.all_money).toFixed(2));this.real_money=Number(this.all_money.toFixed(2))},onShow:function(){if(n.custom=uni.getStorageSync("custom"),r=uni.getStorageSync("shop"),r){n.shop_name=r.name;var t=Bmob.Pointer("shops");i=t.set(r.objectId)}n.stock=uni.getStorageSync("warehouse")?uni.getStorageSync("warehouse")[0].stock:""},methods:{formSubmit:function(t){console.log(t),this.button_disabled=!0,uni.showLoading({title:"上传中..."});for(var e=Bmob.Pointer("stocks"),o=e.set(n.stock?n.stock.objectId:""),s=new Array,l=[],d=0;d<this.products.length;d++){var v=Number(this.products[d].reserve)-this.products[d].num,p=Bmob.Query("Bills"),m={},g=Bmob.Pointer("_User"),f=g.set(a),h=Bmob.Pointer("_User"),y=h.set(uni.getStorageSync("masterId")),_=Bmob.Pointer("Goods"),b=_.set(this.products[d].objectId);if(uni.getStorageSync("custom")){var S=Bmob.Pointer("customs"),w=S.set(uni.getStorageSync("custom").objectId);p.set("custom",w)}p.set("goodsName",this.products[d].goodsName),p.set("retailPrice",this.products[d].modify_retailPrice.toString()),p.set("num",this.products[d].num),p.set("total_money",this.products[d].total_money),p.set("goodsId",b),p.set("userId",f),p.set("type",-1),p.set("operater",y),p.set("stock",o);var x={};m.goodsName=this.products[d].goodsName,m.modify_retailPrice=this.products[d].modify_retailPrice.toString(),m.retailPrice=this.products[d].retailPrice,m.total_money=this.products[d].total_money,x.costPrice=this.products[d].costPrice,x.retailPrice=this.products[d].retailPrice,x.objectId=this.products[d].objectId,x.reserve=v,m.goodsId=x,m.num=this.products[d].num,m.type=-1,r&&(p.set("shop",i),u.default.record_shopOut(r.objectId,r.have_out+this.products[d].num)),s.push(p),l.push(m),u.default.record_staffOut(this.products[d].num)}Bmob.Query("Bills").saveAll(s).then(function(e){for(var s=[],d=0;d<e.length;d++)s.push(e[d].success.objectId);var v=Bmob.Pointer("_User"),p=v.set(a),m=uni.getStorageSync("masterId"),g=Bmob.Pointer("_User"),f=g.set(m),h=Bmob.Query("order_opreations");if(h.set("detail",l),h.set("bills",s),h.set("beizhu",t.detail.value.input_beizhu),h.set("type",-1),h.set("opreater",f),h.set("stock",o),h.set("master",p),h.set("goodsName",n.products[0].goodsName),h.set("real_money",Number(n.real_money)),h.set("debt",n.all_money-Number(n.real_money)),r&&h.set("shop",i),n.custom){var y=Bmob.Pointer("customs"),_=y.set(n.custom.objectId);if(h.set("custom",_),n.all_money-Number(n.real_money)>0){var b=Bmob.Query("customs");b.get(n.custom.objectId).then(function(t){var e=null==t.debt?0:t.debt;e+=n.all_money-Number(n.real_money),console.log(e);var o=Bmob.Query("customs");o.get(n.custom.objectId).then(function(t){t.set("debt",e),t.save()})})}}h.set("all_money",n.all_money),h.save().then(function(e){console.log("添加操作历史记录成功",e),uni.hideLoading(),uni.removeStorageSync("customs"),uni.showToast({title:"产品出库成功",icon:"success",success:function(){for(var o=function(t){var e=Number(n.products[t].reserve)-n.products[t].num,o=Bmob.Query("Goods");o.get(n.products[t].objectId).then(function(o){u.default.log(n.products[t].goodsName+"出库了"+n.products[t].num+"件，已经低于预警数量"+(n.products[t].warning_num?n.products[t].warning_num:0),-2,n.products[t].objectId),o.set("reserve",e),o.set("stocktype",e>n.products[t].warning_num?1:0),o.save()}).catch(function(t){console.log(t)})},s=0;s<n.products.length;s++)o(s);n.button_disabled=!1,uni.setStorageSync("is_option",!0),uni.removeStorageSync("warehouse"),setTimeout(function(){u.default.log(uni.getStorageSync("user").nickName+"出库了'"+n.products[0].goodsName+"'等"+n.products.length+"商品",-1,e.objectId);var o={data1:e.objectId,data2:uni.getStorageSync("user").nickName+"出库了'"+n.products[0].goodsName+"'等"+n.products.length+"商品",data3:n.stock?n.stock.stock_name:"未填写",data4:e.createdAt,remark:t.detail.value.input_beizhu?t.detail.value.input_beizhu:"未填写",url:"https://www.jimuzhou.com/h5/pages/report/EnteringHistory/detail/detail?id="+e.objectId};c.default.send_temp(o),uni.navigateBack({delta:2})},500)}})})},function(t){console.log("异常处理")})}}};e.default=l},f830:function(t,e,o){"use strict";var s=o("728b"),a=o.n(s);a.a}}]);