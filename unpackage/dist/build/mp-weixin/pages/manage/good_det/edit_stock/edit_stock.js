(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/good_det/edit_stock/edit_stock"],{"0be4":function(e,t,o){"use strict";var n,r=function(){var e=this,t=e.$createElement;e._self._c},a=[];o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return n}))},6609:function(e,t,o){"use strict";var n=o("d864"),r=o.n(n);r.a},6640:function(e,t,o){"use strict";o.r(t);var n=o("0be4"),r=o("ecaa");for(var a in r)"default"!==a&&function(e){o.d(t,e,(function(){return r[e]}))}(a);o("6609");var c,s=o("f0c5"),i=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],c);t["default"]=i.exports},b8a9:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(o("4515")),r=a(o("f287"));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=s(e))){var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,r=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw r}}}}function s(e,t){if(e){if("string"===typeof e)return i(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var u,d,l=function(){o.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(o("cc4b"))}.bind(null,o)).catch(o.oe)},f=function(){o.e("components/uni-collapse/uni-collapse").then(function(){return resolve(o("c8f2"))}.bind(null,o)).catch(o.oe)},g=function(){o.e("components/uni-collapse-item/uni-collapse-item").then(function(){return resolve(o("2af1"))}.bind(null,o)).catch(o.oe)},m={components:{uniCollapse:f,uniCollapseItem:g,faIcon:l},data:function(){return{text_desc:"保存",goodsName:"",costPrice:"",retailPrice:"",packageContent:"",packingUnit:"",warning_num:"",producer:"",regNumber:"",position:"",product_info:"",productCode:"",category:"",reserve:0,goodsIcon:"",stock_name:"",stocks:"",producttime:"",nousetime:"",product_state:!1,models:""}},onLoad:function(t){u=this,d=e.getStorageSync("uid"),e.removeStorageSync("category"),e.removeStorageSync("is_add"),t.id&&u.scan_by_id(t.id)},onShow:function(){if(e.getStorageSync("now_product")){e.setNavigationBarTitle({title:"编辑产品"});var t=e.getStorageSync("now_product");if(u.text_desc="修改",u.goodsName=t.goodsName,u.costPrice=t.costPrice,u.retailPrice=t.retailPrice,u.packageContent=t.packageContent,u.packingUnit=t.packingUnit,u.warning_num=t.warning_num,u.producer=t.producer,u.regNumber=t.regNumber,u.position=t.position,u.product_info=t.product_info,u.productCode=t.productCode,u.category=t.second_class?t.second_class:"",u.reserve=t.reserve,u.goodsIcon=t.goodsIcon,u.product_state=t.product_state,t.models){var o;u.models=t.models,u.reserve=0,e.getStorageSync("now_model")?o=e.getStorageSync("now_model"):(o=t.models,e.setStorageSync("now_model",o));var r,a=c(o);try{for(a.s();!(r=a.n()).done;){var s=r.value;u.reserve+=Number(s.reserve)}}catch(g){a.e(g)}finally{a.f()}}if(t.goodsClass){var i=n.default.Pointer("class_user");i.set(t.goodsClass.objectId)}if(t.second_class){var d=n.default.Pointer("second_class");d.set(t.second_class.objectId)}}if(e.getStorageSync("warehouse")&&(u.stocks=e.getStorageSync("warehouse")[0].stock,u.stock_name=e.getStorageSync("warehouse")[0].stock.stock_name),e.getStorageSync("category")){u.category=e.getStorageSync("category");var l=n.default.Pointer("class_user");l.set(u.category.parent.objectId);var f=n.default.Pointer("second_class");f.set(u.category.objectId),console.log(u.category.parent.objectId,u.category.objectId)}},onUnload:function(){"","","",r.default.handleData()},methods:{formSubmit:function(t){console.log(t.detail.value);var o=t.detail.value;""==o.goodsName?e.showToast({title:"请输入产品名称",icon:"none"}):u.upload_good(o)},upload_good:function(t){if(e.showLoading({title:"上传中..."}),e.getStorageSync("now_product"))u.add_good(t,"edit");else{var o=n.default.Query("Goods");o.equalTo("userId","==",d),o.equalTo("goodsName","==",t.goodsName),o.find().then((function(o){o.length>=1?e.showToast({title:"你的库存中已存在此产品",icon:"none"}):u.add_good(t,"add")}))}},add_good:function(t,o){var a=n.default.Pointer("_User"),c=a.set(d),s=u.stocks.objectId?u.stocks.objectId:"",i=n.default.Pointer("stocks"),l=i.set(s),f=n.default.Query("Goods");f.set("stocks",l),f.set("reserve",Number(t.reserve)),e.getStorageSync("now_model")&&f.set("models",e.getStorageSync("now_model")),f.set("warning_num",Number(t.warning_num)),f.set("stocktype",Number(t.warning_num)>=Number(u.reserve)?0:1),f.set("userId",c),f.set("id",e.getStorageSync("now_product")?e.getStorageSync("now_product").objectId:""),f.save().then((function(o){e.hideLoading(),r.default.log(e.getStorageSync("user").nickName+"修改了产品'"+t.goodsName+"'",5,e.getStorageSync("now_product").objectId),e.navigateBack({delta:2}),setTimeout((function(){e.showToast({title:"修改成功",duration:1e3})}),1e3),e.setStorageSync("is_add",!0)})).catch((function(e){console.log(e)}))},handledata:function(){u.goodsName="",u.costPrice="",u.retailPrice="",u.packageContent="",u.packingUnit="",u.warning_num="",u.producer="",u.regNumber="",u.position="",u.product_info="",u.productCode="",u.category="",u.reserve=0,u.goodsIcon="",u.stocks="",u.stock_name="",u.producttime="",u.nousetime=""}}};t.default=m}).call(this,o("543d")["default"])},c7da:function(e,t,o){"use strict";(function(e){o("d34b"),o("921b");n(o("66fd"));var t=n(o("6640"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},d864:function(e,t,o){},ecaa:function(e,t,o){"use strict";o.r(t);var n=o("b8a9"),r=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a}},[["c7da","common/runtime","common/vendor"]]]);