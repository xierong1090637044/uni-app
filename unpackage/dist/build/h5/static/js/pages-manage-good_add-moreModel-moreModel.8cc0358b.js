(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-good_add-moreModel-moreModel"],{"4ba4":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[e._l(e.model,function(t,a){return i("v-uni-view",{key:a,staticClass:"frist",staticStyle:{"margin-bottom":"30rpx"}},[i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("颜色")]),i("v-uni-view",{staticClass:"right_input1 display_flex_bet",staticStyle:{width:"calc(100% - 200rpx)"}},[i("v-uni-input",{attrs:{placeholder:"请输入颜色名"},model:{value:t.custom1.value,callback:function(i){e.$set(t.custom1,"value",i)},expression:"item.custom1.value"}}),a>=1&&"add"==e.type?i("fa-icon",{attrs:{type:"minus-square-o",size:"20",color:"#2ca879"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.reduce_this(a)}}}):e._e()],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("尺寸")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"尺寸"},model:{value:t.custom2.value,callback:function(i){e.$set(t.custom2,"value",i)},expression:"item.custom2.value"}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[i("v-uni-input",{attrs:{placeholder:"自定义规格名1"},model:{value:t.custom3.name,callback:function(i){e.$set(t.custom3,"name",i)},expression:"item.custom3.name"}})],1),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"请输入自定义规格1的值"},model:{value:t.custom3.value,callback:function(i){e.$set(t.custom3,"value",i)},expression:"item.custom3.value"}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[i("v-uni-input",{attrs:{placeholder:"自定义规格名2"},model:{value:t.custom4.name,callback:function(i){e.$set(t.custom4,"name",i)},expression:"item.custom4.name"}})],1),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"请输入自定义规格2的值"},model:{value:t.custom4.value,callback:function(i){e.$set(t.custom4,"value",i)},expression:"item.custom4.value"}})],1)],1),"add"!=e.type?i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("库存")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"请输入库存数量",type:"number"},model:{value:t.reserve,callback:function(i){e.$set(t,"reserve",i)},expression:"item.reserve"}})],1)],1):e._e()],1)}),"add"==e.type?i("v-uni-view",{staticClass:"input_item2 frist1",staticStyle:{margin:"30rpx 0","justify-content":"center"},attrs:{"hover-class":"none",url:"/pages/manage/warehouse/warehouse?type=choose_more"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.push_model.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",{staticClass:"left_item",staticStyle:{color:"#2ca879"}},[e._v("增加规格")]),i("fa-icon",{attrs:{type:"plus",size:"20",color:"#2ca879"}})],1)],1):e._e(),i("v-uni-button",{staticClass:"confrim_button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.confrim_this.apply(void 0,arguments)}}},[e._v("确定")])],2)},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},"537f":function(e,t,i){"use strict";i.r(t);var a=i("8fe5"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);t["default"]=n.a},"54d7":function(e,t,i){"use strict";i.r(t);var a=i("4ba4"),n=i("537f");for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);i("be2e");var s=i("f0c5"),u=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"ddddc304",null);t["default"]=u.exports},"8fe5":function(e,t,i){"use strict";var a=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("5d73"));i("c5f6");a(i("9546"));var o,s={data:function(){return{index:"",stocks:uni.getStorageSync("warehouse"),model:[{id:0,custom1:{name:"颜色",value:""},custom2:{name:"尺寸",value:""},custom3:{name:"",value:""},custom4:{name:"",value:""}}],type:""}},onLoad:function(e){o=this,o.index=Number(e.index),o.type=e.type},onShow:function(){if("add"==o.type){if(uni.getStorageSync("now_model")){var e=uni.getStorageSync("now_model");o.model=e}}else{o.stock=uni.getStorageSync("warehouse");var t=o.stocks[o.index].now_model||o.stocks[o.index].models;t?o.model=t:uni.getStorageSync("now_model")&&(o.model=uni.getStorageSync("now_model"))}},methods:{push_model:function(){var e={custom1:{name:"颜色",value:""},custom2:{name:"尺寸",value:""},custom3:{name:"",value:""},custom4:{name:"",value:""}};e.id=o.model.length,o.model.push(e)},reduce_this:function(e){o.model.splice(e,1)},confrim_this:function(){var e=!0,t=!1,i=void 0;try{for(var a,s=(0,n.default)(o.model);!(e=(a=s.next()).done);e=!0){var u=a.value,l=u.custom1.value+u.custom2.value+u.custom3.value+u.custom4.value;if(""==l)return uni.showToast({title:"请输入至少一个有效值",icon:"none"}),!1}}catch(w){t=!0,i=w}finally{try{e||null==s.return||s.return()}finally{if(t)throw i}}if("add"==o.type)uni.setStorageSync("now_model",o.model);else{var c=0;o.stocks[o.index].now_model=o.model;var r=!0,d=!1,v=void 0;try{for(var m,f=(0,n.default)(o.model);!(r=(m=f.next()).done);r=!0){var p=m.value;c+=Number(p.reserve)}}catch(w){d=!0,v=w}finally{try{r||null==f.return||f.return()}finally{if(d)throw v}}o.stocks[o.index].reserve=c,uni.setStorageSync("warehouse",o.stocks)}uni.navigateBack({delta:1})}}};t.default=s},"9d0b":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".page[data-v-ddddc304]{height:100vh;background:#fafafa;overflow:scroll}.frist[data-v-ddddc304]{padding:0 %?20?%;background:#fff}.frist1[data-v-ddddc304]{padding:0 %?20?%;background:#fff}.input_item[data-v-ddddc304]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:%?80?%;height:%?80?%;border-bottom:%?1?% solid#f6f5ec}.left_item[data-v-ddddc304]{color:#333;width:%?200?%}.right_input1[data-v-ddddc304]{font-size:12px}.confrim_button[data-v-ddddc304]{width:60%;background:#426ab3;color:#fff;font-size:%?32?%;margin:10% 20%}.input_item2[data-v-ddddc304]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;line-height:%?80?%;height:%?80?%;border-bottom:%?1?% solid#f6f5ec}",""])},be2e:function(e,t,i){"use strict";var a=i("e91e"),n=i.n(a);n.a},e91e:function(e,t,i){var a=i("9d0b");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("60073cb1",a,!0,{sourceMap:!1,shadowMode:!1})}}]);