(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/staff/authAdd/authAdd"],{"05cb":function(e,r,t){"use strict";var n=t("bdc0"),a=t.n(n);a.a},"3a87":function(e,r,t){"use strict";(function(e){t("d510"),t("921b");n(t("66fd"));var r=n(t("fb87"));function n(e){return e&&e.__esModule?e:{default:e}}e(r.default)}).call(this,t("543d")["createPage"])},"6c47":function(e,r,t){"use strict";t.r(r);var n=t("c4f4"),a=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(r,e,function(){return n[e]})}(o);r["default"]=a.a},"871d":function(e,r,t){"use strict";var n,a=function(){var e=this,r=e.$createElement,t=(e._self._c,e.current.indexOf("2"));e.$mp.data=Object.assign({},{$root:{g0:t}})},o=[];t.d(r,"b",function(){return a}),t.d(r,"c",function(){return o}),t.d(r,"a",function(){return n})},bdc0:function(e,r,t){},c4f4:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=a(t("9546"));function a(e){return e&&e.__esModule?e:{default:e}}var o,u,c=function(){return t.e("components/uni-collapse/uni-collapse").then(t.bind(null,"b4ab"))},l=function(){return t.e("components/uni-collapse-item/uni-collapse-item").then(t.bind(null,"7c20"))},i={},d={components:{uniCollapse:c,uniCollapseItem:l},data:function(){return{manage:[{id:0,name:"产品管理"},{id:1,name:"员工管理"},{id:2,name:"仓库管理"},{id:3,name:"门店管理"},{id:4,name:"客户管理"},{id:5,name:"产品类别管理"},{id:6,name:"库存管理（出库、入库、调拨、盘点操作）"},{id:7,name:"采购（采购，采购退货操作）"},{id:8,name:"销售（销售，销售退货操作）"}],moneyAuth:[{id:0,name:"财务管理模块查看"}],analysisAuth:[{id:0,name:"分析模块查看"}],recode:[{id:0,name:"入库记录"},{id:1,name:"出库记录"},{id:2,name:"调拨记录"},{id:3,name:"盘点记录"}],others:[{id:0,name:"进价隐藏"},{id:1,name:"审核"},{id:2,name:"看板查看"}],stocks:[],current:[],analysisCurrent:[],moneyCurrent:[],recodecurrent:[],othercurrent:[],select_stocks:[]}},onLoad:function(){o=this,u=e.getStorageSync("uid")},onShow:function(){if(o.current=[],o.analysisCurrent=[],o.moneyCurrent=[],o.recodecurrent=[],o.othercurrent=[],o.select_stocks=[],e.getStorageSync("staffRights")){if(i=e.getStorageSync("staffRights"),i.current){var r=!0,t=!1,a=void 0;try{for(var c,l=i.current[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){var d=c.value,f=!0,s=!1,y=void 0;try{for(var h,v=o.manage[Symbol.iterator]();!(f=(h=v.next()).done);f=!0){var m=h.value;d==m.id&&(m.checked=!0,o.current.push(d))}}catch(se){s=!0,y=se}finally{try{f||null==v.return||v.return()}finally{if(s)throw y}}}}catch(se){t=!0,a=se}finally{try{r||null==l.return||l.return()}finally{if(t)throw a}}}if(i.recodecurrent){var b=!0,g=!1,k=void 0;try{for(var p,C=i.recodecurrent[Symbol.iterator]();!(b=(p=C.next()).done);b=!0){var S=p.value,x=!0,_=!1,w=void 0;try{for(var A,j=o.recode[Symbol.iterator]();!(x=(A=j.next()).done);x=!0){var O=A.value;S==O.id&&(O.checked=!0,o.recodecurrent.push(S))}}catch(se){_=!0,w=se}finally{try{x||null==j.return||j.return()}finally{if(_)throw w}}}}catch(se){g=!0,k=se}finally{try{b||null==C.return||C.return()}finally{if(g)throw k}}}if(i.othercurrent){var I=!0,M=!1,R=void 0;try{for(var $,q=i.othercurrent[Symbol.iterator]();!(I=($=q.next()).done);I=!0){var J=$.value,P=!0,T=!1,B=void 0;try{for(var E,L=o.others[Symbol.iterator]();!(P=(E=L.next()).done);P=!0){var N=E.value;J==N.id&&(N.checked=!0,o.othercurrent.push(J))}}catch(se){T=!0,B=se}finally{try{P||null==L.return||L.return()}finally{if(T)throw B}}}}catch(se){M=!0,R=se}finally{try{I||null==q.return||q.return()}finally{if(M)throw R}}}if(i.analysisCurrent){var Q=!0,z=!1,D=void 0;try{for(var F,G=i.analysisCurrent[Symbol.iterator]();!(Q=(F=G.next()).done);Q=!0){var H=F.value,K=!0,U=!1,V=void 0;try{for(var W,X=o.analysisAuth[Symbol.iterator]();!(K=(W=X.next()).done);K=!0){var Y=W.value;H==Y.id&&(Y.checked=!0,o.analysisCurrent.push(H))}}catch(se){U=!0,V=se}finally{try{K||null==X.return||X.return()}finally{if(U)throw V}}}}catch(se){z=!0,D=se}finally{try{Q||null==G.return||G.return()}finally{if(z)throw D}}}if(i.moneyCurrent){var Z=!0,ee=!1,re=void 0;try{for(var te,ne=i.moneyCurrent[Symbol.iterator]();!(Z=(te=ne.next()).done);Z=!0){var ae=te.value,oe=!0,ue=!1,ce=void 0;try{for(var le,ie=o.moneyAuth[Symbol.iterator]();!(oe=(le=ie.next()).done);oe=!0){var de=le.value;ae==de.id&&(de.checked=!0,o.moneyCurrent.push(ae))}}catch(se){ue=!0,ce=se}finally{try{oe||null==ie.return||ie.return()}finally{if(ue)throw ce}}}}catch(se){ee=!0,re=se}finally{try{Z||null==ne.return||ne.return()}finally{if(ee)throw re}}}i.current=o.current,i.recodecurrent=o.recodecurrent,i.othercurrent=o.othercurrent,i.analysisCurrent=o.analysisCurrent,i.moneyCurrent=o.moneyCurrent}var fe=n.default.Query("stocks");fe.order("-num"),fe.include("charge","shop","Ncharge"),fe.equalTo("parent","==",u),fe.equalTo("disabled","!=",!0),fe.limit(500),fe.find().then(function(e){var r=e,t=[],n=!0,a=!1,u=void 0;try{for(var c,l=r[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var d=c.value,f={};f.name=d.stock_name,f.objectId=d.objectId,i.select_stocks&&-1!=i.select_stocks.indexOf(d.objectId)&&(f.checked=!0),t.push(f)}}catch(se){a=!0,u=se}finally{try{n||null==l.return||l.return()}finally{if(a)throw u}}o.stocks=t})},methods:{confrim:function(){e.setStorageSync("staffRights",i),e.navigateBack({delta:1})},checkstockChange:function(e){o.select_stocks=e.detail.value,i.select_stocks=e.detail.value},checkboxChange:function(e){o.current=e.detail.value,i.current=e.detail.value},checkboxChangeAnalysis:function(e){o.analysisCurrent=e.detail.value,i.analysisCurrent=e.detail.value},checkboxChangeMoney:function(e){o.moneyCurrent=e.detail.value,i.moneyCurrent=e.detail.value},checkboxChange_record:function(e){o.recodecurrent=e.detail.value,i.recodecurrent=e.detail.value},checkboxChange_other:function(e){o.othercurrent=e.detail.value,i.othercurrent=e.detail.value}}};r.default=d}).call(this,t("543d")["default"])},fb87:function(e,r,t){"use strict";t.r(r);var n=t("871d"),a=t("6c47");for(var o in a)"default"!==o&&function(e){t.d(r,e,function(){return a[e]})}(o);t("05cb");var u,c=t("f0c5"),l=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);r["default"]=l.exports}},[["3a87","common/runtime","common/vendor"]]]);