(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/production/matterEnter/enterDetail/enterDetail"],{"23b5":function(e,t,r){"use strict";var o,n=function(){var e=this,t=e.$createElement,r=(e._self._c,e.othercurrent.indexOf("1")),o=e.othercurrent.indexOf("1");e.$mp.data=Object.assign({},{$root:{g0:r,g1:o}})},s=[];r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return o}))},4789:function(e,t,r){"use strict";r.r(t);var o=r("23b5"),n=r("7e64");for(var s in n)"default"!==s&&function(e){r.d(t,e,(function(){return n[e]}))}(s);r("50d9");var a,u=r("f0c5"),c=Object(u["a"])(n["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);t["default"]=c.exports},"50d9":function(e,t,r){"use strict";var o=r("bf09"),n=r.n(o);n.a},"7e64":function(e,t,r){"use strict";r.r(t);var o=r("e0c2"),n=r.n(o);for(var s in o)"default"!==s&&function(e){r.d(t,e,(function(){return o[e]}))}(s);t["default"]=n.a},bf09:function(e,t,r){},d427:function(e,t,r){"use strict";(function(e){r("d34b"),r("921b");o(r("66fd"));var t=o(r("4789"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},e0c2:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,n,s,a,u=l(r("4515")),c=l(r("f287")),i=(l(r("ce79")),l(r("cbd0")));l(r("efc7"));function l(e){return e&&e.__esModule?e:{default:e}}function d(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=m(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,n,s=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return s=e.done,e},e:function(e){a=!0,n=e},f:function(){try{s||null==o.return||o.return()}finally{if(a)throw n}}}}function m(e,t){if(e){if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var y={data:function(){return{user:e.getStorageSync("user"),identity:e.getStorageSync("identity"),othercurrent:"",Images:[],stock:"",shop_name:"",products:null,button_disabled:!1,beizhu_text:"",real_money:0,all_money:0,really_total_money:0,producer:null,outType:"",pickerTypes:[{desc:"自提",type:1},{desc:"快递",type:2},{desc:"物流",type:3},{desc:"送货上门",type:4}],expressNum:"",total_num:0}},onLoad:function(){n=this,o=e.getStorageSync("uid"),this.products=e.getStorageSync("products");for(var t=0;t<this.products.length;t++)this.all_money=Number((this.products[t].total_money+this.all_money).toFixed(2)),this.really_total_money=Number((this.products[t].really_total_money+this.really_total_money).toFixed(2)),this.total_num+=Number(this.products[t].num);this.real_money=Number(this.all_money.toFixed(2)),n.user.rights&&n.user.rights.othercurrent&&(n.othercurrent=n.user.rights.othercurrent)},onShow:function(){if(n.producer=e.getStorageSync("producer"),a=e.getStorageSync("shop"),a){n.shop_name=a.name;var t=u.default.Pointer("shops");s=t.set(a.objectId)}n.stock=e.getStorageSync("warehouse")?e.getStorageSync("warehouse")[0].stock:""},methods:{scan_code:function(){e.scanCode({onlyFromCamera:!0,success:function(e){console.log("条码类型："+e.scanType),console.log("条码内容："+e.result),n.expressNum=e.result}})},removeImg:function(e){n.Images.splice(e,1),n.Images=n.Images},upload_image:function(){n.user.is_vip?e.chooseImage({count:3,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var t,r,o=Date.parse(new Date),s=e.tempFilePaths,a=d(s);try{for(a.s();!(r=a.n()).done;){var c=r.value;t=u.default.File(o+".jpg",c)}}catch(i){a.e(i)}finally{a.f()}t.save().then((function(e){var t,r=d(e);try{for(r.s();!(t=r.n()).done;){var o=t.value;n.Images.push(o.url)}}catch(i){r.e(i)}finally{r.f()}}))}}):e.showToast({title:"您还不是会员，无法使用",icon:"none"})},select_outType:function(e){n.outType=n.pickerTypes[e.detail.value],2==n.outType.type&&3==n.outType.type||(n.expressNum="")},formSubmit:function(t){var r=e.getStorageSync("identity");this.button_disabled=!0;t.detail.formId;var l=Number(t.detail.target.dataset.type);e.showLoading({title:"上传中..."});for(var d=u.default.Pointer("stocks"),m=d.set(n.stock?n.stock.objectId:""),f=new Array,y=[],p=0;p<this.products.length;p++){var h=Number(this.products[p].reserve)+this.products[p].num,g={},_=u.default.Query("Bills"),v=u.default.Pointer("_User"),b=v.set(o),S=u.default.Pointer("Matters"),N=S.set(this.products[p].objectId),I=e.getStorageSync("masterId"),w=u.default.Pointer("_User"),P=w.set(I);_.set("goodsName",this.products[p].goodsName),_.set("retailPrice",this.products[p].modify_retailPrice.toString()),_.set("num",Number(this.products[p].num)),_.set("total_money",this.products[p].total_money),_.set("really_total_money",this.products[p].really_total_money),_.set("mattersId",N),_.set("userId",b),_.set("opreater",P),_.set("type",4),_.set("extra_type",l),a&&_.set("shop",s),_.set("stock",m),1==r?_.set("status",!0):2==r&&_.set("status",2==l);var k={};g.goodsName=this.products[p].goodsName,g.modify_retailPrice=this.products[p].modify_retailPrice.toString(),g.retailPrice=this.products[p].retailPrice,g.total_money=this.products[p].total_money,k.costPrice=this.products[p].costPrice,k.retailPrice=this.products[p].retailPrice,k.objectId=this.products[p].objectId,k.reserve=h,this.products[p].selectd_model&&(k.selected_model=this.products[p].selected_model,k.models=this.products[p].models),g.goodsId=k,g.num=this.products[p].num,g.type=4,f.push(_),y.push(g)}u.default.Query("Bills").saveAll(f).then((function(s){for(var a=[],d=0;d<s.length;d++)a.push(s[d].success.objectId);var f=u.default.Pointer("_User"),p=f.set(o),h=e.getStorageSync("masterId"),g=u.default.Pointer("_User"),_=g.set(h),v=u.default.Query("order_opreations");if(v.set("beizhu",t.detail.value.input_beizhu),v.set("detail",y),v.set("real_num",n.total_num),v.set("type",4),v.set("extra_type",l),v.set("bills",a),v.set("opreater",_),v.set("master",p),v.set("stock",m),v.set("goodsName",n.products[0].goodsName),v.set("real_money",Number(n.real_money)),v.set("debt",n.all_money-Number(n.real_money)),n.producer){var b=u.default.Pointer("producers"),S=b.set(n.producer.objectId);if(v.set("producer",S),n.all_money-Number(n.real_money)>0){var N=u.default.Query("producers");N.get(n.producer.objectId).then((function(e){var t=null==e.debt?0:e.debt;t+=n.all_money-Number(n.real_money);var r=u.default.Query("producers");r.get(n.producer.objectId).then((function(e){e.set("debt",t),e.save()}))}))}}n.outType&&(v.set("typeDesc",n.outType.desc),v.set("expressNum",n.expressNum)),v.set("all_money",n.all_money),v.set("Images",n.Images),1==r?v.set("status",!0):2==r&&v.set("status",2==l),v.save().then((function(o){var s=o.objectId;e.hideLoading(),e.showToast({title:"物料采购成功",icon:"success",duration:1e3,complete:function(){1==r?n.enterAddGoodNum(n.products).then((function(t){setTimeout((function(){c.default.log(e.getStorageSync("user").nickName+"采购了'"+n.products[0].goodsName+"'等"+n.products.length+"物料",4,s),n.button_disabled=!1,e.setStorageSync("is_option",!0),e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),setTimeout((function(){e.navigateBack({delta:2})}),500)}),500)})):setTimeout((function(){c.default.log(e.getStorageSync("user").nickName+"采购了'"+n.products[0].goodsName+"'等"+n.products.length+"物料",4,s);var r={frist:e.getStorageSync("user").nickName+"采购了'"+n.products[0].goodsName+"'等"+n.products.length+"物料",data1:s,data2:e.getStorageSync("user").nickName,data3:"未审核",data4:o.createdAt,remark:t.detail.value.input_beizhu?t.detail.value.input_beizhu:"未填写",url:"https://www.jimuzhou.com/h5/pages/report/EnteringHistory/detail/detail?id="+s};i.default.send_in_noconfrim(r),n.button_disabled=!1,e.setStorageSync("is_option",!0),e.removeStorageSync("_warehouse"),e.removeStorageSync("out_warehouse"),e.removeStorageSync("category"),e.removeStorageSync("warehouse"),setTimeout((function(){e.navigateBack({delta:2})}),500)}),500)}})}))}),(function(e){console.log("异常处理")}))},enterAddGoodNum:function(e){return new Promise((function(t,r){for(var o=function(r){var o=0,n=u.default.Query("Matters");n.get(e[r].objectId).then((function(n){if(console.log(e[r]),e[r].selectd_model){var s,a=d(e[r].selected_model);try{for(a.s();!(s=a.n()).done;){var u,c=s.value,i=d(e[r].models);try{for(i.s();!(u=i.n()).done;){var l=u.value;l.id==c.id&&(l.reserve=Number(l.reserve)+Number(c.num)),delete l.num}}catch(m){i.e(m)}finally{i.f()}}}catch(m){a.e(m)}finally{a.f()}o=Number(e[r].reserve)+Number(e[r].num),n.set("models",e[r].models)}else o=Number(e[r].reserve)+Number(e[r].num);n.set("reserve",o),n.set("stocktype",o>e[r].warning_num?1:0),n.save(),r==e.length-1&&t(!0)})).catch((function(e){console.log(e)}))},n=0;n<e.length;n++)o(n)}))}}};t.default=y}).call(this,r("543d")["default"])}},[["d427","common/runtime","common/vendor"]]]);