(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["common/main"],{"08fd":function(n,e,t){},8630:function(n,e,t){"use strict";t.r(e);var o=t("a08e");for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);t("e0cb");var c,r,a,i,f=t("f0c5"),l=Object(f["a"])(o["default"],c,r,!1,null,null,null,!1,a,i);e["default"]=l.exports},a08e:function(n,e,t){"use strict";t.r(e);var o=t("fda8"),u=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=u.a},c841:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("d510"),t("921b");var o=a(t("66fd")),u=a(t("5c71")),c=a(t("8630")),r=a(t("9546"));function a(n){return n&&n.__esModule?n:{default:n}}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var d=function(){t.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(t("4d52"))}.bind(null,t)).catch(t.oe)},s=function(){t.e("components/Loading/index").then(function(){return resolve(t("120a"))}.bind(null,t)).catch(t.oe)},p=function(){t.e("components/No_content").then(function(){return resolve(t("cdc5"))}.bind(null,t)).catch(t.oe)},b=function(){t.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(t("96bd"))}.bind(null,t)).catch(t.oe)},m=function(){t.e("components/uni-icon/uni-icon").then(function(){return resolve(t("3628"))}.bind(null,t)).catch(t.oe)};r.default.initialize("825b954fe97e9186","109063","47f76baf4ee4d90630d7b2bc17f7505c"),o.default.config.productionTip=!1,c.default.mpType="app",o.default.use(u.default);var v=new u.default({locale:"zh-CN",messages:{"en-US":{operational_status:{1:"Invite",2:"Game"}},"zh-CN":{operational_status:{a:"库存成本：",b:"游戏"}}}});o.default.prototype._i18n=v,o.default.prototype.Bmob=r.default,o.default.component("loading",s),o.default.component("faIcon",d),o.default.component("uniIcon",m),o.default.component("nocontent",p),o.default.component("uniNavBar",b);var h=new o.default(f({i18n:v,Bmob:r.default},c.default)),O={components:{faIcon:d,nocontent:p,uniIcon:m,loading:s}};e.default=O,n(h).$mount()}).call(this,t("c11b")["createApp"])},e0cb:function(n,e,t){"use strict";var o=t("08fd"),u=t.n(o);u.a},fda8:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;o(t("9546")),o(t("2bc1"));function o(n){return n&&n.__esModule?n:{default:n}}var u={globalData:{setting:{},uid:"",user:{}},onLaunch:function(){n.getStorage({key:"user",success:function(n){},fail:function(){n.reLaunch({url:"/pages/landing/landing"})}})},onShow:function(){},onHide:function(){}};e.default=u}).call(this,t("c11b")["default"])}},[["c841","common/runtime","common/vendor"]]]);