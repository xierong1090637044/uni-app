(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/shops/add/add"],{"1a36":function(e,n,t){"use strict";var o=t("6837"),a=t.n(o);a.a},6503:function(e,n,t){"use strict";t.r(n);var o=t("abc4"),a=t("e7e9");for(var s in a)"default"!==s&&function(e){t.d(n,e,function(){return a[e]})}(s);t("1a36");var u=t("2877"),i=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=i.exports},6837:function(e,n,t){},"8e71":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("c74b"));function a(e){return e&&e.__esModule?e:{default:e}}var s,u,i,d=function(){return t.e("components/kilvn-fa-icon/fa-icon").then(t.bind(null,"0914"))},r=function(){return t.e("components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"b92d"))},c={components:{faIcon:d,uniNavBar:r},data:function(){return{disabled:!0,shop_name:"",shop_address:"",shop_num:0,shop_phone:"",shop_beizhu:""}},onLoad:function(n){s=this,i=e.getStorageSync("uid")},onShow:function(){u=e.getStorageSync("shop"),u?(e.setNavigationBarTitle({title:"修改门店"}),s.shop_name=u.name,s.shop_address=u.address,s.shop_phone=u.phone,s.shop_num=u.num,s.shop_beizhu=u.beizhu):e.setNavigationBarTitle({title:"新增门店"})},onUnload:function(){e.removeStorageSync("shop")},methods:{switchChange:function(e){s.disabled=e.detail.value},start_add:function(){""==this.shop_name?e.showToast({title:"请输入门店名字",icon:"none"}):s.add_data()},add_data:function(){e.showLoading({title:"上传中..."});var n=o.default.Pointer("_User"),t=n.set(i);if(u){var a=o.default.Query("shops");a.set("name",s.shop_name),a.set("num",Number(s.shop_num)),a.set("address",s.shop_address),a.set("phone",s.shop_phone),a.set("beizhu",s.shop_beizhu),a.set("parent",t),a.set("disabled",!s.disabled),a.set("id",u.objectId),a.save().then(function(n){e.hideLoading(),console.log(n),e.showToast({title:"修改成功"})}).catch(function(e){console.log(e)})}else{var d=o.default.Query("shops");d.equalTo("parent","==",i),d.equalTo("name","==",s.shop_name),d.find().then(function(n){if(console.log(n),0==n.length){var a=o.default.Query("shops");a.set("name",s.shop_name),a.set("num",Number(s.shop_num)),a.set("address",s.shop_address),a.set("phone",s.shop_phone),a.set("beizhu",s.shop_beizhu),a.set("have_out",0),a.set("disabled",!s.disabled),a.set("parent",t),a.save().then(function(n){console.log(n),e.hideLoading(),e.showToast({title:"添加成功"}),s.disabled=!0,s.shop_name="",s.shop_address="",s.shop_num=0,s.shop_phone="",s.shop_beizhu=""}).catch(function(e){console.log(e)})}else e.showToast({title:"已存在此门店",icon:"none"})})}}}};n.default=c}).call(this,t("543d")["default"])},abc4:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return a})},e7e9:function(e,n,t){"use strict";t.r(n);var o=t("8e71"),a=t.n(o);for(var s in o)"default"!==s&&function(e){t.d(n,e,function(){return o[e]})}(s);n["default"]=a.a},ec02:function(e,n,t){"use strict";(function(e){t("a961"),t("921b");o(t("66fd"));var n=o(t("6503"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["ec02","common/runtime","common/vendor"]]]);