(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-finance-recordDetail-recordDetail"],{"0517":function(t,e,i){var a=i("4f4f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("b428a2ac",a,!0,{sourceMap:!1,shadowMode:!1})},"05d6":function(t,e,i){"use strict";i.r(e);var a=i("db34"),s=i.n(a);for(var l in a)"default"!==l&&function(t){i.d(e,t,function(){return a[t]})}(l);e["default"]=s.a},"4f4f":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".listItem[data-v-290d00c0]{background:#fff;padding:%?10?% %?30?%}.left_content[data-v-290d00c0]{width:%?160?%}",""])},"805d":function(t,e,i){"use strict";i.r(e);var a=i("8ac0"),s=i("05d6");for(var l in s)"default"!==l&&function(t){i.d(e,t,function(){return s[t]})}(l);i("b248");var n=i("f0c5"),c=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,"290d00c0",null);e["default"]=c.exports},"8ac0":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.detail.custom?i("v-uni-view",{staticClass:"display_flex listItem",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticClass:"left_content"},[t._v("客户")]),i("v-uni-view",[t._v(t._s(t.detail.custom.custom_name))])],1):t.detail.producer?i("v-uni-view",{staticClass:"display_flex listItem",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticClass:"left_content"},[t._v("供货商")]),i("v-uni-view",[t._v(t._s(t.detail.producer.producer_name))])],1):t._e(),i("v-uni-view",{staticClass:"display_flex listItem",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticClass:"left_content"},[t._v("交易分类")]),1==t.detail.type&&6!=t.detail.extra_type&&4!=t.detail.extra_type?i("v-uni-view",{staticStyle:{color:"#2ca879"}},[t._v("采购支出")]):t._e(),1==t.detail.type&&6==t.detail.extra_type?i("v-uni-view",{staticStyle:{color:"#2ca879"}},[t._v("手动记录支出")]):t._e(),1==t.detail.type&&4==t.detail.extra_type?i("v-uni-view",{staticStyle:{color:"#2ca879"}},[t._v("采购退货款")]):t._e(),-1==t.detail.type&&6!=t.detail.extra_type&&4!=t.detail.extra_type?i("v-uni-view",{staticStyle:{color:"#2ca879"}},[t._v("销售收入")]):t._e(),-1==t.detail.type&&6==t.detail.extra_type?i("v-uni-view",{staticStyle:{color:"#2ca879"}},[t._v("手动记录收入")]):t._e(),-1==t.detail.type&&4==t.detail.extra_type?i("v-uni-view",{staticStyle:{color:"#2ca879"}},[t._v("采购退货款")]):t._e()],1),6==t.detail.extra_type?i("v-uni-view",{staticClass:"display_flex listItem",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticClass:"left_content"},[t._v("交易类别")]),i("v-uni-view",{staticStyle:{color:"#2ca879"}},[t.detail.fristClass?i("v-uni-text",[t._v(t._s(t.detail.fristClass.class_text))]):t._e(),t.detail.secondClass?i("v-uni-text",[t._v(t._s(t.detail.secondClass.class_text))]):t._e()],1)],1):t._e(),i("v-uni-view",{staticClass:"display_flex listItem",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticClass:"left_content"},[t._v("发生金额")]),i("v-uni-view",{staticStyle:{color:"#2ca879"}},[t._v(t._s(t.detail.real_money))])],1),i("v-uni-view",{staticClass:"display_flex listItem",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[1==t.detail.type?i("v-uni-view",{staticClass:"left_content"},[t._v("收款时间")]):-1==t.detail.type?i("v-uni-view",{staticClass:"left_content"},[t._v("付款时间")]):t._e(),t.detail.createdTime?i("v-uni-view",[t._v(t._s(t.detail.createdTime.iso.split(" ")[0]))]):t._e()],1),i("v-uni-view",{staticClass:"display_flex listItem",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticClass:"left_content"},[t._v("创建时间")]),i("v-uni-view",[t._v(t._s(t.detail.createdAt))])],1),i("v-uni-view",{staticClass:"display_flex listItem",staticStyle:{"border-bottom":"1rpx solid#F7F7F7","margin-top":"60rpx"}},[i("v-uni-view",{staticClass:"left_content"},[t._v("经办人")]),t.detail.opreater?i("v-uni-view",[t._v(t._s(t.detail.opreater.nickName))]):t._e()],1),i("v-uni-view",{staticClass:"display_flex listItem",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticClass:"left_content"},[t._v("相关单号")]),i("v-uni-view",[t._v(t._s(t.detail.objectId))])],1),i("v-uni-view",{staticClass:"display_flex listItem",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticClass:"left_content"},[t._v("备注说明")]),i("v-uni-view",[t._v(t._s(t.detail.beizhu||"未填写"))])],1),t.detail.Images&&t.detail.Images.length>0?i("v-uni-view",{staticStyle:{padding:"20rpx 30rpx",background:"#fff","margin-top":"30rpx"}},[i("v-uni-view",{staticClass:"left_content"},[t._v("凭证图")]),i("v-uni-view",{staticStyle:{width:"100%",padding:"20rpx 0"}},[i("v-uni-view",{staticClass:"upload_image display_flex"},t._l(t.detail.Images,function(e,a){return i("v-uni-view",{key:a,staticStyle:{position:"relative"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.priview(e)}}},[i("v-uni-image",{staticStyle:{width:"180rpx",height:"180rpx","margin-right":"10rpx"},attrs:{src:e,mode:"widthFix"}})],1)}),1)],1)],1):t._e()],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},b248:function(t,e,i){"use strict";var a=i("0517"),s=i.n(a);s.a},db34:function(t,e,i){"use strict";(function(t){var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,l=a(i("9546")),n={data:function(){return{detail:{}}},onLoad:function(e){s=this;var i=l.default.Query("order_opreations");i.include("opreater","account","custom","producer","secondClass","fristClass"),i.get(e.id).then(function(e){t.log(e),s.detail=e}).catch(function(e){t.log(e)})},methods:{priview:function(t){uni.previewImage({current:t,urls:s.detail.Images})}}};e.default=n}).call(this,i("5a52")["default"])}}]);