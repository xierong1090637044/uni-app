(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-good_det-edit_stock-edit_stock"],{"0f7e":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'.uni-collapse[data-v-7cac7d33]{background-color:#fff;position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-collapse[data-v-7cac7d33]:after{position:absolute;z-index:10;right:0;bottom:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-collapse[data-v-7cac7d33]:before{position:absolute;z-index:10;right:0;top:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}',""])},"30a6":function(e,t,n){"use strict";n.r(t);var i=n("f766"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a},"35fc":function(e,t,n){"use strict";n.r(t);var i=n("d5e2"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a},"3ba6":function(e,t,n){var i=n("ade9");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("077324e2",i,!0,{sourceMap:!1,shadowMode:!1})},"5b26":function(e,t,n){var i=n("de3d");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("228339ca",i,!0,{sourceMap:!1,shadowMode:!1})},"5d42":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"page"},[n("v-uni-form",{on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.formSubmit.apply(void 0,arguments)}}},[n("v-uni-scroll-view",{staticStyle:{height:"calc(100vh - 148rpx)"},attrs:{"scroll-y":!0}},[n("v-uni-view",{staticClass:"frist"},[n("v-uni-view",{staticClass:"notice_text"},[e._v("产品图"),n("v-uni-text",{staticStyle:{"font-size":"20rpx",color:"#333"}},[e._v("(修改库存模式不支持上传图片)")])],1),n("v-uni-view",{staticStyle:{width:"100%",padding:"20rpx 0"}},[n("v-uni-view",{staticClass:"upload_image"},[e.goodsIcon?n("v-uni-image",{staticStyle:{width:"180rpx",height:"180rpx"},attrs:{src:e.goodsIcon}}):n("fa-icon",{staticStyle:{height:"180rpx","line-height":"180rpx"},attrs:{type:"plus-square-o",size:"40",color:"#426ab3"}})],1),n("v-uni-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{name:"goodsIcon",value:e.goodsIcon}})],1)],1),n("v-uni-view",{staticClass:"frist"},[n("v-uni-view",{staticClass:"notice_text"},[e._v("基本信息")]),n("v-uni-view",{staticClass:"input_item"},[n("v-uni-view",{staticClass:"left_item"},[e._v("名称"),n("v-uni-text",{staticStyle:{color:"#aa2116","margin-left":"4rpx"}},[e._v("*")])],1),n("v-uni-view",{staticClass:"right_input1"},[n("v-uni-input",{attrs:{placeholder:"产品名称",name:"goodsName",value:e.goodsName,disabled:"true"}})],1)],1),n("v-uni-navigator",{staticClass:"input_item2",attrs:{"hover-class":"none",url:"/pages/manage/category/category?type=choose"}},[n("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[n("v-uni-view",{staticClass:"left_item"},[e._v("类别")]),n("v-uni-view",{staticClass:"right_input1"},[n("v-uni-input",{attrs:{placeholder:"产品类别",name:"goodsClass",value:e.category.class_text,disabled:"true"}})],1)],1),n("v-uni-view",[n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1),n("v-uni-view",{staticClass:"input_item"},[n("v-uni-view",{staticClass:"left_item"},[e._v("进价")]),n("v-uni-view",{staticClass:"right_input1"},[n("v-uni-input",{attrs:{placeholder:"产品进价",name:"costPrice",type:"digit",value:e.costPrice,disabled:"true"}})],1)],1),n("v-uni-view",{staticClass:"input_item"},[n("v-uni-view",{staticClass:"left_item"},[e._v("售价")]),n("v-uni-view",{staticClass:"right_input1"},[n("v-uni-input",{attrs:{placeholder:"产品售价",name:"retailPrice",type:"digit",value:e.retailPrice,disabled:"true"}})],1)],1),n("v-uni-view",{staticClass:"input_item"},[n("v-uni-view",{staticClass:"left_item"},[e._v("包装含量")]),n("v-uni-view",{staticClass:"right_input1"},[n("v-uni-input",{attrs:{placeholder:"包装含量",name:"packageContent",value:e.packageContent,disabled:"true"}})],1)],1),n("v-uni-view",{staticClass:"input_item"},[n("v-uni-view",{staticClass:"left_item"},[e._v("包装单位")]),n("v-uni-view",{staticClass:"right_input1"},[n("v-uni-input",{attrs:{placeholder:"包装单位",name:"packingUnit",value:e.packingUnit,disabled:"true"}})],1)],1)],1),n("v-uni-view",{staticClass:"frist",staticStyle:{"margin-bottom":"30rpx"}},[e.models?n("v-uni-navigator",{staticClass:"input_item2",staticStyle:{"line-height":"70rpx"},attrs:{"hover-class":"none",url:"/pages/manage/goods_add_MoreG/G_More/G_More"}},[n("v-uni-view",{staticClass:"display_flex"},[n("v-uni-view",{staticClass:"input_item",staticStyle:{width:"100%"}},[n("v-uni-view",{staticClass:"left_item"},[e._v("初始库存")]),n("v-uni-input",{attrs:{placeholder:"初始库存",type:"digit",name:"reserve",disabled:"true"},model:{value:e.reserve,callback:function(t){e.reserve=t},expression:"reserve"}})],1)],1),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1):n("v-uni-view",{staticStyle:{"line-height":"70rpx"}},[n("v-uni-view",{staticClass:"display_flex_bet"},[n("v-uni-view",{staticClass:"input_item",staticStyle:{width:"100%"}},[n("v-uni-view",{staticClass:"left_item"},[e._v("初始库存")]),n("v-uni-input",{attrs:{placeholder:"初始库存",type:"digit",name:"reserve"},model:{value:e.reserve,callback:function(t){e.reserve=t},expression:"reserve"}})],1)],1)],1),n("v-uni-view",{staticClass:"input_item"},[n("v-uni-view",{staticClass:"left_item"},[e._v("预警库存")]),n("v-uni-view",{staticClass:"right_input1"},[n("v-uni-input",{attrs:{placeholder:"预警库存",name:"warning_num",type:"digit",value:e.warning_num}})],1)],1),n("v-uni-navigator",{staticClass:"input_item2",attrs:{"hover-class":"none",url:"/pages/manage/warehouse/warehouse?type=choose"}},[n("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[n("v-uni-view",{staticClass:"left_item"},[e._v("仓库")]),n("v-uni-view",{staticClass:"right_input1"},[n("v-uni-input",{attrs:{placeholder:"选择仓库",disabled:"true"},model:{value:e.stock_name,callback:function(t){e.stock_name=t},expression:"stock_name"}})],1)],1),n("v-uni-view",[n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1)],1)],1),n("v-uni-view",{staticClass:"display_flex_bet"},[n("v-uni-button",{staticClass:"submit_button",attrs:{formType:"submit"}},[e._v(e._s(e.text_desc))]),n("v-uni-button",{staticClass:"reset_button",attrs:{formType:"reset"}},[e._v("重置")])],1)],1)],1)},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"72dd":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-collapse"},[e._t("default")],2)},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"7c20":function(e,t,n){"use strict";n.r(t);var i=n("ce70"),o=n("f9c7");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("f12f");var r=n("f0c5"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"07b66df4",null);t["default"]=s.exports},"7fd5":function(e,t,n){"use strict";(function(t){var i=n("288e");n("6b54"),n("7514");var o=i(n("5d73"));n("c5f6");var a=i(n("795b")),r=i(n("9546"));e.exports={enterAddGoodNum:function(e){var n=this;return new a.default(function(i,a){for(var s=function(a){var s=0,l=r.default.Query("Goods");l.get(e[a].objectId).then(function(u){var c=u;if(e[a].selectd_model){var d=!0,f=!1,v=void 0;try{for(var g,h=(0,o.default)(e[a].selected_model);!(d=(g=h.next()).done);d=!0){var m=g.value,p=!0,b=!1,_=void 0;try{for(var y,w=(0,o.default)(c.models);!(p=(y=w.next()).done);p=!0){var x=y.value;x.id==m.id&&(x.reserve=Number(x.reserve)+Number(m.num)),delete x.num}}catch(k){b=!0,_=k}finally{try{p||null==w.return||w.return()}finally{if(b)throw _}}}}catch(k){f=!0,v=k}finally{try{d||null==h.return||h.return()}finally{if(f)throw v}}s=Number(c.reserve)+Number(e[a].num),l.set("models",c.models)}else s=Number(c.reserve)+Number(e[a].num);l.set("reserve",s),l.set("id",e[a].objectId),l.save().then(function(o){if(e[a].header){var s=r.default.Query("Goods");s.equalTo("header","==",e[a].header.objectId),s.equalTo("order","==",1),s.statTo("sum","reserve"),s.find().then(function(o){t.log("dasds",o);var s=o[0]._sumReserve,l=r.default.Query("Goods");l.set("reserve",s),l.set("id",e[a].header.objectId),l.save().then(function(t){n.modifyStockType(e[a].header.objectId),a==e.length-1&&i(!0)})})}else n.modifyStockType(e[a].objectId),a==e.length-1&&i(!0)}).catch(function(e){t.log(e)})})},l=0;l<e.length;l++)s(l)})},outRedGoodNum:function(e){var n=this;return new a.default(function(i,a){for(var s=function(a){var s=0,l=r.default.Query("Goods");l.get(e[a].objectId).then(function(u){var c=u;if(e[a].selectd_model){var d=!0,f=!1,v=void 0;try{for(var g,h=(0,o.default)(e[a].selected_model);!(d=(g=h.next()).done);d=!0){var m=g.value,p=!0,b=!1,_=void 0;try{for(var y,w=(0,o.default)(c.models);!(p=(y=w.next()).done);p=!0){var x=y.value;s+=Number(x.reserve),x.id==m.id&&(x.reserve=Number(x.reserve)-Number(m.num)),delete x.num}}catch(k){b=!0,_=k}finally{try{p||null==w.return||w.return()}finally{if(b)throw _}}}}catch(k){f=!0,v=k}finally{try{d||null==h.return||h.return()}finally{if(f)throw v}}s=Number(c.reserve)-Number(e[a].num),l.set("models",c.models)}else s=Number(c.reserve)-Number(e[a].num);l.set("reserve",s),l.set("id",e[a].objectId),l.save().then(function(t){if(e[a].header){var o=r.default.Query("Goods");o.equalTo("header","==",e[a].header.objectId),o.equalTo("order","==",1),o.statTo("sum","reserve"),o.find().then(function(t){var o=t[0]._sumReserve,s=r.default.Query("Goods");s.set("reserve",o),s.set("id",e[a].header.objectId),s.save().then(function(t){n.modifyStockType(e[a].header.objectId),a==e.length-1&&i(!0)})})}else n.modifyStockType(e[a].objectId),a==e.length-1&&i(!0)}).catch(function(e){t.log(e)})})},l=0;l<e.length;l++)s(l)})},enterAddGoodNumNew:function(e){var n=this;return new a.default(function(i,a){for(var s=uni.getStorageSync("warehouse")?uni.getStorageSync("warehouse")[0].stock:"",l=uni.getStorageSync("uid"),u=function(a){var u=0,c=r.default.Query("Goods");c.get(e[a].objectId).then(function(c){if(e[a].selectd_model){var d=!0,f=!1,v=void 0;try{for(var g,h=(0,o.default)(e[a].selected_model);!(d=(g=h.next()).done);d=!0){var m=g.value,p=!0,b=!1,_=void 0;try{for(var y,w=(0,o.default)(e[a].models);!(p=(y=w.next()).done);p=!0){var x=y.value;x.id==m.id&&(x.reserve=Number(x.reserve)+Number(m.num)),delete x.num}}catch(S){b=!0,_=S}finally{try{p||null==w.return||w.return()}finally{if(b)throw _}}}}catch(S){f=!0,v=S}finally{try{d||null==h.return||h.return()}finally{if(f)throw v}}u=Number(e[a].reserve)+Number(e[a].num),c.set("models",e[a].models)}else u=Number(e[a].reserve)+Number(e[a].num);c.set("reserve",u),c.save();var k=r.default.Query("Goods");k.equalTo("userId","==",l),k.equalTo("header","==",e[a].objectId),k.equalTo("stocks","==",s.objectId),k.find().then(function(o){if(0==o.length)n.upload_good_withNoCan(e[a],s,Number(e[a].num)).then(function(n){t.log(n),a==e.length-1&&i(!0)});else{var l=r.default.Query("Goods");l.set("id",o[0].objectId),l.set("reserve",o[0].reserve+Number(e[a].num)),l.save().then(function(n){t.log(n),a==e.length-1&&i(!0)}).catch(function(e){t.log(e)})}})}).catch(function(e){t.log(e)})},c=0;c<e.length;c++)u(c)})},outRedGoodNumNew:function(e){var n=this;return new a.default(function(i,a){for(var s=uni.getStorageSync("warehouse")?uni.getStorageSync("warehouse")[0].stock:"",l=uni.getStorageSync("uid"),u=function(a){var u=0,c=r.default.Query("Goods");c.get(e[a].objectId).then(function(c){if(e[a].selectd_model){var d=!0,f=!1,v=void 0;try{for(var g,h=(0,o.default)(e[a].selected_model);!(d=(g=h.next()).done);d=!0){var m=g.value,p=!0,b=!1,_=void 0;try{for(var y,w=(0,o.default)(e[a].models);!(p=(y=w.next()).done);p=!0){var x=y.value;x.id==m.id&&(x.reserve=Number(x.reserve)-Number(m.num)),delete x.num}}catch(S){b=!0,_=S}finally{try{p||null==w.return||w.return()}finally{if(b)throw _}}}}catch(S){f=!0,v=S}finally{try{d||null==h.return||h.return()}finally{if(f)throw v}}u=Number(e[a].reserve)-Number(e[a].num),c.set("models",e[a].models)}else u=Number(e[a].reserve)-Number(e[a].num);c.set("reserve",u),c.save();var k=r.default.Query("Goods");k.equalTo("userId","==",l),k.equalTo("header","==",e[a].objectId),k.equalTo("stocks","==",s.objectId),k.find().then(function(o){if(0==o.length)n.upload_good_withNoCan(e[a],s,Number(e[a].num),"out").then(function(n){t.log(n),a==e.length-1&&i(!0)});else{var l=r.default.Query("Goods");l.set("id",o[0].objectId),l.set("reserve",o[0].reserve-Number(e[a].num)),l.save().then(function(n){t.log(n),a==e.length-1&&i(!0)}).catch(function(e){t.log(e)})}})}).catch(function(e){t.log(e)})},c=0;c<e.length;c++)u(c)})},upload_good_withNoCan:function(e,n,i,s){return new a.default(function(a,l){t.log(e);var u=uni.getStorageSync("uid"),c=r.default.Pointer("_User"),d=c.set(u),f=r.default.Pointer("stocks"),v=f.set(n.objectId),g=r.default.Pointer("Goods"),h="";h=e.header?g.set(e.header.objectId):g.set(e.objectId);var m=r.default.Query("Goods");if(m.set("goodsName",e.goodsName),m.set("goodsIcon",e.goodsIcon),"out"==s){if(m.set("reserve",0-Number(i)),e.goodsId&&e.goodsId.models){var p=!0,b=!1,_=void 0;try{for(var y,w=(0,o.default)(e.goodsId.models);!(p=(y=w.next()).done);p=!0){var x=y.value;x.reserve=0-Number(x.num)}}catch(O){b=!0,_=O}finally{try{p||null==w.return||w.return()}finally{if(b)throw _}}m.set("models",e.goodsId.models)}}else if("allocation"==s){if(m.set("reserve",Number(i)),e.selected_model&&e.selected_model.length>0){var k=!0,S=!1,C=void 0;try{for(var N,I=(0,o.default)(e.selected_model);!(k=(N=I.next()).done);k=!0){var j=N.value;j.reserve=Number(j.num),delete j.num}}catch(O){S=!0,C=O}finally{try{k||null==I.return||I.return()}finally{if(S)throw C}}m.set("models",e.selected_model)}}else if(m.set("reserve",Number(i)),e.goodsId&&e.goodsId.models){var P=!0,T=!1,G=void 0;try{for(var z,Q=(0,o.default)(e.goodsId.models);!(P=(z=Q.next()).done);P=!0){var M=z.value;M.reserve=Number(M.num)}}catch(O){T=!0,G=O}finally{try{P||null==Q.return||Q.return()}finally{if(T)throw G}}m.set("models",e.goodsId.models)}m.set("stocks",v),m.set("userId",d),m.set("header",h),m.set("costPrice",""+e.costPrice),m.set("retailPrice",""+e.retailPrice),m.set("order",1),m.save().then(function(e){t.log(e),a([!0,e])}).catch(function(e){t.log(e)})})},handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(e,n,i){var o=r.default.Pointer("_User"),a=o.set(uni.getStorageSync("uid"));if(-2==n){var s=r.default.Pointer("Goods"),l=s.set(i),u=r.default.Query("logs");u.equalTo("goodId","==",i),u.find().then(function(i){if(0==i.length){var o=r.default.Query("logs");o.set("parent",a),o.set("goodId",l),o.set("log",e),o.set("type",n),o.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})}})}else{var c=r.default.Query("logs");c.set("parent",a),c.set("log",e),c.set("detail_id",i),c.set("type",n),c.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})}},modifyStockType:function(e){var n=this,i=r.default.Query("Goods");i.get(e).then(function(e){var t=e;""==t.warning_num&&""==t.max_num?e.set("stocktype",1):void 0==t.warning_num&&void 0==t.max_num?e.set("stocktype",1):null==t.warning_num&&null==t.max_num?e.set("stocktype",1):(""!=t.warning_num&&(t.warning_num>=t.reserve?(e.set("stocktype",0),n.log(t.goodsName+"已经超过设置的最小库存值"+t.warning_num,-2,t.objectId)):t.warning_num<t.reserve&&t.reserve<t.max_num&&e.set("stocktype",1)),""!=t.max_num&&(t.max_num<=t.reserve?(e.set("stocktype",2),n.log(t.goodsName+"已经超过设置的最大库存值"+t.max_num,-2,t.objectId)):t.warning_num<t.reserve&&t.reserve<t.max_num&&e.set("stocktype",1))),e.save()}).catch(function(e){t.log(e)})},record_shopOut:function(e,n){t.log(e,n);var i=r.default.Query("shops");i.set("id",e),i.set("have_out",n),i.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})},record_staffOut:function(e){if(t.log(e,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var n=r.default.Query("_User");n.set("id",uni.getStorageSync("user").objectId),n.set("have_out",Number(e)+uni.getStorageSync("user").have_out),n.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})}},get_allCost:function(){var e=uni.getStorageSync("uid");t.log(e);var n=r.default.Query("Goods");n.equalTo("userId","==",e),n.find().then(function(e){t.log(e);var n=!0,i=!1,a=void 0;try{for(var r,s=(0,o.default)(e);!(n=(r=s.next()).done);n=!0){var l=r.value;t.log(l),Number(l.costPrice)*l.reserve,l.reserve}}catch(u){i=!0,a=u}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}})},getDay:function(e,t){var n=this,i=new Date,o=i.getTime()+864e5*e;i.setTime(o);var a=i.getFullYear(),r=i.getMonth(),s=i.getDate();return r=n.handleMonth(r+1),s=n.handleMonth(s),t?a+"-"+r+"-"+s+" 00:00:00":a+"-"+r+"-"+s},js_date_time:function(e,t){var n=new Date(e),i=n.getFullYear(),o=n.getMonth()+1;o=o<10?"0"+o:o;var a=n.getDate();a=a<10?"0"+a:a;var r=n.getHours();r=r<10?"0"+r:r;var s=n.getMinutes(),l=n.getSeconds();return s=s<10?"0"+s:s,l=l<10?"0"+l:l,t?i+"-"+o+"-"+a+" "+r+":"+s:i+"-"+o+"-"+a},handleMonth:function(e){var t=e;return 1==e.toString().length&&(t="0"+e),t}}}).call(this,n("5a52")["default"])},"8dce":function(e,t,n){"use strict";n.r(t);var i=n("5d42"),o=n("30a6");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("d07c");var r=n("f0c5"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"0703f604",null);t["default"]=s.exports},a4db:function(e,t,n){var i=n("0f7e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("74167560",i,!0,{sourceMap:!1,shadowMode:!1})},ade9:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"[data-v-0703f604]::-webkit-scrollbar{width:2px;height:6px;background-color:initial}.uni-input-placeholder[data-v-0703f604]{font-size:12px}uni-input[data-v-0703f604]{font-size:12px}\n\n/*定义滑块 内阴影+圆角*/[data-v-0703f604]::-webkit-scrollbar-thumb{border-radius:10px;background-color:#999}.page[data-v-0703f604]{font-size:%?28?%;background:#fafafa;height:100vh;overflow:scroll}.frist[data-v-0703f604]{padding:0 %?20?%;background:#fff;margin-top:%?30?%}.input_item[data-v-0703f604]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:%?80?%;height:%?80?%;border-bottom:%?1?% solid#f6f5ec}.input_item2[data-v-0703f604]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;line-height:%?80?%;height:%?80?%;border-bottom:%?1?% solid#f6f5ec}.left_item[data-v-0703f604]{color:#333;width:%?150?%}.right_input1[data-v-0703f604]{font-size:12px}.submit_button[data-v-0703f604]{width:50%;background:#426ab3;border-radius:%?40?%;margin:%?30?%;height:%?88?%;line-height:%?88?%;color:#fff;font-size:%?30?%}.upload_image[data-v-0703f604]{width:%?180?%;height:%?180?%;line-height:%?220?%;text-align:center;border:%?1?% solid#999;border-radius:%?8?%}.notice_text[data-v-0703f604]{padding-top:%?20?%;font-size:%?32?%;color:#3d3d3d;font-weight:700}.reset_button[data-v-0703f604]{font-size:%?30?%;width:50%;background:#999;border-radius:%?40?%;margin:%?30?%;height:%?88?%;line-height:%?88?%;color:#fff}",""])},b4ab:function(e,t,n){"use strict";n.r(t);var i=n("72dd"),o=n("35fc");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("d6b8");var r=n("f0c5"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"7cac7d33",null);t["default"]=s.exports},ce70:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{class:["uni-collapse-cell",{"uni-collapse-cell--disabled":e.disabled,"uni-collapse-cell--open":e.isOpen}],attrs:{"hover-class":e.disabled?"":"uni-collapse-cell--hover"}},[n("v-uni-view",{staticClass:"uni-collapse-cell__title",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e.thumb?n("v-uni-view",{staticClass:"uni-collapse-cell__title-extra"},[n("v-uni-image",{staticClass:"uni-collapse-cell__title-img",attrs:{src:e.thumb}})],1):e._e(),n("v-uni-view",{staticClass:"uni-collapse-cell__title-inner"},[n("v-uni-view",{staticClass:"uni-collapse-cell__title-text"},[e._v(e._s(e.title))])],1),n("v-uni-view",{staticClass:"uni-collapse-cell__title-arrow",class:{"uni-active":e.isOpen,"uni-collapse-cell--animation":!0===e.showAnimation}},[n("uni-icon",{attrs:{color:"#bbb",size:"20",type:"arrowdown"}})],1)],1),n("v-uni-view",{staticClass:"uni-collapse-cell__content",class:{"uni-collapse-cell--animation":!0===e.showAnimation},style:{height:e.isOpen?"auto":"0px"}},[n("v-uni-view",{attrs:{id:e.elId}},[e._t("default")],2)],1)],1)},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},d07c:function(e,t,n){"use strict";var i=n("3ba6"),o=n.n(i);o.a},d5e2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ac6a");var i={name:"UniCollapse",props:{accordion:{type:Boolean,default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var e=[];this.childrens.forEach(function(t,n){t.isOpen&&e.push(t.nameSync)}),this.$emit("change",e)}}};t.default=i},d6b8:function(e,t,n){"use strict";var i=n("a4db"),o=n.n(i);o.a},de3d:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'.uni-collapse-cell[data-v-07b66df4]{position:relative}.uni-collapse-cell--hover[data-v-07b66df4]{background-color:#f1f1f1}.uni-collapse-cell--open[data-v-07b66df4]{background-color:#f1f1f1}.uni-collapse-cell--disabled[data-v-07b66df4]{opacity:.3}.uni-collapse-cell--animation[data-v-07b66df4]{-webkit-transition:all .3s;transition:all .3s}.uni-collapse-cell[data-v-07b66df4]:after{position:absolute;z-index:3;right:0;bottom:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-collapse-cell__title[data-v-07b66df4]{padding:%?12?% %?30?%;width:100%;box-sizing:border-box;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-collapse-cell__title-extra[data-v-07b66df4]{margin-right:%?18?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-collapse-cell__title-img[data-v-07b66df4]{height:%?52?%;width:%?52?%}.uni-collapse-cell__title-arrow[data-v-07b66df4]{width:20px;height:20px;-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:center center;transform-origin:center center}.uni-collapse-cell__title-arrow.uni-active[data-v-07b66df4]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.uni-collapse-cell__title-inner[data-v-07b66df4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-collapse-cell__title-text[data-v-07b66df4]{font-size:%?24?%;text-overflow:ellipsis;white-space:nowrap;color:inherit;line-height:1.5;overflow:hidden}.uni-collapse-cell__content[data-v-07b66df4]{position:relative;width:100%;overflow:hidden;background:#fff}.uni-collapse-cell__content uni-view[data-v-07b66df4]{font-size:%?28?%}',""])},efe7:function(e,t,n){"use strict";var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ac6a"),n("6b54"),n("c5f6");var o=i(n("3628")),a={name:"UniCollapseItem",components:{uniIcon:o.default},props:{title:{type:String,default:""},name:{type:[Number,String],default:0},disabled:{type:Boolean,default:!1},showAnimation:{type:Boolean,default:!1},open:{type:Boolean,default:!1},thumb:{type:String,default:""}},data:function(){var e=this.__call_hook?"uni_collapse_item":"Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{isOpen:!1,height:"auto",elId:e}},watch:{open:function(e){this.isOpen=e}},inject:["collapse"],created:function(){if(this.isOpen=this.open,this.nameSync=this.name?this.name:this.collapse.childrens.length,this.collapse.childrens.push(this),this.collapse.accordion&&this.isOpen){var e=this.collapse.childrens[this.collapse.childrens.length-2];e&&(this.collapse.childrens[this.collapse.childrens.length-2].isOpen=!1)}},mounted:function(){this.getSize()},methods:{getSize:function(){var e=this;this.showAnimation&&uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function(t){e.height=t[0].height+"px"})},onClick:function(){var e=this;this.disabled||(this.collapse.accordion&&this.collapse.childrens.forEach(function(t){t!==e&&(t.isOpen=!1)}),this.isOpen=!this.isOpen,this.collapse.onChange&&this.collapse.onChange())}}};t.default=a},f12f:function(e,t,n){"use strict";var i=n("5b26"),o=n.n(i);o.a},f766:function(e,t,n){"use strict";(function(e){var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("7514"),n("c5f6");var o,a,r=i(n("5d73")),s=i(n("9546")),l=i(n("7fd5")),u=i(n("4d52")),c=i(n("b4ab")),d=i(n("7c20")),f={components:{uniCollapse:c.default,uniCollapseItem:d.default,faIcon:u.default},data:function(){return{text_desc:"保存",goodsName:"",costPrice:"",retailPrice:"",packageContent:"",packingUnit:"",warning_num:"",producer:"",regNumber:"",position:"",product_info:"",productCode:"",category:"",reserve:0,goodsIcon:"",stock_name:"",stocks:"",producttime:"",nousetime:"",product_state:!1,models:""}},onLoad:function(e){o=this,a=uni.getStorageSync("uid"),uni.removeStorageSync("category"),uni.removeStorageSync("is_add"),e.id&&o.scan_by_id(e.id)},onShow:function(){if(uni.getStorageSync("now_product")){uni.setNavigationBarTitle({title:"编辑产品"});var t=uni.getStorageSync("now_product");if(o.text_desc="修改",o.goodsName=t.goodsName,o.costPrice=t.costPrice,o.retailPrice=t.retailPrice,o.packageContent=t.packageContent,o.packingUnit=t.packingUnit,o.warning_num=t.warning_num,o.producer=t.producer,o.regNumber=t.regNumber,o.position=t.position,o.product_info=t.product_info,o.productCode=t.productCode,o.category=t.second_class?t.second_class:"",o.reserve=t.reserve,o.goodsIcon=t.goodsIcon,o.product_state=t.product_state,t.models){var n;o.models=t.models,o.reserve=0,uni.getStorageSync("now_model")?n=uni.getStorageSync("now_model"):(n=t.models,uni.setStorageSync("now_model",n));var i=!0,a=!1,l=void 0;try{for(var u,c=(0,r.default)(n);!(i=(u=c.next()).done);i=!0){var d=u.value;o.reserve+=Number(d.reserve)}}catch(m){a=!0,l=m}finally{try{i||null==c.return||c.return()}finally{if(a)throw l}}}if(t.goodsClass){var f=s.default.Pointer("class_user");f.set(t.goodsClass.objectId)}if(t.second_class){var v=s.default.Pointer("second_class");v.set(t.second_class.objectId)}}if(uni.getStorageSync("warehouse")&&(o.stocks=uni.getStorageSync("warehouse")[0].stock,o.stock_name=uni.getStorageSync("warehouse")[0].stock.stock_name),uni.getStorageSync("category")){o.category=uni.getStorageSync("category");var g=s.default.Pointer("class_user");g.set(o.category.parent.objectId);var h=s.default.Pointer("second_class");h.set(o.category.objectId),e.log(o.category.parent.objectId,o.category.objectId)}},onUnload:function(){"","","",l.default.handleData()},methods:{formSubmit:function(t){e.log(t.detail.value);var n=t.detail.value;""==n.goodsName?uni.showToast({title:"请输入产品名称",icon:"none"}):o.upload_good(n)},upload_good:function(e){if(uni.showLoading({title:"上传中..."}),uni.getStorageSync("now_product"))o.add_good(e,"edit");else{var t=s.default.Query("Goods");t.equalTo("userId","==",a),t.equalTo("goodsName","==",e.goodsName),t.find().then(function(t){t.length>=1?uni.showToast({title:"你的库存中已存在此产品",icon:"none"}):o.add_good(e,"add")})}},add_good:function(t,n){var i=s.default.Pointer("_User"),r=i.set(a),u=o.stocks.objectId?o.stocks.objectId:"",c=s.default.Pointer("stocks"),d=c.set(u),f=s.default.Query("Goods");f.set("stocks",d),f.set("reserve",Number(t.reserve)),uni.getStorageSync("now_model")&&f.set("models",uni.getStorageSync("now_model")),f.set("warning_num",Number(t.warning_num)),f.set("stocktype",Number(t.warning_num)>=Number(o.reserve)?0:1),f.set("userId",r),f.set("id",uni.getStorageSync("now_product")?uni.getStorageSync("now_product").objectId:""),f.save().then(function(e){uni.hideLoading(),l.default.log(uni.getStorageSync("user").nickName+"修改了产品'"+t.goodsName+"'",5,uni.getStorageSync("now_product").objectId),uni.navigateBack({delta:2}),setTimeout(function(){uni.showToast({title:"修改成功",duration:1e3})},1e3),uni.setStorageSync("is_add",!0)}).catch(function(t){e.log(t)})},handledata:function(){o.goodsName="",o.costPrice="",o.retailPrice="",o.packageContent="",o.packingUnit="",o.warning_num="",o.producer="",o.regNumber="",o.position="",o.product_info="",o.productCode="",o.category="",o.reserve=0,o.goodsIcon="",o.stocks="",o.stock_name="",o.producttime="",o.nousetime=""}}};t.default=f}).call(this,n("5a52")["default"])},f9c7:function(e,t,n){"use strict";n.r(t);var i=n("efe7"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a}}]);