"use strict";(self["webpackChunkdev"]=self["webpackChunkdev"]||[]).push([[4407],{4407:function(t,e,r){r.r(e),r.d(e,{default:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"formset-row-remark",attrs:{fill:""}},[e("field",{attrs:{"nd-xs":"",noborder:"",fill:"",tile:"",noresize:"",js:"",ac:"",title:t.row[t.value],black:!t.editing},on:{focus:function(e){t.editing=!0},blur:function(e){t.editing=!1},enter:t.submit},model:{value:t.row[t.value],callback:function(e){t.$set(t.row,t.value,e)},expression:"row[value]"}})],1)},s=[],a={name:"formset-row-remark",data(){return{editing:!1,snapshot:"",flag:!1}},props:["row","value"],computed:{remark(){return this.row[this.value]}},watch:{remark:{handler:function(t){this.flag||(this.snapshot=t,this.flag=!0)},immediate:!0}},methods:{submit(){let t=this.remark;t.trim()!==this.snapshot&&this.$http.put(`/qualityControl/report/semi/form/${this.row["requestGuid"]}?action=reportRemark`,{reportRemark:this.remark}).then((t=>{1===t.data?(this.snapshot=this.remark,this.$hint("备注已保存")):this.$hint({innerHTML:"备注失败",color:"red"})}))}}},n=a,o=r(1656),l=(0,o.A)(n,i,s,!1,null,null,null),u=l.exports}}]);