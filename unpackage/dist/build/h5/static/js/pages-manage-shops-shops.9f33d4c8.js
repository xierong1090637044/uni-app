(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-shops-shops"],{"0813":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6");var i={name:"UniSegmentedControl",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:0}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},created:function(){this.currentIndex=this.current},methods:{_onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",t))}}};e.default=i},"406d":function(t,e,n){"use strict";var i=n("8591"),o=n.n(i);o.a},"421a":function(t,e,n){var i=n("e2d2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("4bd347c2",i,!0,{sourceMap:!1,shadowMode:!1})},"52f2":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"segmented-control",class:{text:"text"===t.styleType},style:{borderColor:"text"===t.styleType?"":t.activeColor}},t._l(t.values,function(e,i){return n("v-uni-view",{key:i,staticClass:"segmented-control-item",class:[{text:"text"===t.styleType},{active:i===t.currentIndex}],style:{color:i===t.currentIndex?"text"===t.styleType?t.activeColor:"#fff":"text"===t.styleType?"#000":t.activeColor,backgroundColor:i===t.currentIndex&&"button"===t.styleType?t.activeColor:""},on:{click:function(e){e=t.$handleEvent(e),t._onClick(i)}}},[t._v(t._s(e))])}),1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},8591:function(t,e,n){var i=n("c75e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("2924ebb6",i,!0,{sourceMap:!1,shadowMode:!1})},9852:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.loading?n("loading"):t._e(),n("v-uni-view",{attrs:{"wx:else":""}},[n("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"添加"},on:{"click-right":function(e){e=t.$handleEvent(e),t.goto_add(e)}}},[n("v-uni-view",{staticClass:"input-view"},[n("uni-icon",{attrs:{type:"search",size:"22",color:"#666666"}}),n("v-uni-input",{staticClass:"input",attrs:{"confirm-type":"search",type:"text",placeholder:"输入搜索关键词"},on:{confirm:function(e){e=t.$handleEvent(e),t.input_confirm(e)}}})],1)],1),n("v-uni-view",{staticClass:"uni-common-mt"},[n("uni-segmented-control",{attrs:{current:t.current,values:t.items,"style-type":"text","active-color":"#426ab3"},on:{clickItem:function(e){e=t.$handleEvent(e),t.onClickItem(e)}}})],1),t.shops&&t.shops.length>0?n("v-uni-scroll-view",{staticClass:"indexes",staticStyle:{height:"calc(100vh - 212rpx)"},attrs:{"scroll-y":"","scroll-with-animation":"true","enable-back-to-top":"true"}},t._l(t.shops,function(e,i){return n("v-uni-view",{key:i},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"display_flex_bet",on:{click:function(n){n=t.$handleEvent(n),t.goto_detail(e)}}},[n("v-uni-view",{staticClass:"display_flex"},[e.Image&&e.Image.length>0?n("v-uni-image",{staticClass:"shop_avatar",attrs:{src:e.Image[0],mode:"aspectFit"},on:{click:function(n){n.stopPropagation(),n=t.$handleEvent(n),t.priviewImg(e.Image[0])}}}):n("v-uni-image",{staticClass:"shop_avatar",attrs:{src:"/static/shop.png"}}),n("v-uni-view",[n("v-uni-view",{staticClass:"shop_name"},[t._v(t._s(e.name))]),n("v-uni-view",{staticClass:"shop_mobile"},[t._v("地址："),e.address?n("v-uni-text",[t._v(t._s(e.address))]):n("v-uni-text",[t._v("未填写")])],1)],1)],1),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1),n("v-uni-view",{staticClass:"right_item"},[t.is_choose?n("v-uni-view",{staticClass:"display_flex",staticStyle:{"justify-content":"flex-end",width:"100%"},on:{click:function(n){n=t.$handleEvent(n),t.select_this(e)}}},[n("v-uni-text",{staticStyle:{color:"#d93a49"}},[t._v("选择")])],1):t._e()],1)],1)],1)}),1):n("nocontent",{attrs:{type:1}})],1)],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"9bc6":function(t,e,n){"use strict";n.r(e);var i=n("52f2"),o=n("ede0");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("ba00");var s=n("2877"),r=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"5d782896",null);e["default"]=r.exports},ba00:function(t,e,n){"use strict";var i=n("421a"),o=n.n(i);o.a},c75e:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-03e0b38e]{height:100vh;background:#fafafa}.uni-common-mt[data-v-03e0b38e]{background:#fff;padding:%?20?% 0}.shop_name[data-v-03e0b38e]{font-weight:700;font-size:%?30?%;color:#3d3d3d;margin-bottom:%?4?%}.shop_mobile[data-v-03e0b38e]{color:#999}.right_item[data-v-03e0b38e]{padding-bottom:%?10?%;width:100%;border-bottom:%?1?% solid#ccc}.shop_avatar[data-v-03e0b38e]{width:%?90?%;height:%?70?%;margin-right:%?20?%}.content[data-v-03e0b38e]{padding:%?10?% %?30?%;background:#fff}body.?%PAGE?%[data-v-03e0b38e]{background:#fafafa}",""])},c8ef:function(t,e,n){"use strict";n.r(e);var i=n("f324"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},c8f0:function(t,e,n){"use strict";(function(t){var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("7f7f");var o=i(n("f499"));n("7514");var a=i(n("795b")),s=i(n("c74b")),r={get_satffAuth:function(){return new a.default(function(t,e){var n=uni.getStorageSync("user").objectId,i=s.default.Query("staffs");i.include("masterId"),i.get(n).then(function(e){e.masterId.is_vip?(e.is_vip=!0,e.vip_time=e.masterId.vip_time):(e.is_vip=!1,e.vip_time=0),uni.setStorageSync("user",e),t(e)}).catch(function(e){t()})})},get_stafflist:function(t,e){return new a.default(function(n,i){var a=JSON.parse(localStorage.getItem("bmob")).objectId,r=s.default.Query("staffs");r.order("num"),r.equalTo("masterId","==",a),r.equalTo("disabled","==",t),r.include("shop"),e&&r.equalTo("name","==",{$regex:e+".*"}),r.find().then(function(t){localStorage.setItem("staffs",(0,o.default)(t)),n(t)})})},add_staff:function(e){var n=JSON.parse(localStorage.getItem("bmob")).objectId;return new a.default(function(i,o){var a=s.default.Pointer("_User"),r=a.set(n),c=s.default.Pointer("shops"),u=c.set(e.shop);if(e.objectId){var l=s.default.Pointer("_User"),d=l.set(n),f=s.default.Query("staffs");f.set("username",e.name),f.set("nickName",e.name),f.set("password",e.password),f.set("mobilePhoneNumber",e.mobilePhoneNumber),f.set("rights",e.rights),f.set("address",e.address),f.set("avatarUrl","http://bmob-cdn-23134.b0.upaiyun.com/2019/04/29/4705b31340bfff8080c068f52fd17e2c.png"),f.set("masterId",d),f.set("disabled",!e.disabled),f.set("shop",u),f.set("id",e.objectId),f.save().then(function(e){t.log(e),i(e)}).catch(function(e){t.log(e)})}else{var v=s.default.Query("staffs");v.equalTo("masterId","==",n),v.equalTo("mobilePhoneNumber","==",e.mobilePhoneNumber),v.find().then(function(n){if(t.log(n),0==n.length){var o=s.default.Query("staffs");o.set("username",e.name),o.set("shop",u),o.set("nickName",e.name),o.set("password",e.password),o.set("mobilePhoneNumber",e.mobilePhoneNumber),o.set("rights",e.rights),o.set("address",e.address),o.set("avatarUrl","http://bmob-cdn-23134.b0.upaiyun.com/2019/04/29/4705b31340bfff8080c068f52fd17e2c.png"),o.set("masterId",r),o.set("have_out",0),o.set("disabled",!e.disabled),o.save().then(function(e){t.log(e),i(e)}).catch(function(e){t.log(e)})}else i(!1,"已存在此账号")})}})},delete_staff:function(e){return new a.default(function(n,i){var o=s.default.Query("staffs");o.destroy(e).then(function(t){n(t)}).catch(function(e){t.log(e)})})}};e.default=r}).call(this,n("5a52")["default"])},e2d2:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".segmented-control[data-v-5d782896]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:75%;font-size:%?28?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;overflow:hidden;border:1px solid;border-radius:%?10?%}.segmented-control.text[data-v-5d782896]{border:0;border-radius:0}.segmented-control-item[data-v-5d782896]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;line-height:%?60?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-left:1px solid}.segmented-control-item.active[data-v-5d782896]{color:#fff}.segmented-control-item.text[data-v-5d782896]{border-left:0;color:#000}.segmented-control-item.text.active[data-v-5d782896]{border-bottom-style:solid}.segmented-control-item[data-v-5d782896]:first-child{border-left-width:0}",""])},ed63:function(t,e,n){"use strict";n.r(e);var i=n("9852"),o=n("c8ef");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("406d");var s=n("2877"),r=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"03e0b38e",null);e["default"]=r.exports},ede0:function(t,e,n){"use strict";n.r(e);var i=n("0813"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},f324:function(t,e,n){"use strict";(function(t){var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("5d73"));n("7514");var a,s,r,c=i(n("c8f0")),u=i(n("c74b")),l=i(n("9bc6")),d=i(n("524a")),f=i(n("0914")),v=i(n("b92d")),b=i(n("5753")),h={components:{uniSegmentedControl:l.default,faIcon:f.default,loading:d.default,uniNavBar:v.default,uniIcon:b.default},data:function(){return{loading:!0,shops:null,is_choose:!1,items:["已启用","未启用"],current:0,disabled:!1}},onLoad:function(t){a=this,r=uni.getStorageSync("uid"),"choose"==t.type&&(a.is_choose=!0)},onShow:function(){uni.removeStorageSync("shop"),a.getshop_list()},onUnload:function(){s=""},methods:{priviewImg:function(t){uni.previewImage({current:t,urls:[t]})},goto_detail:function(t){uni.setStorageSync("shop",t),uni.navigateTo({url:"detail/detail"})},onClickItem:function(t){this.current!==t&&(this.current=t,0==t?(a.disabled=!1,a.getshop_list()):1==t&&(a.disabled=!0,a.getshop_list()))},select_this:function(t){uni.setStorageSync("shop",t),uni.navigateBack({delta:1})},goto_add:function(){var e=uni.getStorageSync("user"),n=uni.getStorageSync("identity");e.is_vip||a.shops.length<2?uni.navigateTo({url:"add/add"}):uni.showModal({title:"提示",content:"非会员最多上传2个门店",confirmText:"充值会员",success:function(e){e.confirm?1==n?uni.navigateTo({url:"/pages/mine/vip/vip"}):uni.showToast({title:"员工不能充值",icon:"none"}):e.cancel&&t.log("用户点击取消")}})},input_confirm:function(t){s=t.detail.value,a.getshop_list()},getshop_list:function(){var e=u.default.Query("shops");e.order("num"),e.equalTo("parent","==",r),e.equalTo("disabled","==",a.disabled),s&&e.equalTo("name","==",{$regex:s+".*"}),e.find().then(function(e){t.log(e,r),a.loading=!1;var n=e;uni.getStorage({key:"identity",success:function(e){"2"==e.data?c.default.get_satffAuth().then(function(e){t.log(e);var i=[];if(e.shop){var s=!0,r=!1,c=void 0;try{for(var u,l=(0,o.default)(n);!(s=(u=l.next()).done);s=!0){var d=u.value;d.objectId==e.shop.objectId&&i.push(d)}}catch(f){r=!0,c=f}finally{try{s||null==l.return||l.return()}finally{if(r)throw c}}}a.shops=i}):"1"==e.data&&(a.shops=n)}})})}}};e.default=h}).call(this,n("5a52")["default"])}}]);