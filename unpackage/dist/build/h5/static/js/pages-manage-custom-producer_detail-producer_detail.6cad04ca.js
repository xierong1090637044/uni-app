(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-custom-producer_detail-producer_detail"],{"112b":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"Loading_view"},[n("v-uni-image",{staticClass:"loading_image",attrs:{src:"/static/timg.gif"}}),n("v-uni-view",{staticStyle:{color:"#999","margin-top":"3%"}},[e._v("加载中...")])],1)},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},1380:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e.loading?n("loading"):n("v-uni-view",[n("v-uni-view",{staticClass:"display_flex_bet list_item border_bottom"},[n("v-uni-view",{staticClass:"left_desc"},[e._v("供货商昵称")]),n("v-uni-view",[e._v(e._s(e.producer.producer_name))])],1),n("v-uni-view",{staticClass:"display_flex_bet list_item border_bottom"},[n("v-uni-view",{staticClass:"left_desc"},[e._v("联系电话")]),e.producer.producer_phone?n("v-uni-view",[e._v(e._s(e.producer.producer_phone))]):n("v-uni-view",[e._v("未填写")])],1),n("v-uni-navigator",{staticClass:"display_flex_bet list_item border_bottom",attrs:{"hover-class":"none",url:"debt_history/debt_history?id="+e.producer.objectId+"&name="+e.producer.producer_name}},[n("v-uni-view",{staticClass:"left_desc"},[e._v("欠供应商款")]),n("v-uni-view",{staticClass:"display_flex"},[n("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[e._v("￥"+e._s(e.producer.debt))]),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1),n("v-uni-view",{staticClass:"display_flex_bet list_item border_bottom"},[n("v-uni-view",{staticClass:"left_desc"},[e._v("建立时间")]),n("v-uni-view",[e._v(e._s(e.producer.createdAt))])],1),n("v-uni-navigator",{staticClass:"list_item display_flex_bet",staticStyle:{margin:"20rpx 0"},attrs:{"hover-class":"none",url:"history/history?id="+e.producer.objectId}},[n("v-uni-text",{staticClass:"left_desc"},[e._v("交易历史")]),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1),n("uni-popup",{attrs:{show:e.modal_show,position:"middle",mode:"fixed"},on:{hidePopup:function(t){t=e.$handleEvent(t),e.modal_show=!1}}},[n("v-uni-view",{staticStyle:{width:"500rpx"}},[n("v-uni-view",{staticClass:"display_flex"},[n("v-uni-view",{staticStyle:{width:"160rpx",color:"#999"}},[e._v("本次还款：")]),n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入本次还款金额",type:"digit"},model:{value:e.modal_sk.sk_number,callback:function(t){e.$set(e.modal_sk,"sk_number",t)},expression:"modal_sk.sk_number"}})],1),n("v-uni-view",{staticClass:"display_flex"},[n("v-uni-view",{staticStyle:{width:"160rpx",color:"#999"}},[e._v("备注：")]),n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入备注信息"},model:{value:e.modal_sk.beizhu,callback:function(t){e.$set(e.modal_sk,"beizhu",t)},expression:"modal_sk.beizhu"}})],1),n("v-uni-view",{staticClass:"modal_confrimbutton",on:{click:function(t){t=e.$handleEvent(t),e.confrim_sk(t)}}},[e._v("确定")])],1)],1),n("v-uni-view",{staticClass:"getmoney_button",on:{click:function(t){t=e.$handleEvent(t),e.modal_show=!0}}},[e._v("还款")])],1)],1)},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},"1a2f":function(e,t,n){"use strict";var o=n("7792"),i=n.n(o);i.a},"227f":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"uni-page-body[data-v-64c3f308]{color:#3d3d3d}.modal_confrimbutton[data-v-64c3f308]{background:#426ab3;color:#fff;width:60%;padding:%?20?% 0;text-align:center;margin-left:20%;border-radius:%?8?%;margin-top:%?30?%}.list_item[data-v-64c3f308]{padding:%?20?% %?30?%;background:#fff}.left_desc[data-v-64c3f308]{color:#999}.border_bottom[data-v-64c3f308]{border-bottom:%?1?% solid#DDDDDD}.getmoney_button[data-v-64c3f308]{width:100%;background:#426ab3;color:#fff;padding:%?20?% 0;text-align:center;position:fixed;bottom:0;left:0}",""])},"24f7":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".Loading_view[data-v-b97421aa]{height:100vh;width:100%;text-align:center;background:#fff}.loading_image[data-v-b97421aa]{width:%?200?%;height:%?200?%;margin-top:50%}",""])},"2bef":function(e,t,n){"use strict";var o=n("288e");n("6b54"),n("87b3"),n("c5f6");var i=o(n("5d73"));n("7514"),e.exports={handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("now_product"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(e,t,n){var o=Bmob.Pointer("_User"),i=o.set(uni.getStorageSync("uid")),r=Bmob.Query("logs");r.set("parent",i),r.set("log",e),r.set("detail_id",n),r.set("type",t),r.save().then(function(e){console.log(e)}).catch(function(e){console.log(e)})},record_shopOut:function(e,t){console.log(e,t);var n=Bmob.Query("shops");n.set("id",e),n.set("have_out",t),n.save().then(function(e){console.log(e)}).catch(function(e){console.log(e)})},record_staffOut:function(e){if(console.log(e,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var t=Bmob.Query("staffs");t.set("id",uni.getStorageSync("user").objectId),t.set("have_out",e+uni.getStorageSync("user").have_out),t.save().then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},get_allCost:function(){var e=uni.getStorageSync("uid");console.log(e);var t=Bmob.Query("Goods");t.equalTo("userId","==",e),t.find().then(function(e){console.log(e);var t=!0,n=!1,o=void 0;try{for(var r,a=(0,i.default)(e);!(t=(r=a.next()).done);t=!0){var s=r.value;console.log(s),Number(s.costPrice)*s.reserve,s.reserve}}catch(c){n=!0,o=c}finally{try{t||null==a.return||a.return()}finally{if(n)throw o}}})},getDay:function(e,t){var n=this,o=new Date,i=o.getTime()+864e5*e;o.setTime(i);var r=o.getFullYear(),a=o.getMonth(),s=o.getDate();return a=n.handleMonth(a+1),s=n.handleMonth(s),t?r+"-"+a+"-"+s+" 00:00:00":r+"-"+a+"-"+s},handleMonth:function(e){var t=e;return 1==e.toString().length&&(t="0"+e),t}}},"2cb6":function(e,t,n){},"34c5":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-pagination"},[n("v-uni-view",{staticClass:"uni-pagination__btns"},[n("v-uni-view",{class:["uni-pagination__btn",{"uni-pagination--disabled":1===e.currentIndex}],attrs:{"hover-class":1===e.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){t=e.$handleEvent(t),e.clickLeft(t)}}},[e.showIcon?[n("uni-icon",{attrs:{color:"#000",size:"20",type:"arrowleft"}})]:[e._v(e._s(e.prevText))]],2),n("v-uni-view",{class:["uni-pagination__btn",{"uni-pagination--disabled":e.currentIndex===e.maxPage}],attrs:{"hover-class":e.currentIndex===e.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){t=e.$handleEvent(t),e.clickRight(t)}}},[e.showIcon?[n("uni-icon",{attrs:{color:"#000",size:"20",type:"arrowright"}})]:[e._v(e._s(e.nextText))]],2)],1),n("v-uni-view",{staticClass:"uni-pagination__num"},[n("v-uni-text",{staticClass:"uni-pagination__num-current"},[e._v(e._s(e.currentIndex))])],1)],1)},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},"360a":function(e,t,n){"use strict";n.r(t);var o=n("1380"),i=n("81d1");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("1a2f");var a=n("2877"),s=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"64c3f308",null);t["default"]=s.exports},"54b4":function(e,t,n){"use strict";n.r(t);var o=n("2cb6"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=i.a},"698b":function(e,t,n){"use strict";n.r(t);var o=n("ceee"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=i.a},7792:function(e,t,n){var o=n("227f");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("787938e6",o,!0,{sourceMap:!1,shadowMode:!1})},"7d2b":function(e,t,n){"use strict";var o=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c5f6");var i,r=o(n("9acb")),a=o(n("2bef")),s=o(n("00eb")),c=o(n("915b")),u=o(n("b841")),l={components:{faIcon:s.default,loading:u.default,uniPopup:c.default},data:function(){return{loading:!0,modal_show:!1,producer:{},modal_sk:{sk_number:"",beizhu:""}}},onLoad:function(e){i=this,r.default.producer_detail(e.id).then(function(e){console.log(e),e.debt||(e.debt=0),i.producer=e,i.loading=!1})},methods:{confrim_sk:function(){console.log(i.modal_sk);var e=i.modal_sk.sk_number,t=i.modal_sk.beizhu,n=i.producer.objectId;if(null==e||0==e.length)uni.showToast({title:"请输入还款金额",icon:"none"});else{uni.showLoading({title:"加载中..."}),i.modal_show=!1;var o=Bmob.Query("producers");o.get(n).then(function(o){if(o.debt-Number(e)<0)uni.hideLoading(),uni.showToast({icon:"none",title:"还款金额超出"});else if(null==o.debt||0==o.debt)uni.hideLoading(),uni.showToast({icon:"none",title:"没有欠款"});else{o.set("debt",o.debt-Number(e)),o.save();var s=Bmob.Pointer("producers"),c=s.set(n),u=Bmob.Pointer("_User"),l=u.set(uni.getStorageSync("uid")),d=Bmob.Pointer("_User"),f=d.set(uni.getStorageSync("masterId")),b=Bmob.Query("debt_history");b.set("producer",c),b.set("master",l),b.set("operater",f),b.set("debt_number",Number(e)),b.set("beizhu",t),b.save().then(function(t){console.log(t),a.default.log(uni.getStorageSync("user").nickName+"操作'"+i.producer.producer_name+"'供货商收款￥"+e+"元",6,t.objectId),uni.hideLoading(),r.default.producer_detail(i.producer.objectId).then(function(e){console.log(e),i.producer=e,uni.showToast({title:"还款成功"})})}).catch(function(e){console.log(e)})}}).catch(function(e){console.log(e)})}}}};t.default=l},"81d1":function(e,t,n){"use strict";n.r(t);var o=n("7d2b"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=i.a},"8a8c":function(e,t,n){var o=n("baeb");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("661b028c",o,!0,{sourceMap:!1,shadowMode:!1})},"915b":function(e,t,n){"use strict";n.r(t);var o=n("34c5"),i=n("698b");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("a6cf");var a=n("2877"),s=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"28a9110a",null);t["default"]=s.exports},"9acb":function(e,t,n){"use strict";var o=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c5f6");var i=o(n("f499"));n("7514");var r=o(n("795b")),a={get_producerList:function(e,t){return new r.default(function(n,o){var r=JSON.parse(localStorage.getItem("bmob")).objectId,a=Bmob.Query("producers");a.order("num"),a.equalTo("parent","==",r),a.equalTo("disabled","==",e),t&&a.equalTo("name","==",{$regex:t+".*"}),a.find().then(function(e){localStorage.setItem("shops",(0,i.default)(e)),n(e)})})},add_producer:function(e){console.log(e);var t=JSON.parse(localStorage.getItem("bmob")).objectId;return new r.default(function(n,o){var i=Bmob.Pointer("_User"),r=i.set(t);if(e.objectId){var a=Bmob.Query("producers");a.set("producer_name",e.producer_name),a.set("debt",Number(e.debt)),a.set("producer_address",e.producer_address),a.set("producer_phone",e.producer_phone),a.set("parent",r),a.set("disabled",!e.disabled),a.set("id",e.objectId),a.save().then(function(e){n(e)}).catch(function(e){console.log(e)})}else{var s=Bmob.Query("producers");s.equalTo("parent","==",t),s.equalTo("name","==",e.producer_name),s.find().then(function(t){if(console.log(t),0==t.length){var o=Bmob.Query("producers");o.set("producer_name",e.producer_name),o.set("debt",Number(e.debt)),o.set("producer_address",e.producer_address),o.set("producer_phone",e.producer_phone),o.set("have_out",0),o.set("disabled",!e.disabled),o.set("parent",r),o.save().then(function(e){n(e)}).catch(function(e){console.log(e)})}else n(!1)})}})},delete_producer:function(e){return new r.default(function(t,n){var o=Bmob.Query("producers");o.destroy(e).then(function(e){t(e)}).catch(function(e){console.log(e)})})},producer_detail:function(e){return new r.default(function(t,n){var o=Bmob.Query("producers");o.get(e).then(function(e){t(e)}).catch(function(e){console.log(e)})})},get_moneyList:function(e){return new r.default(function(t,n){var o=Bmob.Query("debt_history");o.equalTo("producer","==",e),o.include("operater"),o.find().then(function(e){console.log(e),t(e)})})}};t.default=a},a6cf:function(e,t,n){"use strict";var o=n("8a8c"),i=n.n(o);i.a},b841:function(e,t,n){"use strict";n.r(t);var o=n("112b"),i=n("54b4");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("c1c9");var a=n("2877"),s=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"b97421aa",null);t["default"]=s.exports},baeb:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'.uni-pagination[data-v-28a9110a]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?40?%;position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.uni-pagination__btns[data-v-28a9110a]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.uni-pagination__btn[data-v-28a9110a]{width:%?120?%;height:%?60?%;padding:0 %?16?%;line-height:%?60?%;font-size:%?28?%;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;background-color:#f8f8f8;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.uni-pagination__btn[data-v-28a9110a]:after{content:"";width:200%;height:200%;position:absolute;top:0;left:0;border:1px solid #c8c7cc;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?12?%}.uni-pagination__num[data-v-28a9110a]{height:%?60?%;line-height:%?60?%;font-size:%?28?%;color:#333;position:absolute;left:50%;top:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.uni-pagination__num-current[data-v-28a9110a]{color:#007aff}.uni-pagination--disabled[data-v-28a9110a]{opacity:.3}.uni-pagination--hover[data-v-28a9110a]{color:rgba(0,0,0,.6);background-color:#f1f1f1}',""])},c1c9:function(e,t,n){"use strict";var o=n("d292"),i=n.n(o);i.a},ceee:function(e,t,n){"use strict";var o=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c5f6");var i=o(n("c8e0")),r={name:"UniPagination",components:{uniIcon:i.default},props:{prevText:{type:String,default:"上一页"},nextText:{type:String,default:"下一页"},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:Boolean,default:!1}},data:function(){return{currentIndex:1}},computed:{maxPage:function(){var e=1,t=Number(this.total),n=Number(this.pageSize);return t&&n&&(e=Math.ceil(t/n)),e}},watch:{current:function(e){this.currentIndex=+e}},created:function(){this.currentIndex=+this.current},methods:{clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)!==this.maxPage&&(this.currentIndex+=1,this.change("next"))},change:function(e){this.$emit("change",{type:e,current:this.currentIndex})}}};t.default=r},d292:function(e,t,n){var o=n("24f7");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("2876b71b",o,!0,{sourceMap:!1,shadowMode:!1})}}]);