import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DashboardLayoutRoutingModule } from './dashboard-layout-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddAttributeComponent } from './pages/add-attribute/add-attribute.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    AddUserComponent,
    AddAttributeComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    DashboardLayoutRoutingModule
  ]
})
export class DashboardLayoutModule { }
