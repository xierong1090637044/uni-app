(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/finance/CPHistory/customInOrder/customInOrder"],{1172:function(e,t,n){"use strict";n.r(t);var o=n("8299"),r=n("256f");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("2812");var c,u=n("f0c5"),s=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=s.exports},"256f":function(e,t,n){"use strict";n.r(t);var o=n("9ee0"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=r.a},2812:function(e,t,n){"use strict";var o=n("c98c"),r=n.n(o);r.a},8299:function(e,t,n){"use strict";var o,r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.nowDay.split(" "));e.$mp.data=Object.assign({},{$root:{g0:n}})},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}))},"9ee0":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r,a=u(n("9546")),c=u(n("7fd5"));u(n("114b"));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=i(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,a=!0,c=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return a=e.done,e},e:function(e){c=!0,r=e},f:function(){try{a||null==o.return||o.return()}finally{if(c)throw r}}}}function i(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var d={data:function(){return{custom:{},user:e.getStorageSync("user"),identity:e.getStorageSync("identity"),Images:[],account:"",button_disabled:!1,beizhu_text:"",real_money:0,nowDay:c.default.getDay(0,!0,!0),customInOrders:""}},onLoad:function(t){r=this,o=e.getStorageSync("uid"),r.customInOrders=e.getStorageSync("customInOrders");var n,a=s(r.customInOrders);try{for(a.s();!(n=a.n()).done;){var c=n.value;r.real_money+=Number(c.shouldGetMoney)}}catch(u){a.e(u)}finally{a.f()}e.setNavigationBarTitle({title:"新增收款单"})},onShow:function(){if(r.custom=e.getStorageSync("custom"),r.account=e.getStorageSync("account"),e.getStorageSync("category"))if(r.category=e.getStorageSync("category"),2==r.category.type){var t=a.default.Pointer("financeFristClass");t.set(r.category.parent.objectId);var n=a.default.Pointer("financeSecondClass");n.set(r.category.objectId)}else{var o=a.default.Pointer("financeFristClass");o.set(r.category.objectId)}},methods:{inputShouldGetMoney:function(e,t){var n=Number(e.detail.value);n>r.customInOrders[t].debt?r.customInOrders[t].shouldGetMoney=r.customInOrders[t].debt:r.customInOrders[t].shouldGetMoney=e.detail.value,r.real_money=0;var o,a=s(r.customInOrders);try{for(a.s();!(o=a.n()).done;){var c=o.value;r.real_money+=Number(c.shouldGetMoney)}}catch(u){a.e(u)}finally{a.f()}},bindDateChange:function(e){r.nowDay=e.detail.value+" 00:00:00"},removeImg:function(e){r.Images.splice(e,1),r.Images=r.Images},upload_image:function(){r.user.is_vip?e.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var t,n,o=Date.parse(new Date),c=e.tempFilePaths,u=s(c);try{for(u.s();!(n=u.n()).done;){var i=n.value;t=a.default.File(o+".jpg",i)}}catch(l){u.e(l)}finally{u.f()}t.save().then((function(e){var t,n=s(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;r.Images.push(o.url)}}catch(l){n.e(l)}finally{n.f()}}))}}):e.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(){var t=this;if(r.button_disabled=!0,""==e.getStorageSync("custom")||void 0==e.getStorageSync("custom"))return e.showToast({icon:"none",title:"请选择客户"}),void(this.button_disabled=!1);if(""==e.getStorageSync("account")||void 0==e.getStorageSync("account"))return e.showToast({icon:"none",title:"请选择收款账户"}),void(this.button_disabled=!1);var n=new Promise((function(t,n){var u=a.default.Query("accounts");u.get(r.account.objectId).then((function(n){n.set("money",n.money+Number(r.real_money)),n.save().then((function(n){var u=a.default.Pointer("customs"),s=u.set(r.custom.objectId),i=a.default.Pointer("accounts"),l=i.set(r.account.objectId),d=a.default.Pointer("_User"),f=d.set(o),m=e.getStorageSync("masterId"),y=a.default.Pointer("_User"),g=y.set(m),v=a.default.Query("order_opreations");v.set("account",l),v.set("custom",s),v.set("master",f),v.set("opreater",g),v.set("real_money",Number(r.real_money)),v.set("beizhu",r.beizhu_text),v.set("customInOrders",r.customInOrders),v.set("createdTime",{__type:"Date",iso:r.nowDay}),v.set("type",-1),v.set("extra_type",5),v.set("Images",r.Images),v.save().then((function(n){c.default.log(e.getStorageSync("user").nickName+"操作'"+r.custom.custom_name+"'客户还款￥"+r.real_money+"元",6,n.objectId),t("success")})).catch((function(e){console.log(e)}))}))}))})),u=new Promise((function(e,t){var n,o=s(r.customInOrders);try{for(o.s();!(n=o.n()).done;){var c=n.value,u=a.default.Query("order_opreations");u.set("id",c.objectId),u.set("debt",Number(c.debt)-Number(c.shouldGetMoney)),u.set("haveGetMoney",Number(c.haveGetMoney)+Number(c.shouldGetMoney)),u.save().then((function(t){e("success"),console.log(t)})).catch((function(e){console.log(e)}))}}catch(i){o.e(i)}finally{o.f()}}));Promise.all([n,u]).then((function(n){console.log(n),t.button_disabled=!1,e.navigateBack({delta:1}),setTimeout((function(){e.showToast({icon:"none",title:"收款成功"})}),1e3)})).catch((function(e){console.log(e)}))}}};t.default=d}).call(this,n("543d")["default"])},a351:function(e,t,n){"use strict";(function(e){n("d510"),n("921b");o(n("66fd"));var t=o(n("1172"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},c98c:function(e,t,n){}},[["a351","common/runtime","common/vendor"]]]);