(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/finance/myData/add/add"],{1389:function(e,n,t){"use strict";var o=t("50a3"),a=t.n(o);a.a},"1d28":function(e,n,t){"use strict";t.r(n);var o=t("d9ba"),a=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);n["default"]=a.a},"390c":function(e,n,t){"use strict";t.r(n);var o=t("568d"),a=t("1d28");for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);t("1389");var i,c=t("f0c5"),r=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);n["default"]=r.exports},"50a3":function(e,n,t){},5420:function(e,n,t){"use strict";(function(e){t("d510"),t("921b");o(t("66fd"));var n=o(t("390c"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("c11b")["createPage"])},"568d":function(e,n,t){"use strict";var o={"uni-nav-bar":function(){return t.e("components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"96bd"))}},a=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return o}))},d9ba:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("9546"));a(t("9ef1"));function a(e){return e&&e.__esModule?e:{default:e}}var u,i,c,r=function(){t.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(t("4d52"))}.bind(null,t)).catch(t.oe)},s=function(){t.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(t("96bd"))}.bind(null,t)).catch(t.oe)},l={components:{faIcon:r,uniNavBar:s},data:function(){return{operationDesc:"添加",user:e.getStorageSync("user"),name:"",number:"",type:"",money:0,beizhu:"",disabled:!0,typeArray:["支付宝","微信","银行卡","其他"]}},onLoad:function(n){u=this,c=e.getStorageSync("uid")},onShow:function(){i=e.getStorageSync("account"),i?(e.setNavigationBarTitle({title:"修改结算账户"}),u.operationDesc="修改",u.name=i.name,u.number=i.number||"",u.money=i.money||0,u.type=i.type||"",u.beizhu=i.beizhu||""):e.setNavigationBarTitle({title:"新增结算账户"})},onUnload:function(){e.removeStorageSync("account")},methods:{selectType:function(e){console.log(e),u.type=u.typeArray[e.detail.value]},start_add:function(){""==this.name?e.showToast({title:"请输入账户名称",icon:"none"}):u.add_data()},add_data:function(){e.showLoading({title:"上传中..."});var n=o.default.Pointer("_User"),t=n.set(c);if(i){var a=o.default.Query("accounts");a.set("name",u.name),a.set("number",u.number),a.set("beizhu",u.beizhu||""),a.set("type",u.type),a.set("money",Number(u.money)),a.set("parent",t),a.set("id",i.objectId),a.save().then((function(n){e.hideLoading(),console.log(n),e.showToast({title:"修改成功"})})).catch((function(e){console.log(e)}))}else{var r=o.default.Query("accounts");r.equalTo("parent","==",c),r.equalTo("name","==",u.name),r.find().then((function(n){if(console.log(n),0==n.length){var a=o.default.Query("accounts");a.set("name",u.name),a.set("number",u.number),a.set("beizhu",u.beizhu||""),a.set("money",Number(u.money)),a.set("type",u.type),a.set("parent",t),a.save().then((function(n){console.log(n),e.hideLoading(),e.showToast({title:"添加成功"}),u.name="",u.number="",u.beizhu="",u.type="",u.money=""})).catch((function(e){console.log(e)}))}else e.showToast({title:"已存在此账户",icon:"none"})}))}}}};n.default=l}).call(this,t("c11b")["default"])}},[["5420","common/runtime","common/vendor"]]]);