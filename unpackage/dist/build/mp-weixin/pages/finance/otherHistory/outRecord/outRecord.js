(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/finance/otherHistory/outRecord/outRecord"],{"154b":function(e,t,n){"use strict";(function(e){n("d510"),n("921b");o(n("66fd"));var t=o(n("e444"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"1edc":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r,a,c,u=s(n("9546")),i=s(n("7fd5"));s(n("7faa"));function s(e){return e&&e.__esModule?e:{default:e}}function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=f(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,a=!0,c=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return a=e.done,e},e:function(e){c=!0,r=e},f:function(){try{a||null==o.return||o.return()}finally{if(c)throw r}}}}function f(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var y={data:function(){return{producer:{},user:e.getStorageSync("user"),identity:e.getStorageSync("identity"),Images:[],account:"",button_disabled:!1,beizhu_text:"",real_money:"",nowDay:i.default.getDay(0,!0,!0),type:"",category:""}},onLoad:function(t){r=this,o=e.getStorageSync("uid"),r.type=t.type||"","record"==t.type&&e.removeStorageSync("producer")},onShow:function(){if(r.producer=e.getStorageSync("producer"),r.account=e.getStorageSync("account"),e.getStorageSync("category"))if(r.category=e.getStorageSync("category"),2==r.category.type){var t=u.default.Pointer("financeFristClass");a=t.set(r.category.parent.objectId);var n=u.default.Pointer("financeSecondClass");c=n.set(r.category.objectId)}else{var o=u.default.Pointer("financeFristClass");a=o.set(r.category.objectId)}},methods:{bindDateChange:function(e){r.nowDay=e.detail.value+" 00:00:00"},removeImg:function(e){r.Images.splice(e,1),r.Images=r.Images},upload_image:function(){r.user.is_vip?e.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var t,n,o=Date.parse(new Date),a=e.tempFilePaths,c=l(a);try{for(c.s();!(n=c.n()).done;){var i=n.value;t=u.default.File(o+".jpg",i)}}catch(s){c.e(s)}finally{c.f()}t.save().then((function(e){var t,n=l(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;r.Images.push(o.url)}}catch(s){n.e(s)}finally{n.f()}}))}}):e.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(t){var n=this;if(r.button_disabled=!0,""==e.getStorageSync("category")||void 0==e.getStorageSync("category"))return e.showToast({icon:"none",title:"请选择支出类别"}),void(this.button_disabled=!1);if(""==e.getStorageSync("account")||void 0==e.getStorageSync("account"))return e.showToast({icon:"none",title:"请选择付款账户"}),void(this.button_disabled=!1);if(""==r.real_money)return e.showToast({icon:"none",title:"请输入本次付款"}),void(this.button_disabled=!1);var s=u.default.Query("accounts");s.get(r.account.objectId).then((function(t){t.set("money",t.money-Number(r.real_money)),t.save().then((function(t){var s=u.default.Pointer("accounts"),l=s.set(r.account.objectId),f=u.default.Pointer("_User"),d=f.set(o),y=e.getStorageSync("masterId"),g=u.default.Pointer("_User"),m=g.set(y),v=u.default.Query("order_opreations");v.set("account",l),v.set("master",d),v.set("opreater",m),v.set("real_money",Number(r.real_money)),v.set("beizhu",r.beizhu_text),v.set("createdTime",{__type:"Date",iso:r.nowDay}),v.set("type",1),v.set("extra_type",6),v.set("Images",r.Images),1==r.category.type?v.set("fristClass",a):v.set("secondClass",c),v.save().then((function(t){n.button_disabled=!1,e.removeStorageSync("account"),r.producer=t,i.default.log(e.getStorageSync("user").nickName+"记录了付款￥"+r.real_money+"元",6,t.objectId),e.navigateBack({delta:1}),setTimeout((function(){e.showToast({icon:"none",title:"付款成功"})}),1e3)})).catch((function(e){console.log(e)}))}))}))}}};t.default=y}).call(this,n("543d")["default"])},"311a":function(e,t,n){"use strict";n.r(t);var o=n("1edc"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=r.a},"4e53":function(e,t,n){"use strict";var o,r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.nowDay.split(" "));e.$mp.data=Object.assign({},{$root:{g0:n}})},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}))},"74f3":function(e,t,n){},a791:function(e,t,n){"use strict";var o=n("74f3"),r=n.n(o);r.a},e444:function(e,t,n){"use strict";n.r(t);var o=n("4e53"),r=n("311a");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("a791");var c,u=n("f0c5"),i=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=i.exports}},[["154b","common/runtime","common/vendor"]]]);