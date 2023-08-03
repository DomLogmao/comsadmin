import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'agents',
        loadChildren: () =>
          import('./components/agents/agents.module').then((m) => m.AgentsModule),
      },
      {
        path: 'developer',
        loadChildren: () =>
          import('./components/developer/developer.module').then((m) => m.DeveloperModule),
      },
      {
        path: 'sales',
        loadChildren: () =>
          import('./components/sales/sales.module').then((m) => m.SalesModule),
      },
      {
        path: 'advance-table',
        loadChildren: () =>
          import('./advance-table/advance-table.module').then((m) => m.AdvanceTableModule),
      },
      // {
      //   path: 'extra-pages',
      //   loadChildren: () =>
      //     import('./extra-pages/extra-pages.module').then(
      //       (m) => m.ExtraPagesModule
      //     ),
      // },
      // {
      //   path: 'multilevel',
      //   loadChildren: () =>
      //     import('./multilevel/multilevel.module').then(
      //       (m) => m.MultilevelModule
      //     ),
      // },
    ],
  },

  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
