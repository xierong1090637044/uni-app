(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tarBar-manage"],{2521:function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-uni-scroll-view",{staticStyle:{height:"100vh"},attrs:{"scroll-y":"true"}},[t("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"20rpx"}},[t("v-uni-view",{staticStyle:{"font-size":"30rpx",color:"#333","font-weight":"bold"}},[n._v("库存管理模块")]),t("v-uni-view",{staticClass:"o_list"},n._l(n.now_optionsLists,function(e,a){return t("v-uni-navigator",{key:a,staticClass:"o_item",attrs:{url:e.url,"hover-class":"none"}},[t("v-uni-view",{staticClass:"o_headerItem",staticStyle:{background:"#426ab3"}},[t("fa-icon",{staticStyle:{"line-height":"80rpx"},attrs:{type:e.icon,size:"20",color:"#fff"}})],1),t("span",{staticClass:"o_text"},[n._v(n._s(e.name))]),t("v-uni-view",{staticStyle:{"font-size":"20rpx",color:"#999","margin-top":"-4rpx"}},[n._v(n._s(e.notice))])],1)}),1)],1),n.financeModule.length>0?t("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"20rpx",margin:"30rpx 0"}},[t("v-uni-view",{staticStyle:{"font-size":"30rpx",color:"#333","font-weight":"bold"}},[n._v("财务模块")]),t("v-uni-view",{staticClass:"o_list"},n._l(n.financeModule,function(e,a){return t("v-uni-navigator",{key:a,staticClass:"o_item",attrs:{url:e.url,"hover-class":"none"}},[t("v-uni-view",{staticClass:"o_headerItem",staticStyle:{background:"#2ca879"}},[t("fa-icon",{staticStyle:{"line-height":"80rpx"},attrs:{type:e.icon,size:"20",color:"#fff"}})],1),t("span",{staticClass:"o_text"},[n._v(n._s(e.name))])],1)}),1)],1):n._e(),t("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"20rpx","margin-top":"30rpx"}},[t("v-uni-view",{staticStyle:{"font-size":"30rpx",color:"#333","font-weight":"bold"}},[n._v("记录模块")]),t("v-uni-view",{staticClass:"o_list"},n._l(n.second_optionsLists,function(e,a){return t("v-uni-navigator",{key:a,staticClass:"o_item",attrs:{url:e.url,"hover-class":"none"}},[t("v-uni-view",{staticClass:"o_headerItem",staticStyle:{background:"#a8522c"}},[t("fa-icon",{staticStyle:{"line-height":"80rpx"},attrs:{type:e.icon,size:"20",color:"#fff"}})],1),t("span",{staticClass:"o_text"},[n._v(n._s(e.name))]),t("v-uni-view",{staticStyle:{"font-size":"20rpx",color:"#999","margin-top":"-4rpx"}},[n._v(n._s(e.notice))])],1)}),1)],1),n.analysisModule.length>0?t("v-uni-view",{staticStyle:{background:"#FFFFFF",padding:"20rpx",margin:"30rpx 0"}},[t("v-uni-view",{staticStyle:{"font-size":"30rpx",color:"#333","font-weight":"bold"}},[n._v("分析模块")]),t("v-uni-view",{staticClass:"o_list"},n._l(n.analysisModule,function(e,a){return t("v-uni-navigator",{key:a,staticClass:"o_item",attrs:{url:e.url,"hover-class":"none"}},[t("v-uni-view",{staticClass:"o_headerItem",staticStyle:{background:"#2ca0a8"}},[t("fa-icon",{staticStyle:{"line-height":"80rpx"},attrs:{type:e.icon,size:"20",color:"#fff"}})],1),t("span",{staticClass:"o_text"},[n._v(n._s(e.name))])],1)}),1)],1):n._e()],1)},i=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return i})},6475:function(n,e,t){e=n.exports=t("2350")(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* pages/home/index/index.wxss */.manage_icon[data-v-63d90138]{width:%?60?%;height:%?60?%;border-radius:50%}.item[data-v-63d90138]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.every_item[data-v-63d90138]{width:50%;text-align:center;line-height:%?30?%;font-size:%?14?%}.s_num[data-v-63d90138]{font-size:%?16?%;font-weight:700}.o_list[data-v-63d90138]{background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.o_item[data-v-63d90138]{width:25%;text-align:center;padding:%?30?% 0 0}.o_left_item[data-v-63d90138]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.o_text[data-v-63d90138]{color:#000;font-weight:700;font-size:%?24?%}.fa-icon[data-v-63d90138]{line-height:%?80?%!important}",""])},8795:function(n,e,t){"use strict";var a=t("b5826"),i=t.n(a);i.a},"8d57":function(n,e,t){"use strict";(function(n){var a=t("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(t("f499"));t("7514");var s=a(t("795b")),o=a(t("9546")),r={get_satffAuth:function(){return new s.default(function(n,e){var t=uni.getStorageSync("user").objectId,a=o.default.Query("_User");a.include("masterId"),a.get(t).then(function(e){e.masterId.is_vip?(e.is_vip=!0,e.vip_time=e.masterId.vip_time):(e.is_vip=!1,e.vip_time=0),uni.setStorageSync("user",e),n(e)}).catch(function(e){n()})})},get_stafflist:function(n,e){return new s.default(function(t,a){var s=JSON.parse(localStorage.getItem("bmob")).objectId,r=o.default.Query("_User");r.order("num"),r.equalTo("masterId","==",s),r.equalTo("disabled","==",n),r.include("shop"),e&&r.equalTo("name","==",{$regex:e+".*"}),r.find().then(function(n){localStorage.setItem("_User",(0,i.default)(n)),t(n)})})},add_staff:function(e){var t=JSON.parse(localStorage.getItem("bmob")).objectId;return new s.default(function(a,i){var s=o.default.Pointer("_User"),r=s.set(t),c=o.default.Pointer("shops"),l=c.set(e.shop);if(e.objectId){var u=o.default.Pointer("_User"),d=u.set(t),f=o.default.Query("_User");f.set("username",e.name),f.set("nickName",e.name),f.set("password",e.password),f.set("mobilePhoneNumber",e.mobilePhoneNumber),f.set("rights",e.rights),f.set("address",e.address),f.set("avatarUrl","http://bmob-cdn-23134.b0.upaiyun.com/2019/04/29/4705b31340bfff8080c068f52fd17e2c.png"),f.set("masterId",d),f.set("disabled",!e.disabled),f.set("shop",l),f.set("id",e.objectId),f.save().then(function(e){n.log(e),a(e)}).catch(function(e){n.log(e)})}else{var g=o.default.Query("_User");g.equalTo("masterId","==",t),g.equalTo("mobilePhoneNumber","==",e.mobilePhoneNumber),g.find().then(function(t){if(n.log(t),0==t.length){var i=o.default.Query("_User");i.set("username",e.name),i.set("shop",l),i.set("nickName",e.name),i.set("password",e.password),i.set("mobilePhoneNumber",e.mobilePhoneNumber),i.set("rights",e.rights),i.set("address",e.address),i.set("avatarUrl","http://bmob-cdn-23134.b0.upaiyun.com/2019/04/29/4705b31340bfff8080c068f52fd17e2c.png"),i.set("masterId",r),i.set("have_out",0),i.set("disabled",!e.disabled),i.save().then(function(e){n.log(e),a(e)}).catch(function(e){n.log(e)})}else a(!1,"已存在此账号")})}})},delete_staff:function(e){return new s.default(function(t,a){var i=o.default.Query("_User");i.destroy(e).then(function(n){t(n)}).catch(function(e){n.log(e)})})}};e.default=r}).call(this,t("5a52")["default"])},"8e2f":function(n,e,t){"use strict";t.r(e);var a=t("95c3"),i=t.n(a);for(var s in a)"default"!==s&&function(n){t.d(e,n,function(){return a[n]})}(s);e["default"]=i.a},"95c3":function(n,e,t){"use strict";(function(n){var a=t("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,s=a(t("5d73")),o=(a(t("9546")),a(t("8d57"))),r=a(t("4d52")),c=[{name:"入库记录",notice:"入库、采购、销售退货",icon:"file-o",url:"/pages/report/EnteringHistory/EnteringHistory?type=1"},{name:"出库记录",notice:"出库、销售、采购退货",icon:"file-o",url:"/pages/report/EnteringHistory/EnteringHistory?type=-1"},{name:"调拨记录",notice:"调拨记录",icon:"file-o",url:"/pages/report/EnteringHistory/EnteringHistory?type=-2"},{name:"盘点记录",notice:"盘点记录",icon:"file-o",url:"/pages/report/EnteringHistory/EnteringHistory?type=3"}],l=[{name:"产品管理",notice:"查看,添加,编辑",icon:"envelope-open-o",url:"/pages/manage/goods/goods"},{name:"员工管理",notice:"多人管理",icon:"user",url:"/pages/manage/staff/staff"},{name:"仓库管理",notice:"先完善好仓库",icon:"home",url:"/pages/manage/warehouse/warehouse"},{name:"门店管理",notice:"门店相关",icon:"shopping-cart",url:"/pages/manage/shops/shops"},{name:"客户管理",notice:"客户,供应商相关",icon:"address-card",url:"/pages/manage/custom/custom"},{name:"产品类别管理",notice:"产品类别相关",icon:"list",url:"/pages/manage/category/category"}],u=[{name:"畅销产品",icon:"gg",url:"/pages/analysis/goodSell/goodSell"},{name:"预警产品",icon:"exclamation-circle",url:"/pages/report/warningGoods/warningGoods"},{name:"客户销售",icon:"id-card-o",url:"/pages/analysis/customSell/customSell"},{name:"供货商采购",icon:"address-book",url:"/pages/analysis/producerSell/producerSell"},{name:"类别汇总",icon:"list",url:"/pages/analysis/classAll/classAll"},{name:"单品统计",icon:"quora",url:"/pages/manage/productCount/productCount"},{name:"销售业绩",icon:"area-chart",url:"/pages/report/staffChart/staffChart"},{name:"经营状况",icon:"recycle",url:"/pages/report/operational_status/operational_status"},{name:"报表",icon:"pie-chart",url:"/pages/report/chart/chart"}],d=[{name:"应收款",icon:"clock-o",url:"/pages/finance/customIn/customIn"},{name:"应付款",icon:"calendar ",url:"/pages/finance/producerOut/producerOut"},{name:"记收入",icon:"money ",url:"/pages/finance/InRecord/InRecord?type=record"},{name:"记支出",icon:"hand-spock-o ",url:"/pages/finance/outRecord/outRecord?type=record"},{name:"我的账户",icon:"gg",url:"/pages/finance/account/account"},{name:"收入类别",icon:"list",url:"/pages/finance/inClass/inClass"},{name:"支出类别",icon:"outdent",url:"/pages/finance/outClass/outClass"},{name:"流水记录",icon:"repeat",url:"/pages/finance/history/history"}],f={components:{faIcon:r.default},data:function(){return{identity:uni.getStorageSync("identity"),setting:uni.getStorageSync("setting"),now_optionsLists:[],second_optionsLists:[],analysisModule:[],financeModule:[]}},onLoad:function(){i=this},onShow:function(){i.setting=uni.getStorageSync("setting"),uni.getStorage({key:"identity",success:function(e){var t,a;"2"==e.data?o.default.get_satffAuth().then(function(e){n.log(e);var o=uni.getStorageSync("user");e.masterId.is_vip?(o.is_vip=!0,o.vip_time=o.masterId.vip_time):(o.is_vip=!1,o.vip_time=0),e?(t=e.rights.current||[],a=e.rights.recodecurrent||[],e.rights.analysisCurrent&&-1!=e.rights.analysisCurrent.indexOf("0")&&(i.analysisModule=u),e.rights.moneyCurrent&&-1!=e.rights.moneyCurrent.indexOf("0")&&(i.financeModule=d)):(t=uni.getStorageSync("user").rights.current||[],a=uni.getStorageSync("user").rights.recodecurrent||[],e.rights.analysisCurrent&&-1!=uni.getStorageSync("user").rights.analysisCurrent.indexOf("0")&&(i.analysisModule=u),e.rights.moneyCurrent&&-1!=uni.getStorageSync("user").rights.moneyCurrent.indexOf("0")&&(i.financeModule=d));var r=[],f=[],g=!0,p=!1,v=void 0;try{for(var m,y=(0,s.default)(t);!(g=(m=y.next()).done);g=!0){var h=m.value;l[h]&&r.push(l[h])}}catch(C){p=!0,v=C}finally{try{g||null==y.return||y.return()}finally{if(p)throw v}}var _=!0,b=!1,w=void 0;try{for(var x,S=(0,s.default)(a);!(_=(x=S.next()).done);_=!0){var k=x.value;c[k]&&f.push(c[k])}}catch(C){b=!0,w=C}finally{try{_||null==S.return||S.return()}finally{if(b)throw w}}i.now_optionsLists=r,i.second_optionsLists=f,uni.setStorageSync("user",o)}):"1"==e.data&&(i.now_optionsLists=l,i.second_optionsLists=c,i.analysisModule=u,i.financeModule=d)}})},methods:{}};e.default=f}).call(this,t("5a52")["default"])},b5826:function(n,e,t){var a=t("6475");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=t("4f06").default;i("691a1de3",a,!0,{sourceMap:!1,shadowMode:!1})},e7ee:function(n,e,t){"use strict";t.r(e);var a=t("2521"),i=t("8e2f");for(var s in i)"default"!==s&&function(n){t.d(e,n,function(){return i[n]})}(s);t("8795");var o=t("f0c5"),r=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"63d90138",null);e["default"]=r.exports}}]);