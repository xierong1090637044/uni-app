(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/production/editInfo/editInfo"],{"07f1":function(e,t,o){"use strict";var n,a=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.stocks=""})},c=[];o.d(t,"b",function(){return a}),o.d(t,"c",function(){return c}),o.d(t,"a",function(){return n})},4961:function(e,t,o){"use strict";(function(e){o("9787"),o("921b");n(o("66fd"));var t=n(o("c754"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},"9b41":function(e,t,o){"use strict";var n=o("df4e"),a=o.n(n);a.a},b7b9:function(e,t,o){"use strict";o.r(t);var n=o("ccd7"),a=o.n(n);for(var c in n)"default"!==c&&function(e){o.d(t,e,function(){return n[e]})}(c);t["default"]=a.a},c754:function(e,t,o){"use strict";o.r(t);var n=o("07f1"),a=o("b7b9");for(var c in a)"default"!==c&&function(e){o.d(t,e,function(){return a[e]})}(c);o("9b41");var r,s=o("f0c5"),i=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],r);t["default"]=i.exports},ccd7:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(o("93d5")),a=c(o("2839"));function c(e){return e&&e.__esModule?e:{default:e}}var r,s,i=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"d7ee"))},u=function(){return o.e("components/uni-collapse/uni-collapse").then(o.bind(null,"f698"))},d=function(){return o.e("components/uni-collapse-item/uni-collapse-item").then(o.bind(null,"4b7b"))},l="",g="",f={components:{uniCollapse:u,uniCollapseItem:d,faIcon:i},data:function(){return{user:e.getStorageSync("user"),text_desc:"保存",goodsName:"",costPrice:"",retailPrice:"",packageContent:"",packingUnit:"",warning_num:"",producer:"",regNumber:"",position:"",product_info:"",productCode:"",category:"",reserve:0,goodsIcon:"",stock_name:"",stocks:"",packingModel:"",producttime:"",nousetime:"",product_state:!1,uploadImg:!1}},onLoad:function(t){r=this,s=e.getStorageSync("uid"),e.removeStorageSync("category"),e.removeStorageSync("is_add"),t.id&&r.scan_by_id(t.id)},onShow:function(){if(e.getStorageSync("now_product")){e.setNavigationBarTitle({title:"编辑物料"});var t=e.getStorageSync("now_product");r.text_desc="修改",r.goodsName=t.goodsName,r.costPrice=t.costPrice,r.retailPrice=t.retailPrice,r.packageContent=t.packageContent,r.packingUnit=t.packingUnit,r.warning_num=t.warning_num,r.producer=t.producer,r.regNumber=t.regNumber,r.position=t.position,r.product_info=t.product_info,r.productCode=t.productCode,r.category=t.secondClass?t.secondClass:"",r.reserve=t.reserve,r.goodsIcon=t.goodsIcon?t.goodsIcon:"",r.product_state=t.product_state,r.nousetime=t.nousetime?a.default.js_date_time(t.nousetime):"",r.packingModel=t.packingModel,r.stock_name=t.stocks?t.stocks.stock_name:""}if(e.getStorageSync("warehouse")&&(r.stocks=e.getStorageSync("warehouse")[0].stock,r.stock_name=e.getStorageSync("warehouse")[0].stock.stock_name),e.getStorageSync("category")){if(r.category=e.getStorageSync("category"),1==r.category.type){var o=n.default.Pointer("M_frist_class");l=o.set(r.category.objectId)}else if(2==r.category.type){var c=n.default.Pointer("M_frist_class");l=c.set(r.category.parent.objectId);var s=n.default.Pointer("M_second_class");g=s.set(r.category.objectId)}console.log(r.category.parent.objectId,r.category.objectId)}else{var i=e.getStorageSync("now_product");if(i.fristClass){var u=n.default.Pointer("M_frist_class");l=u.set(i.fristClass.objectId)}if(i.secondClass){var d=n.default.Pointer("M_second_class");g=d.set(i.secondClass.objectId)}}},onUnload:function(){"",l="",g="",a.default.handleData()},methods:{bindproducttimeChange:function(e){r.producttime=e.target.value},bindDateChange:function(e){r.nousetime=e.target.value},formSubmit:function(t){console.log(t.detail.value);var o=t.detail.value;""==o.goodsName?e.showToast({title:"请输入物料名称",icon:"none"}):r.upload_good(o)},upload_image:function(){e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){console.log(e);var t,o=e.tempFilePaths,a=!0,c=!1,s=void 0;try{for(var i,u=o[Symbol.iterator]();!(a=(i=u.next()).done);a=!0){var d=i.value;t=n.default.File(r.goodsName+".png",d)}}catch(l){c=!0,s=l}finally{try{a||null==u.return||u.return()}finally{if(c)throw s}}t.save().then(function(e){console.log(e.length),r.goodsIcon=e[0].url})}})},upload_good:function(t){e.showLoading({title:"上传中..."});var o=e.getStorageSync("now_product"),n=!0,a=!1,c=void 0;try{for(var s,i=o.ids[Symbol.iterator]();!(n=(s=i.next()).done);n=!0){var u=s.value;t.good_id=u.good_id,r.add_good(t,"edit")}}catch(d){a=!0,c=d}finally{try{n||null==i.return||i.return()}finally{if(a)throw c}}},add_good:function(t,o){var c=n.default.Pointer("_User"),i=c.set(s),u=r.stocks.objectId?r.stocks.objectId:"",d=n.default.Pointer("stocks"),f=d.set(u),p=n.default.Query("Matters");if(p.set("goodsIcon",r.goodsIcon),p.set("goodsName",t.goodsName),p.set("costPrice",t.costPrice?t.costPrice:"0"),p.set("retailPrice",t.retailPrice?t.retailPrice:"0"),p.set("regNumber",t.regNumber),p.set("packingModel",t.packingModel),p.set("product_info",t.product_info),p.set("packingUnit",t.packingUnit),p.set("packageContent",t.packageContent),p.set("stocks",f),p.set("reserve",Number(t.reserve)),p.set("warning_num",Number(t.warning_num)),p.set("stocktype",Number(t.warning_num)>=Number(r.reserve)?0:1),e.getStorageSync("category")){var m=e.getStorageSync("category");1==m.type?p.set("fristClass",l):2==m.type&&(p.set("secondClass",g),p.set("fristClass",l))}p.set("userId",i),p.set("id",t.good_id),p.save().then(function(o){e.hideLoading(),a.default.log(e.getStorageSync("user").nickName+"修改了物料'"+t.goodsName+"'",7,e.getStorageSync("now_product").objectId),e.navigateBack({delta:2}),setTimeout(function(){e.showToast({title:"修改成功",duration:1e3})},1e3),e.setStorageSync("is_add",!0)}).catch(function(e){console.log(e)})},handledata:function(){r.uploadImg=!1,r.goodsName="",r.costPrice="",r.retailPrice="",r.packageContent="",r.packingUnit="",r.warning_num="",r.producer="",r.regNumber="",r.position="",r.product_info="",r.productCode="",r.category="",r.reserve=0,r.goodsIcon="",r.stocks="",r.stock_name="",r.producttime="",r.nousetime=""}}};t.default=f}).call(this,o("543d")["default"])},df4e:function(e,t,o){}},[["4961","common/runtime","common/vendor"]]]);