(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-good_count-count_detail-count_detail"],{"01b1":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i,s=a(o("8577"));function a(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,producer:null}},onLoad:function(){i=this,n=uni.getStorageSync("uid"),this.products=uni.getStorageSync("products")},methods:{formSubmit:function(t){var e=this;console.log(t),this.button_disabled=!0,uni.showLoading({title:"上传中..."});for(var o=[],a=new Array,u=function(t){var o=s.default.Query("Goods");o.get(e.products[t].objectId).then(function(o){o.set("reserve",e.products[t].num),o.set("stocktype",e.products[t].num>e.products[t].warning_num?1:0),o.save()}).catch(function(t){console.log(t)});var i=s.default.Query("Bills"),u=s.default.Pointer("_User"),r=u.set(n),c=s.default.Pointer("Goods"),d=c.set(e.products[t].objectId);i.set("goodsName",e.products[t].goodsName),i.set("retailPrice",e.products[t].modify_retailPrice.toString()),i.set("num",e.products[t].num),i.set("reserve",e.products[t].reserve),i.set("now_reserve",e.products[t].num.toString()),i.set("total_money",e.products[t].total_money),i.set("goodsId",d),i.set("userId",r),i.set("type",3),a.push(i)},r=0;r<this.products.length;r++)u(r);s.default.Query("Bills").saveAll(a).then(function(e){for(var a=0;a<e.length;a++)if(o.push(e[a].success.objectId),a==e.length-1){var u=s.default.Relation("Bills"),r=u.add(o),c=s.default.Pointer("_User"),d=c.set(n),l=s.default.Query("order_opreations");l.set("relations",r),l.set("beizhu",t.detail.value.input_beizhu),l.set("type",3),l.set("opreater",d),l.set("master",d),l.set("goodsName",i.products[0].goodsName),l.save().then(function(t){console.log("添加操作历史记录成功",t),uni.hideLoading(),uni.showToast({title:"产品盘点成功",icon:"success",success:function(){i.button_disabled=!1,setTimeout(function(){uni.navigateBack({delta:2})},500)}})})}},function(t){console.log("异常处理")})}}};e.default=u},"1b99":function(t,e,o){var n=o("a5ca");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("7bb7765a",n,!0,{sourceMap:!1,shadowMode:!1})},"43bd":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("v-uni-view",{staticClass:"page"},[o("v-uni-view",{staticStyle:{"line-height":"70rpx",padding:"20rpx 20rpx 0"}},[t._v("已选产品")]),o("v-uni-view",{staticStyle:{"max-height":"25vh","overflow-x":"scroll"}},t._l(t.products,function(e,n){return o("v-uni-view",{key:n,staticClass:"pro_listitem"},[o("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#3D3D3D"}},[o("v-uni-view",[t._v("产品："+t._s(e.goodsName))])],1),o("v-uni-view",{staticClass:"pro_list"},[o("v-uni-view",[t._v("盘点前库存："+t._s(e.reserve))]),o("v-uni-view",[t._v("盘点后库存："+t._s(e.num))])],1)],1)}),1),o("v-uni-form",{on:{submit:function(e){e=t.$handleEvent(e),t.formSubmit(e)}}},[o("v-uni-view",{staticStyle:{"margin-top":"20px"}},[o("v-uni-textarea",{staticClass:"beizhu_style",attrs:{placeholder:"请输入备注",name:"input_beizhu"}})],1),o("v-uni-view",{staticStyle:{padding:"0 30rpx","margin-top":"60rpx"}},[o("v-uni-button",{staticClass:"confrim_button",attrs:{disabled:t.button_disabled,"form-type":"submit"}},[t._v("确认盘点")])],1)],1)],1)],1)},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},"633c":function(t,e,o){"use strict";o.r(e);var n=o("01b1"),i=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},a5ca:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".page[data-v-2f96758a]{color:#4d4d4d;background:#f6f5ec;font-size:%?28?%;height:100vh;overflow:scroll}.pro_list[data-v-2f96758a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.pro_listitem[data-v-2f96758a]{background-color:#fff;padding:%?10?% %?20?%;border-bottom:%?1?% solid#ddd}.pro_allmoney[data-v-2f96758a]{background-color:#fff;padding:%?10?% %?20?%;text-align:right;font-size:%?32?%;color:#f30}.beizhu_style[data-v-2f96758a]{width:-webkit-calc(100% - %?40?%);width:calc(100% - %?40?%);background-color:#fff;padding:%?20?%;font-size:%?32?%;max-height:%?100?%}.confrim_button[data-v-2f96758a]{background:#aa2116\t;color:#fff;font-weight:700;font-size:%?32?%}",""])},d738:function(t,e,o){"use strict";o.r(e);var n=o("43bd"),i=o("633c");for(var s in i)"default"!==s&&function(t){o.d(e,t,function(){return i[t]})}(s);o("ff77");var a=o("2877"),u=Object(a["a"])(i["default"],n["a"],n["b"],!1,null,"2f96758a",null);e["default"]=u.exports},ff77:function(t,e,o){"use strict";var n=o("1b99"),i=o.n(n);i.a}}]);