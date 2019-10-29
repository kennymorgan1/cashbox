import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';


export const AppRoutes: Routes = [
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
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
