(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/manage/goods_add/goods_add"],{"0f21":function(e,t,o){"use strict";o.r(t);var n=o("bcc1"),r=o.n(n);for(var c in n)"default"!==c&&function(e){o.d(t,e,(function(){return n[e]}))}(c);t["default"]=r.a},"2f28":function(e,t,o){"use strict";var n=o("45a6"),r=o.n(n);r.a},"45a6":function(e,t,o){},"53f2":function(e,t,o){"use strict";(function(e){o("d510"),o("921b");n(o("66fd"));var t=n(o("a2b2"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("c11b")["createPage"])},a2b2:function(e,t,o){"use strict";o.r(t);var n=o("facb"),r=o("0f21");for(var c in r)"default"!==c&&function(e){o.d(t,e,(function(){return r[e]}))}(c);o("2f28");var a,s=o("f0c5"),u=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);t["default"]=u.exports},bcc1:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(o("7fd5")),r=c(o("9546"));function c(e){return e&&e.__esModule?e:{default:e}}function a(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=s(e))){var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,c=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){a=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw r}}}}function s(e,t){if(e){if("string"===typeof e)return u(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var i,l,d=function(){o.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(o("4d52"))}.bind(null,o)).catch(o.oe)},f=function(){o.e("components/uni-collapse/uni-collapse").then(function(){return resolve(o("b4ab"))}.bind(null,o)).catch(o.oe)},g=function(){o.e("components/uni-collapse-item/uni-collapse-item").then(function(){return resolve(o("7c20"))}.bind(null,o)).catch(o.oe)},p="",m="",y={components:{uniCollapse:f,uniCollapseItem:g,faIcon:d},data:function(){return{goodsName:"",costPrice:"",retailPrice:"",packageContent:"",packingUnit:"",warning_num:"",producer:"",regNumber:"",position:"",product_info:"",productCode:"",category:"",goodsIcon:"",stocks:[],producttime:"",nousetime:"",product_state:!1}},onLoad:function(t){i=this,l=e.getStorageSync("uid"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),e.removeStorageSync("is_add")},onShow:function(){if(e.getStorageSync("warehouse")&&(i.stocks=e.getStorageSync("warehouse")),e.getStorageSync("category"))if(i.category=e.getStorageSync("category"),2==i.category.type){var t=r.default.Pointer("class_user");p=t.set(i.category.parent.objectId);var o=r.default.Pointer("second_class");m=o.set(i.category.objectId),console.log(i.category.parent.objectId,i.category.objectId)}else{var n=r.default.Pointer("class_user");p=n.set(i.category.objectId)}},onUnload:function(){"",p="",m="",n.default.handleData()},methods:{upload_image:function(){e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){console.log(e);var t,o,n=Date.parse(new Date),c=e.tempFilePaths,s=a(c);try{for(s.s();!(o=s.n()).done;){var u=o.value;t=r.default.File(n+".jpg",u)}}catch(l){s.e(l)}finally{s.f()}t.save().then((function(e){i.goodsIcon=e[0].url}))}})},change_reserve:function(t,o){i.stocks[o].reserve=t.detail.value,e.setStorageSync("warehouse",i.stocks)},change_warningnum:function(t,o){i.stocks[o].warning_num=t.detail.value,e.setStorageSync("warehouse",i.stocks)},remove_stock:function(t){i.stocks.splice(t,1),e.setStorageSync("warehouse",i.stocks)},bindDateChange:function(e){i.nousetime=e.target.value},formSubmit:function(t){console.log(t.detail.value);var o=t.detail.value;""==o.goodsName?e.showToast({title:"请输入产品名称",icon:"none"}):i.upload_good(o)},upload_good:function(t){e.showLoading({title:"上传中..."});var o=r.default.Query("Goods");o.equalTo("userId","==",l),o.equalTo("status","!=",-1),o.equalTo("goodsName","==",t.goodsName),o.find().then((function(o){o.length>=1?e.showToast({title:"你的库存中已存在此产品",icon:"none"}):i.add_good(t,"add")}))},add_good:function(t,o){var c=r.default.Pointer("_User"),a=c.set(l),s=function(o){var c=i.stocks[o].stock.objectId,s=r.default.Pointer("stocks"),u=s.set(c),l=r.default.Query("Goods");if(l.set("goodsIcon",i.goodsIcon),l.set("goodsName",t.goodsName),l.set("costPrice",t.costPrice?t.costPrice:"0"),l.set("retailPrice",t.retailPrice?t.retailPrice:"0"),i.nousetime){var d=i.nousetime.replace(new RegExp("-","g"),"/");d=new Date(d).getTime(),l.set("nousetime",d)}l.set("regNumber",t.regNumber),l.set("reserve",Number(i.stocks[o].reserve)),l.set("productCode",t.productCode),l.set("stocks",u),l.set("product_info",t.product_info),l.set("producer",t.producer),l.set("packingUnit",t.packingUnit),l.set("packageContent",t.packageContent),l.set("position",t.position),l.set("warning_num",Number(i.stocks[o].warning_num)),l.set("stocktype",Number(i.stocks[o].warning_num)>=Number(i.stocks[o].reserve)?0:1),l.set("order",Number(o)),o>0&&l.set("accessory",!0),l.set("product_state",t.product_state),e.getStorageSync("category")&&(1==i.category.type?l.set("goodsClass",p):l.set("second_class",m)),l.set("userId",a),l.set("id",e.getStorageSync("now_product")?e.getStorageSync("now_product").objectId:""),l.save().then((function(r){e.hideLoading(),o==i.stocks.length-1&&n.default.log(e.getStorageSync("user").nickName+"增加了产品'"+t.goodsName+"'",6,r.objectId),e.setStorageSync("is_add",!0),e.showToast({title:"上传成功"})})).catch((function(e){console.log(e)}))};for(var u in i.stocks)s(u)},handledata:function(){i.goodsName="",i.costPrice="",i.retailPrice="",i.packageContent="",i.packingUnit="",i.warning_num="",i.producer="",i.regNumber="",i.position="",i.product_info="",i.productCode="",i.category="",i.reserve=0,i.goodsIcon="",i.stocks="",i.stock_name="",i.producttime="",i.nousetime=""}}};t.default=y}).call(this,o("c11b")["default"])},facb:function(e,t,o){"use strict";var n={"uni-collapse":function(){return o.e("components/uni-collapse/uni-collapse").then(o.bind(null,"b4ab"))},"uni-collapse-item":function(){return o.e("components/uni-collapse-item/uni-collapse-item").then(o.bind(null,"7c20"))}},r=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.stocks=""})},c=[];o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return c})),o.d(t,"a",(function(){return n}))}},[["53f2","common/runtime","common/vendor"]]]);