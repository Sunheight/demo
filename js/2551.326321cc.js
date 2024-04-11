"use strict";(self["webpackChunkdev"]=self["webpackChunkdev"]||[]).push([[2551],{8075:function(t,a,e){e.r(a),e.d(a,{default:function(){return g}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"QualityControlReport"},[a("header",{attrs:{flex:"",je:"",ac:""}},[a("field",{directives:[{name:"addon",rawName:"v-addon:suffix",value:t.searchIcon,expression:"searchIcon",arg:"suffix"}],staticClass:"searchBox",attrs:{outlined:"",tile:"",xs:"",placeholder:"精确搜索: 请输入日期、名称或功能查找服务"},on:{enter:t.search,clickSearch:t.search},model:{value:t.stat.search,callback:function(a){t.$set(t.stat,"search",a)},expression:"stat.search"}})],1),a("main",{attrs:{catskill:"",lighten:"",bg:"","sm-pa":"","pa-sm":"",flex:"",js:"",card:"",relative:""}},[a("div",{staticClass:"tagBox",class:{invalid:t.stat.tagInvalid}},t._l(t.tags,(function(e,s){return a("div",{staticClass:"tag",class:{current:t.currentTagIndex===s},on:{click:function(a){t.currentTagIndex=s}}},[a("i",[t._v(t._s(e.name))])])})),0),a("formset",{ref:"formset",attrs:{nocreate:"",noselect:"","lg-pt":"","pt-lg":"","api:subject":"qualityControl/report/raw/form","api:primary":"requestGuid","api:query":t.queryString,columns:t.columns,patch:{tabular:{width:"1100px"}}},on:{opened:t.opened,closed:t.closed},scopedSlots:t._u([{key:"form",fn:function(){return[a("transition",{attrs:{name:"fade"}},[t.visible?a("div",[a("div",{attrs:{id:"qualityControl-reportPaper",flex:"",column:"",ac:"","mx-auto":""}},[a("img",{staticClass:"pageBody",attrs:{src:t.pageBody}}),a("img",{staticClass:"pageFooter",attrs:{src:t.pageFooter}}),a("div",{staticClass:"title",attrs:{"md-mb":"","mb-sm":"",flex:"",jc:"",ac:"","ht-5":""}},[a("h3",{attrs:{"lg-ls":"","ls-xl":""}},[t._v("原料检测报告")])]),a("div",{staticClass:"reportWrapper",attrs:{"inline-block":"","mt-xs":""}},[a("img",{staticClass:"pageHeader",attrs:{src:t.pageHeader}}),a("table",{staticClass:"reportTable"},[a("tr",[a("td",{staticClass:"info",attrs:{colspan:"2",bold:""}},[a("div",[t._v("日期")])]),a("td",[t._v(t._s(t.form.reportTime))]),a("td",{staticClass:"info",attrs:{bold:""}},[a("div",[t._v("供应商名称")])]),a("td",{staticStyle:{color:"#ff8d96"},attrs:{colspan:"2"}},[t._v("系统自动带出")])]),a("tr",[a("td",{staticClass:"info",attrs:{colspan:"2",bold:""}},[a("div",[t._v("样品编号")])]),a("td",[t._v(t._s(t.form.sampleNum))]),a("td",{staticClass:"info",attrs:{bold:""}},[a("div",[t._v("到货数量")])]),a("td",{attrs:{colspan:"2",dev:""}},[t._v("系统自动带出")])]),a("tr",[a("td",{staticClass:"info",attrs:{bold:"",colspan:"2"}},[a("div",[t._v("检验项目")])]),a("td",{attrs:{bold:""}},[t._v("检测方法")]),a("td",{attrs:{bold:""}},[t._v("标准")]),a("td",{attrs:{bold:""}},[t._v("检测结果")]),a("td",{attrs:{bold:""}},[t._v("判定")])]),t._l(t.感官列表,(function(e,s){return a("reportTable",{attrs:{item:e,index:s,rowspan:t.getRowspan(t.感官列表),groupName:"感官指标"}})})),t._l(t.理化列表,(function(e,s){return a("reportTable",{attrs:{item:e,index:s,rowspan:t.getRowspan(t.理化列表),groupName:"理化指标"}})})),t._l(t.生物列表,(function(e,s){return a("reportTable",{attrs:{item:e,index:s,rowspan:t.getRowspan(t.生物列表),groupName:"微生物 限量指标"}})})),t._l(t.金属列表,(function(e,s){return a("reportTable",{attrs:{item:e,index:s,rowspan:t.getRowspan(t.金属列表),groupName:"重金属 限量指标"}})})),t._l(t.营养成分,(function(e,s){return a("reportTable",{attrs:{item:e,index:s,rowspan:t.getRowspan(t.营养成分),groupName:"营养成分"}})})),t._l(t.其他列表,(function(e,s){return a("reportTable",{attrs:{item:e,index:s,rowspan:t.getRowspan(t.其他列表),groupName:"其他"}})}))],2),a("div",{staticClass:"attachment"},[a("table",{staticClass:"attachmentTable",attrs:{sm:""}},[a("tr",[a("td",{staticClass:"info"},[a("div",[t._v("检测结果")])]),a("td",{staticClass:"value"},[t._v(t._s(t.form.conclusion))])]),a("tr",[a("td",{staticClass:"info"},[a("div",[t._v("检验人")])]),a("td",{staticClass:"value"},[t._v(t._s(t.form.inspector))])]),a("tr",[a("td",{staticClass:"info"},[a("div",[t._v("复核人")])]),a("td",{staticClass:"value"},[t._v(t._s(t.form.verifier))])])])])])]),a("div",{attrs:{"md-pt":"","pt-xl":"",flex:"",jc:""}},[a("btn",{attrs:{"xl-mr":"","mr-xl":""},on:{click:function(a){return t.form.close()}}},[t._v("关闭")]),a("btn",{attrs:{"xl-ml":"","ml-xl":"",blue:"",bg:"",pending:t.pending,disabled:0===t.form.items.length},on:{click:t.print}},[t._v(" 打印 ")])],1),a("gap",{attrs:{"py-xl":""}})],1):t._e()])]},proxy:!0}])})],1)])},r=[],l=e(6219),i=e(5730),o=(e(988),e(8096),e(1253)),n=e(6532),c=e(4560),d=e(1990),u=e(5729),p={name:"report-product",mixins:[n["default"]],components:{reportTable:o.A},data(){return{pageHeader:d,pageBody:u,pageFooter:c,form:{requestGuid:0,requestNum:"",sampleNum:"",batchNum:"",inspector:"",verifier:"",conclusion:"",requestTime:"",reportTime:"",validity:"",items:[{list:[]},{list:[]},{list:[]},{list:[]},{list:[]}]},pending:!1,columns:[{label:"日期",value:"reportTime",component:l["default"]},{label:"请验单编号",value:"requestNum"},{label:"样品编码",value:"sampleNum"},{label:"供应商编号",value:"vendorNum"},{label:"是否已出具报告",value:"resultStateCode",component:i["default"]}]}},provide(){return{revise:!1}}},m=p,v=e(1656),f=(0,v.A)(m,s,r,!1,null,null,null),g=f.exports}}]);