(global.webpackJsonp=global.webpackJsonp||[]).push([["components/charts/BChart"],{1120:
/*!**********************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/components/charts/BChart.vue ***!
  \**********************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var o=n(/*! ./BChart.vue?vue&type=template&id=0df84f83& */1121),i=n(/*! ./BChart.vue?vue&type=script&lang=js& */1123);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n(/*! ./BChart.vue?vue&type=style&index=0&lang=css& */1125);var r=n(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */70),c=Object(r.default)(i.default,o.render,o.staticRenderFns,!1,null,null,null,!1,o.components,void 0);c.options.__file="C:/Users/Administrator/Desktop/wechat/kcb_all/components/charts/BChart.vue",e.default=c.exports},1121:
/*!*****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/components/charts/BChart.vue?vue&type=template&id=0df84f83& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,e,n){"use strict";n.r(e);var o=n(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./BChart.vue?vue&type=template&id=0df84f83& */1122);n.d(e,"render",function(){return o.render}),n.d(e,"staticRenderFns",function(){return o.staticRenderFns}),n.d(e,"recyclableRender",function(){return o.recyclableRender}),n.d(e,"components",function(){return o.components})},1122:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/components/charts/BChart.vue?vue&type=template&id=0df84f83& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(t,e,n){"use strict";n.r(e),n.d(e,"render",function(){return o}),n.d(e,"staticRenderFns",function(){return a}),n.d(e,"recyclableRender",function(){return i}),n.d(e,"components",function(){});var o=function(){var t=this.$createElement;this._self._c},i=!1,a=[];o._withStripped=!0},1123:
/*!***********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/components/charts/BChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var o=n(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./BChart.vue?vue&type=script&lang=js& */1124),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e.default=i.a},1124:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/components/charts/BChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i=u(n(/*! @/components/u-charts/u-charts.js */1115)),a=n(/*! @/utils/checker.js */1117),r=u(n(/*! @/utils/common.js */77)),c=u(n(/*! @/utils/chart.js */1116));function u(t){return t&&t.__esModule?t:{default:t}}var l=null,s={name:"bchart",props:{now_day:{type:String,default:r.default.getDay(0)},type:{type:Number,default:1}},data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,textarea:""}},mounted:function(){o=this,this.cWidth=t.upx2px(750),this.cHeight=t.upx2px(500),this.getServerData()},watch:{now_day:function(t,e){o.now_day=t,o.getServerData()},type:function(t,e){console.log(t,e),o.type=t,o.getServerData()}},methods:{getServerData:function(){var t=o.now_day.split("-")[0],e=o.now_day.split("-")[1];c.default.getLineChart(t,e).then(function(t){console.log(t),o.textarea=JSON.stringify(t),2==o.type?o.showColumn("canvasColumn",t):o.showColumn("canvasColumn2",t)})},showColumn:function(t,e){l=new i.default({$this:o,canvasId:t,type:"column",fontSize:11,padding:[5,15,15,15],legend:{show:!0,position:"top",float:"center",itemGap:30,padding:5,margin:5,borderWidth:1},dataLabel:!0,dataPointShape:!0,background:"#FFFFFF",pixelRatio:o.pixelRatio,categories:e.categories,series:"canvasColumn"==t?e.columnSeries1:e.columnSeries2,animation:!0,enableScroll:!0,xAxis:{disableGrid:!1,type:"grid",gridType:"dash",itemCount:4,scrollShow:!0,scrollAlign:"left"},yAxis:{gridType:"dash",splitNumber:4,min:0,format:function(t){return t.toFixed(0)}},width:o.cWidth*o.pixelRatio,height:o.cHeight*o.pixelRatio,extra:{column:{type:"group",width:o.cWidth*o.pixelRatio*.45/e.categories.length}}})},touchColumn:function(t){l.scrollStart(t)},moveColumn:function(t){l.scroll(t)},touchEndColumn:function(t){l.scrollEnd(t),l.touchLegend(t,{animation:!0}),l.showToolTip(t,{format:function(t,e){return e+" "+t.name+":"+t.data}})},changeData:function(){if((0,a.isJSON)(o.textarea)){var e=JSON.parse(o.textarea);l.updateData({series:e.series,categories:e.categories,scrollPosition:"right",animation:!1})}else t.showToast({title:"数据格式错误",icon:"none"})}}};e.default=s}).call(this,n(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},1125:
/*!*******************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/wechat/kcb_all/components/charts/BChart.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */function(t,e,n){"use strict";n.r(e);var o=n(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./BChart.vue?vue&type=style&index=0&lang=css& */1126),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e.default=i.a},1126:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Desktop/wechat/kcb_all/components/charts/BChart.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,n){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/charts/BChart.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/charts/BChart-create-component',
    {
        'components/charts/BChart-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(1120))
        })
    },
    [['components/charts/BChart-create-component']]
]);
