(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"2d2a":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(t("906f")),u=a(t("ca83"));function a(n){return n&&n.__esModule?n:{default:n}}var c={onLaunch:function(){var e=n.getUpdateManager();e.onCheckForUpdate(function(n){console.log(n.hasUpdate)}),e.onUpdateReady(function(t){n.showModal({title:"更新提示",content:"新版本已经准备好，是否重启应用？",success:function(n){n.confirm&&e.applyUpdate()}})}),o.default.User.auth().then(function(n){}).catch(function(n){console.log(n)}),n.getStorage({key:"user",success:function(e){var t=e.data,a=n.getStorageSync("identity"),c=(new Date).getTime();if(console.log(t),t.vip_time<=c)if(1==a){var i=o.default.Query("_User");i.get(t.objectId).then(function(e){e.set("is_vip",!1),e.set("vip_time",0),e.save(),t.is_vip=!1,t.vip_time=0,n.setStorageSync("user",t)}).catch(function(n){})}else t.is_vip=!1,t.vip_time=0,n.setStorageSync("user",t);u.default.query_setting()},fail:function(){n.reLaunch({url:"/pages/landing/landing"})}})},onShow:function(){},onHide:function(){}};e.default=c}).call(this,t("543d")["default"])},6672:function(n,e,t){},"9c35":function(n,e,t){"use strict";t.r(e);var o=t("f3eb");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("fb89");var a,c,i=t("2877"),f=Object(i["a"])(o["default"],a,c,!1,null,null,null);e["default"]=f.exports},f3eb:function(n,e,t){"use strict";t.r(e);var o=t("2d2a"),u=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);e["default"]=u.a},f9d6:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("bc8c"),t("921b");var o=i(t("66fd")),u=i(t("79f3")),a=i(t("9c35")),c=i(t("906f"));function i(n){return n&&n.__esModule?n:{default:n}}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){r(n,e,t[e])})}return n}function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var l=function(){return t.e("components/kilvn-fa-icon/fa-icon").then(t.bind(null,"eaf0"))},d=function(){return t.e("components/Loading/index").then(t.bind(null,"c7fb"))},s=function(){return t.e("components/No_content").then(t.bind(null,"3f09"))},p=function(){return t.e("components/uni-icon/uni-icon").then(t.bind(null,"36cf"))};c.default.initialize("825b954fe97e9186","109063","47f76baf4ee4d90630d7b2bc17f7505c"),o.default.config.productionTip=!1,a.default.mpType="app",o.default.use(u.default);var b=new u.default({locale:"zh-CN",messages:{"en-US":{operational_status:{1:"Invite",2:"Game"}},"zh-CN":{operational_status:{a:"库存成本：",b:"游戏"}}}});o.default.prototype._i18n=b,o.default.prototype.Bmob=c.default,o.default.component("loading",d),o.default.component("faIcon",l),o.default.component("uniIcon",p),o.default.component("nocontent",s);var m=new o.default(f({i18n:b,Bmob:c.default},a.default)),v={components:{faIcon:l,nocontent:s,uniIcon:p,loading:d}};e.default=v,n(m).$mount()}).call(this,t("543d")["createApp"])},fb89:function(n,e,t){"use strict";var o=t("6672"),u=t.n(o);u.a}},[["f9d6","common/runtime","common/vendor"]]]);