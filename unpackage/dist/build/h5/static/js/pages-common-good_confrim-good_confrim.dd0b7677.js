(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-good_confrim-good_confrim"],{"0b56":function(e,t,n){"use strict";var i=n("bf83"),a=n.n(i);a.a},1116:function(e,t,n){"use strict";n.r(t);var i=n("6de8"),a=n("39e4");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("0b56");var r=n("2877"),u=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"bfe648fa",null);t["default"]=u.exports},"33d9":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".page[data-v-bfe648fa]{font-size:%?28?%;height:calc(100vh - %?88?%);overflow:scroll}.margin-b-10[data-v-bfe648fa]{margin-top:%?20?%}.input_withlabel[data-v-bfe648fa]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:%?10?% 0}.bottom_del[data-v-bfe648fa]{text-align:right}.del[data-v-bfe648fa]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#aa2116;color:#fff;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding:%?4?% %?12?%;border-radius:%?8?%}.input_label[data-v-bfe648fa]{border:%?1?% solid#ddd;border-radius:%?8?%;padding:0 %?6?%;width:%?140?%;color:#aa2116}",""])},"39e4":function(e,t,n){"use strict";n.r(t);var i=n("a548"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},"6de8":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"确定"},on:{"click-right":function(t){t=e.$handleEvent(t),e.confrim_this(t)}}}),n("v-uni-view",{staticClass:"page"},e._l(e.products,function(t,i){return n("v-uni-view",{key:i,staticClass:"margin-b-10"},[n("unicard",{attrs:{title:"品名："+t.goodsName,extra:"库存："+t.reserve}},[n("v-uni-view",[n("v-uni-view",[e._v("建议零售价格："+e._s(t.retailPrice)+"(元)")]),n("v-uni-view",{staticClass:"input_withlabel"},[n("v-uni-view",[e._v("实际价格(可修改)：")]),n("v-uni-view",[n("v-uni-input",{staticClass:"input_label",attrs:{placeholder:t.retailPrice,type:"digit"},on:{input:function(t){t=e.$handleEvent(t),e.getrealprice(t,i)}}})],1)],1),n("v-uni-view",{staticClass:"margin-t-5"},[e._v("入库量："),n("uninumberbox",{attrs:{min:1},on:{change:function(t){t=e.$handleEvent(t),e.handleNumChange(t,i)}}})],1),n("v-uni-view",{staticClass:"bottom_del"},[n("v-uni-view",{staticClass:"del",on:{click:function(t){t=e.$handleEvent(t),e.handleDel(i)}}},[n("fa-icon",{attrs:{type:"close",size:"15",color:"#fff"}}),e._v("删除")],1)],1)],1)],1)],1)}),1)],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},a548:function(e,t,n){"use strict";var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c5f6"),n("7514");var a,o=i(n("fe34")),r=i(n("6eba")),u=i(n("00eb")),c=i(n("e081")),l=i(n("c8e0")),s={components:{unicard:o.default,faIcon:u.default,uninumberbox:r.default,uniNavBar:c.default,uniIcon:l.default},data:function(){return{products:null}},onLoad:function(e){var t=this;if(a=uni.getStorageSync("uid"),e.id){var n=Bmob.Query("Goods");"false"==e.type?n.equalTo("objectId","==",e.id):n.equalTo("productCode","==",e.id),n.equalTo("userId","==",a),n.find().then(function(e){console.log(e),e[0].num=1,e[0].total_money=1*e[0].retailPrice,e[0].modify_retailPrice=e[0].retailPrice,t.products=e})}else this.products=uni.getStorageSync("products")},onUnload:function(){uni.removeStorageSync("products")},methods:{confrim_this:function(){uni.navigateTo({url:"/pages/common/good_confrim/good_enter/good_enter"})},handleNumChange:function(e,t){this.products[t].num=Number(e),this.products[t].total_money=Number(e)*Number(this.products[t].modify_retailPrice),uni.setStorageSync("products",this.products)},handleDel:function(e){console.log(e),1==this.products.length?uni.showToast({title:"最少选择一个产品",icon:"none"}):(this.products.splice(e,1),uni.setStorageSync("products",this.products))},getrealprice:function(e,t){this.products[t].modify_retailPrice=e.target.value,this.products[t].total_money=this.products[t].num*Number(e.target.value),uni.setStorageSync("products",this.products)}}};t.default=s},bf83:function(e,t,n){var i=n("33d9");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("d7893be8",i,!0,{sourceMap:!1,shadowMode:!1})}}]);