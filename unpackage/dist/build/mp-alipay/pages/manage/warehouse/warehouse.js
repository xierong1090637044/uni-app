(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/manage/warehouse/warehouse"],{"1f04":function(e,t,n){"use strict";(function(e){n("d510"),n("921b");o(n("66fd"));var t=o(n("5958"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("c11b")["createPage"])},"43ea":function(e,t,n){"use strict";var o={"uni-nav-bar":function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"96bd"))}},r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.stocks,(function(t,n){var o=JSON.stringify(t);return{$orig:e.__get_orig(t),g0:o}})));e.$mp.data=Object.assign({},{$root:{l0:n}})},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}))},5958:function(e,t,n){"use strict";n.r(t);var o=n("43ea"),r=n("9462");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("f839");var i,c=n("f0c5"),u=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);t["default"]=u.exports},"7c59":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("9546")),r=a(n("8d57"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=c(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,a=!0,i=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return a=e.done,e},e:function(e){i=!0,r=e},f:function(){try{a||null==o.return||o.return()}finally{if(i)throw r}}}}function c(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var s,l,f,d=function(){n.e("components/uni-segmented-control/uni-segmented-control").then(function(){return resolve(n("c952"))}.bind(null,n)).catch(n.oe)},h=function(){n.e("components/Loading/index").then(function(){return resolve(n("120a"))}.bind(null,n)).catch(n.oe)},g=function(){n.e("components/uni-nav-bar/uni-nav-bar").then(function(){return resolve(n("96bd"))}.bind(null,n)).catch(n.oe)},v={components:{uniSegmentedControl:d,loading:h,uniNavBar:g},data:function(){return{is_choose:!1,loading:!0,stocks:[],items:["已启用","未启用"],current:0,disabled:!1,type:"",header:{userNum:0,noUserNum:0}}},onLoad:function(t){s=this,f=e.getStorageSync("uid"),"choose"!=t.type&&"out_choose"!=t.type&&"choose_more"!=t.type&&"in_choose"!=t.type||(s.is_choose=!0,s.type=t.type)},onShow:function(){s.getstock_list()},onUnload:function(){l=""},methods:{makePhoneCall:function(t){t?e.makePhoneCall({phoneNumber:t}):e.showToast({icon:"none",title:"未填写联系电话"})},priviewImg:function(t){e.previewImage({current:t,urls:[t]})},onClickItem:function(e){this.current!==e&&(this.current=e,0==e?(s.disabled=!1,s.getstock_list()):1==e&&(s.disabled=!0,s.getstock_list()))},goto_detail:function(t){s.is_choose||(e.setStorageSync("stock",t),e.navigateTo({url:"detail/detail"}))},select_this:function(t){console.log(t);var n,o=JSON.parse(t.detail.value);n="choose_more"==s.type&&e.getStorageSync("warehouse")||[];var r={};r.stock=o,r.reserve=0,r.warning_num=0,-1==JSON.stringify(n).indexOf(JSON.stringify(r))?(n.push(r),"out_choose"==s.type?e.setStorageSync("out_warehouse",n):"in_choose"==s.type?e.setStorageSync("in_warehouse",n):e.setStorageSync("warehouse",n),e.navigateBack({delta:1})):e.showToast({title:"已选择此仓库",icon:"none"})},goto_add:function(){var t=e.getStorageSync("user"),n=e.getStorageSync("identity");t.is_vip||s.stocks.length<2?e.navigateTo({url:"add/add"}):e.showModal({title:"提示",content:"非会员最多上传2个仓库",confirmText:"充值会员",success:function(t){t.confirm?1==n?e.navigateTo({url:"/pages/mine/vip/vip"}):e.showToast({title:"员工不能充值",icon:"none"}):t.cancel&&console.log("用户点击取消")}})},input_confirm:function(e){l=e.detail.value,s.getstock_list()},getstock_list:function(){e.showLoading({title:"加载中..."});var t=o.default.Query("stocks");t.order("-num"),t.include("charge","shop","Ncharge"),t.equalTo("parent","==",f),l&&t.equalTo("stock_name","==",{$regex:l+".*"}),t.limit(500),t.find().then((function(t){e.hideLoading();var n=t;s.header.userNum=t.length;var o,a=[],c=i(n);try{for(c.s();!(o=c.n()).done;){var u=o.value;u.disabled&&(s.header.noUserNum+=1);var l={};l.name=u.stock_name,l.objectId=u.objectId,a.push(l)}}catch(f){c.e(f)}finally{c.f()}e.setStorageSync("_warehouse",a),e.getStorage({key:"identity",success:function(e){"2"==e.data?r.default.get_satffAuth().then((function(e){console.log(e);var t,o=[],r=i(e.stocks);try{for(r.s();!(t=r.n()).done;){var a,c=t.value,u=i(n);try{for(u.s();!(a=u.n()).done;){var l=a.value;l.objectId==c&&o.push(l)}}catch(f){u.e(f)}finally{u.f()}}}catch(f){r.e(f)}finally{r.f()}s.stocks=o})):"1"==e.data&&(s.stocks=n)}})}))}}};t.default=v}).call(this,n("c11b")["default"])},9462:function(e,t,n){"use strict";n.r(t);var o=n("7c59"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=r.a},d57d:function(e,t,n){},f839:function(e,t,n){"use strict";var o=n("d57d"),r=n.n(o);r.a}},[["1f04","common/runtime","common/vendor"]]]);