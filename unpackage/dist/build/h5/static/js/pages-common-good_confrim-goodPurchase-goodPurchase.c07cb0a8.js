(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-good_confrim-goodPurchase-goodPurchase"],{"24a1":function(e,t,o){var i=o("24fb");t=i(!1),t.push([e.i,".page[data-v-6206d535]{color:#4d4d4d;font-size:%?28?%;height:calc(100vh - %?110?%);overflow:scroll}.display_flex_bet[data-v-6206d535]{background:#fff}.bottomEle[data-v-6206d535]{position:fixed;bottom:0;left:0;width:calc(100% - %?30?%);background:#fafafa;padding:%?20?% %?0?% %?20?% %?30?%;font-weight:700}.pro_list[data-v-6206d535]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.pro_listitem[data-v-6206d535]{background-color:#fff;padding:%?10?% %?20?%;border-bottom:%?1?% solid#ddd}.pro_allmoney[data-v-6206d535]{background-color:#fff;padding:%?10?% %?20?%;text-align:right;font-size:%?32?%;color:#f30}.beizhu_style[data-v-6206d535]{text-align:right;width:calc(100% - %?40?%);background-color:#fff;max-height:%?100?%;padding:%?10?% 0}.confrim_button[data-v-6206d535]{background:#1651aa;color:#fff;font-weight:700;font-size:%?32?%;border-radius:unset;padding:0 %?50?%}",""]),e.exports=t},"408a":function(e,t,o){var i=o("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=i(e))throw TypeError("Incorrect invocation");return+e}},"4eab":function(e,t,o){"use strict";(function(e){var i=o("ee27");o("c975"),o("a434"),o("a9e3"),o("b6802"),o("d3b7"),o("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n,r,s=i(o("54f8")),u=i(o("9546")),c=i(o("7fd5")),d=(i(o("a2fc")),i(o("9f50"))),l=(i(o("856d")),{data:function(){return{user:uni.getStorageSync("user"),identity:uni.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,account:"",button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,really_total_money:0,producer:null,total_num:0,nowDay:c.default.getDay(0,!0),canOpretion:!0,shop:"",wetherDebt:!1}},onLoad:function(){n=this,a=uni.getStorageSync("uid"),this.products=uni.getStorageSync("products");for(var e=0;e<this.products.length;e++)this.all_money=Number((this.products[e].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[e].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[e].num);this.real_money=Number(this.all_money.toFixed(2)),n.user.rights&&n.user.rights.othercurrent&&(n.othercurrent=n.user.rights.othercurrent)},onShow:function(){if(n.producer=uni.getStorageSync("producer"),n.account=uni.getStorageSync("account"),uni.getStorageSync("shop")){n.shop=uni.getStorageSync("shop");var e=u.default.Pointer("shops");r=e.set(n.shop.objectId)}},methods:{changeDebtStatus:function(e){0==e.detail.value&&(this.real_money=Number(this.all_money.toFixed(2))),n.wetherDebt=e.detail.value},bindDateChange:function(e){n.nowDay=e.detail.value+" 00:00:00"},changeStatus:function(e){n.canOpretion=e.detail.value},removeImg:function(e){n.Images.splice(e,1),n.Images=n.Images},upload_image:function(){n.user.is_vip?uni.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var t,o,i=Date.parse(new Date),a=e.tempFilePaths,r=(0,s.default)(a);try{for(r.s();!(o=r.n()).done;){var c=o.value;t=u.default.File(i+".jpg",c)}}catch(d){r.e(d)}finally{r.f()}t.save().then((function(e){var t,o=(0,s.default)(e);try{for(o.s();!(t=o.n()).done;){var i=t.value;n.Images.push(i.url)}}catch(d){o.e(d)}finally{o.f()}}))}}):uni.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(t){uni.getStorageSync("identity");if(!this.button_disabled){this.button_disabled=!0;t.detail.formId;var o=1;if(uni.showLoading({title:"请勿退出..."}),""==uni.getStorageSync("producer")||void 0==uni.getStorageSync("producer"))return uni.showToast({icon:"none",title:"请选择供应商"}),void(this.button_disabled=!1);for(var i=new Array,s=[],l=[],p=[],f=0;f<this.products.length;f++){var g=Number(this.products[f].reserve)+this.products[f].num,v={},m=u.default.Query("Bills"),h=u.default.Pointer("_User"),_=h.set(a),y=u.default.Pointer("Goods"),b=y.set(this.products[f].header?this.products[f].header.objectId:this.products[f].objectId),w=uni.getStorageSync("masterId"),S=u.default.Pointer("_User"),x=S.set(w);if(m.set("goodsName",this.products[f].goodsName),m.set("retailPrice",this.products[f].modify_retailPrice.toString()),m.set("num",Number(this.products[f].num)),m.set("total_money",this.products[f].total_money),m.set("really_total_money",this.products[f].really_total_money),m.set("goodsId",b),m.set("userId",_),m.set("opreater",x),m.set("type",1),m.set("extra_type",o),m.set("status",n.canOpretion),m.set("createdTime",{__type:"Date",iso:n.nowDay}),n.producer){var k=u.default.Pointer("producers"),I=k.set(n.producer.objectId);m.set("producer",I)}var N={};if(this.products[f].stocks&&this.products[f].stocks.objectId){var P=u.default.Pointer("stocks"),C=P.set(this.products[f].stocks.objectId);m.set("stock",C),v.stock=this.products[f].stocks.stock_name,-1==l.indexOf(this.products[f].stocks.objectId)&&(l.push(this.products[f].stocks.objectId),p.push(this.products[f].stocks.stock_name))}v.goodsName=this.products[f].goodsName,v.modify_retailPrice=this.products[f].modify_retailPrice.toString(),v.retailPrice=this.products[f].retailPrice,v.total_money=this.products[f].total_money,N.costPrice=this.products[f].costPrice,N.retailPrice=this.products[f].retailPrice,N.objectId=this.products[f].objectId,N.reserve=g,this.products[f].selectd_model&&(N.selected_model=this.products[f].selected_model,N.models=this.products[f].models),v.goodsId=N,v.num=this.products[f].num,v.packingUnit=this.products[f].packingUnit,v.type=1,i.push(m),s.push(v)}u.default.Query("Bills").saveAll(i).then((function(e){for(var i=[],f=0;f<e.length;f++)i.push(e[f].success.objectId);var g=u.default.Pointer("_User"),v=g.set(a),m=uni.getStorageSync("masterId"),h=u.default.Pointer("_User"),_=h.set(m),y=u.default.Query("order_opreations");if(y.set("beizhu",t.detail.value.input_beizhu),y.set("detail",s),y.set("real_num",n.total_num),y.set("type",1),y.set("extra_type",o),y.set("bills",i),y.set("opreater",_),y.set("master",v),y.set("stockIds",l),y.set("stockNames",p),y.set("goodsName",n.products[0].goodsName),y.set("real_money",Number(n.real_money)),y.set("debt",n.all_money-Number(n.real_money)),n.shop&&y.set("shop",r),n.account){var b=u.default.Pointer("accounts"),w=b.set(n.account.objectId);y.set("account",w);var S=u.default.Query("accounts");S.get(n.account.objectId).then((function(e){e.set("money",e.money-Number(n.real_money)),e.save().then((function(e){}))}))}if(y.set("createdTime",{__type:"Date",iso:n.nowDay}),n.producer){var x=u.default.Pointer("producers"),k=x.set(n.producer.objectId);if(y.set("producer",k),n.all_money-Number(n.real_money)>0){var I=u.default.Query("producers");I.get(n.producer.objectId).then((function(e){var t=null==e.debt?0:e.debt;t+=n.all_money-Number(n.real_money);var o=u.default.Query("producers");o.get(n.producer.objectId).then((function(e){e.set("debt",t),e.save()}))}))}}y.set("all_money",n.all_money),y.set("Images",n.Images),y.set("status",n.canOpretion),y.save().then((function(e){var t=e.objectId,o=e.createdAt;n.canOpretion?c.default.enterAddGoodNum(n.products,"purchase").then((function(e){uni.hideLoading(),uni.setStorageSync("is_option",!0),uni.removeStorageSync("_warehouse"),uni.removeStorageSync("out_warehouse"),uni.removeStorageSync("category"),uni.removeStorageSync("warehouse"),uni.showToast({title:"产品采购成功"}),setTimeout((function(){var e={};e.goodsName=n.products[0].goodsName,e.total_num=n.total_num,e.createdAt=o,e.operationId=t,d.default.sendTempMini(e,"enter"),n.button_disabled=!1,c.default.log(uni.getStorageSync("user").nickName+"采购了'"+n.products[0].goodsName+"'等"+n.products.length+"商品",1,t),uni.navigateBack({delta:2})}),500)})):(uni.hideLoading(),uni.setStorageSync("is_option",!0),uni.removeStorageSync("_warehouse"),uni.removeStorageSync("out_warehouse"),uni.removeStorageSync("category"),uni.removeStorageSync("warehouse"),uni.showToast({title:"产品采购成功"}),setTimeout((function(){n.button_disabled=!1,c.default.log(uni.getStorageSync("user").nickName+"采购了'"+n.products[0].goodsName+"'等"+n.products.length+"商品，还未入库",11,t),uni.navigateBack({delta:2})}),500))}))}),(function(t){e.log("异常处理")}))}}}});t.default=l}).call(this,o("5a52")["default"])},"861c":function(e,t,o){"use strict";o.r(t);var i=o("e56a"),a=o("a98a");for(var n in a)"default"!==n&&function(e){o.d(t,e,(function(){return a[e]}))}(n);o("b44b");var r,s=o("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"6206d535",null,!1,i["a"],r);t["default"]=u.exports},"9f50":function(e,t,o){"use strict";(function(e){var i=o("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(o("9546")),n={sendTempMini:function(e,t){if("enter"==t){var o={thing1:{value:e.goodsName+"...等",color:"#173177"},number2:{value:e.total_num,color:"#173177"},name3:{value:uni.getStorageSync("user").nickName},date4:{value:e.createdAt}};o.id=e.operationId,this.send_in_mini(o)}else if("out"==t){var i={thing1:{value:e.goodsName+"...等",color:"#173177"},number2:{value:e.total_num,color:"#173177"},name3:{value:uni.getStorageSync("user").nickName},time4:{value:e.createdAt}};i.id=e.operationId,this.send_out_mini(i)}},send_in:function(t){var o=uni.getStorageSync("setting").wx_openid;uni.request({url:"https://www.jimuzhou.com/api/send_temp.php",method:"POST",data:{openid:o,frist:t.frist,data1:t.data1,data2:t.data2,remark:t.remark,url:t.url,type:"in"},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.log(t)}})},send_in_noconfrim:function(t){var o=uni.getStorageSync("setting").wx_openid;uni.request({url:"https://www.jimuzhou.com/api/send_temp.php",method:"POST",data:{openid:o,frist:t.frist,data1:t.data1,data2:t.data2,data3:t.data3,data4:t.data4,remark:t.remark,url:t.url,type:"in_noconfrim"},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.log(t)}})},send_in_mini:function(t){var o={touser:uni.getStorageSync("openid"),template_id:"G2UJEDEyAtGuBdO-Yv96yBi-UnTLhaInr-KzEXqZ-48",page:"/pages/report/EnteringHistory/detail/detail?id="+t.id,data:t,emphasis_keyword:""};a.default.sendWeAppMessage(o).then((function(t){e.log(t)})).catch((function(t){e.log(t)}))},send_out_mini:function(t){var o={touser:uni.getStorageSync("openid"),template_id:"BKT2_0OuWF3mLZGvFmpRzWFa_Dyr4EIppl_LFF1uRLE",page:"/pages/report/EnteringHistory/detail/detail?id="+t.id,data:t,emphasis_keyword:""};a.default.sendWeAppMessage(o).then((function(t){e.log(t)})).catch((function(t){e.log(t)}))},send_temp:function(t){var o=uni.getStorageSync("setting").wx_openid;uni.request({url:"https://www.jimuzhou.com/api/send_temp.php",method:"POST",data:{openid:o,data1:t.data1,data2:t.data2,data3:t.data3,data4:t.data4,remark:"备注:"+t.remark,url:t.url,type:"out"},header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.log(t)}})}};t.default=n}).call(this,o("5a52")["default"])},a2fc:function(e,t,o){"use strict";(function(e){var i=o("ee27");o("7db0"),o("a9e3"),o("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(o("54f8")),n=i(o("9546")),r={delete_goods:function(t){return new Promise((function(o,i){var r,s=0,u=(0,a.default)(t);try{for(u.s();!(r=u.n()).done;){var c=r.value,d=n.default.Query("Goods");d.destroy(c.objectId).then((function(e){s+=1,s==t.length&&o(!0)})).catch((function(t){e.log(t)}))}}catch(l){u.e(l)}finally{u.f()}}))},upload_good_withNoCan:function(t,o){return new Promise((function(i,a){var r=uni.getStorageSync("uid"),s=n.default.Pointer("_User"),u=s.set(r),c=t.reserve,d=n.default.Pointer("stocks"),l=d.set(o.objectId),p=n.default.Query("Goods");p.equalTo("userId","==",r),p.equalTo("goodsName","==",t.goodsName),p.equalTo("stocks","==",o.objectId),p.find().then((function(o){if(e.log(o),o.length>=1)i([!1,"该商品存在此店仓中"]);else{var a=n.default.Query("Goods");if(a.set("goodsName",t.goodsName),a.set("goodsIcon",t.goodsIcon),a.set("costPrice",t.costPrice),a.set("retailPrice",t.retailPrice),a.set("reserve",Number(t.reserve)),a.set("productCode",t.productCode?t.productCode:""),a.set("stocks",l),a.set("product_info",t.product_info?t.product_info:""),a.set("producer",t.producer?t.producer:""),a.set("packingUnit",t.packingUnit?t.packingUnit:""),a.set("packageContent",t.packageContent?t.packageContent:""),a.set("warning_num",Number(t.warning_num?t.warning_num:0)),a.set("stocktype",Number(t.warning_num?t.warning_num:0)>=Number(c)?0:1),t.second_class){var r=n.default.Pointer("class_user"),s=r.set(t.goodsClass);a.set("second_class",p);var d=n.default.Pointer("second_class"),p=d.set(t.second_class);a.set("goodsClass",s)}a.set("userId",u),a.save().then((function(t){e.log(t),i([!0,t])})).catch((function(t){e.log(t)}))}}))}))},upload_good:function(t){return new Promise((function(o,i){var a=JSON.parse(localStorage.getItem("bmob")).objectId,r=n.default.Pointer("_User"),s=r.set(a),u=n.default.Pointer("class_user"),c=u.set(t.goodsClass),d=n.default.Pointer("second_class"),l=d.set(t.second_class),p=n.default.Query("Goods");p.equalTo("userId","==",a),p.equalTo("goodsName","==",t.goodsName),p.equalTo("position","==",t.position),p.equalTo("stocks","==",t.stocks),p.find().then((function(i){if(e.log(i),i.length>=1)o([!1,i]);else{var a=t.reserve,r=n.default.Pointer("stocks"),u=r.set(t.stocks),d=n.default.Query("Goods");d.set("goodsName",t.goodsName),d.set("goodsIcon",t.goodsIcon),d.set("costPrice",t.costPrice),d.set("retailPrice",t.retailPrice),d.set("producttime",t.producttime),d.set("nousetime",t.nousetime),d.set("regNumber",t.regNumber),d.set("reserve",Number(t.reserve)),d.set("productCode",t.productCode),d.set("stocks",u),d.set("product_info",t.product_info),d.set("producer",t.producer),d.set("packingUnit",t.packingUnit),d.set("packageContent",t.packageContent),d.set("warning_num",Number(t.warning_num)),d.set("stocktype",Number(t.warning_num)>=Number(a)?0:1),d.set("second_class",l),d.set("goodsClass",c),d.set("userId",s),d.save().then((function(t){e.log(t),o([!0,t])})).catch((function(t){e.log(t)}))}}))}))},get_fristclass:function(){var e=JSON.parse(localStorage.getItem("bmob")).objectId;return new Promise((function(t,o){var i=n.default.Query("class_user");i.equalTo("parent","==",e),i.find().then((function(e){localStorage.setItem("frist_class",JSON.stringify(e)),t(e)}))}))},get_secondclass:function(e){return new Promise((function(t,o){var i=n.default.Query("class_user");i.field("second",e),i.relation("second_class").then((function(e){t(e.results)}))}))},getstock_list:function(e){var t=JSON.parse(localStorage.getItem("bmob")).objectId;return new Promise((function(o,i){var a=n.default.Query("stocks");a.order("-num"),a.include("charge","shop"),a.equalTo("parent","==",t),e&&a.equalTo("stock_name","==",{$regex:e+".*"}),a.limit(500),a.find().then((function(e){localStorage.setItem("stocks",JSON.stringify(e)),o(e)}))}))}};t.default=r}).call(this,o("5a52")["default"])},a98a:function(e,t,o){"use strict";o.r(t);var i=o("4eab"),a=o.n(i);for(var n in i)"default"!==n&&function(e){o.d(t,e,(function(){return i[e]}))}(n);t["default"]=a.a},b44b:function(e,t,o){"use strict";var i=o("f092"),a=o.n(i);a.a},b6802:function(e,t,o){"use strict";var i=o("23e7"),a=o("a691"),n=o("408a"),r=o("1148"),s=o("d039"),u=1..toFixed,c=Math.floor,d=function(e,t,o){return 0===t?o:t%2===1?d(e,t-1,o*e):d(e*e,t/2,o)},l=function(e){var t=0,o=e;while(o>=4096)t+=12,o/=4096;while(o>=2)t+=1,o/=2;return t},p=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){u.call({})}));i({target:"Number",proto:!0,forced:p},{toFixed:function(e){var t,o,i,s,u=n(this),p=a(e),f=[0,0,0,0,0,0],g="",v="0",m=function(e,t){var o=-1,i=t;while(++o<6)i+=e*f[o],f[o]=i%1e7,i=c(i/1e7)},h=function(e){var t=6,o=0;while(--t>=0)o+=f[t],f[t]=c(o/e),o=o%e*1e7},_=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==f[e]){var o=String(f[e]);t=""===t?o:t+r.call("0",7-o.length)+o}return t};if(p<0||p>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(g="-",u=-u),u>1e-21)if(t=l(u*d(2,69,1))-69,o=t<0?u*d(2,-t,1):u/d(2,t,1),o*=4503599627370496,t=52-t,t>0){m(0,o),i=p;while(i>=7)m(1e7,0),i-=7;m(d(10,i,1),0),i=t-1;while(i>=23)h(1<<23),i-=23;h(1<<i),m(1,1),h(2),v=_()}else m(0,o),m(1<<-t,0),v=_()+r.call("0",p);return p>0?(s=v.length,v=g+(s<=p?"0."+r.call("0",p-s)+v:v.slice(0,s-p)+"."+v.slice(s-p))):v=g+v,v}})},e56a:function(e,t,o){"use strict";var i,a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",[o("v-uni-view",{staticClass:"page"},[o("v-uni-view",{staticStyle:{"line-height":"70rpx",padding:"20rpx 20rpx 0",color:"#3D3D3D","font-weight":"bold"}},[e._v("已选产品")]),o("v-uni-view",e._l(e.products,(function(t,i){return o("v-uni-view",{key:i,staticClass:"pro_listitem"},[o("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#3D3D3D"}},[o("v-uni-view",{staticStyle:{width:"calc(100% - 260rpx)"}},[e._v("产品："+e._s(t.goodsName))]),e.user.rights&&-1==e.othercurrent.indexOf("1")?o("v-uni-view",[e._v("期初进货价：￥0")]):o("v-uni-view",[e._v("期初进货价：￥"+e._s(t.costPrice))])],1),t.selected_model?o("v-uni-view",e._l(t.selected_model,(function(t,i){return t.num>0?o("v-uni-view",{key:i,staticClass:"display_flex_bet"},[t?o("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#999"}},[e._v(e._s(t.custom1.value+t.custom2.value+t.custom3.value+t.custom4.value))]):e._e(),t?o("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#f30"}},[e._v(e._s(t.num))]):e._e()],1):e._e()})),1):e._e(),o("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#3D3D3D"}},[t.stocks&&t.stocks.stock_name?o("v-uni-view",[e._v("入库店仓："+e._s(t.stocks.stock_name))]):o("v-uni-view",[e._v("入库店仓：未填写")]),o("v-uni-view",[e._v("入库数量：X"+e._s(t.num))])],1),e.user.rights&&"0"!=e.user.rights.othercurrent[0]?o("v-uni-view",{staticClass:"pro_list"},[o("v-uni-view",[e._v("实际进货价：￥0（X"+e._s(t.num)+"）")]),o("v-uni-view",[e._v("合计：￥0")])],1):o("v-uni-view",{staticClass:"pro_list"},[o("v-uni-view",[e._v("实际进货价：￥"+e._s(t.modify_retailPrice)+"（X"+e._s(t.num)+"）")]),o("v-uni-view",[e._v("合计：￥"+e._s(t.modify_retailPrice*t.num))])],1)],1)})),1),o("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.formSubmit.apply(void 0,arguments)}}},[o("v-uni-view",{staticStyle:{margin:"30rpx 0"}},[o("v-uni-view",{staticStyle:{margin:"0 0 10rpx 20rpx",color:"#3D3D3D","font-weight":"bold"}},[e._v("采购明细")]),o("v-uni-view",{staticStyle:{"line-height":"70rpx"}},[o("v-uni-navigator",{staticClass:"display_flex_bet",staticStyle:{padding:"10rpx 20rpx","border-bottom":"1rpx solid#F7F7F7"},attrs:{"hover-class":"none",url:"/pages/manage/producer/producer?type=producer"}},[o("v-uni-view",{staticStyle:{width:"140rpx"}},[e._v("供应商"),o("v-uni-text",{staticStyle:{color:"#f30"}},[e._v("*")])],1),o("v-uni-view",{staticClass:"kaidan_rightinput display_flex",staticStyle:{width:"100%","justify-content":"flex-end"}},[o("v-uni-input",{staticStyle:{"text-align":"right","margin-right":"20rpx"},attrs:{placeholder:"选择供货商",disabled:"true",value:e.producer.producer_name}}),o("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1),o("v-uni-navigator",{staticClass:"display_flex_bet",staticStyle:{padding:"10rpx 20rpx","border-bottom":"1rpx solid#F7F7F7",background:"#fff"},attrs:{"hover-class":"none",url:"/pages/finance/account/account?type=producerChoose&money="+e.real_money}},[o("v-uni-view",{staticStyle:{width:"140rpx"}},[e._v("结算账户")]),o("v-uni-view",{staticClass:"kaidan_rightinput display_flex"},[o("v-uni-input",{staticStyle:{"text-align":"right","margin-right":"20rpx"},attrs:{placeholder:"选择结算账户",disabled:"true",value:e.account.name}}),o("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1),e.user.rights&&"0"!=e.user.rights.othercurrent[0]?o("v-uni-view"):o("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{padding:"10rpx 20rpx","border-bottom":"1rpx solid#F7F7F7",background:"#fff"}},[o("v-uni-view",[e._v("是否赊账")]),o("v-uni-view",{staticClass:"kaidan_rightinput",staticStyle:{"text-align":"right"}},[o("v-uni-switch",{attrs:{checked:e.wetherDebt},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeDebtStatus.apply(void 0,arguments)}}})],1)],1),e.wetherDebt?o("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{padding:"10rpx 20rpx","border-bottom":"1rpx solid#F7F7F7",background:"#fff"}},[o("v-uni-view",[e._v("实际付款")]),o("v-uni-view",{staticClass:"kaidan_rightinput"},[o("v-uni-input",{staticStyle:{color:"#d71345","text-align":"right","margin-right":"20rpx","font-size":"30rpx"},attrs:{placeholder:"输入实际付款金额",type:"digit"},model:{value:e.real_money,callback:function(t){e.real_money=t},expression:"real_money"}})],1)],1):e._e(),o("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{padding:"10rpx 20rpx","border-bottom":"1rpx solid#F7F7F7","margin-top":"20rpx"}},[o("v-uni-view",{staticStyle:{width:"140rpx"}},[e._v("采购时间")]),o("v-uni-picker",{attrs:{mode:"date",value:e.nowDay,end:e.nowDay},on:{change:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.bindDateChange.apply(void 0,arguments)},click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t)}}},[o("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[o("v-uni-view",{staticStyle:{"margin-right":"20rpx"}},[e._v(e._s(e.nowDay.split(" ")[0]))]),o("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1)],1),o("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{padding:"10rpx 20rpx","border-bottom":"1rpx solid#F7F7F7"}},[o("v-uni-view",{staticStyle:{width:"140rpx"}},[e._v("备注")]),o("v-uni-input",{staticClass:"beizhu_style",attrs:{placeholder:"请输入备注",name:"input_beizhu"}})],1),o("v-uni-view",{staticStyle:{background:"#fff",padding:"10rpx 20rpx"}},[o("v-uni-view",{staticStyle:{width:"100%"}},[o("v-uni-view",{staticClass:"upload_image display_flex"},[e._l(e.Images,(function(t,i){return e.Images&&e.Images.length>0?o("v-uni-view",{key:i,staticStyle:{position:"relative"}},[o("v-uni-image",{staticStyle:{width:"180rpx",height:"180rpx","margin-right":"10rpx"},attrs:{src:t}}),o("fa-icon",{staticStyle:{position:"absolute",top:"-10rpx",right:"-10rpx"},attrs:{type:"times-circle-o",size:"20",color:"#426ab3"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.removeImg(i)}}})],1):e._e()})),e.Images.length<3?o("v-uni-view",{staticStyle:{width:"180rpx",height:"180rpx","line-height":"220rpx","text-align":"center",border:"1rpx solid#ccc","border-radius":"16rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.upload_image.apply(void 0,arguments)}}},[o("fa-icon",{attrs:{type:"plus-square-o",size:"40",color:"#426ab3"}})],1):e._e()],2)],1)],1)],1)],1),o("v-uni-view",{staticClass:"bottomEle display_flex_bet",staticStyle:{padding:"0 30rpx","margin-top":"60rpx"}},[o("v-uni-view",{staticStyle:{color:"#333333","font-weight":"bold"}},[e.user.rights&&"0"!=e.user.rights.othercurrent[0]?o("v-uni-view",[e._v("合计：￥0")]):o("v-uni-view",[e._v("合计：￥"+e._s(e.real_money))]),o("v-uni-view",[e._v("总数："+e._s(e.total_num))])],1),o("v-uni-view",{staticClass:"display_flex"},[o("v-uni-button",{staticClass:"confrim_button",staticStyle:{background:"#a1aa16"},attrs:{disabled:e.button_disabled,"form-type":"submit","data-type":"1"}},[e._v("采购")])],1)],1)],1)],1)],1)},n=[];o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){return i}))},f092:function(e,t,o){var i=o("24a1");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=o("4f06").default;a("727d08e0",i,!0,{sourceMap:!1,shadowMode:!1})}}]);