(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-shops-record-record"],{"0813":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c5f6");var i={name:"UniSegmentedControl",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:0}},watch:{current:function(e){e!==this.currentIndex&&(this.currentIndex=e)}},created:function(){this.currentIndex=this.current},methods:{_onClick:function(e){this.currentIndex!==e&&(this.currentIndex=e,this.$emit("clickItem",e))}}};t.default=i},1221:function(e,t,n){var i=n("7a5e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("085502a0",i,!0,{sourceMap:!1,shadowMode:!1})},"1f0b":function(e,t,n){var i=n("55516");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("54378106",i,!0,{sourceMap:!1,shadowMode:!1})},"1f15":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=uni.getSystemInfoSync().statusBarHeight+"px",a={name:"UniStatusBar",data:function(){return{statusBarHeight:i}}};t.default=a},"2b76":function(e,t,n){"use strict";var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("8f52")),o=i(n("5753")),r={name:"UniNavBar",components:{uniStatusBar:a.default,uniIcon:o.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:Boolean,default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:Boolean,default:!1},shadow:{type:Boolean,default:!0},border:{type:Boolean,default:!0}},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")}}};t.default=r},"421a":function(e,t,n){var i=n("e2d2");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("4bd347c2",i,!0,{sourceMap:!1,shadowMode:!1})},"4d05":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-navbar"},[n("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":e.fixed,"uni-navbar--shadow":e.border,"uni-navbar--border":e.border},style:{"background-color":e.backgroundColor}},[e.statusBar?n("uni-status-bar"):e._e(),n("v-uni-view",{staticClass:"uni-navbar__header",style:{color:e.color}},[n("v-uni-view",{staticClass:"uni-navbar__header-btns",on:{click:function(t){t=e.$handleEvent(t),e.onClickLeft(t)}}},[e.leftIcon.length?n("v-uni-view",[n("uni-icon",{attrs:{type:e.leftIcon,color:e.color,size:"24"}})],1):e._e(),e.leftText.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text",class:{"uni-navbar-btn-icon-left":!e.leftIcon.length}},[e._v(e._s(e.leftText))]):e._e(),e._t("left")],2),n("v-uni-view",{staticClass:"uni-navbar__header-container"},[e.title.length?n("v-uni-view",{staticClass:"uni-navbar__header-container-inner"},[e._v(e._s(e.title))]):e._e(),e._t("default")],2),n("v-uni-view",{staticClass:"uni-navbar__header-btns",on:{click:function(t){t=e.$handleEvent(t),e.onClickRight(t)}}},[e.rightIcon.length?n("v-uni-view",[n("uni-icon",{attrs:{type:e.rightIcon,color:e.color,size:"24"}})],1):e._e(),e.rightText.length&&!e.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text"},[e._v(e._s(e.rightText))]):e._e(),e._t("right")],2)],1)],1),e.fixed?n("v-uni-view",{staticClass:"uni-navbar__placeholder"},[e.statusBar?n("uni-status-bar"):e._e(),n("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):e._e()],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"52f2":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"segmented-control",class:{text:"text"===e.styleType},style:{borderColor:"text"===e.styleType?"":e.activeColor}},e._l(e.values,function(t,i){return n("v-uni-view",{key:i,staticClass:"segmented-control-item",class:[{text:"text"===e.styleType},{active:i===e.currentIndex}],style:{color:i===e.currentIndex?"text"===e.styleType?e.activeColor:"#fff":"text"===e.styleType?"#000":e.activeColor,backgroundColor:i===e.currentIndex&&"button"===e.styleType?e.activeColor:""},on:{click:function(t){t=e.$handleEvent(t),e._onClick(i)}}},[e._v(e._s(t))])}),1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},55516:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".page[data-v-4f836ea6]{overflow:hidden;height:calc(100vh - %?260?%);font-size:%?28?%;color:#3d3d3d;background:#fafafa}.input_item[data-v-4f836ea6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;line-height:%?80?%;padding:0 %?30?%}.pro_list[data-v-4f836ea6]{font-size:%?20?%!important;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.pro_listitem[data-v-4f836ea6]{background-color:#fff;padding:%?10?% %?20?%;border-bottom:%?1?% solid#ddd}.item[data-v-4f836ea6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#fff;padding:%?20?%;border-bottom:%?1?% solid#EEEEEE}.icon-order[data-v-4f836ea6]{font-size:%?44?%;color:#426ab3}.list-item[data-v-4f836ea6]{height:100%;overflow:scroll}.select_time[data-v-4f836ea6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;line-height:%?80?%;color:#999;padding:0 %?30?%}.item_beizhu[data-v-4f836ea6]{max-width:calc(100% - %?120?%);overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.order_get[data-v-4f836ea6]{padding:%?0?% %?30?%;color:#2ca879;border:%?0.5?% solid#2ca879;height:%?52?%;line-height:%?52?%;border-radius:%?8?%}.order_out[data-v-4f836ea6]{padding:0 15px;color:#f30;border:1px solid#f30;height:26px;line-height:26px;margin-top:7px;border-radius:4px}.order_counting[data-v-4f836ea6]{padding:0 15px;color:#000;border:1px solid#000;height:26px;line-height:26px;margin-top:7px;border-radius:4px}.order_returning[data-v-4f836ea6]{padding:0 15px;color:#b3b242;border:1px solid#b3b242;height:26px;line-height:26px;margin-top:7px;border-radius:4px}",""])},"5d8d":function(e,t,n){"use strict";(function(e){var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c5f6");var a=i(n("5d73"));n("7514"),n("7f7f");var o,r,l,s,u=i(n("df06")),c=i(n("c74b")),d=i(n("0914")),v=i(n("524a")),f=i(n("9bc6")),p=i(n("b92d")),b={components:{faIcon:d.default,loading:v.default,uniNavBar:p.default,uniSegmentedControl:f.default},data:function(){return{showOptions:!1,header:{total:0,total_money:0,get_money:0},loading:!0,items:["今天","昨天","近七天","近一个月"],list:[],current:0,now_day:u.default.getDay(0,!1),end_day:u.default.getDay(1,!1),max_day:u.default.getDay(0,!1),seleted_tab:-1,selected_text:"销售",types:[{name:"采购",type:1},{name:"销售",type:-1},{name:"退货",type:2}]}},onLoad:function(e){o=this,r=wx.getStorageSync("uid"),l=e.shopId,o.getdetail()},methods:{bindtypechange:function(t){e.log(t),s=t.detail.value,o.selected_text=o.types[s].name},option_confrim:function(){o.header={total:0,total_money:0,get_money:0},o.seleted_tab=o.types[s].type,o.showOptions=!1,o.getdetail()},option_reset:function(){o.header={total:0,total_money:0,get_money:0},o.seleted_tab=-1,o.selected_text="销售",o.now_day=u.default.getDay(0,!1),o.end_day=u.default.getDay(1,!1),o.max_day=u.default.getDay(0,!1),o.showOptions=!1,o.getdetail()},bindDateChange1:function(e){o.now_day=e.detail.value},bindDateChange2:function(e){o.end_day=e.detail.value},onClickItem:function(e){this.current!==e&&(this.current=e,o.header={total:0,total_money:0,get_money:0},0==e?(o.now_day=u.default.getDay(0,!1),o.end_day=u.default.getDay(1,!1)):1==e?(o.now_day=u.default.getDay(-1,!1),o.end_day=u.default.getDay(0,!1)):2==e?(o.now_day=u.default.getDay(-7,!1),o.end_day=u.default.getDay(1,!1)):3==e&&(o.now_day=u.default.getDay(-30,!1),o.end_day=u.default.getDay(1,!1)),o.getdetail())},getdetail:function(){var t=c.default.Query("Bills");t.equalTo("userId","==",r),t.equalTo("type","==",o.seleted_tab),t.equalTo("shop","==",l),t.equalTo("createdAt",">=",o.now_day+" 00:00:00"),t.equalTo("createdAt","<=",o.end_day+" 00:00:00"),t.order("-createdAt"),t.include("operater","goodsId"),t.find().then(function(t){e.log(t);var n=!0,i=!1,r=void 0;try{for(var l,s=(0,a.default)(t);!(n=(l=s.next()).done);n=!0){var u=l.value;e.log(u),o.header.total+=u.num,o.header.total_money+=Number(u.goodsId.costPrice)*u.num,o.header.get_money+=u.total_money-Number(u.goodsId.costPrice)*u.num}}catch(c){i=!0,r=c}finally{try{n||null==s.return||s.return()}finally{if(i)throw r}}o.list=t,o.loading=!1})}}};t.default=b}).call(this,n("5a52")["default"])},6931:function(e,t,n){var i=n("77dc");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("10de9ba5",i,!0,{sourceMap:!1,shadowMode:!1})},"77dc":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".uni-status-bar[data-v-0e05f980]{display:block;width:100%;height:20px;height:0}",""])},"7a5e":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'.uni-navbar__content[data-v-11835227]{display:block;position:relative;width:100%;background-color:#fff;overflow:hidden;padding:0 %?30?%;width:calc(100% - %?60?%)}.uni-navbar__content uni-view[data-v-11835227]{line-height:%?78?%}.uni-navbar__header[data-v-11835227]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;height:%?78?%;line-height:%?78?%;font-size:%?26?%;font-weight:700;color:#333}.uni-navbar__header-btns[data-v-11835227]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding:0 %?12?%}.uni-navbar__header-btns[data-v-11835227]:first-child{padding-left:0}.uni-navbar__header-btns[data-v-11835227]:last-child{text-align:right}.uni-navbar__header-container[data-v-11835227]{width:100%;margin:0 %?10?%}.uni-navbar__header-container-inner[data-v-11835227]{font-size:%?30?%;text-align:center;padding-right:%?60?%}.uni-navbar__placeholder-view[data-v-11835227]{height:%?88?%}.uni-navbar--fixed[data-v-11835227]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-11835227]{-webkit-box-shadow:0 1px 6px #ccc;box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-11835227]:after{position:absolute;z-index:3;bottom:0;left:0;right:0;height:1px;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}',""])},"850d":function(e,t,n){"use strict";n.r(t);var i=n("bd73"),a=n("a2ae");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("9952");var r=n("2877"),l=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"4f836ea6",null);t["default"]=l.exports},"8e11":function(e,t,n){"use strict";n.r(t);var i=n("2b76"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},"8f52":function(e,t,n){"use strict";n.r(t);var i=n("f1db"),a=n("d5c0");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("c47b");var r=n("2877"),l=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"0e05f980",null);t["default"]=l.exports},9952:function(e,t,n){"use strict";var i=n("1f0b"),a=n.n(i);a.a},"9bc6":function(e,t,n){"use strict";n.r(t);var i=n("52f2"),a=n("ede0");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("ba00");var r=n("2877"),l=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"5d782896",null);t["default"]=l.exports},a288:function(e,t,n){"use strict";var i=n("1221"),a=n.n(i);a.a},a2ae:function(e,t,n){"use strict";n.r(t);var i=n("5d8d"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},b92d:function(e,t,n){"use strict";n.r(t);var i=n("4d05"),a=n("8e11");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("a288");var r=n("2877"),l=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"11835227",null);t["default"]=l.exports},ba00:function(e,t,n){"use strict";var i=n("421a"),a=n.n(i);a.a},bd73:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-tab-bar"},[e.loading?n("loading"):n("v-uni-view",[n("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"筛选"},on:{"click-right":function(t){t=e.$handleEvent(t),e.showOptions=!0}}}),n("v-uni-view",[n("v-uni-view",{staticStyle:{background:"#FFFFFF","margin-top":"10rpx"}},[n("uni-segmented-control",{attrs:{current:e.current,values:e.items,"style-type":"text","active-color":"#426ab3"},on:{clickItem:function(t){t=e.$handleEvent(t),e.onClickItem(t)}}}),n("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{padding:"0rpx 30rpx","border-bottom":"10rpx solid#ddd","text-align":"center"}},[n("v-uni-view",[n("v-uni-view",[e._v(e._s(e.header.total))]),n("v-uni-view",{staticStyle:{color:"#999","font-size":"24rpx"}},[e._v("单品数")])],1),n("v-uni-view",[n("v-uni-view",[e._v("¥"+e._s(e.header.total_money))]),n("v-uni-view",{staticStyle:{color:"#999","font-size":"24rpx"}},[e._v("总额")])],1),-1==e.seleted_tab?n("v-uni-view",[n("v-uni-view",[e._v("¥"+e._s(e.header.get_money))]),n("v-uni-view",{staticStyle:{color:"#999","font-size":"24rpx"}},[e._v("毛利润")])],1):e._e()],1)],1)],1),n("v-uni-scroll-view",{staticClass:"page",attrs:{"scroll-y":"true"}},[1==e.seleted_tab?n("v-uni-view",{staticClass:"list-item"},e._l(e.list,function(t,i){return n("v-uni-view",{key:i},[n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticStyle:{display:"flex",width:"calc(100% - 120rpx)"}},[n("v-uni-view",{staticStyle:{"line-height":"80rpx"}},[n("fa-icon",{attrs:{type:"sign-in",size:"20",color:"#2ca879"}})],1),n("v-uni-view",{staticStyle:{"margin-left":"20rpx"}},[t.opreater?n("v-uni-view",[t.opreater.nickName?n("v-uni-view",[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("操作者：")]),t.opreater.nickName?n("v-uni-text",[e._v(e._s(t.opreater.nickName))]):e._e()],1):e._e()],1):e._e(),n("v-uni-view",[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("操作商品：")]),e._v(e._s(t.goodsName)+" 等...")],1),n("v-uni-view",[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("采购数量：")]),e._v(e._s(t.num))],1),t.beizhu?n("v-uni-view",{staticClass:"item_beizhu"},[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("备注：")]),e._v(e._s(t.beizhu))],1):e._e(),n("v-uni-view",[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("操作时间：")]),e._v(e._s(t.createdAt))],1)],1)],1),n("v-uni-view",{staticClass:"order_get"},[e._v("采购")])],1)],1)}),1):e._e(),-1==e.seleted_tab?n("v-uni-view",{staticClass:"list-item"},e._l(e.list,function(t,i){return n("v-uni-view",{key:i},[n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticStyle:{display:"flex",width:"calc(100% - 120rpx)"}},[n("v-uni-view",{staticStyle:{"line-height":"80rpx"}},[n("fa-icon",{attrs:{type:"sign-out",size:"20",color:"#f30"}})],1),n("v-uni-view",{staticStyle:{"margin-left":"20rpx"}},[t.opreater?n("v-uni-view",[t.opreater.nickName?n("v-uni-view",[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("操作者：")]),t.opreater.nickName?n("v-uni-text",[e._v(e._s(t.opreater.nickName))]):e._e()],1):e._e()],1):e._e(),n("v-uni-view",[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("操作商品：")]),e._v(e._s(t.goodsName)+" 等...")],1),n("v-uni-view",[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("销售数量：")]),e._v(e._s(t.num))],1),t.beizhu?n("v-uni-view",{staticClass:"item_beizhu"},[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("备注：")]),e._v(e._s(t.beizhu))],1):e._e(),n("v-uni-view",[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("操作时间：")]),e._v(e._s(t.createdAt))],1)],1)],1),n("v-uni-view",{staticClass:"order_out"},[e._v("销售")])],1)],1)}),1):e._e(),2==e.seleted_tab?n("v-uni-view",{staticClass:"list-item"},e._l(e.list,function(t,i){return n("v-uni-view",{key:i},[n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticStyle:{display:"flex",width:"calc(100% - 120rpx)"}},[n("v-uni-view",{staticStyle:{"line-height":"80rpx"}},[n("fa-icon",{attrs:{type:"sign-out",size:"20",color:"#b3b242"}})],1),n("v-uni-view",{staticStyle:{"margin-left":"20rpx"}},[t.opreater?n("v-uni-view",[t.opreater.nickName?n("v-uni-view",[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("操作者：")]),t.opreater.nickName?n("v-uni-text",[e._v(e._s(t.opreater.nickName))]):e._e()],1):e._e()],1):e._e(),n("v-uni-view",[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("操作商品：")]),e._v(e._s(t.goodsName)+" 等...")],1),n("v-uni-view",[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("退货数量：")]),e._v(e._s(t.num))],1),t.beizhu?n("v-uni-view",{staticClass:"item_beizhu"},[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("备注：")]),e._v(e._s(t.beizhu))],1):e._e(),n("v-uni-view",[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("操作时间：")]),e._v(e._s(t.createdAt))],1)],1)],1),n("v-uni-view",{staticClass:"order_returning"},[e._v("退货")])],1)],1)}),1):e._e()],1)],1),e.showOptions?n("v-uni-view",{staticClass:"modal_background",on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.showOptions=!1}}},[n("v-uni-view",{staticClass:"showOptions"},[n("v-uni-view",{staticClass:"input_item"},[n("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[n("v-uni-view",{staticStyle:{"margin-right":"10px"}},[e._v("类型")]),n("v-uni-picker",{staticClass:"select_type",staticStyle:{width:"500rpx"},attrs:{range:e.types,"range-key":"name"},on:{change:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.bindtypechange(t)},click:function(t){t.stopPropagation(),t=e.$handleEvent(t)}}},[e._v(e._s(e.selected_text))])],1),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1),n("v-uni-view",{staticClass:"input_item1"},[n("v-uni-view",[n("v-uni-picker",{attrs:{mode:"date",value:e.now_day,end:e.max_day},on:{change:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.bindDateChange1(t)},click:function(t){t.stopPropagation(),t=e.$handleEvent(t)}}},[n("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[n("v-uni-view",{staticStyle:{"margin-right":"20rpx"}},[e._v(e._s(e.now_day))]),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1)],1),n("v-uni-view",[e._v("至")]),n("v-uni-view",[n("v-uni-picker",{attrs:{mode:"date",value:e.end_day,end:e.max_day},on:{change:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.bindDateChange2(t)},click:function(t){t.stopPropagation(),t=e.$handleEvent(t)}}},[n("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[n("v-uni-view",{staticStyle:{"margin-right":"20rpx"}},[e._v(e._s(e.end_day))]),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1)],1)],1),n("v-uni-view",{staticClass:"option_bottom"},[n("v-uni-view",{staticClass:"selection",on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.option_reset(t)}}},[e._v("重置")]),n("v-uni-view",{staticClass:"selection1",on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.option_confrim(t)}}},[e._v("确定")])],1)],1)],1):e._e()],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},c47b:function(e,t,n){"use strict";var i=n("6931"),a=n.n(i);a.a},d5c0:function(e,t,n){"use strict";n.r(t);var i=n("1f15"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},df06:function(e,t,n){"use strict";(function(t){var i=n("288e");n("6b54"),n("87b3"),n("7514");var a=i(n("5d73"));n("c5f6");var o=i(n("795b")),r=i(n("c74b"));e.exports={enterAddGoodNum:function(e){return new o.default(function(n,i){for(var o=function(i){var o=0,l=r.default.Query("Goods");l.get(e[i].objectId).then(function(r){if(t.log(e[i]),e[i].selectd_model){var l=!0,s=!1,u=void 0;try{for(var c,d=(0,a.default)(e[i].selected_model);!(l=(c=d.next()).done);l=!0){var v=c.value,f=!0,p=!1,b=void 0;try{for(var g,y=(0,a.default)(e[i].models);!(f=(g=y.next()).done);f=!0){var _=g.value;_.id==v.id&&(_.reserve=Number(_.reserve)+Number(v.num))}}catch(h){p=!0,b=h}finally{try{f||null==y.return||y.return()}finally{if(p)throw b}}}}catch(h){s=!0,u=h}finally{try{l||null==d.return||d.return()}finally{if(s)throw u}}o=Number(e[i].reserve)+Number(e[i].num),r.set("models",e[i].models)}else o=Number(e[i].reserve)+Number(e[i].num);r.set("reserve",o),r.set("stocktype",o>e[i].warning_num?1:0),r.save(),i==e.length-1&&n(!0)}).catch(function(e){t.log(e)})},l=0;l<e.length;l++)o(l)})},outRedGoodNum:function(e){var n=this;return new o.default(function(i,o){for(var l=function(o){var l=0,s=r.default.Query("Goods");s.get(e[o].objectId).then(function(t){if(e[o].selectd_model){var r=!0,s=!1,u=void 0;try{for(var c,d=(0,a.default)(e[o].selectd_model);!(r=(c=d.next()).done);r=!0){var v=c.value,f=!0,p=!1,b=void 0;try{for(var g,y=(0,a.default)(e[o].models);!(f=(g=y.next()).done);f=!0){var _=g.value;l+=Number(_.reserve),_.id==v.id&&(_.reserve=Number(_.reserve)-Number(v.num))}}catch(h){p=!0,b=h}finally{try{f||null==y.return||y.return()}finally{if(p)throw b}}}}catch(h){s=!0,u=h}finally{try{r||null==d.return||d.return()}finally{if(s)throw u}}l=Number(e[o].reserve)-Number(e[o].num),t.set("models",e[o].models)}else l=Number(e[o].reserve)-Number(e[o].num);t.set("reserve",l),t.set("stocktype",l>=e[o].warning_num?1:0),t.save(),e[o].warning_num>=l&&n.log(e[o].goodsName+"出库了"+e[o].num+"件，已经低于预警数量"+e[o].warning_num,-2,e[o].objectId),n.record_staffOut(Number(e[o].num)),o==e.length-1&&i(!0)}).catch(function(e){t.log(e)})},s=0;s<e.length;s++)l(s)})},handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(e,n,i){var a=r.default.Pointer("_User"),o=a.set(uni.getStorageSync("uid")),l=r.default.Query("logs");l.set("parent",o),l.set("log",e),l.set("detail_id",i),l.set("type",n),l.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})},record_shopOut:function(e,n){t.log(e,n);var i=r.default.Query("shops");i.set("id",e),i.set("have_out",n),i.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})},record_staffOut:function(e){if(t.log(e,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var n=r.default.Query("staffs");n.set("id",uni.getStorageSync("user").objectId),n.set("have_out",Number(e)+uni.getStorageSync("user").have_out),n.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})}},get_allCost:function(){var e=uni.getStorageSync("uid");t.log(e);var n=r.default.Query("Goods");n.equalTo("userId","==",e),n.find().then(function(e){t.log(e);var n=!0,i=!1,o=void 0;try{for(var r,l=(0,a.default)(e);!(n=(r=l.next()).done);n=!0){var s=r.value;t.log(s),Number(s.costPrice)*s.reserve,s.reserve}}catch(u){i=!0,o=u}finally{try{n||null==l.return||l.return()}finally{if(i)throw o}}})},getDay:function(e,t){var n=this,i=new Date,a=i.getTime()+864e5*e;i.setTime(a);var o=i.getFullYear(),r=i.getMonth(),l=i.getDate();return r=n.handleMonth(r+1),l=n.handleMonth(l),t?o+"-"+r+"-"+l+" 00:00:00":o+"-"+r+"-"+l},js_date_time:function(e,t){var n=new Date(e),i=n.getFullYear(),a=n.getMonth()+1;a=a<10?"0"+a:a;var o=n.getDate();o=o<10?"0"+o:o;var r=n.getHours();r=r<10?"0"+r:r;var l=n.getMinutes(),s=n.getSeconds();return l=l<10?"0"+l:l,s=s<10?"0"+s:s,t?i+"-"+a+"-"+o+" "+r+":"+l:i+"-"+a+"-"+o},handleMonth:function(e){var t=e;return 1==e.toString().length&&(t="0"+e),t}}}).call(this,n("5a52")["default"])},e2d2:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".segmented-control[data-v-5d782896]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:75%;font-size:%?28?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;overflow:hidden;border:1px solid;border-radius:%?10?%}.segmented-control.text[data-v-5d782896]{border:0;border-radius:0}.segmented-control-item[data-v-5d782896]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;line-height:%?60?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-left:1px solid}.segmented-control-item.active[data-v-5d782896]{color:#fff}.segmented-control-item.text[data-v-5d782896]{border-left:0;color:#000}.segmented-control-item.text.active[data-v-5d782896]{border-bottom-style:solid}.segmented-control-item[data-v-5d782896]:first-child{border-left-width:0}",""])},ede0:function(e,t,n){"use strict";n.r(t);var i=n("0813"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},f1db:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-status-bar",style:{height:e.statusBarHeight}},[e._t("default")],2)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})}}]);