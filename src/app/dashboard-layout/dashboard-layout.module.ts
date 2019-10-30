import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DashboardLayoutRoutingModule } from './dashboard-layout-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    DashboardLayoutRoutingModule
  ]
})
export class DashboardLayoutModule { }
