(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/production/matterDet/matterDet"],{"3d68":function(e,t,o){"use strict";var n=o("fa61"),s=o.n(n);s.a},"41e6":function(e,t,o){"use strict";o.r(t);var n=o("ff4d"),s=o("5126");for(var c in s)"default"!==c&&function(e){o.d(t,e,function(){return s[e]})}(c);o("3d68");var a=o("2877"),d=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,null,null);t["default"]=d.exports},5126:function(e,t,o){"use strict";o.r(t);var n=o("fa20"),s=o.n(n);for(var c in n)"default"!==c&&function(e){o.d(t,e,function(){return n[e]})}(c);t["default"]=s.a},bcf4:function(e,t,o){"use strict";(function(e){o("a961"),o("921b");n(o("66fd"));var t=n(o("41e6"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},fa20:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(o("c74b")),s=a(o("b410")),c=a(o("df06"));function a(e){return e&&e.__esModule?e:{default:e}}var d,u,r=function(){return o.e("components/kilvn-fa-icon/fa-icon").then(o.bind(null,"0914"))},i=function(){return Promise.all([o.e("common/vendor"),o.e("components/tki-qrcode/tki-qrcode")]).then(o.bind(null,"8afd"))},l=function(){return Promise.all([o.e("common/vendor"),o.e("components/tki-barcode/tki-barcode")]).then(o.bind(null,"2fe1"))},f=function(){return o.e("components/uni-fab/uni-fab").then(o.bind(null,"1261"))},_=function(){return o.e("components/uni-popup/uni-popup").then(o.bind(null,"db37"))},m={components:{uniPopup:_,faIcon:r,tkiQrcode:i,tkiBarcode:l,uniFab:f},data:function(){return{user:e.getStorageSync("user"),badnum:{num:"",desc:""},bad_numshow:!1,loading:!0,select_qrcode:"",get_reserve_checked:!0,product:{},is_show:!1,bar_code_show:!1,selected_item:""}},onLoad:function(t){d=this,u=e.getStorageSync("uid"),e.removeStorageSync("now_model"),t.id?d.getDetail_byId(t.id,t.type):d.getDetail_noId()},methods:{getDetail_byId:function(t,o){var s=this,a=[];e.showLoading({title:"加载中..."});var r=n.default.Query("Matters");"false"==o?r.equalTo("objectId","==",t):r.equalTo("productCode","==",t),r.equalTo("userId","==",u),r.find().then(function(t){console.log(t);var o=t[0],n=0;e.setStorageSync("now_product",o),r.equalTo("userId","==",u),r.equalTo("status","!=",-1),r.include("stocks","fristClass","secondClass"),r.equalTo("goodsName","==",o.goodsName),r.find().then(function(t){var u=!0,r=!1,i=void 0;try{for(var l,f=t[Symbol.iterator]();!(u=(l=f.next()).done);u=!0){var _=l.value,m={};_.stocks?(m.stock_name=_.stocks.stock_name,m.stock_objectid=_.stocks.objectId):(m.stock_name="",m.stock_objectid=""),m.reserve=_.reserve.toFixed(e.getStorageSync("setting").show_float),m.models=_.models?_.models:"",m.warning_num=_.warning_num,m.bad_num=_.bad_num?_.bad_num:0,m.good_id=_.objectId,m.accessory=_.accessory?_.accessory:"",m.productCode=_.productCode?_.productCode:_.objectId+"-"+!1,_.stocks=m,n+=_.reserve,a.push(_.stocks)}}catch(g){r=!0,i=g}finally{try{u||null==f.return||f.return()}finally{if(r)throw i}}s.product=o,s.product.nousetime&&(s.product.nousetime=c.default.js_date_time(s.product.nousetime)),s.product.all_reserve=n.toFixed(e.getStorageSync("setting").show_float),s.product.stocks=a,d.loading=!1,e.hideLoading(),console.log(s.product)})})},getDetail_noId:function(){var t=this,o=[],s=e.getStorageSync("now_product"),a=0;e.showLoading({title:"加载中..."});var r=n.default.Query("Matters");r.equalTo("userId","==",u),r.equalTo("status","!=",-1),r.include("stocks","goodsClass","second_class"),r.equalTo("goodsName","==",s.goodsName),r.find().then(function(n){var s=!0,u=!1,r=void 0;try{for(var i,l=n[Symbol.iterator]();!(s=(i=l.next()).done);s=!0){var f=i.value,_={};f.stocks?(_.stock_name=f.stocks.stock_name,_.stock_objectid=f.stocks.objectId):(_.stock_name="",_.stock_objectid=""),_.reserve=f.reserve.toFixed(e.getStorageSync("setting").show_float),_.models=f.models,_.warning_num=f.warning_num,_.bad_num=f.bad_num?f.bad_num:0,_.good_id=f.objectId,_.accessory=f.accessory?f.accessory:"",_.productCode=f.productCode?f.productCode:f.objectId+"-"+!1,f.stocks=_,a+=f.reserve,o.push(f.stocks)}}catch(m){u=!0,r=m}finally{try{s||null==l.return||l.return()}finally{if(u)throw r}}t.product=e.getStorageSync("now_product"),t.product.nousetime&&(t.product.nousetime=c.default.js_date_time(t.product.nousetime)),t.product.all_reserve=a.toFixed(e.getStorageSync("setting").show_float),t.product.stocks=o,d.loading=!1,e.hideLoading(),console.log(t.product)})},confrim_badnum:function(){if(console.log(d.selected_item),d.badnum.num){var t=n.default.Pointer("_User"),o=t.set(e.getStorageSync("masterId")),s=n.default.Pointer("Matters"),c=s.set(d.selected_item.good_id),a=n.default.Pointer("_User"),u=a.set(e.getStorageSync("uid")),r=d.selected_item.good_id,i=Number(d.selected_item.bad_num),l=i+Number(d.badnum.num),f=n.default.Query("bad_goods");f.set("bad_num",d.badnum.num),f.set("beizhu_text",d.badnum.desc),f.set("operater",o),f.set("matters",c),f.set("master",u),f.save().then(function(t){var o=n.default.Query("Matters");o.set("id",r),o.set("bad_num",l),o.save().then(function(t){d.bad_numshow=!1,e.showToast({title:"记录成功"})}),d.getDetail_noId()})}else e.showToast({title:"请输入货损数量",icon:"none"})},add_badnum:function(e){d.bad_numshow=!0,d.selected_item=e},show_qrcode:function(e){d.is_show=!0,d.select_qrcode=e.productCode},change_state:function(e){d.get_reserve_checked=e.detail.value},print_info:function(e){s.default.print_goodDet(e)},modify:function(t){console.log(t);var o=e.getStorageSync("now_product");o.objectId=t.good_id,o.reserve=t.reserve,o.warning_num=t.warning_num?t.warning_num:0,o.bad_num=t.bad_num?t.bad_num:0,e.navigateTo({url:"../editInfo/editInfo"})},showcode_option:function(){e.showActionSheet({itemList:["二维码","条形码"],success:function(e){console.log("选中了第"+(e.tapIndex+1)+"个按钮"),0==e.tapIndex?d.is_show=!0:d.bar_code_show=!0},fail:function(e){console.log(e.errMsg)}})},qrR:function(e){this.src=e},bcR:function(e){this.src=e},saveBccode:function(){this.$refs.barcode._saveCode()},saveQrcode:function(){this.$refs.qrcode._saveCode()},delete_good:function(t,o,s){e.showModal({title:"提示",content:"是否删除该商品",success:function(c){if(c.confirm){e.setStorageSync("is_add",!0);var a=n.default.Query("Matters");a.set("id",t),a.set("status",-1),a.save().then(function(t){if(o)e.navigateBack({delta:1}),setTimeout(function(){e.showToast({title:"删除成功"})},1e3);else if(d.product.stocks.length>1){var c=d.product.stocks[s+1].good_id,a=n.default.Query("Matters");a.get(c).then(function(t){console.log(t),t.set("accessory",!1),t.save(),e.navigateBack({delta:1}),setTimeout(function(){e.showToast({title:"删除成功"})},1e3)}).catch(function(e){console.log(e)})}else e.navigateBack({delta:1}),setTimeout(function(){e.showToast({title:"删除成功"})},1e3)}).catch(function(e){console.log(e)})}}})}}};t.default=m}).call(this,o("543d")["default"])},fa61:function(e,t,o){},ff4d:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.is_show=!1},e.e1=function(t){e.bad_numshow=!1})},s=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return s})}},[["bcf4","common/runtime","common/vendor"]]]);