(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/good_det/good_det"],{"1a90":function(e,o,t){"use strict";var n=t("1bd6"),c=t.n(n);c.a},"1bd6":function(e,o,t){},3057:function(e,o,t){"use strict";t.r(o);var n=t("b1c4"),c=t.n(n);for(var s in n)"default"!==s&&function(e){t.d(o,e,(function(){return n[e]}))}(s);o["default"]=c.a},7935:function(e,o,t){"use strict";(function(e){t("a961"),t("921b");n(t("66fd"));var o=n(t("a15f"));function n(e){return e&&e.__esModule?e:{default:e}}e(o.default)}).call(this,t("543d")["createPage"])},a15f:function(e,o,t){"use strict";t.r(o);var n=t("c8f9"),c=t("3057");for(var s in c)"default"!==s&&function(e){t.d(o,e,(function(){return c[e]}))}(s);t("1a90");var d,u=t("f0c5"),a=Object(u["a"])(c["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],d);o["default"]=a.exports},b1c4:function(e,o,t){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=d(t("c74b")),c=d(t("b410")),s=d(t("df06"));function d(e){return e&&e.__esModule?e:{default:e}}var u,a,r=function(){t.e("components/kilvn-fa-icon/fa-icon").then(function(){return resolve(t("0914"))}.bind(null,t)).catch(t.oe)},i=function(){Promise.all([t.e("common/vendor"),t.e("components/tki-qrcode/tki-qrcode")]).then(function(){return resolve(t("8afd"))}.bind(null,t)).catch(t.oe)},l=function(){Promise.all([t.e("common/vendor"),t.e("components/tki-barcode/tki-barcode")]).then(function(){return resolve(t("2fe1"))}.bind(null,t)).catch(t.oe)},f=function(){t.e("components/uni-fab/uni-fab").then(function(){return resolve(t("1261"))}.bind(null,t)).catch(t.oe)},_=function(){t.e("components/uni-popup/uni-popup").then(function(){return resolve(t("db37"))}.bind(null,t)).catch(t.oe)},g={components:{uniPopup:_,faIcon:r,tkiQrcode:i,tkiBarcode:l,uniFab:f},data:function(){return{user:e.getStorageSync("user"),badnum:{num:"",desc:""},bad_numshow:!1,loading:!0,select_qrcode:"",get_reserve_checked:!0,product:{},is_show:!1,bar_code_show:!1,selected_item:""}},onLoad:function(o){u=this,a=e.getStorageSync("uid"),e.removeStorageSync("now_model"),console.log(o),o.id?u.getDetail_byId(o.id,o.type):u.getDetail_noId()},onShareAppMessage:function(e){return"button"===e.from&&console.log(e.target),{title:"库存表-"+product.goodsName+"的详情",path:"/pages/manage/good_det/good_det?id="+product.objectId+'&type="false"'}},methods:{getDetail_byId:function(o,t){var c=this,d=[];e.showLoading({title:"加载中..."});var r=n.default.Query("Goods");"false"==t?r.equalTo("objectId","==",o):r.equalTo("productCode","==",o),r.equalTo("userId","==",a),r.find().then((function(o){console.log(o);var t=o[0],n=0;e.setStorageSync("now_product",t),r.equalTo("userId","==",a),r.equalTo("status","!=",-1),r.include("stocks","goodsClass","second_class"),r.equalTo("goodsName","==",t.goodsName),r.find().then((function(o){var a=!0,r=!1,i=void 0;try{for(var l,f=o[Symbol.iterator]();!(a=(l=f.next()).done);a=!0){var _=l.value,g={};_.stocks?(g.stock_name=_.stocks.stock_name,g.stock_objectid=_.stocks.objectId):(g.stock_name="",g.stock_objectid=""),g.reserve=_.reserve.toFixed(e.getStorageSync("setting").show_float),g.models=_.models,g.warning_num=_.warning_num,g.bad_num=_.bad_num?_.bad_num:0,g.good_id=_.objectId,g.accessory=_.accessory?_.accessory:"",g.productCode=_.productCode?_.productCode+"-"+!0+"-old":_.objectId+"-"+!1+"-old",_.stocks=g,n+=_.reserve,d.push(_.stocks)}}catch(m){r=!0,i=m}finally{try{a||null==f.return||f.return()}finally{if(r)throw i}}2==u.user.identity&&u.user.rights&&-1!=u.user.rights.othercurrent.indexOf("0")&&(t.costPrice=0),c.product=t,c.product.nousetime&&(c.product.nousetime=s.default.js_date_time(c.product.nousetime)),c.product.all_reserve=n.toFixed(e.getStorageSync("setting").show_float),c.product.stocks=d,u.loading=!1,e.hideLoading(),console.log(c.product)}))}))},getDetail_noId:function(){var o=this,t=[],c=e.getStorageSync("now_product"),d=0;e.showLoading({title:"加载中..."});var r=n.default.Query("Goods");r.equalTo("userId","==",a),r.equalTo("status","!=",-1),r.include("stocks","goodsClass","second_class"),r.equalTo("goodsName","==",c.goodsName),r.find().then((function(n){var a=!0,r=!1,i=void 0;try{for(var l,f=n[Symbol.iterator]();!(a=(l=f.next()).done);a=!0){var _=l.value,g={};_.stocks?(g.stock_name=_.stocks.stock_name,g.stock_objectid=_.stocks.objectId):(g.stock_name="",g.stock_objectid=""),g.reserve=_.reserve.toFixed(e.getStorageSync("setting").show_float),g.models=_.models,g.warning_num=_.warning_num,g.bad_num=_.bad_num?_.bad_num:0,g.good_id=_.objectId,g.accessory=_.accessory?_.accessory:"",g.productCode=_.productCode?_.productCode+"-"+!0+"-old":_.objectId+"-"+!1+"-old",_.stocks=g,d+=_.reserve,t.push(_.stocks)}}catch(m){r=!0,i=m}finally{try{a||null==f.return||f.return()}finally{if(r)throw i}}2==u.user.identity&&u.user.rights&&-1!=u.user.rights.othercurrent.indexOf("0")&&(c.costPrice=0),o.product=e.getStorageSync("now_product"),o.product.nousetime&&(o.product.nousetime=s.default.js_date_time(o.product.nousetime)),o.product.all_reserve=d.toFixed(e.getStorageSync("setting").show_float),o.product.stocks=t,u.loading=!1,e.hideLoading()}))},confrim_badnum:function(){if(console.log(u.selected_item),u.badnum.num){var o=n.default.Pointer("_User"),t=o.set(e.getStorageSync("masterId")),c=n.default.Pointer("Goods"),s=c.set(u.selected_item.good_id),d=u.selected_item.good_id,a=Number(u.selected_item.bad_num),r=a+Number(u.badnum.num),i=n.default.Query("bad_goods");i.set("bad_num",u.badnum.num),i.set("beizhu_text",u.badnum.desc),i.set("operater",t),i.set("goods",s),i.save().then((function(o){var t=n.default.Query("Goods");t.set("id",d),t.set("bad_num",r),t.save().then((function(o){u.bad_numshow=!1,e.showToast({title:"记录成功"})})),u.getDetail_noId()}))}else e.showToast({title:"请输入货损数量",icon:"none"})},add_badnum:function(e){u.bad_numshow=!0,u.selected_item=e},show_qrcode:function(e){u.is_show=!0,u.select_qrcode=e.productCode},change_state:function(e){u.get_reserve_checked=e.detail.value},print_info:function(e){c.default.print_goodDet(e)},modify:function(o){console.log(o);var t=e.getStorageSync("now_product");t.objectId=o.good_id,t.reserve=o.reserve,t.warning_num=o.warning_num?o.warning_num:0,t.bad_num=o.bad_num?o.bad_num:0,e.showActionSheet({itemList:["编辑产品信息","编辑产品的库存信息"],success:function(n){if(console.log("选中了第"+(n.tapIndex+1)+"个按钮"),0==n.tapIndex)e.navigateTo({url:"edit_info/edit_info"}),t.ids=u.product.stocks,console.log(u.product.stocks),e.setStorageSync("now_product",t);else{if(o.stock_name){var c=[],s={},d={};d.stock_name=o.stock_name,d.objectId=o.stock_objectid,s.stock=d,c.push(s),e.setStorageSync("warehouse",c)}e.navigateTo({url:"edit_stock/edit_stock"}),e.setStorageSync("now_product",t)}}})},trigger:function(o){this.content[o.index].active=!o.item.active,0==o.index?(e.setStorageSync("now_product",this.product),e.navigateTo({url:"../good_add/good_add"})):u.delete()},showcode_option:function(){e.showActionSheet({itemList:["二维码","条形码"],success:function(e){console.log("选中了第"+(e.tapIndex+1)+"个按钮"),0==e.tapIndex?u.is_show=!0:u.bar_code_show=!0},fail:function(e){console.log(e.errMsg)}})},qrR:function(e){this.src=e},bcR:function(e){this.src=e},saveBccode:function(){this.$refs.barcode._saveCode()},saveQrcode:function(){this.$refs.qrcode._saveCode()},delete_good:function(o,t,c){e.showModal({title:"提示",content:"是否删除该商品",success:function(s){if(s.confirm){e.setStorageSync("is_add",!0);var d=n.default.Query("Goods");d.set("id",o),d.set("status",-1),d.save().then((function(o){if(t)e.navigateBack({delta:1}),setTimeout((function(){e.showToast({title:"删除成功"})}),1e3);else if(u.product.stocks.length>1){var s=u.product.stocks[c+1].good_id,d=n.default.Query("Goods");d.get(s).then((function(o){console.log(o),o.set("accessory",!1),o.save(),e.navigateBack({delta:1}),setTimeout((function(){e.showToast({title:"删除成功"})}),1e3)})).catch((function(e){console.log(e)}))}else e.navigateBack({delta:1}),setTimeout((function(){e.showToast({title:"删除成功"})}),1e3)})).catch((function(e){console.log(e)}))}}})}}};o.default=g}).call(this,t("543d")["default"])},c8f9:function(e,o,t){"use strict";var n={"tki-qrcode":()=>Promise.all([t.e("common/vendor"),t.e("components/tki-qrcode/tki-qrcode")]).then(t.bind(null,"8afd")),"uni-popup":()=>t.e("components/uni-popup/uni-popup").then(t.bind(null,"db37"))},c=function(){var e=this,o=e.$createElement;e._self._c;e._isMounted||(e.e0=function(o){e.is_show=!1},e.e1=function(o){e.bad_numshow=!1})},s=[];t.d(o,"b",(function(){return c})),t.d(o,"c",(function(){return s})),t.d(o,"a",(function(){return n}))}},[["7935","common/runtime","common/vendor"]]]);