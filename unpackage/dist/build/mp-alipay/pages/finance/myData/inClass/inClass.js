(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/finance/myData/inClass/inClass"],{1228:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=c(t("9546"));function c(e){return e&&e.__esModule?e:{default:e}}var s,i,a=function(){t.e("components/Loading/index").then(function(){return resolve(t("120a"))}.bind(null,t)).catch(t.oe)},l=function(){t.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(t("4d52"))}.bind(null,t)).catch(t.oe)},u=function(){t.e("components/uni-popup/uni-popup").then(function(){return resolve(t("7aeb"))}.bind(null,t)).catch(t.oe)},d={components:{loading:a,faIcon:l,uniPopup:u},data:function(){return{is_choose:!1,loading:!0,frist_class:null,financeSecondClass:null,selected_id:null,class_text:null,input_class_text:null,middle:!1,popup_editshow:!1,Popup_title:"一级分类"}},onLoad:function(n){s=this,e.getStorageSync("user"),i=e.getStorageSync("uid"),"choose"==n.type&&(s.is_choose=!0)},onShow:function(){s.get_category()},methods:{select_this:function(n,t){n.type=t,e.setStorageSync("category",n),e.navigateBack({delta:1})},get_category:function(){var e=o.default.Query("financeFristClass");e.equalTo("parent","==",i),e.equalTo("type","==","financeIn"),e.find().then((function(e){console.log(e),s.frist_class=e,0==e.length?s.loading=!1:s.get_second_category(e[0].objectId)}))},get_second_category:function(e){s.selected_id=e;var n=o.default.Query("financeFristClass");n.field("second",e),n.relation("financeSecondClass").then((function(e){console.log(e),s.loading=!1,s.financeSecondClass=e.results}))},showoption:function(n,t,o){console.log(n,t,o),e.showActionSheet({itemList:["删除","编辑"],success:function(e){console.log("选中了第"+(e.tapIndex+1)+"个按钮"),0==e.tapIndex?1===t?s.delete(n,"financeFristClass"):s.delete(n,"financeSecondClass"):(s.input_class_text=o,s.selected_id=n,1===t?(s.Popup_title="一级分类",s.popup_editshow=!0):(s.Popup_title="二级分类",s.popup_editshow=!0))},fail:function(e){console.log(e.errMsg)}})},add_fristclass:function(){this.Popup_title="一级分类",s.middle=!0},add_secondclass:function(){this.Popup_title="二级分类",s.middle=!0},hidePopup:function(){this.middle=!1,this.popup_editshow=!1},edit:function(){var n;n="一级分类"===s.Popup_title?"financeFristClass":"financeSecondClass",console.log(s.selected_id,n);var t=o.default.Query(n);t.set("id",s.selected_id),t.set("class_text",s.input_class_text),t.set("type","financeIn"),t.save().then((function(n){console.log(n),e.showToast({title:"修改成功"}),s.get_category(),s.middle=!1,s.popup_editshow=!1})).catch((function(e){console.log(e)}))},delete:function(n,t){e.showModal({title:"提示",content:"是否删除此分类",success:function(c){if(c.confirm){var i=o.default.Query(t);i.destroy(n).then((function(n){console.log(n),e.showToast({title:"删除成功",duration:1e3}),s.get_category()})).catch((function(e){console.log(e)}))}}})},confrim:function(){var n=this,t=s.class_text;if("一级分类"===this.Popup_title)if(null==t)e.showToast({icon:"none",title:"请输入类别"});else{var c=o.default.Pointer("_User"),a=c.set(i),l=o.default.Query("financeFristClass");l.set("parent",a),l.set("class_text",t),l.set("type","financeIn"),l.save().then((function(e){s.get_category(),n.middle=!1,n.class_text=null})).catch((function(e){console.log(e)}))}else{var u=s.selected_id,d=o.default.Pointer("financeFristClass"),f=d.set(u),r=o.default.Query("financeSecondClass");r.set("class_text",t),r.set("parent",f),r.set("type","financeIn"),r.save().then((function(e){var t=o.default.Relation("financeFristClass"),c=t.add([e.objectId]),i=o.default.Query("financeFristClass");i.get(u).then((function(e){e.set("second",c),e.save(),s.get_second_category(u),n.middle=!1,n.class_text=null}))})).catch((function(e){console.log(e)}))}}}};n.default=d}).call(this,t("c11b")["default"])},6157:function(e,n,t){"use strict";var o=t("add2"),c=t.n(o);c.a},9241:function(e,n,t){"use strict";t.r(n);var o=t("e64e"),c=t("bf32");for(var s in c)"default"!==s&&function(e){t.d(n,e,(function(){return c[e]}))}(s);t("6157");var i,a=t("f0c5"),l=Object(a["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);n["default"]=l.exports},add2:function(e,n,t){},bf32:function(e,n,t){"use strict";t.r(n);var o=t("1228"),c=t.n(o);for(var s in o)"default"!==s&&function(e){t.d(n,e,(function(){return o[e]}))}(s);n["default"]=c.a},dde6:function(e,n,t){"use strict";(function(e){t("d510"),t("921b");o(t("66fd"));var n=o(t("9241"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("c11b")["createPage"])},e64e:function(e,n,t){"use strict";var o={"uni-popup":function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"7aeb"))}},c=function(){var e=this,n=e.$createElement;e._self._c},s=[];t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return o}))}},[["dde6","common/runtime","common/vendor"]]]);