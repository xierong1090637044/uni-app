(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/production/matterAdd/matterAdd"],{"367a":function(e,t,o){"use strict";o.r(t);var n=o("7217"),a=o("70b1");for(var c in a)"default"!==c&&function(e){o.d(t,e,function(){return a[e]})}(c);o("9c53");var r=o("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},"55ed":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(o("7fd5")),a=c(o("9546"));function c(e){return e&&e.__esModule?e:{default:e}}var r,s,i=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"4d52"))},u=function(){return o.e("components/uni-collapse/uni-collapse").then(o.bind(null,"b4ab"))},d=function(){return o.e("components/uni-collapse-item/uni-collapse-item").then(o.bind(null,"7c20"))},l="",g="",f={components:{uniCollapse:u,uniCollapseItem:d,faIcon:i},data:function(){return{goodsName:"",costPrice:"",retailPrice:"",packageContent:"",packingUnit:"",packingModel:"",warning_num:"",producer:"",regNumber:"",position:"",product_info:"",productCode:"",category:"",goodsIcon:"",stocks:[],producttime:"",nousetime:""}},onLoad:function(t){r=this,s=e.getStorageSync("uid"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),e.removeStorageSync("is_add")},onShow:function(){if(e.getStorageSync("warehouse")&&(r.stocks=e.getStorageSync("warehouse")),e.getStorageSync("category"))if(r.category=e.getStorageSync("category"),2==r.category.type){var t=a.default.Pointer("M_frist_class");l=t.set(r.category.parent.objectId);var o=a.default.Pointer("M_second_class");g=o.set(r.category.objectId),console.log(r.category.parent.objectId,r.category.objectId)}else{var n=a.default.Pointer("M_frist_class");l=n.set(r.category.objectId)}},onUnload:function(){"",l="",g="",n.default.handleData()},methods:{upload_image:function(){e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){console.log(e);var t,o=Date.parse(new Date),n=e.tempFilePaths,c=!0,s=!1,i=void 0;try{for(var u,d=n[Symbol.iterator]();!(c=(u=d.next()).done);c=!0){var l=u.value;t=a.default.File(o+".jpg",l)}}catch(g){s=!0,i=g}finally{try{c||null==d.return||d.return()}finally{if(s)throw i}}t.save().then(function(e){r.goodsIcon=e[0].url})}})},change_reserve:function(t,o){r.stocks[o].reserve=t.detail.value,e.setStorageSync("warehouse",r.stocks)},change_warningnum:function(t,o){r.stocks[o].warning_num=t.detail.value,e.setStorageSync("warehouse",r.stocks)},remove_stock:function(t){r.stocks.splice(t,1),e.setStorageSync("warehouse",r.stocks)},bindDateChange:function(e){r.nousetime=e.target.value},formSubmit:function(t){console.log(t.detail.value);var o=t.detail.value;""==o.goodsName?e.showToast({title:"请输入物料名称",icon:"none"}):r.upload_good(o)},upload_good:function(t){e.showLoading({title:"上传中..."});var o=a.default.Query("Matters");o.equalTo("userId","==",s),o.equalTo("status","!=",-1),o.equalTo("goodsName","==",t.goodsName),o.find().then(function(o){o.length>=1?e.showToast({title:"你的库存中已存在此物料",icon:"none"}):r.add_good(t,"add")})},add_good:function(t,o){var c=a.default.Pointer("_User"),i=c.set(s);if(0==r.stocks.length)e.showToast({title:"请选择仓库",icon:"none"});else{var u=function(o){var c=r.stocks[o].stock.objectId,s=a.default.Pointer("stocks"),u=s.set(c),d=a.default.Query("Matters");d.set("goodsIcon",r.goodsIcon),d.set("goodsName",t.goodsName),d.set("costPrice",t.costPrice?t.costPrice:"0"),d.set("retailPrice",t.retailPrice?t.retailPrice:"0"),d.set("regNumber",t.regNumber),d.set("reserve",Number(r.stocks[o].reserve)),d.set("stocks",u),d.set("product_info",t.product_info),d.set("packingUnit",t.packingUnit),d.set("packageContent",t.packageContent),d.set("packingModel",t.packingModel),d.set("warning_num",Number(r.stocks[o].warning_num)),d.set("stocktype",Number(r.stocks[o].warning_num)>=Number(r.stocks[o].reserve)?0:1),d.set("order",Number(o)),o>0&&d.set("accessory",!0),e.getStorageSync("category")&&(1==r.category.type?d.set("fristClass",l):d.set("secondClass",g)),d.set("userId",i),d.set("id",e.getStorageSync("now_product")?e.getStorageSync("now_product").objectId:""),d.save().then(function(a){e.hideLoading(),o==r.stocks.length-1&&n.default.log(e.getStorageSync("user").nickName+"增加了物料'"+t.goodsName+"'",7,a.objectId),e.setStorageSync("is_add",!0),e.showToast({title:"上传成功"})}).catch(function(e){console.log(e)})};for(var d in r.stocks)u(d)}},handledata:function(){r.goodsName="",r.costPrice="",r.retailPrice="",r.packageContent="",r.packingUnit="",r.warning_num="",r.producer="",r.regNumber="",r.position="",r.product_info="",r.productCode="",r.category="",r.reserve=0,r.goodsIcon="",r.stocks="",r.stock_name="",r.producttime="",r.nousetime=""}}};t.default=f}).call(this,o("543d")["default"])},"70b1":function(e,t,o){"use strict";o.r(t);var n=o("55ed"),a=o.n(n);for(var c in n)"default"!==c&&function(e){o.d(t,e,function(){return n[e]})}(c);t["default"]=a.a},7217:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.stocks=""})},a=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})},9361:function(e,t,o){"use strict";(function(e){o("d510"),o("921b");n(o("66fd"));var t=n(o("367a"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},"9c53":function(e,t,o){"use strict";var n=o("b6bd"),a=o.n(n);a.a},b6bd:function(e,t,o){}},[["9361","common/runtime","common/vendor"]]]);