(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-report-matterRecord-detail-detail"],{"4b8d":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".page[data-v-1b8ad619]{color:#4d4d4d;height:100vh;overflow-y:scroll;background:#fafafa;font-size:%?28?%}.operater_status[data-v-1b8ad619]{position:fixed;bottom:0;left:0;width:100%;padding:%?20?% 0;background:#b82626;color:#fff;z-index:100;text-align:center}.pro_list[data-v-1b8ad619]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.pro_listitem[data-v-1b8ad619]{background-color:#fff;padding:%?10?% %?20?%;border-bottom:%?1?% solid#ddd}.pro_allmoney[data-v-1b8ad619]{background-color:#fff;padding:%?10?% %?20?%;text-align:right;font-size:%?32?%;color:#f30}.beizhu_style[data-v-1b8ad619]{width:100%;background-color:#fff;padding:%?20?%;font-size:%?32?%}.confrim_button[data-v-1b8ad619]{width:60%;background:#426ab3;color:#fff;font-size:%?32?%;margin:10% 20%}.detail_bottom[data-v-1b8ad619]{width:calc(100% - %?40?%);background-color:#fff;padding:%?20?%}.avatar[data-v-1b8ad619]{width:%?80?%;height:%?80?%;border-radius:50%}.common_style[data-v-1b8ad619]{line-height:%?80?%;margin-left:%?20?%;color:#000}.real_color[data-v-1b8ad619]{color:#f30!important}.kaidanmx[data-v-1b8ad619]{margin-top:%?30?%}.display_flex[data-v-1b8ad619]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;padding:%?15?% %?30?%}.left_content[data-v-1b8ad619]{width:%?150?%}",""]),t.exports=e},"57ee":function(t,e,i){"use strict";i.r(e);var a=i("b437"),s=i("d3fb");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("b922");var l,o=i("f0c5"),r=Object(o["a"])(s["default"],a["b"],a["c"],!1,null,"1b8ad619",null,!1,a["a"],l);e["default"]=r.exports},"722e":function(t,e,i){var a=i("4b8d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("636f2ef5",a,!0,{sourceMap:!1,shadowMode:!1})},"93fd":function(t,e,i){"use strict";(function(t){var a=i("ee27");i("7db0"),i("c975"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s,n,l=a(i("54f8")),o=a(i("9546")),r=a(i("856d")),d=a(i("7fd5")),u=a(i("120a")),v=a(i("96bd")),c={components:{loading:u.default,uniNavBar:v.default},data:function(){return{user:uni.getStorageSync("user"),identity:uni.getStorageSync("identity"),othercurrent:"",bills:[],loading:!0,products:null,detail:null}},onLoad:function(e){t.log(e),s=this,n=e.id,s.user.rights&&s.user.rights.othercurrent&&(s.othercurrent=s.user.rights.othercurrent),s.getdetail(n)},methods:{gotoexpressDet:function(){s.user.is_vip?uni.navigateTo({url:"../expressDet/expressDet?number="+s.detail.expressNum}):uni.showToast({title:"您还不是会员，无法使用",icon:"none"})},priview:function(t){uni.previewImage({current:t,urls:s.detail.Images})},show_options:function(){var e=["打印"];(-1==s.detail.type||1==s.detail.type)&&(-1!=s.othercurrent.indexOf("1")||1==s.identity&&1==s.detail.extra_type)?(e=["审核","撤销","打印"],uni.showActionSheet({itemList:e,success:function(t){0==t.tapIndex?(1==s.detail.type?s.detail.status?uni.showToast({title:"该笔采购单已审核",icon:"none"}):s.confrimOrder():-1==s.detail.type&&(s.detail.status?uni.showToast({title:"该笔销售单已审核",icon:"none"}):s.confrimOrder()),uni.setStorageSync("is_option",!0)):1==t.tapIndex?(s.revoke(),uni.setStorageSync("is_option",!0)):2==t.tapIndex&&r.default.print_operations(s.detail,s.products)},fail:function(e){t.log(e.errMsg)}})):(e=["撤销","打印"],uni.showActionSheet({itemList:e,success:function(t){0==t.tapIndex?(s.revoke(),uni.setStorageSync("is_option",!0)):1==t.tapIndex&&r.default.print_operations(s.detail,s.products)},fail:function(e){t.log(e.errMsg)}}))},getdetail:function(e){var i=o.default.Query("order_opreations");i.include("opreater","custom","producer","stock"),i.get(e).then((function(e){t.log(e),s.detail=e,s.products=e.detail,s.bills=e.bills,s.loading=!1})).catch((function(e){t.log(e)}))},revoke:function(){wx.showModal({title:"提示",content:"数据撤销后不可恢复，请谨慎撤销！",success:function(e){if(e.confirm){uni.showLoading({title:"撤销中..."});var i=o.default.Query("order_opreations");i.destroy(s.detail.objectId).then((function(e){var i=o.default.Query("Bills");i.containedIn("objectId",s.bills),i.find().then((function(e){e.destroyAll().then((function(t){if(s.detail.status)for(var e=0;e<s.products.length;e++)s.delete_bill(e);else uni.hideLoading(),uni.navigateBack({delta:1}),setTimeout((function(){uni.showToast({title:"撤销成功"})}),1e3)})).catch((function(e){t.log(e)}))}))})).catch((function(e){t.log(e)}))}}})},confrimOrder:function(){wx.showModal({title:"提示",content:"是否审核该笔操作单！",success:function(e){if(e.confirm){uni.showLoading({title:"审核中，请勿退出该页面..."});var i=o.default.Query("order_opreations");i.set("id",n),i.set("status",!0),i.save().then((function(t){var e=0;if(1==s.detail.type){var i,a=(0,l.default)(s.products);try{for(a.s();!(i=a.n()).done;){var n=i.value;s.addOrReduceGoodReserve(n,e),e+=1}}catch(u){a.e(u)}finally{a.f()}}else if(-1==s.detail.type){var o,r=(0,l.default)(s.products);try{for(r.s();!(o=r.n()).done;){var d=o.value;s.ReduceGoodReserve(d,e),e+=1}}catch(u){r.e(u)}finally{r.f()}}})).catch((function(e){t.log(e)}))}}})},addOrReduceGoodReserve:function(e,i){var a=o.default.Query("Matters");a.get(e.goodsId.objectId).then((function(a){if(e.goodsId.selected_model){var n,r=0,d=(0,l.default)(e.goodsId.selected_model);try{for(d.s();!(n=d.n()).done;){var u,v=n.value,c=(0,l.default)(a.models);try{for(c.s();!(u=c.n()).done;){var _=u.value;_.id==v.id&&(_.reserve=Number(_.reserve)+Number(v.num),r+=Number(v.num))}}catch(f){c.e(f)}finally{c.f()}}}catch(f){d.e(f)}finally{d.f()}a.set("models",a.models),a.set("reserve",a.reserve+r)}else a.set("reserve",a.reserve+e.num);a.save().then((function(e){if(i==s.products.length-1){var a=o.default.Query("Bills");a.containedIn("objectId",s.bills),a.find().then((function(e){e.set("status",!0),e.saveAll().then((function(t){uni.hideLoading(),uni.navigateBack({delta:1}),setTimeout((function(){uni.showToast({title:"审核成功"})}),1e3)})).catch((function(e){t.log(e)}))}))}}))}))},ReduceGoodReserve:function(e,i){var a=o.default.Query("Matters"),n=0;a.get(e.goodsId.objectId).then((function(a){if(e.goodsId.selected_model){var r,u=0,v=(0,l.default)(e.goodsId.selected_model);try{for(v.s();!(r=v.n()).done;){var c,_=r.value,f=(0,l.default)(a.models);try{for(f.s();!(c=f.n()).done;){var p=c.value;p.id==_.id&&(p.reserve=Number(p.reserve)-Number(_.num),u+=Number(_.num))}}catch(w){f.e(w)}finally{f.f()}}}catch(w){v.e(w)}finally{v.f()}a.set("models",a.models),a.set("reserve",a.reserve-u),n=a.reserve-u}else a.set("reserve",a.reserve-e.num),n=a.reserve-e.num;t.log(e),a.save().then((function(a){if(e.warning_num>=n&&d.default.log(e.goodsName+"销售了"+e.num+"件，已经低于预警数量"+e.warning_num,-2,e.goodsId.objectId),i==s.products.length-1){var l=o.default.Query("Bills");l.containedIn("objectId",s.bills),l.find().then((function(e){e.set("status",!0),e.saveAll().then((function(t){uni.hideLoading(),uni.navigateBack({delta:1}),setTimeout((function(){uni.showToast({title:"审核成功"})}),1e3)})).catch((function(e){t.log(e)}))}))}}))}))},delete_bill:function(t){var e=s.products[t],i=(s.bills[t],o.default.Query("Matters"));i.set("id",e.goodsId.objectId),1==e.type?i.set("reserve",e.goodsId.reserve-e.num):-1==e.type&&i.set("reserve",e.goodsId.reserve+e.num),i.save().then((function(e){t==s.products.length-1&&(uni.hideLoading(),uni.navigateBack({delta:1}),setTimeout((function(){uni.showToast({title:"撤销成功"})}),1e3))}))}}};e.default=c}).call(this,i("5a52")["default"])},b437:function(t,e,i){"use strict";var a={"uni-nav-bar":i("96bd").default},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.loading?i("loading"):i("v-uni-view",{staticClass:"page"},[i("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"操作"},on:{"click-right":function(e){arguments[0]=e=t.$handleEvent(e),t.show_options.apply(void 0,arguments)}}}),i("v-uni-scroll-view",{style:{height:1==t.detail.extra_type&&0==t.detail.status?"calc(100vh - 170rpx)":"calc(100vh - 80rpx)"},attrs:{"scroll-y":"true"}},[i("v-uni-view",{staticStyle:{"line-height":"70rpx",padding:"0 20rpx"}},[t._v("操作物料")]),3==t.detail.type?i("v-uni-view",[i("v-uni-view",t._l(t.products,(function(e,a){return i("v-uni-view",{key:a,staticClass:"pro_listitem"},[i("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#000"}},[i("v-uni-view",[t._v("物料："+t._s(e.goodsName))])],1),i("v-uni-view",{staticClass:"pro_list"},[i("v-uni-view",[t._v("盘点前库存："+t._s(e.reserve))]),i("v-uni-view",[t._v("盘点后库存："+t._s(e.now_reserve))])],1)],1)})),1)],1):2==t.detail.type?i("v-uni-view",[i("v-uni-view",t._l(t.products,(function(e,a){return i("v-uni-view",{key:a,staticClass:"pro_listitem"},[i("v-uni-view",{staticClass:"pro_list_item",staticStyle:{color:"#000"}},[i("v-uni-view",[t._v("物料："+t._s(e.goodsName)+"（成本价：￥"+t._s(e.goodsId.costPrice)+"）")])],1),i("v-uni-view",{staticClass:"pro_list"},[i("v-uni-view",[t._v("退货数量：X"+t._s(e.num))]),i("v-uni-view",{staticStyle:{"text-align":"right"}},[t._v("建议零售价：￥"+t._s(e.goodsId.retailPrice))])],1)],1)})),1),i("v-uni-view",{staticClass:"pro_allmoney"},[t._v("总计：￥"+t._s(t.detail.all_money))])],1):-2==t.detail.type?i("v-uni-view",[i("v-uni-view",t._l(t.products,(function(e,a){return i("v-uni-view",{key:a,staticClass:"pro_listitem"},[i("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#000","border-bottom":"1rpx solid#EEEEEE",padding:"0 0 10rpx"}},[i("v-uni-view",[t._v("物料："+t._s(e.goodsName))]),i("v-uni-view",[t._v("调拨数量："+t._s(e.num))])],1),i("v-uni-view",{staticClass:"pro_list",staticStyle:{padding:"10rpx 0"}},[i("v-uni-view",[t._v("调出店仓："+t._s(e.stock))]),i("v-uni-view",[t._v("调拨后库存："+t._s(e.reserve-e.num))])],1),i("v-uni-view",{staticClass:"pro_list"},[i("v-uni-view",[t._v("调入店仓："+t._s(e.out_stock))]),i("v-uni-view",[t._v("调拨后库存："+t._s(e.out_reserve+e.num))])],1)],1)})),1),-2!=t.detail.type?i("v-uni-view",{staticClass:"pro_allmoney"},[t._v("总计：￥"+t._s(t.detail.all_money))]):t._e()],1):i("v-uni-view",[i("v-uni-view",t._l(t.products,(function(e,a){return i("v-uni-view",{key:a,staticClass:"pro_listitem"},[i("v-uni-view",{staticClass:"pro_list_item",staticStyle:{color:"#000"}},[i("v-uni-view",[t._v("物料："+t._s(e.goodsName)),t.user.rights&&"0"!=t.user.rights.othercurrent[0]||-1==t.detail.type?i("v-uni-text"):i("v-uni-text",[t._v("（成本价：￥"+t._s(e.goodsId.costPrice)+"）")])],1)],1),e.goodsId.selected_model?i("v-uni-view",t._l(e.goodsId.selected_model,(function(e,a){return e.num>0?i("v-uni-view",{key:a,staticClass:"display_flex_bet"},[i("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#999"}},[t._v(t._s(e.custom1.value+e.custom2.value+e.custom3.value+e.custom4.value))]),i("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#f30"}},[t._v(t._s(e.num))])],1):t._e()})),1):t._e(),i("v-uni-view",{staticClass:"pro_list"},[i("v-uni-view",[t._v("建议零售价：￥"+t._s(e.goodsId.retailPrice))]),-1==e.type?i("v-uni-view",[t._v("实际卖出价：￥"+t._s(e.modify_retailPrice)+"（X"+t._s(e.num)+"）")]):i("v-uni-view",[t.user.rights&&"0"!=t.user.rights.othercurrent[0]?i("v-uni-text",[t._v("实际进货价：￥0（X"+t._s(e.num)+"）")]):i("v-uni-text",[t._v("实际进货价：￥"+t._s(e.modify_retailPrice)+"（X"+t._s(e.num)+"）")])],1)],1)],1)})),1),t.user.rights&&"0"!=t.user.rights.othercurrent[0]?i("v-uni-view",{staticClass:"pro_allmoney"},[t._v("总计：￥0")]):i("v-uni-view",{staticClass:"pro_allmoney"},[t._v("总计：￥"+t._s(t.detail.all_money))])],1),-1==t.detail.type?i("v-uni-view",[i("v-uni-view",{staticClass:"kaidanmx"},[i("v-uni-view",{staticStyle:{padding:"10rpx 30rpx"}},[t._v("开单明细")]),t.detail.custom?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[t._v("客户姓名")]),i("v-uni-view",[t._v(t._s(t.detail.custom.custom_name))])],1):t._e(),t.detail.discount?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[t._v("折扣率")]),i("v-uni-view",[t._v(t._s(t.detail.discount)+"%")])],1):t._e(),i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[t._v("实际付款")]),i("v-uni-view",{staticClass:"real_color"},[t._v(t._s(null==t.detail.real_money?"未填写":t.detail.real_money))])],1),t.detail.debt>0?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[t._v("欠款")]),i("v-uni-view",{staticClass:"real_color"},[t._v(t._s(t.detail.debt))])],1):t._e(),t.detail.typeDesc?i("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{background:"#fff"}},[i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[t._v("发送方式")]),i("v-uni-view",{staticClass:"real_color"},[t._v(t._s(t.detail.typeDesc))])],1),"物流"==t.detail.typeDesc||"快递"==t.detail.typeDesc?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"real_color"},[t._v(t._s(t.detail.expressNum))])],1):t._e()],1):t._e(),t.detail.typeDesc?i("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{background:"#fff","justify-content":"flex-end",padding:"0rpx 30rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoexpressDet.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{"margin-right":"10rpx",color:"#0a53c3"}},[t._v("查快递")]),i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#0a53c3"}})],1):t._e()],1)],1):1==t.detail.type?i("v-uni-view",[i("v-uni-view",{staticClass:"kaidanmx"},[i("v-uni-view",{staticStyle:{padding:"10rpx 30rpx"}},[t._v("开单明细")]),t.detail.producer?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[t._v("供货商姓名")]),i("v-uni-view",[t._v(t._s(t.detail.producer.producer_name))])],1):t._e(),i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[t._v("实际付款")]),i("v-uni-view",{staticClass:"real_color"},[t._v(t._s(null==t.detail.real_money?"未填写":t.detail.real_money))])],1),t.detail.debt>0?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[t._v("欠款")]),i("v-uni-view",{staticClass:"real_color"},[t._v(t._s(t.detail.debt))])],1):t._e(),t.detail.typeDesc?i("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{background:"#fff"}},[i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[t._v("发送方式")]),i("v-uni-view",{staticClass:"real_color"},[t._v(t._s(t.detail.typeDesc))])],1),"物流"==t.detail.typeDesc||"快递"==t.detail.typeDesc?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"real_color"},[t._v(t._s(t.detail.expressNum))])],1):t._e(),t.detail.typeDesc?i("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{background:"#fff","justify-content":"flex-end",padding:"0rpx 30rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.gotoexpressDet.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{"margin-right":"10rpx",color:"#0a53c3"}},[t._v("查快递")]),i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#0a53c3"}})],1):t._e()],1):t._e()],1)],1):2==t.detail.type?i("v-uni-view",[i("v-uni-view",{staticClass:"kaidanmx"},[i("v-uni-view",{staticStyle:{padding:"10rpx 30rpx"}},[t._v("退货明细")]),t.detail.custom?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[t._v("客户姓名")]),i("v-uni-view",[t._v(t._s(t.detail.custom.custom_name))])],1):i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[t._v("未记录客户")])],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"detail_bottom",staticStyle:{"margin-top":"20px"}},[i("v-uni-view",{staticStyle:{display:"flex","border-bottom":"1px solid#ddd","padding-bottom":"20upx"}},[i("v-uni-view",[i("v-uni-image",{staticClass:"avatar",attrs:{src:t.detail.opreater.avatarUrl}})],1),i("v-uni-view",{staticClass:"common_style"},[t._v(t._s(t.detail.opreater.nickName))]),i("v-uni-view",{staticClass:"common_style"},[t._v("（操作者）")])],1),i("v-uni-view",{staticStyle:{padding:"20rpx 0 0"}},[-2!=t.detail.type&&t.detail.stock&&t.detail.stock.stock_name?i("v-uni-view",[t._v("选择的店仓："+t._s(t.detail.stock.stock_name))]):t._e(),t.detail.beizhu?i("v-uni-view",[t._v("备注："+t._s(t.detail.beizhu))]):i("v-uni-view",[t._v("备注：暂无")]),i("v-uni-view",[t._v("操作时间："+t._s(t.detail.createdAt))]),t.detail.Images&&t.detail.Images.length>0?i("v-uni-view",[i("v-uni-view",{staticClass:"notice_text"},[t._v("凭证图")]),i("v-uni-view",{staticStyle:{width:"100%",padding:"20rpx 0"}},[i("v-uni-view",{staticClass:"upload_image display_flex"},t._l(t.detail.Images,(function(e,a){return i("v-uni-view",{key:a,staticStyle:{position:"relative"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.priview(e)}}},[i("v-uni-image",{staticStyle:{width:"180rpx",height:"180rpx","margin-right":"10rpx"},attrs:{src:e}})],1)})),1)],1)],1):t._e()],1)],1)],1),1==t.detail.type&&1==t.detail.extra_type&&0==t.detail.status?i("v-uni-view",{staticClass:"operater_status"},[i("v-uni-text",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v("该笔采购单未审核")]),i("v-uni-text",{staticStyle:{"font-size":"20rpx"}},[t._v("（请点击右上角操作进行审核）")])],1):1==t.detail.type&&1==t.detail.extra_type&&t.detail.status?i("v-uni-view",{staticClass:"operater_status",staticStyle:{background:"#2ca879"}},[i("v-uni-text",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v("该笔采购单已审核")])],1):t._e(),-1==t.detail.type&&1==t.detail.extra_type&&0==t.detail.status?i("v-uni-view",{staticClass:"operater_status"},[i("v-uni-text",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v("该笔销售单未审核")]),i("v-uni-text",{staticStyle:{"font-size":"20rpx"}},[t._v("（请点击右上角操作进行审核）")])],1):-1==t.detail.type&&1==t.detail.extra_type&&t.detail.status?i("v-uni-view",{staticClass:"operater_status",staticStyle:{background:"#2ca879"}},[i("v-uni-text",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v("该笔销售单已审核")])],1):t._e()],1)],1)},n=[];i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},b922:function(t,e,i){"use strict";var a=i("722e"),s=i.n(a);s.a},d3fb:function(t,e,i){"use strict";i.r(e);var a=i("93fd"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a}}]);