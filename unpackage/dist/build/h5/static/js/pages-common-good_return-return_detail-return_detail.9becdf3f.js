(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-good_return-return_detail-return_detail"],{"225c":function(t,e,o){"use strict";o.r(e);var a=o("dafd"),i=o.n(a);for(var n in a)"default"!==n&&function(t){o.d(e,t,function(){return a[t]})}(n);e["default"]=i.a},"33c0":function(t,e,o){"use strict";var a=o("4c9b"),i=o.n(a);i.a},"4c9b":function(t,e,o){var a=o("644f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=o("4f06").default;i("47374056",a,!0,{sourceMap:!1,shadowMode:!1})},"4ec4":function(t,e,o){"use strict";o.r(e);var a=o("a4d6"),i=o("225c");for(var n in i)"default"!==n&&function(t){o.d(e,t,function(){return i[t]})}(n);o("33c0");var s=o("f0c5"),r=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"632364d4",null);e["default"]=r.exports},"644f":function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".page[data-v-632364d4]{color:#4d4d4d;font-size:%?28?%;height:calc(100vh - %?110?%);overflow:scroll}.display_flex_bet[data-v-632364d4]{background:#fff}.bottomEle[data-v-632364d4]{font-weight:700;position:fixed;bottom:0;left:0;width:calc(100% - %?30?%);background:#fafafa;padding:%?20?% %?0?% %?20?% %?30?%}.pro_list[data-v-632364d4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.pro_listitem[data-v-632364d4]{background-color:#fff;padding:%?10?% %?20?%;border-bottom:%?1?% solid#ddd}.pro_allmoney[data-v-632364d4]{background-color:#fff;padding:%?10?% %?20?%;text-align:right;font-size:%?32?%;color:#f30}.beizhu_style[data-v-632364d4]{text-align:right;width:calc(100% - %?40?%);background-color:#fff;padding:%?10?% 0;max-height:%?100?%}.confrim_button[data-v-632364d4]{padding:0 %?50?%;background:#1651aa;color:#fff;font-weight:700;font-size:%?32?%;border-radius:unset}",""])},"9f50":function(t,e,o){"use strict";(function(t){var a=o("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(o("9546")),n={send_in:function(e){var o=uni.getStorageSync("setting").wx_openid;uni.request({url:"https://www.jimuzhou.com/api/send_temp.php",method:"POST",data:{openid:o,frist:e.frist,data1:e.data1,data2:e.data2,remark:e.remark,url:e.url,type:"in"},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.log(e)}})},send_in_noconfrim:function(e){var o=uni.getStorageSync("setting").wx_openid;uni.request({url:"https://www.jimuzhou.com/api/send_temp.php",method:"POST",data:{openid:o,frist:e.frist,data1:e.data1,data2:e.data2,data3:e.data3,data4:e.data4,remark:e.remark,url:e.url,type:"in_noconfrim"},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.log(e)}})},send_in_mini:function(e){var o={touser:uni.getStorageSync("openid"),template_id:"nqZl9FWDofCo9cxU4de45grLKh2GU-PJcAvWSbJMy9k",page:"/pages/report/EnteringHistory/detail/detail?id="+e.id,form_id:e.form_Id,data:e,emphasis_keyword:""};i.default.sendWeAppMessage(o).then(function(e){t.log(e)}).catch(function(e){t.log(e)})},send_out_mini:function(e){var o={touser:uni.getStorageSync("openid"),template_id:"BKT2_0OuWF3mLZGvFmpRzWFa_Dyr4EIppl_LFF1uRLE",page:"/pages/report/EnteringHistory/detail/detail?id="+e.id,form_id:e.form_Id,data:e,emphasis_keyword:""};i.default.sendWeAppMessage(o).then(function(e){t.log(e)}).catch(function(e){t.log(e)})},send_temp:function(e){var o=uni.getStorageSync("setting").wx_openid;uni.request({url:"https://www.jimuzhou.com/api/send_temp.php",method:"POST",data:{openid:o,data1:e.data1,data2:e.data2,data3:e.data3,data4:e.data4,remark:"备注:"+e.remark,url:e.url,type:"out"},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.log(e)}})}};e.default=n}).call(this,o("5a52")["default"])},a2fc:function(t,e,o){"use strict";(function(t){var a=o("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(o("f499"));o("c5f6"),o("7514");var n=a(o("5d73")),s=a(o("795b")),r=a(o("9546")),u={delete_goods:function(e){return new s.default(function(o,a){var i=0,s=!0,u=!1,c=void 0;try{for(var d,l=(0,n.default)(e);!(s=(d=l.next()).done);s=!0){var p=d.value,f=r.default.Query("Goods");f.destroy(p.objectId).then(function(t){i+=1,i==e.length&&o(!0)}).catch(function(e){t.log(e)})}}catch(g){u=!0,c=g}finally{try{s||null==l.return||l.return()}finally{if(u)throw c}}})},upload_good_withNoCan:function(e,o){return new s.default(function(a,i){var n=uni.getStorageSync("uid"),s=r.default.Pointer("_User"),u=s.set(n),c=e.reserve,d=r.default.Pointer("stocks"),l=d.set(o.objectId),p=r.default.Query("Goods");p.equalTo("userId","==",n),p.equalTo("goodsName","==",e.goodsName),p.equalTo("stocks","==",o.objectId),p.find().then(function(o){if(t.log(o),o.length>=1)a([!1,"该商品存在此仓库中"]);else{var i=r.default.Query("Goods");if(i.set("goodsName",e.goodsName),i.set("goodsIcon",e.goodsIcon),i.set("costPrice",e.costPrice),i.set("retailPrice",e.retailPrice),i.set("reserve",Number(e.reserve)),i.set("productCode",e.productCode?e.productCode:""),i.set("stocks",l),i.set("product_info",e.product_info?e.product_info:""),i.set("producer",e.producer?e.producer:""),i.set("packingUnit",e.packingUnit?e.packingUnit:""),i.set("packageContent",e.packageContent?e.packageContent:""),i.set("warning_num",Number(e.warning_num?e.warning_num:0)),i.set("stocktype",Number(e.warning_num?e.warning_num:0)>=Number(c)?0:1),e.second_class){var n=r.default.Pointer("class_user"),s=n.set(e.goodsClass);i.set("second_class",p);var d=r.default.Pointer("second_class"),p=d.set(e.second_class);i.set("goodsClass",s)}i.set("userId",u),i.save().then(function(e){t.log(e),a([!0,e])}).catch(function(e){t.log(e)})}})})},upload_good:function(e){return new s.default(function(o,a){var i=JSON.parse(localStorage.getItem("bmob")).objectId,n=r.default.Pointer("_User"),s=n.set(i),u=r.default.Pointer("class_user"),c=u.set(e.goodsClass),d=r.default.Pointer("second_class"),l=d.set(e.second_class),p=r.default.Query("Goods");p.equalTo("userId","==",i),p.equalTo("goodsName","==",e.goodsName),p.equalTo("position","==",e.position),p.equalTo("stocks","==",e.stocks),p.find().then(function(a){if(t.log(a),a.length>=1)o([!1,a]);else{var i=e.reserve,n=r.default.Pointer("stocks"),u=n.set(e.stocks),d=r.default.Query("Goods");d.set("goodsName",e.goodsName),d.set("goodsIcon",e.goodsIcon),d.set("costPrice",e.costPrice),d.set("retailPrice",e.retailPrice),d.set("producttime",e.producttime),d.set("nousetime",e.nousetime),d.set("regNumber",e.regNumber),d.set("reserve",Number(e.reserve)),d.set("productCode",e.productCode),d.set("stocks",u),d.set("product_info",e.product_info),d.set("producer",e.producer),d.set("packingUnit",e.packingUnit),d.set("packageContent",e.packageContent),d.set("warning_num",Number(e.warning_num)),d.set("stocktype",Number(e.warning_num)>=Number(i)?0:1),d.set("second_class",l),d.set("goodsClass",c),d.set("userId",s),d.save().then(function(e){t.log(e),o([!0,e])}).catch(function(e){t.log(e)})}})})},get_fristclass:function(){var t=JSON.parse(localStorage.getItem("bmob")).objectId;return new s.default(function(e,o){var a=r.default.Query("class_user");a.equalTo("parent","==",t),a.find().then(function(t){localStorage.setItem("frist_class",(0,i.default)(t)),e(t)})})},get_secondclass:function(t){return new s.default(function(e,o){var a=r.default.Query("class_user");a.field("second",t),a.relation("second_class").then(function(t){e(t.results)})})},getstock_list:function(t){var e=JSON.parse(localStorage.getItem("bmob")).objectId;return new s.default(function(o,a){var n=r.default.Query("stocks");n.order("-num"),n.include("charge","shop"),n.equalTo("parent","==",e),t&&n.equalTo("stock_name","==",{$regex:t+".*"}),n.limit(500),n.find().then(function(t){localStorage.setItem("stocks",(0,i.default)(t)),o(t)})})}};e.default=u}).call(this,o("5a52")["default"])},a4d6:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("v-uni-view",{staticClass:"page"},[o("v-uni-view",{staticStyle:{"line-height":"70rpx",padding:"20rpx 20rpx 0",color:"#3D3D3D","font-weight":"bold"}},[t._v("已选产品")]),o("v-uni-view",t._l(t.products,function(e,a){return o("v-uni-view",{key:a,staticClass:"pro_listitem"},[o("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#3D3D3D"}},[o("v-uni-view",{staticStyle:{width:"calc(100% - 200rpx)"}},[t._v("产品："+t._s(e.goodsName))]),o("v-uni-view",[t._v("零售价：￥"+t._s(e.retailPrice?e.retailPrice:0))])],1),o("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#3D3D3D"}},[o("v-uni-view",[t._v("存放仓库："),e.stocks&&e.stocks.stock_name?o("v-uni-text",[t._v(t._s(e.stocks.stock_name))]):o("v-uni-text",[t._v("未填写")])],1),o("v-uni-view",[t._v("数量：X"+t._s(e.num))])],1),e.selected_model?o("v-uni-view",t._l(e.selected_model,function(e,a){return e.num>0?o("v-uni-view",{key:a,staticClass:"display_flex_bet"},[e?o("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#999"}},[t._v(t._s(e.custom1.value+e.custom2.value+e.custom3.value+e.custom4.value))]):t._e(),e?o("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#f30"}},[t._v(t._s(e.num))]):t._e()],1):t._e()}),1):t._e(),o("v-uni-view",{staticClass:"pro_list"},[o("v-uni-view",[t._v("实际零售价：￥"+t._s(e.modify_retailPrice)+"（X"+t._s(e.num)+"）")]),o("v-uni-view",[t._v("合计：￥"+t._s(e.total_money))])],1)],1)}),1),o("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[o("v-uni-view",{staticStyle:{margin:"30rpx 0"}},[o("v-uni-view",{staticStyle:{margin:"0 0 10rpx 20rpx",color:"#3D3D3D","font-weight":"bold"}},[t._v("退货明细")]),o("v-uni-view",{staticStyle:{"line-height":"70rpx"}},[o("v-uni-navigator",{staticClass:"display_flex_bet",staticStyle:{padding:"10rpx 20rpx","border-bottom":"1rpx solid#F7F7F7"},attrs:{"hover-class":"none",url:"/pages/manage/custom/custom?type=custom"}},[o("v-uni-view",{staticStyle:{width:"140rpx"}},[t._v("客户"),o("v-uni-text",{staticStyle:{color:"#f30"}},[t._v("*")])],1),o("v-uni-view",{staticClass:"kaidan_rightinput display_flex"},[o("v-uni-input",{staticStyle:{"text-align":"right","margin-right":"20rpx"},attrs:{placeholder:"选择客户",disabled:"true",value:t.custom.custom_name}}),o("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1),o("v-uni-navigator",{staticClass:"display_flex_bet",staticStyle:{padding:"10rpx 20rpx","border-bottom":"1rpx solid#F7F7F7"},attrs:{"hover-class":"none",url:"/pages/manage/shops/shops?type=choose"}},[o("v-uni-view",{staticStyle:{width:"140rpx"}},[t._v("选择门店")]),o("v-uni-view",{staticClass:"kaidan_rightinput display_flex",staticStyle:{"justify-content":"flex-end"}},[o("v-uni-input",{staticStyle:{"text-align":"right","margin-right":"20rpx"},attrs:{placeholder:"选择门店",disabled:"true",value:t.shop_name}}),o("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1),o("v-uni-navigator",{staticClass:"display_flex_bet",staticStyle:{padding:"10rpx 20rpx","border-bottom":"1rpx solid#F7F7F7",background:"#fff"},attrs:{"hover-class":"none",url:"/pages/finance/account/account?type=choose"}},[o("v-uni-view",{staticStyle:{width:"140rpx"}},[t._v("结算账户")]),o("v-uni-view",{staticClass:"kaidan_rightinput display_flex"},[o("v-uni-input",{staticStyle:{"text-align":"right","margin-right":"20rpx"},attrs:{placeholder:"选择结算账户",disabled:"true",value:t.account.name}}),o("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1),o("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{padding:"10rpx 20rpx","border-bottom":"1rpx solid#F7F7F7",background:"#fff"}},[o("v-uni-view",[t._v("实际退款（可修改）")]),o("v-uni-view",{staticClass:"kaidan_rightinput"},[o("v-uni-input",{staticStyle:{color:"#d71345","text-align":"right","margin-right":"20rpx","font-size":"30rpx"},attrs:{placeholder:"输入实际退款金额",type:"digit"},model:{value:t.real_money,callback:function(e){t.real_money=e},expression:"real_money"}})],1)],1),o("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{padding:"10rpx 20rpx","border-bottom":"1rpx solid#F7F7F7","margin-top":"20rpx"}},[o("v-uni-view",{staticStyle:{width:"140rpx"}},[t._v("退货时间")]),o("v-uni-picker",{attrs:{mode:"date",value:t.nowDay,end:t.nowDay},on:{change:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.bindDateChange.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[o("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[o("v-uni-view",{staticStyle:{"margin-right":"20rpx"}},[t._v(t._s(t.nowDay.split(" ")[0]))]),o("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1)],1),o("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{padding:"10rpx 20rpx","border-bottom":"1rpx solid#F7F7F7"}},[o("v-uni-view",{staticStyle:{width:"140rpx"}},[t._v("备注")]),o("v-uni-input",{staticClass:"beizhu_style",attrs:{placeholder:"请输入备注",name:"input_beizhu"}})],1),o("v-uni-view",{staticStyle:{background:"#fff",padding:"10rpx 20rpx"}},[o("v-uni-view",{staticStyle:{width:"100%",padding:"20rpx 0"}},[o("v-uni-view",{staticClass:"upload_image display_flex"},[t._l(t.Images,function(e,a){return t.Images&&t.Images.length>0?o("v-uni-view",{key:a,staticStyle:{position:"relative"}},[o("v-uni-image",{staticStyle:{width:"180rpx",height:"180rpx","margin-right":"10rpx"},attrs:{src:e}}),o("fa-icon",{staticStyle:{position:"absolute",top:"-10rpx",right:"-10rpx"},attrs:{type:"times-circle-o",size:"20",color:"#426ab3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.removeImg(a)}}})],1):t._e()}),t.Images.length<3?o("v-uni-view",{staticStyle:{width:"180rpx",height:"180rpx","line-height":"220rpx","text-align":"center",border:"1rpx solid#ccc","border-radius":"16rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upload_image.apply(void 0,arguments)}}},[o("fa-icon",{attrs:{type:"plus-square-o",size:"40",color:"#426ab3"}})],1):t._e()],2)],1)],1)],1)],1),o("v-uni-view",{staticClass:"bottomEle display_flex_bet",staticStyle:{padding:"0 30rpx"}},[o("v-uni-view",[o("v-uni-view",[t._v("合计：￥"+t._s(t.real_money))]),o("v-uni-view",[t._v("总数："+t._s(t.total_num))])],1),o("v-uni-view",{staticClass:"display_flex"},[o("v-uni-button",{staticClass:"confrim_button",staticStyle:{background:"#a1aa16"},attrs:{disabled:t.button_disabled,"form-type":"submit","data-type":"1"}},[t._v("退货")])],1)],1)],1)],1)],1)},i=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return i})},dafd:function(t,e,o){"use strict";(function(t){var a=o("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("6b54");var i=a(o("5d73"));o("c5f6");var n,s,r,u,c=a(o("9546")),d=a(o("7fd5")),l=(a(o("9f50")),a(o("856d")),a(o("a2fc")),{data:function(){return{user:uni.getStorageSync("user"),identity:uni.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,account:"",button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,custom:"",total_num:0,nowDay:d.default.getDay(0,!0,!0)}},onLoad:function(){s=this,n=uni.getStorageSync("uid"),this.products=uni.getStorageSync("products"),s.user.rights&&s.user.rights.othercurrent&&(s.othercurrent=s.user.rights.othercurrent)},onShow:function(){if(this.really_total_money=0,this.all_money=0,this.real_money=0,this.total_num=0,s.custom=uni.getStorageSync("custom"),s.account=uni.getStorageSync("account"),u=uni.getStorageSync("shop"),u){s.shop_name=u.name;var t=c.default.Pointer("shops");r=t.set(u.objectId)}for(var e=0;e<this.products.length;e++)this.all_money=Number((this.products[e].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[e].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[e].num);this.real_money=Number(this.all_money.toFixed(2))},methods:{scan_code:function(){this.$wechat.scanQRCode().then(function(t){s.expressNum=t.result})},bindDateChange:function(t){s.nowDay=t.detail.value+" 00:00:00"},removeImg:function(t){s.Images.splice(t,1),s.Images=s.Images},upload_image:function(){s.user.is_vip?uni.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){t.log(e);var o,a=Date.parse(new Date),n=e.tempFilePaths,r=!0,u=!1,d=void 0;try{for(var l,p=(0,i.default)(n);!(r=(l=p.next()).done);r=!0){var f=l.value;o=c.default.File(a+".jpg",f)}}catch(g){u=!0,d=g}finally{try{r||null==p.return||p.return()}finally{if(u)throw d}}o.save().then(function(t){var e=!0,o=!1,a=void 0;try{for(var n,r=(0,i.default)(t);!(e=(n=r.next()).done);e=!0){var u=n.value;s.Images.push(u.url)}}catch(g){o=!0,a=g}finally{try{e||null==r.return||r.return()}finally{if(o)throw a}}})}}):uni.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(e){uni.getStorageSync("identity");this.button_disabled=!0;e.detail.formId;if(uni.showLoading({title:"请勿退出..."}),""==uni.getStorageSync("custom")||void 0==uni.getStorageSync("custom"))return uni.showToast({icon:"none",title:"请选择客户"}),void(this.button_disabled=!1);for(var o=new Array,a=[],i=0;i<this.products.length;i++){var l=Number(this.products[i].reserve)-this.products[i].num,p=c.default.Query("Bills"),f={},g=c.default.Pointer("_User"),m=g.set(n),v=c.default.Pointer("_User"),_=v.set(uni.getStorageSync("masterId")),h=c.default.Pointer("Goods"),y=h.set(this.products[i].header?this.products[i].header.objectId:this.products[i].objectId);if(uni.getStorageSync("custom")){var b=c.default.Pointer("customs"),w=b.set(uni.getStorageSync("custom").objectId);p.set("custom",w)}p.set("goodsName",this.products[i].goodsName),p.set("retailPrice",this.products[i].modify_retailPrice.toString()),p.set("num",Number(this.products[i].num)),p.set("total_money",this.products[i].total_money),p.set("really_total_money",this.products[i].really_total_money),p.set("goodsId",y),p.set("userId",m),p.set("type",1),p.set("extra_type",4),p.set("opreater",_),p.set("createdTime",{__type:"Date",iso:s.nowDay});var S={};if(this.products[i].stocks&&this.products[i].stocks.objectId){var x=c.default.Pointer("stocks"),k=x.set(this.products[i].stocks.objectId);p.set("stock",k),f.stock=this.products[i].stocks.stock_name}f.goodsName=this.products[i].goodsName,f.modify_retailPrice=this.products[i].modify_retailPrice.toString(),f.retailPrice=this.products[i].retailPrice,f.total_money=this.products[i].total_money,f.packingUnit=this.products[i].packingUnit,S.costPrice=this.products[i].costPrice,S.retailPrice=this.products[i].retailPrice,S.objectId=this.products[i].objectId,S.reserve=l,this.products[i].selectd_model&&(S.selected_model=this.products[i].selected_model,S.models=this.products[i].models),f.goodsId=S,f.type=1,f.extra_type=4,f.num=this.products[i].num,f.warning_num=this.products[i].warning_num,u&&p.set("shop",r),o.push(p),a.push(f)}c.default.Query("Bills").saveAll(o).then(function(t){for(var o=[],i=0;i<t.length;i++)o.push(t[i].success.objectId);var l=c.default.Pointer("_User"),p=l.set(n),f=uni.getStorageSync("masterId"),g=c.default.Pointer("_User"),m=g.set(f),v=c.default.Query("order_opreations");if(v.set("detail",a),v.set("bills",o),v.set("beizhu",e.detail.value.input_beizhu),v.set("type",1),v.set("extra_type",4),v.set("opreater",m),v.set("master",p),v.set("real_num",s.total_num),s.discount&&v.set("discount",s.discount),v.set("goodsName",s.products[0].goodsName),v.set("real_money",Number(s.real_money)),v.set("debt",Number(s.real_money)),u&&v.set("shop",r),s.account){var _=c.default.Pointer("accounts"),h=_.set(s.account.objectId);v.set("account",h)}var y=c.default.Pointer("customs"),b=y.set(s.custom.objectId);v.set("custom",b),v.set("all_money",s.all_money),v.set("Images",s.Images),v.set("status",!0),v.set("createdTime",{__type:"Date",iso:s.nowDay}),v.save().then(function(t){var e=t.objectId;d.default.enterAddGoodNum(s.products).then(function(t){if(s.account&&s.account.objectId){var o=c.default.Query("accounts");o.get(s.account.objectId).then(function(t){t.set("money",t.money-Number(s.real_money)),t.save().then(function(t){uni.hideLoading(),uni.setStorageSync("is_option",!0),uni.removeStorageSync("_warehouse"),uni.removeStorageSync("out_warehouse"),uni.removeStorageSync("category"),uni.removeStorageSync("warehouse"),uni.showToast({title:"退货成功"}),setTimeout(function(){s.button_disabled=!1,d.default.log(uni.getStorageSync("user").nickName+"处理了'"+s.products[0].goodsName+"'等"+s.products.length+"商品的退货",2,e),uni.navigateBack({delta:2})},500)})})}else uni.hideLoading(),uni.setStorageSync("is_option",!0),uni.removeStorageSync("_warehouse"),uni.removeStorageSync("out_warehouse"),uni.removeStorageSync("category"),uni.removeStorageSync("warehouse"),uni.showToast({title:"退货成功"}),setTimeout(function(){s.button_disabled=!1,d.default.log(uni.getStorageSync("user").nickName+"处理了'"+s.products[0].goodsName+"'等"+s.products.length+"商品的退货",2,e),uni.navigateBack({delta:2})},500)})})},function(e){t.log("异常处理")})}}});e.default=l}).call(this,o("5a52")["default"])}}]);