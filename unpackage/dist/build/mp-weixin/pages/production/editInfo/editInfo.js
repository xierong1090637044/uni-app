(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/production/editInfo/editInfo"],{"269f":function(e,t,o){},"396d":function(e,t,o){"use strict";var n,r=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.stocks=""})},c=[];o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return c})),o.d(t,"a",(function(){return n}))},"4bb3":function(e,t,o){"use strict";o.r(t);var n=o("396d"),r=o("e66b");for(var c in r)"default"!==c&&function(e){o.d(t,e,(function(){return r[e]}))}(c);o("5a4d");var a,s=o("f0c5"),i=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);t["default"]=i.exports},"5a4d":function(e,t,o){"use strict";var n=o("269f"),r=o.n(n);r.a},"6cec":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(o("4515")),r=c(o("f287"));function c(e){return e&&e.__esModule?e:{default:e}}function a(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=s(e))){var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,c=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){a=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw r}}}}function s(e,t){if(e){if("string"===typeof e)return i(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var u,d,l=function(){o.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(o("cc4b"))}.bind(null,o)).catch(o.oe)},g=function(){o.e("components/uni-collapse/uni-collapse").then(function(){return resolve(o("c8f2"))}.bind(null,o)).catch(o.oe)},f=function(){o.e("components/uni-collapse-item/uni-collapse-item").then(function(){return resolve(o("2af1"))}.bind(null,o)).catch(o.oe)},p="",m="",y={components:{uniCollapse:g,uniCollapseItem:f,faIcon:l},data:function(){return{user:e.getStorageSync("user"),text_desc:"保存",goodsName:"",costPrice:"",retailPrice:"",packageContent:"",packingUnit:"",warning_num:"",producer:"",regNumber:"",position:"",product_info:"",productCode:"",category:"",reserve:0,goodsIcon:"",stock_name:"",stocks:"",packingModel:"",producttime:"",nousetime:"",product_state:!1,uploadImg:!1}},onLoad:function(t){u=this,d=e.getStorageSync("uid"),e.removeStorageSync("category"),e.removeStorageSync("is_add"),t.id&&u.scan_by_id(t.id)},onShow:function(){if(e.getStorageSync("now_product")){e.setNavigationBarTitle({title:"编辑物料"});var t=e.getStorageSync("now_product");u.text_desc="修改",u.goodsName=t.goodsName,u.costPrice=t.costPrice,u.retailPrice=t.retailPrice,u.packageContent=t.packageContent,u.packingUnit=t.packingUnit,u.warning_num=t.warning_num,u.producer=t.producer,u.regNumber=t.regNumber,u.position=t.position,u.product_info=t.product_info,u.productCode=t.productCode,u.category=t.secondClass?t.secondClass:"",u.reserve=t.reserve,u.goodsIcon=t.goodsIcon?t.goodsIcon:"",u.product_state=t.product_state,u.nousetime=t.nousetime?r.default.js_date_time(t.nousetime):"",u.packingModel=t.packingModel,u.stock_name=t.stocks?t.stocks.stock_name:""}if(e.getStorageSync("warehouse")&&(u.stocks=e.getStorageSync("warehouse")[0].stock,u.stock_name=e.getStorageSync("warehouse")[0].stock.stock_name),e.getStorageSync("category")){if(u.category=e.getStorageSync("category"),1==u.category.type){var o=n.default.Pointer("M_frist_class");p=o.set(u.category.objectId)}else if(2==u.category.type){var c=n.default.Pointer("M_frist_class");p=c.set(u.category.parent.objectId);var a=n.default.Pointer("M_second_class");m=a.set(u.category.objectId)}console.log(u.category.parent.objectId,u.category.objectId)}else{var s=e.getStorageSync("now_product");if(s.fristClass){var i=n.default.Pointer("M_frist_class");p=i.set(s.fristClass.objectId)}if(s.secondClass){var d=n.default.Pointer("M_second_class");m=d.set(s.secondClass.objectId)}}},onUnload:function(){"",p="",m="",r.default.handleData()},methods:{bindproducttimeChange:function(e){u.producttime=e.target.value},bindDateChange:function(e){u.nousetime=e.target.value},formSubmit:function(t){console.log(t.detail.value);var o=t.detail.value;""==o.goodsName?e.showToast({title:"请输入物料名称",icon:"none"}):u.upload_good(o)},upload_image:function(){e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){console.log(e);var t,o,r=e.tempFilePaths,c=a(r);try{for(c.s();!(o=c.n()).done;){var s=o.value;t=n.default.File(u.goodsName+".png",s)}}catch(i){c.e(i)}finally{c.f()}t.save().then((function(e){console.log(e.length),u.goodsIcon=e[0].url}))}})},upload_good:function(t){e.showLoading({title:"上传中..."});var o,n=e.getStorageSync("now_product"),r=a(n.ids);try{for(r.s();!(o=r.n()).done;){var c=o.value;t.good_id=c.good_id,u.add_good(t,"edit")}}catch(s){r.e(s)}finally{r.f()}},add_good:function(t,o){var c=n.default.Pointer("_User"),a=c.set(d),s=u.stocks.objectId?u.stocks.objectId:"",i=n.default.Pointer("stocks"),l=i.set(s),g=n.default.Query("Matters");if(g.set("goodsIcon",u.goodsIcon),g.set("goodsName",t.goodsName),g.set("costPrice",t.costPrice?t.costPrice:"0"),g.set("retailPrice",t.retailPrice?t.retailPrice:"0"),g.set("regNumber",t.regNumber),g.set("packingModel",t.packingModel),g.set("product_info",t.product_info),g.set("packingUnit",t.packingUnit),g.set("packageContent",t.packageContent),g.set("stocks",l),g.set("reserve",Number(t.reserve)),g.set("warning_num",Number(t.warning_num)),g.set("stocktype",Number(t.warning_num)>=Number(u.reserve)?0:1),e.getStorageSync("category")){var f=e.getStorageSync("category");1==f.type?g.set("fristClass",p):2==f.type&&(g.set("secondClass",m),g.set("fristClass",p))}g.set("userId",a),g.set("id",t.good_id),g.save().then((function(o){e.hideLoading(),r.default.log(e.getStorageSync("user").nickName+"修改了物料'"+t.goodsName+"'",7,e.getStorageSync("now_product").objectId),e.navigateBack({delta:2}),setTimeout((function(){e.showToast({title:"修改成功",duration:1e3})}),1e3),e.setStorageSync("is_add",!0)})).catch((function(e){console.log(e)}))},handledata:function(){u.uploadImg=!1,u.goodsName="",u.costPrice="",u.retailPrice="",u.packageContent="",u.packingUnit="",u.warning_num="",u.producer="",u.regNumber="",u.position="",u.product_info="",u.productCode="",u.category="",u.reserve=0,u.goodsIcon="",u.stocks="",u.stock_name="",u.producttime="",u.nousetime=""}}};t.default=y}).call(this,o("543d")["default"])},"767e":function(e,t,o){"use strict";(function(e){o("d34b"),o("921b");n(o("66fd"));var t=n(o("4bb3"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},e66b:function(e,t,o){"use strict";o.r(t);var n=o("6cec"),r=o.n(n);for(var c in n)"default"!==c&&function(e){o.d(t,e,(function(){return n[e]}))}(c);t["default"]=r.a}},[["767e","common/runtime","common/vendor"]]]);