(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-warehouse-add-add"],{"48a9":function(e,t,a){"use strict";var i=a("f8a9"),s=a.n(i);s.a},"4ec3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,s,n,o,r,u,c=h(a("0909")),l=h(a("8577"));function h(e){return e&&e.__esModule?e:{default:e}}var d={components:{faIcon:c.default},data:function(){return{warehouse_name:"",warehouse_shop:"",warehouse_num:0,warehouse_charge:"",warehouse_beizhu:"",disabled:!0}},onLoad:function(e){i=this,u=uni.getStorageSync("uid")},onShow:function(){if(s=uni.getStorageSync("warehouse"),n=uni.getStorageSync("charge"),o=uni.getStorageSync("shop"),s?(i.warehouse_name=s.stock_name,i.warehouse_shop=s.shop,i.warehouse_num=s.num,i.warehouse_charge=s.charge,i.warehouse_beizhu=s.beizhu,i.disabled=s.disabled,uni.setNavigationBarTitle({title:"新增仓库"})):uni.setNavigationBarTitle({title:"修改仓库信息"}),o){i.warehouse_shop=o.name;var e=l.default.Pointer("shops");r=e.set(o.objectId)}i.warehouse_charge=n.username},methods:{switchChange:function(e){i.disabled=e.detail.value},add_data:function(){uni.showLoading({title:"上传中..."});var e=l.default.Pointer("_User"),t=e.set(u),a=l.default.Pointer("staffs"),c=a.set(n.objectId);if(s){var h=l.default.Query("stocks");h.set("stock_name",i.warehouse_name),h.set("num",i.warehouse_num),o&&h.set("shop",r),h.set("charge",c),h.set("beizhu",i.warehouse_beizhu),h.set("disabled",!i.disabled),h.set("parent",t),h.set("id",s.objectId),h.save().then(function(e){uni.hideLoading(),console.log(e),uni.showToast({title:"修改成功"})}).catch(function(e){console.log(e)})}else{var d=l.default.Query("stocks");d.equalTo("parent","==",u),d.equalTo("stock_name","==",i.warehouse_name),d.find().then(function(e){if(console.log(e),0==e.length){var a=l.default.Query("stocks");a.set("stock_name",i.warehouse_name),a.set("num",i.warehouse_num),o&&a.set("shop",r),a.set("charge",c),a.set("beizhu",i.warehouse_beizhu),a.set("disabled",!i.disabled),a.set("parent",t),a.save().then(function(e){console.log(e),uni.hideLoading(),uni.showToast({title:"添加成功"})}).catch(function(e){console.log(e)})}else uni.showToast({title:"已存在此仓库",icon:"none"})})}}}};t.default=d},"8a5c":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",[a("v-uni-view",{staticClass:"display_flex item"},[a("v-uni-text",{staticStyle:{"margin-right":"6rpx"}},[e._v("名称")]),a("v-uni-text",{staticStyle:{color:"#d93a49","margin-right":"20rpx"}},[e._v("*")]),a("v-uni-input",{staticStyle:{width:"calc(100% - 200rpx)"},attrs:{placeholder:"请输入名称"},model:{value:e.warehouse_name,callback:function(t){e.warehouse_name=t},expression:"warehouse_name"}})],1),a("v-uni-view",{staticClass:"display_flex item"},[a("v-uni-text",{staticStyle:{"margin-right":"6rpx"}},[e._v("排序")]),a("v-uni-text",{staticStyle:{color:"#d93a49","margin-right":"20rpx"}},[e._v("*")]),a("v-uni-input",{staticStyle:{width:"calc(100% - 200rpx)"},attrs:{placeholder:"请输入排序(数值越小,排列越靠前)",type:"number",maxlength:"11"},model:{value:e.warehouse_num,callback:function(t){e.warehouse_num=t},expression:"warehouse_num"}})],1),a("v-uni-navigator",{staticClass:"display_flex_bet item",attrs:{"hover-class":"none",url:"../../shops/shops?type=choose"}},[a("v-uni-view",{staticClass:"display_flex"},[a("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[e._v("门店")]),a("v-uni-input",{staticStyle:{width:"calc(100% - 200rpx)"},attrs:{placeholder:"请选择门店"},model:{value:e.warehouse_shop,callback:function(t){e.warehouse_shop=t},expression:"warehouse_shop"}})],1),a("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#ddd"}})],1),a("v-uni-navigator",{staticClass:"display_flex_bet item",staticStyle:{"margin-bottom":"60rpx"},attrs:{"hover-class":"none",url:"../../staff/staff?type=choose"}},[a("v-uni-view",{staticClass:"display_flex"},[a("v-uni-text",{staticStyle:{"margin-right":"6rpx"}},[e._v("负责人")]),a("v-uni-text",{staticStyle:{color:"#d93a49","margin-right":"20rpx"}},[e._v("*")]),a("v-uni-input",{staticStyle:{width:"calc(100% - 200rpx)"},attrs:{placeholder:"请选择负责人",disabled:"true"},model:{value:e.warehouse_charge,callback:function(t){e.warehouse_charge=t},expression:"warehouse_charge"}})],1),a("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#ddd"}})],1),a("v-uni-view",{staticClass:"display_flex item"},[a("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[e._v("备注")]),a("v-uni-input",{staticStyle:{width:"calc(100% - 200rpx)"},attrs:{placeholder:"请输入备注"},model:{value:e.warehouse_beizhu,callback:function(t){e.warehouse_beizhu=t},expression:"warehouse_beizhu"}})],1),a("v-uni-view",{staticClass:"display_flex_bet item",staticStyle:{"margin-bottom":"60rpx"}},[a("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[e._v("启用")]),a("v-uni-switch",{attrs:{checked:e.disabled},on:{change:function(t){t=e.$handleEvent(t),e.switchChange(t)}}})],1)],1)],1)},s=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return s})},a715:function(e,t,a){"use strict";a.r(t);var i=a("8a5c"),s=a("b21a");for(var n in s)"default"!==n&&function(e){a.d(t,e,function(){return s[e]})}(n);a("48a9");var o=a("2877"),r=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,"550739ba",null);t["default"]=r.exports},b21a:function(e,t,a){"use strict";a.r(t);var i=a("4ec3"),s=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);t["default"]=s.a},d135:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"uni-page-body[data-v-550739ba]{background:#fafafa}.item[data-v-550739ba]{padding:%?20?% %?30?%;background:#fff}.rights_item[data-v-550739ba]{margin-bottom:%?20?%}body.?%PAGE?%[data-v-550739ba]{background:#fafafa}",""])},f8a9:function(e,t,a){var i=a("d135");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("4f06").default;s("04154914",i,!0,{sourceMap:!1,shadowMode:!1})}}]);