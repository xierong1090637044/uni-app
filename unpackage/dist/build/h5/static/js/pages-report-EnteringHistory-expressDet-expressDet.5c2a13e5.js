(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-report-EnteringHistory-expressDet-expressDet"],{"0aa6":function(t,i,a){"use strict";a.r(i);var e=a("3e08"),o=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,function(){return e[t]})}(s);i["default"]=o.a},"3e08":function(t,i,a){"use strict";(function(t){var a,e;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={data:function(){return{logisticsList:[]}},onLoad:function(i){a=this,e=i.number,t.log(e),a.getInfoById(e)},methods:{getInfoById:function(i){t.log(i),uni.showLoading({title:"加载中..."}),uni.request({url:"https://route.showapi.com/64-21",data:{showapi_appid:"84916",showapi_sign:"ad4b63369c834759b411a9d7fcb07ed7",nu:i},header:{"content-type":"application/json"},success:function(e){t.log(e.data.showapi_res_body.data),uni.request({url:"https://route.showapi.com/64-19",data:{showapi_appid:"84916",showapi_sign:"ad4b63369c834759b411a9d7fcb07ed7",com:e.data.showapi_res_body.data[0].simpleName,nu:i},header:{"content-type":"application/json"},success:function(i){uni.hideLoading(),a.logisticsList=i.data.showapi_res_body.data,t.log(i)}}),t.log(e)}})}}};i.default=o}).call(this,a("5a52")["default"])},"43ea":function(t,i,a){var e=a("8a3a");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("4f06").default;o("5a5eb532",e,!0,{sourceMap:!1,shadowMode:!1})},8244:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"div-bg bg-white"},[a("div",[a("div",{staticClass:"bg-white",staticStyle:{"margin-left":"4%",margin:"auto"}},[a("div",{staticStyle:{"font-size":"34rpx",color:"#111111","margin-bottom":"30rpx"}},[t._v("物流跟踪")]),a("div",[a("div",{staticClass:"track-rcol"},[a("div",{staticClass:"track-list"},[a("ul",t._l(t.logisticsList,function(i,e){return a("div",{key:e},[0===e?a("li",{staticClass:"first"},[a("div"),a("i",{staticClass:"node-icon"}),a("span",{staticClass:"txt"},[t._v(t._s(i.context))]),a("span",{staticClass:"time"},[t._v(t._s(i.time))])]):t._e(),e>0&&e!==t.logisticsList.length-1?a("li",[a("i",{staticClass:"node-icon"}),a("span",{staticClass:"txt"},[t._v(t._s(i.context))]),a("span",{staticClass:"time"},[t._v(t._s(i.time))])]):t._e(),e===t.logisticsList.length-1?a("li",{staticClass:"finall"},[a("i",{staticClass:"div-spilander"}),a("i",{staticClass:"node-icon"}),a("span",{staticClass:"txt"},[t._v(t._s(i.context))]),a("span",{staticClass:"time"},[t._v(t._s(i.time)+"ss")])]):t._e()])}),0)])])])])])])},o=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return o})},"8a3a":function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".div-bg[data-v-415574f2]{background:#fff;height:100vh;overflow:scroll;padding:0 %?30?%;width:calc(100% - %?60?%);overflow-x:hidden}.message-text[data-v-415574f2]{font-size:%?24?%;font-weight:400;font-stretch:normal;line-height:%?40?%;color:#333;width:50%}.fontblack[data-v-415574f2]{color:#999}.img2[data-v-415574f2]{width:.81rem;height:.8rem;float:right}.addressshow2[data-v-415574f2]{height:auto;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;width:75%;-webkit-line-clamp:2;-webkit-box-orient:vertical;white-space:normal;word-wrap:break-word;word-break:break-all;font-size:1rem}.addressshow1[data-v-415574f2]{height:auto;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;width:75%;-webkit-line-clamp:1;-webkit-box-orient:vertical;white-space:normal;word-wrap:break-word;word-break:break-all;font-size:1rem}.orderTitle[data-v-415574f2]{font-size:1rem;color:#333;height:auto;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;white-space:normal;word-wrap:break-word;word-break:break-all;height:2.5rem}.orderDetail[data-v-415574f2]{font-size:.8rem;color:#666;text-align:left}.border-ceter[data-v-415574f2]{width:92%;padding-left:15px;padding-right:15px}.pay-button[data-v-415574f2]{width:88%;height:2.6rem;position:relative;background-color:red;color:#fff;margin-left:6%}ul li[data-v-415574f2]{list-style:none;font-size:1rem}ul[data-v-415574f2]{padding-left:%?30?%}.track-list[data-v-415574f2]{position:relative}.track-list li[data-v-415574f2]{position:relative;padding:0 0 %?60?% %?40?%;border-left:1px solid #d9d9d9;color:#999}.track-list li.first[data-v-415574f2]{color:red;padding-top:0;width:100%;text-align:left;border-left:1px solid #d9d9d9}.track-list li .node-icon[data-v-415574f2]{position:absolute;left:-5.5px;border-radius:50%;width:%?20?%;height:%?20?%;top:4px;background-color:#999}.track-list li.first .node-icon[data-v-415574f2]{background-position:0 -72px;background-color:red;width:%?30?%;z-index:2;height:%?30?%;position:absolute;left:-9px;top:0;border-radius:50%}.track-list li .time[data-v-415574f2]{margin-right:20px;position:relative;top:4px;display:inline-block;vertical-align:middle;background-color:#fff;color:#999;width:100%;text-align:left;font-size:%?28?%}.track-list li .txt[data-v-415574f2]{position:relative;display:inline-block;vertical-align:top;color:#999;font-size:%?28?%}.track-list li.first .time[data-v-415574f2]{text-align:left;width:94%;color:red;font-size:%?32?%}.track-list li.first .txt[data-v-415574f2]{color:red;text-align:left;width:94%;font-size:%?32?%}.track-list li.finall[data-v-415574f2]{position:relative;padding:0 0 %?20?% %?40?%;line-height:18px;border-color:#fff;border-left:1px solid #fff;color:#999}.track-list li.finall .div-spilander[data-v-415574f2]{width:1px;position:absolute;position:absolute;left:-1.5px;height:.5rem;background-color:#d9d9d9}",""])},ac33:function(t,i,a){"use strict";a.r(i);var e=a("8244"),o=a("0aa6");for(var s in o)"default"!==s&&function(t){a.d(i,t,function(){return o[t]})}(s);a("def1");var l=a("2877"),r=Object(l["a"])(o["default"],e["a"],e["b"],!1,null,"415574f2",null);i["default"]=r.exports},def1:function(t,i,a){"use strict";var e=a("43ea"),o=a.n(e);o.a}}]);