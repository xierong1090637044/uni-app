(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-category-category"],{"02a8":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniPopup",props:{show:{type:Boolean,default:!1},position:{type:String,default:"middle"},mode:{type:String,default:"insert"},msg:{type:String,default:""},h5Top:{type:Boolean,default:!1},buttonMode:{type:String,default:"bottom"}},data:function(){return{offsetTop:0}},watch:{h5Top:function(t){this.offsetTop=t?44:0}},created:function(){var t=0;t=this.h5Top?0:44,this.offsetTop=t},methods:{hide:function(){"insert"===this.mode&&"middle"===this.position||this.$emit("hidePopup")},closeMask:function(){"insert"===this.mode&&this.$emit("hidePopup")},moveHandle:function(){}}};e.default=n},"03d6":function(t,e,i){"use strict";(function(t){var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("7514");var o,a,s=n(i("c74b")),l=n(i("524a")),c=n(i("0914")),d=n(i("db37")),u={components:{loading:l.default,faIcon:c.default,uniPopup:d.default},data:function(){return{is_choose:!1,loading:!0,frist_class:null,second_class:null,selected_id:null,class_text:null,input_class_text:null,middle:!1,popup_editshow:!1,Popup_title:"一级分类"}},onLoad:function(t){o=this,uni.getStorageSync("user"),a=uni.getStorageSync("uid"),"choose"==t.type&&(o.is_choose=!0)},onShow:function(){o.get_category()},methods:{select_this:function(t,e){t.type=e,uni.setStorageSync("category",t),uni.navigateBack({delta:1})},get_category:function(){var e=s.default.Query("class_user");e.equalTo("parent","==",a),e.find().then(function(e){t.log(e),o.frist_class=e,0==e.length?o.loading=!1:o.get_second_category(e[0].objectId)})},get_second_category:function(e){o.selected_id=e;var i=s.default.Query("class_user");i.field("second",e),i.relation("second_class").then(function(e){t.log(e),o.loading=!1,o.second_class=e.results})},showoption:function(e,i,n){t.log(e,i,n),uni.showActionSheet({itemList:["删除","编辑"],success:function(a){t.log("选中了第"+(a.tapIndex+1)+"个按钮"),0==a.tapIndex?1===i?o.delete(e,"class_user"):o.delete(e,"second_class"):(o.input_class_text=n,o.selected_id=e,1===i?(o.Popup_title="一级分类",o.popup_editshow=!0):(o.Popup_title="二级分类",o.popup_editshow=!0))},fail:function(e){t.log(e.errMsg)}})},add_fristclass:function(){this.Popup_title="一级分类",o.middle=!0},add_secondclass:function(){this.Popup_title="二级分类",o.middle=!0},hidePopup:function(){this.middle=!1,this.popup_editshow=!1},edit:function(){var e;e="一级分类"===o.Popup_title?"class_user":"second_class",t.log(o.selected_id,e);var i=s.default.Query(e);i.set("id",o.selected_id),i.set("class_text",o.input_class_text),i.save().then(function(e){t.log(e),uni.showToast({title:"修改成功"}),o.get_category(),o.middle=!1,o.popup_editshow=!1}).catch(function(e){t.log(e)})},delete:function(e,i){uni.showModal({title:"提示",content:"是否删除此分类",success:function(n){if(n.confirm){var a=s.default.Query(i);a.destroy(e).then(function(e){t.log(e),uni.showToast({title:"删除成功",duration:1e3}),o.get_category()}).catch(function(e){t.log(e)})}}})},confrim:function(){var e=this,i=o.class_text;if("一级分类"===this.Popup_title)if(null==i)uni.showToast({icon:"none",title:"请输入类别"});else{var n=s.default.Pointer("_User"),l=n.set(a),c=s.default.Query("class_user");c.set("parent",l),c.set("class_text",i),c.save().then(function(t){o.get_category(),e.middle=!1,e.class_text=null}).catch(function(e){t.log(e)})}else{var d=o.selected_id,u=s.default.Pointer("class_user"),r=u.set(d),f=s.default.Query("second_class");f.set("class_text",i),f.set("parent",r),f.save().then(function(t){var i=s.default.Relation("class_user"),n=i.add([t.objectId]),a=s.default.Query("class_user");a.get(d).then(function(t){t.set("second",n),t.save(),o.get_second_category(d),e.middle=!1,e.class_text=null})}).catch(function(e){t.log(e)})}}}};e.default=u}).call(this,i("5a52")["default"])},"0ff3":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".page[data-v-1465fba5]{background:#fff}.content[data-v-1465fba5]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.left_content[data-v-1465fba5]{width:50%;border-right:%?1?% solid#ddd;height:100vh}.right_content[data-v-1465fba5]{width:50%}.class_item[data-v-1465fba5]{padding-left:%?10?%;padding-right:%?10?%;line-height:%?80?%;border-bottom:%?1?% solid#ddd;font-size:%?26?%;color:#3d3d3d;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.selectd_item[data-v-1465fba5]{background:#df9464!important;color:#fff!important}.class_item_bottom[data-v-1465fba5]{padding-left:%?10?%;line-height:%?80?%;border-bottom:%?1?% solid#ddd;font-size:%?26?%;color:#3d3d3d;font-weight:700;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.class_texxt_view[data-v-1465fba5]{padding:%?10?% 0;width:calc(100% - %?30?%);overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.popup[data-v-1465fba5]{text-align:center;color:#3d3d3d}.popup_content[data-v-1465fba5]{width:%?500?%}.popup_title[data-v-1465fba5]{margin-bottom:%?40?%;font-size:%?32?%;font-weight:700}.popup_input[data-v-1465fba5]{border:%?1?% solid#ddd;margin-bottom:%?40?%;line-height:%?90?%;height:%?90?%;border-radius:%?8?%;font-size:%?26?%}.popup_button[data-v-1465fba5]{background:#426ab3;color:#fff}",""])},"10db":function(t,e,i){"use strict";i.r(e);var n=i("7e62"),o=i("46fd");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("cab1");var s=i("2877"),l=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"1465fba5",null);e["default"]=l.exports},"2ddd":function(t,e,i){var n=i("0ff3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("7afe7917",n,!0,{sourceMap:!1,shadowMode:!1})},"33f5":function(t,e,i){"use strict";var n=i("3fd0"),o=i.n(n);o.a},"3fd0":function(t,e,i){var n=i("a868");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("fcfbf626",n,!0,{sourceMap:!1,shadowMode:!1})},"46fd":function(t,e,i){"use strict";i.r(e);var n=i("03d6"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},"4e00":function(t,e,i){"use strict";i.r(e);var n=i("02a8"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},"6eb0":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-mask",style:{top:t.offsetTop+"px"},on:{click:function(e){e=t.$handleEvent(e),t.hide(e)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),e=t.$handleEvent(e),t.moveHandle(e)}}}),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"uni-popup",class:"uni-popup-"+t.position+" uni-popup-"+t.mode},[t._v(t._s(t.msg)),t._t("default"),"middle"===t.position&&"insert"===t.mode?i("v-uni-view",{staticClass:" uni-icon uni-icon-close",class:{"uni-close-bottom":"bottom"===t.buttonMode,"uni-close-right":"right"===t.buttonMode},on:{click:function(e){e=t.$handleEvent(e),t.closeMask(e)}}}):t._e()],2)],1)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},"7e62":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"page"},[t.loading?i("loading"):i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"left_content"},[i("v-uni-view",{staticStyle:{height:"calc(100vh - 80rpx)",overflow:"scroll"}},t._l(t.frist_class,function(e,n){return i("v-uni-view",{key:n,staticClass:"class_item",class:t.selected_id===e.objectId?"selectd_item":"",staticStyle:{"font-weight":"bold"}},[i("v-uni-view",{staticClass:"class_texxt_view",on:{click:function(i){i=t.$handleEvent(i),t.get_second_category(e.objectId)}}},[t._v(t._s(e.class_text))]),t.is_choose?i("v-uni-view",{staticClass:"display_flex",staticStyle:{"justify-content":"flex-end",width:"100%"},on:{click:function(i){i=t.$handleEvent(i),t.select_this(e,1)}}},[i("v-uni-text",{staticStyle:{color:"#d93a49"}},[t._v("选择")])],1):i("fa-icon",{attrs:{type:"pencil-square-o",size:"20",color:"#fff"},on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.showoption(t.selected_id,1,e.class_text)}}})],1)}),1),i("v-uni-view",{staticClass:"class_item_bottom",on:{click:function(e){e=t.$handleEvent(e),t.add_fristclass(e)}}},[i("v-uni-text",{staticStyle:{"margin-right":"10rpx"}},[t._v("新增一类")]),i("fa-icon",{attrs:{type:"plus-circle",size:"20",color:"#3d3d3d"}})],1)],1),i("v-uni-view",{staticClass:"right_content"},[i("v-uni-view",{staticStyle:{height:"calc(100vh - 80rpx)",overflow:"scroll"}},t._l(t.second_class,function(e,n){return i("v-uni-view",{key:n,staticClass:"class_item",staticStyle:{color:"#333333"}},[i("v-uni-view",{staticClass:"class_texxt_view"},[t._v(t._s(e.class_text))]),t.is_choose?i("v-uni-view",{staticClass:"display_flex",staticStyle:{"justify-content":"flex-end",width:"100%"},on:{click:function(i){i=t.$handleEvent(i),t.select_this(e,2)}}},[i("v-uni-text",{staticStyle:{color:"#d93a49"}},[t._v("选择")])],1):i("fa-icon",{attrs:{type:"pencil-square-o",size:"20",color:"#3d3d3d"},on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.showoption(e.objectId,2,e.class_text)}}})],1)}),1),i("v-uni-view",{staticClass:"class_item_bottom",on:{click:function(e){e=t.$handleEvent(e),t.add_secondclass(e)}}},[i("v-uni-text",{staticStyle:{"margin-right":"10rpx"}},[t._v("新增二类")]),i("fa-icon",{attrs:{type:"plus-circle",size:"20",color:"#3d3d3d"}})],1)],1)],1),i("uni-popup",{staticClass:"popup",attrs:{show:t.middle,type:"top",mode:"fixed"},on:{hidePopup:function(e){e=t.$handleEvent(e),t.hidePopup(e)}}},[i("v-uni-view",{staticClass:"popup_content"},[i("v-uni-view",{staticClass:"popup_title"},[t._v(t._s(t.Popup_title))]),i("v-uni-view",[i("v-uni-input",{staticClass:"popup_input",attrs:{placeholder:"请输入"+t.Popup_title},model:{value:t.class_text,callback:function(e){t.class_text=e},expression:"class_text"}})],1),i("v-uni-view",[i("v-uni-button",{staticClass:"popup_button",on:{click:function(e){e=t.$handleEvent(e),t.confrim(e)}}},[t._v("确认")])],1)],1)],1),i("uni-popup",{staticClass:"popup",attrs:{show:t.popup_editshow,type:"top",mode:"fixed"},on:{hidePopup:function(e){e=t.$handleEvent(e),t.hidePopup(e)}}},[i("v-uni-view",{staticClass:"popup_content"},[i("v-uni-view",{staticClass:"popup_title"},[t._v(t._s(t.Popup_title))]),i("v-uni-view",[i("v-uni-input",{staticClass:"popup_input",attrs:{placeholder:"请编辑"+t.Popup_title},model:{value:t.input_class_text,callback:function(e){t.input_class_text=e},expression:"input_class_text"}})],1),i("v-uni-view",[i("v-uni-button",{staticClass:"popup_button",on:{click:function(e){e=t.$handleEvent(e),t.edit()}}},[t._v("确认")])],1)],1)],1)],1)},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},a868:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.uni-mask[data-v-aaf92358]{position:fixed;z-index:998;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.uni-popup[data-v-aaf92358]{position:fixed;z-index:999;background-color:#fff}.uni-popup-middle[data-v-aaf92358]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.uni-popup-middle.uni-popup-insert[data-v-aaf92358]{min-width:%?380?%;min-height:%?380?%;max-width:100%;max-height:80%;-webkit-transform:translate(-50%,-65%);-ms-transform:translate(-50%,-65%);transform:translate(-50%,-65%);background:none;-webkit-box-shadow:none;box-shadow:none}.uni-popup-middle.uni-popup-fixed[data-v-aaf92358]{border-radius:%?10?%;padding:%?30?%}.uni-close-bottom[data-v-aaf92358],.uni-close-right[data-v-aaf92358]{position:absolute;bottom:%?-180?%;text-align:center;border-radius:50%;color:#f5f5f5;font-size:%?60?%;font-weight:700;opacity:.8;z-index:-1}.uni-close-bottom[data-v-aaf92358]{margin:auto;left:0;right:0}.uni-close-right[data-v-aaf92358]{right:%?-60?%;top:%?-80?%}.uni-close-bottom[data-v-aaf92358]:after{content:"";position:absolute;width:0;border:1px #f5f5f5 solid;top:%?-200?%;bottom:%?56?%;left:50%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);opacity:.8}.uni-popup-bottom[data-v-aaf92358],.uni-popup-top[data-v-aaf92358]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-popup-top[data-v-aaf92358]{top:0;left:0;width:100%;height:%?100?%;line-height:%?100?%;text-align:center}.uni-popup-bottom[data-v-aaf92358]{left:0;bottom:0;width:100%;min-height:%?100?%;line-height:%?100?%;text-align:center}',""])},cab1:function(t,e,i){"use strict";var n=i("2ddd"),o=i.n(n);o.a},db37:function(t,e,i){"use strict";i.r(e);var n=i("6eb0"),o=i("4e00");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("33f5");var s=i("2877"),l=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"aaf92358",null);e["default"]=l.exports}}]);