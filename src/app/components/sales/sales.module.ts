import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxGaugeModule } from 'ngx-gauge';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { SalesComponent } from './sales.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SalesViewComponent } from './sales-view/sales-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: SalesComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'sales-view',
        component: SalesViewComponent,
      }
    ]
  },

];
@NgModule({
  declarations: [SalesComponent, SalesViewComponent, ListComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    NgScrollbarModule,
    NgApexchartsModule,
    NgbProgressbarModule,
    NgxGaugeModule,
    NgxDatatableModule
  ],
})
export class SalesModule {}
