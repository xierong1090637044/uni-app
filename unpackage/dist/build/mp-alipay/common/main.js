(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["common/main"],{"08fd":function(n,e,t){},8630:function(n,e,t){"use strict";t.r(e);var o=t("a08e");for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);t("e0cb");var c,a,r,i,f=t("f0c5"),l=Object(f["a"])(o["default"],c,a,!1,null,null,null,!1,r,i);e["default"]=l.exports},a08e:function(n,e,t){"use strict";t.r(e);var o=t("fda8"),u=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,(function(){return o[n]}))}(c);e["default"]=u.a},c841:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("d510"),t("921b");var o=f(t("66fd")),u=f(t("5c71")),c=f(t("8630")),a=f(t("9546")),r=f(t("efdb")),i=f(t("7fd5"));function f(n){return n&&n.__esModule?n:{default:n}}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var p=function(){t.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(t("4d52"))}.bind(null,t)).catch(t.oe)},b=function(){t.e("components/Loading/index").then(function(){return resolve(t("120a"))}.bind(null,t)).catch(t.oe)},m=function(){t.e("components/No_content").then(function(){return resolve(t("cdc5"))}.bind(null,t)).catch(t.oe)},v=function(){t.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(t("96bd"))}.bind(null,t)).catch(t.oe)},h=function(){t.e("components/uni-icon/uni-icon").then(function(){return resolve(t("3628"))}.bind(null,t)).catch(t.oe)};a.default.initialize("825b954fe97e9186","109063","47f76baf4ee4d90630d7b2bc17f7505c"),o.default.config.productionTip=!1,c.default.mpType="app",o.default.use(u.default);var y=new u.default({locale:"zh-CN",messages:{"en-US":{operational_status:{1:"Invite",2:"Game"}},"zh-CN":{operational_status:{a:"库存成本：",b:"游戏"}}}});o.default.prototype._i18n=y,o.default.prototype.Bmob=a.default,o.default.prototype.$http=r.default,o.default.prototype.common=i.default,o.default.component("loading",b),o.default.component("faIcon",p),o.default.component("uniIcon",h),o.default.component("nocontent",m),o.default.component("uniNavBar",v);var O=new o.default(d({i18n:y,Bmob:a.default},c.default)),g={components:{faIcon:p,nocontent:m,uniIcon:h,loading:b}};e.default=g,n(O).$mount()}).call(this,t("c11b")["createApp"])},e0cb:function(n,e,t){"use strict";var o=t("08fd"),u=t.n(o);u.a},fda8:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;o(t("9546")),o(t("2bc1"));function o(n){return n&&n.__esModule?n:{default:n}}var u={globalData:{setting:{},uid:"",user:{}},onLaunch:function(){n.getStorage({key:"user",success:function(n){},fail:function(){n.reLaunch({url:"/pages/landing/landing"})}})},onShow:function(){},onHide:function(){}};e.default=u}).call(this,t("c11b")["default"])}},[["c841","common/runtime","common/vendor"]]]);