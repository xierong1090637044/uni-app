(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/production/matterAdd/matterAdd"],{"13b7":function(e,t,o){},"367a":function(e,t,o){"use strict";o.r(t);var n=o("f679"),r=o("70b1");for(var a in r)"default"!==a&&function(e){o.d(t,e,(function(){return r[e]}))}(a);o("9c53");var c,s=o("f0c5"),i=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);t["default"]=i.exports},"70b1":function(e,t,o){"use strict";o.r(t);var n=o("e756"),r=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},9361:function(e,t,o){"use strict";(function(e){o("d510"),o("921b");n(o("66fd"));var t=n(o("367a"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},"9c53":function(e,t,o){"use strict";var n=o("13b7"),r=o.n(n);r.a},e756:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(o("7fd5")),r=a(o("9546"));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=s(e))){var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,r=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw r}}}}function s(e,t){if(e){if("string"===typeof e)return i(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var u,l,d=function(){o.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(o("4d52"))}.bind(null,o)).catch(o.oe)},f=function(){o.e("components/uni-collapse/uni-collapse").then(function(){return resolve(o("b4ab"))}.bind(null,o)).catch(o.oe)},g=function(){o.e("components/uni-collapse-item/uni-collapse-item").then(function(){return resolve(o("7c20"))}.bind(null,o)).catch(o.oe)},m="",p="",y={components:{uniCollapse:f,uniCollapseItem:g,faIcon:d},data:function(){return{goodsName:"",costPrice:"",retailPrice:"",packageContent:"",packingUnit:"",packingModel:"",warning_num:"",producer:"",regNumber:"",position:"",product_info:"",productCode:"",category:"",goodsIcon:"",stocks:[],producttime:"",nousetime:""}},onLoad:function(t){u=this,l=e.getStorageSync("uid"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),e.removeStorageSync("is_add")},onShow:function(){if(e.getStorageSync("warehouse")&&(u.stocks=e.getStorageSync("warehouse")),e.getStorageSync("category"))if(u.category=e.getStorageSync("category"),2==u.category.type){var t=r.default.Pointer("M_frist_class");m=t.set(u.category.parent.objectId);var o=r.default.Pointer("M_second_class");p=o.set(u.category.objectId),console.log(u.category.parent.objectId,u.category.objectId)}else{var n=r.default.Pointer("M_frist_class");m=n.set(u.category.objectId)}},onUnload:function(){"",m="",p="",n.default.handleData()},methods:{upload_image:function(){e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){console.log(e);var t,o,n=Date.parse(new Date),a=e.tempFilePaths,s=c(a);try{for(s.s();!(o=s.n()).done;){var i=o.value;t=r.default.File(n+".jpg",i)}}catch(l){s.e(l)}finally{s.f()}t.save().then((function(e){u.goodsIcon=e[0].url}))}})},change_reserve:function(t,o){u.stocks[o].reserve=t.detail.value,e.setStorageSync("warehouse",u.stocks)},change_warningnum:function(t,o){u.stocks[o].warning_num=t.detail.value,e.setStorageSync("warehouse",u.stocks)},remove_stock:function(t){u.stocks.splice(t,1),e.setStorageSync("warehouse",u.stocks)},bindDateChange:function(e){u.nousetime=e.target.value},formSubmit:function(t){console.log(t.detail.value);var o=t.detail.value;""==o.goodsName?e.showToast({title:"请输入物料名称",icon:"none"}):u.upload_good(o)},upload_good:function(t){e.showLoading({title:"上传中..."});var o=r.default.Query("Matters");o.equalTo("userId","==",l),o.equalTo("status","!=",-1),o.equalTo("goodsName","==",t.goodsName),o.find().then((function(o){o.length>=1?e.showToast({title:"你的库存中已存在此物料",icon:"none"}):u.add_good(t,"add")}))},add_good:function(t,o){var a=r.default.Pointer("_User"),c=a.set(l);if(0==u.stocks.length)e.showToast({title:"请选择店仓",icon:"none"});else{var s=function(o){var a=u.stocks[o].stock.objectId,s=r.default.Pointer("stocks"),i=s.set(a),l=r.default.Query("Matters");l.set("goodsIcon",u.goodsIcon),l.set("goodsName",t.goodsName),l.set("costPrice",t.costPrice?t.costPrice:"0"),l.set("retailPrice",t.retailPrice?t.retailPrice:"0"),l.set("regNumber",t.regNumber),l.set("reserve",Number(u.stocks[o].reserve)),l.set("stocks",i),l.set("product_info",t.product_info),l.set("packingUnit",t.packingUnit),l.set("packageContent",t.packageContent),l.set("packingModel",t.packingModel),l.set("warning_num",Number(u.stocks[o].warning_num)),l.set("stocktype",Number(u.stocks[o].warning_num)>=Number(u.stocks[o].reserve)?0:1),l.set("order",Number(o)),o>0&&l.set("accessory",!0),e.getStorageSync("category")&&(1==u.category.type?l.set("fristClass",m):l.set("secondClass",p)),l.set("userId",c),l.set("id",e.getStorageSync("now_product")?e.getStorageSync("now_product").objectId:""),l.save().then((function(r){e.hideLoading(),o==u.stocks.length-1&&n.default.log(e.getStorageSync("user").nickName+"增加了物料'"+t.goodsName+"'",7,r.objectId),e.setStorageSync("is_add",!0),e.showToast({title:"上传成功"})})).catch((function(e){console.log(e)}))};for(var i in u.stocks)s(i)}},handledata:function(){u.goodsName="",u.costPrice="",u.retailPrice="",u.packageContent="",u.packingUnit="",u.warning_num="",u.producer="",u.regNumber="",u.position="",u.product_info="",u.productCode="",u.category="",u.reserve=0,u.goodsIcon="",u.stocks="",u.stock_name="",u.producttime="",u.nousetime=""}}};t.default=y}).call(this,o("543d")["default"])},f679:function(e,t,o){"use strict";var n,r=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.stocks=""})},a=[];o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return n}))}},[["9361","common/runtime","common/vendor"]]]);