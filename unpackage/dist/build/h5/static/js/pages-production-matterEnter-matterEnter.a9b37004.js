(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-production-matterEnter-matterEnter"],{"020f":function(e,t,n){"use strict";var o=n("d223"),i=n.n(o);i.a},1511:function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,'.uni-card[data-v-ea954bea]{margin-left:%?24?%;margin-right:%?24?%;background:#fff;-webkit-box-shadow:none;box-shadow:none;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-card[data-v-ea954bea]:after{content:"";position:absolute;-webkit-transform-origin:center;transform-origin:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;top:-50%;left:-50%;right:-50%;bottom:-50%;border:1px solid #c8c7cc;border-radius:%?12?%;-webkit-transform:scale(.5);transform:scale(.5)}.uni-card__footer[data-v-ea954bea],\n.uni-card__header[data-v-ea954bea]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:%?16?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-card__header[data-v-ea954bea]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-card__header-title[data-v-ea954bea]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-right:%?16?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-card__header-title-text[data-v-ea954bea]{font-size:%?32?%}.uni-card__header-extra-img-view[data-v-ea954bea]{display:-webkit-box;display:-webkit-flex;display:flex}.uni-card__header-extra-img[data-v-ea954bea]{height:%?40?%;width:%?40?%;margin-right:%?16?%}.uni-card__header-extra-text[data-v-ea954bea]{-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;width:30%;margin-left:%?16?%;font-size:%?28?%;text-align:right;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.uni-card__content--pd[data-v-ea954bea]{padding:%?16?%}.uni-card__footer[data-v-ea954bea]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#999;font-size:%?24?%;padding-top:0}.uni-card--full[data-v-ea954bea]{margin:0}',""]),e.exports=t},"1a1f":function(e,t,n){var o=n("1511");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("06e31581",o,!0,{sourceMap:!1,shadowMode:!1})},3461:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"UniCard",props:{title:{type:String,default:""},extra:{type:String,default:""},note:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1}},methods:{onClick:function(){this.$emit("click")}}};t.default=o},"3a94":function(e,t,n){"use strict";var o,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-numbox"},[n("v-uni-view",{staticClass:"uni-numbox__minus",class:{"uni-numbox--disabled":e.inputValue<=e.min||e.disabled},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._calcValue("minus")}}},[e._v("-")]),n("v-uni-input",{staticClass:"uni-numbox__value",attrs:{disabled:e.disabled,type:"digit"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e._onBlur.apply(void 0,arguments)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}),n("v-uni-view",{staticClass:"uni-numbox__plus",class:{"uni-numbox--disabled":e.inputValue>=e.max||e.disabled},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e._calcValue("plus")}}},[e._v("+")])],1)},r=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}))},"41cc":function(e,t,n){"use strict";n.r(t);var o=n("8bbb"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},4325:function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,'.uni-numbox[data-v-7e0e10b6]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;height:%?50?%;position:relative}.uni-numbox[data-v-7e0e10b6]:after{content:"";position:absolute;-webkit-transform-origin:center;transform-origin:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;top:-50%;left:-50%;right:-50%;bottom:-50%;border:1px solid #c8c7cc;border-radius:%?12?%;-webkit-transform:scale(.5);transform:scale(.5)}.uni-numbox__minus[data-v-7e0e10b6],\n.uni-numbox__plus[data-v-7e0e10b6]{margin:0;background-color:#f8f8f8;width:%?70?%;font-size:%?40?%;height:100%;line-height:%?50?%;text-align:center;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#333;position:relative}.uni-numbox__value[data-v-7e0e10b6]{position:relative;background-color:#fff;width:%?200?%;height:100%;text-align:center;padding:0}.uni-numbox__value[data-v-7e0e10b6]:after{content:"";position:absolute;-webkit-transform-origin:center;transform-origin:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;top:-50%;left:-50%;right:-50%;bottom:-50%;border-style:solid;border-color:#c8c7cc;border-left-width:1px;border-right-width:1px;border-top-width:0;border-bottom-width:0;-webkit-transform:scale(.5);transform:scale(.5)}.uni-numbox--disabled[data-v-7e0e10b6]{color:silver}',""]),e.exports=t},"4aab":function(e,t,n){"use strict";n.r(t);var o=n("3461"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},"53db":function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,".page[data-v-1601e425]{font-size:%?28?%;height:calc(100vh - %?88?%);overflow:scroll}.margin-b-10[data-v-1601e425]{margin-top:%?20?%}.input_withlabel[data-v-1601e425]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?10?% 0}.bottom_del[data-v-1601e425]{text-align:right}.del[data-v-1601e425]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#aa2116;color:#fff;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding:%?4?% %?12?%;border-radius:%?8?%}.input_label[data-v-1601e425]{border:%?1?% solid#ddd;border-radius:%?8?%;padding:0 %?6?%;width:%?140?%;color:#aa2116}",""]),e.exports=t},"54f8":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");var o=n("dde1");function i(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(o["a"])(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r,a=!0,u=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return a=e.done,e},e:function(e){u=!0,r=e},f:function(){try{a||null==i["return"]||i["return"]()}finally{if(u)throw r}}}}},"55f9":function(e,t,n){"use strict";n.r(t);var o=n("3a94"),i=n("7800");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("020f");var a,u=n("f0c5"),s=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"7e0e10b6",null,!1,o["a"],a);t["default"]=s.exports},"72eb":function(e,t,n){"use strict";n("a9e3"),n("ac1f"),n("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"UniNumberBox",props:{value:{type:[Number,String],default:1},min:{type:Number,default:0},max:{type:Number,default:99999999999},step:{type:Number,default:1},disabled:{type:Boolean,default:!1}},data:function(){return{inputValue:0}},watch:{value:function(e){this.inputValue=+e},inputValue:function(e,t){+e!==+t&&this.$emit("change",e)}},created:function(){this.inputValue=+this.value},methods:{_calcValue:function(e){if(!this.disabled){var t=this._getDecimalScale(),n=this.inputValue*t,o=this.step*t;"minus"===e?n-=o:"plus"===e&&(n+=o),n<this.min||n>this.max||(this.inputValue=n/t)}},_getDecimalScale:function(){var e=1;return~~this.step!==this.step&&(e=Math.pow(10,(this.step+"").split(".")[1].length)),e},_onBlur:function(e){var t=e.detail.value;t?(t=+t,t>this.max?t=this.max:t<this.min&&(t=this.min),this.inputValue=t):this.inputValue=0}}};t.default=o},"73ad":function(e,t,n){"use strict";var o=n("865d"),i=n.n(o);i.a},7800:function(e,t,n){"use strict";n.r(t);var o=n("72eb"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=i.a},"7fd5":function(e,t,n){"use strict";(function(t){var o=n("ee27");n("7db0"),n("a9e3"),n("d3b7"),n("25f0");var i=o(n("54f8")),r=o(n("9546"));e.exports={enterAddGoodNum:function(e,n){var o=this;return new Promise((function(a,u){for(var s=function(u){var s=0,l=r.default.Query("Goods");l.get(e[u].objectId).then((function(d){var c=d;if(e[u].selectd_model){var f,v=(0,i.default)(e[u].selected_model);try{for(v.s();!(f=v.n()).done;){var m,b=f.value,h=(0,i.default)(c.models);try{for(h.s();!(m=h.n()).done;){var g=m.value;g.id==b.id&&(g.reserve=Number(g.reserve)+Number(b.num)),delete g.num}}catch(p){h.e(p)}finally{h.f()}}}catch(p){v.e(p)}finally{v.f()}s=Number(c.reserve)+Number(e[u].num),l.set("models",c.models)}else s=Number(c.reserve)+Number(e[u].num);l.set("reserve",s),l.set("id",e[u].objectId),l.save().then((function(t){if(e[u].header){var i=r.default.Query("Goods");i.equalTo("header","==",e[u].header.objectId),i.equalTo("order","==",1),i.statTo("sum","reserve"),i.find().then((function(t){var i=t[0]._sumReserve,s=r.default.Query("Goods");s.set("reserve",i),"purchase"==n&&s.set("costPrice",e[u].modify_retailPrice),s.set("id",e[u].header.objectId),s.save().then((function(t){o.modifyStockType(e[u].header.objectId),u==e.length-1&&a(!0)}))}))}else o.modifyStockType(e[u].objectId),u==e.length-1&&a(!0)})).catch((function(e){t.log(e)}))}))},l=0;l<e.length;l++)s(l)}))},outRedGoodNum:function(e){var n=this;return new Promise((function(o,a){for(var u=function(a){var u=0,s=r.default.Query("Goods");s.get(e[a].objectId).then((function(l){var d=l;if(e[a].selectd_model){var c,f=(0,i.default)(e[a].selected_model);try{for(f.s();!(c=f.n()).done;){var v,m=c.value,b=(0,i.default)(d.models);try{for(b.s();!(v=b.n()).done;){var h=v.value;u+=Number(h.reserve),h.id==m.id&&(h.reserve=Number(h.reserve)-Number(m.num)),delete h.num}}catch(g){b.e(g)}finally{b.f()}}}catch(g){f.e(g)}finally{f.f()}u=Number(d.reserve)-Number(e[a].num),s.set("models",d.models)}else u=Number(d.reserve)-Number(e[a].num);s.set("reserve",u),s.set("id",e[a].objectId),s.save().then((function(t){if(e[a].header){var i=r.default.Query("Goods");i.equalTo("header","==",e[a].header.objectId),i.equalTo("order","==",1),i.statTo("sum","reserve"),i.find().then((function(t){var i=t[0]._sumReserve,u=r.default.Query("Goods");u.set("reserve",i),u.set("id",e[a].header.objectId),u.save().then((function(t){n.modifyStockType(e[a].header.objectId),a==e.length-1&&o(!0)}))}))}else n.modifyStockType(e[a].objectId),a==e.length-1&&o(!0)})).catch((function(e){t.log(e)}))}))},s=0;s<e.length;s++)u(s)}))},enterAddGoodNumNew:function(e,n){var o=this;return new Promise((function(a,u){for(var s=uni.getStorageSync("warehouse")?uni.getStorageSync("warehouse")[0].stock:"",l=uni.getStorageSync("uid"),d=function(u){var d=0,c=r.default.Query("Goods");c.equalTo("userId","==",l),c.equalTo("header","==",e[u].objectId),c.equalTo("stocks","==",s.objectId),c.find().then((function(l){if(0==l.length)o.upload_good_withNoCan(e[u],s,Number(e[u].num)).then((function(t){c.equalTo("header","==",e[u].objectId),c.equalTo("order","==",1),c.statTo("sum","reserve"),c.find().then((function(t){var o=t[0]._sumReserve;c.set("reserve",o),c.set("id",e[u].objectId),"purchase"==n&&c.set("costPrice",e[u].modify_retailPrice),c.save().then((function(t){u==e.length-1&&a(!0)}))}))}));else{var f=l[0],v=r.default.Query("Goods");if(e[u].selected_model){var m,b=(0,i.default)(e[u].selected_model);try{for(b.s();!(m=b.n()).done;){var h,g=m.value,p=(0,i.default)(f.models);try{for(p.s();!(h=p.n()).done;){var y=h.value;y.id==g.id&&(y.reserve=Number(y.reserve)+Number(g.num)),delete y.num}}catch(_){p.e(_)}finally{p.f()}}}catch(_){b.e(_)}finally{b.f()}d=Number(f.reserve)+Number(e[u].num),v.set("models",f.models)}else d=Number(f.reserve)+Number(e[u].num);v.set("reserve",d),v.set("id",f.objectId),v.save().then((function(t){v.equalTo("header","==",e[u].objectId),v.equalTo("order","==",1),v.statTo("sum","reserve"),v.find().then((function(t){var o=t[0]._sumReserve;v.set("reserve",o),"purchase"==n&&v.set("costPrice",e[u].modify_retailPrice.toString()),v.set("id",e[u].objectId),v.save().then((function(t){u==e.length-1&&a(!0)}))}))})).catch((function(e){t.log(e)}))}}))},c=0;c<e.length;c++)d(c)}))},outRedGoodNumNew:function(e){var n=this;return new Promise((function(o,a){for(var u=uni.getStorageSync("warehouse")?uni.getStorageSync("warehouse")[0].stock:"",s=uni.getStorageSync("uid"),l=function(a){var l=0,d=r.default.Query("Goods");d.equalTo("userId","==",s),d.equalTo("header","==",e[a].objectId),d.equalTo("stocks","==",u.objectId),d.find().then((function(s){if(0==s.length)n.upload_good_withNoCan(e[a],u,Number(e[a].num),"out").then((function(t){d.equalTo("header","==",e[a].objectId),d.equalTo("order","==",1),d.statTo("sum","reserve"),d.find().then((function(t){var n=t[0]._sumReserve;d.set("reserve",n),d.set("id",e[a].objectId),d.save().then((function(t){r.default.functions("warn_GoodNum",{uid:uni.getStorageSync("uid"),goodId:e[a].objectId}).then((function(e){})),a==e.length-1&&o(!0)}))}))}));else{var c=s[0];if(e[a].selected_model){var f,v=(0,i.default)(e[a].selected_model);try{for(v.s();!(f=v.n()).done;){var m,b=f.value,h=(0,i.default)(c.models);try{for(h.s();!(m=h.n()).done;){var g=m.value;g.id==b.id&&(g.reserve=Number(g.reserve)-Number(b.num)),delete g.num}}catch(p){h.e(p)}finally{h.f()}}}catch(p){v.e(p)}finally{v.f()}l=Number(c.reserve)-Number(e[a].num),d.set("models",c.models)}else l=Number(c.reserve)-Number(e[a].num);d.set("reserve",l),d.set("id",c.objectId),d.save().then((function(t){d.equalTo("header","==",e[a].objectId),d.equalTo("order","==",1),d.statTo("sum","reserve"),d.find().then((function(t){var n=t[0]._sumReserve;d.set("reserve",n),d.set("id",e[a].objectId),d.save().then((function(t){r.default.functions("warn_GoodNum",{uid:uni.getStorageSync("uid"),goodId:e[a].objectId}).then((function(e){})),a==e.length-1&&o(!0)}))}))})).catch((function(e){t.log(e)}))}}))},d=0;d<e.length;d++)l(d)}))},upload_good_withNoCan:function(e,n,o,a){return new Promise((function(u,s){var l=uni.getStorageSync("uid"),d=r.default.Pointer("_User"),c=d.set(l),f=r.default.Pointer("stocks"),v=f.set(n.objectId),m=r.default.Pointer("Goods"),b="";b=e.header?m.set(e.header.objectId):m.set(e.objectId);var h=r.default.Query("Goods");if(h.set("goodsName",e.goodsName),h.set("goodsIcon",e.goodsIcon),"out"==a){if(h.set("reserve",0-Number(o)),e.goodsId&&e.goodsId.models){var g,p=(0,i.default)(e.goodsId.models);try{for(p.s();!(g=p.n()).done;){var y=g.value;y.reserve=0-Number(y.num)}}catch(E){p.e(E)}finally{p.f()}h.set("models",e.goodsId.models)}else if(e.models&&e.models.length>0){var _,w=(0,i.default)(e.models);try{for(w.s();!(_=w.n()).done;){var x=_.value;x.reserve=0-Number(x.num)}}catch(E){w.e(E)}finally{w.f()}h.set("models",e.models)}}else if("allocation"==a){if(h.set("reserve",Number(o)),e.selected_model&&e.selected_model.length>0){var k,S=(0,i.default)(e.selected_model);try{for(S.s();!(k=S.n()).done;){var N=k.value;N.reserve=Number(N.num),delete N.num}}catch(E){S.e(E)}finally{S.f()}h.set("models",e.selected_model)}}else if(h.set("reserve",Number(o)),e.goodsId&&e.goodsId.models){var I,j=(0,i.default)(e.goodsId.models);try{for(j.s();!(I=j.n()).done;){var T=I.value;T.reserve=Number(T.num)}}catch(E){j.e(E)}finally{j.f()}h.set("models",e.goodsId.models)}else if(e.models&&e.models.length>0){var C,P=(0,i.default)(e.models);try{for(P.s();!(C=P.n()).done;){var q=C.value;q.reserve=Number(q.num?q.num:0)}}catch(E){P.e(E)}finally{P.f()}h.set("models",e.models)}h.set("stocks",v),h.set("userId",c),h.set("header",b),h.set("costPrice",""+e.costPrice),h.set("retailPrice",""+e.retailPrice),h.set("order",1),h.save().then((function(e){t.log(e),u([!0,e])})).catch((function(e){t.log(e)}))}))},handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(e,n,o){var i=r.default.Pointer("_User"),a=i.set(uni.getStorageSync("uid"));if(-2==n){var u=r.default.Pointer("Goods"),s=u.set(o),l=r.default.Query("logs");l.equalTo("goodId","==",o),l.find().then((function(o){if(0==o.length){var i=r.default.Query("logs");i.set("parent",a),i.set("goodId",s),i.set("log",e),i.set("type",n),i.save().then((function(e){t.log(e)})).catch((function(e){t.log(e)}))}}))}else{var d=r.default.Query("logs");d.set("parent",a),d.set("log",e),d.set("detail_id",o),d.set("type",n),d.save().then((function(e){t.log(e)})).catch((function(e){t.log(e)}))}},modifyStockType:function(e){var n=this,o=r.default.Query("Goods");o.get(e).then((function(e){var t=e;""==t.warning_num&&""==t.max_num?e.set("stocktype",1):void 0==t.warning_num&&void 0==t.max_num?e.set("stocktype",1):null==t.warning_num&&null==t.max_num?e.set("stocktype",1):(""!=t.warning_num&&(t.warning_num>=t.reserve?(e.set("stocktype",0),n.log(t.goodsName+"已经超过设置的最小库存值"+t.warning_num,-2,t.objectId)):t.warning_num<t.reserve&&t.reserve<t.max_num&&e.set("stocktype",1)),""!=t.max_num&&(t.max_num<=t.reserve?(e.set("stocktype",2),n.log(t.goodsName+"已经超过设置的最大库存值"+t.max_num,-2,t.objectId)):t.warning_num<t.reserve&&t.reserve<t.max_num&&e.set("stocktype",1))),e.save()})).catch((function(e){t.log(e)}))},record_shopOut:function(e,n){t.log(e,n);var o=r.default.Query("shops");o.set("id",e),o.set("have_out",n),o.save().then((function(e){t.log(e)})).catch((function(e){t.log(e)}))},record_staffOut:function(e){if(t.log(e,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var n=r.default.Query("_User");n.set("id",uni.getStorageSync("user").objectId),n.set("have_out",Number(e)+uni.getStorageSync("user").have_out),n.save().then((function(e){t.log(e)})).catch((function(e){t.log(e)}))}},get_allCost:function(){var e=uni.getStorageSync("uid");t.log(e);var n=r.default.Query("Goods");n.equalTo("userId","==",e),n.find().then((function(e){t.log(e);var n,o=(0,i.default)(e);try{for(o.s();!(n=o.n()).done;){var r=n.value;t.log(r),Number(r.costPrice)*r.reserve,r.reserve}}catch(a){o.e(a)}finally{o.f()}}))},getDay:function(e,t,n){var o=this,i=new Date,r=i.getTime()+864e5*e;i.setTime(r);var a=i.getFullYear(),u=i.getMonth(),s=i.getDate();return u=o.handleMonth(u+1),s=o.handleMonth(s),t?n?a+"-"+u+"-01 00:00:00":a+"-"+u+"-"+s+" 00:00:00":a+"-"+u+"-"+s},js_date_time:function(e,t){var n=new Date(e),o=n.getFullYear(),i=n.getMonth()+1;i=i<10?"0"+i:i;var r=n.getDate();r=r<10?"0"+r:r;var a=n.getHours();a=a<10?"0"+a:a;var u=n.getMinutes(),s=n.getSeconds();return u=u<10?"0"+u:u,s=s<10?"0"+s:s,t?o+"-"+i+"-"+r+" "+a+":"+u:o+"-"+i+"-"+r},handleMonth:function(e){var t=e;return 1==e.toString().length&&(t="0"+e),t}}}).call(this,n("5a52")["default"])},"865d":function(e,t,n){var o=n("53db");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("66a66b35",o,!0,{sourceMap:!1,shadowMode:!1})},8975:function(e,t,n){"use strict";n.r(t);var o=n("efc8"),i=n("4aab");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("ef84");var a,u=n("f0c5"),s=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"ea954bea",null,!1,o["a"],a);t["default"]=s.exports},"8bbb":function(e,t,n){"use strict";(function(e){var o=n("ee27");n("99af"),n("7db0"),n("a434"),n("a9e3"),n("ac1f"),n("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r,a=o(n("54f8")),u=o(n("9546")),s=(o(n("7fd5")),o(n("8975"))),l=o(n("55f9")),d=o(n("4d52")),c=o(n("96bd")),f=o(n("3628")),v={components:{unicard:s.default,faIcon:d.default,uninumberbox:l.default,uniNavBar:c.default,uniIcon:f.default},data:function(){return{products:[],user:uni.getStorageSync("user"),type:"",id:""}},onLoad:function(t){var n=this;if(this.products=[],r=this,uni.removeStorageSync("is_option"),i=uni.getStorageSync("uid"),r.type=t.type,r.id=t.id,t.id&&"production"!=t.type&&"productionEdit"!=t.type){uni.showLoading({title:"加载中..."});var o=u.default.Query("Goods");"false"==t.type?o.equalTo("objectId","==",t.id):o.equalTo("productCode","==",t.id),o.equalTo("userId","==",i),o.equalTo("status","!=",-1),o.find().then((function(t){e.log(t);var o,i=(0,a.default)(t);try{for(i.s();!(o=i.n()).done;){var r=o.value;if(r.num=1,r.total_money=1*r.costPrice,r.really_total_money=1*r.costPrice,r.modify_retailPrice=r.costPrice,r.models){var u,s=0,l=(0,a.default)(r.models);try{for(l.s();!(u=l.n()).done;){var d=u.value;d.num=0,s+=1}}catch(c){l.e(c)}finally{l.f()}r.num=s,r.selectd_model=r.models,r.selected_model=r.models}}}catch(c){i.e(c)}finally{i.f()}n.products=t,uni.hideLoading()}))}else{this.products=uni.getStorageSync("products");var s,l=(0,a.default)(this.products);try{for(l.s();!(s=l.n()).done;){var d=s.value;if(d.models){var c,f=0,v=(0,a.default)(d.models);try{for(v.s();!(c=v.n()).done;){var m=c.value;m.num=0,f+=1}}catch(b){v.e(b)}finally{v.f()}d.num=f,d.selectd_model=d.models,d.selected_model=d.models}}}catch(b){l.e(b)}finally{l.f()}this.products=this.products}},methods:{scanGoods:function(){uni.scanCode({success:function(t){uni.showLoading({title:"加载中..."});var n=t.result,o=n.split("-"),s=u.default.Query("Goods");"false"==o[1]?s.equalTo("objectId","==",o[0]):s.equalTo("productCode","==",o[0]),s.equalTo("userId","==",i),s.find().then((function(t){e.log(t);var n,o=(0,a.default)(t);try{for(o.s();!(n=o.n()).done;){var i=n.value;if(i.num=1,i.total_money=1*i.costPrice,i.really_total_money=1*i.costPrice,i.modify_retailPrice=i.costPrice,i.models){var u,s=0,l=(0,a.default)(i.models);try{for(l.s();!(u=l.n()).done;){var d=u.value;d.num=0,s+=1}}catch(c){l.e(c)}finally{l.f()}i.num=s,i.selectd_model=i.models,i.selected_model=i.models}}}catch(c){o.e(c)}finally{o.f()}r.products=r.products.concat(t),uni.hideLoading()}))},fail:function(e){uni.showToast({title:"未识别到条形码",icon:"none"})}})},confrim_this:function(){var t=this;if("production"==r.type)r.confrimMatter();else if("productionEdit"==r.type){var n=u.default.Query("order_opreations");n.get(r.id).then((function(n){e.log(n),n.set("mattersId",t.products),n.save(),uni.showToast({title:"物料修改成功",icon:"success",duration:1e3,complete:function(){r.button_disabled=!1,uni.setStorageSync("is_option",!0),uni.removeStorageSync("_warehouse"),uni.removeStorageSync("out_warehouse"),uni.removeStorageSync("category"),uni.removeStorageSync("warehouse"),setTimeout((function(){uni.navigateBack({delta:2})}),500)}})}))}else uni.navigateTo({url:"/pages/production/matterEnter/enterDetail/enterDetail"})},confrimMatter:function(){var t=this,n=u.default.Query("order_opreations");n.get(r.id).then((function(n){e.log(n),n.add("mattersId",t.products),n.save(),uni.showToast({title:"物料添加成功",icon:"success",duration:1e3,complete:function(){r.button_disabled=!1,uni.setStorageSync("is_option",!0),uni.removeStorageSync("_warehouse"),uni.removeStorageSync("out_warehouse"),uni.removeStorageSync("category"),uni.removeStorageSync("warehouse"),setTimeout((function(){uni.navigateBack({delta:2})}),500)}})}))},handleNumChange:function(e,t){this.products[t].num=Number(e),this.products[t].total_money=Number(e)*Number(this.products[t].modify_retailPrice),this.products[t].really_total_money=Number(e)*Number(this.products[t].costPrice),uni.setStorageSync("products",this.products)},handleModelNumChange:function(e,t,n,o){o.num=Number(e),this.products[t].selected_model[n]=o;var i,r=0,u=(0,a.default)(this.products[t].selected_model);try{for(u.s();!(i=u.n()).done;){var s=i.value;r+=s.num}}catch(l){u.e(l)}finally{u.f()}this.products[t].num=r,this.products[t].total_money=r*Number(this.products[t].modify_retailPrice),this.products[t].really_total_money=r*Number(this.products[t].costPrice),uni.setStorageSync("products",this.products)},handleDel:function(t){e.log(t),1==this.products.length?uni.showToast({title:"最少选择一个产品",icon:"none"}):(this.products.splice(t,1),uni.setStorageSync("products",this.products))},getrealprice:function(e,t){this.products[t].modify_retailPrice=e.target.value,this.products[t].total_money=this.products[t].num*Number(e.target.value),uni.setStorageSync("products",this.products)}}};t.default=v}).call(this,n("5a52")["default"])},9603:function(e,t,n){"use strict";n.r(t);var o=n("c0b1"),i=n("41cc");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("73ad");var a,u=n("f0c5"),s=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"1601e425",null,!1,o["a"],a);t["default"]=s.exports},c0b1:function(e,t,n){"use strict";var o={"uni-nav-bar":n("96bd").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"确定",leftIcon:"scan","left-text":"扫码"},on:{"click-right":function(t){arguments[0]=t=e.$handleEvent(t),e.confrim_this.apply(void 0,arguments)},"click-left":function(t){arguments[0]=t=e.$handleEvent(t),e.scanGoods.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"page"},e._l(e.products,(function(t,o){return n("v-uni-view",{key:o,staticClass:"margin-b-10"},[n("unicard",{attrs:{title:"物料名："+t.goodsName}},[n("v-uni-view",[n("v-uni-view",{staticStyle:{"margin-bottom":"10rpx"}},[e._v("库存："+e._s(t.reserve))]),e.user.rights&&"0"!=e.user.rights.othercurrent[0]?n("v-uni-view"):n("v-uni-view",[e._v("期初进货价："+e._s(t.costPrice)+"(元)")]),e.user.rights&&"0"!=e.user.rights.othercurrent[0]?n("v-uni-view",{staticClass:"input_withlabel"},[n("v-uni-view",[e._v("实际进货价(可修改)：")]),n("v-uni-view",[n("v-uni-input",{staticClass:"input_label",attrs:{placeholder:"0",type:"digit"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.getrealprice(t,o)}}})],1)],1):n("v-uni-view",{staticClass:"input_withlabel"},[n("v-uni-view",[e._v("实际进货价(可修改)：")]),n("v-uni-view",[n("v-uni-input",{staticClass:"input_label",attrs:{placeholder:t.costPrice,type:"digit"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.getrealprice(t,o)}}})],1)],1),t.selectd_model?n("v-uni-view",e._l(t.selectd_model,(function(t,i){return n("v-uni-view",{key:i,staticClass:"margin-t-5",staticStyle:{"margin-bottom":"10rpx"}},[n("v-uni-text",{staticStyle:{color:"#f30"}},[e._v(e._s(t.custom1.value+t.custom2.value+t.custom3.value+t.custom4.value))]),"production"==e.type?n("v-uni-view",[e._v("数量："),n("uninumberbox",{attrs:{min:0,value:"1"},on:{change:function(n){arguments[0]=n=e.$handleEvent(n),e.handleModelNumChange(n,o,i,t)}}})],1):n("v-uni-view",[e._v("采购量："),n("uninumberbox",{attrs:{min:0,value:"1"},on:{change:function(n){arguments[0]=n=e.$handleEvent(n),e.handleModelNumChange(n,o,i,t)}}})],1)],1)})),1):n("v-uni-view",{staticClass:"margin-t-5"},["production"==e.type?n("v-uni-view",[e._v("数量："),n("uninumberbox",{attrs:{min:1,max:Number(t.reserve)},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.handleNumChange(t,o)}}})],1):"productionEdit"==e.type?n("v-uni-view",[e._v("数量："),n("uninumberbox",{attrs:{min:1,max:Number(t.reserve),value:Number(t.num)},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.handleNumChange(t,o)}}})],1):n("v-uni-view",[e._v("采购量："),n("uninumberbox",{attrs:{min:1},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.handleNumChange(t,o)}}})],1)],1),n("v-uni-view",{staticClass:"bottom_del"},[n("v-uni-view",{staticClass:"del",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.handleDel(o)}}},[n("fa-icon",{attrs:{type:"close",size:"15",color:"#fff"}}),e._v("删除")],1)],1)],1)],1)],1)})),1)],1)},r=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}))},d223:function(e,t,n){var o=n("4325");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("60c78ca4",o,!0,{sourceMap:!1,shadowMode:!1})},ef84:function(e,t,n){"use strict";var o=n("1a1f"),i=n.n(o);i.a},efc8:function(e,t,n){"use strict";var o,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-card",class:e.isFull?"uni-card--full":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e.title?n("v-uni-view",{staticClass:"uni-card__header"},[e.thumbnail?n("v-uni-view",{staticClass:"uni-card__header-extra-img-view"},[n("v-uni-image",{staticClass:"uni-card__header-extra-img",attrs:{src:e.thumbnail}})],1):e._e(),n("v-uni-view",{staticClass:"uni-card__header-title-text"},[e._v(e._s(e.title))]),e.extra?n("v-uni-view",{staticClass:"uni-card__header-extra-text"},[e._v(e._s(e.extra))]):e._e()],1):e._e(),n("v-uni-view",{staticClass:"uni-card__content uni-card__content--pd"},[e._t("default")],2),e.note?n("v-uni-view",{staticClass:"uni-card__footer"},[e._v(e._s(e.note))]):e._e()],1)},r=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);