(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/manage/productCount/productCount"],{"26b5":function(e,t,o){"use strict";(function(e){o("d510"),o("921b");a(o("66fd"));var t=a(o("ab66"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("543d")["createPage"])},"2d26":function(e,t,o){"use strict";o.r(t);var a=o("e102"),u=o.n(a);for(var n in a)"default"!==n&&function(e){o.d(t,e,function(){return a[e]})}(n);t["default"]=u.a},6320:function(e,t,o){},ab66:function(e,t,o){"use strict";o.r(t);var a=o("d117"),u=o("2d26");for(var n in u)"default"!==n&&function(e){o.d(t,e,function(){return u[e]})}(n);o("b197");var d=o("2877"),s=Object(d["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=s.exports},b197:function(e,t,o){"use strict";var a=o("6320"),u=o.n(a);u.a},d117:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},u=[];o.d(t,"a",function(){return a}),o.d(t,"b",function(){return u})},e102:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u,n,d,s=l(o("9546")),r=l(o("7fd5"));function l(e){return e&&e.__esModule?e:{default:e}}var i={components:{},data:function(){return{starttime:"起始时间",endtime:"截止时间",dataList:[],pageSize:30,pageNum:1,is_selected:!1,searchGoodName:"",category:""}},onLoad:function(t){a=this,u=wx.getStorageSync("uid"),e.removeStorageSync("category");var o=new Date,s=o.getFullYear(),l=o.getMonth()+1;a.starttime=s+"-"+l+"-01",a.endtime=r.default.getDay(0),n=s+"-"+l+"-01",d=r.default.getDay(0),a.getdetail()},onShow:function(){e.getStorageSync("category")&&(a.category=e.getStorageSync("category"),a.is_selected=!1,a.getdetail())},methods:{seachGoodName:function(e){a.is_selected=!0,a.searchGoodName=e.detail.value,a.getdetail()},selected_startday:function(e){a.starttime=e.detail.value,a.starttime==n&&a.endtime==d?a.is_selected=!1:a.is_selected=!0,a.getdetail()},selected_endday:function(e){a.endtime=e.detail.value,a.starttime==n&&a.endtime==d?a.is_selected=!1:a.is_selected=!0,a.getdetail()},getdetail:function(){e.showLoading({title:"加载中..."});var t=s.default.Query("Bills");t.equalTo("userId","==",u),t.equalTo("createdAt",">=",a.starttime+" 00:00:00"),t.equalTo("createdAt","<=",a.endtime+" 23:59:59"),t.equalTo("goodsName","==",{$regex:a.searchGoodName+".*"});var o=t.equalTo("type","==",1),n=t.equalTo("type","==",-1);t.or(o,n),t.include("goodsId"),t.statTo("sum","num,total_money"),t.statTo("groupby","goodsId,type"),t.statTo("order","-_sumnum"),t.find().then(function(t){e.hideLoading();var o=[],u=!0,n=!1,d=void 0;try{for(var s,r=t[Symbol.iterator]();!(u=(s=r.next()).done);u=!0){var l=s.value,i={};1==l.type?(i.type=1,i.goodsId=l.goodsId,i._sumNum1=l._sumNum,i._sumTotal_money1=l._sumTotal_money,i._sumNum2=0,i._sumTotal_money2=0):-1==l.type&&(i.type=-1,i.goodsId=l.goodsId,i._sumNum1=0,i._sumTotal_money1=0,i._sumNum2=l._sumNum,i._sumTotal_money2=l._sumTotal_money),o.push(i)}}catch(c){n=!0,d=c}finally{try{u||null==r.return||r.return()}finally{if(n)throw d}}a.filterRoomNames(o)})},filterRoomNames:function(e){for(var t={},o=[],n=0;n<e.length;n++){var d=e[n];if(t[d.goodsId.objectId])for(var r=0;r<o.length;r++){var l=o[r];l.goodsId.objectId==d.goodsId.objectId&&(1==l.type?(l._sumNum2=d._sumNum2,l._sumTotal_money2=d._sumTotal_money2):-1==l.type&&(l._sumNum1=d._sumNum1,l._sumTotal_money1=d._sumTotal_money1))}else o.push(d),t[d.goodsId.objectId]=d}if(a.is_selected)a.dataList=o;else{var i=[],c=[],m=s.default.Query("Goods");m.equalTo("userId","==",u),m.equalTo("status","!=",-1),1==a.category.type?m.equalTo("goodsClass","==",a.category.objectId):m.equalTo("second_class","==",a.category.objectId),m.select("goodsName,reserve"),m.limit(500),m.find().then(function(e){var t=!0,a=!1,u=void 0;try{for(var n,d=e[Symbol.iterator]();!(t=(n=d.next()).done);t=!0){var s=n.value,r={};r.goodsId=s,r._sumNum2=0,r._sumTotal_money2=0,r._sumNum1=0,r._sumTotal_money1=0,c.push(r),i.push(s.objectId)}}catch(f){a=!0,u=f}finally{try{t||null==d.return||d.return()}finally{if(a)throw u}}for(var l=0;l<o.length;l++){var m=o[l];i.indexOf(m.goodsId.objectId)>-1&&(c.splice(i.indexOf(m.goodsId.objectId),1),c.unshift(m))}}),console.log(c),a.dataList=c}wx.hideLoading()}}};t.default=i}).call(this,o("543d")["default"])}},[["26b5","common/runtime","common/vendor"]]]);