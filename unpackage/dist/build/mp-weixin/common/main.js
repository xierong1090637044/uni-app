(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"08fd":function(e,n,t){},8630:function(e,n,t){"use strict";t.r(n);var o=t("a08e");for(var c in o)"default"!==c&&function(e){t.d(n,e,(function(){return o[e]}))}(c);t("e0cb");var a,u,r,i,f=t("f0c5"),l=Object(f["a"])(o["default"],a,u,!1,null,null,null,!1,r,i);n["default"]=l.exports},a08e:function(e,n,t){"use strict";t.r(n);var o=t("fda8"),c=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=c.a},c841:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("d510"),t("921b");var o=i(t("66fd")),c=i(t("5c71")),a=i(t("8630")),u=i(t("9546")),r=i(t("efdb"));function i(e){return e&&e.__esModule?e:{default:e}}function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s=function(){t.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(t("4d52"))}.bind(null,t)).catch(t.oe)},p=function(){t.e("components/Loading/index").then(function(){return resolve(t("120a"))}.bind(null,t)).catch(t.oe)},b=function(){t.e("components/No_content").then(function(){return resolve(t("cdc5"))}.bind(null,t)).catch(t.oe)},v=function(){t.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(t("96bd"))}.bind(null,t)).catch(t.oe)},m=function(){t.e("components/uni-icon/uni-icon").then(function(){return resolve(t("3628"))}.bind(null,t)).catch(t.oe)};u.default.initialize("825b954fe97e9186","109063","47f76baf4ee4d90630d7b2bc17f7505c"),o.default.config.productionTip=!1,a.default.mpType="app",o.default.use(c.default);var g=new c.default({locale:"zh-CN",messages:{"en-US":{operational_status:{1:"Invite",2:"Game"}},"zh-CN":{operational_status:{a:"库存成本：",b:"游戏"}}}});o.default.prototype._i18n=g,o.default.prototype.Bmob=u.default,o.default.prototype.$http=r.default,o.default.component("loading",p),o.default.component("faIcon",s),o.default.component("uniIcon",m),o.default.component("nocontent",b),o.default.component("uniNavBar",v);var h=new o.default(l({i18n:g,Bmob:u.default},a.default)),y={components:{faIcon:s,nocontent:b,uniIcon:m,loading:p}};n.default=y,e(h).$mount()}).call(this,t("543d")["createApp"])},e0cb:function(e,n,t){"use strict";var o=t("08fd"),c=t.n(o);c.a},fda8:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=c(t("9546"));c(t("2bc1"));function c(e){return e&&e.__esModule?e:{default:e}}var a={globalData:{setting:{},uid:"",user:{}},onLaunch:function(){o.default.User.auth().then((function(n){var t=n?n.authData.weapp.openid:"",c=e.getStorageSync("user");if(c){var a=o.default.Query("_User");a.get(c.objectId).then((function(e){e.set("miniProgramOpid",t),e.save()})).catch((function(e){console.log(e)}))}})).catch((function(e){console.log(e)}));var n=wx.getUpdateManager();n.onCheckForUpdate((function(e){console.log(e.hasUpdate)})),n.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",confirmColor:"#FE104C",success:function(t){t.confirm&&(e.setStorageSync("isUpdate",!0),n.applyUpdate())}})})),e.getStorage({key:"user",success:function(e){},fail:function(){e.reLaunch({url:"/pages/landing/landing"})}})},onShow:function(){},onHide:function(){}};n.default=a}).call(this,t("543d")["default"])}},[["c841","common/runtime","common/vendor"]]]);