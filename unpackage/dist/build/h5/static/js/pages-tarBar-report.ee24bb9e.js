(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tarBar-report"],{5180:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.Item[data-v-3992d788]{background:#fff;padding:%?30?%;border-radius:%?16?%}.Item .itemB[data-v-3992d788]{background:#f2f2f2;text-align:center;padding:%?42?% 0;width:30%;border-radius:%?8?%}.Item .itemC[data-v-3992d788]{background:#f2f2f2;text-align:left;padding:%?10?% %?20?%;border-radius:%?16?%}.Item .addButton[data-v-3992d788]{color:#118fff;border:%?1?% solid #118fff;border-radius:%?40?%;width:60%;margin:0 auto;margin-top:%?20?%}',""]),t.exports=e},"7a82":function(t,e,n){"use strict";(function(t){var i=n("ee27");n("7db0"),n("a9e3"),n("b6802"),n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("54f8")),r=i(n("9546")),a={querycount:function(){var e=uni.getStorageSync("uid");return new Promise((function(n,i){var o=r.default.Query("Goods");o.equalTo("userId","==",e),o.equalTo("status","!=",-1),o.equalTo("order","!=",1),o.count().then((function(e){n(e),t.log("共有".concat(e,"条记录"))}))}))},getAllCustom:function(){var t={},e=0,n=uni.getStorageSync("uid");return new Promise((function(i,a){var s=r.default.Query("customs");s.order("num"),s.equalTo("parent","==",n),s.equalTo("disabled","!=",!0),s.limit(500),s.find().then((function(a){var s=a.length;t.number=a.length;var u,l=(0,o.default)(a);try{for(l.s();!(u=l.n()).done;){var d=u.value;e+=d.debt?d.debt:0}}catch(v){l.e(v)}finally{l.f()}1e4>e&&e>=1e3?e=(e/1e3).toFixed(2)+"千":1e5>e&&e>=1e4?e=(e/1e4).toFixed(2)+"万":1e6>e&&e>=1e5&&(e=(e/1e4).toFixed(2)+"十万"),t.debt=e;var c=r.default.Query("order_opreations");c.equalTo("master","==",n),c.equalTo("type","==",-1),c.equalTo("custom","!=",null),c.count().then((function(e){t.historyNum=e;var o=r.default.Query("order_opreations");o.equalTo("master","==",n),o.equalTo("type","==",-1),o.equalTo("custom","!=",null),o.statTo("groupby","custom"),o.find().then((function(e){t.usedNum=e.length,t.noUsedNum=s-e.length,i(t)}))}))}))}))},getAllProducer:function(){var t={},e=0,n=uni.getStorageSync("uid");return new Promise((function(i,a){var s=r.default.Query("producers");s.equalTo("parent","==",n),s.equalTo("disabled","!=",!0),s.limit(500),s.find().then((function(a){var s=a.length;t.number=a.length;var u,l=(0,o.default)(a);try{for(l.s();!(u=l.n()).done;){var d=u.value;e+=d.debt?d.debt:0}}catch(v){l.e(v)}finally{l.f()}1e4>Number(e)&&Number(e)>1e3?e=(Number(e)/1e3).toFixed(2)+"千":1e5>Number(e)&&Number(e)>=1e4?e=(Number(e)/1e4).toFixed(2)+"万":1e6>Number(e)&&Number(e)>=1e5&&(e=(Number(e)/1e4).toFixed(2)+"十万"),t.debt=e;var c=r.default.Query("order_opreations");c.equalTo("master","==",n),c.equalTo("type","==",1),c.equalTo("producer","!=",null),c.count().then((function(e){t.historyNum=e;var o=r.default.Query("order_opreations");o.equalTo("master","==",n),o.equalTo("type","==",1),o.equalTo("producer","!=",null),o.statTo("groupby","producer"),o.find().then((function(e){t.usedNum=e.length,t.noUsedNum=s-e.length,i(t)}))}))}))}))},getAllAccounts:function(){var e={},n=0,i=uni.getStorageSync("uid");return new Promise((function(a,s){var u=r.default.Query("accounts");u.equalTo("parent","==",i),u.limit(500),u.find().then((function(s){s.length;e.number=s.length;var u,l=(0,o.default)(s);try{for(l.s();!(u=l.n()).done;){var d=u.value;n+=d.money?d.money:0}}catch(v){l.e(v)}finally{l.f()}1e4>Number(n)>1e3?n=(Number(n)/1e3).toFixed(2)+"千":Number(n)>1e4&&(n=(Number(n)/1e4).toFixed(2)+"万"),e.money=n;var c=r.default.Query("order_opreations");c.include("accounts"),c.equalTo("master","==",i),c.statTo("sum","real_money"),c.statTo("groupby","accounts"),c.find().then((function(n){t.log("账户",n),a(e)}))}))}))},gettoday_detail:function(e,n){var i=uni.getStorageSync("uid"),o=0,a=0,s=0,u=0,l=0,d=0,c=0,v=0,f={};return new Promise((function(g,y){var m=r.default.Query("order_opreations");m.equalTo("master","==",i),m.equalTo("createdAt",">=",e),m.equalTo("createdAt","<=",n),m.select("real_money","type"),m.limit(1e3),m.find().then((function(y){for(var m=0;m<y.length;m++)1==y[m].type?l+=y[m].real_money:-1==y[m].type&&(d+=y[m].real_money);var p=r.default.Query("Bills");p.equalTo("userId","==",i),p.equalTo("createdAt",">=",e),p.equalTo("createdAt","<=",n),p.select("goodsId","num","total_money","type","extra_type"),p.limit(1e3),p.include("goodsId"),p.find().then((function(y){for(var m=0;m<y.length;m++)1==y[m].type?(o+=y[m].num,y[m].goodsId?s+=y[m].num*y[m].goodsId.retailPrice:s+=0,1==y[m].extra_type&&(v+=y[m].num)):-1==y[m].type&&(a+=y[m].num,y[m].goodsId?u+=y[m].num*y[m].goodsId.costPrice:u+=0,1==y[m].extra_type&&(c+=y[m].num));f.get_reserve=o.toFixed(uni.getStorageSync("setting").show_float),f.out_reserve=a.toFixed(uni.getStorageSync("setting").show_float),f.get_reserve_real_money=s.toFixed(uni.getStorageSync("setting").show_float),f.out_reserve_real_money=u.toFixed(uni.getStorageSync("setting").show_float),f.get_reserve_num=l.toFixed(uni.getStorageSync("setting").show_float),f.out_reserve_num=d.toFixed(uni.getStorageSync("setting").show_float),f.get_reserve_get_num=(s-l).toFixed(uni.getStorageSync("setting").show_float),f.out_reserve_get_num=(d-u).toFixed(uni.getStorageSync("setting").show_float),f.purchaseNum=v.toFixed(uni.getStorageSync("setting").show_float),f.sellNum=c.toFixed(uni.getStorageSync("setting").show_float),t.log(o);var p=0,_=0,w=r.default.Query("order_opreations");w.equalTo("master","==",i),w.equalTo("createdAt",">=",e),w.equalTo("createdAt","<=",n),w.equalTo("type","==",-1),w.find().then((function(t){for(var e=0;e<t.length;e++)p+=t[e].all_money,_+=t[e].real_money;f.should_get_money=p,f.real_get_money=_})),g(f)}))}))}))},loadallGoods:function(){var e=this,n=uni.getStorageSync("uid"),i=uni.getStorageSync("user");uni.getStorageSync("setting");return new Promise((function(a,s){var u=0,l=0,d=0,c=0,v=0,f={};e.querycount().then((function(e){f.total_products=e;for(var s=0;s<Math.ceil(e/500);s++){t.log(s);var g=r.default.Query("Goods");g.equalTo("userId","==",n),g.equalTo("status","!=",-1),g.equalTo("order","!=",1),g.select("reserve","costPrice","stocktype"),g.limit(500),g.skip(500*s),g.find().then((function(t){var n,r=(0,o.default)(t);try{for(r.s();!(n=r.n()).done;){var s=n.value;0==s.stocktype?d+=1:2==s.stocktype&&(c+=1),u+=s.reserve,l+=s.reserve*s.costPrice}}catch(g){r.e(g)}finally{r.f()}v+=1,v==Math.ceil(e/500)&&(1!=i.identity&&i.rights&&"0"!=i.rights.othercurrent[0]&&(l=0),Number(u)>1e3&&Number(u)<1e4?u=Number(u)/1e3+"千":Number(u)>=1e4&&Number(l)<1e5?u=Number(u)/1e4+"万":Number(u)>=1e5&&(u=Number(u)/1e4+"十万"),Number(l)>1e3&&Number(l)<1e4?l=(Number(l)/1e3).toFixed(2)+"千":Number(l)>=1e4&&Number(l)<1e5?l=(Number(l)/1e4).toFixed(4)+"万":Number(l)>=1e5&&(l=(Number(l)/1e5).toFixed(4)+"十万"),f.total_money=l,f.total_reserve=u,f.warn_num=d,f.over_num=c,a(f))}))}}))}))}};e.default=a}).call(this,n("5a52")["default"])},"88de":function(t,e,n){"use strict";var i=n("ee27");n("7db0"),n("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,r,a=i(n("54f8")),s=i(n("1ec3")),u=i(n("7fd5")),l=i(n("2bc1")),d=i(n("7a82")),c=i(n("eae5")),v=i(n("9546")),f={components:{achart:s.default},data:function(){return{achartShow:!0,now_day:u.default.getDay(0),user:"",identity:uni.getStorageSync("identity"),othercurrent:"",noticeText:"",logsList:[],goodsAnalysis:{total_products:0,total_reserve:0,total_money:0,warn_num:0,over_num:0},customsAnalysis:{},producersAnalysis:{},staffCan:{see:!1}}},onLoad:function(t){o=this,r=uni.getStorageSync("uid")},onShow:function(){uni.getStorageSync("user")&&(o.loadallGoods(),o.user=uni.getStorageSync("user"),o.achartShow=!0,c.default.getNoticeList().then((function(t){o.noticeText=t})),2==uni.getStorageSync("identity")&&o.user.rights.othercurrent&&-1!=o.user.rights.othercurrent.indexOf("2")&&(o.staffCan.see=!0),l.default.getMineInfo().then((function(t){t.disabled&&(setTimeout((function(){uni.showToast({title:"该账户已禁用",icon:"none"})}),1e3),uni.reLaunch({url:"/pages/landing/landing"}))}))),uni.removeStorageSync("now_product")},onHide:function(){o.achartShow=!1},methods:{showNotice:function(){uni.showToast({icon:"none",title:"非会员无法使用"})},loadallGoods:function(){d.default.loadallGoods().then((function(t){o.goodsAnalysis=t,d.default.getAllCustom().then((function(t){o.customsAnalysis=t,d.default.getAllProducer().then((function(t){o.producersAnalysis=t}))}))}))},get_logsList:function(){var t=v.default.Query("logs");t.equalTo("parent","==",r),t.equalTo("type","!=",-2),t.order("-createdAt"),t.limit(20),t.find().then((function(t){var e,n=(0,a.default)(t);try{for(n.s();!(e=n.n()).done;){var i=e.value;5==i.type?i.link="/pages/manage/good_det/good_det?id="+i.detail_id+"&type=false":-1!=i.type&&1!=i.type&&2!=i.type&&3!=i.type||(i.link="/pages/report/EnteringHistory/detail/detail?id="+i.detail_id)}}catch(r){n.e(r)}finally{n.f()}o.logsList=t}))}}};e.default=f},"8c8f":function(t,e,n){"use strict";n.r(e);var i=n("88de"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a},b179:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return 1==t.identity||t.staffCan.see?n("v-uni-scroll-view",{staticStyle:{padding:"0 10rpx",height:"100vh",width:"calc(100% - 20rpx)"},attrs:{"scroll-y":"true"}},[n("v-uni-view",{staticClass:"Item"},[n("v-uni-view",{staticStyle:{color:"#3D3D3D","margin-bottom":"10rpx","font-size":"32rpx","font-weight":"bold"}},[t._v("商品分析")]),n("v-uni-view",{staticClass:"display_flex_bet"},[n("v-uni-view",{staticClass:"itemB"},[n("v-uni-view",[t._v("全部商品")]),n("v-uni-view",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v(t._s(t.goodsAnalysis.total_products)+"种")]),t.user.is_vip?n("v-uni-navigator",{staticClass:"addButton",attrs:{"hover-class":"none",url:"/pages/manage/good_add/good_add?type=more"}},[t._v("新增")]):n("v-uni-view",{staticClass:"addButton",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showNotice.apply(void 0,arguments)}}},[t._v("新增")])],1),n("v-uni-view",{staticStyle:{width:"30%"}},[n("v-uni-view",{staticClass:"itemC",staticStyle:{margin:"0 10rpx 10rpx 0"}},[n("v-uni-view",[t._v("总数")]),n("v-uni-view",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v(t._s(t.goodsAnalysis.total_reserve))])],1),n("v-uni-view",{staticClass:"itemC"},[n("v-uni-view",[t._v("总成本")]),n("v-uni-view",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v(t._s(t.goodsAnalysis.total_money))])],1)],1),n("v-uni-view",{staticStyle:{width:"30%"}},[n("v-uni-navigator",{staticClass:"itemC",staticStyle:{margin:"0 10rpx 10rpx 0",background:"#ff8282",color:"#fff"},attrs:{"hover-class":"none",url:"/pages/report/warningGoods/warningGoods"}},[n("v-uni-view",[t._v("预警产品")]),n("v-uni-view",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v(t._s(t.goodsAnalysis.warn_num))])],1),n("v-uni-navigator",{staticClass:"itemC",staticStyle:{background:"#ff8282",color:"#fff"},attrs:{"hover-class":"none",url:"/pages/report/warningGoods/warningGoods"}},[n("v-uni-view",[t._v("高储产品")]),n("v-uni-view",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v(t._s(t.goodsAnalysis.over_num))])],1)],1)],1)],1),n("v-uni-view",{staticClass:"display_flex",staticStyle:{margin:"20rpx 0",background:"#fff",padding:"0 20rpx"}},[n("fa-icon",{attrs:{type:"lightbulb-o",size:"20",color:"#426ab3"}}),t.noticeText.length>0?n("v-uni-swiper",{staticStyle:{color:"#333 !important",width:"100%","margin-left":"20rpx",height:"110rpx"},attrs:{vertical:"true"}},t._l(t.noticeText,(function(e,i){return n("v-uni-swiper-item",{key:i,staticClass:"item"},[n("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{width:"100%",height:"100%"},attrs:{"hover-class":"none",url:e.link}},[n("v-uni-view",{staticClass:"text_overflow_2",staticStyle:{"font-weight":"bold",width:"90%","line-height":"44rpx"}},[t._v(t._s(e.content))]),n("fa-icon",{attrs:{type:"angle-right",size:"18",color:"#999"}})],1)],1)})),1):t._e()],1),n("v-uni-view",{staticClass:"Item",staticStyle:{padding:"10rpx 30rpx",overflow:"hidden"}},[n("v-uni-view",{staticStyle:{"font-size":"32rpx",color:"#3D3D3D","font-weight":"bold","margin-bottom":"20rpx"}},[t._v("当月出入库统计")]),n("achart",{attrs:{now_day:t.now_day,type:2,show:t.achartShow}})],1),n("v-uni-view",{staticClass:"Item",staticStyle:{"margin-top":"20rpx"}},[n("v-uni-view",{staticStyle:{color:"#3D3D3D","margin-bottom":"10rpx","font-size":"32rpx","font-weight":"bold"}},[t._v("客户分析")]),n("v-uni-view",{staticClass:"display_flex_bet"},[n("v-uni-view",{staticClass:"itemB"},[n("v-uni-view",[t._v("全部客户")]),n("v-uni-view",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v(t._s(t.customsAnalysis.number)+"位")]),t.user.is_vip?n("v-uni-navigator",{staticClass:"addButton",attrs:{"hover-class":"none",url:"/pages/manage/custom/add/add?type=customs"}},[t._v("新增")]):n("v-uni-view",{staticClass:"addButton",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showNotice.apply(void 0,arguments)}}},[t._v("新增")])],1),n("v-uni-view",{staticStyle:{width:"30%"}},[n("v-uni-view",{staticClass:"itemC",staticStyle:{margin:"0 10rpx 10rpx 0"}},[n("v-uni-view",[t._v("应收款")]),n("v-uni-view",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v(t._s(t.customsAnalysis.debt))])],1),n("v-uni-view",{staticClass:"itemC"},[n("v-uni-view",[t._v("总记录")]),n("v-uni-view",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v(t._s(t.customsAnalysis.historyNum))])],1)],1),n("v-uni-view",{staticStyle:{width:"30%"}},[n("v-uni-view",{staticClass:"itemC",staticStyle:{margin:"0 10rpx 10rpx 0",background:"#ff8282",color:"#fff"}},[n("v-uni-view",[t._v("已发掘")]),n("v-uni-view",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v(t._s(t.customsAnalysis.usedNum))])],1),n("v-uni-view",{staticClass:"itemC",staticStyle:{background:"#ff8282",color:"#fff"}},[n("v-uni-view",[t._v("待发掘")]),n("v-uni-view",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v(t._s(t.customsAnalysis.noUsedNum))])],1)],1)],1)],1),n("v-uni-view",{staticClass:"Item",staticStyle:{"margin-top":"20rpx"}},[n("v-uni-view",{staticStyle:{color:"#3D3D3D","margin-bottom":"10rpx","font-size":"32rpx","font-weight":"bold"}},[t._v("供货商分析")]),n("v-uni-view",{staticClass:"display_flex_bet"},[n("v-uni-view",{staticClass:"itemB"},[n("v-uni-view",[t._v("全部供货商")]),n("v-uni-view",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v(t._s(t.producersAnalysis.number)+"位")]),t.user.is_vip?n("v-uni-navigator",{staticClass:"addButton",attrs:{"hover-class":"none",url:"/pages/manage/custom/add/add?type=producers"}},[t._v("新增")]):n("v-uni-view",{staticClass:"addButton",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showNotice.apply(void 0,arguments)}}},[t._v("新增")])],1),n("v-uni-view",{staticStyle:{width:"30%"}},[n("v-uni-view",{staticClass:"itemC",staticStyle:{margin:"0 10rpx 10rpx 0"}},[n("v-uni-view",[t._v("应还款")]),n("v-uni-view",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v(t._s(t.producersAnalysis.debt))])],1),n("v-uni-view",{staticClass:"itemC"},[n("v-uni-view",[t._v("总记录")]),n("v-uni-view",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v(t._s(t.producersAnalysis.historyNum))])],1)],1),n("v-uni-view",{staticStyle:{width:"30%"}},[n("v-uni-view",{staticClass:"itemC",staticStyle:{margin:"0 10rpx 10rpx 0",background:"#ff8282",color:"#fff"}},[n("v-uni-view",[t._v("已发掘")]),n("v-uni-view",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v(t._s(t.producersAnalysis.usedNum))])],1),n("v-uni-view",{staticClass:"itemC",staticStyle:{background:"#ff8282",color:"#fff"}},[n("v-uni-view",[t._v("待发掘")]),n("v-uni-view",{staticStyle:{"font-size":"30rpx","font-weight":"bold"}},[t._v(t._s(t.producersAnalysis.noUsedNum))])],1)],1)],1)],1)],1):n("v-uni-scroll-view",{staticStyle:{padding:"0 10rpx",height:"100vh",width:"calc(100% - 20rpx)"},attrs:{"scroll-y":"true"}},[n("v-uni-view",{staticStyle:{color:"#333","font-weight":"bold","margin-top":"60rpx","font-size":"32rpx"}},[t._v("员工暂时无法查看")])],1)},r=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}))},b2c6:function(t,e,n){"use strict";var i=n("b9ef"),o=n.n(i);o.a},b9ef:function(t,e,n){var i=n("5180");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("7e0e5aa0",i,!0,{sourceMap:!1,shadowMode:!1})},e223:function(t,e,n){"use strict";n.r(e);var i=n("b179"),o=n("8c8f");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("b2c6");var a,s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"3992d788",null,!1,i["a"],a);e["default"]=u.exports},eae5:function(t,e,n){"use strict";var i=n("ee27");n("7db0"),n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("9546")),r=uni.getStorageSync("uid"),a={getNoticeList:function(t){return new Promise((function(e,n){var i=o.default.Query("InfoCenter");i.order("-order");var a=i.equalTo("toUser","==",r),s=i.equalTo("fromUser","==","I75puc2O");i.or(a,s),t&&i.limit(t),i.find().then((function(t){e(t)}))}))}};e.default=a}}]);