import { AddUserComponent } from './pages/add-user/add-user.component';
import { UsersComponent } from './pages/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'add-user', component: AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardLayoutRoutingModule { }
