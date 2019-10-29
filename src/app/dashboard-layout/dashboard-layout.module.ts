import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardLayoutRoutingModule } from './dashboard-layout-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardLayoutRoutingModule
  ]
})
export class DashboardLayoutModule { }
