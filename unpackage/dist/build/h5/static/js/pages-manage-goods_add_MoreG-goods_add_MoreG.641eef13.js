(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-goods_add_MoreG-goods_add_MoreG"],{"0f7e":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'.uni-collapse[data-v-7cac7d33]{background-color:#fff;position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-collapse[data-v-7cac7d33]:after{position:absolute;z-index:10;right:0;bottom:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-collapse[data-v-7cac7d33]:before{position:absolute;z-index:10;right:0;top:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}',""])},3059:function(e,t,i){"use strict";var n=i("dd9a"),a=i.n(n);a.a},"35fc":function(e,t,i){"use strict";i.r(t);var n=i("d5e2"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},"5b26":function(e,t,i){var n=i("de3d");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("228339ca",n,!0,{sourceMap:!1,shadowMode:!1})},"6d3b":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("v-uni-form",{on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.formSubmit.apply(void 0,arguments)}}},[i("v-uni-scroll-view",{staticStyle:{height:"calc(100vh - 148rpx)"},attrs:{"scroll-y":!0}},[i("v-uni-view",{staticClass:"frist"},[i("v-uni-view",{staticClass:"notice_text"},[e._v("产品图")]),i("v-uni-view",{staticStyle:{width:"100%",padding:"20rpx 0"}},[i("v-uni-view",{staticClass:"upload_image",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.upload_image.apply(void 0,arguments)}}},[e.goodsIcon?i("v-uni-image",{staticStyle:{width:"180rpx",height:"180rpx"},attrs:{src:e.goodsIcon}}):i("fa-icon",{staticStyle:{height:"180rpx","line-height":"180rpx"},attrs:{type:"plus-square-o",size:"40",color:"#426ab3"}})],1),i("v-uni-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{name:"goodsIcon",value:e.goodsIcon}})],1)],1),i("v-uni-view",{staticClass:"frist"},[i("v-uni-view",{staticClass:"notice_text"},[e._v("基本信息")]),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("名称"),i("v-uni-text",{staticStyle:{color:"#aa2116","margin-left":"4rpx"}},[e._v("*")])],1),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"产品名称",name:"goodsName",value:e.goodsName}})],1)],1),i("v-uni-navigator",{staticClass:"input_item2",attrs:{"hover-class":"none",url:"/pages/manage/category/category?type=choose"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",{staticClass:"left_item"},[e._v("类别")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"产品类别",name:"goodsClass",value:e.category.class_text,disabled:"true"}})],1)],1),i("v-uni-view",[i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("进价")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"产品进价",name:"costPrice",type:"digit",value:e.costPrice}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("售价")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"产品售价",name:"retailPrice",type:"digit",value:e.retailPrice}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("包装含量")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"包装含量",name:"packageContent",value:e.packageContent}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("包装单位")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"包装单位",name:"packingUnit",value:e.packingUnit}})],1)],1)],1),i("v-uni-view",{staticClass:"frist",staticStyle:{"margin-bottom":"30rpx"}},[i("v-uni-navigator",{staticClass:"input_item2",staticStyle:{"line-height":"70rpx"},attrs:{"hover-class":"none",url:"G_More/G_More"}},[i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"input_item",staticStyle:{width:"100%"}},[i("v-uni-view",{staticClass:"left_item"},[e._v("初始库存")]),i("v-uni-input",{attrs:{placeholder:"初始库存",type:"digit",name:"reserve",disabled:"true"},model:{value:e.reserve,callback:function(t){e.reserve=t},expression:"reserve"}})],1)],1),i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("预警库存")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"预警库存",name:"warning_num",type:"digit",value:e.warning_num}})],1)],1),i("v-uni-navigator",{staticClass:"input_item2",attrs:{"hover-class":"none",url:"/pages/manage/warehouse/warehouse?type=choose"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",{staticClass:"left_item"},[e._v("仓库")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"选择仓库",disabled:"true"},model:{value:e.stock_name,callback:function(t){e.stock_name=t},expression:"stock_name"}})],1)],1),i("v-uni-view",[i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1)],1),i("uni-collapse",{attrs:{accordion:!0}},[i("uni-collapse-item",{staticStyle:{color:"#FE104C","font-size":"32rpx","font-weight":"bold"},attrs:{title:"更多信息"}},[i("v-uni-view",{staticClass:"frist",staticStyle:{"margin-top":"0"}},[i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("失效日期")]),i("v-uni-picker",{attrs:{mode:"date"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindDateChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"失效日期",name:"nousetime",disabled:"true"},model:{value:e.nousetime,callback:function(t){e.nousetime=t},expression:"nousetime"}})],1)],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("生产厂家")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"生产厂家",name:"producer",value:e.producer}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("货号")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"货号",name:"regNumber",value:e.regNumber}})],1)],1),i("v-uni-view",{staticClass:"input_item2"},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",{staticClass:"left_item"},[e._v("条码")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{value:e.productCode,placeholder:"条码",name:"productCode"}})],1)],1),i("v-uni-view",[i("fa-icon",{attrs:{type:"clone",size:"16",color:"#426ab3"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.scan_code.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("货架位置")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"货架位置",name:"position",value:e.position}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("产品简介")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"产品简介",name:"product_info",value:e.product_info}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("是否半成品")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-switch",{attrs:{checked:e.product_state,name:"product_state"}})],1)],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"display_flex_bet"},[i("v-uni-button",{staticClass:"submit_button",attrs:{formType:"submit"}},[e._v(e._s(e.text_desc))]),i("v-uni-button",{staticClass:"reset_button",attrs:{formType:"reset"}},[e._v("重置")])],1)],1)],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},"72dd":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-collapse"},[e._t("default")],2)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},"7c20":function(e,t,i){"use strict";i.r(t);var n=i("ce70"),a=i("f9c7");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("f12f");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"07b66df4",null);t["default"]=s.exports},"7fd5":function(e,t,i){"use strict";(function(t){var n=i("288e");i("6b54"),i("7514");var a=n(i("5d73"));i("c5f6");var o=n(i("795b")),r=n(i("9546"));e.exports={enterAddGoodNum:function(e){var i=this;return new o.default(function(n,o){for(var s=function(o){var s=0,l=r.default.Query("Goods");l.get(e[o].objectId).then(function(u){var c=u;if(e[o].selectd_model){var d=!0,f=!1,v=void 0;try{for(var g,p=(0,a.default)(e[o].selected_model);!(d=(g=p.next()).done);d=!0){var m=g.value,h=!0,b=!1,_=void 0;try{for(var w,y=(0,a.default)(c.models);!(h=(w=y.next()).done);h=!0){var x=w.value;x.id==m.id&&(x.reserve=Number(x.reserve)+Number(m.num)),delete x.num}}catch(k){b=!0,_=k}finally{try{h||null==y.return||y.return()}finally{if(b)throw _}}}}catch(k){f=!0,v=k}finally{try{d||null==p.return||p.return()}finally{if(f)throw v}}s=Number(c.reserve)+Number(e[o].num),l.set("models",c.models)}else s=Number(c.reserve)+Number(e[o].num);l.set("reserve",s),l.set("id",e[o].objectId),l.save().then(function(a){if(e[o].header){var s=r.default.Query("Goods");s.equalTo("header","==",e[o].header.objectId),s.equalTo("order","==",1),s.statTo("sum","reserve"),s.find().then(function(a){t.log("dasds",a);var s=a[0]._sumReserve,l=r.default.Query("Goods");l.set("reserve",s),l.set("id",e[o].header.objectId),l.save().then(function(t){i.modifyStockType(e[o].header.objectId),o==e.length-1&&n(!0)})})}else i.modifyStockType(e[o].objectId),o==e.length-1&&n(!0)}).catch(function(e){t.log(e)})})},l=0;l<e.length;l++)s(l)})},outRedGoodNum:function(e){var i=this;return new o.default(function(n,o){for(var s=function(o){var s=0,l=r.default.Query("Goods");l.get(e[o].objectId).then(function(u){var c=u;if(e[o].selectd_model){var d=!0,f=!1,v=void 0;try{for(var g,p=(0,a.default)(e[o].selected_model);!(d=(g=p.next()).done);d=!0){var m=g.value,h=!0,b=!1,_=void 0;try{for(var w,y=(0,a.default)(c.models);!(h=(w=y.next()).done);h=!0){var x=w.value;s+=Number(x.reserve),x.id==m.id&&(x.reserve=Number(x.reserve)-Number(m.num)),delete x.num}}catch(k){b=!0,_=k}finally{try{h||null==y.return||y.return()}finally{if(b)throw _}}}}catch(k){f=!0,v=k}finally{try{d||null==p.return||p.return()}finally{if(f)throw v}}s=Number(c.reserve)-Number(e[o].num),l.set("models",c.models)}else s=Number(c.reserve)-Number(e[o].num);l.set("reserve",s),l.set("id",e[o].objectId),l.save().then(function(t){if(e[o].header){var a=r.default.Query("Goods");a.equalTo("header","==",e[o].header.objectId),a.equalTo("order","==",1),a.statTo("sum","reserve"),a.find().then(function(t){var a=t[0]._sumReserve,s=r.default.Query("Goods");s.set("reserve",a),s.set("id",e[o].header.objectId),s.save().then(function(t){i.modifyStockType(e[o].header.objectId),o==e.length-1&&n(!0)})})}else i.modifyStockType(e[o].objectId),o==e.length-1&&n(!0)}).catch(function(e){t.log(e)})})},l=0;l<e.length;l++)s(l)})},enterAddGoodNumNew:function(e){var i=this;return new o.default(function(n,o){for(var s=uni.getStorageSync("warehouse")?uni.getStorageSync("warehouse")[0].stock:"",l=uni.getStorageSync("uid"),u=function(o){var u=0,c=r.default.Query("Goods");c.get(e[o].objectId).then(function(c){if(e[o].selectd_model){var d=!0,f=!1,v=void 0;try{for(var g,p=(0,a.default)(e[o].selected_model);!(d=(g=p.next()).done);d=!0){var m=g.value,h=!0,b=!1,_=void 0;try{for(var w,y=(0,a.default)(e[o].models);!(h=(w=y.next()).done);h=!0){var x=w.value;x.id==m.id&&(x.reserve=Number(x.reserve)+Number(m.num)),delete x.num}}catch(S){b=!0,_=S}finally{try{h||null==y.return||y.return()}finally{if(b)throw _}}}}catch(S){f=!0,v=S}finally{try{d||null==p.return||p.return()}finally{if(f)throw v}}u=Number(e[o].reserve)+Number(e[o].num),c.set("models",e[o].models)}else u=Number(e[o].reserve)+Number(e[o].num);c.set("reserve",u),c.save();var k=r.default.Query("Goods");k.equalTo("userId","==",l),k.equalTo("header","==",e[o].objectId),k.equalTo("stocks","==",s.objectId),k.find().then(function(a){if(0==a.length)i.upload_good_withNoCan(e[o],s,Number(e[o].num)).then(function(i){t.log(i),o==e.length-1&&n(!0)});else{var l=r.default.Query("Goods");l.set("id",a[0].objectId),l.set("reserve",a[0].reserve+Number(e[o].num)),l.save().then(function(i){t.log(i),o==e.length-1&&n(!0)}).catch(function(e){t.log(e)})}})}).catch(function(e){t.log(e)})},c=0;c<e.length;c++)u(c)})},outRedGoodNumNew:function(e){var i=this;return new o.default(function(n,o){for(var s=uni.getStorageSync("warehouse")?uni.getStorageSync("warehouse")[0].stock:"",l=uni.getStorageSync("uid"),u=function(o){var u=0,c=r.default.Query("Goods");c.get(e[o].objectId).then(function(c){if(e[o].selectd_model){var d=!0,f=!1,v=void 0;try{for(var g,p=(0,a.default)(e[o].selected_model);!(d=(g=p.next()).done);d=!0){var m=g.value,h=!0,b=!1,_=void 0;try{for(var w,y=(0,a.default)(e[o].models);!(h=(w=y.next()).done);h=!0){var x=w.value;x.id==m.id&&(x.reserve=Number(x.reserve)-Number(m.num)),delete x.num}}catch(S){b=!0,_=S}finally{try{h||null==y.return||y.return()}finally{if(b)throw _}}}}catch(S){f=!0,v=S}finally{try{d||null==p.return||p.return()}finally{if(f)throw v}}u=Number(e[o].reserve)-Number(e[o].num),c.set("models",e[o].models)}else u=Number(e[o].reserve)-Number(e[o].num);c.set("reserve",u),c.save();var k=r.default.Query("Goods");k.equalTo("userId","==",l),k.equalTo("header","==",e[o].objectId),k.equalTo("stocks","==",s.objectId),k.find().then(function(a){if(0==a.length)i.upload_good_withNoCan(e[o],s,Number(e[o].num),"out").then(function(i){t.log(i),o==e.length-1&&n(!0)});else{var l=r.default.Query("Goods");l.set("id",a[0].objectId),l.set("reserve",a[0].reserve-Number(e[o].num)),l.save().then(function(i){t.log(i),o==e.length-1&&n(!0)}).catch(function(e){t.log(e)})}})}).catch(function(e){t.log(e)})},c=0;c<e.length;c++)u(c)})},upload_good_withNoCan:function(e,i,n,s){return new o.default(function(o,l){t.log(e);var u=uni.getStorageSync("uid"),c=r.default.Pointer("_User"),d=c.set(u),f=r.default.Pointer("stocks"),v=f.set(i.objectId),g=r.default.Pointer("Goods"),p="";p=e.header?g.set(e.header.objectId):g.set(e.objectId);var m=r.default.Query("Goods");if(m.set("goodsName",e.goodsName),m.set("goodsIcon",e.goodsIcon),"out"==s){if(m.set("reserve",0-Number(n)),e.goodsId&&e.goodsId.models){var h=!0,b=!1,_=void 0;try{for(var w,y=(0,a.default)(e.goodsId.models);!(h=(w=y.next()).done);h=!0){var x=w.value;x.reserve=0-Number(x.num)}}catch(O){b=!0,_=O}finally{try{h||null==y.return||y.return()}finally{if(b)throw _}}m.set("models",e.goodsId.models)}}else if("allocation"==s){if(m.set("reserve",Number(n)),e.selected_model&&e.selected_model.length>0){var k=!0,S=!1,C=void 0;try{for(var N,I=(0,a.default)(e.selected_model);!(k=(N=I.next()).done);k=!0){var j=N.value;j.reserve=Number(j.num),delete j.num}}catch(O){S=!0,C=O}finally{try{k||null==I.return||I.return()}finally{if(S)throw C}}m.set("models",e.selected_model)}}else if(m.set("reserve",Number(n)),e.goodsId&&e.goodsId.models){var T=!0,P=!1,G=void 0;try{for(var z,Q=(0,a.default)(e.goodsId.models);!(T=(z=Q.next()).done);T=!0){var M=z.value;M.reserve=Number(M.num)}}catch(O){P=!0,G=O}finally{try{T||null==Q.return||Q.return()}finally{if(P)throw G}}m.set("models",e.goodsId.models)}m.set("stocks",v),m.set("userId",d),m.set("header",p),m.set("costPrice",""+e.costPrice),m.set("retailPrice",""+e.retailPrice),m.set("order",1),m.save().then(function(e){t.log(e),o([!0,e])}).catch(function(e){t.log(e)})})},handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(e,i,n){var a=r.default.Pointer("_User"),o=a.set(uni.getStorageSync("uid"));if(-2==i){var s=r.default.Pointer("Goods"),l=s.set(n),u=r.default.Query("logs");u.equalTo("goodId","==",n),u.find().then(function(n){if(0==n.length){var a=r.default.Query("logs");a.set("parent",o),a.set("goodId",l),a.set("log",e),a.set("type",i),a.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})}})}else{var c=r.default.Query("logs");c.set("parent",o),c.set("log",e),c.set("detail_id",n),c.set("type",i),c.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})}},modifyStockType:function(e){var i=this,n=r.default.Query("Goods");n.get(e).then(function(e){var t=e;""==t.warning_num&&""==t.max_num?e.set("stocktype",1):void 0==t.warning_num&&void 0==t.max_num?e.set("stocktype",1):null==t.warning_num&&null==t.max_num?e.set("stocktype",1):(""!=t.warning_num&&(t.warning_num>=t.reserve?(e.set("stocktype",0),i.log(t.goodsName+"已经超过设置的最小库存值"+t.warning_num,-2,t.objectId)):t.warning_num<t.reserve&&t.reserve<t.max_num&&e.set("stocktype",1)),""!=t.max_num&&(t.max_num<=t.reserve?(e.set("stocktype",2),i.log(t.goodsName+"已经超过设置的最大库存值"+t.max_num,-2,t.objectId)):t.warning_num<t.reserve&&t.reserve<t.max_num&&e.set("stocktype",1))),e.save()}).catch(function(e){t.log(e)})},record_shopOut:function(e,i){t.log(e,i);var n=r.default.Query("shops");n.set("id",e),n.set("have_out",i),n.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})},record_staffOut:function(e){if(t.log(e,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var i=r.default.Query("_User");i.set("id",uni.getStorageSync("user").objectId),i.set("have_out",Number(e)+uni.getStorageSync("user").have_out),i.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})}},get_allCost:function(){var e=uni.getStorageSync("uid");t.log(e);var i=r.default.Query("Goods");i.equalTo("userId","==",e),i.find().then(function(e){t.log(e);var i=!0,n=!1,o=void 0;try{for(var r,s=(0,a.default)(e);!(i=(r=s.next()).done);i=!0){var l=r.value;t.log(l),Number(l.costPrice)*l.reserve,l.reserve}}catch(u){n=!0,o=u}finally{try{i||null==s.return||s.return()}finally{if(n)throw o}}})},getDay:function(e,t){var i=this,n=new Date,a=n.getTime()+864e5*e;n.setTime(a);var o=n.getFullYear(),r=n.getMonth(),s=n.getDate();return r=i.handleMonth(r+1),s=i.handleMonth(s),t?o+"-"+r+"-"+s+" 00:00:00":o+"-"+r+"-"+s},js_date_time:function(e,t){var i=new Date(e),n=i.getFullYear(),a=i.getMonth()+1;a=a<10?"0"+a:a;var o=i.getDate();o=o<10?"0"+o:o;var r=i.getHours();r=r<10?"0"+r:r;var s=i.getMinutes(),l=i.getSeconds();return s=s<10?"0"+s:s,l=l<10?"0"+l:l,t?n+"-"+a+"-"+o+" "+r+":"+s:n+"-"+a+"-"+o},handleMonth:function(e){var t=e;return 1==e.toString().length&&(t="0"+e),t}}}).call(this,i("5a52")["default"])},a4db:function(e,t,i){var n=i("0f7e");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("74167560",n,!0,{sourceMap:!1,shadowMode:!1})},b4ab:function(e,t,i){"use strict";i.r(t);var n=i("72dd"),a=i("35fc");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("d6b8");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"7cac7d33",null);t["default"]=s.exports},ce70:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{class:["uni-collapse-cell",{"uni-collapse-cell--disabled":e.disabled,"uni-collapse-cell--open":e.isOpen}],attrs:{"hover-class":e.disabled?"":"uni-collapse-cell--hover"}},[i("v-uni-view",{staticClass:"uni-collapse-cell__title",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e.thumb?i("v-uni-view",{staticClass:"uni-collapse-cell__title-extra"},[i("v-uni-image",{staticClass:"uni-collapse-cell__title-img",attrs:{src:e.thumb}})],1):e._e(),i("v-uni-view",{staticClass:"uni-collapse-cell__title-inner"},[i("v-uni-view",{staticClass:"uni-collapse-cell__title-text"},[e._v(e._s(e.title))])],1),i("v-uni-view",{staticClass:"uni-collapse-cell__title-arrow",class:{"uni-active":e.isOpen,"uni-collapse-cell--animation":!0===e.showAnimation}},[i("uni-icon",{attrs:{color:"#bbb",size:"20",type:"arrowdown"}})],1)],1),i("v-uni-view",{staticClass:"uni-collapse-cell__content",class:{"uni-collapse-cell--animation":!0===e.showAnimation},style:{height:e.isOpen?"auto":"0px"}},[i("v-uni-view",{attrs:{id:e.elId}},[e._t("default")],2)],1)],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},d5e2:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac6a");var n={name:"UniCollapse",props:{accordion:{type:Boolean,default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var e=[];this.childrens.forEach(function(t,i){t.isOpen&&e.push(t.nameSync)}),this.$emit("change",e)}}};t.default=n},d692:function(e,t,i){"use strict";i.r(t);var n=i("6d3b"),a=i("dcfa");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("3059");var r=i("f0c5"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"03424a0e",null);t["default"]=s.exports},d6b8:function(e,t,i){"use strict";var n=i("a4db"),a=i.n(n);a.a},dcfa:function(e,t,i){"use strict";i.r(t);var n=i("ed6e"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},dd9a:function(e,t,i){var n=i("faaf");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("16a8f892",n,!0,{sourceMap:!1,shadowMode:!1})},de3d:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'.uni-collapse-cell[data-v-07b66df4]{position:relative}.uni-collapse-cell--hover[data-v-07b66df4]{background-color:#f1f1f1}.uni-collapse-cell--open[data-v-07b66df4]{background-color:#f1f1f1}.uni-collapse-cell--disabled[data-v-07b66df4]{opacity:.3}.uni-collapse-cell--animation[data-v-07b66df4]{-webkit-transition:all .3s;transition:all .3s}.uni-collapse-cell[data-v-07b66df4]:after{position:absolute;z-index:3;right:0;bottom:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-collapse-cell__title[data-v-07b66df4]{padding:%?12?% %?30?%;width:100%;box-sizing:border-box;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-collapse-cell__title-extra[data-v-07b66df4]{margin-right:%?18?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-collapse-cell__title-img[data-v-07b66df4]{height:%?52?%;width:%?52?%}.uni-collapse-cell__title-arrow[data-v-07b66df4]{width:20px;height:20px;-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:center center;transform-origin:center center}.uni-collapse-cell__title-arrow.uni-active[data-v-07b66df4]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.uni-collapse-cell__title-inner[data-v-07b66df4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-collapse-cell__title-text[data-v-07b66df4]{font-size:%?24?%;text-overflow:ellipsis;white-space:nowrap;color:inherit;line-height:1.5;overflow:hidden}.uni-collapse-cell__content[data-v-07b66df4]{position:relative;width:100%;overflow:hidden;background:#fff}.uni-collapse-cell__content uni-view[data-v-07b66df4]{font-size:%?28?%}',""])},ed6e:function(e,t,i){"use strict";(function(e){var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("3b2b"),i("a481"),i("7514"),i("c5f6");var a,o,r=n(i("5d73")),s=n(i("9546")),l=n(i("4d52")),u=n(i("b4ab")),c=n(i("7c20")),d=n(i("7fd5")),f="",v="",g={components:{uniCollapse:u.default,uniCollapseItem:c.default,faIcon:l.default},data:function(){return{text_desc:"保存",goodsName:"",costPrice:"",retailPrice:"",packageContent:"",packingUnit:"",warning_num:"",producer:"",regNumber:"",position:"",product_info:"",productCode:"",category:"",reserve:0,goodsIcon:"",stock_name:"",stocks:"",producttime:"",nousetime:"",product_state:!1,model:""}},onLoad:function(e){a=this,o=uni.getStorageSync("uid"),uni.removeStorageSync("category"),uni.removeStorageSync("is_add"),uni.removeStorageSync("now_model")},onShow:function(){if(uni.getStorageSync("warehouse")&&(a.stocks=uni.getStorageSync("warehouse")[0].stock,a.stock_name=uni.getStorageSync("warehouse")[0].stock.stock_name),uni.getStorageSync("category"))if(a.category=uni.getStorageSync("category"),2==a.category.type){var t=s.default.Pointer("class_user");f=t.set(a.category.parent.objectId);var i=s.default.Pointer("second_class");v=i.set(a.category.objectId),e.log(a.category.parent.objectId,a.category.objectId)}else{var n=s.default.Pointer("class_user");f=n.set(a.category.objectId)}if(uni.getStorageSync("now_model")){a.reserve=0;var o=uni.getStorageSync("now_model"),l=!0,u=!1,c=void 0;try{for(var d,g=(0,r.default)(o);!(l=(d=g.next()).done);l=!0){var p=d.value;a.reserve+=Number(p.reserve)}}catch(m){u=!0,c=m}finally{try{l||null==g.return||g.return()}finally{if(u)throw c}}}},onUnload:function(){"",f="",v="",uni.removeStorageSync("now_model"),d.default.handleData()},methods:{bindDateChange:function(e){a.nousetime=e.target.value},formSubmit:function(t){e.log(t.detail.value);var i=t.detail.value;""==i.goodsName?uni.showToast({title:"请输入产品名称",icon:"none"}):uni.getStorageSync("now_model")?a.upload_good(i):uni.showToast({title:"请输入规格以及对应的库存",icon:"none"})},upload_image:function(){uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){e.log(t);var i,n=Date.parse(new Date),o=t.tempFilePaths,l=!0,u=!1,c=void 0;try{for(var d,f=(0,r.default)(o);!(l=(d=f.next()).done);l=!0){var v=d.value;i=s.default.File(n+".jpg",v)}}catch(g){u=!0,c=g}finally{try{l||null==f.return||f.return()}finally{if(u)throw c}}i.save().then(function(e){a.goodsIcon=e[0].url})}})},upload_good:function(e){if(uni.showLoading({title:"上传中..."}),uni.getStorageSync("now_product"))a.add_good(e,"edit");else{var t=s.default.Query("Goods");t.equalTo("userId","==",o),t.equalTo("status","!=",-1),t.equalTo("goodsName","==",e.goodsName),t.find().then(function(t){t.length>=1?uni.showToast({title:"你的库存中已存在此产品",icon:"none"}):a.add_good(e,"add")})}},add_good:function(t,i){var n=s.default.Pointer("_User"),r=n.set(o),l=a.stocks.objectId?a.stocks.objectId:"",u=s.default.Pointer("stocks"),c=u.set(l),g=s.default.Query("Goods");if(g.set("goodsIcon",a.goodsIcon),g.set("goodsName",t.goodsName),g.set("costPrice",t.costPrice?t.costPrice:"0"),g.set("retailPrice",t.retailPrice?t.retailPrice:"0"),a.nousetime){var p=a.nousetime.replace(new RegExp("-","g"),"/");p=new Date(p).getTime(),g.set("nousetime",p)}g.set("regNumber",t.regNumber),g.set("models",uni.getStorageSync("now_model")),g.set("reserve",Number(t.reserve)),g.set("productCode",t.productCode),g.set("stocks",c),g.set("product_info",t.product_info),g.set("producer",t.producer),g.set("packingUnit",t.packingUnit),g.set("packageContent",t.packageContent),g.set("position",t.position),g.set("warning_num",Number(t.warning_num)),g.set("stocktype",Number(t.warning_num)>=Number(a.reserve)?0:1),g.set("product_state",t.product_state),uni.getStorageSync("category")&&(1==a.category.type?g.set("goodsClass",f):g.set("second_class",v)),g.set("userId",r),g.set("id",uni.getStorageSync("now_product")?uni.getStorageSync("now_product").objectId:""),g.save().then(function(e){uni.hideLoading(),"add"==i?(d.default.log(uni.getStorageSync("user").nickName+"增加了产品'"+t.goodsName+"'",5,e.objectId),uni.showToast({title:"上传成功"})):(d.default.log(uni.getStorageSync("user").nickName+"修改了产品'"+t.goodsName+"'",5,uni.getStorageSync("now_product").objectId),uni.navigateBack({delta:2}),setTimeout(function(){uni.showToast({title:"修改成功",duration:1e3})},1e3)),uni.setStorageSync("is_add",!0)}).catch(function(t){e.log(t)})},handledata:function(){a.goodsName="",a.costPrice="",a.retailPrice="",a.packageContent="",a.packingUnit="",a.warning_num="",a.producer="",a.regNumber="",a.position="",a.product_info="",a.productCode="",a.category="",a.reserve=0,a.goodsIcon="",a.stocks="",a.stock_name="",a.producttime="",a.nousetime=""}}};t.default=g}).call(this,i("5a52")["default"])},efe7:function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac6a"),i("6b54"),i("c5f6");var a=n(i("3628")),o={name:"UniCollapseItem",components:{uniIcon:a.default},props:{title:{type:String,default:""},name:{type:[Number,String],default:0},disabled:{type:Boolean,default:!1},showAnimation:{type:Boolean,default:!1},open:{type:Boolean,default:!1},thumb:{type:String,default:""}},data:function(){var e=this.__call_hook?"uni_collapse_item":"Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{isOpen:!1,height:"auto",elId:e}},watch:{open:function(e){this.isOpen=e}},inject:["collapse"],created:function(){if(this.isOpen=this.open,this.nameSync=this.name?this.name:this.collapse.childrens.length,this.collapse.childrens.push(this),this.collapse.accordion&&this.isOpen){var e=this.collapse.childrens[this.collapse.childrens.length-2];e&&(this.collapse.childrens[this.collapse.childrens.length-2].isOpen=!1)}},mounted:function(){this.getSize()},methods:{getSize:function(){var e=this;this.showAnimation&&uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function(t){e.height=t[0].height+"px"})},onClick:function(){var e=this;this.disabled||(this.collapse.accordion&&this.collapse.childrens.forEach(function(t){t!==e&&(t.isOpen=!1)}),this.isOpen=!this.isOpen,this.collapse.onChange&&this.collapse.onChange())}}};t.default=o},f12f:function(e,t,i){"use strict";var n=i("5b26"),a=i.n(n);a.a},f9c7:function(e,t,i){"use strict";i.r(t);var n=i("efe7"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},faaf:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"[data-v-03424a0e]::-webkit-scrollbar{width:2px;height:6px;background-color:initial}.uni-input-placeholder[data-v-03424a0e]{font-size:12px}uni-input[data-v-03424a0e]{font-size:12px}\n\n/*定义滑块 内阴影+圆角*/[data-v-03424a0e]::-webkit-scrollbar-thumb{border-radius:10px;background-color:#999}.page[data-v-03424a0e]{font-size:%?28?%;background:#fafafa;height:100vh;overflow:scroll}.frist[data-v-03424a0e]{padding:0 %?20?%;background:#fff;margin-top:%?30?%}.input_item[data-v-03424a0e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:%?80?%;height:%?80?%;border-bottom:%?1?% solid#f6f5ec}.input_item2[data-v-03424a0e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;line-height:%?80?%;height:%?80?%;border-bottom:%?1?% solid#f6f5ec}.left_item[data-v-03424a0e]{color:#333;width:%?150?%}.right_input1[data-v-03424a0e]{font-size:12px}.submit_button[data-v-03424a0e]{width:50%;background:#426ab3;border-radius:%?40?%;margin:%?30?%;height:%?88?%;line-height:%?88?%;color:#fff;font-size:%?30?%}.upload_image[data-v-03424a0e]{width:%?180?%;height:%?180?%;line-height:%?220?%;text-align:center;border:%?1?% solid#999;border-radius:%?8?%}.notice_text[data-v-03424a0e]{padding-top:%?20?%;font-size:%?32?%;color:#3d3d3d;font-weight:700}.reset_button[data-v-03424a0e]{font-size:%?30?%;width:50%;background:#999;border-radius:%?40?%;margin:%?30?%;height:%?88?%;line-height:%?88?%;color:#fff}",""])}}]);