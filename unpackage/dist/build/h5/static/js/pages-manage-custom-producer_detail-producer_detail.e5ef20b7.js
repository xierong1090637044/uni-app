(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-custom-producer_detail-producer_detail"],{"0a39":function(e,t,o){"use strict";o.r(t);var n=o("f334"),i=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t["default"]=i.a},"2a87":function(e,t,o){t=e.exports=o("2350")(!1),t.push([e.i,"uni-page-body[data-v-1f2dff64]{color:#3d3d3d}.modal_confrimbutton[data-v-1f2dff64]{background:#426ab3;color:#fff;width:60%;padding:%?20?% 0;text-align:center;margin-left:20%;border-radius:%?8?%;margin-top:%?30?%}.list_item[data-v-1f2dff64]{padding:%?20?% %?30?%;background:#fff}.left_desc[data-v-1f2dff64]{color:#999}.border_bottom[data-v-1f2dff64]{border-bottom:%?1?% solid#DDDDDD}.getmoney_button[data-v-1f2dff64]{width:100%;background:#426ab3;color:#fff;padding:%?20?% 0;text-align:center;position:fixed;bottom:0;left:0}",""])},3992:function(e,t,o){"use strict";var n=o("51e5"),i=o.n(n);i.a},"3d30":function(e,t,o){t=e.exports=o("2350")(!1),t.push([e.i,'.uni-mask[data-v-3cff7f00]{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-3cff7f00]{position:fixed;z-index:999;background-color:#fff}.uni-popup-middle[data-v-3cff7f00]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.uni-popup-middle.uni-popup-insert[data-v-3cff7f00]{min-width:%?380?%;min-height:%?380?%;max-width:100%;max-height:80%;-webkit-transform:translate(-50%,-65%);-ms-transform:translate(-50%,-65%);transform:translate(-50%,-65%);background:none;-webkit-box-shadow:none;box-shadow:none}.uni-popup-middle.uni-popup-fixed[data-v-3cff7f00]{border-radius:%?10?%;padding:%?30?%}.uni-close-bottom[data-v-3cff7f00],.uni-close-right[data-v-3cff7f00]{position:absolute;bottom:%?-180?%;text-align:center;border-radius:50%;color:#f5f5f5;font-size:%?60?%;font-weight:700;opacity:.8;z-index:-1}.uni-close-bottom[data-v-3cff7f00]{margin:auto;left:0;right:0}.uni-close-right[data-v-3cff7f00]{right:%?-60?%;top:%?-80?%}.uni-close-bottom[data-v-3cff7f00]:after{content:"";position:absolute;width:0;border:1px #f5f5f5 solid;top:%?-200?%;bottom:%?56?%;left:50%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);opacity:.8}.uni-popup-bottom[data-v-3cff7f00],.uni-popup-top[data-v-3cff7f00]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-popup-top[data-v-3cff7f00]{top:0;left:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottom[data-v-3cff7f00]{left:0;bottom:0;width:100%;min-height:%?100?%;line-height:%?100?%;text-align:center}',""])},"4e00":function(e,t,o){"use strict";o.r(t);var n=o("6ec4"),i=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t["default"]=i.a},"51e5":function(e,t,o){var n=o("3d30");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=o("4f06").default;i("d0380ec0",n,!0,{sourceMap:!1,shadowMode:!1})},"524a":function(e,t,o){"use strict";o.r(t);var n=o("c636"),i=o("0a39");for(var a in i)"default"!==a&&function(e){o.d(t,e,function(){return i[e]})}(a);o("f68d");var r=o("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"11ff4219",null);t["default"]=s.exports},"5fbc":function(e,t,o){"use strict";var n=o("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o("c5f6");var i=n(o("f499"));o("7514");var a=n(o("795b")),r={get_producerList:function(e,t){return new a.default(function(o,n){var a=JSON.parse(localStorage.getItem("bmob")).objectId,r=Bmob.Query("producers");r.order("num"),r.equalTo("parent","==",a),r.equalTo("disabled","==",e),t&&r.equalTo("name","==",{$regex:t+".*"}),r.find().then(function(e){localStorage.setItem("shops",(0,i.default)(e)),o(e)})})},add_producer:function(e){console.log(e);var t=JSON.parse(localStorage.getItem("bmob")).objectId;return new a.default(function(o,n){var i=Bmob.Pointer("_User"),a=i.set(t);if(e.objectId){var r=Bmob.Query("producers");r.set("producer_name",e.producer_name),r.set("debt",Number(e.debt)),r.set("producer_address",e.producer_address),r.set("producer_phone",e.producer_phone),r.set("parent",a),r.set("disabled",!e.disabled),r.set("id",e.objectId),r.save().then(function(e){o(e)}).catch(function(e){console.log(e)})}else{var s=Bmob.Query("producers");s.equalTo("parent","==",t),s.equalTo("name","==",e.producer_name),s.find().then(function(t){if(console.log(t),0==t.length){var n=Bmob.Query("producers");n.set("producer_name",e.producer_name),n.set("debt",Number(e.debt)),n.set("producer_address",e.producer_address),n.set("producer_phone",e.producer_phone),n.set("have_out",0),n.set("disabled",!e.disabled),n.set("parent",a),n.save().then(function(e){o(e)}).catch(function(e){console.log(e)})}else o(!1)})}})},delete_producer:function(e){return new a.default(function(t,o){var n=Bmob.Query("producers");n.destroy(e).then(function(e){t(e)}).catch(function(e){console.log(e)})})},producer_detail:function(e){return new a.default(function(t,o){var n=Bmob.Query("producers");n.get(e).then(function(e){t(e)}).catch(function(e){console.log(e)})})},get_moneyList:function(e){return new a.default(function(t,o){var n=Bmob.Query("debt_history");n.equalTo("producer","==",e),n.include("operater"),n.find().then(function(e){console.log(e),t(e)})})}};t.default=r},"6ec4":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"UniPopup",props:{show:{type:Boolean,default:!1},position:{type:String,default:"middle"},mode:{type:String,default:"insert"},msg:{type:String,default:""},h5Top:{type:Boolean,default:!1},buttonMode:{type:String,default:"bottom"}},data:function(){return{offsetTop:0}},watch:{h5Top:function(e){this.offsetTop=e?44:0}},created:function(){var e=0;e=this.h5Top?0:44,this.offsetTop=e},methods:{hide:function(){"insert"===this.mode&&"middle"===this.position||this.$emit("hidePopup")},closeMask:function(){"insert"===this.mode&&this.$emit("hidePopup")},moveHandle:function(){}}};t.default=n},"80dc":function(e,t,o){"use strict";o.r(t);var n=o("b3a1"),i=o("9ba9");for(var a in i)"default"!==a&&function(e){o.d(t,e,function(){return i[e]})}(a);o("e771");var r=o("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"1f2dff64",null);t["default"]=s.exports},"98e1":function(e,t,o){var n=o("bda5");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=o("4f06").default;i("915fc098",n,!0,{sourceMap:!1,shadowMode:!1})},"9ba9":function(e,t,o){"use strict";o.r(t);var n=o("eec5"),i=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t["default"]=i.a},b3a1:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",[e.loading?o("loading"):o("v-uni-view",[o("v-uni-view",{staticClass:"display_flex_bet list_item border_bottom"},[o("v-uni-view",{staticClass:"left_desc"},[e._v("供货商昵称")]),o("v-uni-view",[e._v(e._s(e.producer.producer_name))])],1),o("v-uni-view",{staticClass:"display_flex_bet list_item border_bottom"},[o("v-uni-view",{staticClass:"left_desc"},[e._v("联系电话")]),e.producer.producer_phone?o("v-uni-view",[e._v(e._s(e.producer.producer_phone))]):o("v-uni-view",[e._v("未填写")])],1),o("v-uni-navigator",{staticClass:"display_flex_bet list_item border_bottom",attrs:{"hover-class":"none",url:"debt_history/debt_history?id="+e.producer.objectId+"&name="+e.producer.producer_name}},[o("v-uni-view",{staticClass:"left_desc"},[e._v("欠供应商款")]),o("v-uni-view",{staticClass:"display_flex"},[o("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[e._v("￥"+e._s(e.producer.debt))]),o("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1),o("v-uni-view",{staticClass:"display_flex_bet list_item border_bottom"},[o("v-uni-view",{staticClass:"left_desc"},[e._v("建立时间")]),o("v-uni-view",[e._v(e._s(e.producer.createdAt))])],1),o("v-uni-navigator",{staticClass:"list_item display_flex_bet",staticStyle:{margin:"20rpx 0"},attrs:{"hover-class":"none",url:"history/history?id="+e.producer.objectId}},[o("v-uni-text",{staticClass:"left_desc"},[e._v("交易历史")]),o("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1),o("uni-popup",{attrs:{show:e.modal_show,position:"middle",mode:"fixed"},on:{hidePopup:function(t){t=e.$handleEvent(t),e.modal_show=!1}}},[o("v-uni-view",{staticStyle:{width:"500rpx"}},[o("v-uni-view",{staticClass:"display_flex"},[o("v-uni-view",{staticStyle:{width:"160rpx",color:"#999"}},[e._v("本次还款：")]),o("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入本次还款金额",type:"digit"},model:{value:e.modal_sk.sk_number,callback:function(t){e.$set(e.modal_sk,"sk_number",t)},expression:"modal_sk.sk_number"}})],1),o("v-uni-view",{staticClass:"display_flex"},[o("v-uni-view",{staticStyle:{width:"160rpx",color:"#999"}},[e._v("备注：")]),o("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入备注信息"},model:{value:e.modal_sk.beizhu,callback:function(t){e.$set(e.modal_sk,"beizhu",t)},expression:"modal_sk.beizhu"}})],1),o("v-uni-view",{staticClass:"modal_confrimbutton",on:{click:function(t){t=e.$handleEvent(t),e.confrim_sk(t)}}},[e._v("确定")])],1)],1),o("v-uni-view",{staticClass:"getmoney_button",on:{click:function(t){t=e.$handleEvent(t),e.modal_show=!0}}},[e._v("还款")])],1)],1)},i=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return i})},b91a:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",[o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"uni-mask",style:{top:e.offsetTop+"px"},on:{click:function(t){t=e.$handleEvent(t),e.hide(t)},touchmove:function(t){t.stopPropagation(),t.preventDefault(),t=e.$handleEvent(t),e.moveHandle(t)}}}),o("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"uni-popup",class:"uni-popup-"+e.position+" uni-popup-"+e.mode},[e._v(e._s(e.msg)),e._t("default"),"middle"===e.position&&"insert"===e.mode?o("v-uni-view",{staticClass:" uni-icon uni-icon-close",class:{"uni-close-bottom":"bottom"===e.buttonMode,"uni-close-right":"right"===e.buttonMode},on:{click:function(t){t=e.$handleEvent(t),e.closeMask(t)}}}):e._e()],2)],1)},i=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return i})},bda5:function(e,t,o){t=e.exports=o("2350")(!1),t.push([e.i,".Loading_view[data-v-11ff4219]{height:100vh;width:100%;text-align:center;background:#fff}.loading_image[data-v-11ff4219]{width:%?200?%;height:%?200?%;margin-top:50%}",""])},c636:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",{staticClass:"Loading_view"},[o("v-uni-image",{staticClass:"loading_image",attrs:{src:"/static/timg.gif"}}),o("v-uni-view",{staticStyle:{color:"#999","margin-top":"3%"}},[e._v("加载中...")])],1)},i=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return i})},c64b:function(e,t,o){var n=o("2a87");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=o("4f06").default;i("75e98806",n,!0,{sourceMap:!1,shadowMode:!1})},db37:function(e,t,o){"use strict";o.r(t);var n=o("b91a"),i=o("4e00");for(var a in i)"default"!==a&&function(e){o.d(t,e,function(){return i[e]})}(a);o("3992");var r=o("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"3cff7f00",null);t["default"]=s.exports},df06:function(e,t,o){"use strict";var n=o("288e");o("6b54"),o("87b3"),o("c5f6");var i=n(o("5d73"));o("7514"),e.exports={handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("now_product"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(e,t,o){var n=Bmob.Pointer("_User"),i=n.set(uni.getStorageSync("uid")),a=Bmob.Query("logs");a.set("parent",i),a.set("log",e),a.set("detail_id",o),a.set("type",t),a.save().then(function(e){console.log(e)}).catch(function(e){console.log(e)})},record_shopOut:function(e,t){console.log(e,t);var o=Bmob.Query("shops");o.set("id",e),o.set("have_out",t),o.save().then(function(e){console.log(e)}).catch(function(e){console.log(e)})},record_staffOut:function(e){if(console.log(e,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var t=Bmob.Query("staffs");t.set("id",uni.getStorageSync("user").objectId),t.set("have_out",e+uni.getStorageSync("user").have_out),t.save().then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},get_allCost:function(){var e=uni.getStorageSync("uid");console.log(e);var t=Bmob.Query("Goods");t.equalTo("userId","==",e),t.find().then(function(e){console.log(e);var t=!0,o=!1,n=void 0;try{for(var a,r=(0,i.default)(e);!(t=(a=r.next()).done);t=!0){var s=a.value;console.log(s),Number(s.costPrice)*s.reserve,s.reserve}}catch(u){o=!0,n=u}finally{try{t||null==r.return||r.return()}finally{if(o)throw n}}})},getDay:function(e,t){var o=this,n=new Date,i=n.getTime()+864e5*e;n.setTime(i);var a=n.getFullYear(),r=n.getMonth(),s=n.getDate();return r=o.handleMonth(r+1),s=o.handleMonth(s),t?a+"-"+r+"-"+s+" 00:00:00":a+"-"+r+"-"+s},handleMonth:function(e){var t=e;return 1==e.toString().length&&(t="0"+e),t}}},e771:function(e,t,o){"use strict";var n=o("c64b"),i=o.n(n);i.a},eec5:function(e,t,o){"use strict";var n=o("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o("c5f6");var i,a=n(o("5fbc")),r=n(o("df06")),s=n(o("0914")),u=n(o("db37")),c=n(o("524a")),d={components:{faIcon:s.default,loading:c.default,uniPopup:u.default},data:function(){return{loading:!0,modal_show:!1,producer:{},modal_sk:{sk_number:"",beizhu:""}}},onLoad:function(e){i=this,a.default.producer_detail(e.id).then(function(e){console.log(e),e.debt||(e.debt=0),i.producer=e,i.loading=!1})},methods:{confrim_sk:function(){console.log(i.modal_sk);var e=i.modal_sk.sk_number,t=i.modal_sk.beizhu,o=i.producer.objectId;if(null==e||0==e.length)uni.showToast({title:"请输入还款金额",icon:"none"});else{uni.showLoading({title:"加载中..."}),i.modal_show=!1;var n=Bmob.Query("producers");n.get(o).then(function(n){if(n.debt-Number(e)<0)uni.hideLoading(),uni.showToast({icon:"none",title:"还款金额超出"});else if(null==n.debt||0==n.debt)uni.hideLoading(),uni.showToast({icon:"none",title:"没有欠款"});else{n.set("debt",n.debt-Number(e)),n.save();var s=Bmob.Pointer("producers"),u=s.set(o),c=Bmob.Pointer("_User"),d=c.set(uni.getStorageSync("uid")),l=Bmob.Pointer("_User"),f=l.set(uni.getStorageSync("masterId")),p=Bmob.Query("debt_history");p.set("producer",u),p.set("master",d),p.set("operater",f),p.set("debt_number",Number(e)),p.set("beizhu",t),p.save().then(function(t){console.log(t),r.default.log(uni.getStorageSync("user").nickName+"操作'"+i.producer.producer_name+"'供货商收款￥"+e+"元",6,t.objectId),uni.hideLoading(),a.default.producer_detail(i.producer.objectId).then(function(e){console.log(e),i.producer=e,uni.showToast({title:"还款成功"})})}).catch(function(e){console.log(e)})}}).catch(function(e){console.log(e)})}}}};t.default=d},f334:function(e,t,o){},f68d:function(e,t,o){"use strict";var n=o("98e1"),i=o.n(n);i.a}}]);