(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/finance/myData/outClass/outClass"],{"0e45":function(e,t,n){"use strict";(function(e){n("d510"),n("921b");o(n("66fd"));var t=o(n("b5bb"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"168f":function(e,t,n){"use strict";var o={"uni-popup":function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"7aeb"))}},c=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o}))},4849:function(e,t,n){},b5bb:function(e,t,n){"use strict";n.r(t);var o=n("168f"),c=n("d7c4");for(var s in c)"default"!==s&&function(e){n.d(t,e,(function(){return c[e]}))}(s);n("e376");var i,a=n("f0c5"),l=Object(a["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);t["default"]=l.exports},bb43:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n("9546"));function c(e){return e&&e.__esModule?e:{default:e}}var s,i,a=function(){n.e("components/Loading/index").then(function(){return resolve(n("120a"))}.bind(null,n)).catch(n.oe)},l=function(){n.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(n("4d52"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n("7aeb"))}.bind(null,n)).catch(n.oe)},d={components:{loading:a,faIcon:l,uniPopup:u},data:function(){return{is_choose:!1,loading:!0,frist_class:null,financeSecondClass:null,selected_id:null,class_text:null,input_class_text:null,middle:!1,popup_editshow:!1,Popup_title:"一级分类"}},onLoad:function(t){s=this,e.getStorageSync("user"),i=e.getStorageSync("uid"),"choose"==t.type&&(s.is_choose=!0)},onShow:function(){s.get_category()},methods:{select_this:function(t,n){t.type=n,e.setStorageSync("category",t),e.navigateBack({delta:1})},get_category:function(){var e=o.default.Query("financeFristClass");e.equalTo("parent","==",i),e.equalTo("type","==","financeOut"),e.find().then((function(e){console.log(e),s.frist_class=e,0==e.length?s.loading=!1:s.get_second_category(e[0].objectId)}))},get_second_category:function(e){s.selected_id=e;var t=o.default.Query("financeFristClass");t.field("second",e),t.relation("financeSecondClass").then((function(e){console.log(e),s.loading=!1,s.financeSecondClass=e.results}))},showoption:function(t,n,o){console.log(t,n,o),e.showActionSheet({itemList:["删除","编辑"],success:function(e){console.log("选中了第"+(e.tapIndex+1)+"个按钮"),0==e.tapIndex?1===n?s.delete(t,"financeFristClass"):s.delete(t,"financeSecondClass"):(s.input_class_text=o,s.selected_id=t,1===n?(s.Popup_title="一级分类",s.popup_editshow=!0):(s.Popup_title="二级分类",s.popup_editshow=!0))},fail:function(e){console.log(e.errMsg)}})},add_fristclass:function(){this.Popup_title="一级分类",s.middle=!0},add_secondclass:function(){this.Popup_title="二级分类",s.middle=!0},hidePopup:function(){this.middle=!1,this.popup_editshow=!1},edit:function(){var t;t="一级分类"===s.Popup_title?"financeFristClass":"financeSecondClass",console.log(s.selected_id,t);var n=o.default.Query(t);n.set("id",s.selected_id),n.set("class_text",s.input_class_text),n.set("type","financeOut"),n.save().then((function(t){console.log(t),e.showToast({title:"修改成功"}),s.get_category(),s.middle=!1,s.popup_editshow=!1})).catch((function(e){console.log(e)}))},delete:function(t,n){e.showModal({title:"提示",content:"是否删除此分类",success:function(c){if(c.confirm){var i=o.default.Query(n);i.destroy(t).then((function(t){console.log(t),e.showToast({title:"删除成功",duration:1e3}),s.get_category()})).catch((function(e){console.log(e)}))}}})},confrim:function(){var t=this,n=s.class_text;if("一级分类"===this.Popup_title)if(null==n)e.showToast({icon:"none",title:"请输入类别"});else{var c=o.default.Pointer("_User"),a=c.set(i),l=o.default.Query("financeFristClass");l.set("parent",a),l.set("class_text",n),l.set("type","financeOut"),l.save().then((function(e){s.get_category(),t.middle=!1,t.class_text=null})).catch((function(e){console.log(e)}))}else{var u=s.selected_id,d=o.default.Pointer("financeFristClass"),f=d.set(u),r=o.default.Query("financeSecondClass");r.set("class_text",n),r.set("parent",f),r.set("type","financeOut"),r.save().then((function(e){var n=o.default.Relation("financeFristClass"),c=n.add([e.objectId]),i=o.default.Query("financeFristClass");i.get(u).then((function(e){e.set("second",c),e.save(),s.get_second_category(u),t.middle=!1,t.class_text=null}))})).catch((function(e){console.log(e)}))}}}};t.default=d}).call(this,n("543d")["default"])},d7c4:function(e,t,n){"use strict";n.r(t);var o=n("bb43"),c=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,(function(){return o[e]}))}(s);t["default"]=c.a},e376:function(e,t,n){"use strict";var o=n("4849"),c=n.n(o);c.a}},[["0e45","common/runtime","common/vendor"]]]);