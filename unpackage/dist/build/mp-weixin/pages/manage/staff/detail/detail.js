(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/staff/detail/detail"],{"03c0":function(t,e,n){"use strict";n.r(e);var o=n("fac4"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=a.a},1136:function(t,e,n){"use strict";var o={"uni-nav-bar":function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"8157"))}},a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}))},"324d":function(t,e,n){"use strict";(function(t){n("d34b"),n("921b");o(n("66fd"));var e=o(n("cb19"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"3c9c":function(t,e,n){},a976:function(t,e,n){"use strict";var o=n("3c9c"),a=n.n(o);a.a},cb19:function(t,e,n){"use strict";n.r(e);var o=n("1136"),a=n("03c0");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("a976");var c,u=n("f0c5"),i=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=i.exports},fac4:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("4515"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=c(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,r=!0,u=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return r=t.done,t},e:function(t){u=!0,a=t},f:function(){try{r||null==o.return||o.return()}finally{if(u)throw a}}}}function c(t,e){if(t){if("string"===typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var i,l,f=function(){n.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(n("cc4b"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/Loading/index").then(function(){return resolve(n("fa1e"))}.bind(null,n)).catch(n.oe)},d={components:{faIcon:f,loading:s},data:function(){return{staff:"",Goods:null,reserve_num:0,reserve_money:0,sellRecord:{}}},onLoad:function(e){if(i=this,l=t.getStorageSync("uid"),i.staff=t.getStorageSync("staff"),console.log(e),e.start_date&&e.end_date){var n=o.default.Query("order_opreations");n.equalTo("master","==",l),n.equalTo("opreater","==",i.staff.objectId),n.equalTo("type","==",-1),n.equalTo("status","==",!0),n.equalTo("extra_type","==",1),n.equalTo("createdAt",">=",e.start_date),n.equalTo("createdAt","<=",e.end_date),n.find().then((function(t){i.sellRecord.sellNum=t.length,i.sellRecord.sellPrice=0;var e,n=r(t);try{for(n.s();!(e=n.n()).done;){var o=e.value;i.sellRecord.sellPrice+=o.all_money}}catch(a){n.e(a)}finally{n.f()}}))}},onShow:function(){t.removeStorageSync("staffRights")},methods:{show_options:function(){t.showActionSheet({itemList:["编辑","删除"],success:function(t){0==t.tapIndex?i.edit(i.staff):1==t.tapIndex&&i.delete_this(i.staff.objectId)},fail:function(t){console.log(t.errMsg)}})},edit:function(e){console.log(e),t.setStorageSync("staff",e),t.navigateTo({url:"../add/add"})},delete_this:function(e){t.showModal({title:"提示",content:"是否删除此员工",success:function(t){t.confirm&&(console.log(e),i.delete_data(e))}})},delete_data:function(e){console.log(e);var n=o.default.Query("_User");n.destroy(e).then((function(n){var a=o.default.Query("_User");a.get(e).then((function(e){if(e.userId){var n=o.default.Query("_User");n.destroy(e.userId).then((function(e){t.showToast({title:"删除成功",icon:"none"}),t.navigateBack({delta:1})}))}console.log(e)})).catch((function(t){console.log(t)})),console.log(n),t.showToast({title:"删除成功",icon:"none"}),t.navigateBack({delta:1})})).catch((function(t){console.log(t)}))},goto_edit:function(){t.navigateTo({url:"../add/add"})},goto_detail:function(e){t.setStorageSync("now_product",e),t.navigateTo({url:"/pages/manage/good_det/good_det"})}}};e.default=d}).call(this,n("543d")["default"])}},[["324d","common/runtime","common/vendor"]]]);