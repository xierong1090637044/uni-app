(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/good_add/good_add"],{"18db":function(e,o,t){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(t("e21e"));function n(e){return e&&e.__esModule?e:{default:e}}var r,c,s,d,u=function(){return t.e("components/kilvn-fa-icon/fa-icon").then(t.bind(null,"8899"))},i=e.getStorageSync("uid"),l={components:{faIcon:u},data:function(){return{stocks:[{stock:{stock_name:"默认仓库"},reserve:0}],category:"",reserve:[0],goodsIcon:"",producttime:"",nousetime:"",productCode:""}},onLoad:function(){r=this,e.removeStorageSync("category"),e.removeStorageSync("warehouse")},onShow:function(){if(e.getStorageSync("warehouse")&&(r.stocks=e.getStorageSync("warehouse")),e.getStorageSync("category")){r.category=e.getStorageSync("category");var o=a.default.Pointer("class_user");s=o.set(r.category.parent.objectId);var t=a.default.Pointer("second_class");d=t.set(r.category.objectId),console.log(r.category.parent.objectId,r.category.objectId," at pages\\manage\\good_add\\good_add.vue:188")}},onUnload:function(){c="",s="",d=""},methods:{scan_code:function(){e.scanCode({onlyFromCamera:!0,success:function(e){console.log("条码类型："+e.scanType," at pages\\manage\\good_add\\good_add.vue:205"),console.log("条码内容："+e.result," at pages\\manage\\good_add\\good_add.vue:206"),r.productCode=e.result}})},remove_this:function(o){console.log(o," at pages\\manage\\good_add\\good_add.vue:214"),r.stocks=r.stocks.splice(o-1,1),e.setStorageSync("warehouse",r.stocks)},change_reserve:function(e,o){console.log(e,o," at pages\\manage\\good_add\\good_add.vue:221"),r.stocks[e].reserve=Number(o.detail.value)},bindproducttimeChange:function(e){r.producttime=e.target.value},bindDateChange:function(e){r.nousetime=e.target.value},formSubmit:function(o){var t=o.detail.value;if(""==t.goodsName)e.showToast({title:"请输入产品名称",icon:"none"});else if(c){var n,s=!0,d=!1,u=void 0;try{for(var i,l=c[Symbol.iterator]();!(s=(i=l.next()).done);s=!0){var g=i.value;n=a.default.File(t.goodsName+".png",g)}}catch(f){d=!0,u=f}finally{try{s||null==l.return||l.return()}finally{if(d)throw u}}n.save().then(function(e){r.goodsIcon=JSON.parse(e).url,r.upload_good(t)})}else r.upload_good(t)},upload_image:function(){e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){r.goodsIcon=e.tempFilePaths[0],c=e.tempFilePaths}})},upload_good:function(o){e.showLoading({title:"上传中..."});var t=a.default.Pointer("_User"),n=t.set(i),c=a.default.Query("Goods");c.equalTo("userId","==",i),c.equalTo("goodsName","==",o.goodsName),c.find().then(function(t){if(console.log(t," at pages\\manage\\good_add\\good_add.vue:285"),t.length>=1)e.showToast({title:"你的库存中已存在此产品",icon:"none"});else{var c=!0,u=!1,i=void 0;try{for(var l,g=r.stocks[Symbol.iterator]();!(c=(l=g.next()).done);c=!0){var f=l.value,v=f.reserve,m=f.stock.objectId||"",p=a.default.Pointer("stocks"),_=p.set(m),y=a.default.Query("Goods");y.set("goodsIcon",r.goodsIcon),y.set("goodsName",o.goodsName),y.set("costPrice",o.costPrice?o.costPrice:"0"),y.set("retailPrice",o.retailPrice?o.retailPrice:"0"),y.set("regNumber",o.regNumber),y.set("reserve",Number(v)),y.set("productCode",o.productCode),y.set("stocks",_),y.set("product_info",o.product_info),y.set("producer",o.producer),y.set("packingUnit",o.packingUnit),y.set("packageContent",o.packageContent),e.getStorageSync("warehouse")&&(y.set("second_class",d),y.set("goodsClass",s)),y.set("userId",n),y.save().then(function(o){e.hideLoading(),e.showToast({title:"上传成功"})}).catch(function(e){console.log(e," at pages\\manage\\good_add\\good_add.vue:325")})}}catch(h){u=!0,i=h}finally{try{c||null==g.return||g.return()}finally{if(u)throw i}}}})}}};o.default=l}).call(this,t("6e42")["default"])},"1ccd":function(e,o,t){"use strict";var a=function(){var e=this,o=e.$createElement;e._self._c},n=[];t.d(o,"a",function(){return a}),t.d(o,"b",function(){return n})},"1f92":function(e,o,t){},"4a73":function(e,o,t){"use strict";t.r(o);var a=t("18db"),n=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(o,e,function(){return a[e]})}(r);o["default"]=n.a},6841:function(e,o,t){"use strict";t.r(o);var a=t("1ccd"),n=t("4a73");for(var r in n)"default"!==r&&function(e){t.d(o,e,function(){return n[e]})}(r);t("b337");var c=t("2877"),s=Object(c["a"])(n["default"],a["a"],a["b"],!1,null,null,null);o["default"]=s.exports},b337:function(e,o,t){"use strict";var a=t("1f92"),n=t.n(a);n.a}},[["8cf1","common/runtime","common/vendor"]]]);