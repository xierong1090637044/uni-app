(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/vip/vip"],{1539:function(e,t,n){"use strict";(function(e){n("a961"),n("921b");o(n("66fd"));var t=o(n("b088"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"765a":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c})},b088:function(e,t,n){"use strict";n.r(t);var o=n("765a"),c=n("c68c");for(var i in c)"default"!==i&&function(e){n.d(t,e,function(){return c[e]})}(i);n("b751");var u=n("2877"),s=Object(u["a"])(c["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports},b751:function(e,t,n){"use strict";var o=n("d45f"),c=n.n(o);c.a},c68c:function(e,t,n){"use strict";n.r(t);var o=n("f62b"),c=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=c.a},d45f:function(e,t,n){},f62b:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,c=i(n("c74b"));function i(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{user:e.getStorageSync("user"),selected_price:10}},onLoad:function(){o=this},methods:{selected_this:function(e){console.log(e),o.selected_price=Number(e)},pay_off:function(){o.user.is_vip?e.showToast({title:"您已经是VIP了",icon:"none"}):o.pay().then(function(t){if(t){var n=c.default.Query("_User");n.get(o.user.objectId).then(function(t){var n=(new Date).getTime();10==o.selected_price?(t.set("vip_time",n+2592e6),o.user.vip_time=n+2592e6):25==o.selected_price?(t.set("vip_time",n+7776e6),o.user.vip_time=n+7776e6):100==o.selected_price&&(t.set("vip_time",n+31104e6),o.user.vip_time=n+31104e6),t.set("is_vip",!0),t.save(),o.user.is_vip=!0,e.setStorageSync("user",o.user)}).catch(function(e){console.log(e)})}else e.showToast({title:"充值失败",icon:"none"})})},pay:function(){return new Promise(function(t,n){var i=e.getStorageSync("openid");c.default.Pay.weApp(o.selected_price,"库存表-会员充值","库存表-会员充值",i).then(function(e){console.log(e);var n=e.timestamp,o=e.noncestr,c=e.package,i=e.out_trade_no,u=e.sign;console.log(i),wx.requestPayment({timeStamp:n,nonceStr:o,package:c,signType:"MD5",paySign:u,success:function(e){t(!0,e)},fail:function(e){console.log("付款失败"),console.log(e),t(!1,e)}})},function(e){console.log("服务端返回失败"),console.log(e),t(!1,e)})})}}};t.default=u}).call(this,n("543d")["default"])}},[["1539","common/runtime","common/vendor"]]]);