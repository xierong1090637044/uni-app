(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/vip/vip"],{1539:function(e,t,n){"use strict";(function(e){n("a961"),n("921b");o(n("66fd"));var t=o(n("b088"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},ab09:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},b088:function(e,t,n){"use strict";n.r(t);var o=n("ab09"),i=n("c68c");for(var c in i)"default"!==c&&function(e){n.d(t,e,function(){return i[e]})}(c);n("b751");var s=n("2877"),u=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},b751:function(e,t,n){"use strict";var o=n("d45f"),i=n.n(o);i.a},c68c:function(e,t,n){"use strict";n.r(t);var o=n("f62b"),i=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t["default"]=i.a},d45f:function(e,t,n){},f62b:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=c(n("c74b"));function c(e){return e&&e.__esModule?e:{default:e}}var s={data:function(){return{payStatus:!1,user:e.getStorageSync("user"),selected_price:10}},onLoad:function(){o=this},methods:{selected_this:function(e){console.log(e),o.selected_price=Number(e)},pay_off:function(){o.user.is_vip?e.showToast({title:"您已经是VIP了",icon:"none"}):"2"==e.getStorageSync("identity")||2==e.getStorageSync("identity")?e.showToast({title:"员工不能充值",icon:"none"}):(e.showLoading({title:"充值中..."}),o.payStatus=!0,o.pay().then(function(t){if(t){var n=i.default.Query("_User");n.get(o.user.objectId).then(function(t){var n=(new Date).getTime();10==o.selected_price?(t.set("vip_time",n+2592e6),t.set("vip_shouldtime",n+2592e6),o.user.vip_time=n+2592e6):25==o.selected_price?(t.set("vip_time",n+7776e6),t.set("vip_shouldtime",n+7776e6),o.user.vip_time=n+7776e6):100==o.selected_price&&(t.set("vip_time",n+62208e6),t.set("vip_shouldtime",n+62208e6),o.user.vip_time=n+62208e6),t.set("is_vip",!0),t.save(),o.user.is_vip=!0,e.setStorageSync("user",o.user)}).catch(function(e){console.log(e)})}else e.showToast({title:"充值失败",icon:"none"});o.payStatus=!1,e.hideLoading()}))},pay:function(){return new Promise(function(t,n){var c=e.getStorageSync("openid");i.default.Pay.weApp(o.selected_price,"库存表-会员充值","库存表-会员充值",c).then(function(e){console.log(e);var n=e.timestamp,o=e.noncestr,i=e.package,c=e.out_trade_no,s=e.sign;console.log(c),wx.requestPayment({timeStamp:n,nonceStr:o,package:i,signType:"MD5",paySign:s,success:function(e){t(!0,e)},fail:function(e){console.log("付款失败"),console.log(e),t(!1,e)}})},function(e){console.log("服务端返回失败"),console.log(e),t(!1,e)})})}}};t.default=s}).call(this,n("543d")["default"])}},[["1539","common/runtime","common/vendor"]]]);