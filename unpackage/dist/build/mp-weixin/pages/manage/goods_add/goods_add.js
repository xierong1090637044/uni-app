(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/goods_add/goods_add"],{"0f21":function(e,t,o){"use strict";o.r(t);var n=o("680a"),a=o.n(n);for(var c in n)"default"!==c&&function(e){o.d(t,e,function(){return n[e]})}(c);t["default"]=a.a},"2f28":function(e,t,o){"use strict";var n=o("b80b"),a=o.n(n);a.a},"53f2":function(e,t,o){"use strict";(function(e){o("d510"),o("921b");n(o("66fd"));var t=n(o("a2b2"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},"680a":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(o("7fd5")),a=c(o("9546"));function c(e){return e&&e.__esModule?e:{default:e}}var s,r,u=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"4d52"))},i=function(){return o.e("components/uni-collapse/uni-collapse").then(o.bind(null,"b4ab"))},d=function(){return o.e("components/uni-collapse-item/uni-collapse-item").then(o.bind(null,"7c20"))},l="",g="",f={components:{uniCollapse:i,uniCollapseItem:d,faIcon:u},data:function(){return{goodsName:"",costPrice:"",retailPrice:"",packageContent:"",packingUnit:"",warning_num:"",producer:"",regNumber:"",position:"",product_info:"",productCode:"",category:"",goodsIcon:"",stocks:[],producttime:"",nousetime:"",product_state:!1}},onLoad:function(t){s=this,r=e.getStorageSync("uid"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),e.removeStorageSync("is_add")},onShow:function(){if(e.getStorageSync("warehouse")&&(s.stocks=e.getStorageSync("warehouse")),e.getStorageSync("category"))if(s.category=e.getStorageSync("category"),2==s.category.type){var t=a.default.Pointer("class_user");l=t.set(s.category.parent.objectId);var o=a.default.Pointer("second_class");g=o.set(s.category.objectId),console.log(s.category.parent.objectId,s.category.objectId)}else{var n=a.default.Pointer("class_user");l=n.set(s.category.objectId)}},onUnload:function(){"",l="",g="",n.default.handleData()},methods:{upload_image:function(){e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){console.log(e);var t,o=Date.parse(new Date),n=e.tempFilePaths,c=!0,r=!1,u=void 0;try{for(var i,d=n[Symbol.iterator]();!(c=(i=d.next()).done);c=!0){var l=i.value;t=a.default.File(o+".jpg",l)}}catch(g){r=!0,u=g}finally{try{c||null==d.return||d.return()}finally{if(r)throw u}}t.save().then(function(e){s.goodsIcon=e[0].url})}})},change_reserve:function(t,o){s.stocks[o].reserve=t.detail.value,e.setStorageSync("warehouse",s.stocks)},change_warningnum:function(t,o){s.stocks[o].warning_num=t.detail.value,e.setStorageSync("warehouse",s.stocks)},remove_stock:function(t){s.stocks.splice(t,1),e.setStorageSync("warehouse",s.stocks)},bindDateChange:function(e){s.nousetime=e.target.value},formSubmit:function(t){console.log(t.detail.value);var o=t.detail.value;""==o.goodsName?e.showToast({title:"请输入产品名称",icon:"none"}):s.upload_good(o)},upload_good:function(t){e.showLoading({title:"上传中..."});var o=a.default.Query("Goods");o.equalTo("userId","==",r),o.equalTo("status","!=",-1),o.equalTo("goodsName","==",t.goodsName),o.find().then(function(o){o.length>=1?e.showToast({title:"你的库存中已存在此产品",icon:"none"}):s.add_good(t,"add")})},add_good:function(t,o){var c=a.default.Pointer("_User"),u=c.set(r),i=function(o){var c=s.stocks[o].stock.objectId,r=a.default.Pointer("stocks"),i=r.set(c),d=a.default.Query("Goods");if(d.set("goodsIcon",s.goodsIcon),d.set("goodsName",t.goodsName),d.set("costPrice",t.costPrice?t.costPrice:"0"),d.set("retailPrice",t.retailPrice?t.retailPrice:"0"),s.nousetime){var f=s.nousetime.replace(new RegExp("-","g"),"/");f=new Date(f).getTime(),d.set("nousetime",f)}d.set("regNumber",t.regNumber),d.set("reserve",Number(s.stocks[o].reserve)),d.set("productCode",t.productCode),d.set("stocks",i),d.set("product_info",t.product_info),d.set("producer",t.producer),d.set("packingUnit",t.packingUnit),d.set("packageContent",t.packageContent),d.set("position",t.position),d.set("warning_num",Number(s.stocks[o].warning_num)),d.set("stocktype",Number(s.stocks[o].warning_num)>=Number(s.stocks[o].reserve)?0:1),d.set("order",Number(o)),o>0&&d.set("accessory",!0),d.set("product_state",t.product_state),e.getStorageSync("category")&&(1==s.category.type?d.set("goodsClass",l):d.set("second_class",g)),d.set("userId",u),d.set("id",e.getStorageSync("now_product")?e.getStorageSync("now_product").objectId:""),d.save().then(function(a){e.hideLoading(),o==s.stocks.length-1&&n.default.log(e.getStorageSync("user").nickName+"增加了产品'"+t.goodsName+"'",6,a.objectId),e.setStorageSync("is_add",!0),e.showToast({title:"上传成功"})}).catch(function(e){console.log(e)})};for(var d in s.stocks)i(d)},handledata:function(){s.goodsName="",s.costPrice="",s.retailPrice="",s.packageContent="",s.packingUnit="",s.warning_num="",s.producer="",s.regNumber="",s.position="",s.product_info="",s.productCode="",s.category="",s.reserve=0,s.goodsIcon="",s.stocks="",s.stock_name="",s.producttime="",s.nousetime=""}}};t.default=f}).call(this,o("543d")["default"])},a2b2:function(e,t,o){"use strict";o.r(t);var n=o("d72c"),a=o("0f21");for(var c in a)"default"!==c&&function(e){o.d(t,e,function(){return a[e]})}(c);o("2f28");var s=o("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=r.exports},b80b:function(e,t,o){},d72c:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.stocks=""})},a=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})}},[["53f2","common/runtime","common/vendor"]]]);