(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-good_production-detail-detail"],{"0cde":function(t,e,i){var a=i("ed73");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("271ef8e2",a,!0,{sourceMap:!1,shadowMode:!1})},"11e6":function(t,e,i){"use strict";var a=i("0cde"),n=i.n(a);n.a},"1a39":function(t,e,i){"use strict";i.r(e);var a=i("cc9f"),n=i("8ed4");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("11e6");var r,s=i("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5dfd3469",null,!1,a["a"],r);e["default"]=u.exports},"408a":function(t,e,i){var a=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},"8ed4":function(t,e,i){"use strict";i.r(e);var a=i("a37d"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"9f50":function(t,e,i){"use strict";(function(t){var a=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("9546")),o={sendTempMini:function(t,e){if("enter"==e){var i={thing1:{value:t.goodsName+"...等",color:"#173177"},number2:{value:t.total_num,color:"#173177"},name3:{value:uni.getStorageSync("user").nickName},date4:{value:t.createdAt}};i.id=t.operationId,this.send_in_mini(i)}else if("out"==e){var a={thing1:{value:t.goodsName+"...等",color:"#173177"},number2:{value:t.total_num,color:"#173177"},name3:{value:uni.getStorageSync("user").nickName},time4:{value:t.createdAt}};a.id=t.operationId,this.send_out_mini(a)}},send_in:function(e){var i=uni.getStorageSync("setting").wx_openid;uni.request({url:"https://www.jimuzhou.com/api/send_temp.php",method:"POST",data:{openid:i,frist:e.frist,data1:e.data1,data2:e.data2,remark:e.remark,url:e.url,type:"in"},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.log(e)}})},send_in_noconfrim:function(e){var i=uni.getStorageSync("setting").wx_openid;uni.request({url:"https://www.jimuzhou.com/api/send_temp.php",method:"POST",data:{openid:i,frist:e.frist,data1:e.data1,data2:e.data2,data3:e.data3,data4:e.data4,remark:e.remark,url:e.url,type:"in_noconfrim"},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.log(e)}})},send_in_mini:function(e){var i={touser:uni.getStorageSync("openid"),template_id:"G2UJEDEyAtGuBdO-Yv96yBi-UnTLhaInr-KzEXqZ-48",page:"/pages/report/EnteringHistory/detail/detail?id="+e.id,data:e,emphasis_keyword:""};n.default.sendWeAppMessage(i).then((function(e){t.log(e)})).catch((function(e){t.log(e)}))},send_out_mini:function(e){var i={touser:uni.getStorageSync("openid"),template_id:"BKT2_0OuWF3mLZGvFmpRzWFa_Dyr4EIppl_LFF1uRLE",page:"/pages/report/EnteringHistory/detail/detail?id="+e.id,data:e,emphasis_keyword:""};n.default.sendWeAppMessage(i).then((function(e){t.log(e)})).catch((function(e){t.log(e)}))},send_temp:function(e){var i=uni.getStorageSync("setting").wx_openid;uni.request({url:"https://www.jimuzhou.com/api/send_temp.php",method:"POST",data:{openid:i,data1:e.data1,data2:e.data2,data3:e.data3,data4:e.data4,remark:"备注:"+e.remark,url:e.url,type:"out"},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.log(e)}})}};e.default=o}).call(this,i("5a52")["default"])},a37d:function(t,e,i){"use strict";(function(t){var a=i("ee27");i("a434"),i("a9e3"),i("b6802"),i("d3b7"),i("ac1f"),i("25f0"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,o,r=a(i("54f8")),s=a(i("9546")),u=a(i("7fd5")),d=(a(i("9f50")),a(i("856d")),{data:function(){return{startDay:u.default.getDay(0,!1),endDay:u.default.getDay(1,!1),user:uni.getStorageSync("user"),identity:uni.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,custom:null,outType:"",discount:"",total_num:0}},onLoad:function(){o=this,n=uni.getStorageSync("uid"),this.products=uni.getStorageSync("products"),o.user.rights&&o.user.rights.othercurrent&&(o.othercurrent=o.user.rights.othercurrent)},onShow:function(){this.really_total_money=0,this.all_money=0,this.real_money=0,o.custom=uni.getStorageSync("custom");for(var t=0;t<this.products.length;t++)this.all_money=Number((this.products[t].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[t].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[t].num);this.real_money=Number(this.all_money.toFixed(2))},methods:{bindstartChange:function(t){o.startDay=t.detail.value},bindendChange:function(t){o.endDay=t.detail.value},removeImg:function(t){o.Images.splice(t,1),o.Images=o.Images},upload_image:function(){o.user.is_vip?uni.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){t.log(e);var i,a,n=Date.parse(new Date),u=e.tempFilePaths,d=(0,r.default)(u);try{for(d.s();!(a=d.n()).done;){var c=a.value;i=s.default.File(n+".jpg",c)}}catch(l){d.e(l)}finally{d.f()}i.save().then((function(t){var e,i=(0,r.default)(t);try{for(i.s();!(e=i.n()).done;){var a=e.value;o.Images.push(a.url)}}catch(l){i.e(l)}finally{i.f()}}))}}):uni.showToast({title:"您还不是会员，无法使用",icon:"none"})},formSubmit:function(e){t.log(e);uni.getStorageSync("identity");this.button_disabled=!0;e.detail.formId;uni.showLoading({title:"上传中..."});for(var i=s.default.Pointer("stocks"),a=i.set(o.stock?o.stock.objectId:""),r=new Array,d=[],c=0;c<this.products.length;c++){var l=Number(this.products[c].reserve)-this.products[c].num,p=s.default.Query("Bills"),m={},f=s.default.Pointer("_User"),v=f.set(n),g=s.default.Pointer("_User"),h=g.set(uni.getStorageSync("masterId")),y=s.default.Pointer("Goods"),_=y.set(this.products[c].objectId);if(uni.getStorageSync("custom")){var w=s.default.Pointer("customs"),b=w.set(uni.getStorageSync("custom").objectId);p.set("custom",b)}p.set("goodsName",this.products[c].goodsName),p.set("retailPrice",this.products[c].modify_retailPrice.toString()),p.set("num",Number(this.products[c].num)),p.set("total_money",this.products[c].total_money),p.set("really_total_money",this.products[c].really_total_money),p.set("goodsId",_),p.set("userId",v),p.set("type",5),p.set("opreater",h),p.set("status",!1);var S={};m.goodsName=this.products[c].goodsName,m.modify_retailPrice=this.products[c].modify_retailPrice.toString(),m.retailPrice=this.products[c].retailPrice,m.total_money=this.products[c].total_money,S.costPrice=this.products[c].costPrice,S.retailPrice=this.products[c].retailPrice,S.objectId=this.products[c].objectId,S.reserve=l,this.products[c].selectd_model&&(S.selected_model=this.products[c].selected_model,S.models=this.products[c].models),m.goodsId=S,m.type=5,m.num=this.products[c].num,m.warning_num=this.products[c].warning_num,r.push(p),d.push(m)}s.default.Query("Bills").saveAll(r).then((function(t){for(var i=[],r=0;r<t.length;r++)i.push(t[r].success.objectId);var c=s.default.Pointer("_User"),l=c.set(n),p=uni.getStorageSync("masterId"),m=s.default.Pointer("_User"),f=m.set(p),v=s.default.Query("order_opreations");if(v.set("detail",d),v.set("bills",i),v.set("beizhu",e.detail.value.input_beizhu),v.set("type",5),v.set("opreater",f),v.set("stock",a),v.set("master",l),v.set("real_num",o.total_num),o.discount&&v.set("discount",o.discount),v.set("goodsName",o.products[0].goodsName),v.set("real_money",Number(o.real_money)),v.set("debt",o.all_money-Number(o.real_money)),o.custom){var g=s.default.Pointer("customs"),h=g.set(o.custom.objectId);v.set("custom",h)}v.set("all_money",o.all_money),v.set("Images",o.Images),v.set("status",!1),v.set("matterStatus",!1),v.set("startDay",new Date(o.startDay.replace(/-/g,"/")).getTime()),v.set("endDay",new Date(o.endDay.replace(/-/g,"/")).getTime()),v.save().then((function(t){var e=t.objectId;uni.hideLoading(),uni.removeStorageSync("customs"),uni.showToast({title:"生产单创建成功",icon:"success",success:function(){o.button_disabled=!1,uni.setStorageSync("is_option",!0),setTimeout((function(){uni.removeStorageSync("_warehouse"),uni.removeStorageSync("out_warehouse"),uni.removeStorageSync("category"),uni.removeStorageSync("warehouse"),u.default.log(uni.getStorageSync("user").nickName+"创建了'"+o.products[0].goodsName+"'等"+o.products.length+"商品的生产单",5,e),uni.navigateBack({delta:2})}),500)}})}))}),(function(e){t.log("异常处理")}))}}});e.default=d}).call(this,i("5a52")["default"])},b6802:function(t,e,i){"use strict";var a=i("23e7"),n=i("a691"),o=i("408a"),r=i("1148"),s=i("d039"),u=1..toFixed,d=Math.floor,c=function(t,e,i){return 0===e?i:e%2===1?c(t,e-1,i*t):c(t*t,e/2,i)},l=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},p=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){u.call({})}));a({target:"Number",proto:!0,forced:p},{toFixed:function(t){var e,i,a,s,u=o(this),p=n(t),m=[0,0,0,0,0,0],f="",v="0",g=function(t,e){var i=-1,a=e;while(++i<6)a+=t*m[i],m[i]=a%1e7,a=d(a/1e7)},h=function(t){var e=6,i=0;while(--e>=0)i+=m[e],m[e]=d(i/t),i=i%t*1e7},y=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==m[t]){var i=String(m[t]);e=""===e?i:e+r.call("0",7-i.length)+i}return e};if(p<0||p>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(f="-",u=-u),u>1e-21)if(e=l(u*c(2,69,1))-69,i=e<0?u*c(2,-e,1):u/c(2,e,1),i*=4503599627370496,e=52-e,e>0){g(0,i),a=p;while(a>=7)g(1e7,0),a-=7;g(c(10,a,1),0),a=e-1;while(a>=23)h(1<<23),a-=23;h(1<<a),g(1,1),h(2),v=y()}else g(0,i),g(1<<-e,0),v=y()+r.call("0",p);return p>0?(s=v.length,v=f+(s<=p?"0."+r.call("0",p-s)+v:v.slice(0,s-p)+"."+v.slice(s-p))):v=f+v,v}})},cc9f:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"page"},[i("v-uni-view",{staticStyle:{"line-height":"70rpx",padding:"20rpx 20rpx 0"}},[t._v("已选产品")]),i("v-uni-view",t._l(t.products,(function(e,a){return i("v-uni-view",{key:a,staticClass:"pro_listitem"},[i("v-uni-view",{staticClass:"pro_list",staticStyle:{color:"#3D3D3D"}},[i("v-uni-view",{staticStyle:{width:"calc(100% - 200rpx)"}},[t._v("产品："+t._s(e.goodsName))]),i("v-uni-view",[t._v("零售价：￥"+t._s(e.retailPrice?e.retailPrice:0))])],1),e.selected_model?i("v-uni-view",t._l(e.selected_model,(function(e,a){return e.num>0?i("v-uni-view",{key:a,staticClass:"display_flex_bet"},[e?i("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#999"}},[t._v(t._s(e.custom1.value+e.custom2.value+e.custom3.value+e.custom4.value))]):t._e(),e?i("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#f30"}},[t._v(t._s(e.num))]):t._e()],1):t._e()})),1):t._e(),i("v-uni-view",{staticClass:"pro_list"},[i("v-uni-view",[t._v("实际零售价：￥"+t._s(e.modify_retailPrice)+"（X"+t._s(e.num)+"）")]),i("v-uni-view",[t._v("合计：￥"+t._s(e.total_money))])],1)],1)})),1),i("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{margin:"30rpx 0"}},[i("v-uni-view",{staticStyle:{margin:"0 0 10rpx 10rpx"}},[t._v("生产明细")]),i("v-uni-view",{staticClass:"kaidan_detail",staticStyle:{"line-height":"70rpx",padding:"0 20rpx"}},[i("v-uni-navigator",{staticClass:"display_flex",staticStyle:{padding:"10rpx 0","border-bottom":"1rpx solid#F7F7F7"},attrs:{"hover-class":"none",url:"/pages/manage/custom/custom?type=custom"}},[i("v-uni-view",{staticStyle:{width:"140rpx"}},[t._v("客户姓名")]),i("v-uni-view",{staticClass:"kaidan_rightinput"},[i("v-uni-input",{attrs:{placeholder:"选择客户",disabled:"true",value:t.custom.custom_name}})],1)],1),i("v-uni-view",{staticClass:"display_flex",staticStyle:{padding:"10rpx 0","border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticStyle:{width:"140rpx"}},[t._v("开工时间")]),i("v-uni-picker",{attrs:{mode:"date"},on:{change:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.bindstartChange.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",{staticStyle:{"margin-right":"20rpx"}},[t._v(t._s(t.startDay))]),i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1)],1),i("v-uni-view",{staticClass:"display_flex",staticStyle:{padding:"10rpx 0","border-bottom":"1rpx solid#F7F7F7"}},[i("v-uni-view",{staticStyle:{width:"140rpx"}},[t._v("计划完成")]),i("v-uni-picker",{attrs:{mode:"date"},on:{change:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.bindendChange.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",{staticStyle:{"margin-right":"20rpx"}},[t._v(t._s(t.endDay))]),i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1)],1)],1)],1),i("v-uni-view",{staticStyle:{"margin-top":"20px"}},[i("v-uni-input",{staticClass:"beizhu_style",attrs:{placeholder:"请输入备注",name:"input_beizhu",fixed:"true"}})],1),i("v-uni-view",{staticStyle:{"margin-top":"20px",background:"#fff",padding:"10rpx"}},[i("v-uni-view",{staticClass:"notice_text"},[t._v("上传生产记录图(会员可用)")]),i("v-uni-view",{staticStyle:{width:"100%",padding:"20rpx 0"}},[i("v-uni-view",{staticClass:"upload_image display_flex"},[t._l(t.Images,(function(e,a){return t.Images&&t.Images.length>0?i("v-uni-view",{key:a,staticStyle:{position:"relative"}},[i("v-uni-image",{staticStyle:{width:"180rpx",height:"180rpx","margin-right":"10rpx"},attrs:{src:e}}),i("fa-icon",{staticStyle:{position:"absolute",top:"-10rpx",right:"-10rpx"},attrs:{type:"times-circle-o",size:"20",color:"#426ab3"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.removeImg(a)}}})],1):t._e()})),t.Images.length<3?i("v-uni-view",{staticStyle:{width:"180rpx",height:"180rpx","line-height":"220rpx","text-align":"center",border:"1rpx solid#ccc","border-radius":"16rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upload_image.apply(void 0,arguments)}}},[i("fa-icon",{attrs:{type:"plus-square-o",size:"40",color:"#426ab3"}})],1):t._e()],2)],1)],1),i("v-uni-view",{staticClass:"bottomEle display_flex_bet",staticStyle:{padding:"0 30rpx"}},[i("v-uni-view",[i("v-uni-text",[t._v("合计数量："+t._s(t.total_num))])],1),i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-button",{staticClass:"confrim_button",attrs:{disabled:t.button_disabled,"form-type":"submit","data-type":"2"}},[t._v("生产")])],1)],1)],1)],1)],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},ed73:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".page[data-v-5dfd3469]{color:#4d4d4d;font-size:%?28?%;height:calc(100vh - %?110?%);overflow:scroll}.bottomEle[data-v-5dfd3469]{position:fixed;bottom:0;left:0;width:calc(100% - %?30?%);background:#fafafa;padding:%?20?% %?0?% %?20?% %?30?%}.pro_list[data-v-5dfd3469]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.pro_listitem[data-v-5dfd3469]{background-color:#fff;padding:%?10?% %?20?%;border-bottom:%?1?% solid#ddd}.pro_allmoney[data-v-5dfd3469]{background-color:#fff;padding:%?10?% %?20?%;text-align:right;font-size:%?32?%;color:#f30}.beizhu_style[data-v-5dfd3469]{width:calc(100% - %?40?%);background-color:#fff;padding:%?20?%;font-size:%?32?%;max-height:%?100?%}.confrim_button[data-v-5dfd3469]{padding:0 %?50?%;background:#1651aa;color:#fff;font-weight:700;font-size:%?32?%;border-radius:unset}",""]),t.exports=e}}]);