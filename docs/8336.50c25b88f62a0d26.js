"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[8336],{8336:(O,l,e)=>{e.r(l),e.d(l,{TaxgrouplistModule:()=>G});var u=e(6814),d=e(5861),t=e(4946),m=e(5219),p=e(6819),c=e(6113),h=e(7338),f=e(7934);const g=function(){return{width:"100%",height:" calc(100vh - 150px)"}};let v=(()=>{var n;class r{constructor(i){this._service=i,this.mastersGridColumns="taxGroupGridColumns",this.masterGridData="getTaxGroup",this.paramKey=["_id"],this.showEdit=!0,this.showView=!0,this.pageTitle="Module List",this.onSubmit=!0,this.onGrid=!0,this.onAddNew=!0,this.actionOptions=[{reportName:"EDIT",iconClass:"pi pi-user-edit"},{reportName:"VIEW",iconClass:"pi pi-user"}],this.printOptions=[],this.confirmationService=(0,t.f3M)(m.YP)}ngOnInit(){var i=this;return(0,d.Z)(function*(){0==Object.keys(i._service.appConfig).length&&(yield i._service.getConfigData())})()}onPrintClick(i){this.confirmationService.confirm({message:"Are you sure that you want to proceed?",icon:"pi pi-exclamation-triangle",accept:()=>{i.status="C",this._service.onSaveJson("UOM Creation","insertUomCreation",[i])},reject:()=>{}})}}return(n=r).\u0275fac=function(i){return new(i||n)(t.Y36(c.f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-taxgrouplist"]],viewQuery:function(i,o){if(1&i&&t.Gf(p.J,5),2&i){let a;t.iGM(a=t.CRH())&&(o.gridView=a.first)}},decls:8,vars:12,consts:[[1,"d-flex","flex-column","h-100","overflow-hidden"],[3,"pageTitle","onSubmit","onGrid","onAddNew"],["headers",""],[1,"border","d-flex","flex-column","flex-fill","h-100","p-2"],["styleClass","custombar1"],[1,"d-flex","flex-column","h-100",3,"mastersGridColumns","masterGridData","paramKey","printOptions","actionOptions","printClick"],["grid",""]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div"),t._UZ(2,"app-header",1,2),t.qZA(),t.TgZ(4,"div",3)(5,"p-scrollPanel",4)(6,"app-gridview",5,6),t.NdJ("printClick",function(y){return o.onPrintClick(y)}),t.qZA()()()()),2&i&&(t.xp6(2),t.Q6J("pageTitle",o.pageTitle)("onSubmit",!1)("onGrid",!1)("onAddNew",!0),t.xp6(3),t.Akn(t.DdM(11,g)),t.xp6(1),t.Q6J("mastersGridColumns",o.mastersGridColumns)("masterGridData",o.masterGridData)("paramKey",o.paramKey)("printOptions",o.printOptions)("actionOptions",o.actionOptions))},dependencies:[h.P,f.G,p.J],encapsulation:2}),r})();var C=e(8032),T=e(7664);const x=[{path:"",component:v}];let G=(()=>{var n;class r{}return(n=r).\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,C.u,T.Bz.forChild(x)]}),r})()}}]);