(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-good_det-custom_detail-custom_detail"],{"112b":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"Loading_view"},[n("v-uni-image",{staticClass:"loading_image",attrs:{src:"/static/timg.gif"}}),n("v-uni-view",{staticStyle:{color:"#999","margin-top":"3%"}},[t._v("加载中...")])],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"44a4":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".page-body[data-v-fb1d8ccc]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.nav[data-v-fb1d8ccc]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%}.nav-left[data-v-fb1d8ccc]{width:30%;background:#fff;border-right:solid %?1?% #e0e0e0}.nav-left-item[data-v-fb1d8ccc]{height:%?100?%;border-bottom:solid %?1?% #e0e0e0;font-size:%?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#3d3d3d;font-weight:700}.nav-right[data-v-fb1d8ccc]{width:70%;background:#fff}.nav-right-item[data-v-fb1d8ccc]{width:calc(100% - %?44?%);float:left;text-align:center;padding:0 %?20?%;font-size:%?24?%}.active[data-v-fb1d8ccc]{color:#007aff}",""])},"4eac":function(t,e,n){var i=n("44a4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("548414fa",i,!0,{sourceMap:!1,shadowMode:!1})},"4f23":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("7514");var o,a,c=i(n("bba2")),s=i(n("00eb")),u=i(n("b841")),r=(uni.getStorageSync("uid"),{components:{faIcon:s.default,loading:u.default},data:function(){return{custom_list:[],categoryList:[],subCategoryList:[],height:0,categoryActive:0,scrollTop:0,scrollHeight:0}},methods:{scroll:function(t){this.scrollHeight=t.detail.scrollHeight},categoryClickMain:function(t,e){this.categoryActive=e,this.scrollTop=-this.scrollHeight*e,this.get_detail(t)},get_detail:function(t){var e=this,n=Bmob.Query("Bills");n.equalTo("type","==",-1),n.equalTo("goodsId","==",a),n.equalTo("custom","==",t),n.include("operater","goodsId"),n.find().then(function(t){console.log(t),e.subCategoryList=t})}},onLoad:function(t){a=t.id,o=this,c.default.get_customList().then(function(t){o.custom_list=t,o.get_detail(t[0].objectId)}),this.height=uni.getSystemInfoSync().windowHeight}});e.default=r},"54b4":function(t,e,n){"use strict";n.r(e);var i=n("cdca"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"589c":function(t,e,n){"use strict";n.r(e);var i=n("7527"),o=n("ff2f");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("c79e");var c=n("2877"),s=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,"fb1d8ccc",null);e["default"]=s.exports},"6e33":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".Loading_view[data-v-b97421aa]{height:100vh;width:100%;text-align:center;background:#fff}.loading_image[data-v-b97421aa]{width:%?200?%;height:%?200?%;margin-top:50%}",""])},7527:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"page-body"},[n("v-uni-scroll-view",{staticClass:"nav-left",style:"height:"+t.height+"px",attrs:{"scroll-y":""}},t._l(t.custom_list,function(e,i){return n("v-uni-view",{key:i,staticClass:"nav-left-item",class:i==t.categoryActive?"active":"",on:{click:function(n){n=t.$handleEvent(n),t.categoryClickMain(e.objectId,i)}}},[t._v(t._s(e.custom_name))])}),1),n("v-uni-scroll-view",{staticClass:"nav-right",style:"height:"+t.height+"px",attrs:{"scroll-y":"","scroll-top":t.scrollTop,"scroll-with-animation":""},on:{scroll:function(e){e=t.$handleEvent(e),t.scroll(e)}}},t._l(t.subCategoryList,function(e,i){return n("v-uni-view",{key:i,staticClass:"nav-right-item",attrs:{id:0===i?"first":""}},[n("v-uni-view",{staticStyle:{"text-align":"left","border-bottom":"solid 1rpx #E0E0E0",padding:"20rpx 0"}},[n("v-uni-view",[t._v("销售商品："+t._s(e.goodsName))]),n("v-uni-view",{staticClass:"display_flex_bet"},[n("v-uni-view",[t._v("实际单价："+t._s(e.goodsId.retailPrice))]),n("v-uni-view",[t._v("卖出单价："+t._s(e.retailPrice))])],1),n("v-uni-view",{staticClass:"display_flex_bet"},[n("v-uni-view",[t._v("数量："+t._s(e.num))])],1),n("v-uni-view",[t._v("操作者："+t._s(e.operater.nickName))]),n("v-uni-view",[t._v(t._s(e.createdAt))])],1)],1)}),1)],1)],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},b841:function(t,e,n){"use strict";n.r(e);var i=n("112b"),o=n("54b4");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("c1c9");var c=n("2877"),s=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,"b97421aa",null);e["default"]=s.exports},bba2:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var o=i(n("5d73"));n("7514");var a=i(n("795b")),c={get_customList:function(t,e){return new a.default(function(n,i){var o=uni.getStorageSync("uid"),a=Bmob.Query("customs");a.order("num"),a.equalTo("parent","==",o),a.equalTo("disabled","==",t),e&&a.equalTo("name","==",{$regex:e+".*"}),a.find().then(function(t){n(t)})})},get_customCount:function(){return new a.default(function(t,e){var n=uni.getStorageSync("uid"),i=Bmob.Query("customs");i.equalTo("parent","==",n),i.find().then(function(e){var n=e,i=!0,a=!1,c=void 0;try{for(var s,u=function(){var t=s.value,e=Bmob.Query("Bills");e.equalTo("type","==",-1),e.equalTo("custom","==",t.objectId),e.find().then(function(e){t.relations=e})},r=(0,o.default)(n);!(i=(s=r.next()).done);i=!0)u()}catch(l){a=!0,c=l}finally{try{i||null==r.return||r.return()}finally{if(a)throw c}}t(n)})})},add_custom:function(t){console.log(t);var e=JSON.parse(localStorage.getItem("bmob")).objectId;return new a.default(function(n,i){var o=Bmob.Pointer("_User"),a=o.set(e);if(t.objectId){var c=Bmob.Query("customs");c.set("custom_name",t.custom_name),c.set("debt",Number(t.debt)),c.set("custom_address",t.custom_address),c.set("custom_phone",t.custom_phone),c.set("parent",a),c.set("disabled",!t.disabled),c.set("id",t.objectId),c.save().then(function(t){n(t)}).catch(function(t){console.log(t)})}else{var s=Bmob.Query("customs");s.equalTo("parent","==",e),s.equalTo("name","==",t.custom_name),s.find().then(function(e){if(console.log(e),0==e.length){var i=Bmob.Query("customs");i.set("custom_name",t.custom_name),i.set("debt",Number(t.debt)),i.set("custom_address",t.custom_address),i.set("custom_phone",t.custom_phone),i.set("have_out",0),i.set("disabled",!t.disabled),i.set("parent",a),i.save().then(function(t){n(t)}).catch(function(t){console.log(t)})}else n(!1)})}})},delete_custom:function(t){return new a.default(function(e,n){var i=Bmob.Query("customs");i.destroy(t).then(function(t){e(t)}).catch(function(t){console.log(t)})})},custom_detail:function(t){return new a.default(function(e,n){var i=Bmob.Query("customs");i.get(t).then(function(t){e(t)}).catch(function(t){console.log(t)})})},get_moneyList:function(t){return new a.default(function(e,n){var i=Bmob.Query("debt_history");i.equalTo("custom","==",t),i.include("operater"),i.find().then(function(t){console.log(t),e(t)})})}};e.default=c},c1c9:function(t,e,n){"use strict";var i=n("da86"),o=n.n(i);o.a},c79e:function(t,e,n){"use strict";var i=n("4eac"),o=n.n(i);o.a},cdca:function(t,e,n){},da86:function(t,e,n){var i=n("6e33");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("753d171d",i,!0,{sourceMap:!1,shadowMode:!1})},ff2f:function(t,e,n){"use strict";n.r(e);var i=n("4f23"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a}}]);