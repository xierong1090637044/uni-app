(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/productCount/productCount"],{"26b5":function(e,t,o){"use strict";(function(e){o("d510"),o("921b");a(o("66fd"));var t=a(o("ab66"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},"2d26":function(e,t,o){"use strict";o.r(t);var a=o("4f17"),n=o.n(a);for(var u in a)"default"!==u&&function(e){o.d(t,e,function(){return a[e]})}(u);t["default"]=n.a},"4f17":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n,u,d,s=l(o("9546")),r=l(o("7fd5"));function l(e){return e&&e.__esModule?e:{default:e}}var i={components:{},data:function(){return{starttime:"起始时间",endtime:"截止时间",dataList:[],pageSize:30,pageNum:1,is_selected:!1,searchGoodName:"",category:""}},onLoad:function(t){a=this,n=wx.getStorageSync("uid"),e.removeStorageSync("category");var o=new Date,s=o.getFullYear(),l=o.getMonth()+1<10?"0"+(o.getMonth()+1):o.getMonth()+1;a.starttime=s+"-"+l+"-01",a.endtime=r.default.getDay(0),u=s+"-"+l+"-01",d=r.default.getDay(0),a.getdetail()},onShow:function(){e.getStorageSync("category")&&(a.category=e.getStorageSync("category"),a.is_selected=!1,a.getdetail())},methods:{seachGoodName:function(e){a.is_selected=!0,a.searchGoodName=e.detail.value,a.getdetail()},selected_startday:function(e){a.starttime=e.detail.value,a.starttime==u&&a.endtime==d?a.is_selected=!1:a.is_selected=!0,a.getdetail()},selected_endday:function(e){a.endtime=e.detail.value,a.starttime==u&&a.endtime==d?a.is_selected=!1:a.is_selected=!0,a.getdetail()},getdetail:function(){e.showLoading({title:"加载中..."});var t=s.default.Query("Bills");t.equalTo("userId","==",n),t.equalTo("createdAt",">=",a.starttime+" 00:00:00"),t.equalTo("createdAt","<=",a.endtime+" 23:59:59"),t.equalTo("goodsName","==",{$regex:a.searchGoodName+".*"});var o=t.equalTo("type","==",1),u=t.equalTo("type","==",-1);t.or(o,u),t.include("goodsId"),t.statTo("sum","num,total_money"),t.statTo("groupby","goodsId,type"),t.statTo("order","-_sumnum"),t.find().then(function(t){e.hideLoading();var o=[],n=!0,u=!1,d=void 0;try{for(var s,r=t[Symbol.iterator]();!(n=(s=r.next()).done);n=!0){var l=s.value,i={};1==l.type?(i.type=1,i.goodsId=l.goodsId,i._sumNum1=l._sumNum.toFixed(1),i._sumTotal_money1=l._sumTotal_money.toFixed(1),i._sumNum2=0,i._sumTotal_money2=0):-1==l.type&&(i.type=-1,i.goodsId=l.goodsId,i._sumNum1=0,i._sumTotal_money1=0,i._sumNum2=l._sumNum.toFixed(1),i._sumTotal_money2=l._sumTotal_money.toFixed(1)),o.push(i)}}catch(c){u=!0,d=c}finally{try{n||null==r.return||r.return()}finally{if(u)throw d}}a.filterRoomNames(o)})},filterRoomNames:function(e){for(var t={},o=[],u=0;u<e.length;u++){var d=e[u];if(t[d.goodsId.objectId])for(var r=0;r<o.length;r++){var l=o[r];l.goodsId.objectId==d.goodsId.objectId&&(1==l.type?(l._sumNum2=d._sumNum2,l._sumTotal_money2=d._sumTotal_money2):-1==l.type&&(l._sumNum1=d._sumNum1,l._sumTotal_money1=d._sumTotal_money1))}else o.push(d),t[d.goodsId.objectId]=d}if(a.is_selected)a.dataList=o;else{var i=[],c=[],m=s.default.Query("Goods");m.equalTo("userId","==",n),m.equalTo("status","!=",-1),m.equalTo("order","!=",1),1==a.category.type?m.equalTo("goodsClass","==",a.category.objectId):m.equalTo("second_class","==",a.category.objectId),m.select("goodsName,reserve"),m.limit(500),m.find().then(function(e){var t=!0,a=!1,n=void 0;try{for(var u,d=e[Symbol.iterator]();!(t=(u=d.next()).done);t=!0){var s=u.value,r={};r.goodsId=s,r._sumNum2=0,r._sumTotal_money2=0,r._sumNum1=0,r._sumTotal_money1=0,c.push(r),i.push(s.objectId)}}catch(f){a=!0,n=f}finally{try{t||null==d.return||d.return()}finally{if(a)throw n}}for(var l=0;l<o.length;l++){var m=o[l];i.indexOf(m.goodsId.objectId)>-1&&(c.splice(i.indexOf(m.goodsId.objectId),1),c.unshift(m))}}),console.log(c),a.dataList=c}wx.hideLoading()}}};t.default=i}).call(this,o("543d")["default"])},"51db":function(e,t,o){"use strict";var a,n=function(){var e=this,t=e.$createElement;e._self._c},u=[];o.d(t,"b",function(){return n}),o.d(t,"c",function(){return u}),o.d(t,"a",function(){return a})},ab66:function(e,t,o){"use strict";o.r(t);var a=o("51db"),n=o("2d26");for(var u in n)"default"!==u&&function(e){o.d(t,e,function(){return n[e]})}(u);o("b197");var d,s=o("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],d);t["default"]=r.exports},b197:function(e,t,o){"use strict";var a=o("f234"),n=o.n(a);n.a},f234:function(e,t,o){}},[["26b5","common/runtime","common/vendor"]]]);