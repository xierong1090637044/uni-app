(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/shops/add/add"],{"1a36":function(e,n,t){"use strict";var o=t("6837"),a=t.n(o);a.a},"5f51":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return a})},6503:function(e,n,t){"use strict";t.r(n);var o=t("5f51"),a=t("e7e9");for(var s in a)"default"!==s&&function(e){t.d(n,e,function(){return a[e]})}(s);t("1a36");var u=t("2877"),i=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=i.exports},6837:function(e,n,t){},"8e71":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=s(t("c74b")),a=s(t("e601"));function s(e){return e&&e.__esModule?e:{default:e}}var u,i,d,r=function(){return t.e("components/kilvn-fa-icon/fa-icon").then(t.bind(null,"0914"))},c=function(){return t.e("components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"b92d"))},l={components:{faIcon:r,uniNavBar:c},data:function(){return{user:e.getStorageSync("user"),Images:[],disabled:!0,shop_name:"",shop_address:"",shop_num:0,shop_phone:"",shop_beizhu:""}},onLoad:function(n){u=this,d=e.getStorageSync("uid")},onShow:function(){i=e.getStorageSync("shop"),i?(e.setNavigationBarTitle({title:"修改门店"}),u.Images=i.Image,u.shop_name=i.name,u.shop_address=i.address,u.shop_phone=i.phone,u.shop_num=i.num,u.shop_beizhu=i.beizhu):e.setNavigationBarTitle({title:"新增门店"})},onUnload:function(){e.removeStorageSync("shop")},methods:{removeImg:function(e){u.Images.splice(e,1),u.Images=u.Images},upload_image:function(){a.default.upload_image(1).then(function(e){console.log(e),u.Images=e})},switchChange:function(e){u.disabled=e.detail.value},start_add:function(){""==this.shop_name?e.showToast({title:"请输入门店名字",icon:"none"}):u.add_data()},add_data:function(){e.showLoading({title:"上传中..."});var n=o.default.Pointer("_User"),t=n.set(d);if(i){var a=o.default.Query("shops");a.set("Image",u.Images),a.set("name",u.shop_name),a.set("num",Number(u.shop_num)),a.set("address",u.shop_address),a.set("phone",u.shop_phone),a.set("beizhu",u.shop_beizhu),a.set("parent",t),a.set("disabled",!u.disabled),a.set("id",i.objectId),a.save().then(function(n){e.hideLoading(),console.log(n),e.showToast({title:"修改成功"})}).catch(function(e){console.log(e)})}else{var s=o.default.Query("shops");s.equalTo("parent","==",d),s.equalTo("name","==",u.shop_name),s.find().then(function(n){if(console.log(n),0==n.length){var a=o.default.Query("shops");a.set("Image",u.Images),a.set("name",u.shop_name),a.set("num",Number(u.shop_num)),a.set("address",u.shop_address),a.set("phone",u.shop_phone),a.set("beizhu",u.shop_beizhu),a.set("have_out",0),a.set("disabled",!u.disabled),a.set("parent",t),a.save().then(function(n){console.log(n),e.hideLoading(),e.showToast({title:"添加成功"}),u.disabled=!0,u.shop_name="",u.shop_address="",u.shop_num=0,u.shop_phone="",u.shop_beizhu=""}).catch(function(e){console.log(e)})}else e.showToast({title:"已存在此门店",icon:"none"})})}}}};n.default=l}).call(this,t("543d")["default"])},e7e9:function(e,n,t){"use strict";t.r(n);var o=t("8e71"),a=t.n(o);for(var s in o)"default"!==s&&function(e){t.d(n,e,function(){return o[e]})}(s);n["default"]=a.a},ec02:function(e,n,t){"use strict";(function(e){t("a961"),t("921b");o(t("66fd"));var n=o(t("6503"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["ec02","common/runtime","common/vendor"]]]);