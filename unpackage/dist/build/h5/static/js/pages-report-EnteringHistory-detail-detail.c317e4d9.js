(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-report-EnteringHistory-detail-detail"],{"2a79":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.loading?i("loading"):i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticStyle:{"line-height":"70rpx",padding:"0 20rpx"}},[t._v("操作产品")]),3==t.detail.type?i("v-uni-view",[i("v-uni-view",{staticStyle:{"max-height":"50vh","overflow-x":"scroll"}},t._l(t.products,function(e,a){return i("v-uni-view",{key:a,staticClass:"pro_listitem"},[i("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#000"}},[i("v-uni-view",[t._v("产品："+t._s(e.goodsName))])],1),i("v-uni-view",{staticClass:"pro_list"},[i("v-uni-view",[t._v("盘点前库存："+t._s(e.reserve))]),i("v-uni-view",[t._v("盘点后库存："+t._s(e.now_reserve))])],1)],1)}),1)],1):2==t.detail.type?i("v-uni-view",[i("v-uni-view",{staticStyle:{"max-height":"50vh","overflow-x":"scroll"}},t._l(t.products,function(e,a){return i("v-uni-view",{key:a,staticClass:"pro_listitem"},[i("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#000"}},[i("v-uni-view",[t._v("产品："+t._s(e.goodsName)+"（成本价：￥"+t._s(e.goodsId.costPrice)+"）")]),i("v-uni-view",[t._v("建议零售价：￥"+t._s(e.goodsId.retailPrice))])],1),i("v-uni-view",{staticClass:"pro_list"},[i("v-uni-view",[t._v("退货数量：X"+t._s(e.num))]),i("v-uni-view",[t._v("总价：￥"+t._s(e.total_money))])],1)],1)}),1),i("v-uni-view",{staticClass:"pro_allmoney"},[t._v("总计：￥"+t._s(t.detail.all_money))])],1):i("v-uni-view",[i("v-uni-view",{staticStyle:{"max-height":"50vh","overflow-x":"scroll"}},t._l(t.products,function(e,a){return i("v-uni-view",{key:a,staticClass:"pro_listitem"},[i("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#000"}},[i("v-uni-view",[t._v("产品："+t._s(e.goodsName)+"（成本价：￥"+t._s(e.goodsId.costPrice)+"）")]),i("v-uni-view",[t._v("建议零售价：￥"+t._s(e.goodsId.retailPrice))])],1),i("v-uni-view",{staticClass:"pro_list"},[-1==e.type?i("v-uni-view",[t._v("实际卖出价：￥"+t._s(e.retailPrice)+"（X"+t._s(e.num)+"）")]):i("v-uni-view",[t._v("实际进货价：￥"+t._s(e.retailPrice)+"（X"+t._s(e.num)+"）")]),i("v-uni-view",[t._v("总价：￥"+t._s(e.total_money))])],1)],1)}),1),i("v-uni-view",{staticClass:"pro_allmoney"},[t._v("总计：￥"+t._s(t.detail.all_money))])],1),-1==t.detail.type?i("v-uni-view",[i("v-uni-view",{staticClass:"kaidanmx"},[i("v-uni-view",{staticStyle:{padding:"10rpx 30rpx"}},[t._v("开单明细")]),t.detail.custom?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[t._v("客户姓名")]),i("v-uni-view",[t._v(t._s(t.detail.custom.custom_name))])],1):t._e(),i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[t._v("实际付款")]),i("v-uni-view",{staticClass:"real_color"},[t._v(t._s(null==t.detail.real_money?"未填写":t.detail.real_money))])],1),t.detail.debt>0?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[t._v("欠款")]),i("v-uni-view",{staticClass:"real_color"},[t._v(t._s(t.detail.debt))])],1):t._e()],1)],1):1==t.detail.type?i("v-uni-view",[i("v-uni-view",{staticClass:"kaidanmx"},[i("v-uni-view",{staticStyle:{padding:"10rpx 30rpx"}},[t._v("开单明细")]),t.detail.producer?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[t._v("供货商姓名")]),i("v-uni-view",[t._v(t._s(t.detail.producer.producer_name))])],1):t._e(),i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[t._v("实际付款")]),i("v-uni-view",{staticClass:"real_color"},[t._v(t._s(null==t.detail.real_money?"未填写":t.detail.real_money))])],1),t.detail.debt>0?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[t._v("欠款")]),i("v-uni-view",{staticClass:"real_color"},[t._v(t._s(t.detail.debt))])],1):t._e()],1)],1):2==t.detail.type?i("v-uni-view",[i("v-uni-view",{staticClass:"kaidanmx"},[i("v-uni-view",{staticStyle:{padding:"10rpx 30rpx"}},[t._v("退货明细")]),t.detail.custom?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[t._v("客户姓名")]),i("v-uni-view",[t._v(t._s(t.detail.custom.custom_name))])],1):i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[t._v("未记录客户")])],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"detail_bottom",staticStyle:{"margin-top":"20px"}},[i("v-uni-view",{staticStyle:{display:"flex","border-bottom":"1px solid#ddd"}},[i("v-uni-view",[i("v-uni-image",{staticClass:"avatar",attrs:{src:t.detail.opreater.avatarUrl}})],1),i("v-uni-view",{staticClass:"common_style"},[t._v(t._s(t.detail.opreater.nickName))]),i("v-uni-view",{staticClass:"common_style"},[t._v("（操作者）")])],1),i("v-uni-view",{staticStyle:{padding:"20rpx 0 0"}},[t.detail.beizhu?i("v-uni-view",[t._v("备注："+t._s(t.detail.beizhu))]):i("v-uni-view",[t._v("备注：暂无")]),i("v-uni-view",[t._v("操作时间："+t._s(t.detail.createdAt))])],1)],1),-1==t.detail.type||1==t.detail.type?i("v-uni-view",[i("v-uni-button",{staticClass:"confrim_button",on:{click:function(e){e=t.$handleEvent(e),t.revoke(e)}}},[t._v("此操作有误，撤销")])],1):t._e()],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"2f23":function(t,e,i){"use strict";var a=i("49a6"),n=i.n(a);n.a},"2f96":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".page[data-v-708ff0f6]{color:#4d4d4d;height:100vh;overflow-y:scroll;background:#fafafa;font-size:%?28?%}.pro_list[data-v-708ff0f6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.pro_listitem[data-v-708ff0f6]{background-color:#fff;padding:%?10?% %?20?%;border-bottom:%?1?% solid#ddd}.pro_allmoney[data-v-708ff0f6]{background-color:#fff;padding:%?10?% %?20?%;text-align:right;font-size:%?32?%;color:#f30}.beizhu_style[data-v-708ff0f6]{width:100%;background-color:#fff;padding:%?20?%;font-size:%?32?%}.confrim_button[data-v-708ff0f6]{width:60%;background:#426ab3;color:#fff;font-size:%?32?%;margin-top:10%}.detail_bottom[data-v-708ff0f6]{width:-webkit-calc(100% - %?40?%);width:calc(100% - %?40?%);background-color:#fff;padding:%?20?%}.avatar[data-v-708ff0f6]{width:%?80?%;height:%?80?%;-webkit-border-radius:50%;border-radius:50%}.common_style[data-v-708ff0f6]{line-height:%?80?%;margin-left:%?20?%;color:#000}.real_color[data-v-708ff0f6]{color:#f30!important}.kaidanmx[data-v-708ff0f6]{margin-top:%?30?%}.display_flex[data-v-708ff0f6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#fff;padding:%?15?% %?30?%}.left_content[data-v-708ff0f6]{width:%?150?%}",""])},"2fbe":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".Loading_view[data-v-2e263a9e]{height:100vh;width:100%;text-align:center;background:#fff}.loading_image[data-v-2e263a9e]{width:%?600?%;height:%?600?%;margin-top:30%}",""])},"43aa":function(t,e,i){},"49a6":function(t,e,i){var a=i("2f96");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4b0ee0bc",a,!0,{sourceMap:!1,shadowMode:!1})},"5d39":function(t,e,i){"use strict";var a=i("fd28"),n=i.n(a);n.a},7293:function(t,e,i){"use strict";i.r(e);var a=i("2a79"),n=i("af09");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("2f23");var o=i("2877"),l=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"708ff0f6",null);e["default"]=l.exports},"72d0":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"Loading_view"},[i("v-uni-image",{staticClass:"loading_image",attrs:{src:"/static/timg.gif"}})],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},af09:function(t,e,i){"use strict";i.r(e);var a=i("bc58"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},b2a2:function(t,e,i){"use strict";i.r(e);var a=i("43aa"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},bc58:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,n,s=l(i("e21e")),o=l(i("c211"));function l(t){return t&&t.__esModule?t:{default:t}}var v={components:{loading:o.default},data:function(){return{loading:!0,products:null,detail:null}},onLoad:function(t){console.log(t),a=this,n=t.id,a.getdetail(n)},methods:{getdetail:function(t){var e=s.default.Query("order_opreations");e.include("opreater","custom","producer"),e.get(t).then(function(t){a.detail=t;var e=s.default.Query("order_opreations");e.include("goodsId"),e.field("relations",t.objectId),e.relation("Bills").then(function(t){a.products=t.results,a.loading=!1})}).catch(function(t){console.log(t)})},revoke:function(){wx.showModal({title:"提示",content:"数据撤销后不可恢复，请谨慎撤销！",success:function(t){if(t.confirm){uni.showLoading({title:"撤销中..."});var e=s.default.Query("order_opreations");e.destroy(a.detail.objectId).then(function(t){for(var e=0;e<a.products.length;e++)a.delete_bill(e)}).catch(function(t){console.log(t)})}}})},delete_bill:function(t){var e=a.products[t],i=s.default.Query("Bills");i.destroy(e.objectId).then(function(i){var n=s.default.Query("Goods");n.set("id",e.goodsId.objectId),1==e.type?n.set("reserve",e.goodsId.reserve-e.num):-1==e.type&&n.set("reserve",e.goodsId.reserve+e.num),n.save().then(function(e){t==a.products.length-1&&(uni.hideLoading(),uni.navigateBack({delta:1}),setTimeout(function(){uni.showToast({title:"撤销成功"})},1e3))})})}}};e.default=v},c211:function(t,e,i){"use strict";i.r(e);var a=i("72d0"),n=i("b2a2");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("5d39");var o=i("2877"),l=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"2e263a9e",null);e["default"]=l.exports},fd28:function(t,e,i){var a=i("2fbe");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("425d82e2",a,!0,{sourceMap:!1,shadowMode:!1})}}]);