(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/warehouse/add/add"],{"0ed7":function(e,t,a){},"5cc0":function(e,t,a){"use strict";a.r(t);var n=a("bb9f"),o=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=o.a},"9b5e":function(e,t,a){"use strict";(function(e){a("d510"),a("921b");n(a("66fd"));var t=n(a("f80b"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("543d")["createPage"])},"9c75":function(e,t,a){"use strict";var n=a("0ed7"),o=a.n(n);o.a},bb9f:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a("9546")),o=s(a("9ef1"));function s(e){return e&&e.__esModule?e:{default:e}}var u,r,c,i,h,d,l=function(){return a.e("components/kilvn-fa-icon/fa-icon").then(a.bind(null,"4d52"))},f=function(){return a.e("components/uni-nav-bar/uni-nav-bar").then(a.bind(null,"96bd"))},g={components:{faIcon:l,uniNavBar:f},data:function(){return{textDesc:"添加",user:e.getStorageSync("user"),Images:[],warehouse_name:"",warehouse_shop:"",warehouse_num:0,warehouse_charge:"",warehouse_beizhu:"",disabled:!0}},onLoad:function(t){u=this,d=e.getStorageSync("uid")},onShow:function(){if(r=e.getStorageSync("warehouse"),i=e.getStorageSync("shop"),r?(c=r.Ncharge,u.Images=r.Image||[],u.warehouse_name=r.stock_name,u.warehouse_shop=r.shop,u.warehouse_num=r.num,u.warehouse_charge=r.Ncharge.nickName,u.warehouse_beizhu=r.beizhu,u.disabled=!r.disabled,u.textDesc="修改",e.setNavigationBarTitle({title:"修改仓库信息"})):e.setNavigationBarTitle({title:"新增仓库"}),i){u.warehouse_shop=i.name;var t=n.default.Pointer("shops");h=t.set(i.objectId)}e.getStorageSync("charge")&&(c=e.getStorageSync("charge"),u.warehouse_charge=c.username)},onUnload:function(){e.removeStorageSync("warehouse"),e.removeStorageSync("shop"),e.removeStorageSync("charge")},methods:{removeImg:function(e){u.Images.splice(e,1),u.Images=u.Images},upload_image:function(){o.default.upload_image(1).then(function(e){console.log(e),u.Images=e})},switchChange:function(e){u.disabled=e.detail.value},start_add:function(){""==this.warehouse_name?e.showToast({title:"请输入仓库名字",icon:"none"}):""==this.warehouse_charge||null==this.warehouse_charge?e.showToast({title:"请选择仓库负责人",icon:"none"}):u.add_data()},add_data:function(){e.showLoading({title:"上传中..."});var t=n.default.Pointer("_User"),a=t.set(d),o=n.default.Pointer("_User"),s=o.set(c.objectId);if(r){var l=n.default.Query("stocks");l.set("Image",u.Images),l.set("stock_name",u.warehouse_name),l.set("num",Number(u.warehouse_num?u.warehouse_num:0)),i&&l.set("shop",h),l.set("Ncharge",s),l.set("beizhu",u.warehouse_beizhu||""),l.set("disabled",!u.disabled),l.set("parent",a),l.set("id",r.objectId),l.save().then(function(t){e.hideLoading(),console.log(t),e.showToast({icon:"none",title:"修改成功"}),setTimeout(function(){e.navigateBack({delta:1})},1e3)}).catch(function(e){console.log(e)})}else{var f=n.default.Query("stocks");f.equalTo("parent","==",d),f.equalTo("stock_name","==",u.warehouse_name),f.find().then(function(t){if(console.log(t),0==t.length){var o=n.default.Query("stocks");o.set("Image",u.Images),o.set("stock_name",u.warehouse_name),o.set("num",Number(u.warehouse_num)),i&&o.set("shop",h),o.set("Ncharge",s),o.set("beizhu",u.warehouse_beizhu),o.set("disabled",!u.disabled),o.set("parent",a),o.save().then(function(t){console.log(t),e.hideLoading(),e.showToast({title:"添加成功"}),u.warehouse_name="",u.warehouse_shop="",u.warehouse_num=0,u.warehouse_charge="",u.warehouse_beizhu="",u.disabled=!0}).catch(function(e){console.log(e)})}else e.showToast({title:"已存在此仓库",icon:"none"})})}}}};t.default=g}).call(this,a("543d")["default"])},d97b:function(e,t,a){"use strict";var n,o=function(){var e=this,t=e.$createElement;e._self._c},s=[];a.d(t,"b",function(){return o}),a.d(t,"c",function(){return s}),a.d(t,"a",function(){return n})},f80b:function(e,t,a){"use strict";a.r(t);var n=a("d97b"),o=a("5cc0");for(var s in o)"default"!==s&&function(e){a.d(t,e,function(){return o[e]})}(s);a("9c75");var u,r=a("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=c.exports}},[["9b5e","common/runtime","common/vendor"]]]);