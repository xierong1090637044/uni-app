(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-custom-producer_detail-debt_history-debt_history"],{"28d12":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".frist[data-v-af7cac80]{background:#fff;padding:%?20?% %?30?%;border-bottom:%?1?% solid#DDDDDD}.list_item[data-v-af7cac80]{padding:%?16?% 0;border-bottom:%?1?% solid#DDDDDD}",""])},"41d5":function(e,t,n){"use strict";n.r(t);var r=n("c759"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=a.a},c759:function(e,t,n){"use strict";var r=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("7f7f");r(n("906f"));var a,o=r(n("d74a")),u=r(n("c7fb")),d={components:{loading:u.default},data:function(){return{debt_list:[],name:"",loading:!0}},methods:{},onLoad:function(e){a=this,a.name=e.name,o.default.get_moneyList(e.id).then(function(e){a.loading=!1,a.debt_list=e})}};t.default=d},d74a:function(e,t,n){"use strict";(function(e){var r=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c5f6");var a=r(n("f499"));n("7514");var o=r(n("795b")),u=r(n("906f")),d={get_producerList:function(e,t){return new o.default(function(n,r){var o=JSON.parse(localStorage.getItem("bmob")).objectId,d=u.default.Query("producers");d.order("num"),d.equalTo("parent","==",o),d.equalTo("disabled","==",e),t&&d.equalTo("name","==",{$regex:t+".*"}),d.find().then(function(e){localStorage.setItem("shops",(0,a.default)(e)),n(e)})})},add_producer:function(t){e.log(t);var n=JSON.parse(localStorage.getItem("bmob")).objectId;return new o.default(function(r,a){var o=u.default.Pointer("_User"),d=o.set(n);if(t.objectId){var i=u.default.Query("producers");i.set("producer_name",t.producer_name),i.set("debt",Number(t.debt)),i.set("producer_address",t.producer_address),i.set("producer_phone",t.producer_phone),i.set("parent",d),i.set("disabled",!t.disabled),i.set("id",t.objectId),i.save().then(function(e){r(e)}).catch(function(t){e.log(t)})}else{var c=u.default.Query("producers");c.equalTo("parent","==",n),c.equalTo("name","==",t.producer_name),c.find().then(function(n){if(e.log(n),0==n.length){var a=u.default.Query("producers");a.set("producer_name",t.producer_name),a.set("debt",Number(t.debt)),a.set("producer_address",t.producer_address),a.set("producer_phone",t.producer_phone),a.set("have_out",0),a.set("disabled",!t.disabled),a.set("parent",d),a.save().then(function(e){r(e)}).catch(function(t){e.log(t)})}else r(!1)})}})},delete_producer:function(t){return new o.default(function(n,r){var a=u.default.Query("producers");a.destroy(t).then(function(e){n(e)}).catch(function(t){e.log(t)})})},producer_detail:function(t){return new o.default(function(n,r){var a=u.default.Query("producers");a.get(t).then(function(e){n(e)}).catch(function(t){e.log(t)})})},get_moneyList:function(t){return new o.default(function(n,r){var a=u.default.Query("debt_history");a.equalTo("producer","==",t),a.include("operater"),a.find().then(function(t){e.log(t),n(t)})})}};t.default=d}).call(this,n("5a52")["default"])},dce4:function(e,t,n){"use strict";n.r(t);var r=n("f562"),a=n("41d5");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("e640");var u=n("2877"),d=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,"af7cac80",null);t["default"]=d.exports},e640:function(e,t,n){"use strict";var r=n("e7bf"),a=n.n(r);a.a},e7bf:function(e,t,n){var r=n("28d12");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("4f06").default;a("9f2477a0",r,!0,{sourceMap:!1,shadowMode:!1})},f562:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e.loading?n("loading"):n("v-uni-view",[n("v-uni-view",{staticClass:"frist"},[e._v("供货商名字："),n("v-uni-text",[e._v(e._s(e.name))])],1),n("v-uni-scroll-view",{staticStyle:{height:"calc(100vh - 80rpx)",padding:"0 30rpx",background:"#FFFFFF",width:"calc(100% - 60rpx)"},attrs:{"scroll-y":""}},e._l(e.debt_list,function(t,r){return n("v-uni-view",{key:r,staticClass:"list_item"},[t.operater.nickName?n("v-uni-view",[e._v("操作人："+e._s(t.operater.nickName))]):e._e(),n("v-uni-view",{staticClass:"display_flex_bet"},[n("v-uni-view",[e._v("还款金额："),n("v-uni-text",{staticStyle:{color:"#f30"}},[e._v("￥"+e._s(t.debt_number))])],1),n("v-uni-view",{staticStyle:{color:"#999999"}},[e._v(e._s(t.createdAt))])],1)],1)}),1)],1)],1)},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})}}]);