import { UpdateAttributeComponent } from './pages/update-attribute/update-attribute.component';
import { AttributesComponent } from './pages/attributes/attributes.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { UsersComponent } from './pages/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddAttributeComponent } from './pages/add-attribute/add-attribute.component';
import { AddUserAttributeComponent } from './pages/add-user-attribute/add-user-attribute.component';


const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'add-user', component: AddUserComponent
  },
  {
    path: 'attributes', component: AttributesComponent
  },
  {
    path: 'add-attribute', component: AddAttributeComponent
  },
  {
    path: 'update-attribute/:attribute', component: UpdateAttributeComponent
  },
  {
    path: 'update-user-atrribute/:userId', component: AddUserAttributeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardLayoutRoutingModule { }
