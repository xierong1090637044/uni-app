(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/shops/add/add"],{3355:function(e,n,a){},"592a":function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t(a("e21e"));function t(e){return e&&e.__esModule?e:{default:e}}var s,d,u=function(){return a.e("components/kilvn-fa-icon/fa-icon").then(a.bind(null,"8899"))},i=e.getStorageSync("uid"),h={components:{faIcon:u},data:function(){return{shop_name:"",shop_address:"",shop_num:0,shop_phone:"",shop_beizhu:""}},onLoad:function(e){s=this},onShow:function(){d=e.getStorageSync("shop"),d?(e.setNavigationBarTitle({title:"新增门店"}),s.shop_name=d.name,s.shop_address=d.address,s.shop_phone=d.phone,s.shop_num=d.num,s.shop_beizhu=d.beizhu):e.setNavigationBarTitle({title:"修改门店"})},methods:{onNavigationBarButtonTap:function(n){console.log(this.shop_name," at pages\\manage\\shops\\add\\add.vue:82"),""==this.shop_name?e.showToast({title:"请输入门店名字",icon:"none"}):s.add_data()},add_data:function(){e.showLoading({title:"上传中..."});var n=o.default.Pointer("_User"),a=n.set(i);if(d){var t=o.default.Query("shops");t.set("name",s.shop_name),t.set("num",s.shop_num),t.set("address",s.shop_address),t.set("phone",s.shop_phone),t.set("beizhu",s.shop_beizhu),t.set("parent",a),t.set("id",d.objectId),t.save().then(function(n){e.hideLoading(),console.log(n," at pages\\manage\\shops\\add\\add.vue:114"),e.showToast({title:"修改成功"})}).catch(function(e){console.log(e," at pages\\manage\\shops\\add\\add.vue:119")})}else{var u=o.default.Query("shops");u.equalTo("parent","==",i),u.equalTo("name","==",s.shop_name),u.find().then(function(n){if(console.log(n," at pages\\manage\\shops\\add\\add.vue:128"),0==n.length){var t=o.default.Query("shops");t.set("name",s.shop_name),t.set("num",s.shop_num),t.set("address",s.shop_address),t.set("phone",s.shop_phone),t.set("beizhu",s.shop_beizhu),t.set("parent",a),t.save().then(function(n){console.log(n," at pages\\manage\\shops\\add\\add.vue:138"),e.hideLoading(),e.showToast({title:"添加成功"})}).catch(function(e){console.log(e," at pages\\manage\\shops\\add\\add.vue:144")})}else e.showToast({title:"已存在此门店",icon:"none"})})}}}};n.default=h}).call(this,a("6e42")["default"])},"5a4d":function(e,n,a){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},t=[];a.d(n,"a",function(){return o}),a.d(n,"b",function(){return t})},"6e35":function(e,n,a){"use strict";a.r(n);var o=a("5a4d"),t=a("6ecd");for(var s in t)"default"!==s&&function(e){a.d(n,e,function(){return t[e]})}(s);a("f81e");var d=a("2877"),u=Object(d["a"])(t["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports},"6ecd":function(e,n,a){"use strict";a.r(n);var o=a("592a"),t=a.n(o);for(var s in o)"default"!==s&&function(e){a.d(n,e,function(){return o[e]})}(s);n["default"]=t.a},f81e:function(e,n,a){"use strict";var o=a("3355"),t=a.n(o);t.a}},[["47ec","common/runtime","common/vendor"]]]);