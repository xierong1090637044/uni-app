(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0082":function(e,t,o){"use strict";var i=o("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o("7514"),o("c5f6");var n=i(o("795b")),a={modify_setting:function(e){var t=this,o=uni.getStorageSync("uid"),i=uni.getStorageSync("setting");return new n.default(function(n,a){uni.showLoading({title:"上传中"});var s=Bmob.Query("setting"),r=Bmob.Pointer("_User"),c=r.set(o);s.set("id",i.objectId),s.set("show_float",Number(e.show_float)),s.set("USER",e.USER),s.set("UKEY",e.UKEY),s.set("number",e.number),s.set("wx_openid",e.wx_openid),s.set("parent",c),s.save().then(function(e){console.log(e),uni.hideLoading(),uni.showToast({title:"保存成功"}),t.query_setting()}).catch(function(e){console.log(e)})})},query_setting:function(){var e=uni.getStorageSync("uid");return new n.default(function(t,o){var i=Bmob.Query("setting");i.equalTo("parent","==",e),i.find().then(function(e){uni.setStorageSync("setting",e[0]),t(e)})})}};t.default=a},"086e":function(e,t,o){"use strict";var i=o("288e"),n=i(o("59ad"));function a(e){this.key=e.key,this.requestConfig={key:e.key,s:"rsx",platform:"WXJS",appname:e.key,sdkversion:"1.2.0",logversion:"2.0"}}o("28a5"),o("7f7f"),a.prototype.getWxLocation=function(e,t){wx.getLocation({type:"gcj02",success:function(e){var o=e.longitude+","+e.latitude;wx.setStorage({key:"userLocation",data:o}),t(o)},fail:function(o){wx.getStorage({key:"userLocation",success:function(e){e.data&&t(e.data)}}),e.fail({errCode:"0",errMsg:o.errMsg||""})}})},a.prototype.getRegeo=function(e){function t(t){var i=o.requestConfig;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:o.key,location:t,extensions:"all",s:i.s,platform:i.platform,appname:o.key,sdkversion:i.sdkversion,logversion:i.logversion},method:"GET",header:{"content-type":"application/json"},success:function(o){var i,a,s,r,c,l,d,u,f;o.data.status&&"1"==o.data.status?(i=o.data.regeocode,a=i.addressComponent,s=[],r="",i&&i.roads[0]&&i.roads[0].name&&(r=i.roads[0].name+"附近"),c=t.split(",")[0],l=t.split(",")[1],i.pois&&i.pois[0]&&(r=i.pois[0].name+"附近",d=i.pois[0].location,d&&(c=(0,n.default)(d.split(",")[0]),l=(0,n.default)(d.split(",")[1]))),a.provice&&s.push(a.provice),a.city&&s.push(a.city),a.district&&s.push(a.district),a.streetNumber&&a.streetNumber.street&&a.streetNumber.number?(s.push(a.streetNumber.street),s.push(a.streetNumber.number)):(u="",i&&i.roads[0]&&i.roads[0].name&&(u=i.roads[0].name),s.push(u)),s=s.join(""),f=[{iconPath:e.iconPath,width:e.iconWidth,height:e.iconHeight,name:s,desc:r,longitude:c,latitude:l,id:0,regeocodeData:i}],e.success(f)):e.fail({errCode:o.data.infocode,errMsg:o.data.info})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})}var o=this;e.location?t(e.location):o.getWxLocation(e,function(e){t(e)})},a.prototype.getWeather=function(e){function t(t){var o="base";e.type&&"forecast"==e.type&&(o="all"),wx.request({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:i.key,city:t,extensions:o,s:n.s,platform:n.platform,appname:i.key,sdkversion:n.sdkversion,logversion:n.logversion},method:"GET",header:{"content-type":"application/json"},success:function(t){function o(e){var t={city:{text:"城市",data:e.city},weather:{text:"天气",data:e.weather},temperature:{text:"温度",data:e.temperature},winddirection:{text:"风向",data:e.winddirection+"风"},windpower:{text:"风力",data:e.windpower+"级"},humidity:{text:"湿度",data:e.humidity+"%"}};return t}var i,n;t.data.status&&"1"==t.data.status?t.data.lives?(i=t.data.lives,i&&i.length>0&&(i=i[0],n=o(i),n["liveData"]=i,e.success(n))):t.data.forecasts&&t.data.forecasts[0]&&e.success({forecast:t.data.forecasts[0]}):e.fail({errCode:t.data.infocode,errMsg:t.data.info})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})}function o(o){wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:i.key,location:o,extensions:"all",s:n.s,platform:n.platform,appname:i.key,sdkversion:n.sdkversion,logversion:n.logversion},method:"GET",header:{"content-type":"application/json"},success:function(o){var i,n;o.data.status&&"1"==o.data.status?(n=o.data.regeocode,n.addressComponent?i=n.addressComponent.adcode:n.aois&&n.aois.length>0&&(i=n.aois[0].adcode),t(i)):e.fail({errCode:o.data.infocode,errMsg:o.data.info})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})}var i=this,n=i.requestConfig;e.city?t(e.city):i.getWxLocation(e,function(e){o(e)})},a.prototype.getPoiAround=function(e){function t(t){var a={key:o.key,location:t,s:i.s,platform:i.platform,appname:o.key,sdkversion:i.sdkversion,logversion:i.logversion};e.querytypes&&(a["types"]=e.querytypes),e.querykeywords&&(a["keywords"]=e.querykeywords),wx.request({url:"https://restapi.amap.com/v3/place/around",data:a,method:"GET",header:{"content-type":"application/json"},success:function(t){var o,i,a,s;if(t.data.status&&"1"==t.data.status){if(t=t.data,t&&t.pois){for(o=[],i=0;i<t.pois.length;i++)a=0==i?e.iconPathSelected:e.iconPath,o.push({latitude:(0,n.default)(t.pois[i].location.split(",")[1]),longitude:(0,n.default)(t.pois[i].location.split(",")[0]),iconPath:a,width:22,height:32,id:i,name:t.pois[i].name,address:t.pois[i].address});s={markers:o,poisData:t.pois},e.success(s)}}else e.fail({errCode:t.data.infocode,errMsg:t.data.info})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})}var o=this,i=o.requestConfig;e.location?t(e.location):o.getWxLocation(e,function(e){t(e)})},a.prototype.getStaticmap=function(e){function t(t){n.push("location="+t),e.zoom&&n.push("zoom="+e.zoom),e.size&&n.push("size="+e.size),e.scale&&n.push("scale="+e.scale),e.markers&&n.push("markers="+e.markers),e.labels&&n.push("labels="+e.labels),e.paths&&n.push("paths="+e.paths),e.traffic&&n.push("traffic="+e.traffic);var o=a+n.join("&");e.success({url:o})}var o,i=this,n=[],a="https://restapi.amap.com/v3/staticmap?";n.push("key="+i.key),o=i.requestConfig,n.push("s="+o.s),n.push("platform="+o.platform),n.push("appname="+o.appname),n.push("sdkversion="+o.sdkversion),n.push("logversion="+o.logversion),e.location?t(e.location):i.getWxLocation(e,function(e){t(e)})},a.prototype.getInputtips=function(e){var t=this,o=t.requestConfig,i={key:t.key,s:o.s,platform:o.platform,appname:t.key,sdkversion:o.sdkversion,logversion:o.logversion};e.location&&(i["location"]=e.location),e.keywords&&(i["keywords"]=e.keywords),e.type&&(i["type"]=e.type),e.city&&(i["city"]=e.city),e.citylimit&&(i["citylimit"]=e.citylimit),wx.request({url:"https://restapi.amap.com/v3/assistant/inputtips",data:i,method:"GET",header:{"content-type":"application/json"},success:function(t){t&&t.data&&t.data.tips&&e.success({tips:t.data.tips})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})},a.prototype.getDrivingRoute=function(e){var t=this,o=t.requestConfig,i={key:t.key,s:o.s,platform:o.platform,appname:t.key,sdkversion:o.sdkversion,logversion:o.logversion};e.origin&&(i["origin"]=e.origin),e.destination&&(i["destination"]=e.destination),e.strategy&&(i["strategy"]=e.strategy),e.waypoints&&(i["waypoints"]=e.waypoints),e.avoidpolygons&&(i["avoidpolygons"]=e.avoidpolygons),e.avoidroad&&(i["avoidroad"]=e.avoidroad),wx.request({url:"https://restapi.amap.com/v3/direction/driving",data:i,method:"GET",header:{"content-type":"application/json"},success:function(t){t&&t.data&&t.data.route&&e.success({paths:t.data.route.paths,taxi_cost:t.data.route.taxi_cost||""})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})},a.prototype.getWalkingRoute=function(e){var t=this,o=t.requestConfig,i={key:t.key,s:o.s,platform:o.platform,appname:t.key,sdkversion:o.sdkversion,logversion:o.logversion};e.origin&&(i["origin"]=e.origin),e.destination&&(i["destination"]=e.destination),wx.request({url:"https://restapi.amap.com/v3/direction/walking",data:i,method:"GET",header:{"content-type":"application/json"},success:function(t){t&&t.data&&t.data.route&&e.success({paths:t.data.route.paths})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})},a.prototype.getTransitRoute=function(e){var t=this,o=t.requestConfig,i={key:t.key,s:o.s,platform:o.platform,appname:t.key,sdkversion:o.sdkversion,logversion:o.logversion};e.origin&&(i["origin"]=e.origin),e.destination&&(i["destination"]=e.destination),e.strategy&&(i["strategy"]=e.strategy),e.city&&(i["city"]=e.city),e.cityd&&(i["cityd"]=e.cityd),wx.request({url:"https://restapi.amap.com/v3/direction/transit/integrated",data:i,method:"GET",header:{"content-type":"application/json"},success:function(t){if(t&&t.data&&t.data.route){var o=t.data.route;e.success({distance:o.distance||"",taxi_cost:o.taxi_cost||"",transits:o.transits})}},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})},a.prototype.getRidingRoute=function(e){var t=this,o=t.requestConfig,i={key:t.key,s:o.s,platform:o.platform,appname:t.key,sdkversion:o.sdkversion,logversion:o.logversion};e.origin&&(i["origin"]=e.origin),e.destination&&(i["destination"]=e.destination),wx.request({url:"https://restapi.amap.com/v4/direction/bicycling",data:i,method:"GET",header:{"content-type":"application/json"},success:function(t){t&&t.data&&t.data.data&&e.success({paths:t.data.data.paths})},fail:function(t){e.fail({errCode:"0",errMsg:t.errMsg||""})}})},e.exports.AMapWX=a},"0ad1":function(e,t,o){"use strict";var i=o("4f77"),n=o.n(i);n.a},"0ca9":function(e,t,o){"use strict";o.r(t);var i=o("48ed"),n=o.n(i);for(var a in i)"default"!==a&&function(e){o.d(t,e,function(){return i[e]})}(a);t["default"]=n.a},"2dc1":function(e,t,o){"use strict";var i=o("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(o("5d73"));o("7514");var a=i(o("795b")),s={querycount:function(){var e=uni.getStorageSync("uid"),t=Bmob.Query("Goods");t.equalTo("userId","==",e),t.count().then(function(e){console.log("共有".concat(e,"条记录"))})},gettoday_detail:function(e,t){var o=uni.getStorageSync("uid"),i=0,n=0,s=0,r=0,c=0,l=0,d={};return new a.default(function(a,u){var f=Bmob.Query("Bills");f.equalTo("userId","==",o),f.equalTo("createdAt",">=",e),f.equalTo("createdAt","<=",t),f.select("goodsId","num","total_money","type"),f.limit(1e3),f.include("goodsId"),f.find().then(function(u){for(var f=0;f<u.length;f++)1==u[f].type?(i+=u[f].num,s+=u[f].num*u[f].goodsId.retailPrice,c+=u[f].total_money):-1==u[f].type&&(n+=u[f].num,r+=u[f].num*u[f].goodsId.costPrice,l+=u[f].total_money);d.get_reserve=i.toFixed(uni.getStorageSync("setting").show_float),d.out_reserve=n.toFixed(uni.getStorageSync("setting").show_float),d.get_reserve_real_money=s.toFixed(uni.getStorageSync("setting").show_float),d.out_reserve_real_money=r.toFixed(uni.getStorageSync("setting").show_float),d.get_reserve_num=c.toFixed(uni.getStorageSync("setting").show_float),d.out_reserve_num=l.toFixed(uni.getStorageSync("setting").show_float),d.get_reserve_get_num=(s-c).toFixed(uni.getStorageSync("setting").show_float),d.out_reserve_get_num=(l-r).toFixed(uni.getStorageSync("setting").show_float),console.log(i);var g=0,p=0,v=Bmob.Query("order_opreations");v.equalTo("master","==",o),v.equalTo("createdAt",">=",e),v.equalTo("createdAt","<=",t),v.equalTo("type","==",-1),v.find().then(function(e){for(var t=0;t<e.length;t++)g+=e[t].all_money,p+=e[t].real_money;d.should_get_money=g,d.real_get_money=p}),a(d)})})},loadallGoods:function(){var e=uni.getStorageSync("uid");return new a.default(function(t,o){var i=0,a=0,s=0,r=0,c={},l=Bmob.Query("Goods");l.equalTo("userId","==",e),l.select("reserve","costPrice"),l.limit(1e3),l.find().then(function(e){var o=!0,l=!1,d=void 0;try{for(var u,f=(0,n.default)(e);!(o=(u=f.next()).done);o=!0){var g=u.value;0==g.stocktype&&(r+=1),i+=g.reserve,a+=g.reserve*g.costPrice,s+=1,c.total_money=a.toFixed(uni.getStorageSync("print_setting").show_float),c.total_reserve=i.toFixed(uni.getStorageSync("print_setting").show_float),c.total_products=s,c.warn_num=r,t(c)}}catch(p){l=!0,d=p}finally{try{o||null==f.return||f.return()}finally{if(l)throw d}}})})}};t.default=s},"48ed":function(e,t,o){"use strict";var i=o("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o("6b54"),o("87b3"),o("c5f6");var n=i(o("5753")),a={name:"UniNoticeBar",components:{uniIcon:n.default},props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#fffbe8"},speed:{type:[String,Number],default:100},color:{type:String,default:"#de8c17"},single:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!1},showGetMore:{type:Boolean,default:!1},showClose:{type:Boolean,default:!1}},data:function(){var e=this.__call_hook?"uni_notice_bar":"Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:e,show:!0,animation:""}},watch:{text:function(e,t){var o=this;this.$nextTick(function(){setTimeout(o.setAnimation,200)})}},mounted:function(){this.setAnimation()},methods:{clickMore:function(){this.$emit("getmore")},onClick:function(e){var t=e.touches?e.touches[0]?e.touches[0].clientX:e.changedTouches[0].clientX:e.detail.clientX;uni.upx2px(48)+12>t&&this.showClose&&(this.show=!1,this.$emit("close")),this.$emit("click")},setAnimation:function(){var e=this;this.scrollable&&uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function(t){e.animation="notice ".concat(t[0].width/e.speed,"s linear infinite both")})}}};t.default=a},"4f77":function(e,t,o){var i=o("8e25");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=o("4f06").default;n("4b4f5458",i,!0,{sourceMap:!1,shadowMode:!1})},6115:function(e,t,o){"use strict";o.r(t);var i=o("ef1e"),n=o("ce78");for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);o("0ad1");var s=o("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"107b2f00",null);t["default"]=r.exports},"7fee":function(e,t,o){"use strict";o.r(t);var i=o("d3fd"),n=o("0ca9");for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);o("8ebbc");var s=o("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"2d6b33d8",null);t["default"]=r.exports},"8e25":function(e,t,o){t=e.exports=o("2350")(!1),t.push([e.i,".scan_code[data-v-107b2f00]{position:fixed;width:calc(100% - %?60?%);left:%?30?%;right:%?30?%;bottom:10%;background:-webkit-gradient(linear,left top,right top,from(#426ab3),to(#118fff));background:-o-linear-gradient(left,#426ab3,#118fff);background:linear-gradient(90deg,#426ab3,#118fff);line-height:%?80?%;text-align:center;border-radius:4px;color:#fff;-webkit-box-shadow:0 5px 5px rgba(0,0,0,.2);box-shadow:0 5px 5px rgba(0,0,0,.2)}.icon-scan[data-v-107b2f00]{margin-right:%?20?%}\n\n/* pages/home/index/index.wxss */.swiper[data-v-107b2f00]{background:#426ab3;color:#fff;height:14vh}.item[data-v-107b2f00]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.every_item[data-v-107b2f00]{width:50%;text-align:center;line-height:30px;font-size:14px}.s_num[data-v-107b2f00]{font-size:16px;font-weight:700}.o_list[data-v-107b2f00]{background:#fff;padding:15px 15px 0}.o_image[data-v-107b2f00]{width:%?80?%;height:%?80?%;border-radius:50%;border:3px solid#e2e2e2;padding:%?6?% %?6?% 0}.o_item[data-v-107b2f00]{width:25%;text-align:center;display:inline-block;margin-bottom:%?20?%}.o_text[data-v-107b2f00]{color:#000;font-weight:700;font-size:%?23?%}.scan_code[data-v-107b2f00]{position:fixed;width:calc(100% - %?60?%);left:%?30?%;right:%?30?%;bottom:10%;background:-webkit-gradient(linear,left top,right top,from(#426ab3),to(#118fff));background:-o-linear-gradient(left,#426ab3,#118fff);background:linear-gradient(90deg,#426ab3,#118fff);line-height:%?80?%;text-align:center;border-radius:%?8?%;color:#fff;-webkit-box-shadow:0 %?10?% %?10?% rgba(0,0,0,.2);box-shadow:0 %?10?% %?10?% rgba(0,0,0,.2);-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.icon-scan[data-v-107b2f00]{margin-right:%?20?%}",""])},"8ebbc":function(e,t,o){"use strict";var i=o("a676"),n=o.n(i);n.a},a676:function(e,t,o){var i=o("a80e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=o("4f06").default;n("6f96fb01",i,!0,{sourceMap:!1,shadowMode:!1})},a80e:function(e,t,o){t=e.exports=o("2350")(!1),t.push([e.i,".uni-noticebar[data-v-2d6b33d8]{padding:%?12?% %?24?%;font-size:%?24?%;line-height:1.5;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left}.uni-noticebar__close[data-v-2d6b33d8]{color:#999;margin-right:%?24?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.uni-noticebar__content[data-v-2d6b33d8]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;overflow:hidden}.uni-noticebar__content.uni-noticebar--flex[data-v-2d6b33d8]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.uni-noticebar__content-icon[data-v-2d6b33d8]{display:inline-block;z-index:1;padding-right:%?12?%}.uni-noticebar__content-more[data-v-2d6b33d8]{width:%?180?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;word-break:keep-all;margin-left:%?10?%;color:#999}.uni-noticebar__content-more-text[data-v-2d6b33d8]{font-size:%?24?%;white-space:nowrap}.uni-noticebar__content-text[data-v-2d6b33d8]{word-break:break-all;line-height:1.5;display:inline}.uni-noticebar__content-text.uni-noticebar--single[data-v-2d6b33d8]{-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.uni-noticebar__content-text.uni-noticebar--scrollable[data-v-2d6b33d8]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:block;overflow:hidden}.uni-noticebar__content-text.uni-noticebar--scrollable .uni-noticebar__content-inner[data-v-2d6b33d8]{padding-left:100%;white-space:nowrap;display:inline-block;-webkit-transform:translateZ(0);transform:translateZ(0)}.uni-noticebar__content-inner[data-v-2d6b33d8]{font-size:%?24?%;display:inline}@-webkit-keyframes notice-data-v-2d6b33d8{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes notice-data-v-2d6b33d8{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}",""])},ce78:function(e,t,o){"use strict";o.r(t);var i=o("e800"),n=o.n(i);for(var a in i)"default"!==a&&function(e){o.d(t,e,function(){return i[e]})}(a);t["default"]=n.a},d3fd:function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.show?o("v-uni-view",{staticClass:"uni-noticebar",style:{backgroundColor:e.backgroundColor,color:e.color},on:{click:function(t){t=e.$handleEvent(t),e.onClick(t)}}},[e.showClose?o("v-uni-view",{staticClass:"uni-noticebar__close"},[o("uni-icon",{attrs:{type:"closefill",size:"12"}})],1):e._e(),o("v-uni-view",{staticClass:"uni-noticebar__content",class:{"uni-noticebar--flex":e.scrollable||e.single||e.moreText}},[e.showIcon?o("v-uni-view",{staticClass:"uni-noticebar__content-icon",style:{backgroundColor:e.backgroundColor,color:e.color}},[o("uni-icon",{attrs:{color:e.color,type:"sound",size:"14"}})],1):e._e(),o("v-uni-view",{staticClass:"uni-noticebar__content-text",class:{"uni-noticebar--scrollable":e.scrollable,"uni-noticebar--single":!e.scrollable&&(e.single||e.moreText)}},[o("v-uni-view",{staticClass:"uni-noticebar__content-inner",style:{animation:e.animation,"-webkit-animation":e.animation},attrs:{id:e.elId}},[e._v(e._s(e.text))])],1),e.showGetMore?o("v-uni-view",{staticClass:"uni-noticebar__content-more",style:{width:e.moreText?"180upx":"20px"},on:{click:function(t){t=e.$handleEvent(t),e.clickMore(t)}}},[e.moreText?o("v-uni-view",{staticClass:"uni-noticebar__content-more-text"},[e._v(e._s(e.moreText))]):e._e(),o("uni-icon",{attrs:{type:"arrowright",size:"14"}})],1):e._e()],1)],1):e._e()},n=[];o.d(t,"a",function(){return i}),o.d(t,"b",function(){return n})},df06:function(e,t,o){"use strict";var i=o("288e");o("6b54"),o("87b3"),o("c5f6");var n=i(o("5d73"));o("7514"),e.exports={handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("now_product"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(e,t,o){var i=Bmob.Pointer("_User"),n=i.set(uni.getStorageSync("uid")),a=Bmob.Query("logs");a.set("parent",n),a.set("log",e),a.set("detail_id",o),a.set("type",t),a.save().then(function(e){console.log(e)}).catch(function(e){console.log(e)})},record_shopOut:function(e,t){console.log(e,t);var o=Bmob.Query("shops");o.set("id",e),o.set("have_out",t),o.save().then(function(e){console.log(e)}).catch(function(e){console.log(e)})},record_staffOut:function(e){if(console.log(e,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var t=Bmob.Query("staffs");t.set("id",uni.getStorageSync("user").objectId),t.set("have_out",e+uni.getStorageSync("user").have_out),t.save().then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},get_allCost:function(){var e=uni.getStorageSync("uid");console.log(e);var t=Bmob.Query("Goods");t.equalTo("userId","==",e),t.find().then(function(e){console.log(e);var t=!0,o=!1,i=void 0;try{for(var a,s=(0,n.default)(e);!(t=(a=s.next()).done);t=!0){var r=a.value;console.log(r),Number(r.costPrice)*r.reserve,r.reserve}}catch(c){o=!0,i=c}finally{try{t||null==s.return||s.return()}finally{if(o)throw i}}})},getDay:function(e,t){var o=this,i=new Date,n=i.getTime()+864e5*e;i.setTime(n);var a=i.getFullYear(),s=i.getMonth(),r=i.getDate();return s=o.handleMonth(s+1),r=o.handleMonth(r),t?a+"-"+s+"-"+r+" 00:00:00":a+"-"+s+"-"+r},handleMonth:function(e){var t=e;return 1==e.toString().length&&(t="0"+e),t}}},e800:function(e,t,o){"use strict";var i=o("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(o("5d73"));o("7514"),o("28a5");var a,s,r=i(o("0914")),c=i(o("7fee")),l=i(o("086e")),d=i(o("df06")),u=i(o("0082")),f=i(o("2dc1")),g={components:{faIcon:r.default,uniNoticeBar:c.default},data:function(){return{welcome:{text:"",icon:""},weather:"",logsList:[],optionsLists:[{name:"产品入库",icon:"/static/entering.png",url:"/pages/common/goods-select/goods-select?type=entering"},{name:"产品出库",icon:"/static/delivery.png",url:"/pages/common/goods-select/goods-select?type=delivery"},{name:"产品调拨",icon:"/static/allocation.png",url:"/pages/common/goods-select/goods-select?type=allocation"},{name:"退货入库",icon:"/static/return_goods.png",url:"/pages/common/goods-select/goods-select?type=returing"},{name:"库存盘点",icon:"/static/stocking.png",url:"/pages/common/goods-select/goods-select?type=counting"}],get_reserve:0,out_reserve:0,total_reserve:0,total_money:0,total_products:0,openid:""}},onLoad:function(e){a=this,s=uni.getStorageSync("uid"),this.$wechat.share_pyq(),u.default.query_setting(),console.log(e),e.openid&&uni.setStorageSync("openid",e.openid);var t=new Date,o=t.getHours(),i=new l.default.AMapWX({key:"ddf21583182190befcf92c027b97f8ab"});i.getWeather({success:function(e){console.log(e),a.weather=e,o<6?(console.log(o),a.welcome.text="凌晨注意休息！好的身体才能高效的工作",a.welcome.icon="moon-o"):o<9?(a.welcome.text="早上好，又是开心快乐的一天！",a.welcome.icon="sun-o"):o<11?(a.welcome.text="上午好，请努力加油哦，会成功的！",a.welcome.icon="sun-o"):o<14?(a.welcome.text="中午好，辛勤劳动的你是最可爱的！",a.welcome.icon="sun-o"):o<18?(a.welcome.text="下午好，没有什么会阻挡你的，相信自己！",a.welcome.icon="sun-o"):(a.welcome.text="晚上好，更深露重，适当工作，适当休息！",a.welcome.icon="sun-o")},fail:function(e){console.log(e)}})},onShow:function(){a.gettoday_detail(),a.loadallGoods(),a.get_logsList()},methods:{scan_code:function(){uni.showActionSheet({itemList:["扫码出库","扫码入库","扫码盘点","查看详情","扫码添加商品"],success:function(e){a.scan(e.tapIndex)},fail:function(e){console.log(e.errMsg)}})},scan:function(e){this.$wechat.scanQRCode().then(function(t){var o=t.split("-");0==e?uni.navigateTo({url:"/pages/common/goods_out/goods_out?id="+o[0]+"&type="+o[1]}):1==e?uni.navigateTo({url:"/pages/common/good_confrim/good_confrim?id="+o[0]+"&type="+o[1]}):2==e?uni.navigateTo({url:"/pages/common/good_count/good_count?id="+o[0]+"&type="+o[1]}):3==e?uni.navigateTo({url:"/pages/manage/good_det/good_det?id="+o[0]+"&type="+o[1]}):4==e&&uni.navigateTo({url:"/pages/manage/good_add/good_add?id="+result})})},gettoday_detail:function(){var e=0,t=0,o=Bmob.Query("Bills");o.equalTo("userId","==",s),o.equalTo("createdAt",">=",d.default.getDay(0,!0)),o.equalTo("createdAt","<=",d.default.getDay(1,!0)),o.include("goodsId"),o.find().then(function(o){for(var i=0;i<o.length;i++)1==o[i].type?(e+=o[i].num,o[i].num*o[i].goodsId.retailPrice,o[i].total_money):-1==o[i].type&&(t+=o[i].num,o[i].num*o[i].goodsId.costPrice,o[i].total_money);a.get_reserve=e.toFixed(uni.getStorageSync("print_setting").show_float),a.out_reserve=t.toFixed(uni.getStorageSync("print_setting").show_float)})},loadallGoods:function(){f.default.loadallGoods().then(function(e){a.total_money=e.total_money,a.total_reserve=e.total_reserve,a.total_products=e.total_products})},get_logsList:function(){var e=Bmob.Query("logs");e.equalTo("parent","==",s),e.equalTo("type","!=",-2),e.order("-createdAt"),e.limit(20),e.find().then(function(e){var t=!0,o=!1,i=void 0;try{for(var s,r=(0,n.default)(e);!(t=(s=r.next()).done);t=!0){var c=s.value;5==c.type?c.link="/pages/manage/good_det/good_det?id="+c.detail_id+"&type=false":-1!=c.type&&1!=c.type&&2!=c.type&&3!=c.type||(c.link="/pages/report/EnteringHistory/detail/detail?id="+c.detail_id)}}catch(l){o=!0,i=l}finally{try{t||null==r.return||r.return()}finally{if(o)throw i}}a.logsList=e})}}};t.default=g},ef1e:function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",[o("uni-notice-bar",{attrs:{"show-icon":!0,single:!0,color:"#426ab3",text:"新版库存表上线啦,接下来将更新此小程序,旧版的将不再更新"}}),e.weather?o("v-uni-view",{staticStyle:{background:"#426ab3"}},[o("v-uni-view",{staticClass:"display_flex",staticStyle:{padding:"20rpx 30rpx 10rpx"}},[o("fa-icon",{attrs:{type:e.welcome.icon,size:"20",color:"#fdb933"}}),o("v-uni-text",{staticStyle:{"font-weight":"bold","margin-left":"10rpx",color:"#fff"}},[e._v(e._s(e.welcome.text))])],1),o("v-uni-view",{staticClass:"display_flex_bet",staticStyle:{padding:"0 30rpx 10rpx",color:"#fff","font-size":"24rpx"}},[o("v-uni-view",{staticClass:"display_flex"},[o("v-uni-view",[e._v(e._s(e.weather.city.data))]),o("v-uni-view",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.weather.temperature.data)+"℃")])],1),o("v-uni-view",{staticClass:"display_flex"},[o("v-uni-view",[e._v(e._s(e.weather.weather.data))]),o("v-uni-view",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.weather.winddirection.data)+" "+e._s(e.weather.windpower.data))])],1)],1)],1):e._e(),o("v-uni-view",[e._v(e._s(e.openid))]),o("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":"true","indicator-active-color":"#fff",autoplay:"true"}},[[o("v-uni-swiper-item",{staticClass:"item"},[o("v-uni-view",{staticClass:"every_item"},[o("v-uni-view",{staticClass:"s_num"},[e._v(e._s(e.get_reserve))]),o("v-uni-view",[e._v("今日入库")])],1),o("v-uni-view",{staticClass:"every_item"},[o("v-uni-view",{staticClass:"s_num"},[e._v(e._s(e.out_reserve))]),o("v-uni-view",[e._v("今日出库")])],1)],1),o("v-uni-swiper-item",{staticClass:"item"},[o("v-uni-view",{staticClass:"every_item"},[o("v-uni-view",{staticClass:"s_num"},[e._v(e._s(e.total_reserve))]),o("v-uni-view",[e._v("库存总量")])],1),o("v-uni-view",{staticClass:"every_item"},[o("v-uni-view",{staticClass:"s_num"},[e._v(e._s(e.total_money))]),o("v-uni-view",[e._v("库存成本")])],1)],1),o("v-uni-swiper-item",{staticClass:"item"},[o("v-uni-view",{staticClass:"every_item"},[o("v-uni-view",{staticClass:"s_num"},[e._v(e._s(e.total_products))]),o("v-uni-view",[e._v("库存种类")])],1)],1)]],2),o("v-uni-swiper",{staticStyle:{color:"#333 !important",height:"10vh",background:"#426ab3"},attrs:{vertical:"true",autoplay:"true"}},[e._l(e.logsList,function(t,i){return o("v-uni-swiper-item",{key:i,staticClass:"item"},[o("v-uni-navigator",{staticClass:"display_flex_bet",staticStyle:{width:"100%",background:"#fff",height:"100%",padding:"0 30rpx"},attrs:{"hover-class":"none",url:t.link}},[o("v-uni-view",{staticStyle:{"line-height":"5vh",width:"90%"}},[o("v-uni-view",{staticClass:"text_overflow",staticStyle:{"font-weight":"bold"}},[e._v(e._s(t.log))]),o("v-uni-view",{staticStyle:{"font-size":"24rpx",color:"#999"}},[e._v(e._s(t.createdAt))])],1),o("fa-icon",{attrs:{type:"angle-right",size:"18",color:"#999"}})],1)],1)})],2),o("v-uni-view",{staticClass:"o_list",staticStyle:{"margin-top":"20rpx"}},e._l(e.optionsLists,function(t,i){return o("v-uni-navigator",{key:i,staticClass:"o_item",attrs:{url:t.url,"hover-class":"none"}},[o("v-uni-view",{staticStyle:{width:"100%"}},[o("v-uni-image",{staticClass:"o_image",attrs:{src:t.icon}})],1),o("v-uni-view",{staticClass:"o_text"},[e._v(e._s(t.name))])],1)}),1),o("v-uni-view",{staticClass:"scan_code display_flex",on:{click:function(t){t=e.$handleEvent(t),e.scan_code(t)}}},[o("fa-icon",{staticClass:"icon-scan",attrs:{type:"qrcode",size:"20",color:"#fff"}}),o("v-uni-text",[e._v("扫描产品条形码")])],1)],1)},n=[];o.d(t,"a",function(){return i}),o.d(t,"b",function(){return n})}}]);