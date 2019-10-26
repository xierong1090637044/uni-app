(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/common/good_allocation/allocation_detail/allocation_detail"],{

/***/ 257:
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_all/main.js?{"page":"pages%2Fcommon%2Fgood_allocation%2Fallocation_detail%2Fallocation_detail"} ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _allocation_detail = _interopRequireDefault(__webpack_require__(/*! ./pages/common/good_allocation/allocation_detail/allocation_detail.vue */ 258));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_allocation_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 258:
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_all/pages/common/good_allocation/allocation_detail/allocation_detail.vue ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _allocation_detail_vue_vue_type_template_id_aad606f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allocation_detail.vue?vue&type=template&id=aad606f8& */ 259);
/* harmony import */ var _allocation_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allocation_detail.vue?vue&type=script&lang=js& */ 261);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _allocation_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _allocation_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _allocation_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allocation_detail.vue?vue&type=style&index=0&lang=css& */ 263);
/* harmony import */ var _D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 69);






/* normalize component */

var component = Object(_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _allocation_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _allocation_detail_vue_vue_type_template_id_aad606f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _allocation_detail_vue_vue_type_template_id_aad606f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Administrator/Desktop/wechat/wechat/kcb_all/pages/common/good_allocation/allocation_detail/allocation_detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 259:
/*!****************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_all/pages/common/good_allocation/allocation_detail/allocation_detail.vue?vue&type=template&id=aad606f8& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_allocation_detail_vue_vue_type_template_id_aad606f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./allocation_detail.vue?vue&type=template&id=aad606f8& */ 260);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_allocation_detail_vue_vue_type_template_id_aad606f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_allocation_detail_vue_vue_type_template_id_aad606f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 260:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/wechat/kcb_all/pages/common/good_allocation/allocation_detail/allocation_detail.vue?vue&type=template&id=aad606f8& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 261:
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_all/pages/common/good_allocation/allocation_detail/allocation_detail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_allocation_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./allocation_detail.vue?vue&type=script&lang=js& */ 262);
/* harmony import */ var _D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_allocation_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_allocation_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_allocation_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_allocation_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_allocation_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 262:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/wechat/kcb_all/pages/common/good_allocation/allocation_detail/allocation_detail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;










































var _hydrogenJsSdk = _interopRequireDefault(__webpack_require__(/*! hydrogen-js-sdk */ 13));
var _common = _interopRequireDefault(__webpack_require__(/*! @/utils/common.js */ 77));
var _send_temp = _interopRequireDefault(__webpack_require__(/*! @/utils/send_temp.js */ 88));
var _print = _interopRequireDefault(__webpack_require__(/*! @/utils/print.js */ 89));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var uid;var that;var _default = { data: function data() {return { products: [], stock: '', //调出仓库
      out_stock: '', //调入仓库
      button_disabled: false, beizhu_text: "", out_products: [], //调入的商品
      all_money: 0, real_money: 0 };}, onLoad: function onLoad() {that = this;uid = uni.getStorageSync("uid");this.products = uni.getStorageSync("products");for (var i = 0; i < this.products.length; i++) {this.all_money = Number((this.products[i].total_money + this.all_money).toFixed(2));}this.real_money = Number(this.all_money.toFixed(2));}, onShow: function onShow() {that.stock = uni.getStorageSync("warehouse")[0].stock;that.out_stock = uni.getStorageSync("out_warehouse") ? uni.getStorageSync("out_warehouse")[0].stock : '';}, methods: { //校验
    check: function check() {return new Promise(function (resolve, reject) {if (that.out_stock == '' || that.out_stock == null) {uni.showToast({ title: "请选择调入仓库", icon: 'none' });resolve(false);} else {that.check_goods().then(function (res) {if (res == true) {
              resolve(true);
            } else {
              uni.showModal({
                title: "提示",
                content: "'" + res + "'" + '没有关联到调出仓库',
                showCancel: true,
                success: function success(res) {
                  console.log(res);
                  if (res.confirm) {
                    uni.navigateBack({
                      delta: 1 });

                  }
                },
                fail: function fail() {},
                complete: function complete() {
                  resolve(false);
                } });

            }
          });

        }
      });
    },

    //校验产品是否关联
    check_goods: function check_goods() {
      return new Promise(function (resolve, reject) {var _loop = function _loop(
        i) {
          var query = _hydrogenJsSdk.default.Query('Goods');
          query.equalTo("goodsName", "==", that.products[i].goodsName);
          query.equalTo("userId", "==", uid);
          query.equalTo("stocks", "==", that.out_stock.objectId);
          query.find().then(function (res) {
            console.log(res);
            if (res.length == 0) {
              //console.log(that.products[i].goodsName)
              resolve(that.products[i].goodsName);
            } else {
              that.out_products = that.out_products.concat(res);
              resolve(true);
            }
          });};for (var i = 0; i < that.products.length; i++) {_loop(i);
        }
      });

    },

    formSubmit: function formSubmit(e) {
      console.log(e);
      this.button_disabled = true;
      that.check().then(function (res) {
        console.log(res);

        if (res) {
          that.add_tb_record(e);
        } else {
          that.button_disabled = false;
        }
      });

    },

    //生成调拨单
    add_tb_record: function add_tb_record(e) {
      uni.showLoading({
        title: "上传中..." });


      var pointer = _hydrogenJsSdk.default.Pointer('stocks');
      var stockId = pointer.set(that.stock.objectId);
      var out_stockId = pointer.set(that.out_stock.objectId);


      var billsObj = new Array();
      var detailObj = [];
      for (var i = 0; i < this.products.length; i++) {
        var num = Number(this.products[i].reserve) - Number(this.products[i].num);
        var num1 = Number(this.out_products[i].reserve) + Number(this.products[i].num);

        //单据
        var tempBills = _hydrogenJsSdk.default.Query('Bills');
        var detailBills = {};

        var _pointer = _hydrogenJsSdk.default.Pointer('_User');
        var user = _pointer.set(uid);
        var pointer2 = _hydrogenJsSdk.default.Pointer('_User');
        var operater = pointer2.set(uni.getStorageSync("masterId"));
        var pointer1 = _hydrogenJsSdk.default.Pointer('Goods');
        var tempGoods_id = pointer1.set(this.products[i].objectId);

        tempBills.set('goodsName', this.products[i].goodsName);
        tempBills.set('retailPrice', this.products[i].modify_retailPrice.toString());
        tempBills.set('num', Number(this.products[i].num));
        tempBills.set('total_money', this.products[i].total_money);
        tempBills.set('goodsId', tempGoods_id);
        tempBills.set('userId', user);
        tempBills.set('type', -2);
        tempBills.set('opreater', operater);
        tempBills.set("stock", stockId);
        tempBills.set("out_stock", out_stockId);

        var goodsId = {};
        detailBills.goodsName = this.products[i].goodsName;
        detailBills.stock = that.stock.stock_name;
        detailBills.out_stock = that.out_stock.stock_name;
        detailBills.reserve = this.products[i].reserve;
        detailBills.out_reserve = this.out_products[i].reserve;
        goodsId.objectId = this.products[i].objectId;
        goodsId.out_objectId = this.out_products[i].objectId;
        goodsId.reserve = num;
        goodsId.out_reserve = num1;
        detailBills.goodsId = goodsId;
        detailBills.num = Number(this.products[i].num);
        detailBills.type = -2;

        billsObj.push(tempBills);
        detailObj.push(detailBills);
      }
      //插入单据
      _hydrogenJsSdk.default.Query('Bills').saveAll(billsObj).then(function (res) {
        //console.log("批量新增单据成功", res);
        var bills = [];
        for (var _i = 0; _i < res.length; _i++) {
          bills.push(res[_i].success.objectId);
        }

        var pointer = _hydrogenJsSdk.default.Pointer('_User');
        var poiID = pointer.set(uid);

        var masterId = uni.getStorageSync("masterId");
        var pointer1 = _hydrogenJsSdk.default.Pointer('_User');
        var poiID1 = pointer1.set(masterId);

        var query = _hydrogenJsSdk.default.Query('order_opreations');
        //query.set("relations", relID);
        query.set("detail", detailObj);
        query.set("bills", bills);
        query.set("beizhu", e.detail.value.input_beizhu);
        query.set("type", -2);
        query.set("opreater", poiID1);
        query.set("stock", stockId);
        query.set("out_stock", out_stockId);
        query.set("master", poiID);
        query.set('goodsName', that.products[0].goodsName);

        query.save().then(function (res) {
          var operationId = res.objectId;
          //console.log("添加操作历史记录成功", res);
          uni.hideLoading();
          //uni.removeStorageSync("customs"); //移除这个缓存
          uni.showToast({
            title: '产品调拨成功',
            icon: 'success',
            success: function success() {var _loop2 = function _loop2(
              _i2) {
                var num = Number(that.products[_i2].reserve) - Number(that.products[_i2].num);
                var num1 = Number(that.out_products[_i2].reserve) + Number(that.products[_i2].num);
                var query = _hydrogenJsSdk.default.Query('Goods');
                query.get(that.products[_i2].objectId).then(function (res) {
                  //console.log(res)

                  res.set('reserve', num);
                  res.set('stocktype', num > that.products[_i2].warning_num ? 1 : 0);
                  res.save();
                  query.get(that.out_products[_i2].objectId).then(function (res) {
                    res.set('reserve', num1);
                    res.set('stocktype', num1 > that.out_products[_i2].warning_num ? 1 : 0);
                    res.save();
                  });
                }).catch(function (err) {
                  console.log(err);
                });};for (var _i2 = 0; _i2 < that.products.length; _i2++) {_loop2(_i2);
              }
              that.button_disabled = false;
              uni.setStorageSync("is_option", true);
              //uni.removeStorageSync("warehouse");

              setTimeout(function () {
                uni.removeStorageSync("_warehouse");
                uni.removeStorageSync("out_warehouse");
                uni.removeStorageSync("category");
                uni.removeStorageSync("warehouse");
                _common.default.log(uni.getStorageSync("user").nickName + "调拨了'" + that.products[0].goodsName + "'等" + that.
                products.length + "商品", -2, res.objectId);

                /*let params = {
                                                           	"data1": res.objectId,
                                                           	"data2": uni.getStorageSync("user").nickName + "调拨了'" + that.products[0].goodsName + "'等" + that.products
                                                           		.length + "商品",
                                                           	"data3": that.stock ? that.stock.stock_name : "未填写",
                                                           	"data4": res.createdAt,
                                                           	"remark": e.detail.value.input_beizhu ? e.detail.value.input_beizhu : "未填写",
                                                           	"url": "https://www.jimuzhou.com/h5/pages/report/EnteringHistory/detail/detail?id=" + res.objectId,
                                                           };
                                                           send_temp.send_temp(params);*/

                //自动打印
                if (uni.getStorageSync("setting").auto_print) {
                  _print.default.autoPrint(operationId);
                }
                uni.navigateBack({
                  delta: 2 });

              }, 500);
            } });

        });


      },
      function (error) {
        // 批量新增异常处理
        console.log("异常处理");
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 263:
/*!******************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/wechat/kcb_all/pages/common/good_allocation/allocation_detail/allocation_detail.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_allocation_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./allocation_detail.vue?vue&type=style&index=0&lang=css& */ 264);
/* harmony import */ var _D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_allocation_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_allocation_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_allocation_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_allocation_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_allocation_detail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 264:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/wechat/kcb_all/pages/common/good_allocation/allocation_detail/allocation_detail.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[257,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/common/good_allocation/allocation_detail/allocation_detail.js.map