(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/setting/setting"],{"02f9":function(t,n,e){"use strict";e.r(n);var a=e("fe88"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=o.a},1466:function(t,n,e){},"204c":function(t,n,e){"use strict";var a=e("1466"),o=e.n(a);o.a},"504f":function(t,n,e){"use strict";(function(t){e("d510"),e("921b");a(e("66fd"));var n=a(e("bcb2"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},bcb2:function(t,n,e){"use strict";e.r(n);var a=e("fee0"),o=e("02f9");for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);e("204c");var u,r=e("f0c5"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);n["default"]=c.exports},fe88:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,o=i(e("2bc1"));function i(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{identity:"",user:"",inputCan:1!=t.getStorageSync("identity"),params:{show_float:"",USER:"",UKEY:"",number:0,wx_openid:"",wechat_info:!1,auto_print:!1,negativeOut:!1,production:!0}}},onLoad:function(){a=this,wx.getStorageSync("uid"),a.identity=t.getStorageSync("identity"),o.default.query_setting().then(function(t){t[0]&&(a.params.show_float=t[0].show_float?t[0].show_float:"",a.params.USER=t[0].USER?t[0].USER:"",a.params.UKEY=t[0].UKEY?t[0].UKEY:"",a.params.number=t[0].show_float?t[0].number:0,t[0].wx_openid?a.params.wechat_info=!0:a.params.wechat_info=!1,t[0].auto_print?a.params.auto_print=!0:a.params.auto_print=!1,t[0].negativeOut?a.params.negativeOut=!0:a.params.negativeOut=!1,1==t[0].production?a.params.production=!0:0==t[0].production?a.params.production=!1:a.params.production=!0)})},methods:{orderThisInfo:function(){wx.requestSubscribeMessage({tmplIds:["G2UJEDEyAtGuBdO-Yv96yBi-UnTLhaInr-KzEXqZ-48","BKT2_0OuWF3mLZGvFmpRzWFa_Dyr4EIppl_LFF1uRLE"],success:function(n){console.log(n),t.showToast({title:"订阅成功"})}})},modify_setting:function(){o.default.modify_setting(a.params)},showProduction:function(t){a.params.production=t.detail.value,o.default.modify_setting(a.params)},auto_print:function(t){a.params.auto_print=t.detail.value,o.default.modify_setting(a.params)},negativeOut:function(t){a.params.negativeOut=t.detail.value,o.default.modify_setting(a.params)},link_wechatinfo:function(n){var e=n.detail.value;e?(t.getStorageSync("openid"),t.showModal({title:"提示",content:'请关注服务号"库存表"进行关联',confirmText:"关闭",success:function(t){t.confirm||t.cancel&&console.log("用户点击取消")}})):(a.params.wx_openid="",o.default.modify_setting(a.params))}}};n.default=u}).call(this,e("543d")["default"])},fee0:function(t,n,e){"use strict";var a,o=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return a})}},[["504f","common/runtime","common/vendor"]]]);