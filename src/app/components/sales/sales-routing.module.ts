
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales.component';
import { SalesViewComponent } from './sales-view/sales-view.component';
import { ListComponent } from './list/list.component';
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
