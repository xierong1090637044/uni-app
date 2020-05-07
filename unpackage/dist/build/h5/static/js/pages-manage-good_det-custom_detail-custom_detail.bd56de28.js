(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-good_det-custom_detail-custom_detail"],{"06fa":function(e,t,a){var n=a("9490");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("4f06").default;o("7ba15b98",n,!0,{sourceMap:!1,shadowMode:!1})},"114b":function(e,t,a){"use strict";(function(e){var n=a("ee27");a("7db0"),a("a9e3"),a("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("54f8")),i=n(a("9546")),r=uni.getStorageSync("uid"),u={get_customList:function(e,t){return new Promise((function(a,n){var o=uni.getStorageSync("uid"),r=i.default.Query("customs");r.order("num"),r.equalTo("parent","==",o),r.equalTo("disabled","==",e),t&&r.equalTo("name","==",{$regex:t+".*"}),r.find().then((function(e){a(e)}))}))},get_customCount:function(){return new Promise((function(e,t){var a=uni.getStorageSync("uid"),n=i.default.Query("customs");n.equalTo("parent","==",a),n.find().then((function(t){var a,n=t,r=(0,o.default)(n);try{var u=function(){var e=a.value,t=i.default.Query("Bills");t.equalTo("type","==",-1),t.equalTo("custom","==",e.objectId),t.find().then((function(t){e.relations=t}))};for(r.s();!(a=r.n()).done;)u()}catch(s){r.e(s)}finally{r.f()}e(n)}))}))},add_custom:function(t){e.log(t);var a=JSON.parse(localStorage.getItem("bmob")).objectId;return new Promise((function(n,o){var r=i.default.Pointer("_User"),u=r.set(a);if(t.objectId){var s=i.default.Query("customs");s.set("custom_name",t.custom_name),s.set("debt",Number(t.debt)),s.set("custom_address",t.custom_address),s.set("custom_phone",t.custom_phone),s.set("parent",u),s.set("disabled",!t.disabled),s.set("id",t.objectId),s.save().then((function(e){n(e)})).catch((function(t){e.log(t)}))}else{var l=i.default.Query("customs");l.equalTo("parent","==",a),l.equalTo("name","==",t.custom_name),l.find().then((function(a){if(e.log(a),0==a.length){var o=i.default.Query("customs");o.set("custom_name",t.custom_name),o.set("debt",Number(t.debt)),o.set("custom_address",t.custom_address),o.set("custom_phone",t.custom_phone),o.set("have_out",0),o.set("disabled",!t.disabled),o.set("parent",u),o.save().then((function(e){n(e)})).catch((function(t){e.log(t)}))}else n(!1)}))}}))},delete_custom:function(t){return new Promise((function(a,n){var o=i.default.Query("customs");o.destroy(t).then((function(e){a(e)})).catch((function(t){e.log(t)}))}))},custom_detail:function(t){return new Promise((function(a,n){var o=i.default.Query("customs");o.include("customFristClass","customSecondClass"),o.get(t).then((function(e){a(e)})).catch((function(t){e.log(t)}))}))},get_moneyList:function(t){return new Promise((function(a,n){var o=i.default.Query("order_opreations");o.equalTo("custom","==",t),o.include("opreater","account"),o.find().then((function(t){e.log(t),a(t)}))}))},getCustomSellList:function(e){return new Promise((function(t,a){var n=i.default.Query("order_opreations");n.equalTo("master","==",r),n.equalTo("type","==",-1),n.equalTo("extra_type","==",1),n.equalTo("extra_type","==",1),n.equalTo("custom","==",e.customId),n.equalTo("status","==",!0),n.equalTo("createdAt",">=",e.startDate),n.equalTo("createdAt","<=",e.endDate),n.limit(50),n.skip(50*(e.pageNum-1)),n.include("opreater","custom","stock"),n.order("-createdAt"),n.find().then((function(e){t(e)}))}))},getAllCustomSellList:function(e){var t={},a=0,n=0,u=0,s=0,l=0;return new Promise((function(c,d){var f=i.default.Query("order_opreations");f.equalTo("master","==",r),f.equalTo("type","==",e.type),f.equalTo("extra_type","==",e.extra_type),f.equalTo("custom","==",e.customId),f.equalTo("status","==",!0),f.equalTo("createdAt",">=",e.startDate+" 00:00:01"),f.equalTo("createdAt","<=",e.endDate+" 00:00:01"),f.count().then((function(i){u=i;var d=0;if(0==u)t.total=a,t.num=u,t.money=n,t.realMoney=0,t.realCost=0,c(t);else for(var v=0;v<Math.ceil(u/500);v++)f.equalTo("master","==",r),f.equalTo("type","==",e.type),f.equalTo("extra_type","==",e.extra_type),f.equalTo("custom","==",e.customId),f.equalTo("status","==",!0),f.limit(500),f.skip(500*v),f.include("opreater","custom","stock"),f.order("-createdAt"),f.equalTo("createdAt",">=",e.startDate+" 00:00:01"),f.equalTo("createdAt","<=",e.endDate+" 00:00:01"),f.find().then((function(e){var i,r=(0,o.default)(e);try{for(r.s();!(i=r.n()).done;){var f=i.value;a+=f.real_num,n+=f.all_money,s+=f.real_money,l+=f.allCostPrice,d+=1}}catch(v){r.e(v)}finally{r.f()}d==u&&(t.total=a,t.num=u,t.money=n,t.realMoney=s,t.realCost=l,c(t))}))}))}))},getAllCustomInRecord:function(e){var t={},a=0,n=0;return new Promise((function(u,s){var l=i.default.Query("order_opreations");l.equalTo("master","==",r),l.equalTo("type","==",-1),l.equalTo("extra_type","==",5),l.equalTo("custom","==",e.customId),l.equalTo("createdAt",">=",e.startDate+" 00:00:01"),l.equalTo("createdAt","<=",e.endDate+" 00:00:01"),l.count().then((function(i){n=i;var s=0;if(0==n)t.num=n,t.money=a,u(t);else for(var c=0;c<Math.ceil(n/500);c++)l.equalTo("master","==",r),l.equalTo("type","==",-1),l.equalTo("extra_type","==",5),l.equalTo("custom","==",e.customId),l.limit(500),l.skip(500*c),l.order("-createdAt"),l.equalTo("createdAt",">=",e.startDate+" 00:00:01"),l.equalTo("createdAt","<=",e.endDate+" 00:00:01"),l.find().then((function(e){var i,r=(0,o.default)(e);try{for(r.s();!(i=r.n()).done;){var l=i.value;a+=l.real_money,s+=1}}catch(c){r.e(c)}finally{r.f()}s==n&&(t.num=n,t.money=a,u(t))}))}))}))}};t.default=u}).call(this,a("5a52")["default"])},"18a5":function(e,t,a){"use strict";(function(e){var n=a("ee27");a("7db0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i,r=n(a("9546")),u=n(a("114b")),s=n(a("4d52")),l=n(a("120a")),c=(uni.getStorageSync("uid"),{components:{faIcon:s.default,loading:l.default},data:function(){return{custom_list:[],categoryList:[],subCategoryList:[],height:0,categoryActive:0,scrollTop:0,scrollHeight:0}},methods:{scroll:function(e){this.scrollHeight=e.detail.scrollHeight},categoryClickMain:function(e,t){this.categoryActive=t,this.scrollTop=-this.scrollHeight*t,this.get_detail(e)},get_detail:function(t){var a=this,n=r.default.Query("Bills");n.equalTo("type","==",-1),n.equalTo("goodsId","==",i),n.equalTo("custom","==",t),n.include("operater","goodsId","opreater"),n.find().then((function(t){e.log(t),a.subCategoryList=t}))}},onLoad:function(e){i=e.id,o=this,u.default.get_customList().then((function(e){o.custom_list=e,o.get_detail(e[0].objectId)})),this.height=uni.getSystemInfoSync().windowHeight}});t.default=c}).call(this,a("5a52")["default"])},"1e91e":function(e,t,a){"use strict";a.r(t);var n=a("8526"),o=a("a0b2");for(var i in o)"default"!==i&&function(e){a.d(t,e,(function(){return o[e]}))}(i);a("7443d");var r,u=a("f0c5"),s=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"4cad3941",null,!1,n["a"],r);t["default"]=s.exports},"54f8":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));a("a4d3"),a("e01a"),a("d28b"),a("e260"),a("d3b7"),a("3ca3"),a("ddb0");var n=a("dde1");function o(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n["a"])(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,r=!0,u=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return r=e.done,e},e:function(e){u=!0,i=e},f:function(){try{r||null==o["return"]||o["return"]()}finally{if(u)throw i}}}}},"7443d":function(e,t,a){"use strict";var n=a("06fa"),o=a.n(n);o.a},8526:function(e,t,a){"use strict";var n,o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"page-body"},[a("v-uni-scroll-view",{staticClass:"nav-left",style:"height:"+e.height+"px",attrs:{"scroll-y":!0}},e._l(e.custom_list,(function(t,n){return a("v-uni-view",{key:n,staticClass:"nav-left-item",class:n==e.categoryActive?"active":"",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.categoryClickMain(t.objectId,n)}}},[e._v(e._s(t.custom_name))])})),1),a("v-uni-scroll-view",{staticClass:"nav-right",style:"height:"+e.height+"px",attrs:{"scroll-y":!0,"scroll-top":e.scrollTop,"scroll-with-animation":!0},on:{scroll:function(t){arguments[0]=t=e.$handleEvent(t),e.scroll.apply(void 0,arguments)}}},e._l(e.subCategoryList,(function(t,n){return a("v-uni-view",{key:n,staticClass:"nav-right-item",attrs:{id:0===n?"first":""}},[a("v-uni-view",{staticStyle:{"text-align":"left","border-bottom":"solid 1rpx #E0E0E0",padding:"20rpx 0"}},[a("v-uni-view",[e._v("销售商品："+e._s(t.goodsName))]),a("v-uni-view",{staticClass:"display_flex_bet"},[a("v-uni-view",[e._v("实际单价："+e._s(t.goodsId.retailPrice))]),a("v-uni-view",[e._v("卖出单价："+e._s(t.retailPrice))])],1),a("v-uni-view",{staticClass:"display_flex_bet"},[a("v-uni-view",[e._v("数量："+e._s(t.num))])],1),t.operater?a("v-uni-view",[e._v("操作者："+e._s(t.operater.nickName))]):t.opreater?a("v-uni-view",[e._v("操作者："+e._s(t.opreater.nickName))]):e._e(),a("v-uni-view",[e._v(e._s(t.createdAt))])],1)],1)})),1)],1)],1)},i=[];a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return n}))},9490:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".page-body[data-v-4cad3941]{display:-webkit-box;display:-webkit-flex;display:flex}.nav[data-v-4cad3941]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%}.nav-left[data-v-4cad3941]{width:30%;background:#fff;border-right:solid %?1?% #e0e0e0}.nav-left-item[data-v-4cad3941]{height:%?100?%;border-bottom:solid %?1?% #e0e0e0;font-size:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#3d3d3d;font-weight:700}.nav-right[data-v-4cad3941]{width:70%;background:#fff}.nav-right-item[data-v-4cad3941]{width:calc(100% - %?44?%);float:left;text-align:center;padding:0 %?20?%;font-size:%?24?%}.active[data-v-4cad3941]{color:#007aff}",""]),e.exports=t},a0b2:function(e,t,a){"use strict";a.r(t);var n=a("18a5"),o=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);t["default"]=o.a}}]);