(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/vip/vip"],{"036e":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=c(n("906f"));function c(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{user:e.getStorageSync("user"),selected_price:10}},onLoad:function(){o=this},methods:{selected_this:function(e){console.log(e),o.selected_price=Number(e)},pay_off:function(){o.user.is_vip?e.showToast({title:"您已经是VIP了",icon:"none"}):o.pay().then(function(t){if(t){var n=i.default.Query("_User");n.get(o.user.objectId).then(function(t){var n=(new Date).getTime();10==o.selected_price?(t.set("vip_time",n+2592e6),o.user.vip_time=n+2592e6):25==o.selected_price?(t.set("vip_time",n+7776e6),o.user.vip_time=n+7776e6):100==o.selected_price&&(t.set("vip_time",n+31104e6),o.user.vip_time=n+31104e6),t.set("is_vip",!0),t.save(),o.user.is_vip=!0,e.setStorageSync("user",o.user)}).catch(function(e){console.log(e)})}else e.showToast({title:"充值失败",icon:"none"})})},pay:function(){return new Promise(function(t,n){var c=e.getStorageSync("openid");i.default.Pay.weApp(o.selected_price,"库存表-会员充值","库存表-会员充值",c).then(function(e){console.log(e);var n=e.timestamp,o=e.noncestr,i=e.package,c=e.out_trade_no,u=e.sign;console.log(c),wx.requestPayment({timeStamp:n,nonceStr:o,package:i,signType:"MD5",paySign:u,success:function(e){t(!0,e)},fail:function(e){console.log("付款失败"),console.log(e),t(!1,e)}})},function(e){console.log("服务端返回失败"),console.log(e),t(!1,e)})})}}};t.default=u}).call(this,n("543d")["default"])},"0945":function(e,t,n){"use strict";n.r(t);var o=n("036e"),i=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t["default"]=i.a},"42a2":function(e,t,n){"use strict";var o=n("4f6b"),i=n.n(o);i.a},"4f6b":function(e,t,n){},"5d58":function(e,t,n){"use strict";(function(e){n("bc8c"),n("921b");o(n("66fd"));var t=o(n("e0be"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},a230:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},e0be:function(e,t,n){"use strict";n.r(t);var o=n("a230"),i=n("0945");for(var c in i)"default"!==c&&function(e){n.d(t,e,function(){return i[e]})}(c);n("42a2");var u=n("2877"),s=Object(u["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports}},[["5d58","common/runtime","common/vendor"]]]);