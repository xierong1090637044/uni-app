(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-finance-CPHistory-costomInDet-costomInDet"],{3169:function(t,e,n){var o=n("453c");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("2c545aee",o,!0,{sourceMap:!1,shadowMode:!1})},"453c":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".frist[data-v-657c8d74]{background:#fff;padding:%?20?% %?30?%}.bottomEle[data-v-657c8d74]{position:fixed;bottom:0;left:0;background:#fff;width:100%;border-top:%?1?% solid#ddd}.moneyIcon[data-v-657c8d74]{color:#f30;border:%?1?% solid#f30;padding:%?0?% %?12?%;font-weight:700;text-align:center;font-size:%?24?%;margin-right:%?20?%;border-radius:%?4?%}.uni-common-mt[data-v-657c8d74]{padding:%?30?%}.content[data-v-657c8d74]{height:calc(100vh - %?80?%);background:#fff}.info_item[data-v-657c8d74]{padding:%?20?% %?30?%;background:#fff}.item[data-v-657c8d74]{border-bottom:%?1?% solid#ccc;padding-bottom:%?10?%;margin-bottom:%?10?%}.uni-label-pointer[data-v-657c8d74]{padding:0 %?20?%}",""]),t.exports=e},"54f8":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");var o=n("dde1");function i(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(o["a"])(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a,c=!0,l=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return c=t.done,t},e:function(t){l=!0,a=t},f:function(){try{c||null==i["return"]||i["return"]()}finally{if(l)throw a}}}}},5727:function(t,e,n){"use strict";n.r(e);var o=n("8416"),i=n("783e");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("842b");var c,l=n("f0c5"),r=Object(l["a"])(i["default"],o["b"],o["c"],!1,null,"657c8d74",null,!1,o["a"],c);e["default"]=r.exports},"783e":function(t,e,n){"use strict";n.r(e);var o=n("e104"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},8416:function(t,e,n){"use strict";var o,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-scroll-view",{staticStyle:{height:"calc(100vh - 90rpx)"},attrs:{"scroll-y":"true"}},[n("v-uni-view",{staticClass:"display_flex_bet frist"},[n("v-uni-view",[t.custom.custom_name?n("v-uni-view",{staticStyle:{"font-size":"30rpx",color:"#3d3d3d","font-weight":"bold"}},[t._v(t._s(t.custom.custom_name))]):t._e(),n("v-uni-view",[n("v-uni-text",[t._v("联系电话：")]),t.custom.custom_phone?n("v-uni-text",{staticStyle:{"font-size":"30rpx",color:"#3d3d3d","font-weight":"bold"}},[t._v(t._s(t.custom.custom_phone))]):n("v-uni-text",{staticStyle:{"font-size":"30rpx",color:"#3d3d3d","font-weight":"bold"}},[t._v("未填写")])],1)],1),n("v-uni-view",{staticClass:"display_flex"},[n("v-uni-view",{staticClass:"moneyIcon"},[t._v("待收：￥"+t._s(t.custom.allDebt)+"元")]),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#ddd"}})],1)],1),n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-checkbox-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkboxChange.apply(void 0,arguments)}}},t._l(t.shouldGetMoneyList,(function(e,o){return n("v-uni-label",{key:o,staticClass:"display_flex uni-label-pointer"},[n("v-uni-view",{staticStyle:{"margin-right":"10rpx"}},[n("v-uni-checkbox",{staticStyle:{transform:"scale(0.8)"},attrs:{value:""+o,checked:e.checked}})],1),n("v-uni-view",{staticClass:"borderBot",staticStyle:{padding:"20rpx 0",width:"calc(100% - 60rpx)"}},[n("v-uni-view",{staticClass:"color333"},[t._v("单据编号："+t._s(e.objectId))]),n("v-uni-view",{staticClass:"color333"},[t._v("单据日期："+t._s(e.createdAt))]),n("v-uni-view",{staticClass:"display_flex_bet"},[n("v-uni-view",{staticClass:"color333"},[t._v("应收金额："+t._s(e.real_money)+"元")]),n("v-uni-view",{staticClass:"moneyIcon"},[t._v("待收：￥"+t._s(e.debt)+"元")])],1),n("v-uni-view",{staticClass:"color333"},[t._v("已收："+t._s(e.haveGetMoney)+"元")])],1)],1)})),1)],1)],1),n("v-uni-view",{staticClass:"display_flex_bet bottomEle"},[n("v-uni-view",{staticClass:"display_flex",staticStyle:{"margin-left":"20rpx"}},[n("v-uni-radio",{staticStyle:{transform:"scale(0.8)"},attrs:{checked:t.isAllSelected},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectAll.apply(void 0,arguments)}}}),t._v("全选")],1),n("v-uni-view",{staticStyle:{height:"90rpx","line-height":"90rpx",background:"#426ab3",color:"#fff",padding:"0 30rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getOrderDet.apply(void 0,arguments)}}},[t._v("生成付款单")])],1)],1)},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},"842b":function(t,e,n){"use strict";var o=n("3169"),i=n.n(o);i.a},e104:function(t,e,n){"use strict";(function(t){var o=n("ee27");n("7db0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,a=o(n("54f8")),c=o(n("9546")),l=uni.getStorageSync("uid"),r={data:function(){return{customId:"",custom:"",shouldGetMoneyList:[],isAllSelected:!1}},onLoad:function(t){i=this,uni.setNavigationBarTitle({title:"应收账款明细"}),i.customId=t.customId},onShow:function(){i.loadData()},methods:{getOrderDet:function(){var t,e=[],n=(0,a.default)(i.shouldGetMoneyList);try{for(n.s();!(t=n.n()).done;){var o=t.value;1==o.checked&&(o.shouldGetMoney=o.debt,e.push(o))}}catch(c){n.e(c)}finally{n.f()}0!=e.length?(uni.setStorageSync("customInOrders",e),uni.navigateTo({url:"/pages/finance/CPHistory/customInOrder/customInOrder"})):uni.showToast({icon:"none",title:"请选择要收款的单据"})},checkboxChange:function(t){var e,n=t.detail.value,o=(0,a.default)(n);try{for(o.s();!(e=o.n()).done;){var c=e.value;i.shouldGetMoneyList[c].checked=!0}}catch(l){o.e(l)}finally{o.f()}n.length==i.shouldGetMoneyList.length?i.isAllSelected=!0:i.isAllSelected=!1},selectAll:function(){i.isAllSelected=!i.isAllSelected;var t,e=(0,a.default)(i.shouldGetMoneyList);try{for(e.s();!(t=e.n()).done;){var n=t.value;n.checked=i.isAllSelected}}catch(o){e.e(o)}finally{e.f()}},loadData:function(){var e;uni.showLoading({title:"加载中..."});var n=c.default.Query("customs");n.get(i.customId).then((function(n){t.log(n),e=n,uni.setStorageSync("custom",n);var o=c.default.Query("order_opreations");o.equalTo("type","==",-1),o.equalTo("extra_type","==",1),o.equalTo("master","==",l),o.equalTo("custom","==",i.customId),o.equalTo("debt",">",0),o.include("account","custom"),o.limit(500),o.find().then((function(t){var n,o=(0,a.default)(t);try{for(o.s();!(n=o.n()).done;){var c=n.value;c.haveGetMoney||(c.haveGetMoney=c.real_money-c.debt)}}catch(l){o.e(l)}finally{o.f()}i.shouldGetMoneyList=t,i.getDebtCount(e)}))}))},getDebtCount:function(t){var e=c.default.Query("order_opreations");e.equalTo("type","==",-1),e.equalTo("extra_type","==",1),e.equalTo("master","==",l),e.equalTo("custom","==",i.customId),e.equalTo("debt",">",0),e.include("account","custom"),e.statTo("sum","debt"),e.find().then((function(e){e.length>0?t.allDebt=e[0]._sumDebt:t.allDebt=0,i.custom=t,uni.hideLoading()}))}}};e.default=r}).call(this,n("5a52")["default"])}}]);