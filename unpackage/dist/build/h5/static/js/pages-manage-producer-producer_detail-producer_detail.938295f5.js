(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-producer-producer_detail-producer_detail"],{"1de5":function(t,e,i){var n=i("75f5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3305b812",n,!0,{sourceMap:!1,shadowMode:!1})},3574:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-015c2f1d]{color:#3d3d3d}.labeNotice[data-v-015c2f1d]{background:#426ab3;color:#fff;padding:%?2?% %?8?%;border-radius:%?8?%}.frist[data-v-015c2f1d]{background:#fff}.frist .header[data-v-015c2f1d]{padding:%?10?% 0}.frist .listItem[data-v-015c2f1d]{text-align:center;width:33.33%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.second[data-v-015c2f1d]{background:#fff;border-top:%?1?% solid #ddd;padding:%?20?% 0}.second .secondItem[data-v-015c2f1d]{width:50%;text-align:center}',""]),t.exports=e},"4aa5":function(t,e,i){"use strict";var n=i("813e"),a=i.n(n);a.a},6289:function(t,e,i){"use strict";var n={"uni-nav-bar":i("96bd").default,"uni-segmented-control":i("c952").default,"uni-calendar":i("ef70").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-nav-bar",{attrs:{fixed:!0,color:"#333333","background-color":"#FFFFFF","right-text":"操作"},on:{"click-right":function(e){arguments[0]=e=t.$handleEvent(e),t.show_options.apply(void 0,arguments)}}}),i("v-uni-view",[i("v-uni-view",{staticClass:"display_flex_bet frist",staticStyle:{background:"#fff",padding:"20rpx 30rpx"}},[i("v-uni-view",[t.producer.Images&&t.producer.Images.length>0?i("v-uni-image",{staticStyle:{width:"100rpx",height:"100rpx"},attrs:{src:t.producer.Images[0],mode:"aspectFit"}}):i("v-uni-image",{staticStyle:{height:"100rpx",width:"100rpx"},attrs:{src:"/static/custom.png",mode:"aspectFit"}})],1),i("v-uni-view",{staticStyle:{width:"calc(100% - 120rpx)"}},[i("v-uni-view",{staticStyle:{color:"#3d3d3d","font-weight":"bold"}},[i("v-uni-text",[t._v(t._s(t.producer.producer_name))]),t.producer.orginDebt?i("v-uni-text",{staticStyle:{"font-size":"20rpx",color:"#999"}},[t._v("（期初欠款：￥"+t._s(t.producer.orginDebt)+")")]):t._e()],1),i("v-uni-view",{staticClass:"display_flex_bet"},[i("v-uni-view",{staticClass:"noticeText"},[t._v("地址:"+t._s(t.producer.producer_address||"未填写"))]),i("v-uni-view",{staticClass:"noticeText"},[t._v("电话:"+t._s(t.producer.producer_phone||"未填写"))])],1),i("v-uni-view",{staticClass:"display_flex_bet"},[i("v-uni-view",[t._v("应付欠款："),i("v-uni-text",{staticStyle:{color:"#f30","font-weight":"bold"}},[t._v("￥"+t._s(t.producer.debt))])],1),i("v-uni-view",{staticClass:"display_flex labeNotice",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.makePhoneCall(t.producer.producer_phone)}}},[i("fa-icon",{attrs:{type:"phone",size:"14",color:"#fff"}}),i("v-uni-text",{staticStyle:{"margin-left":"10rpx","font-size":"24rpx"}},[t._v("打电话")])],1)],1)],1)],1),i("v-uni-view",{staticStyle:{margin:"30rpx 0"}},[i("uni-segmented-control",{attrs:{current:t.current,values:t.items,"style-type":"button","active-color":"#426ab3"},on:{clickItem:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickItem.apply(void 0,arguments)}}})],1),0==t.current?i("v-uni-view",[i("v-uni-view",{staticClass:"frist"},[i("v-uni-view",{staticClass:"display_flex_bet header"},[i("v-uni-view",{staticClass:"listItem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showOptions.apply(void 0,arguments)}}},[0==t.sellType?i("v-uni-text",[t._v("采购")]):1==t.sellType?i("v-uni-text",[t._v("退货")]):t._e(),i("fa-icon",{staticStyle:{"margin-left":"6rpx"},attrs:{type:"angle-down",size:"18",color:"#999"}})],1),i("v-uni-view",{staticClass:"display_flex listItem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",[i("v-uni-view",{staticStyle:{"font-size":"24rpx","line-height":"28rpx"}},[t._v(t._s(t.sellParams.startDate))]),i("v-uni-view",{staticStyle:{"font-size":"24rpx","line-height":"28rpx"}},[t._v(t._s(t.sellParams.endDate))])],1),i("fa-icon",{staticStyle:{"margin-left":"6rpx"},attrs:{type:"angle-down",size:"18",color:"#999"}})],1)],1)],1),i("v-uni-view",{staticClass:"display_flex_bet second"},[i("v-uni-view",{staticClass:"secondItem"},[i("v-uni-view",{staticStyle:{"line-height":"40rpx",color:"#333","font-weight":"bold"}},[t._v(t._s(t.buyTotal.num||0))]),i("v-uni-view",{staticStyle:{"line-height":"40rpx",color:"#999","font-size":"24rpx"}},[0==t.sellType?i("v-uni-text",[t._v("采购笔数")]):t._e(),1==t.sellType?i("v-uni-text",[t._v("退款笔数")]):t._e()],1)],1),i("v-uni-view",{staticClass:"secondItem"},[i("v-uni-view",{staticStyle:{"line-height":"40rpx",color:"#333","font-weight":"bold"}},[t._v(t._s(t.buyTotal.total||0))]),i("v-uni-view",{staticStyle:{"line-height":"40rpx",color:"#999","font-size":"24rpx"}},[0==t.sellType?i("v-uni-text",[t._v("采购数量")]):t._e(),1==t.sellType?i("v-uni-text",[t._v("退货数量")]):t._e()],1)],1),i("v-uni-view",{staticClass:"secondItem"},[i("v-uni-view",{staticStyle:{"line-height":"40rpx",color:"#333","font-weight":"bold"}},[t._v("￥"+t._s(t.buyTotal.money||0))]),i("v-uni-view",{staticStyle:{"line-height":"40rpx",color:"#999","font-size":"24rpx"}},[0==t.sellType?i("v-uni-text",[t._v("采购金额")]):t._e(),1==t.sellType?i("v-uni-text",[t._v("退款金额")]):t._e()],1)],1),0==t.sellType?i("v-uni-view",{staticClass:"secondItem"},[i("v-uni-view",{staticStyle:{"line-height":"40rpx",color:"#333","font-weight":"bold"}},[t._v("￥"+t._s(t.buyTotal.realMoney||0))]),i("v-uni-view",{staticStyle:{"line-height":"40rpx",color:"#999","font-size":"24rpx"}},[i("v-uni-text",[t._v("实际采购金额")])],1)],1):t._e()],1)],1):1==t.current?i("v-uni-view",[i("v-uni-view",{staticClass:"frist"},[i("v-uni-view",{staticClass:"display_flex_bet header"},[i("v-uni-view",{staticClass:"listItem"},[i("v-uni-text",[t._v("还款")]),i("fa-icon",{staticStyle:{"margin-left":"6rpx"},attrs:{type:"angle-down",size:"18",color:"#999"}})],1),i("v-uni-view",{staticClass:"display_flex listItem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",[i("v-uni-view",{staticStyle:{"font-size":"24rpx","line-height":"28rpx"}},[t._v(t._s(t.sellParams.startDate))]),i("v-uni-view",{staticStyle:{"font-size":"24rpx","line-height":"28rpx"}},[t._v(t._s(t.sellParams.endDate))])],1),i("fa-icon",{staticStyle:{"margin-left":"6rpx"},attrs:{type:"angle-down",size:"18",color:"#999"}})],1)],1)],1),i("v-uni-view",{staticClass:"display_flex_bet second"},[i("v-uni-view",{staticClass:"secondItem"},[i("v-uni-view",{staticStyle:{"line-height":"40rpx",color:"#333","font-weight":"bold"}},[t._v(t._s(t.getMoney.num||0))]),i("v-uni-view",{staticStyle:{"line-height":"40rpx",color:"#999","font-size":"24rpx"}},[i("v-uni-text",[t._v("还款笔数")])],1)],1),i("v-uni-view",{staticClass:"secondItem"},[i("v-uni-view",{staticStyle:{"line-height":"40rpx",color:"#333","font-weight":"bold"}},[t._v(t._s(t.getMoney.money||0))]),i("v-uni-view",{staticStyle:{"line-height":"40rpx",color:"#999","font-size":"24rpx"}},[i("v-uni-text",[t._v("还款金额")])],1)],1)],1)],1):t._e()],1),i("uni-calendar",{ref:"calendar",attrs:{date:t.sellParams.startDate,insert:!1,lunar:!0,range:!0,endDate:t.sellParams.startDate},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}}),i("producerDetBottom",{attrs:{producer:t.producer}})],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"631f":function(t,e,i){"use strict";i.r(e);var n=i("9e50"),a=i("cb3f");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("6ef2");var r,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"ce7def32",null,!1,n["a"],r);e["default"]=l.exports},"6ef2":function(t,e,i){"use strict";var n=i("1de5"),a=i.n(n);a.a},"75f5":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".Listitem[data-v-ce7def32]{width:25%;text-align:center}.Icon[data-v-ce7def32]{line-height:%?40?%}.Notice[data-v-ce7def32]{line-height:%?32?%;font-size:%?24?%;color:#333}",""]),t.exports=e},"813e":function(t,e,i){var n=i("3574");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("01acecff",n,!0,{sourceMap:!1,shadowMode:!1})},"9e50":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{width:"100%",display:"flex","justify-content":"space-between",position:"fixed",bottom:"0",background:"#fff","z-index":"100",padding:"12rpx 0","border-top":"1rpx solid#DDDDDD"}},[i("v-uni-view",{staticClass:"Listitem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.edit.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"Icon"},[i("fa-icon",{attrs:{type:"pencil-square-o",size:"18",color:"#426ab3"}})],1),i("v-uni-view",{staticClass:"Notice"},[t._v("编辑")])],1),i("v-uni-view",{staticClass:"Listitem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotopay.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"Icon"},[i("fa-icon",{attrs:{type:"money",size:"18",color:"#426ab3"}})],1),i("v-uni-view",{staticClass:"Notice"},[t._v("还款")])],1),i("v-uni-navigator",{staticClass:"Listitem",attrs:{"hover-class":"none",url:"debt_history/debt_history?id="+t.producer.objectId}},[i("v-uni-view",{staticClass:"Icon"},[i("fa-icon",{attrs:{type:"fax",size:"18",color:"#426ab3"}})],1),i("v-uni-view",{staticClass:"Notice"},[t._v("还款记录")])],1),i("v-uni-navigator",{staticClass:"Listitem",attrs:{url:"history/history?id="+t.producer.objectId}},[i("v-uni-view",{staticClass:"Icon"},[i("fa-icon",{attrs:{type:"calendar-check-o",size:"18",color:"#426ab3"}})],1),i("v-uni-view",{staticClass:"Notice"},[t._v("交易记录")])],1),i("v-uni-view",{staticClass:"Listitem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sellRecord.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"Icon"},[i("fa-icon",{attrs:{type:"sign-in",size:"18",color:"#426ab3"}})],1),i("v-uni-view",{staticClass:"Notice"},[t._v("采购单")])],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},a2b5:function(t,e,i){"use strict";(function(t){var n=i("ee27");i("7db0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,o,r=n(i("9546")),s=n(i("7fd5")),l=n(i("7faa")),c=n(i("c952")),u=n(i("ef70")),d=n(i("631f")),v={components:{producerDetBottom:d.default,uniCalendar:u.default,uniSegmentedControl:c.default},data:function(){return{items:["采购情况","还款记录"],current:0,sellType:0,producer:{},sellParams:{producerId:"",startDate:s.default.getDay(0,!1),endDate:s.default.getDay(1,!1),type:1,extra_type:1},buyTotal:{},getMoney:{}}},onLoad:function(t){a=this,a.sellParams.producerId=t.id,o=uni.getStorageSync("uid")},onShow:function(){l.default.producer_detail(a.sellParams.producerId).then((function(t){var e=t,i=r.default.Query("order_opreations");i.equalTo("type","==",1),i.equalTo("extra_type","==",1),i.equalTo("master","==",o),i.equalTo("producer","==",a.sellParams.producerId),i.statTo("sum","debt"),i.find().then((function(t){t.length>0?e.debt=t[0]._sumDebt:e.debt=0,a.producer=e})),a.sellParams.producerId=t.objectId,0==a.current?l.default.getAllProducerSellList(a.sellParams).then((function(t){a.buyTotal=t})):1==a.current&&l.default.getAllProducerInRecord(a.sellParams).then((function(t){a.getMoney=t}))}))},methods:{showOptions:function(){uni.showActionSheet({itemList:["采购","退货"],success:function(t){0==t.tapIndex?(a.sellType=0,a.sellParams.type=1,a.sellParams.extra_type=1):(a.sellType=1,a.sellParams.type=-1,a.sellParams.extra_type=4),l.default.getAllProducerSellList(a.sellParams).then((function(t){a.buyTotal=t}))}})},open:function(){a.$refs.calendar.open()},confirm:function(e){t.log(e),0==e.range.data.length?a.sellParams.startDate=e.fulldate:(a.sellParams.startDate=e.range.data[0],a.sellParams.endDate=e.range.data[e.range.data.length-1]),0==a.current?l.default.getAllProducerSellList(a.sellParams).then((function(e){t.log(e),a.buyTotal=e})):1==value&&l.default.getAllProducerInRecord(a.sellParams).then((function(e){t.log(e),a.getMoney=e}))},onClickItem:function(e){a.current=e,0==a.current?l.default.getAllProducerSellList(a.sellParams).then((function(e){t.log(e),a.buyTotal=e})):1==a.current&&l.default.getAllProducerInRecord(a.sellParams).then((function(e){t.log(e),a.getMoney=e}))},makePhoneCall:function(t){t?uni.makePhoneCall({phoneNumber:t}):uni.showToast({icon:"none",title:"未填写联系电话"})},show_options:function(){uni.showActionSheet({itemList:["编辑","删除"],success:function(t){0==t.tapIndex?a.edit(a.producer):1==t.tapIndex&&a.delete_this(a.producer.objectId)},fail:function(e){t.log(e.errMsg)}})},edit:function(t){uni.setStorageSync("producers",t),uni.setStorageSync("producer_type","producers"),uni.navigateTo({url:"../add/add"})},delete_this:function(t){uni.showModal({title:"提示",content:"是否删除此客户",success:function(e){e.confirm&&a.delete_data("producers",t)}})},delete_data:function(e,i){t.log(i);var n=r.default.Query(e);n.destroy(i).then((function(e){t.log(e),uni.showToast({title:"删除成功",icon:"none"}),uni.navigateBack({delta:1})})).catch((function(e){t.log(e)}))}}};e.default=v}).call(this,i("5a52")["default"])},a9fd:function(t,e,i){"use strict";i.r(e);var n=i("a2b5"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},cb3f:function(t,e,i){"use strict";i.r(e);var n=i("f118"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},d6b9:function(t,e,i){"use strict";i.r(e);var n=i("6289"),a=i("a9fd");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("4aa5");var r,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"015c2f1d",null,!1,n["a"],r);e["default"]=l.exports},f118:function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(i("9546")),n(i("7fd5"));var a,o={props:{producer:{type:Object,default:{}}},data:function(){return{}},mounted:function(){a=this},methods:{gotopay:function(){uni.navigateTo({url:"/pages/finance/CPHistory/producerOutDet/producerOutDet?producerId="+a.producer.objectId})},edit:function(){uni.setStorageSync("producers",a.producer),uni.navigateTo({url:"../add/add"})},sellRecord:function(){uni.setStorageSync("producer",a.producer),uni.navigateTo({url:"/pages/common/goods-select/goods-select?type=delivery&value=3"})}}};e.default=o}}]);