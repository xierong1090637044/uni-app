(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/good_det/good_det"],{"1a90":function(o,e,t){"use strict";var n=t("61a3"),c=t.n(n);c.a},3057:function(o,e,t){"use strict";t.r(e);var n=t("7e1c"),c=t.n(n);for(var s in n)"default"!==s&&function(o){t.d(e,o,function(){return n[o]})}(s);e["default"]=c.a},"61a3":function(o,e,t){},7935:function(o,e,t){"use strict";(function(o){t("a961"),t("921b");n(t("66fd"));var e=n(t("a15f"));function n(o){return o&&o.__esModule?o:{default:o}}o(e.default)}).call(this,t("543d")["createPage"])},"7e1c":function(o,e,t){"use strict";(function(o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(t("c74b")),c=s(t("b410"));function s(o){return o&&o.__esModule?o:{default:o}}var r,a,d=function(){return t.e("components/kilvn-fa-icon/fa-icon").then(t.bind(null,"0914"))},u=function(){return Promise.all([t.e("common/vendor"),t.e("components/tki-qrcode/tki-qrcode")]).then(t.bind(null,"8afd"))},i=function(){return Promise.all([t.e("common/vendor"),t.e("components/tki-barcode/tki-barcode")]).then(t.bind(null,"2fe1"))},l=function(){return t.e("components/uni-fab/uni-fab").then(t.bind(null,"1261"))},f={components:{faIcon:d,tkiQrcode:u,tkiBarcode:i,uniFab:l},data:function(){return{loading:!0,select_qrcode:"",get_reserve_checked:!0,product:{},is_show:!1,bar_code_show:!1}},onLoad:function(e){var t=this;r=this;var c=[];if(a=o.getStorageSync("uid"),console.log(e),e.id){var s=n.default.Query("Goods");"false"==e.type?s.equalTo("objectId","==",e.id):s.equalTo("productCode","==",e.id),s.equalTo("userId","==",a),s.find().then(function(o){console.log(o);var e=o[0],n=0;s.equalTo("userId","==",a),s.equalTo("status","!=",-1),s.include("stocks"),s.equalTo("goodsName","==",e.goodsName),s.find().then(function(o){var s=!0,a=!1,d=void 0;try{for(var u,i=o[Symbol.iterator]();!(s=(u=i.next()).done);s=!0){var l=u.value,f={};f.stock_name=l.stocks.stock_name,f.stock_objectid=l.stocks.objectId,f.reserve=l.reserve,f.models=l.models?l.models:"",f.warning_num=l.warning_num,f.bad_num=l.bad_num,f.good_id=l.objectId,f.accessory=l.accessory?l.accessory:"",f.productCode=l.productCode?l.productCode:l.objectId,l.stocks=f,n+=l.reserve,c.push(l.stocks)}}catch(_){a=!0,d=_}finally{try{s||null==i.return||i.return()}finally{if(a)throw d}}t.product=e,t.product.all_reserve=n,t.product.stocks=c,r.loading=!1,console.log(t.product)})})}else{var d=o.getStorageSync("now_product"),u=0,i=n.default.Query("Goods");i.equalTo("userId","==",a),i.equalTo("status","!=",-1),i.include("stocks"),i.equalTo("goodsName","==",d.goodsName),i.find().then(function(e){var n=!0,s=!1,a=void 0;try{for(var d,i=e[Symbol.iterator]();!(n=(d=i.next()).done);n=!0){var l=d.value,f={};f.stock_name=l.stocks.stock_name,f.stock_objectid=l.stocks.objectId,f.reserve=l.reserve,f.models=l.models,f.warning_num=l.warning_num,f.bad_num=l.bad_num,f.good_id=l.objectId,f.accessory=l.accessory?l.accessory:"",f.productCode=l.productCode?l.productCode:l.objectId,l.stocks=f,u+=l.reserve,c.push(l.stocks)}}catch(_){s=!0,a=_}finally{try{n||null==i.return||i.return()}finally{if(s)throw a}}t.product=o.getStorageSync("now_product"),t.product.all_reserve=u,t.product.stocks=c,r.loading=!1,console.log(t.product)})}},methods:{show_qrcode:function(o){r.is_show=!0,r.select_qrcode=o.productCode},change_state:function(o){r.get_reserve_checked=o.detail.value},print_info:function(o){c.default.print_goodDet(o)},modify:function(e){console.log(e);var t=o.getStorageSync("now_product");t.objectId=e.good_id,t.reserve=e.reserve,t.warning_num=e.warning_num?e.warning_num:0,t.bad_num=e.bad_num?e.bad_num:0,o.showActionSheet({itemList:["编辑产品信息","编辑产品的库存信息"],success:function(n){if(console.log("选中了第"+(n.tapIndex+1)+"个按钮"),0==n.tapIndex)o.navigateTo({url:"edit_info/edit_info"}),t.ids=r.product.stocks,console.log(r.product.stocks),o.setStorageSync("now_product",t);else{if(e.stock_name){var c=[],s={},a={};a.stock_name=e.stock_name,a.objectId=e.stock_objectid,s.stock=a,c.push(s),o.setStorageSync("warehouse",c)}o.navigateTo({url:"edit_stock/edit_stock"}),o.setStorageSync("now_product",t)}}})},trigger:function(e){this.content[e.index].active=!e.item.active,0==e.index?(o.setStorageSync("now_product",this.product),o.navigateTo({url:"../good_add/good_add"})):r.delete()},showcode_option:function(){o.showActionSheet({itemList:["二维码","条形码"],success:function(o){console.log("选中了第"+(o.tapIndex+1)+"个按钮"),0==o.tapIndex?r.is_show=!0:r.bar_code_show=!0},fail:function(o){console.log(o.errMsg)}})},qrR:function(o){this.src=o},bcR:function(o){this.src=o},saveBccode:function(){this.$refs.barcode._saveCode()},saveQrcode:function(){this.$refs.qrcode._saveCode()},delete_good:function(e,t,c){o.showModal({title:"提示",content:"是否删除该商品",success:function(s){if(s.confirm){var a=n.default.Query("Goods");a.set("id",e),a.set("status",-1),a.save().then(function(e){if(t)o.navigateTo({url:"../goods/goods"}),setTimeout(function(){o.showToast({title:"删除成功"})},1e3);else if(r.product.stocks.length>1){var s=r.product.stocks[c+1].good_id,a=n.default.Query("Goods");a.get(s).then(function(e){console.log(e),e.set("accessory",!1),e.save(),o.navigateTo({url:"../goods/goods"}),setTimeout(function(){o.showToast({title:"删除成功"})},1e3)}).catch(function(o){console.log(o)})}else o.navigateTo({url:"../goods/goods"}),setTimeout(function(){o.showToast({title:"删除成功"})},1e3)}).catch(function(o){console.log(o)})}}})}}};e.default=f}).call(this,t("543d")["default"])},a15f:function(o,e,t){"use strict";t.r(e);var n=t("eafc"),c=t("3057");for(var s in c)"default"!==s&&function(o){t.d(e,o,function(){return c[o]})}(s);t("1a90");var r=t("2877"),a=Object(r["a"])(c["default"],n["a"],n["b"],!1,null,null,null);e["default"]=a.exports},eafc:function(o,e,t){"use strict";var n=function(){var o=this,e=o.$createElement;o._self._c;o._isMounted||(o.e0=function(e){o.is_show=!1})},c=[];t.d(e,"a",function(){return n}),t.d(e,"b",function(){return c})}},[["7935","common/runtime","common/vendor"]]]);