(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-report-EnteringHistory-returnDetail-returnDetail"],{"0dc0":function(e,t,i){var o=i("24fb");t=o(!1),t.push([e.i,".page[data-v-2421c196]{color:#4d4d4d;height:100vh;overflow-y:scroll;background:#fafafa;font-size:%?28?%}.operater_status[data-v-2421c196]{position:fixed;bottom:0;left:0;width:100%;padding:%?20?% 0;background:#b82626;color:#fff;z-index:100;text-align:center}.pro_list[data-v-2421c196]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.pro_listitem[data-v-2421c196]{background-color:#fff;padding:%?10?% %?20?%;border-bottom:%?1?% solid#ddd}.pro_allmoney[data-v-2421c196]{background-color:#fff;padding:%?10?% %?20?%;text-align:right;font-size:%?32?%;color:#f30}.beizhu_style[data-v-2421c196]{width:100%;background-color:#fff;padding:%?20?%;font-size:%?32?%}.confrim_button[data-v-2421c196]{width:60%;background:#426ab3;color:#fff;font-size:%?32?%;margin:10% 20%}.detail_bottom[data-v-2421c196]{width:calc(100% - %?40?%);background-color:#fff;padding:%?20?%}.avatar[data-v-2421c196]{width:%?80?%;height:%?80?%;border-radius:50%}.common_style[data-v-2421c196]{line-height:%?80?%;margin-left:%?20?%;color:#000}.real_color[data-v-2421c196]{color:#f30!important}.kaidanmx[data-v-2421c196]{margin-top:%?30?%}.display_flex[data-v-2421c196]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;padding:%?15?% %?30?%}.left_content[data-v-2421c196]{width:%?150?%}",""]),e.exports=t},"16e8":function(e,t,i){"use strict";var o={"uni-nav-bar":i("96bd").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[e.loading?i("loading"):i("v-uni-view",{staticClass:"page"},[i("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"操作"},on:{"click-right":function(t){arguments[0]=t=e.$handleEvent(t),e.show_options.apply(void 0,arguments)}}}),i("v-uni-scroll-view",{style:{height:1==e.detail.extra_type&&0==e.detail.status?"calc(100vh - 170rpx)":"calc(100vh - 80rpx)"},attrs:{"scroll-y":"true"}},[i("v-uni-view",{staticStyle:{"line-height":"70rpx",padding:"0 20rpx"}},[e._v("操作产品")]),i("v-uni-view",[i("v-uni-view",e._l(e.products,(function(t,o){return i("v-uni-view",{key:o,staticClass:"pro_listitem"},[i("v-uni-view",{staticClass:"pro_list_item",staticStyle:{color:"#000"}},[i("v-uni-view",[e._v("产品："+e._s(t.goodsName))])],1),t.goodsId.selected_model?i("v-uni-view",e._l(t.goodsId.selected_model,(function(t,o){return t.num>0?i("v-uni-view",{key:o,staticClass:"display_flex_bet"},[i("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#999"}},[e._v(e._s(t.custom1.value+t.custom2.value+t.custom3.value+t.custom4.value))]),i("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#f30"}},[e._v(e._s(t.num))])],1):e._e()})),1):e._e(),i("v-uni-view",{staticClass:"pro_list"},[i("v-uni-view",[e._v("退货数量：X"+e._s(t.num))]),1==e.detail.type?i("v-uni-view",{staticStyle:{"text-align":"right"}},[e._v("建议零售价：￥"+e._s(t.goodsId.retailPrice))]):-1==e.detail.type?i("v-uni-view",{staticStyle:{"text-align":"right"}},[e._v("成本价：￥"+e._s(t.goodsId.costPrice))]):e._e()],1),i("v-uni-view",{staticClass:"pro_list"},[i("v-uni-view"),i("v-uni-view",[e._v("实际退货价：X"+e._s(t.modify_retailPrice))])],1)],1)})),1),i("v-uni-view",{staticClass:"pro_allmoney"},[e._v("总计：￥"+e._s(e.detail.all_money))])],1),i("v-uni-view",[1==e.detail.type?i("v-uni-view",{staticClass:"kaidanmx"},[i("v-uni-view",{staticStyle:{padding:"10rpx 30rpx"}},[e._v("销售退货明细")]),e.detail.custom?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[e._v("客户姓名")]),i("v-uni-view",[e._v(e._s(e.detail.custom.custom_name))])],1):i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[e._v("未记录客户")])],1),e.detail.account?i("v-uni-view",{staticClass:"display_flex",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticClass:"left_content"},[e._v("结算账户")]),i("v-uni-view",{staticClass:"real_color"},[e._v(e._s(e.detail.account.name))])],1):e._e(),i("v-uni-view",{staticClass:"display_flex",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticClass:"left_content"},[e._v("实际付款")]),i("v-uni-view",{staticClass:"real_color"},[e._v(e._s(null==e.detail.real_money?"未填写":e.detail.real_money))])],1),i("v-uni-view",{staticClass:"display_flex",staticStyle:{"margin-top":"20rpx"}},[i("v-uni-view",{staticClass:"left_content"},[e._v("入库情况")]),e.detail.status?i("v-uni-view",{staticStyle:{color:"#2ca879"}},[e._v("已入库")]):i("v-uni-view",{staticStyle:{color:"#f30"}},[e._v("未入库"),i("v-uni-text",{staticStyle:{"font-size":"20rpx"}},[e._v("（请点击右上角操作进行入库）")])],1)],1),0==e.detail.status?i("v-uni-navigator",{staticClass:"display_flex",attrs:{"hover-class":"none",url:"/pages/manage/warehouse/warehouse?type=choose"}},[i("v-uni-view",{staticClass:"left_content",staticStyle:{width:"150rpx"}},[e._v("入库店仓"),i("v-uni-text",{staticStyle:{color:"#f30"}},[e._v("*")])],1),i("v-uni-view",{staticStyle:{width:"calc(100% - 160rpx)",display:"flex","align-items":"center"}},[i("v-uni-input",{staticStyle:{"text-align":"left","margin-right":"20rpx"},attrs:{placeholder:"请选择要入库的店仓",disabled:"true",value:e.stock.stock_name}}),i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1):e._e(),e.detail.status?i("v-uni-view",{staticClass:"display_flex",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticClass:"left_content"},[e._v("入库店仓")]),i("v-uni-view",{staticStyle:{color:"#2ca879"}},[e._v(e._s(e.detail.stock.stock_name))])],1):e._e()],1):-1==e.detail.type?i("v-uni-view",{staticClass:"kaidanmx"},[i("v-uni-view",{staticStyle:{padding:"10rpx 30rpx"}},[e._v("采购退货明细")]),e.detail.producer?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[e._v("供货商姓名")]),i("v-uni-view",[e._v(e._s(e.detail.producer.producer_name))])],1):i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[e._v("未记录供货商")])],1),e.detail.account?i("v-uni-view",{staticClass:"display_flex",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticClass:"left_content"},[e._v("结算账户")]),i("v-uni-view",{staticClass:"real_color"},[e._v(e._s(e.detail.account.name))])],1):e._e(),i("v-uni-view",{staticClass:"display_flex",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticClass:"left_content"},[e._v("实际付款")]),i("v-uni-view",{staticClass:"real_color"},[e._v(e._s(null==e.detail.real_money?"未填写":e.detail.real_money))])],1),i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[e._v("出库情况")]),e.detail.status?i("v-uni-view",{staticStyle:{color:"#2ca879"}},[e._v("已出库")]):i("v-uni-view",{staticStyle:{color:"#f30"}},[e._v("未出库"),i("v-uni-text",{staticStyle:{"font-size":"20rpx"}},[e._v("（请点击右上角操作进行入库）")])],1)],1),0==e.detail.status?i("v-uni-navigator",{staticClass:"display_flex",attrs:{"hover-class":"none",url:"/pages/manage/warehouse/warehouse?type=choose"}},[i("v-uni-view",{staticClass:"left_content",staticStyle:{width:"150rpx"}},[e._v("出库店仓"),i("v-uni-text",{staticStyle:{color:"#f30"}},[e._v("*")])],1),i("v-uni-view",{staticStyle:{width:"calc(100% - 160rpx)",display:"flex","align-items":"center"}},[i("v-uni-input",{staticStyle:{"text-align":"left","margin-right":"20rpx"},attrs:{placeholder:"请选择要出库的店仓",disabled:"true",value:e.stock.stock_name}}),i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1):e._e(),e.detail.status?i("v-uni-view",{staticClass:"display_flex",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticClass:"left_content"},[e._v("出库店仓")]),i("v-uni-view",{staticStyle:{color:"#2ca879"}},[e._v(e._s(e.detail.stock.stock_name))])],1):e._e()],1):e._e()],1),i("v-uni-view",{staticClass:"detail_bottom",staticStyle:{"margin-top":"20px"}},[i("v-uni-view",{staticStyle:{display:"flex","border-bottom":"1px solid#ddd","padding-bottom":"20upx"}},[i("v-uni-view",[i("v-uni-image",{staticClass:"avatar",attrs:{src:e.detail.opreater.avatarUrl}})],1),i("v-uni-view",{staticClass:"common_style"},[e._v(e._s(e.detail.opreater.nickName))]),i("v-uni-view",{staticClass:"common_style"},[e._v("（操作者）")])],1),i("v-uni-view",{staticStyle:{padding:"20rpx 0 0"}},[e.detail.beizhu?i("v-uni-view",{staticStyle:{"word-break":"break-all"}},[e._v("备注："+e._s(e.detail.beizhu))]):i("v-uni-view",[e._v("备注：暂无")]),i("v-uni-view",[e._v("操作时间："+e._s(e.detail.createdAt))]),e.detail.Images&&e.detail.Images.length>0?i("v-uni-view",[i("v-uni-view",{staticClass:"notice_text"},[e._v("凭证图")]),i("v-uni-view",{staticStyle:{width:"100%",padding:"20rpx 0"}},[i("v-uni-view",{staticClass:"upload_image display_flex"},e._l(e.detail.Images,(function(t,o){return i("v-uni-view",{key:o,staticStyle:{position:"relative"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.priview(t)}}},[i("v-uni-image",{staticStyle:{width:"180rpx",height:"180rpx","margin-right":"10rpx"},attrs:{src:t}})],1)})),1)],1)],1):e._e()],1)],1)],1)],1)],1)},s=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return o}))},4585:function(e,t,i){var o=i("0dc0");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=i("4f06").default;a("c9a2db62",o,!0,{sourceMap:!1,shadowMode:!1})},"62bc":function(e,t,i){"use strict";i.r(t);var o=i("16e8"),a=i("cfa9");for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);i("a5c0");var n,l=i("f0c5"),r=Object(l["a"])(a["default"],o["b"],o["c"],!1,null,"2421c196",null,!1,o["a"],n);t["default"]=r.exports},a5c0:function(e,t,i){"use strict";var o=i("4585"),a=i.n(o);a.a},cfa9:function(e,t,i){"use strict";i.r(t);var o=i("ff99"),a=i.n(o);for(var s in o)"default"!==s&&function(e){i.d(t,e,(function(){return o[e]}))}(s);t["default"]=a.a},ff99:function(e,t,i){"use strict";(function(e){var o=i("ee27");i("7db0"),i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s,n=o(i("54f8")),l=o(i("9546")),r=o(i("856d")),d=o(i("7fd5")),c=o(i("120a")),u=o(i("96bd")),v=uni.getStorageSync("uid"),f={components:{loading:c.default,uniNavBar:u.default},data:function(){return{user:uni.getStorageSync("user"),identity:uni.getStorageSync("identity"),othercurrent:"",bills:[],loading:!0,products:null,detail:null,stock:""}},onLoad:function(t){this.$wechat.share_pyq(),e.log(t),a=this,s=t.id,a.user.rights&&a.user.rights.othercurrent&&(a.othercurrent=a.user.rights.othercurrent),a.getdetail(s)},onShow:function(){a.stock=uni.getStorageSync("warehouse")?uni.getStorageSync("warehouse")[0].stock:""},onShareAppMessage:function(t){return"button"===t.from&&e.log(t.target),{title:"库存表-销售退货单详情",path:"/pages/report/EnteringHistory/detail/detail?id="+s}},methods:{gotoexpressDet:function(){a.user.is_vip?uni.navigateTo({url:"../expressDet/expressDet?number="+a.detail.expressNum}):uni.showToast({title:"您还不是会员，无法使用",icon:"none"})},priview:function(e){uni.previewImage({current:e,urls:a.detail.Images})},show_options:function(){var t;1==a.detail.type?t=["销售退货","撤销","打印"]:-1==a.detail.type&&(t=["采购退货","撤销","打印"]),uni.showActionSheet({itemList:t,success:function(e){if(0==e.tapIndex){if(1==a.detail.type)if(a.detail.status)uni.showToast({title:"该笔销售退货单已入库",icon:"none"});else{if(""==uni.getStorageSync("warehouse")||void 0==uni.getStorageSync("warehouse"))return void uni.showToast({icon:"none",title:"请选择店仓"});a.confrimOrder()}else if(-1==a.detail.type)if(a.detail.status)uni.showToast({title:"该笔采购退货单已出库",icon:"none"});else{if(""==uni.getStorageSync("warehouse")||void 0==uni.getStorageSync("warehouse"))return void uni.showToast({icon:"none",title:"请选择店仓"});a.confrimOrder()}uni.setStorageSync("is_option",!0)}else 1==e.tapIndex?(a.revoke(),uni.setStorageSync("is_option",!0)):2==e.tapIndex&&r.default.print_operations(a.detail,a.products)},fail:function(t){e.log(t.errMsg)}})},getdetail:function(t){var i=l.default.Query("order_opreations");i.include("opreater","custom","producer","stock","account"),i.get(t).then((function(t){e.log(t),a.detail=t,a.products=t.detail,a.bills=t.bills,a.loading=!1})).catch((function(t){e.log(t)}))},revoke:function(){wx.showModal({title:"提示",content:"数据撤销后不可恢复，请谨慎撤销！",success:function(t){if(t.confirm){uni.showLoading({title:"撤销中..."});var i=l.default.Query("order_opreations");i.destroy(a.detail.objectId).then((function(t){var i=l.default.Query("Bills");i.containedIn("objectId",a.bills),i.find().then((function(t){t.destroyAll().then((function(e){if(a.detail.status)for(var t=0;t<a.products.length;t++)a.delete_bill(t);else uni.hideLoading(),uni.navigateBack({delta:1}),setTimeout((function(){uni.showToast({title:"撤销成功"})}),1e3)})).catch((function(t){e.log(t)}))}))})).catch((function(t){e.log(t)}))}}})},confrimOrder:function(){wx.showModal({title:"提示",content:"确定进行此操作！",success:function(t){if(t.confirm){uni.showLoading({title:"操作中，请勿退出该页面..."});var i=l.default.Pointer("stocks"),o=i.set(a.stock.objectId),r=l.default.Query("order_opreations");r.set("id",s),r.set("stock",o),r.set("status",!0),r.save().then((function(e){var t=0;if(1==a.detail.type){var i,o=(0,n.default)(a.products);try{for(o.s();!(i=o.n()).done;){var s=i.value;a.addOrReduceGoodReserve(s,t),t+=1}}catch(c){o.e(c)}finally{o.f()}}else if(-1==a.detail.type){var l,r=(0,n.default)(a.products);try{for(r.s();!(l=r.n()).done;){var d=l.value;a.ReduceGoodReserve(d,t),t+=1}}catch(c){r.e(c)}finally{r.f()}}})).catch((function(t){e.log(t)}))}}})},addOrReduceGoodReserve:function(t,i){var o=l.default.Query("Goods");o.equalTo("userId","==",v),o.equalTo("header","==",t.goodsId.objectId),o.equalTo("stocks","==",a.stock.objectId),o.find().then((function(r){if(0==r.length)o.get(t.goodsId.objectId).then((function(o){t.objectId=t.goodsId.objectId,t.costPrice=o.costPrice,t.retailPrice=o.retailPrice,d.default.upload_good_withNoCan(o,a.stock,Number(t.num)).then((function(o){var n=l.default.Query("Goods");n.equalTo("header","==",t.goodsId.objectId),n.equalTo("order","==",1),n.statTo("sum","reserve"),n.find().then((function(o){var n=o[0]._sumReserve,r=l.default.Query("Goods");r.set("reserve",n),r.set("id",t.goodsId.objectId),r.save().then((function(o){if(d.default.modifyStockType(t.goodsId.objectId),i==a.products.length-1){var n=l.default.Pointer("stocks"),r=n.set(a.stock.objectId),c=l.default.Query("Bills");c.containedIn("objectId",a.bills),c.find().then((function(t){t.set("status",!0),t.set("stock",r),t.saveAll().then((function(e){uni.hideLoading(),a.getdetail(s),setTimeout((function(){uni.removeStorageSync("warehouse"),uni.showToast({title:"销售退货成功"})}),1e3)})).catch((function(t){e.log(t)}))}))}}))}))}))}));else{var c=l.default.Query("Goods");c.get(r[0].objectId).then((function(o){if(t.goodsId.selected_model){var r,c=0,u=(0,n.default)(t.goodsId.selected_model);try{for(u.s();!(r=u.n()).done;){var v,f=r.value,g=(0,n.default)(o.models);try{for(g.s();!(v=g.n()).done;){var h=v.value;h.id==f.id&&(h.reserve=Number(h.reserve)+Number(f.num),c+=Number(f.num))}}catch(_){g.e(_)}finally{g.f()}}}catch(_){u.e(_)}finally{u.f()}o.set("models",o.models),o.set("reserve",o.reserve+c)}else o.set("reserve",o.reserve+t.num);o.save().then((function(o){var n=l.default.Pointer("stocks"),r=n.set(a.stock.objectId),c=l.default.Query("Goods");c.equalTo("header","==",t.goodsId.objectId),c.equalTo("order","==",1),c.statTo("sum","reserve"),c.find().then((function(o){var n=o[0]._sumReserve,c=l.default.Query("Goods");c.set("reserve",n),c.set("id",t.goodsId.objectId),c.save().then((function(o){if(i==a.products.length-1){var n=l.default.Query("Bills");n.containedIn("objectId",a.bills),n.find().then((function(i){i.set("status",!0),i.set("stock",r),i.saveAll().then((function(e){uni.hideLoading(),a.getdetail(s),setTimeout((function(){var e=l.default.Query("Goods");e.equalTo("header","==",t.goodsId.objectId),e.equalTo("order","==",1),e.statTo("sum","reserve"),e.find().then((function(e){d.default.modifyStockType(t.goodsId.objectId);var i=e[0]._sumReserve,o=l.default.Query("Goods");o.set("reserve",i),o.set("id",t.goodsId.objectId),o.save().then((function(e){uni.removeStorageSync("warehouse"),uni.showToast({title:"销售退货成功"})}))}))}),1e3)})).catch((function(t){e.log(t)}))}))}}))}))}))}))}}))},ReduceGoodReserve:function(t,i){var o=l.default.Query("Goods");o.equalTo("userId","==",v),o.equalTo("header","==",t.goodsId.objectId),o.equalTo("stocks","==",a.stock.objectId),o.find().then((function(r){if(e.log("店仓里的产品",r),0==r.length)o.get(t.goodsId.objectId).then((function(o){t.objectId=t.goodsId.objectId,t.costPrice=o.costPrice,t.retailPrice=o.retailPrice,d.default.upload_good_withNoCan(o,a.stock,Number(t.num),"out").then((function(o){e.log(o);var n=l.default.Query("Goods");n.equalTo("header","==",t.goodsId.objectId),n.equalTo("order","==",1),n.statTo("sum","reserve"),n.find().then((function(o){var n=o[0]._sumReserve,r=l.default.Query("Goods");r.set("reserve",n),r.set("id",t.goodsId.objectId),r.save().then((function(o){if(d.default.modifyStockType(t.goodsId.objectId),i==a.products.length-1){var n=l.default.Pointer("stocks"),r=n.set(a.stock.objectId),c=l.default.Query("Bills");c.containedIn("objectId",a.bills),c.find().then((function(t){t.set("status",!0),t.set("stock",r),t.saveAll().then((function(e){uni.hideLoading(),a.getdetail(s),setTimeout((function(){uni.removeStorageSync("warehouse"),uni.showToast({title:"采购退货成功"})}),1e3)})).catch((function(t){e.log(t)}))}))}}))}))}))}));else{var c=l.default.Query("Goods");c.get(r[0].objectId).then((function(o){if(t.goodsId.selected_model){var r,c=0,u=(0,n.default)(t.goodsId.selected_model);try{for(u.s();!(r=u.n()).done;){var v,f=r.value,g=(0,n.default)(o.models);try{for(g.s();!(v=g.n()).done;){var h=v.value;h.id==f.id&&(h.reserve=Number(h.reserve)-Number(f.num),c+=Number(f.num))}}catch(_){g.e(_)}finally{g.f()}}}catch(_){u.e(_)}finally{u.f()}o.set("models",o.models),o.set("reserve",o.reserve-c)}else o.set("reserve",o.reserve-t.num);o.save().then((function(o){var n=l.default.Query("Goods");n.equalTo("header","==",t.goodsId.objectId),n.equalTo("order","==",1),n.statTo("sum","reserve"),n.find().then((function(o){var n=o[0]._sumReserve,r=l.default.Query("Goods");r.set("reserve",n),r.set("id",t.goodsId.objectId),r.save().then((function(o){if(d.default.modifyStockType(t.goodsId.objectId),i==a.products.length-1){var n=l.default.Pointer("stocks"),r=n.set(a.stock.objectId),c=l.default.Query("Bills");c.containedIn("objectId",a.bills),c.find().then((function(t){t.set("status",!0),t.set("stock",r),t.saveAll().then((function(e){uni.hideLoading(),a.getdetail(s),setTimeout((function(){uni.removeStorageSync("warehouse"),uni.showToast({title:"采购退货成功"})}),1e3)})).catch((function(t){e.log(t)}))}))}}))}))}))}))}}))},delete_bill:function(t){var i=a.products[t],o=(a.bills[t],l.default.Query("Goods"));o.equalTo("order","==",1),o.equalTo("header","==",i.goodsId.objectId),o.equalTo("stocks","==",a.detail.stock.objectId),o.find().then((function(s){e.log(s);var r=s[0];if(o.set("id",s[0].objectId),1==i.type)if(i.goodsId.selected_model){var c,u=0,v=(0,n.default)(i.goodsId.selected_model);try{for(v.s();!(c=v.n()).done;){var f,g=c.value,h=(0,n.default)(r.models);try{for(h.s();!(f=h.n()).done;){var _=f.value;_.id==g.id&&(_.reserve=Number(_.reserve)-Number(g.num),u+=Number(g.num))}}catch(S){h.e(S)}finally{h.f()}}}catch(S){v.e(S)}finally{v.f()}o.set("models",s[0].models),o.set("reserve",s[0].reserve-u)}else o.set("reserve",s[0].reserve-i.num);else if(-1==i.type)if(i.goodsId.selected_model){var p,y=0,m=(0,n.default)(i.goodsId.selected_model);try{for(m.s();!(p=m.n()).done;){var w,b=p.value,x=(0,n.default)(r.models);try{for(x.s();!(w=x.n()).done;){var I=w.value;I.id==b.id&&(I.reserve=Number(I.reserve)+Number(b.num),y+=Number(b.num))}}catch(S){x.e(S)}finally{x.f()}}}catch(S){m.e(S)}finally{m.f()}o.set("models",s[0].models),o.set("reserve",s[0].reserve+y)}else o.set("reserve",s[0].reserve+i.num);o.save().then((function(i){var o=l.default.Query("Goods");o.equalTo("header","==",r.header.objectId),o.equalTo("order","==",1),o.statTo("sum","reserve"),o.find().then((function(i){e.log("dasds",i);var o=i[0]._sumReserve,s=l.default.Query("Goods");s.set("reserve",o),s.set("id",r.header.objectId),s.save().then((function(e){d.default.modifyStockType(r.header.objectId),t==a.products.length-1&&(uni.hideLoading(),uni.navigateBack({delta:1}),setTimeout((function(){uni.showToast({title:"撤销成功"})}),1e3))}))}))}))})).catch((function(t){e.log(t)}))}}};t.default=f}).call(this,i("5a52")["default"])}}]);