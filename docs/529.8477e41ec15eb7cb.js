"use strict";(self.webpackChunksakiademo=self.webpackChunksakiademo||[]).push([[529],{2154:(w,f,a)=>{a.d(f,{J:()=>m});var i=a(4946),e=a(6814),b=a(3965),v=a(95),C=a(3259);const n=function(){return{width:"100%"}},M=function(_,g){return{"ng-invalid":_,"ng-dirty":g}};let m=(()=>{var _;class g{constructor(){this.inputModel="",this.errorMessages="",this.appendTo="body",this.labelName="",this.isMandatoryIcon=!1,this.disabled=!1,this.dropdownAxis=!1,this.optionLabel="",this.optionValue="",this.options=[{optionValue:"",optionLabel:"Select One"}],this.onBlur=new i.vpe,this.onChange=new i.vpe,this.inputModelChange=new i.vpe}ngOnInit(){}onLeaveControl(){this.inputModelChange.emit(this.inputModel),this.onBlur.emit(!0)}onChangeControl(){this.inputModelChange.emit(this.inputModel),this.onChange.emit(!0)}}return(_=g).\u0275fac=function(T){return new(T||_)},_.\u0275cmp=i.Xpm({type:_,selectors:[["app-dropdown"]],inputs:{inputModel:"inputModel",errorMessages:"errorMessages",appendTo:"appendTo",labelName:"labelName",isMandatoryIcon:"isMandatoryIcon",disabled:"disabled",dropdownAxis:"dropdownAxis",optionLabel:"optionLabel",optionValue:"optionValue",options:"options"},outputs:{onBlur:"onBlur",onChange:"onChange",inputModelChange:"inputModelChange"},decls:8,vars:20,consts:[[1,"justify-content-center"],[1,"flex","flex-column","gap-2"],[3,"ngClass"],[1,"border-round","white-space-nowrap","overflow-hidden","text-overflow-ellipsis",3,"htmlFor"],["aria-describedby","username-help","filterBy","label",3,"filter","options","ngModel","optionLabel","optionValue","appendTo","ngClass","disabled","placeholder","ngModelChange","onBlur","onChange"],["id","username-help","tooltipPosition","top",1,"errorMessages",3,"pTooltip"]],template:function(T,d){1&T&&(i.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),i._uU(4),i.qZA(),i.TgZ(5,"p-dropdown",4),i.NdJ("ngModelChange",function(E){return d.inputModel=E})("onBlur",function(){return d.onLeaveControl()})("onChange",function(){return d.onChangeControl()}),i.qZA(),i.TgZ(6,"small",5),i._uU(7),i.qZA()()()()),2&T&&(i.xp6(2),i.Q6J("ngClass",!0===d.dropdownAxis?"formgroup-inline":"displayBlock"),i.xp6(1),i.s9C("htmlFor",d.labelName),i.xp6(1),i.Oqu(d.labelName),i.xp6(1),i.Akn(i.DdM(16,n)),i.MGl("placeholder","Select ",d.labelName,""),i.Q6J("filter",!0)("options",d.options)("ngModel",d.inputModel)("optionLabel",d.optionLabel)("optionValue",d.optionValue)("appendTo",d.appendTo)("ngClass",i.WLB(17,M,""!==d.errorMessages,""!==d.errorMessages))("disabled",d.disabled),i.xp6(1),i.s9C("pTooltip",d.errorMessages),i.xp6(1),i.Oqu(d.errorMessages))},dependencies:[e.mk,b.Lt,v.JJ,v.On,C.u],styles:[".displayBlock[_ngcontent-%COMP%]{\n    display: contents;\n  }"]}),g})()},7934:(w,f,a)=>{a.d(f,{G:()=>D});var i=a(5861),e=a(4946),b=a(7664),v=a(6113),C=a(5219),n=a(6814),M=a(707),m=a(4104);function _(c,l){if(1&c){const p=e.EpF();e.TgZ(0,"button",12),e.NdJ("click",function(){e.CHM(p);const t=e.oxw();return e.KtG(t.onSaveClick())}),e.qZA()}}function g(c,l){if(1&c){const p=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){e.CHM(p);const t=e.oxw();return e.KtG(t.onGridClick())}),e.qZA()}}function h(c,l){if(1&c){const p=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(p);const t=e.oxw();return e.KtG(t.onAddNewClick())}),e.qZA()}}function T(c,l){if(1&c){const p=e.EpF();e.TgZ(0,"button",15),e.NdJ("click",function(){e.CHM(p);const t=e.oxw();return e.KtG(t.onClearClick())}),e.qZA()}}function d(c,l){if(1&c){const p=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(p);const t=e.oxw();return e.KtG(t.onEditClick())}),e.qZA()}}function A(c,l){if(1&c){const p=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(p);const t=e.oxw();return e.KtG(t.onSaveApproveClick())}),e.qZA()}}function E(c,l){if(1&c){const p=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(p);const t=e.oxw();return e.KtG(t.onSavePrintClick())}),e.qZA()}}let D=(()=>{var c;class l{constructor(r,t,o,s){this._router=r,this._service=t,this._activatedRoute=o,this._messageService=s,this.pageTitle="",this.onSubmit=!1,this.onGrid=!1,this.onAddNew=!1,this.onClear=!1,this.onEdit=!1,this.onView=!1,this.export=!1,this.redirectToGrid=!1,this.onSaveApprove=!1,this.onSavePrint=!1,this.gridClick=new e.vpe,this.addNewClick=new e.vpe,this.clearClick=new e.vpe,this.editClick=new e.vpe,this.viewClick=new e.vpe,this.submitClick=new e.vpe,this.saveApproveClick=new e.vpe,this.savePrintClick=new e.vpe,this.routerAddNew="",this.routerGridView=""}ngOnInit(){var r=this;return(0,i.Z)(function*(){0==Object.keys(r._service.appConfig).length&&(yield r._service.getConfigData()),console.log(r),r._activatedRoute.paramMap.subscribe(function(){var t=(0,i.Z)(function*(o){let s=o.get("params");if(null!=s&&null!=s){let u=JSON.parse(atob(s)),N=r._service.getDocPermissions(u).subscribe(k=>{N=k.data[0],r.permissions(u,N)})}else r._router.navigate(["/home"],{relativeTo:r._activatedRoute})});return function(o){return t.apply(this,arguments)}}())})()}permissions(r,t){console.log("aaa",r),null!=r&&null!=r&&(this.pageTitle=t.documentname,this.docAccSubmit=t.docAccSubmit,this.docAccGridView=t.docAccGridView,this.docAccAddNew=t.docAccAddNew,this.docAccClear=t.docAccClear,this.docAccEdit=t.docAccEdit,this.docAccView=t.docAccView,this.docAccExport=t.docAccExport,this.routerAddNew=`/home/${t.documentpageurl}`,this.routerGridView=`/home/${t.documentgridUrl}`,this.docParams=r,this.docAccPer=t)}onGridClick(){this.gridClick.emit(!0);let r=btoa(JSON.stringify(this.docParams));btoa(JSON.stringify(this.docAccPer)),this._router.navigate([this.routerGridView,{params:r}],{relativeTo:this._activatedRoute})}onAddNewClick(){this.addNewClick.emit(!0);let r=btoa(JSON.stringify(this.docParams));this._router.navigate([this.routerAddNew,{params:r}],{relativeTo:this._activatedRoute})}onClearClick(){this.clearClick.emit(!0)}onEditClick(){this.editClick.emit(!0)}onViewClick(){this.viewClick.emit(!0)}onSaveClick(){this.submitClick.emit(!0)}onMessageClose(){1==this.redirectToGrid&&this.onGridClick()}onSaveApproveClick(){this.saveApproveClick.emit(!0)}onSavePrintClick(){this.savePrintClick.emit(!0)}}return(c=l).\u0275fac=function(r){return new(r||c)(e.Y36(b.F0),e.Y36(v.f),e.Y36(b.gz),e.Y36(C.ez))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-header"]],inputs:{pageTitle:"pageTitle",onSubmit:"onSubmit",onGrid:"onGrid",onAddNew:"onAddNew",onClear:"onClear",onEdit:"onEdit",onView:"onView",export:"export",redirectToGrid:"redirectToGrid",onSaveApprove:"onSaveApprove",onSavePrint:"onSavePrint"},outputs:{gridClick:"gridClick",addNewClick:"addNewClick",clearClick:"clearClick",editClick:"editClick",viewClick:"viewClick",submitClick:"submitClick",saveApproveClick:"saveApproveClick",savePrintClick:"savePrintClick"},decls:13,vars:8,consts:[[1,"flex","justify-content-between","flex-wrap","p-1",2,"background-color","antiquewhite"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","m-2"],[2,"text-align","center"],[1,"flex","align-items-center","justify-content-center","font-bold","border-round","gap-1"],["pButton","","pRipple","","label","Submit","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","GridView","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Add New","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Clear","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Edit","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Approve","class","p-button-success",3,"click",4,"ngIf"],["pButton","","pRipple","","label","Save & Print","class","p-button-success",3,"click",4,"ngIf"],[3,"onClose"],["pButton","","pRipple","","label","Submit",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","GridView",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Add New",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Clear",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Edit",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Save & Approve",1,"p-button-success",3,"click"],["pButton","","pRipple","","label","Save & Print",1,"p-button-success",3,"click"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"span",2),e._uU(3),e.qZA()(),e.TgZ(4,"div",3),e.YNc(5,_,1,0,"button",4),e.YNc(6,g,1,0,"button",5),e.YNc(7,h,1,0,"button",6),e.YNc(8,T,1,0,"button",7),e.YNc(9,d,1,0,"button",8),e.YNc(10,A,1,0,"button",9),e.YNc(11,E,1,0,"button",10),e.qZA()(),e.TgZ(12,"p-toast",11),e.NdJ("onClose",function(){return t.onMessageClose()}),e.qZA()),2&r&&(e.xp6(3),e.hij(" ",t.pageTitle,""),e.xp6(2),e.Q6J("ngIf",t.onSubmit&&t.docAccSubmit),e.xp6(1),e.Q6J("ngIf",t.onGrid&&t.docAccGridView),e.xp6(1),e.Q6J("ngIf",t.onAddNew&&t.docAccAddNew),e.xp6(1),e.Q6J("ngIf",t.onClear&&t.docAccClear),e.xp6(1),e.Q6J("ngIf",t.onEdit&&t.docAccEdit),e.xp6(1),e.Q6J("ngIf",t.onSaveApprove),e.xp6(1),e.Q6J("ngIf",t.onSavePrint))},dependencies:[n.O5,M.Hq,m.FN]}),l})()},1038:(w,f,a)=>{a.d(f,{g:()=>v});var i=a(4946),e=a(6113),b=a(5219);let v=(()=>{var C;class n{constructor(m,_){this._service=m,this._messageService=_}onSaveJson(m,_,g){console.log(m),console.log(g),this._service.serpostData(_,g).subscribe(h=>{console.log(h),"200"==h.status?this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${m} Create Successfully `}):"201"==h.status?this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${m} Update Successfully `}):"500"==h.status&&this._messageService.add({sticky:!0,severity:"success",summary:"Success",detail:`${m} Unable to Create / Update Successfully `})})}}return(C=n).\u0275fac=function(m){return new(m||C)(i.Y36(e.f),i.Y36(b.ez))},C.\u0275cmp=i.Xpm({type:C,selectors:[["app-saving"]],decls:0,vars:0,template:function(m,_){}}),n})()},529:(w,f,a)=>{a.r(f),a.d(f,{DepartmentModule:()=>c});var i=a(6814),e=a(5861),b=a(7934),v=a(1038),C=a(6990),n=a(4946),M=a(6113),m=a(7664),_=a(5219),g=a(7338),h=a(8911),T=a(2154);const d=function(){return{width:"100%",height:" calc(100vh - 164px)"}};let A=(()=>{var l;class p{constructor(t,o,s){this._service=t,this._activatedRoute=o,this._messageService=s,this.pageTitle="Department",this.onSubmit=!0,this.onClear=!0,this.onEdit=!1,this.onView=!1,this.pageMode="NEW",this.isEditable=!1,this.isShowEditable=!0,this.redirectToGrid=!1,this.department={department:"",departmentType:"",allowedGender:"ZLG11",costCenterCode:"",referralDoctorAsOrderingClinician:"ZLAS11",status:"ZLS11",createdt:null,createby:"",modifydt:null,modifyby:""},this.emptyDepartment=JSON.stringify(this.department),this.geneticClassificationList=[],this.geneticSubClassificationList=[],this.zeroLevelEntity=[],this.critialityList=[],this.statusList=[],this.errorMsgs={clasificationNameReq:"",genericNameReq:""},this.departmentTypeList=[],this.genderList=[],this.referralDoctor=[]}onGetErrorMsgs(t,o){switch(t){case"clasificationName":this.errorMsgs.clasificationNameReq=""==this.department[t]||null==this.department[t]||null==this.department[t]?this._service.onGetErrorMsgs(t,!0,"Clasification Name"):"";break;case"genericName":this.errorMsgs.genericNameReq=""==this.department[t]||null==this.department[t]||null==this.department[t]?this._service.onGetErrorMsgs(t,!0,"Generic Name"):""}}ngOnInit(){var t=this;return(0,e.Z)(function*(){0==Object.keys(t._service.appConfig).length&&(yield t._service.getConfigData()),t._activatedRoute.paramMap.subscribe(o=>{let s=o.get("param");null!=s?(s=JSON.parse(atob(s)),t.getMasterData(s._id),t.pageMode=s.mode):(t.isEditable=!0,t.pageMode="NEW"),t.isEditable="VIEW"!=t.pageMode}),t._service.serGetDataobject("getGeneralMaster",{masterid:"ZLS1"}).subscribe(o=>{t.statusList=o.data[0].subMasterData}),t._service.serGetDataobject("getGeneralMaster",{masterid:"ZLDT1"}).subscribe(o=>{t.departmentTypeList=o.data[0].subMasterData}),t._service.serGetDataobject("getGeneralMaster",{masterid:"ZLG1"}).subscribe(o=>{t.genderList=o.data[0].subMasterData}),t._service.serGetDataobject("getGeneralMaster",{masterid:"\tZLAS1"}).subscribe(o=>{t.referralDoctor=o.data[0].subMasterData})})()}getMasterData(t){this._service.serGetDataobject("getGenericDetails",{_id:t}).subscribe(o=>{console.log("dt",o),this.department=o.data[0],this.department._id=this.department._id,this.isShowEditable=!this.isEditable&&"NEW"!=this.pageMode})}onGridClick(){}onSaveClick(){C.forEach(["genericName","clasificationName"],u=>{}),this._service.showErr(this.errorMsgs)&&this._messageService.add({sticky:!0,severity:"warn",summary:"Warn",detail:"Please Check the below Errors"}),this.saving.onSaveJson(this.pageTitle,"insertDepartment",[this.department]),this.onClearClick(),this.redirectToGrid="NEW"!=this.pageMode}onClearClick(){this.department=JSON.parse(this.emptyDepartment)}}return(l=p).\u0275fac=function(t){return new(t||l)(n.Y36(M.f),n.Y36(m.gz),n.Y36(_.ez))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-department"]],viewQuery:function(t,o){if(1&t&&(n.Gf(b.G,5),n.Gf(v.g,5)),2&t){let s;n.iGM(s=n.CRH())&&(o.header=s.first),n.iGM(s=n.CRH())&&(o.saving=s.first)}},decls:20,vars:43,consts:[[1,""],[3,"pageTitle","onSubmit","onGrid","onAddNew","onClear","onEdit","onView","redirectToGrid","submitClick","clearClick"],["headers",""],[1,"div-padding"],[1,"field","col-12","md:col-5","sm:col-4","lg:col-3","xl:col-3"],[3,"labelName","inputModel","disabled","errorMessages","inputModelChange","onBlur"],[3,"labelName","inputModel","options","disabled","errorMessages","optionLabel","optionValue","inputModelChange","onBlur"],[3,"labelName","inputModel","disabled","options","optionLabel","optionValue","inputModelChange"],[3,"labelName","inputModel","options","disabled","optionLabel","optionValue","inputModelChange"],[3,"labelName","inputModel","disabled","inputModelChange"],["saving",""]],template:function(t,o){1&t&&(n.TgZ(0,"div",0)(1,"div")(2,"app-header",1,2),n.NdJ("submitClick",function(){return o.onSaveClick()})("clearClick",function(){return o.onClearClick()}),n.qZA()(),n.TgZ(4,"div",3)(5,"p-scrollPanel")(6,"div",4)(7,"app-inputtext",5),n.NdJ("inputModelChange",function(u){return o.department.department=u})("onBlur",function(){return o.onGetErrorMsgs("genericName",!0)}),n.qZA()(),n.TgZ(8,"div",4)(9,"app-dropdown",6),n.NdJ("inputModelChange",function(u){return o.department.departmentType=u})("onBlur",function(){return o.onGetErrorMsgs("departmentType",!0)}),n.qZA()(),n.TgZ(10,"div",4)(11,"app-dropdown",7),n.NdJ("inputModelChange",function(u){return o.department.status=u}),n.qZA()(),n.TgZ(12,"div",4)(13,"app-dropdown",8),n.NdJ("inputModelChange",function(u){return o.department.allowedGender=u}),n.qZA()(),n.TgZ(14,"div",4)(15,"app-inputtext",9),n.NdJ("inputModelChange",function(u){return o.department.costCenterCode=u}),n.qZA()(),n.TgZ(16,"div",4)(17,"app-dropdown",7),n.NdJ("inputModelChange",function(u){return o.department.referralDoctorAsOrderingClinician=u}),n.qZA()()()()(),n._UZ(18,"app-saving",null,10)),2&t&&(n.xp6(2),n.Q6J("pageTitle",o.pageTitle)("onSubmit",o.onSubmit)("onGrid",!0)("onAddNew",!1)("onClear",o.onClear)("onEdit",o.onEdit)("onView",o.onView)("redirectToGrid",o.redirectToGrid),n.xp6(3),n.Akn(n.DdM(42,d)),n.xp6(2),n.s9C("errorMessages",o.errorMsgs.genericNameReq),n.Q6J("labelName","Department")("inputModel",o.department.department)("disabled",!o.isEditable),n.xp6(2),n.s9C("errorMessages",o.errorMsgs.departmentTypeReq),n.Q6J("labelName","Department Type")("inputModel",o.department.departmentType)("options",o.departmentTypeList)("disabled",!o.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),n.xp6(2),n.Q6J("labelName","Status")("inputModel",o.department.status)("disabled",!o.isEditable)("options",o.statusList)("optionLabel","subMasterName")("optionValue","subMasterId"),n.xp6(2),n.Q6J("labelName","Allowed Gender")("inputModel",o.department.allowedGender)("options",o.genderList)("disabled",!o.isEditable)("optionLabel","subMasterName")("optionValue","subMasterId"),n.xp6(2),n.Q6J("labelName","Cost Center Code")("inputModel",o.department.costCenterCode)("disabled",!o.isEditable),n.xp6(2),n.Q6J("labelName","Send Referral Doctor As Ordering Clinician")("inputModel",o.department.referralDoctorAsOrderingClinician)("disabled",!o.isEditable)("options",o.referralDoctor)("optionLabel","subMasterName")("optionValue","subMasterId"))},dependencies:[g.P,h.G,T.J,b.G,v.g],encapsulation:2}),p})();var E=a(8032);const D=[{path:"",component:A}];let c=(()=>{var l;class p{}return(l=p).\u0275fac=function(t){return new(t||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({imports:[i.ez,E.u,m.Bz.forChild(D)]}),p})()}}]);