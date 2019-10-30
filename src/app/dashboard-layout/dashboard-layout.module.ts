import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DashboardLayoutRoutingModule } from './dashboard-layout-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddAttributeComponent } from './pages/add-attribute/add-attribute.component';
import { AttributesComponent } from './pages/attributes/attributes.component';
import { modals } from './pages/modals';


@NgModule({
  entryComponents: [...modals],
  declarations: [
    DashboardComponent,
    UsersComponent,
    AddUserComponent,
    AddAttributeComponent,
    AttributesComponent,
    ...modals
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    DashboardLayoutRoutingModule
  ]
})
export class DashboardLayoutModule { }
