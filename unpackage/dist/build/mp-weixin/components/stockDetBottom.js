(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/stockDetBottom"],{"0590":function(t,e,n){"use strict";var o=n("c8d0"),c=n.n(o);c.a},5597:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,c=a(n("c74b"));a(n("df06"));function a(t){return t&&t.__esModule?t:{default:t}}var u=t.getStorageSync("uid"),r={props:{thisStock:{type:Object,default:{}}},data:function(){return{}},mounted:function(){o=this},methods:{deleteThis:function(){var e=c.default.Query("stocks");e.equalTo("parent","==",u),e.equalTo("disabled","!=",!0),e.find().then((function(e){if(e.length>1){var n=t.getStorageSync("user");if(2==n.identity)return void t.showToast({icon:"none",title:"子账户暂不支持删除"});o.delete_this(o.thisStock.objectId)}else t.showToast({title:"最少保留一个店仓",icon:"none"})}))},delete_this:function(e){t.showModal({title:"提示",content:"请谨慎删除，一旦删除，数据不能恢复，是否删除此店仓",success:function(t){t.confirm&&(console.log(e),o.delete_data(e))}})},delete_data:function(e){console.log(e);var n=c.default.Query("stocks");n.destroy(e).then((function(e){console.log(e),t.showToast({title:"删除成功",icon:"none"}),t.navigateBack({delta:1})})).catch((function(t){console.log(t)}))},edit:function(e){t.setStorageSync("warehouse",e),t.setStorageSync("charge",e.charge),t.setStorageSync("shop",e.shop),t.navigateTo({url:"../add/add"})},sellRecord:function(){t.setStorageSync("producer",o.producer),t.navigateTo({url:"/pages/common/goods-select/goods-select?type=delivery&value=3"})}}};e.default=r}).call(this,n("543d")["default"])},"6e09":function(t,e,n){"use strict";n.r(e);var o=n("8022"),c=n("a7bf");for(var a in c)"default"!==a&&function(t){n.d(e,t,(function(){return c[t]}))}(a);n("0590");var u,r=n("f0c5"),i=Object(r["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=i.exports},8022:function(t,e,n){"use strict";var o,c=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}))},a7bf:function(t,e,n){"use strict";n.r(e);var o=n("5597"),c=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=c.a},c8d0:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/stockDetBottom-create-component',
    {
        'components/stockDetBottom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6e09"))
        })
    },
    [['components/stockDetBottom-create-component']]
]);