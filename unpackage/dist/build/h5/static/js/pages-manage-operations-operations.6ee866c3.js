(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-operations-operations"],{"2fe9":function(t,e,a){"use strict";var n=a("5dff"),i=a.n(n);i.a},"374e":function(t,e,a){"use strict";(function(t){var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("7514"),a("28a5"),a("7f7f");var i,o,r,l=n(a("906f")),s=(n(a("93e8")),{components:{},data:function(){return{type_dec:"操作类型",time_desc:"操作时间",goodsName:"",total_num:0,total_money:0,year:"",month:"",seleted_tab:1,details:null,tabBars:[{name:"入库",type:1},{name:"出库",type:-1},{name:"盘点",type:3},{name:"退货",type:2}]}},onLoad:function(e){i=this,o=wx.getStorageSync("uid"),r=e.objectId,i.goodsName=e.goodsName;var a=new Date;i.year=a.getFullYear(),i.month=a.getMonth()+1,i.getdetail(),t.log(i.year,i.month)},methods:{tapTab:function(e){t.log(e);var a=e.detail.value;i.type_dec=i.tabBars[a].name,i.seleted_tab=i.tabBars[a].type,i.getdetail()},selected_day:function(e){t.log(e);var a=e.detail.value;i.time_desc=a,i.year=a.split("-")[0],i.month=a.split("-")[1],i.getdetail()},getdetail:function(){uni.showLoading({title:"加载中..."});var e=l.default.Query("Bills");e.equalTo("userId","==",o),e.equalTo("type","==",i.seleted_tab),e.equalTo("goodsId","==",r),e.equalTo("createdAt",">=",i.year+"-"+i.month+"-01 00:00:00"),e.equalTo("createdAt","<=",i.year+"-"+i.month+"-"+new Date(i.year,i.month,0).getDate()+" 23:59:59"),e.order("-createdAt"),e.find().then(function(e){if(t.log(e),i.details=e,uni.hideLoading(),3!=i.seleted_tab){var a=l.default.Query("Bills");a.equalTo("userId","==",o),a.equalTo("type","==",i.seleted_tab),a.equalTo("goodsId","==",r),a.equalTo("createdAt",">=",i.year+"-"+i.month+"-01 00:00:00"),a.equalTo("createdAt","<=",i.year+"-"+i.month+"-"+new Date(i.year,i.month,0).getDate()+" 23:59:59"),a.statTo("sum","num,total_money"),a.find().then(function(t){t[0]&&(i.total_num=t[0]._sumNum,i.total_money=t[0]._sumTotal_money)})}})}}});e.default=s}).call(this,a("5a52")["default"])},"45fd":function(t,e,a){"use strict";a.r(e);var n=a("374e"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},"4a5f":function(t,e,a){"use strict";a.r(e);var n=a("be7b"),i=a("45fd");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("2fe9");var r=a("2877"),l=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"59ea2d00",null);e["default"]=l.exports},"5dff":function(t,e,a){var n=a("bd3e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("81ec539c",n,!0,{sourceMap:!1,shadowMode:!1})},"93e8":function(t,e,a){"use strict";(function(e){var n=a("288e");a("6b54"),a("87b3"),a("c5f6");var i=n(a("5d73"));a("7514");var o=n(a("906f"));t.exports={handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(t,a,n){var i=o.default.Pointer("_User"),r=i.set(uni.getStorageSync("uid")),l=o.default.Query("logs");l.set("parent",r),l.set("log",t),l.set("detail_id",n),l.set("type",a),l.save().then(function(t){e.log(t)}).catch(function(t){e.log(t)})},record_shopOut:function(t,a){e.log(t,a);var n=o.default.Query("shops");n.set("id",t),n.set("have_out",a),n.save().then(function(t){e.log(t)}).catch(function(t){e.log(t)})},record_staffOut:function(t){if(e.log(t,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var a=o.default.Query("staffs");a.set("id",uni.getStorageSync("user").objectId),a.set("have_out",t+uni.getStorageSync("user").have_out),a.save().then(function(t){e.log(t)}).catch(function(t){e.log(t)})}},get_allCost:function(){var t=uni.getStorageSync("uid");e.log(t);var a=o.default.Query("Goods");a.equalTo("userId","==",t),a.find().then(function(t){e.log(t);var a=!0,n=!1,o=void 0;try{for(var r,l=(0,i.default)(t);!(a=(r=l.next()).done);a=!0){var s=r.value;e.log(s),Number(s.costPrice)*s.reserve,s.reserve}}catch(u){n=!0,o=u}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}})},getDay:function(t,e){var a=this,n=new Date,i=n.getTime()+864e5*t;n.setTime(i);var o=n.getFullYear(),r=n.getMonth(),l=n.getDate();return r=a.handleMonth(r+1),l=a.handleMonth(l),e?o+"-"+r+"-"+l+" 00:00:00":o+"-"+r+"-"+l},js_date_time:function(t,e){var a=new Date(t),n=a.getFullYear(),i=a.getMonth()+1;i=i<10?"0"+i:i;var o=a.getDate();o=o<10?"0"+o:o;var r=a.getHours();r=r<10?"0"+r:r;var l=a.getMinutes(),s=a.getSeconds();return l=l<10?"0"+l:l,s=s<10?"0"+s:s,e?n+"-"+i+"-"+o+" "+r+":"+l:n+"-"+i+"-"+o},handleMonth:function(t){var e=t;return 1==t.toString().length&&(e="0"+t),e}}}).call(this,a("5a52")["default"])},bd3e:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"uni-page-body[data-v-59ea2d00]{font-size:%?28?%;color:#3d3d3d;background:#fff}.bottomEle[data-v-59ea2d00]{background:#fff;position:fixed;bottom:%?0?%;-webkit-box-shadow:0 %?0?% %?10?% rgba(0,0,0,.5);box-shadow:0 %?0?% %?10?% rgba(0,0,0,.5);width:calc(100% - %?60?%);padding:%?20?% %?30?%;font-weight:700}.swiper-tab-list[data-v-59ea2d00]{height:100%;line-height:%?100?%!important}.frist_item[data-v-59ea2d00]{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:50%}.content[data-v-59ea2d00]{width:100%;padding:%?10?% %?30?%;width:calc(100% - %?60?%);height:calc(100vh - %?132?%)}.content_time[data-v-59ea2d00]{text-align:right;color:#999}.detail_item[data-v-59ea2d00]{border-bottom:%?1?% solid#ccc;margin-bottom:%?10?%;padding-bottom:%?10?%}.detail_name[data-v-59ea2d00]{font-size:%?32?%;margin-bottom:%?6?%;font-weight:700}body.?%PAGE?%[data-v-59ea2d00]{background:#fff}",""])},be7b:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-tab-bar"},[a("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{padding:"30rpx 0","border-bottom":"6rpx solid#DDDDDD"}},[a("v-uni-picker",{staticClass:"frist_item display_flex",attrs:{range:t.tabBars,"range-key":"name"},on:{change:function(e){e=t.$handleEvent(e),t.tapTab(e)}}},[a("v-uni-text",{staticStyle:{"margin-right":"10rpx"}},[t._v(t._s(t.type_dec))]),a("fa-icon",{attrs:{type:"angle-down",size:"20",color:"#999"}})],1),a("v-uni-picker",{staticClass:"frist_item display_flex",attrs:{mode:"date",fields:"month"},on:{change:function(e){e=t.$handleEvent(e),t.selected_day(e)}}},[a("v-uni-text",{staticStyle:{"margin-right":"10rpx"}},[t._v(t._s(t.time_desc))]),a("fa-icon",{attrs:{type:"angle-down",size:"20",color:"#999"}})],1)],1),a("v-uni-scroll-view",{staticClass:"content",attrs:{"scroll-y":""}},t._l(t.details,function(e,n){return a("v-uni-view",{key:n,staticClass:"detail_item"},[1===t.seleted_tab?a("v-uni-view",[a("v-uni-view",{staticClass:"display_flex_bet"},[a("v-uni-view",[a("v-uni-text",[t._v("入库数量：")]),a("v-uni-text",{staticStyle:{"margin-left":"10rpx",color:"#FC0F4A"}},[t._v(t._s(e.num))])],1),a("v-uni-view",[a("v-uni-text",[t._v("入库单价：")]),a("v-uni-text",{staticStyle:{"margin-left":"10rpx",color:"#FC0F4A"}},[t._v(t._s(e.retailPrice))])],1)],1),a("v-uni-view",{staticStyle:{"text-align":"right","margin-top":"10rpx"}},[t._v("总计："),a("v-uni-text",{staticStyle:{color:"#f30","font-weight":"bold"}},[t._v(t._s(e.total_money))])],1)],1):t._e(),-1===t.seleted_tab?a("v-uni-view",[a("v-uni-view",{staticClass:"display_flex_bet"},[a("v-uni-view",[a("v-uni-text",[t._v("出库数量：")]),a("v-uni-text",{staticStyle:{"margin-left":"10rpx",color:"#f30","font-weight":"bold"}},[t._v(t._s(e.num))])],1),a("v-uni-view",[a("v-uni-text",[t._v("出库单价：")]),a("v-uni-text",{staticStyle:{"margin-left":"10rpx",color:"#f30","font-weight":"bold"}},[t._v(t._s(e.retailPrice))])],1)],1),a("v-uni-view",{staticStyle:{"text-align":"right","margin-top":"10rpx"}},[t._v("总计："),a("v-uni-text",{staticStyle:{color:"#f30","font-weight":"bold"}},[t._v(t._s(e.total_money))])],1)],1):t._e(),2===t.seleted_tab?a("v-uni-view",[a("v-uni-view",{staticClass:"display_flex_bet"},[a("v-uni-view",[a("v-uni-text",[t._v("退货数量：")]),a("v-uni-text",{staticStyle:{"margin-left":"10rpx",color:"#f30","font-weight":"bold"}},[t._v(t._s(e.num))])],1),a("v-uni-view",[a("v-uni-text",[t._v("退货单价：")]),a("v-uni-text",{staticStyle:{"margin-left":"10rpx",color:"#f30","font-weight":"bold"}},[t._v(t._s(e.retailPrice))])],1)],1),a("v-uni-view",{staticStyle:{"text-align":"right","margin-top":"10rpx"}},[t._v("总计："),a("v-uni-text",{staticStyle:{color:"#f30","font-weight":"bold"}},[t._v(t._s(e.total_money))])],1)],1):t._e(),3===t.seleted_tab?a("v-uni-view",{staticClass:"display_flex_bet"},[a("v-uni-view",[a("v-uni-text",[t._v("盘点前库存：")]),a("v-uni-text",{staticStyle:{"margin-left":"10rpx",color:"#f30","font-weight":"bold"}},[t._v(t._s(e.reserve))])],1),a("v-uni-view",[a("v-uni-text",[t._v("盘点后库存：")]),a("v-uni-text",{staticStyle:{"margin-left":"10rpx",color:"#f30","font-weight":"bold"}},[t._v(t._s(e.now_reserve))])],1)],1):t._e(),a("v-uni-view",{staticClass:"content_time"},[t._v(t._s(e.createdAt))])],1)}),1),3!=t.seleted_tab?a("v-uni-view",{staticClass:"display_flex_bet bottomEle"},[a("v-uni-view",[t._v(t._s(t.goodsName))]),a("v-uni-view",[a("v-uni-view",[t._v("总数:"),a("v-uni-text",{staticStyle:{color:"#f30"}},[t._v(t._s(t.total_num))])],1),a("v-uni-view",[t._v("总金额:"),a("v-uni-text",{staticStyle:{color:"#f30"}},[t._v(t._s(t.total_money))])],1)],1)],1):t._e()],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})}}]);