(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/EnteringHistory/EnteringHistory"],{"0702":function(e,t,a){},"28da":function(e,t,a){"use strict";var n=a("0702"),o=a.n(n);o.a},3102:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){t.stopPropagation(),e.showOptions=!1})},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},"39c0":function(e,t,a){"use strict";a.r(t);var n=a("f0a0"),o=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t["default"]=o.a},"641b":function(e,t,a){"use strict";a.r(t);var n=a("3102"),o=a("39c0");for(var i in o)"default"!==i&&function(e){a.d(t,e,function(){return o[e]})}(i);a("28da");var r=a("2877"),c=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=c.exports},"973c":function(e,t,a){"use strict";(function(e){a("d510"),a("921b");n(a("66fd"));var t=n(a("641b"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("543d")["createPage"])},f0a0:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("9546")),o=i(a("7fd5"));function i(e){return e&&e.__esModule?e:{default:e}}var r,c,u,d=function(){return a.e("components/uni-nav-bar/uni-nav-bar").then(a.bind(null,"96bd"))},s=function(){return a.e("components/uni-icon/uni-icon").then(a.bind(null,"3628"))},l=function(){return a.e("components/uni-pagination/uni-pagination").then(a.bind(null,"0d6a"))},f=30,g=1,p={components:{uniPagination:l,uniNavBar:d,uniIcon:s},data:function(){return{stock:"",now_day:o.default.getDay(0,!1),end_day:o.default.getDay(1,!1),option_now_day:o.default.getDay(0,!1),option_end_day:o.default.getDay(1,!1),max_day:o.default.getDay(0,!1),page_num:1,checked_option:"all",list:[],showOptions:!1,is_checked:!1,data_change:!1,goodsName:"",staff:"",operaterTypeDesc:""}},onLoad:function(t){c=this,e.removeStorageSync("charge"),e.removeStorageSync("is_option"),u=Number(t.type),r=e.getStorageSync("uid"),1==u?(c.operaterTypeDesc="操作类型",e.setNavigationBarTitle({title:"入库详情"})):-1==u?(c.operaterTypeDesc="操作类型",e.setNavigationBarTitle({title:"出库详情"})):2==u?e.setNavigationBarTitle({title:"退货详情"}):3==u&&e.setNavigationBarTitle({title:"盘点详情"}),c.get_list()},onShow:function(){e.getStorageSync("charge")&&(c.staff=e.getStorageSync("charge")),e.getStorageSync("warehouse")&&(c.stock=e.getStorageSync("warehouse")[0].stock),e.getStorageSync("is_option")&&c.get_list()},onUnload:function(){f=30,g=1},methods:{select_operatertype:function(){e.showActionSheet({itemList:1==u?["入库","采购"]:["出库","销售"],success:function(e){1==u?0==e.tapIndex?c.operaterTypeDesc="入库":c.operaterTypeDesc="采购":-1==u&&(0==e.tapIndex?c.operaterTypeDesc="出库":c.operaterTypeDesc="销售"),c.get_list()},fail:function(e){console.log(e.errMsg)}})},bindDateChange1:function(e){c.data_change=!0,c.now_day=e.detail.value,c.option_now_day=e.detail.value},bindDateChange2:function(e){c.data_change=!0,c.end_day=e.detail.value,c.option_end_day=e.detail.value},selectd:function(e){"one"==e?(c.now_day=o.default.getDay(0,!1),c.end_day=o.default.getDay(1,!1)):"two"==e?(c.now_day=o.default.getDay(-1,!1),c.end_day=o.default.getDay(0,!1)):"three"==e?(c.now_day=o.default.getDay(-7,!1),c.end_day=o.default.getDay(1,!1)):"four"==e?(c.now_day=o.default.getDay(-30,!1),c.end_day=o.default.getDay(1,!1)):(c.now_day="",c.end_day=""),g=1,c.page_num=1,c.checked_option=e,c.get_list()},shaixuan_click:function(){c.showOptions=!0},option_reset:function(){e.removeStorageSync("charge"),e.removeStorageSync("warehouse"),c.stock="",c.goodsName="",c.staff="",c.data_change=!1,c.is_checked=!1,c.showOptions=!1,c.get_list()},option_confrim:function(){c.is_checked=!0,c.showOptions=!1,c.get_list()},change_page:function(e){g=e.current,c.get_list()},get_list:function(){var t=this;e.showLoading({title:"加载中..."});var a=n.default.Query("order_opreations");a.equalTo("master","==",r),a.equalTo("type","==",u),e.getStorageSync("charge")&&a.equalTo("opreater","==",c.staff.userId.objectId),a.equalTo("goodsName","==",{$regex:c.goodsName+".*"}),c.stock&&a.equalTo("stock","==",c.stock.objectId),"all"!=c.checked_option?(a.equalTo("createdAt",">=",c.now_day+" 00:00:00"),a.equalTo("createdAt","<=",c.end_day+" 00:00:00")):1==c.is_checked&&1==c.data_change&&(a.equalTo("createdAt",">=",c.option_now_day+" 00:00:00"),a.equalTo("createdAt","<=",c.option_end_day+" 00:00:00")),"采购"==c.operaterTypeDesc||"出售"==c.operaterTypeDesc?a.equalTo("extra_type","==",1):"入库"!=c.operaterTypeDesc&&"出库"!=c.operaterTypeDesc||a.equalTo("extra_type","==",2),a.limit(f),a.skip(f*(g-1)),a.include("opreater","stock"),a.order("-createdAt"),a.find().then(function(e){t.list=e,wx.hideLoading()})},get_detail:function(e){wx.navigateTo({url:"detail/detail?id="+e})}}};t.default=p}).call(this,a("543d")["default"])}},[["973c","common/runtime","common/vendor"]]]);