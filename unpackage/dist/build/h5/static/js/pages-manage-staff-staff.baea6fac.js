(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-staff-staff"],{"2c03":function(t,e,n){"use strict";n.r(e);var a=n("dd9f"),i=n("576d");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("f344");var r,c=n("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"76a2b2c7",null,!1,a["a"],r);e["default"]=s.exports},"54f8":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");var a=n("dde1");function i(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(a["a"])(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o,r=!0,c=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return r=t.done,t},e:function(t){c=!0,o=t},f:function(){try{r||null==i["return"]||i["return"]()}finally{if(c)throw o}}}}},"576d":function(t,e,n){"use strict";n.r(e);var a=n("ce41"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},a9c5:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-76a2b2c7]{height:100vh;background:#fafafa}.uni-common-mt[data-v-76a2b2c7]{background:#fff;padding:%?20?% 0}.staff_name[data-v-76a2b2c7]{font-weight:700;font-size:%?30?%;color:#3d3d3d;margin-bottom:%?4?%}.staff_mobile[data-v-76a2b2c7]{color:#999}.right_item[data-v-76a2b2c7]{width:100%;border-bottom:%?1?% solid#ccc}.staff_avatar[data-v-76a2b2c7]{width:%?100?%;height:%?70?%;margin-right:%?20?%}.content[data-v-76a2b2c7]{padding:%?10?% %?30?%;background:#fff}body.?%PAGE?%[data-v-76a2b2c7]{background:#fafafa}",""]),t.exports=e},bad2:function(t,e,n){var a=n("a9c5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("587a0ec0",a,!0,{sourceMap:!1,shadowMode:!1})},ce41:function(t,e,n){"use strict";(function(t){var a=n("ee27");n("7db0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,o,r,c=a(n("54f8")),s=a(n("9546")),d=a(n("96bd")),l={components:{uniNavBar:d.default},data:function(){return{showOrder:!1,loading:!0,staffs:[],is_choose:!1,disabled:!1,staffHeader:{num:0,debtMoney:0},headerSelection:{order:{order:"-createdAt"},options:""},orders:[{desc:"创建日期",notice:"最新",order:"-createdAt",checked:!0},{desc:"创建日期",notice:"最晚",order:"createdAt",checked:!1},{desc:"名字",notice:"正序",order:"goodsName",checked:!1}]}},onLoad:function(e){i=this,uni.removeStorageSync(""),r=uni.getStorageSync("uid"),t.log(e),"choose"==e.type&&(i.is_choose=!0)},onShow:function(){uni.removeStorageSync("staff"),i.getstaff_list()},onUnload:function(){o=""},methods:{selectd:function(t){"order"==t?i.showOrder=!0:"options"==t&&(i.showOptions=!0)},selectOrder:function(t){var e,n=(0,c.default)(i.orders);try{for(n.s();!(e=n.n()).done;){var a=e.value;a.checked=!1}}catch(o){n.e(o)}finally{n.f()}t.checked=!0,i.headerSelection.order=t,i.getstaff_list()},makePhoneCall:function(t){t?uni.makePhoneCall({phoneNumber:t}):uni.showToast({icon:"none",title:"未填写联系电话"})},goto_detail:function(t){if(i.is_choose){var e=t;uni.setStorageSync("charge",e),uni.navigateBack({delta:1})}else uni.setStorageSync("staff",t),uni.navigateTo({url:"detail/detail"})},goto_add:function(){var e=uni.getStorageSync("user"),n=uni.getStorageSync("identity");e.is_vip||i.staffs.length<2?uni.navigateTo({url:"add/add"}):uni.showModal({title:"提示",content:"非会员最多上传2个员工账号",confirmText:"充值会员",success:function(e){e.confirm?1==n?uni.navigateTo({url:"/pages/mine/vip/vip"}):uni.showToast({title:"员工不能充值",icon:"none"}):e.cancel&&t.log("用户点击取消")}})},input_confirm:function(t){o=t.detail.value,i.getstaff_list()},getstaff_list:function(){var t=s.default.Query("_User");t.order("-createdAt"),t.equalTo("masterId","==",r),i.disabled&&t.equalTo("disabled","==",i.disabled),t.include("shop"),t.order(i.headerSelection.order.order),t.limit(500),o&&t.equalTo("username","==",{$regex:o+".*"}),t.find().then((function(t){i.loading=!1,i.staffs=t}))}}};e.default=l}).call(this,n("5a52")["default"])},dd9f:function(t,e,n){"use strict";var a={"uni-nav-bar":n("96bd").default,"uni-icon":n("3628").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.loading?n("loading"):t._e(),n("v-uni-view",{attrs:{"wx:else":!0}},[n("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"添加"},on:{"click-right":function(e){arguments[0]=e=t.$handleEvent(e),t.goto_add.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"input-view"},[n("uni-icon",{attrs:{type:"search",size:"22",color:"#666666"}}),n("v-uni-input",{staticClass:"input",attrs:{"confirm-type":"search",type:"text",placeholder:"输入搜索关键词"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.input_confirm.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"display_flex good_option_view",staticStyle:{background:"#fff"}},[n("v-uni-view",{staticClass:"good_option",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectd("order")}}},[n("v-uni-view",{staticClass:"good_optionText"},[t._v(t._s(t.headerSelection.order.desc||"排序"))]),n("fa-icon",{attrs:{type:"angle-down",size:"18",color:"#999"}})],1),n("v-uni-view",{staticClass:"good_option",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.option_reset.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"good_optionText"},[t._v("重置")]),n("fa-icon",{attrs:{type:"repeat",size:"16",color:"#999"}})],1)],1),n("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{padding:"10rpx 30rpx",background:"#FAFAFA",color:"#999"}},[n("v-uni-view",{staticStyle:{"font-size":"24rpx","font-weight":"500"}},[t._v("员工总数："+t._s(t.staffHeader.num))])],1),t.staffs&&t.staffs.length>0?n("v-uni-scroll-view",{staticClass:"indexes",staticStyle:{height:"calc(100vh - 212rpx)"},attrs:{"scroll-y":!0,"scroll-with-animation":"true","enable-back-to-top":"true"}},[n("v-uni-view",[n("v-uni-radio-group",t._l(t.staffs,(function(e,a){return n("v-uni-view",{key:a,staticClass:"display_flex_bet content normalBorder",attrs:{for:e.objectId}},[n("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{width:"100%"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.goto_detail(e)}}},[n("v-uni-view",{staticClass:"display_flex",staticStyle:{width:"94%"}},[n("fa-icon",{staticStyle:{"margin-right":"20rpx"},attrs:{type:"user-circle",size:"30",color:"#426ab3"}}),n("v-uni-view",{staticStyle:{width:"100%"}},[n("v-uni-view",{staticClass:"staff_name"},[t._v(t._s(e.nickName))]),n("v-uni-view",{staticClass:"display_flex_bet"},[n("v-uni-view",{staticClass:"staff_mobile"},[t._v("账号："+t._s(e.mobilePhoneNumber))]),n("v-uni-view",{staticClass:"display_flex",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.makePhoneCall(e.mobilePhoneNumber)}}},[n("fa-icon",{attrs:{type:"phone",size:"14",color:"#999"}}),n("v-uni-text",{staticStyle:{"margin-left":"10rpx","font-size":"24rpx"}},[t._v("打电话")])],1)],1)],1)],1),t.is_choose?n("v-uni-view",[n("v-uni-radio",{staticStyle:{transform:"scale(0.7)"},attrs:{value:JSON.stringify(e),id:e.objectId}})],1):n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1)})),1)],1),t.showOrder?n("v-uni-view",{staticClass:"modal_backgroundTransparent",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showOrder=!1}}},[n("v-uni-view",{staticClass:"showOptionsTransparent"},t._l(t.orders,(function(e,a){return n("v-uni-view",{key:a,staticClass:"display_flex_bet",staticStyle:{padding:"16rpx 30rpx","border-bottom":"1rpx solid#F7F7F7"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.selectOrder(e)}}},[n("v-uni-view",{staticStyle:{color:"#333"}},[t._v(t._s(e.desc)+"("+t._s(e.notice)+")")]),e.checked?n("fa-icon",{attrs:{type:"check",size:"18",color:"#2ca879"}}):t._e()],1)})),1)],1):t._e()],1):n("nocontent",{attrs:{type:1}})],1)],1)},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},f344:function(t,e,n){"use strict";var a=n("bad2"),i=n.n(a);i.a}}]);