(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/production/editInfo/editInfo"],{"01cd":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(o("c74b")),c=a(o("df06"));function a(e){return e&&e.__esModule?e:{default:e}}var r,s,i=function(){o.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(o("0914"))}.bind(null,o)).catch(o.oe)},u=function(){o.e("components/uni-collapse/uni-collapse").then(function(){return resolve(o("bd14"))}.bind(null,o)).catch(o.oe)},d=function(){o.e("components/uni-collapse-item/uni-collapse-item").then(function(){return resolve(o("18d6"))}.bind(null,o)).catch(o.oe)},l="",g="",f={components:{uniCollapse:u,uniCollapseItem:d,faIcon:i},data:function(){return{user:e.getStorageSync("user"),text_desc:"保存",goodsName:"",costPrice:"",retailPrice:"",packageContent:"",packingUnit:"",warning_num:"",producer:"",regNumber:"",position:"",product_info:"",productCode:"",category:"",reserve:0,goodsIcon:"",stock_name:"",stocks:"",packingModel:"",producttime:"",nousetime:"",product_state:!1,uploadImg:!1}},onLoad:function(t){r=this,s=e.getStorageSync("uid"),e.removeStorageSync("category"),e.removeStorageSync("is_add"),t.id&&r.scan_by_id(t.id)},onShow:function(){if(e.getStorageSync("now_product")){e.setNavigationBarTitle({title:"编辑物料"});var t=e.getStorageSync("now_product");r.text_desc="修改",r.goodsName=t.goodsName,r.costPrice=t.costPrice,r.retailPrice=t.retailPrice,r.packageContent=t.packageContent,r.packingUnit=t.packingUnit,r.warning_num=t.warning_num,r.producer=t.producer,r.regNumber=t.regNumber,r.position=t.position,r.product_info=t.product_info,r.productCode=t.productCode,r.category=t.secondClass?t.secondClass:"",r.reserve=t.reserve,r.goodsIcon=t.goodsIcon?t.goodsIcon:"",r.product_state=t.product_state,r.nousetime=t.nousetime?c.default.js_date_time(t.nousetime):"",r.packingModel=t.packingModel,r.stock_name=t.stocks?t.stocks.stock_name:""}if(e.getStorageSync("warehouse")&&(r.stocks=e.getStorageSync("warehouse")[0].stock,r.stock_name=e.getStorageSync("warehouse")[0].stock.stock_name),e.getStorageSync("category")){if(r.category=e.getStorageSync("category"),1==r.category.type){var o=n.default.Pointer("M_frist_class");l=o.set(r.category.objectId)}else if(2==r.category.type){var a=n.default.Pointer("M_frist_class");l=a.set(r.category.parent.objectId);var s=n.default.Pointer("M_second_class");g=s.set(r.category.objectId)}console.log(r.category.parent.objectId,r.category.objectId)}else{var i=e.getStorageSync("now_product");if(i.fristClass){var u=n.default.Pointer("M_frist_class");l=u.set(i.fristClass.objectId)}if(i.secondClass){var d=n.default.Pointer("M_second_class");g=d.set(i.secondClass.objectId)}}},onUnload:function(){"",l="",g="",c.default.handleData()},methods:{bindproducttimeChange:function(e){r.producttime=e.target.value},bindDateChange:function(e){r.nousetime=e.target.value},formSubmit:function(t){console.log(t.detail.value);var o=t.detail.value;""==o.goodsName?e.showToast({title:"请输入物料名称",icon:"none"}):r.upload_good(o)},upload_image:function(){e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){console.log(e);var t,o=e.tempFilePaths,c=!0,a=!1,s=void 0;try{for(var i,u=o[Symbol.iterator]();!(c=(i=u.next()).done);c=!0){var d=i.value;t=n.default.File(r.goodsName+".png",d)}}catch(l){a=!0,s=l}finally{try{c||null==u.return||u.return()}finally{if(a)throw s}}t.save().then((function(e){console.log(e.length),r.goodsIcon=e[0].url}))}})},upload_good:function(t){e.showLoading({title:"上传中..."});var o=e.getStorageSync("now_product"),n=!0,c=!1,a=void 0;try{for(var s,i=o.ids[Symbol.iterator]();!(n=(s=i.next()).done);n=!0){var u=s.value;t.good_id=u.good_id,r.add_good(t,"edit")}}catch(d){c=!0,a=d}finally{try{n||null==i.return||i.return()}finally{if(c)throw a}}},add_good:function(t,o){var a=n.default.Pointer("_User"),i=a.set(s),u=r.stocks.objectId?r.stocks.objectId:"",d=n.default.Pointer("stocks"),f=d.set(u),p=n.default.Query("Matters");if(p.set("goodsIcon",r.goodsIcon),p.set("goodsName",t.goodsName),p.set("costPrice",t.costPrice?t.costPrice:"0"),p.set("retailPrice",t.retailPrice?t.retailPrice:"0"),p.set("regNumber",t.regNumber),p.set("packingModel",t.packingModel),p.set("product_info",t.product_info),p.set("packingUnit",t.packingUnit),p.set("packageContent",t.packageContent),p.set("stocks",f),p.set("reserve",Number(t.reserve)),p.set("warning_num",Number(t.warning_num)),p.set("stocktype",Number(t.warning_num)>=Number(r.reserve)?0:1),e.getStorageSync("category")){var m=e.getStorageSync("category");1==m.type?p.set("fristClass",l):2==m.type&&(p.set("secondClass",g),p.set("fristClass",l))}p.set("userId",i),p.set("id",t.good_id),p.save().then((function(o){e.hideLoading(),c.default.log(e.getStorageSync("user").nickName+"修改了物料'"+t.goodsName+"'",7,e.getStorageSync("now_product").objectId),e.navigateBack({delta:2}),setTimeout((function(){e.showToast({title:"修改成功",duration:1e3})}),1e3),e.setStorageSync("is_add",!0)})).catch((function(e){console.log(e)}))},handledata:function(){r.uploadImg=!1,r.goodsName="",r.costPrice="",r.retailPrice="",r.packageContent="",r.packingUnit="",r.warning_num="",r.producer="",r.regNumber="",r.position="",r.product_info="",r.productCode="",r.category="",r.reserve=0,r.goodsIcon="",r.stocks="",r.stock_name="",r.producttime="",r.nousetime=""}}};t.default=f}).call(this,o("543d")["default"])},"2aef":function(e,t,o){},"458b":function(e,t,o){"use strict";var n,c=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.stocks=""})},a=[];o.d(t,"b",(function(){return c})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return n}))},e00f:function(e,t,o){"use strict";(function(e){o("a961"),o("921b");n(o("66fd"));var t=n(o("f305"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},f305:function(e,t,o){"use strict";o.r(t);var n=o("458b"),c=o("f6c9");for(var a in c)"default"!==a&&function(e){o.d(t,e,(function(){return c[e]}))}(a);o("f793");var r,s=o("f0c5"),i=Object(s["a"])(c["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);t["default"]=i.exports},f6c9:function(e,t,o){"use strict";o.r(t);var n=o("01cd"),c=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=c.a},f793:function(e,t,o){"use strict";var n=o("2aef"),c=o.n(n);c.a}},[["e00f","common/runtime","common/vendor"]]]);