(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/productPurchase"],{1756:function(e,t,n){"use strict";var a=n("2ae9"),r=n.n(a);r.a},"2ae9":function(e,t,n){},8485:function(e,t,n){"use strict";n.r(t);var a=n("f78e"),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=r.a},dfa8:function(e,t,n){"use strict";var a={"z-table":()=>Promise.all([n.e("common/vendor"),n.e("components/z-table/z-table")]).then(n.bind(null,"4fd8")),"uni-calendar":()=>Promise.all([n.e("common/vendor"),n.e("components/uni-calendar/uni-calendar")]).then(n.bind(null,"05e4"))},r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}))},e050:function(e,t,n){"use strict";n.r(t);var a=n("dfa8"),r=n("8485");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("1756");var u,c=n("f0c5"),l=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=l.exports},f78e:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("c74b")),r=o(n("df06"));function o(e){return e&&e.__esModule?e:{default:e}}var u,c=function(){Promise.all([n.e("common/vendor"),n.e("components/uni-calendar/uni-calendar")]).then(function(){return resolve(n("05e4"))}.bind(null,n)).catch(n.oe)},l=function(){Promise.all([n.e("common/vendor"),n.e("components/z-table/z-table")]).then(function(){return resolve(n("4fd8"))}.bind(null,n)).catch(n.oe)},d={components:{zTable:l,uniCalendar:c},props:{productId:{type:String,default:{}},stock:{type:Object,default:{}}},data:function(){return{start_date:r.default.getDay(0,!1),end_date:r.default.getDay(1,!1),info:{date:r.default.getDay(0,!0).split(" ")[0],lunar:!0,range:!0,insert:!1,selected:[]},purcharseList:[],purcharseList1:[],purcharseNotice:{num:0,money:0},alignColumns:[{title:"供应商",key:"name",width:"300"},{title:"实际进货数",key:"num",width:"200"},{title:"实际进货金额",key:"really_total_money",width:"200"}],alignColumns1:[{title:"操作人",key:"nickName",width:"300"},{title:"实际进货数",key:"num",width:"200"},{title:"实际进货金额",key:"really_total_money",width:"200"}]}},watch:{stock:function(e,t){e.objectId!=t.objectId&&this.getdetail()}},mounted:function(){u=this,u.getdetail()},methods:{open:function(){u.$refs.calendar.open()},confirm:function(e){console.log(e),0==e.range.data.length?u.start_date=e.fulldate:(u.start_date=e.range.data[0],u.end_date=e.range.data[e.range.data.length-1]),u.getdetail()},changeTime:function(e){u.start_date=e.detail.value,u.getdetail()},getdetail:function(){e.removeStorageSync("productPurchase"),u.purcharseNotice.num=0,u.purcharseNotice.money=0,u.purcharseList1=[],u.purcharseList=[];var t=a.default.Query("Bills");t.equalTo("userId","==",e.getStorageSync("uid")),t.equalTo("type","==",1),t.equalTo("extra_type","==",1),t.equalTo("createdAt",">=",u.start_date+" 00:00:00"),t.equalTo("createdAt","<=",u.start_date+" 23:59:59"),t.equalTo("goodsId","==",u.productId),u.stock&&u.stock.objectId&&t.equalTo("stock","==",u.stock.objectId),t.count().then((function(n){var a=n,r=[];if(0!=a)for(var o=0;o<Math.ceil(a/500);o++)u.stock&&u.stock.objectId&&t.equalTo("stock","==",u.stock.objectId),t.include("producer","opreater"),t.limit(500),t.skip(500*o),t.find().then((function(t){var n=!0,a=!1,o=void 0;try{for(var c,l=t[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var d=c.value;d.producer&&d.producer.objectId&&(u.purcharseNotice.num+=d.num,u.purcharseNotice.money+=d.really_total_money,d.name=d.producer.producer_name,d.nickName=d.opreater.nickName,r.push(d))}}catch(i){a=!0,o=i}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}e.setStorageSync("productPurchase",r),u.purcharseList=e.getStorageSync("productPurchase").reduce((function(e,t){var n=e.find((function(e){return e.producer.objectId===t.producer.objectId}));return n?(n.num+=t.num,n.really_total_money+=t.really_total_money):e.push(t),e}),[]),u.purcharseList1=e.getStorageSync("productPurchase").reduce((function(e,t){var n=e.find((function(e){return e.opreater.objectId===t.opreater.objectId}));return n?(n.num+=t.num,n.really_total_money+=t.really_total_money):e.push(t),e}),[])}))}))}}};t.default=d}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/productPurchase-create-component',
    {
        'components/productPurchase-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e050"))
        })
    },
    [['components/productPurchase-create-component']]
]);
