(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tki-barcode/tki-barcode"],{"2fe1":function(t,n,e){"use strict";e.r(n);var i=e("8d35"),o=e("9609");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("9d3a");var u=e("2877"),s=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=s.exports},"7f57":function(t,n,e){},"8d35":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},9609:function(t,n,e){"use strict";e.r(n);var i=e("ca59"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);n["default"]=o.a},"9d3a":function(t,n,e){"use strict";var i=e("7f57"),o=e.n(i);o.a},ca59:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i,o=a(e("0644"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var s={name:"tkiBarcode",props:{show:{type:Boolean,default:!0},cid:{type:String,default:"tki-barcode-canvas"},unit:{type:String,default:"upx"},val:{type:String,default:"1234567890128"},format:{type:String,default:"CODE128"},opations:{type:Object,default:function(){return{width:4,height:120,displayValue:!0,textAlign:"center",textPosition:"bottom",textMargin:0,fontSize:24,fontColor:"#000000",lineColor:"#000000",background:"#FFFFFF",margin:0,marginTop:void 0,marginBottom:void 0,marginLeft:void 0,marginRight:void 0}}},onval:{type:Boolean,default:!1},loadMake:{type:Boolean,default:!0}},data:function(){return{result:"",canvasWidth:0,canvasHeight:0}},onUnload:function(){},methods:(i={_makeCode:function(){var n=this;"upx"==n.unit&&(n.opations.width&&(n.opations.width=t.upx2px(n.opations.width)),n.opations.height&&(n.opations.height=t.upx2px(n.opations.height)),n.opations.fontSize&&(n.opations.fontSize=t.upx2px(n.opations.fontSize))),n._empty(n.opations.text)&&(n.opations.text=n.val),n._empty(n.opations.format)&&(n.opations.format=n.format),new o.default(n,n.cid,n.opations,function(t){n.canvasWidth=t.width,n.canvasHeight=t.height},function(t){n._result(t)})},_clearCode:function(){this._result("")},_saveCode:function(){var n=this;""!=this.result&&t.saveImageToPhotosAlbum({filePath:n.result,success:function(){t.showToast({title:"条形码保存成功",icon:"success",duration:2e3})}})},_result:function(t){this.result=t,this.$emit("result",t)}},u(i,"_result",function(t){this.result=t,this.$emit("result",t)}),u(i,"_empty",function(t){var n=typeof t,e=!1;return"number"==n&&""==String(t)?e=!0:"undefined"==n?e=!0:"object"==n?"{}"!=JSON.stringify(t)&&"[]"!=JSON.stringify(t)&&null!=t||(e=!0):"string"==n?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(e=!0):"function"==n&&(e=!1),e}),i),watch:{size:function(t,n){var e=this;t==n||this._empty(t)||(this.cSize=t,this._empty(this.val)||setTimeout(function(){e._makeCode()},100))},val:function(t,n){var e=this;this.onval&&(t==n||this._empty(t)||setTimeout(function(){e._makeCode()},0))}},mounted:function(){var t=this;this.loadMake&&(this._empty(this.val)||setTimeout(function(){t._makeCode()},0))}};n.default=s}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tki-barcode/tki-barcode-create-component',
    {
        'components/tki-barcode/tki-barcode-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2fe1"))
        })
    },
    [['components/tki-barcode/tki-barcode-create-component']]
]);                
