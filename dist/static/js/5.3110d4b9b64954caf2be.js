webpackJsonp([5,6],{50:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(34),i=a(o),r=n(33),s=a(r),c=n(27),l=a(c),u=n(5),p=a(u);e.default={props:["isSuccess","searchDeviceData"],data:function(){return{countsNumber:1,deviceDetailData:[],limit:1,loadMoreLimit:"",currentPage:1,multipleSelection:[]}},computed:{},watch:{isSuccess:function(t){t===!0&&this.GetDeviceList()},searchDeviceData:function(t){return""===t?void this.GetDeviceList():(this.deviceDetailData=this.$options.methods.responseArray(t),this.deviceDetailData)},multipleSelection:function(t){t&&this.$emit("listenSelectItems",t)}},created:function(){this.GetDeviceList()},mounted:function(){},methods:{responseArray:function(t){return t.map(function(t){var e=!0,n=!1,a=void 0;try{for(var o,r=(0,l.default)((0,s.default)(t));!(e=(o=r.next()).done);e=!0){var c=(0,i.default)(o.value,2),u=c[0],p=c[1];""===p&&(t[u]="--")}}catch(t){n=!0,a=t}finally{try{!e&&r.return&&r.return()}finally{if(n)throw a}}0===t.status?t.status="未連接":1===t.status?t.status="工作中":2===t.status?t.status="待機中":3===t.status&&(t.status="失敗")}),t},fmtLength:function(t,e){var n=t[e.property];return void 0===n?"0":n.length},GetDeviceList:function(){var t=this;p.default.get("/promo/authed/account/box/lists/"+t.limit+"/10").then(function(e){return t.deviceDetailData=t.$options.methods.responseArray(e.data.list),0===Number(e.data.count)?t.countsNumber=1:t.countsNumber=Number(e.data.count),t.deviceDetailData}).catch(function(t){console.log(t)})},sureUnbindDevice:function(t){var e=this,n=t.row.boxSN;p.default.post("/promo/authed/account/box/disconnect",{boxSN:n}).then(function(n){n.data.isSuccess?(e.$emit("listenUnbindBox",!0),e.GetDeviceList(),t.row.visible=!1,e.$message({type:"success",message:"解綁成功"})):e.$message({type:"error",message:"解綁失敗"})}).catch(function(t){console.log(t)})},isMiningEvent:function(t,e){var n=this;p.default.get("/promo/authed/account/box/stop/mining/"+t+"/"+!e).then(function(t){var e=void 0;t.data.isSuccess?n.GetDeviceList():(e=1e4===t.data.code?"此設備未連接":10001===t.data.code?"開啓失敗":t.data.reason,n.$message({message:e,type:"error"}))}).catch(function(t){500===t.response.status&&n.$message({message:"服務器內部錯誤",type:"error"})})},handleCurrentChange:function(t){console.log(t),this.limit=t,document.documentElement.scrollTop=200,console.log(window.scrollTop);var e=this;p.default.get("/promo/authed/account/box/lists/"+t+"/10").then(function(t){var n=e.$options.methods.responseArray(t.data.list);e.deviceDetailData=n}).catch(function(t){console.log(t)})},handleSelectionChange:function(t){this.multipleSelection=t},openOrcloseWifiMethod:function(t,e){var n=this;p.default.post("/promo/authed/account/box/canwifi",{boxSNs:t,canWifi:!e}).then(function(t){console.log(t.data),t.data.isSuccess&&(n.$message({message:e?"關閉無線信號成功":"開啓無線信號成功",type:"success"}),n.GetDeviceList())}).catch(function(t){console.log(t)})}}}},67:function(t,e,n){e=t.exports=n(1)(),e.push([t.id,".table1-container .el-loading-mask{background-color:transparent!important}.table1-container .el-loading-spinner{top:0!important;bottom:20px!important}.table1-container .el-pagination{text-align:right;margin-top:20px}.el-pager li{min-width:30px}.el-pager li.active{background:#108ee9;border-radius:4px;color:#fff}.table1-container .el-table .cell{padding-left:0;padding-right:0}","",{version:3,sources:["/./src/pages/table/table1.vue"],names:[],mappings:"AACA,mCACE,sCAA0C,CAC3C,AACD,sCACE,gBAAgB,AAChB,qBAAuB,CACxB,AACD,iCACE,iBAAkB,AAClB,eAAiB,CAClB,AACD,aACE,cAAgB,CACjB,AACD,oBACE,mBAAoB,AACpB,kBAAmB,AACnB,UAAe,CAChB,AACD,kCACE,eAAgB,AAChB,eAAiB,CAClB",file:"table1.vue",sourcesContent:["\n.table1-container .el-loading-mask {\n  background-color:rgba(0,0,0,0) !important;\n}\n.table1-container .el-loading-spinner {\n  top:0!important;\n  bottom: 20px!important;\n}\n.table1-container .el-pagination  {\n  text-align: right;\n  margin-top: 20px;\n}\n.el-pager li {\n  min-width: 30px;\n}\n.el-pager li.active {\n  background: #108EE9;\n  border-radius: 4px;\n  color: #ffffff;\n}\n.table1-container .el-table .cell {\n  padding-left: 0;\n  padding-right: 0;\n}\n"],sourceRoot:"webpack://"}])},68:function(t,e,n){e=t.exports=n(1)(),e.push([t.id,'.pause-btn[data-v-0161af96],.unbindDevice-btn[data-v-0161af96]{position:relative;padding-right:8px}.pause-btn[data-v-0161af96]:after,.unbindDevice-btn[data-v-0161af96]:after{content:" ";border-right:1px solid rgba(0,0,0,.15);position:absolute;right:0;height:8px;top:36%}.status-circle[data-v-0161af96]{display:inline-block;width:8px;height:8px;border-radius:50%}.color-red[data-v-0161af96]{background-color:#f5222d}.color-orange[data-v-0161af96]{background-color:#ffc64b}.color-grey[data-v-0161af96]{background-color:rgba(0,0,0,.22)}.color-green[data-v-0161af96]{background-color:#52c41a}.table1-container .el-popover[data-v-0161af96]{padding:16px}.unbindDevice-poppver-content[data-v-0161af96]{float:right;padding-top:10px}.unbindDevice-poppver-content .el-button[data-v-0161af96]{padding:4px 7px}.more_btn[data-v-0161af96]{cursor:pointer;padding-top:5rem}.closewifiinfo-btn[data-v-0161af96]{margin-left:0}',"",{version:3,sources:["/./src/pages/table/table1.vue"],names:[],mappings:"AACA,+DACE,kBAAkB,AAClB,iBAAmB,CACpB,AACD,2EACE,YAAa,AACb,uCAA0C,AAC1C,kBAAmB,AACnB,QAAS,AACT,WAAY,AACZ,OAAS,CACV,AACD,gCACE,qBAAsB,AACtB,UAAU,AACV,WAAY,AACZ,iBAAmB,CACpB,AACD,4BACE,wBAAyB,CAC1B,AACD,+BACE,wBAAyB,CAC1B,AACD,6BACE,gCAAkC,CACnC,AACD,8BACE,wBAAyB,CAC1B,AACD,+CACE,YAAa,CACd,AACD,+CACE,YAAa,AACb,gBAAiB,CAClB,AACD,0DACE,eAAgB,CACjB,AACD,2BACE,eAAgB,AAChB,gBAAkB,CACnB,AACD,oCACE,aAAe,CAChB",file:"table1.vue",sourcesContent:["\n.pause-btn[data-v-0161af96], .unbindDevice-btn[data-v-0161af96]{\n  position:relative;\n  padding-right: 8px;\n}\n.pause-btn[data-v-0161af96]:after, .unbindDevice-btn[data-v-0161af96]:after{\n  content: ' ';\n  border-right: 1px solid rgba(0,0,0,0.15) ;\n  position: absolute;\n  right: 0;\n  height: 8px;\n  top: 36%;\n}\n.status-circle[data-v-0161af96] {\n  display: inline-block;\n  width:8px;\n  height: 8px;\n  border-radius: 50%;\n}\n.color-red[data-v-0161af96] {\n  background-color:#F5222D;\n}\n.color-orange[data-v-0161af96] {\n  background-color:#FFC64B;\n}\n.color-grey[data-v-0161af96] {\n  background-color:rgba(0,0,0,0.22);\n}\n.color-green[data-v-0161af96] {\n  background-color:#52C41A;\n}\n.table1-container .el-popover[data-v-0161af96] {\n  padding:16px;\n}\n.unbindDevice-poppver-content[data-v-0161af96] {\n  float: right;\n  padding-top:10px;\n}\n.unbindDevice-poppver-content .el-button[data-v-0161af96] {\n  padding:4px 7px;\n}\n.more_btn[data-v-0161af96] {\n  cursor: pointer;\n  padding-top: 5rem;\n}\n.closewifiinfo-btn[data-v-0161af96] {\n  margin-left: 0;\n}\n"],sourceRoot:"webpack://"}])},77:function(t,e,n){var a=n(67);"string"==typeof a&&(a=[[t.id,a,""]]);n(2)(a,{});a.locals&&(t.exports=a.locals)},78:function(t,e,n){var a=n(68);"string"==typeof a&&(a=[[t.id,a,""]]);n(2)(a,{});a.locals&&(t.exports=a.locals)},81:function(t,e,n){n(77),n(78);var a=n(3)(n(50),n(85),"data-v-0161af96",null);t.exports=a.exports},85:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table1-container"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.deviceDetailData,"empty-text":"暫無數據","tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),n("el-table-column",{attrs:{label:"S/N碼",prop:"boxSN"}}),t._v(" "),n("el-table-column",{attrs:{label:"狀態",prop:"status",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return["未連接"==e.row.status?n("span",{staticClass:"status-circle color-grey"}):"工作中"==e.row.status?n("span",{staticClass:"status-circle color-green"}):"待機中"==e.row.status?n("span",{staticClass:"status-circle color-orange"}):n("span",{staticClass:"status-circle color-red"}),t._v("\n      "+t._s(e.row.status)+"\n    ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"上行帶寬 (Mbps)",prop:"uplinkBandwidth",width:"130"}}),t._v(" "),n("el-table-column",{attrs:{label:"存儲 (TB)",prop:"storageSize",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{label:"今日出幣 (个)",prop:"allTodayCoins",width:"110"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作",prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticClass:"pause-btn fontSize-14",attrs:{type:"text",size:"small"},domProps:{innerHTML:t._s(e.row.isMining===!0?"停止":"開始")},on:{click:function(n){t.isMiningEvent(e.row.boxSN,e.row.isMining)}}}),t._v(" "),n("el-popover",{ref:"unbindDevice",attrs:{placement:"top",trigger:"click",width:"173"},model:{value:e.row.visible,callback:function(n){t.$set(e.row,"visible",n)},expression:"scope.row.visible"}},[n("span",[n("i",{staticClass:"el-icon-error",staticStyle:{color:"red"}}),t._v("\n          你確定要解綁該設備？\n          ")]),t._v(" "),n("div",{staticClass:"unbindDevice-poppver-content"},[n("el-button",{on:{click:function(t){e.row.visible=!1}}},[t._v("\n            取 消\n            ")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(n){t.sureUnbindDevice(e)}}},[t._v("\n            確 定\n            ")])],1)]),t._v(" "),n("el-button",{directives:[{name:"popover",rawName:"v-popover:unbindDevice",arg:"unbindDevice"}],staticClass:"unbindDevice-btn fontSize-14",attrs:{type:"text",size:"small"}},[t._v("\n        解綁\n        ")]),t._v(" "),n("el-button",{staticClass:"closewifiinfo-btn fontSize-14",attrs:{type:"text",size:"small"},on:{click:function(n){t.openOrcloseWifiMethod(e.row.boxSN,e.row.currentWifi)}}},[t._v("\n        "+t._s(e.row.currentWifi?"關閉無線信號":"開啓無線信號")+"\n      ")])]}}])})],1),t._v(" "),n("div",{staticClass:"pagination-wrapper"},[n("el-pagination",{attrs:{"current-page":t.currentPage,layout:"prev, pager, next, jumper",total:t.countsNumber},on:{"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.3110d4b9b64954caf2be.js.map