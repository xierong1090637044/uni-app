(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-custom-custom_detail-custom_detail"],{"12ad":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-mask",style:{top:t.offsetTop+"px"},on:{click:function(e){e=t.$handleEvent(e),t.hide(e)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.moveHandle(e)}}}),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-popup",class:"uni-popup-"+t.position+" uni-popup-"+t.mode},[t._v(t._s(t.msg)),t._t("default"),"middle"===t.position&&"insert"===t.mode?n("v-uni-view",{staticClass:" uni-icon uni-icon-close",class:{"uni-close-bottom":"bottom"===t.buttonMode,"uni-close-right":"right"===t.buttonMode},on:{click:function(e){e=t.$handleEvent(e),t.closeMask(e)}}}):t._e()],2)],1)},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"252c":function(t,e,n){"use strict";var o=n("58d9"),i=n.n(o);i.a},3472:function(t,e,n){"use strict";n.r(e);var o=n("8479"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},"401b":function(t,e,n){var o=n("7f87");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("6eeab99e",o,!0,{sourceMap:!1,shadowMode:!1})},4454:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'.uni-mask[data-v-ce6dbc2a]{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-ce6dbc2a]{position:fixed;z-index:999;background-color:#fff}.uni-popup-middle[data-v-ce6dbc2a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.uni-popup-middle.uni-popup-insert[data-v-ce6dbc2a]{min-width:%?380?%;min-height:%?380?%;max-width:100%;max-height:80%;-webkit-transform:translate(-50%,-65%);-ms-transform:translate(-50%,-65%);transform:translate(-50%,-65%);background:none;-webkit-box-shadow:none;box-shadow:none}.uni-popup-middle.uni-popup-fixed[data-v-ce6dbc2a]{border-radius:%?10?%;padding:%?30?%}.uni-close-bottom[data-v-ce6dbc2a],.uni-close-right[data-v-ce6dbc2a]{position:absolute;bottom:%?-180?%;text-align:center;border-radius:50%;color:#f5f5f5;font-size:%?60?%;font-weight:700;opacity:.8;z-index:-1}.uni-close-bottom[data-v-ce6dbc2a]{margin:auto;left:0;right:0}.uni-close-right[data-v-ce6dbc2a]{right:%?-60?%;top:%?-80?%}.uni-close-bottom[data-v-ce6dbc2a]:after{content:"";position:absolute;width:0;border:1px #f5f5f5 solid;top:%?-200?%;bottom:%?56?%;left:50%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);opacity:.8}.uni-popup-bottom[data-v-ce6dbc2a],.uni-popup-top[data-v-ce6dbc2a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-popup-top[data-v-ce6dbc2a]{top:0;left:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottom[data-v-ce6dbc2a]{left:0;bottom:0;width:100%;min-height:%?100?%;line-height:%?100?%;text-align:center}',""])},"58d9":function(t,e,n){var o=n("4454");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("8dd48b32",o,!0,{sourceMap:!1,shadowMode:!1})},"59c9":function(t,e,n){"use strict";(function(t){var o=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var i=o(n("5d73"));n("7514");var a=o(n("795b")),s=o(n("906f")),u={get_customList:function(t,e){return new a.default(function(n,o){var i=uni.getStorageSync("uid"),a=s.default.Query("customs");a.order("num"),a.equalTo("parent","==",i),a.equalTo("disabled","==",t),e&&a.equalTo("name","==",{$regex:e+".*"}),a.find().then(function(t){n(t)})})},get_customCount:function(){return new a.default(function(t,e){var n=uni.getStorageSync("uid"),o=s.default.Query("customs");o.equalTo("parent","==",n),o.find().then(function(e){var n=e,o=!0,a=!1,u=void 0;try{for(var r,c=function(){var t=r.value,e=s.default.Query("Bills");e.equalTo("type","==",-1),e.equalTo("custom","==",t.objectId),e.find().then(function(e){t.relations=e})},l=(0,i.default)(n);!(o=(r=l.next()).done);o=!0)c()}catch(d){a=!0,u=d}finally{try{o||null==l.return||l.return()}finally{if(a)throw u}}t(n)})})},add_custom:function(e){t.log(e);var n=JSON.parse(localStorage.getItem("bmob")).objectId;return new a.default(function(o,i){var a=s.default.Pointer("_User"),u=a.set(n);if(e.objectId){var r=s.default.Query("customs");r.set("custom_name",e.custom_name),r.set("debt",Number(e.debt)),r.set("custom_address",e.custom_address),r.set("custom_phone",e.custom_phone),r.set("parent",u),r.set("disabled",!e.disabled),r.set("id",e.objectId),r.save().then(function(t){o(t)}).catch(function(e){t.log(e)})}else{var c=s.default.Query("customs");c.equalTo("parent","==",n),c.equalTo("name","==",e.custom_name),c.find().then(function(n){if(t.log(n),0==n.length){var i=s.default.Query("customs");i.set("custom_name",e.custom_name),i.set("debt",Number(e.debt)),i.set("custom_address",e.custom_address),i.set("custom_phone",e.custom_phone),i.set("have_out",0),i.set("disabled",!e.disabled),i.set("parent",u),i.save().then(function(t){o(t)}).catch(function(e){t.log(e)})}else o(!1)})}})},delete_custom:function(e){return new a.default(function(n,o){var i=s.default.Query("customs");i.destroy(e).then(function(t){n(t)}).catch(function(e){t.log(e)})})},custom_detail:function(e){return new a.default(function(n,o){var i=s.default.Query("customs");i.get(e).then(function(t){n(t)}).catch(function(e){t.log(e)})})},get_moneyList:function(e){return new a.default(function(n,o){var i=s.default.Query("debt_history");i.equalTo("custom","==",e),i.include("operater"),i.find().then(function(e){t.log(e),n(e)})})}};e.default=u}).call(this,n("5a52")["default"])},6579:function(t,e,n){"use strict";var o=n("401b"),i=n.n(o);i.a},"7f87":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-7e62fe27]{color:#3d3d3d}.modal_confrimbutton[data-v-7e62fe27]{background:#426ab3;color:#fff;width:60%;padding:%?20?% 0;text-align:center;margin-left:20%;border-radius:%?8?%;margin-top:%?30?%}.list_item[data-v-7e62fe27]{padding:%?20?% %?30?%;background:#fff}.left_desc[data-v-7e62fe27]{color:#999}.border_bottom[data-v-7e62fe27]{border-bottom:%?1?% solid#DDDDDD}.getmoney_button[data-v-7e62fe27]{width:100%;background:#426ab3;color:#fff;padding:%?20?% 0;text-align:center;position:fixed;bottom:0;left:0}",""])},8479:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"UniPopup",props:{show:{type:Boolean,default:!1},position:{type:String,default:"middle"},mode:{type:String,default:"insert"},msg:{type:String,default:""},h5Top:{type:Boolean,default:!1},buttonMode:{type:String,default:"bottom"}},data:function(){return{offsetTop:0}},watch:{h5Top:function(t){this.offsetTop=t?44:0}},created:function(){var t=0;t=this.h5Top?0:44,this.offsetTop=t},methods:{hide:function(){"insert"===this.mode&&"middle"===this.position||this.$emit("hidePopup")},closeMask:function(){"insert"===this.mode&&this.$emit("hidePopup")},moveHandle:function(){}}};e.default=o},"93e8":function(t,e,n){"use strict";(function(e){var o=n("288e");n("6b54"),n("87b3"),n("c5f6");var i=o(n("5d73"));n("7514");var a=o(n("906f"));t.exports={handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(t,n,o){var i=a.default.Pointer("_User"),s=i.set(uni.getStorageSync("uid")),u=a.default.Query("logs");u.set("parent",s),u.set("log",t),u.set("detail_id",o),u.set("type",n),u.save().then(function(t){e.log(t)}).catch(function(t){e.log(t)})},record_shopOut:function(t,n){e.log(t,n);var o=a.default.Query("shops");o.set("id",t),o.set("have_out",n),o.save().then(function(t){e.log(t)}).catch(function(t){e.log(t)})},record_staffOut:function(t){if(e.log(t,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var n=a.default.Query("staffs");n.set("id",uni.getStorageSync("user").objectId),n.set("have_out",t+uni.getStorageSync("user").have_out),n.save().then(function(t){e.log(t)}).catch(function(t){e.log(t)})}},get_allCost:function(){var t=uni.getStorageSync("uid");e.log(t);var n=a.default.Query("Goods");n.equalTo("userId","==",t),n.find().then(function(t){e.log(t);var n=!0,o=!1,a=void 0;try{for(var s,u=(0,i.default)(t);!(n=(s=u.next()).done);n=!0){var r=s.value;e.log(r),Number(r.costPrice)*r.reserve,r.reserve}}catch(c){o=!0,a=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}})},getDay:function(t,e){var n=this,o=new Date,i=o.getTime()+864e5*t;o.setTime(i);var a=o.getFullYear(),s=o.getMonth(),u=o.getDate();return s=n.handleMonth(s+1),u=n.handleMonth(u),e?a+"-"+s+"-"+u+" 00:00:00":a+"-"+s+"-"+u},js_date_time:function(t,e){var n=new Date(t),o=n.getFullYear(),i=n.getMonth()+1;i=i<10?"0"+i:i;var a=n.getDate();a=a<10?"0"+a:a;var s=n.getHours();s=s<10?"0"+s:s;var u=n.getMinutes(),r=n.getSeconds();return u=u<10?"0"+u:u,r=r<10?"0"+r:r,e?o+"-"+i+"-"+a+" "+s+":"+u:o+"-"+i+"-"+a},handleMonth:function(t){var e=t;return 1==t.toString().length&&(e="0"+t),e}}}).call(this,n("5a52")["default"])},a142:function(t,e,n){"use strict";n.r(e);var o=n("ee7f"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},adae:function(t,e,n){"use strict";n.r(e);var o=n("12ad"),i=n("3472");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("252c");var s=n("2877"),u=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,"ce6dbc2a",null);e["default"]=u.exports},adc4:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.loading?n("loading"):n("v-uni-view",[n("v-uni-view",{staticClass:"display_flex_bet list_item border_bottom"},[n("v-uni-view",{staticClass:"left_desc"},[t._v("客户昵称")]),n("v-uni-view",[t._v(t._s(t.custom.custom_name))])],1),n("v-uni-view",{staticClass:"display_flex_bet list_item border_bottom"},[n("v-uni-view",{staticClass:"left_desc"},[t._v("联系电话")]),t.custom.custom_phone?n("v-uni-view",[t._v(t._s(t.custom.custom_phone))]):n("v-uni-view",[t._v("未填写")])],1),n("v-uni-navigator",{staticClass:"display_flex_bet list_item border_bottom",attrs:{"hover-class":"none",url:"debt_history/debt_history?id="+t.custom.objectId+"&name="+t.custom.custom_name}},[n("v-uni-view",{staticClass:"left_desc"},[t._v("客户欠款")]),n("v-uni-view",{staticClass:"display_flex"},[n("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[t._v("￥"+t._s(t.custom.debt?t.custom.debt:0))]),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1),n("v-uni-view",{staticClass:"display_flex_bet list_item border_bottom"},[n("v-uni-view",{staticClass:"left_desc"},[t._v("建立时间")]),n("v-uni-view",[t._v(t._s(t.custom.createdAt))])],1),n("v-uni-navigator",{staticClass:"list_item display_flex_bet",staticStyle:{margin:"20rpx 0"},attrs:{"hover-class":"none",url:"history/history?id="+t.custom.objectId}},[n("v-uni-text",{staticClass:"left_desc"},[t._v("交易历史")]),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1),n("uni-popup",{attrs:{show:t.modal_show,position:"middle",mode:"fixed",h5Top:!0},on:{hidePopup:function(e){e=t.$handleEvent(e),t.modal_show=!1}}},[n("v-uni-view",{staticStyle:{width:"500rpx"}},[n("v-uni-view",{staticClass:"display_flex"},[n("v-uni-view",{staticStyle:{width:"160rpx",color:"#999"}},[t._v("本次收款：")]),n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入本次收款金额",type:"digit"},model:{value:t.modal_sk.sk_number,callback:function(e){t.$set(t.modal_sk,"sk_number",e)},expression:"modal_sk.sk_number"}})],1),n("v-uni-view",{staticClass:"display_flex"},[n("v-uni-view",{staticStyle:{width:"160rpx",color:"#999"}},[t._v("备注：")]),n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入备注信息"},model:{value:t.modal_sk.beizhu,callback:function(e){t.$set(t.modal_sk,"beizhu",e)},expression:"modal_sk.beizhu"}})],1),n("v-uni-view",{staticClass:"modal_confrimbutton",on:{click:function(e){e=t.$handleEvent(e),t.confrim_sk(e)}}},[t._v("确定")])],1)],1),n("v-uni-view",{staticClass:"getmoney_button",on:{click:function(e){e=t.$handleEvent(e),t.modal_show=!0}}},[t._v("收款")])],1)],1)},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},dc32:function(t,e,n){"use strict";n.r(e);var o=n("adc4"),i=n("a142");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("6579");var s=n("2877"),u=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,"7e62fe27",null);e["default"]=u.exports},ee7f:function(t,e,n){"use strict";(function(t){var o=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var i,a=o(n("906f")),s=o(n("59c9")),u=o(n("93e8")),r=o(n("eaf0")),c=o(n("adae")),l=o(n("c7fb")),d={components:{faIcon:r.default,loading:l.default,uniPopup:c.default},data:function(){return{loading:!0,modal_show:!1,custom:{},modal_sk:{sk_number:"",beizhu:""}}},onLoad:function(e){i=this,s.default.custom_detail(e.id).then(function(e){t.log(e),i.custom=e,i.loading=!1})},methods:{confrim_sk:function(){t.log(i.modal_sk);var e=i.modal_sk.sk_number,n=i.modal_sk.beizhu,o=i.custom.objectId;if(null==e||0==e.length)uni.showToast({title:"请输入收款金额",icon:"none"});else{uni.showLoading({title:"加载中..."}),i.modal_show=!1;var r=a.default.Query("customs");r.get(o).then(function(r){if(r.debt-Number(e)<0)uni.hideLoading(),uni.showToast({icon:"none",title:"收款金额过大"});else if(null==r.debt||0==r.debt)uni.hideLoading(),uni.showToast({icon:"none",title:"该客户没有欠款"});else{r.set("debt",r.debt-Number(e)),r.save();var c=a.default.Pointer("customs"),l=c.set(o),d=a.default.Pointer("_User"),f=d.set(uni.getStorageSync("uid")),m=a.default.Pointer("_User"),v=m.set(uni.getStorageSync("masterId")),p=a.default.Query("debt_history");p.set("custom",l),p.set("master",f),p.set("operater",v),p.set("debt_number",Number(e)),p.set("beizhu",n),p.save().then(function(n){t.log(n),u.default.log(uni.getStorageSync("user").nickName+"操作'"+i.custom.custom_name+"'客户还款￥"+e+"元",6,n.objectId),uni.hideLoading(),s.default.custom_detail(i.custom.objectId).then(function(e){t.log(e),i.custom=e,uni.showToast({title:"收款成功"})})}).catch(function(e){t.log(e)})}}).catch(function(e){t.log(e)})}}}};e.default=d}).call(this,n("5a52")["default"])}}]);