(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/custom/custom_detail/custom_detail"],{"0835":function(t,e,n){},"0e3f":function(t,e,n){"use strict";n.r(e);var o=n("b778"),u=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e["default"]=u.a},1353:function(t,e,n){"use strict";(function(t){n("a961"),n("921b");o(n("66fd"));var e=o(n("7be9"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"198a":function(t,e,n){"use strict";var o=n("0835"),u=n.n(o);u.a},"4f45":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.modal_show=!1})},u=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return u})},"7be9":function(t,e,n){"use strict";n.r(e);var o=n("4f45"),u=n("0e3f");for(var c in u)"default"!==c&&function(t){n.d(e,t,function(){return u[t]})}(c);n("198a");var s=n("2877"),a=Object(s["a"])(u["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},b778:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(n("c74b")),u=s(n("c315")),c=s(n("df06"));function s(t){return t&&t.__esModule?t:{default:t}}var a,i=function(){return n.e("components/kilvn-fa-icon/fa-icon").then(n.bind(null,"0914"))},l=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"db37"))},d=function(){return n.e("components/Loading/index").then(n.bind(null,"524a"))},r={components:{faIcon:i,loading:d,uniPopup:l},data:function(){return{loading:!0,modal_show:!1,custom:{},modal_sk:{sk_number:"",beizhu:""}}},onLoad:function(t){a=this,u.default.custom_detail(t.id).then(function(t){console.log(t),a.custom=t,a.loading=!1})},methods:{gotopay:function(){t.setStorageSync("custom",a.custom),t.redirectTo({url:"/pages/finance/InRecord/InRecord"})},show_options:function(){t.showActionSheet({itemList:["编辑","删除"],success:function(t){0==t.tapIndex?a.edit(a.custom):1==t.tapIndex&&a.delete_this(a.custom.objectId)},fail:function(t){console.log(t.errMsg)}})},edit:function(e){t.setStorageSync("customs",e),t.setStorageSync("custom_type","customs"),t.navigateTo({url:"../add/add"})},delete_this:function(e){t.showModal({title:"提示",content:"是否删除此客户",success:function(t){t.confirm&&a.delete_data("customs",e)}})},delete_data:function(e,n){console.log(n);var u=o.default.Query(e);u.destroy(n).then(function(e){console.log(e),t.showToast({title:"删除成功",icon:"none"}),t.navigateBack({delta:1})}).catch(function(t){console.log(t)})},confrim_sk:function(){console.log(a.modal_sk);var e=a.modal_sk.sk_number,n=a.modal_sk.beizhu,s=a.custom.objectId;if(null==e||0==e.length)t.showToast({title:"请输入收款金额",icon:"none"});else{t.showLoading({title:"加载中..."}),a.modal_show=!1;var i=o.default.Query("customs");i.get(s).then(function(i){if(i.debt-Number(e)<0)t.hideLoading(),t.showToast({icon:"none",title:"收款金额过大"});else if(null==i.debt||0==i.debt)t.hideLoading(),t.showToast({icon:"none",title:"该客户没有欠款"});else{i.set("debt",i.debt-Number(e)),i.save();var l=o.default.Pointer("customs"),d=l.set(s),r=o.default.Pointer("_User"),f=r.set(t.getStorageSync("uid")),m=o.default.Pointer("_User"),g=m.set(t.getStorageSync("masterId")),h=o.default.Query("debt_history");h.set("custom",d),h.set("master",f),h.set("operater",g),h.set("debt_number",Number(e)),h.set("beizhu",n),h.save().then(function(n){console.log(n),c.default.log(t.getStorageSync("user").nickName+"操作'"+a.custom.custom_name+"'客户还款￥"+e+"元",6,n.objectId),t.hideLoading(),u.default.custom_detail(a.custom.objectId).then(function(e){console.log(e),a.custom=e,t.showToast({title:"收款成功"})})}).catch(function(t){console.log(t)})}}).catch(function(t){console.log(t)})}}}};e.default=r}).call(this,n("543d")["default"])}},[["1353","common/runtime","common/vendor"]]]);