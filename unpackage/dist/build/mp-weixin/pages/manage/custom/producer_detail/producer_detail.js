(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/custom/producer_detail/producer_detail"],{1435:function(e,t,o){"use strict";var n=o("c4b6"),c=o.n(n);c.a},5594:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(o("c74b")),c=r(o("5fbc")),u=r(o("df06"));function r(e){return e&&e.__esModule?e:{default:e}}var d,a=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"0914"))},i=function(){return o.e("components/uni-popup/uni-popup").then(o.bind(null,"db37"))},s=function(){return o.e("components/Loading/index").then(o.bind(null,"524a"))},l={components:{faIcon:a,loading:s,uniPopup:i},data:function(){return{loading:!0,modal_show:!1,producer:{},modal_sk:{sk_number:"",beizhu:""}}},onLoad:function(e){d=this,c.default.producer_detail(e.id).then(function(e){console.log(e),e.debt||(e.debt=0),d.producer=e,d.loading=!1})},methods:{gotopay:function(){e.setStorageSync("producer",d.producer),e.redirectTo({url:"/pages/finance/outRecord/outRecord"})},show_options:function(){e.showActionSheet({itemList:["编辑","删除"],success:function(e){0==e.tapIndex?d.edit(d.producer):1==e.tapIndex&&d.delete_this(d.producer.objectId)},fail:function(e){console.log(e.errMsg)}})},edit:function(t){e.setStorageSync("customs",t),e.setStorageSync("custom_type","producers"),e.navigateTo({url:"../add/add"})},delete_this:function(t){e.showModal({title:"提示",content:"是否删除此客户",success:function(e){e.confirm&&d.delete_data("producers",t)}})},delete_data:function(t,o){console.log(o);var c=n.default.Query(t);c.destroy(o).then(function(t){console.log(t),e.showToast({title:"删除成功",icon:"none"}),e.navigateBack({delta:1})}).catch(function(e){console.log(e)})},confrim_sk:function(){console.log(d.modal_sk);var t=d.modal_sk.sk_number,o=d.modal_sk.beizhu,r=d.producer.objectId;if(null==t||0==t.length)e.showToast({title:"请输入还款金额",icon:"none"});else{e.showLoading({title:"加载中..."}),d.modal_show=!1;var a=n.default.Query("producers");a.get(r).then(function(a){if(a.debt-Number(t)<0)e.hideLoading(),e.showToast({icon:"none",title:"还款金额超出"});else if(null==a.debt||0==a.debt)e.hideLoading(),e.showToast({icon:"none",title:"没有欠款"});else{a.set("debt",a.debt-Number(t)),a.save();var i=n.default.Pointer("producers"),s=i.set(r),l=n.default.Pointer("_User"),f=l.set(e.getStorageSync("uid")),p=n.default.Pointer("_User"),b=p.set(e.getStorageSync("masterId")),g=n.default.Query("debt_history");g.set("producer",s),g.set("master",f),g.set("operater",b),g.set("debt_number",Number(t)),g.set("beizhu",o),g.save().then(function(o){console.log(o),u.default.log(e.getStorageSync("user").nickName+"操作'"+d.producer.producer_name+"'供货商收款￥"+t+"元",6,o.objectId),e.hideLoading(),c.default.producer_detail(d.producer.objectId).then(function(t){console.log(t),d.producer=t,e.showToast({title:"还款成功"})})}).catch(function(e){console.log(e)})}}).catch(function(e){console.log(e)})}}}};t.default=l}).call(this,o("543d")["default"])},"80dc":function(e,t,o){"use strict";o.r(t);var n=o("dccc"),c=o("9ba9");for(var u in c)"default"!==u&&function(e){o.d(t,e,function(){return c[e]})}(u);o("1435");var r=o("2877"),d=Object(r["a"])(c["default"],n["a"],n["b"],!1,null,null,null);t["default"]=d.exports},"9ba9":function(e,t,o){"use strict";o.r(t);var n=o("5594"),c=o.n(n);for(var u in n)"default"!==u&&function(e){o.d(t,e,function(){return n[e]})}(u);t["default"]=c.a},c4b6:function(e,t,o){},d6c1:function(e,t,o){"use strict";(function(e){o("a961"),o("921b");n(o("66fd"));var t=n(o("80dc"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},dccc:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.modal_show=!1})},c=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return c})}},[["d6c1","common/runtime","common/vendor"]]]);