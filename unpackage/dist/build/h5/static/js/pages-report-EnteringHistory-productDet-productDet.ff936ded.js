(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-report-EnteringHistory-productDet-productDet"],{"31d8":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.loading?i("loading"):i("v-uni-view",{staticClass:"page"},[i("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"操作"},on:{"click-right":function(e){arguments[0]=e=t.$handleEvent(e),t.show_options.apply(void 0,arguments)}}}),i("v-uni-scroll-view",{style:{height:1==t.detail.extra_type&&0==t.detail.status?"calc(100vh - 170rpx)":"calc(100vh - 80rpx)"},attrs:{"scroll-y":"true"}},[i("v-uni-view",{staticStyle:{"line-height":"70rpx",padding:"0 20rpx"}},[t._v("操作产品")]),i("v-uni-view",[i("v-uni-view",t._l(t.products,function(e,a){return i("v-uni-view",{key:a,staticClass:"pro_listitem"},[i("v-uni-view",{staticClass:"pro_list_item",staticStyle:{color:"#000"}},[i("v-uni-view",[t._v("产品："+t._s(e.goodsName)),i("v-uni-text",[t._v("（成本价：￥"+t._s(e.goodsId.costPrice)+"）")])],1)],1),e.goodsId.selected_model?i("v-uni-view",t._l(e.goodsId.selected_model,function(e,a){return e.num>0?i("v-uni-view",{key:a,staticClass:"display_flex_bet"},[i("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#999"}},[t._v(t._s(e.custom1.value+e.custom2.value+e.custom3.value+e.custom4.value))]),i("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#f30"}},[t._v(t._s(e.num))])],1):t._e()}),1):t._e(),i("v-uni-view",{staticClass:"pro_list"},[i("v-uni-view",[t._v("建议零售价：￥"+t._s(e.goodsId.retailPrice))]),i("v-uni-view",[t.user.rights&&"0"!=t.user.rights.othercurrent[0]?i("v-uni-text",[t._v("实际进货价：￥0（X"+t._s(e.num)+"）")]):i("v-uni-text",[t._v("实际进货价：￥"+t._s(e.modify_retailPrice)+"（X"+t._s(e.num)+"）")])],1)],1)],1)}),1),i("v-uni-view",{staticClass:"pro_allmoney"},[t._v("生产总数："+t._s(t.detail.real_num))])],1),i("v-uni-view",[i("v-uni-view",{staticClass:"kaidanmx"},[i("v-uni-view",{staticStyle:{padding:"10rpx 30rpx"}},[t._v("记录明细")]),t.detail.custom?i("v-uni-view",{staticClass:"display_flex",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticClass:"left_content"},[t._v("客户姓名")]),i("v-uni-view",[t._v(t._s(t.detail.custom.custom_name))])],1):i("v-uni-view",{staticClass:"display_flex",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticClass:"left_content"},[t._v("未记录客户")])],1),i("v-uni-view",{staticClass:"display_flex",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticClass:"left_content"},[t._v("开工时间")]),i("v-uni-view",[t._v(t._s(t.detail.startDay))])],1),i("v-uni-view",{staticClass:"display_flex",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticClass:"left_content"},[t._v("计划完成")]),i("v-uni-view",[t._v(t._s(t.detail.endDay))])],1),i("v-uni-navigator",{staticClass:"display_flex_bet",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"},attrs:{"hover-class":"none",url:"matterDet/matterDet?id="+t.detail.objectId}},[i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-view",{staticClass:"left_content"},[t._v("物料信息")]),t.detail.mattersId&&t.detail.mattersId.length>0?i("v-uni-view",[t._v(t._s(t.detail.mattersId.length))]):i("v-uni-view",{staticStyle:{color:"#FF3300"}},[t._v("未添加")])],1),i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#bba14f"}})],1),i("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confrimMatter.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-view",{staticClass:"left_content"},[t._v("是否领料")]),t.detail.matterStatus?i("v-uni-view",{staticStyle:{color:"#2ca879"}},[t._v("已领料")]):i("v-uni-view",{staticStyle:{color:"#FF3300"}},[t._v("未领料")])],1),i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#bba14f"}})],1),i("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confrimComplete.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-view",{staticClass:"left_content"},[t._v("生产状态")]),t.detail.status?i("v-uni-view",{staticStyle:{color:"#2ca879"}},[t._v("已完成")]):i("v-uni-view",{staticStyle:{color:"#FF3300"}},[t._v("未完成")])],1),i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#bba14f"}})],1),t.detail.status?i("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{"border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-view",{staticClass:"left_content"},[t._v("已入库数")]),i("v-uni-view",{staticStyle:{color:"#FF3300"}},[t._v(t._s(t.enterNum))])],1)],1):t._e()],1)],1),i("v-uni-view",{staticClass:"detail_bottom",staticStyle:{"margin-top":"20px"}},[i("v-uni-view",{staticStyle:{display:"flex","border-bottom":"1px solid#ddd","padding-bottom":"20upx"}},[i("v-uni-view",[i("v-uni-image",{staticClass:"avatar",attrs:{src:t.detail.opreater.avatarUrl}})],1),i("v-uni-view",{staticClass:"common_style"},[t._v(t._s(t.detail.opreater.nickName))]),i("v-uni-view",{staticClass:"common_style"},[t._v("（操作者）")])],1),i("v-uni-view",{staticStyle:{"text-align":"center",padding:"20rpx 0"}},[i("tki-qrcode",{ref:"qrcode",attrs:{cid:"qrcode",val:t.detail.objectId,size:140,loadMake:!0,usingComponents:!0,unit:"rpx"},on:{result:function(e){arguments[0]=e=t.$handleEvent(e),t.qrR.apply(void 0,arguments)}}}),i("v-uni-view",{staticStyle:{color:"#333333","font-weight":"bold"}},[t._v("生产单二维码")])],1),i("v-uni-view",{staticStyle:{padding:"20rpx 0 0"}},[t.detail.beizhu?i("v-uni-view",[t._v("备注："+t._s(t.detail.beizhu))]):i("v-uni-view",[t._v("备注：暂无")]),i("v-uni-view",[t._v("操作时间："+t._s(t.detail.createdAt))]),t.detail.Images&&t.detail.Images.length>0?i("v-uni-view",[i("v-uni-view",{staticClass:"notice_text"},[t._v("生产图")]),i("v-uni-view",{staticStyle:{width:"100%",padding:"20rpx 0"}},[i("v-uni-view",{staticClass:"upload_image display_flex"},t._l(t.detail.Images,function(e,a){return i("v-uni-view",{key:a,staticStyle:{position:"relative"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.priview(e)}}},[i("v-uni-image",{staticStyle:{width:"180rpx",height:"180rpx","margin-right":"10rpx"},attrs:{src:e}})],1)}),1)],1)],1):t._e()],1)],1)],1)],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"3a23":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".page[data-v-0040511e]{color:#4d4d4d;height:100vh;overflow-y:scroll;background:#fafafa;font-size:%?28?%}.operater_status[data-v-0040511e]{position:fixed;bottom:0;left:0;width:100%;padding:%?20?% 0;background:#b82626;color:#fff;z-index:100;text-align:center}.pro_list[data-v-0040511e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.pro_listitem[data-v-0040511e]{background-color:#fff;padding:%?10?% %?20?%;border-bottom:%?1?% solid#ddd}.pro_allmoney[data-v-0040511e]{background-color:#fff;padding:%?10?% %?20?%;text-align:right;font-size:%?32?%;color:#f30}.beizhu_style[data-v-0040511e]{width:100%;background-color:#fff;padding:%?20?%;font-size:%?32?%}.confrim_button[data-v-0040511e]{width:60%;background:#426ab3;color:#fff;font-size:%?32?%;margin:10% 20%}.detail_bottom[data-v-0040511e]{width:calc(100% - %?40?%);background-color:#fff;padding:%?20?%}.avatar[data-v-0040511e]{width:%?80?%;height:%?80?%;border-radius:50%}.common_style[data-v-0040511e]{line-height:%?80?%;margin-left:%?20?%;color:#000}.real_color[data-v-0040511e]{color:#f30!important}.kaidanmx[data-v-0040511e]{margin-top:%?30?%}.display_flex[data-v-0040511e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;padding:%?15?% %?30?%}.display_flex_bet[data-v-0040511e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff;padding:%?15?% %?30?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.left_content[data-v-0040511e]{width:%?150?%}",""])},"3f09":function(t,e,i){"use strict";(function(t){var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("795b"));i("6b54"),i("c5f6");var o=a(i("5d73"));i("7514");var r,s,l=a(i("9546")),u=(a(i("856d")),a(i("7fd5"))),d=a(i("13d4")),c=a(i("120a")),v=a(i("96bd")),f={components:{tkiQrcode:d.default,loading:c.default,uniNavBar:v.default},data:function(){return{user:uni.getStorageSync("user"),identity:uni.getStorageSync("identity"),othercurrent:"",bills:[],loading:!0,products:null,detail:null,matters:[],all_money:0,really_total_money:0,real_money:0,enterNum:0}},onLoad:function(e){t.log(e),r=this,s=e.id,r.user.rights&&r.user.rights.othercurrent&&(r.othercurrent=r.user.rights.othercurrent)},onShow:function(){r.getdetail(s)},methods:{show_options:function(){uni.showActionSheet({itemList:["领料","生产完成","入库"],success:function(t){var e=t.tapIndex;0==e?r.confrimMatter():1==e?r.confrimComplete():2==e&&r.confrimEnter()},fail:function(e){t.log(e.errMsg)}})},confrimEnter:function(){if(0==r.detail.status)uni.showToast({icon:"none",title:"未生产完成！"});else if(0==r.detail.matterStatus)uni.showToast({icon:"none",title:"未领料！"});else if(r.enterNum==r.detail.real_num)uni.showToast({icon:"none",title:"已经全部入库了！"});else{var e=[],i=!0,a=!1,n=void 0;try{for(var u,d=(0,o.default)(r.detail.detail);!(i=(u=d.next()).done);i=!0){var c=u.value;e.push(c.goodsId.objectId)}}catch(f){a=!0,n=f}finally{try{i||null==d.return||d.return()}finally{if(a)throw n}}var v=l.default.Query("Goods");v.containedIn("objectId",e),v.find().then(function(e){var i=!0,a=!1,n=void 0;try{for(var l,u=(0,o.default)(e);!(i=(l=u.next()).done);i=!0){var d=l.value,c=!0,v=!1,m=void 0;try{for(var _,y=(0,o.default)(r.detail.detail);!(c=(_=y.next()).done);c=!0){var p=_.value;p.goodsId.objectId==d.objectId&&(p.enterNum?d.num=p.num-p.enterNum:d.num=p.num,d.total_money=p.num*d.costPrice,d.really_total_money=p.num*d.costPrice,d.modify_retailPrice=d.costPrice)}}catch(f){v=!0,m=f}finally{try{c||null==y.return||y.return()}finally{if(v)throw m}}}}catch(f){a=!0,n=f}finally{try{i||null==u.return||u.return()}finally{if(a)throw n}}t.log(e),uni.setStorageSync("products",e),uni.setStorageSync("detailBills",r.detail.detail),uni.navigateTo({url:"/pages/report/EnteringHistory/productDet/productEnter/productEnter?id="+s})})}},confrimComplete:function(){uni.showModal({title:"提示",content:"是否确认生产完成",success:function(t){if(t.confirm)if(r.detail.status)uni.showToast({title:"已经生产完成！"});else{uni.showLoading({title:"生产中..."});var e=l.default.Query("order_opreations");e.set("id",s),e.set("status",!0),e.save().then(function(t){var e=l.default.Query("Bills");e.containedIn("objectId",r.detail.bills),e.find().then(function(t){t.set("status",!0),t.saveAll().then(function(t){uni.showToast({title:"生产完成"}),r.getdetail(s)})})})}}})},confrimMatter:function(){r.detail.mattersId&&r.detail.mattersId.length>0?uni.showModal({title:"是否确认领料",content:"领料后不可修改",success:function(e){if(e.confirm)if(r.detail.matterStatus)uni.showToast({title:"已经领过物料！"});else{for(var i=new Array,a=[],n=uni.getStorageSync("uid"),o=0,d=0;d<r.matters.length;d++){var c=Number(r.matters[d].reserve)-r.matters[d].num;o+=r.matters[d].num;var v={},f=l.default.Query("Bills"),m=l.default.Pointer("_User"),_=m.set(n),y=l.default.Pointer("Matters"),p=y.set(r.matters[d].objectId),g=uni.getStorageSync("masterId"),w=l.default.Pointer("_User"),b=w.set(g);f.set("goodsName",r.matters[d].goodsName),f.set("retailPrice",r.matters[d].modify_retailPrice.toString()),f.set("num",Number(r.matters[d].num)),f.set("total_money",r.matters[d].total_money),f.set("really_total_money",r.matters[d].really_total_money),f.set("mattersId",p),f.set("userId",_),f.set("opreater",b),f.set("type",6);var h={};v.goodsName=r.matters[d].goodsName,v.modify_retailPrice=r.matters[d].modify_retailPrice.toString(),v.retailPrice=r.matters[d].retailPrice,v.total_money=r.matters[d].total_money,h.costPrice=r.matters[d].costPrice,h.retailPrice=r.matters[d].retailPrice,h.objectId=r.matters[d].objectId,h.reserve=c,r.matters[d].selectd_model&&(h.selected_model=r.matters[d].selected_model,h.models=r.matters[d].models),v.goodsId=h,v.num=r.matters[d].num,v.type=6,i.push(f),a.push(v)}l.default.Query("Bills").saveAll(i).then(function(e){for(var i=[],d=0;d<e.length;d++)i.push(e[d].success.objectId);var c=l.default.Pointer("_User"),v=c.set(n),f=uni.getStorageSync("masterId"),m=l.default.Pointer("_User"),_=m.set(f),y=l.default.Query("order_opreations");y.set("detail",a),y.set("real_num",o),y.set("type",6),y.set("bills",i),y.set("opreater",_),y.set("master",v),y.set("goodsName",r.matters[0].goodsName),y.set("all_money",r.all_money),y.save().then(function(e){var i=e.objectId;uni.hideLoading();var a=l.default.Query("order_opreations");a.set("id",s),a.set("matterStatus",!0),a.save().then(function(t){uni.showToast({title:"领料成功",icon:"success",duration:1e3,complete:function(){r.outRedGoodNum(r.matters).then(function(t){u.default.log(uni.getStorageSync("user").nickName+"确认领了'"+r.matters[0].goodsName+"'等"+r.matters.length+"物料",6,i),uni.setStorageSync("is_option",!0),uni.removeStorageSync("_warehouse"),uni.removeStorageSync("out_warehouse"),uni.removeStorageSync("category"),uni.removeStorageSync("warehouse"),r.getdetail(s)})}})}).catch(function(e){t.log(e)})})})}else e.cancel&&t.log("用户点击取消")}}):uni.showToast({title:"请先添加物料",icon:"none"})},outRedGoodNum:function(e){return new n.default(function(i,a){for(var n=function(a){var n=0,o=l.default.Query("Matters");o.get(e[a].objectId).then(function(t){n=Number(e[a].reserve)-Number(e[a].num),t.set("reserve",n),t.set("stocktype",n>=e[a].warning_num?1:0),t.save(),e[a].warning_num>=n&&u.default.log(e[a].goodsName+"在生产时领了"+e[a].num+"件，已经低于预警数量"+e[a].warning_num,-2,e[a].objectId),a==e.length-1&&i(!0)}).catch(function(e){t.log(e)})},o=0;o<e.length;o++)n(o)})},priview:function(t){uni.previewImage({current:t,urls:r.detail.Images})},getdetail:function(e){var i=this,a=l.default.Query("order_opreations");a.include("opreater","custom","producer","stock"),a.get(e).then(function(e){if(t.log(e),e.startDay&&(e.startDay=u.default.js_date_time(e.startDay)),e.endDay&&(e.endDay=u.default.js_date_time(e.endDay)),r.detail=e,r.products=e.detail,r.bills=e.bills,e.mattersId&&e.mattersId.length>0){r.matters=e.mattersId;for(var a=0;a<i.matters.length;a++)i.all_money=Number((i.matters[a].total_money+i.all_money).toFixed(2)),i.really_total_money=Number((i.matters[a].really_total_money+i.really_total_money).toFixed(2)),i.total_num+=Number(i.matters[a].num);i.real_money=Number(i.all_money.toFixed(2))}var n=!0,s=!1,l=void 0;try{for(var d,c=(0,o.default)(e.detail);!(n=(d=c.next()).done);n=!0){var v=d.value;v.enterNum&&(r.enterNum+=v.enterNum)}}catch(f){s=!0,l=f}finally{try{n||null==c.return||c.return()}finally{if(s)throw l}}r.loading=!1}).catch(function(e){t.log(e)})},qrR:function(t){this.src=t},bcR:function(t){this.src=t},saveBccode:function(){this.$refs.barcode._saveCode()},saveQrcode:function(){this.$refs.qrcode._saveCode()}}};e.default=f}).call(this,i("5a52")["default"])},9529:function(t,e,i){"use strict";var a=i("b7ea"),n=i.n(a);n.a},aab3:function(t,e,i){"use strict";i.r(e);var a=i("31d8"),n=i("fae4");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("9529");var r=i("f0c5"),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"0040511e",null);e["default"]=s.exports},b7ea:function(t,e,i){var a=i("3a23");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6b09b22d",a,!0,{sourceMap:!1,shadowMode:!1})},fae4:function(t,e,i){"use strict";i.r(e);var a=i("3f09"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a}}]);