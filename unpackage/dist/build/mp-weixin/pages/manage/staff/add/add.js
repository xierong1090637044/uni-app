(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/staff/add/add"],{"0ac4":function(t,e,s){"use strict";(function(t){s("d34b"),s("921b");n(s("66fd"));var e=n(s("c601"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("543d")["createPage"])},4626:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(s("4515"));function a(t){return t&&t.__esModule?t:{default:t}}var o,f,i,c,d=function(){s.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(s("cc4b"))}.bind(null,s)).catch(s.oe)},r=function(){s.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(s("8157"))}.bind(null,s)).catch(s.oe)},u={},l={components:{faIcon:d,uniNavBar:r},data:function(){return{stocks:t.getStorageSync("_warehouse"),modify_desc:"添加",disabled:!0,shop_name:"",staff_name:"",staff_address:"",staff_phone:"",staff_password:""}},onLoad:function(e){o=this,t.getStorageSync("uid")},onShow:function(){c=t.getStorageSync("staff"),i=t.getStorageSync("shop"),u=t.getStorageSync("staffRights")||{},c&&(t.setNavigationBarTitle({title:"修改员工信息"}),o.modify_desc="修改",o.shop_name=c.shop?c.shop.name:"",o.staff_name=c.nickName,o.staff_address=c.address,o.staff_phone=c.mobilePhoneNumber,o.staff_password=c.pwd||"",t.setStorageSync("staffRights",c.rights))},methods:{switchChange:function(t){o.disabled=t.detail.value},start_add:function(){null==this.staff_name?t.showToast({title:"请输入姓名",icon:"none"}):this.staff_phone.length<11?t.showToast({title:"账号不能少于11位",icon:"none"}):""==this.staff_password||null==this.staff_password||void 0==this.staff_password?t.showToast({title:"请输入密码",icon:"none"}):this.staff_password.length<6?t.showToast({title:"密码不能少于6位",icon:"none"}):o.add_data()},add_data:function(){if(t.showLoading({title:"上传中..."}),c){t.hideLoading();var e=t.getStorageSync("uid"),s=n.default.Pointer("_User"),a=s.set(e),d=n.default.Query("_User");d.set("username",o.staff_phone),d.set("nickName",o.staff_name),d.set("password",o.staff_password),d.set("pwd",o.staff_password),d.set("mobilePhoneNumber",o.staff_phone),d.set("rights",u),d.set("address",null==o.staff_address?"":o.staff_address),d.set("avatarUrl","http://bmob-cdn-23134.b0.upaiyun.com/2019/04/29/4705b31340bfff8080c068f52fd17e2c.png"),d.set("masterId",a),d.set("disabled",!o.disabled),d.set("stocks",u.select_stocks||[]),d.set("identity",2),d.set("id",c.objectId),d.save().then((function(e){o.select_stocks=[],t.removeStorageSync("staffRights"),setTimeout((function(){t.showToast({title:"修改成功"})}),1e3),t.navigateBack({delta:2})})).catch((function(t){console.log(t)}))}else{var r=n.default.Query("_User");r.equalTo("mobilePhoneNumber","==",o.staff_phone),r.find().then((function(e){if(console.log(e),0==e.length){t.hideLoading();var s=t.getStorageSync("uid"),a=n.default.Pointer("_User"),c=a.set(s),d=n.default.Query("_User");d.set("username",o.staff_phone),i&&d.set("shop",f),d.set("stocks",u.select_stocks||[]),d.set("nickName",o.staff_name),d.set("password",o.staff_password),d.set("pwd",o.staff_password),d.set("mobilePhoneNumber",o.staff_phone),d.set("rights",u),d.set("address",null==o.staff_address?"":o.staff_address),d.set("avatarUrl","http://bmob-cdn-23134.b0.upaiyun.com/2019/04/29/4705b31340bfff8080c068f52fd17e2c.png"),d.set("masterId",c),d.set("have_out",0),d.set("disabled",!o.disabled),d.save().then((function(e){console.log(e),t.showToast({title:"添加成功"}),o.select_stocks=[],t.removeStorageSync("staffRights")})).catch((function(e){209==e.code&&t.showToast({title:"已存在此账号",icon:"none"})}))}else t.hideLoading(),t.showToast({title:"已存在此账号",icon:"none"})}))}}}};e.default=l}).call(this,s("543d")["default"])},"521f":function(t,e,s){"use strict";var n={"uni-nav-bar":function(){return s.e("components/uni-nav-bar/uni-nav-bar").then(s.bind(null,"8157"))}},a=function(){var t=this,e=t.$createElement;t._self._c},o=[];s.d(e,"b",(function(){return a})),s.d(e,"c",(function(){return o})),s.d(e,"a",(function(){return n}))},"81c7":function(t,e,s){},c601:function(t,e,s){"use strict";s.r(e);var n=s("521f"),a=s("f035");for(var o in a)"default"!==o&&function(t){s.d(e,t,(function(){return a[t]}))}(o);s("e57e");var f,i=s("f0c5"),c=Object(i["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],f);e["default"]=c.exports},e57e:function(t,e,s){"use strict";var n=s("81c7"),a=s.n(n);a.a},f035:function(t,e,s){"use strict";s.r(e);var n=s("4626"),a=s.n(n);for(var o in n)"default"!==o&&function(t){s.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a}},[["0ac4","common/runtime","common/vendor"]]]);