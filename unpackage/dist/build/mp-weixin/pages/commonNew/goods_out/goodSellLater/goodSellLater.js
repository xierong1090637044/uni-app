(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/commonNew/goods_out/goodSellLater/goodSellLater"],{1084:function(e,t,o){"use strict";var a,n=function(){var e=this,t=e.$createElement,o=(e._self._c,e.setDay.split(" ")),a=e.giveDay.split(" ");e.$mp.data=Object.assign({},{$root:{g0:o,g1:a}})},r=[];o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return r})),o.d(t,"a",(function(){return a}))},"11cf":function(e,t,o){"use strict";(function(e){o("a961"),o("921b");a(o("66fd"));var t=a(o("c8e4"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},"143f":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n,r=u(o("c74b")),s=u(o("df06"));u(o("da3f")),u(o("b410")),u(o("428b"));function u(e){return e&&e.__esModule?e:{default:e}}var i={data:function(){return{user:e.getStorageSync("user"),identity:e.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,allCostPrice:0,really_total_money:0,custom:null,account:"",outType:"",discount:"",pickerTypes:[{desc:"自提",type:1},{desc:"快递",type:2},{desc:"物流",type:3},{desc:"送货上门",type:4}],expressNum:"",total_num:0,wetherDebt:!1,nowDay:s.default.getDay(0,!0,!0),setDay:s.default.getDay(0,!0,!0),giveDay:s.default.getDay(1,!0,!0),otherMoney:0,haveGetMoney:0}},onLoad:function(){n=this,a=e.getStorageSync("uid"),this.products=e.getStorageSync("products"),e.setNavigationBarTitle({title:"销售订单"}),n.user.rights&&n.user.rights.othercurrent&&(n.othercurrent=n.user.rights.othercurrent)},onShow:function(){this.really_total_money=0,this.all_money=0,this.real_money=0,this.total_num=0,n.allCostPrice=0,n.custom=e.getStorageSync("custom"),n.account=e.getStorageSync("account");for(var t=0;t<this.products.length;t++)this.all_money=Number((this.products[t].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[t].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[t].num),n.allCostPrice=n.allCostPrice+Number(n.products[t].num)*Number(n.products[t].costPrice);this.real_money=Number(this.all_money.toFixed(2))},methods:{changeDebtStatus:function(e){0==e.detail.value&&(this.real_money=Number(this.all_money.toFixed(2))),n.wetherDebt=e.detail.value},bindDateChange:function(e){n.setDay=e.detail.value+" 00:00:00"},bindGiveDateChange:function(e){n.giveDay=e.detail.value+" 00:00:00"},inputOtherMoney:function(e){n.real_money=Number(n.all_money.toFixed(2)),n.otherMoney=Number(e.detail.value),n.real_money=n.real_money+Number(e.detail.value)},scan_code:function(){e.scanCode({onlyFromCamera:!0,success:function(e){n.expressNum=e.result}})},removeImg:function(e){n.Images.splice(e,1),n.Images=n.Images},upload_image:function(){n.user.is_vip?e.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){console.log(e);var t,o=Date.parse(new Date),a=e.tempFilePaths,s=!0,u=!1,i=void 0;try{for(var l,c=a[Symbol.iterator]();!(s=(l=c.next()).done);s=!0){var d=l.value;t=r.default.File(o+".jpg",d)}}catch(y){u=!0,i=y}finally{try{s||null==c.return||c.return()}finally{if(u)throw i}}t.save().then((function(e){var t=!0,o=!1,a=void 0;try{for(var r,s=e[Symbol.iterator]();!(t=(r=s.next()).done);t=!0){var u=r.value;n.Images.push(u.url)}}catch(y){o=!0,a=y}finally{try{t||null==s.return||s.return()}finally{if(o)throw a}}}))}}):e.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(t){e.getStorageSync("identity");n.button_disabled=!0;t.detail.formId;var o=3;if(e.showLoading({title:"上传中..."}),""==e.getStorageSync("custom")||void 0==e.getStorageSync("custom"))return e.showToast({icon:"none",title:"请选择客户"}),void(this.button_disabled=!1);new Array;var u=[],i=r.default.Pointer("customs"),l=i.set(e.getStorageSync("custom").objectId),c=[],d=r.default.Pointer("_User"),y=d.set(a),m=e.getStorageSync("masterId"),f=r.default.Pointer("_User"),g=f.set(m),h=r.default.Query("order_opreations");h.set("detail",u),h.set("bills",c),h.set("beizhu",t.detail.value.input_beizhu),h.set("type",-3),h.set("extra_type",o),h.set("opreater",g),h.set("master",y),h.set("real_num",n.total_num),h.set("goodsName",n.products[0].goodsName),h.set("allCostPrice",n.allCostPrice),h.set("all_money",n.all_money),h.set("otherMoney",Number(n.otherMoney)),h.set("haveGetMoney",Number(n.haveGetMoney)),h.set("real_money",Number(n.real_money)),h.set("recordType","new"),h.set("giveDay",{__type:"Date",iso:n.giveDay}),h.set("setDay",{__type:"Date",iso:n.setDay}),h.set("createdTime",{__type:"Date",iso:n.nowDay}),h.set("custom",l),h.set("Images",n.Images),h.set("status",!1),h.set("opreatGood",n.products),h.save().then((function(t){var o=t.objectId;e.showToast({title:"生成销售订单",icon:"success",duration:500,success:function(){setTimeout((function(){e.hideLoading(),e.removeStorageSync("customs"),e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.setStorageSync("is_option",!0),n.button_disabled=!1,s.default.log(e.getStorageSync("user").nickName+"生成了'"+n.products[0].goodsName+"'等"+n.products.length+"商品的销售订单，暂未出库",-12,o),e.redirectTo({url:"/pages/report/EnteringHistory/SellDetail/SellLaterDetail?id="+o})}),500)}})}))}}};t.default=i}).call(this,o("543d")["default"])},"3b15":function(e,t,o){"use strict";var a=o("fa9a"),n=o.n(a);n.a},5212:function(e,t,o){"use strict";o.r(t);var a=o("143f"),n=o.n(a);for(var r in a)"default"!==r&&function(e){o.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},c8e4:function(e,t,o){"use strict";o.r(t);var a=o("1084"),n=o("5212");for(var r in n)"default"!==r&&function(e){o.d(t,e,(function(){return n[e]}))}(r);o("3b15");var s,u=o("f0c5"),i=Object(u["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],s);t["default"]=i.exports},fa9a:function(e,t,o){}},[["11cf","common/runtime","common/vendor"]]]);