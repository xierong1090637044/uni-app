(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/production/matterCategroy/matterCategroy"],{"138d":function(t,e,n){},2331:function(t,e,n){"use strict";n.r(e);var o=n("343b"),s=n("3d2e");for(var c in s)"default"!==c&&function(t){n.d(e,t,function(){return s[t]})}(c);n("8e0a");var i=n("2877"),a=Object(i["a"])(s["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},"343b":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s})},"3d2e":function(t,e,n){"use strict";n.r(e);var o=n("c9f5"),s=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e["default"]=s.a},"8e0a":function(t,e,n){"use strict";var o=n("138d"),s=n.n(o);s.a},"96b2":function(t,e,n){"use strict";(function(t){n("a961"),n("921b");o(n("66fd"));var e=o(n("2331"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},c9f5:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(n("c74b"));function s(t){return t&&t.__esModule?t:{default:t}}var c,i,a=function(){return n.e("components/Loading/index").then(n.bind(null,"524a"))},l=function(){return n.e("components/kilvn-fa-icon/fa-icon").then(n.bind(null,"0914"))},u=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"db37"))},d={components:{loading:a,faIcon:l,uniPopup:u},data:function(){return{is_choose:!1,loading:!0,frist_class:"",M_second_class:"",selected_id:"",class_text:"",input_class_text:"",middle:!1,popup_editshow:!1,Popup_title:"一级分类"}},onLoad:function(e){c=this,t.getStorageSync("user"),i=t.getStorageSync("uid"),"choose"==e.type&&(c.is_choose=!0)},onShow:function(){c.get_category()},methods:{select_this:function(e,n){e.type=n,t.setStorageSync("category",e),t.navigateBack({delta:1})},get_category:function(){var t=o.default.Query("M_frist_class");t.equalTo("parent","==",i),t.find().then(function(t){console.log(t),c.frist_class=t,0==t.length?c.loading=!1:c.get_second_category(t[0].objectId)})},get_second_category:function(t){c.selected_id=t;var e=o.default.Query("M_frist_class");e.field("second",t),e.relation("M_second_class").then(function(t){console.log(t),c.loading=!1,c.M_second_class=t.results})},showoption:function(e,n,o){console.log(e,n,o),t.showActionSheet({itemList:["删除","编辑"],success:function(t){console.log("选中了第"+(t.tapIndex+1)+"个按钮"),0==t.tapIndex?1===n?c.delete(e,"M_frist_class"):c.delete(e,"M_second_class"):(c.input_class_text=o,c.selected_id=e,1===n?(c.Popup_title="一级分类",c.popup_editshow=!0):(c.Popup_title="二级分类",c.popup_editshow=!0))},fail:function(t){console.log(t.errMsg)}})},add_fristclass:function(){this.Popup_title="一级分类",c.middle=!0},add_secondclass:function(){this.Popup_title="二级分类",c.middle=!0},hidePopup:function(){this.middle=!1,this.popup_editshow=!1},edit:function(){var e;e="一级分类"===c.Popup_title?"M_frist_class":"M_second_class",console.log(c.selected_id,e);var n=o.default.Query(e);n.set("id",c.selected_id),n.set("class_text",c.input_class_text),n.save().then(function(e){console.log(e),t.showToast({title:"修改成功"}),c.get_category(),c.middle=!1,c.popup_editshow=!1}).catch(function(t){console.log(t)})},delete:function(e,n){t.showModal({title:"提示",content:"是否删除此分类",success:function(s){if(s.confirm){var i=o.default.Query(n);i.destroy(e).then(function(e){console.log(e),t.showToast({title:"删除成功",duration:1e3}),c.get_category()}).catch(function(t){console.log(t)})}}})},confrim:function(){var e=this,n=c.class_text;if("一级分类"===this.Popup_title)if(""==n)t.showToast({icon:"none",title:"请输入类别"});else{var s=o.default.Pointer("_User"),a=s.set(i),l=o.default.Query("M_frist_class");l.set("parent",a),l.set("class_text",n),l.save().then(function(t){c.get_category(),e.middle=!1,e.class_text=""}).catch(function(t){console.log(t)})}else{var u=c.selected_id,d=o.default.Pointer("M_frist_class"),r=d.set(u),f=o.default.Query("M_second_class");f.set("class_text",n),f.set("parent",r),f.save().then(function(t){var n=o.default.Relation("M_frist_class"),s=n.add([t.objectId]),i=o.default.Query("M_frist_class");i.get(u).then(function(t){t.set("second",s),t.save(),c.get_second_category(u),e.middle=!1,e.class_text=""})}).catch(function(t){console.log(t)})}}}};e.default=d}).call(this,n("543d")["default"])}},[["96b2","common/runtime","common/vendor"]]]);