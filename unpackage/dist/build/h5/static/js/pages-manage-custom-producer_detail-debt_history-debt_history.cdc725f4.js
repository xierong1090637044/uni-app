(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-custom-producer_detail-debt_history-debt_history"],{1133:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".frist[data-v-b67f1f0c]{background:#fff;padding:%?20?% %?30?%;border-bottom:%?1?% solid#DDDDDD}.list_item[data-v-b67f1f0c]{padding:%?16?% 0;border-bottom:%?1?% solid#DDDDDD}",""])},"18d5":function(e,t,n){"use strict";n.r(t);var o=n("d17f"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},7765:function(e,t,n){"use strict";n.r(t);var o=n("ed8f"),r=n("18d5");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);n("7fcb");var u=n("2877"),d=Object(u["a"])(r["default"],o["a"],o["b"],!1,null,"b67f1f0c",null);t["default"]=d.exports},"7fcb":function(e,t,n){"use strict";var o=n("bdb2"),r=n.n(o);r.a},"9acb":function(e,t,n){"use strict";var o=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c5f6");var r=o(n("f499"));n("7514");var a=o(n("795b")),u={get_producerList:function(e,t){return new a.default(function(n,o){var a=JSON.parse(localStorage.getItem("bmob")).objectId,u=Bmob.Query("producers");u.order("num"),u.equalTo("parent","==",a),u.equalTo("disabled","==",e),t&&u.equalTo("name","==",{$regex:t+".*"}),u.find().then(function(e){localStorage.setItem("shops",(0,r.default)(e)),n(e)})})},add_producer:function(e){console.log(e);var t=JSON.parse(localStorage.getItem("bmob")).objectId;return new a.default(function(n,o){var r=Bmob.Pointer("_User"),a=r.set(t);if(e.objectId){var u=Bmob.Query("producers");u.set("producer_name",e.producer_name),u.set("debt",Number(e.debt)),u.set("producer_address",e.producer_address),u.set("producer_phone",e.producer_phone),u.set("parent",a),u.set("disabled",!e.disabled),u.set("id",e.objectId),u.save().then(function(e){n(e)}).catch(function(e){console.log(e)})}else{var d=Bmob.Query("producers");d.equalTo("parent","==",t),d.equalTo("name","==",e.producer_name),d.find().then(function(t){if(console.log(t),0==t.length){var o=Bmob.Query("producers");o.set("producer_name",e.producer_name),o.set("debt",Number(e.debt)),o.set("producer_address",e.producer_address),o.set("producer_phone",e.producer_phone),o.set("have_out",0),o.set("disabled",!e.disabled),o.set("parent",a),o.save().then(function(e){n(e)}).catch(function(e){console.log(e)})}else n(!1)})}})},delete_producer:function(e){return new a.default(function(t,n){var o=Bmob.Query("producers");o.destroy(e).then(function(e){t(e)}).catch(function(e){console.log(e)})})},producer_detail:function(e){return new a.default(function(t,n){var o=Bmob.Query("producers");o.get(e).then(function(e){t(e)}).catch(function(e){console.log(e)})})},get_moneyList:function(e){return new a.default(function(t,n){var o=Bmob.Query("debt_history");o.equalTo("producer","==",e),o.include("operater"),o.find().then(function(e){console.log(e),t(e)})})}};t.default=u},bdb2:function(e,t,n){var o=n("1133");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var r=n("4f06").default;r("da1b9b50",o,!0,{sourceMap:!1,shadowMode:!1})},d17f:function(e,t,n){"use strict";var o=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("7f7f");var r,a=o(n("9acb")),u=o(n("b841")),d={components:{loading:u.default},data:function(){return{debt_list:[],name:"",loading:!0}},methods:{},onLoad:function(e){r=this,r.name=e.name,a.default.get_moneyList(e.id).then(function(e){r.loading=!1,r.debt_list=e})}};t.default=d},ed8f:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e.loading?n("loading"):n("v-uni-view",[n("v-uni-view",{staticClass:"frist"},[e._v("供货商名字："),n("v-uni-text",[e._v(e._s(e.name))])],1),n("v-uni-scroll-view",{staticStyle:{height:"calc(100vh - 80rpx)",padding:"0 30rpx",background:"#FFFFFF",width:"calc(100% - 60rpx)"},attrs:{"scroll-y":""}},e._l(e.debt_list,function(t,o){return n("v-uni-view",{key:o,staticClass:"list_item"},[t.operater.nickName?n("v-uni-view",[e._v("操作人："+e._s(t.operater.nickName))]):e._e(),n("v-uni-view",{staticClass:"display_flex_bet"},[n("v-uni-view",[e._v("还款金额："),n("v-uni-text",{staticStyle:{color:"#f30"}},[e._v("￥"+e._s(t.debt_number))])],1),n("v-uni-view",{staticStyle:{color:"#999999"}},[e._v(e._s(t.createdAt))])],1)],1)}),1)],1)],1)},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})}}]);