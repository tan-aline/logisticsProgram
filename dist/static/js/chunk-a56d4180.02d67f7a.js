(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a56d4180"],{"0681":function(t,e,a){"use strict";var s=a("62a4"),i=a.n(s);i.a},"09ff":function(t,e,a){"use strict";var s=a("e7df"),i=a.n(s);i.a},"0a86":function(t,e,a){"use strict";a.d(e,"e",(function(){return i})),a.d(e,"f",(function(){return n})),a.d(e,"d",(function(){return r})),a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return l}));var s=a("b775"),i=function(t){return Object(s["a"])("/transport-task-manager/page","post",t)},n=function(t){return Object(s["a"])("/transport-task-manager/count","get",t)},r=function(t){return Object(s["a"])("/transport-task-manager/".concat(t),"get",t)},o=function(t){return Object(s["a"])("/transport-task-manager/cancel/".concat(t),"put")},c=function(t){return Object(s["a"])("/transport-task-manager/adjust/".concat(t.id),"put",t)},l=function(t){return Object(s["a"])("/workingTrucks","get",t)}},"0a87":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAAktJREFUWAntU89rE0EYndm26UEroYdQEKVYKMxmmwRy7SGoKAhFRCJeelBQFBRU0NJDafBQ2iJ48KIeRFBRiUfBS0tbhYagSAj74+IfIDloK1ilm93pm0NKsu4sG5AeygwMu98373vfm/ftEqKWckA5oBzYjw7kcrlhXddn0+n00P+8H/jGwTtdKpU0GW/Hgeu6FwnnJe77a9ls9rCsqJv8mK6fBecy9ly5XD4mq+0QAtBT7K/Yo03XXcNNjsoK4+RRf94npMw5TxBKH1iW9U1W1yEEwB+J/v4TlNLPKB4RzohxyYqj8hAh3H0Dnj7wzdu2fTcK3yFEAGu12sbBgYGTlJAKwmF3e/ujYRgjUSTBM4OxSeL7LyGiFyLuW7Y9HcQE43+ECEC1Wv2VHBw8DTs/gewI9zzxzYwGi8NiQ9cvYxzPOSE9uMwMRMyG4YI5YOUrk8kc8Fz3PUgLuNl3qmnHTdN0ZBUYx1WM8zHOKYinLMdZlGGD+VBHWqB6vf77UDJ5BrRLcGYITVbHsFrn7U+IuLErQtPudCNC8EQKEYBKpfInlUpNQMwHiEl5zeYKmubEWWshvg0Rj0QM127io3/YOov7jBxNOwmaJfAXvIOYCYzpJxqewpi+pBm7h9EtAMsh9jr+jiftdXHfYwsRhPl8vu/v1tZbND6Hwk3s1/gwr+HI1yi9Ytr2s7iNg7iuhIjiQqHQ22g0XsGdCyIGgYd9yXScFyLe01UsFnsYY+s6Yz5Gc2tPm4c1E4LC8iqnHFAOKAeUA8qBNgd2AL+XzVHl23aVAAAAAElFTkSuQmCC"},"1cf3":function(t,e,a){},"2b1a":function(t,e,a){},3283:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",{staticClass:"customer-details-box"},[s("el-card",{class:t.isShow?"show":"hidden",staticStyle:{width:"100%"},attrs:{shadow:"never"}},[s("div",{staticClass:"block"},[s("div",{staticClass:"car-base delivery-pic"},[t._v("交付照片\n        "),s("img",{ref:"arrow",staticStyle:{position:"absolute",width:"18px",height:"18px",right:"44px",top:"20px",cursor:"pointer","transition-duration":"0.3s"},attrs:{src:a("0a87")},on:{click:t.open}})]),t._v(" "),s("div",{staticClass:"demo-input-suffix",staticStyle:{color:"#2a2929","font-size":"14px",padding:"20px 26px 40px"}},[s("div",{staticClass:"img-label",staticStyle:{"margin-left":"70px"}},[t._v("货品照片")]),t._v(" "),s("div",{staticClass:"img-box"},[s("img",{staticStyle:{width:"212px",height:"159px","border-radius":"4px"},attrs:{src:t.deliverPicture||t.defaultPic},on:{click:function(){t.srcList=[],t.srcList.push(t.defaultPic)}}}),t._v(" "),s("div",{staticClass:"img-shadow"},[s("img",{staticClass:"el-upload-span searchBigImg",attrs:{src:a("3fdf")},on:{click:function(e){return e.stopPropagation(),t.searchBigImg(t.deliverPicture||t.defaultPic)}}})])]),t._v(" "),s("div",{staticClass:"img-label",staticStyle:{"margin-left":"20%"}},[t._v("凭证照片")]),t._v(" "),s("div",{staticClass:"img-box"},[s("img",{staticStyle:{width:"212px",height:"159px","border-radius":"4px"},attrs:{src:t.transportCertificate||t.defaultPic},on:{click:function(){t.srcList=[],t.srcList.push(t.defaultPic)}}}),t._v(" "),s("div",{staticClass:"img-shadow"},[s("img",{staticClass:"el-upload-span searchBigImg",attrs:{src:a("3fdf")},on:{click:function(e){return e.stopPropagation(),t.searchBigImg(t.transportCertificate||t.defaultPic)}}})])])])])]),t._v(" "),s("el-dialog",{attrs:{visible:t.dialogVisible,width:"600px",height:"600px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[s("img",{attrs:{width:"100%",src:t.imageUrl,alt:""}})])],1)},i=[],n=(a("96cf"),a("3b8d")),r=a("0a86"),o={data:function(){return{dialogVisible:!1,imageUrl:"",isShow:!0,srcList:["https://elevator4s-oss.oss-cn-hangzhou.aliyuncs.com/2021/05/07/b632db6a837f46e0950670277fa9e5e5multipartFile.png"],deliverPicture:"",transportCertificate:"",defaultPic:"https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/282b9ee4-9edc-40e9-b365-84dec2cce429.png"}},created:function(){this.id=this.$route.query.id,this.getList(this.id)},methods:{open:function(){this.isShow=!this.isShow,this.$refs.arrow.style.transform=this.isShow?"rotate(0deg)":"rotate(-90deg)"},searchBigImg:function(t){this.imageUrl=t,this.dialogVisible=!0},getList:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["d"])(e);case 2:a=t.sent,s=a.data,this.deliverPicture=s.deliverPicture,this.transportCertificate=s.transportCertificate;case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleTaskList:function(){this.$router.push({path:"/transport/transport-task"})}}},c=o,l=(a("dd15"),a("2877")),u=Object(l["a"])(c,s,i,!1,null,"f111d678",null);e["default"]=u.exports},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"3fdf":function(t,e){t.exports="data:image/png;base64,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"},4461:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",{staticClass:"customer-details-box"},[s("el-card",{class:t.isShow?"show":"hidden",staticStyle:{width:"100%"},attrs:{shadow:"never"}},[s("div",{staticClass:"block"},[s("div",{staticClass:"car-base task-info"},[t._v("\n        基本信息\n        "),s("img",{ref:"arrow",staticStyle:{position:"absolute",width:"18px",height:"18px",right:"44px",top:"20px",cursor:"pointer","transition-duration":"0.3s"},attrs:{src:a("0a87")},on:{click:t.open}})]),t._v(" "),s("el-card",{staticClass:"form-box",attrs:{shadow:"never"}},[s("div",{staticClass:"form-item-box"},[s("div",{staticClass:"form-item"},[s("span",{staticClass:"span-title"},[t._v("运输任务编号：")]),t._v(" "),s("el-input",{attrs:{disabled:t.disabled,placeholder:"请输入运输任务编号"},model:{value:t.taskInfo.taskNo,callback:function(e){t.$set(t.taskInfo,"taskNo",e)},expression:"taskInfo.taskNo"}})],1),t._v(" "),s("div",{staticClass:"form-item"},[s("span",{staticClass:"span-title"},[t._v("车牌号码：")]),t._v(" "),s("el-input",{attrs:{disabled:t.disabled,placeholder:"请输入车牌号码"},model:{value:t.taskInfo.carNum,callback:function(e){t.$set(t.taskInfo,"carNum",e)},expression:"taskInfo.carNum"}})],1),t._v(" "),s("div",{staticClass:"form-item"},[s("span",{staticClass:"span-title"},[t._v("调度机构：")]),t._v(" "),s("el-input",{attrs:{disabled:t.disabled,placeholder:"请输入调度机构"},model:{value:t.taskInfo.startAgencyName,callback:function(e){t.$set(t.taskInfo,"startAgencyName",e)},expression:"taskInfo.startAgencyName"}})],1),t._v(" "),s("div",{staticClass:"form-item"},[s("span",{staticClass:"span-title"},[t._v("起始地：")]),t._v(" "),s("el-input",{attrs:{disabled:t.disabled,placeholder:"请输入起始地"},model:{value:t.taskInfo.startAgencyName,callback:function(e){t.$set(t.taskInfo,"startAgencyName",e)},expression:"taskInfo.startAgencyName"}})],1),t._v(" "),s("div",{staticClass:"form-item"},[s("span",{staticClass:"span-title"},[t._v("目的地：")]),t._v(" "),s("el-input",{attrs:{disabled:t.disabled,placeholder:"请输入目的地"},model:{value:t.taskInfo.endAgencyName,callback:function(e){t.$set(t.taskInfo,"endAgencyName",e)},expression:"taskInfo.endAgencyName"}})],1)])])],1)])],1)},i=[],n=(a("7f7f"),a("96cf"),a("3b8d")),r=a("0a86"),o={data:function(){return{isShow:!0,disabled:!0,taskInfo:{taskNo:"",carNum:"",startAgencyName:"",endAgencyName:""}}},created:function(){this.id=this.$route.query.id,this.getList(this.id)},methods:{goBack:function(){},open:function(){this.isShow=!this.isShow,this.$refs.arrow.style.transform=this.isShow?"rotate(0deg)":"rotate(-90deg)"},getList:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["d"])(e);case 2:a=t.sent,s=a.data,this.taskInfo.taskNo=s.id,null!=s.truck&&(this.taskInfo.carNum=s.truck.licensePlate),null!=s.startAgency&&(this.taskInfo.startAgencyName=s.startAgency.name),null!=s.endAgency&&(this.taskInfo.endAgencyName=s.endAgency.name);case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleTaskList:function(){this.$router.push({path:"/transport/transport-task"})}}},c=o,l=(a("09ff"),a("2877")),u=Object(l["a"])(c,s,i,!1,null,"de3397b6",null);e["default"]=u.exports},"491b":function(t,e,a){},"62a4":function(t,e,a){},"6b54":function(t,e,a){"use strict";a("3846");var s=a("cb7c"),i=a("0bfb"),n=a("9e1e"),r="toString",o=/./[r],c=function(t){a("2aba")(RegExp.prototype,r,t,!0)};a("79e5")((function(){return"/a/b"!=o.call({source:"a",flags:"b"})}))?c((function(){var t=s(this);return"/".concat(t.source,"/","flags"in t?t.flags:!n&&t instanceof RegExp?i.call(t):void 0)})):o.name!=r&&c((function(){return o.call(this)}))},9399:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[a("div",{staticClass:"app-container"},t._l(t.menu,(function(t,e){return a("div",{key:e,staticClass:"item"},[a(t.comp,{tag:"div",staticClass:"content"})],1)})),0)])},i=[],n=a("4461"),r=a("e29b"),o=a("ae36"),c=a("3283"),l=a("9b70"),u={components:{taskInfo:n["default"],missionLocus:r["default"],waybillDetail:o["default"],deliveryPic:c["default"],pickPic:l["default"]},data:function(){return{currentComp:"taskInfo",isActive:"1",id:"",menu:[{name:"基本信息",value:"1",comp:n["default"]},{name:"任务轨迹",value:"2",comp:r["default"]},{name:"运单详情",value:"3",comp:o["default"]},{name:"交付照片",value:"4",comp:c["default"]},{name:"提货照片",value:"5",comp:l["default"]}]}},created:function(){},methods:{goBack:function(){}}},d=u,p=(a("a750"),a("2877")),f=Object(p["a"])(d,s,i,!1,null,"28e13ae8",null);e["default"]=f.exports},9619:function(t,e,a){"use strict";var s=a("491b"),i=a.n(s);i.a},"9b70":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",{staticClass:"customer-details-box"},[s("el-card",{class:t.isShow?"show":"hidden",staticStyle:{width:"100%"},attrs:{shadow:"never"}},[s("div",{staticClass:"block"},[s("div",{staticClass:"car-base pick-pic"},[t._v("\n        提货照片\n        "),s("img",{ref:"arrow",staticStyle:{position:"absolute",width:"18px",height:"18px",right:"44px",top:"20px",cursor:"pointer","transition-duration":"0.3s"},attrs:{src:a("0a87")},on:{click:t.open}})]),t._v(" "),s("div",{staticClass:"demo-input-suffix",staticStyle:{color:"#2a2929","font-size":"14px",padding:"20px 26px 40px"}},[s("div",{staticClass:"img-label",staticStyle:{"margin-left":"70px"}},[t._v("货品照片")]),t._v(" "),s("div",{staticClass:"img-box"},[s("img",{staticStyle:{width:"212px",height:"159px","border-radius":"4px"},attrs:{src:t.cargoPicture||t.defaultPic}}),t._v(" "),s("div",{staticClass:"img-shadow"},[s("img",{staticClass:"el-upload-span searchBigImg",attrs:{src:a("3fdf")},on:{click:function(e){return e.stopPropagation(),t.searchBigImg(t.cargoPicture||t.defaultPic)}}})])]),t._v(" "),s("div",{staticClass:"img-label",staticStyle:{"margin-left":"20%"}},[t._v("凭证照片")]),t._v(" "),s("div",{staticClass:"img-box"},[s("img",{staticStyle:{width:"212px",height:"159px","border-radius":"4px"},attrs:{src:t.cargoPickUpPicture||t.defaultPic}}),t._v(" "),s("div",{staticClass:"img-shadow"},[s("img",{staticClass:"el-upload-span searchBigImg",attrs:{src:a("3fdf")},on:{click:function(e){return e.stopPropagation(),t.searchBigImg(t.cargoPickUpPicture||t.defaultPic)}}})])])])])]),t._v(" "),s("el-dialog",{attrs:{visible:t.dialogVisible,width:"600px",height:"600px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[s("img",{attrs:{width:"100%",src:t.imageUrl,alt:""}})])],1)},i=[],n=(a("96cf"),a("3b8d")),r=a("0a86"),o={data:function(){return{dialogVisible:!1,imageUrl:"",isShow:!0,srcList:["https://elevator4s-oss.oss-cn-hangzhou.aliyuncs.com/2021/05/07/b632db6a837f46e0950670277fa9e5e5multipartFile.png"],cargoPicture:"",cargoPickUpPicture:"",defaultPic:"https://yjy-slwl-oss.oss-cn-hangzhou.aliyuncs.com/282b9ee4-9edc-40e9-b365-84dec2cce429.png"}},created:function(){this.id=this.$route.query.id,this.getList(this.id)},methods:{open:function(){this.isShow=!this.isShow,this.$refs.arrow.style.transform=this.isShow?"rotate(0deg)":"rotate(-90deg)"},searchBigImg:function(t){this.imageUrl=t,this.dialogVisible=!0},getList:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["d"])(e);case 2:a=t.sent,s=a.data,this.cargoPicture=s.cargoPicture,this.cargoPickUpPicture=s.cargoPickUpPicture;case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleTaskList:function(){this.$router.push({path:"/transport/transport-task"})}}},c=o,l=(a("9e6d"),a("2877")),u=Object(l["a"])(c,s,i,!1,null,"7ddbcee8",null);e["default"]=u.exports},"9e6d":function(t,e,a){"use strict";var s=a("1cf3"),i=a.n(s);i.a},a750:function(t,e,a){"use strict";var s=a("2b1a"),i=a.n(s);i.a},ae36:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",{staticClass:"customer-details-box waybill-detail"},[s("el-card",{class:t.isShow?"show":"hidden",staticStyle:{width:"100%"},attrs:{shadow:"never"}},[s("div",{staticClass:"block"},[s("div",{staticClass:"car-base"},[t._v("货品信息\n        "),s("img",{ref:"arrow",staticStyle:{position:"absolute",width:"18px",height:"18px",right:"44px",top:"20px",cursor:"pointer","transition-duration":"0.3s"},attrs:{src:a("0a87")},on:{click:t.open}})]),t._v(" "),s("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"form-box",class:{"loading-box":t.listLoading},attrs:{"element-loading-text":"加载中",shadow:"never"}},[s("el-table",{key:t.tableKey,ref:"multipleTable",staticStyle:{width:"100%","text-align":"center",overflow:"auto"},attrs:{data:t.dataList,fit:"",stripe:"","header-cell-style":{background:"rgba(250,252,255,1)"}},on:{"selection-change":t.handleSelectionChange}},[s("div",{directives:[{name:"show",rawName:"v-show",value:(!t.dataList||t.dataList.length<=0)&&!t.listLoading,expression:"(!dataList || dataList.length <= 0) && !listLoading"}],attrs:{slot:"empty"},slot:"empty"},[s("img",{staticStyle:{"margin-top":"20px",width:"20%",height:"20%"},attrs:{src:a("aefe"),alt:"img"}}),t._v(" "),s("p",{staticStyle:{"margin-top":"-20px","padding-bottom":"0px"}},[t._v("这里空空如也")])]),t._v(" "),s("el-table-column",{attrs:{type:"index",label:"序号",width:"100"}}),t._v(" "),s("el-table-column",{attrs:{align:"left",label:"运单编号","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),s("el-table-column",{attrs:{align:"left",label:"下单时间","min-width":"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(null===e.row.order?"":e.row.order.createTime))])]}}])}),t._v(" "),s("el-table-column",{attrs:{align:"left",label:"发件人姓名","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(null===e.row.order?"":e.row.order.senderName))])]}}])}),t._v(" "),s("el-table-column",{attrs:{align:"left",label:"发件人电话","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(null===e.row.order?"":e.row.order.senderPhone))])]}}])}),t._v(" "),s("el-table-column",{attrs:{align:"left",label:"发件人地址","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(null===e.row.order?"":e.row.order.senderAddress))])]}}])}),t._v(" "),s("el-table-column",{attrs:{align:"left",label:"货品数量","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(e.row.order&&e.row.order.orderCargoDtos&&e.row.order.orderCargoDtos.length))])]}}])}),t._v(" "),s("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作","min-width":"86","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(a){return t.handleTransportDetail(e.row.id,e.row)}}},[t._v("查看详情")])]}}])})],1)],1)],1)])],1)},i=[],n=(a("96cf"),a("3b8d")),r=(a("6b54"),a("0a86")),o={name:"Courses",components:{},data:function(){return{isShow:!0,transportOrderCount:"",value:"",multipleSelection:[],tableKey:0,dataList:[],total:null,listLoading:!0,alertText:""}},computed:{status:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return status}))},mounted:function(){},created:function(){var t=this;this.id=this.$route.query.id,this.getList(this.id),document.onkeydown=function(e){var a=window.event.keyCode;13===a&&t.handleFilter(this.requestParameters)}},updated:function(){},methods:{open:function(){this.isShow=!this.isShow,this.$refs.arrow.style.transform=this.isShow?"rotate(0deg)":"rotate(-90deg)"},handleSelectionChange:function(t){this.multipleSelection=t},handleTransportDetail:function(t,e){this.$router.push({path:"/business/waybill-detail",query:{id:t,orderId:e.order&&e.order.id,type:this.$route.query.type}})},getList:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.listLoading=!0,t.next=3,Object(r["d"])(e);case 3:a=t.sent,s=a.data,this.listLoading=!1,null!=s.transportOrders&&(this.dataList=s.transportOrders,this.transportOrderCount=s.transportOrderCount,this.total=s.counts);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleTaskList:function(){this.$router.push({path:"/transport/transport-task"})}}},c=o,l=(a("9619"),a("2877")),u=Object(l["a"])(c,s,i,!1,null,"23d47433",null);e["default"]=u.exports},aefe:function(t,e,a){t.exports=a.p+"static/img/pic-kong.742d3899.png"},d21e:function(t,e,a){},dd15:function(t,e,a){"use strict";var s=a("d21e"),i=a.n(s);i.a},e29b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",{staticClass:"customer-details-box"},[s("el-card",{class:t.isShow?"show":"hidden",staticStyle:{width:"100%"},attrs:{shadow:"never"}},[s("div",{staticClass:"block"},[s("div",{staticClass:"car-base mission-locus"},[t._v("\n        任务轨迹\n        "),s("img",{ref:"arrow",staticStyle:{position:"absolute",width:"18px",height:"18px",right:"44px",top:"20px",cursor:"pointer","transition-duration":"0.3s"},attrs:{src:a("0a87")},on:{click:t.open}})]),t._v(" "),s("el-card",{staticClass:"form-box",attrs:{shadow:"never"}},[s("div",{staticClass:"form-item-box"},[s("div",{staticClass:"form-item"},[s("span",{staticClass:"span-title"},[t._v("车牌号：")]),t._v(" "),s("el-input",{attrs:{disabled:t.disabled,placeholder:"请输入车牌号"},model:{value:t.missionLocus.licensePlate,callback:function(e){t.$set(t.missionLocus,"licensePlate",e)},expression:"missionLocus.licensePlate"}})],1),t._v(" "),s("div",{staticClass:"form-item"},[s("span",{staticClass:"span-title"},[t._v("司机：")]),t._v(" "),s("el-input",{attrs:{disabled:t.disabled,placeholder:"请输入司机"},model:{value:t.missionLocus.driverName,callback:function(e){t.$set(t.missionLocus,"driverName",e)},expression:"missionLocus.driverName"}})],1),t._v(" "),s("div",{staticClass:"form-item"},[s("span",{staticClass:"span-title"},[t._v("计划发车时间：")]),t._v(" "),s("el-input",{attrs:{disabled:t.disabled,placeholder:"请输入计划发车时间"},model:{value:t.missionLocus.planDepartureTime,callback:function(e){t.$set(t.missionLocus,"planDepartureTime",e)},expression:"missionLocus.planDepartureTime"}})],1),t._v(" "),s("div",{staticClass:"form-item"},[s("span",{staticClass:"span-title"},[t._v("实际发车时间：")]),t._v(" "),s("el-input",{attrs:{disabled:t.disabled,placeholder:t.missionLocus.actualDepartureTime?"":"暂未发车"},model:{value:t.missionLocus.actualDepartureTime,callback:function(e){t.$set(t.missionLocus,"actualDepartureTime",e)},expression:"missionLocus.actualDepartureTime"}})],1),t._v(" "),s("div",{staticClass:"form-item"},[s("span",{staticClass:"span-title"},[t._v("计划到达时间：")]),t._v(" "),s("el-input",{attrs:{disabled:t.disabled,placeholder:"请输入计划到达时间"},model:{value:t.missionLocus.planArrivalTime,callback:function(e){t.$set(t.missionLocus,"planArrivalTime",e)},expression:"missionLocus.planArrivalTime"}})],1),t._v(" "),s("div",{staticClass:"form-item"},[s("span",{staticClass:"span-title"},[t._v("实际到达时间：")]),t._v(" "),s("el-input",{attrs:{disabled:t.disabled,placeholder:t.missionLocus.actualArrivalTime?"":"暂未到达"},model:{value:t.missionLocus.actualArrivalTime,callback:function(e){t.$set(t.missionLocus,"actualArrivalTime",e)},expression:"missionLocus.actualArrivalTime"}})],1)])])],1)])],1)},i=[],n=(a("7f7f"),a("96cf"),a("3b8d")),r=a("0a86"),o={data:function(){return{isShow:!0,disabled:!0,play:!0,queryParams:{},missionLocus:{licensePlate:"",driverName:"",planDepartureTime:"",actualDepartureTime:"",planArrivalTime:"",actualArrivalTime:""}}},created:function(){this.id=this.$route.query.id,this.getList(this.id)},methods:{open:function(){this.isShow=!this.isShow,this.$refs.arrow.style.transform=this.isShow?"rotate(0deg)":"rotate(-90deg)"},handleTaskList:function(){this.$router.push({path:"/transport/transport-task"})},reset:function(){this.play=!1},handleLocusPlace:function(){this.getList(this.id)},goBack:function(){},getList:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["d"])(e);case 2:a=t.sent,s=a.data,null!=s.truck&&(this.missionLocus.licensePlate=s.truck.licensePlate),this.missionLocus.driverName=s.drivers.map((function(t){return t.name})).join(","),this.missionLocus.planDepartureTime=s.planDepartureTime,this.missionLocus.actualDepartureTime=s.actualDepartureTime,this.missionLocus.planArrivalTime=s.planArrivalTime,this.missionLocus.actualArrivalTime=s.actualArrivalTime;case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},c=o,l=(a("0681"),a("2877")),u=Object(l["a"])(c,s,i,!1,null,"05c4b988",null);e["default"]=u.exports},e7df:function(t,e,a){}}]);