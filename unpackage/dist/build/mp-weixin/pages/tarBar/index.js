(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tarBar/index"],{"0c20":function(e,o,n){"use strict";var t={"uni-search-bar":function(){return n.e("components/uni-search-bar/uni-search-bar").then(n.bind(null,"91ee"))}},i=function(){var e=this,o=e.$createElement;e._self._c},s=[];n.d(o,"b",(function(){return i})),n.d(o,"c",(function(){return s})),n.d(o,"a",(function(){return t}))},"2cd8":function(e,o,n){"use strict";n.r(o);var t=n("0c20"),i=n("6569");for(var s in i)"default"!==s&&function(e){n.d(o,e,(function(){return i[e]}))}(s);n("c4a6");var c,a=n("f0c5"),r=Object(a["a"])(i["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],c);o["default"]=r.exports},6569:function(e,o,n){"use strict";n.r(o);var t=n("f42e"),i=n.n(t);for(var s in t)"default"!==s&&function(e){n.d(o,e,(function(){return t[e]}))}(s);o["default"]=i.a},9191:function(e,o,n){"use strict";(function(e){n("d34b"),n("921b");t(n("66fd"));var o=t(n("2cd8"));function t(e){return e&&e.__esModule?e:{default:e}}e(o.default)}).call(this,n("543d")["createPage"])},c4a6:function(e,o,n){"use strict";var t=n("e778"),i=n.n(t);i.a},e778:function(e,o,n){},f42e:function(e,o,n){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;s(n("f287"));var t=s(n("2c7e")),i=s(n("4515"));function s(e){return e&&e.__esModule?e:{default:e}}var c,a,r=function(){n.e("components/uni-search-bar/uni-search-bar").then(function(){return resolve(n("91ee"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/modal").then(function(){return resolve(n("1f52"))}.bind(null,n)).catch(n.oe)},l={components:{modal:u,uniSearchBar:r},data:function(){return{user:e.getStorageSync("user"),othercurrent:"",noticeText:"",logsList:[],stockLists:[{name:"入库",icon:"icon-ruku",url:"/pages/common/goods-select/goods-select?type=entering&value=2"},{name:"出库",icon:"icon-chuku",url:"/pages/common/goods-select/goods-select?type=delivery&value=2"},{name:"产品调拨",icon:"icon-icon-transfer",url:"/pages/common/goods-select/goods-select?type=allocation"},{name:"库存盘点",icon:"icon-pandian",url:"/pages/common/goods-select/goods-select?type=counting"}],stockListsNew:[{name:"入库",icon:"icon-ruku",url:"/pages/commonNew/goods-select/goods-select?type=entering&value=2"},{name:"出库",icon:"icon-chuku",url:"/pages/commonNew/goods-select/goods-select?type=delivery&value=2"},{name:"产品调拨",icon:"icon-icon-transfer",url:"/pages/commonNew/goods-select/goods-select?type=allocation"},{name:"库存盘点",icon:"icon-pandian",url:"/pages/commonNew/goods-select/goods-select?type=counting"}],sellLists:[{name:"销售(旧)",notice:"支持所有产品",type:"Old",icon:"icon-navicon-xsckd",url:"/pages/common/goods-select/goods-select?type=delivery&value=1"},{name:"销售退货(旧)",notice:"支持所有产品",type:"Old",icon:"icon-tuihuodan",url:"/pages/common/goods-select/goods-select?type=returing&value=1"},{name:"销售订单(新)",notice:"适用新版产品",type:"New",icon:"icon-xiaoshoudingdan",url:"/pages/commonNew/goods-select/goods-select?type=delivery&value=5"},{name:"销售(新)",notice:"适用新版产品",type:"New",icon:"icon-navicon-xsckd",url:"/pages/commonNew/goods-select/goods-select?type=delivery&value=3"},{name:"销售退货(新)",notice:"适用新版产品",type:"New",icon:"icon-tuihuodan",url:"/pages/commonNew/goods-select/goods-select?type=entering&value=4"}],purchaseLists:[{name:"采购(旧)",type:"Old",notice:"支持所有产品",icon:"icon-office-supplies-shopping-list",url:"/pages/common/goods-select/goods-select?type=entering&value=1"},{name:"采购订单(新)",notice:"适用新版产品",type:"New",icon:"icon-navicon-cgdd",url:"/pages/commonNew/goods-select/goods-select?type=entering&value=5"},{name:"采购(新)",notice:"适用新版产品",type:"New",icon:"icon-office-supplies-shopping-list",url:"/pages/commonNew/goods-select/goods-select?type=entering&value=3"},{name:"采购退货",notice:"适用新版产品",type:"New",icon:"icon-tuihuo1",url:"/pages/commonNew/goods-select/goods-select?type=delivery&value=4"}],optionsLists:[{name:"产品添加",icon:"icon-wodechanpin",url:"/pages/manage/good_add/good_add?type=more"},{name:"扫码添加产品",icon:"icon-saoma",url:""},{name:"货损",icon:"icon-chanpin",url:"/pages/common/goods-select/goods-select?type=bad"},{name:"使用手册",icon:"icon-tishishuoming",url:"/pages/mine/manual/manual"}],get_reserve:0,out_reserve:0,sellNum:0,purchaseNum:0,total_reserve:0,total_money:0,total_products:0,openid:"",isUpdate:!1,canScanCode:!0,thisVision:"New"}},onLoad:function(o){if(c=this,a=e.getStorageSync("uid"),getApp().globalData.uid=e.getStorageSync("uid"),c.user){var n=c.user,t=i.default.Query("_User");t.get(a).then((function(o){var t=o,s=e.getStorageSync("identity");i.default.timestamp().then((function(o){console.log(o,o.datetime);var c=1e3*o.timestamp;if(t.vip_time<=c)if(1==s){var a=i.default.Query("_User");a.get(n.objectId).then((function(o){o.set("is_vip",!1),o.set("vip_time",0),o.save(),n.is_vip=!1,n.vip_time=0,e.setStorageSync("user",n)})).catch((function(e){}))}else n.is_vip=!1,n.vip_time=0,e.setStorageSync("user",n);else 1==s&&e.setStorageSync("user",t)}))})).catch((function(e){console.log(e)}))}},onShow:function(){e.getStorageSync("user")?(c.thisVision=e.getStorageSync("thisVision")||"New",c.user=e.getStorageSync("user"),t.default.query_setting(),2==c.user.identity&&c.user.rights&&(c.othercurrent=c.user.rights.othercurrent||[],-1==c.user.rights.current.indexOf("6")&&(c.stockLists=[],c.stockListsNew=[]),-1==c.user.rights.current.indexOf("0")&&(c.canScanCode=!1),-1==c.user.rights.current.indexOf("7")&&(c.purchaseLists=[]),-1==c.user.rights.current.indexOf("8")&&(c.sellLists=[])),t.default.getMineInfo().then((function(o){console.log(o),o.disabled&&(setTimeout((function(){e.showToast({title:"该账户已禁用",icon:"none"})}),1e3),e.reLaunch({url:"/pages/landing/landing"}))})),c.isUpdate=e.getStorageSync("isUpdate")||!1):(setTimeout((function(){e.showToast({title:"请先登录",icon:"none"})}),1e3),e.reLaunch({url:"/pages/landing/landing"})),e.removeStorageSync("now_product")},onShareAppMessage:function(e){return"button"===e.from&&console.log(e.target),{title:"库存表，欢迎您的加入",path:"/pages/tarBar/index"}},methods:{changeVision:function(){"New"==c.thisVision?(e.setStorageSync("thisVision","Old"),c.thisVision="Old",e.setNavigationBarTitle({title:"首页（旧版）"})):(e.setStorageSync("thisVision","New"),c.thisVision="New",e.setNavigationBarTitle({title:"首页（新版）"}))},hideModal:function(){c.isUpdate=!1,e.removeStorageSync("isUpdate")},otherFunctions:function(o,n){var t=e.getStorageSync("user");if(o)if(0==n){var s=i.default.Query("Goods");s.equalTo("userId","==",a),s.find().then((function(n){var i=n;t.is_vip||i.length<30?e.navigateTo({url:o}):e.showToast({title:"该功能只限会员使用",icon:"none"})}))}else e.navigateTo({url:o});else 1==n&&e.scanCode({success:function(o){var n=o.result;t.is_vip?e.navigateTo({url:"/pages/manage/good_add/good_add?id="+n+"&type=more"}):e.showToast({title:"该功能只限会员使用",icon:"none"})}})},gotoNotice:function(){var o=i.default.Query("_Article");o.get("P2MN0002").then((function(o){console.log(o),e.setStorageSync("webviewUrl",o.url),e.navigateTo({url:"/pages/webview/webview"})})).catch((function(e){console.log(e)}))},search:function(o){console.log(o);var n=o.value;e.navigateTo({url:"/pages/manage/goods/goods?search_text="+n})},scan_code:function(o){var n=[];0==o?n=["产品详情"]:1==o?n=["入库","出库","调拨","盘点"]:2==o?n=["销售","销售退货"]:3==o&&(n=["采购","采购退货"]),e.showActionSheet({itemList:n,success:function(e){c.scan(e.tapIndex,n)},fail:function(e){console.log(e.errMsg)}})},scan:function(o,n){"New"==c.thisVision?e.navigateTo({url:"/pages/commonNew/keepScan/keepScan?type="+n[o]}):e.scanCode({success:function(e){console.log(e);var t=e.result,i=t.split("-"),s=i[2];c.returnUrl(n,o,i,s)},fail:function(o){e.showToast({title:"未识别到条形码",icon:"none"})}})},returnUrl:function(o,n,t,i){"出库"==o[n]?e.navigateTo({url:"/pages/common/goods_out/goods_out?id="+t[0]+"&type="+t[1]+"&value=2"}):"销售"==o[n]?e.navigateTo({url:"/pages/common/goods_out/goods_out?id="+t[0]+"&type="+t[1]+"&value=1"}):"销售退货"==o[n]?e.navigateTo({url:"/pages/common/good_return/good_return?id="+t[0]+"&type="+t[1]+"&type=return&value=1"}):"采购退货"==o[n]?e.navigateTo({url:"/pages/common/good_return/good_return?id="+t[0]+"&type="+t[1]+"&type=return&value=1"}):"入库"==o[n]?e.navigateTo({url:"/pages/common/good_confrim/good_confrim?id="+t[0]+"&type="+t[1]+"&value=2"}):"采购"==o[n]?e.navigateTo({url:"/pages/common/good_confrim/good_confrim?id="+t[0]+"&type="+t[1]+"&value=1"}):"盘点"==o[n]?e.navigateTo({url:"/pages/common/good_count/good_count?id="+t[0]+"&type="+t[1]+"&value=2"}):"产品详情"==o[n]&&("old"==i?e.navigateTo({url:"/pages/manage/good_det/good_det?id="+t[0]+"&type="+t[1]}):e.navigateTo({url:"/pages/manage/good_det/Ngood_det?id="+t[0]+"&type=true"})),!1}}};o.default=l}).call(this,n("543d")["default"])}},[["9191","common/runtime","common/vendor"]]]);