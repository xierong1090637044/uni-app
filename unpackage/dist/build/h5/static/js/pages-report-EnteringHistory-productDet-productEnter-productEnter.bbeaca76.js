(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-report-EnteringHistory-productDet-productEnter-productEnter"],{"020f":function(t,e,i){"use strict";var n=i("d223"),a=i.n(n);a.a},"0ed0":function(t,e,i){var n=i("9ed4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("f5267c5a",n,!0,{sourceMap:!1,shadowMode:!1})},1511:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.uni-card[data-v-ea954bea]{margin-left:%?24?%;margin-right:%?24?%;background:#fff;-webkit-box-shadow:none;box-shadow:none;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-card[data-v-ea954bea]:after{content:"";position:absolute;-webkit-transform-origin:center;transform-origin:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;top:-50%;left:-50%;right:-50%;bottom:-50%;border:1px solid #c8c7cc;border-radius:%?12?%;-webkit-transform:scale(.5);transform:scale(.5)}.uni-card__footer[data-v-ea954bea],\n.uni-card__header[data-v-ea954bea]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:%?16?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-card__header[data-v-ea954bea]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-card__header-title[data-v-ea954bea]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-right:%?16?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-card__header-title-text[data-v-ea954bea]{font-size:%?32?%}.uni-card__header-extra-img-view[data-v-ea954bea]{display:-webkit-box;display:-webkit-flex;display:flex}.uni-card__header-extra-img[data-v-ea954bea]{height:%?40?%;width:%?40?%;margin-right:%?16?%}.uni-card__header-extra-text[data-v-ea954bea]{-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;width:30%;margin-left:%?16?%;font-size:%?28?%;text-align:right;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.uni-card__content--pd[data-v-ea954bea]{padding:%?16?%}.uni-card__footer[data-v-ea954bea]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#999;font-size:%?24?%;padding-top:0}.uni-card--full[data-v-ea954bea]{margin:0}',""]),t.exports=e},"1a1f":function(t,e,i){var n=i("1511");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("06e31581",n,!0,{sourceMap:!1,shadowMode:!1})},"2bcc":function(t,e,i){"use strict";(function(t){var n=i("ee27");i("a434"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,r=n(i("54f8")),o=(n(i("9546")),n(i("8975"))),u=n(i("55f9")),l=n(i("4d52")),s=n(i("96bd")),c=n(i("3628")),d={components:{unicard:o.default,faIcon:l.default,uninumberbox:u.default,uniNavBar:s.default,uniIcon:c.default},data:function(){return{id:"",products:[],user:uni.getStorageSync("user")}},onLoad:function(t){a=this,a.id=t.id,uni.removeStorageSync("is_option"),uni.getStorageSync("uid"),this.products=[],this.products=uni.getStorageSync("products");var e,i=(0,r.default)(this.products);try{for(i.s();!(e=i.n()).done;){var n=e.value;if(n.models){var o,u=0,l=(0,r.default)(n.models);try{for(l.s();!(o=l.n()).done;){var s=o.value;s.num=0,u+=1}}catch(c){l.e(c)}finally{l.f()}n.num=u,n.selectd_model=n.models,n.selected_model=n.models}}}catch(c){i.e(c)}finally{i.f()}this.products=this.products},methods:{confrim_this:function(){uni.navigateTo({url:"/pages/report/EnteringHistory/productDet/productEnter/enterDetail/enterDetail?id="+a.id})},handleNumChange:function(t,e){this.products[e].num=Number(t),this.products[e].total_money=Number(t)*Number(this.products[e].modify_retailPrice),this.products[e].really_total_money=Number(t)*Number(this.products[e].costPrice),uni.setStorageSync("products",this.products)},handleModelNumChange:function(t,e,i,n){n.num=Number(t),this.products[e].selected_model[i]=n;var a,o=0,u=(0,r.default)(this.products[e].selected_model);try{for(u.s();!(a=u.n()).done;){var l=a.value;o+=l.num}}catch(s){u.e(s)}finally{u.f()}this.products[e].num=o,this.products[e].total_money=o*Number(this.products[e].modify_retailPrice),this.products[e].really_total_money=o*Number(this.products[e].costPrice),uni.setStorageSync("products",this.products)},handleDel:function(e){t.log(e),1==this.products.length?uni.showToast({title:"最少选择一个产品",icon:"none"}):(this.products.splice(e,1),uni.setStorageSync("products",this.products))},getrealprice:function(t,e){this.products[e].modify_retailPrice=t.target.value,this.products[e].total_money=this.products[e].num*Number(t.target.value),uni.setStorageSync("products",this.products)}}};e.default=d}).call(this,i("5a52")["default"])},3461:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniCard",props:{title:{type:String,default:""},extra:{type:String,default:""},note:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1}},methods:{onClick:function(){this.$emit("click")}}};e.default=n},"3a94":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-numbox"},[i("v-uni-view",{staticClass:"uni-numbox__minus",class:{"uni-numbox--disabled":t.inputValue<=t.min||t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._calcValue("minus")}}},[t._v("-")]),i("v-uni-input",{staticClass:"uni-numbox__value",attrs:{disabled:t.disabled,type:"digit"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t._onBlur.apply(void 0,arguments)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}),i("v-uni-view",{staticClass:"uni-numbox__plus",class:{"uni-numbox--disabled":t.inputValue>=t.max||t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._calcValue("plus")}}},[t._v("+")])],1)},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}))},4325:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'.uni-numbox[data-v-7e0e10b6]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;height:%?50?%;position:relative}.uni-numbox[data-v-7e0e10b6]:after{content:"";position:absolute;-webkit-transform-origin:center;transform-origin:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;top:-50%;left:-50%;right:-50%;bottom:-50%;border:1px solid #c8c7cc;border-radius:%?12?%;-webkit-transform:scale(.5);transform:scale(.5)}.uni-numbox__minus[data-v-7e0e10b6],\n.uni-numbox__plus[data-v-7e0e10b6]{margin:0;background-color:#f8f8f8;width:%?70?%;font-size:%?40?%;height:100%;line-height:%?50?%;text-align:center;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#333;position:relative}.uni-numbox__value[data-v-7e0e10b6]{position:relative;background-color:#fff;width:%?200?%;height:100%;text-align:center;padding:0}.uni-numbox__value[data-v-7e0e10b6]:after{content:"";position:absolute;-webkit-transform-origin:center;transform-origin:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;top:-50%;left:-50%;right:-50%;bottom:-50%;border-style:solid;border-color:#c8c7cc;border-left-width:1px;border-right-width:1px;border-top-width:0;border-bottom-width:0;-webkit-transform:scale(.5);transform:scale(.5)}.uni-numbox--disabled[data-v-7e0e10b6]{color:silver}',""]),t.exports=e},"4aab":function(t,e,i){"use strict";i.r(e);var n=i("3461"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"54f8":function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return a}));i("a4d3"),i("e01a"),i("d28b"),i("e260"),i("d3b7"),i("3ca3"),i("ddb0");var n=i("dde1");function a(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(n["a"])(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r,o=!0,u=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return o=t.done,t},e:function(t){u=!0,r=t},f:function(){try{o||null==a["return"]||a["return"]()}finally{if(u)throw r}}}}},"55f9":function(t,e,i){"use strict";i.r(e);var n=i("3a94"),a=i("7800");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("020f");var o,u=i("f0c5"),l=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"7e0e10b6",null,!1,n["a"],o);e["default"]=l.exports},"72eb":function(t,e,i){"use strict";i("a9e3"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniNumberBox",props:{value:{type:[Number,String],default:1},min:{type:Number,default:0},max:{type:Number,default:99999999999},step:{type:Number,default:1},disabled:{type:Boolean,default:!1}},data:function(){return{inputValue:0}},watch:{value:function(t){this.inputValue=+t},inputValue:function(t,e){+t!==+e&&this.$emit("change",t)}},created:function(){this.inputValue=+this.value},methods:{_calcValue:function(t){if(!this.disabled){var e=this._getDecimalScale(),i=this.inputValue*e,n=this.step*e;"minus"===t?i-=n:"plus"===t&&(i+=n),i<this.min||i>this.max||(this.inputValue=i/e)}},_getDecimalScale:function(){var t=1;return~~this.step!==this.step&&(t=Math.pow(10,(this.step+"").split(".")[1].length)),t},_onBlur:function(t){var e=t.detail.value;e?(e=+e,e>this.max?e=this.max:e<this.min&&(e=this.min),this.inputValue=e):this.inputValue=0}}};e.default=n},7800:function(t,e,i){"use strict";i.r(e);var n=i("72eb"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},8975:function(t,e,i){"use strict";i.r(e);var n=i("efc8"),a=i("4aab");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("ef84");var o,u=i("f0c5"),l=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"ea954bea",null,!1,n["a"],o);e["default"]=l.exports},"9ed4":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".page[data-v-7eaaafdd]{font-size:%?28?%;height:calc(100vh - %?88?%);overflow:scroll}.margin-b-10[data-v-7eaaafdd]{margin-top:%?20?%}.input_withlabel[data-v-7eaaafdd]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?10?% 0}.bottom_del[data-v-7eaaafdd]{text-align:right}.del[data-v-7eaaafdd]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#aa2116;color:#fff;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding:%?4?% %?12?%;border-radius:%?8?%}.input_label[data-v-7eaaafdd]{border:%?1?% solid#ddd;border-radius:%?8?%;padding:0 %?6?%;width:%?140?%;color:#aa2116}",""]),t.exports=e},a2fa:function(t,e,i){"use strict";i.r(e);var n=i("2bcc"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},b511:function(t,e,i){"use strict";i.r(e);var n=i("efd4"),a=i("a2fa");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("dccf");var o,u=i("f0c5"),l=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"7eaaafdd",null,!1,n["a"],o);e["default"]=l.exports},d223:function(t,e,i){var n=i("4325");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("60c78ca4",n,!0,{sourceMap:!1,shadowMode:!1})},dccf:function(t,e,i){"use strict";var n=i("0ed0"),a=i.n(n);a.a},ef84:function(t,e,i){"use strict";var n=i("1a1f"),a=i.n(n);a.a},efc8:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-card",class:t.isFull?"uni-card--full":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.title?i("v-uni-view",{staticClass:"uni-card__header"},[t.thumbnail?i("v-uni-view",{staticClass:"uni-card__header-extra-img-view"},[i("v-uni-image",{staticClass:"uni-card__header-extra-img",attrs:{src:t.thumbnail}})],1):t._e(),i("v-uni-view",{staticClass:"uni-card__header-title-text"},[t._v(t._s(t.title))]),t.extra?i("v-uni-view",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))]):t._e()],1):t._e(),i("v-uni-view",{staticClass:"uni-card__content uni-card__content--pd"},[t._t("default")],2),t.note?i("v-uni-view",{staticClass:"uni-card__footer"},[t._v(t._s(t.note))]):t._e()],1)},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}))},efd4:function(t,e,i){"use strict";var n={"uni-nav-bar":i("96bd").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"确定",leftIcon:"scan","left-text":"扫码"},on:{"click-right":function(e){arguments[0]=e=t.$handleEvent(e),t.confrim_this.apply(void 0,arguments)},"click-left":function(e){arguments[0]=e=t.$handleEvent(e),t.scanGoods.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"page"},t._l(t.products,(function(e,n){return i("v-uni-view",{key:n,staticClass:"margin-b-10"},[i("unicard",{attrs:{title:"品名："+e.goodsName}},[i("v-uni-view",[e.stocks?i("v-uni-view",{staticStyle:{"margin-bottom":"10rpx"}},[e.stocks.stock_name?i("v-uni-text",[t._v("所存店仓:"+t._s(e.stocks.stock_name))]):t._e()],1):t._e(),i("v-uni-view",{staticStyle:{"margin-bottom":"10rpx"}},[t._v("库存："+t._s(e.reserve))]),t.user.rights&&"0"!=t.user.rights.othercurrent[0]?i("v-uni-view"):i("v-uni-view",[t._v("期初进货价："+t._s(e.costPrice)+"(元)")]),t.user.rights&&"0"!=t.user.rights.othercurrent[0]?i("v-uni-view",{staticClass:"input_withlabel"},[i("v-uni-view",[t._v("实际进货价(可修改)：")]),i("v-uni-view",[i("v-uni-input",{staticClass:"input_label",attrs:{placeholder:"0",type:"digit"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.getrealprice(e,n)}}})],1)],1):i("v-uni-view",{staticClass:"input_withlabel"},[i("v-uni-view",[t._v("实际进货价(可修改)：")]),i("v-uni-view",[i("v-uni-input",{staticClass:"input_label",attrs:{placeholder:e.costPrice,type:"digit"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.getrealprice(e,n)}}})],1)],1),e.selectd_model?i("v-uni-view",t._l(e.selectd_model,(function(e,a){return i("v-uni-view",{key:a,staticClass:"margin-t-5",staticStyle:{"margin-bottom":"10rpx"}},[i("v-uni-text",{staticStyle:{color:"#f30"}},[t._v(t._s(e.custom1.value+e.custom2.value+e.custom3.value+e.custom4.value))]),t._v("入库量："),i("uninumberbox",{attrs:{min:0,value:"1"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.handleModelNumChange(i,n,a,e)}}})],1)})),1):i("v-uni-view",{staticClass:"margin-t-5"},[t._v("入库量："),i("uninumberbox",{attrs:{min:1,max:e.num,value:e.num},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.handleNumChange(e,n)}}})],1),i("v-uni-view",{staticClass:"bottom_del"},[i("v-uni-view",{staticClass:"del",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleDel(n)}}},[i("fa-icon",{attrs:{type:"close",size:"15",color:"#fff"}}),t._v("删除")],1)],1)],1)],1)],1)})),1)],1)},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}))}}]);