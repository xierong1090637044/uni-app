(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop/goods/goods"],{2870:function(t,e,o){"use strict";o.r(e);var n=o("b898"),s=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e["default"]=s.a},3742:function(t,e,o){"use strict";o.r(e);var n=o("5830"),s=o("2870");for(var i in s)"default"!==i&&function(t){o.d(e,t,(function(){return s[t]}))}(i);o("c21f");var a,c=o("f0c5"),r=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);e["default"]=r.exports},"386e":function(t,e,o){},5830:function(t,e,o){"use strict";var n,s=function(){var t=this,e=t.$createElement;t._self._c},i=[];o.d(e,"b",(function(){return s})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return n}))},"74c7":function(t,e,o){"use strict";(function(t){o("d34b"),o("921b");n(o("66fd"));var e=n(o("3742"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("543d")["createPage"])},b898:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,s=i(o("4515"));function i(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{beforeHeaderzIndex:11,afterHeaderzIndex:10,beforeHeaderOpacity:1,afterHeaderOpacity:0,swiperList:[{id:1,img:"https://ae01.alicdn.com/kf/HTB1Mj7iTmzqK1RjSZFjq6zlCFXaP.jpg"},{id:2,img:"https://ae01.alicdn.com/kf/HTB1fbseTmzqK1RjSZFLq6An2XXaL.jpg"},{id:3,img:"https://ae01.alicdn.com/kf/HTB1dPUMThnaK1RjSZFtq6zC2VXa0.jpg"},{id:4,img:"https://ae01.alicdn.com/kf/HTB1OHZrTXzqK1RjSZFvq6AB7VXaw.jpg"}],currentSwiper:0,anchorlist:[],selectAnchor:0,serviceClass:"",specClass:"",shareClass:"",goodsData:{},selectSpec:null,isKeep:!1,descriptionStr:""}},onLoad:function(t){n=this,console.log(t.cid);var e=s.default.Query("Goods");e.get(t.id).then((function(t){console.log(t),t.number=1,n.goodsData=t})).catch((function(t){console.log(t)}))},onReady:function(){this.calcAnchor()},onPageScroll:function(t){this.selectAnchor=t.scrollTop>=this.anchorlist[2].top?2:t.scrollTop>=this.anchorlist[1].top?1:0;var e=375;t.scrollTop=t.scrollTop>e?375:t.scrollTop,this.afterHeaderOpacity=t.scrollTop*(1/e),this.beforeHeaderOpacity=1-this.afterHeaderOpacity,this.beforeHeaderzIndex=t.scrollTop>0?10:11,this.afterHeaderzIndex=t.scrollTop>0?11:10},onReachBottom:function(){t.showToast({title:"触发上拉加载"})},mounted:function(){},methods:{createOrder:function(){},swiperChange:function(t){this.currentSwiper=t.detail.current},share:function(){this.shareClass="show"},hideShare:function(){var t=this;this.shareClass="hide",setTimeout((function(){t.shareClass="none"}),150)},buy:function(){var t=this;if(null==this.selectSpec)return this.showSpec((function(){t.toConfirmation()}));this.toConfirmation()},toConfirmation:function(){var e=[],o={id:this.goodsData.id,img:"../../static/img/goods/p1.jpg",name:this.goodsData.name,spec:"规格:"+this.goodsData.spec[this.selectSpec],price:this.goodsData.price,number:this.goodsData.number};e.push(o),t.setStorage({key:"buylist",data:e,success:function(){t.navigateTo({url:"../order/confirmation"})}})},sub:function(){this.goodsData.number<=1||this.goodsData.number--},add:function(){this.goodsData.number>=this.goodsData.reserve?(this.goodsData.number=this.goodsData.reserve,t.showToast({title:"已超出最大库存数量",icon:"none"})):this.goodsData.number++},wetherNum:function(){this.goodsData.number>=this.goodsData.reserve&&(this.goodsData.number=this.goodsData.reserve)},toAnchor:function(e){this.selectAnchor=e,t.pageScrollTo({scrollTop:this.anchorlist[e].top,duration:200})},calcAnchor:function(){var e=this;this.anchorlist=[{name:"主图",top:0},{name:"评价",top:0},{name:"详情",top:0}];var o=t.createSelectorQuery().select("#comments");o.boundingClientRect((function(o){var n=0,s=t.upx2px(100);e.anchorlist[1].top=0-s-n,e.anchorlist[2].top=0-s-n})).exec()},back:function(){t.navigateBack()},showService:function(){console.log("show"),this.serviceClass="show"},hideService:function(){var t=this;this.serviceClass="hide",setTimeout((function(){t.serviceClass="none"}),200)},showSpec:function(t){console.log("show"),this.specClass="show",this.specCallback=t},specCallback:function(){},hideSpec:function(){this.specClass="hide",t.showModal({title:"提示",content:"是否确认下单",success:function(t){t.confirm?console.log("用户点击确定"):t.cancel&&console.log("用户点击取消")}})},discard:function(){}}};e.default=a}).call(this,o("543d")["default"])},c21f:function(t,e,o){"use strict";var n=o("386e"),s=o.n(n);s.a}},[["74c7","common/runtime","common/vendor"]]]);