(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/good_det/good_det"],{"1a90":function(e,o,t){"use strict";var n=t("61a3"),s=t.n(n);s.a},3057:function(e,o,t){"use strict";t.r(o);var n=t("7e1c"),s=t.n(n);for(var c in n)"default"!==c&&function(e){t.d(o,e,function(){return n[e]})}(c);o["default"]=s.a},"61a3":function(e,o,t){},7935:function(e,o,t){"use strict";(function(e){t("a961"),t("921b");n(t("66fd"));var o=n(t("a15f"));function n(e){return e&&e.__esModule?e:{default:e}}e(o.default)}).call(this,t("543d")["createPage"])},"7e1c":function(e,o,t){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=d(t("c74b")),s=d(t("b410")),c=d(t("df06"));function d(e){return e&&e.__esModule?e:{default:e}}var u,a,r=function(){return t.e("components/kilvn-fa-icon/fa-icon").then(t.bind(null,"0914"))},i=function(){return Promise.all([t.e("common/vendor"),t.e("components/tki-qrcode/tki-qrcode")]).then(t.bind(null,"8afd"))},l=function(){return Promise.all([t.e("common/vendor"),t.e("components/tki-barcode/tki-barcode")]).then(t.bind(null,"2fe1"))},f=function(){return t.e("components/uni-fab/uni-fab").then(t.bind(null,"1261"))},_=function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"db37"))},m={components:{uniPopup:_,faIcon:r,tkiQrcode:i,tkiBarcode:l,uniFab:f},data:function(){return{badnum:{num:"",desc:""},bad_numshow:!1,loading:!0,select_qrcode:"",get_reserve_checked:!0,product:{},is_show:!1,bar_code_show:!1,selected_item:""}},onLoad:function(o){u=this,a=e.getStorageSync("uid"),e.removeStorageSync("now_model"),console.log(o),o.id?u.getDetail_byId(o.id,o.type):u.getDetail_noId()},methods:{getDetail_byId:function(e,o){var t=this,s=[],d=n.default.Query("Goods");"false"==o?d.equalTo("objectId","==",e):d.equalTo("productCode","==",e),d.equalTo("userId","==",a),d.find().then(function(e){console.log(e);var o=e[0],n=0;d.equalTo("userId","==",a),d.equalTo("status","!=",-1),d.include("stocks","goodsClass","second_class"),d.equalTo("goodsName","==",o.goodsName),d.find().then(function(e){var d=!0,a=!1,r=void 0;try{for(var i,l=e[Symbol.iterator]();!(d=(i=l.next()).done);d=!0){var f=i.value,_={};f.stocks?(_.stock_name=f.stocks.stock_name,_.stock_objectid=f.stocks.objectId):(_.stock_name="",_.stock_objectid=""),_.reserve=f.reserve,_.models=f.models?f.models:"",_.warning_num=f.warning_num,_.bad_num=f.bad_num?f.bad_num:0,_.good_id=f.objectId,_.accessory=f.accessory?f.accessory:"",_.productCode=f.productCode?f.productCode:f.objectId,f.stocks=_,n+=f.reserve,s.push(f.stocks)}}catch(m){a=!0,r=m}finally{try{d||null==l.return||l.return()}finally{if(a)throw r}}t.product=o,t.product.nousetime&&(t.product.nousetime=c.default.js_date_time(t.product.nousetime)),t.product.all_reserve=n,t.product.stocks=s,u.loading=!1,console.log(t.product)})})},getDetail_noId:function(){var o=this,t=[],s=e.getStorageSync("now_product"),d=0,r=n.default.Query("Goods");r.equalTo("userId","==",a),r.equalTo("status","!=",-1),r.include("stocks","goodsClass","second_class"),r.equalTo("goodsName","==",s.goodsName),r.find().then(function(n){var s=!0,a=!1,r=void 0;try{for(var i,l=n[Symbol.iterator]();!(s=(i=l.next()).done);s=!0){var f=i.value,_={};f.stocks?(_.stock_name=f.stocks.stock_name,_.stock_objectid=f.stocks.objectId):(_.stock_name="",_.stock_objectid=""),_.reserve=f.reserve,_.models=f.models,_.warning_num=f.warning_num,_.bad_num=f.bad_num?f.bad_num:0,_.good_id=f.objectId,_.accessory=f.accessory?f.accessory:"",_.productCode=f.productCode?f.productCode:f.objectId,f.stocks=_,d+=f.reserve,t.push(f.stocks)}}catch(m){a=!0,r=m}finally{try{s||null==l.return||l.return()}finally{if(a)throw r}}o.product=e.getStorageSync("now_product"),o.product.nousetime&&(o.product.nousetime=c.default.js_date_time(o.product.nousetime)),o.product.all_reserve=d,o.product.stocks=t,u.loading=!1,console.log(o.product)})},confrim_badnum:function(){if(console.log(u.selected_item),u.badnum.num){var o=n.default.Pointer("_User"),t=o.set(e.getStorageSync("masterId")),s=n.default.Pointer("Goods"),c=s.set(u.selected_item.good_id),d=u.selected_item.good_id,a=Number(u.selected_item.bad_num),r=a+Number(u.badnum.num),i=n.default.Query("bad_goods");i.set("bad_num",u.badnum.num),i.set("beizhu_text",u.badnum.desc),i.set("operater",t),i.set("goods",c),i.save().then(function(o){var t=n.default.Query("Goods");t.set("id",d),t.set("bad_num",r),t.save().then(function(o){u.bad_numshow=!1,e.showToast({title:"记录成功"})}),u.getDetail_noId()})}else e.showToast({title:"请输入货损数量",icon:"none"})},add_badnum:function(e){u.bad_numshow=!0,u.selected_item=e},show_qrcode:function(e){u.is_show=!0,u.select_qrcode=e.productCode},change_state:function(e){u.get_reserve_checked=e.detail.value},print_info:function(e){s.default.print_goodDet(e)},modify:function(o){console.log(o);var t=e.getStorageSync("now_product");t.objectId=o.good_id,t.reserve=o.reserve,t.warning_num=o.warning_num?o.warning_num:0,t.bad_num=o.bad_num?o.bad_num:0,e.showActionSheet({itemList:["编辑产品信息","编辑产品的库存信息"],success:function(n){if(console.log("选中了第"+(n.tapIndex+1)+"个按钮"),0==n.tapIndex)e.navigateTo({url:"edit_info/edit_info"}),t.ids=u.product.stocks,console.log(u.product.stocks),e.setStorageSync("now_product",t);else{if(o.stock_name){var s=[],c={},d={};d.stock_name=o.stock_name,d.objectId=o.stock_objectid,c.stock=d,s.push(c),e.setStorageSync("warehouse",s)}e.navigateTo({url:"edit_stock/edit_stock"}),e.setStorageSync("now_product",t)}}})},trigger:function(o){this.content[o.index].active=!o.item.active,0==o.index?(e.setStorageSync("now_product",this.product),e.navigateTo({url:"../good_add/good_add"})):u.delete()},showcode_option:function(){e.showActionSheet({itemList:["二维码","条形码"],success:function(e){console.log("选中了第"+(e.tapIndex+1)+"个按钮"),0==e.tapIndex?u.is_show=!0:u.bar_code_show=!0},fail:function(e){console.log(e.errMsg)}})},qrR:function(e){this.src=e},bcR:function(e){this.src=e},saveBccode:function(){this.$refs.barcode._saveCode()},saveQrcode:function(){this.$refs.qrcode._saveCode()},delete_good:function(o,t,s){e.showModal({title:"提示",content:"是否删除该商品",success:function(c){if(c.confirm){var d=n.default.Query("Goods");d.set("id",o),d.set("status",-1),d.save().then(function(o){if(t)e.navigateTo({url:"../goods/goods"}),setTimeout(function(){e.showToast({title:"删除成功"})},1e3);else if(u.product.stocks.length>1){var c=u.product.stocks[s+1].good_id,d=n.default.Query("Goods");d.get(c).then(function(o){console.log(o),o.set("accessory",!1),o.save(),e.navigateTo({url:"../goods/goods"}),setTimeout(function(){e.showToast({title:"删除成功"})},1e3)}).catch(function(e){console.log(e)})}else e.navigateTo({url:"../goods/goods"}),setTimeout(function(){e.showToast({title:"删除成功"})},1e3)}).catch(function(e){console.log(e)})}}})}}};o.default=m}).call(this,t("543d")["default"])},a15f:function(e,o,t){"use strict";t.r(o);var n=t("a512"),s=t("3057");for(var c in s)"default"!==c&&function(e){t.d(o,e,function(){return s[e]})}(c);t("1a90");var d=t("2877"),u=Object(d["a"])(s["default"],n["a"],n["b"],!1,null,null,null);o["default"]=u.exports},a512:function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement;e._self._c;e._isMounted||(e.e0=function(o){e.is_show=!1},e.e1=function(o){e.bad_numshow=!1})},s=[];t.d(o,"a",function(){return n}),t.d(o,"b",function(){return s})}},[["7935","common/runtime","common/vendor"]]]);