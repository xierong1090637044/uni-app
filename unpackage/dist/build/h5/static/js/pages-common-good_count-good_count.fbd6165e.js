(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-good_count-good_count"],{"0d47":function(t,e,n){var i=n("9828");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("356c1a6e",i,!0,{sourceMap:!1,shadowMode:!1})},"203c":function(t,e,n){"use strict";n.r(e);var i=n("6103"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"3f9f":function(t,e,n){"use strict";n.r(e);var i=n("514d"),o=n("203c");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("8b79");var r=n("2877"),d=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"d92d3244",null);e["default"]=d.exports},"514d":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"确定"},on:{"click-right":function(e){e=t.$handleEvent(e),t.confrim_this(e)}}}),n("v-uni-view",{staticClass:"page"},t._l(t.products,function(e,i){return n("v-uni-view",{key:i,staticClass:"margin-b-10"},[n("unicard",{attrs:{title:"品名："+e.goodsName,extra:"当前库存："+e.reserve}},[n("v-uni-view",[n("v-uni-view",{staticClass:"margin-t-5"},[t._v("盘点后库存："),n("uninumberbox",{attrs:{min:0},on:{change:function(e){e=t.$handleEvent(e),t.handleNumChange(e,i)}}})],1),n("v-uni-view",{staticClass:"bottom_del"},[n("v-uni-view",{staticClass:"del",on:{click:function(e){e=t.$handleEvent(e),t.handleDel(i)}}},[n("fa-icon",{attrs:{type:"close",size:"15",color:"#fff"}}),t._v("删除")],1)],1)],1)],1)],1)}),1)],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},6103:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("c5f6"),n("7514");var o,a=i(n("872f")),r=i(n("8fad")),d=i(n("0914")),u=i(n("b92d")),c=i(n("5753")),l={components:{unicard:a.default,faIcon:d.default,uninumberbox:r.default,uniNavBar:u.default,uniIcon:c.default},data:function(){return{products:null}},onLoad:function(t){var e=this;if(o=uni.getStorageSync("uid"),t.id){var n=Bmob.Query("Goods");"false"==t.type?n.equalTo("objectId","==",t.id):n.equalTo("productCode","==",t.id),n.equalTo("userId","==",o),n.find().then(function(t){console.log(t),t[0].num=1,t[0].total_money=1*t[0].retailPrice,t[0].modify_retailPrice=t[0].retailPrice,e.products=t})}else this.products=uni.getStorageSync("products")},onUnload:function(){uni.removeStorageSync("products")},methods:{confrim_this:function(){uni.navigateTo({url:"/pages/common/good_count/count_detail/count_detail"})},handleNumChange:function(t,e){this.products[e].num=t||0,this.products[e].total_money=t*Number(this.products[e].modify_retailPrice),uni.setStorageSync("products",this.products)},handleDel:function(t){console.log(t),1==this.products.length?uni.showToast({title:"最少选择一个产品",icon:"none"}):(this.products.splice(t,1),uni.setStorageSync("products",this.products))},getrealprice:function(t,e){this.products[e].modify_retailPrice=t.target.value,this.products[e].total_money=this.products[e].num*Number(t.target.value),uni.setStorageSync("products",this.products)}}};e.default=l},"8b79":function(t,e,n){"use strict";var i=n("0d47"),o=n.n(i);o.a},9828:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".page[data-v-d92d3244]{font-size:%?28?%;height:calc(100vh - %?88?%);overflow:scroll}.margin-b-10[data-v-d92d3244]{margin-top:%?20?%}.margin-t-5[data-v-d92d3244]{margin:%?10?% 0}.input_withlabel[data-v-d92d3244]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:%?10?% 0}.bottom_del[data-v-d92d3244]{text-align:right}.del[data-v-d92d3244]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#aa2116;color:#fff;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:%?4?% %?12?%;border-radius:%?8?%}.input_label[data-v-d92d3244]{border:%?1?% solid#ddd;border-radius:%?8?%;padding:0 %?6?%;width:%?140?%;color:#aa2116}",""])}}]);