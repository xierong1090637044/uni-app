(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-report-EnteringHistory-EnteringHistory"],{"21c0":function(e,t,n){var i=n("bfc1");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("0a87ec79",i,!0,{sourceMap:!1,shadowMode:!1})},"2bfc":function(e,t,n){"use strict";n.r(t);var i=n("7715"),a=n("80d9");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("58ab");var r=n("2877"),s=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"68102392",null);t["default"]=s.exports},"51f6":function(e,t,n){"use strict";n.r(t);var i=n("a5c6"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},"58ab":function(e,t,n){"use strict";var i=n("21c0"),a=n.n(i);a.a},"76ab":function(e,t,n){"use strict";n.r(t);var i=n("8820"),a=n("51f6");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("d701");var r=n("2877"),s=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"bae53b1e",null);t["default"]=s.exports},7715:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-pagination"},[n("v-uni-view",{staticClass:"uni-pagination__btns"},[n("v-uni-view",{class:["uni-pagination__btn",{"uni-pagination--disabled":1===e.currentIndex}],attrs:{"hover-class":1===e.currentIndex?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){t=e.$handleEvent(t),e.clickLeft(t)}}},[e.showIcon?[n("uni-icon",{attrs:{color:"#000",size:"20",type:"arrowleft"}})]:[e._v(e._s(e.prevText))]],2),n("v-uni-view",{class:["uni-pagination__btn",{"uni-pagination--disabled":e.currentIndex===e.maxPage}],attrs:{"hover-class":e.currentIndex===e.maxPage?"":"uni-pagination--hover","hover-start-time":20,"hover-stay-time":70},on:{click:function(t){t=e.$handleEvent(t),e.clickRight(t)}}},[e.showIcon?[n("uni-icon",{attrs:{color:"#000",size:"20",type:"arrowright"}})]:[e._v(e._s(e.nextText))]],2)],1),n("v-uni-view",{staticClass:"uni-pagination__num"},[n("v-uni-input",{staticClass:"uni-pagination__num-current",staticStyle:{"text-align":"center","margin-top":"10rpx"},attrs:{value:e.currentIndex,type:"number"},on:{blur:function(t){t=e.$handleEvent(t),e.inputNumber(t)},confirm:function(t){t=e.$handleEvent(t),e.inputNumber(t)}}})],1)],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"80d9":function(e,t,n){"use strict";n.r(t);var i=n("cd4e"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},8820:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",[n("uni-nav-bar",{attrs:{fixed:!1,color:"#333333","background-color":"#FFFFFF","right-text":"筛选","left-text":e.operaterTypeDesc},on:{"click-right":function(t){t=e.$handleEvent(t),e.shaixuan_click(t)},"click-left":function(t){t=e.$handleEvent(t),e.select_operatertype(t)}}}),n("v-uni-view",{staticClass:"display_flex good_option_view"},[n("v-uni-view",{staticClass:"good_option",on:{click:function(t){t=e.$handleEvent(t),e.selectd("all")}}},[n("v-uni-text",{class:"all"==e.checked_option?"option_selected":""},[e._v("全部")]),"all"==e.checked_option?n("fa-icon",{attrs:{type:"check",size:"20",color:"#1d953f"}}):e._e()],1),n("v-uni-view",{staticClass:"good_option",on:{click:function(t){t=e.$handleEvent(t),e.selectd("one")}}},[n("v-uni-text",{class:"one"==e.checked_option?"option_selected":""},[e._v("今天")]),"one"==e.checked_option?n("fa-icon",{attrs:{type:"check",size:"20",color:"#1d953f"}}):e._e()],1),n("v-uni-view",{staticClass:"good_option",on:{click:function(t){t=e.$handleEvent(t),e.selectd("two")}}},[n("v-uni-text",{class:"two"==e.checked_option?"option_selected":""},[e._v("昨天")]),"two"==e.checked_option?n("fa-icon",{attrs:{type:"check",size:"20",color:"#1d953f"}}):e._e()],1),n("v-uni-view",{staticClass:"good_option",on:{click:function(t){t=e.$handleEvent(t),e.selectd("three")}}},[n("v-uni-text",{class:"three"==e.checked_option?"option_selected":""},[e._v("七天")]),"three"==e.checked_option?n("fa-icon",{attrs:{type:"check",size:"20",color:"#1d953f"}}):e._e()],1),n("v-uni-view",{staticClass:"good_option",on:{click:function(t){t=e.$handleEvent(t),e.selectd("four")}}},[n("v-uni-text",{class:"four"==e.checked_option?"option_selected":"three"},[e._v("一个月")]),"four"==e.checked_option?n("fa-icon",{attrs:{type:"check",size:"20",color:"#1d953f"}}):e._e()],1)],1),n("v-uni-view",[n("v-uni-view",{staticClass:"page"},[e.list.length>0?n("v-uni-scroll-view",{staticClass:"page",attrs:{"scroll-y":"true"}},[n("v-uni-view",{staticClass:"list-item"},e._l(e.list,function(t,i){return n("v-uni-view",{key:i,staticClass:"item",on:{click:function(n){n=e.$handleEvent(n),e.get_detail(t.objectId)}}},[n("v-uni-view",{staticStyle:{display:"flex",width:"calc(100% - 120rpx)"}},[n("v-uni-view",{staticStyle:{"line-height":"80rpx"}},[1==t.type?n("fa-icon",{attrs:{type:"sign-in",size:"20",color:"#2ca879"}}):e._e(),-1==t.type?n("fa-icon",{attrs:{type:"sign-out",size:"20",color:"#f30"}}):e._e(),-2==t.type?n("fa-icon",{attrs:{type:"random",size:"20",color:"#4e72b8"}}):e._e(),2==t.type?n("fa-icon",{attrs:{type:"leanpub",size:"20",color:"#b3b242"}}):e._e(),3==t.type?n("fa-icon",{attrs:{type:"check-square-o",size:"20",color:"#000"}}):e._e()],1),n("v-uni-view",{staticStyle:{"margin-left":"20rpx"}},[n("v-uni-view",[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("操作者：")]),e._v(e._s(t.opreater.nickName))],1),t.stock&&t.stock.stock_name?n("v-uni-view",[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("仓库：")]),e._v(e._s(t.stock.stock_name))],1):e._e(),t.goodsName?n("v-uni-view",[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("操作商品：")]),e._v(e._s(t.goodsName)+" 等...")],1):e._e(),t.beizhu?n("v-uni-view",{staticClass:"item_beizhu"},[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("备注：")]),e._v(e._s(t.beizhu))],1):e._e(),n("v-uni-view",[n("v-uni-text",{staticStyle:{color:"#999"}},[e._v("操作时间：")]),e._v(e._s(t.createdAt))],1)],1)],1),-1==t.type?n("v-uni-view",[1==t.extra_type?n("v-uni-view",{staticClass:"order_get",style:0==t.status?"border:1rpx solid#f30;color:#f30":""},[n("v-uni-text",[e._v("销售")])],1):n("v-uni-view",{staticClass:"order_get"},[n("v-uni-text",[e._v("出库")])],1)],1):-2==t.type?n("v-uni-view",{staticClass:"order_returning",staticStyle:{color:"#4e72b8",border:"1rpx solid#4e72b8"}},[e._v("调拨")]):2==t.type?n("v-uni-view",{staticClass:"order_returning"},[e._v("退货")]):3==t.type?n("v-uni-view",{staticClass:"order_counting"},[e._v("盘点")]):e._e(),1==t.type?n("v-uni-view",[1==t.extra_type?n("v-uni-view",{staticClass:"order_get",style:0==t.status?"border:1rpx solid#f30;color:#f30":""},[n("v-uni-text",[e._v("采购")])],1):n("v-uni-view",{staticClass:"order_get"},[n("v-uni-text",[e._v("入库")])],1)],1):e._e()],1)}),1)],1):n("nocontent",{attrs:{type:1}})],1),n("v-uni-view",{staticStyle:{padding:"6rpx 0","border-top":"1rpx solid#ddd"}},[n("uni-pagination",{attrs:{"show-icon":!0,total:"100000",current:e.page_num},on:{change:function(t){t=e.$handleEvent(t),e.change_page(t)}}})],1)],1)],1),e.showOptions?n("v-uni-view",{staticClass:"modal_background",nativeOn:{tap:function(t){t.stopPropagation(),e.showOptions=!1}}},[n("v-uni-view",{staticClass:"showOptions"},[n("v-uni-view",{staticClass:"input_item1"},[n("v-uni-view",{staticStyle:{display:"flex","align-items":"center",width:"100%"}},[n("v-uni-view",{staticClass:"left_item"},[e._v("产品名称")]),n("v-uni-view",{staticClass:"right_input"},[n("v-uni-input",{attrs:{placeholder:"产品名称"},on:{click:function(t){t.stopPropagation(),t=e.$handleEvent(t)}},model:{value:e.goodsName,callback:function(t){e.goodsName=t},expression:"goodsName"}})],1)],1)],1),n("v-uni-navigator",{staticClass:"input_item1",attrs:{"hover-class":"none",url:"/pages/manage/staff/staff?type=choose"}},[n("v-uni-view",{staticStyle:{display:"flex","align-items":"center",width:"100%"}},[n("v-uni-view",{staticClass:"left_item"},[e._v("操作者")]),n("v-uni-view",{staticClass:"right_input"},[n("v-uni-input",{attrs:{placeholder:"操作者",value:e.staff.username,disabled:"true"}})],1)],1),n("v-uni-view",[n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1),n("v-uni-navigator",{staticClass:"input_item1",attrs:{"hover-class":"none",url:"/pages/manage/warehouse/warehouse?type=choose"}},[n("v-uni-view",{staticStyle:{display:"flex","align-items":"center",width:"100%"}},[n("v-uni-view",{staticClass:"left_item"},[e._v("仓库")]),n("v-uni-view",{staticClass:"right_input"},[n("v-uni-input",{attrs:{placeholder:"选择仓库",value:e.stock.stock_name,disabled:"true"}})],1)],1),n("v-uni-view",[n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1),n("v-uni-view",{staticClass:"input_item1"},[n("v-uni-view",[n("v-uni-picker",{attrs:{mode:"date",value:e.option_now_day,end:e.max_day},on:{change:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.bindDateChange1(t)},click:function(t){t.stopPropagation(),t=e.$handleEvent(t)}}},[n("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[n("v-uni-view",{staticStyle:{"margin-right":"20rpx"}},[e._v(e._s(e.option_now_day))]),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1)],1),n("v-uni-view",[e._v("至")]),n("v-uni-view",[n("v-uni-picker",{attrs:{mode:"date",value:e.option_end_day,end:e.max_day},on:{change:function(t){t.stopPropagation(),t=e.$handleEvent(t),e.bindDateChange2(t)},click:function(t){t.stopPropagation(),t=e.$handleEvent(t)}}},[n("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[n("v-uni-view",{staticStyle:{"margin-right":"20rpx"}},[e._v(e._s(e.option_end_day))]),n("fa-icon",{attrs:{type:"angle-right",size:"20",color:"#999"}})],1)],1)],1)],1),n("v-uni-view",{staticClass:"option_bottom"},[n("v-uni-view",{staticClass:"selection",on:{click:function(t){t=e.$handleEvent(t),e.option_reset(t)}}},[e._v("重置")]),n("v-uni-view",{staticClass:"selection1",on:{click:function(t){t=e.$handleEvent(t),e.option_confrim(t)}}},[e._v("确定")])],1)],1)],1):e._e()],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},a5c6:function(e,t,n){"use strict";(function(e){var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("7514"),n("c5f6");var a,o,r,s=i(n("c74b")),c=i(n("df06")),l=i(n("b92d")),u=i(n("5753")),d=i(n("2bfc")),f=30,v=1,p={components:{uniPagination:d.default,uniNavBar:l.default,uniIcon:u.default},data:function(){return{stock:"",now_day:c.default.getDay(0,!1),end_day:c.default.getDay(1,!1),option_now_day:c.default.getDay(0,!1),option_end_day:c.default.getDay(1,!1),max_day:c.default.getDay(0,!1),page_num:1,checked_option:"all",list:[],showOptions:!1,is_checked:!1,data_change:!1,goodsName:"",staff:"",operaterTypeDesc:""}},onLoad:function(e){o=this,uni.removeStorageSync("charge"),uni.removeStorageSync("is_option"),r=Number(e.type),a=uni.getStorageSync("uid"),1==r?(o.operaterTypeDesc="操作类型",uni.setNavigationBarTitle({title:"入库详情"})):-1==r?(o.operaterTypeDesc="操作类型",uni.setNavigationBarTitle({title:"出库详情"})):2==r?uni.setNavigationBarTitle({title:"退货详情"}):3==r&&uni.setNavigationBarTitle({title:"盘点详情"}),o.get_list()},onShow:function(){uni.getStorageSync("charge")&&(o.staff=uni.getStorageSync("charge")),uni.getStorageSync("warehouse")&&(o.stock=uni.getStorageSync("warehouse")[0].stock),uni.getStorageSync("is_option")&&o.get_list()},onUnload:function(){f=30,v=1},methods:{select_operatertype:function(){uni.showActionSheet({itemList:1==r?["入库","采购"]:["出库","销售"],success:function(e){1==r?0==e.tapIndex?o.operaterTypeDesc="入库":o.operaterTypeDesc="采购":-1==r&&(0==e.tapIndex?o.operaterTypeDesc="出库":o.operaterTypeDesc="销售"),o.get_list()},fail:function(t){e.log(t.errMsg)}})},bindDateChange1:function(e){o.data_change=!0,o.now_day=e.detail.value,o.option_now_day=e.detail.value},bindDateChange2:function(e){o.data_change=!0,o.end_day=e.detail.value,o.option_end_day=e.detail.value},selectd:function(e){"one"==e?(o.now_day=c.default.getDay(0,!1),o.end_day=c.default.getDay(1,!1)):"two"==e?(o.now_day=c.default.getDay(-1,!1),o.end_day=c.default.getDay(0,!1)):"three"==e?(o.now_day=c.default.getDay(-7,!1),o.end_day=c.default.getDay(1,!1)):"four"==e?(o.now_day=c.default.getDay(-30,!1),o.end_day=c.default.getDay(1,!1)):(o.now_day="",o.end_day=""),v=1,o.page_num=1,o.checked_option=e,o.get_list()},shaixuan_click:function(){o.showOptions=!0},option_reset:function(){uni.removeStorageSync("charge"),uni.removeStorageSync("warehouse"),o.stock="",o.goodsName="",o.staff="",o.data_change=!1,o.is_checked=!1,o.showOptions=!1,o.get_list()},option_confrim:function(){o.is_checked=!0,o.showOptions=!1,o.get_list()},change_page:function(e){v=e.current,o.get_list()},get_list:function(){var e=this;uni.showLoading({title:"加载中..."});var t=s.default.Query("order_opreations");t.equalTo("master","==",a),t.equalTo("type","==",r),uni.getStorageSync("charge")&&t.equalTo("opreater","==",o.staff.userId.objectId),t.equalTo("goodsName","==",{$regex:o.goodsName+".*"}),o.stock&&t.equalTo("stock","==",o.stock.objectId),"all"!=o.checked_option?(t.equalTo("createdAt",">=",o.now_day+" 00:00:00"),t.equalTo("createdAt","<=",o.end_day+" 00:00:00")):1==o.is_checked&&1==o.data_change&&(t.equalTo("createdAt",">=",o.option_now_day+" 00:00:00"),t.equalTo("createdAt","<=",o.option_end_day+" 00:00:00")),"采购"==o.operaterTypeDesc||"出售"==o.operaterTypeDesc?t.equalTo("extra_type","==",1):"入库"!=o.operaterTypeDesc&&"出库"!=o.operaterTypeDesc||t.equalTo("extra_type","==",2),t.limit(f),t.skip(f*(v-1)),t.include("opreater","stock"),t.order("-createdAt"),t.find().then(function(t){e.list=t,wx.hideLoading()})},get_detail:function(e){wx.navigateTo({url:"detail/detail?id="+e})}}};t.default=p}).call(this,n("5a52")["default"])},bfc1:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'.uni-pagination[data-v-68102392]{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?40?%;position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.uni-pagination__btns[data-v-68102392]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.uni-pagination__btn[data-v-68102392]{width:%?120?%;height:%?60?%;padding:0 %?16?%;line-height:%?60?%;font-size:%?28?%;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;background-color:#f8f8f8;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.uni-pagination__btn[data-v-68102392]:after{content:"";width:200%;height:200%;position:absolute;top:0;left:0;border:1px solid #c8c7cc;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?12?%}.uni-pagination__num[data-v-68102392]{height:%?60?%;line-height:%?60?%;font-size:%?28?%;color:#333;position:absolute;left:50%;top:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.uni-pagination__num-current[data-v-68102392]{color:#007aff}.uni-pagination--disabled[data-v-68102392]{opacity:.3}.uni-pagination--hover[data-v-68102392]{color:rgba(0,0,0,.6);background-color:#f1f1f1}',""])},cbb9:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".page[data-v-bae53b1e]{overflow:hidden;height:calc(100vh - %?234?%);font-size:%?28?%;color:#3d3d3d;background:#fafafa}.status_noconfrim[data-v-bae53b1e]{border:1prx solid#f30!important;color:#f30!important}.item[data-v-bae53b1e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background-color:#fff;padding:%?20?%;border-bottom:%?0.5?% solid#ddd}.icon-order[data-v-bae53b1e]{font-size:%?44?%;color:#426ab3}.list-item[data-v-bae53b1e]{height:100%;overflow:scroll}.select_time[data-v-bae53b1e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;line-height:%?80?%;color:#999;padding:0 %?30?%}.item_beizhu[data-v-bae53b1e]{max-width:calc(100% - %?120?%);overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.order_get[data-v-bae53b1e]{padding:%?0?% %?30?%;color:#2ca879;border:%?0.5?% solid#2ca879;height:%?52?%;line-height:%?52?%;border-radius:%?8?%}.order_out[data-v-bae53b1e]{padding:0 15px;color:#f30;border:1px solid#f30;height:26px;line-height:26px;margin-top:7px;border-radius:4px}.order_counting[data-v-bae53b1e]{padding:0 15px;color:#000;border:1px solid#000;height:26px;line-height:26px;margin-top:7px;border-radius:4px}.order_returning[data-v-bae53b1e]{padding:0 15px;color:#b3b242;border:1px solid#b3b242;height:26px;line-height:26px;margin-top:7px;border-radius:4px}",""])},cd4e:function(e,t,n){"use strict";(function(e){var i=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c5f6");var a=i(n("5753")),o={name:"UniPagination",components:{uniIcon:a.default},props:{prevText:{type:String,default:"上一页"},nextText:{type:String,default:"下一页"},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:Boolean,default:!1}},data:function(){return{currentIndex:1}},computed:{maxPage:function(){var e=1,t=Number(this.total),n=Number(this.pageSize);return t&&n&&(e=Math.ceil(t/n)),e}},watch:{current:function(e){this.currentIndex=+e}},created:function(){this.currentIndex=+this.current},methods:{clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)!==this.maxPage&&(this.currentIndex+=1,this.change("next"))},inputNumber:function(t){e.log(t),this.currentIndex=Number(t.detail.value),this.$emit("change",{type:t,current:this.currentIndex})},change:function(t){e.log(t),this.$emit("change",{type:t,current:this.currentIndex})}}};t.default=o}).call(this,n("5a52")["default"])},d701:function(e,t,n){"use strict";var i=n("d78a"),a=n.n(i);a.a},d78a:function(e,t,n){var i=n("cbb9");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("3715a750",i,!0,{sourceMap:!1,shadowMode:!1})},df06:function(e,t,n){"use strict";(function(t){var i=n("288e");n("6b54"),n("87b3"),n("7514");var a=i(n("5d73"));n("c5f6");var o=i(n("795b")),r=i(n("c74b"));e.exports={enterAddGoodNum:function(e){return new o.default(function(n,i){for(var o=function(i){var o=0,s=r.default.Query("Goods");s.get(e[i].objectId).then(function(r){if(t.log(e[i]),e[i].selectd_model){var s=!0,c=!1,l=void 0;try{for(var u,d=(0,a.default)(e[i].selected_model);!(s=(u=d.next()).done);s=!0){var f=u.value,v=!0,p=!1,g=void 0;try{for(var h,_=(0,a.default)(e[i].models);!(v=(h=_.next()).done);v=!0){var b=h.value;b.id==f.id&&(b.reserve=Number(b.reserve)+Number(f.num)),delete b.num}}catch(y){p=!0,g=y}finally{try{v||null==_.return||_.return()}finally{if(p)throw g}}}}catch(y){c=!0,l=y}finally{try{s||null==d.return||d.return()}finally{if(c)throw l}}o=Number(e[i].reserve)+Number(e[i].num),r.set("models",e[i].models)}else o=Number(e[i].reserve)+Number(e[i].num);r.set("reserve",o),r.set("stocktype",o>e[i].warning_num?1:0),r.save(),i==e.length-1&&n(!0)}).catch(function(e){t.log(e)})},s=0;s<e.length;s++)o(s)})},outRedGoodNum:function(e){var n=this;return new o.default(function(i,o){for(var s=function(o){var s=0,c=r.default.Query("Goods");c.get(e[o].objectId).then(function(t){if(e[o].selectd_model){var r=!0,c=!1,l=void 0;try{for(var u,d=(0,a.default)(e[o].selected_model);!(r=(u=d.next()).done);r=!0){var f=u.value,v=!0,p=!1,g=void 0;try{for(var h,_=(0,a.default)(e[o].models);!(v=(h=_.next()).done);v=!0){var b=h.value;s+=Number(b.reserve),b.id==f.id&&(b.reserve=Number(b.reserve)-Number(f.num)),delete b.num}}catch(y){p=!0,g=y}finally{try{v||null==_.return||_.return()}finally{if(p)throw g}}}}catch(y){c=!0,l=y}finally{try{r||null==d.return||d.return()}finally{if(c)throw l}}s=Number(e[o].reserve)-Number(e[o].num),t.set("models",e[o].models)}else s=Number(e[o].reserve)-Number(e[o].num);t.set("reserve",s),t.set("stocktype",s>=e[o].warning_num?1:0),t.save(),e[o].warning_num>=s&&n.log(e[o].goodsName+"出库了"+e[o].num+"件，已经低于预警数量"+e[o].warning_num,-2,e[o].objectId),n.record_staffOut(Number(e[o].num)),o==e.length-1&&i(!0)}).catch(function(e){t.log(e)})},c=0;c<e.length;c++)s(c)})},handleData:function(){uni.removeStorageSync("warehouse"),uni.removeStorageSync("stock"),uni.removeStorageSync("custom"),uni.removeStorageSync("category"),uni.removeStorageSync("class_user"),uni.removeStorageSync("second_class")},log:function(e,n,i){var a=r.default.Pointer("_User"),o=a.set(uni.getStorageSync("uid")),s=r.default.Query("logs");s.set("parent",o),s.set("log",e),s.set("detail_id",i),s.set("type",n),s.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})},record_shopOut:function(e,n){t.log(e,n);var i=r.default.Query("shops");i.set("id",e),i.set("have_out",n),i.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})},record_staffOut:function(e){if(t.log(e,uni.getStorageSync("user").have_out),1==uni.getStorageSync("identity"));else{var n=r.default.Query("staffs");n.set("id",uni.getStorageSync("user").objectId),n.set("have_out",Number(e)+uni.getStorageSync("user").have_out),n.save().then(function(e){t.log(e)}).catch(function(e){t.log(e)})}},get_allCost:function(){var e=uni.getStorageSync("uid");t.log(e);var n=r.default.Query("Goods");n.equalTo("userId","==",e),n.find().then(function(e){t.log(e);var n=!0,i=!1,o=void 0;try{for(var r,s=(0,a.default)(e);!(n=(r=s.next()).done);n=!0){var c=r.value;t.log(c),Number(c.costPrice)*c.reserve,c.reserve}}catch(l){i=!0,o=l}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}})},getDay:function(e,t){var n=this,i=new Date,a=i.getTime()+864e5*e;i.setTime(a);var o=i.getFullYear(),r=i.getMonth(),s=i.getDate();return r=n.handleMonth(r+1),s=n.handleMonth(s),t?o+"-"+r+"-"+s+" 00:00:00":o+"-"+r+"-"+s},js_date_time:function(e,t){var n=new Date(e),i=n.getFullYear(),a=n.getMonth()+1;a=a<10?"0"+a:a;var o=n.getDate();o=o<10?"0"+o:o;var r=n.getHours();r=r<10?"0"+r:r;var s=n.getMinutes(),c=n.getSeconds();return s=s<10?"0"+s:s,c=c<10?"0"+c:c,t?i+"-"+a+"-"+o+" "+r+":"+s:i+"-"+a+"-"+o},handleMonth:function(e){var t=e;return 1==e.toString().length&&(t="0"+e),t}}}).call(this,n("5a52")["default"])}}]);