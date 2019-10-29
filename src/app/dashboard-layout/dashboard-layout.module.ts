import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DashboardLayoutRoutingModule } from './dashboard-layout-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DashboardComponent, UsersComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    DashboardLayoutRoutingModule
  ]
})
export class DashboardLayoutModule { }
