(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/report/EnteringHistory/SellDetail/SellLaterDetail"],{"1d66":function(e,t,o){},"26df":function(e,t,o){"use strict";(function(e){o("a961"),o("921b");n(o("66fd"));var t=n(o("5caf"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},"5caf":function(e,t,o){"use strict";o.r(t);var n=o("bc81"),i=o("9884");for(var a in i)"default"!==a&&function(e){o.d(t,e,(function(){return i[e]}))}(a);o("fb7c");var r,c=o("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);t["default"]=s.exports},"97e4":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(o("c74b")),i=a(o("b410"));a(o("df06"));function a(e){return e&&e.__esModule?e:{default:e}}var r,c,s=function(){o.e("components/Loading/index").then(function(){return resolve(o("524a"))}.bind(null,o)).catch(o.oe)},u=function(){o.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(o("b92d"))}.bind(null,o)).catch(o.oe)},l={components:{loading:s,uniNavBar:u},data:function(){return{user:e.getStorageSync("user"),identity:e.getStorageSync("identity"),othercurrent:"",bills:[],loading:!0,products:[],detail:"",stock:""}},onLoad:function(t){console.log(t),r=this,c=t.id,e.getStorageSync("uid"),r.user.rights&&r.user.rights.othercurrent&&(r.othercurrent=r.user.rights.othercurrent)},onShow:function(){r.stock=e.getStorageSync("warehouse")?e.getStorageSync("warehouse")[0].stock:"",r.getdetail(c)},onShareAppMessage:function(e){return"button"===e.from&&console.log(e.target),{title:"库存表-操作单详情",path:"/pages/report/EnteringHistory/SellDetail/SellLaterDetail?id="+c}},methods:{gotoexpressDet:function(){r.user.is_vip?e.navigateTo({url:"../expressDet/expressDet?number="+r.detail.expressNum}):e.showToast({title:"您还不是会员，无法使用",icon:"none"})},priview:function(t){e.previewImage({current:t,urls:r.detail.Images})},show_options:function(){var t=["打印"];-3!=r.detail.type&&-4!=r.detail.type||(-1!=r.othercurrent.indexOf("1")||1==r.identity?(t=-3==r.detail.type?["生成销售订单","删除"]:["生成采购订单","删除"],e.showActionSheet({itemList:t,success:function(t){0==t.tapIndex?(-4==r.detail.type?r.detail.status?e.showToast({title:"该笔订单已生成采购单",icon:"none"}):r.confrimOrder():-3==r.detail.type&&(r.detail.status?e.showToast({title:"该笔订单已生成销售单",icon:"none"}):r.confrimOrder()),e.setStorageSync("is_option",!0)):1==t.tapIndex?(r.detail.status?e.showToast({title:-4==r.detail.type?"该笔订单已生成采购单":"该笔订单已生成销售单",icon:"none"}):r.revoke(),e.setStorageSync("is_option",!0)):2==t.tapIndex&&i.default.print_operations(r.detail,r.products)},fail:function(e){console.log(e.errMsg)}})):e.showToast({title:"暂无操作权限",icon:"none"}))},getdetail:function(e){var t=n.default.Query("order_opreations");t.include("opreater","custom","producer","stock","account"),t.get(e).then((function(e){console.log(e),r.detail=e,r.products=e.opreatGood,r.bills=e.bills,r.loading=!1})).catch((function(e){console.log(e)}))},revoke:function(){wx.showModal({title:"提示",content:"数据撤销后不可恢复，请谨慎撤销！",success:function(t){if(t.confirm){e.showLoading({title:"撤销中..."});var o=n.default.Query("order_opreations");o.destroy(r.detail.objectId).then((function(t){e.hideLoading(),e.navigateBack({delta:1}),setTimeout((function(){e.showToast({title:"删除成功"})}),1e3)})).catch((function(e){console.log(e)}))}}})},confrimOrder:function(){-3==r.detail.type?wx.showModal({title:"提示",content:"是否生成销售单！",success:function(t){t.confirm&&(e.setStorageSync("custom",r.detail.custom),e.setStorageSync("products",r.detail.opreatGood),e.setStorageSync("otherMoney",r.detail.otherMoney),e.setStorageSync("haveGetMoney",r.detail.haveGetMoney),e.navigateTo({url:"/pages/commonNew/goods_out/gooSellNew/gooSellNew?id="+r.detail.objectId}))}}):-4==r.detail.type&&wx.showModal({title:"提示",content:"是否生成采购单！",success:function(t){t.confirm&&(e.setStorageSync("producer",r.detail.producer),e.setStorageSync("products",r.detail.opreatGood),e.setStorageSync("otherMoney",r.detail.otherMoney),e.setStorageSync("haveGetMoney",r.detail.haveGetMoney),e.navigateTo({url:"/pages/commonNew/good_confrim/goodPurchaseNew/goodPurchaseNew?id="+r.detail.objectId}))}})}}};t.default=l}).call(this,o("543d")["default"])},9884:function(e,t,o){"use strict";o.r(t);var n=o("97e4"),i=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},bc81:function(e,t,o){"use strict";var n={"uni-nav-bar":()=>o.e("components/uni-nav-bar/uni-nav-bar").then(o.bind(null,"b92d"))},i=function(){var e=this,t=e.$createElement,o=(e._self._c,e.detail.setDay.iso.split(" ")),n=e.detail.giveDay.iso.split(" "),i=e.detail.setDay.iso.split(" "),a=e.detail.giveDay.iso.split(" ");e.$mp.data=Object.assign({},{$root:{g0:o,g1:n,g2:i,g3:a}})},a=[];o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return n}))},fb7c:function(e,t,o){"use strict";var n=o("1d66"),i=o.n(n);i.a}},[["26df","common/runtime","common/vendor"]]]);