(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-setting-setting"],{"25f6":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"display_flex item"},[n("v-uni-view",{staticStyle:{"margin-right":"10rpx",width:"170rpx"}},[t._v("登陆网址")]),n("v-uni-input",{staticClass:"uni-input",attrs:{value:"http://www.jimuzhou.com/stock/test/",disabled:"true"}})],1),n("v-uni-view",{staticClass:"display_flex item"},[n("v-uni-view",{staticStyle:{"margin-right":"10rpx",width:"170rpx"}},[t._v("显示精度")]),n("v-uni-input",{staticClass:"uni-input",attrs:{type:"number",placeholder:"有效值0,1,2"},on:{blur:function(e){e=t.$handleEvent(e),t.modify_setting(e)}},model:{value:t.params.show_float,callback:function(e){t.$set(t.params,"show_float",e)},expression:"params.show_float"}})],1),n("v-uni-view",{staticClass:"display_flex item"},[n("v-uni-view",{staticStyle:{"margin-right":"10rpx",width:"170rpx"}},[t._v("USER账号")]),n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入USER账号"},on:{blur:function(e){e=t.$handleEvent(e),t.modify_setting(e)}},model:{value:t.params.USER,callback:function(e){t.$set(t.params,"USER",e)},expression:"params.USER"}})],1),n("v-uni-view",{staticClass:"display_flex item"},[n("v-uni-view",{staticStyle:{"margin-right":"10rpx",width:"170rpx"}},[t._v("UKEY账号")]),n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入UKEY账号"},on:{blur:function(e){e=t.$handleEvent(e),t.modify_setting(e)}},model:{value:t.params.UKEY,callback:function(e){t.$set(t.params,"UKEY",e)},expression:"params.UKEY"}})],1),n("v-uni-view",{staticClass:"display_flex item"},[n("v-uni-view",{staticStyle:{"margin-right":"10rpx",width:"170rpx"}},[t._v("打印机编号")]),n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入打印机编号"},on:{blur:function(e){e=t.$handleEvent(e),t.modify_setting(e)}},model:{value:t.params.number,callback:function(e){t.$set(t.params,"number",e)},expression:"params.number"}})],1)],1),1==t.identity?n("v-uni-view",{staticStyle:{"margin-top":"30rpx"}},[n("v-uni-view",{staticClass:"display_flex_bet item"},[n("v-uni-view",[t._v("关联微信通知")]),n("v-uni-switch",{attrs:{checked:t.params.wechat_info},on:{change:function(e){e=t.$handleEvent(e),t.link_wechatinfo(e)}}})],1)],1):t._e()],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"67d4":function(t,e,n){"use strict";n.r(e);var i=n("8b16"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=a.a},"6c30":function(t,e,n){"use strict";n.r(e);var i=n("25f6"),a=n("67d4");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("decf");var o=n("2877"),u=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"3f7b25bd",null);e["default"]=u.exports},"8b16":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,s=i(n("96d8")),o={data:function(){return{identity:"",user:"",params:{show_float:"",USER:"",UKEY:"",number:"",wechat_info:"",wx_openid:""}}},onLoad:function(){a=this,wx.getStorageSync("uid"),a.identity=uni.getStorageSync("identity"),s.default.query_setting().then(function(t){console.log(t),t[0]&&(a.params=t[0]),a.params.wx_openid?a.params.wechat_info=!0:a.params.wechat_info=!1})},methods:{modify_setting:function(){s.default.modify_setting(a.params)},link_wechatinfo:function(t){var e=t.detail.value;e?uni.getStorageSync("openid")?uni.showModal({title:"提示",content:"是否确定关联微信通知",confirmText:"关联",success:function(t){t.confirm?(a.params.wx_openid=uni.getStorageSync("openid"),s.default.modify_setting(a.params)):t.cancel&&console.log("用户点击取消")}}):uni.showModal({title:"提示",content:"请关闭当前窗口，重新进入后关联",confirmText:"关闭",success:function(t){t.confirm?this.$wechat.close():t.cancel&&console.log("用户点击取消")}}):(a.params.wx_openid="",s.default.modify_setting(a.params))}}};e.default=o},"96d8":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("7514"),n("c5f6");var a=i(n("795b")),s={modify_setting:function(t){var e=this;console.log(t);var n=uni.getStorageSync("uid"),i=uni.getStorageSync("setting")||{};return new a.default(function(a,s){uni.showLoading({title:"上传中"});var o=Bmob.Query("setting"),u=Bmob.Pointer("_User"),r=u.set(n);i.objectId&&o.set("id",i.objectId),o.set("show_float",Number(t.show_float)),o.set("USER",t.USER),o.set("UKEY",t.UKEY),o.set("number",t.number),o.set("wx_openid",t.wx_openid),o.set("parent",r),o.save().then(function(t){console.log(t),uni.hideLoading(),uni.showToast({title:"保存成功"}),e.query_setting()}).catch(function(t){console.log(t)})})},query_setting:function(){var t=uni.getStorageSync("uid");return new a.default(function(e,n){var i=Bmob.Query("setting");i.equalTo("parent","==",t),i.find().then(function(t){uni.setStorageSync("setting",t[0]),e(t)})})}};e.default=s},"9be4":function(t,e,n){var i=n("e36c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("0653cba9",i,!0,{sourceMap:!1,shadowMode:!1})},decf:function(t,e,n){"use strict";var i=n("9be4"),a=n.n(i);a.a},e36c:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".item[data-v-3f7b25bd]{background:#fff;padding:%?4?% %?30?%;font-size:%?24?%}.uni-input[data-v-3f7b25bd]{border-bottom:%?1?% solid#ccc;padding:%?10?% 0}",""])}}]);