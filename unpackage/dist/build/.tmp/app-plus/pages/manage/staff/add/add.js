(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/staff/add/add"],{"0e39":function(e,a,t){"use strict";t.r(a);var n=t("cbea"),s=t("386f");for(var o in s)"default"!==o&&function(e){t.d(a,e,function(){return s[e]})}(o);t("b92e");var d=t("2877"),f=Object(d["a"])(s["default"],n["a"],n["b"],!1,null,null,null);a["default"]=f.exports},"386f":function(e,a,t){"use strict";t.r(a);var n=t("566b"),s=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(a,e,function(){return n[e]})}(o);a["default"]=s.a},"566b":function(e,a,t){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=s(t("e21e"));function s(e){return e&&e.__esModule?e:{default:e}}var o,d,f,r,i,u=function(){return t.e("components/kilvn-fa-icon/fa-icon").then(t.bind(null,"8899"))},l=function(){return t.e("components/uni-collapse/uni-collapse").then(t.bind(null,"4bdf"))},c=function(){return t.e("components/uni-collapse-item/uni-collapse-item").then(t.bind(null,"8988"))},m={},h={components:{faIcon:u,uniCollapse:l,uniCollapseItem:c},data:function(){return{disabled:!0,shop_name:"",staff_name:"",staff_address:"",staff_phone:"",staff_password:"",manage:[{id:1,name:"产品管理"},{id:2,name:"员工管理"},{id:3,name:"仓库管理"},{id:4,name:"门店管理"},{id:5,name:"客户管理"},{id:6,name:"产品类别管理"}],recode:[{id:1,name:"入库记录"},{id:2,name:"出库记录"},{id:3,name:"客户退货记录"},{id:4,name:"盘点记录"},{id:5,name:"经营状况"}],current:[],recodecurrent:[]}},onLoad:function(a){o=this,i=e.getStorageSync("uid")},onShow:function(){if(r=e.getStorageSync("staff"),f=e.getStorageSync("shop"),r){e.setNavigationBarTitle({title:"修改员工信息"}),o.staff_name=r.username,o.staff_address=r.address,o.staff_phone=r.mobilePhoneNumber,o.staff_password=r.password;var a=!0,t=!1,s=void 0;try{for(var i,u=r.rights.current[Symbol.iterator]();!(a=(i=u.next()).done);a=!0){var l=i.value;console.log(l," at pages\\manage\\staff\\add\\add.vue:162"),o.manage[l].checked=!0}}catch(_){t=!0,s=_}finally{try{a||null==u.return||u.return()}finally{if(t)throw s}}var c=!0,m=!1,h=void 0;try{for(var g,p=r.rights.recodecurrent[Symbol.iterator]();!(c=(g=p.next()).done);c=!0){var b=g.value;o.recode[b].checked=!0}}catch(_){m=!0,h=_}finally{try{c||null==p.return||p.return()}finally{if(m)throw h}}}if(f){o.shop_name=f.name;var v=n.default.Pointer("shops");d=v.set(f.objectId)}},methods:{switchChange:function(e){o.disabled=e.detail.value},checkboxChange:function(e){m.current=e.detail.value},checkboxChange_record:function(e){m.recodecurrent=e.detail.value},onNavigationBarButtonTap:function(a){console.log(this.staff_name," at pages\\manage\\staff\\add\\add.vue:202"),null==this.staff_name?e.showToast({title:"请输入姓名",icon:"none"}):this.staff_phone.length<11?e.showToast({title:"请输入正确的手机号",icon:"none"}):this.staff_password.length<6?e.showToast({title:"密码不能少于6位",icon:"none"}):o.add_data()},add_data:function(){if(e.showLoading({title:"上传中..."}),r){e.hideLoading();var a=e.getStorageSync("uid"),t=n.default.Pointer("_User"),s=t.set(a),u=n.default.Query("staffs");u.set("username",o.staff_name),u.set("nickName",o.staff_name),u.set("password",o.staff_password),u.set("mobilePhoneNumber",o.staff_phone),u.set("rights",m),u.set("address",null==o.staff_address?"":o.staff_address),u.set("avatarUrl","http://bmob-cdn-23134.b0.upaiyun.com/2019/04/29/4705b31340bfff8080c068f52fd17e2c.png"),u.set("masterId",s),u.set("disabled",!o.disabled),f&&u.set("shop",d),u.set("id",r.objectId),u.save().then(function(a){console.log(a," at pages\\manage\\staff\\add\\add.vue:249"),e.showToast({title:"修改成功"})}).catch(function(e){console.log(e," at pages\\manage\\staff\\add\\add.vue:254")})}else{var l=n.default.Query("staffs");l.equalTo("masterId","==",i),l.equalTo("mobilePhoneNumber","==",o.staff_phone),l.find().then(function(a){if(console.log(a," at pages\\manage\\staff\\add\\add.vue:263"),0==a.length){e.hideLoading();var t=e.getStorageSync("uid"),s=n.default.Pointer("_User"),r=s.set(t),i=n.default.Query("staffs");i.set("username",o.staff_name),f&&i.set("shop",d),i.set("nickName",o.staff_name),i.set("password",o.staff_password),i.set("mobilePhoneNumber",o.staff_phone),i.set("rights",m),i.set("address",null==o.staff_address?"":o.staff_address),i.set("avatarUrl","http://bmob-cdn-23134.b0.upaiyun.com/2019/04/29/4705b31340bfff8080c068f52fd17e2c.png"),i.set("masterId",r),i.set("have_out",0),i.set("disabled",!o.disabled),i.save().then(function(a){console.log(a," at pages\\manage\\staff\\add\\add.vue:284"),e.showToast({title:"添加成功"})}).catch(function(e){console.log(e," at pages\\manage\\staff\\add\\add.vue:289")})}else e.showToast({title:"已存在此账号",icon:"none"})})}}}};a.default=h}).call(this,t("6e42")["default"])},b92e:function(e,a,t){"use strict";var n=t("dd38"),s=t.n(n);s.a},cbea:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement;e._self._c},s=[];t.d(a,"a",function(){return n}),t.d(a,"b",function(){return s})},dd38:function(e,a,t){}},[["7f11","common/runtime","common/vendor"]]]);