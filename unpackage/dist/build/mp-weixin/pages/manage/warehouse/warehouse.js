(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/warehouse/warehouse"],{"1f04":function(t,n,e){"use strict";(function(t){e("d510"),e("921b");o(e("66fd"));var n=o(e("5958"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"259e":function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o})},"3ae3":function(t,n,e){},5958:function(t,n,e){"use strict";e.r(n);var o=e("259e"),a=e("9462");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("f839");var r,c=e("f0c5"),u=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);n["default"]=u.exports},"7c59":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("9546")),a=i(e("8d57"));function i(t){return t&&t.__esModule?t:{default:t}}var r,c,u,l=function(){return e.e("components/uni-segmented-control/uni-segmented-control").then(e.bind(null,"c952"))},s=function(){return e.e("components/kilvn-fa-icon/fa-icon").then(e.bind(null,"4d52"))},d=function(){return e.e("components/Loading/index").then(e.bind(null,"120a"))},f=function(){return e.e("components/uni-nav-bar/uni-nav-bar").then(e.bind(null,"96bd"))},g=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"3628"))},v={components:{uniSegmentedControl:l,faIcon:s,loading:d,uniNavBar:f,uniIcon:g},data:function(){return{is_choose:!1,loading:!0,stocks:null,items:["已启用","未启用"],current:0,disabled:!1,type:""}},onLoad:function(n){r=this,u=t.getStorageSync("uid"),console.log(n),"choose"!=n.type&&"out_choose"!=n.type&&"choose_more"!=n.type||(r.is_choose=!0,r.type=n.type)},onShow:function(){r.getstock_list()},onUnload:function(){c=""},methods:{priviewImg:function(n){t.previewImage({current:n,urls:[n]})},onClickItem:function(t){this.current!==t&&(this.current=t,0==t?(r.disabled=!1,r.getstock_list()):1==t&&(r.disabled=!0,r.getstock_list()))},goto_detail:function(n){t.setStorageSync("stock",n),t.navigateTo({url:"detail/detail"})},select_this:function(n){var e;e="choose_more"==r.type&&t.getStorageSync("warehouse")||[];var o={};o.stock=n,o.reserve=0,o.warning_num=0,-1==JSON.stringify(e).indexOf(JSON.stringify(o))?(e.push(o),"out_choose"==r.type?(t.setStorageSync("out_warehouse",e),t.navigateBack({delta:1})):(t.setStorageSync("warehouse",e),t.navigateBack({delta:1}))):t.showToast({title:"已选择此仓库",icon:"none"})},goto_add:function(){var n=t.getStorageSync("user"),e=t.getStorageSync("identity");n.is_vip||r.stocks.length<2?t.navigateTo({url:"add/add"}):t.showModal({title:"提示",content:"非会员最多上传2个仓库",confirmText:"充值会员",success:function(n){n.confirm?1==e?t.navigateTo({url:"/pages/mine/vip/vip"}):t.showToast({title:"员工不能充值",icon:"none"}):n.cancel&&console.log("用户点击取消")}})},input_confirm:function(t){c=t.detail.value,r.getstock_list()},getstock_list:function(){var n=o.default.Query("stocks");n.order("-num"),n.include("charge","shop","Ncharge"),n.equalTo("parent","==",u),n.equalTo("disabled","!=",!r.disabled),c&&n.equalTo("stock_name","==",{$regex:c+".*"}),n.limit(500),n.find().then(function(n){r.loading=!1;var e=n,o=[],i=!0,c=!1,u=void 0;try{for(var l,s=e[Symbol.iterator]();!(i=(l=s.next()).done);i=!0){var d=l.value,f={};f.name=d.stock_name,f.objectId=d.objectId,o.push(f)}}catch(g){c=!0,u=g}finally{try{i||null==s.return||s.return()}finally{if(c)throw u}}t.setStorageSync("_warehouse",o),t.getStorage({key:"identity",success:function(t){"2"==t.data?a.default.get_satffAuth().then(function(t){console.log(t);var n=[],o=!0,a=!1,i=void 0;try{for(var c,u=t.stocks[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var l=c.value,s=!0,d=!1,f=void 0;try{for(var v,h=e[Symbol.iterator]();!(s=(v=h.next()).done);s=!0){var y=v.value;y.objectId==l&&n.push(y)}}catch(g){d=!0,f=g}finally{try{s||null==h.return||h.return()}finally{if(d)throw f}}}}catch(g){a=!0,i=g}finally{try{o||null==u.return||u.return()}finally{if(a)throw i}}r.stocks=n}):"1"==t.data&&(r.stocks=e)}})})}}};n.default=v}).call(this,e("543d")["default"])},9462:function(t,n,e){"use strict";e.r(n);var o=e("7c59"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},f839:function(t,n,e){"use strict";var o=e("3ae3"),a=e.n(o);a.a}},[["1f04","common/runtime","common/vendor"]]]);