(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/customClass/customClass"],{"4d6c":function(t,e,n){"use strict";n.r(e);var o=n("80b1"),s=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e["default"]=s.a},"4eb8":function(t,e,n){"use strict";var o={"uni-popup":function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"7aeb"))}},s=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return o}))},"80b1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(n("9546"));function s(t){return t&&t.__esModule?t:{default:t}}var c,u,i=function(){n.e("components/Loading/index").then(function(){return resolve(n("120a"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(n("4d52"))}.bind(null,n)).catch(n.oe)},a=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n("7aeb"))}.bind(null,n)).catch(n.oe)},d={components:{loading:i,faIcon:l,uniPopup:a},data:function(){return{is_choose:!1,loading:!0,customFristClass:null,customSecondClass:null,selected_id:null,class_text:null,input_class_text:null,middle:!1,popup_editshow:!1,Popup_title:"一级分类"}},onLoad:function(e){c=this,t.setNavigationBarTitle({title:"客户类别"}),t.getStorageSync("user"),u=t.getStorageSync("uid"),"choose"==e.type&&(c.is_choose=!0)},onShow:function(){c.get_category()},methods:{select_this:function(e,n){e.type=n,t.setStorageSync("customCategory",e),t.navigateBack({delta:1})},get_category:function(){t.showLoading({title:"加载中..."});var e=o.default.Query("customFristClass");e.equalTo("parent","==",u),e.find().then((function(e){console.log(e),c.customFristClass=e,0==e.length?t.hideLoading():c.get_second_category(e[0].objectId)}))},get_second_category:function(e){c.selected_id=e;var n=o.default.Query("customFristClass");n.field("second",e),n.relation("customSecondClass").then((function(e){t.hideLoading(),c.customSecondClass=e.results}))},showoption:function(e,n,o){console.log(e,n,o),t.showActionSheet({itemList:["删除","编辑"],success:function(t){console.log("选中了第"+(t.tapIndex+1)+"个按钮"),0==t.tapIndex?1===n?c.delete(e,"customFristClass"):c.delete(e,"customSecondClass"):(c.input_class_text=o,c.selected_id=e,1===n?(c.Popup_title="一级分类",c.popup_editshow=!0):(c.Popup_title="二级分类",c.popup_editshow=!0))},fail:function(t){console.log(t.errMsg)}})},add_fristclass:function(){this.Popup_title="一级分类",c.middle=!0},add_secondclass:function(){this.Popup_title="二级分类",c.middle=!0},hidePopup:function(){this.middle=!1,this.popup_editshow=!1},edit:function(){var e;e="一级分类"===c.Popup_title?"customFristClass":"customSecondClass",console.log(c.selected_id,e);var n=o.default.Query(e);n.set("id",c.selected_id),n.set("class_text",c.input_class_text),n.save().then((function(e){console.log(e),t.showToast({title:"修改成功"}),c.get_category(),c.middle=!1,c.popup_editshow=!1})).catch((function(t){console.log(t)}))},delete:function(e,n){t.showModal({title:"提示",content:"是否删除此分类",success:function(s){if(s.confirm){var u=o.default.Query(n);u.destroy(e).then((function(e){console.log(e),t.showToast({title:"删除成功",duration:1e3}),c.get_category()})).catch((function(t){console.log(t)}))}}})},confrim:function(){var e=this,n=c.class_text;if("一级分类"===this.Popup_title)if(null==n)t.showToast({icon:"none",title:"请输入类别"});else{var s=o.default.Pointer("_User"),i=s.set(u),l=o.default.Query("customFristClass");l.set("parent",i),l.set("class_text",n),l.save().then((function(t){c.get_category(),e.middle=!1,e.class_text=null})).catch((function(t){console.log(t)}))}else{var a=c.selected_id,d=o.default.Pointer("customFristClass"),r=d.set(a),f=o.default.Query("customSecondClass");f.set("class_text",n),f.set("parent",r),f.save().then((function(t){var n=o.default.Relation("customFristClass"),s=n.add([t.objectId]),u=o.default.Query("customFristClass");u.get(a).then((function(t){t.set("second",s),t.save(),c.get_second_category(a),e.middle=!1,e.class_text=null}))})).catch((function(t){console.log(t)}))}}}};e.default=d}).call(this,n("543d")["default"])},a27e:function(t,e,n){},d379:function(t,e,n){"use strict";n.r(e);var o=n("4eb8"),s=n("4d6c");for(var c in s)"default"!==c&&function(t){n.d(e,t,(function(){return s[t]}))}(c);n("e698");var u,i=n("f0c5"),l=Object(i["a"])(s["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);e["default"]=l.exports},e5e3:function(t,e,n){"use strict";(function(t){n("d510"),n("921b");o(n("66fd"));var e=o(n("d379"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},e698:function(t,e,n){"use strict";var o=n("a27e"),s=n.n(o);s.a}},[["e5e3","common/runtime","common/vendor"]]]);