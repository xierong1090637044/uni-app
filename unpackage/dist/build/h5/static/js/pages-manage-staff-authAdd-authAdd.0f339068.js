(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-staff-authAdd-authAdd"],{"0f7e":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'.uni-collapse[data-v-7cac7d33]{background-color:#fff;position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-collapse[data-v-7cac7d33]:after{position:absolute;z-index:10;right:0;bottom:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-collapse[data-v-7cac7d33]:before{position:absolute;z-index:10;right:0;top:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}',""])},"35fc":function(e,t,n){"use strict";n.r(t);var i=n("d5e2"),a=n.n(i);for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);t["default"]=a.a},"5a19":function(e,t,n){"use strict";var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("7514");var a,l,r=i(n("5d73")),c=i(n("9546")),o=i(n("b4ab")),s=i(n("7c20")),u={},d={components:{uniCollapse:o.default,uniCollapseItem:s.default},data:function(){return{manage:[{id:0,name:"产品管理"},{id:1,name:"员工管理"},{id:2,name:"仓库管理"},{id:3,name:"门店管理"},{id:4,name:"客户管理"},{id:5,name:"产品类别管理"},{id:6,name:"库存管理（出库、入库、调拨、盘点操作）"},{id:7,name:"采购（采购，采购退货操作）"},{id:8,name:"销售（销售，销售退货操作）"}],moneyAuth:[{id:0,name:"财务管理模块查看"}],analysisAuth:[{id:0,name:"分析模块查看"}],recode:[{id:0,name:"入库记录"},{id:1,name:"出库记录"},{id:2,name:"调拨记录"},{id:3,name:"盘点记录"}],others:[{id:0,name:"进价隐藏"},{id:1,name:"审核"},{id:2,name:"看板查看"}],stocks:[],current:[],analysisCurrent:[],moneyCurrent:[],recodecurrent:[],othercurrent:[],select_stocks:[]}},onLoad:function(){a=this,l=uni.getStorageSync("uid")},onShow:function(){if(a.current=[],a.analysisCurrent=[],a.moneyCurrent=[],a.recodecurrent=[],a.othercurrent=[],a.select_stocks=[],uni.getStorageSync("staffRights")){if(u=uni.getStorageSync("staffRights"),u.current){var e=!0,t=!1,n=void 0;try{for(var i,o=(0,r.default)(u.current);!(e=(i=o.next()).done);e=!0){var s=i.value,d=!0,f=!1,h=void 0;try{for(var v,p=(0,r.default)(a.manage);!(d=(v=p.next()).done);d=!0){var b=v.value;s==b.id&&(b.checked=!0,a.current.push(s))}}catch(fe){f=!0,h=fe}finally{try{d||null==p.return||p.return()}finally{if(f)throw h}}}}catch(fe){t=!0,n=fe}finally{try{e||null==o.return||o.return()}finally{if(t)throw n}}}if(u.recodecurrent){var y=!0,m=!1,x=void 0;try{for(var g,w=(0,r.default)(u.recodecurrent);!(y=(g=w.next()).done);y=!0){var k=g.value,_=!0,C=!1,S=void 0;try{for(var O,j=(0,r.default)(a.recode);!(_=(O=j.next()).done);_=!0){var z=O.value;k==z.id&&(z.checked=!0,a.recodecurrent.push(k))}}catch(fe){C=!0,S=fe}finally{try{_||null==j.return||j.return()}finally{if(C)throw S}}}}catch(fe){m=!0,x=fe}finally{try{y||null==w.return||w.return()}finally{if(m)throw x}}}if(u.othercurrent){var A=!0,E=!1,M=void 0;try{for(var $,I=(0,r.default)(u.othercurrent);!(A=($=I.next()).done);A=!0){var F=$.value,Y=!0,B=!1,R=void 0;try{for(var P,U=(0,r.default)(a.others);!(Y=(P=U.next()).done);Y=!0){var q=P.value;F==q.id&&(q.checked=!0,a.othercurrent.push(F))}}catch(fe){B=!0,R=fe}finally{try{Y||null==U.return||U.return()}finally{if(B)throw R}}}}catch(fe){E=!0,M=fe}finally{try{A||null==I.return||I.return()}finally{if(E)throw M}}}if(u.analysisCurrent){var J=!0,N=!1,Q=void 0;try{for(var T,L=(0,r.default)(u.analysisCurrent);!(J=(T=L.next()).done);J=!0){var D=T.value,G=!0,H=!1,K=void 0;try{for(var V,W=(0,r.default)(a.analysisAuth);!(G=(V=W.next()).done);G=!0){var X=V.value;D==X.id&&(X.checked=!0,a.analysisCurrent.push(D))}}catch(fe){H=!0,K=fe}finally{try{G||null==W.return||W.return()}finally{if(H)throw K}}}}catch(fe){N=!0,Q=fe}finally{try{J||null==L.return||L.return()}finally{if(N)throw Q}}}if(u.moneyCurrent){var Z=!0,ee=!1,te=void 0;try{for(var ne,ie=(0,r.default)(u.moneyCurrent);!(Z=(ne=ie.next()).done);Z=!0){var ae=ne.value,le=!0,re=!1,ce=void 0;try{for(var oe,se=(0,r.default)(a.moneyAuth);!(le=(oe=se.next()).done);le=!0){var ue=oe.value;ae==ue.id&&(ue.checked=!0,a.moneyCurrent.push(ae))}}catch(fe){re=!0,ce=fe}finally{try{le||null==se.return||se.return()}finally{if(re)throw ce}}}}catch(fe){ee=!0,te=fe}finally{try{Z||null==ie.return||ie.return()}finally{if(ee)throw te}}}u.current=a.current,u.recodecurrent=a.recodecurrent,u.othercurrent=a.othercurrent,u.analysisCurrent=a.analysisCurrent,u.moneyCurrent=a.moneyCurrent}var de=c.default.Query("stocks");de.order("-num"),de.include("charge","shop","Ncharge"),de.equalTo("parent","==",l),de.equalTo("disabled","!=",!0),de.limit(500),de.find().then(function(e){var t=e,n=[],i=!0,l=!1,c=void 0;try{for(var o,s=(0,r.default)(t);!(i=(o=s.next()).done);i=!0){var d=o.value,f={};f.name=d.stock_name,f.objectId=d.objectId,u.select_stocks&&-1!=u.select_stocks.indexOf(d.objectId)&&(f.checked=!0),n.push(f)}}catch(fe){l=!0,c=fe}finally{try{i||null==s.return||s.return()}finally{if(l)throw c}}a.stocks=n})},methods:{confrim:function(){uni.setStorageSync("staffRights",u),uni.navigateBack({delta:1})},checkstockChange:function(e){a.select_stocks=e.detail.value,u.select_stocks=e.detail.value},checkboxChange:function(e){a.current=e.detail.value,u.current=e.detail.value},checkboxChangeAnalysis:function(e){a.analysisCurrent=e.detail.value,u.analysisCurrent=e.detail.value},checkboxChangeMoney:function(e){a.moneyCurrent=e.detail.value,u.moneyCurrent=e.detail.value},checkboxChange_record:function(e){a.recodecurrent=e.detail.value,u.recodecurrent=e.detail.value},checkboxChange_other:function(e){a.othercurrent=e.detail.value,u.othercurrent=e.detail.value}}};t.default=d},"5b26":function(e,t,n){var i=n("de3d");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("228339ca",i,!0,{sourceMap:!1,shadowMode:!1})},"62a8":function(e,t,n){"use strict";var i=n("8fa8"),a=n.n(i);a.a},"6c47":function(e,t,n){"use strict";n.r(t);var i=n("5a19"),a=n.n(i);for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);t["default"]=a.a},"72dd":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-collapse"},[e._t("default")],2)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"7c20":function(e,t,n){"use strict";n.r(t);var i=n("ce70"),a=n("f9c7");for(var l in a)"default"!==l&&function(e){n.d(t,e,function(){return a[e]})}(l);n("f12f");var r=n("f0c5"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"07b66df4",null);t["default"]=c.exports},"8fa8":function(e,t,n){var i=n("9702");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("5decec3e",i,!0,{sourceMap:!1,shadowMode:!1})},9702:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".rights_item[data-v-03f2c5c9]{padding:%?6?% 0}",""])},a4db:function(e,t,n){var i=n("0f7e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("74167560",i,!0,{sourceMap:!1,shadowMode:!1})},ab30:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"确定"},on:{"click-right":function(t){arguments[0]=t=e.$handleEvent(t),e.confrim.apply(void 0,arguments)}}}),n("v-uni-scroll-view",{staticStyle:{height:"calc(100vh - 80rpx)"},attrs:{"scroll-y":"true"}},[n("uni-collapse",{staticStyle:{"margin-top":"0rpx"}},[n("uni-collapse-item",{attrs:{"show-animation":!0,title:"库存管理模块权限",open:!0}},[n("v-uni-view",{staticStyle:{padding:"30rpx"}},[n("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}}},e._l(e.manage,function(t,i){return n("v-uni-view",{key:""+i,staticClass:"rights_item"},[n("v-uni-view",{staticClass:"display_flex"},[n("v-uni-checkbox",{staticClass:"round blue",staticStyle:{transform:"scale(0.9)"},attrs:{value:""+t.id,checked:t.checked}}),n("v-uni-text",{staticStyle:{"margin-left":"20rpx"}},[e._v(e._s(t.name))])],1),3==t.id?n("v-uni-view",{staticStyle:{"padding-left":"80rpx"}},[-1!=e.current.indexOf("2")?n("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkstockChange.apply(void 0,arguments)}}},e._l(e.stocks,function(t,i){return n("v-uni-view",{key:i,staticClass:"display_flex rights_item"},[n("v-uni-checkbox",{staticClass:"round blue",staticStyle:{transform:"scale(0.9)"},attrs:{value:t.objectId,checked:t.checked}}),n("v-uni-text",{staticStyle:{"margin-left":"20rpx","font-size":"28rpx",color:"#333"}},[e._v(e._s(t.name))])],1)}),1):e._e()],1):e._e()],1)}),1)],1)],1)],1),n("v-uni-view",[n("uni-collapse",[n("uni-collapse-item",{attrs:{"show-animation":!0,title:"财务模块权限"}},[n("v-uni-view",{staticStyle:{padding:"30rpx"}},[n("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChangeMoney.apply(void 0,arguments)}}},e._l(e.moneyAuth,function(t,i){return n("v-uni-view",{key:""+i,staticClass:"display_flex rights_item"},[n("v-uni-checkbox",{staticClass:"round blue",staticStyle:{transform:"scale(0.9)"},attrs:{value:""+t.id,checked:t.checked}}),n("v-uni-text",{staticStyle:{"margin-left":"20rpx","font-size":"28rpx",color:"#333"}},[e._v(e._s(t.name))])],1)}),1)],1)],1)],1)],1),n("v-uni-view",[n("uni-collapse",[n("uni-collapse-item",{attrs:{"show-animation":!0,title:"记录模块权限"}},[n("v-uni-view",{staticStyle:{padding:"30rpx"}},[n("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange_record.apply(void 0,arguments)}}},e._l(e.recode,function(t,i){return n("v-uni-view",{key:""+i,staticClass:"display_flex rights_item"},[n("v-uni-checkbox",{staticClass:"round blue",staticStyle:{transform:"scale(0.9)"},attrs:{value:""+t.id,checked:t.checked}}),n("v-uni-text",{staticStyle:{"margin-left":"20rpx","font-size":"28rpx",color:"#333"}},[e._v(e._s(t.name))])],1)}),1)],1)],1)],1)],1),n("v-uni-view",[n("uni-collapse",[n("uni-collapse-item",{attrs:{"show-animation":!0,title:"分析模块权限"}},[n("v-uni-view",{staticStyle:{padding:"30rpx"}},[n("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChangeAnalysis.apply(void 0,arguments)}}},e._l(e.analysisAuth,function(t,i){return n("v-uni-view",{key:""+i,staticClass:"display_flex rights_item"},[n("v-uni-checkbox",{staticClass:"round blue",staticStyle:{transform:"scale(0.9)"},attrs:{value:""+t.id,checked:t.checked}}),n("v-uni-text",{staticStyle:{"margin-left":"20rpx","font-size":"28rpx",color:"#333"}},[e._v(e._s(t.name))])],1)}),1)],1)],1)],1)],1),n("v-uni-view",[n("uni-collapse",[n("uni-collapse-item",{attrs:{"show-animation":!0,title:"其他权限"}},[n("v-uni-view",{staticStyle:{padding:"30rpx"}},[n("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange_other.apply(void 0,arguments)}}},e._l(e.others,function(t,i){return n("v-uni-view",{key:""+i,staticClass:"display_flex rights_item"},[n("v-uni-checkbox",{staticClass:"round blue",staticStyle:{transform:"scale(0.9)"},attrs:{value:""+t.id,checked:t.checked}}),n("v-uni-text",{staticStyle:{"margin-left":"20rpx"}},[e._v(e._s(t.name))])],1)}),1)],1)],1)],1)],1)],1)],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},b4ab:function(e,t,n){"use strict";n.r(t);var i=n("72dd"),a=n("35fc");for(var l in a)"default"!==l&&function(e){n.d(t,e,function(){return a[e]})}(l);n("d6b8");var r=n("f0c5"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"7cac7d33",null);t["default"]=c.exports},ce70:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{class:["uni-collapse-cell",{"uni-collapse-cell--disabled":e.disabled,"uni-collapse-cell--open":e.isOpen}],attrs:{"hover-class":e.disabled?"":"uni-collapse-cell--hover"}},[n("v-uni-view",{staticClass:"uni-collapse-cell__title",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e.thumb?n("v-uni-view",{staticClass:"uni-collapse-cell__title-extra"},[n("v-uni-image",{staticClass:"uni-collapse-cell__title-img",attrs:{src:e.thumb}})],1):e._e(),n("v-uni-view",{staticClass:"uni-collapse-cell__title-inner"},[n("v-uni-view",{staticClass:"uni-collapse-cell__title-text"},[e._v(e._s(e.title))])],1),n("v-uni-view",{staticClass:"uni-collapse-cell__title-arrow",class:{"uni-active":e.isOpen,"uni-collapse-cell--animation":!0===e.showAnimation}},[n("uni-icon",{attrs:{color:"#bbb",size:"20",type:"arrowdown"}})],1)],1),n("v-uni-view",{staticClass:"uni-collapse-cell__content",class:{"uni-collapse-cell--animation":!0===e.showAnimation},style:{height:e.isOpen?"auto":"0px"}},[n("v-uni-view",{attrs:{id:e.elId}},[e._t("default")],2)],1)],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},d5e2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ac6a");var i={name:"UniCollapse",props:{accordion:{type:Boolean,default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var e=[];this.childrens.forEach(function(t,n){t.isOpen&&e.push(t.nameSync)}),this.$emit("change",e)}}};t.default=i},d6b8:function(e,t,n){"use strict";var i=n("a4db"),a=n.n(i);a.a},de3d:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'.uni-collapse-cell[data-v-07b66df4]{position:relative}.uni-collapse-cell--hover[data-v-07b66df4]{background-color:#f1f1f1}.uni-collapse-cell--open[data-v-07b66df4]{background-color:#f1f1f1}.uni-collapse-cell--disabled[data-v-07b66df4]{opacity:.3}.uni-collapse-cell--animation[data-v-07b66df4]{-webkit-transition:all .3s;transition:all .3s}.uni-collapse-cell[data-v-07b66df4]:after{position:absolute;z-index:3;right:0;bottom:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.uni-collapse-cell__title[data-v-07b66df4]{padding:%?12?% %?30?%;width:100%;box-sizing:border-box;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-collapse-cell__title-extra[data-v-07b66df4]{margin-right:%?18?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-collapse-cell__title-img[data-v-07b66df4]{height:%?52?%;width:%?52?%}.uni-collapse-cell__title-arrow[data-v-07b66df4]{width:20px;height:20px;-webkit-transform:rotate(0);transform:rotate(0);-webkit-transform-origin:center center;transform-origin:center center}.uni-collapse-cell__title-arrow.uni-active[data-v-07b66df4]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.uni-collapse-cell__title-inner[data-v-07b66df4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-collapse-cell__title-text[data-v-07b66df4]{font-size:%?24?%;text-overflow:ellipsis;white-space:nowrap;color:inherit;line-height:1.5;overflow:hidden}.uni-collapse-cell__content[data-v-07b66df4]{position:relative;width:100%;overflow:hidden;background:#fff}.uni-collapse-cell__content uni-view[data-v-07b66df4]{font-size:%?28?%}',""])},efe7:function(e,t,n){"use strict";var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ac6a"),n("6b54"),n("c5f6");var a=i(n("3628")),l={name:"UniCollapseItem",components:{uniIcon:a.default},props:{title:{type:String,default:""},name:{type:[Number,String],default:0},disabled:{type:Boolean,default:!1},showAnimation:{type:Boolean,default:!1},open:{type:Boolean,default:!1},thumb:{type:String,default:""}},data:function(){var e=this.__call_hook?"uni_collapse_item":"Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{isOpen:!1,height:"auto",elId:e}},watch:{open:function(e){this.isOpen=e}},inject:["collapse"],created:function(){if(this.isOpen=this.open,this.nameSync=this.name?this.name:this.collapse.childrens.length,this.collapse.childrens.push(this),this.collapse.accordion&&this.isOpen){var e=this.collapse.childrens[this.collapse.childrens.length-2];e&&(this.collapse.childrens[this.collapse.childrens.length-2].isOpen=!1)}},mounted:function(){this.getSize()},methods:{getSize:function(){var e=this;this.showAnimation&&uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function(t){e.height=t[0].height+"px"})},onClick:function(){var e=this;this.disabled||(this.collapse.accordion&&this.collapse.childrens.forEach(function(t){t!==e&&(t.isOpen=!1)}),this.isOpen=!this.isOpen,this.collapse.onChange&&this.collapse.onChange())}}};t.default=l},f12f:function(e,t,n){"use strict";var i=n("5b26"),a=n.n(i);a.a},f9c7:function(e,t,n){"use strict";n.r(t);var i=n("efe7"),a=n.n(i);for(var l in i)"default"!==l&&function(e){n.d(t,e,function(){return i[e]})}(l);t["default"]=a.a},fb87:function(e,t,n){"use strict";n.r(t);var i=n("ab30"),a=n("6c47");for(var l in a)"default"!==l&&function(e){n.d(t,e,function(){return a[e]})}(l);n("62a8");var r=n("f0c5"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"03f2c5c9",null);t["default"]=c.exports}}]);