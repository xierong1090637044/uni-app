(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/commonNew/goods_out/gooSellNew/gooSellNew"],{"1f5f":function(e,t,o){"use strict";o.r(t);var n=o("af18"),r=o("2721");for(var a in r)"default"!==a&&function(e){o.d(t,e,(function(){return r[e]}))}(a);o("a253");var u,c=o("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);t["default"]=s.exports},2721:function(e,t,o){"use strict";o.r(t);var n=o("2abf"),r=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"2abf":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=u(o("9546")),a=u(o("7fd5"));u(o("9f50")),u(o("856d")),u(o("a2fc"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=s(e))){var t=0,o=function(){};return{s:o,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,a=!0,u=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,r=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw r}}}}function s(e,t){if(e){if("string"===typeof e)return i(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var l={data:function(){return{user:e.getStorageSync("user"),identity:e.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,allCostPrice:0,really_total_money:0,custom:null,account:"",outType:"",discount:"",pickerTypes:[{desc:"自提",type:1},{desc:"快递",type:2},{desc:"物流",type:3},{desc:"送货上门",type:4}],expressNum:"",total_num:0,nowDay:a.default.getDay(0,!0),otherMoney:0,discountMoney:0,haveGetMoney:0,sellLaterOrderId:""}},onLoad:function(t){n=this,e.getStorageSync("uid"),n.products=e.getStorageSync("products"),n.sellLaterOrderId=t.id||"",n.user.rights&&n.user.rights.othercurrent&&(n.othercurrent=n.user.rights.othercurrent);for(var o=0;o<n.products.length;o++)n.all_money=Number((n.products[o].total_money+n.all_money).toFixed(2)),n.really_total_money=Number((n.products[o].really_total_money+n.really_total_money).toFixed(2)),n.total_num+=Number(n.products[o].num),n.allCostPrice=n.allCostPrice+Number(n.products[o].num)*Number(n.products[o].costPrice);n.real_money=Number(n.all_money.toFixed(2)),n.haveGetMoney=Number(n.all_money.toFixed(2))},onShow:function(){n.custom=e.getStorageSync("custom"),n.account=e.getStorageSync("account"),n.stock=e.getStorageSync("warehouse")?e.getStorageSync("warehouse")[0].stock:"",e.getStorageSync("haveGetMoney")&&(n.haveGetMoney=e.getStorageSync("haveGetMoney")),e.getStorageSync("otherMoney")&&(n.otherMoney=e.getStorageSync("otherMoney"))},methods:{inputOtherMoney:function(e){n.haveGetMoney=Number(n.all_money.toFixed(2))+Number(e.detail.value)-Number(n.discountMoney)},inputDiscountMoney:function(e){n.haveGetMoney=Number(n.all_money.toFixed(2))+Number(n.otherMoney)-Number(e.detail.value)},bindDateChange:function(e){n.nowDay=e.detail.value+" 00:00:00"},scan_code:function(){e.scanCode({onlyFromCamera:!0,success:function(e){console.log("条码类型："+e.scanType),console.log("条码内容："+e.result),n.expressNum=e.result}})},removeImg:function(e){n.Images.splice(e,1),n.Images=n.Images},upload_image:function(){n.user.is_vip?e.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){console.log(e);var t,o,a=Date.parse(new Date),u=e.tempFilePaths,s=c(u);try{for(s.s();!(o=s.n()).done;){var i=o.value;t=r.default.File(a+".jpg",i)}}catch(l){s.e(l)}finally{s.f()}t.save().then((function(e){var t,o=c(e);try{for(o.s();!(t=o.n()).done;){var r=t.value;n.Images.push(r.url)}}catch(l){o.e(l)}finally{o.f()}}))}}):e.showToast({title:"您还不是会员，无法使用",icon:"none"})},select_outType:function(e){n.outType=n.pickerTypes[e.detail.value],2==n.outType.type&&3==n.outType.type||(n.expressNum="")},confirmOrder:function(t){this.button_disabled=!0;var o={goods:n.products,beizhu:t,real_num:n.total_num,stockId:n.stock?n.stock.objectId:"",stockName:n.stock?n.stock.stock_name:"",allCostPrice:n.allCostPrice,otherMoney:n.otherMoney,discountMoney:n.discountMoney,haveGetMoney:n.haveGetMoney,real_money:n.real_money,all_money:n.all_money,accountId:n.account?n.account.objectId:"",customId:n.custom.objectId,Images:n.Images,opreater:e.getStorageSync("masterId"),nowDay:n.nowDay,typeDesc:n.outType.desc,expressNum:n.expressNum,negativeOut:getApp().globalData.setting.negativeOut,autoRetailPrice:getApp().globalData.setting.autoRetailPrice,sellLaterOrderId:n.sellLaterOrderId};2==n.identity&&(e.getStorageSync("setting")?o.isChecked=e.getStorageSync("setting").isChecked:o.isChecked=!1),n.$http.Post("stock_goodOutBuy",o).then((function(t){1==t.code&&(e.hideLoading(),e.setStorageSync("is_option",!0),e.showToast({title:"销售出库成功"}),setTimeout((function(){e.navigateBack({delta:2}),n.button_disabled=!1}),1e3))}))},formSubmit:function(t){e.getStorageSync("identity");""!=e.getStorageSync("custom")&&void 0!=e.getStorageSync("custom")?null!=n.stock&&""!=n.stock&&void 0!=n.stock?n.confirmOrder(t.detail.value.input_beizhu):e.showToast({icon:"none",title:"请选择仓库"}):e.showToast({icon:"none",title:"请选择客户"})}}};t.default=l}).call(this,o("543d")["default"])},3732:function(e,t,o){"use strict";(function(e){o("d510"),o("921b");n(o("66fd"));var t=n(o("1f5f"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},"3f2d":function(e,t,o){},a253:function(e,t,o){"use strict";var n=o("3f2d"),r=o.n(n);r.a},af18:function(e,t,o){"use strict";var n,r=function(){var e=this,t=e.$createElement,o=(e._self._c,Number(e.real_money)),n=Number(e.haveGetMoney),r=Number(e.discountMoney),a=Number(e.otherMoney),u=e.nowDay.split(" "),c=Number(e.real_money),s=Number(e.discountMoney),i=Number(e.otherMoney);e.$mp.data=Object.assign({},{$root:{m0:o,m1:n,m2:r,m3:a,g0:u,m4:c,m5:s,m6:i}})},a=[];o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return n}))}},[["3732","common/runtime","common/vendor"]]]);