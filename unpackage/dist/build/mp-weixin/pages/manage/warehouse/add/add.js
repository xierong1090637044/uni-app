(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/warehouse/add/add"],{"1be1":function(e,a,t){"use strict";(function(e){t("9511"),t("921b");n(t("66fd"));var a=n(t("ffb7"));function n(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("543d")["createPage"])},2886:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement;e._self._c},o=[];t.d(a,"a",function(){return n}),t.d(a,"b",function(){return o})},"4a89":function(e,a,t){},a70b:function(e,a,t){"use strict";var n=t("4a89"),o=t.n(n);o.a},bf16:function(e,a,t){"use strict";t.r(a);var n=t("fda5"),o=t.n(n);for(var s in n)"default"!==s&&function(e){t.d(a,e,function(){return n[e]})}(s);a["default"]=o.a},fda5:function(e,a,t){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=o(t("b739"));function o(e){return e&&e.__esModule?e:{default:e}}var s,u,r,i,c,h,l=function(){return t.e("components/kilvn-fa-icon/fa-icon").then(t.bind(null,"3636"))},d=function(){return t.e("components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"f190"))},f={components:{faIcon:l,uniNavBar:d},data:function(){return{warehouse_name:"",warehouse_shop:"",warehouse_num:0,warehouse_charge:"",warehouse_beizhu:"",disabled:!0}},onLoad:function(a){s=this,h=e.getStorageSync("uid")},onShow:function(){if(u=e.getStorageSync("warehouse"),r=e.getStorageSync("charge"),i=e.getStorageSync("shop"),u?(s.warehouse_name=u.stock_name,s.warehouse_shop=u.shop,s.warehouse_num=u.num,s.warehouse_charge=u.charge,s.warehouse_beizhu=u.beizhu,s.disabled=!u.disabled,e.setNavigationBarTitle({title:"修改仓库信息"})):e.setNavigationBarTitle({title:"新增仓库"}),i){s.warehouse_shop=i.name;var a=n.default.Pointer("shops");c=a.set(i.objectId)}s.warehouse_charge=r.username},onUnload:function(){e.removeStorageSync("warehouse"),e.removeStorageSync("shop"),e.removeStorageSync("charge")},methods:{switchChange:function(e){s.disabled=e.detail.value},start_add:function(){""==this.warehouse_name?e.showToast({title:"请输入仓库名字",icon:"none"}):""==this.warehouse_charge||null==this.warehouse_charge?e.showToast({title:"请选择仓库负责人",icon:"none"}):s.add_data()},add_data:function(){e.showLoading({title:"上传中..."});var a=n.default.Pointer("_User"),t=a.set(h),o=n.default.Pointer("staffs"),l=o.set(r.objectId);if(u){var d=n.default.Query("stocks");d.set("stock_name",s.warehouse_name),d.set("num",Number(s.warehouse_num)),i&&d.set("shop",c),d.set("charge",l),d.set("beizhu",s.warehouse_beizhu),d.set("disabled",!s.disabled),d.set("parent",t),d.set("id",u.objectId),d.save().then(function(a){e.hideLoading(),console.log(a),e.showToast({title:"修改成功"})}).catch(function(e){console.log(e)})}else{var f=n.default.Query("stocks");f.equalTo("parent","==",h),f.equalTo("stock_name","==",s.warehouse_name),f.find().then(function(a){if(console.log(a),0==a.length){var o=n.default.Query("stocks");o.set("stock_name",s.warehouse_name),o.set("num",Number(s.warehouse_num)),i&&o.set("shop",c),o.set("charge",l),o.set("beizhu",s.warehouse_beizhu),o.set("disabled",!s.disabled),o.set("parent",t),o.save().then(function(a){console.log(a),e.hideLoading(),e.showToast({title:"添加成功"}),s.warehouse_name="",s.warehouse_shop="",s.warehouse_num=0,s.warehouse_charge="",s.warehouse_beizhu="",s.disabled=!0}).catch(function(e){console.log(e)})}else e.showToast({title:"已存在此仓库",icon:"none"})})}}}};a.default=f}).call(this,t("543d")["default"])},ffb7:function(e,a,t){"use strict";t.r(a);var n=t("2886"),o=t("bf16");for(var s in o)"default"!==s&&function(e){t.d(a,e,function(){return o[e]})}(s);t("a70b");var u=t("2877"),r=Object(u["a"])(o["default"],n["a"],n["b"],!1,null,null,null);a["default"]=r.exports}},[["1be1","common/runtime","common/vendor"]]]);