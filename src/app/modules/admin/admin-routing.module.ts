import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmloyeeComponent } from './pages/add-emloyee/add-emloyee.component';
import { AdminDashComponent } from './pages/admin-dash/admin-dash.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UsersComponent } from './pages/users/users.component';
import { AddUpdateComponent } from './pages/add-update/add-update.component';

const routes: Routes = [
{ path: '',component:AdminDashComponent,children:[
  {path: 'home',component: DashboardComponent},
  { path:'reports',component:ReportsComponent },
  { path:'userdetail',component:UserDetailsComponent },
  { path: 'users',component:UsersComponent },
  { path: 'edetails',component:EmployeeDetailsComponent },
  { path: 'edet-add',component:AddEmloyeeComponent },
  { path: 'add',component:AddUpdateComponent },
  { path: 'edet-add/:id',component:AddEmloyeeComponent },
  { path:'' ,redirectTo:'/admin/home',pathMatch:'full'}
] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
