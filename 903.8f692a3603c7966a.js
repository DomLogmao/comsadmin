"use strict";(self.webpackChunkcomsadmin=self.webpackChunkcomsadmin||[]).push([[903],{8903:(m,g,r)=>{r.r(g),r.d(g,{DashboardModule:()=>v});var Z=r(6814),d=r(2030),n=r(6512),t=r(5879),o=r(266),l=r(742);const u=[{path:"",redirectTo:"main",pathMatch:"full"},{path:"main",component:(()=>{class a{ngOnInit(){this.chart1(),this.chart2(),this.chart3()}chart1(){this.lineChartOptions={series:[{name:"Data 1",data:[80,250,30,120,260,100,180]},{name:"Data 2",data:[85,130,85,225,80,190,120]}],chart:{height:350,type:"line",foreColor:"#9aa0ac",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},toolbar:{show:!1}},colors:["#6777EF","#8B8697"],stroke:{curve:"smooth"},grid:{row:{colors:["transparent","transparent"],opacity:.5},borderColor:"#9aa0ac"},fill:{type:"gradient",gradient:{gradientToColors:["#54CA68","#EF447C"],stops:[0,50,65,91]}},markers:{size:3},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul"]},yaxis:{},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},tooltip:{theme:"dark",marker:{show:!0},x:{show:!0}}}}chart2(){this.barChartOptions={series:[{name:"Males",data:[2.4,4.65,2.88,2.9,3.9,2.2,3,4.1,3.9,3]},{name:"Females",data:[-3.8,-3.18,-2.4,-3.7,-3.96,-2.3,-3.1,-4,-4.1,-2.8]}],chart:{type:"bar",height:350,stacked:!0,toolbar:{show:!1},foreColor:"#9aa0ac"},colors:["#6236AF","#F02769"],plotOptions:{bar:{horizontal:!1,barHeight:"80%",columnWidth:"30%",borderRadius:5}},dataLabels:{enabled:!1},stroke:{width:1,colors:["#fff"]},grid:{xaxis:{lines:{show:!1}},borderColor:"#9aa0ac"},yaxis:{min:-5,max:5,title:{}},tooltip:{shared:!1,theme:"dark",x:{formatter:function(i){return i.toString()}},y:{formatter:function(i){return i.toString()+"%"}}},xaxis:{categories:["90+","80-89","70-79","60-69","50-59","40-49","30-39","20-29","10-19","0-9"],title:{text:"Percent"},labels:{formatter:function(i){return Math.abs(Math.round(parseInt(i,10)))+"%"}}}}}chart3(){this.stackBarChart={series:[{name:"Data 1",data:[44,55,41,67,22,43]},{name:"Data 2",data:[13,23,20,8,13,27]},{name:"Data 3",data:[11,17,15,15,21,14]},{name:"Data 4",data:[21,7,25,13,22,8]}],chart:{type:"bar",height:310,foreColor:"#9aa0ac",stacked:!0,toolbar:{show:!1}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1,columnWidth:"20%"}},dataLabels:{enabled:!1},grid:{borderColor:"#9aa0ac"},xaxis:{type:"category",categories:["Mon","Tue","Wed","Thu","Fri","Sat"]},legend:{show:!1},fill:{opacity:1,colors:["#F0457D","#704DAD","#FFC107","#a5a5a5"]}}}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-main"]],decls:202,vars:36,consts:[[1,"main-content"],[1,"breadcrumb","breadcrumb-style"],[1,"breadcrumb-item"],[1,"page-title","m-b-0"],[1,"breadcrumb-item","bcrumb-1"],["routerLink","/dashboard/main"],[1,"fas","fa-home","font-17"],[1,"section-body"],[1,"row"],[1,"col-xl-3","col-lg-6","col-md-6","col-sm-6","col-xs-12"],[1,"card"],[1,"card-statistic-4"],[1,"align-items-center","justify-content-between"],[1,"col-lg-6","col-md-6","col-sm-6","col-xs-6","left-grid-spacing"],[1,"card-content"],[1,"font-20"],[1,"mb-3","font-18"],[1,"mb-0"],[1,"col-green"],["type","success","height",".3rem",3,"value"],[1,"col-lg-6","col-md-6","col-sm-6","col-xs-6","right-grid-spacing"],[1,"banner-img"],["src","assets/images/banner/1.png","alt",""],[1,"col-orange"],["type","warning","height",".3rem",3,"value"],["src","assets/images/banner/2.png","alt",""],[1,"col-red"],["type","danger","height",".3rem",3,"value"],["src","assets/images/banner/4.png","alt",""],[1,"col-md-12","col-lg-6","col-xl-6"],[1,"card-header"],[1,"card-body"],[3,"series","chart","xaxis","stroke","colors","dataLabels","legend","tooltip","markers","grid","yaxis","title","fill"],[3,"series","chart","dataLabels","stroke","colors","title","grid","tooltip","plotOptions","yaxis","xaxis"],[1,"col-xl-4","col-lg-4","col-md-12","col-sm-12"],[1,"card","gradient-bottom"],["id","top-5-scroll",1,"card-body"],["visibility","hover",2,"height","320px"],[1,"list-unstyled","list-unstyled-border"],[1,"product-list"],["width","55","src","assets/images/products/product-3.png","alt","product",1,"msr-3","rounded"],[1,"set-flex"],[1,"float-end"],[1,"font-weight-600","text-muted","text-small"],[1,"fw-bold","font-15"],[1,"mt-1"],[1,"budget-price"],[1,"budget-price-square","bg-primary",2,"width","60%"],[1,"budget-price-label"],[1,"budget-price-square","bg-danger",2,"width","40%"],["width","55","src","assets/images/products/product-4.png","alt","product",1,"msr-3","rounded"],[1,"budget-price-square","bg-primary",2,"width","78%"],[1,"budget-price-square","bg-danger",2,"width","55%"],["width","55","src","assets/images/products/product-1.png","alt","product",1,"msr-3","rounded"],[1,"budget-price-square","bg-primary",2,"width","38%"],[1,"budget-price-square","bg-danger",2,"width","25%"],["width","55","src","assets/images/products/product-2.png","alt","product",1,"msr-3","rounded"],[1,"budget-price-square","bg-primary",2,"width","48%"],[1,"budget-price-square","bg-danger",2,"width","33%"],["width","55","src","assets/images/products/product-5.png","alt","product",1,"msr-3","rounded"],[1,"budget-price-square","bg-primary",2,"width","91%"],[1,"budget-price-square","bg-danger",2,"width","74%"],[1,"card-footer","pt-3","d-flex","justify-content-center"],[1,"budget-price","justify-content-center"],["data-width","20",1,"budget-price-square","bg-primary"],["data-width","20",1,"budget-price-square","bg-danger"],[3,"series","chart","dataLabels","plotOptions","grid","responsive","xaxis","legend","fill"],[1,"row","text-center","ml-0","msr-0","pb-3"],[1,"col-6","border-right"],[1,"h4","fw-bold","mb-0"],[1,"small","text-gray"],[1,"col-6"]],template:function(i,e){1&i&&(t.TgZ(0,"section",0)(1,"ul",1)(2,"li",2)(3,"h5",3),t._uU(4,"Dashboard"),t.qZA()(),t.TgZ(5,"li",4)(6,"a",5),t._UZ(7,"i",6),t.qZA()(),t.TgZ(8,"li",2),t._uU(9,"Dashboard"),t.qZA()(),t.TgZ(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",8)(17,"div",13)(18,"div",14)(19,"h5",15),t._uU(20,"New Agents"),t.qZA(),t.TgZ(21,"h2",16),t._uU(22,"258"),t.qZA(),t.TgZ(23,"p",17)(24,"span",18),t._uU(25,"42%"),t.qZA()()(),t._UZ(26,"ngb-progressbar",19),t.qZA(),t.TgZ(27,"div",20)(28,"div",21),t._UZ(29,"img",22),t.qZA()()()()()()(),t.TgZ(30,"div",9)(31,"div",10)(32,"div",11)(33,"div",12)(34,"div",8)(35,"div",13)(36,"div",14)(37,"h5",15),t._uU(38," Developers"),t.qZA(),t.TgZ(39,"h2",16),t._uU(40,"1,287"),t.qZA(),t.TgZ(41,"p",17)(42,"span",23),t._uU(43,"33%"),t.qZA()()(),t._UZ(44,"ngb-progressbar",24),t.qZA(),t.TgZ(45,"div",20)(46,"div",21),t._UZ(47,"img",25),t.qZA()()()()()()(),t.TgZ(48,"div",9)(49,"div",10)(50,"div",11)(51,"div",12)(52,"div",8)(53,"div",13)(54,"div",14)(55,"h5",15),t._uU(56,"Sales"),t.qZA(),t.TgZ(57,"h2",16),t._uU(58,"PHP48,697"),t.qZA(),t.TgZ(59,"p",17)(60,"span",26),t._uU(61,"65%"),t.qZA()()(),t._UZ(62,"ngb-progressbar",27),t.qZA(),t.TgZ(63,"div",20)(64,"div",21),t._UZ(65,"img",28),t.qZA()()()()()()()(),t.TgZ(66,"div",8)(67,"div",29)(68,"div",10)(69,"div",30)(70,"h4"),t._uU(71,"Sales Chart"),t.qZA()(),t.TgZ(72,"div",31),t._UZ(73,"apx-chart",32),t.qZA()()(),t.TgZ(74,"div",29)(75,"div",10)(76,"div",30)(77,"h4"),t._uU(78,"Agents Chart"),t.qZA()(),t.TgZ(79,"div",31),t._UZ(80,"apx-chart",33),t.qZA()()()(),t.TgZ(81,"div",8)(82,"div",34)(83,"div",35)(84,"div",30)(85,"h4"),t._uU(86,"Top 5 Agents"),t.qZA()(),t.TgZ(87,"div",36)(88,"ng-scrollbar",37)(89,"ul",38)(90,"li",39),t._UZ(91,"img",40),t.TgZ(92,"div",41)(93,"div",42)(94,"div",43),t._uU(95,"112 Sales"),t.qZA()(),t.TgZ(96,"div",44),t._uU(97,"Juanito Camacho"),t.qZA(),t.TgZ(98,"div",45)(99,"div",46),t._UZ(100,"div",47),t.TgZ(101,"div",48),t._uU(102,"PHP24,897"),t.qZA()(),t.TgZ(103,"div",46),t._UZ(104,"div",49),t.TgZ(105,"div",48),t._uU(106,"PHP18,865"),t.qZA()()()()(),t.TgZ(107,"li",39),t._UZ(108,"img",50),t.TgZ(109,"div",41)(110,"div",42)(111,"div",43),t._uU(112,"49 Sales"),t.qZA()(),t.TgZ(113,"div",44),t._uU(114,"Josephine Bracken"),t.qZA(),t.TgZ(115,"div",45)(116,"div",46),t._UZ(117,"div",51),t.TgZ(118,"div",48),t._uU(119,"PHP74,568"),t.qZA()(),t.TgZ(120,"div",46),t._UZ(121,"div",52),t.TgZ(122,"div",48),t._uU(123,"PHP65,892"),t.qZA()()()()(),t.TgZ(124,"li",39),t._UZ(125,"img",53),t.TgZ(126,"div",41)(127,"div",42)(128,"div",43),t._uU(129,"63 Sales"),t.qZA()(),t.TgZ(130,"div",44),t._uU(131,"John Doe"),t.qZA(),t.TgZ(132,"div",45)(133,"div",46),t._UZ(134,"div",54),t.TgZ(135,"div",48),t._uU(136,"PHP2,859"),t.qZA()(),t.TgZ(137,"div",46),t._UZ(138,"div",55),t.TgZ(139,"div",48),t._uU(140,"PHP1,872"),t.qZA()()()()(),t.TgZ(141,"li",39),t._UZ(142,"img",56),t.TgZ(143,"div",41)(144,"div",42)(145,"div",43),t._uU(146,"28 Sales"),t.qZA()(),t.TgZ(147,"div",44),t._uU(148,"Elizabeth Turner"),t.qZA(),t.TgZ(149,"div",45)(150,"div",46),t._UZ(151,"div",57),t.TgZ(152,"div",48),t._uU(153,"PHP11,238"),t.qZA()(),t.TgZ(154,"div",46),t._UZ(155,"div",58),t.TgZ(156,"div",48),t._uU(157,"PHP7,564"),t.qZA()()()()(),t.TgZ(158,"li",39),t._UZ(159,"img",59),t.TgZ(160,"div",41)(161,"div",42)(162,"div",43),t._uU(163,"19 Sales"),t.qZA()(),t.TgZ(164,"div",44),t._uU(165,"Edward Teach"),t.qZA(),t.TgZ(166,"div",45)(167,"div",46),t._UZ(168,"div",60),t.TgZ(169,"div",48),t._uU(170,"PHP7,285"),t.qZA()(),t.TgZ(171,"div",46),t._UZ(172,"div",61),t.TgZ(173,"div",48),t._uU(174,"PHP5,147"),t.qZA()()()()()()()(),t.TgZ(175,"div",62)(176,"div",63),t._UZ(177,"div",64),t.TgZ(178,"div",48),t._uU(179,"Selling Price"),t.qZA()(),t.TgZ(180,"div",63),t._UZ(181,"div",65),t.TgZ(182,"div",48),t._uU(183,"Product Cost"),t.qZA()()()()(),t.TgZ(184,"div",34)(185,"div",10)(186,"div",30)(187,"h4"),t._uU(188,"Chart Data"),t.qZA()(),t.TgZ(189,"div",31),t._UZ(190,"apx-chart",66),t.TgZ(191,"div",67)(192,"div",68)(193,"div",69),t._uU(194,"30%"),t.qZA(),t.TgZ(195,"span",70),t._uU(196,"Last week"),t.qZA()(),t.TgZ(197,"div",71)(198,"div",69),t._uU(199,"70%"),t.qZA(),t.TgZ(200,"span",70),t._uU(201,"Last month"),t.qZA()()()()()()()()()),2&i&&(t.xp6(26),t.Q6J("value",42),t.xp6(18),t.Q6J("value",33),t.xp6(18),t.Q6J("value",65),t.xp6(11),t.Q6J("series",e.lineChartOptions.series)("chart",e.lineChartOptions.chart)("xaxis",e.lineChartOptions.xaxis)("stroke",e.lineChartOptions.stroke)("colors",e.lineChartOptions.colors)("dataLabels",e.lineChartOptions.dataLabels)("legend",e.lineChartOptions.legend)("tooltip",e.lineChartOptions.tooltip)("markers",e.lineChartOptions.markers)("grid",e.lineChartOptions.grid)("yaxis",e.lineChartOptions.yaxis)("title",e.lineChartOptions.title)("fill",e.lineChartOptions.fill),t.xp6(7),t.Q6J("series",e.barChartOptions.series)("chart",e.barChartOptions.chart)("dataLabels",e.barChartOptions.dataLabels)("stroke",e.barChartOptions.stroke)("colors",e.barChartOptions.colors)("title",e.barChartOptions.title)("grid",e.barChartOptions.grid)("tooltip",e.barChartOptions.tooltip)("plotOptions",e.barChartOptions.plotOptions)("yaxis",e.barChartOptions.yaxis)("xaxis",e.barChartOptions.xaxis),t.xp6(110),t.Q6J("series",e.stackBarChart.series)("chart",e.stackBarChart.chart)("dataLabels",e.stackBarChart.dataLabels)("plotOptions",e.stackBarChart.plotOptions)("grid",e.stackBarChart.grid)("responsive",e.stackBarChart.responsive)("xaxis",e.stackBarChart.xaxis)("legend",e.stackBarChart.legend)("fill",e.stackBarChart.fill))},dependencies:[d.Ly,o.rH,n.KC,l.x]}),a})()},{path:"dashboard2",component:(()=>{class a{constructor(){this.sampleData=[31,40,28,44,60,55,68,51,42,85,77,31,40,28,44,60,55]}ngOnInit(){this.chart1(),this.cardChart1(),this.piechart(),this.gaugechart()}chart1(){this.lineChartOptions={series:[{name:"Income",type:"area",data:[220,410,66,324,630,178,389]},{name:"Sales",type:"line",data:[26,45,12,37,68,22,42]}],chart:{height:300,type:"area",foreColor:"#9aa0ac",toolbar:{show:!1}},fill:{type:"solid",opacity:[.35,1]},stroke:{width:[0,4],curve:"smooth"},labels:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],markers:{size:0},colors:["#999999","#6777EF"],dataLabels:{enabled:!0,enabledOnSeries:[1,2]},grid:{borderColor:"#9aa0ac"},yaxis:[{title:{text:"Income"}},{opposite:!0,title:{text:"Sales"}}],xaxis:{labels:{trim:!1}},tooltip:{theme:"dark",marker:{show:!0},x:{show:!0}}}}cardChart1(){this.smallBarChart={chart:{type:"bar",width:200,height:80,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"40%"}},series:[{name:"income",data:this.sampleData}],tooltip:{fixed:{enabled:!1},x:{show:!1},y:{},marker:{show:!1}}}}piechart(){this.pieChartOptions={series2:[18,22,14,31,15],chart:{type:"donut",width:280},legend:{show:!1},dataLabels:{enabled:!1},plotOptions:{pie:{donut:{size:"65%",background:"transparent",labels:{show:!0,name:{show:!0,fontSize:"22px",fontWeight:600},value:{show:!0,fontSize:"16px",fontWeight:400,color:"#9aa0ac"},total:{show:!0,showAlways:!1,label:"Total",fontSize:"22px",fontWeight:600,color:"#6777EF"}}}}},colors:["#9A8BE7","#2AC3CB","#FFAA00","#FA62BB","#FFD000"],labels:["Project 1","Project 2","Project 3","Project 4","Project 5"],responsive:[{breakpoint:480,options:{}}]}}gaugechart(){this.gaugeChartOptions={series2:[72],chart:{height:260,type:"radialBar",offsetY:-10},plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"22px",fontWeight:600,color:"#6777EF",offsetY:120},value:{offsetY:76,fontSize:"22px",color:"#9aa0ac",formatter:function(i){return i+"%"}}}}},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},labels:["Closed Ticket"]}}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-dashboard2"]],decls:361,vars:29,consts:[[1,"main-content"],[1,"breadcrumb","breadcrumb-style"],[1,"breadcrumb-item"],[1,"page-title","m-b-0"],[1,"breadcrumb-item","bcrumb-1"],["routerLink","/dashboard/main"],[1,"fas","fa-home","font-17"],[1,"section-body"],[1,"row"],[1,"col-md-12","col-lg-8","col-xl-8"],[1,"card"],[1,"card-header"],[1,"card-body"],[3,"series","chart","yaxis","xaxis","labels","dataLabels","colors","grid","stroke","markers","fill","tooltip"],[1,"col-md-12","col-lg-4","col-xl-4"],[1,"col"],[1,"m-b-5"],[1,"font-light","col-green"],[1,"col-auto"],[1,"bg-orange","text-white","icon-box-style"],[1,"fas","fa-shopping-bag"],[1,"apex-chart-center"],[3,"series","chart","plotOptions","tooltip"],[1,"m-b-0"],[1,"font-16","text-success"],[1,"bg-green","text-white","icon-box-style"],[1,"fas","fa-user-friends"],[1,"m-t-30"],[1,"row","text-center"],[1,"col-6","border-right"],[1,"font-14","text-muted"],[1,"col-6"],["id","chart"],[1,"apex-pie-center",3,"series","chart","labels","colors","dataLabels","plotOptions","legend"],[1,"table-responsive","m-t-15"],[1,"table","align-items-center"],[1,"tbl-row-border"],[1,"fa","fa-circle","col-blue","msr-2"],[1,"col-green"],[1,"fa","fa-circle","col-cyan","msr-2"],[1,"col-orange"],[1,"fa","fa-circle","col-orange","msr-2"],[1,"fa","fa-circle","col-pink","msr-2"],[1,"fa","fa-circle","col-amber","msr-2"],["visibility","hover",2,"height","470px"],["id","client-details",1,"tableBody"],[1,"table-responsive"],[1,"table","table-hover","dashboard-task-infos"],[1,"table-img"],["src","assets/images/users/user-5.png","alt",""],[1,"badge-outline","col-orange"],["src","assets/images/users/user-1.png","alt",""],[1,"badge-outline","col-blue"],["src","assets/images/users/user-4.png","alt",""],[1,"badge-outline","col-green"],["src","assets/images/users/user-6.png","alt",""],["src","assets/images/users/user-9.png","alt",""],["src","assets/images/users/user-3.png","alt",""],["src","assets/images/users/user-7.png","alt",""],[1,"list-unstyled","list-unstyled-border","list-unstyled-noborder"],[1,"support-list","pb-1"],["alt","image","width","40","src","assets/images/users/user-1.png",1,"msr-3","rounded-circle"],[1,"set-flex"],[1,"float-end"],[1,"status-label","col-blue","font-13"],[1,"fw-bold","mb-1"],[1,"media-description","font-13"],[1,"time","font-10"],["alt","image","width","40","src","assets/images/users/user-2.png",1,"msr-3","rounded-circle"],[1,"status-label","col-orange","font-13"],["alt","image","width","40","src","assets/images/users/user-7.png",1,"msr-3","rounded-circle"],[1,"status-label","col-green","font-13"],["alt","image","width","40","src","assets/images/users/user-5.png",1,"msr-3","rounded-circle"],[1,"row","align-items-center","justify-content-center"],["width","50","src","assets/images/users/user-5.png","alt","",1,"img-fluid","rounded-circle","act-user-img"],[1,"mb-0"],[1,"font-12"],[1,"activity-list"],[1,"task-icon","bg-green"],[1,"float-end","font-12","text-muted"],[1,"text-muted"],[1,"task-icon","bg-red"],[1,"task-icon","bg-cyan"],[1,"task-icon","bg-orange"],[3,"series","chart","plotOptions","labels","fill","stroke"],[1,"col-4","border-right"],[1,"col-4"]],template:function(i,e){1&i&&(t.TgZ(0,"section",0)(1,"ul",1)(2,"li",2)(3,"h5",3),t._uU(4,"Dashboard"),t.qZA()(),t.TgZ(5,"li",4)(6,"a",5),t._UZ(7,"i",6),t.qZA()(),t.TgZ(8,"li",2),t._uU(9,"Dashboard 2"),t.qZA()(),t.TgZ(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"h4"),t._uU(16,"Chart Sample"),t.qZA()(),t.TgZ(17,"div",12),t._UZ(18,"apx-chart",13),t.qZA()()(),t.TgZ(19,"div",14)(20,"div",10)(21,"div",12)(22,"div",8)(23,"div",15)(24,"h5",16),t._uU(25,"Online Sales"),t.qZA(),t.TgZ(26,"h3",17),t._uU(27,"$237.45"),t.qZA()(),t.TgZ(28,"div",18)(29,"div",19),t._UZ(30,"i",20),t.qZA()()(),t.TgZ(31,"div",21),t._UZ(32,"apx-chart",22),t.qZA()()(),t.TgZ(33,"div",10)(34,"div",12)(35,"div",8)(36,"div",15)(37,"h5",23),t._uU(38,"Users"),t.qZA(),t.TgZ(39,"h3"),t._uU(40,"11,506 "),t.TgZ(41,"span",24),t._uU(42,"+18%"),t.qZA()()(),t.TgZ(43,"div",18)(44,"div",25),t._UZ(45,"i",26),t.qZA()()(),t.TgZ(46,"div",27)(47,"div",28)(48,"div",29)(49,"h4",23),t._uU(50,"72%"),t.qZA(),t.TgZ(51,"span",30),t._uU(52,"New Users"),t.qZA()(),t.TgZ(53,"div",31)(54,"h4",23),t._uU(55,"28%"),t.qZA(),t.TgZ(56,"span",30),t._uU(57,"Repeat Users"),t.qZA()()()()()()()(),t.TgZ(58,"div",8)(59,"div",14)(60,"div",10)(61,"div",11)(62,"h4"),t._uU(63,"Project Analysis"),t.qZA()(),t.TgZ(64,"div",12)(65,"div",32),t._UZ(66,"apx-chart",33),t.qZA(),t.TgZ(67,"div",34)(68,"table",35)(69,"tbody")(70,"tr",36)(71,"td"),t._UZ(72,"i",37),t._uU(73,"Project 1"),t.qZA(),t.TgZ(74,"td"),t._uU(75,"18"),t.qZA(),t.TgZ(76,"td",38),t._uU(77,"+12%"),t.qZA()(),t.TgZ(78,"tr",36)(79,"td"),t._UZ(80,"i",39),t._uU(81,"Project 2"),t.qZA(),t.TgZ(82,"td"),t._uU(83,"22"),t.qZA(),t.TgZ(84,"td",40),t._uU(85,"-12%"),t.qZA()(),t.TgZ(86,"tr",36)(87,"td"),t._UZ(88,"i",41),t._uU(89,"Project 3"),t.qZA(),t.TgZ(90,"td"),t._uU(91,"14"),t.qZA(),t.TgZ(92,"td",38),t._uU(93,"+3%"),t.qZA()(),t.TgZ(94,"tr",36)(95,"td"),t._UZ(96,"i",42),t._uU(97,"Project 4"),t.qZA(),t.TgZ(98,"td"),t._uU(99,"31"),t.qZA(),t.TgZ(100,"td",38),t._uU(101,"+7%"),t.qZA()(),t.TgZ(102,"tr",36)(103,"td"),t._UZ(104,"i",43),t._uU(105,"Project 5"),t.qZA(),t.TgZ(106,"td"),t._uU(107,"15"),t.qZA(),t.TgZ(108,"td",40),t._uU(109,"-11%"),t.qZA()()()()()()()(),t.TgZ(110,"div",9)(111,"div",10)(112,"div",11)(113,"h4"),t._uU(114,"Recent Order"),t.qZA()(),t.TgZ(115,"div",12)(116,"ng-scrollbar",44)(117,"div",45)(118,"div",46)(119,"table",47)(120,"thead")(121,"tr")(122,"th"),t._uU(123,"Img"),t.qZA(),t.TgZ(124,"th"),t._uU(125,"Order No"),t.qZA(),t.TgZ(126,"th"),t._uU(127,"Customer Name"),t.qZA(),t.TgZ(128,"th"),t._uU(129,"Order Date"),t.qZA(),t.TgZ(130,"th"),t._uU(131,"Status"),t.qZA(),t.TgZ(132,"th"),t._uU(133,"Amount"),t.qZA()()(),t.TgZ(134,"tbody")(135,"tr")(136,"td",48),t._UZ(137,"img",49),t.qZA(),t.TgZ(138,"td"),t._uU(139,"XY56987"),t.qZA(),t.TgZ(140,"td"),t._uU(141,"Alis Smith"),t.qZA(),t.TgZ(142,"td"),t._uU(143,"22-09-2019"),t.qZA(),t.TgZ(144,"td")(145,"span",50),t._uU(146,"Cancelled"),t.qZA()(),t.TgZ(147,"td"),t._uU(148,"$223"),t.qZA()(),t.TgZ(149,"tr")(150,"td",48),t._UZ(151,"img",51),t.qZA(),t.TgZ(152,"td"),t._uU(153,"XY12587"),t.qZA(),t.TgZ(154,"td"),t._uU(155,"Pooja Sarma"),t.qZA(),t.TgZ(156,"td"),t._uU(157,"11-09-2019"),t.qZA(),t.TgZ(158,"td")(159,"span",52),t._uU(160,"Pending"),t.qZA()(),t.TgZ(161,"td"),t._uU(162,"$124"),t.qZA()(),t.TgZ(163,"tr")(164,"td",48),t._UZ(165,"img",53),t.qZA(),t.TgZ(166,"td"),t._uU(167,"XY58987"),t.qZA(),t.TgZ(168,"td"),t._uU(169,"John Doe"),t.qZA(),t.TgZ(170,"td"),t._uU(171,"18-09-2019"),t.qZA(),t.TgZ(172,"td")(173,"span",54),t._uU(174,"Completed"),t.qZA()(),t.TgZ(175,"td"),t._uU(176,"$178"),t.qZA()(),t.TgZ(177,"tr")(178,"td",48),t._UZ(179,"img",55),t.qZA(),t.TgZ(180,"td"),t._uU(181,"XY56987"),t.qZA(),t.TgZ(182,"td"),t._uU(183,"Cara Stevens"),t.qZA(),t.TgZ(184,"td"),t._uU(185,"16-09-2019"),t.qZA(),t.TgZ(186,"td")(187,"span",50),t._uU(188,"Cancelled"),t.qZA()(),t.TgZ(189,"td"),t._uU(190,"$265"),t.qZA()(),t.TgZ(191,"tr")(192,"td",48),t._UZ(193,"img",56),t.qZA(),t.TgZ(194,"td"),t._uU(195,"XY12587"),t.qZA(),t.TgZ(196,"td"),t._uU(197,"Priya Mehta"),t.qZA(),t.TgZ(198,"td"),t._uU(199,"23-09-2019"),t.qZA(),t.TgZ(200,"td")(201,"span",54),t._uU(202,"Completed"),t.qZA()(),t.TgZ(203,"td"),t._uU(204,"$321"),t.qZA()(),t.TgZ(205,"tr")(206,"td",48),t._UZ(207,"img",57),t.qZA(),t.TgZ(208,"td"),t._uU(209,"XY58987"),t.qZA(),t.TgZ(210,"td"),t._uU(211,"Ashton Cox"),t.qZA(),t.TgZ(212,"td"),t._uU(213,"28-09-2019"),t.qZA(),t.TgZ(214,"td")(215,"span",50),t._uU(216,"Cancelled"),t.qZA()(),t.TgZ(217,"td"),t._uU(218,"$321"),t.qZA()(),t.TgZ(219,"tr")(220,"td",48),t._UZ(221,"img",58),t.qZA(),t.TgZ(222,"td"),t._uU(223,"XY3785"),t.qZA(),t.TgZ(224,"td"),t._uU(225,"Cara Stevens"),t.qZA(),t.TgZ(226,"td"),t._uU(227,"19-09-2019"),t.qZA(),t.TgZ(228,"td")(229,"span",52),t._uU(230,"Pending"),t.qZA()(),t.TgZ(231,"td"),t._uU(232,"$152"),t.qZA()()()()()()()()()()(),t.TgZ(233,"div",8)(234,"div",14)(235,"div",10)(236,"div",11)(237,"h4"),t._uU(238,"Support Requests"),t.qZA()(),t.TgZ(239,"div",12)(240,"ul",59)(241,"li",60),t._UZ(242,"img",61),t.TgZ(243,"div",62)(244,"div",63)(245,"div",64),t._uU(246,"Open"),t.qZA()(),t.TgZ(247,"div",65),t._uU(248,"Cara Stevens"),t.qZA(),t.TgZ(249,"div",66),t._uU(250,"Error while run the project, please solve it..."),t.qZA(),t.TgZ(251,"span",67),t._uU(252,"2 Min Ago"),t.qZA()()(),t.TgZ(253,"li",60),t._UZ(254,"img",68),t.TgZ(255,"div",62)(256,"div",63)(257,"div",69),t._uU(258,"Pending"),t.qZA()(),t.TgZ(259,"div",65),t._uU(260,"Priya Mehta"),t.qZA(),t.TgZ(261,"div",66),t._uU(262,"Thanks for your support regarding this issues..."),t.qZA(),t.TgZ(263,"span",67),t._uU(264,"10 Min Ago"),t.qZA()()(),t.TgZ(265,"li",60),t._UZ(266,"img",70),t.TgZ(267,"div",62)(268,"div",63)(269,"div",71),t._uU(270,"Solved"),t.qZA()(),t.TgZ(271,"div",65),t._uU(272,"Ashton Cox"),t.qZA(),t.TgZ(273,"div",66),t._uU(274,"Image upload error during save, check error log... "),t.qZA(),t.TgZ(275,"span",67),t._uU(276,"32 Min Ago"),t.qZA()()(),t.TgZ(277,"li",60),t._UZ(278,"img",72),t.TgZ(279,"div",62)(280,"div",63)(281,"div",64),t._uU(282,"Open"),t.qZA()(),t.TgZ(283,"div",65),t._uU(284,"Pooja Sarma"),t.qZA(),t.TgZ(285,"div",66),t._uU(286,"Live preview url not working, please check it..."),t.qZA(),t.TgZ(287,"span",67),t._uU(288,"44 Min Ago"),t.qZA()()()()()()(),t.TgZ(289,"div",14)(290,"div",10)(291,"div",11)(292,"h4"),t._uU(293,"Activity"),t.qZA()(),t.TgZ(294,"div",12)(295,"div",73)(296,"div",18),t._UZ(297,"img",74),t.qZA(),t.TgZ(298,"div",15)(299,"h5",75),t._uU(300,"John Doe"),t.qZA(),t.TgZ(301,"span",76),t._uU(302,"UX Designer"),t.qZA()()(),t.TgZ(303,"ul",77)(304,"li"),t._UZ(305,"i",78),t.TgZ(306,"h6",75),t._uU(307," Angelica Ramos"),t.TgZ(308,"span",79),t._uU(309,"15 Jan"),t.qZA()(),t.TgZ(310,"p",80),t._uU(311,"In it except to so temper mutual tastes\u2026"),t.qZA()(),t.TgZ(312,"li"),t._UZ(313,"i",81),t.TgZ(314,"h6",75),t._uU(315," Sarah Smith"),t.TgZ(316,"span",79),t._uU(317,"21 Jan"),t.qZA()(),t.TgZ(318,"p",80),t._uU(319,"Had denoting properly jointure you\u2026"),t.qZA()(),t.TgZ(320,"li"),t._UZ(321,"i",82),t.TgZ(322,"h6",75),t._uU(323," Ashton Cox"),t.TgZ(324,"span",79),t._uU(325,"28 Jan"),t.qZA()(),t.TgZ(326,"p",80),t._uU(327,"Now who promise was justice new winding\u2026"),t.qZA()(),t.TgZ(328,"li"),t._UZ(329,"i",83),t.TgZ(330,"h6",75),t._uU(331," Cara Stevens"),t.TgZ(332,"span",79),t._uU(333,"31 Jan"),t.qZA()(),t.TgZ(334,"p",80),t._uU(335,"An concluded sportsman offending so\u2026"),t.qZA()()()()()(),t.TgZ(336,"div",14)(337,"div",10)(338,"div",11)(339,"h4"),t._uU(340,"Ticket Status"),t.qZA()(),t.TgZ(341,"div",12)(342,"div",32),t._UZ(343,"apx-chart",84),t.qZA(),t.TgZ(344,"div",27)(345,"div",28)(346,"div",85)(347,"h4",23),t._uU(348,"67%"),t.qZA(),t.TgZ(349,"span",30),t._uU(350,"New Ticket"),t.qZA()(),t.TgZ(351,"div",85)(352,"h4",23),t._uU(353,"33%"),t.qZA(),t.TgZ(354,"span",30),t._uU(355,"Repeat Ticket"),t.qZA()(),t.TgZ(356,"div",86)(357,"h4",23),t._uU(358,"1 Day"),t.qZA(),t.TgZ(359,"span",30),t._uU(360,"Duration"),t.qZA()()()()()()()()()()),2&i&&(t.xp6(18),t.Q6J("series",e.lineChartOptions.series)("chart",e.lineChartOptions.chart)("yaxis",e.lineChartOptions.yaxis)("xaxis",e.lineChartOptions.xaxis)("labels",e.lineChartOptions.labels)("dataLabels",e.lineChartOptions.dataLabels)("colors",e.lineChartOptions.colors)("grid",e.lineChartOptions.grid)("stroke",e.lineChartOptions.stroke)("markers",e.lineChartOptions.markers)("fill",e.lineChartOptions.fill)("tooltip",e.lineChartOptions.tooltip),t.xp6(14),t.Q6J("series",e.smallBarChart.series)("chart",e.smallBarChart.chart)("plotOptions",e.smallBarChart.plotOptions)("tooltip",e.smallBarChart.tooltip),t.xp6(34),t.Q6J("series",e.pieChartOptions.series2)("chart",e.pieChartOptions.chart)("labels",e.pieChartOptions.labels)("colors",e.pieChartOptions.colors)("dataLabels",e.pieChartOptions.dataLabels)("plotOptions",e.pieChartOptions.plotOptions)("legend",e.pieChartOptions.legend),t.xp6(277),t.Q6J("series",e.gaugeChartOptions.series2)("chart",e.gaugeChartOptions.chart)("plotOptions",e.gaugeChartOptions.plotOptions)("labels",e.gaugeChartOptions.labels)("fill",e.gaugeChartOptions.fill)("stroke",e.gaugeChartOptions.stroke))},dependencies:[o.rH,n.KC,l.x]}),a})()}];let p=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[o.Bz.forChild(u),o.Bz]}),a})();var h=r(8635),c=r(5638);let v=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[Z.ez,d.IJ,p,h.Ns.forRoot({echarts:()=>r.e(707).then(r.bind(r,8707))}),n.kb,l.X,d.ZQ,c.ez]}),a})()}}]);