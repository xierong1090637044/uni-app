(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-goods_add_MoreG-goods_add_MoreG"],{"01ef":function(e,t,i){"use strict";var n=i("f8ae"),a=i.n(n);a.a},"0bd3":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"[data-v-5e7b9afd]::-webkit-scrollbar{width:2px;height:6px;background-color:rgba(0,0,0,0)}.uni-input-placeholder[data-v-5e7b9afd]{font-size:12px}uni-input[data-v-5e7b9afd]{font-size:12px}\n\n/*定义滑块 内阴影+圆角*/[data-v-5e7b9afd]::-webkit-scrollbar-thumb{border-radius:10px;background-color:#999}.page[data-v-5e7b9afd]{font-size:%?28?%;background:#fafafa;height:100vh;overflow:scroll}.frist[data-v-5e7b9afd]{padding:0 %?20?%;background:#fff;margin-top:%?30?%}.input_item[data-v-5e7b9afd]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;line-height:%?80?%;height:%?80?%;border-bottom:%?1?% solid#f6f5ec}.input_item2[data-v-5e7b9afd]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;line-height:%?80?%;height:%?80?%;border-bottom:%?1?% solid#f6f5ec}.left_item[data-v-5e7b9afd]{color:#333;width:%?150?%}.right_input1[data-v-5e7b9afd]{font-size:12px}.submit_button[data-v-5e7b9afd]{width:50%;background:#426ab3;border-radius:%?40?%;margin:%?30?%;height:%?88?%;line-height:%?88?%;color:#fff;font-size:%?30?%}.upload_image[data-v-5e7b9afd]{width:%?180?%;height:%?180?%;line-height:%?220?%;text-align:center;border:%?1?% solid#999;border-radius:%?8?%}.notice_text[data-v-5e7b9afd]{padding-top:%?20?%;font-size:%?32?%;color:#3d3d3d;font-weight:700}.reset_button[data-v-5e7b9afd]{font-size:%?30?%;width:50%;background:#999;border-radius:%?40?%;margin:%?30?%;height:%?88?%;line-height:%?88?%;color:#fff}",""])},"101e":function(e,t,i){"use strict";i.r(t);var n=i("3b4b"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},"151c":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'.uni-collapse[data-v-089d00af]{background-color:#fff;position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.uni-collapse[data-v-089d00af]:after{position:absolute;z-index:10;right:0;bottom:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-collapse[data-v-089d00af]:before{position:absolute;z-index:10;right:0;top:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}',""])},"18d6":function(e,t,i){"use strict";i.r(t);var n=i("ff65"),a=i("2d72");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("810b");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"295a1270",null);t["default"]=r.exports},"2d72":function(e,t,i){"use strict";i.r(t);var n=i("7365"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},"3b4b":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac6a");var n={name:"UniCollapse",props:{accordion:{type:Boolean,default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var e=[];this.childrens.forEach(function(t,i){t.isOpen&&e.push(t.nameSync)}),this.$emit("change",e)}}};t.default=n},"6b57":function(e,t,i){"use strict";var n=i("aded"),a=i.n(n);a.a},7365:function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac6a"),i("7f7f"),i("6b54"),i("87b3"),i("c5f6");var a=n(i("5753")),o={name:"UniCollapseItem",components:{uniIcon:a.default},props:{title:{type:String,default:""},name:{type:[Number,String],default:0},disabled:{type:Boolean,default:!1},showAnimation:{type:Boolean,default:!1},open:{type:Boolean,default:!1},thumb:{type:String,default:""}},data:function(){var e=this.__call_hook?"uni_collapse_item":"Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{isOpen:!1,height:"auto",elId:e}},watch:{open:function(e){this.isOpen=e}},inject:["collapse"],created:function(){if(this.isOpen=this.open,this.nameSync=this.name?this.name:this.collapse.childrens.length,this.collapse.childrens.push(this),this.collapse.accordion&&this.isOpen){var e=this.collapse.childrens[this.collapse.childrens.length-2];e&&(this.collapse.childrens[this.collapse.childrens.length-2].isOpen=!1)}},mounted:function(){this.getSize()},methods:{getSize:function(){var e=this;this.showAnimation&&uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function(t){e.height=t[0].height+"px"})},onClick:function(){var e=this;this.disabled||(this.collapse.accordion&&this.collapse.childrens.forEach(function(t){t!==e&&(t.isOpen=!1)}),this.isOpen=!this.isOpen,this.collapse.onChange&&this.collapse.onChange())}}};t.default=o},"810b":function(e,t,i){"use strict";var n=i("f8ca"),a=i.n(n);a.a},"92c6":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'.uni-collapse-cell[data-v-295a1270]{position:relative}.uni-collapse-cell--hover[data-v-295a1270]{background-color:#f1f1f1}.uni-collapse-cell--open[data-v-295a1270]{background-color:#f1f1f1}.uni-collapse-cell--disabled[data-v-295a1270]{opacity:.3}.uni-collapse-cell--animation[data-v-295a1270]{-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s}.uni-collapse-cell[data-v-295a1270]:after{position:absolute;z-index:3;right:0;bottom:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-collapse-cell__title[data-v-295a1270]{padding:%?12?% %?30?%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.uni-collapse-cell__title-extra[data-v-295a1270]{margin-right:%?18?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.uni-collapse-cell__title-img[data-v-295a1270]{height:%?52?%;width:%?52?%}.uni-collapse-cell__title-arrow[data-v-295a1270]{width:20px;height:20px;-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center}.uni-collapse-cell__title-arrow.uni-active[data-v-295a1270]{-webkit-transform:rotate(-180deg);-ms-transform:rotate(-180deg);transform:rotate(-180deg)}.uni-collapse-cell__title-inner[data-v-295a1270]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.uni-collapse-cell__title-text[data-v-295a1270]{font-size:%?24?%;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;color:inherit;line-height:1.5;overflow:hidden}.uni-collapse-cell__content[data-v-295a1270]{position:relative;width:100%;overflow:hidden;background:#fff}.uni-collapse-cell__content uni-view[data-v-295a1270]{font-size:%?28?%}',""])},"92d1":function(e,t,i){"use strict";(function(e){var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("3b2b"),i("a481"),i("7514"),i("c5f6");var a,o,s=n(i("5d73")),r=n(i("c74b")),l=n(i("0914")),c=n(i("bd14")),u=n(i("18d6")),d=n(i("df06")),f="",v="",p={components:{uniCollapse:c.default,uniCollapseItem:u.default,faIcon:l.default},data:function(){return{text_desc:"保存",goodsName:"",costPrice:"",retailPrice:"",packageContent:"",packingUnit:"",warning_num:"",producer:"",regNumber:"",position:"",product_info:"",productCode:"",category:"",reserve:0,goodsIcon:"",stock_name:"",stocks:"",producttime:"",nousetime:"",product_state:!1,model:""}},onLoad:function(e){a=this,o=uni.getStorageSync("uid"),uni.removeStorageSync("category"),uni.removeStorageSync("is_add"),uni.removeStorageSync("now_model")},onShow:function(){if(uni.getStorageSync("warehouse")&&(a.stocks=uni.getStorageSync("warehouse")[0].stock,a.stock_name=uni.getStorageSync("warehouse")[0].stock.stock_name),uni.getStorageSync("category"))if(a.category=uni.getStorageSync("category"),2==a.category.type){var t=r.default.Pointer("class_user");f=t.set(a.category.parent.objectId);var i=r.default.Pointer("second_class");v=i.set(a.category.objectId),e.log(a.category.parent.objectId,a.category.objectId)}else{var n=r.default.Pointer("class_user");f=n.set(a.category.objectId)}if(uni.getStorageSync("now_model")){a.reserve=0;var o=uni.getStorageSync("now_model"),l=!0,c=!1,u=void 0;try{for(var d,p=(0,s.default)(o);!(l=(d=p.next()).done);l=!0){var g=d.value;a.reserve+=Number(g.reserve)}}catch(m){c=!0,u=m}finally{try{l||null==p.return||p.return()}finally{if(c)throw u}}}},onUnload:function(){"",f="",v="",uni.removeStorageSync("now_model"),d.default.handleData()},methods:{bindDateChange:function(e){a.nousetime=e.target.value},formSubmit:function(t){e.log(t.detail.value);var i=t.detail.value;""==i.goodsName?uni.showToast({title:"请输入产品名称",icon:"none"}):uni.getStorageSync("now_model")?a.upload_good(i):uni.showToast({title:"请输入规格以及对应的库存",icon:"none"})},upload_image:function(){uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){e.log(t);var i,n=Date.parse(new Date),o=t.tempFilePaths,l=!0,c=!1,u=void 0;try{for(var d,f=(0,s.default)(o);!(l=(d=f.next()).done);l=!0){var v=d.value;i=r.default.File(n+".jpg",v)}}catch(p){c=!0,u=p}finally{try{l||null==f.return||f.return()}finally{if(c)throw u}}i.save().then(function(e){a.goodsIcon=e[0].url})}})},upload_good:function(e){if(uni.showLoading({title:"上传中..."}),uni.getStorageSync("now_product"))a.add_good(e,"edit");else{var t=r.default.Query("Goods");t.equalTo("userId","==",o),t.equalTo("status","!=",-1),t.equalTo("goodsName","==",e.goodsName),t.find().then(function(t){t.length>=1?uni.showToast({title:"你的库存中已存在此产品",icon:"none"}):a.add_good(e,"add")})}},add_good:function(t,i){var n=r.default.Pointer("_User"),s=n.set(o),l=a.stocks.objectId?a.stocks.objectId:"",c=r.default.Pointer("stocks"),u=c.set(l),p=r.default.Query("Goods");if(p.set("goodsIcon",a.goodsIcon),p.set("goodsName",t.goodsName),p.set("costPrice",t.costPrice?t.costPrice:"0"),p.set("retailPrice",t.retailPrice?t.retailPrice:"0"),a.nousetime){var g=a.nousetime.replace(new RegExp("-","g"),"/");g=new Date(g).getTime(),p.set("nousetime",g)}p.set("regNumber",t.regNumber),p.set("models",uni.getStorageSync("now_model")),p.set("reserve",Number(t.reserve)),p.set("productCode",t.productCode),p.set("stocks",u),p.set("product_info",t.product_info),p.set("producer",t.producer),p.set("packingUnit",t.packingUnit),p.set("packageContent",t.packageContent),p.set("position",t.position),p.set("warning_num",Number(t.warning_num)),p.set("stocktype",Number(t.warning_num)>=Number(a.reserve)?0:1),p.set("product_state",t.product_state),uni.getStorageSync("category")&&(1==a.category.type?p.set("goodsClass",f):p.set("second_class",v)),p.set("userId",s),p.set("id",uni.getStorageSync("now_product")?uni.getStorageSync("now_product").objectId:""),p.save().then(function(e){uni.hideLoading(),"add"==i?(d.default.log(uni.getStorageSync("user").nickName+"增加了产品'"+t.goodsName+"'",5,e.objectId),uni.showToast({title:"上传成功"})):(d.default.log(uni.getStorageSync("user").nickName+"修改了产品'"+t.goodsName+"'",5,uni.getStorageSync("now_product").objectId),uni.navigateBack({delta:2}),setTimeout(function(){uni.showToast({title:"修改成功",duration:1e3})},1e3)),uni.setStorageSync("is_add",!0)}).catch(function(t){e.log(t)})},handledata:function(){a.goodsName="",a.costPrice="",a.retailPrice="",a.packageContent="",a.packingUnit="",a.warning_num="",a.producer="",a.regNumber="",a.position="",a.product_info="",a.productCode="",a.category="",a.reserve=0,a.goodsIcon="",a.stocks="",a.stock_name="",a.producttime="",a.nousetime=""}}};t.default=p}).call(this,i("5a52")["default"])},"965d":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page"},[i("v-uni-form",{on:{submit:function(t){t=e.$handleEvent(t),e.formSubmit(t)}}},[i("v-uni-scroll-view",{staticStyle:{height:"calc(100vh - 148rpx)"},attrs:{"scroll-y":""}},[i("v-uni-view",{staticClass:"frist"},[i("v-uni-view",{staticClass:"notice_text"},[e._v("产品图")]),i("v-uni-view",{staticStyle:{width:"100%",padding:"20rpx 0"}},[i("v-uni-view",{staticClass:"upload_image",on:{click:function(t){t=e.$handleEvent(t),e.upload_image(t)}}},[e.goodsIcon?i("v-uni-image",{staticStyle:{width:"180rpx",height:"180rpx"},attrs:{src:e.goodsIcon}}):i("fa-icon",{staticStyle:{height:"180rpx","line-height":"180rpx"},attrs:{type:"plus-square-o",size:"40",color:"#426ab3"}})],1),i("v-uni-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{name:"goodsIcon",value:e.goodsIcon}})],1)],1),i("v-uni-view",{staticClass:"frist"},[i("v-uni-view",{staticClass:"notice_text"},[e._v("基本信息")]),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("名称"),i("v-uni-text",{staticStyle:{color:"#aa2116","margin-left":"4rpx"}},[e._v("*")])],1),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"产品名称",name:"goodsName",value:e.goodsName}})],1)],1),i("v-uni-navigator",{staticClass:"input_item2",attrs:{"hover-class":"none",url:"/pages/manage/category/category?type=choose"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",{staticClass:"left_item"},[e._v("类别")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"产品类别",name:"goodsClass",value:e.category.class_text,disabled:"true"}})],1)],1),i("v-uni-view",[i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("进价")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"产品进价",name:"costPrice",type:"digit",value:e.costPrice}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("售价")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"产品售价",name:"retailPrice",type:"digit",value:e.retailPrice}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("包装含量")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"包装含量",name:"packageContent",value:e.packageContent}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("包装单位")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"包装单位",name:"packingUnit",value:e.packingUnit}})],1)],1)],1),i("v-uni-view",{staticClass:"frist",staticStyle:{"margin-bottom":"30rpx"}},[i("v-uni-navigator",{staticClass:"input_item2",staticStyle:{"line-height":"70rpx"},attrs:{"hover-class":"none",url:"G_More/G_More"}},[i("v-uni-view",{staticClass:"display_flex"},[i("v-uni-view",{staticClass:"input_item",staticStyle:{width:"100%"}},[i("v-uni-view",{staticClass:"left_item"},[e._v("初始库存")]),i("v-uni-input",{attrs:{placeholder:"初始库存",type:"digit",name:"reserve",disabled:"true"},model:{value:e.reserve,callback:function(t){e.reserve=t},expression:"reserve"}})],1)],1),i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("预警库存")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"预警库存",name:"warning_num",type:"digit",value:e.warning_num}})],1)],1),i("v-uni-navigator",{staticClass:"input_item2",attrs:{"hover-class":"none",url:"/pages/manage/warehouse/warehouse?type=choose"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",{staticClass:"left_item"},[e._v("仓库")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"选择仓库",disabled:"true"},model:{value:e.stock_name,callback:function(t){e.stock_name=t},expression:"stock_name"}})],1)],1),i("v-uni-view",[i("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1)],1),i("uni-collapse",{attrs:{accordion:!0}},[i("uni-collapse-item",{staticStyle:{color:"#FE104C","font-size":"32rpx","font-weight":"bold"},attrs:{title:"更多信息"}},[i("v-uni-view",{staticClass:"frist",staticStyle:{"margin-top":"0"}},[i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("失效日期")]),i("v-uni-picker",{attrs:{mode:"date"},on:{change:function(t){t=e.$handleEvent(t),e.bindDateChange(t)}}},[i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"失效日期",name:"nousetime",disabled:"true"},model:{value:e.nousetime,callback:function(t){e.nousetime=t},expression:"nousetime"}})],1)],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("生产厂家")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"生产厂家",name:"producer",value:e.producer}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("货号")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"货号",name:"regNumber",value:e.regNumber}})],1)],1),i("v-uni-view",{staticClass:"input_item2"},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-view",{staticClass:"left_item"},[e._v("条码")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{value:e.productCode,placeholder:"条码",name:"productCode"}})],1)],1),i("v-uni-view",[i("fa-icon",{attrs:{type:"clone",size:"16",color:"#426ab3"},on:{click:function(t){t=e.$handleEvent(t),e.scan_code(t)}}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("货架位置")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"货架位置",name:"position",value:e.position}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("产品简介")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-input",{attrs:{placeholder:"产品简介",name:"product_info",value:e.product_info}})],1)],1),i("v-uni-view",{staticClass:"input_item"},[i("v-uni-view",{staticClass:"left_item"},[e._v("是否半成品")]),i("v-uni-view",{staticClass:"right_input1"},[i("v-uni-switch",{attrs:{checked:e.product_state,name:"product_state"}})],1)],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"display_flex_bet"},[i("v-uni-button",{staticClass:"submit_button",attrs:{formType:"submit"}},[e._v(e._s(e.text_desc))]),i("v-uni-button",{staticClass:"reset_button",attrs:{formType:"reset"}},[e._v("重置")])],1)],1)],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},aded:function(e,t,i){var n=i("0bd3");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("2524ea4e",n,!0,{sourceMap:!1,shadowMode:!1})},bd14:function(e,t,i){"use strict";i.r(t);var n=i("d840"),a=i("101e");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("01ef");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"089d00af",null);t["default"]=r.exports},d840:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-collapse"},[e._t("default")],2)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},df06:function(e,t,i){"use strict";(function(t){var n=i("288e");i("6b54"),i("87b3"),i("7514");var a=n(i("5d73"));i("c5f6");var o=n(i("795b")),s=n(i("c74b"));e.exports={enterAddGoodNum:function(e){return new o.default(function(i,n){for(var o=function(n){var o=0,r=s.default.Query("Goods");r.get(e[n].objectId).then(function(s){if(t.log(e[n]),e[n].selectd_model){var r=!0,l=!1,c=void 0;try{for(var u,d=(0,a.default)(e[n].selected_model);!(r=(u=d.next()).done);r=!0){var f=u.value,v=!0,p=!1,g=void 0;try{for(var m,h=(0,a.default)(e[n].models);!(v=(m=h.next()).done);v=!0){var b=m.value;b.id==f.id&&(b.reserve=Number(b.reserve)+Number(f.num))}}catch(w){p=!0,g=w}finally{try{v||null==h.return||h.return()}finally{if(p)throw g}}}}catch(w){l=!0,c=w}finally{try{r||null==d.return||d.return()}finally{if(l)throw c}}o=Number(e[n].reserve)+Number(e[n].num),s.set("models",e[n].models)}else o=Number(e[n].reserve)+Number(e[n].num);s.set("reserve",o),s.set("stocktype",o>e[n].warning_num?1:0),s.save(),n==e.length-1&&i(!0)}).catch(function(e){t.log(e)})},r=0;r<e.length;r++)o(r)})},outRedGoodNum:function(e){var i=this;return new o.default(function(n,o){for(var r=function(o){var r=0,l=s.default.Query("Goods");l.get(e[o].objectId).then(function(t){if(e[o].selectd_model){var s=!0,l=!1,c=void 0;try{for(var u,d=(0,a.default)(e[o].selectd_model);!(s=(u=d.next()).done);s=!0){var f=u.value,v=!0,p=!1,g=void 0;try{for(var m,h=(0,a.default)(e[o].models);!(v=(m=h.next()).done);v=!0){var b=m.value;r+=Number(b.reserve),b.id==f.id&&(b.reserve=Number(b.reserve)-Number(f.num))}}catch(w){p=!0,g=w}finally{try{v||null==h.return||h.return()}finally{if(p)throw g}}}}catch(w){l=!0,c=w}finally{try{s||null==d.return||d.return()}finally{if(l)throw c}}r=Number(e[o].reserve)-Number(e[o].num),t.set("models",e[o].models)}else r=Number(e[o].reserve)-Number(e[o].num);t.set("reserve",r),t.set("stocktype",r>=e[o].warning_num?1:0),t.save(),e[o].warning_num>=r&&i.log(e[o].goodsName+"出库了"+e[o].num+"件，已经低于预警数量"+e[o].warning_num,-2,e[o].objectId),i.record_staffOut(Number(e[o].num)),o==e.length-1&&n(!0)}).catch(function(e){t.log(e)})},l=0;l<e.length;l++)r(l)})},handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(e,i,n){var a=s.default.Pointer("_User"),o=a.set(uni.getStorageSync("uid")),r=s.default.Query("logs");r.set("parent",o),r.set("log",e),r.set("detail_id",n),r.set("type",i),r.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})},record_shopOut:function(e,i){t.log(e,i);var n=s.default.Query("shops");n.set("id",e),n.set("have_out",i),n.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})},record_staffOut:function(e){if(t.log(e,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var i=s.default.Query("staffs");i.set("id",uni.getStorageSync("user").objectId),i.set("have_out",Number(e)+uni.getStorageSync("user").have_out),i.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})}},get_allCost:function(){var e=uni.getStorageSync("uid");t.log(e);var i=s.default.Query("Goods");i.equalTo("userId","==",e),i.find().then(function(e){t.log(e);var i=!0,n=!1,o=void 0;try{for(var s,r=(0,a.default)(e);!(i=(s=r.next()).done);i=!0){var l=s.value;t.log(l),Number(l.costPrice)*l.reserve,l.reserve}}catch(c){n=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(n)throw o}}})},getDay:function(e,t){var i=this,n=new Date,a=n.getTime()+864e5*e;n.setTime(a);var o=n.getFullYear(),s=n.getMonth(),r=n.getDate();return s=i.handleMonth(s+1),r=i.handleMonth(r),t?o+"-"+s+"-"+r+" 00:00:00":o+"-"+s+"-"+r},js_date_time:function(e,t){var i=new Date(e),n=i.getFullYear(),a=i.getMonth()+1;a=a<10?"0"+a:a;var o=i.getDate();o=o<10?"0"+o:o;var s=i.getHours();s=s<10?"0"+s:s;var r=i.getMinutes(),l=i.getSeconds();return r=r<10?"0"+r:r,l=l<10?"0"+l:l,t?n+"-"+a+"-"+o+" "+s+":"+r:n+"-"+a+"-"+o},handleMonth:function(e){var t=e;return 1==e.toString().length&&(t="0"+e),t}}}).call(this,i("5a52")["default"])},f3fb:function(e,t,i){"use strict";i.r(t);var n=i("965d"),a=i("fd87");for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);i("6b57");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"5e7b9afd",null);t["default"]=r.exports},f8ae:function(e,t,i){var n=i("151c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("61036523",n,!0,{sourceMap:!1,shadowMode:!1})},f8ca:function(e,t,i){var n=i("92c6");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("ceaad6ec",n,!0,{sourceMap:!1,shadowMode:!1})},fd87:function(e,t,i){"use strict";i.r(t);var n=i("92d1"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);t["default"]=a.a},ff65:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{class:["uni-collapse-cell",{"uni-collapse-cell--disabled":e.disabled,"uni-collapse-cell--open":e.isOpen}],attrs:{"hover-class":e.disabled?"":"uni-collapse-cell--hover"}},[i("v-uni-view",{staticClass:"uni-collapse-cell__title",on:{click:function(t){t=e.$handleEvent(t),e.onClick(t)}}},[e.thumb?i("v-uni-view",{staticClass:"uni-collapse-cell__title-extra"},[i("v-uni-image",{staticClass:"uni-collapse-cell__title-img",attrs:{src:e.thumb}})],1):e._e(),i("v-uni-view",{staticClass:"uni-collapse-cell__title-inner"},[i("v-uni-view",{staticClass:"uni-collapse-cell__title-text"},[e._v(e._s(e.title))])],1),i("v-uni-view",{staticClass:"uni-collapse-cell__title-arrow",class:{"uni-active":e.isOpen,"uni-collapse-cell--animation":!0===e.showAnimation}},[i("uni-icon",{attrs:{color:"#bbb",size:"20",type:"arrowdown"}})],1)],1),i("v-uni-view",{staticClass:"uni-collapse-cell__content",class:{"uni-collapse-cell--animation":!0===e.showAnimation},style:{height:e.isOpen?"auto":"0px"}},[i("v-uni-view",{attrs:{id:e.elId}},[e._t("default")],2)],1)],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})}}]);