(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-finance-CPHistory-producerOutOrder-producerOutOrder"],{"25c8":function(t,e,i){"use strict";var a=i("881c"),n=i.n(a);n.a},"304d":function(t,e,i){"use strict";(function(t){var a=i("ee27");i("a434"),i("a9e3"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,o,r=a(i("54f8")),s=a(i("9546")),c=a(i("7fd5")),u=(a(i("7faa")),{data:function(){return{producer:{},user:uni.getStorageSync("user"),identity:uni.getStorageSync("identity"),Images:[],account:"",button_disabled:!1,beizhu_text:"",real_money:0,nowDay:c.default.getDay(0,!0,!0),producerOutOrders:""}},onLoad:function(t){o=this,n=uni.getStorageSync("uid"),o.producerOutOrders=uni.getStorageSync("producerOutOrders");var e,i=(0,r.default)(o.producerOutOrders);try{for(i.s();!(e=i.n()).done;){var a=e.value;o.real_money+=Number(a.shouldGetMoney)}}catch(s){i.e(s)}finally{i.f()}uni.setNavigationBarTitle({title:"新增付款单"})},onShow:function(){if(o.producer=uni.getStorageSync("producer"),o.account=uni.getStorageSync("account"),uni.getStorageSync("category"))if(o.category=uni.getStorageSync("category"),2==o.category.type){var t=s.default.Pointer("financeFristClass");t.set(o.category.parent.objectId);var e=s.default.Pointer("financeSecondClass");e.set(o.category.objectId)}else{var i=s.default.Pointer("financeFristClass");i.set(o.category.objectId)}},methods:{inputShouldGetMoney:function(t,e){var i=Number(t.detail.value);i>o.producerOutOrders[e].debt?o.producerOutOrders[e].shouldGetMoney=o.producerOutOrders[e].debt:o.producerOutOrders[e].shouldGetMoney=t.detail.value,o.real_money=0;var a,n=(0,r.default)(o.producerOutOrders);try{for(n.s();!(a=n.n()).done;){var s=a.value;o.real_money+=Number(s.shouldGetMoney)}}catch(c){n.e(c)}finally{n.f()}},bindDateChange:function(t){o.nowDay=t.detail.value+" 00:00:00"},removeImg:function(t){o.Images.splice(t,1),o.Images=o.Images},upload_image:function(){o.user.is_vip?uni.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var e,i,a=Date.parse(new Date),n=t.tempFilePaths,c=(0,r.default)(n);try{for(c.s();!(i=c.n()).done;){var u=i.value;e=s.default.File(a+".jpg",u)}}catch(l){c.e(l)}finally{c.f()}e.save().then((function(t){var e,i=(0,r.default)(t);try{for(i.s();!(e=i.n()).done;){var a=e.value;o.Images.push(a.url)}}catch(l){i.e(l)}finally{i.f()}}))}}):uni.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(){var e=this;if(o.button_disabled=!0,""==uni.getStorageSync("producer")||void 0==uni.getStorageSync("producer"))return uni.showToast({icon:"none",title:"请选择客户"}),void(this.button_disabled=!1);if(""==uni.getStorageSync("account")||void 0==uni.getStorageSync("account"))return uni.showToast({icon:"none",title:"请选择付款账户"}),void(this.button_disabled=!1);var i=new Promise((function(e,i){var a=s.default.Query("accounts");a.get(o.account.objectId).then((function(i){i.set("money",i.money-Number(o.real_money)),i.save().then((function(i){var a=s.default.Pointer("producers"),r=a.set(o.producer.objectId),u=s.default.Pointer("accounts"),l=u.set(o.account.objectId),d=s.default.Pointer("_User"),v=d.set(n),f=uni.getStorageSync("masterId"),p=s.default.Pointer("_User"),g=p.set(f),y=s.default.Query("order_opreations");y.set("account",l),y.set("producer",r),y.set("master",v),y.set("opreater",g),y.set("real_money",Number(o.real_money)),y.set("beizhu",o.beizhu_text),y.set("producerOutOrders",o.producerOutOrders),y.set("createdTime",{__type:"Date",iso:o.nowDay}),y.set("type",1),y.set("extra_type",5),y.set("Images",o.Images),y.save().then((function(t){c.default.log(uni.getStorageSync("user").nickName+"操作'"+o.producer.producer_name+"'供应商付款了￥"+o.real_money+"元",6,t.objectId),e("success")})).catch((function(e){t.log(e)}))}))}))})),a=new Promise((function(e,i){var a,n=(0,r.default)(o.producerOutOrders);try{for(n.s();!(a=n.n()).done;){var c=a.value,u=s.default.Query("order_opreations");u.set("id",c.objectId),u.set("debt",Number(c.debt)-Number(c.shouldGetMoney)),u.set("haveGetMoney",Number(c.haveGetMoney)+Number(c.shouldGetMoney)),u.save().then((function(i){e("success"),t.log(i)})).catch((function(e){t.log(e)}))}}catch(l){n.e(l)}finally{n.f()}}));Promise.all([i,a]).then((function(i){t.log(i),e.button_disabled=!1,uni.navigateBack({delta:1}),setTimeout((function(){uni.showToast({icon:"none",title:"付款成功"})}),1e3)})).catch((function(e){t.log(e)}))}}});e.default=u}).call(this,i("5a52")["default"])},"46cd":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticClass:"backgroundfff",staticStyle:{padding:"0 20rpx","margin-top":"20rpx"}},[i("v-uni-view",{staticClass:"newOrderTitle borderBot"},[t._v("基础信息")]),i("v-uni-view",[i("v-uni-view",{staticClass:"display_flex",staticStyle:{padding:"10rpx 0","border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticStyle:{width:"140rpx"}},[t._v("供应商"),i("v-uni-text",{staticStyle:{color:"#f30"}},[t._v("*")])],1),i("v-uni-view",{staticClass:"kaidan_rightinput display_flex",staticStyle:{width:"100%","justify-content":"flex-end"}},[i("v-uni-input",{staticStyle:{"text-align":"right","margin-right":"20rpx"},attrs:{placeholder:"选择供应商",disabled:"true",value:t.producer.producer_name}})],1)],1),i("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{padding:"10rpx 0","border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticStyle:{width:"140rpx"}},[t._v("付款日期")]),i("v-uni-picker",{attrs:{mode:"date",value:t.nowDay,end:t.nowDay},on:{change:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.bindDateChange.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",{staticStyle:{"margin-right":"20rpx"}},[t._v(t._s(t.nowDay.split(" ")[0]))]),i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"backgroundfff",staticStyle:{padding:"0 20rpx","margin-top":"20rpx"}},[i("v-uni-view",{staticClass:"newOrderTitle borderBot"},[t._v("要付款的单据")]),i("v-uni-view",t._l(t.producerOutOrders,(function(e,a){return i("v-uni-view",{key:a,staticClass:"borderBot",staticStyle:{padding:"20rpx 0",width:"100%"}},[i("v-uni-view",{staticClass:"color333"},[t._v("单据编号："+t._s(e.objectId))]),i("v-uni-view",{staticClass:"color333"},[t._v("单据日期："+t._s(e.createdAt))]),i("v-uni-view",{staticClass:"display_flex_bet"},[i("v-uni-view",{staticClass:"color333"},[t._v("应付金额："+t._s(e.real_money)+"元")]),i("v-uni-view",{staticClass:"moneyIcon"},[t._v("待收：￥"+t._s(e.debt)+"元")])],1),i("v-uni-view",{staticClass:"color333"},[t._v("已付："+t._s(e.haveGetMoney)+"元")]),i("v-uni-view",{staticClass:"display_flex_bet"},[i("v-uni-view",{staticClass:"color333 display_flex"},[t._v("本次付款(可编辑)"),i("v-uni-text",{staticStyle:{color:"#f30","font-size":"20rpx"}},[t._v("*")])],1),i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-input",{staticStyle:{"text-align":"right",color:"#f30","font-weight":"bold","font-size":"28rpx"},attrs:{placeholder:"请输入本次付款",type:"digit"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputShouldGetMoney(e,a)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.inputShouldGetMoney(e,a)}},model:{value:e.shouldGetMoney,callback:function(i){t.$set(e,"shouldGetMoney",i)},expression:"item.shouldGetMoney"}}),i("v-uni-text",{staticStyle:{"margin-left":"10rpx"}},[t._v("元")])],1)],1)],1)})),1)],1),i("v-uni-view",{staticClass:"backgroundfff",staticStyle:{padding:"0 20rpx","margin-top":"20rpx"}},[i("v-uni-view",{staticClass:"newOrderTitle borderBot"},[t._v("付款信息")]),i("v-uni-view",[i("v-uni-navigator",{staticClass:"display_flex_bet",staticStyle:{padding:"10rpx 0","border-bottom":"1rpx solid#F7F7F7"},attrs:{"hover-class":"none",url:"/pages/finance/myData/account/account?type=choose"}},[i("v-uni-view",{staticStyle:{width:"140rpx"}},[t._v("付款账户"),i("v-uni-text",{staticStyle:{color:"#f30"}},[t._v("*")])],1),i("v-uni-view",{staticClass:"kaidan_rightinput display_flex",staticStyle:{"justify-content":"flex-end"}},[i("v-uni-input",{staticStyle:{"text-align":"right","margin-right":"20rpx"},attrs:{placeholder:"选择付款账户",disabled:"true",value:t.account?t.account.name:""}}),i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1),i("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{padding:"10rpx 0","border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",[t._v("付款人"),i("v-uni-text",{staticStyle:{"font-size":"20rpx",color:"#f30"}},[t._v("*")])],1),i("v-uni-view",{staticClass:"kaidan_rightinput",staticStyle:{"text-align":"right"}},[t._v(t._s(t.user.nickName))])],1)],1)],1),i("v-uni-view",{staticClass:"backgroundfff",staticStyle:{padding:"0 20rpx","margin-top":"20rpx"}},[i("v-uni-view",{staticClass:"newOrderTitle borderBot"},[t._v("备注")]),i("v-uni-view",[i("v-uni-input",{staticClass:"beizhu_style",attrs:{placeholder:"请输入备注",name:"input_beizhu"},model:{value:t.beizhu_text,callback:function(e){t.beizhu_text=e},expression:"beizhu_text"}})],1)],1),i("v-uni-view",{staticClass:"backgroundfff",staticStyle:{padding:"0 20rpx","margin-top":"20rpx"}},[i("v-uni-view",{staticClass:"newOrderTitle borderBot"},[t._v("上传凭证图(会员可用)")]),i("v-uni-view",[i("v-uni-view",{staticStyle:{width:"100%",padding:"20rpx 0"}},[i("v-uni-view",{staticClass:"upload_image display_flex"},[t._l(t.Images,(function(e,a){return t.Images&&t.Images.length>0?i("v-uni-view",{key:a,staticStyle:{position:"relative"}},[i("v-uni-image",{staticStyle:{width:"180rpx",height:"180rpx","margin-right":"10rpx"},attrs:{src:e}}),i("fa-icon",{staticStyle:{position:"absolute",top:"-10rpx",right:"-10rpx"},attrs:{type:"times-circle-o",size:"20",color:"#426ab3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.removeImg(a)}}})],1):t._e()})),t.Images.length<3?i("v-uni-view",{staticStyle:{width:"180rpx",height:"180rpx","line-height":"220rpx","text-align":"center",border:"1rpx solid#ccc","border-radius":"16rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upload_image.apply(void 0,arguments)}}},[i("fa-icon",{attrs:{type:"plus-square-o",size:"40",color:"#426ab3"}})],1):t._e()],2)],1)],1)],1),i("v-uni-view",{staticClass:"bottomEle display_flex_bet",staticStyle:{padding:"0 30rpx","margin-top":"60rpx"}},[i("v-uni-view",[i("v-uni-text",[t._v("总计付款：￥"+t._s(t.real_money||0))])],1),i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-button",{staticClass:"confrim_button",staticStyle:{background:"#426ab3"},attrs:{disabled:t.button_disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[t._v("完成")])],1)],1)],1)],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},"5e1f":function(t,e,i){"use strict";i.r(e);var a=i("304d"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"881c":function(t,e,i){var a=i("8f86");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("70fed5ab",a,!0,{sourceMap:!1,shadowMode:!1})},"8f86":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".page[data-v-c6856084]{color:#4d4d4d;font-size:%?28?%;height:calc(100vh - %?110?%);overflow:scroll}.uni-input-input[data-v-c6856084]{font-size:%?28?%}.bottomEle[data-v-c6856084]{position:fixed;bottom:0;left:0;width:calc(100% - %?30?%);background:#fafafa;padding:%?20?% %?0?% %?20?% %?30?%;font-weight:700}.pro_list[data-v-c6856084]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.pro_listitem[data-v-c6856084]{background-color:#fff;padding:%?10?% %?20?%;border-bottom:%?1?% solid#ddd}.pro_allmoney[data-v-c6856084]{background-color:#fff;padding:%?10?% %?20?%;text-align:right;font-size:%?32?%;color:#f30}.beizhu_style[data-v-c6856084]{text-align:left;background-color:#fff;max-height:%?100?%;padding:%?20?% 0}.confrim_button[data-v-c6856084]{background:#1651aa;color:#fff;font-weight:700;font-size:%?32?%;border-radius:unset;padding:0 %?50?%}",""]),t.exports=e},d58d:function(t,e,i){"use strict";i.r(e);var a=i("46cd"),n=i("5e1f");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("25c8");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"c6856084",null,!1,a["a"],r);e["default"]=c.exports}}]);