"use strict";(self.webpackChunkcomsadmin=self.webpackChunkcomsadmin||[]).push([[93],{3093:(J,g,s)=>{s.r(g),s.d(g,{SalesModule:()=>j});var f=s(6814),u=s(2030),h=s(6512),b=s(8635),v=s(742),_=s(5638),e=s(5879),m=s(266);let Z=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-sales"]],decls:1,vars:0,template:function(t,a){1&t&&e._UZ(0,"router-outlet")},dependencies:[m.lC],styles:["[_nghost-%COMP%]     .table-modal-header .modal-about{padding-left:0!important}.table-modal-header[_ngcontent-%COMP%]   .modal-about[_ngcontent-%COMP%]{padding-left:0!important}.header-buttons-left[_ngcontent-%COMP%]{justify-content:center;display:flex!important}"]}),l})();var d=s(9364);let T=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-sales-view"]],decls:18,vars:0,consts:[[1,"section-body"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"p-10"],[1,"row"],[1,"col-lg-6"],[1,"row","m-0"],[1,"col-lg-8","p-0"],[1,"ngxTableHeader"],[1,"table-search-area"],["for","search-input"],[1,"material-icons","search-icon"],["placeholder","Search","type","text","aria-label","Search box",1,"browser-default","search-field"],[1,"header-buttons-left"],[1,"tbl-btn-style"],[1,"btn","btn-icon","btn-primary"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div")(10,"label",9)(11,"i",10),e._uU(12,"search"),e.qZA()(),e._UZ(13,"input",11),e.qZA()(),e.TgZ(14,"div",12)(15,"div",13)(16,"button",14),e._uU(17," Add Sales "),e.qZA()()()()()()()()()()())}}),l})();var i=s(6223);const C=[{label:"#",value:"id"},{label:"Agent",value:"agent"},{label:"Project",value:"project"},{label:"Developer",value:"developer"},{label:"Sales Date",value:"salesDate"},{label:"Value",value:"value"}];function S(l,o){if(1&l&&(e._UZ(0,"img",34),e.TgZ(1,"div",35)(2,"div"),e._uU(3),e.qZA()()),2&l){const t=o.row;e.s9C("src",t.img,e.LSH),e.xp6(3),e.Oqu(t.agent)}}function x(l,o){1&l&&e._uU(0),2&l&&e.hij(" ",o.row.project," ")}function w(l,o){1&l&&e._uU(0),2&l&&e.hij(" ",o.row.developer," ")}function y(l,o){1&l&&e._uU(0),2&l&&e.hij(" ",o.row.salesDate," ")}function A(l,o){1&l&&e._uU(0),2&l&&e.hij(" ",o.row.value," ")}function U(l,o){1&l&&(e.TgZ(0,"small",57),e._uU(1," Agent name is required"),e.qZA())}function q(l,o){1&l&&(e.TgZ(0,"small",57),e._uU(1," Phone is required"),e.qZA())}function L(l,o){1&l&&(e.TgZ(0,"small",57),e._uU(1," Project is required"),e.qZA())}function N(l,o){if(1&l){const t=e.EpF();e.TgZ(0,"div",36)(1,"h4",37)(2,"div",38)(3,"div",39)(4,"div",40),e._uU(5," New Sales"),e.qZA()()()(),e.TgZ(6,"button",41),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.KtG(r.dismiss())}),e.TgZ(7,"span",42)(8,"i",43),e._uU(9,"close"),e.qZA()()()(),e.TgZ(10,"div",44)(11,"form",45),e.NdJ("ngSubmit",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.onSaveForm(n.addSales))}),e.TgZ(12,"div",46),e._UZ(13,"input",47),e.qZA(),e.TgZ(14,"div",11)(15,"div",48)(16,"label"),e._uU(17,"Agent Name "),e.TgZ(18,"span",49),e._uU(19,"*"),e.qZA()(),e._UZ(20,"input",50),e.YNc(21,U,2,0,"small",51),e.qZA(),e.TgZ(22,"div",48)(23,"label"),e._uU(24,"Project"),e.TgZ(25,"span",49),e._uU(26,"*"),e.qZA()(),e._UZ(27,"input",52),e.YNc(28,q,2,0,"small",51),e.qZA()(),e.TgZ(29,"div",11)(30,"div",48)(31,"label"),e._uU(32,"Developer"),e.TgZ(33,"span",49),e._uU(34,"*"),e.qZA()(),e._UZ(35,"input",53),e.YNc(36,L,2,0,"small",51),e.qZA(),e.TgZ(37,"div",48)(38,"label"),e._uU(39,"Sales Date"),e._UZ(40,"span",49),e.qZA()()(),e.TgZ(41,"div",54)(42,"button",55),e._uU(43,"Save"),e.qZA(),e.TgZ(44,"button",56),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.KtG(r.close())}),e._uU(45,"Close"),e.qZA()()()()}if(2&l){const t=e.oxw();let a,n,r;e.xp6(11),e.Q6J("formGroup",t.addSales),e.xp6(10),e.Q6J("ngIf",!(null!=(a=t.addSales.get("agent"))&&a.valid)&&(null==(a=t.addSales.get("agent"))?null:a.touched)),e.xp6(7),e.Q6J("ngIf",!(null!=(n=t.addSales.get("project"))&&n.valid)&&(null==(n=t.addSales.get("project"))?null:n.touched)),e.xp6(8),e.Q6J("ngIf",!(null!=(r=t.addSales.get("developer"))&&r.valid)&&(null==(r=t.addSales.get("developer"))?null:r.touched)),e.xp6(6),e.Q6J("disabled",!t.addSales.valid)}}const H=[{path:"",component:Z,children:[{path:"list",component:(()=>{class l{constructor(t,a,n){this.fb=t,this.modalService=a,this.router=n,this.SelectionType=d.RT,this.columns=C,this.rows=[],this.scrollBarHorizontal=window.innerWidth<1200,this.newUserImg="assets/images/users/user-2.png",this.data=[],this.filteredData=[],this.loadingIndicator=!0,this.isRowSelected=!1,this.reorderable=!0,this.selected=[],window.onresize=()=>{this.scrollBarHorizontal=window.innerWidth<1200},this.selection=d.RT.checkbox}onEditSave(t){console.log(t)}ngOnInit(){this.fetch(t=>{this.data=t,this.filteredData=t,setTimeout(()=>{this.loadingIndicator=!1},500)}),this.addSales=this.fb.group({id:[""],agent:["",[i.kI.required,i.kI.pattern("[a-zA-Z]+")]],project:["",[i.kI.required]],developer:["",[i.kI.required]],salesDate:["",[i.kI.required]],value:["",[i.kI.required]]})}fetch(t){const a=new XMLHttpRequest;a.open("GET","assets/data/sales-data.json"),a.onload=()=>{const n=JSON.parse(a.response);t(n)},a.send()}onSelect({selected:t}){this.selected.splice(0,this.selected.length),this.selected.push(...t),this.isRowSelected=0!==this.selected.length,this.router.navigateByUrl("sales/sales-view")}addRow(t){this.modalService.open(t,{ariaLabelledBy:"modal-basic-title",size:"lg"})}onSaveForm(t){console.log("TEST FORM",this.addSales)}filterDatatable(t){const a=t.target.value.toLowerCase(),n=this.columns.length,r=Object.keys(this.filteredData[0]);this.data=this.filteredData.filter(c=>{for(let p=0;p<n;p++)if(-1!==c[r[p]].toString().toLowerCase().indexOf(a)||!a)return!0;return!1}),this.table.offset=0}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(i.QS),e.Y36(u.FF),e.Y36(m.F0))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-list"]],viewQuery:function(t,a){if(1&t&&(e.Gf(d.nE,5),e.Gf(d.nE,5)),2&t){let n;e.iGM(n=e.CRH())&&(a.table=n.first),e.iGM(n=e.CRH())&&(a.table2=n.first)}},decls:46,vars:18,consts:[[1,"main-content"],[1,"breadcrumb","breadcrumb-style"],[1,"breadcrumb-item"],[1,"page-title","m-b-0"],[1,"breadcrumb-item","bcrumb-1"],["routerLink","/dashboard/main"],[1,"fas","fa-home","font-17"],[1,"section-body"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"card"],[1,"p-10"],[1,"row"],[1,"col-lg-6"],[1,"row","m-0"],[1,"col-lg-8","p-0"],[1,"ngxTableHeader"],[1,"table-search-area"],["for","search-input"],[1,"material-icons","search-icon"],["placeholder","Search","type","text","aria-label","Search box",1,"browser-default","search-field",3,"keyup"],[1,"header-buttons-left"],[1,"tbl-btn-style"],[1,"btn","btn-icon","btn-primary",3,"click"],[1,"col-12","col-md-12","col-lg-12"],["columnMode","force","rowHeight","auto",1,"material",3,"rows","loadingIndicator","headerHeight","footerHeight","limit","scrollbarH","reorderable","selected","selectionType","select"],["table",""],[3,"width","sortable","draggable","resizeable","canAutoResize","headerCheckboxable","checkboxable"],["name","Agent",3,"width"],["ngx-datatable-cell-template",""],["name","Project"],["name","Developer"],["name","Sales Date"],["name","Value"],["addRecord",""],[1,"data-table-img",3,"src"],[1,"name-col-style"],[1,"modal-header","editRowModal"],["id","modal-basic-title",1,"modal-title"],[1,"table-modal-header"],[1,"modal-about"],[1,"fw-bold","p-t-10","font-17"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"material-icons"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"input-field","col","s12","d-none"],["formControlName","id","type","hidden",1,"form-control"],[1,"col-xl-6","col-lg-6","col-md-12","col-sm-12","mb-2"],[1,"text-danger"],["type","text","placeholder","Agent name","formControlName","agent","required","",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","text","placeholder","Project","formControlName","project","required","",1,"form-control"],["type","email","placeholder","Developer","formControlName","developer","required","",1,"form-control"],[1,"modal-footer"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-light",3,"click"],[1,"form-text","text-danger"]],template:function(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"section",0)(1,"ul",1)(2,"li",2)(3,"h5",3),e._uU(4,"Sales"),e.qZA()(),e.TgZ(5,"li",4)(6,"a",5),e._UZ(7,"i",6),e.qZA()(),e.TgZ(8,"li",2),e._uU(9,"Sales List"),e.qZA()(),e.TgZ(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13)(17,"div",14)(18,"div",15)(19,"div",16)(20,"div")(21,"label",17)(22,"i",18),e._uU(23,"search"),e.qZA()(),e.TgZ(24,"input",19),e.NdJ("keyup",function(c){return a.filterDatatable(c)}),e.qZA()()(),e.TgZ(25,"div",20)(26,"div",21)(27,"button",22),e.NdJ("click",function(){e.CHM(n);const c=e.MAs(45);return e.KtG(a.addRow(c))}),e._uU(28," Add Sales "),e.qZA()()()()()()()()(),e.TgZ(29,"div",11)(30,"div",23)(31,"ngx-datatable",24,25),e.NdJ("select",function(c){return a.onSelect(c)}),e._UZ(33,"ngx-datatable-column",26),e.TgZ(34,"ngx-datatable-column",27),e.YNc(35,S,4,2,"ng-template",28),e.qZA(),e.TgZ(36,"ngx-datatable-column",29),e.YNc(37,x,1,1,"ng-template",28),e.qZA(),e.TgZ(38,"ngx-datatable-column",30),e.YNc(39,w,1,1,"ng-template",28),e.qZA(),e.TgZ(40,"ngx-datatable-column",31),e.YNc(41,y,1,1,"ng-template",28),e.qZA(),e.TgZ(42,"ngx-datatable-column",32),e.YNc(43,A,1,1,"ng-template",28),e.qZA()()()()()()()(),e.YNc(44,N,46,5,"ng-template",null,33,e.W1O)}2&t&&(e.xp6(31),e.Q6J("rows",a.data)("loadingIndicator",a.loadingIndicator)("headerHeight",60)("footerHeight",80)("limit",10)("scrollbarH",a.scrollBarHorizontal)("reorderable",a.reorderable)("selected",a.selected)("selectionType",a.selection)("selectionType",a.SelectionType.single),e.xp6(2),e.Q6J("width",70)("sortable",!1)("draggable",!1)("resizeable",!1)("canAutoResize",!1)("headerCheckboxable",!0)("checkboxable",!0),e.xp6(1),e.Q6J("width",200))},dependencies:[m.rH,f.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.sg,i.u,d.nE,d.UC,d.vq]}),l})()},{path:"sales-view",component:T}]}];let j=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[m.Bz.forChild(H),f.ez,u.IJ,i.u5,i.UX,b.Ns.forRoot({echarts:()=>s.e(707).then(s.bind(s,8707))}),h.kb,v.X,u.ZQ,_.ez,d.xD]}),l})()}}]);