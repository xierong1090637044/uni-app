(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/good_add/good_add"],{2079:function(e,o,t){},"2c83":function(e,o,t){"use strict";t.r(o);var n=t("5d80"),s=t.n(n);for(var r in n)"default"!==r&&function(e){t.d(o,e,function(){return n[e]})}(r);o["default"]=s.a},"5d80":function(e,o,t){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=r(t("ee11")),s=r(t("df06"));function r(e){return e&&e.__esModule?e:{default:e}}var a,c,i,u=function(){return t.e("components/kilvn-fa-icon/fa-icon").then(t.bind(null,"0914"))},d=function(){return t.e("components/uni-collapse/uni-collapse").then(t.bind(null,"bd14"))},l=function(){return t.e("components/uni-collapse-item/uni-collapse-item").then(t.bind(null,"18d6"))},g="",p="",f={components:{uniCollapse:d,uniCollapseItem:l,faIcon:u},data:function(){return{goodsName:"",costPrice:"",retailPrice:"",packageContent:"",packingUnit:"",warning_num:"",producer:"",regNumber:"",position:"",product_info:"",productCode:"",category:"",reserve:[0],goodsIcon:"",stocks:[{stock:{stock_name:"默认仓库"},reserve:0}],producttime:"",nousetime:"",product_state:!1}},onLoad:function(o){a=this,i=e.getStorageSync("uid"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),e.removeStorageSync("is_add"),a.scan_by_id(o.id)},onShow:function(){if(e.getStorageSync("now_product")){e.setNavigationBarTitle({title:"编辑产品"});var o=[],t={},s=e.getStorageSync("now_product");if(a.goodsName=s.goodsName,a.costPrice=s.costPrice,a.retailPrice=s.retailPrice,a.packageContent=s.packageContent,a.packingUnit=s.packingUnit,a.warning_num=s.warning_num,a.producer=s.producer,a.regNumber=s.regNumber,a.position=s.position,a.product_info=s.product_info,a.productCode=s.productCode,a.category=s.second_class,a.goodsIcon=s.goodsIcon,a.product_state=s.product_state,s.goodsClass){var r=n.default.Pointer("class_user");g=r.set(s.goodsClass.objectId)}if(s.second_class){var c=n.default.Pointer("second_class");p=c.set(s.second_class.objectId)}t.stock=s.stocks,t.reserve=s.reserve,o.push(t),a.stocks=o,console.log(a.stocks)}if(e.getStorageSync("warehouse")&&(a.stocks=e.getStorageSync("warehouse")),e.getStorageSync("category")){a.category=e.getStorageSync("category");var i=n.default.Pointer("class_user");g=i.set(a.category.parent.objectId);var u=n.default.Pointer("second_class");p=u.set(a.category.objectId),console.log(a.category.parent.objectId,a.category.objectId)}},onUnload:function(){c="",g="",p="",s.default.handleData()},methods:{scan_by_id:function(e){console.log(e),wx.showLoading({title:"加载中..."}),wx.request({url:"https://route.showapi.com/66-22",data:{showapi_appid:"84916",showapi_sign:"ad4b63369c834759b411a9d7fcb07ed7",code:e},header:{"content-type":"application/json"},success:function(o){wx.hideLoading();var t=o.data.showapi_res_body;console.log(t),a.goodsName=t.goodsName,a.producer=t.manuName,a.goodsIcon=t.img,a.product_info=t.note,a.productCode=e}})},scan_code:function(){e.scanCode({onlyFromCamera:!0,success:function(e){console.log("条码类型："+e.scanType),console.log("条码内容："+e.result),a.productCode=e.result}})},remove_this:function(o){console.log(o),a.stocks=a.stocks.splice(o-1,1),e.setStorageSync("warehouse",a.stocks)},change_reserve:function(e,o){console.log(e,o),a.stocks[e].reserve=Number(o.detail.value)},bindproducttimeChange:function(e){a.producttime=e.target.value},bindDateChange:function(e){a.nousetime=e.target.value},formSubmit:function(o){console.log(o.detail.value);var t=o.detail.value;if(""==t.goodsName)e.showToast({title:"请输入产品名称",icon:"none"});else if(c){var s,r=!0,i=!1,u=void 0;try{for(var d,l=c[Symbol.iterator]();!(r=(d=l.next()).done);r=!0){var g=d.value;s=n.default.File(t.goodsName+".png",g)}}catch(p){i=!0,u=p}finally{try{r||null==l.return||l.return()}finally{if(i)throw u}}s.save().then(function(e){a.goodsIcon=JSON.parse(e).url,a.upload_good(t,JSON.parse(e).url)})}else a.upload_good(t,t.goodsIcon)},upload_image:function(){e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){a.goodsIcon=e.tempFilePaths[0],c=e.tempFilePaths}})},upload_good:function(o,t){e.showLoading({title:"上传中..."});var r=n.default.Pointer("_User"),c=r.set(i);if(e.getStorageSync("now_product")){var u=!0,d=!1,l=void 0;try{for(var f,m=a.stocks[Symbol.iterator]();!(u=(f=m.next()).done);u=!0){var _=f.value,v=_.reserve,y=_.stock.objectId||"",b=n.default.Pointer("stocks"),h=b.set(y),k=n.default.Query("Goods");k.set("goodsIcon",t),k.set("goodsName",o.goodsName),k.set("costPrice",o.costPrice?o.costPrice:"0"),k.set("retailPrice",o.retailPrice?o.retailPrice:"0"),k.set("regNumber",o.regNumber),k.set("reserve",Number(v)),k.set("productCode",o.productCode),k.set("stocks",h),k.set("product_info",o.product_info),k.set("producer",o.producer),k.set("packingUnit",o.packingUnit),k.set("packageContent",o.packageContent),k.set("position",o.position),k.set("warning_num",Number(o.warning_num)),k.set("stocktype",Number(o.warning_num)>=Number(v)?0:1),k.set("product_state",o.product_state),e.getStorageSync("category")&&(k.set("second_class",p),k.set("goodsClass",g)),k.set("id",e.getStorageSync("now_product").objectId),k.set("userId",c),k.save().then(function(t){e.hideLoading(),a.handledata(),s.default.log(e.getStorageSync("user").nickName+"修改了产品'"+o.goodsName+"'信息",5,e.getStorageSync("now_product").objectId),e.setStorageSync("is_add",!0),e.redirectTo({url:"/pages/manage/goods/goods"}),setTimeout(function(){e.showToast({title:"修改成功"})},1e3)}).catch(function(e){console.log(e)})}}catch(j){d=!0,l=j}finally{try{u||null==m.return||m.return()}finally{if(d)throw l}}}else{var S=!0,N=!1,w=void 0;try{for(var P,C=function(){var r=P.value,u=n.default.Query("Goods");u.equalTo("userId","==",i),u.equalTo("goodsName","==",o.goodsName),u.equalTo("position","==",o.position),u.equalTo("stocks","==",r.stock.objectId),u.find().then(function(i){if(i.length>=1)e.showToast({title:"你的库存中已存在此产品",icon:"none"});else{var u=r.reserve,d=r.stock.objectId||"",l=n.default.Pointer("stocks"),f=l.set(d),m=n.default.Query("Goods");m.set("goodsIcon",t),m.set("goodsName",o.goodsName),m.set("costPrice",o.costPrice?o.costPrice:"0"),m.set("retailPrice",o.retailPrice?o.retailPrice:"0"),m.set("regNumber",o.regNumber),m.set("reserve",Number(u)),m.set("productCode",o.productCode),m.set("stocks",f),m.set("product_info",o.product_info),m.set("producer",o.producer),m.set("packingUnit",o.packingUnit),m.set("packageContent",o.packageContent),m.set("position",o.position),m.set("warning_num",Number(o.warning_num)),m.set("stocktype",Number(o.warning_num)>=Number(u)?0:1),m.set("product_state",o.product_state),e.getStorageSync("category")&&(m.set("second_class",p),m.set("goodsClass",g)),m.set("userId",c),m.save().then(function(t){e.hideLoading(),s.default.log(e.getStorageSync("user").nickName+"增加了产品'"+o.goodsName+"'",5,t.objectId),e.setStorageSync("is_add",!0),e.showToast({title:"上传成功"}),a.handledata()}).catch(function(e){console.log(e)})}})},I=a.stocks[Symbol.iterator]();!(S=(P=I.next()).done);S=!0)C()}catch(j){N=!0,w=j}finally{try{S||null==I.return||I.return()}finally{if(N)throw w}}}},handledata:function(){a.goodsName="",a.costPrice="",a.retailPrice="",a.packageContent="",a.packingUnit="",a.warning_num="",a.producer="",a.regNumber="",a.position="",a.product_info="",a.productCode="",a.category="",a.reserve=[0],a.goodsIcon="",a.stocks=[{stock:{stock_name:"默认仓库"},reserve:0}],a.producttime="",a.nousetime=""}}};o.default=f}).call(this,t("543d")["default"])},"66da":function(e,o,t){"use strict";var n=t("2079"),s=t.n(n);s.a},"81ca":function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement;e._self._c},s=[];t.d(o,"a",function(){return n}),t.d(o,"b",function(){return s})},eb9f:function(e,o,t){"use strict";t.r(o);var n=t("81ca"),s=t("2c83");for(var r in s)"default"!==r&&function(e){t.d(o,e,function(){return s[e]})}(r);t("66da");var a=t("2877"),c=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,null,null);o["default"]=c.exports}},[["2160","common/runtime","common/vendor"]]]);