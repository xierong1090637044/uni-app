(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/warehouse/add/add"],{"0084":function(e,a,t){"use strict";(function(e){t("a961"),t("921b");n(t("66fd"));var a=n(t("89ce"));function n(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("543d")["createPage"])},"57bc":function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement;e._self._c},o=[];t.d(a,"a",function(){return n}),t.d(a,"b",function(){return o})},"6cb4":function(e,a,t){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=s(t("c74b")),o=s(t("e601"));function s(e){return e&&e.__esModule?e:{default:e}}var u,r,i,c,h,l,d=function(){return t.e("components/kilvn-fa-icon/fa-icon").then(t.bind(null,"0914"))},f=function(){return t.e("components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"b92d"))},g={components:{faIcon:d,uniNavBar:f},data:function(){return{user:e.getStorageSync("user"),Images:[],warehouse_name:"",warehouse_shop:"",warehouse_num:0,warehouse_charge:"",warehouse_beizhu:"",disabled:!0}},onLoad:function(a){u=this,l=e.getStorageSync("uid")},onShow:function(){if(r=e.getStorageSync("warehouse"),i=e.getStorageSync("charge"),c=e.getStorageSync("shop"),r?(u.Images=r.Image,u.warehouse_name=r.stock_name,u.warehouse_shop=r.shop,u.warehouse_num=r.num,u.warehouse_charge=r.charge,u.warehouse_beizhu=r.beizhu,u.disabled=!r.disabled,e.setNavigationBarTitle({title:"修改仓库信息"})):e.setNavigationBarTitle({title:"新增仓库"}),c){u.warehouse_shop=c.name;var a=n.default.Pointer("shops");h=a.set(c.objectId)}u.warehouse_charge=i.username},onUnload:function(){e.removeStorageSync("warehouse"),e.removeStorageSync("shop"),e.removeStorageSync("charge")},methods:{removeImg:function(e){u.Images.splice(e,1),u.Images=u.Images},upload_image:function(){o.default.upload_image(1).then(function(e){console.log(e),u.Images=e})},switchChange:function(e){u.disabled=e.detail.value},start_add:function(){""==this.warehouse_name?e.showToast({title:"请输入仓库名字",icon:"none"}):""==this.warehouse_charge||null==this.warehouse_charge?e.showToast({title:"请选择仓库负责人",icon:"none"}):u.add_data()},add_data:function(){e.showLoading({title:"上传中..."});var a=n.default.Pointer("_User"),t=a.set(l),o=n.default.Pointer("staffs"),s=o.set(i.objectId);if(r){var d=n.default.Query("stocks");d.set("Image",u.Images),d.set("stock_name",u.warehouse_name),d.set("num",Number(u.warehouse_num)),c&&d.set("shop",h),d.set("charge",s),d.set("beizhu",u.warehouse_beizhu),d.set("disabled",!u.disabled),d.set("parent",t),d.set("id",r.objectId),d.save().then(function(a){e.hideLoading(),console.log(a),e.showToast({title:"修改成功"})}).catch(function(e){console.log(e)})}else{var f=n.default.Query("stocks");f.equalTo("parent","==",l),f.equalTo("stock_name","==",u.warehouse_name),f.find().then(function(a){if(console.log(a),0==a.length){var o=n.default.Query("stocks");o.set("Image",u.Images),o.set("stock_name",u.warehouse_name),o.set("num",Number(u.warehouse_num)),c&&o.set("shop",h),o.set("charge",s),o.set("beizhu",u.warehouse_beizhu),o.set("disabled",!u.disabled),o.set("parent",t),o.save().then(function(a){console.log(a),e.hideLoading(),e.showToast({title:"添加成功"}),u.warehouse_name="",u.warehouse_shop="",u.warehouse_num=0,u.warehouse_charge="",u.warehouse_beizhu="",u.disabled=!0}).catch(function(e){console.log(e)})}else e.showToast({title:"已存在此仓库",icon:"none"})})}}}};a.default=g}).call(this,t("543d")["default"])},"89ce":function(e,a,t){"use strict";t.r(a);var n=t("57bc"),o=t("ae75");for(var s in o)"default"!==s&&function(e){t.d(a,e,function(){return o[e]})}(s);t("a444");var u=t("2877"),r=Object(u["a"])(o["default"],n["a"],n["b"],!1,null,null,null);a["default"]=r.exports},"9e4e":function(e,a,t){},a444:function(e,a,t){"use strict";var n=t("9e4e"),o=t.n(n);o.a},ae75:function(e,a,t){"use strict";t.r(a);var n=t("6cb4"),o=t.n(n);for(var s in n)"default"!==s&&function(e){t.d(a,e,function(){return n[e]})}(s);a["default"]=o.a}},[["0084","common/runtime","common/vendor"]]]);