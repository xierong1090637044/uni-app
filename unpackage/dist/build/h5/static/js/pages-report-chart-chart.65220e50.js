(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-report-chart-chart"],{"0611":function(n,t,e){"use strict";e.r(t);var a=e("e2ce"),i=e("973a");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("3919");var c,r=e("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"c9d3f77a",null,!1,a["a"],c);t["default"]=u.exports},"0f92":function(n,t,e){"use strict";e.r(t);var a=e("17c5"),i=e("2c1b");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("9ca2");var c,r=e("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"6e6f9fd6",null,!1,a["a"],c);t["default"]=u.exports},"17c5":function(n,t,e){"use strict";var a,i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"qiun-columns"},[e("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[e("v-uni-view",{staticClass:"qiun-title-dot-light"},[e("fa-icon",{attrs:{type:"paperclip",size:"20",color:"#21b384"}}),e("v-uni-text",{staticStyle:{"margin-left":"10rpx"}},[n._v("前20个产品占比")])],1)],1),e("v-uni-view",{staticClass:"qiun-charts"},[e("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasPie",id:"canvasPie"},on:{touchstart:function(t){arguments[0]=t=n.$handleEvent(t),n.touchPie.apply(void 0,arguments)}}})],1)],1)},o=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}))},"2c1b":function(n,t,e){"use strict";e.r(t);var a=e("dcb0"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},3919:function(n,t,e){"use strict";var a=e("9be2"),i=e.n(a);i.a},"424c":function(n,t,e){"use strict";e.r(t);var a=e("c02c"),i=e("bfe2");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("e147");var c,r=e("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"8e48f944",null,!1,a["a"],c);t["default"]=u.exports},"4df9":function(n,t,e){"use strict";var a,i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"qiun-columns"},[e("v-uni-view",{staticClass:"display_flex_bet"},[e("v-uni-view",{staticStyle:{"text-align":"center",width:"50%"}},[e("v-uni-picker",{attrs:{range:n.chartTypes},on:{change:function(t){arguments[0]=t=n.$handleEvent(t),n.select_type.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input display_flex",staticStyle:{"justify-content":"center"}},[e("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[n._v(n._s(n.chartTypes[n.chartValue]))]),e("fa-icon",{attrs:{type:"angle-down",size:"20",color:"#3d3d3d"}})],1)],1)],1),e("v-uni-view",{staticStyle:{"text-align":"center",width:"50%"}},[e("v-uni-picker",{attrs:{mode:"date",value:n.now_day,fields:"month"},on:{change:function(t){arguments[0]=t=n.$handleEvent(t),n.bindDateChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"uni-input display_flex",staticStyle:{"justify-content":"center"}},[e("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[n._v(n._s(n.now_day))]),e("fa-icon",{attrs:{type:"angle-down",size:"20",color:"#3d3d3d"}})],1)],1)],1)],1),0==n.chartValue?e("dchart",{attrs:{now_day:n.now_day}}):n._e(),1==n.chartValue?e("achart",{attrs:{now_day:n.now_day}}):n._e(),2==n.chartValue||3==n.chartValue?e("bchart",{attrs:{now_day:n.now_day,type:n.chartValue}}):n._e(),4==n.chartValue?e("cchart"):n._e()],1)},o=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}))},"65e2":function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*样式的width和height一定要与定义的cWidth和cHeight相对应*/.qiun-charts[data-v-8e48f944]{width:%?750?%;height:%?500?%;background-color:#fff}.charts[data-v-8e48f944]{width:%?750?%;height:%?500?%;background-color:#fff}.qiun-title-dot-light[data-v-8e48f944]{text-align:left;font-size:%?32?%;color:#333;font-weight:700;padding:%?20?%}.qiun-title-bar[data-v-8e48f944]{padding:%?20?% 0}",""]),n.exports=t},"66f6":function(n,t,e){"use strict";(function(n){var a=e("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=a(e("7fd5")),c=a(e("1ec3")),r=a(e("424c")),u=a(e("0f92")),s=a(e("0611")),l={components:{achart:c.default,bchart:r.default,cchart:u.default,dchart:s.default},data:function(){return{now_day:o.default.getDay(0),chartTypes:["采购销售统计","出入库统计","入库统计","出库统计","产品占比图"],chartValue:0}},onLoad:function(){i=this},methods:{bindDateChange:function(t){n.log(t),i.now_day=t.detail.value},select_type:function(n){i.chartValue=n.detail.value}}};t.default=l}).call(this,e("5a52")["default"])},"8ff7":function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*样式的width和height一定要与定义的cWidth和cHeight相对应*/.qiun-charts[data-v-c9d3f77a]{width:%?750?%;height:%?500?%;background-color:#fff}.charts[data-v-c9d3f77a]{width:%?750?%;height:%?500?%;background-color:#fff}.qiun-title-dot-light[data-v-c9d3f77a]{text-align:left;font-size:%?32?%;color:#333;font-weight:700;padding:%?20?%}.qiun-title-bar[data-v-c9d3f77a]{padding:%?20?% 0}",""]),n.exports=t},"973a":function(n,t,e){"use strict";e.r(t);var a=e("c24f"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},"9be2":function(n,t,e){var a=e("8ff7");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("69ceb875",a,!0,{sourceMap:!1,shadowMode:!1})},"9ca2":function(n,t,e){"use strict";var a=e("d36b"),i=e.n(a);i.a},"9e8b":function(n,t,e){"use strict";(function(n){var a=e("ee27");e("a9e3"),e("b6802"),e("ac1f"),e("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=a(e("7d08")),c=e("0eba"),r=a(e("7fd5")),u=a(e("e959")),s=null,l={name:"bchart",props:{now_day:{type:String,default:r.default.getDay(0)},type:{type:Number,default:1}},data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,textarea:""}},mounted:function(){i=this,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(500),this.getServerData()},watch:{now_day:function(n,t){i.now_day=n,i.getServerData()},type:function(t,e){n.log(t,e),i.type=t,i.getServerData()}},methods:{getServerData:function(){var t=i.now_day.split("-")[0],e=i.now_day.split("-")[1];u.default.getLineChart(t,e).then((function(t){n.log(t),i.textarea=JSON.stringify(t),2==i.type?i.showColumn("canvasColumn",t):i.showColumn("canvasColumn2",t)}))},showColumn:function(n,t){s=new o.default({$this:i,canvasId:n,type:"column",fontSize:11,padding:[5,15,15,15],legend:{show:!0,position:"top",float:"center",itemGap:30,padding:5,margin:5,borderWidth:1},dataLabel:!0,dataPointShape:!0,background:"#FFFFFF",pixelRatio:i.pixelRatio,categories:t.categories,series:"canvasColumn"==n?t.columnSeries1:t.columnSeries2,animation:!0,enableScroll:!0,xAxis:{disableGrid:!1,type:"grid",gridType:"dash",itemCount:4,scrollShow:!0,scrollAlign:"left"},yAxis:{gridType:"dash",splitNumber:4,min:0,format:function(n){return n.toFixed(0)}},width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,extra:{column:{type:"group",width:i.cWidth*i.pixelRatio*.45/t.categories.length}}})},touchColumn:function(n){s.scrollStart(n)},moveColumn:function(n){s.scroll(n)},touchEndColumn:function(n){s.scrollEnd(n),s.touchLegend(n,{animation:!0}),s.showToolTip(n,{format:function(n,t){return t+" "+n.name+":"+n.data}})},changeData:function(){if((0,c.isJSON)(i.textarea)){var n=JSON.parse(i.textarea);s.updateData({series:n.series,categories:n.categories,scrollPosition:"right",animation:!1})}else uni.showToast({title:"数据格式错误",icon:"none"})}}};t.default=l}).call(this,e("5a52")["default"])},bfe2:function(n,t,e){"use strict";e.r(t);var a=e("9e8b"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},c02c:function(n,t,e){"use strict";var a,i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"qiun-columns"},[e("v-uni-scroll-view",{staticStyle:{height:"calc(100vh - 80rpx)"},attrs:{"scroll-y":"true"}},[e("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[e("v-uni-view",{staticClass:"qiun-title-dot-light"},[e("fa-icon",{attrs:{type:"paperclip",size:"20",color:"#21b384"}}),2==n.type?e("v-uni-text",{staticStyle:{"margin-left":"10rpx"}},[n._v("入库统计")]):3==n.type?e("v-uni-text",{staticStyle:{"margin-left":"10rpx"}},[n._v("出库统计")]):n._e()],1)],1),2==n.type?e("v-uni-view",{staticClass:"qiun-charts"},[e("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasColumn",id:"canvasColumn","disable-scroll":"true"},on:{touchstart:function(t){arguments[0]=t=n.$handleEvent(t),n.touchColumn.apply(void 0,arguments)},touchmove:function(t){arguments[0]=t=n.$handleEvent(t),n.moveColumn.apply(void 0,arguments)},touchend:function(t){arguments[0]=t=n.$handleEvent(t),n.touchEndColumn.apply(void 0,arguments)}}})],1):3==n.type?e("v-uni-view",{staticClass:"qiun-charts"},[e("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasColumn2",id:"canvasColumn2","disable-scroll":"true"},on:{touchstart:function(t){arguments[0]=t=n.$handleEvent(t),n.touchColumn.apply(void 0,arguments)},touchmove:function(t){arguments[0]=t=n.$handleEvent(t),n.moveColumn.apply(void 0,arguments)},touchend:function(t){arguments[0]=t=n.$handleEvent(t),n.touchEndColumn.apply(void 0,arguments)}}})],1):n._e()],1)],1)},o=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}))},c24f:function(n,t,e){"use strict";(function(n){var a=e("ee27");e("b6802"),e("ac1f"),e("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o,c,r=a(e("7d08")),u=a(e("e959")),s=a(e("7fd5")),l=e("0eba"),d={name:"achart",props:{now_day:{type:String,default:s.default.getDay(0)}},data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,textarea:""}},mounted:function(){i=this,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(500),this.getServerData()},watch:{now_day:function(n,t){i.now_day=n,i.getServerData()}},methods:{getServerData:function(){var t=i.now_day.split("-")[0],e=i.now_day.split("-")[1];u.default.getLineChart2(t,e).then((function(t){n.log(t),i.textarea=JSON.stringify(t),i.showLineA("canvasLineA",t),i.showLineC("canvasLineC",t)}))},showLineA:function(n,t){o=new r.default({$this:i,canvasId:n,type:"line",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:5},dataLabel:!0,dataPointShape:!0,dataPointShapeType:"hollow",background:"#FFFFFF",pixelRatio:i.pixelRatio,categories:t.categories,series:t.series,animation:!0,enableScroll:!0,xAxis:{disableGrid:!1,type:"grid",gridType:"dash",itemCount:4,scrollShow:!0,scrollAlign:"left"},yAxis:{gridType:"dash",splitNumber:8,format:function(n){return n.toFixed(0)}},width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,extra:{line:{type:"straight"}}})},showLineC:function(n,t){c=new r.default({$this:i,canvasId:n,type:"line",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:5},dataLabel:!0,dataPointShape:!0,dataPointShapeType:"hollow",background:"#FFFFFF",pixelRatio:i.pixelRatio,categories:t.categories,series:t.series2,animation:!0,enableScroll:!0,xAxis:{disableGrid:!1,type:"grid",gridType:"dash",itemCount:4,scrollShow:!0,scrollAlign:"left"},yAxis:{gridType:"dash",splitNumber:8,format:function(n){return n.toFixed(0)}},width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,extra:{line:{type:"straight"}}})},touchLineA:function(n,t){"A"==t?o.scrollStart(n):"C"==t&&c.scrollStart(n)},moveLineA:function(n,t){"A"==t?o.scroll(n):"C"==t&&c.scroll(n)},touchEndLineA:function(n,t){"A"==t?(o.scrollEnd(n),o.touchLegend(n),o.showToolTip(n,{format:function(n,t){return t+" "+n.name+":"+n.data}})):"C"==t&&(c.scrollEnd(n),c.touchLegend(n),c.showToolTip(n,{format:function(n,t){return t+" "+n.name+":"+n.data}}))},changeData:function(){if((0,l.isJSON)(i.textarea)){var n=JSON.parse(i.textarea);o.updateData({series:n.series,categories:n.categories,scrollPosition:"right",animation:!1}),c.updateData({series:n.series,categories:n.categories,scrollPosition:"right",animation:!1})}else uni.showToast({title:"数据格式错误",image:"../../../static/images/alert-warning.png"})}}};t.default=d}).call(this,e("5a52")["default"])},c887:function(n,t,e){"use strict";e.r(t);var a=e("66f6"),i=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a},d36b:function(n,t,e){var a=e("ff05");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("7f8fea59",a,!0,{sourceMap:!1,shadowMode:!1})},dcb0:function(n,t,e){"use strict";(function(n){var a=e("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=a(e("7d08")),c=e("0eba"),r=(a(e("7fd5")),a(e("e959"))),u=null,s={name:"cchart",data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,textarea:""}},mounted:function(){i=this,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(500),this.getServerData()},methods:{getServerData:function(){r.default.RingChart().then((function(t){n.log(t),i.textarea=JSON.stringify(t),i.showPie("canvasPie",t)}))},showPie:function(n,t){u=new o.default({$this:i,canvasId:n,type:"pie",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},background:"#FFFFFF",pixelRatio:i.pixelRatio,series:t.series,animation:!0,width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,dataLabel:!0,extra:{pie:{border:!0,borderColor:"#FFFFFF",borderWidth:3}}})},touchPie:function(n){u.showToolTip(n,{format:function(n){return n.name+":"+n.data}}),u.touchLegend(n,{animation:!0})},changeData:function(){if((0,c.isJSON)(i.textarea)){var n=JSON.parse(i.textarea);u.updateData({series:n.series,categories:n.categories})}else uni.showToast({title:"数据格式错误",image:"../../../static/images/alert-warning.png"})}}};t.default=s}).call(this,e("5a52")["default"])},e147:function(n,t,e){"use strict";var a=e("e6f2"),i=e.n(a);i.a},e2ce:function(n,t,e){"use strict";var a,i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"qiun-columns"},[e("v-uni-scroll-view",{staticStyle:{height:"calc(100vh - 80rpx)"},attrs:{"scroll-y":"true"}},[e("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[e("v-uni-view",{staticClass:"qiun-title-dot-light"},[e("fa-icon",{attrs:{type:"paperclip",size:"20",color:"#21b384"}}),e("v-uni-text",{staticStyle:{"margin-left":"10rpx"}},[n._v("销售以及采购总数")])],1)],1),e("v-uni-view",{staticClass:"qiun-charts"},[e("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasLineA",id:"canvasLineA","disable-scroll":"true"},on:{touchstart:function(t){arguments[0]=t=n.$handleEvent(t),n.touchLineA(t,"A")},touchmove:function(t){arguments[0]=t=n.$handleEvent(t),n.moveLineA(t,"A")},touchend:function(t){arguments[0]=t=n.$handleEvent(t),n.touchEndLineA(t,"A")}}})],1),e("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[e("v-uni-view",{staticClass:"qiun-title-dot-light"},[e("fa-icon",{attrs:{type:"eercast",size:"20",color:"#ff4f00"}}),e("v-uni-text",{staticStyle:{"margin-left":"10rpx"}},[n._v("销售以及采购总额")]),e("v-uni-text",{staticStyle:{"font-size":"24rpx",color:"#999"}},[n._v("（以成本价、零售价为准，自2019.10.15日更新此数据）")])],1)],1),e("v-uni-view",{staticClass:"qiun-charts"},[e("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasLineC",id:"canvasLineC","disable-scroll":"true"},on:{touchstart:function(t){arguments[0]=t=n.$handleEvent(t),n.touchLineA(t,"C")},touchmove:function(t){arguments[0]=t=n.$handleEvent(t),n.moveLineA(t,"C")},touchend:function(t){arguments[0]=t=n.$handleEvent(t),n.touchEndLineA(t,"C")}}})],1)],1)],1)},o=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}))},e323:function(n,t,e){"use strict";e.r(t);var a=e("4df9"),i=e("c887");for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);var c,r=e("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"e9c77e8a",null,!1,a["a"],c);t["default"]=u.exports},e6f2:function(n,t,e){var a=e("65e2");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("7faedb15",a,!0,{sourceMap:!1,shadowMode:!1})},ff05:function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*样式的width和height一定要与定义的cWidth和cHeight相对应*/.qiun-charts[data-v-6e6f9fd6]{width:%?750?%;height:%?500?%;background-color:#fff}.charts[data-v-6e6f9fd6]{width:%?750?%;height:%?500?%;background-color:#fff}.qiun-title-dot-light[data-v-6e6f9fd6]{text-align:left;font-size:%?32?%;color:#333;font-weight:700;padding:%?20?%}.qiun-title-bar[data-v-6e6f9fd6]{padding:%?20?% 0}",""]),n.exports=t}}]);