(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-staff-authAdd-authAdd"],{"05c3":function(e,t,n){var i=n("9160");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("6c334fc4",i,!0,{sourceMap:!1,shadowMode:!1})},"0919":function(e,t,n){"use strict";var i={"uni-nav-bar":n("96bd").default,"uni-collapse":n("b4ab").default,"uni-collapse-item":n("7c20").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"确定"},on:{"click-right":function(t){arguments[0]=t=e.$handleEvent(t),e.confrim.apply(void 0,arguments)}}}),n("v-uni-scroll-view",{staticStyle:{height:"calc(100vh - 80rpx)"},attrs:{"scroll-y":"true"}},[n("uni-collapse",{staticStyle:{"margin-top":"0rpx"}},[n("uni-collapse-item",{attrs:{"show-animation":!0,title:"库存管理模块权限",open:!0}},[n("v-uni-view",{staticStyle:{padding:"30rpx"}},[n("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}}},e._l(e.manage,(function(t,i){return n("v-uni-view",{key:""+i,staticClass:"rights_item"},[n("v-uni-view",{staticStyle:{display:"flex"}},[n("v-uni-checkbox",{staticClass:"round blue",staticStyle:{transform:"scale(0.9)"},attrs:{value:""+t.id,checked:t.checked}}),n("v-uni-text",{staticStyle:{"margin-left":"20rpx",width:"280rpx"}},[e._v(e._s(t.name))])],1),2==t.id?n("v-uni-view",{staticStyle:{"padding-left":"80rpx"}},[t.notice?n("v-uni-view",{staticStyle:{"font-size":"20rpx",color:"#999"}},[n("v-uni-text",{staticStyle:{color:"#f30"}},[e._v("注意：")]),e._v(e._s(t.notice))],1):e._e(),-1!=e.current.indexOf("2")?n("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkstockChange.apply(void 0,arguments)}}},e._l(e.stocks,(function(t,i){return n("v-uni-view",{key:i,staticClass:"display_flex rights_item"},[n("v-uni-checkbox",{staticClass:"round blue",staticStyle:{transform:"scale(0.9)"},attrs:{value:t.objectId,checked:t.checked}}),n("v-uni-text",{staticStyle:{"margin-left":"20rpx","font-size":"28rpx",color:"#333"}},[e._v(e._s(t.name))])],1)})),1):e._e()],1):e._e()],1)})),1)],1)],1)],1),n("v-uni-view",[n("uni-collapse",[n("uni-collapse-item",{attrs:{"show-animation":!0,title:"财务模块权限"}},[n("v-uni-view",{staticStyle:{padding:"30rpx"}},[n("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChangeMoney.apply(void 0,arguments)}}},e._l(e.moneyAuth,(function(t,i){return n("v-uni-view",{key:""+i,staticClass:"display_flex rights_item"},[n("v-uni-checkbox",{staticClass:"round blue",staticStyle:{transform:"scale(0.9)"},attrs:{value:""+t.id,checked:t.checked}}),n("v-uni-text",{staticStyle:{"margin-left":"20rpx","font-size":"28rpx",color:"#333"}},[e._v(e._s(t.name))])],1)})),1)],1)],1)],1)],1),n("v-uni-view",[n("uni-collapse",[n("uni-collapse-item",{attrs:{"show-animation":!0,title:"记录模块权限"}},[n("v-uni-view",{staticStyle:{padding:"30rpx"}},[n("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange_record.apply(void 0,arguments)}}},e._l(e.recode,(function(t,i){return n("v-uni-view",{key:""+i,staticClass:"display_flex rights_item"},[n("v-uni-checkbox",{staticClass:"round blue",staticStyle:{transform:"scale(0.9)"},attrs:{value:""+t.id,checked:t.checked}}),n("v-uni-text",{staticStyle:{"margin-left":"20rpx","font-size":"28rpx",color:"#333"}},[e._v(e._s(t.name))])],1)})),1)],1)],1)],1)],1),n("v-uni-view",[n("uni-collapse",[n("uni-collapse-item",{attrs:{"show-animation":!0,title:"分析模块权限"}},[n("v-uni-view",{staticStyle:{padding:"30rpx"}},[n("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChangeAnalysis.apply(void 0,arguments)}}},e._l(e.analysisAuth,(function(t,i){return n("v-uni-view",{key:""+i,staticClass:"display_flex rights_item"},[n("v-uni-checkbox",{staticClass:"round blue",staticStyle:{transform:"scale(0.9)"},attrs:{value:""+t.id,checked:t.checked}}),n("v-uni-text",{staticStyle:{"margin-left":"20rpx","font-size":"28rpx",color:"#333"}},[e._v(e._s(t.name))])],1)})),1)],1)],1)],1)],1),n("v-uni-view",[n("uni-collapse",[n("uni-collapse-item",{attrs:{"show-animation":!0,title:"其他权限"}},[n("v-uni-view",{staticStyle:{padding:"30rpx"}},[n("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange_other.apply(void 0,arguments)}}},e._l(e.others,(function(t,i){return n("v-uni-view",{key:""+i,staticClass:"display_flex rights_item"},[n("v-uni-checkbox",{staticClass:"round blue",staticStyle:{transform:"scale(0.9)"},attrs:{value:""+t.id,checked:t.checked}}),n("v-uni-text",{staticStyle:{"margin-left":"20rpx"}},[e._v(e._s(t.name))])],1)})),1)],1)],1)],1)],1)],1)],1)},c=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}))},1961:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'.uni-collapse[data-v-7cac7d33]{background-color:#fff;position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-collapse[data-v-7cac7d33]:after{position:absolute;z-index:10;right:0;bottom:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-collapse[data-v-7cac7d33]:before{position:absolute;z-index:10;right:0;top:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}',""]),e.exports=t},"35fc":function(e,t,n){"use strict";n.r(t);var i=n("db7f"),a=n.n(i);for(var c in i)"default"!==c&&function(e){n.d(t,e,(function(){return i[e]}))}(c);t["default"]=a.a},"54f8":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");var i=n("dde1");function a(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(i["a"])(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c,l=!0,o=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return l=e.done,e},e:function(e){o=!0,c=e},f:function(){try{l||null==a["return"]||a["return"]()}finally{if(o)throw c}}}}},"6c479":function(e,t,n){"use strict";n.r(t);var i=n("a2b3"),a=n.n(i);for(var c in i)"default"!==c&&function(e){n.d(t,e,(function(){return i[e]}))}(c);t["default"]=a.a},"70ae":function(e,t,n){var i=n("d0d7");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("0e00e705",i,!0,{sourceMap:!1,shadowMode:!1})},"72dd":function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-collapse"},[e._t("default")],2)},c=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}))},"7c20":function(e,t,n){"use strict";n.r(t);var i=n("ce70"),a=n("f9c7");for(var c in a)"default"!==c&&function(e){n.d(t,e,(function(){return a[e]}))}(c);n("f12f");var l,o=n("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"07b66df4",null,!1,i["a"],l);t["default"]=r.exports},9160:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".rights_item[data-v-66e61c2a]{padding:%?6?% 0}",""]),e.exports=t},a04f:function(e,t,n){"use strict";var i=n("ee27");n("4160"),n("a9e3"),n("d3b7"),n("ac1f"),n("25f0"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("3628")),c={name:"UniCollapseItem",components:{uniIcon:a.default},props:{title:{type:String,default:""},name:{type:[Number,String],default:0},disabled:{type:Boolean,default:!1},showAnimation:{type:Boolean,default:!1},open:{type:Boolean,default:!1},thumb:{type:String,default:""}},data:function(){var e=this.__call_hook?"uni_collapse_item":"Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{isOpen:!1,height:"auto",elId:e}},watch:{open:function(e){this.isOpen=e}},inject:["collapse"],created:function(){if(this.isOpen=this.open,this.nameSync=this.name?this.name:this.collapse.childrens.length,this.collapse.childrens.push(this),this.collapse.accordion&&this.isOpen){var e=this.collapse.childrens[this.collapse.childrens.length-2];e&&(this.collapse.childrens[this.collapse.childrens.length-2].isOpen=!1)}},mounted:function(){this.getSize()},methods:{getSize:function(){var e=this;this.showAnimation&&uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(t){e.height=t[0].height+"px"}))},onClick:function(){var e=this;this.disabled||(this.collapse.accordion&&this.collapse.childrens.forEach((function(t){t!==e&&(t.isOpen=!1)})),this.isOpen=!this.isOpen,this.collapse.onChange&&this.collapse.onChange())}}};t.default=c},a2b3:function(e,t,n){"use strict";(function(e){var i=n("ee27");n("7db0"),n("c975"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,c,l,o=i(n("54f8")),r=i(n("9546")),s=i(n("b4ab")),u=i(n("7c20")),d={},f={components:{uniCollapse:s.default,uniCollapseItem:u.default},data:function(){return{manage:[{id:0,name:"产品管理"},{id:1,name:"员工管理"},{id:2,name:"店仓管理",notice:"勾选了下面的仓库，子账户将会自动加载勾选仓库里的产品，如不勾选，则列表为空"},{id:3,name:"客户管理"},{id:4,name:"供货商管理"},{id:5,name:"产品类别管理"},{id:6,name:"库存管理（出库、入库、调拨、盘点操作）"},{id:7,name:"采购（采购，采购退货操作）"},{id:8,name:"销售（销售，销售退货操作）"}],moneyAuth:[{id:0,name:"财务管理模块查看"}],analysisAuth:[{id:0,name:"分析模块查看"}],recode:[{id:0,name:"入库记录"},{id:1,name:"出库记录"},{id:2,name:"调拨记录"},{id:3,name:"盘点记录"},{id:4,name:"销售订单"},{id:5,name:"销售单"},{id:6,name:"销售退货单"},{id:7,name:"采购订单"},{id:8,name:"采购单"},{id:9,name:"采购退货单"}],others:[{id:0,name:"进价隐藏"},{id:1,name:"审核"},{id:2,name:"看板查看"}],stocks:[],current:[],analysisCurrent:[],moneyCurrent:[],recodecurrent:[],othercurrent:[],select_stocks:[]}},onLoad:function(){a=this,l=uni.getStorageSync("staff"),c=uni.getStorageSync("uid")},onShow:function(){if(a.current=[],a.analysisCurrent=[],a.moneyCurrent=[],a.recodecurrent=[],a.othercurrent=[],a.select_stocks=[],uni.getStorageSync("staffRights")){if(d=uni.getStorageSync("staffRights"),d.current){var e,t=(0,o.default)(d.current);try{for(t.s();!(e=t.n()).done;){var n,i=e.value,l=(0,o.default)(a.manage);try{for(l.s();!(n=l.n()).done;){var s=n.value;i==s.id&&(s.checked=!0,a.current.push(i))}}catch(Y){l.e(Y)}finally{l.f()}}}catch(Y){t.e(Y)}finally{t.f()}}if(d.recodecurrent){var u,f=(0,o.default)(d.recodecurrent);try{for(f.s();!(u=f.n()).done;){var h,v=u.value,p=(0,o.default)(a.recode);try{for(p.s();!(h=p.n()).done;){var b=h.value;v==b.id&&(b.checked=!0,a.recodecurrent.push(v))}}catch(Y){p.e(Y)}finally{p.f()}}}catch(Y){f.e(Y)}finally{f.f()}}if(d.othercurrent){var m,y=(0,o.default)(d.othercurrent);try{for(y.s();!(m=y.n()).done;){var x,g=m.value,k=(0,o.default)(a.others);try{for(k.s();!(x=k.n()).done;){var w=x.value;g==w.id&&(w.checked=!0,a.othercurrent.push(g))}}catch(Y){k.e(Y)}finally{k.f()}}}catch(Y){y.e(Y)}finally{y.f()}}if(d.analysisCurrent){var _,C=(0,o.default)(d.analysisCurrent);try{for(C.s();!(_=C.n()).done;){var S,O=_.value,j=(0,o.default)(a.analysisAuth);try{for(j.s();!(S=j.n()).done;){var z=S.value;O==z.id&&(z.checked=!0,a.analysisCurrent.push(O))}}catch(Y){j.e(Y)}finally{j.f()}}}catch(Y){C.e(Y)}finally{C.f()}}if(d.moneyCurrent){var A,E=(0,o.default)(d.moneyCurrent);try{for(E.s();!(A=E.n()).done;){var I,M=A.value,$=(0,o.default)(a.moneyAuth);try{for($.s();!(I=$.n()).done;){var B=I.value;M==B.id&&(B.checked=!0,a.moneyCurrent.push(M))}}catch(Y){$.e(Y)}finally{$.f()}}}catch(Y){E.e(Y)}finally{E.f()}}d.current=a.current,d.recodecurrent=a.recodecurrent,d.othercurrent=a.othercurrent,d.analysisCurrent=a.analysisCurrent,d.moneyCurrent=a.moneyCurrent}var F=r.default.Query("stocks");F.order("-num"),F.include("charge","shop","Ncharge"),F.equalTo("parent","==",c),F.equalTo("disabled","!=",!0),F.limit(500),F.find().then((function(e){var t,n=e,i=[],c=(0,o.default)(n);try{for(c.s();!(t=c.n()).done;){var l=t.value,r={};r.name=l.stock_name,r.objectId=l.objectId,d.select_stocks&&-1!=d.select_stocks.indexOf(l.objectId)&&(r.checked=!0),i.push(r)}}catch(Y){c.e(Y)}finally{c.f()}a.stocks=i}))},methods:{confrim:function(){if(uni.setStorageSync("staffRights",d),l){var t=r.default.Query("_User");t.set("rights",d),t.set("stocks",d.select_stocks||[]),t.set("id",l.objectId),t.save().then((function(e){setTimeout((function(){uni.showToast({title:"修改成功"})}),1e3),uni.navigateBack({delta:3})})).catch((function(t){e.log(t)}))}else uni.navigateBack({delta:1})},checkstockChange:function(e){a.select_stocks=e.detail.value,d.select_stocks=e.detail.value},checkboxChange:function(e){a.current=e.detail.value,d.current=e.detail.value},checkboxChangeAnalysis:function(e){a.analysisCurrent=e.detail.value,d.analysisCurrent=e.detail.value},checkboxChangeMoney:function(e){a.moneyCurrent=e.detail.value,d.moneyCurrent=e.detail.value},checkboxChange_record:function(e){a.recodecurrent=e.detail.value,d.recodecurrent=e.detail.value},checkboxChange_other:function(e){a.othercurrent=e.detail.value,d.othercurrent=e.detail.value}}};t.default=f}).call(this,n("5a52")["default"])},b4ab:function(e,t,n){"use strict";n.r(t);var i=n("72dd"),a=n("35fc");for(var c in a)"default"!==c&&function(e){n.d(t,e,(function(){return a[e]}))}(c);n("d6b8");var l,o=n("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"7cac7d33",null,!1,i["a"],l);t["default"]=r.exports},ce70:function(e,t,n){"use strict";var i={"uni-icon":n("3628").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{class:["uni-collapse-cell",{"uni-collapse-cell--disabled":e.disabled,"uni-collapse-cell--open":e.isOpen}],attrs:{"hover-class":e.disabled?"":"uni-collapse-cell--hover"}},[n("v-uni-view",{staticClass:"uni-collapse-cell__title",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e.thumb?n("v-uni-view",{staticClass:"uni-collapse-cell__title-extra"},[n("v-uni-image",{staticClass:"uni-collapse-cell__title-img",attrs:{src:e.thumb}})],1):e._e(),n("v-uni-view",{staticClass:"uni-collapse-cell__title-inner"},[n("v-uni-view",{staticClass:"uni-collapse-cell__title-text"},[e._v(e._s(e.title))])],1),n("v-uni-view",{staticClass:"uni-collapse-cell__title-arrow",class:{"uni-active":e.isOpen,"uni-collapse-cell--animation":!0===e.showAnimation}},[n("uni-icon",{attrs:{color:"#bbb",size:"20",type:"arrowdown"}})],1)],1),n("v-uni-view",{staticClass:"uni-collapse-cell__content",class:{"uni-collapse-cell--animation":!0===e.showAnimation},style:{height:e.isOpen?"auto":"0px"}},[n("v-uni-view",{attrs:{id:e.elId}},[e._t("default")],2)],1)],1)},c=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}))},d0d7:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'.uni-collapse-cell[data-v-07b66df4]{position:relative}.uni-collapse-cell--hover[data-v-07b66df4]{background-color:#f1f1f1}.uni-collapse-cell--open[data-v-07b66df4]{background-color:#f1f1f1}.uni-collapse-cell--disabled[data-v-07b66df4]{opacity:.3}.uni-collapse-cell--animation[data-v-07b66df4]{-webkit-transition:all .3s;transition:all .3s}.uni-collapse-cell[data-v-07b66df4]:after{position:absolute;z-index:3;right:0;bottom:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-collapse-cell__title[data-v-07b66df4]{padding:%?12?% %?30?%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-collapse-cell__title-extra[data-v-07b66df4]{margin-right:%?18?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-collapse-cell__title-img[data-v-07b66df4]{height:%?52?%;width:%?52?%}.uni-collapse-cell__title-arrow[data-v-07b66df4]{width:20px;height:20px;-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:center center;transform-origin:center center}.uni-collapse-cell__title-arrow.uni-active[data-v-07b66df4]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.uni-collapse-cell__title-inner[data-v-07b66df4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-collapse-cell__title-text[data-v-07b66df4]{font-size:%?24?%;text-overflow:ellipsis;white-space:nowrap;color:inherit;line-height:1.5;overflow:hidden}.uni-collapse-cell__content[data-v-07b66df4]{position:relative;width:100%;overflow:hidden;background:#fff}.uni-collapse-cell__content uni-view[data-v-07b66df4]{font-size:%?28?%}',""]),e.exports=t},d6b8:function(e,t,n){"use strict";var i=n("e25f"),a=n.n(i);a.a},db7f:function(e,t,n){"use strict";n("4160"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"UniCollapse",props:{accordion:{type:Boolean,default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var e=[];this.childrens.forEach((function(t,n){t.isOpen&&e.push(t.nameSync)})),this.$emit("change",e)}}};t.default=i},e25f:function(e,t,n){var i=n("1961");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("2a095985",i,!0,{sourceMap:!1,shadowMode:!1})},e2a1:function(e,t,n){"use strict";var i=n("05c3"),a=n.n(i);a.a},f12f:function(e,t,n){"use strict";var i=n("70ae"),a=n.n(i);a.a},f9c7:function(e,t,n){"use strict";n.r(t);var i=n("a04f"),a=n.n(i);for(var c in i)"default"!==c&&function(e){n.d(t,e,(function(){return i[e]}))}(c);t["default"]=a.a},fb87:function(e,t,n){"use strict";n.r(t);var i=n("0919"),a=n("6c479");for(var c in a)"default"!==c&&function(e){n.d(t,e,(function(){return a[e]}))}(c);n("e2a1");var l,o=n("f0c5"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"66e61c2a",null,!1,i["a"],l);t["default"]=r.exports}}]);