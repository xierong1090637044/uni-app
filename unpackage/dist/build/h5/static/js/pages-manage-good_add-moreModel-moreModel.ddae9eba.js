(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-good_add-moreModel-moreModel"],{"0333":function(e,t,i){var n=i("a503");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("6f2b8b92",n,!0,{sourceMap:!1,shadowMode:!1})},2490:function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[e._l(e.model,(function(t,n){return i("v-uni-view",{key:n,staticClass:"frist",staticStyle:{"margin-bottom":"30rpx"}},[i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("颜色")]),i("v-uni-view",{staticClass:"right_input1 display_flex_bet",staticStyle:{width:"calc(100% - 200rpx)"}},[i("v-uni-input",{attrs:{placeholder:"请输入颜色名",disabled:"add"!=e.type},model:{value:t.custom1.value,callback:function(i){e.$set(t.custom1,"value",i)},expression:"item.custom1.value"}}),n>=1&&"add"==e.type?i("fa-icon",{attrs:{type:"minus-square-o",size:"20",color:"#2ca879"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.reduce_this(n)}}}):e._e()],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("尺寸")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"尺寸",disabled:"add"!=e.type},model:{value:t.custom2.value,callback:function(i){e.$set(t.custom2,"value",i)},expression:"item.custom2.value"}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[i("v-uni-input",{attrs:{placeholder:"自定义规格名1"},model:{value:t.custom3.name,callback:function(i){e.$set(t.custom3,"name",i)},expression:"item.custom3.name"}})],1),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"请输入自定义规格1的值",disabled:"add"!=e.type},model:{value:t.custom3.value,callback:function(i){e.$set(t.custom3,"value",i)},expression:"item.custom3.value"}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[i("v-uni-input",{attrs:{placeholder:"自定义规格名2"},model:{value:t.custom4.name,callback:function(i){e.$set(t.custom4,"name",i)},expression:"item.custom4.name"}})],1),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"请输入自定义规格2的值",disabled:"add"!=e.type},model:{value:t.custom4.value,callback:function(i){e.$set(t.custom4,"value",i)},expression:"item.custom4.value"}})],1)],1),"add"!=e.type?i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("库存")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"请输入库存数量",type:"number"},model:{value:t.reserve,callback:function(i){e.$set(t,"reserve",i)},expression:"item.reserve"}})],1)],1):e._e()],1)})),"add"==e.type?i("v-uni-view",{staticClass:"input_item2 frist1",staticStyle:{margin:"30rpx 0","justify-content":"center"},attrs:{"hover-class":"none",url:"/pages/manage/warehouse/warehouse?type=choose_more"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.push_model.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",{staticClass:"left_item",staticStyle:{color:"#2ca879"}},[e._v("增加规格")]),i("fa-icon",{attrs:{type:"plus",size:"20",color:"#2ca879"}})],1)],1):e._e(),i("v-uni-button",{staticClass:"confrim_button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.confrim_this.apply(void 0,arguments)}}},[e._v("确定")])],2)},o=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}))},"2a8e":function(e,t,i){"use strict";var n=i("ee27");i("a434"),i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=n(i("54f8")),s=(n(i("9546")),{data:function(){return{index:"",stocks:uni.getStorageSync("warehouse"),model:[{id:0,custom1:{name:"颜色",value:""},custom2:{name:"尺寸",value:""},custom3:{name:"",value:""},custom4:{name:"",value:""}}],type:""}},onLoad:function(e){a=this,a.index=Number(e.index),a.type=e.type},onShow:function(){if("add"==a.type){if(uni.getStorageSync("now_model")){var e=uni.getStorageSync("now_model");a.model=e}}else{a.stock=uni.getStorageSync("warehouse");var t=a.stocks[a.index].now_model||a.stocks[a.index].models;t?a.model=t:uni.getStorageSync("now_model")&&(a.model=uni.getStorageSync("now_model"))}},methods:{push_model:function(){var e={custom1:{name:"颜色",value:""},custom2:{name:"尺寸",value:""},custom3:{name:"",value:""},custom4:{name:"",value:""}};e.id=a.model.length,a.model.push(e)},reduce_this:function(e){a.model.splice(e,1)},confrim_this:function(){var e,t=(0,o.default)(a.model);try{for(t.s();!(e=t.n()).done;){var i=e.value,n=i.custom1.value+i.custom2.value+i.custom3.value+i.custom4.value;if(""==n)return uni.showToast({title:"请输入至少一个有效值",icon:"none"}),!1}}catch(r){t.e(r)}finally{t.f()}if("add"==a.type)uni.setStorageSync("now_model",a.model);else{var s=0;a.stocks[a.index].now_model=a.model;var u,c=(0,o.default)(a.model);try{for(c.s();!(u=c.n()).done;){var l=u.value;s+=Number(l.reserve)}}catch(r){c.e(r)}finally{c.f()}a.stocks[a.index].reserve=s,uni.setStorageSync("warehouse",a.stocks)}uni.navigateBack({delta:1})}}});t.default=s},"537f":function(e,t,i){"use strict";i.r(t);var n=i("2a8e"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"54d7":function(e,t,i){"use strict";i.r(t);var n=i("2490"),a=i("537f");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("6f4d");var s,u=i("f0c5"),c=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"c03e0c58",null,!1,n["a"],s);t["default"]=c.exports},"54f8":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return a}));i("a4d3"),i("e01a"),i("d28b"),i("e260"),i("d3b7"),i("3ca3"),i("ddb0");var n=i("dde1");function a(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n["a"])(e))){var t=0,i=function(){};return{s:i,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,s=!0,u=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return s=e.done,e},e:function(e){u=!0,o=e},f:function(){try{s||null==a["return"]||a["return"]()}finally{if(u)throw o}}}}},"6f4d":function(e,t,i){"use strict";var n=i("0333"),a=i.n(n);a.a},a503:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".page[data-v-c03e0c58]{height:100vh;background:#fafafa;overflow:scroll}.frist[data-v-c03e0c58]{padding:0 %?20?%;background:#fff}.frist1[data-v-c03e0c58]{padding:0 %?20?%;background:#fff}.input_item[data-v-c03e0c58]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:%?80?%;height:%?80?%;border-bottom:%?1?% solid#f6f5ec}.left_item[data-v-c03e0c58]{color:#333;width:%?200?%}.right_input1[data-v-c03e0c58]{font-size:12px}.confrim_button[data-v-c03e0c58]{width:60%;background:#426ab3;color:#fff;font-size:%?32?%;margin:10% 20%}.input_item2[data-v-c03e0c58]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;line-height:%?80?%;height:%?80?%;border-bottom:%?1?% solid#f6f5ec}",""]),e.exports=t}}]);