(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-good_det-good_det"],{"217e":function(t,e,o){"use strict";o.r(e);var i=o("9871"),n=o("72f4");for(var s in n)"default"!==s&&function(t){o.d(e,t,(function(){return n[t]}))}(s);o("6a48");var a,c=o("f0c5"),d=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"f50a6dc8",null,!1,i["a"],a);e["default"]=d.exports},"639c":function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,".opion_item[data-v-f50a6dc8]{color:#118fff;font-weight:700;padding:0 %?20?% 0 0}.page[data-v-f50a6dc8]{height:100vh;overflow:scroll;font-size:%?28?%}.popup_content[data-v-f50a6dc8]{width:%?500?%}.popup_button[data-v-f50a6dc8]{background:#426ab3;color:#fff}.frist[data-v-f50a6dc8]{text-align:center;width:100%;height:%?300?%;padding:%?30?% 0;background:#fff}.second[data-v-f50a6dc8]{padding:0 %?30?%;border-top:%?1?% solid#DDDDDD;background:#fff}.second_one[data-v-f50a6dc8]{padding:%?20?% 0;border-bottom:%?1?% solid#DDDDDD;line-height:%?60?%;font-size:%?26?%;color:#999}.second_right_text[data-v-f50a6dc8]{color:#3d3d3d;margin-left:%?20?%}.thrid[data-v-f50a6dc8]{padding:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?30?%;font-size:%?28?%;border-bottom:%?1?% solid#DDDDDD;background:#fff;border-bottom:1px solid#DDDDDD}.four[data-v-f50a6dc8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;margin:%?30?% 0 %?60?%}.qrimg[data-v-f50a6dc8]{position:fixed;top:0;left:0;width:100%;height:100%;background:#426ab3;text-align:center}",""]),t.exports=e},"6a48":function(t,e,o){"use strict";var i=o("a8f2"),n=o.n(i);n.a},"72f4":function(t,e,o){"use strict";o.r(e);var i=o("f6d4"),n=o.n(i);for(var s in i)"default"!==s&&function(t){o.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},9871:function(t,e,o){"use strict";var i={"tki-qrcode":o("13d4").default,"uni-popup":o("7aeb").default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"page"},[t.loading?o("loading"):o("v-uni-view",[o("v-uni-view",{staticClass:"frist"},[t.product.goodsIcon?o("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.product.goodsIcon,mode:"aspectFit"}}):o("v-uni-image",{staticStyle:{height:"100%"},attrs:{src:"/static/goods-default.png",mode:"aspectFit"}})],1),o("v-uni-view",{staticClass:"second"},[o("v-uni-view",{staticClass:"second_one"},[o("v-uni-view",{staticStyle:{color:"#3d3d3d","font-weight":"bold","font-size":"34rpx"}},[t._v(t._s(t.product.goodsName))]),t.user.rights&&"0"!=t.user.rights.othercurrent[0]?o("v-uni-view"):o("v-uni-view",[t._v("成本价:"),o("v-uni-text",{staticStyle:{color:"#FD2E32","margin-left":"20rpx"}},[t._v(t._s(t.product.costPrice?t.product.costPrice:"未填写"))])],1),o("v-uni-view",[t._v("零售价:"),o("v-uni-text",{staticStyle:{color:"#FD2E32","margin-left":"20rpx"}},[t._v(t._s(t.product.retailPrice?t.product.retailPrice:"未填写"))])],1)],1),o("v-uni-view",{staticClass:"second_one"},[o("v-uni-view",[t._v("品牌:"),o("v-uni-text",{staticClass:"second_right_text"},[t._v(t._s(t.product.producer?t.product.producer:"未填写"))])],1),o("v-uni-view",[t._v("型号:"),o("v-uni-text",{staticClass:"second_right_text"},[t._v(t._s(t.product.packageContent?t.product.packageContent:"未填写")+"*"+t._s(t.product.packingUnit?t.product.packingUnit:"未填写"))])],1),o("v-uni-view",[t._v("简介:"),o("v-uni-text",{staticClass:"second_right_text"},[t._v(t._s(t.product.product_info?t.product.product_info:"未填写"))])],1),o("v-uni-view",[t._v("存放位置:"),o("v-uni-text",{staticStyle:{"margin-left":"20rpx",color:"#3D3D3D"}},[t._v(t._s(t.product.position?t.product.position:"未填写"))])],1),t.product.nousetime?o("v-uni-view",[t._v("过期时间:"),o("v-uni-text",{staticStyle:{"margin-left":"20rpx",color:"#3D3D3D"}},[t._v(t._s(t.product.nousetime))])],1):t._e(),t.product.goodsClass&&t.product.goodsClass.class_text?o("v-uni-view",[t._v("所属一级分类"),o("v-uni-text",{staticStyle:{"margin-left":"20rpx",color:"#3D3D3D"}},[t._v(t._s(t.product.goodsClass.class_text))])],1):t._e(),t.product.second_class&&t.product.second_class.class_text?o("v-uni-view",[t._v("所属二级分类"),o("v-uni-text",{staticStyle:{"margin-left":"20rpx",color:"#3D3D3D"}},[t._v(t._s(t.product.second_class.class_text))])],1):t._e()],1),o("v-uni-view",{staticClass:"second_one display_flex_bet"},[o("v-uni-view",[t._v("总库存:"),o("v-uni-text",{staticClass:"second_right_text"},[t._v(t._s(t.product.all_reserve))])],1),o("v-uni-view",{staticClass:"display_flex"},[o("v-uni-text",{staticStyle:{"margin-right":"10rpx"}},[t._v("分库存")]),o("v-uni-switch",{attrs:{checked:t.get_reserve_checked},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change_state.apply(void 0,arguments)}}})],1)],1),t._l(t.product.stocks,(function(e,i){return t.get_reserve_checked?o("v-uni-view",{key:i,staticClass:"second_one"},[o("v-uni-view",[t._v("存放店仓:"),o("v-uni-text",{staticStyle:{"margin-left":"20rpx",color:"#3D3D3D"}},[t._v(t._s(e.stock_name?e.stock_name:"未填写"))])],1),o("v-uni-view",[t._v("当前库存:"),o("v-uni-text",{staticStyle:{color:"#FD2E32","margin-left":"20rpx"}},[t._v(t._s(e.reserve))])],1),e.models?o("v-uni-view",{staticStyle:{color:"#3D3D3D"}},t._l(e.models,(function(e,i){return o("v-uni-view",{key:i,staticClass:"display_flex_bet"},[o("v-uni-view",{staticStyle:{"font-size":"24rpx"}},[t._v(t._s(e.custom1.value)+t._s(e.custom2.value)+t._s(e.custom3.value)+t._s(e.custom4.value))]),o("v-uni-view",{staticStyle:{color:"#FD2E32","font-size":"24rpx"}},[t._v("库存:"+t._s(e.reserve))])],1)})),1):t._e(),o("v-uni-view",[t._v("预警数量:"),o("v-uni-text",{staticStyle:{color:"#FD2E32","margin-left":"20rpx"}},[t._v(t._s(e.warning_num?e.warning_num:0))])],1),o("v-uni-navigator",{staticClass:"display_flex_bet",attrs:{"hover-class":"none",url:"/pages/manage/good_det/bad_history/bad_history?id="+e.good_id}},[o("v-uni-view",[t._v("货损数量:"),o("v-uni-text",{staticStyle:{color:"#FD2E32","margin-left":"20rpx"}},[t._v(t._s(e.bad_num?e.bad_num:0))])],1),o("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1),o("v-uni-view",[t._v("条码:"),o("v-uni-text",{staticClass:"second_right_text"},[t._v(t._s(e.productCode))])],1),o("v-uni-view",{staticClass:"display_flex"},[o("v-uni-view",{staticClass:"opion_item",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.show_qrcode(e)}}},[t._v("生成二维码")]),o("v-uni-navigator",{staticClass:"opion_item",attrs:{"hover-class":"none",url:"custom_detail/custom_detail?id="+e.good_id}},[t._v("客户统计")]),o("v-uni-navigator",{staticClass:"opion_item",attrs:{"hover-class":"none",url:"../operations/operations?objectId="+e.good_id+"&goodsName="+t.product.goodsName}},[t._v("此产品的操作记录")])],1),o("v-uni-view",{staticClass:"display_flex"},[o("v-uni-view",{staticClass:"opion_item",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.print_info(e)}}},[t._v("打印")]),o("v-uni-view",{staticClass:"opion_item",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.modify(e)}}},[t._v("编辑")]),o("v-uni-view",{staticClass:"opion_item",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.add_badnum(e)}}},[t._v("记录货损")]),o("v-uni-view",{staticClass:"opion_item",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.delete_good(e.good_id,e.accessory,i)}}},[t._v("删除")])],1)],1):t._e()}))],2),t.is_show?o("v-uni-view",{staticClass:"qrimg"},[o("v-uni-view",{staticStyle:{"text-align":"right","margin-right":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.is_show=!1}}},[o("fa-icon",{attrs:{type:"times-circle",size:"20",color:"#fff"}})],1),o("v-uni-view",{staticStyle:{"margin-top":"20%"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveQrcode.apply(void 0,arguments)}}},[o("v-uni-view",{staticStyle:{padding:"20rpx",background:"#fff"}},[o("tki-qrcode",{ref:"qrcode",attrs:{cid:"qrcode",val:t.select_qrcode,size:200,loadMake:!0,usingComponents:!0,unit:"rpx"},on:{result:function(e){arguments[0]=e=t.$handleEvent(e),t.qrR.apply(void 0,arguments)}}})],1),o("v-uni-view",{staticStyle:{color:"#fff","margin-top":"30rpx","font-size":"32rpx"}},[t._v("产品:"+t._s(t.product.goodsName))]),o("v-uni-view",{staticStyle:{color:"#fff","margin-top":"20rpx","font-size":"24rpx"}},[t._v("(点击二维码可下载)")])],1)],1):t._e(),o("uni-popup",{staticClass:"popup",attrs:{show:t.bad_numshow,type:"top",mode:"fixed"},on:{hidePopup:function(e){arguments[0]=e=t.$handleEvent(e),t.bad_numshow=!1}}},[o("v-uni-view",{staticClass:"popup_content"},[o("v-uni-view",{staticClass:"popup_title",staticStyle:{"text-align":"center","margin-bottom":"20rpx"}},[t._v("记录货损")]),o("v-uni-view",{staticStyle:{"margin-bottom":"20rpx"}},[o("v-uni-input",{staticClass:"popup_input",attrs:{placeholder:"请输入该产品的货损数量"},model:{value:t.badnum.num,callback:function(e){t.$set(t.badnum,"num",e)},expression:"badnum.num"}})],1),o("v-uni-view",{staticStyle:{"margin-bottom":"20rpx"}},[o("v-uni-input",{staticClass:"popup_input",attrs:{placeholder:"请输入备注"},model:{value:t.badnum.desc,callback:function(e){t.$set(t.badnum,"desc",e)},expression:"badnum.desc"}})],1),o("v-uni-view",[o("v-uni-button",{staticClass:"popup_button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confrim_badnum.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)],1)],1)},s=[];o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return s})),o.d(e,"a",(function(){return i}))},a8f2:function(t,e,o){var i=o("639c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("4f06").default;n("4ec90c3e",i,!0,{sourceMap:!1,shadowMode:!1})},f6d4:function(t,e,o){"use strict";(function(t){var i=o("ee27");o("7db0"),o("c975"),o("a9e3"),o("b6802"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,s,a=i(o("54f8")),c=i(o("9546")),d=i(o("856d")),u=i(o("7fd5")),r=i(o("4d52")),l=i(o("13d4")),v=i(o("e5a1")),_=i(o("2b82")),f=i(o("7aeb")),p={components:{uniPopup:f.default,faIcon:r.default,tkiQrcode:l.default,tkiBarcode:v.default,uniFab:_.default},data:function(){return{user:uni.getStorageSync("user"),badnum:{num:"",desc:""},bad_numshow:!1,loading:!0,select_qrcode:"",get_reserve_checked:!0,product:{},is_show:!1,bar_code_show:!1,selected_item:""}},onLoad:function(e){n=this,s=uni.getStorageSync("uid"),uni.removeStorageSync("now_model"),t.log(e),this.$wechat.share_pyq(),e.id?n.getDetail_byId(e.id,e.type):n.getDetail_noId()},onShareAppMessage:function(e){return"button"===e.from&&t.log(e.target),{title:"库存表-"+product.goodsName+"的详情",path:"/pages/manage/good_det/good_det?id="+product.objectId+'&type="false"'}},methods:{getDetail_byId:function(e,o){var i=this,d=[];uni.showLoading({title:"加载中..."});var r=c.default.Query("Goods");"false"==o?r.equalTo("objectId","==",e):r.equalTo("productCode","==",e),r.equalTo("userId","==",s),r.find().then((function(e){t.log(e);var o=e[0],c=0;uni.setStorageSync("now_product",o),r.equalTo("userId","==",s),r.equalTo("status","!=",-1),r.include("stocks","goodsClass","second_class"),r.equalTo("goodsName","==",o.goodsName),r.find().then((function(e){var s,r=(0,a.default)(e);try{for(r.s();!(s=r.n()).done;){var l=s.value,v={};l.stocks?(v.stock_name=l.stocks.stock_name,v.stock_objectid=l.stocks.objectId):(v.stock_name="",v.stock_objectid=""),v.reserve=l.reserve.toFixed(uni.getStorageSync("setting").show_float),v.models=l.models,v.warning_num=l.warning_num,v.bad_num=l.bad_num?l.bad_num:0,v.good_id=l.objectId,v.accessory=l.accessory?l.accessory:"",v.productCode=l.productCode?l.productCode+"-"+!0+"-old":l.objectId+"-"+!1+"-old",l.stocks=v,c+=l.reserve,d.push(l.stocks)}}catch(_){r.e(_)}finally{r.f()}2==n.user.identity&&n.user.rights&&-1!=n.user.rights.othercurrent.indexOf("0")&&(o.costPrice=0),i.product=o,i.product.nousetime&&(i.product.nousetime=u.default.js_date_time(i.product.nousetime)),i.product.all_reserve=c.toFixed(uni.getStorageSync("setting").show_float),i.product.stocks=d,n.loading=!1,uni.hideLoading(),t.log(i.product)}))}))},getDetail_noId:function(){var t=this,e=[],o=uni.getStorageSync("now_product"),i=0;uni.showLoading({title:"加载中..."});var d=c.default.Query("Goods");d.equalTo("userId","==",s),d.equalTo("status","!=",-1),d.include("stocks","goodsClass","second_class"),d.equalTo("goodsName","==",o.goodsName),d.find().then((function(s){var c,d=(0,a.default)(s);try{for(d.s();!(c=d.n()).done;){var r=c.value,l={};r.stocks?(l.stock_name=r.stocks.stock_name,l.stock_objectid=r.stocks.objectId):(l.stock_name="",l.stock_objectid=""),l.reserve=r.reserve.toFixed(uni.getStorageSync("setting").show_float),l.models=r.models,l.warning_num=r.warning_num,l.bad_num=r.bad_num?r.bad_num:0,l.good_id=r.objectId,l.accessory=r.accessory?r.accessory:"",l.productCode=r.productCode?r.productCode+"-"+!0+"-old":r.objectId+"-"+!1+"-old",r.stocks=l,i+=r.reserve,e.push(r.stocks)}}catch(v){d.e(v)}finally{d.f()}2==n.user.identity&&n.user.rights&&-1!=n.user.rights.othercurrent.indexOf("0")&&(o.costPrice=0),t.product=uni.getStorageSync("now_product"),t.product.nousetime&&(t.product.nousetime=u.default.js_date_time(t.product.nousetime)),t.product.all_reserve=i.toFixed(uni.getStorageSync("setting").show_float),t.product.stocks=e,n.loading=!1,uni.hideLoading()}))},confrim_badnum:function(){if(t.log(n.selected_item),n.badnum.num){var e=c.default.Pointer("_User"),o=e.set(uni.getStorageSync("masterId")),i=c.default.Pointer("Goods"),s=i.set(n.selected_item.good_id),a=n.selected_item.good_id,d=Number(n.selected_item.bad_num),u=d+Number(n.badnum.num),r=c.default.Query("bad_goods");r.set("bad_num",n.badnum.num),r.set("beizhu_text",n.badnum.desc),r.set("operater",o),r.set("goods",s),r.save().then((function(t){var e=c.default.Query("Goods");e.set("id",a),e.set("bad_num",u),e.save().then((function(t){n.bad_numshow=!1,uni.showToast({title:"记录成功"})})),n.getDetail_noId()}))}else uni.showToast({title:"请输入货损数量",icon:"none"})},add_badnum:function(t){n.bad_numshow=!0,n.selected_item=t},show_qrcode:function(t){n.is_show=!0,n.select_qrcode=t.productCode},change_state:function(t){n.get_reserve_checked=t.detail.value},print_info:function(t){d.default.print_goodDet(t)},modify:function(e){t.log(e);var o=uni.getStorageSync("now_product");o.objectId=e.good_id,o.reserve=e.reserve,o.warning_num=e.warning_num?e.warning_num:0,o.bad_num=e.bad_num?e.bad_num:0,uni.showActionSheet({itemList:["编辑产品信息","编辑产品的库存信息"],success:function(i){if(t.log("选中了第"+(i.tapIndex+1)+"个按钮"),0==i.tapIndex)uni.navigateTo({url:"edit_info/edit_info"}),o.ids=n.product.stocks,t.log(n.product.stocks),uni.setStorageSync("now_product",o);else{if(e.stock_name){var s=[],a={},c={};c.stock_name=e.stock_name,c.objectId=e.stock_objectid,a.stock=c,s.push(a),uni.setStorageSync("warehouse",s)}uni.navigateTo({url:"edit_stock/edit_stock"}),uni.setStorageSync("now_product",o)}}})},trigger:function(t){this.content[t.index].active=!t.item.active,0==t.index?(uni.setStorageSync("now_product",this.product),uni.navigateTo({url:"../good_add/good_add"})):n.delete()},showcode_option:function(){uni.showActionSheet({itemList:["二维码","条形码"],success:function(e){t.log("选中了第"+(e.tapIndex+1)+"个按钮"),0==e.tapIndex?n.is_show=!0:n.bar_code_show=!0},fail:function(e){t.log(e.errMsg)}})},qrR:function(t){this.src=t},bcR:function(t){this.src=t},saveBccode:function(){this.$refs.barcode._saveCode()},saveQrcode:function(){this.$refs.qrcode._saveCode()},delete_good:function(e,o,i){uni.showModal({title:"提示",content:"是否删除该商品",success:function(s){if(s.confirm){uni.setStorageSync("is_add",!0);var a=c.default.Query("Goods");a.set("id",e),a.set("status",-1),a.save().then((function(e){if(o)uni.navigateBack({delta:1}),setTimeout((function(){uni.showToast({title:"删除成功"})}),1e3);else if(n.product.stocks.length>1){var s=n.product.stocks[i+1].good_id,a=c.default.Query("Goods");a.get(s).then((function(e){t.log(e),e.set("accessory",!1),e.save(),uni.navigateBack({delta:1}),setTimeout((function(){uni.showToast({title:"删除成功"})}),1e3)})).catch((function(e){t.log(e)}))}else uni.navigateBack({delta:1}),setTimeout((function(){uni.showToast({title:"删除成功"})}),1e3)})).catch((function(e){t.log(e)}))}}})}}};e.default=p}).call(this,o("5a52")["default"])}}]);