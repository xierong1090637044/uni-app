(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/custom/custom_detail/custom_detail"],{"0835":function(t,e,n){},"0e3f":function(t,e,n){"use strict";n.r(e);var o=n("b778"),u=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=u.a},1353:function(t,e,n){"use strict";(function(t){n("a961"),n("921b");o(n("66fd"));var e=o(n("7be9"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"198a":function(t,e,n){"use strict";var o=n("0835"),u=n.n(o);u.a},"7be9":function(t,e,n){"use strict";n.r(e);var o=n("a7c8"),u=n("0e3f");for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);n("198a");var c=n("2877"),i=Object(c["a"])(u["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},a7c8:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.modal_show=!1},t.e1=function(e){t.modal_show=!0})},u=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return u})},b778:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=c(n("c74b")),u=c(n("c315")),a=c(n("df06"));function c(t){return t&&t.__esModule?t:{default:t}}var i,s=function(){return n.e("components/kilvn-fa-icon/fa-icon").then(n.bind(null,"0914"))},l=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"db37"))},d=function(){return n.e("components/Loading/index").then(n.bind(null,"524a"))},r={components:{faIcon:s,loading:d,uniPopup:l},data:function(){return{loading:!0,modal_show:!1,custom:{},modal_sk:{sk_number:"",beizhu:""}}},onLoad:function(t){i=this,u.default.custom_detail(t.id).then(function(t){console.log(t),i.custom=t,i.loading=!1})},methods:{confrim_sk:function(){console.log(i.modal_sk);var e=i.modal_sk.sk_number,n=i.modal_sk.beizhu,c=i.custom.objectId;if(null==e||0==e.length)t.showToast({title:"请输入收款金额",icon:"none"});else{t.showLoading({title:"加载中..."}),i.modal_show=!1;var s=o.default.Query("customs");s.get(c).then(function(s){if(s.debt-Number(e)<0)t.hideLoading(),t.showToast({icon:"none",title:"收款金额过大"});else if(null==s.debt||0==s.debt)t.hideLoading(),t.showToast({icon:"none",title:"该客户没有欠款"});else{s.set("debt",s.debt-Number(e)),s.save();var l=o.default.Pointer("customs"),d=l.set(c),r=o.default.Pointer("_User"),f=r.set(t.getStorageSync("uid")),m=o.default.Pointer("_User"),b=m.set(t.getStorageSync("masterId")),h=o.default.Query("debt_history");h.set("custom",d),h.set("master",f),h.set("operater",b),h.set("debt_number",Number(e)),h.set("beizhu",n),h.save().then(function(n){console.log(n),a.default.log(t.getStorageSync("user").nickName+"操作'"+i.custom.custom_name+"'客户还款￥"+e+"元",6,n.objectId),t.hideLoading(),u.default.custom_detail(i.custom.objectId).then(function(e){console.log(e),i.custom=e,t.showToast({title:"收款成功"})})}).catch(function(t){console.log(t)})}}).catch(function(t){console.log(t)})}}}};e.default=r}).call(this,n("543d")["default"])}},[["1353","common/runtime","common/vendor"]]]);