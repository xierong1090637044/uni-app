(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/manage/shops/add/add"],{3408:function(e,n,t){},"4d5d":function(e,n,t){"use strict";t.r(n);var o=t("761a"),a=t.n(o);for(var s in o)"default"!==s&&function(e){t.d(n,e,(function(){return o[e]}))}(s);n["default"]=a.a},"59b5":function(e,n,t){"use strict";(function(e){t("d510"),t("921b");o(t("66fd"));var n=o(t("e30c"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("c11b")["createPage"])},"761a":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=s(t("9546")),a=s(t("9ef1"));function s(e){return e&&e.__esModule?e:{default:e}}var u,i,d,c=function(){t.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(t("4d52"))}.bind(null,t)).catch(t.oe)},r=function(){t.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(t("96bd"))}.bind(null,t)).catch(t.oe)},l={components:{faIcon:c,uniNavBar:r},data:function(){return{user:e.getStorageSync("user"),Images:[],disabled:!0,shop_name:"",shop_address:"",shop_num:0,shop_phone:"",shop_beizhu:""}},onLoad:function(n){u=this,d=e.getStorageSync("uid")},onShow:function(){i=e.getStorageSync("shop"),i?(e.setNavigationBarTitle({title:"修改门店"}),u.Images=i.Image,u.shop_name=i.name,u.shop_address=i.address,u.shop_phone=i.phone,u.shop_num=i.num,u.shop_beizhu=i.beizhu):e.setNavigationBarTitle({title:"新增门店"})},onUnload:function(){e.removeStorageSync("shop")},methods:{removeImg:function(e){u.Images.splice(e,1),u.Images=u.Images},upload_image:function(){a.default.upload_image(1).then((function(e){console.log(e),u.Images=e}))},switchChange:function(e){u.disabled=e.detail.value},start_add:function(){""==this.shop_name?e.showToast({title:"请输入门店名字",icon:"none"}):u.add_data()},add_data:function(){e.showLoading({title:"上传中..."});var n=o.default.Pointer("_User"),t=n.set(d);if(i){var a=o.default.Query("shops");a.set("Image",u.Images),a.set("name",u.shop_name),a.set("num",Number(u.shop_num)),a.set("address",u.shop_address),a.set("phone",u.shop_phone),a.set("beizhu",u.shop_beizhu),a.set("parent",t),a.set("disabled",!u.disabled),a.set("id",i.objectId),a.save().then((function(n){e.hideLoading(),console.log(n),e.showToast({title:"修改成功"})})).catch((function(e){console.log(e)}))}else{var s=o.default.Query("shops");s.equalTo("parent","==",d),s.equalTo("name","==",u.shop_name),s.find().then((function(n){if(console.log(n),0==n.length){var a=o.default.Query("shops");a.set("Image",u.Images),a.set("name",u.shop_name),a.set("num",Number(u.shop_num)),a.set("address",u.shop_address),a.set("phone",u.shop_phone),a.set("beizhu",u.shop_beizhu),a.set("have_out",0),a.set("disabled",!u.disabled),a.set("parent",t),a.save().then((function(n){console.log(n),e.hideLoading(),e.showToast({title:"添加成功"}),u.disabled=!0,u.shop_name="",u.shop_address="",u.shop_num=0,u.shop_phone="",u.shop_beizhu=""})).catch((function(e){console.log(e)}))}else e.showToast({title:"已存在此门店",icon:"none"})}))}}}};n.default=l}).call(this,t("c11b")["default"])},"790c":function(e,n,t){"use strict";var o=t("3408"),a=t.n(o);a.a},9048:function(e,n,t){"use strict";var o={"uni-nav-bar":function(){return t.e("components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"96bd"))}},a=function(){var e=this,n=e.$createElement;e._self._c},s=[];t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return o}))},e30c:function(e,n,t){"use strict";t.r(n);var o=t("9048"),a=t("4d5d");for(var s in a)"default"!==s&&function(e){t.d(n,e,(function(){return a[e]}))}(s);t("790c");var u,i=t("f0c5"),d=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=d.exports}},[["59b5","common/runtime","common/vendor"]]]);