(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-report-EnteringHistory-detail-detail"],{"113e":function(e,t,i){"use strict";(function(e){var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("c5f6");var a=n(i("5d73"));i("7514");var o,s,r=n(i("c74b")),l=n(i("b410")),u=n(i("df06")),c=n(i("524a")),d=n(i("b92d")),v={components:{loading:c.default,uniNavBar:d.default},data:function(){return{user:uni.getStorageSync("user"),identity:uni.getStorageSync("identity"),othercurrent:"",bills:[],loading:!0,products:null,detail:null}},onLoad:function(t){e.log(t),o=this,s=t.id,o.user.rights&&o.user.rights.othercurrent&&(o.othercurrent=o.user.rights.othercurrent),o.getdetail(s)},methods:{gotoexpressDet:function(){o.user.is_vip?uni.navigateTo({url:"../expressDet/expressDet?number="+o.detail.expressNum}):uni.showToast({title:"您还不是会员，无法使用",icon:"none"})},priview:function(e){uni.previewImage({current:e,urls:o.detail.Images})},show_options:function(){var t=["打印"];-1!=o.detail.type&&1!=o.detail.type||(-1!=o.othercurrent.indexOf("3")||1==o.identity&&1==o.detail.extra_type?(t=["审核","撤销","打印"],uni.showActionSheet({itemList:t,success:function(e){0==e.tapIndex?(1==o.detail.type?o.detail.status?uni.showToast({title:"该笔采购单已审核",icon:"none"}):o.confrimOrder():-1==o.detail.type&&(o.detail.status?uni.showToast({title:"该笔销售单已审核",icon:"none"}):o.confrimOrder()),uni.setStorageSync("is_option",!0)):1==e.tapIndex?(o.revoke(),uni.setStorageSync("is_option",!0)):2==e.tapIndex&&l.default.print_operations(o.detail,o.products)},fail:function(t){e.log(t.errMsg)}})):(t=["撤销","打印"],uni.showActionSheet({itemList:t,success:function(e){0==e.tapIndex?(o.revoke(),uni.setStorageSync("is_option",!0)):1==e.tapIndex&&l.default.print_operations(o.detail,o.products)},fail:function(t){e.log(t.errMsg)}})))},getdetail:function(t){var i=r.default.Query("order_opreations");i.include("opreater","custom","producer","stock"),i.get(t).then(function(t){e.log(t),o.detail=t,o.products=t.detail,o.bills=t.bills,o.loading=!1}).catch(function(t){e.log(t)})},revoke:function(){wx.showModal({title:"提示",content:"数据撤销后不可恢复，请谨慎撤销！",success:function(t){if(t.confirm){uni.showLoading({title:"撤销中..."});var i=r.default.Query("order_opreations");i.destroy(o.detail.objectId).then(function(t){var i=r.default.Query("Bills");i.containedIn("objectId",o.bills),i.find().then(function(t){t.destroyAll().then(function(e){if(o.detail.status)for(var t=0;t<o.products.length;t++)o.delete_bill(t);else uni.hideLoading(),uni.navigateBack({delta:1}),setTimeout(function(){uni.showToast({title:"撤销成功"})},1e3)}).catch(function(t){e.log(t)})})}).catch(function(t){e.log(t)})}}})},confrimOrder:function(){wx.showModal({title:"提示",content:"是否审核该笔操作单！",success:function(t){if(t.confirm){uni.showLoading({title:"审核中，请勿退出该页面..."});var i=r.default.Query("order_opreations");i.set("id",s),i.set("status",!0),i.save().then(function(e){var t=0;if(1==o.detail.type){var i=!0,n=!1,s=void 0;try{for(var r,l=(0,a.default)(o.products);!(i=(r=l.next()).done);i=!0){var u=r.value;o.addOrReduceGoodReserve(u,t),t+=1}}catch(g){n=!0,s=g}finally{try{i||null==l.return||l.return()}finally{if(n)throw s}}}else if(-1==o.detail.type){var c=!0,d=!1,v=void 0;try{for(var f,_=(0,a.default)(o.products);!(c=(f=_.next()).done);c=!0){var p=f.value;o.ReduceGoodReserve(p,t),t+=1}}catch(g){d=!0,v=g}finally{try{c||null==_.return||_.return()}finally{if(d)throw v}}}}).catch(function(t){e.log(t)})}}})},addOrReduceGoodReserve:function(t,i){var n=r.default.Query("Goods");n.get(t.goodsId.objectId).then(function(n){if(t.goodsId.selected_model){var s=0,l=!0,u=!1,c=void 0;try{for(var d,v=(0,a.default)(t.goodsId.selected_model);!(l=(d=v.next()).done);l=!0){var f=d.value,_=!0,p=!1,g=void 0;try{for(var y,m=(0,a.default)(n.models);!(_=(y=m.next()).done);_=!0){var w=y.value;w.id==f.id&&(w.reserve=Number(w.reserve)+Number(f.num),s+=Number(f.num))}}catch(h){p=!0,g=h}finally{try{_||null==m.return||m.return()}finally{if(p)throw g}}}}catch(h){u=!0,c=h}finally{try{l||null==v.return||v.return()}finally{if(u)throw c}}n.set("models",n.models),n.set("reserve",n.reserve+s)}else n.set("reserve",n.reserve+t.num);n.save().then(function(t){if(i==o.products.length-1){var n=r.default.Query("Bills");n.containedIn("objectId",o.bills),n.find().then(function(t){t.set("status",!0),t.saveAll().then(function(e){uni.hideLoading(),uni.navigateBack({delta:1}),setTimeout(function(){uni.showToast({title:"审核成功"})},1e3)}).catch(function(t){e.log(t)})})}})})},ReduceGoodReserve:function(t,i){var n=r.default.Query("Goods"),s=0;n.get(t.goodsId.objectId).then(function(n){if(t.goodsId.selected_model){var l=0,c=!0,d=!1,v=void 0;try{for(var f,_=(0,a.default)(t.goodsId.selected_model);!(c=(f=_.next()).done);c=!0){var p=f.value,g=!0,y=!1,m=void 0;try{for(var w,h=(0,a.default)(n.models);!(g=(w=h.next()).done);g=!0){var b=w.value;b.id==p.id&&(b.reserve=Number(b.reserve)-Number(p.num),l+=Number(p.num))}}catch(x){y=!0,m=x}finally{try{g||null==h.return||h.return()}finally{if(y)throw m}}}}catch(x){d=!0,v=x}finally{try{c||null==_.return||_.return()}finally{if(d)throw v}}n.set("models",n.models),n.set("reserve",n.reserve-l),s=n.reserve-l}else n.set("reserve",n.reserve-t.num),s=n.reserve-t.num;e.log(t),n.save().then(function(n){if(t.warning_num>=s&&u.default.log(t.goodsName+"销售了"+t.num+"件，已经低于预警数量"+t.warning_num,-2,t.goodsId.objectId),i==o.products.length-1){var a=r.default.Query("Bills");a.containedIn("objectId",o.bills),a.find().then(function(t){t.set("status",!0),t.saveAll().then(function(e){uni.hideLoading(),uni.navigateBack({delta:1}),setTimeout(function(){uni.showToast({title:"审核成功"})},1e3)}).catch(function(t){e.log(t)})})}})})},delete_bill:function(e){var t=o.products[e],i=(o.bills[e],r.default.Query("Goods"));i.set("id",t.goodsId.objectId),1==t.type?i.set("reserve",t.goodsId.reserve-t.num):-1==t.type&&i.set("reserve",t.goodsId.reserve+t.num),i.save().then(function(t){e==o.products.length-1&&(uni.hideLoading(),uni.navigateBack({delta:1}),setTimeout(function(){uni.showToast({title:"撤销成功"})},1e3))})}}};t.default=v}).call(this,i("5a52")["default"])},"134a":function(e,t,i){"use strict";i.r(t);var n=i("113e"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},"228d":function(e,t,i){var n=i("c275");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("972da910",n,!0,{sourceMap:!1,shadowMode:!1})},"6b27":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[e.loading?i("loading"):i("v-uni-view",{staticClass:"page"},[i("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"操作"},on:{"click-right":function(t){t=e.$handleEvent(t),e.show_options(t)}}}),i("v-uni-scroll-view",{style:{height:1==e.detail.extra_type&&0==e.detail.status?"calc(100vh - 170rpx)":"calc(100vh - 80rpx)"},attrs:{"scroll-y":"true"}},[i("v-uni-view",{staticStyle:{"line-height":"70rpx",padding:"0 20rpx"}},[e._v("操作产品")]),3==e.detail.type?i("v-uni-view",[i("v-uni-view",e._l(e.products,function(t,n){return i("v-uni-view",{key:n,staticClass:"pro_listitem"},[i("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#000"}},[i("v-uni-view",[e._v("产品："+e._s(t.goodsName))])],1),i("v-uni-view",{staticClass:"pro_list"},[i("v-uni-view",[e._v("盘点前库存："+e._s(t.reserve))]),i("v-uni-view",[e._v("盘点后库存："+e._s(t.now_reserve))])],1)],1)}),1)],1):2==e.detail.type?i("v-uni-view",[i("v-uni-view",e._l(e.products,function(t,n){return i("v-uni-view",{key:n,staticClass:"pro_listitem"},[i("v-uni-view",{staticClass:"pro_list_item",staticStyle:{color:"#000"}},[i("v-uni-view",[e._v("产品："+e._s(t.goodsName)+"（成本价：￥"+e._s(t.goodsId.costPrice)+"）")])],1),i("v-uni-view",{staticClass:"pro_list"},[i("v-uni-view",[e._v("退货数量：X"+e._s(t.num))]),i("v-uni-view",{staticStyle:{"text-align":"right"}},[e._v("建议零售价：￥"+e._s(t.goodsId.retailPrice))])],1)],1)}),1),i("v-uni-view",{staticClass:"pro_allmoney"},[e._v("总计：￥"+e._s(e.detail.all_money))])],1):-2==e.detail.type?i("v-uni-view",[i("v-uni-view",e._l(e.products,function(t,n){return i("v-uni-view",{key:n,staticClass:"pro_listitem"},[i("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#000","border-bottom":"1rpx solid#EEEEEE",padding:"0 0 10rpx"}},[i("v-uni-view",[e._v("产品："+e._s(t.goodsName))]),i("v-uni-view",[e._v("调拨数量："+e._s(t.num))])],1),i("v-uni-view",{staticClass:"pro_list",staticStyle:{padding:"10rpx 0"}},[i("v-uni-view",[e._v("调出仓库："+e._s(t.stock))]),i("v-uni-view",[e._v("调拨后库存："+e._s(t.reserve-t.num))])],1),i("v-uni-view",{staticClass:"pro_list"},[i("v-uni-view",[e._v("调入仓库："+e._s(t.out_stock))]),i("v-uni-view",[e._v("调拨后库存："+e._s(t.out_reserve+t.num))])],1)],1)}),1),-2!=e.detail.type?i("v-uni-view",{staticClass:"pro_allmoney"},[e._v("总计：￥"+e._s(e.detail.all_money))]):e._e()],1):i("v-uni-view",[i("v-uni-view",e._l(e.products,function(t,n){return i("v-uni-view",{key:n,staticClass:"pro_listitem"},[i("v-uni-view",{staticClass:"pro_list_item",staticStyle:{color:"#000"}},[i("v-uni-view",[e._v("产品："+e._s(t.goodsName)),e.user.rights&&"0"!=e.user.rights.othercurrent[0]?i("v-uni-text"):i("v-uni-text",[e._v("（成本价：￥"+e._s(t.goodsId.costPrice)+"）")])],1)],1),t.goodsId.selected_model?i("v-uni-view",e._l(t.goodsId.selected_model,function(t,n){return i("v-uni-view",{key:n,staticClass:"display_flex_bet"},[i("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#999"}},[e._v(e._s(t.custom1.value+t.custom2.value+t.custom3.value+t.custom4.value))]),i("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#f30"}},[e._v(e._s(t.num))])],1)}),1):e._e(),i("v-uni-view",{staticClass:"pro_list"},[i("v-uni-view",[e._v("建议零售价：￥"+e._s(t.goodsId.retailPrice))]),-1==t.type?i("v-uni-view",[e._v("实际卖出价：￥"+e._s(t.modify_retailPrice)+"（X"+e._s(t.num)+"）")]):i("v-uni-view",[e.user.rights&&"0"!=e.user.rights.othercurrent[0]?i("v-uni-text",[e._v("实际进货价：￥0（X"+e._s(t.num)+"）")]):i("v-uni-text",[e._v("实际进货价：￥"+e._s(t.modify_retailPrice)+"（X"+e._s(t.num)+"）")])],1)],1)],1)}),1),e.user.rights&&"0"!=e.user.rights.othercurrent[0]?i("v-uni-view",{staticClass:"pro_allmoney"},[e._v("总计：￥0")]):i("v-uni-view",{staticClass:"pro_allmoney"},[e._v("总计：￥"+e._s(e.detail.all_money))])],1),-1==e.detail.type?i("v-uni-view",[i("v-uni-view",{staticClass:"kaidanmx"},[i("v-uni-view",{staticStyle:{padding:"10rpx 30rpx"}},[e._v("开单明细")]),e.detail.custom?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[e._v("客户姓名")]),i("v-uni-view",[e._v(e._s(e.detail.custom.custom_name))])],1):e._e(),e.detail.discount?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[e._v("折扣率")]),i("v-uni-view",[e._v(e._s(e.detail.discount)+"%")])],1):e._e(),i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[e._v("实际付款")]),i("v-uni-view",{staticClass:"real_color"},[e._v(e._s(null==e.detail.real_money?"未填写":e.detail.real_money))])],1),e.detail.debt>0?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[e._v("欠款")]),i("v-uni-view",{staticClass:"real_color"},[e._v(e._s(e.detail.debt))])],1):e._e(),e.detail.typeDesc?i("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{background:"#fff"}},[i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[e._v("发送方式")]),i("v-uni-view",{staticClass:"real_color"},[e._v(e._s(e.detail.typeDesc))])],1),"物流"==e.detail.typeDesc||"快递"==e.detail.typeDesc?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"real_color"},[e._v(e._s(e.detail.expressNum))])],1):e._e()],1):e._e(),e.detail.typeDesc?i("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{background:"#fff","justify-content":"flex-end",padding:"0rpx 30rpx"},on:{click:function(t){t=e.$handleEvent(t),e.gotoexpressDet(t)}}},[i("v-uni-view",{staticStyle:{"margin-right":"10rpx",color:"#0a53c3"}},[e._v("查快递")]),i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#0a53c3"}})],1):e._e()],1)],1):1==e.detail.type?i("v-uni-view",[i("v-uni-view",{staticClass:"kaidanmx"},[i("v-uni-view",{staticStyle:{padding:"10rpx 30rpx"}},[e._v("开单明细")]),e.detail.producer?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[e._v("供货商姓名")]),i("v-uni-view",[e._v(e._s(e.detail.producer.producer_name))])],1):e._e(),i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[e._v("实际付款")]),i("v-uni-view",{staticClass:"real_color"},[e._v(e._s(null==e.detail.real_money?"未填写":e.detail.real_money))])],1),e.detail.debt>0?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[e._v("欠款")]),i("v-uni-view",{staticClass:"real_color"},[e._v(e._s(e.detail.debt))])],1):e._e(),e.detail.typeDesc?i("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{background:"#fff"}},[i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[e._v("发送方式")]),i("v-uni-view",{staticClass:"real_color"},[e._v(e._s(e.detail.typeDesc))])],1),"物流"==e.detail.typeDesc||"快递"==e.detail.typeDesc?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"real_color"},[e._v(e._s(e.detail.expressNum))])],1):e._e(),e.detail.typeDesc?i("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{background:"#fff","justify-content":"flex-end",padding:"0rpx 30rpx"},on:{click:function(t){t=e.$handleEvent(t),e.gotoexpressDet(t)}}},[i("v-uni-view",{staticStyle:{"margin-right":"10rpx",color:"#0a53c3"}},[e._v("查快递")]),i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#0a53c3"}})],1):e._e()],1):e._e()],1)],1):2==e.detail.type?i("v-uni-view",[i("v-uni-view",{staticClass:"kaidanmx"},[i("v-uni-view",{staticStyle:{padding:"10rpx 30rpx"}},[e._v("退货明细")]),e.detail.custom?i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[e._v("客户姓名")]),i("v-uni-view",[e._v(e._s(e.detail.custom.custom_name))])],1):i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"left_content"},[e._v("未记录客户")])],1)],1)],1):e._e(),i("v-uni-view",{staticClass:"detail_bottom",staticStyle:{"margin-top":"20px"}},[i("v-uni-view",{staticStyle:{display:"flex","border-bottom":"1px solid#ddd","padding-bottom":"20upx"}},[i("v-uni-view",[i("v-uni-image",{staticClass:"avatar",attrs:{src:e.detail.opreater.avatarUrl}})],1),i("v-uni-view",{staticClass:"common_style"},[e._v(e._s(e.detail.opreater.nickName))]),i("v-uni-view",{staticClass:"common_style"},[e._v("（操作者）")])],1),i("v-uni-view",{staticStyle:{padding:"20rpx 0 0"}},[-2!=e.detail.type&&e.detail.stock&&e.detail.stock.stock_name?i("v-uni-view",[e._v("选择的仓库："+e._s(e.detail.stock.stock_name))]):e._e(),e.detail.beizhu?i("v-uni-view",[e._v("备注："+e._s(e.detail.beizhu))]):i("v-uni-view",[e._v("备注：暂无")]),i("v-uni-view",[e._v("操作时间："+e._s(e.detail.createdAt))]),e.detail.Images&&e.detail.Images.length>0?i("v-uni-view",[i("v-uni-view",{staticClass:"notice_text"},[e._v("凭证图")]),i("v-uni-view",{staticStyle:{width:"100%",padding:"20rpx 0"}},[i("v-uni-view",{staticClass:"upload_image display_flex"},e._l(e.detail.Images,function(t,n){return i("v-uni-view",{key:n,staticStyle:{position:"relative"},on:{click:function(i){i=e.$handleEvent(i),e.priview(t)}}},[i("v-uni-image",{staticStyle:{width:"180rpx",height:"180rpx","margin-right":"10rpx"},attrs:{src:t}})],1)}),1)],1)],1):e._e()],1)],1)],1),1==e.detail.type&&1==e.detail.extra_type&&0==e.detail.status?i("v-uni-view",{staticClass:"operater_status"},[i("v-uni-text",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[e._v("该笔采购单未审核")]),i("v-uni-text",{staticStyle:{"font-size":"20rpx"}},[e._v("（请点击右上角操作进行审核）")])],1):1==e.detail.type&&1==e.detail.extra_type&&e.detail.status?i("v-uni-view",{staticClass:"operater_status",staticStyle:{background:"#2ca879"}},[i("v-uni-text",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[e._v("该笔采购单已审核")])],1):e._e(),-1==e.detail.type&&1==e.detail.extra_type&&0==e.detail.status?i("v-uni-view",{staticClass:"operater_status"},[i("v-uni-text",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[e._v("该笔销售单未审核")]),i("v-uni-text",{staticStyle:{"font-size":"20rpx"}},[e._v("（请点击右上角操作进行审核）")])],1):-1==e.detail.type&&1==e.detail.extra_type&&e.detail.status?i("v-uni-view",{staticClass:"operater_status",staticStyle:{background:"#2ca879"}},[i("v-uni-text",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[e._v("该笔销售单已审核")])],1):e._e()],1)],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},b410:function(e,t,i){"use strict";(function(e){var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("5d73")),o=n(i("c74b")),s={autoPrint:function(t){var i=this;e.log("sssss",t);var n=o.default.Query("order_opreations");n.include("opreater","custom","producer","stock"),n.get(t).then(function(t){e.log(t),i.print_operations(t,t.detail)})},print_goodDet:function(e){var t,i=uni.getStorageSync("now_product");i.objectId=e.good_id,i.stocks=e,i.productCode=e.productCode,t="<CB>商品信息</CB><BR>",t+="--------------------------------<BR>",t+="产品名称：　　 "+i.goodsName+"<BR>",i.stocks&&(t+="存放仓库：　　 "+i.stocks.stock_name+"<BR>"),i.position&&(t+="货架位置：　　 "+i.position+"<BR>"),i.producttime&&(t+="生产日期：　　 "+i.producttime+"<BR>"),i.nousetime&&(t+="失效日期：　　 "+i.nousetime+"<BR>"),t+="当前库存：　　 "+i.reserve+"<BR>",t+="产品规格:　　　"+i.packageContent+"*"+i.packingUnit+"<BR>",t+="进货价格:      "+i.costPrice+"<BR>",t+="零售价格:      "+i.retailPrice+"<BR>",i.bad_num&&(t+="货损数量:      "+i.bad_num+"<BR>"),t+="--------------------------------<BR>",t+="产品二维码：<BR>",t+="<QR>"+i.productCode+"</QR>",this.print_by_code(t)},print_operations:function(t,i){if(e.log(t),3==t.type){f="<CB>盘点单</CB><BR>",f+="--------------------------------<BR>";for(var n=0;n<i.length;n++)f+="产品名称："+i[n].goodsName+"<BR>",f+="盘点前库存："+i[n].reserve+"<BR>",f+="盘点后库存："+i[n].now_reserve+"<BR>",f+="--------------------------------<BR>"}else if(-2==t.type){f="<CB>调拨单</CB><BR>",f+="--------------------------------<BR>";for(var o=0;o<i.length;o++){f+="产品名称："+i[o].goodsName+"<BR>",f+="调拨数量："+i[o].num+"<BR>",f+="--------------------------------<BR>";var s=!0,r=!1,l=void 0;try{for(var u,c=(0,a.default)(t.detail);!(s=(u=c.next()).done);s=!0){var d=u.value;f+="调出仓库："+d.stock+"<BR>",f+="<RIGHT>当前库存："+(d.reserve-d.num)+"</RIGHT><BR>",f+="调入仓库："+d.out_stock+"<BR>",f+="<RIGHT>当前库存："+(d.out_reserve+d.num)+"</RIGHT><BR>"}}catch(p){r=!0,l=p}finally{try{s||null==c.return||c.return()}finally{if(r)throw l}}}f+="--------------------------------<BR>"}else if(2==t.type){f="<CB>退货单</CB><BR>",f+="--------------------------------<BR>";for(var v=0;v<i.length;v++)f+="产品名称："+i[v].goodsName+"<BR>",f+="零售价："+i[v].retailPrice+"<BR>",f+="数量    ：X"+i[v].num+"<BR>",f+="<RIGHT>总计："+i[v].total_money+"</RIGHT>",f+="--------------------------------<BR>",f+="退货明细：<BR>",null!=t.custom?f+="客户姓名："+t.custom.custom_name+"<BR>":f+="未记录客户 <BR>";f+="<BOLD><RIGHT>全部总计："+t.all_money+"</RIGHT></BOLD>",f+="--------------------------------<BR>"}else{var f;f=1==t.type?"<CB>入库单</CB><BR>":"<CB>出库单</CB><BR>",f+="--------------------------------<BR>";for(var _=0;_<i.length;_++)f+="产品名称："+i[_].goodsName+"<BR>",f+="实际单价："+i[_].retailPrice+"<BR>",f+="数量    ：X"+i[_].num+"<BR>",f+="<RIGHT>总计："+i[_].total_money+"</RIGHT>",f+="--------------------------------<BR>";f+="<BOLD><RIGHT>全部总计："+t.all_money+"</RIGHT></BOLD>",f+="--------------------------------<BR>",1==t.type&&(f+="开单明细：<BR>",f+="<BR>",null!=t.producer&&(f+="供货商姓名："+t.producer.producer_name+"<BR>"),null==t.real_money?f+="实际收款：未填写 <BR>":f+="实际收款："+t.real_money+"<BR>",t.debt>0&&(f+="本次欠款："+t.debt+"<BR>"),f+="--------------------------------<BR>"),-1==t.type&&(f+="开单明细：<BR>",f+="<BR>",t.custom&&(f+="客户姓名："+t.custom.custom_name+"<BR>"),t.real_money?f+="实际收款：未填写 <BR>":f+="实际收款："+t.real_money+"<BR>",t.debt>0&&(f+="本次欠款  ："+t.debt+"<BR>"),f+="--------------------------------<BR>")}f+="操作者："+t.opreater.nickName+"<BR>",f+="备注："+t.beizhu+"<BR>",f+="操作时间："+t.createdAt+"<BR>",this.print_by_code(f)},print_by_code:function(t){var i=uni.getStorageSync("setting").USER,n=uni.getStorageSync("setting").UKEY,a=uni.getStorageSync("setting").number,o="api.feieyun.cn",s="/Api/Open/",r=(new Date).getTime(),l=c(i+n+r);m(a,t,1);var u=0;function c(e){return y(d(g(e)))}function d(e){for(var t=e,i=Array(80),n=1732584193,a=-271733879,o=-1732584194,s=271733878,r=-1009589776,l=0;l<t.length;l+=16){for(var u=n,c=a,d=o,g=s,y=r,m=0;m<80;m++){i[m]=m<16?t[l+m]:p(i[m-3]^i[m-8]^i[m-14]^i[m-16],1);var w=_(_(p(n,5),v(m,a,o,s)),_(_(r,i[m]),f(m)));r=s,s=o,o=p(a,30),a=n,n=w}n=_(n,u),a=_(a,c),o=_(o,d),s=_(s,g),r=_(r,y)}return new Array(n,a,o,s,r)}function v(e,t,i,n){return e<20?t&i|~t&n:e<40?t^i^n:e<60?t&i|t&n|i&n:t^i^n}function f(e){return e<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514}function _(e,t){var i=(65535&e)+(65535&t),n=(e>>16)+(t>>16)+(i>>16);return n<<16|65535&i}function p(e,t){return e<<t|e>>>32-t}function g(e){for(var t=1+(e.length+8>>6),i=new Array(16*t),n=0;n<16*t;n++)i[n]=0;for(n=0;n<e.length;n++)i[n>>2]|=e.charCodeAt(n)<<24-8*(3&n);return i[n>>2]|=128<<24-8*(3&n),i[16*t-1]=8*e.length,i}function y(e){for(var t=u?"0123456789ABCDEF":"0123456789abcdef",i="",n=0;n<4*e.length;n++)i+=t.charAt(e[n>>2]>>8*(3-n%4)+4&15)+t.charAt(e[n>>2]>>8*(3-n%4)&15);return i}function m(t,n,a){uni.request({url:"https://"+o+s,data:{user:i,stime:r,sig:l,apiname:"Open_printMsg",sn:t,content:n,times:a},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.log(t.data),0!=t.data.ret?uni.showToast({icon:"none",title:t.data.msg}):uni.showToast({icon:"none",title:"打印成功"})}})}}};t.default=s}).call(this,i("5a52")["default"])},c275:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".page[data-v-5911599a]{color:#4d4d4d;height:100vh;overflow-y:scroll;background:#fafafa;font-size:%?28?%}.operater_status[data-v-5911599a]{position:fixed;bottom:0;left:0;width:100%;padding:%?20?% 0;background:#b82626;color:#fff;z-index:100;text-align:center}.pro_list[data-v-5911599a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.pro_listitem[data-v-5911599a]{background-color:#fff;padding:%?10?% %?20?%;border-bottom:%?1?% solid#ddd}.pro_allmoney[data-v-5911599a]{background-color:#fff;padding:%?10?% %?20?%;text-align:right;font-size:%?32?%;color:#f30}.beizhu_style[data-v-5911599a]{width:100%;background-color:#fff;padding:%?20?%;font-size:%?32?%}.confrim_button[data-v-5911599a]{width:60%;background:#426ab3;color:#fff;font-size:%?32?%;margin:10% 20%}.detail_bottom[data-v-5911599a]{width:calc(100% - %?40?%);background-color:#fff;padding:%?20?%}.avatar[data-v-5911599a]{width:%?80?%;height:%?80?%;border-radius:50%}.common_style[data-v-5911599a]{line-height:%?80?%;margin-left:%?20?%;color:#000}.real_color[data-v-5911599a]{color:#f30!important}.kaidanmx[data-v-5911599a]{margin-top:%?30?%}.display_flex[data-v-5911599a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#fff;padding:%?15?% %?30?%}.left_content[data-v-5911599a]{width:%?150?%}",""])},df06:function(e,t,i){"use strict";(function(t){var n=i("288e");i("6b54"),i("87b3"),i("7514");var a=n(i("5d73"));i("c5f6");var o=n(i("795b")),s=n(i("c74b"));e.exports={enterAddGoodNum:function(e){return new o.default(function(i,n){for(var o=function(n){var o=0,r=s.default.Query("Goods");r.get(e[n].objectId).then(function(s){if(t.log(e[n]),e[n].selectd_model){var r=!0,l=!1,u=void 0;try{for(var c,d=(0,a.default)(e[n].selected_model);!(r=(c=d.next()).done);r=!0){var v=c.value,f=!0,_=!1,p=void 0;try{for(var g,y=(0,a.default)(e[n].models);!(f=(g=y.next()).done);f=!0){var m=g.value;m.id==v.id&&(m.reserve=Number(m.reserve)+Number(v.num)),delete m.num}}catch(w){_=!0,p=w}finally{try{f||null==y.return||y.return()}finally{if(_)throw p}}}}catch(w){l=!0,u=w}finally{try{r||null==d.return||d.return()}finally{if(l)throw u}}o=Number(e[n].reserve)+Number(e[n].num),s.set("models",e[n].models)}else o=Number(e[n].reserve)+Number(e[n].num);s.set("reserve",o),s.set("stocktype",o>e[n].warning_num?1:0),s.save(),n==e.length-1&&i(!0)}).catch(function(e){t.log(e)})},r=0;r<e.length;r++)o(r)})},outRedGoodNum:function(e){var i=this;return new o.default(function(n,o){for(var r=function(o){var r=0,l=s.default.Query("Goods");l.get(e[o].objectId).then(function(t){if(e[o].selectd_model){var s=!0,l=!1,u=void 0;try{for(var c,d=(0,a.default)(e[o].selected_model);!(s=(c=d.next()).done);s=!0){var v=c.value,f=!0,_=!1,p=void 0;try{for(var g,y=(0,a.default)(e[o].models);!(f=(g=y.next()).done);f=!0){var m=g.value;r+=Number(m.reserve),m.id==v.id&&(m.reserve=Number(m.reserve)-Number(v.num)),delete m.num}}catch(w){_=!0,p=w}finally{try{f||null==y.return||y.return()}finally{if(_)throw p}}}}catch(w){l=!0,u=w}finally{try{s||null==d.return||d.return()}finally{if(l)throw u}}r=Number(e[o].reserve)-Number(e[o].num),t.set("models",e[o].models)}else r=Number(e[o].reserve)-Number(e[o].num);t.set("reserve",r),t.set("stocktype",r>=e[o].warning_num?1:0),t.save(),e[o].warning_num>=r&&i.log(e[o].goodsName+"出库了"+e[o].num+"件，已经低于预警数量"+e[o].warning_num,-2,e[o].objectId),i.record_staffOut(Number(e[o].num)),o==e.length-1&&n(!0)}).catch(function(e){t.log(e)})},l=0;l<e.length;l++)r(l)})},handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(e,i,n){var a=s.default.Pointer("_User"),o=a.set(uni.getStorageSync("uid")),r=s.default.Query("logs");r.set("parent",o),r.set("log",e),r.set("detail_id",n),r.set("type",i),r.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})},record_shopOut:function(e,i){t.log(e,i);var n=s.default.Query("shops");n.set("id",e),n.set("have_out",i),n.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})},record_staffOut:function(e){if(t.log(e,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var i=s.default.Query("staffs");i.set("id",uni.getStorageSync("user").objectId),i.set("have_out",Number(e)+uni.getStorageSync("user").have_out),i.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})}},get_allCost:function(){var e=uni.getStorageSync("uid");t.log(e);var i=s.default.Query("Goods");i.equalTo("userId","==",e),i.find().then(function(e){t.log(e);var i=!0,n=!1,o=void 0;try{for(var s,r=(0,a.default)(e);!(i=(s=r.next()).done);i=!0){var l=s.value;t.log(l),Number(l.costPrice)*l.reserve,l.reserve}}catch(u){n=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(n)throw o}}})},getDay:function(e,t){var i=this,n=new Date,a=n.getTime()+864e5*e;n.setTime(a);var o=n.getFullYear(),s=n.getMonth(),r=n.getDate();return s=i.handleMonth(s+1),r=i.handleMonth(r),t?o+"-"+s+"-"+r+" 00:00:00":o+"-"+s+"-"+r},js_date_time:function(e,t){var i=new Date(e),n=i.getFullYear(),a=i.getMonth()+1;a=a<10?"0"+a:a;var o=i.getDate();o=o<10?"0"+o:o;var s=i.getHours();s=s<10?"0"+s:s;var r=i.getMinutes(),l=i.getSeconds();return r=r<10?"0"+r:r,l=l<10?"0"+l:l,t?n+"-"+a+"-"+o+" "+s+":"+r:n+"-"+a+"-"+o},handleMonth:function(e){var t=e;return 1==e.toString().length&&(t="0"+e),t}}}).call(this,i("5a52")["default"])},fb54:function(e,t,i){"use strict";var n=i("228d"),a=i.n(n);a.a},ff7e:function(e,t,i){"use strict";i.r(t);var n=i("6b27"),a=i("134a");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("fb54");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"5911599a",null);t["default"]=r.exports}}]);