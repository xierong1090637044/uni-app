;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/sSystemModule/sSystemModule"],{3917:function(e,n,t){"use strict";t.r(n);var o=t("fddd"),i=t.n(o);for(var l in o)"default"!==l&&function(e){t.d(n,e,(function(){return o[e]}))}(l);n["default"]=i.a},"39a4":function(e,n,t){},"45ad":function(e,n,t){"use strict";var o=t("39a4"),i=t.n(o);i.a},"9a96":function(e,n,t){"use strict";var o,i=function(){var e=this,n=e.$createElement;e._self._c},l=[];t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return l})),t.d(n,"a",(function(){return o}))},f85b:function(e,n,t){"use strict";t.r(n);var o=t("9a96"),i=t("3917");for(var l in i)"default"!==l&&function(e){t.d(n,e,(function(){return i[e]}))}(l);t("45ad");var u,a=t("f0c5"),c=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);n["default"]=c.exports},fddd:function(e,n,t){"use strict";(function(e,t){var o;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{fristEle:[{name:"数据备份",notice:"敬请期待",icon:"cloud-upload",id:0},{name:"账号注销",notice:"敬请期待",icon:"telegram",id:1},{name:"系统重建",notice:"敬请期待",icon:"link",id:2}],secondEle:[{name:"导入模板",notice:"查看->导入",icon:"cloud-upload",url:"/pages/mine/uploadFile/uploadFile",id:3},{name:"导入商品资料",notice:"会员可用",icon:"cloud-upload",url:"/pages/mine/uploadFile/uploadFile",id:4}],thridEle:[{name:"系统设置",notice:"",icon:"cog",url:"/pages/mine/setting/setting",id:5}],nowFristEle:[],nowSecondEle:[],nowThridEle:[],user:e.getStorageSync("user")}},mounted:function(){o=this,2==o.user.identity?(o.nowFristEle=[],o.nowSecondEle=[],o.nowThridEle=[]):(o.nowFristEle=o.fristEle,o.nowSecondEle=o.secondEle,o.nowThridEle=o.thridEle)},methods:{options:function(n){3==n?o.downloadDemoFile():4==n?o.uploadfile():5==n&&e.navigateTo({url:"/pages/mine/setting/setting"})},downloadDemoFile:function(){t.downloadFile({url:"https://www.jimuzhou.com/static/demo.xlsx",success:function(e){var n=e.tempFilePath;t.openDocument({filePath:n,fileType:"xlsx",success:function(e){console.log("打开文档成功")}})}})},uploadfile:function(){o.user.is_vip?(e.showLoading({title:"上传中..."}),t.chooseMessageFile({count:1,type:"file",success:function(n){console.log(n);var t=n.tempFiles;e.uploadFile({url:"https://www.jimuzhou.com/api/getfile.php",filePath:t[0].path,name:"file",formData:{userid:e.getStorageSync("uid")},success:function(n){var t=JSON.parse(n.data);e.hideLoading(),"1"==t.code&&e.showToast({title:"上传成功"})}})}})):e.showToast({title:"您还不是会员",icon:"none"})}}};n.default=i}).call(this,t("c11b")["default"],t("c11b")["default"])}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/sSystemModule/sSystemModule-create-component',
    {
        'components/sSystemModule/sSystemModule-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("f85b"))
        })
    },
    [['components/sSystemModule/sSystemModule-create-component']]
]);
