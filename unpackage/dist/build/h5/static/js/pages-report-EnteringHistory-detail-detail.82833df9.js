(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-report-EnteringHistory-detail-detail"],{"0a39":function(t,i,e){"use strict";e.r(i);var a=e("f334"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=s.a},"134a":function(t,i,e){"use strict";e.r(i);var a=e("e9da"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=s.a},"524a":function(t,i,e){"use strict";e.r(i);var a=e("c636"),s=e("0a39");for(var n in s)"default"!==n&&function(t){e.d(i,t,function(){return s[t]})}(n);e("f68d");var l=e("2877"),o=Object(l["a"])(s["default"],a["a"],a["b"],!1,null,"11ff4219",null);i["default"]=o.exports},"5d54":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".page[data-v-0e2375b0]{color:#4d4d4d;height:100vh;overflow-y:scroll;background:#fafafa;font-size:%?28?%}.pro_list[data-v-0e2375b0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.pro_listitem[data-v-0e2375b0]{background-color:#fff;padding:%?10?% %?20?%;border-bottom:%?1?% solid#ddd}.pro_allmoney[data-v-0e2375b0]{background-color:#fff;padding:%?10?% %?20?%;text-align:right;font-size:%?32?%;color:#f30}.beizhu_style[data-v-0e2375b0]{width:100%;background-color:#fff;padding:%?20?%;font-size:%?32?%}.confrim_button[data-v-0e2375b0]{width:60%;background:#426ab3;color:#fff;font-size:%?32?%;margin-top:10%}.detail_bottom[data-v-0e2375b0]{width:calc(100% - %?40?%);background-color:#fff;padding:%?20?%}.avatar[data-v-0e2375b0]{width:%?80?%;height:%?80?%;border-radius:50%}.common_style[data-v-0e2375b0]{line-height:%?80?%;margin-left:%?20?%;color:#000}.real_color[data-v-0e2375b0]{color:#f30!important}.kaidanmx[data-v-0e2375b0]{margin-top:%?30?%}.display_flex[data-v-0e2375b0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#fff;padding:%?15?% %?30?%}.left_content[data-v-0e2375b0]{width:%?150?%}",""])},"87f2":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[t.loading?e("loading"):e("v-uni-view",{staticClass:"page"},[e("v-uni-view",{staticStyle:{"line-height":"70rpx",padding:"0 20rpx"}},[t._v("操作产品")]),3==t.detail.type?e("v-uni-view",[e("v-uni-view",{staticStyle:{"max-height":"50vh","overflow-x":"scroll"}},t._l(t.products,function(i,a){return e("v-uni-view",{key:a,staticClass:"pro_listitem"},[e("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#000"}},[e("v-uni-view",[t._v("产品："+t._s(i.goodsName))])],1),e("v-uni-view",{staticClass:"pro_list"},[e("v-uni-view",[t._v("盘点前库存："+t._s(i.reserve))]),e("v-uni-view",[t._v("盘点后库存："+t._s(i.now_reserve))])],1)],1)}),1)],1):2==t.detail.type?e("v-uni-view",[e("v-uni-view",{staticStyle:{"max-height":"50vh","overflow-x":"scroll"}},t._l(t.products,function(i,a){return e("v-uni-view",{key:a,staticClass:"pro_listitem"},[e("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#000"}},[e("v-uni-view",[t._v("产品："+t._s(i.goodsName)+"（成本价：￥"+t._s(i.goodsId.costPrice)+"）")]),e("v-uni-view",[t._v("建议零售价：￥"+t._s(i.goodsId.retailPrice))])],1),e("v-uni-view",{staticClass:"pro_list"},[e("v-uni-view",[t._v("退货数量：X"+t._s(i.num))]),e("v-uni-view",[t._v("总价：￥"+t._s(i.total_money))])],1)],1)}),1),e("v-uni-view",{staticClass:"pro_allmoney"},[t._v("总计：￥"+t._s(t.detail.all_money))])],1):-2==t.detail.type?e("v-uni-view",[e("v-uni-view",{staticStyle:{"max-height":"50vh","overflow-x":"scroll"}},t._l(t.products,function(i,a){return e("v-uni-view",{key:a,staticClass:"pro_listitem"},[e("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#000"}},[e("v-uni-view",[t._v("产品："+t._s(i.goodsName))]),e("v-uni-view",[t._v("调拨数量："+t._s(i.num))])],1),e("v-uni-view",{staticClass:"pro_list"},[e("v-uni-view",[t._v("调出仓库："+t._s(i.stock))]),e("v-uni-view",[t._v("当前库存："+t._s(i.reserve-i.num))])],1),e("v-uni-view",{staticClass:"pro_list"},[e("v-uni-view",[t._v("调入仓库："+t._s(i.out_stock))]),e("v-uni-view",[t._v("当前库存："+t._s(i.out_reserve+i.num))])],1)],1)}),1),-2!=t.detail.type?e("v-uni-view",{staticClass:"pro_allmoney"},[t._v("总计：￥"+t._s(t.detail.all_money))]):t._e()],1):e("v-uni-view",[e("v-uni-view",{staticStyle:{"max-height":"50vh","overflow-x":"scroll"}},t._l(t.products,function(i,a){return e("v-uni-view",{key:a,staticClass:"pro_listitem"},[e("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#000"}},[e("v-uni-view",[t._v("产品："+t._s(i.goodsName)+"（成本价：￥"+t._s(i.goodsId.costPrice)+"）")]),e("v-uni-view",[t._v("建议零售价：￥"+t._s(i.goodsId.retailPrice))])],1),e("v-uni-view",{staticClass:"pro_list"},[-1==i.type?e("v-uni-view",[t._v("实际卖出价：￥"+t._s(i.retailPrice)+"（X"+t._s(i.num)+"）")]):e("v-uni-view",[t._v("实际进货价：￥"+t._s(i.retailPrice)+"（X"+t._s(i.num)+"）")]),e("v-uni-view",[t._v("总价：￥"+t._s(i.total_money))])],1)],1)}),1),e("v-uni-view",{staticClass:"pro_allmoney"},[t._v("总计：￥"+t._s(t.detail.all_money))])],1),-1==t.detail.type?e("v-uni-view",[e("v-uni-view",{staticClass:"kaidanmx"},[e("v-uni-view",{staticStyle:{padding:"10rpx 30rpx"}},[t._v("开单明细")]),t.detail.custom?e("v-uni-view",{staticClass:"display_flex"},[e("v-uni-view",{staticClass:"left_content"},[t._v("客户姓名")]),e("v-uni-view",[t._v(t._s(t.detail.custom.custom_name))])],1):t._e(),e("v-uni-view",{staticClass:"display_flex"},[e("v-uni-view",{staticClass:"left_content"},[t._v("实际付款")]),e("v-uni-view",{staticClass:"real_color"},[t._v(t._s(null==t.detail.real_money?"未填写":t.detail.real_money))])],1),t.detail.debt>0?e("v-uni-view",{staticClass:"display_flex"},[e("v-uni-view",{staticClass:"left_content"},[t._v("欠款")]),e("v-uni-view",{staticClass:"real_color"},[t._v(t._s(t.detail.debt))])],1):t._e()],1)],1):1==t.detail.type?e("v-uni-view",[e("v-uni-view",{staticClass:"kaidanmx"},[e("v-uni-view",{staticStyle:{padding:"10rpx 30rpx"}},[t._v("开单明细")]),t.detail.producer?e("v-uni-view",{staticClass:"display_flex"},[e("v-uni-view",{staticClass:"left_content"},[t._v("供货商姓名")]),e("v-uni-view",[t._v(t._s(t.detail.producer.producer_name))])],1):t._e(),e("v-uni-view",{staticClass:"display_flex"},[e("v-uni-view",{staticClass:"left_content"},[t._v("实际付款")]),e("v-uni-view",{staticClass:"real_color"},[t._v(t._s(null==t.detail.real_money?"未填写":t.detail.real_money))])],1),t.detail.debt>0?e("v-uni-view",{staticClass:"display_flex"},[e("v-uni-view",{staticClass:"left_content"},[t._v("欠款")]),e("v-uni-view",{staticClass:"real_color"},[t._v(t._s(t.detail.debt))])],1):t._e()],1)],1):2==t.detail.type?e("v-uni-view",[e("v-uni-view",{staticClass:"kaidanmx"},[e("v-uni-view",{staticStyle:{padding:"10rpx 30rpx"}},[t._v("退货明细")]),t.detail.custom?e("v-uni-view",{staticClass:"display_flex"},[e("v-uni-view",{staticClass:"left_content"},[t._v("客户姓名")]),e("v-uni-view",[t._v(t._s(t.detail.custom.custom_name))])],1):e("v-uni-view",{staticClass:"display_flex"},[e("v-uni-view",{staticClass:"left_content"},[t._v("未记录客户")])],1)],1)],1):t._e(),e("v-uni-view",{staticClass:"detail_bottom",staticStyle:{"margin-top":"20px"}},[e("v-uni-view",{staticStyle:{display:"flex","border-bottom":"1px solid#ddd"}},[e("v-uni-view",[e("v-uni-image",{staticClass:"avatar",attrs:{src:t.detail.opreater.avatarUrl}})],1),e("v-uni-view",{staticClass:"common_style"},[t._v(t._s(t.detail.opreater.nickName))]),e("v-uni-view",{staticClass:"common_style"},[t._v("（操作者）")])],1),e("v-uni-view",{staticStyle:{padding:"20rpx 0 0"}},[t.detail.beizhu?e("v-uni-view",[t._v("备注："+t._s(t.detail.beizhu))]):e("v-uni-view",[t._v("备注：暂无")]),e("v-uni-view",[t._v("操作时间："+t._s(t.detail.createdAt))])],1)],1),-1==t.detail.type||1==t.detail.type?e("v-uni-view",[e("v-uni-button",{staticClass:"confrim_button",on:{click:function(i){i=t.$handleEvent(i),t.revoke(i)}}},[t._v("此操作有误，撤销")])],1):t._e()],1)],1)},s=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})},"98e1":function(t,i,e){var a=e("bda5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("915fc098",a,!0,{sourceMap:!1,shadowMode:!1})},bda5:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".Loading_view[data-v-11ff4219]{height:100vh;width:100%;text-align:center;background:#fff}.loading_image[data-v-11ff4219]{width:%?200?%;height:%?200?%;margin-top:50%}",""])},c636:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"Loading_view"},[e("v-uni-image",{staticClass:"loading_image",attrs:{src:"/static/timg.gif"}}),e("v-uni-view",{staticStyle:{color:"#999","margin-top":"3%"}},[t._v("加载中...")])],1)},s=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})},e4c6:function(t,i,e){var a=e("5d54");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("78d3265f",a,!0,{sourceMap:!1,shadowMode:!1})},e9da:function(t,i,e){"use strict";var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s,n,l=a(e("524a")),o={components:{loading:l.default},data:function(){return{bills:[],loading:!0,products:null,detail:null}},onLoad:function(t){console.log(t),s=this,n=t.id,s.getdetail(n)},methods:{getdetail:function(t){var i=Bmob.Query("order_opreations");i.include("opreater","custom","producer"),i.get(t).then(function(t){if(console.log(t),s.detail=t,t.detail)s.products=t.detail,s.bills=t.bills,s.loading=!1;else{var i=Bmob.Query("order_opreations");i.include("goodsId"),i.field("relations",t.objectId),i.relation("Bills").then(function(t){s.products=t.results,s.loading=!1})}}).catch(function(t){console.log(t)})},revoke:function(){wx.showModal({title:"提示",content:"数据撤销后不可恢复，请谨慎撤销！",success:function(t){if(t.confirm){uni.showLoading({title:"撤销中..."});var i=Bmob.Query("order_opreations");i.destroy(s.detail.objectId).then(function(t){for(var i=0;i<s.products.length;i++)s.delete_bill(i)}).catch(function(t){console.log(t)})}}})},delete_bill:function(t){var i=s.products[t],e=s.bills[t],a=Bmob.Query("Bills");a.destroy(e).then(function(e){var a=Bmob.Query("Goods");a.set("id",i.goodsId.objectId),1==i.type?a.set("reserve",i.goodsId.reserve-i.num):-1==i.type&&a.set("reserve",i.goodsId.reserve+i.num),a.save().then(function(i){t==s.products.length-1&&(uni.hideLoading(),uni.navigateBack({delta:1}),setTimeout(function(){uni.showToast({title:"撤销成功"})},1e3))})})}}};i.default=o},f2a2:function(t,i,e){"use strict";var a=e("e4c6"),s=e.n(a);s.a},f334:function(t,i,e){},f68d:function(t,i,e){"use strict";var a=e("98e1"),s=e.n(a);s.a},ff7e:function(t,i,e){"use strict";e.r(i);var a=e("87f2"),s=e("134a");for(var n in s)"default"!==n&&function(t){e.d(i,t,function(){return s[t]})}(n);e("f2a2");var l=e("2877"),o=Object(l["a"])(s["default"],a["a"],a["b"],!1,null,"0e2375b0",null);i["default"]=o.exports}}]);