import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './dashboard-layout/pages/dashboard/dashboard.component';


export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: DashboardLayoutComponent
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
       {
          path: '',
          loadChildren: './dashboard-layout/dashboard-layout.module#DashboardLayoutModule'
       }
    ]
 },
 {
  path: '**',
  redirectTo: 'dashboard'
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
