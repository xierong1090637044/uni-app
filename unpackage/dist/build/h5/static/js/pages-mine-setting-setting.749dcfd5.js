(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-setting-setting"],{3468:function(t,i,n){"use strict";var e,a,u;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("7514");var s={data:function(){return{show_float:null,USER:null,UKEY:null,number:null}},onLoad:function(){a=this,e=wx.getStorageSync("uid"),uni.getStorage({key:"setting",success:function(t){u=t.data,a.show_float=u.show_float,a.USER=u.USER,a.UKEY=u.UKEY,a.number=u.number},fail:function(){a.query_setting()}})},methods:{query_setting:function(){var t=Bmob.Query("setting");t.equalTo("parent","==",e),t.find().then(function(t){uni.setStorageSync("setting",t[0]),a.show_float=t[0].show_float,a.USER=t[0].USER,a.UKEY=t[0].UKEY,a.number=t[0].number})}}};i.default=s},"653d":function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,".item[data-v-9387ed2c]{background:#fff;padding:%?4?% %?30?%;font-size:%?24?%}.uni-input[data-v-9387ed2c]{border-bottom:%?1?% solid#ccc;padding:%?10?% 0}",""])},"757b":function(t,i,n){var e=n("653d");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("00935b4d",e,!0,{sourceMap:!1,shadowMode:!1})},"84ff":function(t,i,n){"use strict";var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"display_flex item"},[n("v-uni-view",{staticStyle:{"margin-right":"10rpx",width:"110rpx"}},[t._v("登陆网址")]),n("v-uni-input",{staticClass:"uni-input",attrs:{value:"http://www.jimuzhou.com/stock/test/",disabled:"true"}})],1),n("v-uni-view",{staticClass:"display_flex item"},[n("v-uni-view",{staticStyle:{"margin-right":"10rpx",width:"110rpx"}},[t._v("显示精度")]),n("v-uni-input",{staticClass:"uni-input",attrs:{type:"number",placeholder:"有效值0,1,2"},model:{value:t.show_float,callback:function(i){t.show_float=i},expression:"show_float"}})],1),n("v-uni-view",{staticClass:"display_flex item"},[n("v-uni-view",{staticStyle:{"margin-right":"10rpx",width:"110rpx"}},[t._v("USER账号")]),n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入USER账号"},model:{value:t.USER,callback:function(i){t.USER=i},expression:"USER"}})],1),n("v-uni-view",{staticClass:"display_flex item"},[n("v-uni-view",{staticStyle:{"margin-right":"10rpx",width:"110rpx"}},[t._v("UKEY账号")]),n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入UKEY账号"},model:{value:t.UKEY,callback:function(i){t.UKEY=i},expression:"UKEY"}})],1),n("v-uni-view",{staticClass:"display_flex item"},[n("v-uni-view",{staticStyle:{"margin-right":"10rpx",width:"130rpx"}},[t._v("打印机编号")]),n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入打印机编号"},model:{value:t.number,callback:function(i){t.number=i},expression:"number"}})],1)],1)],1)},a=[];n.d(i,"a",function(){return e}),n.d(i,"b",function(){return a})},cf1c:function(t,i,n){"use strict";var e=n("757b"),a=n.n(e);a.a},d287:function(t,i,n){"use strict";n.r(i);var e=n("84ff"),a=n("d436");for(var u in a)"default"!==u&&function(t){n.d(i,t,function(){return a[t]})}(u);n("cf1c");var s=n("2877"),r=Object(s["a"])(a["default"],e["a"],e["b"],!1,null,"9387ed2c",null);i["default"]=r.exports},d436:function(t,i,n){"use strict";n.r(i);var e=n("3468"),a=n.n(e);for(var u in e)"default"!==u&&function(t){n.d(i,t,function(){return e[t]})}(u);i["default"]=a.a}}]);