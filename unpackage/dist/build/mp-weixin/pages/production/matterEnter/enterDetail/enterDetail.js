(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/production/matterEnter/enterDetail/enterDetail"],{"040b":function(e,t,r){},"0443":function(e,t,r){"use strict";r.r(t);var o=r("ad2c"),s=r("a9d7");for(var n in s)"default"!==n&&function(e){r.d(t,e,function(){return s[e]})}(n);r("a7de");var a,u=r("f0c5"),c=Object(u["a"])(s["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=c.exports},1929:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,s,n,a,u=l(r("93d5")),c=l(r("2839")),i=(l(r("156c")),l(r("0279")));l(r("844a"));function l(e){return e&&e.__esModule?e:{default:e}}var d={data:function(){return{user:e.getStorageSync("user"),identity:e.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,really_total_money:0,producer:null,outType:"",pickerTypes:[{desc:"自提",type:1},{desc:"快递",type:2},{desc:"物流",type:3},{desc:"送货上门",type:4}],expressNum:"",total_num:0}},onLoad:function(){s=this,o=e.getStorageSync("uid"),this.products=e.getStorageSync("products");for(var t=0;t<this.products.length;t++)this.all_money=Number((this.products[t].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[t].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[t].num);this.real_money=Number(this.all_money.toFixed(2)),s.user.rights&&s.user.rights.othercurrent&&(s.othercurrent=s.user.rights.othercurrent)},onShow:function(){if(s.producer=e.getStorageSync("producer"),a=e.getStorageSync("shop"),a){s.shop_name=a.name;var t=u.default.Pointer("shops");n=t.set(a.objectId)}s.stock=e.getStorageSync("warehouse")?e.getStorageSync("warehouse")[0].stock:""},methods:{scan_code:function(){e.scanCode({onlyFromCamera:!0,success:function(e){console.log("条码类型："+e.scanType),console.log("条码内容："+e.result),s.expressNum=e.result}})},removeImg:function(e){s.Images.splice(e,1),s.Images=s.Images},upload_image:function(){s.user.is_vip?e.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var t,r=Date.parse(new Date),o=e.tempFilePaths,n=!0,a=!1,c=void 0;try{for(var i,l=o[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){var d=i.value;t=u.default.File(r+".jpg",d)}}catch(m){a=!0,c=m}finally{try{n||null==l.return||l.return()}finally{if(a)throw c}}t.save().then(function(e){var t=!0,r=!1,o=void 0;try{for(var n,a=e[Symbol.iterator]();!(t=(n=a.next()).done);t=!0){var u=n.value;s.Images.push(u.url)}}catch(m){r=!0,o=m}finally{try{t||null==a.return||a.return()}finally{if(r)throw o}}})}}):e.showToast({title:"您还不是会员，无法使用",icon:"none"})},select_outType:function(e){s.outType=s.pickerTypes[e.detail.value],2==s.outType.type&&3==s.outType.type||(s.expressNum="")},formSubmit:function(t){var r=e.getStorageSync("identity");this.button_disabled=!0;t.detail.formId;var l=Number(t.detail.target.dataset.type);e.showLoading({title:"上传中..."});for(var d=u.default.Pointer("stocks"),m=d.set(s.stock?s.stock.objectId:""),y=new Array,p=[],f=0;f<this.products.length;f++){var h=Number(this.products[f].reserve)+this.products[f].num,g={},_=u.default.Query("NBills"),v=u.default.Pointer("_User"),b=v.set(o),S=u.default.Pointer("Matters"),N=S.set(this.products[f].objectId),I=e.getStorageSync("masterId"),w=u.default.Pointer("_User"),P=w.set(I);_.set("goodsName",this.products[f].goodsName),_.set("retailPrice",this.products[f].modify_retailPrice.toString()),_.set("num",Number(this.products[f].num)),_.set("total_money",this.products[f].total_money),_.set("really_total_money",this.products[f].really_total_money),_.set("mattersId",N),_.set("userId",b),_.set("opreater",P),_.set("type",4),_.set("extra_type",l),a&&_.set("shop",n),_.set("stock",m),1==r?_.set("status",!0):2==r&&_.set("status",2==l);var k={};g.goodsName=this.products[f].goodsName,g.modify_retailPrice=this.products[f].modify_retailPrice.toString(),g.retailPrice=this.products[f].retailPrice,g.total_money=this.products[f].total_money,k.costPrice=this.products[f].costPrice,k.retailPrice=this.products[f].retailPrice,k.objectId=this.products[f].objectId,k.reserve=h,this.products[f].selectd_model&&(k.selected_model=this.products[f].selected_model,k.models=this.products[f].models),g.goodsId=k,g.num=this.products[f].num,g.type=4,y.push(_),p.push(g)}u.default.Query("NBills").saveAll(y).then(function(n){for(var a=[],d=0;d<n.length;d++)a.push(n[d].success.objectId);var y=u.default.Pointer("_User"),f=y.set(o),h=e.getStorageSync("masterId"),g=u.default.Pointer("_User"),_=g.set(h),v=u.default.Query("order_opreations");if(v.set("beizhu",t.detail.value.input_beizhu),v.set("detail",p),v.set("real_num",s.total_num),v.set("type",4),v.set("extra_type",l),v.set("bills",a),v.set("opreater",_),v.set("master",f),v.set("stock",m),v.set("goodsName",s.products[0].goodsName),v.set("real_money",Number(s.real_money)),v.set("debt",s.all_money-Number(s.real_money)),s.producer){var b=u.default.Pointer("producers"),S=b.set(s.producer.objectId);if(v.set("producer",S),s.all_money-Number(s.real_money)>0){var N=u.default.Query("producers");N.get(s.producer.objectId).then(function(e){var t=null==e.debt?0:e.debt;t+=s.all_money-Number(s.real_money);var r=u.default.Query("producers");r.get(s.producer.objectId).then(function(e){e.set("debt",t),e.save()})})}}s.outType&&(v.set("typeDesc",s.outType.desc),v.set("expressNum",s.expressNum)),v.set("all_money",s.all_money),v.set("Images",s.Images),1==r?v.set("status",!0):2==r&&v.set("status",2==l),v.save().then(function(o){var n=o.objectId;e.hideLoading(),e.showToast({title:"物料采购成功",icon:"success",duration:1e3,complete:function(){1==r?s.enterAddGoodNum(s.products).then(function(t){setTimeout(function(){c.default.log(e.getStorageSync("user").nickName+"采购了'"+s.products[0].goodsName+"'等"+s.products.length+"物料",4,n),s.button_disabled=!1,e.setStorageSync("is_option",!0),e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),setTimeout(function(){e.navigateBack({delta:2})},500)},500)}):setTimeout(function(){c.default.log(e.getStorageSync("user").nickName+"采购了'"+s.products[0].goodsName+"'等"+s.products.length+"物料",4,n);var r={frist:e.getStorageSync("user").nickName+"采购了'"+s.products[0].goodsName+"'等"+s.products.length+"物料",data1:n,data2:e.getStorageSync("user").nickName,data3:"未审核",data4:o.createdAt,remark:t.detail.value.input_beizhu?t.detail.value.input_beizhu:"未填写",url:"https://www.jimuzhou.com/h5/pages/report/EnteringHistory/detail/detail?id="+n};i.default.send_in_noconfrim(r),s.button_disabled=!1,e.setStorageSync("is_option",!0),e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),setTimeout(function(){e.navigateBack({delta:2})},500)},500)}})})},function(e){console.log("异常处理")})},enterAddGoodNum:function(e){return new Promise(function(t,r){for(var o=function(r){var o=0,s=u.default.Query("Matters");s.get(e[r].objectId).then(function(s){if(console.log(e[r]),e[r].selectd_model){var n=!0,a=!1,u=void 0;try{for(var c,i=e[r].selected_model[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var l=c.value,d=!0,m=!1,y=void 0;try{for(var p,f=e[r].models[Symbol.iterator]();!(d=(p=f.next()).done);d=!0){var h=p.value;h.id==l.id&&(h.reserve=Number(h.reserve)+Number(l.num)),delete h.num}}catch(g){m=!0,y=g}finally{try{d||null==f.return||f.return()}finally{if(m)throw y}}}}catch(g){a=!0,u=g}finally{try{n||null==i.return||i.return()}finally{if(a)throw u}}o=Number(e[r].reserve)+Number(e[r].num),s.set("models",e[r].models)}else o=Number(e[r].reserve)+Number(e[r].num);s.set("reserve",o),s.set("stocktype",o>e[r].warning_num?1:0),s.save(),r==e.length-1&&t(!0)}).catch(function(e){console.log(e)})},s=0;s<e.length;s++)o(s)})}}};t.default=d}).call(this,r("543d")["default"])},"258d":function(e,t,r){"use strict";(function(e){r("9787"),r("921b");o(r("66fd"));var t=o(r("0443"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},a7de:function(e,t,r){"use strict";var o=r("040b"),s=r.n(o);s.a},a9d7:function(e,t,r){"use strict";r.r(t);var o=r("1929"),s=r.n(o);for(var n in o)"default"!==n&&function(e){r.d(t,e,function(){return o[e]})}(n);t["default"]=s.a},ad2c:function(e,t,r){"use strict";var o,s=function(){var e=this,t=e.$createElement,r=(e._self._c,e.othercurrent.indexOf("1")),o=e.othercurrent.indexOf("1");e.$mp.data=Object.assign({},{$root:{g0:r,g1:o}})},n=[];r.d(t,"b",function(){return s}),r.d(t,"c",function(){return n}),r.d(t,"a",function(){return o})}},[["258d","common/runtime","common/vendor"]]]);