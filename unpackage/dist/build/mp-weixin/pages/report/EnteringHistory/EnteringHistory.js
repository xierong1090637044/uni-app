(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/EnteringHistory/EnteringHistory"],{"45c3":function(e,t,n){"use strict";(function(e){n("d34b"),n("921b");a(n("66fd"));var t=a(n("8493"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"4df0":function(e,t,n){"use strict";var a={"uni-nav-bar":function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"8157"))},"uni-pagination":function(){return n.e("components/uni-pagination/uni-pagination").then(n.bind(null,"1e7f"))}},o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){t.stopPropagation(),e.showOptions=!1})},i=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}))},6965:function(e,t,n){"use strict";var a=n("ac92"),o=n.n(a);o.a},8493:function(e,t,n){"use strict";n.r(t);var a=n("4df0"),o=n("f8b8");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("6965");var r,c=n("f0c5"),u=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);t["default"]=u.exports},"987c":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("4515")),o=i(n("f287"));function i(e){return e&&e.__esModule?e:{default:e}}var r,c,u,d,l=function(){n.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(n("8157"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("components/uni-icon/uni-icon").then(function(){return resolve(n("5920"))}.bind(null,n)).catch(n.oe)},f=function(){n.e("components/uni-pagination/uni-pagination").then(function(){return resolve(n("1e7f"))}.bind(null,n)).catch(n.oe)},g=30,p=1,y={components:{uniPagination:f,uniNavBar:l,uniIcon:s},data:function(){return{stock:"",now_day:o.default.getDay(0,!1),end_day:o.default.getDay(1,!1),option_now_day:o.default.getDay(0,!1),option_end_day:o.default.getDay(1,!1),max_day:o.default.getDay(0,!1),page_num:1,checked_option:"all",list:[],showOptions:!1,is_checked:!1,data_change:!1,goodsName:"",staff:"",beizhu:"",operaterTypeDesc:""}},onLoad:function(t){c=this,e.removeStorageSync("charge"),e.removeStorageSync("is_option"),e.removeStorageSync("warehouse"),u=Number(t.type),d=Number(t.extra_type),r=e.getStorageSync("uid"),1==u?(c.operaterTypeDesc="全部",e.setNavigationBarTitle({title:"入库记录"})):-1==u&&(c.operaterTypeDesc="全部",e.setNavigationBarTitle({title:"出库记录"})),c.get_list()},onShow:function(){e.getStorageSync("charge")&&(c.staff=e.getStorageSync("charge")),e.getStorageSync("warehouse")&&(c.stock=e.getStorageSync("warehouse")[0].stock),e.getStorageSync("is_option")&&c.get_list()},onUnload:function(){g=30,p=1},methods:{select_operatertype:function(){e.showActionSheet({itemList:1==u?["全部","入库","采购","销售退货"]:["全部","出库","销售","采购退货"],success:function(e){1==u?0==e.tapIndex?(c.operaterTypeDesc="全部",d=""):1==e.tapIndex?(c.operaterTypeDesc="入库",d=2):2==e.tapIndex?(c.operaterTypeDesc="采购",d=1):(c.operaterTypeDesc="销售退货",d=4):-1==u&&(0==e.tapIndex?(c.operaterTypeDesc="全部",d=""):1==e.tapIndex?(c.operaterTypeDesc="出库",d=2):2==e.tapIndex?(c.operaterTypeDesc="销售",d=1):(c.operaterTypeDesc="采购退货",d=4)),c.get_list()},fail:function(e){console.log(e.errMsg)}})},bindDateChange1:function(e){c.data_change=!0,c.now_day=e.detail.value,c.option_now_day=e.detail.value},bindDateChange2:function(e){c.data_change=!0,c.end_day=e.detail.value,c.option_end_day=e.detail.value},selectd:function(e){"one"==e?(c.now_day=o.default.getDay(0,!1),c.end_day=o.default.getDay(1,!1)):"two"==e?(c.now_day=o.default.getDay(-1,!1),c.end_day=o.default.getDay(0,!1)):"three"==e?(c.now_day=o.default.getDay(-7,!1),c.end_day=o.default.getDay(1,!1)):"four"==e?(c.now_day=o.default.getDay(-30,!1),c.end_day=o.default.getDay(1,!1)):(c.now_day="",c.end_day=""),p=1,c.page_num=1,c.checked_option=e,c.get_list()},shaixuan_click:function(){c.showOptions=!0},option_reset:function(){e.removeStorageSync("charge"),e.removeStorageSync("warehouse"),c.stock="",c.goodsName="",c.staff="",c.data_change=!1,c.is_checked=!1,c.showOptions=!1,c.get_list()},option_confrim:function(){c.is_checked=!0,c.showOptions=!1,c.get_list()},change_page:function(e){p=e.current,c.get_list()},get_list:function(){var t=this;e.showLoading({title:"加载中..."});var n=a.default.Query("order_opreations");n.equalTo("master","==",r),n.equalTo("type","==",u),d&&n.equalTo("extra_type","==",d),e.getStorageSync("charge")&&n.equalTo("opreater","==",c.staff.objectId),n.equalTo("goodsName","==",{$regex:c.goodsName+".*"}),c.stock&&n.equalTo("stockIds","==",{$regex:c.stock.objectId+".*"}),c.beizhu&&n.equalTo("beizhu","==",{$regex:c.beizhu+".*"}),"all"!=c.checked_option?(n.equalTo("createdAt",">=",c.now_day+" 00:00:00"),n.equalTo("createdAt","<=",c.end_day+" 00:00:00")):1==c.is_checked&&1==c.data_change&&(n.equalTo("createdAt",">=",c.option_now_day+" 00:00:00"),n.equalTo("createdAt","<=",c.option_end_day+" 00:00:00")),n.limit(g),n.skip(g*(p-1)),n.include("opreater","stock"),n.order("-createdAt"),n.find().then((function(e){t.list=e,wx.hideLoading()}))},get_detail:function(t){5==t.extra_type?wx.navigateTo({url:"productDet/productDet?id="+t.objectId}):4==t.extra_type?e.navigateTo({url:"returnDetail/returnDetail?id="+t.objectId}):"new"==t.recordType?-3==t.type||-4==t.type?wx.navigateTo({url:"SellDetail/SellLaterDetail?id="+t.objectId}):wx.navigateTo({url:"SellDetail/SellDetail?id="+t.objectId}):wx.navigateTo({url:"detail/detail?id="+t.objectId})}}};t.default=y}).call(this,n("543d")["default"])},ac92:function(e,t,n){},f8b8:function(e,t,n){"use strict";n.r(t);var a=n("987c"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=o.a}},[["45c3","common/runtime","common/vendor"]]]);