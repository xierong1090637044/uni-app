(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-report-EnteringHistory-expressDet-expressDet"],{"03f1":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".div-bg[data-v-ef3c6318]{background:#fff;height:100vh;overflow:scroll;padding:0 %?30?%;width:calc(100% - %?60?%);overflow-x:hidden}.message-text[data-v-ef3c6318]{font-size:%?24?%;font-weight:400;font-stretch:normal;line-height:%?40?%;color:#333;width:50%}.fontblack[data-v-ef3c6318]{color:#999}.img2[data-v-ef3c6318]{width:.81rem;height:.8rem;float:right}.addressshow2[data-v-ef3c6318]{height:auto;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;width:75%;-webkit-line-clamp:2;-webkit-box-orient:vertical;white-space:normal;word-wrap:break-word;word-break:break-all;font-size:1rem}.addressshow1[data-v-ef3c6318]{height:auto;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;width:75%;-webkit-line-clamp:1;-webkit-box-orient:vertical;white-space:normal;word-wrap:break-word;word-break:break-all;font-size:1rem}.orderTitle[data-v-ef3c6318]{font-size:1rem;color:#333;height:auto;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;white-space:normal;word-wrap:break-word;word-break:break-all;height:2.5rem}.orderDetail[data-v-ef3c6318]{font-size:.8rem;color:#666;text-align:left}.border-ceter[data-v-ef3c6318]{width:92%;padding-left:15px;padding-right:15px}.pay-button[data-v-ef3c6318]{width:88%;height:2.6rem;position:relative;background-color:red;color:#fff;margin-left:6%}ul li[data-v-ef3c6318]{list-style:none;font-size:1rem}ul[data-v-ef3c6318]{padding-left:%?30?%}.track-list[data-v-ef3c6318]{position:relative}.track-list li[data-v-ef3c6318]{position:relative;padding:0 0 %?60?% %?40?%;border-left:1px solid #d9d9d9;color:#999}.track-list li.first[data-v-ef3c6318]{color:red;padding-top:0;width:100%;text-align:left;border-left:1px solid #d9d9d9}.track-list li .node-icon[data-v-ef3c6318]{position:absolute;left:-5.5px;border-radius:50%;width:%?20?%;height:%?20?%;top:4px;background-color:#999}.track-list li.first .node-icon[data-v-ef3c6318]{background-position:0 -72px;background-color:red;width:%?30?%;z-index:2;height:%?30?%;position:absolute;left:-9px;top:0;border-radius:50%}.track-list li .time[data-v-ef3c6318]{margin-right:20px;position:relative;top:4px;display:inline-block;vertical-align:middle;background-color:#fff;color:#999;width:100%;text-align:left;font-size:%?28?%}.track-list li .txt[data-v-ef3c6318]{position:relative;display:inline-block;vertical-align:top;color:#999;font-size:%?28?%}.track-list li.first .time[data-v-ef3c6318]{text-align:left;width:94%;color:red;font-size:%?32?%}.track-list li.first .txt[data-v-ef3c6318]{color:red;text-align:left;width:94%;font-size:%?32?%}.track-list li.finall[data-v-ef3c6318]{position:relative;padding:0 0 %?20?% %?40?%;line-height:18px;border-color:#fff;border-left:1px solid #fff;color:#999}.track-list li.finall .div-spilander[data-v-ef3c6318]{width:1px;position:absolute;position:absolute;left:-1.5px;height:.5rem;background-color:#d9d9d9}",""])},"120a8":function(t,i,e){"use strict";(function(t){var e,a;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={data:function(){return{logisticsList:[]}},onLoad:function(i){e=this,a=i.number,t.log(a),e.getInfoById(a)},methods:{getInfoById:function(i){t.log(i),uni.showLoading({title:"加载中..."}),uni.request({url:"https://route.showapi.com/64-21",data:{showapi_appid:"84916",showapi_sign:"ad4b63369c834759b411a9d7fcb07ed7",nu:i},header:{"content-type":"application/json"},success:function(a){t.log(a.data.showapi_res_body.data),uni.request({url:"https://route.showapi.com/64-19",data:{showapi_appid:"84916",showapi_sign:"ad4b63369c834759b411a9d7fcb07ed7",com:a.data.showapi_res_body.data[0].simpleName,nu:i},header:{"content-type":"application/json"},success:function(i){uni.hideLoading(),e.logisticsList=i.data.showapi_res_body.data,t.log(i)}}),t.log(a)}})}}};i.default=o}).call(this,e("5a52")["default"])},2436:function(t,i,e){var a=e("03f1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("22e11f9d",a,!0,{sourceMap:!1,shadowMode:!1})},7855:function(t,i,e){"use strict";var a=e("2436"),o=e.n(a);o.a},7994:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"div-bg bg-white"},[e("div",[e("div",{staticClass:"bg-white",staticStyle:{"margin-left":"4%",margin:"auto"}},[e("div",{staticStyle:{"font-size":"34rpx",color:"#111111","margin-bottom":"30rpx"}},[t._v("物流跟踪")]),e("div",[e("div",{staticClass:"track-rcol"},[e("div",{staticClass:"track-list"},[e("ul",t._l(t.logisticsList,function(i,a){return e("div",{key:a},[0===a?e("li",{staticClass:"first"},[e("div"),e("i",{staticClass:"node-icon"}),e("span",{staticClass:"txt"},[t._v(t._s(i.context))]),e("span",{staticClass:"time"},[t._v(t._s(i.time))])]):t._e(),a>0&&a!==t.logisticsList.length-1?e("li",[e("i",{staticClass:"node-icon"}),e("span",{staticClass:"txt"},[t._v(t._s(i.context))]),e("span",{staticClass:"time"},[t._v(t._s(i.time))])]):t._e(),a===t.logisticsList.length-1?e("li",{staticClass:"finall"},[e("i",{staticClass:"div-spilander"}),e("i",{staticClass:"node-icon"}),e("span",{staticClass:"txt"},[t._v(t._s(i.context))]),e("span",{staticClass:"time"},[t._v(t._s(i.time)+"ss")])]):t._e()])}),0)])])])])])])},o=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return o})},9126:function(t,i,e){"use strict";e.r(i);var a=e("120a8"),o=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=o.a},cc79:function(t,i,e){"use strict";e.r(i);var a=e("7994"),o=e("9126");for(var s in o)"default"!==s&&function(t){e.d(i,t,function(){return o[t]})}(s);e("7855");var l=e("f0c5"),r=Object(l["a"])(o["default"],a["a"],a["b"],!1,null,"ef3c6318",null);i["default"]=r.exports}}]);