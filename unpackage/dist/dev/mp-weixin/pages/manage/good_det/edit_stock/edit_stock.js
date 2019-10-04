(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/manage/good_det/edit_stock/edit_stock"],{

/***/ 450:
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_mobile/main.js?{"page":"pages%2Fmanage%2Fgood_det%2Fedit_stock%2Fedit_stock"} ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _edit_stock = _interopRequireDefault(__webpack_require__(/*! ./pages/manage/good_det/edit_stock/edit_stock.vue */ 451));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_edit_stock.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 451:
/*!********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_mobile/pages/manage/good_det/edit_stock/edit_stock.vue ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_stock_vue_vue_type_template_id_3ecfe4a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit_stock.vue?vue&type=template&id=3ecfe4a0& */ 452);
/* harmony import */ var _edit_stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit_stock.vue?vue&type=script&lang=js& */ 454);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _edit_stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _edit_stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _edit_stock_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit_stock.vue?vue&type=style&index=0&lang=css& */ 456);
/* harmony import */ var _Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 15);






/* normalize component */

var component = Object(_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_stock_vue_vue_type_template_id_3ecfe4a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_stock_vue_vue_type_template_id_3ecfe4a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Desktop/wechat/kcb_mobile/pages/manage/good_det/edit_stock/edit_stock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 452:
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_mobile/pages/manage/good_det/edit_stock/edit_stock.vue?vue&type=template&id=3ecfe4a0& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_stock_vue_vue_type_template_id_3ecfe4a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./edit_stock.vue?vue&type=template&id=3ecfe4a0& */ 453);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_stock_vue_vue_type_template_id_3ecfe4a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_stock_vue_vue_type_template_id_3ecfe4a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 453:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_mobile/pages/manage/good_det/edit_stock/edit_stock.vue?vue&type=template&id=3ecfe4a0& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 454:
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_mobile/pages/manage/good_det/edit_stock/edit_stock.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./edit_stock.vue?vue&type=script&lang=js& */ 455);
/* harmony import */ var _Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_stock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 455:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_mobile/pages/manage/good_det/edit_stock/edit_stock.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


































































































































































var _common = _interopRequireDefault(__webpack_require__(/*! @/utils/common.js */ 25));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var faIcon = function faIcon() {return __webpack_require__.e(/*! import() | components/kilvn-fa-icon/fa-icon */ "components/kilvn-fa-icon/fa-icon").then(__webpack_require__.bind(null, /*! @/components/kilvn-fa-icon/fa-icon.vue */ 466));};var uniCollapse = function uniCollapse() {return __webpack_require__.e(/*! import() | components/uni-collapse/uni-collapse */ "components/uni-collapse/uni-collapse").then(__webpack_require__.bind(null, /*! @/components/uni-collapse/uni-collapse.vue */ 506));};var uniCollapseItem = function uniCollapseItem() {return __webpack_require__.e(/*! import() | components/uni-collapse-item/uni-collapse-item */ "components/uni-collapse-item/uni-collapse-item").then(__webpack_require__.bind(null, /*! @/components/uni-collapse-item/uni-collapse-item.vue */ 513));};

var that;
var tempFilePaths;
var p_class_user_id = "";
var p_second_class_id = "";
var uid;var _default =

{
  components: {
    uniCollapse: uniCollapse,
    uniCollapseItem: uniCollapseItem,
    faIcon: faIcon },

  data: function data() {
    return {
      text_desc: "保存",
      goodsName: '',
      costPrice: '', //进价
      retailPrice: '', //售价
      packageContent: '', //包装含量
      packingUnit: '', //包装单位
      warning_num: '', //预警库存
      producer: '', //生产厂家
      regNumber: '', //货号
      position: '', //位置
      product_info: '', //产品简介
      productCode: "", //产品条码
      category: "", //分类
      reserve: 0, //初始库存
      goodsIcon: "", //产品图片
      stock_name: "", //存放仓库的名字
      stocks: "", //存放的仓库
      producttime: "",
      nousetime: "",
      product_state: false //产品是否是半成品
    };
  },

  onLoad: function onLoad(options) {
    that = this;
    uid = uni.getStorageSync('uid');
    uni.removeStorageSync("category");
    uni.removeStorageSync("is_add");

    if (options.id) {
      that.scan_by_id(options.id);
    }
  },
  onShow: function onShow() {

    if (uni.getStorageSync("now_product")) {
      uni.setNavigationBarTitle({
        title: "编辑产品" });


      var now_product = uni.getStorageSync("now_product");

      that.text_desc = "修改";
      that.goodsName = now_product.goodsName;
      that.costPrice = now_product.costPrice; //进价
      that.retailPrice = now_product.retailPrice; //售价
      that.packageContent = now_product.packageContent; //包装含量
      that.packingUnit = now_product.packingUnit; //包装单位
      that.warning_num = now_product.warning_num; //预警库存
      that.producer = now_product.producer; //生产厂家
      that.regNumber = now_product.regNumber; //货号
      that.position = now_product.position; //位置
      that.product_info = now_product.product_info; //产品简介
      that.productCode = now_product.productCode; //产品条码
      that.category = now_product.second_class ? now_product.second_class : ''; //分类
      that.reserve = now_product.reserve;
      that.goodsIcon = now_product.goodsIcon; //产品图片
      that.product_state = now_product.product_state; //产品是否是半成品

      if (now_product.goodsClass) {
        var pointer2 = Bmob.Pointer('class_user');
        p_class_user_id = pointer2.set(now_product.goodsClass.objectId); //一级分类id关联
      }

      if (now_product.second_class) {
        var pointer3 = Bmob.Pointer('second_class');
        p_second_class_id = pointer3.set(now_product.second_class.objectId); //仓库的id关联
      }
    }

    if (uni.getStorageSync("warehouse")) {//存在此缓存证明选择了仓库
      that.stocks = uni.getStorageSync("warehouse")[0].stock;
      that.stock_name = uni.getStorageSync("warehouse")[0].stock.stock_name;
    }

    if (uni.getStorageSync("category")) {
      that.category = uni.getStorageSync("category");

      var _pointer = Bmob.Pointer('class_user');
      p_class_user_id = _pointer.set(that.category.parent.objectId); //一级分类id关联

      var _pointer2 = Bmob.Pointer('second_class');
      p_second_class_id = _pointer2.set(that.category.objectId); //仓库的id关联

      console.log(that.category.parent.objectId, that.category.objectId);
    }
  },

  onUnload: function onUnload() {
    tempFilePaths = "";
    p_class_user_id = "";
    p_second_class_id = "";

    _common.default.handleData();
  },

  methods: {

    //通过条形码扫码得到商品信息
    scan_by_id: function scan_by_id(id) {
      console.log(id);
      wx.showLoading({
        title: '加载中...' });

      wx.request({
        url: 'https://route.showapi.com/66-22',
        data: {
          showapi_appid: '84916',
          showapi_sign: 'ad4b63369c834759b411a9d7fcb07ed7',
          code: id },

        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function success(res) {
          wx.hideLoading();
          var good = res.data.showapi_res_body;

          console.log(good);

          that.goodsName = good.goodsName,
          that.producer = good.manuName,
          that.goodsIcon = good.img; //产品图片
          that.product_info = good.note; //产品简介

          that.productCode = id;
        } });

    },

    //扫码操作
    scan_code: function scan_code() {
      uni.scanCode({
        onlyFromCamera: true,
        success: function success(res) {
          console.log('条码类型：' + res.scanType);
          console.log('条码内容：' + res.result);
          that.productCode = res.result;
        } });

    },

    bindproducttimeChange: function bindproducttimeChange(e) {
      that.producttime = e.target.value;
    },

    bindDateChange: function bindDateChange(e) {
      that.nousetime = e.target.value;
    },
    //保存提交
    formSubmit: function formSubmit(e) {
      console.log(e.detail.value);
      var good = e.detail.value;
      if (good.goodsName == "") {
        uni.showToast({
          title: "请输入产品名称",
          icon: "none" });

      } else {
        that.upload_good(good);
      }
    },

    //上传商品
    upload_good: function upload_good(good) {
      uni.showLoading({
        title: "上传中..." });


      if (uni.getStorageSync("now_product")) {
        that.add_good(good, "edit");
      } else {
        var query = Bmob.Query("Goods");
        query.equalTo("userId", "==", uid);
        query.equalTo("goodsName", "==", good.goodsName);
        query.find().then(function (res) {
          if (res.length >= 1) {
            uni.showToast({
              title: "你的库存中已存在此产品",
              icon: 'none' });

          } else {
            that.add_good(good, "add");
          }
        });
      }
    },


    add_good: function add_good(good, type) {
      var pointer = Bmob.Pointer('_User');
      var userid = pointer.set(uid);

      var stock_id = that.stocks.objectId ? that.stocks.objectId : '';

      var pointer1 = Bmob.Pointer('stocks');
      var p_stock_id = pointer1.set(stock_id); //仓库的id关联

      var query = Bmob.Query('Goods');
      query.set("goodsIcon", that.goodsIcon);
      query.set("goodsName", good.goodsName);
      query.set("costPrice", good.costPrice ? good.costPrice : "0");
      query.set("retailPrice", good.retailPrice ? good.retailPrice : "0");
      //query.set("producttime",  new Date(that.producttime.replace("-","/")))
      //query.set("nousetime",new Date(that.nousetime.replace("-","/")) )
      query.set("regNumber", good.regNumber);
      query.set("reserve", Number(good.reserve));
      query.set("productCode", good.productCode);
      query.set("stocks", p_stock_id);
      query.set("product_info", good.product_info);
      query.set("producer", good.producer);
      query.set("packingUnit", good.packingUnit);
      query.set("packageContent", good.packageContent);
      query.set("position", good.position);
      query.set("warning_num", Number(good.warning_num));
      query.set("stocktype", Number(good.warning_num) >= Number(that.reserve) ? 0 : 1); //库存数量类型 0代表库存不足 1代表库存充足

      query.set("product_state", good.product_state); //改产品是否是半成品
      if (uni.getStorageSync("category")) {//存在此缓存证明选择了仓库
        query.set("second_class", p_second_class_id);
        query.set("goodsClass", p_class_user_id);
      }

      query.set("userId", userid);
      query.set("id", uni.getStorageSync("now_product") ? uni.getStorageSync("now_product").objectId : "");
      query.save().then(function (res) {
        uni.hideLoading();
        if (type == "add") {
          _common.default.log(uni.getStorageSync("user").nickName + "增加了产品'" + good.goodsName + "'", 5, res.objectId);
          uni.showToast({
            title: "上传成功" });

        } else {
          _common.default.log(uni.getStorageSync("user").nickName + "修改了产品'" + good.goodsName + "'", 5, uni.getStorageSync("now_product").objectId);
          uni.navigateBack({
            delta: 2 });


          setTimeout(function () {
            uni.showToast({
              title: "修改成功",
              duration: 1000 });

          }, 1000);
        }

        uni.setStorageSync("is_add", true);

        //that.handledata()
      }).catch(function (err) {
        console.log(err);
      });
    },

    //数据重置
    handledata: function handledata() {
      that.goodsName = '';
      that.costPrice = ''; //进价
      that.retailPrice = ''; //售价
      that.packageContent = ''; //包装含量
      that.packingUnit = ''; //包装单位
      that.warning_num = ''; //预警库存
      that.producer = ''; //生产厂家
      that.regNumber = ''; //货号
      that.position = ''; //位置
      that.product_info = ''; //产品简介
      that.productCode = ""; //产品条码
      that.category = ""; //分类
      that.reserve = 0; //初始库存
      that.goodsIcon = ""; //产品图片
      that.stocks = ""; //存放的仓库
      that.stock_name = "";
      that.producttime = "";
      that.nousetime = "";
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 456:
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_mobile/pages/manage/good_det/edit_stock/edit_stock.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_stock_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../Downloads/HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./edit_stock.vue?vue&type=style&index=0&lang=css& */ 457);
/* harmony import */ var _Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_stock_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_stock_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_stock_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_stock_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Downloads_HBuilderX_2_2_2_20190816_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_edit_stock_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 457:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_mobile/pages/manage/good_det/edit_stock/edit_stock.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[450,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/manage/good_det/edit_stock/edit_stock.js.map