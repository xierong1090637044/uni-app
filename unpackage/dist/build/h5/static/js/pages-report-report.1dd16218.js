(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-report-report"],{"18da":function(e,n,t){var o=t("6d85");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var s=t("4f06").default;s("33ef6876",o,!0,{sourceMap:!1,shadowMode:!1})},4688:function(e,n,t){"use strict";var o=t("18da"),s=t.n(o);s.a},5999:function(e,n,t){"use strict";t.r(n);var o=t("89ea"),s=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);n["default"]=s.a},"6d85":function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* pages/home/index/index.wxss */.item[data-v-255cb5f6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.every_item[data-v-255cb5f6]{width:50%;text-align:center;line-height:%?30?%;font-size:%?14?%}.s_num[data-v-255cb5f6]{font-size:%?16?%;font-weight:700}.o_list[data-v-255cb5f6]{background:#fff;padding:0 %?15?% %?10?%}.o_item[data-v-255cb5f6]{width:100%;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?30?% 0;border-bottom:%?1?% solid#ddd}.o_left_item[data-v-255cb5f6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.o_text[data-v-255cb5f6]{color:#000;font-weight:700;font-size:%?24?%;margin-left:%?30?%}",""])},"89ea":function(e,n,t){"use strict";var o=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s,i=o(t("00eb")),a=o(t("b8eb")),r={components:{faIcon:i.default},data:function(){return{now_optionsLists:[],optionsLists:[{name:"入库记录",icon:"file-o",url:"/pages/report/EnteringHistory/EnteringHistory?type=1",color:"#2ca879"},{name:"出库记录",icon:"file-o",url:"/pages/report/EnteringHistory/EnteringHistory?type=-1",color:"#f30"},{name:"调拨记录",icon:"file-o",url:"/pages/report/EnteringHistory/EnteringHistory?type=-2",color:"#4e72b8"},{name:"客户退货记录",icon:"file-o",url:"/pages/report/EnteringHistory/EnteringHistory?type=2",color:"#b3b242"},{name:"盘点记录",icon:"file-o",url:"/pages/report/EnteringHistory/EnteringHistory?type=3",color:"#b3424a"},{name:"经营状况",icon:"recycle",url:"/pages/report/operational_status/operational_status",color:"#426ab3"}]}},onLoad:function(){s=this},onShow:function(){uni.getStorage({key:"identity",success:function(e){var n;"2"==e.data?a.default.get_satffAuth().then(function(e){console.log(e),n=e?e.rights.recodecurrent:uni.getStorageSync("user").rights.recodecurrent;var t=[];for(var o in n)t.push(s.optionsLists[o]);s.now_optionsLists=t}):"1"==e.data&&(s.now_optionsLists=s.optionsLists)}})},methods:{}};n.default=r},"9f42":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",[t("v-uni-view",{staticClass:"o_list"},e._l(e.now_optionsLists,function(n,o){return t("v-uni-navigator",{key:o,staticClass:"o_item",attrs:{url:n.url,"hover-class":"none"}},[t("v-uni-view",{staticClass:"o_left_item"},[t("v-uni-view",[t("fa-icon",{attrs:{type:n.icon,size:"20",color:n.color}})],1),t("span",{staticClass:"o_text"},[e._v(e._s(n.name))])],1),t("v-uni-view",[t("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1)}),1)],1)},s=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return s})},af3a:function(e,n,t){"use strict";t.r(n);var o=t("9f42"),s=t("5999");for(var i in s)"default"!==i&&function(e){t.d(n,e,function(){return s[e]})}(i);t("4688");var a=t("2877"),r=Object(a["a"])(s["default"],o["a"],o["b"],!1,null,"255cb5f6",null);n["default"]=r.exports},b8eb:function(e,n,t){"use strict";var o=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("7f7f");var s=o(t("f499"));t("7514");var i=o(t("795b")),a={get_satffAuth:function(){return new i.default(function(e,n){var t=uni.getStorageSync("user").objectId,o=Bmob.Query("staffs");o.get(t).then(function(n){e(n)}).catch(function(n){e()})})},get_stafflist:function(e,n){return new i.default(function(t,o){var i=JSON.parse(localStorage.getItem("bmob")).objectId,a=Bmob.Query("staffs");a.order("num"),a.equalTo("masterId","==",i),a.equalTo("disabled","==",e),a.include("shop"),n&&a.equalTo("name","==",{$regex:n+".*"}),a.find().then(function(e){localStorage.setItem("staffs",(0,s.default)(e)),t(e)})})},add_staff:function(e){var n=JSON.parse(localStorage.getItem("bmob")).objectId;return new i.default(function(t,o){var s=Bmob.Pointer("_User"),i=s.set(n),a=Bmob.Pointer("shops"),r=a.set(e.shop);if(e.objectId){var c=Bmob.Pointer("_User"),f=c.set(n),l=Bmob.Query("staffs");l.set("username",e.name),l.set("nickName",e.name),l.set("password",e.password),l.set("mobilePhoneNumber",e.mobilePhoneNumber),l.set("rights",e.rights),l.set("address",e.address),l.set("avatarUrl","http://bmob-cdn-23134.b0.upaiyun.com/2019/04/29/4705b31340bfff8080c068f52fd17e2c.png"),l.set("masterId",f),l.set("disabled",!e.disabled),l.set("shop",r),l.set("id",e.objectId),l.save().then(function(e){console.log(e),t(e)}).catch(function(e){console.log(e)})}else{var u=Bmob.Query("staffs");u.equalTo("masterId","==",n),u.equalTo("mobilePhoneNumber","==",e.mobilePhoneNumber),u.find().then(function(n){if(console.log(n),0==n.length){var o=Bmob.Query("staffs");o.set("username",e.name),o.set("shop",r),o.set("nickName",e.name),o.set("password",e.password),o.set("mobilePhoneNumber",e.mobilePhoneNumber),o.set("rights",e.rights),o.set("address",e.address),o.set("avatarUrl","http://bmob-cdn-23134.b0.upaiyun.com/2019/04/29/4705b31340bfff8080c068f52fd17e2c.png"),o.set("masterId",i),o.set("have_out",0),o.set("disabled",!e.disabled),o.save().then(function(e){console.log(e),t(e)}).catch(function(e){console.log(e)})}else t(!1,"已存在此账号")})}})},delete_staff:function(e){return new i.default(function(n,t){var o=Bmob.Query("staffs");o.destroy(e).then(function(e){n(e)}).catch(function(e){console.log(e)})})}};n.default=a}}]);