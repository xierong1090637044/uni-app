(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/category/category"],{"149c":function(e,t,n){"use strict";(function(e){n("9511"),n("921b");o(n("66fd"));var t=o(n("4e13"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"1be4":function(e,t,n){},3323:function(e,t,n){"use strict";n.r(t);var o=n("39b1"),s=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t["default"]=s.a},"39b1":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n("b739"));function s(e){return e&&e.__esModule?e:{default:e}}var c,l,u=function(){return n.e("components/Loading/index").then(n.bind(null,"0190"))},i=function(){return n.e("components/kilvn-fa-icon/fa-icon").then(n.bind(null,"3636"))},a=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"7b76"))},d={components:{loading:u,faIcon:i,uniPopup:a},data:function(){return{is_choose:!1,loading:!0,frist_class:null,second_class:null,selected_id:null,class_text:null,input_class_text:null,middle:!1,popup_editshow:!1,Popup_title:"一级分类"}},onLoad:function(t){c=this,e.getStorageSync("user"),l=e.getStorageSync("uid"),"choose"==t.type&&(c.is_choose=!0)},onShow:function(){c.get_category()},methods:{select_this:function(t,n){t.type=n,e.setStorageSync("category",t),e.navigateBack({delta:1})},get_category:function(){var e=o.default.Query("class_user");e.equalTo("parent","==",l),e.find().then(function(e){console.log(e),c.frist_class=e,0==e.length?c.loading=!1:c.get_second_category(e[0].objectId)})},get_second_category:function(e){c.selected_id=e;var t=o.default.Query("class_user");t.field("second",e),t.relation("second_class").then(function(e){console.log(e),c.loading=!1,c.second_class=e.results})},showoption:function(t,n,o){console.log(t,n,o),e.showActionSheet({itemList:["删除","编辑"],success:function(e){console.log("选中了第"+(e.tapIndex+1)+"个按钮"),0==e.tapIndex?1===n?c.delete(t,"class_user"):c.delete(t,"second_class"):(c.input_class_text=o,c.selected_id=t,1===n?(c.Popup_title="一级分类",c.popup_editshow=!0):(c.Popup_title="二级分类",c.popup_editshow=!0))},fail:function(e){console.log(e.errMsg)}})},add_fristclass:function(){this.Popup_title="一级分类",c.middle=!0},add_secondclass:function(){this.Popup_title="二级分类",c.middle=!0},hidePopup:function(){this.middle=!1,this.popup_editshow=!1},edit:function(){var t;t="一级分类"===c.Popup_title?"class_user":"second_class",console.log(c.selected_id,t);var n=o.default.Query(t);n.set("id",c.selected_id),n.set("class_text",c.input_class_text),n.save().then(function(t){console.log(t),e.showToast({title:"修改成功"}),c.get_category(),c.middle=!1,c.popup_editshow=!1}).catch(function(e){console.log(e)})},delete:function(t,n){e.showModal({title:"提示",content:"是否删除此分类",success:function(s){if(s.confirm){var l=o.default.Query(n);l.destroy(t).then(function(t){console.log(t),e.showToast({title:"删除成功",duration:1e3}),c.get_category()}).catch(function(e){console.log(e)})}}})},confrim:function(){var t=this,n=c.class_text;if("一级分类"===this.Popup_title)if(null==n)e.showToast({icon:"none",title:"请输入类别"});else{var s=o.default.Pointer("_User"),u=s.set(l),i=o.default.Query("class_user");i.set("parent",u),i.set("class_text",n),i.save().then(function(e){c.get_category(),t.middle=!1,t.class_text=null}).catch(function(e){console.log(e)})}else{var a=c.selected_id,d=o.default.Pointer("class_user"),r=d.set(a),f=o.default.Query("second_class");f.set("class_text",n),f.set("parent",r),f.save().then(function(e){var n=o.default.Relation("class_user"),s=n.add([e.objectId]),l=o.default.Query("class_user");l.get(a).then(function(e){e.set("second",s),e.save(),c.get_second_category(a),t.middle=!1,t.class_text=null})}).catch(function(e){console.log(e)})}}}};t.default=d}).call(this,n("543d")["default"])},"4e13":function(e,t,n){"use strict";n.r(t);var o=n("7353"),s=n("3323");for(var c in s)"default"!==c&&function(e){n.d(t,e,function(){return s[e]})}(c);n("75c0");var l=n("2877"),u=Object(l["a"])(s["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},7353:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s})},"75c0":function(e,t,n){"use strict";var o=n("1be4"),s=n.n(o);s.a}},[["149c","common/runtime","common/vendor"]]]);